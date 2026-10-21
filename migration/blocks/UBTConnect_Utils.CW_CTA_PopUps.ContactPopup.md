# UBTConnect_Utils.CW_CTA_PopUps.ContactPopup

- Kind: shared; build screens using it: ContactUsDetails, FeedItemDetail, HomeFeed, HouseholdCarousel, HouseholdDetails, Locality_Details, MessageDetail, OneSchoolGlobalDetails, Profile, SupperMeeting_Carousel, SupperMeeting_Details
- Compiled source: `migration/screens/ContactUsDetails/analysis/sources/pretty/UBTConnect_Utils.CW_CTA_PopUps.ContactPopup.mvc.js`
- Child blocks: NavigationHandler.NavigationHandler.PreventBackNavigation, UBTConnectLibrary.BasePatterns.CustomContainer, UBTConnectLibrary.ConnectPatterns.Button, UBTConnectLibrary.ConnectPatterns.Icon, UBTConnectLibrary.ConnectPatterns.IconText, UBTConnectLibrary.ConnectPatterns.LazyImage, UBTConnectLibrary.ConnectPatterns.SkeletonSection, UBTConnect_Utils.CW_Image.UBT_LazyImage (queue: -)

## Inputs

| Input | Type |
|---|---|
| In_ContactPopupButtons | RecordList ContactPopupButtonList |
| In_ImageSizeId | Text |

## Captured DOM variants (1 distinct, 161 instances)

### Variant 1: ContactUsDetails/default (×161)

```html
<div class="OSBlockWidget" data-block="CW_CTA_PopUps.ContactPopup" id="b24-$b1"></div>
```


## Compiled view (debugger lines removed)

```js
define("UBTConnect_Utils.CW_CTA_PopUps.ContactPopup.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "react", "OutSystems/ReactView/Main", "UBTConnect_Utils.CW_CTA_PopUps.ContactPopup.mvc$model", "UBTConnect_Utils.CW_CTA_PopUps.ContactPopup.mvc$controller", "UBTConnect_Utils.clientVariables", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$view", "UBTConnect_Utils.CW_Image.UBT_LazyImage.mvc$view", "UBTConnectLibrary.ConnectPatterns.LazyImage.mvc$view", "UBTConnectLibrary.ConnectPatterns.Button.mvc$view", "UBTConnectLibrary.ConnectPatterns.IconText.mvc$view", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$view", "NavigationHandler.NavigationHandler.PreventBackNavigation.mvc$view", "UBTConnect_Utils.model$ContactPopupButtonList", "UBTConnect_Utils.model$ContactPopupDataRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$LazyImageSizeRec", "UBTConnectLibrary.model$AvatarImageFallbackoptionsRec", "UBTConnectLibrary.model$ImageBorderOptionsRec", "UBTConnectLibrary.model$ButtonOptionsRec", "UBTConnectLibrary.controller$GetTargetTimeLabel", "UBTConnect_Utils.model$ContactPopupButtonRec"], function(OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, UBTConnectLibraryModel, UBTConnectLibraryController, React, OSView, UBTConnect_Utils_CW_CTA_PopUps_ContactPopup_mvc_model, UBTConnect_Utils_CW_CTA_PopUps_ContactPopup_mvc_controller, UBTConnect_UtilsClientVariables, OSWidgets, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view, UBTConnectLibrary_ConnectPatterns_LazyImage_mvc_view, UBTConnectLibrary_ConnectPatterns_Button_mvc_view, UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, NavigationHandler_NavigationHandler_PreventBackNavigation_mvc_view) {
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
        View.displayName = "CW_CTA_PopUps.ContactPopup";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view, UBTConnectLibrary_ConnectPatterns_LazyImage_mvc_view, UBTConnectLibrary_ConnectPatterns_Button_mvc_view, UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, NavigationHandler_NavigationHandler_PreventBackNavigation_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_Utils_CW_CTA_PopUps_ContactPopup_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_Utils_CW_CTA_PopUps_ContactPopup_mvc_controller;
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
            return React.createElement("div", this.getRootNodeProperties(), React.createElement(OSWidgets.Popup, {
                showPopup: model.variables.in_ContactPopupDataIn.showPopupAttr,
                style: "popup-dialog ubt-contact-by-phone-popup connect-legacy-compatibily-containter",
                _idProps: {
                    service: idService,
                    uuid: "0"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                showPopup_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ContactPopupDataInDataFetchStatus)
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "text-align-center",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                inputs: {
                    Options: model.getCachedValue(idService.getId("FXfQFlg5M0euvu0Ehg7dmw.Options"), function() {
                        return function() {
                            var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                            rec.paddingSizeAttr = function() {
                                var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                return rec;
                            }();
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
                        return [React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "3"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                            inputs: {
                                Options: model.getCachedValue(idService.getId("Bock_Title.Options"), function() {
                                    return function() {
                                        var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                                        rec.paddingSizeAttr = function() {
                                            var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                            rec.topSizeIdAttr = UBTConnect_UtilsModel.staticEntities.uBT_Size.small;
                                            rec.bottomSizeIdAttr = ((model.variables.in_ContactPopupDataIn.showTimezoneAttr) ? (OS.BuiltinFunctions.nullTextIdentifier()) : (UBTConnect_UtilsModel.staticEntities.uBT_Size.base));
                                            return rec;
                                        }();
                                        rec.textOptionsAttr = function() {
                                            var rec = new UBTConnectLibraryModel.TextOptionsRec();
                                            rec.colorAttr = UBTConnect_UtilsModel.staticEntities.uBT_Color.neutral10;
                                            rec.fontSizeAttr = UBTConnect_UtilsModel.staticEntities.uBT_FontSize.heading6;
                                            rec.fontWeightAttr = UBTConnect_UtilsModel.staticEntities.uBT_FontWeight.semiBold;
                                            return rec;
                                        }();
                                        return rec;
                                    }();
                                }, function() {
                                    return model.variables.in_ContactPopupDataIn.showTimezoneAttr;
                                }),
                                _optionsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ContactPopupDataInDataFetchStatus)
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
                                name: "Bock_Title",
                                alias: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                content: new PlaceholderContent(function() {
                                    return [React.createElement(OSWidgets.Expression, {
                                        gridProperties: {
                                            marginLeft: "Adaptive"
                                        },
                                        value: model.getCachedValue(idService.getId("znfdjg+wrkSztEkHj3Nl0Q.Value"), function() {
                                            return (((model.variables.in_ContactPopupDataIn.actionNameAttr + ((((model.variables.in_ContactPopupDataIn.actionNameAttr) !== (""))) ? (" ") : (""))) + model.variables.in_ContactPopupDataIn.nameAttr) + model.variables.in_ContactPopupDataIn.titleTerminatorAttr);
                                        }, function() {
                                            return model.variables.in_ContactPopupDataIn.actionNameAttr;
                                        }, function() {
                                            return model.variables.in_ContactPopupDataIn.nameAttr;
                                        }, function() {
                                            return model.variables.in_ContactPopupDataIn.titleTerminatorAttr;
                                        }),
                                        _idProps: {
                                            service: idService,
                                            uuid: "5"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ContactPopupDataInDataFetchStatus)
                                    })];
                                })
                            },
                            _dependencies: [asPrimitiveValue(model.variables._in_ContactPopupDataInDataFetchStatus), asPrimitiveValue(model.variables.in_ContactPopupDataIn.titleTerminatorAttr), asPrimitiveValue(model.variables.in_ContactPopupDataIn.nameAttr), asPrimitiveValue(model.variables.in_ContactPopupDataIn.actionNameAttr)]
                        }), $if(model.variables.in_ContactPopupDataIn.showTimezoneAttr, false, this, function() {
                            return [$if(model.variables.in_ContactPopupDataIn.isFetchingTimezoneAttr, false, this, function() {
                                return [React.createElement(UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, {
                                    inputs: {
                                        In_IsLoading: true
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
                                        uuid: "6",
                                        alias: "3"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider,
                                    placeholders: {
                                        placeholder_LoadingSection: new PlaceholderContent(function() {
                                            return [React.createElement(OSWidgets.Expression, {
                                                value: "Fetching the user Timezone",
                                                _idProps: {
                                                    service: idService,
                                                    uuid: "7"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider
                                            })];
                                        })
                                    },
                                    _dependencies: []
                                })];
                            }, function() {
                                return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                                    inputs: {
                                        Options: model.getCachedValue(idService.getId("Block_TimeAndTimezone.Options"), function() {
                                            return function() {
                                                var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                                                rec.paddingSizeAttr = function() {
                                                    var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                                    rec.bottomSizeIdAttr = UBTConnect_UtilsModel.staticEntities.uBT_Size.base;
                                                    return rec;
                                                }();
                                                rec.textOptionsAttr = function() {
                                                    var rec = new UBTConnectLibraryModel.TextOptionsRec();
                                                    rec.colorAttr = UBTConnect_UtilsModel.staticEntities.uBT_Color.neutral7;
                                                    rec.fontSizeAttr = UBTConnect_UtilsModel.staticEntities.uBT_FontSize.doubleExtraSmall;
                                                    rec.fontWeightAttr = UBTConnect_UtilsModel.staticEntities.uBT_FontWeight.semiBold;
                                                    return rec;
                                                }();
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
                                        name: "Block_TimeAndTimezone",
                                        alias: "4"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider,
                                    placeholders: {
                                        content: new PlaceholderContent(function() {
                                            return [React.createElement(OSWidgets.Expression, {
                                                value: model.variables.targetTimeLabelVar,
```
(… 534 more lines in `migration/screens/ContactUsDetails/analysis/sources/pretty/UBTConnect_Utils.CW_CTA_PopUps.ContactPopup.mvc.js`)
