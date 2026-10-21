# Connect2_LegacyShared.Reusable.Person_Contact_Options

- Kind: shared; build screens using it: AssembleDetail, LDM_EventDetail_V2, LDM_MyEvents_V2
- Compiled source: `migration/screens/LDM_EventDetail_V2/analysis/sources/pretty/Connect2_LegacyShared.Reusable.Person_Contact_Options.mvc.js`
- Child blocks: - (queue: -)

## Inputs

| Input | Type |
|---|---|
| Phone | PhoneNumber |
| MobilePhone | PhoneNumber |
| WorkPhone | PhoneNumber |
| EmailAddress | Email |

## Captured DOM variants (1 distinct, 1 instances)

### Variant 1: LDM_EventDetail_V2/default (×1)

```html
<div class="OSBlockWidget" data-block="Reusable.Person_Contact_Options" id="b1-b5-$b1">
  <div class="block-household-person-options" data-container="">
    <a data-link="" data-original-href="#">
      <div data-container="" id="b1-b5-b1-Call_Phone">
        <i class="icon fa fa-phone fa-1x" data-icon=""></i>
      </div>
    </a>
    <a data-link="" data-original-href="#">
      <div class="block-household-person-options-email text-dark-blue" data-container="" id="b1-b5-b1-Email">
        <i class="icon fa fa-envelope fa-1x" data-icon=""></i>
      </div>
    </a>
  </div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("Connect2_LegacyShared.Reusable.Person_Contact_Options.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "react", "OutSystems/ReactView/Main", "Connect2_LegacyShared.Reusable.Person_Contact_Options.mvc$model", "Connect2_LegacyShared.Reusable.Person_Contact_Options.mvc$controller", "Connect2_LegacyShared.clientVariables", "OutSystems/ReactWidgets/Main"], function(OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, React, OSView, Connect2_LegacyShared_Reusable_Person_Contact_Options_mvc_model, Connect2_LegacyShared_Reusable_Person_Contact_Options_mvc_controller, Connect2_LegacySharedClientVariables, OSWidgets) {
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
        View.displayName = "Reusable.Person_Contact_Options";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return Connect2_LegacyShared_Reusable_Person_Contact_Options_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return Connect2_LegacyShared_Reusable_Person_Contact_Options_mvc_controller;
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
                style: "block-household-person-options",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "0"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Link, {
                enabled: ((model.variables.phoneIn) !== ("")),
                onClick: function() {
                    var eventHandlerContext = callContext.clone();
                    return OS.Flow.tryFinally(function() {
                        var varBag = {};
                        controller.pushDebuggerContext(eventHandlerContext);
                        controller.callClicked$Action(model.variables.phoneIn, controller.callContext(eventHandlerContext));
                    }, function() {
                        controller.popDebuggerContext(eventHandlerContext);
                    });
                    ;
                },
                visible: ((model.variables.phoneIn) !== ("")),
                _idProps: {
                    service: idService,
                    uuid: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                enabled_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._phoneInDataFetchStatus),
                visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._phoneInDataFetchStatus)
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                visible: true,
                _idProps: {
                    service: idService,
                    name: "Call_Phone"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Icon, {
                icon: "phone",
                iconSize: /*FontSize*/ 0,
                style: "icon ",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "3"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }))), React.createElement(OSWidgets.Link, {
                enabled: ((model.variables.mobilePhoneIn) !== ("")),
                onClick: function() {
                    var eventHandlerContext = callContext.clone();
                    return OS.Flow.tryFinally(function() {
                        var varBag = {};
                        controller.pushDebuggerContext(eventHandlerContext);
                        controller.callClicked$Action(model.variables.mobilePhoneIn, controller.callContext(eventHandlerContext));
                    }, function() {
                        controller.popDebuggerContext(eventHandlerContext);
                    });
                    ;
                },
                visible: ((model.variables.mobilePhoneIn) !== ("")),
                _idProps: {
                    service: idService,
                    uuid: "4"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                enabled_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._mobilePhoneInDataFetchStatus),
                visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._mobilePhoneInDataFetchStatus)
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: ("block-household-person-options-mobile" + " text-green-darker"),
                visible: true,
                _idProps: {
                    service: idService,
                    name: "Call_Mobile"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Icon, {
                icon: "mobile",
                iconSize: /*FontSize*/ 0,
                style: "icon",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "6"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }))), React.createElement(OSWidgets.Link, {
                enabled: ((model.variables.workPhoneIn) !== ("")),
                onClick: function() {
                    var eventHandlerContext = callContext.clone();
                    return OS.Flow.tryFinally(function() {
                        var varBag = {};
                        controller.pushDebuggerContext(eventHandlerContext);
                        controller.callClicked$Action(model.variables.workPhoneIn, controller.callContext(eventHandlerContext));
                    }, function() {
                        controller.popDebuggerContext(eventHandlerContext);
                    });
                    ;
                },
                visible: ((model.variables.workPhoneIn) !== ("")),
                _idProps: {
                    service: idService,
                    uuid: "7"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                enabled_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._workPhoneInDataFetchStatus),
                visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._workPhoneInDataFetchStatus)
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: ("block-household-person-options-work" + " text-dark-blue"),
                visible: true,
                _idProps: {
                    service: idService,
                    name: "Call_Work"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Icon, {
                icon: "briefcase",
                iconSize: /*FontSize*/ 0,
                style: "icon",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "9"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }))), React.createElement(OSWidgets.Link, {
                enabled: ((model.variables.emailAddressIn) !== ("")),
                onClick: function() {
                    var eventHandlerContext = callContext.clone();
                    return OS.Flow.tryFinally(function() {
                        var varBag = {};
                        controller.pushDebuggerContext(eventHandlerContext);
                        controller.emailClicked$Action(model.variables.emailAddressIn, controller.callContext(eventHandlerContext));
                    }, function() {
                        controller.popDebuggerContext(eventHandlerContext);
                    });
                    ;
                },
                visible: ((model.variables.emailAddressIn) !== ("")),
                _idProps: {
                    service: idService,
                    uuid: "10"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                enabled_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._emailAddressInDataFetchStatus),
                visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._emailAddressInDataFetchStatus)
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: ("block-household-person-options-email" + " text-dark-blue"),
                visible: true,
                _idProps: {
                    service: idService,
                    name: "Email"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Icon, {
                icon: "envelope",
                iconSize: /*FontSize*/ 0,
                style: "icon",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "12"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })))));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
    return View;
});
```
