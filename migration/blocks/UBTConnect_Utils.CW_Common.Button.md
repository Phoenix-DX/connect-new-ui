# UBTConnect_Utils.CW_Common.Button

- Kind: shell; build screens using it: AcceptPendingPolicies, BookmarksByGroup, BrowseCountries, BrowseDirectory, CommunityBusinessDetails_CoomingSoon, ConnectShare, ContactByEmailMember, ContactByEmailOneSchoolGlobal, ContactUsDetails, ContactUsMenu, CountryDetails, CountryList, FeedItemDetail, HomeFeed, HouseholdCarousel, HouseholdDetails, Household_Relations, LegacyShareObject, Locality_Details, Login, Menu, MessageDetail, MessageList, MyBookmarks, MyEntertaining, Notes, Notifications, OneSchoolGlobalDetails, PINBiometricsMenu, PINChange, PINRegister, PINUnlock, Photobook, Profile, Search, Services, Splash, SupperMeeting_Carousel, SupperMeeting_Details, TermsAndPoliciesMenu, Updates_SingleList
- Compiled source: `migration/screens/ContactByEmailMember/analysis/sources/pretty/UBTConnect_Utils.CW_Common.Button.mvc.js`
- Child blocks: UBTConnectLibrary.ConnectPatterns.Button, UBTConnectLibrary.ConnectPatterns.Icon, UBTConnectLibrary.ConnectPatterns.IconText (queue: UBTConnectLibrary.ConnectPatterns.IconText)

## Inputs

| Input | Type |
|---|---|
| ButtonExtendedClass | Text |
| IconId | Text |
| HideIcon | Boolean |

## Captured DOM variants (1 distinct, 24 instances)

### Variant 1: ContactByEmailMember/default (×24)

```html
<div class="OSBlockWidget" data-block="CW_Common.Button" id="b2-$b11">
  <div class="OSBlockWidget" data-block="ConnectPatterns.Button" id="b2-b11-$b1"><!-- nested block: 20 nodes --></div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("UBTConnect_Utils.CW_Common.Button.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "UBTConnectLibrary.model", "react", "OutSystems/ReactView/Main", "UBTConnect_Utils.CW_Common.Button.mvc$model", "UBTConnect_Utils.CW_Common.Button.mvc$controller", "UBTConnect_Utils.clientVariables", "UBTConnectLibrary.ConnectPatterns.Button.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.ConnectPatterns.IconText.mvc$view", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$view", "UBTConnectLibrary.model$ButtonOptionsRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$TextOptionsRec"], function(OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, UBTConnectLibraryModel, React, OSView, UBTConnect_Utils_CW_Common_Button_mvc_model, UBTConnect_Utils_CW_Common_Button_mvc_controller, UBTConnect_UtilsClientVariables, UBTConnectLibrary_ConnectPatterns_Button_mvc_view, OSWidgets, UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view) {
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
        View.displayName = "CW_Common.Button";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_ConnectPatterns_Button_mvc_view, UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_Utils_CW_Common_Button_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_Utils_CW_Common_Button_mvc_controller;
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
            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnectLibrary_ConnectPatterns_Button_mvc_view, {
                inputs: {
                    In_ButtonOptions: model.variables.buttonOptionsIn,
                    _in_ButtonOptionsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._buttonOptionsInDataFetchStatus),
                    In_ExtendedClass: model.variables.buttonExtendedClassIn,
                    _in_ExtendedClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._buttonExtendedClassInDataFetchStatus),
                    In_IsDisabled: model.variables.isDisabledIn,
                    _in_IsDisabledInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isDisabledInDataFetchStatus)
                },
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    },
                    event_OnClick$Action: function() {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);
                            controller.buttonOnClick$Action(controller.callContext(eventHandlerContext));
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
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                placeholders: {
                    content: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "osui-btn-loading__spinner-animation",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "1"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), React.createElement(UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, {
                            inputs: {
                                Text: model.variables.buttonTextIn,
                                _textInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._buttonTextInDataFetchStatus),
                                SpacingSize: model.variables.iconText_SpacingSizeIn,
                                _spacingSizeInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._iconText_SpacingSizeInDataFetchStatus),
                                ExtendedClasses: model.variables.textExtendedClassesIn,
                                _extendedClassesInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._textExtendedClassesInDataFetchStatus),
                                IsIconOnRight: model.variables.isIconOnRightIn,
                                _isIconOnRightInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isIconOnRightInDataFetchStatus)
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
                            placeholders: {
                                icon: new PlaceholderContent(function() {
                                    return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
                                        inputs: {
                                            In_Visible: !(model.variables.hideIconIn),
                                            _in_VisibleInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._hideIconInDataFetchStatus),
                                            In_IconId: model.variables.iconIdIn,
                                            _in_IconIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._iconIdInDataFetchStatus)
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
                                        _dependencies: []
                                    })];
                                })
                            },
                            _dependencies: [asPrimitiveValue(model.variables.iconIdIn), asPrimitiveValue(model.variables._iconIdInDataFetchStatus), asPrimitiveValue(model.variables._hideIconInDataFetchStatus), asPrimitiveValue(model.variables.hideIconIn)]
                        })];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.iconIdIn), asPrimitiveValue(model.variables.hideIconIn), asPrimitiveValue(model.variables.isIconOnRightIn), asPrimitiveValue(model.variables.textExtendedClassesIn), asPrimitiveValue(model.variables.iconText_SpacingSizeIn), asPrimitiveValue(model.variables._iconIdInDataFetchStatus), asPrimitiveValue(model.variables._hideIconInDataFetchStatus), asPrimitiveValue(model.variables._isIconOnRightInDataFetchStatus), asPrimitiveValue(model.variables._textExtendedClassesInDataFetchStatus), asPrimitiveValue(model.variables._iconText_SpacingSizeInDataFetchStatus), asPrimitiveValue(model.variables._buttonTextInDataFetchStatus), asPrimitiveValue(model.variables.buttonTextIn)]
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
    return View;
});
```
