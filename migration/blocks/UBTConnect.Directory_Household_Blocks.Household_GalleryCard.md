# UBTConnect.Directory_Household_Blocks.Household_GalleryCard

- Kind: shared; build screens using it: HouseholdCarousel, SupperMeeting_Carousel, SupperMeeting_Details
- Compiled source: `migration/screens/SupperMeeting_Carousel/analysis/sources/pretty/UBTConnect.Directory_Household_Blocks.Household_GalleryCard.mvc.js`
- Child blocks: UBTConnectLibrary.ConnectCorePatterns.ImageCard_LazyLoading, UBTConnectLibrary.ConnectPatterns.ImageCard__Content, UBTConnect_Utils.CW_Image.UBT_LazyImage (queue: UBTConnectLibrary.ConnectCorePatterns.ImageCard_LazyLoading, UBTConnectLibrary.ConnectPatterns.ImageCard__Content)

## Inputs

| Input | Type |
|---|---|
| SubdivisionHousehold_GalleryCard | Record UI_SubdivisionHouseholdRec |
| ItemsPerRow | Integer |

## Captured DOM variants (1 distinct, 66 instances)

### Variant 1: SupperMeeting_Carousel/default (×66)

```html
<div class="OSBlockWidget" data-block="Directory_Household_Blocks.Household_GalleryCard" id="b3-l1-1164_0-b2-b1-b1-b9-b1-l1-1258_0-$b5">
  <div class="OSBlockWidget" data-block="ConnectCorePatterns.ImageCard_LazyLoading" id="b3-l1-1164_0-b2-b1-b1-b9-b1-l1-1258_0-b5-Subdivision_Household"><!-- nested block: 30 nodes --></div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("UBTConnect.Directory_Household_Blocks.Household_GalleryCard.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "Connect_Household_CS.model", "UBTConnectLibrary.model", "react", "OutSystems/ReactView/Main", "UBTConnect.Directory_Household_Blocks.Household_GalleryCard.mvc$model", "UBTConnect.Directory_Household_Blocks.Household_GalleryCard.mvc$controller", "UBTConnect.clientVariables", "UBTConnectLibrary.ConnectCorePatterns.ImageCard_LazyLoading.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnect_Utils.CW_Image.UBT_LazyImage.mvc$view", "UBTConnectLibrary.ConnectPatterns.ImageCard__Content.mvc$view", "Connect_Household_CS.model$UI_SubdivisionHouseholdRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect_Household_CS", "UBTConnectLibrary.model$LazyImageSizeRec", "UBTConnect.referencesHealth$UBTConnectLibrary"], function(OutSystems, UBTConnectModel, UBTConnectController, Connect_Household_CSModel, UBTConnectLibraryModel, React, OSView, UBTConnect_Directory_Household_Blocks_Household_GalleryCard_mvc_model, UBTConnect_Directory_Household_Blocks_Household_GalleryCard_mvc_controller, UBTConnectClientVariables, UBTConnectLibrary_ConnectCorePatterns_ImageCard_LazyLoading_mvc_view, OSWidgets, UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view, UBTConnectLibrary_ConnectPatterns_ImageCard__Content_mvc_view) {
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
        View.displayName = "Directory_Household_Blocks.Household_GalleryCard";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_ConnectCorePatterns_ImageCard_LazyLoading_mvc_view, UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view, UBTConnectLibrary_ConnectPatterns_ImageCard__Content_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_Directory_Household_Blocks_Household_GalleryCard_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_Directory_Household_Blocks_Household_GalleryCard_mvc_controller;
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
            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnectLibrary_ConnectCorePatterns_ImageCard_LazyLoading_mvc_view, {
                inputs: {
                    In_ItemsPerRow: model.variables.itemsPerRowIn,
                    _in_ItemsPerRowInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._itemsPerRowInDataFetchStatus),
                    In_ExtendedClass: "gallery-card",
                    In_CardTypeId: UBTConnectModel.staticEntities.uBT_ImageCardType.gallery
                },
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    },
                    event_Click$Action: function() {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);
                            controller.event_OnClick$Action(controller.callContext(eventHandlerContext));
                        }, function() {
                            controller.popDebuggerContext(eventHandlerContext);
                        });
                        ;
                    }
                },
                _validationProps: {
                    validationService: validationService
                },
                _idProps: {
                    service: idService,
                    name: "Subdivision_Household",
                    alias: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                placeholders: {
                    lazyImage_Placeholder: new PlaceholderContent(function() {
                        return [React.createElement(UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view, {
                            inputs: {
                                EntityType: UBTConnectModel.staticEntities.connect_Entity.household,
                                ImageSize: model.getCachedValue(idService.getId("Vo23iptpHEaZwGC4nk7+vA.ImageSize"), function() {
                                    return function() {
                                        var rec = new UBTConnectLibraryModel.LazyImageSizeRec();
                                        rec.widthAttr = UBTConnectModel.staticEntities.uBT_ImageSize.halfWidth_50vw;
                                        return rec;
                                    }();
                                }),
                                EntityId: OS.BuiltinFunctions.longIntegerToText(model.variables.subdivisionHousehold_GalleryCardIn.householdIdAttr),
                                _entityIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._subdivisionHousehold_GalleryCardInDataFetchStatus)
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
                    }),
                    placeholder_ImageTag: PlaceholderContent.Empty,
                    avatarList: PlaceholderContent.Empty,
                    placeholder_Content: new PlaceholderContent(function() {
                        return [React.createElement(UBTConnectLibrary_ConnectPatterns_ImageCard__Content_mvc_view, {
                            inputs: {
                                In_Subtitle: model.variables.subdivisionHousehold_GalleryCardIn.childrenNamesAttr,
                                _in_SubtitleInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._subdivisionHousehold_GalleryCardInDataFetchStatus),
                                In_ShowSubtitle: true,
                                In_Title: model.variables.subdivisionHousehold_GalleryCardIn.householdNameAttr,
                                _in_TitleInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._subdivisionHousehold_GalleryCardInDataFetchStatus)
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
                                alias: "3"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                placeholder_TopSectionContent: PlaceholderContent.Empty,
                                placeholder_BottomSectionContent: PlaceholderContent.Empty
                            },
                            _dependencies: []
                        })];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables._subdivisionHousehold_GalleryCardInDataFetchStatus), asPrimitiveValue(model.variables.subdivisionHousehold_GalleryCardIn.householdNameAttr), asPrimitiveValue(model.variables.subdivisionHousehold_GalleryCardIn.childrenNamesAttr), asPrimitiveValue(model.variables.subdivisionHousehold_GalleryCardIn.householdIdAttr)]
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
    return View;
});
```
