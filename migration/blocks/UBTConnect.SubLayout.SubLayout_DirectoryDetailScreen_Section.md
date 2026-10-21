# UBTConnect.SubLayout.SubLayout_DirectoryDetailScreen_Section

- Kind: shared; build screens using it: ContactUsDetails, HouseholdCarousel, HouseholdDetails, Household_Relations, Locality_Details, Profile, SupperMeeting_Carousel, SupperMeeting_Details
- Compiled source: `migration/screens/ContactUsDetails/analysis/sources/pretty/UBTConnect.SubLayout.SubLayout_DirectoryDetailScreen_Section.mvc.js`
- Child blocks: UBTConnectLibrary.BasePatterns.CustomContainer, UBTConnectLibrary.BasePatterns.CustomText, UBTConnectLibrary.Layouts.SubLayout_Section (queue: UBTConnectLibrary.Layouts.SubLayout_Section)

## Inputs

| Input | Type |
|---|---|
| In_Title | Text |
| In_PaddingTop | Text |
| In_PaddingBottom | Text |

## Captured DOM variants (1 distinct, 65 instances)

### Variant 1: ContactUsDetails/default (×65)

```html
<div class="OSBlockWidget" data-block="SubLayout.SubLayout_DirectoryDetailScreen_Section" id="$b7">
  <div class="OSBlockWidget" data-block="BasePatterns.CustomContainer" id="b7-$b1"><!-- nested block: 27 nodes --></div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("UBTConnect.SubLayout.SubLayout_DirectoryDetailScreen_Section.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "react", "OutSystems/ReactView/Main", "UBTConnect.SubLayout.SubLayout_DirectoryDetailScreen_Section.mvc$model", "UBTConnect.SubLayout.SubLayout_DirectoryDetailScreen_Section.mvc$controller", "UBTConnect.clientVariables", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.Layouts.SubLayout_Section.mvc$view", "UBTConnectLibrary.BasePatterns.CustomText.mvc$view", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$InlineIconRec"], function(OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, React, OSView, UBTConnect_SubLayout_SubLayout_DirectoryDetailScreen_Section_mvc_model, UBTConnect_SubLayout_SubLayout_DirectoryDetailScreen_Section_mvc_controller, UBTConnectClientVariables, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, OSWidgets, UBTConnectLibrary_Layouts_SubLayout_Section_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view) {
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
        View.displayName = "SubLayout.SubLayout_DirectoryDetailScreen_Section";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_Layouts_SubLayout_Section_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_SubLayout_SubLayout_DirectoryDetailScreen_Section_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_SubLayout_SubLayout_DirectoryDetailScreen_Section_mvc_controller;
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
            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                inputs: {
                    Options: model.getCachedValue(idService.getId("Zk7JxpsesEq6VqkkKp5n1w.Options"), function() {
                        return function() {
                            var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                            rec.backgroundAttr = function() {
                                var rec = new UBTConnectLibraryModel.BackgroundOptionsRec();
                                rec.backgroundColorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral0;
                                return rec;
                            }();
                            rec.paddingSizeAttr = function() {
                                var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                rec.horizontalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.base;
                                rec.topSizeIdAttr = model.variables.in_PaddingTopIn;
                                rec.bottomSizeIdAttr = model.variables.in_PaddingBottomIn;
                                return rec;
                            }();
                            return rec;
                        }();
                    }, function() {
                        return model.variables.in_PaddingTopIn;
                    }, function() {
                        return model.variables.in_PaddingBottomIn;
                    }),
                    _optionsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_PaddingTopInDataFetchStatus, model.variables._in_PaddingBottomInDataFetchStatus)
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
                    content: new PlaceholderContent(function() {
                        return [React.createElement(UBTConnectLibrary_Layouts_SubLayout_Section_mvc_view, {
                            inputs: {},
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
                                title: new PlaceholderContent(function() {
                                    return [$if(((model.variables.in_TitleIn) !== ("")), false, this, function() {
                                        return [React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
                                            inputs: {
                                                In_Text: model.variables.in_TitleIn,
                                                _in_TextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_TitleInDataFetchStatus),
                                                In_TextOptions: model.getCachedValue(idService.getId("V7R1toYX6U2qs+rYik1IhQ.In_TextOptions"), function() {
                                                    return function() {
                                                        var rec = new UBTConnectLibraryModel.TextOptionsRec();
                                                        rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.semiBold;
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
                                                alias: "3"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider,
                                            _dependencies: []
                                        })];
                                    }, function() {
                                        return [];
                                    })];
                                }),
                                content: new PlaceholderContent(function() {
                                    return [React.createElement(OSWidgets.Placeholder, {
                                        align: /*Default*/ 0,
                                        content: _this.props.placeholders.placeholder_SectionContent,
                                        _idProps: {
                                            service: idService,
                                            name: "Placeholder_SectionContent"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    })];
                                })
                            }
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
