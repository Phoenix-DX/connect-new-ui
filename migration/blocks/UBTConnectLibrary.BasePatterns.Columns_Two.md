# UBTConnectLibrary.BasePatterns.Columns_Two

- Kind: shell; build screens using it: AcceptPendingPolicies, BookmarksByGroup, BrowseCountries, BrowseDirectory, CommunityBusinessDetails_CoomingSoon, ConnectShare, ContactByEmailMember, ContactByEmailOneSchoolGlobal, ContactUsDetails, ContactUsMenu, CountryDetails, CountryList, FeedItemDetail, HomeFeed, HouseholdCarousel, HouseholdDetails, Household_Relations, LegacyShareObject, Locality_Details, Login, Menu, MessageDetail, MessageList, MyBookmarks, MyEntertaining, Notes, Notifications, OneSchoolGlobalDetails, PINBiometricsMenu, PINChange, PINRegister, PINUnlock, Photobook, Profile, Search, Services, Splash, SupperMeeting_Carousel, SupperMeeting_Details, TermsAndPoliciesMenu, Updates_SingleList
- Compiled source: `migration/screens/BrowseCountries/analysis/sources/pretty/UBTConnectLibrary.BasePatterns.Columns_Two.mvc.js`
- Child blocks: OutSystemsUI_2_23.Adaptive.Columns2 (queue: OutSystemsUI_2_23.Adaptive.Columns2)

## Inputs

| Input | Type |
|---|---|
| ExtendedClasses | Text |

## Captured DOM variants (1 distinct, 1005 instances)

### Variant 1: BrowseCountries/default (×1005)

```html
<div class="OSBlockWidget" data-block="BasePatterns.Columns_Two" id="b2-l1-87_0-b7-$b2">
  <div class="OSBlockWidget" data-block="Adaptive.Columns2" id="b2-l1-87_0-b7-b2-$b1"><!-- nested block: 73 nodes --></div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("UBTConnectLibrary.BasePatterns.Columns_Two.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "react", "OutSystems/ReactView/Main", "UBTConnectLibrary.BasePatterns.Columns_Two.mvc$model", "UBTConnectLibrary.BasePatterns.Columns_Two.mvc$controller", "UBTConnectLibrary.clientVariables", "OutSystemsUI_2_23.Adaptive.Columns2.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.controller$ConvertUbtSizeToGutterSize", "UBTConnectLibrary.controller$FormatClasses", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnectLibrary.controller$GetClasses_Column", "UBTConnectLibrary.controller$SetLocalVariable_ColumnSize"], function(OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, React, OSView, UBTConnectLibrary_BasePatterns_Columns_Two_mvc_model, UBTConnectLibrary_BasePatterns_Columns_Two_mvc_controller, UBTConnectLibraryClientVariables, OutSystemsUI_2_23_Adaptive_Columns2_mvc_view, OSWidgets) {
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
        View.displayName = "BasePatterns.Columns_Two";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [OutSystemsUI_2_23_Adaptive_Columns2_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnectLibrary_BasePatterns_Columns_Two_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnectLibrary_BasePatterns_Columns_Two_mvc_controller;
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
            return React.createElement("div", this.getRootNodeProperties(), React.createElement(OutSystemsUI_2_23_Adaptive_Columns2_mvc_view, {
                inputs: {
                    GutterSize: model.getCachedValue(idService.getId("8BN_sFi0Kk65UQuvLIGmHg.GutterSize"), function() {
                            return UBTConnectLibraryController.default.convertUbtSizeToGutterSize$Action(model.variables.columnOptionsIn.spacingSizeAttr, callContext).gutterSizeIdOut;
                        }, OS.DataTypes.DataTypes.Text, callContext.id);
                    }, function() {
                        return model.variables.columnOptionsIn.spacingSizeAttr;
                    }),
                    _gutterSizeInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._columnOptionsInDataFetchStatus),
                    ExtendedClass: model.getCachedValue(idService.getId("8BN_sFi0Kk65UQuvLIGmHg.ExtendedClass"), function() {
                                    return UBTConnectLibraryController.default.formatClasses$Action(model.variables.mainContainerClassVar, model.variables.extendedClassesIn, callContext).classesOutOut;
                                }, OS.DataTypes.DataTypes.Text, callContext.id), (model.variables.mainContainerClassVar + "--two-columns"), callContext).classesOutOut;
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
                    _extendedClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._extendedClassesInDataFetchStatus, model.variables._columnOptionsInDataFetchStatus)
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
                                return (((((model.variables.mainContainerClassVar + "--left") + " ") + model.variables.mainContainerClassVar) + "--column ") + (((model.variables.columnOptionsIn.columnSizesAttr.leftAttr > 0)) ? ((model.variables.mainContainerClassVar + "--fixed-width")) : ("")));
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
                            content: _this.props.placeholders.right,
                            style: model.getCachedValue(idService.getId("Right.Style"), function() {
                                return (((((model.variables.mainContainerClassVar + "--right") + " ") + model.variables.mainContainerClassVar) + "--column ") + (((model.variables.columnOptionsIn.columnSizesAttr.rightAttr > 0)) ? ((model.variables.mainContainerClassVar + "--fixed-width")) : ("")));
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
