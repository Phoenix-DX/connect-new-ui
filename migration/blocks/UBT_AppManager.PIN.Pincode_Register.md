# UBT_AppManager.PIN.Pincode_Register

- Kind: shared; build screens using it: PINChange, PINRegister
- Compiled source: `migration/screens/PINRegister/analysis/sources/pretty/UBT_AppManager.PIN.Pincode_Register.mvc.js`
- Child blocks: UBT_AppManager.PIN.PinCode (queue: UBT_AppManager.PIN.PinCode)

## Inputs

| Input | Type |
|---|---|
| In_PinLength | Integer |
| In_ExtendedClasses | Text |
| In_AllowBackNavigation | Boolean |

## Captured DOM variants (1 distinct, 3 instances)

### Variant 1: PINRegister/default (×3)

```html
<div class="OSBlockWidget" data-block="PIN.Pincode_Register" id="b4-$b1">
  <div class="pincode-registration" data-container="" style="text-align: center;">
    <div class="OSBlockWidget" data-block="PIN.PinCode" id="b4-b1-$b1"><!-- nested block: 95 nodes --></div>
  </div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("UBT_AppManager.PIN.Pincode_Register.mvc$view", ["OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "react", "OutSystems/ReactView/Main", "UBT_AppManager.PIN.Pincode_Register.mvc$model", "UBT_AppManager.PIN.Pincode_Register.mvc$controller", "UBT_AppManager.clientVariables", "OutSystems/ReactWidgets/Main", "UBT_AppManager.PIN.PinCode.mvc$view", "UBT_AppManager.model$Pin_LocalStorage_ItemRec", "UBT_AppManager.controller$AppManager_SetPIN_IsRegistering", "UBT_AppManager.controller$PIN_Get", "UBT_AppManager.controller$AppManager_GetAppId", "UBT_AppManager.controller$PIN_Set", "UBT_AppManager.controller$PIN_ValidateRules", "UBT_AppManager.controller$AppManager_SetPIN_HasUnlocked", "UBT_AppManager.controller$PIN_SessionInactivity_Start"], function(OutSystems, UBT_AppManagerModel, UBT_AppManagerController, React, OSView, UBT_AppManager_PIN_Pincode_Register_mvc_model, UBT_AppManager_PIN_Pincode_Register_mvc_controller, UBT_AppManagerClientVariables, OSWidgets, UBT_AppManager_PIN_PinCode_mvc_view) {
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
        View.displayName = "PIN.Pincode_Register";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBT_AppManager_PIN_PinCode_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBT_AppManager_PIN_Pincode_Register_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBT_AppManager_PIN_Pincode_Register_mvc_controller;
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
                align: /*Center*/ 2,
                animate: false,
                style: "pincode-registration",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "0"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(UBT_AppManager_PIN_PinCode_mvc_view, {
                inputs: {
                    In_AllowBackNavigation: model.variables.in_AllowBackNavigationIn,
                    _in_AllowBackNavigationInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_AllowBackNavigationInDataFetchStatus),
                    In_ExtendedClasses: model.variables.in_ExtendedClassesIn,
                    _in_ExtendedClassesInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ExtendedClassesInDataFetchStatus),
                    Length: model.variables.in_PinLengthIn,
                    _lengthInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_PinLengthInDataFetchStatus)
                },
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    },
                    keyPressed$Action: function() {
                        return Promise.resolve().then(function() {
                            var eventHandlerContext = callContext.clone();
                            return OS.Flow.tryFinally(function() {
                                var varBag = {};
                                controller.pushDebuggerContext(eventHandlerContext);
                                return controller.pinCodeKeyPressed$Action(controller.callContext(eventHandlerContext));
                            }, function() {
                                controller.popDebuggerContext(eventHandlerContext);
                            });
                        });;
                    },
                    setPin$Action: function(ubtpincodeIn) {
                        return Promise.resolve().then(function() {
                            var eventHandlerContext = callContext.clone();
                            return OS.Flow.tryFinally(function() {
                                var varBag = {};
                                controller.pushDebuggerContext(eventHandlerContext);
                                return controller.onSetPin$Action(ubtpincodeIn, controller.callContext(eventHandlerContext));
                            }, function() {
                                controller.popDebuggerContext(eventHandlerContext);
                            });
                        });;
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
                    headerBar: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "text-align: left;"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Placeholder, {
                            align: /*Default*/ 0,
                            content: _this.props.placeholders.headerBar,
                            _idProps: {
                                service: idService,
                                name: "HeaderBar"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }))];
                    }),
                    titlePlaceholder: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Placeholder, {
                            align: /*Default*/ 0,
                            content: _this.props.placeholders.titlePlaceholder,
                            _idProps: {
                                service: idService,
                                name: "TitlePlaceholder"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })];
                    }),
                    message: new PlaceholderContent(function() {
                        return [$if(model.variables.isFirstUseVar, false, this, function() {
                            return [React.createElement(OSWidgets.Placeholder, {
                                align: /*Default*/ 0,
                                content: _this.props.placeholders.registrationText,
                                _idProps: {
                                    service: idService,
                                    name: "RegistrationText"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })];
                        }, function() {
                            return [React.createElement(OSWidgets.Placeholder, {
                                align: /*Default*/ 0,
                                content: _this.props.placeholders.confirmationText,
                                _idProps: {
                                    service: idService,
                                    name: "ConfirmationText"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })];
                        })];
                    }),
                    option: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Placeholder, {
                            align: /*Default*/ 0,
                            content: _this.props.placeholders.optionPlaceholder,
                            style: "pincode-button",
                            _idProps: {
                                service: idService,
                                name: "OptionPlaceholder"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })];
                    }),
                    erasePlaceholder: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Placeholder, {
                            align: /*Default*/ 0,
                            content: _this.props.placeholders.erasePlaceholder,
                            _idProps: {
                                service: idService,
                                name: "ErasePlaceholder"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })];
                    }),
                    placeholder_BottomKeyboard: PlaceholderContent.Empty,
                    contentPlaceholder: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Placeholder, {
                            align: /*Default*/ 0,
                            content: _this.props.placeholders.contentPlaceholder,
                            style: "content-placeholder",
                            _idProps: {
                                service: idService,
                                name: "ContentPlaceholder"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
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
