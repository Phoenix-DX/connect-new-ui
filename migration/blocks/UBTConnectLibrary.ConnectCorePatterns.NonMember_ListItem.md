# UBTConnectLibrary.ConnectCorePatterns.NonMember_ListItem

- Kind: shared; build screens using it: HouseholdCarousel, HouseholdDetails, Household_Relations, Locality_Details, Profile, SupperMeeting_Carousel
- Compiled source: `migration/screens/HouseholdCarousel/analysis/sources/pretty/UBTConnectLibrary.ConnectCorePatterns.NonMember_ListItem.mvc.js`
- Child blocks: UBTConnectLibrary.BasePatterns.Columns_Three, UBTConnectLibrary.BasePatterns.CustomText (queue: -)

## Inputs

| Input | Type |
|---|---|
| Title | Text |
| isEnabled | Boolean |
| DeceasedCaption | Text |
| LifeCycleText_Italic | Boolean |
| MarriedCaption | Text |
| MarriedPartnerTakenText | Text |
| MarriageHighlightText | Text |

## Captured DOM variants (1 distinct, 9 instances)

### Variant 1: HouseholdCarousel/default (×9)

```html
<div class="OSBlockWidget" data-block="ConnectCorePatterns.NonMember_ListItem" id="b3-l1-1152_1-b2-b3-b1-b39-l2-1335_0-$b11">
  <div class="OSBlockWidget" data-block="BasePatterns.Columns_Three" id="b3-l1-1152_1-b2-b3-b1-b39-l2-1335_0-b11-$b1"><!-- nested block: 49 nodes --></div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("UBTConnectLibrary.ConnectCorePatterns.NonMember_ListItem.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "react", "OutSystems/ReactView/Main", "UBTConnectLibrary.ConnectCorePatterns.NonMember_ListItem.mvc$model", "UBTConnectLibrary.ConnectCorePatterns.NonMember_ListItem.mvc$controller", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.BasePatterns.Columns_Three.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.BasePatterns.CustomText.mvc$view", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnectLibrary.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$InlineIconRec"], function(OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, React, OSView, UBTConnectLibrary_ConnectCorePatterns_NonMember_ListItem_mvc_model, UBTConnectLibrary_ConnectCorePatterns_NonMember_ListItem_mvc_controller, UBTConnectLibraryClientVariables, UBTConnectLibrary_BasePatterns_Columns_Three_mvc_view, OSWidgets, UBTConnectLibrary_BasePatterns_CustomText_mvc_view) {
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
        View.displayName = "ConnectCorePatterns.NonMember_ListItem";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_BasePatterns_Columns_Three_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnectLibrary_ConnectCorePatterns_NonMember_ListItem_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnectLibrary_ConnectCorePatterns_NonMember_ListItem_mvc_controller;
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
            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnectLibrary_BasePatterns_Columns_Three_mvc_view, {
                inputs: {
                    ColumnOptions: model.getCachedValue(idService.getId("DvvYRrFtAECQ71KXEJk9bA.ColumnOptions"), function() {
                        return function() {
                            var rec = new UBTConnectLibraryModel.ColumnOptionsRec();
                            rec.columnBehaviourAttr = UBTConnectLibraryModel.staticEntities.uBT_ColumnBehaviour.expandMiddle;
                            rec.spacingSizeAttr = UBTConnectLibraryModel.staticEntities.uBT_Size.base;
                            rec.verticalAlignAttr = UBTConnectLibraryModel.staticEntities.uBT_VerticalAlign.center;
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
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                placeholders: {
                    left: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedEvents: {
                                onClick: function() {
                                    return Promise.resolve().then(function() {
                                        var eventHandlerContext = callContext.clone();
                                        return OS.Flow.tryFinally(function() {
                                            var varBag = {};
                                            controller.pushDebuggerContext(eventHandlerContext);
                                            return controller.onClick$Action(controller.callContext(eventHandlerContext));
                                        }, function() {
                                            controller.popDebuggerContext(eventHandlerContext);
                                        });
                                    });;
                                }
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "1"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Placeholder, {
                            align: /*Default*/ 0,
                            content: _this.props.placeholders.placeholder_Left,
                            _idProps: {
                                service: idService,
                                name: "Placeholder_Left"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }))];
                    }),
                    middle: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedEvents: {
                                onClick: function() {
                                    var eventHandlerContext = callContext.clone();
                                    return OS.Flow.tryFinally(function() {
                                        var varBag = {};
                                        controller.pushDebuggerContext(eventHandlerContext);
                                        controller.onClickPerson$Action(controller.callContext(eventHandlerContext));
                                    }, function() {
                                        controller.popDebuggerContext(eventHandlerContext);
                                    });
                                    ;
                                }
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "3"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "4"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
                            inputs: {
                                In_Text: model.variables.titleIn,
                                _in_TextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._titleInDataFetchStatus),
                                In_TextOptions: model.getCachedValue(idService.getId("rxK29SUNdEG3LjA27vvWHQ.In_TextOptions"), function() {
                                    return function() {
                                        var rec = new UBTConnectLibraryModel.TextOptionsRec();
                                        rec.colorAttr = UBTConnectLibraryModel.staticEntities.uBT_Color.neutral9;
                                        rec.fontSizeAttr = UBTConnectLibraryModel.staticEntities.uBT_FontSize.base;
                                        rec.fontWeightAttr = UBTConnectLibraryModel.staticEntities.uBT_FontWeight.semiBold;
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
                                uuid: "5",
                                alias: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        })), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: true,
                            visible: ((model.variables.deceasedCaptionIn) !== ("")),
                            _idProps: {
                                service: idService,
                                uuid: "6"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._deceasedCaptionInDataFetchStatus)
                        }, React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
                            inputs: {
                                In_TextOptions: model.getCachedValue(idService.getId("7ifVHiP6RkKbrfcNc2ND_A.In_TextOptions"), function() {
                                    return function() {
                                        var rec = new UBTConnectLibraryModel.TextOptionsRec();
                                        rec.colorAttr = UBTConnectLibraryModel.staticEntities.uBT_Color.neutral7;
                                        rec.fontSizeAttr = UBTConnectLibraryModel.staticEntities.uBT_FontSize.extraSmall;
                                        rec.fontWeightAttr = UBTConnectLibraryModel.staticEntities.uBT_FontWeight.regular;
                                        rec.isItalicAttr = model.variables.lifeCycleText_ItalicIn;
                                        return rec;
                                    }();
                                }, function() {
                                    return model.variables.lifeCycleText_ItalicIn;
                                }),
                                _in_TextOptionsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._lifeCycleText_ItalicInDataFetchStatus),
                                In_Text: model.variables.deceasedCaptionIn,
                                _in_TextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._deceasedCaptionInDataFetchStatus)
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
                                uuid: "7",
                                alias: "3"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        })), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: true,
                            visible: ((model.variables.marriedCaptionIn) !== ("")),
                            _idProps: {
                                service: idService,
                                uuid: "8"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._marriedCaptionInDataFetchStatus)
                        }, React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
                            inputs: {
                                In_TextOptions: model.getCachedValue(idService.getId("HpRumpoVbkqqkRDQHxlYvg.In_TextOptions"), function() {
                                    return function() {
                                        var rec = new UBTConnectLibraryModel.TextOptionsRec();
                                        rec.colorAttr = UBTConnectLibraryModel.staticEntities.uBT_Color.cyanDarkest;
                                        rec.fontSizeAttr = UBTConnectLibraryModel.staticEntities.uBT_FontSize.extraSmall;
                                        return rec;
                                    }();
                                }),
                                In_Text: model.variables.marriedCaptionIn,
                                _in_TextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._marriedCaptionInDataFetchStatus),
                                In_HighlightOptions: model.getCachedValue(idService.getId("HpRumpoVbkqqkRDQHxlYvg.In_HighlightOptions"), function() {
                                    return function() {
                                        var rec = new UBTConnectLibraryModel.TextOptionsRec();
                                        rec.colorAttr = UBTConnectLibraryModel.staticEntities.uBT_Color.cyanDarkest;
                                        rec.fontSizeAttr = UBTConnectLibraryModel.staticEntities.uBT_FontSize.extraSmall;
                                        rec.fontWeightAttr = UBTConnectLibraryModel.staticEntities.uBT_FontWeight.semiBold;
                                        return rec;
                                    }();
                                }),
```
(… 71 more lines in `migration/screens/HouseholdCarousel/analysis/sources/pretty/UBTConnectLibrary.ConnectCorePatterns.NonMember_ListItem.mvc.js`)
