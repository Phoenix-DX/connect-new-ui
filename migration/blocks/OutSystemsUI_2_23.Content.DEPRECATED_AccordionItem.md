# OutSystemsUI_2_23.Content.DEPRECATED_AccordionItem

- Kind: osui; build screens using it: EventDetail, GuestArrangements, HelpersDetail, MilestoneDetail
- Compiled source: `migration/screens/EventDetail/analysis/sources/pretty/OutSystemsUI_2_23.Content.DEPRECATED_AccordionItem.mvc.js`
- Child blocks: - (queue: -)

## Inputs

| Input | Type |
|---|---|
| IsExpanded | Boolean |
| UsePadding | Boolean |
| IsDisabled | Boolean |
| ExtendedClass | Text |

## Captured DOM variants (4 distinct, 7 instances)

### Variant 1: EventDetail/default (×1)

```html
<div class="OSBlockWidget" data-block="Content.DEPRECATED_AccordionItem" id="b1-$b5">
  <div aria-disabled="false" aria-expanded="false" class="osui-deprecated section-expandable is--closed orbit-accordion-item" data-container="" data-expanded="false" id="b1-b5-SectionItem" role="tab">
    <div aria-controls="b1-b5-Content" aria-expanded="false" aria-hidden="false" class="section-expandable-title" data-container="" id="b1-b5-TitleWrapper" role="button" style="cursor: pointer;" tabindex="0">
      <div class="dividers full-width" id="b1-b5-Title">
        <span data-expression="">
          Host Allocation
        </span>
      </div>
      <div aria-hidden="true" class="section-expandable-icon" data-container=""></div>
    </div>
    <div aria-hidden="true" class="section-expandable-content is--collapsed no-padding" data-container="" id="b1-b5-ContentWrapper" tabindex="0">
      <div id="b1-b5-Content" role="tabpanel">
        <div class="OSBlockWidget" data-block="Orbit_Blocks.HostAllocation_List" id="b1-$b6"><!-- nested block: 28 nodes --></div>
      </div>
    </div>
  </div>
</div>
```

### Variant 2: MilestoneDetail/default (×1)

```html
<div class="OSBlockWidget" data-block="Content.DEPRECATED_AccordionItem" id="b1-b5-l5-142864_0-$b8">
  <div aria-disabled="false" aria-expanded="false" class="osui-deprecated section-expandable is--closed orbit-accordion-item" data-container="" data-expanded="false" id="b1-b5-l5-142864_0-b8-SectionItem" role="tab">
    <div aria-controls="b1-b5-l5-142864_0-b8-Content" aria-expanded="false" aria-hidden="false" class="section-expandable-title" data-container="" id="b1-b5-l5-142864_0-b8-TitleWrapper" role="button" style="cursor: pointer;" tabindex="0">
      <div class="dividers full-width" id="b1-b5-l5-142864_0-b8-Title">
        <span data-expression="">
          Room: 1-Master Guest
        </span>
      </div>
      <div aria-hidden="true" class="section-expandable-icon" data-container=""></div>
    </div>
    <div aria-hidden="true" class="section-expandable-content is--collapsed no-padding" data-container="" id="b1-b5-l5-142864_0-b8-ContentWrapper" tabindex="0">
      <div id="b1-b5-l5-142864_0-b8-Content" role="tabpanel">
        <div class="room-info-cont" data-container="">
          <div class="flex-center-vertical justify-content-flex-start flex-direction-row" data-container="">
            <i class="icon orbit-icon-home font-size-1-1em fa fa-flag fa-1x" data-icon=""></i>
            <span class="margin-left-s" data-expression="">
              Ground Floor
            </span>
          </div>
          <div class="flex-center-vertical justify-content-center flex-direction-row" data-container="">
            <i class="icon orbit-icon-host-guest fa fa-flag fa-1x" data-icon=""></i>
            <span class="margin-left-s" data-expression="">
              ••••••
            </span>
          </div>
          <div class="flex-center-vertical justify-content-flex-end flex-direction-row" data-container="">
            <i class="icon orbit-icon-accommodation font-size-1-1em fa fa-flag fa-1x" data-icon=""></i>
            <span class="margin-left-s" data-expression="">
              •
            </span>
          </div>
        </div>
        <div class="padding-x-m padding-top-base font-size-1-1em text-neutral-6" data-container="">
          <span data-expression="">
            Guest/s
          </span>
        </div>
        <div class="list list-group orbit-household-list OSFillParent" data-list="" data-virtualization-disabled="">
          <div class="orbit-household-list-item" data-container="">
            <div class="list list-group orbit-member-list OSFillParent" data-list="" data-virtualization-disabled="">
              <div class="orbit-member-list-item" data-container=""><!-- 25 nodes below depth 7 --></div>
              <div class="orbit-member-list-item" data-container=""><!-- 25 nodes below depth 7 --></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

### Variant 3: MilestoneDetail/default (×3)

```html
<div class="OSBlockWidget" data-block="Content.DEPRECATED_AccordionItem" id="b1-b5-l5-142864_1-$b8">
  <div aria-disabled="false" aria-expanded="false" class="osui-deprecated section-expandable is--closed orbit-accordion-item margin-top-s" data-container="" data-expanded="false" id="b1-b5-l5-142864_1-b8-SectionItem" role="tab">
    <div aria-controls="b1-b5-l5-142864_1-b8-Content" aria-expanded="false" aria-hidden="false" class="section-expandable-title" data-container="" id="b1-b5-l5-142864_1-b8-TitleWrapper" role="button" style="cursor: pointer;" tabindex="0">
      <div class="dividers full-width" id="b1-b5-l5-142864_1-b8-Title">
        <span data-expression="">
          ••••• ••••••• •••••
        </span>
      </div>
      <div aria-hidden="true" class="section-expandable-icon" data-container=""></div>
    </div>
    <div aria-hidden="true" class="section-expandable-content is--collapsed no-padding" data-container="" id="b1-b5-l5-142864_1-b8-ContentWrapper" tabindex="0">
      <div id="b1-b5-l5-142864_1-b8-Content" role="tabpanel">
        <div class="room-info-cont" data-container="">
          <div class="flex-center-vertical justify-content-flex-start flex-direction-row" data-container="">
            <i class="icon orbit-icon-home font-size-1-1em fa fa-flag fa-1x" data-icon=""></i>
            <span class="margin-left-s" data-expression="">
              Second Floor
            </span>
          </div>
          <div class="flex-center-vertical justify-content-center flex-direction-row" data-container="">
            <i class="icon orbit-icon-host-guest fa fa-flag fa-1x" data-icon=""></i>
            <span class="margin-left-s" data-expression="">
              ••••••
            </span>
          </div>
          <div class="flex-center-vertical justify-content-flex-end flex-direction-row" data-container="">
            <i class="icon orbit-icon-accommodation font-size-1-1em fa fa-flag fa-1x" data-icon=""></i>
            <span class="margin-left-s" data-expression="">
              •
            </span>
          </div>
        </div>
        <div class="padding-x-m padding-top-base font-size-1-1em text-neutral-6" data-container="">
          <span data-expression="">
            Guest/s
          </span>
        </div>
        <div class="list list-group orbit-household-list OSFillParent" data-list="" data-virtualization-disabled="">
          <div class="orbit-household-list-item" data-container="">
            <div class="list list-group orbit-member-list OSFillParent" data-list="" data-virtualization-disabled="">
              <div class="orbit-member-list-item" data-container=""><!-- 23 nodes below depth 7 --></div>
              <div class="orbit-member-list-item" data-container=""><!-- 23 nodes below depth 7 --></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

### Variant 4: MilestoneDetail/default (×2)

```html
<div class="OSBlockWidget" data-block="Content.DEPRECATED_AccordionItem" id="b1-b5-l5-142864_4-$b8">
  <div aria-disabled="false" aria-expanded="false" class="osui-deprecated section-expandable is--closed orbit-accordion-item margin-top-s" data-container="" data-expanded="false" id="b1-b5-l5-142864_4-b8-SectionItem" role="tab">
    <div aria-controls="b1-b5-l5-142864_4-b8-Content" aria-expanded="false" aria-hidden="false" class="section-expandable-title" data-container="" id="b1-b5-l5-142864_4-b8-TitleWrapper" role="button" style="cursor: pointer;" tabindex="0">
      <div class="dividers full-width" id="b1-b5-l5-142864_4-b8-Title">
        <span data-expression="">
          Room: Guest 2
        </span>
      </div>
      <div aria-hidden="true" class="section-expandable-icon" data-container=""></div>
    </div>
    <div aria-hidden="true" class="section-expandable-content is--collapsed no-padding" data-container="" id="b1-b5-l5-142864_4-b8-ContentWrapper" tabindex="0">
      <div id="b1-b5-l5-142864_4-b8-Content" role="tabpanel">
        <div class="room-info-cont" data-container="">
          <div class="flex-center-vertical justify-content-flex-start flex-direction-row" data-container="">
            <i class="icon orbit-icon-home font-size-1-1em fa fa-flag fa-1x" data-icon=""></i>
            <span class="margin-left-s" data-expression="">
              ••••••••
            </span>
          </div>
          <div class="flex-center-vertical justify-content-center flex-direction-row" data-container="">
            <i class="icon orbit-icon-host-guest fa fa-flag fa-1x" data-icon=""></i>
            <span class="margin-left-s" data-expression="">
              ••••••
            </span>
          </div>
          <div class="flex-center-vertical justify-content-flex-end flex-direction-row" data-container="">
            <i class="icon orbit-icon-accommodation font-size-1-1em fa fa-flag fa-1x" data-icon=""></i>
            <span class="margin-left-s" data-expression="">
              •
            </span>
          </div>
        </div>
        <div class="padding-x-m padding-top-base font-size-1-1em text-neutral-6" data-container="">
          <span data-expression="">
            Guest/s
          </span>
        </div>
        <div class="list list-group orbit-household-list OSFillParent" data-list="" data-virtualization-disabled="">
          <div class="orbit-household-list-item" data-container="">
            <div class="list list-group orbit-member-list OSFillParent" data-list="" data-virtualization-disabled="">
              <div class="orbit-member-list-item" data-container=""><!-- 23 nodes below depth 7 --></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("OutSystemsUI_2_23.Content.DEPRECATED_AccordionItem.mvc$view", ["OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "react", "OutSystems/ReactView/Main", "OutSystemsUI_2_23.Content.DEPRECATED_AccordionItem.mvc$model", "OutSystemsUI_2_23.Content.DEPRECATED_AccordionItem.mvc$controller", "OutSystems/ReactWidgets/Main", "OutSystemsUI_2_23.controller$IsWebApp", "OutSystemsUI_2_23.controller$IsLayoutNative"], function(OutSystems, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, React, OSView, OutSystemsUI_2_23_Content_DEPRECATED_AccordionItem_mvc_model, OutSystemsUI_2_23_Content_DEPRECATED_AccordionItem_mvc_controller, OSWidgets) {
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
        View.displayName = "Content.DEPRECATED_AccordionItem";
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
                return OutSystemsUI_2_23_Content_DEPRECATED_AccordionItem_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return OutSystemsUI_2_23_Content_DEPRECATED_AccordionItem_mvc_controller;
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
                extendedProperties: {
                    "data-expanded": model.getCachedValue(idService.getId("SectionItem.data-expanded"), function() {
                        return OS.BuiltinFunctions.toLower((model.variables.isExpandedIn ? "True" : "False"));
                    }, function() {
                        return model.variables.isExpandedIn;
                    }),
                    "aria-expanded": model.getCachedValue(idService.getId("SectionItem.aria-expanded"), function() {
                        return OS.BuiltinFunctions.toLower((model.variables.isExpandedIn ? "True" : "False"));
                    }, function() {
                        return model.variables.isExpandedIn;
                    }),
                    "aria-disabled": model.getCachedValue(idService.getId("SectionItem.aria-disabled"), function() {
                        return ((!(model.variables.isDisabledIn)) ? ("false") : ("true"));
                    }, function() {
                        return model.variables.isDisabledIn;
                    }),
                    role: "tab"
                },
                style: model.getCachedValue(idService.getId("SectionItem.Style"), function() {
                    return (((("osui-deprecated section-expandable " + ((model.variables.isExpandedIn) ? (" open is--open") : ("is--closed"))) + ((model.variables.isDisabledIn) ? (" is--disabled") : (""))) + " ") + model.variables.extendedClassIn);
                }, function() {
                    return model.variables.isExpandedIn;
                }, function() {
                    return model.variables.isDisabledIn;
                }, function() {
                    return model.variables.extendedClassIn;
                }),
                visible: true,
                _idProps: {
                    service: idService,
                    name: "SectionItem"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isExpandedInDataFetchStatus, model.variables._isDisabledInDataFetchStatus, model.variables._extendedClassInDataFetchStatus)
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedEvents: {
                    onClick: function() {
                        return Promise.resolve().then(function() {
                            var eventHandlerContext = callContext.clone();
                            return OS.Flow.tryFinally(function() {
                                var varBag = {};
                                controller.pushDebuggerContext(eventHandlerContext);
                                return controller.onClick$Action(idService.getId("SectionItem"), false, controller.callContext(eventHandlerContext));
                            }, function() {
                                controller.popDebuggerContext(eventHandlerContext);
                            });
                        });;
                    }
                },
                extendedProperties: {
                    role: "button",
                    "aria-hidden": model.getCachedValue(idService.getId("TitleWrapper.aria-hidden"), function() {
                        return OS.BuiltinFunctions.toLower((model.variables.isDisabledIn ? "True" : "False"));
                    }, function() {
                        return model.variables.isDisabledIn;
                    }),
                    "aria-expanded": model.getCachedValue(idService.getId("TitleWrapper.aria-expanded"), function() {
                        return OS.BuiltinFunctions.toLower((model.variables.isExpandedIn ? "True" : "False"));
                    }, function() {
                        return model.variables.isExpandedIn;
                    }),
                    tabIndex: model.getCachedValue(idService.getId("TitleWrapper.tabindex"), function() {
                        return (((model.variables.isDisabledIn || !(model.variables.hasContentVar))) ? ("-1") : ("0"));
                    }, function() {
                        return model.variables.isDisabledIn;
                    }, function() {
                        return model.variables.hasContentVar;
                    }),
                    "aria-controls": idService.getId("Content")
                },
                style: "section-expandable-title",
                visible: true,
                _idProps: {
                    service: idService,
                    name: "TitleWrapper"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Placeholder, {
                align: /*Default*/ 0,
                content: _this.props.placeholders.title,
                style: model.getCachedValue(idService.getId("Title.Style"), function() {
                    return ("dividers full-width" + ((model.variables.isWebAppVar) ? ("") : (" text-ellipsis")));
                }, function() {
                    return model.variables.isWebAppVar;
                }),
                _idProps: {
                    service: idService,
                    name: "Title"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    "aria-hidden": "true"
                },
                style: "section-expandable-icon",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "3"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    tabIndex: model.getCachedValue(idService.getId("ContentWrapper.tabindex"), function() {
                        return ((model.variables.hasContentVar) ? ("0") : ("-1"));
                    }, function() {
                        return model.variables.hasContentVar;
                    }),
                    "aria-hidden": model.getCachedValue(idService.getId("ContentWrapper.aria-hidden"), function() {
                        return ((model.variables.isExpandedIn) ? ("false") : ("true"));
                    }, function() {
                        return model.variables.isExpandedIn;
                    }),
                    "aria-labelledby": idService.getId("TitleWrapper")
                },
                style: model.getCachedValue(idService.getId("ContentWrapper.Style"), function() {
                    return ("section-expandable-content is--collapsed" + ((model.variables.usePaddingIn) ? ("") : (" no-padding")));
                }, function() {
                    return model.variables.usePaddingIn;
                }),
                visible: true,
                _idProps: {
                    service: idService,
                    name: "ContentWrapper"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._usePaddingInDataFetchStatus)
            }, React.createElement(OSWidgets.Placeholder, {
                align: /*Default*/ 0,
                content: _this.props.placeholders.content,
                extendedProperties: {
                    role: "tabpanel"
                },
                _idProps: {
                    service: idService,
                    name: "Content"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }))));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
    return View;
});
```
