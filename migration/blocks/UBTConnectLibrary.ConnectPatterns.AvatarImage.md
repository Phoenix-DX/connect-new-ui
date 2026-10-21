# UBTConnectLibrary.ConnectPatterns.AvatarImage

- Kind: shared; build screens using it: BrowseCountries, BrowseDirectory, HomeFeed, LegacyShareObject, Locality_Details, MessageDetail, Notes, Notifications, Updates_SingleList
- Compiled source: `migration/screens/BrowseCountries/analysis/sources/pretty/UBTConnectLibrary.ConnectPatterns.AvatarImage.mvc.js`
- Child blocks: OutSystemsUI_2_23.Utilities.InlineSVG, UBTConnectLibrary.BasePatterns.CustomContainer, UBTConnectLibrary.ConnectPatterns.Icon (queue: -)

## Inputs

| Input | Type |
|---|---|
| In_SizeId | Text |
| In_BorderRadius | Text |

## Captured DOM variants (1 distinct, 68 instances)

### Variant 1: BrowseCountries/default (×68)

```html
<div class="OSBlockWidget" data-block="ConnectPatterns.AvatarImage" id="b2-l1-87_0-b7-$b12">
  <div class="OSBlockWidget" data-block="BasePatterns.CustomContainer" id="b2-l1-87_0-b7-b12-$b1"><!-- nested block: 2 nodes --></div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("UBTConnectLibrary.ConnectPatterns.AvatarImage.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "react", "OutSystems/ReactView/Main", "UBTConnectLibrary.ConnectPatterns.AvatarImage.mvc$model", "UBTConnectLibrary.ConnectPatterns.AvatarImage.mvc$controller", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "OutSystems/ReactWidgets/Main", "OutSystemsUI_2_23.Utilities.InlineSVG.mvc$view", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$view", "UBTConnectLibrary.controller$FormatClasses", "UBTConnectLibrary.controller$GetClasses_AvatarSize", "UBTConnectLibrary.model$AvatarImageRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec"], function(OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, React, OSView, UBTConnectLibrary_ConnectPatterns_AvatarImage_mvc_model, UBTConnectLibrary_ConnectPatterns_AvatarImage_mvc_controller, UBTConnectLibraryClientVariables, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, OSWidgets, OutSystemsUI_2_23_Utilities_InlineSVG_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view) {
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
        View.displayName = "ConnectPatterns.AvatarImage";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, OutSystemsUI_2_23_Utilities_InlineSVG_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnectLibrary_ConnectPatterns_AvatarImage_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnectLibrary_ConnectPatterns_AvatarImage_mvc_controller;
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
            return React.createElement("div", this.getRootNodeProperties(), $if(((model.variables.in_AvatarImageIn.uRLAttr) !== ("")), false, this, function() {
                return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                    inputs: {
                        Options: model.getCachedValue(idService.getId("o9AXUKYz_kKJowXMel5NHg.Options"), function() {
                            return function() {
                                var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                                rec.borderOptionsAttr = function() {
                                    var rec = new UBTConnectLibraryModel.BorderOptionsRec();
                                    rec.colorAttr = UBTConnectLibraryModel.staticEntities.uBT_Color.neutral5;
                                    rec.sizeAttr = function() {
                                        var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                        rec.generalSizeIdAttr = UBTConnectLibraryModel.staticEntities.uBT_Size.small;
                                        return rec;
                                    }();
                                    rec.radiusAttr = function() {
                                        var rec = new UBTConnectLibraryModel.RadiusOptionsRec();
                                        rec.generalSizeIdAttr = model.variables.in_BorderRadiusIn;
                                        return rec;
                                    }();
                                    return rec;
                                }();
                                rec.isSkeletonElementAttr = true;
                                return rec;
                            }();
                        }, function() {
                            return model.variables.in_BorderRadiusIn;
                        }),
                        _optionsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_BorderRadiusInDataFetchStatus),
                        ExtendedClasses: model.getCachedValue(idService.getId("o9AXUKYz_kKJowXMel5NHg.ExtendedClasses"), function() {
                                    return UBTConnectLibraryController.default.formatClasses$Action(model.variables.mainContainerClassVar, "inline-block", callContext).classesOutOut;
                                    return UBTConnectLibraryController.default.getClasses_AvatarSize$Action(model.variables.in_SizeIdIn, callContext).classesOutOut;
                                }, OS.DataTypes.DataTypes.Text, callContext.id), callContext).classesOutOut;
                            }, OS.DataTypes.DataTypes.Text, callContext.id);
                        }, function() {
                            return model.variables.mainContainerClassVar;
                        }, function() {
                            return model.variables.in_SizeIdIn;
                        }),
                        _extendedClassesInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_SizeIdInDataFetchStatus)
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
                            return [React.createElement(OSWidgets.Image, {
                                type: /*External*/ 1,
                                url: model.variables.in_AvatarImageIn.uRLAttr,
                                _idProps: {
                                    service: idService,
                                    uuid: "1"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                url_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_AvatarImageInDataFetchStatus)
                            })];
                        })
                    },
                    _dependencies: [asPrimitiveValue(model.variables._in_AvatarImageInDataFetchStatus), asPrimitiveValue(model.variables.in_AvatarImageIn.uRLAttr)]
                })];
            }, function() {
                return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                    inputs: {
                        ExtendedClasses: model.getCachedValue(idService.getId("jcIO3a+4HEqHfngJfyro6w.ExtendedClasses"), function() {
                                    return UBTConnectLibraryController.default.formatClasses$Action(model.variables.mainContainerClassVar, "inline-block", callContext).classesOutOut;
                                    return UBTConnectLibraryController.default.getClasses_AvatarSize$Action(model.variables.in_SizeIdIn, callContext).classesOutOut;
                                }, OS.DataTypes.DataTypes.Text, callContext.id), callContext).classesOutOut;
                            }, OS.DataTypes.DataTypes.Text, callContext.id);
                        }, function() {
                            return model.variables.mainContainerClassVar;
                        }, function() {
                            return model.variables.in_SizeIdIn;
                        }),
                        _extendedClassesInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_SizeIdInDataFetchStatus),
                        Options: model.getCachedValue(idService.getId("jcIO3a+4HEqHfngJfyro6w.Options"), function() {
                            return function() {
                                var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                                rec.backgroundAttr = function() {
                                    var rec = new UBTConnectLibraryModel.BackgroundOptionsRec();
                                    rec.backgroundColorAttr = model.variables.in_AvatarImageIn.fallbackOptionsAttr.backgroundColorAttr;
                                    return rec;
                                }();
                                rec.borderOptionsAttr = function() {
                                    var rec = new UBTConnectLibraryModel.BorderOptionsRec();
                                    rec.colorAttr = model.variables.in_AvatarImageIn.fallbackOptionsAttr.borderColorAttr;
                                    rec.sizeAttr = function() {
                                        var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                        rec.generalSizeIdAttr = model.variables.in_AvatarImageIn.fallbackOptionsAttr.borderSizeAttr;
                                        return rec;
                                    }();
                                    rec.radiusAttr = function() {
                                        var rec = new UBTConnectLibraryModel.RadiusOptionsRec();
                                        rec.generalSizeIdAttr = model.variables.in_BorderRadiusIn;
                                        return rec;
                                    }();
                                    return rec;
                                }();
                                rec.textOptionsAttr = function() {
                                    var rec = new UBTConnectLibraryModel.TextOptionsRec();
                                    rec.colorAttr = model.variables.in_AvatarImageIn.fallbackOptionsAttr.fontColorAttr;
                                    rec.fontSizeAttr = model.variables.in_AvatarImageIn.fallbackOptionsAttr.fontSizeAttr;
                                    rec.fontWeightAttr = UBTConnectLibraryModel.staticEntities.uBT_FontWeight.semiBold;
                                    return rec;
                                }();
                                rec.isSkeletonElementAttr = true;
                                return rec;
                            }();
                        }, function() {
                            return model.variables.in_AvatarImageIn.fallbackOptionsAttr.backgroundColorAttr;
                        }, function() {
                            return model.variables.in_AvatarImageIn.fallbackOptionsAttr.borderColorAttr;
                        }, function() {
                            return model.variables.in_AvatarImageIn.fallbackOptionsAttr.borderSizeAttr;
                        }, function() {
                            return model.variables.in_BorderRadiusIn;
                        }, function() {
                            return model.variables.in_AvatarImageIn.fallbackOptionsAttr.fontColorAttr;
                        }, function() {
                            return model.variables.in_AvatarImageIn.fallbackOptionsAttr.fontSizeAttr;
                        }),
                        _optionsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_AvatarImageInDataFetchStatus, model.variables._in_BorderRadiusInDataFetchStatus)
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
                    placeholders: {
                        content: new PlaceholderContent(function() {
                            return [$if(((model.variables.in_AvatarImageIn.fallbackOptionsAttr.initialsAttr) !== ("")), false, this, function() {
                                return [React.createElement(OSWidgets.Expression, {
                                    style: (model.variables.mainContainerClassVar + "__initials"),
                                    value: model.variables.in_AvatarImageIn.fallbackOptionsAttr.initialsAttr,
                                    _idProps: {
                                        service: idService,
                                        uuid: "3"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider,
                                    value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_AvatarImageInDataFetchStatus)
                                })];
                            }, function() {
                                return [$if(((model.variables.in_AvatarImageIn.fallbackOptionsAttr.sVGAttr) !== ("")), false, this, function() {
                                    return [React.createElement(OutSystemsUI_2_23_Utilities_InlineSVG_mvc_view, {
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
                                            uuid: "4",
                                            alias: "3"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        _dependencies: []
                                    })];
                                }, function() {
                                    return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
                                        inputs: {
                                            In_IconId: model.variables.in_AvatarImageIn.fallbackOptionsAttr.iconIdAttr,
                                            _in_IconIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_AvatarImageInDataFetchStatus),
                                            In_ColorId: model.variables.in_AvatarImageIn.fallbackOptionsAttr.fontColorAttr,
                                            _in_ColorIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_AvatarImageInDataFetchStatus)
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
```
(… 19 more lines in `migration/screens/BrowseCountries/analysis/sources/pretty/UBTConnectLibrary.ConnectPatterns.AvatarImage.mvc.js`)
