# UBTConnectLibrary.ConnectPatterns.StaticInput

- Kind: shared; build screens using it: CommunityBusinessDetails_CoomingSoon, CountryList, HomeFeed, Locality_Details, Profile
- Compiled source: `migration/screens/CommunityBusinessDetails_CoomingSoon/analysis/sources/pretty/UBTConnectLibrary.ConnectPatterns.StaticInput.mvc.js`
- Child blocks: UBTConnectLibrary.ConnectPatterns.Icon, UBTConnectLibrary.ConnectPatterns.TextEllipsis (queue: UBTConnectLibrary.ConnectPatterns.TextEllipsis)

## Inputs

| Input | Type |
|---|---|
| In_Prompt | Text |
| In_ExtendedClasses | Text |

## Captured DOM variants (1 distinct, 12 instances)

### Variant 1: CommunityBusinessDetails_CoomingSoon/default (×12)

```html
<div class="OSBlockWidget" data-block="ConnectPatterns.StaticInput" id="$b2">
  <div class="ubt-static-input" data-container="" style="cursor: pointer;">
    <div class="OSBlockWidget" data-block="ConnectPatterns.Icon" id="b2-$b1"><!-- nested block: 1 nodes --></div>
    <div class="OSBlockWidget" data-block="ConnectPatterns.TextEllipsis" id="b2-$b2"><!-- nested block: 2 nodes --></div>
  </div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("UBTConnectLibrary.ConnectPatterns.StaticInput.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "react", "OutSystems/ReactView/Main", "UBTConnectLibrary.ConnectPatterns.StaticInput.mvc$model", "UBTConnectLibrary.ConnectPatterns.StaticInput.mvc$controller", "UBTConnectLibrary.clientVariables", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$view", "UBTConnectLibrary.ConnectPatterns.TextEllipsis.mvc$view"], function(OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, React, OSView, UBTConnectLibrary_ConnectPatterns_StaticInput_mvc_model, UBTConnectLibrary_ConnectPatterns_StaticInput_mvc_controller, UBTConnectLibraryClientVariables, OSWidgets, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnectLibrary_ConnectPatterns_TextEllipsis_mvc_view) {
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
        View.displayName = "ConnectPatterns.StaticInput";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnectLibrary_ConnectPatterns_TextEllipsis_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnectLibrary_ConnectPatterns_StaticInput_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnectLibrary_ConnectPatterns_StaticInput_mvc_controller;
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
                            controller.click_Input$Action(controller.callContext(eventHandlerContext));
                        }, function() {
                            controller.popDebuggerContext(eventHandlerContext);
                        });
                        ;
                    }
                },
                style: ("ubt-static-input " + model.variables.in_ExtendedClassesIn),
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "0"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ExtendedClassesInDataFetchStatus)
            }, React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
                inputs: {
                    In_ColorId: UBTConnectLibraryModel.staticEntities.uBT_Color.inherit,
                    In_IconId: UBTConnectLibraryModel.staticEntities.uBT_Icons.search,
                    In_SizeId: UBTConnectLibraryModel.staticEntities.uBT_IconSize.medium_20
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
            }), React.createElement(UBTConnectLibrary_ConnectPatterns_TextEllipsis_mvc_view, {
                inputs: {
                    Text: model.variables.in_PromptIn,
                    _textInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_PromptInDataFetchStatus)
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
            })));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
    return View;
});
```
