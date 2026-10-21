# UBTConnectLibrary.ConnectPatterns.LazyImage

- Kind: shell; build screens using it: AcceptPendingPolicies, BookmarksByGroup, BrowseCountries, BrowseDirectory, CommunityBusinessDetails_CoomingSoon, ConnectShare, ContactByEmailMember, ContactByEmailOneSchoolGlobal, ContactUsDetails, ContactUsMenu, CountryDetails, CountryList, FeedItemDetail, HomeFeed, HouseholdCarousel, HouseholdDetails, Household_Relations, LegacyShareObject, Locality_Details, Login, Menu, MessageDetail, MessageList, MyBookmarks, MyEntertaining, Notes, Notifications, OneSchoolGlobalDetails, PINBiometricsMenu, PINChange, PINRegister, PINUnlock, Photobook, Profile, Search, Services, Splash, SupperMeeting_Carousel, SupperMeeting_Details, TermsAndPoliciesMenu, Updates_SingleList
- Compiled source: `migration/screens/ContactByEmailMember/analysis/sources/pretty/UBTConnectLibrary.ConnectPatterns.LazyImage.mvc.js`
- Child blocks: OutSystemsUI_2_23.Utilities.InlineSVG, UBTConnectLibrary.BasePatterns.CustomContainer, UBTConnectLibrary.BasePatterns.CustomText, UBTConnectLibrary.ConnectPatterns.Icon, UBTConnectLibrary.ConnectPatterns.SkeletonSection (queue: -)

## Inputs

| Input | Type |
|---|---|
| FallbackOptions | Record AvatarImageFallbackoptionsRec |
| FallbackPadding | Record SpacingOptionsRec |
| In_BorderOptions | Record ImageBorderOptionsRec |
| HasErrorMessage | Boolean |
| ExtendedClass | Text |

## Captured DOM variants (1 distinct, 381 instances)

### Variant 1: ContactByEmailMember/default (×381)

```html
<div class="OSBlockWidget" data-block="ConnectPatterns.LazyImage" id="b6-$b2">
  <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="b6-b2-$b1"><!-- nested block: 8 nodes --></div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("UBTConnectLibrary.ConnectPatterns.LazyImage.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "react", "OutSystems/ReactView/Main", "UBTConnectLibrary.ConnectPatterns.LazyImage.mvc$model", "UBTConnectLibrary.ConnectPatterns.LazyImage.mvc$controller", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "OutSystemsUI_2_23.Utilities.InlineSVG.mvc$view", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$view", "UBTConnectLibrary.BasePatterns.CustomText.mvc$view", "UBTConnectLibrary.controller$FormatClasses", "UBTConnectLibrary.controller$GetClasses_LazyImageSize_Dev", "UBTConnectLibrary.model$LazyImageSizeRec", "UBTConnectLibrary.model$AvatarImageFallbackoptionsRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$ImageBorderOptionsRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$InlineIconRec"], function(OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, React, OSView, UBTConnectLibrary_ConnectPatterns_LazyImage_mvc_model, UBTConnectLibrary_ConnectPatterns_LazyImage_mvc_controller, UBTConnectLibraryClientVariables, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, OSWidgets, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, OutSystemsUI_2_23_Utilities_InlineSVG_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view) {
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
        View.displayName = "ConnectPatterns.LazyImage";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, OutSystemsUI_2_23_Utilities_InlineSVG_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnectLibrary_ConnectPatterns_LazyImage_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnectLibrary_ConnectPatterns_LazyImage_mvc_controller;
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
                    In_IsLoading: model.variables.isLoadingVar
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
                        return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                            inputs: {
                                ExtendedClasses: model.getCachedValue(idService.getId("U5DpCjmiyUuhwGah6krioA.ExtendedClasses"), function() {
                                            return UBTConnectLibraryController.default.formatClasses$Action(model.variables.mainContainerClassVar, model.variables.extendedClassIn, callContext).classesOutOut;
                                            return UBTConnectLibraryController.default.getClasses_LazyImageSize_Dev$Action(model.variables.in_ImageSizeIn.heightAttr, model.variables.in_ImageSizeIn.widthAttr, false, callContext).classesOutOut;
                                        }, OS.DataTypes.DataTypes.Text, callContext.id), callContext).classesOutOut;
                                    }, OS.DataTypes.DataTypes.Text, callContext.id));
                                }, function() {
                                    return model.variables.local_HasImageVar;
                                }, function() {
                                    return model.variables.isLoadingVar;
                                }, function() {
                                    return model.variables.isErrorVar;
                                }, function() {
                                    return model.variables.mainContainerClassVar;
                                }, function() {
                                    return model.variables.extendedClassIn;
                                }, function() {
                                    return model.variables.in_ImageSizeIn.heightAttr;
                                }, function() {
                                    return model.variables.in_ImageSizeIn.widthAttr;
                                }),
                                _extendedClassesInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._extendedClassInDataFetchStatus, model.variables._in_ImageSizeInDataFetchStatus),
                                Options: model.getCachedValue(idService.getId("U5DpCjmiyUuhwGah6krioA.Options"), function() {
                                    return function() {
                                        var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                                        rec.borderOptionsAttr = function() {
                                            var rec = new UBTConnectLibraryModel.BorderOptionsRec();
                                            rec.colorAttr = model.variables.in_BorderOptionsIn.borderColorIdAttr;
                                            rec.sizeAttr = function() {
                                                var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                                rec.generalSizeIdAttr = model.variables.in_BorderOptionsIn.borderSizeIdAttr;
                                                return rec;
                                            }();
                                            rec.radiusAttr = function() {
                                                var rec = new UBTConnectLibraryModel.RadiusOptionsRec();
                                                rec.generalSizeIdAttr = model.variables.in_BorderOptionsIn.borderRadiusAttr;
                                                return rec;
                                            }();
                                            return rec;
                                        }();
                                        return rec;
                                    }();
                                }, function() {
                                    return model.variables.in_BorderOptionsIn.borderColorIdAttr;
                                }, function() {
                                    return model.variables.in_BorderOptionsIn.borderSizeIdAttr;
                                }, function() {
                                    return model.variables.in_BorderOptionsIn.borderRadiusAttr;
                                }),
                                _optionsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_BorderOptionsInDataFetchStatus)
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
                            placeholders: {
                                content: new PlaceholderContent(function() {
                                    return [React.createElement(OSWidgets.Image, {
                                        type: /*External*/ 1,
                                        url: model.variables.local_ImageURLVar,
                                        _idProps: {
                                            service: idService,
                                            name: "Image"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    })];
                                })
                            },
                            _dependencies: [asPrimitiveValue(model.variables.local_ImageURLVar)]
                        }), $if(((!(model.variables.local_HasImageVar) || model.variables.isLoadingVar) || model.variables.isErrorVar), false, this, function() {
                            return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                                inputs: {
                                    Options: model.getCachedValue(idService.getId("TairbGoO6ESEf6vskhpOUA.Options"), function() {
                                        return function() {
                                            var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                                            rec.backgroundAttr = function() {
                                                var rec = new UBTConnectLibraryModel.BackgroundOptionsRec();
                                                rec.backgroundColorAttr = model.variables.fallbackOptionsIn.backgroundColorAttr;
                                                return rec;
                                            }();
                                            rec.paddingSizeAttr = model.variables.fallbackPaddingIn;
                                            rec.borderOptionsAttr = function() {
                                                var rec = new UBTConnectLibraryModel.BorderOptionsRec();
                                                rec.colorAttr = model.variables.fallbackOptionsIn.borderColorAttr;
                                                rec.sizeAttr = function() {
                                                    var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                                    rec.generalSizeIdAttr = model.variables.fallbackOptionsIn.borderSizeAttr;
                                                    return rec;
                                                }();
                                                rec.radiusAttr = function() {
                                                    var rec = new UBTConnectLibraryModel.RadiusOptionsRec();
                                                    rec.generalSizeIdAttr = model.variables.in_BorderOptionsIn.borderRadiusAttr;
                                                    return rec;
                                                }();
                                                return rec;
                                            }();
                                            rec.textOptionsAttr = function() {
                                                var rec = new UBTConnectLibraryModel.TextOptionsRec();
                                                rec.colorAttr = model.variables.fallbackOptionsIn.fontColorAttr;
                                                rec.fontSizeAttr = model.variables.fallbackOptionsIn.fontSizeAttr;
                                                rec.fontWeightAttr = UBTConnectLibraryModel.staticEntities.uBT_FontWeight.semiBold;
                                                return rec;
                                            }();
                                            rec.isSkeletonElementAttr = true;
                                            return rec;
                                        }();
                                    }, function() {
                                        return model.variables.fallbackOptionsIn.backgroundColorAttr;
                                    }, function() {
                                        return model.variables.fallbackPaddingIn;
                                    }, function() {
                                        return model.variables.fallbackOptionsIn.borderColorAttr;
                                    }, function() {
                                        return model.variables.fallbackOptionsIn.borderSizeAttr;
                                    }, function() {
                                        return model.variables.in_BorderOptionsIn.borderRadiusAttr;
                                    }, function() {
                                        return model.variables.fallbackOptionsIn.fontColorAttr;
                                    }, function() {
                                        return model.variables.fallbackOptionsIn.fontSizeAttr;
                                    }),
                                    _optionsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._fallbackOptionsInDataFetchStatus, model.variables._fallbackPaddingInDataFetchStatus, model.variables._in_BorderOptionsInDataFetchStatus),
                                    ExtendedClasses: model.getCachedValue(idService.getId("TairbGoO6ESEf6vskhpOUA.ExtendedClasses"), function() {
                                                    return UBTConnectLibraryController.default.formatClasses$Action(model.variables.mainContainerClassVar, model.variables.extendedClassIn, callContext).classesOutOut;
                                                    return UBTConnectLibraryController.default.getClasses_LazyImageSize_Dev$Action(model.variables.in_ImageSizeIn.heightAttr, model.variables.in_ImageSizeIn.widthAttr, true, callContext).classesOutOut;
                                                }, OS.DataTypes.DataTypes.Text, callContext.id), callContext).classesOutOut;
                                            }, OS.DataTypes.DataTypes.Text, callContext.id), (model.variables.mainContainerClassVar + "--no-image"), callContext).classesOutOut;
                                        }, OS.DataTypes.DataTypes.Text, callContext.id);
                                    }, function() {
                                        return model.variables.mainContainerClassVar;
                                    }, function() {
                                        return model.variables.extendedClassIn;
                                    }, function() {
                                        return model.variables.in_ImageSizeIn.heightAttr;
                                    }, function() {
                                        return model.variables.in_ImageSizeIn.widthAttr;
                                    }),
                                    _extendedClassesInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._extendedClassInDataFetchStatus, model.variables._in_ImageSizeInDataFetchStatus)
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
                                    uuid: "3",
                                    alias: "3"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                placeholders: {
                                    content: new PlaceholderContent(function() {
                                        return [$if(((model.variables.fallbackOptionsIn.initialsAttr) !== ("")), false, this, function() {
                                            return [React.createElement(OSWidgets.Expression, {
                                                value: model.variables.fallbackOptionsIn.initialsAttr,
                                                _idProps: {
                                                    service: idService,
                                                    uuid: "4"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider,
                                                value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._fallbackOptionsInDataFetchStatus)
                                            })];
```
(… 105 more lines in `migration/screens/ContactByEmailMember/analysis/sources/pretty/UBTConnectLibrary.ConnectPatterns.LazyImage.mvc.js`)
