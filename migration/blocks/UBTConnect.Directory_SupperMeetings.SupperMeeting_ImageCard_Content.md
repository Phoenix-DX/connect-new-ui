# UBTConnect.Directory_SupperMeetings.SupperMeeting_ImageCard_Content

- Kind: shared; build screens using it: HouseholdCarousel, Locality_Details, SupperMeeting_Carousel, SupperMeeting_Details
- Compiled source: `migration/screens/SupperMeeting_Carousel/analysis/sources/pretty/UBTConnect.Directory_SupperMeetings.SupperMeeting_ImageCard_Content.mvc.js`
- Child blocks: UBTConnect.Directory_SupperMeetings.SupperMeeting_ImageCard_Content_Statistics, UBTConnectLibrary.BasePatterns.CustomContainer, UBTConnectLibrary.ConnectPatterns.ImageCard__Content, UBTConnect_Utils.CW_CTA_PopUps.AddressPopup_Wrapper (queue: UBTConnect.Directory_SupperMeetings.SupperMeeting_ImageCard_Content_Statistics, UBTConnectLibrary.ConnectPatterns.ImageCard__Content, UBTConnect_Utils.CW_CTA_PopUps.AddressPopup_Wrapper)

## Inputs

| Input | Type |
|---|---|
| In_Subdivision_CardContent | Record UI_Subdivision_Card_ContentRec |
| In_ShowAddress | Boolean |

## Captured DOM variants (1 distinct, 12 instances)

### Variant 1: SupperMeeting_Carousel/default (×12)

```html
<div class="OSBlockWidget" data-block="Directory_SupperMeetings.SupperMeeting_ImageCard_Content" id="b3-l1-1164_0-b2-b1-b1-$b5">
  <div class="OSBlockWidget" data-block="ConnectPatterns.ImageCard__Content" id="b3-l1-1164_0-b2-b1-b1-b5-$b1"><!-- nested block: 75 nodes --></div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("UBTConnect.Directory_SupperMeetings.SupperMeeting_ImageCard_Content.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "Connect_Subdivision_CS.model", "UBTConnectLibrary.model", "APIDomain_Directory_IS.model", "react", "OutSystems/ReactView/Main", "UBTConnect.Directory_SupperMeetings.SupperMeeting_ImageCard_Content.mvc$model", "UBTConnect.Directory_SupperMeetings.SupperMeeting_ImageCard_Content.mvc$controller", "UBTConnect.clientVariables", "UBTConnectLibrary.ConnectPatterns.ImageCard__Content.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnect.Directory_SupperMeetings.SupperMeeting_ImageCard_Content_Statistics.mvc$view", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "UBTConnect_Utils.CW_CTA_PopUps.AddressPopup_Wrapper.mvc$view", "UBTConnect.controller$GetDescriptor_Subdivision_GenderSplit", "Connect_Subdivision_CS.model$UI_Subdivision_Card_ContentRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect_Subdivision_CS", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "APIDomain_Directory_IS.model$Directory_CoordinatesRec", "UBTConnect.referencesHealth$APIDomain_Directory_IS"], function(OutSystems, UBTConnectModel, UBTConnectController, Connect_Subdivision_CSModel, UBTConnectLibraryModel, APIDomain_Directory_ISModel, React, OSView, UBTConnect_Directory_SupperMeetings_SupperMeeting_ImageCard_Content_mvc_model, UBTConnect_Directory_SupperMeetings_SupperMeeting_ImageCard_Content_mvc_controller, UBTConnectClientVariables, UBTConnectLibrary_ConnectPatterns_ImageCard__Content_mvc_view, OSWidgets, UBTConnect_Directory_SupperMeetings_SupperMeeting_ImageCard_Content_Statistics_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnect_Utils_CW_CTA_PopUps_AddressPopup_Wrapper_mvc_view) {
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
        View.displayName = "Directory_SupperMeetings.SupperMeeting_ImageCard_Content";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_ConnectPatterns_ImageCard__Content_mvc_view, UBTConnect_Directory_SupperMeetings_SupperMeeting_ImageCard_Content_Statistics_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnect_Utils_CW_CTA_PopUps_AddressPopup_Wrapper_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_Directory_SupperMeetings_SupperMeeting_ImageCard_Content_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_Directory_SupperMeetings_SupperMeeting_ImageCard_Content_mvc_controller;
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
            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnectLibrary_ConnectPatterns_ImageCard__Content_mvc_view, {
                inputs: {
                    In_Title: model.variables.in_Subdivision_CardContentIn.nameAttr,
                    _in_TitleInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_Subdivision_CardContentInDataFetchStatus)
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
                    placeholder_TopSectionContent: PlaceholderContent.Empty,
                    placeholder_BottomSectionContent: new PlaceholderContent(function() {
                        return [React.createElement(UBTConnect_Directory_SupperMeetings_SupperMeeting_ImageCard_Content_Statistics_mvc_view, {
                            inputs: {
                                In_BretherenCount: model.variables.in_Subdivision_CardContentIn.bretherenCountAttr,
                                _in_BretherenCountInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_Subdivision_CardContentInDataFetchStatus),
                                In_GenderSplit: model.getCachedValue(idService.getId("AtQ9DtaN60OQOShaH3B54w.In_GenderSplit"), function() {
                                        return UBTConnectController.default.getDescriptor_Subdivision_GenderSplit$Action(model.variables.in_Subdivision_CardContentIn.brothersCountAttr, model.variables.in_Subdivision_CardContentIn.sistersCountAttr, callContext).out_DescriptorOut;
                                    }, OS.DataTypes.DataTypes.Text, callContext.id);
                                }, function() {
                                    return model.variables.in_Subdivision_CardContentIn.brothersCountAttr;
                                }, function() {
                                    return model.variables.in_Subdivision_CardContentIn.sistersCountAttr;
                                }),
                                _in_GenderSplitInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_Subdivision_CardContentInDataFetchStatus),
                                In_HouseholdCount: model.variables.in_Subdivision_CardContentIn.householdCountAttr,
                                _in_HouseholdCountInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_Subdivision_CardContentInDataFetchStatus)
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
                        }), $if(model.variables.in_ShowAddressIn, false, this, function() {
                            return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                                inputs: {
                                    Options: model.getCachedValue(idService.getId("BVsQLhptvUC7BDks9xQyAg.Options"), function() {
                                        return function() {
                                            var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                                            rec.marginSizeAttr = function() {
                                                var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                                rec.verticalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
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
                                    alias: "3"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                placeholders: {
                                    content: new PlaceholderContent(function() {
                                        return [React.createElement(UBTConnect_Utils_CW_CTA_PopUps_AddressPopup_Wrapper_mvc_view, {
                                            inputs: {
                                                In_Address: model.variables.in_Subdivision_CardContentIn.addressAttr,
                                                _in_AddressInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_Subdivision_CardContentInDataFetchStatus)
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
                                                alias: "4"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider,
                                            _dependencies: []
                                        })];
                                    })
                                },
                                _dependencies: [asPrimitiveValue(model.variables._in_Subdivision_CardContentInDataFetchStatus), asPrimitiveValue(model.variables.in_Subdivision_CardContentIn.addressAttr)]
                            })];
                        }, function() {
                            return [];
                        })];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.in_ShowAddressIn), asPrimitiveValue(model.variables._in_ShowAddressInDataFetchStatus), asPrimitiveValue(model.variables._in_Subdivision_CardContentInDataFetchStatus), asPrimitiveValue(model.variables.in_Subdivision_CardContentIn.addressAttr), asPrimitiveValue(model.variables.in_Subdivision_CardContentIn.householdCountAttr), asPrimitiveValue(model.variables.in_Subdivision_CardContentIn.sistersCountAttr), asPrimitiveValue(model.variables.in_Subdivision_CardContentIn.brothersCountAttr), asPrimitiveValue(model.variables.in_Subdivision_CardContentIn.bretherenCountAttr)]
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
    return View;
});
```
