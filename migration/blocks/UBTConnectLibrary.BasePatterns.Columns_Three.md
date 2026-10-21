# UBTConnectLibrary.BasePatterns.Columns_Three

- Kind: shared; build screens using it: BookmarksByGroup, ContactByEmailMember, ContactUsMenu, CountryDetails, CountryList, FeedItemDetail, HomeFeed, HouseholdCarousel, HouseholdDetails, Household_Relations, Locality_Details, Menu, MessageDetail, Notes, Notifications, OneSchoolGlobalDetails, PINBiometricsMenu, Photobook, Profile, Search, Services, SupperMeeting_Carousel, SupperMeeting_Details, TermsAndPoliciesMenu, Updates_SingleList
- Compiled source: `migration/screens/ContactByEmailMember/analysis/sources/pretty/UBTConnectLibrary.BasePatterns.Columns_Three.mvc.js`
- Child blocks: OutSystemsUI_2_23.Adaptive.Columns3 (queue: OutSystemsUI_2_23.Adaptive.Columns3)

## Inputs

(none found)

## Captured DOM variants (1 distinct, 208 instances)

### Variant 1: ContactByEmailMember/default (×208)

```html
<div class="OSBlockWidget" data-block="BasePatterns.Columns_Three" id="$b4">
  <div class="OSBlockWidget" data-block="Adaptive.Columns3" id="b4-$b1"><!-- nested block: 44 nodes --></div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("UBTConnectLibrary.BasePatterns.Columns_Three.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "react", "OutSystems/ReactView/Main", "UBTConnectLibrary.BasePatterns.Columns_Three.mvc$model", "UBTConnectLibrary.BasePatterns.Columns_Three.mvc$controller", "UBTConnectLibrary.clientVariables", "OutSystemsUI_2_23.Adaptive.Columns3.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.controller$FormatClasses", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnectLibrary.controller$GetClasses_Column", "UBTConnectLibrary.controller$ConvertUbtSizeToGutterSize", "UBTConnectLibrary.controller$SetLocalVariable_ColumnSize"], function(OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, React, OSView, UBTConnectLibrary_BasePatterns_Columns_Three_mvc_model, UBTConnectLibrary_BasePatterns_Columns_Three_mvc_controller, UBTConnectLibraryClientVariables, OutSystemsUI_2_23_Adaptive_Columns3_mvc_view, OSWidgets) {
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
        View.displayName = "BasePatterns.Columns_Three";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [OutSystemsUI_2_23_Adaptive_Columns3_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnectLibrary_BasePatterns_Columns_Three_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnectLibrary_BasePatterns_Columns_Three_mvc_controller;
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
            return React.createElement("div", this.getRootNodeProperties(), React.createElement(OutSystemsUI_2_23_Adaptive_Columns3_mvc_view, {
                inputs: {
                    ExtendedClass: model.getCachedValue(idService.getId("h0TCwL30XEOpP25YlsI2TQ.ExtendedClass"), function() {
                                    return UBTConnectLibraryController.default.formatClasses$Action(model.variables.mainContainerClassVar, model.variables.extendedClassesIn, callContext).classesOutOut;
                                }, OS.DataTypes.DataTypes.Text, callContext.id), (model.variables.mainContainerClassVar + "--three-columns"), callContext).classesOutOut;
                                return UBTConnectLibraryController.default.getClasses_Column$Action(model.variables.columnOptionsIn, callContext).classesOut;
                            }, OS.DataTypes.DataTypes.Text, callContext.id), callContext).classesOutOut;
                        }, OS.DataTypes.DataTypes.Text, callContext.id);
                    }, function() {
                        return model.variables.mainContainerClassVar;
                    }, function() {
                        return model.variables.extendedClassesIn;
                    }, function() {
                        return model.variables.columnOptionsIn;
                    }),
                    _extendedClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._extendedClassesInDataFetchStatus, model.variables._columnOptionsInDataFetchStatus),
                    GutterSize: model.getCachedValue(idService.getId("h0TCwL30XEOpP25YlsI2TQ.GutterSize"), function() {
                            return UBTConnectLibraryController.default.convertUbtSizeToGutterSize$Action(model.variables.columnOptionsIn.spacingSizeAttr, callContext).gutterSizeIdOut;
                        }, OS.DataTypes.DataTypes.Text, callContext.id);
                    }, function() {
                        return model.variables.columnOptionsIn.spacingSizeAttr;
                    }),
                    _gutterSizeInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._columnOptionsInDataFetchStatus)
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
                    column1: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Placeholder, {
                            align: /*Default*/ 0,
                            content: _this.props.placeholders.left,
                            style: model.getCachedValue(idService.getId("Left.Style"), function() {
                                return ((((model.variables.mainContainerClassVar + "--left ") + model.variables.mainContainerClassVar) + "--column ") + (((model.variables.columnOptionsIn.columnSizesAttr.leftAttr > 0)) ? ((model.variables.mainContainerClassVar + "--fixed-width")) : ("")));
                            }, function() {
                                return model.variables.mainContainerClassVar;
                            }, function() {
                                return model.variables.columnOptionsIn.columnSizesAttr.leftAttr;
                            }),
                            _idProps: {
                                service: idService,
                                name: "Left"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._columnOptionsInDataFetchStatus)
                        })];
                    }),
                    column2: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Placeholder, {
                            align: /*Default*/ 0,
                            content: _this.props.placeholders.middle,
                            style: model.getCachedValue(idService.getId("Middle.Style"), function() {
                                return ((((model.variables.mainContainerClassVar + "--middle ") + model.variables.mainContainerClassVar) + "--column ") + (((model.variables.columnOptionsIn.columnSizesAttr.middleAttr > 0)) ? ((model.variables.mainContainerClassVar + "--fixed-width")) : ("")));
                            }, function() {
                                return model.variables.mainContainerClassVar;
                            }, function() {
                                return model.variables.columnOptionsIn.columnSizesAttr.middleAttr;
                            }),
                            _idProps: {
                                service: idService,
                                name: "Middle"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._columnOptionsInDataFetchStatus)
                        })];
                    }),
                    column3: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Placeholder, {
                            align: /*Default*/ 0,
                            content: _this.props.placeholders.right,
                            style: model.getCachedValue(idService.getId("Right.Style"), function() {
                                return ((((model.variables.mainContainerClassVar + "--right ") + model.variables.mainContainerClassVar) + "--column ") + (((model.variables.columnOptionsIn.columnSizesAttr.rightAttr > 0)) ? ((model.variables.mainContainerClassVar + "--fixed-width")) : ("")));
                            }, function() {
                                return model.variables.mainContainerClassVar;
                            }, function() {
                                return model.variables.columnOptionsIn.columnSizesAttr.rightAttr;
                            }),
                            _idProps: {
                                service: idService,
                                name: "Right"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._columnOptionsInDataFetchStatus)
                        })];
                    })
                }
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
    return View;
});
```
