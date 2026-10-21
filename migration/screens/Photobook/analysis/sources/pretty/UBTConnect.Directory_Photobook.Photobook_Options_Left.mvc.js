define("UBTConnect.Directory_Photobook.Photobook_Options_Left.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "Connect_Household_CS.model", "UBTConnectLibrary.model", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "UBTConnect.controller", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$model", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$model", "UBTConnectLibrary.ConnectPatterns.BottomSheet.mvc$model", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$model", "ReactiveHtmlSanitizer.HtmlSanitizer.SanitizedHtml.mvc$model", "Connect_Household_CS.model$UI_PhotobookHouseholdRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect_Household_CS", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "OutSystemsUI_2_23.model$ErrorMessageRec", "UBTConnect.referencesHealth$OutSystemsUI_2_23", "OutSystemsUI_2_23.controller$BottomSheetOpen", "OutSystemsUI_2_23.controller$BottomSheetClose", "UBTConnect.controller$GetSkeleton_UI_PhotobookCaption"], function(OutSystems, UBTConnectModel, Connect_Household_CSModel, UBTConnectLibraryModel, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, UBTConnectController, UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel, UBTConnectLibrary_ConnectPatterns_Icon_mvcModel, UBTConnectLibrary_ConnectPatterns_BottomSheet_mvcModel, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvcModel, ReactiveHtmlSanitizer_HtmlSanitizer_SanitizedHtml_mvcModel) {
    var OS = OutSystems.Internal;

    var GetHouseholdCaptionDataActRec = (function(_super) {
        __extends(GetHouseholdCaptionDataActRec, _super);

        function GetHouseholdCaptionDataActRec(defaults) {
            _super.apply(this, arguments);
        }
        GetHouseholdCaptionDataActRec.attributesToDeclare = function() {
            return [
                this.attr("HouseholdCaption", "householdCaptionOut", "HouseholdCaption", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, true),
                this.attr("LastFetchedHousehold", "lastFetchedHouseholdOut", "LastFetchedHousehold", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect_Household_CSModel.UI_PhotobookHouseholdRec());
                }, true, Connect_Household_CSModel.UI_PhotobookHouseholdRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        GetHouseholdCaptionDataActRec.init();
        return GetHouseholdCaptionDataActRec;
    })(OS.Model.DataSourceRecord);

    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("InfoSheetId", "infoSheetIdVar", "InfoSheetId", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("isLoading", "isLoadingVar", "isLoading", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("LastFetched", "lastFetchedVar", "LastFetched", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect_Household_CSModel.UI_PhotobookHouseholdRec());
                }, false, Connect_Household_CSModel.UI_PhotobookHouseholdRec),
                this.attr("In_MainContainerClass", "in_MainContainerClassIn", "In_MainContainerClass", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_in_MainContainerClassInDataFetchStatus", "_in_MainContainerClassInDataFetchStatus", "_in_MainContainerClassInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_IsShow", "in_IsShowIn", "In_IsShow", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("_in_IsShowInDataFetchStatus", "_in_IsShowInDataFetchStatus", "_in_IsShowInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_CurrentHousehold", "in_CurrentHouseholdIn", "In_CurrentHousehold", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect_Household_CSModel.UI_PhotobookHouseholdRec());
                }, false, Connect_Household_CSModel.UI_PhotobookHouseholdRec),
                this.attr("_in_CurrentHouseholdInDataFetchStatus", "_in_CurrentHouseholdInDataFetchStatus", "_in_CurrentHouseholdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("GetHouseholdCaption", "getHouseholdCaptionDataAct", "getHouseholdCaptionDataAct", true, true, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new GetHouseholdCaptionDataActRec());
                }, true, GetHouseholdCaptionDataActRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        VariablesRecord.init();
        return VariablesRecord;
    })(OS.DataTypes.GenericRecord);
    var WidgetsRecord = (function(_super) {
        __extends(WidgetsRecord, _super);

        function WidgetsRecord() {
            _super.apply(this, arguments);
        }
        WidgetsRecord.getWidgetsType = function() {
            return {};
        };

        return WidgetsRecord;
    })(OS.Model.BaseWidgetRecordMap);
    var Model = (function(_super) {
        __extends(Model, _super);

        function Model() {
            _super.apply(this, arguments);
        }
        Model.getVariablesRecordConstructor = function() {
            return VariablesRecord;
        };
        Model.getWidgetsRecordConstructor = function() {
            return WidgetsRecord;
        };
        Model._hasValidationWidgetsValue = undefined;
        Object.defineProperty(Model, "hasValidationWidgets", {
            enumerable: true,
            configurable: true,
            get: function() {
                if ((Model._hasValidationWidgetsValue === undefined)) {
                    Model._hasValidationWidgetsValue = ((((UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel.hasValidationWidgets || UBTConnectLibrary_ConnectPatterns_Icon_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_BottomSheet_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvcModel.hasValidationWidgets) || ReactiveHtmlSanitizer_HtmlSanitizer_SanitizedHtml_mvcModel.hasValidationWidgets);
                }

                return Model._hasValidationWidgetsValue;
            }
        });

        Model.prototype.setInputs = function(inputs) {
            if ("In_MainContainerClass" in inputs) {
                this.variables.in_MainContainerClassIn = inputs.In_MainContainerClass;
                if ("_in_MainContainerClassInDataFetchStatus" in inputs) {
                    this.variables._in_MainContainerClassInDataFetchStatus = inputs._in_MainContainerClassInDataFetchStatus;
                }

            }

            if ("In_IsShow" in inputs) {
                this.variables.in_IsShowIn = inputs.In_IsShow;
                if ("_in_IsShowInDataFetchStatus" in inputs) {
                    this.variables._in_IsShowInDataFetchStatus = inputs._in_IsShowInDataFetchStatus;
                }

            }

            if ("In_CurrentHousehold" in inputs) {
                this.variables.in_CurrentHouseholdIn = inputs.In_CurrentHousehold;
                if ("_in_CurrentHouseholdInDataFetchStatus" in inputs) {
                    this.variables._in_CurrentHouseholdInDataFetchStatus = inputs._in_CurrentHouseholdInDataFetchStatus;
                }

            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "Directory_Photobook.Photobook_Options_Left");
});
define("UBTConnect.Directory_Photobook.Photobook_Options_Left.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "Connect_Household_CS.model", "UBTConnectLibrary.model", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.Directory_Photobook.Photobook_Options_Left.mvc$model", "UBTConnect.Directory_Photobook.Photobook_Options_Left.mvc$controller", "UBTConnect.clientVariables", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$view", "UBTConnectLibrary.ConnectPatterns.BottomSheet.mvc$view", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$view", "ReactiveHtmlSanitizer.HtmlSanitizer.SanitizedHtml.mvc$view", "Connect_Household_CS.model$UI_PhotobookHouseholdRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect_Household_CS", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "OutSystemsUI_2_23.model$ErrorMessageRec", "UBTConnect.referencesHealth$OutSystemsUI_2_23", "OutSystemsUI_2_23.controller$BottomSheetOpen", "OutSystemsUI_2_23.controller$BottomSheetClose", "UBTConnect.controller$GetSkeleton_UI_PhotobookCaption"], function(OutSystems, UBTConnectModel, UBTConnectController, Connect_Household_CSModel, UBTConnectLibraryModel, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, React, OSView, UBTConnect_Directory_Photobook_Photobook_Options_Left_mvc_model, UBTConnect_Directory_Photobook_Photobook_Options_Left_mvc_controller, UBTConnectClientVariables, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, OSWidgets, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnectLibrary_ConnectPatterns_BottomSheet_mvc_view, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, ReactiveHtmlSanitizer_HtmlSanitizer_SanitizedHtml_mvc_view) {
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
        View.displayName = "Directory_Photobook.Photobook_Options_Left";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnectLibrary_ConnectPatterns_BottomSheet_mvc_view, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, ReactiveHtmlSanitizer_HtmlSanitizer_SanitizedHtml_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_Directory_Photobook_Photobook_Options_Left_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_Directory_Photobook_Photobook_Options_Left_mvc_controller;
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
                    Options: model.getCachedValue(idService.getId("Photobook_Options_Top_Left.Options"), function() {
                        return function() {
                            var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                            rec.backgroundAttr = function() {
                                var rec = new UBTConnectLibraryModel.BackgroundOptionsRec();
                                rec.backgroundColorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral9;
                                rec.opacityAttr = (new OS.DataTypes.Decimal("0.6"));
                                return rec;
                            }();
                            rec.paddingSizeAttr = function() {
                                var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                rec.generalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
                                return rec;
                            }();
                            rec.borderOptionsAttr = function() {
                                var rec = new UBTConnectLibraryModel.BorderOptionsRec();
                                rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral0;
                                rec.sizeAttr = function() {
                                    var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                    rec.generalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.medium;
                                    return rec;
                                }();
                                rec.radiusAttr = function() {
                                    var rec = new UBTConnectLibraryModel.RadiusOptionsRec();
                                    rec.generalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Shape.circle;
                                    return rec;
                                }();
                                return rec;
                            }();
                            rec.displayOptionsAttr = function() {
                                var rec = new UBTConnectLibraryModel.DisplayOptionsRec();
                                return rec;
                            }();
                            rec.visibilityAttr = ((model.variables.in_IsShowIn) ? (UBTConnectModel.staticEntities.uBT_Visibility.visible) : (UBTConnectModel.staticEntities.uBT_Visibility.hidden));
                            return rec;
                        }();
                    }, function() {
                        return model.variables.in_IsShowIn;
                    }),
                    _optionsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_IsShowInDataFetchStatus),
                    ExtendedClasses: (model.variables.in_MainContainerClassIn + "--top-left"),
                    _extendedClassesInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_MainContainerClassInDataFetchStatus)
                },
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    },
                    clicked$Action: function() {
                        return Promise.resolve().then(function() {
                            var eventHandlerContext = callContext.clone();
                            return OS.Flow.tryFinally(function() {
                                var varBag = {};
                                controller.pushDebuggerContext(eventHandlerContext);

                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "BasePatterns/CustomContainer Clicked");
                                return controller.handler_ClickedInfo$Action(controller.callContext(eventHandlerContext));
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
                    name: "Photobook_Options_Top_Left",
                    alias: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                placeholders: {
                    content: new PlaceholderContent(function() {
                        return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
                            inputs: {
                                In_IconId: UBTConnectModel.staticEntities.uBT_Icons2.info,
                                In_SizeId: UBTConnectModel.staticEntities.uBT_IconsSize.base_24,
                                In_ColorId: UBTConnectModel.staticEntities.uBT_Color.neutral0
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
                                name: "Photobook_Options_Top_Info",
                                alias: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        })];
                    })
                },
                _dependencies: []
            }), $if(model.variables.in_IsShowIn, false, this, function() {
                return [React.createElement(UBTConnectLibrary_ConnectPatterns_BottomSheet_mvc_view, {
                    inputs: {
                        ExtendedClasses: (((model.variables.in_MainContainerClassIn + "-bottom-sheet ") + model.variables.in_MainContainerClassIn) + "-bottom-sheet--info"),
                        _extendedClassesInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_MainContainerClassInDataFetchStatus),
                        Title: model.variables.in_CurrentHouseholdIn.localityAttr,
                        _titleInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_CurrentHouseholdInDataFetchStatus)
                    },
                    events: {
                        _handleError: function(ex) {
                            controller.handleError(ex);
                        },
                        onToggle$Action: function(isOpenIn) {
                            return Promise.resolve().then(function() {
                                var eventHandlerContext = callContext.clone();
                                return OS.Flow.tryFinally(function() {
                                    var varBag = {};
                                    controller.pushDebuggerContext(eventHandlerContext);

                                    OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/BottomSheet OnToggle");
                                    return controller.handler_ToggleInfoSheet$Action(isOpenIn, controller.callContext(eventHandlerContext));
                                }, function() {
                                    controller.popDebuggerContext(eventHandlerContext);
                                });
                            });;
                        },
                        onClose$Action: function() {
                            var eventHandlerContext = callContext.clone();
                            return OS.Flow.tryFinally(function() {
                                var varBag = {};
                                controller.pushDebuggerContext(eventHandlerContext);

                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/BottomSheet OnClose");
                                controller.toggleInfoSheet$Action(false, controller.callContext(eventHandlerContext));
                            }, function() {
                                controller.popDebuggerContext(eventHandlerContext);
                            });

                            ;
                        },
                        initialized$Action: function(idIn) {
                            var eventHandlerContext = callContext.clone();
                            return OS.Flow.tryFinally(function() {
                                var varBag = {};
                                controller.pushDebuggerContext(eventHandlerContext);

                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/BottomSheet Initialized");
                                controller.infoSheetInitialized$Action(idIn, controller.callContext(eventHandlerContext));
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
                        name: "BottomSheet_Info",
                        alias: "3"
                    },
                    _widgetRecordProvider: widgetsRecordProvider,
                    placeholders: {
                        content: new PlaceholderContent(function() {
                            return [React.createElement(UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, {
                                inputs: {
                                    In_IsLoading: model.variables.isLoadingVar
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
                                    placeholder_LoadingSection: new PlaceholderContent(function() {
                                        return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                                            inputs: {
                                                Options: model.getCachedValue(idService.getId("IsmMVjddAUWtCrpo75aOYQ.Options"), function() {
                                                    return function() {
                                                        var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                                                        rec.displayOptionsAttr = function() {
                                                            var rec = new UBTConnectLibraryModel.DisplayOptionsRec();
                                                            rec.displayAttr = UBTConnectModel.staticEntities.uBT_Display.flex;
                                                            rec.alignItemsAttr = UBTConnectModel.staticEntities.uBT_AlignItems.flexStart;
                                                            rec.justifyContentAttr = UBTConnectModel.staticEntities.uBT_JustifyContent.center;
                                                            rec.flexDirectionAttr = UBTConnectModel.staticEntities.uBT_FlexDirection.column;
                                                            return rec;
                                                        }();
                                                        return rec;
                                                    }();
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
                                                uuid: "4",
                                                alias: "5"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider,
                                            placeholders: {
                                                content: new PlaceholderContent(function() {
                                                    return [React.createElement(ReactiveHtmlSanitizer_HtmlSanitizer_SanitizedHtml_mvc_view, {
                                                        inputs: {
                                                            Value: model.variables.getHouseholdCaptionDataAct.householdCaptionOut,
                                                            _valueInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getHouseholdCaptionDataAct.dataFetchStatusAttr),
                                                            ResetWhitelist: false,
                                                            AllowedTags: "nobr,sup"
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
                                                            uuid: "5",
                                                            alias: "6"
                                                        },
                                                        _widgetRecordProvider: widgetsRecordProvider,
                                                        _dependencies: []
                                                    })];
                                                })
                                            },
                                            _dependencies: [asPrimitiveValue(model.variables.getHouseholdCaptionDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.getHouseholdCaptionDataAct.householdCaptionOut)]
                                        })];
                                    })
                                },
                                _dependencies: [asPrimitiveValue(model.variables.getHouseholdCaptionDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.getHouseholdCaptionDataAct.householdCaptionOut)]
                            })];
                        }),
                        footer: PlaceholderContent.Empty
                    },
                    _dependencies: [asPrimitiveValue(model.variables.getHouseholdCaptionDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.getHouseholdCaptionDataAct.householdCaptionOut), asPrimitiveValue(model.variables.isLoadingVar)]
                })];
            }, function() {
                return [];
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);

    return View;
});
define("UBTConnect.Directory_Photobook.Photobook_Options_Left.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "Connect_Household_CS.model", "UBTConnectLibrary.model", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.Directory_Photobook.Photobook_Options_Left.mvc$debugger", "UBTConnect.Directory_Photobook.Photobook_Options_Left.mvc$controller.OnInitialize.IsViewRestoredFromCacheJS", "Connect_Household_CS.model$UI_PhotobookHouseholdRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect_Household_CS", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "OutSystemsUI_2_23.model$ErrorMessageRec", "UBTConnect.referencesHealth$OutSystemsUI_2_23", "OutSystemsUI_2_23.controller$BottomSheetOpen", "OutSystemsUI_2_23.controller$BottomSheetClose", "UBTConnect.controller$GetSkeleton_UI_PhotobookCaption"], function(OutSystems, UBTConnectModel, UBTConnectController, Connect_Household_CSModel, UBTConnectLibraryModel, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_Directory_Photobook_Photobook_Options_Left_mvc_Debugger, UBTConnect_Directory_Photobook_Photobook_Options_Left_mvc_controller_OnInitialize_IsViewRestoredFromCacheJS) {
    var OS = OutSystems.Internal;
    var Controller = (function(_super) {
        __extends(Controller, _super);

        function Controller() {
            _super.apply(this, arguments);
            var controller = this.controller;
            this.clientActionProxies = {};
            this.dataFetchDependenciesOriginal = {
                getHouseholdCaption$DataActRefresh: -1
            };
            this.dataFetchDependentsGraph = {
                getHouseholdCaption$DataActRefresh: []
            };
            this.shouldSendClientVarsToDataSources = false;
        }
        // Server Actions

        // Aggregates and Data Actions
        Controller.prototype.getHouseholdCaption$DataActRefresh = function(callContext) {
            var model = this.model;
            var controller = this.controller;
            var callContext = controller.callContext(callContext);
            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:nlxpZYu7J02BupXRE5x63Q:/NRWebFlows.8oQxJd3P8Uyxf_ey5QuLaQ/NodesShownInESpaceTree.fYQi8HGP8EqNKGIF7A5umA/DataActions.nlxpZYu7J02BupXRE5x63Q:YROJPxRGkTY2tygsL5EEpA", "UBTConnect", "GetHouseholdCaption", "NRFlows.DataScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.setThreadStartName(callContext.id, "Directory_Photobook/Photobook_Options_Left/GetHouseholdCaption");
                return controller.callDataAction("DataActionGetHouseholdCaption", "screenservices/UBTConnect/Directory_Photobook/Photobook_Options_Left/DataActionGetHouseholdCaption", "qwksu_EDs7750za4vgV9fg", function(b) {
                    model.variables.getHouseholdCaptionDataAct.dataFetchStatusAttr = b;
                }, function(json) {
                    model.variables.getHouseholdCaptionDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getHouseholdCaptionDataAct.constructor));
                }, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function(json, headers) {
                    OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
                }, callContext, undefined, false).then(function() {
                    OutSystemsDebugger.setThreadStartName(callContext.id, "Directory_Photobook/Photobook_Options_Left/GetHouseholdCaption On After Fetch");
                    controller._onAfterFetch_GetHouseholdCaption$Action(controller.callContext(callContext));

                });

            }, function() {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:nlxpZYu7J02BupXRE5x63Q", callContext.id);
                controller.popDebuggerContext(callContext);

            });
        };

        Controller.prototype.dataFetchActionNames = ["getHouseholdCaption$DataActRefresh"];
        // Client Actions
        Controller.prototype._toggleInfoSheet$Action = function(isOpenIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("ToggleInfoSheet");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.Directory_Photobook.Photobook_Options_Left.ToggleInfoSheet$vars"))());
            vars.value.isOpenInLocal = isOpenIn;
            var bottomSheetOpenVar = new OS.DataTypes.VariableHolder();
            var bottomSheetCloseVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.vars = vars;
            varBag.bottomSheetOpenVar = bottomSheetOpenVar;
            varBag.bottomSheetCloseVar = bottomSheetCloseVar;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:2qmXPFRPKE2RVMRstpZH2g:/NRWebFlows.8oQxJd3P8Uyxf_ey5QuLaQ/NodesShownInESpaceTree.fYQi8HGP8EqNKGIF7A5umA/ClientActions.2qmXPFRPKE2RVMRstpZH2g:uZh8sMhzrzDR9Y1cc_UIwQ", "UBTConnect", "ToggleInfoSheet", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:uvV9KZeO4Eim2AP17ZhVzw", callContext.id);
                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:MYGfIZTsjk2VdJwv5q3NQQ", callContext.id) && vars.value.isOpenInLocal)) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:VejkjJdVUUaeWS7TxQ4T0g", callContext.id);
                    // Execute Action: BottomSheetOpen
                    bottomSheetOpenVar.value = OutSystemsUI_2_23Controller.default.bottomSheetOpen$Action(model.variables.infoSheetIdVar, callContext);

                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:UA+8m8p7YE+MkJhEeU3Xfw", callContext.id);
                } else {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:5_T67OBVy0e7QPO0jWuREQ", callContext.id);
                    // Execute Action: BottomSheetClose
                    bottomSheetCloseVar.value = OutSystemsUI_2_23Controller.default.bottomSheetClose$Action(model.variables.infoSheetIdVar, callContext);

                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:UA+8m8p7YE+MkJhEeU3Xfw", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:2qmXPFRPKE2RVMRstpZH2g", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.Directory_Photobook.Photobook_Options_Left.ToggleInfoSheet$vars", [{
            name: "IsOpen",
            attrName: "isOpenInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);
        Controller.prototype._handler_ToggleInfoSheet$Action = function(isOpenIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_ToggleInfoSheet");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.Directory_Photobook.Photobook_Options_Left.Handler_ToggleInfoSheet$vars"))());
            vars.value.isOpenInLocal = isOpenIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:fzzuPZHjfUCwb+cGrAzV5Q:/NRWebFlows.8oQxJd3P8Uyxf_ey5QuLaQ/NodesShownInESpaceTree.fYQi8HGP8EqNKGIF7A5umA/ClientActions.fzzuPZHjfUCwb+cGrAzV5Q:0fCvSc6MfQtgw76ntm+pPQ", "UBTConnect", "Handler_ToggleInfoSheet", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:iEtH2aklK0GljXdJzsPdnw", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                return OS.Flow.executeSequence(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Bcsu2YwOvkKX9Ymb7Fa0nA", callContext.id) && vars.value.isOpenInLocal)) {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Vjqv56fGek2yzTEG96UVww", callContext.id);
                        // Trigger Event: SheetIsOpen
                        return controller.sheetIsOpen$Action(callContext).then(function() {
                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:JSKjjqnKpE+VLLHkNIUw4w", callContext.id);
                        });
                    } else {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:KLfJxRZz7EKgs6P_Hd7ZNw", callContext.id);
                        // Trigger Event: Closed
                        return controller.closed$Action(callContext).then(function() {
                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:OpY+2i2opUSGr4Uxeszssg", callContext.id);
                        });
                    }

                });
            }).then(function(res) {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:fzzuPZHjfUCwb+cGrAzV5Q", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:fzzuPZHjfUCwb+cGrAzV5Q", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("UBTConnect.Directory_Photobook.Photobook_Options_Left.Handler_ToggleInfoSheet$vars", [{
            name: "IsOpen",
            attrName: "isOpenInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);
        Controller.prototype._onAfterFetch_GetHouseholdCaption$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnAfterFetch_GetHouseholdCaption");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:dgWJQXfgn0WccOQUexcgBg:/NRWebFlows.8oQxJd3P8Uyxf_ey5QuLaQ/NodesShownInESpaceTree.fYQi8HGP8EqNKGIF7A5umA/ClientActions.dgWJQXfgn0WccOQUexcgBg:Nbeufr3Zz6NKaziUVdhWlA", "UBTConnect", "OnAfterFetch_GetHouseholdCaption", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:HWick5VU_kWnZnIEpCf2HQ", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:7T4z0yS1BEyCNN6azbDmng", callContext.id);
                // isLoading = False
                model.variables.isLoadingVar = false;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:HiLnIpbgmUe6ZaGM1XeFGg", callContext.id);
                // LastFetched = GetHouseholdCaption.LastFetchedHousehold
                model.variables.lastFetchedVar = model.variables.getHouseholdCaptionDataAct.lastFetchedHouseholdOut;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:8KjdCvl5QkijV9AqApintQ", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:dgWJQXfgn0WccOQUexcgBg", callContext.id);
            }

        };
        Controller.prototype._infoSheetInitialized$Action = function(idIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("InfoSheetInitialized");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.Directory_Photobook.Photobook_Options_Left.InfoSheetInitialized$vars"))());
            vars.value.idInLocal = idIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:zZ7qQbZMkUuSJDtS28zpPA:/NRWebFlows.8oQxJd3P8Uyxf_ey5QuLaQ/NodesShownInESpaceTree.fYQi8HGP8EqNKGIF7A5umA/ClientActions.zZ7qQbZMkUuSJDtS28zpPA:wSbHcNaEU6F_CVD9a3TkNA", "UBTConnect", "InfoSheetInitialized", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Y0CDkT+UkUGtdKHa7aVcmg", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:+LZuoZxnSU63KX0WrZxoyg", callContext.id);
                // InfoSheetId = Id
                model.variables.infoSheetIdVar = vars.value.idInLocal;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:hYbTmOyptEmOM+X+yQCP3g", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:zZ7qQbZMkUuSJDtS28zpPA", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.Directory_Photobook.Photobook_Options_Left.InfoSheetInitialized$vars", [{
            name: "Id",
            attrName: "idInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.prototype._handler_ClickedInfo$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_ClickedInfo");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:M9u+fDS0qEKPoDJXTplVtw:/NRWebFlows.8oQxJd3P8Uyxf_ey5QuLaQ/NodesShownInESpaceTree.fYQi8HGP8EqNKGIF7A5umA/ClientActions.M9u+fDS0qEKPoDJXTplVtw:vb_FEmzHQDQ_ErZ041hg9A", "UBTConnect", "Handler_ClickedInfo", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:9mu0OT+wIUyySiftR8UL5Q", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:UM+cSyzSB0WJ0D5tC12IiA", callContext.id);
                // Execute Action: ToggleInfoSheet
                controller._toggleInfoSheet$Action(true, callContext);
                // Already Fetched?
                return OS.Flow.executeSequence(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:7sEAtZ7x60KpQ8O2hdaJyw", callContext.id) && model.variables.lastFetchedVar.equals(model.variables.in_CurrentHouseholdIn))) {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:VAQv11frK0CoiIofqdboeQ", callContext.id);
                    } else {
                        // isLoading
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:yNBTBNWOGUaNBAP++pinKQ", callContext.id);
                        // isLoading = True
                        model.variables.isLoadingVar = true;
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:eM93CfJpIkuyS1MGE+KSGQ", callContext.id);
                        // Refresh Query: GetHouseholdCaption
                        var result = controller.getHouseholdCaption$DataActRefresh(callContext);
                        model.flush();
                        return result.then(function() {
                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:KxzIGcEvC0SAYQds7KbjOA", callContext.id);
                        });
                    }

                });
            }).then(function(res) {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:M9u+fDS0qEKPoDJXTplVtw", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:M9u+fDS0qEKPoDJXTplVtw", callContext.id);
                throw ex;

            });
        };
        Controller.prototype._onInitialize$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnInitialize");
            callContext = controller.callContext(callContext);
            var getSkeleton_UI_PhotobookCaptionVar = new OS.DataTypes.VariableHolder();
            var isViewRestoredFromCacheJSResult = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.getSkeleton_UI_PhotobookCaptionVar = getSkeleton_UI_PhotobookCaptionVar;
            varBag.isViewRestoredFromCacheJSResult = isViewRestoredFromCacheJSResult;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:E30mlX71JEeZs86S_Rszqg:/NRWebFlows.8oQxJd3P8Uyxf_ey5QuLaQ/NodesShownInESpaceTree.fYQi8HGP8EqNKGIF7A5umA/ClientActions.E30mlX71JEeZs86S_Rszqg:6tlweETcl7EyVHKWhCy1VA", "UBTConnect", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:SFuAOYZOFkyqdo7Y1bk9WA", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:DOgbKbtpYUO1cUyDsOPRLw", callContext.id);
                isViewRestoredFromCacheJSResult.value = controller.safeExecuteJSNode(UBTConnect_Directory_Photobook_Photobook_Options_Left_mvc_controller_OnInitialize_IsViewRestoredFromCacheJS, "IsViewRestoredFromCache", "OnInitialize", {
                    IsRestoredFromCache: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
                }, function($parameters) {
                    var jsNodeResult = new(controller.constructor.getVariableGroupType("UBTConnect.Directory_Photobook.Photobook_Options_Left.OnInitialize$isViewRestoredFromCacheJSResult"))();
                    jsNodeResult.isRestoredFromCacheOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsRestoredFromCache, OS.DataTypes.DataTypes.Boolean);
                    return jsNodeResult;
                }, {}, {});
                // Is View Restored From Cache?
                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:v9PzT7qxZU+uPH_RjGiUKw", callContext.id) && isViewRestoredFromCacheJSResult.value.isRestoredFromCacheOut)) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:bJI21AUX5kqWr+9dChHsXA", callContext.id);
                } else {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:rtUpVF2HkUGiaSuPLE3sFA", callContext.id);
                    // Execute Action: GetSkeleton_UI_PhotobookCaption
                    getSkeleton_UI_PhotobookCaptionVar.value = UBTConnectController.default.getSkeleton_UI_PhotobookCaption$Action(callContext);

                    // Set Skeleton Caption
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:1Zqpbv2JbEy4J0BECOURbA", callContext.id);
                    // GetHouseholdCaption.HouseholdCaption = GetSkeleton_UI_PhotobookCaption.Caption
                    model.variables.getHouseholdCaptionDataAct.householdCaptionOut = getSkeleton_UI_PhotobookCaptionVar.value.captionOut;
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:g9g9r3VxykyP3Y6zNhb8LQ", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:E30mlX71JEeZs86S_Rszqg", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.Directory_Photobook.Photobook_Options_Left.OnInitialize$isViewRestoredFromCacheJSResult", [{
            name: "IsRestoredFromCache",
            attrName: "isRestoredFromCacheOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);

        Controller.prototype.toggleInfoSheet$Action = function(isOpenIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._toggleInfoSheet$Action, callContext, isOpenIn);

        };
        Controller.prototype.handler_ToggleInfoSheet$Action = function(isOpenIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_ToggleInfoSheet$Action, callContext, isOpenIn);

        };
        Controller.prototype.onAfterFetch_GetHouseholdCaption$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onAfterFetch_GetHouseholdCaption$Action, callContext);

        };
        Controller.prototype.infoSheetInitialized$Action = function(idIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._infoSheetInitialized$Action, callContext, idIn);

        };
        Controller.prototype.handler_ClickedInfo$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_ClickedInfo$Action, callContext);

        };
        Controller.prototype.onInitialize$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

        };
        Controller.prototype.sheetIsOpen$Action = function() {
            return Promise.resolve();
        };
        Controller.prototype.closed$Action = function() {
            return Promise.resolve();
        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:8oQxJd3P8Uyxf_ey5QuLaQ:/NRWebFlows.8oQxJd3P8Uyxf_ey5QuLaQ:2C839kPvosckW+xI1T0rUw", "UBTConnect", "Directory_Photobook", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:fYQi8HGP8EqNKGIF7A5umA:/NRWebFlows.8oQxJd3P8Uyxf_ey5QuLaQ/NodesShownInESpaceTree.fYQi8HGP8EqNKGIF7A5umA:Tl2tpV+W+gOdj+5FlCgx+Q", "UBTConnect", "Photobook_Options_Left", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:fYQi8HGP8EqNKGIF7A5umA", callContext.id);
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:8oQxJd3P8Uyxf_ey5QuLaQ", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "Directory_Photobook/Photobook_Options_Left On Initialize");
                return controller.onInitialize$Action(callContext);

            }, function() {
                controller.popDebuggerContext(callContext);

            });

        };
        Controller.prototype.onReadyEventHandler = null;
        Controller.prototype.onRenderEventHandler = null;
        Controller.prototype.onDestroyEventHandler = null;
        Controller.prototype.onParametersChangedEventHandler = null;
        Controller.prototype.handleError = function(ex) {
            return controller.handleError(ex);
        };
        Controller.checkPermissions = function() {};
        Controller.prototype.getDefaultTimeout = function() {
            return UBTConnectController.default.defaultTimeout;
        };
        return Controller;
    })(OS.Controller.BaseViewController);
    return new OS.Controller.ControllerFactory(Controller, UBTConnectLanguageResources);
});
define("UBTConnect.Directory_Photobook.Photobook_Options_Left.mvc$controller.OnInitialize.IsViewRestoredFromCacheJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.IsRestoredFromCache = $public.View.wasCurrentViewRestoredFromCache()
    };
});

define("UBTConnect.Directory_Photobook.Photobook_Options_Left.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "g7lpZHeCZkWVLqqEx47cGg": {
            getter: function(varBag, idService) {
                return varBag.vars.value.isOpenInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "VejkjJdVUUaeWS7TxQ4T0g": {
            getter: function(varBag, idService) {
                return varBag.bottomSheetOpenVar.value;
            }
        },
        "5_T67OBVy0e7QPO0jWuREQ": {
            getter: function(varBag, idService) {
                return varBag.bottomSheetCloseVar.value;
            }
        },
        "mWd4q1j5c02sItypHhMYhg": {
            getter: function(varBag, idService) {
                return varBag.vars.value.isOpenInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "dsUGDA_6iEu5pVNoYZq2fA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.idInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "rtUpVF2HkUGiaSuPLE3sFA": {
            getter: function(varBag, idService) {
                return varBag.getSkeleton_UI_PhotobookCaptionVar.value;
            }
        },
        "DOgbKbtpYUO1cUyDsOPRLw": {
            getter: function(varBag, idService) {
                return varBag.isViewRestoredFromCacheJSResult.value;
            }
        },
        "BzqZKOD3qEqaXQ0nu_NMtg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.infoSheetIdVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "+JbrAcrFNEGxO74k9OKKQg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isLoadingVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "HDJ2fvXVUkKmIg3GxCCn0g": {
            getter: function(varBag, idService) {
                return varBag.model.variables.lastFetchedVar;
            }
        },
        "ZkibERMmmEe1p+W4TOgatw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_MainContainerClassIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "7_mSjAd9cEi4A+hJUuY1mg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_IsShowIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "4NRF4e2yPkCL9gwmukUbSw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_CurrentHouseholdIn;
            }
        },
        "nlxpZYu7J02BupXRE5x63Q": {
            getter: function(varBag, idService) {
                return varBag.model.variables.getHouseholdCaptionDataAct;
            }
        },
        "BDINZCduT0+JTlVMXwAMAw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Photobook_Options_Top_Left"));
                })(varBag.model, idService);
            }
        },
        "DBjvmJwcvkqP6WlIK4kdNg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "0Y+1c3riTEuzLOQwiTZayQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Photobook_Options_Top_Info"));
                })(varBag.model, idService);
            }
        },
        "4Eho95tyME2t0ktP9Y1YSQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("If_IsShow"));
                })(varBag.model, idService);
            }
        },
        "fktlaoBk40CSr7c0V4IY_A": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("BottomSheet_Info"));
                })(varBag.model, idService);
            }
        },
        "Fvt494RMq0G18rl+poWw1w": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "zhYxSoNjJEOXqVX8+C9Qew": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_LoadingSection"));
                })(varBag.model, idService);
            }
        },
        "q3u_Yedm4kGJbQUwe2VH3Q": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "HTMV4nhTAkmV37SZ6tO1Uw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Footer"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});