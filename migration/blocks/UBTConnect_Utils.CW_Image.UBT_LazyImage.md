# UBTConnect_Utils.CW_Image.UBT_LazyImage

- Kind: shared; build screens using it: BookmarksByGroup, ContactByEmailMember, ContactUsDetails, CountryDetails, CountryList, FeedItemDetail, HomeFeed, HouseholdCarousel, HouseholdDetails, Household_Relations, LegacyShareObject, Locality_Details, Menu, MessageDetail, OneSchoolGlobalDetails, Photobook, Profile, Search, SupperMeeting_Carousel, SupperMeeting_Details, Updates_SingleList
- Compiled source: `migration/screens/ContactByEmailMember/analysis/sources/pretty/UBTConnect_Utils.CW_Image.UBT_LazyImage.mvc.js`
- Child blocks: UBTConnectLibrary.ConnectPatterns.LazyImage, UBTConnectLibrary.ConnectPatterns.SkeletonSection (queue: UBTConnectLibrary.ConnectPatterns.LazyImage)

## Inputs

| Input | Type |
|---|---|
| ExtendedClass | Text |
| In_BorderRadius | Text |
| In_HighRes | Boolean |
| HasErrorMessage | Boolean |

## Captured DOM variants (1 distinct, 327 instances)

### Variant 1: ContactByEmailMember/default (×327)

```html
<div class="OSBlockWidget" data-block="CW_Image.UBT_LazyImage" id="$b6">
  <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="b6-$b1"><!-- nested block: 11 nodes --></div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("UBTConnect_Utils.CW_Image.UBT_LazyImage.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "UBTConnectLibrary.model", "react", "OutSystems/ReactView/Main", "UBTConnect_Utils.CW_Image.UBT_LazyImage.mvc$model", "UBTConnect_Utils.CW_Image.UBT_LazyImage.mvc$controller", "UBTConnect_Utils.clientVariables", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.ConnectPatterns.LazyImage.mvc$view", "UBTConnectLibrary.model$AvatarImageFallbackoptionsRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$LazyImageSizeRec", "UBTConnectLibrary.model$ImageBorderOptionsRec", "UBTConnect_Utils.controller$GetEntityType_Icon", "UBTConnect_Utils.controller$GetImageType_FromEntity", "UBTConnect_Utils.controller$Cache_SignedImageURL_Get"], function(OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, UBTConnectLibraryModel, React, OSView, UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_model, UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_controller, UBTConnect_UtilsClientVariables, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, OSWidgets, UBTConnectLibrary_ConnectPatterns_LazyImage_mvc_view) {
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
        View.displayName = "CW_Image.UBT_LazyImage";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, UBTConnectLibrary_ConnectPatterns_LazyImage_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_controller;
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
            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, {
                inputs: {
                    In_IsLoading: !(model.variables.isFetchedVar)
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
                    placeholder_LoadingSection: new PlaceholderContent(function() {
                        return [React.createElement(UBTConnectLibrary_ConnectPatterns_LazyImage_mvc_view, {
                            inputs: {
                                ImageURL: model.variables.localImageURLVar,
                                FallbackPadding: model.variables.localFallbackPaddingVar,
                                In_ImageSize: model.getCachedValue(idService.getId("jAphmcVMs0KdCwYUvGRxsg.In_ImageSize"), function() {
                                    return function() {
                                        var rec = new UBTConnectLibraryModel.LazyImageSizeRec();
                                        rec.heightAttr = model.variables.imageSizeIn.heightAttr;
                                        rec.widthAttr = model.variables.imageSizeIn.widthAttr;
                                        return rec;
                                    }();
                                }, function() {
                                    return model.variables.imageSizeIn.heightAttr;
                                }, function() {
                                    return model.variables.imageSizeIn.widthAttr;
                                }),
                                _in_ImageSizeInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._imageSizeInDataFetchStatus),
                                HasErrorMessage: model.variables.hasErrorMessageIn,
                                _hasErrorMessageInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._hasErrorMessageInDataFetchStatus),
                                In_BorderOptions: model.getCachedValue(idService.getId("jAphmcVMs0KdCwYUvGRxsg.In_BorderOptions"), function() {
                                    return function() {
                                        var rec = new UBTConnectLibraryModel.ImageBorderOptionsRec();
                                        rec.borderRadiusAttr = model.variables.localBorderRadiusVar;
                                        rec.borderColorIdAttr = model.variables.localBorderColorIdVar;
                                        rec.borderSizeIdAttr = model.variables.localBorderSizeIdVar;
                                        return rec;
                                    }();
                                }, function() {
                                    return model.variables.localBorderRadiusVar;
                                }, function() {
                                    return model.variables.localBorderColorIdVar;
                                }, function() {
                                    return model.variables.localBorderSizeIdVar;
                                }),
                                FallbackOptions: model.variables.localFallbackoptionsVar,
                                ExtendedClass: model.getCachedValue(idService.getId("jAphmcVMs0KdCwYUvGRxsg.ExtendedClass"), function() {
                                    return (((model.variables.entityTypeIn === UBTConnect_UtilsModel.staticEntities.connect_Entity.member)) ? (("inline-block ubt-avatar-image" + ((((model.variables.extendedClassIn) !== (""))) ? ((" " + model.variables.extendedClassIn)) : ("")))) : (model.variables.extendedClassIn));
                                }, function() {
                                    return model.variables.entityTypeIn;
                                }, function() {
                                    return model.variables.extendedClassIn;
                                }),
                                _extendedClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._entityTypeInDataFetchStatus, model.variables._extendedClassInDataFetchStatus)
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
                _dependencies: [asPrimitiveValue(model.variables.extendedClassIn), asPrimitiveValue(model.variables.entityTypeIn), asPrimitiveValue(model.variables.localFallbackoptionsVar), asPrimitiveValue(model.variables.localBorderSizeIdVar), asPrimitiveValue(model.variables.localBorderColorIdVar), asPrimitiveValue(model.variables.localBorderRadiusVar), asPrimitiveValue(model.variables.hasErrorMessageIn), asPrimitiveValue(model.variables._extendedClassInDataFetchStatus), asPrimitiveValue(model.variables._entityTypeInDataFetchStatus), asPrimitiveValue(model.variables._hasErrorMessageInDataFetchStatus), asPrimitiveValue(model.variables._imageSizeInDataFetchStatus), asPrimitiveValue(model.variables.imageSizeIn.widthAttr), asPrimitiveValue(model.variables.imageSizeIn.heightAttr), asPrimitiveValue(model.variables.localFallbackPaddingVar), asPrimitiveValue(model.variables.localImageURLVar)]
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
    return View;
});
```
