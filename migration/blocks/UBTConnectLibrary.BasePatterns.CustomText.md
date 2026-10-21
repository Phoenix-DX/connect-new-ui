# UBTConnectLibrary.BasePatterns.CustomText

- Kind: shell; build screens using it: AcceptPendingPolicies, BookmarksByGroup, BrowseCountries, BrowseDirectory, CommunityBusinessDetails_CoomingSoon, ConnectShare, ContactByEmailMember, ContactByEmailOneSchoolGlobal, ContactUsDetails, ContactUsMenu, CountryDetails, CountryList, FeedItemDetail, HomeFeed, HouseholdCarousel, HouseholdDetails, Household_Relations, LegacyShareObject, Locality_Details, Login, Menu, MessageDetail, MessageList, MyBookmarks, MyEntertaining, Notes, Notifications, OneSchoolGlobalDetails, PINBiometricsMenu, PINChange, PINRegister, PINUnlock, Photobook, Profile, Search, Services, Splash, SupperMeeting_Carousel, SupperMeeting_Details, TermsAndPoliciesMenu, Updates_SingleList
- Compiled source: `migration/screens/BookmarksByGroup/analysis/sources/pretty/UBTConnectLibrary.BasePatterns.CustomText.mvc.js`
- Child blocks: UBTConnectLibrary.ConnectPatterns.HighlightSearch, UBTConnectLibrary.ConnectPatterns.IconInline_Internal (queue: UBTConnectLibrary.ConnectPatterns.HighlightSearch, UBTConnectLibrary.ConnectPatterns.IconInline_Internal)

## Inputs

| Input | Type |
|---|---|
| In_Text | Text |
| In_PaddingOptions | Record SpacingOptionsRec |
| In_HighlightWords | Text |
| ExtendedClasses | Text |

## Captured DOM variants (82 distinct, 2429 instances)

### Variant 1: BookmarksByGroup/default (×255)

```html
<div class="OSBlockWidget" data-block="BasePatterns.CustomText" id="b2-l1-49_0-$b5">
  <div class="text-neutral-6 font-size-xs" data-container="" style="cursor: pointer;">
    <div class="OSBlockWidget" data-block="ConnectPatterns.IconInline_Internal" id="b2-l1-49_0-b5-$b2"><!-- nested block: 0 nodes --></div>
    <span data-expression="" style="margin-left: 0px;">
      Home
    </span>
  </div>
</div>
```

### Variant 2: BookmarksByGroup/default (×30)

```html
<div class="OSBlockWidget" data-block="BasePatterns.CustomText" id="b2-l1-49_3-$b5">
  <div class="text-primary font-size-xs" data-container="" style="cursor: pointer;">
    <div class="OSBlockWidget" data-block="ConnectPatterns.IconInline_Internal" id="b2-l1-49_3-b5-$b2"><!-- nested block: 0 nodes --></div>
    <span data-expression="" style="margin-left: 0px;">
      Bookmarks
    </span>
  </div>
</div>
```

### Variant 3: BrowseCountries/default (×37)

```html
<div class="OSBlockWidget" data-block="BasePatterns.CustomText" id="b2-l1-87_0-b7-$b7">
  <div class="font-semi-bold font-size-h6" data-container="" style="cursor: pointer;">
    <div class="OSBlockWidget" data-block="ConnectPatterns.IconInline_Internal" id="b2-l1-87_0-b7-b7-$b2"><!-- nested block: 0 nodes --></div>
    <span data-expression="" style="margin-left: 0px;">
      Argentina
    </span>
  </div>
</div>
```

### Variant 4: BrowseCountries/default (×300)

```html
<div class="OSBlockWidget" data-block="BasePatterns.CustomText" id="b2-l1-87_0-b7-l1-70_0-$b10">
  <div class="text-neutral-8 font-regular font-size-xxs" data-container="" style="cursor: pointer;">
    <div class="OSBlockWidget" data-block="ConnectPatterns.IconInline_Internal" id="b2-l1-87_0-b7-l1-70_0-b10-$b2"><!-- nested block: 0 nodes --></div>
    <span data-expression="" style="margin-left: 0px;">
      Localities
    </span>
  </div>
</div>
```

(78 more variants not shown: rerun with --variants)

## Compiled view (debugger lines removed)

```js
define("UBTConnectLibrary.BasePatterns.CustomText.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "react", "OutSystems/ReactView/Main", "UBTConnectLibrary.BasePatterns.CustomText.mvc$model", "UBTConnectLibrary.BasePatterns.CustomText.mvc$controller", "UBTConnectLibrary.clientVariables", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.ConnectPatterns.HighlightSearch.mvc$view", "UBTConnectLibrary.ConnectPatterns.IconInline_Internal.mvc$view", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.controller$GetClasses_Text", "UBTConnectLibrary.controller$FormatClasses", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.controller$GetSpacingOptions", "UBTConnectLibrary.model$InlineIconRec"], function(OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, React, OSView, UBTConnectLibrary_BasePatterns_CustomText_mvc_model, UBTConnectLibrary_BasePatterns_CustomText_mvc_controller, UBTConnectLibraryClientVariables, OSWidgets, UBTConnectLibrary_ConnectPatterns_HighlightSearch_mvc_view, UBTConnectLibrary_ConnectPatterns_IconInline_Internal_mvc_view) {
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
        View.displayName = "BasePatterns.CustomText";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_ConnectPatterns_HighlightSearch_mvc_view, UBTConnectLibrary_ConnectPatterns_IconInline_Internal_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnectLibrary_BasePatterns_CustomText_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnectLibrary_BasePatterns_CustomText_mvc_controller;
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
                style: model.getCachedValue(idService.getId("AgomVlnJ8UmotMHrCCzjiA.Style"), function() {
                                            return UBTConnectLibraryController.default.getClasses_Text$Action(model.variables.in_TextOptionsIn, callContext).classesOut;
                                        }, OS.DataTypes.DataTypes.Text, callContext.id), model.variables.extendedClassesIn, callContext).classesOutOut;
                                    }, OS.DataTypes.DataTypes.Text, callContext.id), ((model.variables.fitContentIn) ? ("ubt-with-fit-content") : ("")), callContext).classesOutOut;
                                    return UBTConnectLibraryController.default.getSpacingOptions$Action("padding", model.variables.in_PaddingOptionsIn, callContext).classesOut;
                                }, OS.DataTypes.DataTypes.Text, callContext.id), callContext).classesOutOut;
                            }, OS.DataTypes.DataTypes.Text, callContext.id), ((model.variables.inJustifyTextIn) ? ("text-justify") : ("")), callContext).classesOutOut;
                        }, OS.DataTypes.DataTypes.Text, callContext.id), ((model.variables.noWrapIn) ? ("text-no-wrap") : ("")), callContext).classesOutOut;
                    }, OS.DataTypes.DataTypes.Text, callContext.id);
                }, function() {
                    return model.variables.in_TextOptionsIn;
                }, function() {
                    return model.variables.extendedClassesIn;
                }, function() {
                    return model.variables.fitContentIn;
                }, function() {
                    return model.variables.in_PaddingOptionsIn;
                }, function() {
                    return model.variables.inJustifyTextIn;
                }, function() {
                    return model.variables.noWrapIn;
                }),
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "0"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_TextOptionsInDataFetchStatus, model.variables._extendedClassesInDataFetchStatus, model.variables._fitContentInDataFetchStatus, model.variables._in_PaddingOptionsInDataFetchStatus, model.variables._inJustifyTextInDataFetchStatus, model.variables._noWrapInDataFetchStatus)
            }, $if(((model.variables.in_HighlightWordsIn) !== ("")), false, this, function() {
                return [React.createElement(UBTConnectLibrary_ConnectPatterns_HighlightSearch_mvc_view, {
                    inputs: {
                        Text: model.variables.in_TextIn,
                        _textInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_TextInDataFetchStatus),
                        SearchTerms: model.variables.in_HighlightWordsIn,
                        _searchTermsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_HighlightWordsInDataFetchStatus),
                        StopWords: "and in",
                        InlineIcon: model.variables.inlineIconIn,
                        _inlineIconInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._inlineIconInDataFetchStatus),
                        HighlightClasses: model.getCachedValue(idService.getId("Ur1gPF28aEiybtK3ZTbyJQ.HighlightClasses"), function() {
                                return UBTConnectLibraryController.default.getClasses_Text$Action(model.variables.in_HighlightOptionsIn, callContext).classesOut;
                            }, OS.DataTypes.DataTypes.Text, callContext.id);
                        }, function() {
                            return model.variables.in_HighlightOptionsIn;
                        }),
                        _highlightClassesInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_HighlightOptionsInDataFetchStatus)
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
                    _dependencies: []
                })];
            }, function() {
                return [React.createElement(UBTConnectLibrary_ConnectPatterns_IconInline_Internal_mvc_view, {
                    inputs: {
                        InlineIcon: model.variables.inlineIconIn,
                        _inlineIconInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._inlineIconInDataFetchStatus)
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
                        alias: "2"
                    },
                    _widgetRecordProvider: widgetsRecordProvider,
                    _dependencies: []
                }), React.createElement(OSWidgets.Expression, {
                    gridProperties: {
                        marginLeft: "0"
                    },
                    value: model.variables.in_TextIn,
                    _idProps: {
                        service: idService,
                        uuid: "3"
                    },
                    _widgetRecordProvider: widgetsRecordProvider,
                    value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_TextInDataFetchStatus)
                })];
            })));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
    return View;
});
```
