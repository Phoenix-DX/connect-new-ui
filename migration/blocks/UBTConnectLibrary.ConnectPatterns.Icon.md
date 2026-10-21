# UBTConnectLibrary.ConnectPatterns.Icon

- Kind: shell; build screens using it: AcceptPendingPolicies, BookmarksByGroup, BrowseCountries, BrowseDirectory, CommunityBusinessDetails_CoomingSoon, ConnectShare, ContactByEmailMember, ContactByEmailOneSchoolGlobal, ContactUsDetails, ContactUsMenu, CountryDetails, CountryList, FeedItemDetail, HomeFeed, HouseholdCarousel, HouseholdDetails, Household_Relations, LegacyShareObject, Locality_Details, Login, Menu, MessageDetail, MessageList, MyBookmarks, MyEntertaining, Notes, Notifications, OneSchoolGlobalDetails, PINBiometricsMenu, PINChange, PINRegister, PINUnlock, Photobook, Profile, Search, Services, Splash, SupperMeeting_Carousel, SupperMeeting_Details, TermsAndPoliciesMenu, Updates_SingleList
- Compiled source: `migration/screens/BookmarksByGroup/analysis/sources/pretty/UBTConnectLibrary.ConnectPatterns.Icon.mvc.js`
- Child blocks: UBTConnectLibrary.ConnectPatterns.IconSVG (queue: UBTConnectLibrary.ConnectPatterns.IconSVG)

## Inputs

| Input | Type |
|---|---|
| In_IconId | Text |
| In_ColorId | Text |
| In_SizeId | Text |
| In_Visible | Boolean |
| In_ExtendedClasses | Text |

## Captured DOM variants (128 distinct, 1582 instances)

### Variant 1: BookmarksByGroup/default (×54)

```html
<div class="OSBlockWidget" data-block="ConnectPatterns.Icon" id="b2-l1-49_0-$b4">
  <div class="ubt-icon connect-icon-home text-neutral-6 icon-base" data-container="" style="cursor: pointer;"></div>
</div>
```

### Variant 2: BookmarksByGroup/default (×42)

```html
<div class="OSBlockWidget" data-block="ConnectPatterns.Icon" id="b2-l1-49_1-$b4">
  <div class="ubt-icon connect-icon-union text-neutral-6 icon-base" data-container="" style="cursor: pointer;"></div>
</div>
```

### Variant 3: BookmarksByGroup/default (×54)

```html
<div class="OSBlockWidget" data-block="ConnectPatterns.Icon" id="b2-l1-49_2-b3-$b3">
  <div class="ubt-icon connect-icon-list_alt text-neutral-6 icon-base ignore-loading" data-container="" style="cursor: pointer;"></div>
</div>
```

### Variant 4: BookmarksByGroup/default (×6)

```html
<div class="OSBlockWidget" data-block="ConnectPatterns.Icon" id="b2-l1-49_3-$b4">
  <div class="ubt-icon connect-icon-contacts_fill text-primary icon-base" data-container="" style="cursor: pointer;"></div>
</div>
```

(124 more variants not shown: rerun with --variants)

## Compiled view (debugger lines removed)

```js
define("UBTConnectLibrary.ConnectPatterns.Icon.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "react", "OutSystems/ReactView/Main", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$model", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$controller", "UBTConnectLibrary.clientVariables", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.ConnectPatterns.IconSVG.mvc$view", "UBTConnectLibrary.controller$FormatClasses", "UBTConnectLibrary.controller$GetClass_Color"], function(OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, React, OSView, UBTConnectLibrary_ConnectPatterns_Icon_mvc_model, UBTConnectLibrary_ConnectPatterns_Icon_mvc_controller, UBTConnectLibraryClientVariables, OSWidgets, UBTConnectLibrary_ConnectPatterns_IconSVG_mvc_view) {
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
        View.displayName = "ConnectPatterns.Icon";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_ConnectPatterns_IconSVG_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnectLibrary_ConnectPatterns_Icon_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnectLibrary_ConnectPatterns_Icon_mvc_controller;
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
            return React.createElement("div", this.getRootNodeProperties(), $if(false, false, this, function() {
                return [];
            }, function() {
                return [React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: true,
                    extendedEvents: {
                        onClick: function() {
                            var eventHandlerContext = callContext.clone();
                            return OS.Flow.tryFinally(function() {
                                var varBag = {};
                                controller.pushDebuggerContext(eventHandlerContext);
                                controller.click$Action(controller.callContext(eventHandlerContext));
                            }, function() {
                                controller.popDebuggerContext(eventHandlerContext);
                            });
                            ;
                        }
                    },
                    style: model.getCachedValue(idService.getId("Xbv+wPKEZkGV7DGP4E_MSQ.Style"), function() {
                                    return UBTConnectLibraryController.default.formatClasses$Action(model.variables.mainContainerClassVar, model.variables.in_IconIdIn, callContext).classesOutOut;
                                    return UBTConnectLibraryController.default.getClass_Color$Action(model.variables.in_ColorIdIn, callContext).out_ColorClassOut;
                                }, OS.DataTypes.DataTypes.Text, callContext.id), callContext).classesOutOut;
                            }, OS.DataTypes.DataTypes.Text, callContext.id), model.variables.in_SizeIdIn, callContext).classesOutOut;
                        }, OS.DataTypes.DataTypes.Text, callContext.id) + ((((model.variables.in_ExtendedClassesIn) !== (""))) ? ((" " + model.variables.in_ExtendedClassesIn)) : ("")));
                    }, function() {
                        return model.variables.mainContainerClassVar;
                    }, function() {
                        return model.variables.in_IconIdIn;
                    }, function() {
                        return model.variables.in_ColorIdIn;
                    }, function() {
                        return model.variables.in_SizeIdIn;
                    }, function() {
                        return model.variables.in_ExtendedClassesIn;
                    }),
                    visible: model.variables.in_VisibleIn,
                    _idProps: {
                        service: idService,
                        uuid: "0"
                    },
                    _widgetRecordProvider: widgetsRecordProvider,
                    style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_IconIdInDataFetchStatus, model.variables._in_ColorIdInDataFetchStatus, model.variables._in_SizeIdInDataFetchStatus, model.variables._in_ExtendedClassesInDataFetchStatus),
                    visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_VisibleInDataFetchStatus)
                }, $if(((OS.BuiltinFunctions.index(model.variables.in_IconIdIn, "SVG_", 0, false, true)) !== (-1)), false, this, function() {
                    return [React.createElement(UBTConnectLibrary_ConnectPatterns_IconSVG_mvc_view, {
                        inputs: {
                            In_IconId: model.variables.in_IconIdIn,
                            _in_IconIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_IconIdInDataFetchStatus)
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
                    return [];
                }))];
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
    return View;
});
```
