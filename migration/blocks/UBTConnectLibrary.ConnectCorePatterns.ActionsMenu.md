# UBTConnectLibrary.ConnectCorePatterns.ActionsMenu

- Kind: shared; build screens using it: HouseholdCarousel, HouseholdDetails, Locality_Details, OneSchoolGlobalDetails, Profile, SupperMeeting_Carousel, SupperMeeting_Details
- Compiled source: `migration/screens/HouseholdCarousel/analysis/sources/pretty/UBTConnectLibrary.ConnectCorePatterns.ActionsMenu.mvc.js`
- Child blocks: UBTConnectLibrary.BasePatterns.CustomContainer, UBTConnectLibrary.ConnectPatterns.CircleButton_IconPrimary (queue: -)

## Inputs

| Input | Type |
|---|---|
| In_ActionsMenuOptions | Record ActionsMenuOptionsRec |
| In_ActionsEnableOptions | Record ActionsMenuEnableOptionsRec |
| IsEnabled | Boolean |
| InShowLabels | Boolean |

## Captured DOM variants (1 distinct, 42 instances)

### Variant 1: HouseholdCarousel/default (×42)

```html
<div class="OSBlockWidget" data-block="ConnectCorePatterns.ActionsMenu" id="b3-l1-1152_0-b2-b3-b1-b33-$b2">
  <div class="OSBlockWidget" data-block="BasePatterns.CustomContainer" id="b3-l1-1152_0-b2-b3-b1-b33-b2-$b1"><!-- nested block: 85 nodes --></div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("UBTConnectLibrary.ConnectCorePatterns.ActionsMenu.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "react", "OutSystems/ReactView/Main", "UBTConnectLibrary.ConnectCorePatterns.ActionsMenu.mvc$model", "UBTConnectLibrary.ConnectCorePatterns.ActionsMenu.mvc$controller", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.ConnectPatterns.CircleButton_IconPrimary.mvc$view", "UBTConnectLibrary.model$LookupActionsRec", "UBTConnectLibrary.model$ActionsMenuOptionsRec", "UBTConnectLibrary.model$ActionsMenuEnableOptionsRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.controller$GetLookupActions"], function(OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, React, OSView, UBTConnectLibrary_ConnectCorePatterns_ActionsMenu_mvc_model, UBTConnectLibrary_ConnectCorePatterns_ActionsMenu_mvc_controller, UBTConnectLibraryClientVariables, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, OSWidgets, UBTConnectLibrary_ConnectPatterns_CircleButton_IconPrimary_mvc_view) {
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
        View.displayName = "ConnectCorePatterns.ActionsMenu";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_ConnectPatterns_CircleButton_IconPrimary_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnectLibrary_ConnectCorePatterns_ActionsMenu_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnectLibrary_ConnectCorePatterns_ActionsMenu_mvc_controller;
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
            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                inputs: {
                    Options: model.getCachedValue(idService.getId("AuNRFty9YUWD5eJtQ991ew.Options"), function() {
                        return function() {
                            var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                            rec.paddingSizeAttr = function() {
                                var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                return rec;
                            }();
                            rec.displayOptionsAttr = function() {
                                var rec = new UBTConnectLibraryModel.DisplayOptionsRec();
                                rec.displayAttr = UBTConnectLibraryModel.staticEntities.uBT_Display.flex;
                                rec.justifyContentAttr = UBTConnectLibraryModel.staticEntities.uBT_JustifyContent.spaceBetween;
                                return rec;
                            }();
                            return rec;
                        }();
                    }),
                    ExtendedClasses: model.variables.mainContainerClassVar
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
                    content: new PlaceholderContent(function() {
                        return [$if(model.variables.in_ActionsMenuOptionsIn.hasBookmarkAttr, false, this, function() {
                            return [React.createElement(UBTConnectLibrary_ConnectPatterns_CircleButton_IconPrimary_mvc_view, {
                                inputs: {
                                    isEnabled: (model.variables.isEnabledIn && model.variables.in_ActionsEnableOptionsIn.enableBookmarkAttr),
                                    _isEnabledInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isEnabledInDataFetchStatus, model.variables._in_ActionsEnableOptionsInDataFetchStatus),
                                    IconId: model.variables.lookupActionsVar.bookmarkAttr.iconAttr,
                                    Text: model.getCachedValue(idService.getId("sDLz5k_0J0WRGgkNVEVpow.Text"), function() {
                                        return ((model.variables.inShowLabelsIn) ? (model.variables.lookupActionsVar.bookmarkAttr.singularAttr) : (""));
                                    }, function() {
                                        return model.variables.inShowLabelsIn;
                                    }, function() {
                                        return model.variables.lookupActionsVar.bookmarkAttr.singularAttr;
                                    }),
                                    _textInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._inShowLabelsInDataFetchStatus)
                                },
                                events: {
                                    _handleError: function(ex) {
                                        controller.handleError(ex);
                                    },
                                    onClick$Action: function() {
                                        var eventHandlerContext = callContext.clone();
                                        return OS.Flow.tryFinally(function() {
                                            var varBag = {};
                                            controller.pushDebuggerContext(eventHandlerContext);
                                            controller.event_Click_Bookmark$Action(controller.callContext(eventHandlerContext));
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
                                    uuid: "1",
                                    alias: "2"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                _dependencies: []
                            })];
                        }, function() {
                            return [];
                        }), $if(model.variables.in_ActionsMenuOptionsIn.hasUnbookmarkAttr, false, this, function() {
                            return [React.createElement(UBTConnectLibrary_ConnectPatterns_CircleButton_IconPrimary_mvc_view, {
                                inputs: {
                                    isEnabled: (model.variables.isEnabledIn && model.variables.in_ActionsEnableOptionsIn.enableBookmarkAttr),
                                    _isEnabledInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isEnabledInDataFetchStatus, model.variables._in_ActionsEnableOptionsInDataFetchStatus),
                                    IconId: model.variables.lookupActionsVar.unbookmarkAttr.iconAttr,
                                    Text: model.getCachedValue(idService.getId("EyQcaKWxuUOGJZPGKnD0NQ.Text"), function() {
                                        return ((model.variables.inShowLabelsIn) ? (model.variables.lookupActionsVar.unbookmarkAttr.singularAttr) : (""));
                                    }, function() {
                                        return model.variables.inShowLabelsIn;
                                    }, function() {
                                        return model.variables.lookupActionsVar.unbookmarkAttr.singularAttr;
                                    }),
                                    _textInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._inShowLabelsInDataFetchStatus)
                                },
                                events: {
                                    _handleError: function(ex) {
                                        controller.handleError(ex);
                                    },
                                    onClick$Action: function() {
                                        var eventHandlerContext = callContext.clone();
                                        return OS.Flow.tryFinally(function() {
                                            var varBag = {};
                                            controller.pushDebuggerContext(eventHandlerContext);
                                            controller.event_Click_Unbookmark$Action(controller.callContext(eventHandlerContext));
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
                                    uuid: "2",
                                    alias: "3"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                _dependencies: []
                            })];
                        }, function() {
                            return [];
                        }), $if(model.variables.in_ActionsMenuOptionsIn.hasCallAttr, false, this, function() {
                            return [React.createElement(UBTConnectLibrary_ConnectPatterns_CircleButton_IconPrimary_mvc_view, {
                                inputs: {
                                    Text: model.getCachedValue(idService.getId("7y_njGvoEEuj5u_N6uxh8A.Text"), function() {
                                        return ((model.variables.inShowLabelsIn) ? (model.variables.lookupActionsVar.callAttr.singularAttr) : (""));
                                    }, function() {
                                        return model.variables.inShowLabelsIn;
                                    }, function() {
                                        return model.variables.lookupActionsVar.callAttr.singularAttr;
                                    }),
                                    _textInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._inShowLabelsInDataFetchStatus),
                                    isEnabled: (model.variables.isEnabledIn && model.variables.in_ActionsEnableOptionsIn.enableCallAttr),
                                    _isEnabledInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isEnabledInDataFetchStatus, model.variables._in_ActionsEnableOptionsInDataFetchStatus),
                                    IconId: model.variables.lookupActionsVar.callAttr.iconAttr
                                },
                                events: {
                                    _handleError: function(ex) {
                                        controller.handleError(ex);
                                    },
                                    onClick$Action: function() {
                                        var eventHandlerContext = callContext.clone();
                                        return OS.Flow.tryFinally(function() {
                                            var varBag = {};
                                            controller.pushDebuggerContext(eventHandlerContext);
                                            controller.event_Click_Call$Action(controller.callContext(eventHandlerContext));
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
                                    uuid: "3",
                                    alias: "4"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                _dependencies: []
                            })];
                        }, function() {
                            return [];
                        }), $if(model.variables.in_ActionsMenuOptionsIn.hasEmailAttr, false, this, function() {
                            return [React.createElement(UBTConnectLibrary_ConnectPatterns_CircleButton_IconPrimary_mvc_view, {
                                inputs: {
                                    Text: model.getCachedValue(idService.getId("eHjIh5bYyEeaCpDpwy09ZQ.Text"), function() {
                                        return ((model.variables.inShowLabelsIn) ? (model.variables.lookupActionsVar.emailAttr.singularAttr) : (""));
                                    }, function() {
                                        return model.variables.inShowLabelsIn;
                                    }, function() {
                                        return model.variables.lookupActionsVar.emailAttr.singularAttr;
                                    }),
                                    _textInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._inShowLabelsInDataFetchStatus),
                                    isEnabled: (model.variables.isEnabledIn && model.variables.in_ActionsEnableOptionsIn.enableEmailAttr),
                                    _isEnabledInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isEnabledInDataFetchStatus, model.variables._in_ActionsEnableOptionsInDataFetchStatus),
                                    IconId: model.variables.lookupActionsVar.emailAttr.iconAttr
                                },
                                events: {
                                    _handleError: function(ex) {
                                        controller.handleError(ex);
                                    },
                                    onClick$Action: function() {
                                        var eventHandlerContext = callContext.clone();
                                        return OS.Flow.tryFinally(function() {
                                            var varBag = {};
                                            controller.pushDebuggerContext(eventHandlerContext);
                                            controller.event_Click_Email$Action(controller.callContext(eventHandlerContext));
                                        }, function() {
                                            controller.popDebuggerContext(eventHandlerContext);
                                        });
```
(… 202 more lines in `migration/screens/HouseholdCarousel/analysis/sources/pretty/UBTConnectLibrary.ConnectCorePatterns.ActionsMenu.mvc.js`)
