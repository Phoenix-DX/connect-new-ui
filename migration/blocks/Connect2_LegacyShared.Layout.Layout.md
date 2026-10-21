# Connect2_LegacyShared.Layout.Layout

- Kind: shared; build screens using it: BookmarksByGroup, ConnectShare, LegacyShareObject, MessageDetail, MessageList, MyBookmarks
- Compiled source: `migration/screens/BookmarksByGroup/analysis/sources/pretty/Connect2_LegacyShared.Layout.Layout.mvc.js`
- Child blocks: Connect2_LegacyShared.Layout.BaseLayout_UpdatedOSUI, NavigationHandler.LayoutRuntime_NavigationHandler.LayoutRuntime_Top (queue: Connect2_LegacyShared.Layout.BaseLayout_UpdatedOSUI)

## Inputs

| Input | Type |
|---|---|
| UsePullToRefresh | Boolean |
| ExtendedClasses | Text |
| CustomClass | Text |
| IsHeaderTransparent | Boolean |

## Captured DOM variants (1 distinct, 17 instances)

### Variant 1: BookmarksByGroup/default (×17)

```html
<div class="OSBlockWidget" data-block="Layout.Layout" id="b1-$b1">
  <div class="OSBlockWidget" data-block="LayoutRuntime_NavigationHandler.LayoutRuntime_Top" id="b1-b1-$b1"><!-- nested block: 0 nodes --></div>
  <div class="backwards-compatibility connect-theme" data-container="">
    <div class="OSBlockWidget" data-block="Layout.BaseLayout_UpdatedOSUI" id="b1-b1-$b2"><!-- nested block: 343 nodes --></div>
  </div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("Connect2_LegacyShared.Layout.Layout.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "OutSystemsUI_2_23.controller", "react", "OutSystems/ReactView/Main", "Connect2_LegacyShared.Layout.Layout.mvc$model", "Connect2_LegacyShared.Layout.Layout.mvc$controller", "Connect2_LegacyShared.clientVariables", "NavigationHandler.LayoutRuntime_NavigationHandler.LayoutRuntime_Top.mvc$view", "OutSystems/ReactWidgets/Main", "Connect2_LegacyShared.Layout.BaseLayout_UpdatedOSUI.mvc$view", "Connect2_LegacyShared.controller$IOSPreventSwipe", "OutSystemsUI_2_23.controller$LayoutReady", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$OutSystemsUI_2_23", "Connect2_LegacyShared.controller$IOSMetaTags", "Connect2_LegacyShared.controller$SetThemeClassToBody"], function(OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, OutSystemsUI_2_23Controller, React, OSView, Connect2_LegacyShared_Layout_Layout_mvc_model, Connect2_LegacyShared_Layout_Layout_mvc_controller, Connect2_LegacySharedClientVariables, NavigationHandler_LayoutRuntime_NavigationHandler_LayoutRuntime_Top_mvc_view, OSWidgets, Connect2_LegacyShared_Layout_BaseLayout_UpdatedOSUI_mvc_view) {
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
        View.displayName = "Layout.Layout";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [NavigationHandler_LayoutRuntime_NavigationHandler_LayoutRuntime_Top_mvc_view, Connect2_LegacyShared_Layout_BaseLayout_UpdatedOSUI_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return Connect2_LegacyShared_Layout_Layout_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return Connect2_LegacyShared_Layout_Layout_mvc_controller;
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
            return React.createElement("div", this.getRootNodeProperties(), React.createElement(NavigationHandler_LayoutRuntime_NavigationHandler_LayoutRuntime_Top_mvc_view, {
                inputs: {},
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
                _dependencies: []
            }), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "backwards-compatibility connect-theme",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(Connect2_LegacyShared_Layout_BaseLayout_UpdatedOSUI_mvc_view, {
                inputs: {
                    UsePullToRefresh: model.variables.usePullToRefreshIn,
                    _usePullToRefreshInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._usePullToRefreshInDataFetchStatus),
                    CustomClass: model.variables.customClassIn,
                    _customClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._customClassInDataFetchStatus),
                    ExtendedClass: ("connect-theme " + model.variables.extendedClassesIn),
                    _extendedClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._extendedClassesInDataFetchStatus),
                    IsHeaderTransparent: model.variables.isHeaderTransparentIn,
                    _isHeaderTransparentInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isHeaderTransparentInDataFetchStatus)
                },
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    },
                    onPullToRefresh$Action: function() {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);
                            controller.onPullToRefresh$Action(controller.callContext(eventHandlerContext));
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
                    alias: "2"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                placeholders: {
                    navigation: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Placeholder, {
                            align: /*Default*/ 0,
                            content: _this.props.placeholders.menu,
                            _idProps: {
                                service: idService,
                                name: "Menu"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })];
                    }),
                    headerLeft: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Placeholder, {
                            align: /*Default*/ 0,
                            content: _this.props.placeholders.headerLeft,
                            _idProps: {
                                service: idService,
                                name: "HeaderLeft"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })];
                    }),
                    headerSearch: PlaceholderContent.Empty,
                    title: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Placeholder, {
                            align: /*Default*/ 0,
                            content: _this.props.placeholders.title,
                            _idProps: {
                                service: idService,
                                name: "Title"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })];
                    }),
                    headerRight: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Placeholder, {
                            align: /*Default*/ 0,
                            content: _this.props.placeholders.headerRight,
                            style: "display-flex align-items-center",
                            _idProps: {
                                service: idService,
                                name: "HeaderRight"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })];
                    }),
                    headerContent: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Placeholder, {
                            align: /*Default*/ 0,
                            content: _this.props.placeholders.headerContent,
                            _idProps: {
                                service: idService,
                                name: "HeaderContent"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })];
                    }),
                    content: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Placeholder, {
                            align: /*Default*/ 0,
                            content: _this.props.placeholders.content,
                            _idProps: {
                                service: idService,
                                name: "Content"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })];
                    }),
                    bottom: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Placeholder, {
                            align: /*Default*/ 0,
                            content: _this.props.placeholders.bottomBar,
                            _idProps: {
                                service: idService,
                                name: "BottomBar"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })];
                    }),
                    commonUI: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Placeholder, {
                            align: /*Default*/ 0,
                            content: _this.props.placeholders.commonUI_Elements,
                            _idProps: {
                                service: idService,
                                name: "CommonUI_Elements"
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
