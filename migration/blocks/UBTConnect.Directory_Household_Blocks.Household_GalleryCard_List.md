# UBTConnect.Directory_Household_Blocks.Household_GalleryCard_List

- Kind: shared; build screens using it: HouseholdCarousel, SupperMeeting_Carousel, SupperMeeting_Details
- Compiled source: `migration/screens/SupperMeeting_Carousel/analysis/sources/pretty/UBTConnect.Directory_Household_Blocks.Household_GalleryCard_List.mvc.js`
- Child blocks: OutSystemsUI_2_23.Adaptive.Gallery, UBTConnect.Directory_CommonBlocks.Directory_EmptyState, UBTConnect.Directory_Household_Blocks.Household_GalleryCard, UBTConnect.SubLayout.SubLayout_DirectoryDetailScreen_Section, UBTConnectLibrary.ConnectPatterns.SkeletonSection (queue: OutSystemsUI_2_23.Adaptive.Gallery, UBTConnect.Directory_CommonBlocks.Directory_EmptyState, UBTConnect.Directory_Household_Blocks.Household_GalleryCard, UBTConnect.SubLayout.SubLayout_DirectoryDetailScreen_Section)

## Inputs

| Input | Type |
|---|---|
| In_IsLoading | Boolean |

## Captured DOM variants (1 distinct, 12 instances)

### Variant 1: SupperMeeting_Carousel/default (×12)

```html
<div class="OSBlockWidget" data-block="Directory_Household_Blocks.Household_GalleryCard_List" id="b3-l1-1164_0-b2-b1-b1-b9-$b1">
  <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="b3-l1-1164_0-b2-b1-b1-b9-b1-$b1"><!-- nested block: 366 nodes --></div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("UBTConnect.Directory_Household_Blocks.Household_GalleryCard_List.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "Connect_Household_CS.model", "react", "OutSystems/ReactView/Main", "UBTConnect.Directory_Household_Blocks.Household_GalleryCard_List.mvc$model", "UBTConnect.Directory_Household_Blocks.Household_GalleryCard_List.mvc$controller", "UBTConnect.clientVariables", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnect.SubLayout.SubLayout_DirectoryDetailScreen_Section.mvc$view", "UBTConnect.Directory_CommonBlocks.Directory_EmptyState.mvc$view", "OutSystemsUI_2_23.Adaptive.Gallery.mvc$view", "UBTConnect.Directory_Household_Blocks.Household_GalleryCard.mvc$view", "UBTConnect.model$LookupSectionsRec", "UBTConnect.controller$Get_LookupSection", "Connect_Household_CS.model$UI_SubdivisionHouseholdRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect_Household_CS", "UBTConnect.model$UI_SubdivisionHouseholdList"], function(OutSystems, UBTConnectModel, UBTConnectController, Connect_Household_CSModel, React, OSView, UBTConnect_Directory_Household_Blocks_Household_GalleryCard_List_mvc_model, UBTConnect_Directory_Household_Blocks_Household_GalleryCard_List_mvc_controller, UBTConnectClientVariables, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, OSWidgets, UBTConnect_SubLayout_SubLayout_DirectoryDetailScreen_Section_mvc_view, UBTConnect_Directory_CommonBlocks_Directory_EmptyState_mvc_view, OutSystemsUI_2_23_Adaptive_Gallery_mvc_view, UBTConnect_Directory_Household_Blocks_Household_GalleryCard_mvc_view) {
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
        View.displayName = "Directory_Household_Blocks.Household_GalleryCard_List";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, UBTConnect_SubLayout_SubLayout_DirectoryDetailScreen_Section_mvc_view, UBTConnect_Directory_CommonBlocks_Directory_EmptyState_mvc_view, OutSystemsUI_2_23_Adaptive_Gallery_mvc_view, UBTConnect_Directory_Household_Blocks_Household_GalleryCard_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_Directory_Household_Blocks_Household_GalleryCard_List_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_Directory_Household_Blocks_Household_GalleryCard_List_mvc_controller;
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
            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, {
                inputs: {
                    In_IsLoading: model.variables.in_IsLoadingIn,
                    _in_IsLoadingInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_IsLoadingInDataFetchStatus)
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
                    placeholder_LoadingSection: new PlaceholderContent(function() {
                        return [React.createElement(UBTConnect_SubLayout_SubLayout_DirectoryDetailScreen_Section_mvc_view, {
                            inputs: {
                                In_Title: model.getCachedValue(idService.getId("fr7kSycYkkO9HJagivL40Q.In_Title"), function() {
                                        return UBTConnectController.default.get_LookupSection$Action(false, callContext).out_LookupOut;
                                    }, OS.DataTypes.DataTypes.Record, callContext.id).householdsAttr.pluralAttr;
                                })
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
                                alias: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                placeholder_SectionContent: new PlaceholderContent(function() {
                                    return [$if(model.variables.in_Household_GalleryCard_ListIn.isEmpty, false, this, function() {
                                        return [React.createElement(UBTConnect_Directory_CommonBlocks_Directory_EmptyState_mvc_view, {
                                            inputs: {
                                                EntityTypeId: UBTConnectModel.staticEntities.connect_Entity.household
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
                                                alias: "3"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider,
                                            _dependencies: []
                                        })];
                                    }, function() {
                                        return [React.createElement(OutSystemsUI_2_23_Adaptive_Gallery_mvc_view, {
                                            inputs: {
                                                RowItemsTablet: model.variables.itemsPerRowVar,
                                                RowItemsDesktop: model.variables.itemsPerRowVar,
                                                RowItemsPhone: model.variables.itemsPerRowVar
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
                                                alias: "4"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider,
                                            placeholders: {
                                                content: new PlaceholderContent(function() {
                                                    return [React.createElement(OSWidgets.List, {
                                                        animateItems: false,
                                                        extendedProperties: {
                                                            "disable-virtualization": "True"
                                                        },
                                                        gridProperties: {
                                                            classes: "OSFillParent"
                                                        },
                                                        mode: /*Default*/ 0,
                                                        source: model.variables.in_Household_GalleryCard_ListIn,
                                                        style: "list list-group",
                                                        tag: "div",
                                                        _idProps: {
                                                            service: idService,
                                                            uuid: "4"
                                                        },
                                                        _widgetRecordProvider: widgetsRecordProvider,
                                                        source_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_Household_GalleryCard_ListInDataFetchStatus),
                                                        placeholders: {
                                                            content: new IteratorPlaceholderContent(function(idService, callContext) {
                                                                return [React.createElement(UBTConnect_Directory_Household_Blocks_Household_GalleryCard_mvc_view, {
                                                                    inputs: {
                                                                        SubdivisionHousehold_GalleryCard: model.variables.in_Household_GalleryCard_ListIn.getCurrent(callContext.iterationContext),
                                                                        _subdivisionHousehold_GalleryCardInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_Household_GalleryCard_ListInDataFetchStatus),
                                                                        ItemsPerRow: model.variables.itemsPerRowVar
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
                                                                                controller.event_OnClick_Household_GalleryCard$Action(model.variables.in_Household_GalleryCard_ListIn.getCurrent(callContext.iterationContext).householdIdAttr, controller.callContext(eventHandlerContext));
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
                                                                        uuid: "5",
                                                                        alias: "5"
                                                                    },
                                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                                    _dependencies: []
                                                                })];
                                                            }, callContext, idService, "1")
                                                        },
                                                        _dependencies: [asPrimitiveValue(model.variables.itemsPerRowVar), asPrimitiveValue(model.variables._in_Household_GalleryCard_ListInDataFetchStatus)]
                                                    })];
                                                })
                                            },
                                            _dependencies: [asPrimitiveValue(model.variables.itemsPerRowVar), asPrimitiveValue(model.variables._in_Household_GalleryCard_ListInDataFetchStatus), asPrimitiveValue(model.variables.in_Household_GalleryCard_ListIn)]
                                        })];
                                    })];
                                })
                            },
                            _dependencies: [asPrimitiveValue(model.variables.itemsPerRowVar), asPrimitiveValue(model.variables._in_Household_GalleryCard_ListInDataFetchStatus), asPrimitiveValue(model.variables.in_Household_GalleryCard_ListIn)]
                        })];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.itemsPerRowVar), asPrimitiveValue(model.variables._in_Household_GalleryCard_ListInDataFetchStatus), asPrimitiveValue(model.variables.in_Household_GalleryCard_ListIn)]
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
    return View;
});
```
