# UBTConnectLibrary.ConnectPatterns.HorizontalTagList

- Kind: shared; build screens using it: HouseholdCarousel, HouseholdDetails, Locality_Details, Profile, Search, SupperMeeting_Carousel, Updates_SingleList
- Compiled source: `migration/screens/HouseholdCarousel/analysis/sources/pretty/UBTConnectLibrary.ConnectPatterns.HorizontalTagList.mvc.js`
- Child blocks: UBTConnectLibrary.ConnectPatterns.TagToggle (queue: UBTConnectLibrary.ConnectPatterns.TagToggle)

## Inputs

| Input | Type |
|---|---|
| In_IsSingleSelection | Boolean |
| In_IsMandatorySelection | Boolean |
| In_HorizontalPadding | Text |
| ExtendedClasses | Text |
| isEnabled | Boolean |

## Captured DOM variants (6 distinct, 25 instances)

### Variant 1: HouseholdCarousel/default (×14)

```html
<div class="OSBlockWidget" data-block="ConnectPatterns.HorizontalTagList" id="b3-l1-1152_0-b2-b3-b1-$b7">
  <div class="list list-group list-horizontal--gap-xs ubt-tag-list OSFillParent" data-list="" data-virtualization-disabled="">
    <div class="OSBlockWidget" data-block="ConnectPatterns.TagToggle" id="b3-l1-1152_0-b2-b3-b1-b7-l1-1163_0-$b1"><!-- nested block: 4 nodes --></div>
    <div class="OSBlockWidget" data-block="ConnectPatterns.TagToggle" id="b3-l1-1152_0-b2-b3-b1-b7-l1-1163_1-$b1"><!-- nested block: 4 nodes --></div>
  </div>
</div>
```

### Variant 2: HouseholdDetails/loading (×2)

```html
<div class="OSBlockWidget" data-block="ConnectPatterns.HorizontalTagList" id="b2-$b7">
  <div class="list list-group list-horizontal--gap-xs ubt-tag-list OSFillParent" data-list="" data-virtualization-disabled=""></div>
</div>
```

### Variant 3: Locality_Details/default (×1)

```html
<div class="OSBlockWidget" data-block="ConnectPatterns.HorizontalTagList" id="$b16">
  <div class="list list-group list-horizontal--gap-xs ubt-tag-list household-tag padding-x-base OSFillParent" data-list="" data-virtualization-disabled="">
    <div class="OSBlockWidget" data-block="ConnectPatterns.TagToggle" id="b16-l1-77_0-$b1"><!-- nested block: 4 nodes --></div>
    <div class="OSBlockWidget" data-block="ConnectPatterns.TagToggle" id="b16-l1-77_1-$b1"><!-- nested block: 4 nodes --></div>
    <div class="OSBlockWidget" data-block="ConnectPatterns.TagToggle" id="b16-l1-77_2-$b1"><!-- nested block: 4 nodes --></div>
    <div class="OSBlockWidget" data-block="ConnectPatterns.TagToggle" id="b16-l1-77_3-$b1"><!-- nested block: 4 nodes --></div>
  </div>
</div>
```

### Variant 4: Locality_Details/loading (×2)

```html
<div class="OSBlockWidget" data-block="ConnectPatterns.HorizontalTagList" id="$b16">
  <div class="list list-group list-horizontal--gap-xs ubt-tag-list household-tag padding-x-base OSFillParent" data-list="" data-virtualization-disabled="">
    <div class="OSBlockWidget" data-block="ConnectPatterns.TagToggle" id="b16-l1-77_0-$b1"><!-- nested block: 4 nodes --></div>
    <div class="OSBlockWidget" data-block="ConnectPatterns.TagToggle" id="b16-l1-77_1-$b1"><!-- nested block: 4 nodes --></div>
    <div class="OSBlockWidget" data-block="ConnectPatterns.TagToggle" id="b16-l1-77_2-$b1"><!-- nested block: 4 nodes --></div>
    <div class="OSBlockWidget" data-block="ConnectPatterns.TagToggle" id="b16-l1-77_3-$b1"><!-- nested block: 4 nodes --></div>
    <div class="OSBlockWidget" data-block="ConnectPatterns.TagToggle" id="b16-l1-77_4-$b1"><!-- nested block: 4 nodes --></div>
  </div>
</div>
```

(2 more variants not shown: rerun with --variants)

## Compiled view (debugger lines removed)

```js
define("UBTConnectLibrary.ConnectPatterns.HorizontalTagList.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "react", "OutSystems/ReactView/Main", "UBTConnectLibrary.ConnectPatterns.HorizontalTagList.mvc$model", "UBTConnectLibrary.ConnectPatterns.HorizontalTagList.mvc$controller", "UBTConnectLibrary.clientVariables", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.ConnectPatterns.TagToggle.mvc$view", "UBTConnectLibrary.controller$FormatClasses", "UBTConnectLibrary.model$TagList", "UBTConnectLibrary.model$TagRec"], function(OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, React, OSView, UBTConnectLibrary_ConnectPatterns_HorizontalTagList_mvc_model, UBTConnectLibrary_ConnectPatterns_HorizontalTagList_mvc_controller, UBTConnectLibraryClientVariables, OSWidgets, UBTConnectLibrary_ConnectPatterns_TagToggle_mvc_view) {
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
        View.displayName = "ConnectPatterns.HorizontalTagList";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_ConnectPatterns_TagToggle_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnectLibrary_ConnectPatterns_HorizontalTagList_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnectLibrary_ConnectPatterns_HorizontalTagList_mvc_controller;
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
            return React.createElement("div", this.getRootNodeProperties(), React.createElement(OSWidgets.List, {
                animateItems: true,
                extendedProperties: {
                    "disable-virtualization": "True"
                },
                gridProperties: {
                    classes: "OSFillParent"
                },
                mode: /*Default*/ 0,
                source: model.variables.in_TagToggleListIn,
                style: model.getCachedValue(idService.getId("8w3ERnd2bkO5d9B+reidwQ.Style"), function() {
                            return UBTConnectLibraryController.default.formatClasses$Action("list list-group list-horizontal--gap-xs", model.variables.mainContainerClassVar, callContext).classesOutOut;
                        }, OS.DataTypes.DataTypes.Text, callContext.id), model.variables.extendedClassesIn, callContext).classesOutOut;
                    }, OS.DataTypes.DataTypes.Text, callContext.id) + ((((model.variables.in_HorizontalPaddingIn) !== (OS.BuiltinFunctions.nullTextIdentifier()))) ? ((" padding-x-" + model.variables.in_HorizontalPaddingIn)) : ("")));
                }, function() {
                    return model.variables.mainContainerClassVar;
                }, function() {
                    return model.variables.extendedClassesIn;
                }, function() {
                    return model.variables.in_HorizontalPaddingIn;
                }),
                tag: "div",
                _idProps: {
                    service: idService,
                    uuid: "0"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                source_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_TagToggleListInDataFetchStatus),
                style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._extendedClassesInDataFetchStatus, model.variables._in_HorizontalPaddingInDataFetchStatus),
                placeholders: {
                    content: new IteratorPlaceholderContent(function(idService, callContext) {
                        return [React.createElement(UBTConnectLibrary_ConnectPatterns_TagToggle_mvc_view, {
                            inputs: {
                                Tag: model.variables.in_TagToggleListIn.getCurrent(callContext.iterationContext),
                                _tagInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_TagToggleListInDataFetchStatus),
                                isEnabled: (model.variables.isEnabledIn && model.variables.in_TagToggleListIn.getCurrent(callContext.iterationContext).enabledAttr),
                                _isEnabledInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isEnabledInDataFetchStatus, model.variables._in_TagToggleListInDataFetchStatus)
                            },
                            events: {
                                _handleError: function(ex) {
                                    controller.handleError(ex);
                                },
                                event_Click$Action: function(event_IsSelectedIn) {
                                    return Promise.resolve().then(function() {
                                        var eventHandlerContext = callContext.clone();
                                        return OS.Flow.tryFinally(function() {
                                            var varBag = {};
                                            controller.pushDebuggerContext(eventHandlerContext);
                                            return controller.tagToggleToggle$Action(event_IsSelectedIn, model.variables.in_TagToggleListIn.getCurrentRowNumber(callContext.iterationContext), model.variables.in_TagToggleListIn.getCurrent(callContext.iterationContext).enabledAttr, controller.callContext(eventHandlerContext));
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
                            _dependencies: []
                        })];
                    }, callContext, idService, "1")
                },
                _dependencies: [asPrimitiveValue(model.variables.isEnabledIn), asPrimitiveValue(model.variables._isEnabledInDataFetchStatus), asPrimitiveValue(model.variables._in_TagToggleListInDataFetchStatus)]
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
    return View;
});
```
