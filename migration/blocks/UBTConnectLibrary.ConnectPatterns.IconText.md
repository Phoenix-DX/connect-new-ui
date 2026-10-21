# UBTConnectLibrary.ConnectPatterns.IconText

- Kind: shell; build screens using it: AcceptPendingPolicies, BookmarksByGroup, BrowseCountries, BrowseDirectory, CommunityBusinessDetails_CoomingSoon, ConnectShare, ContactByEmailMember, ContactByEmailOneSchoolGlobal, ContactUsDetails, ContactUsMenu, CountryDetails, CountryList, FeedItemDetail, HomeFeed, HouseholdCarousel, HouseholdDetails, Household_Relations, LegacyShareObject, Locality_Details, Login, Menu, MessageDetail, MessageList, MyBookmarks, MyEntertaining, Notes, Notifications, OneSchoolGlobalDetails, PINBiometricsMenu, PINChange, PINRegister, PINUnlock, Photobook, Profile, Search, Services, Splash, SupperMeeting_Carousel, SupperMeeting_Details, TermsAndPoliciesMenu, Updates_SingleList
- Compiled source: `migration/screens/BrowseDirectory/analysis/sources/pretty/UBTConnectLibrary.ConnectPatterns.IconText.mvc.js`
- Child blocks: UBTConnectLibrary.BasePatterns.Columns_Two, UBTConnectLibrary.BasePatterns.CustomText (queue: -)

## Inputs

| Input | Type |
|---|---|
| IsIconOnRight | Boolean |
| SpacingSize | Text |
| In_Subtext | Text |
| In_JustifyText | Boolean |

## Captured DOM variants (1 distinct, 470 instances)

### Variant 1: BrowseDirectory/default (×470)

```html
<div class="OSBlockWidget" data-block="ConnectPatterns.IconText" id="$b5">
  <div data-container="" id="b5-DIV_IconText" style="cursor: pointer;">
    <div class="OSBlockWidget" data-block="BasePatterns.Columns_Two" id="b5-$b1"><!-- nested block: 14 nodes --></div>
  </div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("UBTConnectLibrary.ConnectPatterns.IconText.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "react", "OutSystems/ReactView/Main", "UBTConnectLibrary.ConnectPatterns.IconText.mvc$model", "UBTConnectLibrary.ConnectPatterns.IconText.mvc$controller", "UBTConnectLibrary.clientVariables", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.BasePatterns.Columns_Two.mvc$view", "UBTConnectLibrary.BasePatterns.CustomText.mvc$view", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnectLibrary.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$InlineIconRec"], function(OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, React, OSView, UBTConnectLibrary_ConnectPatterns_IconText_mvc_model, UBTConnectLibrary_ConnectPatterns_IconText_mvc_controller, UBTConnectLibraryClientVariables, OSWidgets, UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view) {
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
        View.displayName = "ConnectPatterns.IconText";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnectLibrary_ConnectPatterns_IconText_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnectLibrary_ConnectPatterns_IconText_mvc_controller;
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
            return React.createElement("div", this.getRootNodeProperties(), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedEvents: {
                    onClick: function() {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);
                            controller.clicked$Action(controller.callContext(eventHandlerContext));
                        }, function() {
                            controller.popDebuggerContext(eventHandlerContext);
                        });
                        ;
                    }
                },
                visible: true,
                _idProps: {
                    service: idService,
                    name: "DIV_IconText"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, {
                inputs: {
                    ExtendedClasses: model.variables.extendedClassesIn,
                    _extendedClassesInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._extendedClassesInDataFetchStatus),
                    ColumnOptions: model.getCachedValue(idService.getId("sMb5qJARuk6LBwvDiM1Xeg.ColumnOptions"), function() {
                        return function() {
                            var rec = new UBTConnectLibraryModel.ColumnOptionsRec();
                            rec.columnBehaviourAttr = ((!(model.variables.isIconOnRightIn)) ? (UBTConnectLibraryModel.staticEntities.uBT_ColumnBehaviour.reduceFirst) : (UBTConnectLibraryModel.staticEntities.uBT_ColumnBehaviour.reduceLast));
                            rec.spacingSizeAttr = model.variables.spacingSizeIn;
                            rec.verticalAlignAttr = UBTConnectLibraryModel.staticEntities.uBT_VerticalAlign.center;
                            rec.flexDirectionAttr = ((model.variables.isIconOnRightIn) ? (UBTConnectLibraryModel.staticEntities.uBT_FlexDirection.rowReverse) : (OS.BuiltinFunctions.nullTextIdentifier()));
                            return rec;
                        }();
                    }, function() {
                        return model.variables.isIconOnRightIn;
                    }, function() {
                        return model.variables.spacingSizeIn;
                    }),
                    _columnOptionsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isIconOnRightInDataFetchStatus, model.variables._spacingSizeInDataFetchStatus)
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
                    alias: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                placeholders: {
                    left: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Placeholder, {
                            align: /*Default*/ 0,
                            content: _this.props.placeholders.icon,
                            _idProps: {
                                service: idService,
                                name: "Icon"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })];
                    }),
                    right: new PlaceholderContent(function() {
                        return [React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
                            inputs: {
                                InJustifyText: model.variables.in_JustifyTextIn,
                                _inJustifyTextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_JustifyTextInDataFetchStatus),
                                In_TextOptions: model.variables.textOptionsIn,
                                _in_TextOptionsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._textOptionsInDataFetchStatus),
                                In_Text: model.variables.textIn,
                                _in_TextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._textInDataFetchStatus)
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
                                alias: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        }), $if(((model.variables.in_SubtextIn) !== ("")), false, this, function() {
                            return [React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
                                inputs: {
                                    In_Text: model.variables.in_SubtextIn,
                                    _in_TextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_SubtextInDataFetchStatus),
                                    In_TextOptions: model.variables.subtextOptionsIn,
                                    _in_TextOptionsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._subtextOptionsInDataFetchStatus)
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
                                    uuid: "4",
                                    alias: "3"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                _dependencies: []
                            })];
                        }, function() {
                            return [];
                        })];
                    })
                }
            })));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
    return View;
});
```
