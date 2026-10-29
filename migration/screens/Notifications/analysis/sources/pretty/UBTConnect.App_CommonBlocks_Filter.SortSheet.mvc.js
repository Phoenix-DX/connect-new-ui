define("UBTConnect.App_CommonBlocks_Filter.SortSheet.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnectLibrary.model", "UBTConnect.controller", "UBTConnect_Utils.model", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "NavigationHandler.controller", "APIDomain_Directory_IS.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.ConnectPatterns.BottomSheet.mvc$model", "UBTConnect.App_CommonBlocks_Filter.FilterSheet_OptionChoice_Item.mvc$model", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$model", "UBTConnectLibrary.BasePatterns.Columns_Two.mvc$model", "UBTConnectLibrary.ConnectPatterns.Button.mvc$model", "UBTConnect.App_Cache.CacheControl_UserInfo_Wrapper.mvc$model", "NavigationHandler.NavigationHandler.BackNavigationHandler.mvc$model", "UBTConnect.model$Filter_Common_Control_ListRec", "UBTConnect.model$CacheControl_AllCountriesBooleanRecord", "UBTConnect.model$CacheControl_AllLocalitiesBooleanRecord", "UBTConnect.model$BooleanDirectory_UserCurrentRecord", "UBTConnect.model$Filter_Common_Control_ListListFilter_Common_Control_ListListFilter_Common_Control_ChoiceListRecord", "UBTConnect.model$Filter_CommonRec", "UBTConnect.model$Filter_Common_OptionsRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnect.model$Filter_Common_Control_ChoiceRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnect.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.model$ButtonOptionsRec", "UBTConnect.model$Filter_Common_Control_ChoiceList", "UBTConnect.model$Filter_Common_Control_ListList", "UBTConnect.model$TextTextLongIntegerRecordList", "UBTConnect.controller$App_CommonFilter_CheckCountry", "UBTConnect.controller$App_CommonFilter_DefineOptionNames", "UBTConnectLibrary.model$SelectionOption_ItemRec", "UBTConnect.model$SelectionOption_ItemList", "UBTConnect_Utils.model$UI_CountryDetailsRec", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTConnect.model$UI_CountryDetails2List", "OutSystemsUI_2_23.model$ErrorMessageRec", "UBTConnect.referencesHealth$OutSystemsUI_2_23", "OutSystemsUI_2_23.controller$BottomSheetClose", "NavigationHandler.controller$PreventNavigation", "UBTConnect.referencesHealth$NavigationHandler", "UBTConnect_Utils.model$UI_LocalityDetailsRec", "UBTConnect.model$UI_LocalityDetailsList", "APIDomain_Directory_IS.model$Directory_UserCurrentRec", "UBTConnect.referencesHealth$APIDomain_Directory_IS", "UBTConnectLibrary.controller$Input_ClearString"], function(OutSystems, UBTConnectModel, UBTConnectLibraryModel, UBTConnectController, UBTConnect_UtilsModel, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, NavigationHandlerController, APIDomain_Directory_ISModel, UBTConnectLibraryController, UBTConnectLibrary_ConnectPatterns_BottomSheet_mvcModel, UBTConnect_App_CommonBlocks_Filter_FilterSheet_OptionChoice_Item_mvcModel, UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel, UBTConnectLibrary_BasePatterns_Columns_Two_mvcModel, UBTConnectLibrary_ConnectPatterns_Button_mvcModel, UBTConnect_App_Cache_CacheControl_UserInfo_Wrapper_mvcModel, NavigationHandler_NavigationHandler_BackNavigationHandler_mvcModel) {
    var OS = OutSystems.Internal;


    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("BottomSheetId", "bottomSheetIdVar", "BottomSheetId", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("SubState_Selected", "subState_SelectedVar", "SubState_Selected", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("SubState_Main", "subState_MainVar", "SubState_Main", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("SubState_Localities", "subState_LocalitiesVar", "SubState_Localities", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "Localities";
                }, false),
                this.attr("SubState_Countries", "subState_CountriesVar", "SubState_Countries", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "Countries";
                }, false),
                this.attr("SortBy_Title", "sortBy_TitleVar", "SortBy_Title", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("OptionList_Selected", "optionList_SelectedVar", "OptionList_Selected", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.Filter_Common_Control_ListRec());
                }, false, UBTConnectModel.Filter_Common_Control_ListRec),
                this.attr("LocalCacheControl_AllCountries", "localCacheControl_AllCountriesVar", "LocalCacheControl_AllCountries", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.CacheControl_AllCountriesBooleanRecord());
                }, false, UBTConnectModel.CacheControl_AllCountriesBooleanRecord),
                this.attr("LocalCacheControl_AllLocalities", "localCacheControl_AllLocalitiesVar", "LocalCacheControl_AllLocalities", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.CacheControl_AllLocalitiesBooleanRecord());
                }, false, UBTConnectModel.CacheControl_AllLocalitiesBooleanRecord),
                this.attr("LocalCacheControl_UserInfo", "localCacheControl_UserInfoVar", "LocalCacheControl_UserInfo", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.BooleanDirectory_UserCurrentRecord());
                }, false, UBTConnectModel.BooleanDirectory_UserCurrentRecord),
                this.attr("OptionControl", "optionControlVar", "OptionControl", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.Filter_Common_Control_ListListFilter_Common_Control_ListListFilter_Common_Control_ChoiceListRecord());
                }, false, UBTConnectModel.Filter_Common_Control_ListListFilter_Common_Control_ListListFilter_Common_Control_ChoiceListRecord),
                this.attr("LastSearched_OptionControl", "lastSearched_OptionControlVar", "LastSearched_OptionControl", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.Filter_Common_Control_ListListFilter_Common_Control_ListListFilter_Common_Control_ChoiceListRecord());
                }, false, UBTConnectModel.Filter_Common_Control_ListListFilter_Common_Control_ListListFilter_Common_Control_ChoiceListRecord),
                this.attr("Empty_OptionControl", "empty_OptionControlVar", "Empty_OptionControl", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.Filter_Common_Control_ListListFilter_Common_Control_ListListFilter_Common_Control_ChoiceListRecord());
                }, false, UBTConnectModel.Filter_Common_Control_ListListFilter_Common_Control_ListListFilter_Common_Control_ChoiceListRecord),
                this.attr("isSingleFilter", "isSingleFilterVar", "isSingleFilter", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("isOpen_Local", "isOpen_LocalVar", "isOpen_Local", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("SearchInputId", "searchInputIdVar", "SearchInputId", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("ForceUpdateOptionList", "forceUpdateOptionListVar", "ForceUpdateOptionList", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("In_StartFilter", "in_StartFilterIn", "In_StartFilter", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.Filter_CommonRec());
                }, false, UBTConnectModel.Filter_CommonRec),
                this.attr("_in_StartFilterInDataFetchStatus", "_in_StartFilterInDataFetchStatus", "_in_StartFilterInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_Filter_Common_Options_Choice", "in_Filter_Common_Options_ChoiceIn", "In_Filter_Common_Options_Choice", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.Filter_Common_OptionsRec());
                }, false, UBTConnectModel.Filter_Common_OptionsRec),
                this.attr("_in_Filter_Common_Options_ChoiceInDataFetchStatus", "_in_Filter_Common_Options_ChoiceInDataFetchStatus", "_in_Filter_Common_Options_ChoiceInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("ExtendedClasses", "extendedClassesIn", "ExtendedClasses", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_extendedClassesInDataFetchStatus", "_extendedClassesInDataFetchStatus", "_extendedClassesInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false)
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
                    Model._hasValidationWidgetsValue = ((((((UBTConnectLibrary_ConnectPatterns_BottomSheet_mvcModel.hasValidationWidgets || UBTConnect_App_CommonBlocks_Filter_FilterSheet_OptionChoice_Item_mvcModel.hasValidationWidgets) || UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel.hasValidationWidgets) || UBTConnectLibrary_BasePatterns_Columns_Two_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_Button_mvcModel.hasValidationWidgets) || UBTConnect_App_Cache_CacheControl_UserInfo_Wrapper_mvcModel.hasValidationWidgets) || NavigationHandler_NavigationHandler_BackNavigationHandler_mvcModel.hasValidationWidgets);
                }

                return Model._hasValidationWidgetsValue;
            }
        });

        Model.prototype.setInputs = function(inputs) {
            if ("In_StartFilter" in inputs) {
                this.variables.in_StartFilterIn = inputs.In_StartFilter;
                if ("_in_StartFilterInDataFetchStatus" in inputs) {
                    this.variables._in_StartFilterInDataFetchStatus = inputs._in_StartFilterInDataFetchStatus;
                }

            }

            if ("In_Filter_Common_Options_Choice" in inputs) {
                this.variables.in_Filter_Common_Options_ChoiceIn = inputs.In_Filter_Common_Options_Choice;
                if ("_in_Filter_Common_Options_ChoiceInDataFetchStatus" in inputs) {
                    this.variables._in_Filter_Common_Options_ChoiceInDataFetchStatus = inputs._in_Filter_Common_Options_ChoiceInDataFetchStatus;
                }

            }

            if ("ExtendedClasses" in inputs) {
                this.variables.extendedClassesIn = inputs.ExtendedClasses;
                if ("_extendedClassesInDataFetchStatus" in inputs) {
                    this.variables._extendedClassesInDataFetchStatus = inputs._extendedClassesInDataFetchStatus;
                }

            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "App_CommonBlocks_Filter.SortSheet");
});
define("UBTConnect.App_CommonBlocks_Filter.SortSheet.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "NavigationHandler.controller", "APIDomain_Directory_IS.model", "UBTConnectLibrary.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.App_CommonBlocks_Filter.SortSheet.mvc$model", "UBTConnect.App_CommonBlocks_Filter.SortSheet.mvc$controller", "UBTConnect.clientVariables", "UBTConnectLibrary.ConnectPatterns.BottomSheet.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnect.App_CommonBlocks_Filter.FilterSheet_OptionChoice_Item.mvc$view", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "UBTConnectLibrary.BasePatterns.Columns_Two.mvc$view", "UBTConnectLibrary.ConnectPatterns.Button.mvc$view", "UBTConnect.App_Cache.CacheControl_UserInfo_Wrapper.mvc$view", "NavigationHandler.NavigationHandler.BackNavigationHandler.mvc$view", "UBTConnect.model$Filter_Common_Control_ListRec", "UBTConnect.model$CacheControl_AllCountriesBooleanRecord", "UBTConnect.model$CacheControl_AllLocalitiesBooleanRecord", "UBTConnect.model$BooleanDirectory_UserCurrentRecord", "UBTConnect.model$Filter_Common_Control_ListListFilter_Common_Control_ListListFilter_Common_Control_ChoiceListRecord", "UBTConnect.model$Filter_CommonRec", "UBTConnect.model$Filter_Common_OptionsRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnect.model$Filter_Common_Control_ChoiceRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnect.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.model$ButtonOptionsRec", "UBTConnect.model$Filter_Common_Control_ChoiceList", "UBTConnect.model$Filter_Common_Control_ListList", "UBTConnect.model$TextTextLongIntegerRecordList", "UBTConnect.controller$App_CommonFilter_CheckCountry", "UBTConnect.controller$App_CommonFilter_DefineOptionNames", "UBTConnectLibrary.model$SelectionOption_ItemRec", "UBTConnect.model$SelectionOption_ItemList", "UBTConnect_Utils.model$UI_CountryDetailsRec", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTConnect.model$UI_CountryDetails2List", "OutSystemsUI_2_23.model$ErrorMessageRec", "UBTConnect.referencesHealth$OutSystemsUI_2_23", "OutSystemsUI_2_23.controller$BottomSheetClose", "NavigationHandler.controller$PreventNavigation", "UBTConnect.referencesHealth$NavigationHandler", "UBTConnect_Utils.model$UI_LocalityDetailsRec", "UBTConnect.model$UI_LocalityDetailsList", "APIDomain_Directory_IS.model$Directory_UserCurrentRec", "UBTConnect.referencesHealth$APIDomain_Directory_IS", "UBTConnectLibrary.controller$Input_ClearString"], function(OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, UBTConnect_UtilsModel, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, NavigationHandlerController, APIDomain_Directory_ISModel, UBTConnectLibraryController, React, OSView, UBTConnect_App_CommonBlocks_Filter_SortSheet_mvc_model, UBTConnect_App_CommonBlocks_Filter_SortSheet_mvc_controller, UBTConnectClientVariables, UBTConnectLibrary_ConnectPatterns_BottomSheet_mvc_view, OSWidgets, UBTConnect_App_CommonBlocks_Filter_FilterSheet_OptionChoice_Item_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, UBTConnectLibrary_ConnectPatterns_Button_mvc_view, UBTConnect_App_Cache_CacheControl_UserInfo_Wrapper_mvc_view, NavigationHandler_NavigationHandler_BackNavigationHandler_mvc_view) {
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
        View.displayName = "App_CommonBlocks_Filter.SortSheet";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_ConnectPatterns_BottomSheet_mvc_view, UBTConnect_App_CommonBlocks_Filter_FilterSheet_OptionChoice_Item_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, UBTConnectLibrary_ConnectPatterns_Button_mvc_view, UBTConnect_App_Cache_CacheControl_UserInfo_Wrapper_mvc_view, NavigationHandler_NavigationHandler_BackNavigationHandler_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_App_CommonBlocks_Filter_SortSheet_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_App_CommonBlocks_Filter_SortSheet_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnectLibrary_ConnectPatterns_BottomSheet_mvc_view, {
                inputs: {
                    Title: "Sort",
                    ExtendedClasses: model.variables.extendedClassesIn,
                    _extendedClassesInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._extendedClassesInDataFetchStatus),
                    Content_Padding: model.getCachedValue(idService.getId("YCasEQBHYkaduA36N1zctA.Content_Padding"), function() {
                        return function() {
                            var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                            rec.generalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
                            return rec;
                        }();
                    }),
                    Content_BackgroundColorId: UBTConnectModel.staticEntities.uBT_Color.neutral2,
                    FooterHeight: "72px"
                },
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    },
                    onClose$Action: function() {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);

                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/BottomSheet OnClose");
                            controller.bottomSheetOnClose$Action(controller.callContext(eventHandlerContext));
                        }, function() {
                            controller.popDebuggerContext(eventHandlerContext);
                        });

                        ;
                    },
                    initialized$Action: function(idIn) {
                        return Promise.resolve().then(function() {
                            var eventHandlerContext = callContext.clone();
                            return OS.Flow.tryFinally(function() {
                                var varBag = {};
                                controller.pushDebuggerContext(eventHandlerContext);

                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/BottomSheet Initialized");
                                return controller.bottomSheetInitialized$Action(idIn, controller.callContext(eventHandlerContext));
                            }, function() {
                                controller.popDebuggerContext(eventHandlerContext);
                            });
                        });;
                    },
                    onToggle$Action: function(isOpenIn) {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);

                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/BottomSheet OnToggle");
                            controller.bottomSheetOnToggle$Action(isOpenIn, controller.callContext(eventHandlerContext));
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
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                placeholders: {
                    content: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.List, {
                            animateItems: true,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            mode: /*Default*/ 0,
                            source: model.variables.optionControlVar.optionChoice_ControlAttr,
                            style: "list list-group",
                            tag: "div",
                            _idProps: {
                                service: idService,
                                name: "Options_Choices"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                content: new IteratorPlaceholderContent(function(idService, callContext) {
                                    return [React.createElement(UBTConnect_App_CommonBlocks_Filter_FilterSheet_OptionChoice_Item_mvc_view, {
                                        inputs: {
                                            Filter_Common_Control_Choice: model.variables.optionControlVar.optionChoice_ControlAttr.getCurrent(callContext.iterationContext)
                                        },
                                        events: {
                                            _handleError: function(ex) {
                                                controller.handleError(ex);
                                            },
                                            onChange$Action: function(titleIn, choiceIdIn) {
                                                var eventHandlerContext = callContext.clone();
                                                return OS.Flow.tryFinally(function() {
                                                    var varBag = {};
                                                    controller.pushDebuggerContext(eventHandlerContext);

                                                    OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "App_CommonBlocks_Filter/FilterSheet_OptionChoice_Item OnChange");
                                                    controller.onChange_ChoiceOption$Action(titleIn, choiceIdIn, controller.callContext(eventHandlerContext));
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
                                        _dependencies: []
                                    })];
                                }, callContext, idService, "1")
                            },
                            _dependencies: []
                        })];
                    }),
                    footer: new PlaceholderContent(function() {
                        return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                            inputs: {
                                Options: model.getCachedValue(idService.getId("h+NKYiVPD0+Fx3vW9wtNcQ.Options"), function() {
                                    return function() {
                                        var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                                        rec.backgroundAttr = function() {
                                            var rec = new UBTConnectLibraryModel.BackgroundOptionsRec();
                                            rec.backgroundColorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral0;
                                            return rec;
                                        }();
                                        rec.paddingSizeAttr = function() {
                                            var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                            rec.generalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.base;
                                            return rec;
                                        }();
                                        rec.shadowIdAttr = UBTConnectModel.staticEntities.uBT_Shadow.extraSmall;
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
                                uuid: "3",
                                alias: "3"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                content: new PlaceholderContent(function() {
                                    return [React.createElement(UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, {
                                        inputs: {
                                            ColumnOptions: model.getCachedValue(idService.getId("URDfndRPGkqPr3OAI_Oj3w.ColumnOptions"), function() {
                                                return function() {
                                                    var rec = new UBTConnectLibraryModel.ColumnOptionsRec();
                                                    rec.spacingSizeAttr = UBTConnectModel.staticEntities.uBT_Size.small;
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
                                            alias: "4"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        placeholders: {
                                            left: new PlaceholderContent(function() {
                                                return [React.createElement(UBTConnectLibrary_ConnectPatterns_Button_mvc_view, {
                                                    inputs: {
                                                        In_ButtonOptions: model.getCachedValue(idService.getId("jb3Hq6BiU0StKTKHUaVcjg.In_ButtonOptions"), function() {
                                                            return function() {
                                                                var rec = new UBTConnectLibraryModel.ButtonOptionsRec();
                                                                rec.uBT_ButtonSizeIdAttr = UBTConnectModel.staticEntities.uBT_ButtonSize.small;
                                                                rec.uBT_ButtonTypeIdAttr = UBTConnectModel.staticEntities.uBT_ButtonType.scondary;
                                                                rec.uBT_FlexBehaviorAttr = UBTConnectModel.staticEntities.uBT_FlexBehavior.grow;
                                                                return rec;
                                                            }();
                                                        }),
                                                        In_IsDisabled: model.variables.optionControlVar.equals(model.variables.empty_OptionControlVar)
                                                    },
                                                    events: {
                                                        _handleError: function(ex) {
                                                            controller.handleError(ex);
                                                        },
                                                        event_OnClick$Action: function() {
                                                            return Promise.resolve().then(function() {
                                                                var eventHandlerContext = callContext.clone();
                                                                return OS.Flow.tryFinally(function() {
                                                                    var varBag = {};
                                                                    controller.pushDebuggerContext(eventHandlerContext);

                                                                    OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/Button Event_OnClick");
                                                                    return controller.onClick_Clear$Action(controller.callContext(eventHandlerContext));
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
                                                        uuid: "5",
                                                        alias: "5"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                    placeholders: {
                                                        content: new PlaceholderContent(function() {
                                                            return ["Clear"];
                                                        })
                                                    },
                                                    _dependencies: []
                                                })];
                                            }),
                                            right: new PlaceholderContent(function() {
                                                return [React.createElement(UBTConnectLibrary_ConnectPatterns_Button_mvc_view, {
                                                    inputs: {
                                                        In_IsDisabled: model.variables.optionControlVar.equals(model.variables.lastSearched_OptionControlVar),
                                                        In_ButtonOptions: model.getCachedValue(idService.getId("E7LK0PUZkECRArOVwxdGdA.In_ButtonOptions"), function() {
                                                            return function() {
                                                                var rec = new UBTConnectLibraryModel.ButtonOptionsRec();
                                                                rec.uBT_ButtonSizeIdAttr = UBTConnectModel.staticEntities.uBT_ButtonSize.small;
                                                                rec.uBT_ButtonTypeIdAttr = UBTConnectModel.staticEntities.uBT_ButtonType.primary;
                                                                rec.uBT_FlexBehaviorAttr = UBTConnectModel.staticEntities.uBT_FlexBehavior.grow;
                                                                return rec;
                                                            }();
                                                        })
                                                    },
                                                    events: {
                                                        _handleError: function(ex) {
                                                            controller.handleError(ex);
                                                        },
                                                        event_OnClick$Action: function() {
                                                            return Promise.resolve().then(function() {
                                                                var eventHandlerContext = callContext.clone();
                                                                return OS.Flow.tryFinally(function() {
                                                                    var varBag = {};
                                                                    controller.pushDebuggerContext(eventHandlerContext);

                                                                    OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/Button Event_OnClick");
                                                                    return controller.onClick_Apply$Action(controller.callContext(eventHandlerContext));
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
                                                        uuid: "6",
                                                        alias: "6"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                    placeholders: {
                                                        content: new PlaceholderContent(function() {
                                                            return ["Apply"];
                                                        })
                                                    },
                                                    _dependencies: []
                                                })];
                                            })
                                        },
                                        _dependencies: [asPrimitiveValue(model.variables.lastSearched_OptionControlVar), asPrimitiveValue(model.variables.empty_OptionControlVar), asPrimitiveValue(model.variables.optionControlVar)]
                                    })];
                                })
                            },
                            _dependencies: [asPrimitiveValue(model.variables.lastSearched_OptionControlVar), asPrimitiveValue(model.variables.empty_OptionControlVar), asPrimitiveValue(model.variables.optionControlVar)]
                        })];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.lastSearched_OptionControlVar), asPrimitiveValue(model.variables.empty_OptionControlVar), asPrimitiveValue(model.variables.optionControlVar)]
            }), $if((model.variables.in_Filter_Common_Options_ChoiceIn.hasCountriesAttr.enableAttr || model.variables.in_Filter_Common_Options_ChoiceIn.hasLocalitiesAttr.enableAttr), false, this, function() {
                return [React.createElement(UBTConnect_App_Cache_CacheControl_UserInfo_Wrapper_mvc_view, {
                    inputs: {},
                    events: {
                        _handleError: function(ex) {
                            controller.handleError(ex);
                        },
                        result$Action: function(userInformationIn) {
                            return Promise.resolve().then(function() {
                                var eventHandlerContext = callContext.clone();
                                return OS.Flow.tryFinally(function() {
                                    var varBag = {};
                                    controller.pushDebuggerContext(eventHandlerContext);

                                    OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "App_Cache/CacheControl_UserInfo_Wrapper Result");
                                    return controller.cacheControl_UserInfo_WrapperResult$Action(userInformationIn, controller.callContext(eventHandlerContext));
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
                        uuid: "7",
                        alias: "7"
                    },
                    _widgetRecordProvider: widgetsRecordProvider,
                    _dependencies: []
                })];
            }, function() {
                return [];
            }), React.createElement(NavigationHandler_NavigationHandler_BackNavigationHandler_mvc_view, {
                inputs: {},
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    },
                    backNavigation$Action: function(backNavigationEventIn) {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);

                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "NavigationHandler/BackNavigationHandler BackNavigation");
                            controller.handler_BackNavigation$Action(backNavigationEventIn, controller.callContext(eventHandlerContext));
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
                    uuid: "8",
                    alias: "8"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                _dependencies: []
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);

    return View;
});
define("UBTConnect.App_CommonBlocks_Filter.SortSheet.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "NavigationHandler.controller", "APIDomain_Directory_IS.model", "UBTConnectLibrary.controller", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.App_CommonBlocks_Filter.SortSheet.mvc$debugger", "UBTConnect.model$Filter_Common_Control_ListRec", "UBTConnect.model$CacheControl_AllCountriesBooleanRecord", "UBTConnect.model$CacheControl_AllLocalitiesBooleanRecord", "UBTConnect.model$BooleanDirectory_UserCurrentRecord", "UBTConnect.model$Filter_Common_Control_ListListFilter_Common_Control_ListListFilter_Common_Control_ChoiceListRecord", "UBTConnect.model$Filter_CommonRec", "UBTConnect.model$Filter_Common_OptionsRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnect.model$Filter_Common_Control_ChoiceRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnect.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.model$ButtonOptionsRec", "UBTConnect.model$Filter_Common_Control_ChoiceList", "UBTConnect.model$Filter_Common_Control_ListList", "UBTConnect.model$TextTextLongIntegerRecordList", "UBTConnect.controller$App_CommonFilter_CheckCountry", "UBTConnect.controller$App_CommonFilter_DefineOptionNames", "UBTConnectLibrary.model$SelectionOption_ItemRec", "UBTConnect.model$SelectionOption_ItemList", "UBTConnect_Utils.model$UI_CountryDetailsRec", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTConnect.model$UI_CountryDetails2List", "OutSystemsUI_2_23.model$ErrorMessageRec", "UBTConnect.referencesHealth$OutSystemsUI_2_23", "OutSystemsUI_2_23.controller$BottomSheetClose", "NavigationHandler.controller$PreventNavigation", "UBTConnect.referencesHealth$NavigationHandler", "UBTConnect_Utils.model$UI_LocalityDetailsRec", "UBTConnect.model$UI_LocalityDetailsList", "APIDomain_Directory_IS.model$Directory_UserCurrentRec", "UBTConnect.referencesHealth$APIDomain_Directory_IS", "UBTConnectLibrary.controller$Input_ClearString"], function(OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, UBTConnect_UtilsModel, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, NavigationHandlerController, APIDomain_Directory_ISModel, UBTConnectLibraryController, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_App_CommonBlocks_Filter_SortSheet_mvc_Debugger) {
    var OS = OutSystems.Internal;
    var Controller = (function(_super) {
        __extends(Controller, _super);

        function Controller() {
            _super.apply(this, arguments);
            var controller = this.controller;
            this.clientActionProxies = {};
            this.dataFetchDependenciesOriginal = {};
            this.dataFetchDependentsGraph = {};
            this.shouldSendClientVarsToDataSources = false;
        }
        // Server Actions

        // Aggregates and Data Actions

        Controller.prototype.dataFetchActionNames = [];
        // Client Actions
        Controller.prototype._bottomSheetOnToggle$Action = function(isOpenIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("BottomSheetOnToggle");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.App_CommonBlocks_Filter.SortSheet.BottomSheetOnToggle$vars"))());
            vars.value.isOpenInLocal = isOpenIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:XknFCzB0_EWQypIanqS1IQ:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.F_VfQkvSFEiuMP_AqJb8Ag/ClientActions.XknFCzB0_EWQypIanqS1IQ:KeiUA5HkfK+qoiiigZpGBQ", "UBTConnect", "BottomSheetOnToggle", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:b63bpI2u4ku+QgwzfCH4NQ", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:C98WLa7ZlEy+ae+J9naaMg", callContext.id);
                // isOpen_Local = IsOpen
                model.variables.isOpen_LocalVar = vars.value.isOpenInLocal;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Llzol6n6xUG9Wd0AKsmAsw", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:XknFCzB0_EWQypIanqS1IQ", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.App_CommonBlocks_Filter.SortSheet.BottomSheetOnToggle$vars", [{
            name: "IsOpen",
            attrName: "isOpenInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);
        Controller.prototype._action_DefineOptionControl_Empty$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Action_DefineOptionControl_Empty");
            callContext = controller.callContext(callContext);
            var listIndexOfVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.listIndexOfVar = listIndexOfVar;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:FKItDYRB30ejetB5djpTIQ:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.F_VfQkvSFEiuMP_AqJb8Ag/ClientActions.FKItDYRB30ejetB5djpTIQ:WAUJKMCL+XG3AbYcUgUP_g", "UBTConnect", "Action_DefineOptionControl_Empty", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:LkoXF_Gazki7KQS0f4xIcg", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ri0OOuR3kkyI9Kji_RFa8A", callContext.id);
                // Empty_OptionControl = OptionControl
                model.variables.empty_OptionControlVar = model.variables.optionControlVar;
                // Foreach Empty_OptionControl.OptionList_Control
                callContext.iterationContext.registerIterationStart(model.variables.empty_OptionControlVar.optionList_ControlAttr);
                try {
                    var optionList_ControlIterator = callContext.iterationContext.getIterator(model.variables.empty_OptionControlVar.optionList_ControlAttr);
                    var optionList_ControlIndex = 0;
                    while ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:JVjMfVCQgEGgIzy6vxXPaQ", callContext.id) && (optionList_ControlIndex < model.variables.empty_OptionControlVar.optionList_ControlAttr.length))) {
                        optionList_ControlIterator.currentRowNumber = optionList_ControlIndex;
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:bGwwgdY0tk26i554vv_nNw", callContext.id);
                        // Execute Action: ListClear
                        OS.SystemActions.listClear(model.variables.empty_OptionControlVar.optionList_ControlAttr.getItem(optionList_ControlIndex.valueOf()).selectedIdsAttr, callContext);
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:TjrSOm9ZJUGIQ04d0IdiCg", callContext.id);
                        // Execute Action: ListClear2
                        OS.SystemActions.listClear(model.variables.empty_OptionControlVar.optionList_ControlAttr.getItem(optionList_ControlIndex.valueOf()).selectedNamesAttr, callContext);
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:QSemu9OT2Ue02Do4x2TNKQ", callContext.id);
                        // Execute Action: ListAppend
                        OS.SystemActions.listAppend(model.variables.empty_OptionControlVar.optionList_ControlAttr.getItem(optionList_ControlIndex.valueOf()).selectedIdsAttr, UBTConnectModel.staticEntities.choice.none, callContext);
                        optionList_ControlIndex++;
                    }

                } finally {
                    callContext.iterationContext.registerIterationEnd(model.variables.empty_OptionControlVar.optionList_ControlAttr);
                }

                // Foreach Empty_OptionControl.OptionChoice_Control
                callContext.iterationContext.registerIterationStart(model.variables.empty_OptionControlVar.optionChoice_ControlAttr);
                try {
                    var optionChoice_ControlIterator = callContext.iterationContext.getIterator(model.variables.empty_OptionControlVar.optionChoice_ControlAttr);
                    var optionChoice_ControlIndex = 0;
                    while ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:bA4QfBSO5k6YQs7ii180Eg", callContext.id) && (optionChoice_ControlIndex < model.variables.empty_OptionControlVar.optionChoice_ControlAttr.length))) {
                        optionChoice_ControlIterator.currentRowNumber = optionChoice_ControlIndex;
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:76KFyr2DJkiM8D5Lt9W+QA", callContext.id);
                        // Empty_OptionControl.OptionChoice_Control.Current.SelectedChoiceId = None
                        model.variables.empty_OptionControlVar.optionChoice_ControlAttr.getItem(optionChoice_ControlIndex.valueOf()).selectedChoiceIdAttr = UBTConnectModel.staticEntities.choice.none;
                        optionChoice_ControlIndex++;
                    }

                } finally {
                    callContext.iterationContext.registerIterationEnd(model.variables.empty_OptionControlVar.optionChoice_ControlAttr);
                }

                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:odldKbKfcECCH7VbwFvqpQ", callContext.id);
                // Execute Action: ListIndexOf
                listIndexOfVar.value = OS.SystemActions.listIndexOf(model.variables.empty_OptionControlVar.optionChoice_ControlAttr, function(p) {
                    return (p.titleAttr === model.variables.sortBy_TitleVar);
                }, callContext);

                // Has Sort
                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:RtdlI9qE50WzGXb42mVdww", callContext.id) && (listIndexOfVar.value.positionOut >= 0))) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:kwyEndjcB0OmFOfx0pXM3A", callContext.id);
                    // Empty_OptionControl.OptionChoice_Control[ListIndexOf.Position].SelectedChoiceId = Yes
                    model.variables.empty_OptionControlVar.optionChoice_ControlAttr.getItem(listIndexOfVar.value.positionOut).selectedChoiceIdAttr = UBTConnectModel.staticEntities.choice.yes;
                }

                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:eOCM33kG8E6f4vEV_4KrSw", callContext.id);
                // Execute Action: Action_SetSingleFilter
                controller._action_SetSingleFilter$Action(callContext);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:IPQKgfjkDE6TzsEQV9cUkA", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:FKItDYRB30ejetB5djpTIQ", callContext.id);
            }

        };
        Controller.prototype._onClick_Clear$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnClick_Clear");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:HdobD7Qtn0KQNd4JHeJ4xg:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.F_VfQkvSFEiuMP_AqJb8Ag/ClientActions.HdobD7Qtn0KQNd4JHeJ4xg:ayJ3lHMc0x9s9KZtqoM8XQ", "UBTConnect", "OnClick_Clear", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:33kbd+iW8UeDrByjfOasQQ", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:HTfCmhakU0SFx7MQyLqEAA", callContext.id);
                // OptionControl = Empty_OptionControl
                model.variables.optionControlVar = model.variables.empty_OptionControlVar;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:+fcb9ejisUmTC9iV8Zwj7g", callContext.id);
                // Execute Action: ListClear
                OS.SystemActions.listClear(model.variables.optionList_SelectedVar.selectedIdsAttr, callContext);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:xV4tlATD5Uy3TYGQ11WzMQ", callContext.id);
                // Execute Action: ListClear2
                OS.SystemActions.listClear(model.variables.optionList_SelectedVar.selectedNamesAttr, callContext);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:5tKpcQThvEWervZAVVxxIg", callContext.id);
                // Execute Action: OnClick_Apply
                return controller._onClick_Apply$Action(callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:auCWcLITNkS1T4r0DuMckw", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:HdobD7Qtn0KQNd4JHeJ4xg", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:HdobD7Qtn0KQNd4JHeJ4xg", callContext.id);
                throw ex;

            });
        };
        Controller.prototype._action_Define_Countries$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Action_Define_Countries");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.App_CommonBlocks_Filter.SortSheet.Action_Define_Countries$vars"))());
            var positionVar = new OS.DataTypes.VariableHolder();
            var app_CommonFilter_CheckCountryVar = new OS.DataTypes.VariableHolder();
            var app_CommonFilter_DefineOptionNamesVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.vars = vars;
            varBag.positionVar = positionVar;
            varBag.app_CommonFilter_CheckCountryVar = app_CommonFilter_CheckCountryVar;
            varBag.app_CommonFilter_DefineOptionNamesVar = app_CommonFilter_DefineOptionNamesVar;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:M_BtE59WYUyuGKCvaNHEgg:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.F_VfQkvSFEiuMP_AqJb8Ag/ClientActions.M_BtE59WYUyuGKCvaNHEgg:gIuQPnjjgwpAHZiA1yhmhw", "UBTConnect", "Action_Define_Countries", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:nsub6XPKpEKC4PvKfKFaaw", callContext.id);
                // HasData
                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Qu66m_y9bEWhn1Su7rJwsQ", callContext.id) && ((model.variables.localCacheControl_AllCountriesVar.isFetchedAttr && model.variables.localCacheControl_UserInfoVar.isFetchedAttr) && ((model.variables.localCacheControl_UserInfoVar.directory_UserCurrentAttr.directory_UserCurrent_SubscriptionAttr.subscriptionTypeAttr) !== (UBTConnectModel.staticEntities.connect_Subscription_Plan.free))))) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:gAmrnJvfLE+Idv3sPmY5TA", callContext.id);
                    // LocalFilter_SelectionControls.Title = SubState_Countries
                    vars.value.localFilter_SelectionControlsVar.titleAttr = model.variables.subState_CountriesVar;
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:gAmrnJvfLE+Idv3sPmY5TA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                    // LocalFilter_SelectionControls.In_Options = LocalCacheControl_AllCountries.CacheControl_AllCountries.CountryList
                    vars.value.localFilter_SelectionControlsVar.in_OptionsAttr = OS.DataConversion.JSConversions.typeConvertRecordList(model.variables.localCacheControl_AllCountriesVar.cacheControl_AllCountriesAttr.countryListAttr, new UBTConnectModel.SelectionOption_ItemList(), function(source, target) {
                        target.idAttr = source.countryCodeAttr;
                        target.displayTextAttr = source.countryNameAttr;
                        target.countryCodeAttr = source.countryCodeAttr;
                        return target;
                    });
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:gAmrnJvfLE+Idv3sPmY5TA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
                    // LocalFilter_SelectionControls.Order = In_Filter_Common_Options_Choice.HasCountries.Order
                    vars.value.localFilter_SelectionControlsVar.orderAttr = model.variables.in_Filter_Common_Options_ChoiceIn.hasCountriesAttr.orderAttr;
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:gAmrnJvfLE+Idv3sPmY5TA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
                    // LocalFilter_SelectionControls.AddAllOptions = In_Filter_Common_Options_Choice.HasCountries.AddAllOptions
                    vars.value.localFilter_SelectionControlsVar.addAllOptionsAttr = model.variables.in_Filter_Common_Options_ChoiceIn.hasCountriesAttr.addAllOptionsAttr;
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:gAmrnJvfLE+Idv3sPmY5TA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
                    // LocalFilter_SelectionControls.SheetTitle = "Country"
                    vars.value.localFilter_SelectionControlsVar.sheetTitleAttr = "Country";
                    if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:5A3W9PFB+kWJ9V5KP9lJog", callContext.id) && model.variables.in_StartFilterIn.countryIdsAttr.isEmpty)) {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:PR4d1GxXB02P0xQJz7_yFQ", callContext.id);
                        // Execute Action: AppenAllOption
                        OS.SystemActions.listAppend(vars.value.localFilter_SelectionControlsVar.selectedIdsAttr, UBTConnectModel.staticEntities.choice.none, callContext);
                    } else {
                        // Foreach In_StartFilter.CountryIds
                        callContext.iterationContext.registerIterationStart(model.variables.in_StartFilterIn.countryIdsAttr);
                        try {
                            var countryIdsIterator = callContext.iterationContext.getIterator(model.variables.in_StartFilterIn.countryIdsAttr);
                            var countryIdsIndex = 0;
                            while ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:s8CR1+80TEeiFCFjxelwzQ", callContext.id) && (countryIdsIndex < model.variables.in_StartFilterIn.countryIdsAttr.length))) {
                                countryIdsIterator.currentRowNumber = countryIdsIndex;
                                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:wL+dzjdWl0qb+dL7_gw8FA", callContext.id);
                                // Execute Action: ListAppend
                                OS.SystemActions.listAppend(vars.value.localFilter_SelectionControlsVar.selectedIdsAttr, model.variables.in_StartFilterIn.countryIdsAttr.getItem(countryIdsIndex.valueOf()), callContext);
                                countryIdsIndex++;
                            }

                        } finally {
                            callContext.iterationContext.registerIterationEnd(model.variables.in_StartFilterIn.countryIdsAttr);
                        }

                    }

                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:WQzo6adNjUuGgHRpxjzOXQ", callContext.id);
                    // Execute Action: App_CommonFilter_DefineOptionNames
                    app_CommonFilter_DefineOptionNamesVar.value = UBTConnectController.default.app_CommonFilter_DefineOptionNames$Action(vars.value.localFilter_SelectionControlsVar, callContext);

                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:7BXcDuqM+E+BMFfD3SdJDw", callContext.id);
                    // LocalFilter_SelectionControls = App_CommonFilter_DefineOptionNames.Formatted
                    vars.value.localFilter_SelectionControlsVar = app_CommonFilter_DefineOptionNamesVar.value.formattedOut;
                    // Not Global?
                    if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:C+R3ot6Ynk2iNgDpCKD21A", callContext.id) && ((model.variables.localCacheControl_UserInfoVar.directory_UserCurrentAttr.directory_UserCurrent_SubscriptionAttr.subscriptionTypeAttr) !== (UBTConnectModel.staticEntities.connect_Subscription_Plan.global)))) {
                        // Foreach LocalFilter_SelectionControls.In_Options
                        callContext.iterationContext.registerIterationStart(vars.value.localFilter_SelectionControlsVar.in_OptionsAttr);
                        try {
                            var in_OptionsIterator = callContext.iterationContext.getIterator(vars.value.localFilter_SelectionControlsVar.in_OptionsAttr);
                            var in_OptionsIndex = 0;
                            while ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:FFhLUmregkaKXS5le9fO4g", callContext.id) && (in_OptionsIndex < vars.value.localFilter_SelectionControlsVar.in_OptionsAttr.length))) {
                                in_OptionsIterator.currentRowNumber = in_OptionsIndex;
                                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:jdCe4teaSE2hNOTALB_dCg", callContext.id);
                                // Execute Action: App_CommonFilter_CheckCountry
                                app_CommonFilter_CheckCountryVar.value = UBTConnectController.default.app_CommonFilter_CheckCountry$Action(vars.value.localFilter_SelectionControlsVar.in_OptionsAttr.getItem(in_OptionsIndex.valueOf()).idAttr, model.variables.localCacheControl_UserInfoVar.directory_UserCurrentAttr.directory_UserCurrent_SubscriptionAttr.subscribedCountriesAttr, callContext);

                                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:L3yp+VUHiUeaEFqd9u2tHg", callContext.id);
                                // LocalFilter_SelectionControls.In_Options.Current.isEnabled = App_CommonFilter_CheckCountry.IsEnabled
                                vars.value.localFilter_SelectionControlsVar.in_OptionsAttr.getItem(in_OptionsIndex.valueOf()).isEnabledAttr = app_CommonFilter_CheckCountryVar.value.isEnabledOut;
                                in_OptionsIndex++;
                            }

                        } finally {
                            callContext.iterationContext.registerIterationEnd(vars.value.localFilter_SelectionControlsVar.in_OptionsAttr);
                        }

                    }

                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:TonRwItMFU65_irhHpqgcg", callContext.id);
                    // Execute Action: Position
                    positionVar.value = OS.SystemActions.listIndexOf(model.variables.optionControlVar.optionList_ControlAttr, function(p) {
                        return (p.titleAttr === model.variables.subState_CountriesVar);
                    }, callContext);

                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:FQyy3v8ltEqJwFGjzTBagw", callContext.id);
                    // Execute Action: ListSort
                    OS.SystemActions.listSort(vars.value.localFilter_SelectionControlsVar.in_OptionsAttr, function(p) {
                        return p.displayTextAttr;
                    }, true, callContext);
                    // AlreadyHasElement
                    if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:49LiP9McZ0eElIlkFRYMaQ", callContext.id) && (positionVar.value.positionOut >= 0))) {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:es3dzYhrzUKP1qpUijGi4g", callContext.id);
                        // OptionControl.OptionList_Control[Position.Position] = LocalFilter_SelectionControls
                        model.variables.optionControlVar.optionList_ControlAttr.setItem(positionVar.value.positionOut, vars.value.localFilter_SelectionControlsVar);
                    } else {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:xKkrQ_ZQu0eTFX0ebFFI8Q", callContext.id);
                        // Execute Action: ListAppend3
                        OS.SystemActions.listAppend(model.variables.optionControlVar.optionList_ControlAttr, vars.value.localFilter_SelectionControlsVar, callContext);
                    }

                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:af+qxOlN9USJFbSkk5Fo3Q", callContext.id);
                    // Execute Action: Action_FilterLocalitiesByCountry
                    controller._action_FilterLocalitiesByCountry$Action(callContext);
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:OP0kC95Ua0ON49q8Re84qw", callContext.id);
                    // Execute Action: Action_Define_OptionControl_Last
                    controller._action_Define_OptionControl_Last$Action(false, callContext);
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:FHsJvKW6dUSflP696Rd_Mw", callContext.id);
                    // Execute Action: Action_DefineOptionControl_Empty
                    controller._action_DefineOptionControl_Empty$Action(callContext);
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:AC5tue2v_k+KKRmjtPv_Tg", callContext.id);
                } else {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:2zyw41e2RUarIDRBQMjCHg", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:M_BtE59WYUyuGKCvaNHEgg", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.App_CommonBlocks_Filter.SortSheet.Action_Define_Countries$vars", [{
            name: "LocalFilter_SelectionControls",
            attrName: "localFilter_SelectionControlsVar",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Record,
            defaultValue: function() {
                return new UBTConnectModel.Filter_Common_Control_ListRec();
            },
            complexType: UBTConnectModel.Filter_Common_Control_ListRec
        }]);
        Controller.prototype._handler_ListOnSelectionChange$Action = function(selectedItemsIn, clickedItemIdIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_ListOnSelectionChange");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.App_CommonBlocks_Filter.SortSheet.Handler_ListOnSelectionChange$vars"))());
            vars.value.selectedItemsInLocal = selectedItemsIn.clone();
            vars.value.clickedItemIdInLocal = clickedItemIdIn;
            var listIndexOfVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.vars = vars;
            varBag.listIndexOfVar = listIndexOfVar;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:eNwYF9cbNESae1QnF_FUBQ:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.F_VfQkvSFEiuMP_AqJb8Ag/ClientActions.eNwYF9cbNESae1QnF_FUBQ:qPA+KKu0TJLAWQjthwQlvQ", "UBTConnect", "Handler_ListOnSelectionChange", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:cNE8p4Ky4U+kAxVJQNfNlA", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:mG__cWdOF06yEOKY5fq8pQ", callContext.id);
                // OptionControl.OptionFlatList_Control.Current.SelectedIds = SelectedItems
                model.variables.optionControlVar.optionFlatList_ControlAttr.getCurrent(callContext.iterationContext).selectedIdsAttr = OS.DataConversion.JSConversions.typeConvertRecordList(vars.value.selectedItemsInLocal, new OS.DataTypes.TextList(), function(source, target) {
                    target = source.idAttr;
                    return target;
                });
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:mG__cWdOF06yEOKY5fq8pQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                // OptionControl.OptionFlatList_Control.Current.SelectedNames = SelectedItems
                model.variables.optionControlVar.optionFlatList_ControlAttr.getCurrent(callContext.iterationContext).selectedNamesAttr = OS.DataConversion.JSConversions.typeConvertRecordList(vars.value.selectedItemsInLocal, new OS.DataTypes.TextList(), function(source, target) {
                    target = source.displayTextAttr;
                    return target;
                });
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:OR15mDp1aEizc8Z1SZJCfA", callContext.id);
                // Execute Action: ListIndexOf
                listIndexOfVar.value = OS.SystemActions.listIndexOf(model.variables.optionControlVar.optionFlatList_ControlAttr.getCurrent(callContext.iterationContext).in_OptionsAttr, function(p) {
                    return (p.idAttr === vars.value.clickedItemIdInLocal);
                }, callContext);

                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:171hDsJYIkKVer5FFtWgvA", callContext.id) && (listIndexOfVar.value.positionOut >= 0))) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:HRNJI3F740qsXvpOOa+cqQ", callContext.id);
                    // OptionControl.OptionFlatList_Control.Current.In_Options[ListIndexOf.Position].isSelected = notOptionControl.OptionFlatList_Control.Current.In_Options[ListIndexOf.Position].isSelected
                    model.variables.optionControlVar.optionFlatList_ControlAttr.getCurrent(callContext.iterationContext).in_OptionsAttr.getItem(listIndexOfVar.value.positionOut).isSelectedAttr = !(model.variables.optionControlVar.optionFlatList_ControlAttr.getCurrent(callContext.iterationContext).in_OptionsAttr.getItem(listIndexOfVar.value.positionOut).isSelectedAttr);
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:rMqyae7uf0+L9Ky+yZ5yew", callContext.id);
                } else {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:rMqyae7uf0+L9Ky+yZ5yew", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:eNwYF9cbNESae1QnF_FUBQ", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.App_CommonBlocks_Filter.SortSheet.Handler_ListOnSelectionChange$vars", [{
            name: "SelectedItems",
            attrName: "selectedItemsInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.RecordList,
            defaultValue: function() {
                return new UBTConnectModel.SelectionOption_ItemList();
            },
            complexType: UBTConnectModel.SelectionOption_ItemList
        }, {
            name: "ClickedItemId",
            attrName: "clickedItemIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.prototype._action_Define_OptionControl_Last$Action = function(isFromApplyIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Action_Define_OptionControl_Last");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.App_CommonBlocks_Filter.SortSheet.Action_Define_OptionControl_Last$vars"))());
            vars.value.isFromApplyInLocal = isFromApplyIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:PUFBJGKgHUuMHvK62h5n_g:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.F_VfQkvSFEiuMP_AqJb8Ag/ClientActions.PUFBJGKgHUuMHvK62h5n_g:4ppZD8eahi5VEJEBpD6PcA", "UBTConnect", "Action_Define_OptionControl_Last", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:0qFfCd6SLECuRugTcGVuVg", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Terb8T9UykWDgK18tgE4XA", callContext.id);
                // LastSearched_OptionControl = OptionControl
                model.variables.lastSearched_OptionControlVar = model.variables.optionControlVar;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:SPUxAi18X0aNXvTHAHyovA", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:PUFBJGKgHUuMHvK62h5n_g", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.App_CommonBlocks_Filter.SortSheet.Action_Define_OptionControl_Last$vars", [{
            name: "isFromApply",
            attrName: "isFromApplyInLocal",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);
        Controller.prototype._bottomSheetOnClose$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("BottomSheetOnClose");
            callContext = controller.callContext(callContext);
            var bottomSheetCloseVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.bottomSheetCloseVar = bottomSheetCloseVar;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:p73DJmCm6kigo2XDoHTFEg:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.F_VfQkvSFEiuMP_AqJb8Ag/ClientActions.p73DJmCm6kigo2XDoHTFEg:vyGIliQr9+EUvJG2u+heEw", "UBTConnect", "BottomSheetOnClose", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:MV_Yhpw5qUqZu0YrsMdR6A", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:OMZc9zj9N0i98BOAlmVyfQ", callContext.id);
                // OptionControl = LastSearched_OptionControl
                model.variables.optionControlVar = model.variables.lastSearched_OptionControlVar;
                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:UfFrUp54U0CJ256tUceOKQ", callContext.id) && model.variables.isSingleFilterVar)) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:lFp38Z9V0Em_erY4Kh59cw", callContext.id);
                    // ForceUpdateOptionList = notForceUpdateOptionList
                    model.variables.forceUpdateOptionListVar = !(model.variables.forceUpdateOptionListVar);
                }

                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:PIP7Bl5cE06yf6bNRAvlQQ", callContext.id);
                // Execute Action: BottomSheetClose
                bottomSheetCloseVar.value = OutSystemsUI_2_23Controller.default.bottomSheetClose$Action(model.variables.bottomSheetIdVar, callContext);

                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:kff7Zr6k+E2avJUogKlWZA", callContext.id);
                // Execute Action: Action_SetSubState
                controller._action_SetSubState$Action(model.variables.subState_MainVar, callContext);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:8FMjnafTiUWD0pYFBmiI2g", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:p73DJmCm6kigo2XDoHTFEg", callContext.id);
            }

        };
        Controller.prototype._action_SetSubState$Action = function(in_SubStateIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Action_SetSubState");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.App_CommonBlocks_Filter.SortSheet.Action_SetSubState$vars"))());
            vars.value.in_SubStateInLocal = in_SubStateIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:1cztK0+5_UOENtY_C4FScQ:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.F_VfQkvSFEiuMP_AqJb8Ag/ClientActions.1cztK0+5_UOENtY_C4FScQ:eZOwk0bmVivrYwQUiXw2lw", "UBTConnect", "Action_SetSubState", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ktH+uNRJcUij8OnG24tlkQ", callContext.id);
                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:D0lz_M9GeEmiCSTFM6EdIQ", callContext.id) && ((vars.value.in_SubStateInLocal === model.variables.subState_MainVar) && model.variables.isSingleFilterVar))) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:jMftCOD39kq3srb83beamA", callContext.id);
                    // Execute Action: Action_SetSingleFilter
                    controller._action_SetSingleFilter$Action(callContext);
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:b0sLPAykMEGpzVMG1XyAhg", callContext.id);
                } else {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:l5wntWYQC024CzoRp+7xFw", callContext.id);
                    // SubState_Selected = In_SubState
                    model.variables.subState_SelectedVar = vars.value.in_SubStateInLocal;
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:97MkWsgG4UmxSb+gEO1TuQ", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:1cztK0+5_UOENtY_C4FScQ", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.App_CommonBlocks_Filter.SortSheet.Action_SetSubState$vars", [{
            name: "In_SubState",
            attrName: "in_SubStateInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.prototype._handler_BackNavigation$Action = function(backNavigationEventIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_BackNavigation");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.App_CommonBlocks_Filter.SortSheet.Handler_BackNavigation$vars"))());
            vars.value.backNavigationEventInLocal = backNavigationEventIn;
            var bottomSheetCloseVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.vars = vars;
            varBag.bottomSheetCloseVar = bottomSheetCloseVar;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:EZr4Mc6r_U+4FVxTCYvCFw:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.F_VfQkvSFEiuMP_AqJb8Ag/ClientActions.EZr4Mc6r_U+4FVxTCYvCFw:FYiZe1QNAEzr_FWJVBkiWQ", "UBTConnect", "Handler_BackNavigation", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Wmlnqj2CO0KvyOvu2NaL3w", callContext.id);
                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:v00b5RylQkyVuJbbU9ITYQ", callContext.id) && model.variables.isOpen_LocalVar)) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Iii_ruHzakykIouzJHU9tQ", callContext.id);
                    // Execute Action: BottomSheetClose
                    bottomSheetCloseVar.value = OutSystemsUI_2_23Controller.default.bottomSheetClose$Action(model.variables.bottomSheetIdVar, callContext);

                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:nihv9Ck9J0CDb0jKjDzfqQ", callContext.id);
                    // Execute Action: PreventNavigation
                    NavigationHandlerController.default.preventNavigation$Action(vars.value.backNavigationEventInLocal, callContext);
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Htft4bhRmUueHTxO8qYwug", callContext.id);
                } else {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:kUK0mdFlO0uuqNeYs5X94A", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:EZr4Mc6r_U+4FVxTCYvCFw", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.App_CommonBlocks_Filter.SortSheet.Handler_BackNavigation$vars", [{
            name: "BackNavigationEvent",
            attrName: "backNavigationEventInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Object,
            defaultValue: function() {
                return null;
            }
        }]);
        Controller.prototype._action_FilterLocalitiesByCountry$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Action_FilterLocalitiesByCountry");
            callContext = controller.callContext(callContext);
            var app_CommonFilter_DefineOptionNamesVar = new OS.DataTypes.VariableHolder();
            var listIndexOfLocalitiesVar = new OS.DataTypes.VariableHolder();
            var listAnyVar = new OS.DataTypes.VariableHolder();
            var listFilterVar = new OS.DataTypes.VariableHolder();
            var listIndexOfCountriesVar = new OS.DataTypes.VariableHolder();
            var listDuplicateVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.app_CommonFilter_DefineOptionNamesVar = app_CommonFilter_DefineOptionNamesVar;
            varBag.listIndexOfLocalitiesVar = listIndexOfLocalitiesVar;
            varBag.listAnyVar = listAnyVar;
            varBag.listFilterVar = listFilterVar;
            varBag.listIndexOfCountriesVar = listIndexOfCountriesVar;
            varBag.listDuplicateVar = listDuplicateVar;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:CfuKQFiEhU6b6ry5MuKCjg:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.F_VfQkvSFEiuMP_AqJb8Ag/ClientActions.CfuKQFiEhU6b6ry5MuKCjg:C7QWZG3txemubzjCJOoBJw", "UBTConnect", "Action_FilterLocalitiesByCountry", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:+MmIk8fa90m4CI27+1PBCw", callContext.id);
                // ShouldFilter
                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:FPQR8S9_oEuwk9VJeCUKmw", callContext.id) && (model.variables.in_Filter_Common_Options_ChoiceIn.hasCountriesAttr.enableAttr && model.variables.in_Filter_Common_Options_ChoiceIn.hasLocalitiesAttr.enableAttr))) {
                    // isFetched
                    if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:_l2m6Iszq0eeO1o7xNXa5Q", callContext.id) && (model.variables.localCacheControl_AllCountriesVar.isFetchedAttr && model.variables.localCacheControl_AllLocalitiesVar.isFetchedAttr))) {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:D8upY67guk29Xm67CgLqVA", callContext.id);
                        // Execute Action: ListIndexOfLocalities
                        listIndexOfLocalitiesVar.value = OS.SystemActions.listIndexOf(model.variables.optionControlVar.optionList_ControlAttr, function(p) {
                            return (p.titleAttr === model.variables.subState_LocalitiesVar);
                        }, callContext);

                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:IfLQ+VezcEq_IhtCQeOz4A", callContext.id);
                        // Execute Action: ListIndexOfCountries
                        listIndexOfCountriesVar.value = OS.SystemActions.listIndexOf(model.variables.optionControlVar.optionList_ControlAttr, function(p) {
                            return (p.titleAttr === model.variables.subState_CountriesVar);
                        }, callContext);

                        // HasItems
                        if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ZOqMytvaxkuQB8WMatID4A", callContext.id) && ((listIndexOfLocalitiesVar.value.positionOut >= 0) && (listIndexOfCountriesVar.value.positionOut >= 0)))) {
                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:AmQiC7rjl0iOkcrIWWJsYg", callContext.id);
                            // Execute Action: ListClear
                            OS.SystemActions.listClear(model.variables.optionControlVar.optionList_ControlAttr.getItem(listIndexOfLocalitiesVar.value.positionOut).in_OptionsAttr, callContext);
                            // Country Has All Selected
                            if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:b1jGlZVy4Eqp83PRL_uXsA", callContext.id) && (model.variables.optionControlVar.optionList_ControlAttr.getItem(listIndexOfCountriesVar.value.positionOut).selectedIdsAttr.getCurrent(callContext.iterationContext) === UBTConnectModel.staticEntities.choice.none))) {
                                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ZpNdRahDu0SLAlLdfFDz4A", callContext.id);
                                // Execute Action: ListAppendAll
                                OS.SystemActions.listAppendAll(model.variables.optionControlVar.optionList_ControlAttr.getItem(listIndexOfLocalitiesVar.value.positionOut).in_OptionsAttr, OS.DataConversion.JSConversions.typeConvertRecordList(model.variables.localCacheControl_AllLocalitiesVar.cacheControl_AllLocalitiesAttr.localityListAttr, new UBTConnectModel.SelectionOption_ItemList(), function(source, target) {
                                    target.idAttr = source.localityIdAttr;
                                    target.displayTextAttr = source.nameAttr;
                                    target.countryCodeAttr = source.countryCodeAttr;
                                    target.isEnabledAttr = OutSystemsDebugger.handleFunctionCall(function() {
                                        return UBTConnectController.default.app_CommonFilter_CheckCountry$Action(source.countryCodeAttr, model.variables.localCacheControl_UserInfoVar.directory_UserCurrentAttr.directory_UserCurrent_SubscriptionAttr.subscribedCountriesAttr, callContext).isEnabledOut;
                                    }, OS.DataTypes.DataTypes.Boolean, callContext.id);
                                    return target;
                                }), callContext);
                            } else {
                                // ForEachSelected
                                // Foreach OptionControl.OptionList_Control[ListIndexOfCountries.Position].SelectedIds
                                callContext.iterationContext.registerIterationStart(model.variables.optionControlVar.optionList_ControlAttr.getItem(listIndexOfCountriesVar.value.positionOut).selectedIdsAttr);
                                try {
                                    var selectedIdsIterator = callContext.iterationContext.getIterator(model.variables.optionControlVar.optionList_ControlAttr.getItem(listIndexOfCountriesVar.value.positionOut).selectedIdsAttr);
                                    var selectedIdsIndex = 0;
                                    while ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:prksOmtDaEysiCtLU2Z9pg", callContext.id) && (selectedIdsIndex < model.variables.optionControlVar.optionList_ControlAttr.getItem(listIndexOfCountriesVar.value.positionOut).selectedIdsAttr.length))) {
                                        selectedIdsIterator.currentRowNumber = selectedIdsIndex;
                                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:URVioALfaUOUCNDolpOFQA", callContext.id);
                                        // Execute Action: ListFilter
                                        listFilterVar.value = OS.SystemActions.listFilter(model.variables.localCacheControl_AllLocalitiesVar.cacheControl_AllLocalitiesAttr.localityListAttr, function(p) {
                                            return (OS.BuiltinFunctions.toUpper(OS.BuiltinFunctions.trim(p.countryCodeAttr)) === OS.BuiltinFunctions.toUpper(OS.BuiltinFunctions.trim(model.variables.optionControlVar.optionList_ControlAttr.getItem(listIndexOfCountriesVar.value.positionOut).selectedIdsAttr.getItem(selectedIdsIndex.valueOf()))));
                                        }, callContext);

                                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:aOFj5SMMtkOVgd7cktOEtg", callContext.id);
                                        // Execute Action: ListAppendAll2
                                        OS.SystemActions.listAppendAll(model.variables.optionControlVar.optionList_ControlAttr.getItem(listIndexOfLocalitiesVar.value.positionOut).in_OptionsAttr, OS.DataConversion.JSConversions.typeConvertRecordList(listFilterVar.value.filteredListOut, new UBTConnectModel.SelectionOption_ItemList(), function(source, target) {
                                            target.idAttr = source.localityIdAttr;
                                            target.displayTextAttr = source.nameAttr;
                                            target.countryCodeAttr = source.countryCodeAttr;
                                            target.isEnabledAttr = OutSystemsDebugger.handleFunctionCall(function() {
                                                return UBTConnectController.default.app_CommonFilter_CheckCountry$Action(source.countryCodeAttr, model.variables.localCacheControl_UserInfoVar.directory_UserCurrentAttr.directory_UserCurrent_SubscriptionAttr.subscribedCountriesAttr, callContext).isEnabledOut;
                                            }, OS.DataTypes.DataTypes.Boolean, callContext.id);
                                            return target;
                                        }), callContext);
                                        selectedIdsIndex++;
                                    }

                                } finally {
                                    callContext.iterationContext.registerIterationEnd(model.variables.optionControlVar.optionList_ControlAttr.getItem(listIndexOfCountriesVar.value.positionOut).selectedIdsAttr);
                                }

                            }

                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:kDhDKeO_dU61OkmjLVyFuA", callContext.id);
                            // Execute Action: ListSort
                            OS.SystemActions.listSort(model.variables.optionControlVar.optionList_ControlAttr.getItem(listIndexOfLocalitiesVar.value.positionOut).in_OptionsAttr, function(p) {
                                return (p.countryCodeAttr + p.displayTextAttr);
                            }, true, callContext);
                            // Locality Has All Selected
                            if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ILEg+HS5qEiA7UFfGhY8RQ", callContext.id) && (model.variables.optionControlVar.optionList_ControlAttr.getItem(listIndexOfLocalitiesVar.value.positionOut).selectedIdsAttr.getCurrent(callContext.iterationContext) === UBTConnectModel.staticEntities.choice.none))) {
                                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:4Uud3OQpp0+v8s+rXuqLjw", callContext.id);
                            } else {
                                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:tHg9+n6ZRUSPz+uJTSRxLQ", callContext.id);
                                // Execute Action: ListDuplicate
                                listDuplicateVar.value = OS.SystemActions.listDuplicate(model.variables.optionControlVar.optionList_ControlAttr.getItem(listIndexOfLocalitiesVar.value.positionOut).selectedIdsAttr, callContext);

                                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:xHz0XJhQI0mZ+AcIDHMXIw", callContext.id);
                                // Execute Action: ListClear2
                                OS.SystemActions.listClear(model.variables.optionControlVar.optionList_ControlAttr.getItem(listIndexOfLocalitiesVar.value.positionOut).selectedIdsAttr, callContext);
                                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:XVm+kkrGxE6t22tfY856NA", callContext.id);
                                // Execute Action: ListClear3
                                OS.SystemActions.listClear(model.variables.optionControlVar.optionList_ControlAttr.getItem(listIndexOfLocalitiesVar.value.positionOut).selectedNamesAttr, callContext);
                                // Foreach ListDuplicate.DuplicatedList
                                callContext.iterationContext.registerIterationStart(listDuplicateVar.value.duplicatedListOut);
                                try {
                                    var duplicatedListIterator = callContext.iterationContext.getIterator(listDuplicateVar.value.duplicatedListOut);
                                    var duplicatedListIndex = 0;
                                    while ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:UY0i5FiMakKignRGO46kgQ", callContext.id) && (duplicatedListIndex < listDuplicateVar.value.duplicatedListOut.length))) {
                                        duplicatedListIterator.currentRowNumber = duplicatedListIndex;
                                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:d2ZBggXAi0iTRJPLI5MuUA", callContext.id);
                                        // Execute Action: ListAny
                                        listAnyVar.value = OS.SystemActions.listAny(model.variables.optionControlVar.optionList_ControlAttr.getItem(listIndexOfLocalitiesVar.value.positionOut).in_OptionsAttr, function(p) {
                                            return (p.idAttr === listDuplicateVar.value.duplicatedListOut.getItem(duplicatedListIndex.valueOf()));
                                        }, callContext);

                                        // SelectedOptionStillExist
                                        if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Rspk91EzrEaaJM5kJ+iYeg", callContext.id) && listAnyVar.value.resultOut)) {
                                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:KQ7_gIUIN0Scb6PylfqOdg", callContext.id);
                                            // Execute Action: ListAppend
                                            OS.SystemActions.listAppend(model.variables.optionControlVar.optionList_ControlAttr.getItem(listIndexOfLocalitiesVar.value.positionOut).selectedIdsAttr, listDuplicateVar.value.duplicatedListOut.getItem(duplicatedListIndex.valueOf()), callContext);
                                        }

                                        duplicatedListIndex++;
                                    }

                                } finally {
                                    callContext.iterationContext.registerIterationEnd(listDuplicateVar.value.duplicatedListOut);
                                }

                                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:5ML0Xq9R206btg7WyZTZHw", callContext.id);
                                // Execute Action: App_CommonFilter_DefineOptionNames
                                app_CommonFilter_DefineOptionNamesVar.value = UBTConnectController.default.app_CommonFilter_DefineOptionNames$Action(model.variables.optionControlVar.optionList_ControlAttr.getItem(listIndexOfLocalitiesVar.value.positionOut), callContext);

                                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:UTE0M8rH9U615m+TH3kDrw", callContext.id);
                                // OptionControl.OptionList_Control[ListIndexOfLocalities.Position] = App_CommonFilter_DefineOptionNames.Formatted
                                model.variables.optionControlVar.optionList_ControlAttr.setItem(listIndexOfLocalitiesVar.value.positionOut, app_CommonFilter_DefineOptionNamesVar.value.formattedOut);
                                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:hrEbxFhdl0mSqdRA0i7TjQ", callContext.id);
                            }

                        } else {
                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Dl5marrxJ0KS7PfIGH053w", callContext.id);
                        }

                    } else {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:mo0H1fwZ+0m8KLuSxXPjJQ", callContext.id);
                    }

                } else {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:mo0H1fwZ+0m8KLuSxXPjJQ", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:CfuKQFiEhU6b6ry5MuKCjg", callContext.id);
            }

        };
        Controller.prototype._action_SetSingleFilter$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Action_SetSingleFilter");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:T8VPQvo4jkWJD7iMBHccLA:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.F_VfQkvSFEiuMP_AqJb8Ag/ClientActions.T8VPQvo4jkWJD7iMBHccLA:Yg+AoDM5DFh4lTYBwZwgLQ", "UBTConnect", "Action_SetSingleFilter", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:wH7ZkMqcAECZd_Sj36tNVw", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:1v72MWnfz0iOXMLpIUvqIg", callContext.id);
                // isSingleFilter = OptionControl.OptionChoice_Control.Length + OptionControl.OptionList_Control.Length = 1
                model.variables.isSingleFilterVar = ((model.variables.optionControlVar.optionChoice_ControlAttr.length + model.variables.optionControlVar.optionList_ControlAttr.length) === 1);
                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:DgJtp0uhgkaJmhIYtsgp8g", callContext.id) && model.variables.isSingleFilterVar)) {
                    // OptionList?
                    if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:M3Um3gXNQ0W0ukpRTNl6NQ", callContext.id) && model.variables.optionControlVar.optionList_ControlAttr.isEmpty)) {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Tn4Q3sXMEUCfRPD2cr282A", callContext.id);
                    } else {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:95e+y1bzLUuY55HtnyYL7Q", callContext.id);
                        // SubState_Selected = OptionControl.OptionList_Control.Current.Title
                        model.variables.subState_SelectedVar = model.variables.optionControlVar.optionList_ControlAttr.getCurrent(callContext.iterationContext).titleAttr;
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:95e+y1bzLUuY55HtnyYL7Q", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                        // OptionList_Selected = OptionControl.OptionList_Control.Current
                        model.variables.optionList_SelectedVar = model.variables.optionControlVar.optionList_ControlAttr.getCurrent(callContext.iterationContext);
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Tn4Q3sXMEUCfRPD2cr282A", callContext.id);
                    }

                } else {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:GhluQCW3xUKVtuUZlSQLXg", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:T8VPQvo4jkWJD7iMBHccLA", callContext.id);
            }

        };
        Controller.prototype._bottomSheetInitialized$Action = function(idIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("BottomSheetInitialized");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.App_CommonBlocks_Filter.SortSheet.BottomSheetInitialized$vars"))());
            vars.value.idInLocal = idIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:10JKSewkjkuwvM2eGFoUHw:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.F_VfQkvSFEiuMP_AqJb8Ag/ClientActions.10JKSewkjkuwvM2eGFoUHw:brmVcyLQOEXe_hjgu41ohQ", "UBTConnect", "BottomSheetInitialized", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:_EB3q3_C1ke25qmNWSDlmA", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:tx8ApztiLUKqoNJF0ZNLoQ", callContext.id);
                // BottomSheetId = Id
                model.variables.bottomSheetIdVar = vars.value.idInLocal;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:OqMvhmJo30uAFeeam8jdZA", callContext.id);
                // Trigger Event: SheetInitialized
                return controller.sheetInitialized$Action(vars.value.idInLocal, callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:l4gduG8B7UuoWPuXhJTFww", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:10JKSewkjkuwvM2eGFoUHw", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:10JKSewkjkuwvM2eGFoUHw", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("UBTConnect.App_CommonBlocks_Filter.SortSheet.BottomSheetInitialized$vars", [{
            name: "Id",
            attrName: "idInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.prototype._screenEvent_OnParametersChanged$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("ScreenEvent_OnParametersChanged");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:0+2hSqo4qEWlJr_Mhn0DhA:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.F_VfQkvSFEiuMP_AqJb8Ag/ClientActions.0+2hSqo4qEWlJr_Mhn0DhA:VjNzEPBt9RGCPEyVelJr0w", "UBTConnect", "ScreenEvent_OnParametersChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:d0a6UkycS0ipnU9yC_9bYA", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:+Rze6W0GF0qt_Iz9JArIpQ", callContext.id);
                // Execute Action: Action_Define_OptionControl
                controller._action_Define_OptionControl$Action(callContext);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:MYLOrKpAFkeV6obAO0AlAg", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:0+2hSqo4qEWlJr_Mhn0DhA", callContext.id);
            }

        };
        Controller.prototype._cacheControl_UserInfo_WrapperResult$Action = function(userInformationIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("CacheControl_UserInfo_WrapperResult");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.App_CommonBlocks_Filter.SortSheet.CacheControl_UserInfo_WrapperResult$vars"))());
            vars.value.userInformationInLocal = userInformationIn.clone();
            varBag.callContext = callContext;
            varBag.vars = vars;
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:bgJVT87VakOIQfTIuVAD_g:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.F_VfQkvSFEiuMP_AqJb8Ag/ClientActions.bgJVT87VakOIQfTIuVAD_g:A7lBpFJRIRfpYTmZFRv45A", "UBTConnect", "CacheControl_UserInfo_WrapperResult", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:HB3gukVI0EOs3zmcSbSGHw", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                // LocalCacheControl_UserInfo
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:aqj6e_or70uVyJedDUGIzw", callContext.id);
                // LocalCacheControl_UserInfo.Directory_UserCurrent = UserInformation
                model.variables.localCacheControl_UserInfoVar.directory_UserCurrentAttr = vars.value.userInformationInLocal;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:aqj6e_or70uVyJedDUGIzw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                // LocalCacheControl_UserInfo.isFetched = True
                model.variables.localCacheControl_UserInfoVar.isFetchedAttr = true;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:q6QXnv_yRUyuOM_Q5lTQWg", callContext.id);
                // Execute Action: Action_Define_Countries
                controller._action_Define_Countries$Action(callContext);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:k7_YwBM3ak2m5Ao+I5a3Yw", callContext.id);
                // Execute Action: Action_Define_Localities
                controller._action_Define_Localities$Action(callContext);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:I2uOtlO+8UmJb1PSVmC7mw", callContext.id);
                // HasFiltersOtherThanLocality = notIn_Filter_Common_Options_Choice.Extra_OptionLists.Empty or notIn_Filter_Common_Options_Choice.Extra_OptionChoices.Empty or In_Filter_Common_Options_Choice.HasSorting.Enable
                vars.value.hasFiltersOtherThanLocalityVar = ((!(model.variables.in_Filter_Common_Options_ChoiceIn.extra_OptionListsAttr.isEmpty) || !(model.variables.in_Filter_Common_Options_ChoiceIn.extra_OptionChoicesAttr.isEmpty)) || model.variables.in_Filter_Common_Options_ChoiceIn.hasSortingAttr.enableAttr);
                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:aV98qwcOfkOoqBNZJV5QdQ", callContext.id) && vars.value.hasFiltersOtherThanLocalityVar)) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:0hwqiHHiCk+jLDS57Sf5Pw", callContext.id);
                    // ShowSubscriptionOnClick = False
                    vars.value.showSubscriptionOnClickVar = false;
                } else {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:3_FXmzEi0kmUHvPykMrR4A", callContext.id);
                    // ShowSubscriptionOnClick = UserInformation.Directory_UserCurrent_Subscription.SubscriptionType = Free
                    vars.value.showSubscriptionOnClickVar = (vars.value.userInformationInLocal.directory_UserCurrent_SubscriptionAttr.subscriptionTypeAttr === UBTConnectModel.staticEntities.connect_Subscription_Plan.free);
                }

                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:_KycWjjsYkOsuuBgU_zqkw", callContext.id);
                // Trigger Event: Loaded
                return controller.loaded$Action(vars.value.showSubscriptionOnClickVar, callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:0ykd39id70qE3ALVqK025w", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:bgJVT87VakOIQfTIuVAD_g", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:bgJVT87VakOIQfTIuVAD_g", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("UBTConnect.App_CommonBlocks_Filter.SortSheet.CacheControl_UserInfo_WrapperResult$vars", [{
            name: "UserInformation",
            attrName: "userInformationInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Record,
            defaultValue: function() {
                return new APIDomain_Directory_ISModel.Directory_UserCurrentRec();
            },
            complexType: APIDomain_Directory_ISModel.Directory_UserCurrentRec
        }, {
            name: "HasFiltersOtherThanLocality",
            attrName: "hasFiltersOtherThanLocalityVar",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }, {
            name: "ShowSubscriptionOnClick",
            attrName: "showSubscriptionOnClickVar",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);
        Controller.prototype._screenEvent_OnInitialize$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("ScreenEvent_OnInitialize");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:dqkac5OCaEiaIPv6nZg9PQ:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.F_VfQkvSFEiuMP_AqJb8Ag/ClientActions.dqkac5OCaEiaIPv6nZg9PQ:1hqn1vaumIb+rY13K2LIdg", "UBTConnect", "ScreenEvent_OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:a1+NR6xn2UeCAYcx5MkpSg", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:B5qOEXLK4U6J2e_Gu89CzQ", callContext.id);
                // Execute Action: Action_Define_OptionControl
                controller._action_Define_OptionControl$Action(callContext);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:D+NKXT9taE2GabZSTeP+FQ", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:dqkac5OCaEiaIPv6nZg9PQ", callContext.id);
            }

        };
        Controller.prototype._action_ClearSearchString$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Action_ClearSearchString");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:2yLOjcx5NEOkl+ohDa5nIw:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.F_VfQkvSFEiuMP_AqJb8Ag/ClientActions.2yLOjcx5NEOkl+ohDa5nIw:aNNMaXD42LtqGZidBrPV4A", "UBTConnect", "Action_ClearSearchString", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:57P+4znwYUOmZ3oyQzWEzA", callContext.id);
                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:u5t4EmoryUuGaDDBhYzK2A", callContext.id) && ((model.variables.searchInputIdVar) !== ("")))) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:fq8FTvxkyEmJDb45SVfMWQ", callContext.id);
                    // Execute Action: Input_ClearString
                    UBTConnectLibraryController.default.input_ClearString$Action(model.variables.searchInputIdVar, false, callContext);
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ssdeJ23y2E65uUO5FGbuxg", callContext.id);
                } else {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ssdeJ23y2E65uUO5FGbuxg", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:2yLOjcx5NEOkl+ohDa5nIw", callContext.id);
            }

        };
        Controller.prototype._action_Define_Localities$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Action_Define_Localities");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.App_CommonBlocks_Filter.SortSheet.Action_Define_Localities$vars"))());
            var positionVar = new OS.DataTypes.VariableHolder();
            var app_CommonFilter_DefineOptionNamesVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.vars = vars;
            varBag.positionVar = positionVar;
            varBag.app_CommonFilter_DefineOptionNamesVar = app_CommonFilter_DefineOptionNamesVar;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:+PVVo25mdUyB2OBrH3SaoQ:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.F_VfQkvSFEiuMP_AqJb8Ag/ClientActions.+PVVo25mdUyB2OBrH3SaoQ:34ImmzCw1QzIqtmdMLkG6w", "UBTConnect", "Action_Define_Localities", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:YCuvAMAVckC6PZbndrI90w", callContext.id);
                // HasData
                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:9rOrAcbqJU+I03qmHA3gSA", callContext.id) && ((model.variables.localCacheControl_AllLocalitiesVar.isFetchedAttr && model.variables.localCacheControl_UserInfoVar.isFetchedAttr) && ((model.variables.localCacheControl_UserInfoVar.directory_UserCurrentAttr.directory_UserCurrent_SubscriptionAttr.subscriptionTypeAttr) !== (UBTConnectModel.staticEntities.connect_Subscription_Plan.free))))) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:dXPiaWjQPEqW3UuARKQB1g", callContext.id);
                    // LocalFilter_SelectionControls.Title = SubState_Localities
                    vars.value.localFilter_SelectionControlsVar.titleAttr = model.variables.subState_LocalitiesVar;
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:dXPiaWjQPEqW3UuARKQB1g", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                    // LocalFilter_SelectionControls.In_Options = LocalCacheControl_AllLocalities.CacheControl_AllLocalities.LocalityList
                    vars.value.localFilter_SelectionControlsVar.in_OptionsAttr = OS.DataConversion.JSConversions.typeConvertRecordList(model.variables.localCacheControl_AllLocalitiesVar.cacheControl_AllLocalitiesAttr.localityListAttr, new UBTConnectModel.SelectionOption_ItemList(), function(source, target) {
                        target.idAttr = source.localityIdAttr;
                        target.displayTextAttr = source.nameAttr;
                        target.countryCodeAttr = source.countryCodeAttr;
                        return target;
                    });
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:dXPiaWjQPEqW3UuARKQB1g", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
                    // LocalFilter_SelectionControls.Order = In_Filter_Common_Options_Choice.HasSorting.Order
                    vars.value.localFilter_SelectionControlsVar.orderAttr = model.variables.in_Filter_Common_Options_ChoiceIn.hasSortingAttr.orderAttr;
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:dXPiaWjQPEqW3UuARKQB1g", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
                    // LocalFilter_SelectionControls.AddAllOptions = In_Filter_Common_Options_Choice.HasLocalities.AddAllOptions
                    vars.value.localFilter_SelectionControlsVar.addAllOptionsAttr = model.variables.in_Filter_Common_Options_ChoiceIn.hasLocalitiesAttr.addAllOptionsAttr;
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:dXPiaWjQPEqW3UuARKQB1g", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
                    // LocalFilter_SelectionControls.SheetTitle = "Locality"
                    vars.value.localFilter_SelectionControlsVar.sheetTitleAttr = "Locality";
                    if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ZQraHH6U2k+gQlW1yfoikw", callContext.id) && model.variables.in_StartFilterIn.localitiesIdsAttr.isEmpty)) {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:E+qoTlw0t0WRKVmYLXC9WQ", callContext.id);
                        // Execute Action: AppenAllOption
                        OS.SystemActions.listAppend(vars.value.localFilter_SelectionControlsVar.selectedIdsAttr, UBTConnectModel.staticEntities.choice.none, callContext);
                    } else {
                        // Foreach In_StartFilter.LocalitiesIds
                        callContext.iterationContext.registerIterationStart(model.variables.in_StartFilterIn.localitiesIdsAttr);
                        try {
                            var localitiesIdsIterator = callContext.iterationContext.getIterator(model.variables.in_StartFilterIn.localitiesIdsAttr);
                            var localitiesIdsIndex = 0;
                            while ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:eZiCHCED+0eYGEgY7lbPPg", callContext.id) && (localitiesIdsIndex < model.variables.in_StartFilterIn.localitiesIdsAttr.length))) {
                                localitiesIdsIterator.currentRowNumber = localitiesIdsIndex;
                                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:u2Dfqi10HkC6ZSneWt_M1A", callContext.id);
                                // Execute Action: ListAppend3
                                OS.SystemActions.listAppend(vars.value.localFilter_SelectionControlsVar.selectedIdsAttr, model.variables.in_StartFilterIn.countryIdsAttr.getCurrent(callContext.iterationContext), callContext);
                                localitiesIdsIndex++;
                            }

                        } finally {
                            callContext.iterationContext.registerIterationEnd(model.variables.in_StartFilterIn.localitiesIdsAttr);
                        }

                    }

                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:l_ixZnSf8EyC6m38umD8aw", callContext.id);
                    // Execute Action: App_CommonFilter_DefineOptionNames
                    app_CommonFilter_DefineOptionNamesVar.value = UBTConnectController.default.app_CommonFilter_DefineOptionNames$Action(vars.value.localFilter_SelectionControlsVar, callContext);

                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:kgmLE8MiBk6dd4okEcnqYw", callContext.id);
                    // LocalFilter_SelectionControls = App_CommonFilter_DefineOptionNames.Formatted
                    vars.value.localFilter_SelectionControlsVar = app_CommonFilter_DefineOptionNamesVar.value.formattedOut;
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:311XAzcmiE23aAIty1NFSQ", callContext.id);
                    // Execute Action: Position
                    positionVar.value = OS.SystemActions.listIndexOf(model.variables.optionControlVar.optionList_ControlAttr, function(p) {
                        return (p.titleAttr === model.variables.subState_LocalitiesVar);
                    }, callContext);

                    // AlreadyHasElement
                    if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:e9pl0Z4KHEG6yC7OZ3OJ1g", callContext.id) && (positionVar.value.positionOut >= 0))) {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:zAOsWSo7IEK+LT0XZHwpLw", callContext.id);
                        // OptionControl.OptionList_Control[Position.Position] = LocalFilter_SelectionControls
                        model.variables.optionControlVar.optionList_ControlAttr.setItem(positionVar.value.positionOut, vars.value.localFilter_SelectionControlsVar);
                    } else {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:JK9vusot40WfCzDo6n7Hmg", callContext.id);
                        // Execute Action: ListAppend
                        OS.SystemActions.listAppend(model.variables.optionControlVar.optionList_ControlAttr, vars.value.localFilter_SelectionControlsVar, callContext);
                    }

                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:db6s7nbWnUyUDk+dbvKt6Q", callContext.id);
                    // Execute Action: Action_FilterLocalitiesByCountry
                    controller._action_FilterLocalitiesByCountry$Action(callContext);
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:hKhjBXcsY0Whv3VBhwMWxQ", callContext.id);
                    // Execute Action: Action_Define_OptionControlVars
                    controller._action_Define_OptionControl_Last$Action(false, callContext);
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:QcGC4m8ShE+r1NHX0uBA7g", callContext.id);
                    // Execute Action: Action_DefineOptionControl_Empty
                    controller._action_DefineOptionControl_Empty$Action(callContext);
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:4wzw_ntcjE2+aH_uswz0gA", callContext.id);
                } else {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:6SHJKejbXE+9A_Cx9+5wQw", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:+PVVo25mdUyB2OBrH3SaoQ", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.App_CommonBlocks_Filter.SortSheet.Action_Define_Localities$vars", [{
            name: "LocalFilter_SelectionControls",
            attrName: "localFilter_SelectionControlsVar",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Record,
            defaultValue: function() {
                return new UBTConnectModel.Filter_Common_Control_ListRec();
            },
            complexType: UBTConnectModel.Filter_Common_Control_ListRec
        }]);
        Controller.prototype._onClick_Apply$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnClick_Apply");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:yIYTq7+1q0Squ36NgZQ7Pg:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.F_VfQkvSFEiuMP_AqJb8Ag/ClientActions.yIYTq7+1q0Squ36NgZQ7Pg:E_lr7CPeJ9XPZEPmHPUQtg", "UBTConnect", "OnClick_Apply", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:rtMNyU6Ka0iRTlDxyykVLw", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:CaOsyizVakGbPkb3kLLavA", callContext.id);
                // Execute Action: Action_Define_OptionControl_Last
                controller._action_Define_OptionControl_Last$Action(true, callContext);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Z+WaaAsRV0e1kuUzC+5+nw", callContext.id);
                // Execute Action: Action_CloseSheet
                controller._action_CloseSheet$Action(callContext);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:E9TcFkCtJEGeXrFn0+nk6Q", callContext.id);
                // Trigger Event: ApplySort
                return controller.applySort$Action(model.variables.sortBy_TitleVar, model.variables.optionControlVar, callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:xn35hQ3xLUa2Ts34DZCLsg", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:yIYTq7+1q0Squ36NgZQ7Pg", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:yIYTq7+1q0Squ36NgZQ7Pg", callContext.id);
                throw ex;

            });
        };
        Controller.prototype._onClick_SelectionOption$Action = function(in_TitleIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnClick_SelectionOption");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.App_CommonBlocks_Filter.SortSheet.OnClick_SelectionOption$vars"))());
            vars.value.in_TitleInLocal = in_TitleIn;
            var listIndexOfVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.vars = vars;
            varBag.listIndexOfVar = listIndexOfVar;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:Adqcr7ks5ES74Kj1GcJQmA:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.F_VfQkvSFEiuMP_AqJb8Ag/ClientActions.Adqcr7ks5ES74Kj1GcJQmA:2cQ3TmkaXNblHOPTHkgxiA", "UBTConnect", "OnClick_SelectionOption", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:3UFctLoaXEWlclFjqFCjbA", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:DQ4B0n6DzkODIWUa8V49BA", callContext.id);
                // Execute Action: ListIndexOf
                listIndexOfVar.value = OS.SystemActions.listIndexOf(model.variables.optionControlVar.optionList_ControlAttr, function(p) {
                    return (p.titleAttr === vars.value.in_TitleInLocal);
                }, callContext);

                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:AqaHPX1dzU+Xxvl1gFEfeg", callContext.id) && (listIndexOfVar.value.positionOut >= 0))) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:DvGjHG2mlUy_+tmw5oQaVA", callContext.id);
                    // Execute Action: Action_SetSubState
                    controller._action_SetSubState$Action(model.variables.optionControlVar.optionList_ControlAttr.getCurrent(callContext.iterationContext).titleAttr, callContext);
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:IrApLNN1j0u5NoWo2x0p0g", callContext.id);
                    // OptionList_Selected = OptionControl.OptionList_Control[ListIndexOf.Position]
                    model.variables.optionList_SelectedVar = model.variables.optionControlVar.optionList_ControlAttr.getItem(listIndexOfVar.value.positionOut);
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:OWtZO1t2xUqa8SZ3ITmxWw", callContext.id);
                } else {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:_wp68Sq_9k20VbgsWOPbGA", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:Adqcr7ks5ES74Kj1GcJQmA", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.App_CommonBlocks_Filter.SortSheet.OnClick_SelectionOption$vars", [{
            name: "In_Title",
            attrName: "in_TitleInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.prototype._action_CloseSheet$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Action_CloseSheet");
            callContext = controller.callContext(callContext);
            var bottomSheetCloseVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.bottomSheetCloseVar = bottomSheetCloseVar;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:C+t7ubyMRkOqvbUzctH1vQ:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.F_VfQkvSFEiuMP_AqJb8Ag/ClientActions.C+t7ubyMRkOqvbUzctH1vQ:coX0zVYCJ1sK3XvLnz+5Gg", "UBTConnect", "Action_CloseSheet", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:8VSPMnNKMEWI09ANnojooA", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:5O+tTYVzNEGUw4HiTd0fjA", callContext.id);
                // Execute Action: BottomSheetClose
                bottomSheetCloseVar.value = OutSystemsUI_2_23Controller.default.bottomSheetClose$Action(model.variables.bottomSheetIdVar, callContext);

                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:umQTHAYR90m_zSD_ywMEKg", callContext.id);
                // Execute Action: Action_SetSubState
                controller._action_SetSubState$Action(model.variables.subState_MainVar, callContext);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:z1VQLctf6E6nFbp_k8ILLA", callContext.id);
                // Execute Action: Action_ClearSearchString
                controller._action_ClearSearchString$Action(callContext);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:6kEws+9VIEC9HqY7KwLKJQ", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:C+t7ubyMRkOqvbUzctH1vQ", callContext.id);
            }

        };
        Controller.prototype._handler_Input_OnReady$Action = function(idIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_Input_OnReady");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.App_CommonBlocks_Filter.SortSheet.Handler_Input_OnReady$vars"))());
            vars.value.idInLocal = idIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:rRIluyS40USVpam06sQ0fQ:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.F_VfQkvSFEiuMP_AqJb8Ag/ClientActions.rRIluyS40USVpam06sQ0fQ:Ax1Iiyjog4VviJzhtGqsuA", "UBTConnect", "Handler_Input_OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:kBfUSYn7Tk+RU8d20e7WnQ", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:DfdoHDv3zEW6slg6DxYYnA", callContext.id);
                // SearchInputId = Id
                model.variables.searchInputIdVar = vars.value.idInLocal;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:CuFdzjBqJkGUwDmNoPryOw", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:rRIluyS40USVpam06sQ0fQ", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.App_CommonBlocks_Filter.SortSheet.Handler_Input_OnReady$vars", [{
            name: "Id",
            attrName: "idInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.prototype._action_Define_OptionControl$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Action_Define_OptionControl");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:6IgnzfjAd0ilUCxgQOLlEQ:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.F_VfQkvSFEiuMP_AqJb8Ag/ClientActions.6IgnzfjAd0ilUCxgQOLlEQ:bIBzIAXg4Ki7cfq2CPJWUA", "UBTConnect", "Action_Define_OptionControl", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:zzntK8WL4UK89LC1e8d8rA", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:2p9VTdxbsEKnrN29irP4LQ", callContext.id);
                // OptionControl.OptionList_Control = In_Filter_Common_Options_Choice.Extra_OptionLists
                model.variables.optionControlVar.optionList_ControlAttr = model.variables.in_Filter_Common_Options_ChoiceIn.extra_OptionListsAttr;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:2p9VTdxbsEKnrN29irP4LQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                // OptionControl.OptionChoice_Control = In_Filter_Common_Options_Choice.Extra_OptionChoices
                model.variables.optionControlVar.optionChoice_ControlAttr = model.variables.in_Filter_Common_Options_ChoiceIn.extra_OptionChoicesAttr;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:2p9VTdxbsEKnrN29irP4LQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
                // OptionControl.OptionFlatList_Control = In_Filter_Common_Options_Choice.Extra_OptionFlatLists
                model.variables.optionControlVar.optionFlatList_ControlAttr = model.variables.in_Filter_Common_Options_ChoiceIn.extra_OptionFlatListsAttr;
                // Countries
                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:K1egRQSFyUiG28cCesUkdg", callContext.id) && model.variables.in_Filter_Common_Options_ChoiceIn.hasCountriesAttr.enableAttr)) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:vn8dUF3XLU21On_ykVDj8w", callContext.id);
                    // Execute Action: Action_Define_Countries
                    controller._action_Define_Countries$Action(callContext);
                }

                // Localities
                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:n9D2YcPJUkOR1jHD0EsAmQ", callContext.id) && model.variables.in_Filter_Common_Options_ChoiceIn.hasLocalitiesAttr.enableAttr)) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:krdrLPdza0C9qT1fwvTcOg", callContext.id);
                    // Execute Action: Action_Define_Localities
                    controller._action_Define_Localities$Action(callContext);
                }

                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:jXANflqT9EK0_pSFP_KEkg", callContext.id) && model.variables.in_Filter_Common_Options_ChoiceIn.hasSortingAttr.enableAttr)) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:BcNWpDthw0q+8LWwHL+PvA", callContext.id);
                    // Execute Action: Action_DefineSortBy
                    controller._action_DefineSortBy$Action(callContext);
                }

                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:vjM5KPySe0G2aPyE805oXA", callContext.id);
                // Execute Action: ListSort
                OS.SystemActions.listSort(model.variables.optionControlVar.optionChoice_ControlAttr, function(p) {
                    return p.orderAttr;
                }, true, callContext);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:W7pxsiN5mU2bHAZSfW6z0w", callContext.id);
                // Execute Action: ListSort2
                OS.SystemActions.listSort(model.variables.optionControlVar.optionList_ControlAttr, function(p) {
                    return p.orderAttr;
                }, true, callContext);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:7hjgmTJbb0q7OEIRYTUWIA", callContext.id);
                // Execute Action: ListSort3
                OS.SystemActions.listSort(model.variables.optionControlVar.optionFlatList_ControlAttr, function(p) {
                    return p.orderAttr;
                }, true, callContext);
                // Has Year Flat List Options
                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:WjQUCGbOBUuvD0HnKQO68Q", callContext.id) && !(model.variables.in_Filter_Common_Options_ChoiceIn.extra_OptionFlatListsAttr.getCurrent(callContext.iterationContext).in_OptionsAttr.isEmpty))) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:oc9V5cr6s0Kwe9Jf10ahMw", callContext.id);
                }

                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:LjT4NBBGUkqFoAsg5RkZ6A", callContext.id);
                // Execute Action: Action_Define_OptionControlVars
                controller._action_Define_OptionControl_Last$Action(false, callContext);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:QQmfUkWUAk2yzaDe_68Wvg", callContext.id);
                // Execute Action: Action_DefineOptionControl_Empty
                controller._action_DefineOptionControl_Empty$Action(callContext);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:HTe4VWqIn0ihvSvBy0dfLg", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:6IgnzfjAd0ilUCxgQOLlEQ", callContext.id);
            }

        };
        Controller.prototype._action_DefineSortBy$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Action_DefineSortBy");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.App_CommonBlocks_Filter.SortSheet.Action_DefineSortBy$vars"))());
            var listIndexOfVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.vars = vars;
            varBag.listIndexOfVar = listIndexOfVar;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:3lhe1awa4UClbySAQJizkg:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.F_VfQkvSFEiuMP_AqJb8Ag/ClientActions.3lhe1awa4UClbySAQJizkg:89xxPAcbLl5PM7I4T0Gnyw", "UBTConnect", "Action_DefineSortBy", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:zSN2H93OUk+ToMlPsCtgHQ", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:VgbJvRjTQ0qdVRyvUWIZ2w", callContext.id);
                // Execute Action: ListIndexOf
                listIndexOfVar.value = OS.SystemActions.listIndexOf(model.variables.optionControlVar.optionChoice_ControlAttr, function(p) {
                    return (p.titleAttr === model.variables.sortBy_TitleVar);
                }, callContext);

                // Has Sorting
                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:y7rE+5CifkKYEMASKvTcPg", callContext.id) && model.variables.in_Filter_Common_Options_ChoiceIn.hasSortingAttr.enableAttr)) {
                    // Already Has Element
                    if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:xVZL50Mwy0WsaCcemSqgQg", callContext.id) && (listIndexOfVar.value.positionOut >= 0))) {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:7LNLpE5BPkipt_1IVrfTqw", callContext.id);
                    } else {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Jbk5yzW0WUCv2M01++rgsA", callContext.id);
                        // Local_FilterChoiceItem.Title = SortBy_Title
                        vars.value.local_FilterChoiceItemVar.titleAttr = model.variables.sortBy_TitleVar;
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Jbk5yzW0WUCv2M01++rgsA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                        // Local_FilterChoiceItem.SelectedChoiceId = If
                        vars.value.local_FilterChoiceItemVar.selectedChoiceIdAttr = (((model.variables.in_StartFilterIn.sort_ByNewestAttr === OS.BuiltinFunctions.nullTextIdentifier())) ? (UBTConnectModel.staticEntities.choice.yes) : (model.variables.in_StartFilterIn.sort_ByNewestAttr));
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Jbk5yzW0WUCv2M01++rgsA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
                        // Local_FilterChoiceItem.YesLabel = In_Filter_Common_Options_Choice.HasSorting.YesLabel
                        vars.value.local_FilterChoiceItemVar.yesLabelAttr = model.variables.in_Filter_Common_Options_ChoiceIn.hasSortingAttr.yesLabelAttr;
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Jbk5yzW0WUCv2M01++rgsA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
                        // Local_FilterChoiceItem.NoLabel = In_Filter_Common_Options_Choice.HasSorting.NoLabel
                        vars.value.local_FilterChoiceItemVar.noLabelAttr = model.variables.in_Filter_Common_Options_ChoiceIn.hasSortingAttr.noLabelAttr;
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Jbk5yzW0WUCv2M01++rgsA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
                        // Local_FilterChoiceItem.NoneLabel = ""
                        vars.value.local_FilterChoiceItemVar.noneLabelAttr = "";
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Jbk5yzW0WUCv2M01++rgsA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "6");
                        // Local_FilterChoiceItem.Order = In_Filter_Common_Options_Choice.HasSorting.Order
                        vars.value.local_FilterChoiceItemVar.orderAttr = model.variables.in_Filter_Common_Options_ChoiceIn.hasSortingAttr.orderAttr;
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Lelp5iY_wky9azIdkjAMbA", callContext.id);
                        // Execute Action: ListAppend
                        OS.SystemActions.listAppend(model.variables.optionControlVar.optionChoice_ControlAttr, vars.value.local_FilterChoiceItemVar, callContext);
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:WXJUk7zo+kO5npvyEQQoZg", callContext.id);
                    }

                } else {
                    // Already Has Element
                    if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:qkPfDby+0UutXyFDoLyeIQ", callContext.id) && (listIndexOfVar.value.positionOut >= 0))) {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:NMW9eY64eUKCYwF3fBgbGw", callContext.id);
                        // Execute Action: ListRemove
                        OS.SystemActions.listRemove(model.variables.optionControlVar.optionChoice_ControlAttr, listIndexOfVar.value.positionOut, callContext);
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:WXJUk7zo+kO5npvyEQQoZg", callContext.id);
                    } else {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:VUBTvKcbY0aVj9WoyUQp_g", callContext.id);
                    }

                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:3lhe1awa4UClbySAQJizkg", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.App_CommonBlocks_Filter.SortSheet.Action_DefineSortBy$vars", [{
            name: "Local_FilterChoiceItem",
            attrName: "local_FilterChoiceItemVar",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Record,
            defaultValue: function() {
                return new UBTConnectModel.Filter_Common_Control_ChoiceRec();
            },
            complexType: UBTConnectModel.Filter_Common_Control_ChoiceRec
        }]);
        Controller.prototype._onChange_ChoiceOption$Action = function(in_TitleIn, choiceIdIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnChange_ChoiceOption");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.App_CommonBlocks_Filter.SortSheet.OnChange_ChoiceOption$vars"))());
            vars.value.in_TitleInLocal = in_TitleIn;
            vars.value.choiceIdInLocal = choiceIdIn;
            var listIndexOfVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.vars = vars;
            varBag.listIndexOfVar = listIndexOfVar;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:080D3Bo5s0WhWodNoDy8WA:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.F_VfQkvSFEiuMP_AqJb8Ag/ClientActions.080D3Bo5s0WhWodNoDy8WA:kibRXYBfqgevxcrQu_9B7Q", "UBTConnect", "OnChange_ChoiceOption", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:yJeL519bcE2UnH51Fxhy9w", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:A2lqLmS74Uuho0+wxJkB3Q", callContext.id);
                // Execute Action: ListIndexOf
                listIndexOfVar.value = OS.SystemActions.listIndexOf(model.variables.optionControlVar.optionChoice_ControlAttr, function(p) {
                    return (p.titleAttr === vars.value.in_TitleInLocal);
                }, callContext);

                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:kawbq_p9f06Tani9FfdNaQ", callContext.id) && (listIndexOfVar.value.positionOut >= 0))) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:0QsIW4NK1EKIw9YxVhx0Qw", callContext.id);
                    // OptionControl.OptionChoice_Control[ListIndexOf.Position].SelectedChoiceId = ChoiceId
                    model.variables.optionControlVar.optionChoice_ControlAttr.getItem(listIndexOfVar.value.positionOut).selectedChoiceIdAttr = vars.value.choiceIdInLocal;
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:MRQhCpn7ZkS2pxirRWlFmg", callContext.id);
                } else {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:MRQhCpn7ZkS2pxirRWlFmg", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:080D3Bo5s0WhWodNoDy8WA", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.App_CommonBlocks_Filter.SortSheet.OnChange_ChoiceOption$vars", [{
            name: "In_Title",
            attrName: "in_TitleInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }, {
            name: "ChoiceId",
            attrName: "choiceIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.prototype._onChange_ListOption$Action = function(in_SelectedIdsIn, in_TitleIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnChange_ListOption");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.App_CommonBlocks_Filter.SortSheet.OnChange_ListOption$vars"))());
            vars.value.in_SelectedIdsInLocal = in_SelectedIdsIn.clone();
            vars.value.in_TitleInLocal = in_TitleIn;
            var app_CommonFilter_DefineOptionNamesVar = new OS.DataTypes.VariableHolder();
            var listIndexOfVar = new OS.DataTypes.VariableHolder();
            var listIndexOfLocalitiesVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.vars = vars;
            varBag.app_CommonFilter_DefineOptionNamesVar = app_CommonFilter_DefineOptionNamesVar;
            varBag.listIndexOfVar = listIndexOfVar;
            varBag.listIndexOfLocalitiesVar = listIndexOfLocalitiesVar;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:X2Fq7hVWLUey2NUbXGlDAw:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.F_VfQkvSFEiuMP_AqJb8Ag/ClientActions.X2Fq7hVWLUey2NUbXGlDAw:Td3MjQsytGp8rRZXVSPcRw", "UBTConnect", "OnChange_ListOption", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:qUr5x0mZ3EmUjlKrcSxufg", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:HHSkXX3X7k2a8f7QBtlEwA", callContext.id);
                // Execute Action: ListIndexOf
                listIndexOfVar.value = OS.SystemActions.listIndexOf(model.variables.optionControlVar.optionList_ControlAttr, function(p) {
                    return (p.titleAttr === vars.value.in_TitleInLocal);
                }, callContext);

                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ySGT8WaFVk2yPzqHJ7YlqA", callContext.id) && (listIndexOfVar.value.positionOut >= 0))) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:QzVVKfFbmE2Cm66ljANjvw", callContext.id);
                    // OptionControl.OptionList_Control[ListIndexOf.Position].SelectedIds = In_SelectedIds
                    model.variables.optionControlVar.optionList_ControlAttr.getItem(listIndexOfVar.value.positionOut).selectedIdsAttr = vars.value.in_SelectedIdsInLocal;
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:WTghIv6SDES7LxJsrkRRNw", callContext.id);
                    // Execute Action: App_CommonFilter_DefineOptionNames
                    app_CommonFilter_DefineOptionNamesVar.value = UBTConnectController.default.app_CommonFilter_DefineOptionNames$Action(model.variables.optionControlVar.optionList_ControlAttr.getItem(listIndexOfVar.value.positionOut), callContext);

                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:JC51Bj1dLUKcJRuv1P7w0g", callContext.id);
                    // OptionControl.OptionList_Control[ListIndexOf.Position] = App_CommonFilter_DefineOptionNames.Formatted
                    model.variables.optionControlVar.optionList_ControlAttr.setItem(listIndexOfVar.value.positionOut, app_CommonFilter_DefineOptionNamesVar.value.formattedOut);
                }

                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:3Y8F5uKYbUuMgWBLQ_l4Wg", callContext.id) && (vars.value.in_TitleInLocal === model.variables.subState_CountriesVar))) {
                    // IsAllCountries
                    if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:tSc0zQ5UQ0SNDNoPcJrnNQ", callContext.id) && (vars.value.in_SelectedIdsInLocal.getCurrent(callContext.iterationContext) === UBTConnectModel.staticEntities.choice.none))) {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:pJjneI6Lkkul5t7o5wvWoQ", callContext.id);
                        // Execute Action: ListIndexOfLocalities
                        listIndexOfLocalitiesVar.value = OS.SystemActions.listIndexOf(model.variables.optionControlVar.optionList_ControlAttr, function(p) {
                            return (p.titleAttr === model.variables.subState_LocalitiesVar);
                        }, callContext);

                        if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:nGQRcD3rikySGmMmV7ujXg", callContext.id) && ((listIndexOfLocalitiesVar.value.positionOut) !== (-1)))) {
                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:iL6xegJD_EaR+uQCvaQ3Rw", callContext.id);
                            // Execute Action: ListClear
                            OS.SystemActions.listClear(model.variables.optionControlVar.optionList_ControlAttr.getItem(listIndexOfLocalitiesVar.value.positionOut).selectedIdsAttr, callContext);
                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:cxeg3Bfs6UuHCGsYblC4yw", callContext.id);
                            // Execute Action: ListClear2
                            OS.SystemActions.listClear(model.variables.optionControlVar.optionList_ControlAttr.getItem(listIndexOfLocalitiesVar.value.positionOut).selectedNamesAttr, callContext);
                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:MjTkMhATvUyq85VaJEGG1g", callContext.id);
                            // OptionControl.OptionList_Control[ListIndexOfLocalities.Position].SelectedIds = In_SelectedIds
                            model.variables.optionControlVar.optionList_ControlAttr.getItem(listIndexOfLocalitiesVar.value.positionOut).selectedIdsAttr = vars.value.in_SelectedIdsInLocal;
                        }

                    }

                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:1ww0lrvVa0mWZw0VBIc+vg", callContext.id);
                    // Execute Action: Action_FilterLocalitiesByCountry
                    controller._action_FilterLocalitiesByCountry$Action(callContext);
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:EioNu_U+dkG1gnowpFaPlg", callContext.id);
                } else {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:EioNu_U+dkG1gnowpFaPlg", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:X2Fq7hVWLUey2NUbXGlDAw", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.App_CommonBlocks_Filter.SortSheet.OnChange_ListOption$vars", [{
            name: "In_SelectedIds",
            attrName: "in_SelectedIdsInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.RecordList,
            defaultValue: function() {
                return new OS.DataTypes.TextList();
            },
            complexType: OS.DataTypes.TextList
        }, {
            name: "In_Title",
            attrName: "in_TitleInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.prototype._onClick_SelectionBack$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnClick_SelectionBack");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:qqTW90xqVkeCQMm_qQHi_w:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.F_VfQkvSFEiuMP_AqJb8Ag/ClientActions.qqTW90xqVkeCQMm_qQHi_w:k+MMri_U273Vow6ZB+r44A", "UBTConnect", "OnClick_SelectionBack", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:bTmw6BHZ1E6AYvrAvXLEUg", callContext.id);
                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:MHJi8rHfXk6haWmLiUxUbA", callContext.id) && model.variables.isSingleFilterVar)) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ZSyNjk_phk+hoOj8LeHKlw", callContext.id);
                    // Execute Action: Action_CloseSheet
                    controller._action_CloseSheet$Action(callContext);
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ZPH6CCGj0ES7szPXfGaVMA", callContext.id);
                } else {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:A10PUyTflE+gcLOnmxlEAg", callContext.id);
                    // Execute Action: Action_SetSubState
                    controller._action_SetSubState$Action(model.variables.subState_MainVar, callContext);
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:27lJtrM_gU2ReHRa7ivBbQ", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:qqTW90xqVkeCQMm_qQHi_w", callContext.id);
            }

        };

        Controller.prototype.bottomSheetOnToggle$Action = function(isOpenIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._bottomSheetOnToggle$Action, callContext, isOpenIn);

        };
        Controller.prototype.action_DefineOptionControl_Empty$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._action_DefineOptionControl_Empty$Action, callContext);

        };
        Controller.prototype.onClick_Clear$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onClick_Clear$Action, callContext);

        };
        Controller.prototype.action_Define_Countries$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._action_Define_Countries$Action, callContext);

        };
        Controller.prototype.handler_ListOnSelectionChange$Action = function(selectedItemsIn, clickedItemIdIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_ListOnSelectionChange$Action, callContext, selectedItemsIn, clickedItemIdIn);

        };
        Controller.prototype.action_Define_OptionControl_Last$Action = function(isFromApplyIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._action_Define_OptionControl_Last$Action, callContext, isFromApplyIn);

        };
        Controller.prototype.bottomSheetOnClose$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._bottomSheetOnClose$Action, callContext);

        };
        Controller.prototype.action_SetSubState$Action = function(in_SubStateIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._action_SetSubState$Action, callContext, in_SubStateIn);

        };
        Controller.prototype.handler_BackNavigation$Action = function(backNavigationEventIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_BackNavigation$Action, callContext, backNavigationEventIn);

        };
        Controller.prototype.action_FilterLocalitiesByCountry$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._action_FilterLocalitiesByCountry$Action, callContext);

        };
        Controller.prototype.action_SetSingleFilter$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._action_SetSingleFilter$Action, callContext);

        };
        Controller.prototype.bottomSheetInitialized$Action = function(idIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._bottomSheetInitialized$Action, callContext, idIn);

        };
        Controller.prototype.screenEvent_OnParametersChanged$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._screenEvent_OnParametersChanged$Action, callContext);

        };
        Controller.prototype.cacheControl_UserInfo_WrapperResult$Action = function(userInformationIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._cacheControl_UserInfo_WrapperResult$Action, callContext, userInformationIn);

        };
        Controller.prototype.screenEvent_OnInitialize$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._screenEvent_OnInitialize$Action, callContext);

        };
        Controller.prototype.action_ClearSearchString$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._action_ClearSearchString$Action, callContext);

        };
        Controller.prototype.action_Define_Localities$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._action_Define_Localities$Action, callContext);

        };
        Controller.prototype.onClick_Apply$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onClick_Apply$Action, callContext);

        };
        Controller.prototype.onClick_SelectionOption$Action = function(in_TitleIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onClick_SelectionOption$Action, callContext, in_TitleIn);

        };
        Controller.prototype.action_CloseSheet$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._action_CloseSheet$Action, callContext);

        };
        Controller.prototype.handler_Input_OnReady$Action = function(idIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_Input_OnReady$Action, callContext, idIn);

        };
        Controller.prototype.action_Define_OptionControl$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._action_Define_OptionControl$Action, callContext);

        };
        Controller.prototype.action_DefineSortBy$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._action_DefineSortBy$Action, callContext);

        };
        Controller.prototype.onChange_ChoiceOption$Action = function(in_TitleIn, choiceIdIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onChange_ChoiceOption$Action, callContext, in_TitleIn, choiceIdIn);

        };
        Controller.prototype.onChange_ListOption$Action = function(in_SelectedIdsIn, in_TitleIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onChange_ListOption$Action, callContext, in_SelectedIdsIn, in_TitleIn);

        };
        Controller.prototype.onClick_SelectionBack$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onClick_SelectionBack$Action, callContext);

        };
        Controller.prototype.sheetInitialized$Action = function() {
            return Promise.resolve();
        };
        Controller.prototype.applySort$Action = function() {
            return Promise.resolve();
        };
        Controller.prototype.loaded$Action = function() {
            return Promise.resolve();
        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:Jpw6vcM30keGIepdkjtS7A:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A:aO+UykmPPS6VEpIYdNjDCA", "UBTConnect", "App_CommonBlocks_Filter", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:F_VfQkvSFEiuMP_AqJb8Ag:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.F_VfQkvSFEiuMP_AqJb8Ag:BZochUg2UGrcCr66wi37DA", "UBTConnect", "SortSheet", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:F_VfQkvSFEiuMP_AqJb8Ag", callContext.id);
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:Jpw6vcM30keGIepdkjtS7A", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "App_CommonBlocks_Filter/SortSheet On Initialize");
                return controller.screenEvent_OnInitialize$Action(callContext);

            }, function() {
                controller.popDebuggerContext(callContext);

            });

        };
        Controller.prototype.onReadyEventHandler = null;
        Controller.prototype.onRenderEventHandler = null;
        Controller.prototype.onDestroyEventHandler = null;
        Controller.prototype.onParametersChangedEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "App_CommonBlocks_Filter/SortSheet On Parameters Changed");
                return controller.screenEvent_OnParametersChanged$Action(callContext);

            }, function() {
                controller.popDebuggerContext(callContext);

            });

        };
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

define("UBTConnect.App_CommonBlocks_Filter.SortSheet.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "99mXS4D49UuxhWK_38Iy8Q": {
            getter: function(varBag, idService) {
                return varBag.vars.value.isOpenInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "odldKbKfcECCH7VbwFvqpQ": {
            getter: function(varBag, idService) {
                return varBag.listIndexOfVar.value;
            }
        },
        "nHsvb6hOi0yeW1isHGMI_g": {
            getter: function(varBag, idService) {
                return varBag.vars.value.localFilter_SelectionControlsVar;
            }
        },
        "TonRwItMFU65_irhHpqgcg": {
            getter: function(varBag, idService) {
                return varBag.positionVar.value;
            }
        },
        "jdCe4teaSE2hNOTALB_dCg": {
            getter: function(varBag, idService) {
                return varBag.app_CommonFilter_CheckCountryVar.value;
            }
        },
        "WQzo6adNjUuGgHRpxjzOXQ": {
            getter: function(varBag, idService) {
                return varBag.app_CommonFilter_DefineOptionNamesVar.value;
            }
        },
        "LJ1qnv6h9E6cHdfnJwWLcw": {
            getter: function(varBag, idService) {
                return varBag.vars.value.selectedItemsInLocal;
            }
        },
        "7IRJeA6fYk+C+gRhIdKqwA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.clickedItemIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "OR15mDp1aEizc8Z1SZJCfA": {
            getter: function(varBag, idService) {
                return varBag.listIndexOfVar.value;
            }
        },
        "MF79kJNFbEO2UHzhABXJOg": {
            getter: function(varBag, idService) {
                return varBag.vars.value.isFromApplyInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "PIP7Bl5cE06yf6bNRAvlQQ": {
            getter: function(varBag, idService) {
                return varBag.bottomSheetCloseVar.value;
            }
        },
        "x5qijnGHO0O1fSZwbLNSZA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.in_SubStateInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "wYtaFD891kuAdH3kCvjVaw": {
            getter: function(varBag, idService) {
                return varBag.vars.value.backNavigationEventInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Object
        },
        "Iii_ruHzakykIouzJHU9tQ": {
            getter: function(varBag, idService) {
                return varBag.bottomSheetCloseVar.value;
            }
        },
        "5ML0Xq9R206btg7WyZTZHw": {
            getter: function(varBag, idService) {
                return varBag.app_CommonFilter_DefineOptionNamesVar.value;
            }
        },
        "D8upY67guk29Xm67CgLqVA": {
            getter: function(varBag, idService) {
                return varBag.listIndexOfLocalitiesVar.value;
            }
        },
        "d2ZBggXAi0iTRJPLI5MuUA": {
            getter: function(varBag, idService) {
                return varBag.listAnyVar.value;
            }
        },
        "URVioALfaUOUCNDolpOFQA": {
            getter: function(varBag, idService) {
                return varBag.listFilterVar.value;
            }
        },
        "IfLQ+VezcEq_IhtCQeOz4A": {
            getter: function(varBag, idService) {
                return varBag.listIndexOfCountriesVar.value;
            }
        },
        "tHg9+n6ZRUSPz+uJTSRxLQ": {
            getter: function(varBag, idService) {
                return varBag.listDuplicateVar.value;
            }
        },
        "_6xv2TJKV0+hu8mQaW1tyw": {
            getter: function(varBag, idService) {
                return varBag.vars.value.idInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "GxqXOKv9dECGyEsVq6iGlw": {
            getter: function(varBag, idService) {
                return varBag.vars.value.hasFiltersOtherThanLocalityVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "iEA_FGgax0WgU2m0+pI8Tw": {
            getter: function(varBag, idService) {
                return varBag.vars.value.showSubscriptionOnClickVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "XrH52hQaI0Cli1oCSyjlHA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.userInformationInLocal;
            }
        },
        "1GBlqyrKTEyVvyqbQKifbg": {
            getter: function(varBag, idService) {
                return varBag.vars.value.localFilter_SelectionControlsVar;
            }
        },
        "311XAzcmiE23aAIty1NFSQ": {
            getter: function(varBag, idService) {
                return varBag.positionVar.value;
            }
        },
        "l_ixZnSf8EyC6m38umD8aw": {
            getter: function(varBag, idService) {
                return varBag.app_CommonFilter_DefineOptionNamesVar.value;
            }
        },
        "3WNZYAqiMEGtP8C66ysq3A": {
            getter: function(varBag, idService) {
                return varBag.vars.value.in_TitleInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "DQ4B0n6DzkODIWUa8V49BA": {
            getter: function(varBag, idService) {
                return varBag.listIndexOfVar.value;
            }
        },
        "5O+tTYVzNEGUw4HiTd0fjA": {
            getter: function(varBag, idService) {
                return varBag.bottomSheetCloseVar.value;
            }
        },
        "uF1ySk+i2E+agktjtcQcOw": {
            getter: function(varBag, idService) {
                return varBag.vars.value.idInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "c5kOeisHg0SmzTaxuxrEaQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.local_FilterChoiceItemVar;
            }
        },
        "VgbJvRjTQ0qdVRyvUWIZ2w": {
            getter: function(varBag, idService) {
                return varBag.listIndexOfVar.value;
            }
        },
        "yr9SPXf28Uq2L2Xnx3ytsA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.in_TitleInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "XpjLOB57iEmcxyqagb6BQg": {
            getter: function(varBag, idService) {
                return varBag.vars.value.choiceIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "A2lqLmS74Uuho0+wxJkB3Q": {
            getter: function(varBag, idService) {
                return varBag.listIndexOfVar.value;
            }
        },
        "KTCv6OqF6EyakKYsxfMytQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.in_SelectedIdsInLocal;
            }
        },
        "7Qt4d9+a2Ea6khX0ks76JQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.in_TitleInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "WTghIv6SDES7LxJsrkRRNw": {
            getter: function(varBag, idService) {
                return varBag.app_CommonFilter_DefineOptionNamesVar.value;
            }
        },
        "HHSkXX3X7k2a8f7QBtlEwA": {
            getter: function(varBag, idService) {
                return varBag.listIndexOfVar.value;
            }
        },
        "pJjneI6Lkkul5t7o5wvWoQ": {
            getter: function(varBag, idService) {
                return varBag.listIndexOfLocalitiesVar.value;
            }
        },
        "4rcJbV6QkEizXS8Zx8CxDw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.bottomSheetIdVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "u44lxb2kJEWnc7o+g6stVw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.subState_SelectedVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "1ahw8uER1E6pLejgz0tz4A": {
            getter: function(varBag, idService) {
                return varBag.model.variables.subState_MainVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "txIempa850CYLPKd7QCtNw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.subState_LocalitiesVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "aosWOAqrx0epGRlgmasssg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.subState_CountriesVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "zQydU0eckka6geEBaTbq3g": {
            getter: function(varBag, idService) {
                return varBag.model.variables.sortBy_TitleVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "0MzsMDxtu0urVHqowTLSWw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.optionList_SelectedVar;
            }
        },
        "lQY+tesCPEWgByt_qBDO7w": {
            getter: function(varBag, idService) {
                return varBag.model.variables.localCacheControl_AllCountriesVar;
            }
        },
        "CCdsL93bDUq7NV91_eYi6A": {
            getter: function(varBag, idService) {
                return varBag.model.variables.localCacheControl_AllLocalitiesVar;
            }
        },
        "1Sq15VFmOUymgL9jPNB38Q": {
            getter: function(varBag, idService) {
                return varBag.model.variables.localCacheControl_UserInfoVar;
            }
        },
        "Kn45qC1+2Emvb9ipvzCV2Q": {
            getter: function(varBag, idService) {
                return varBag.model.variables.optionControlVar;
            }
        },
        "yqugPeyvrkSh_OgnKylz8A": {
            getter: function(varBag, idService) {
                return varBag.model.variables.lastSearched_OptionControlVar;
            }
        },
        "Dpd8NfIB_UOyScFzg7VU5Q": {
            getter: function(varBag, idService) {
                return varBag.model.variables.empty_OptionControlVar;
            }
        },
        "iWpT2CS5+0Wjg384iggYUw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isSingleFilterVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "BVtqItLgT0OCg8V0dKZwKA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isOpen_LocalVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "puWnKFsfdEWO7Bl3PB5g8w": {
            getter: function(varBag, idService) {
                return varBag.model.variables.searchInputIdVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "MeGDzFUFoE+2rngfIC_MYg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.forceUpdateOptionListVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "6JgYAnB12U29AEWcHvUE4w": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_StartFilterIn;
            }
        },
        "A61JZtYXVEeXehVKuUHNCA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_Filter_Common_Options_ChoiceIn;
            }
        },
        "dD_lrgx5rUaIBCtPVCzGRA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.extendedClassesIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "4VY4QLA4ZkWCK86o6K4C6w": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "gJMohtBDTk+8DrhOUdrwOQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Options_Choices"));
                })(varBag.model, idService);
            }
        },
        "wkqs0XXelkCkmHCrLg2vLw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Footer"));
                })(varBag.model, idService);
            }
        },
        "RVlQtiP1Q06WNEK6EM8YGg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "dENp40EaOkiramXiSAt8rA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Left"));
                })(varBag.model, idService);
            }
        },
        "HyyPssVmr0S2btR1t4JvZA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "rH3ZijriukKUIoliifNfxw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Right"));
                })(varBag.model, idService);
            }
        },
        "gjBehOcdPUOaHhJYKBRUSg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "B1oX2LJTBEuVEkmDBx+T8A": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("NeedSubscriptionData"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});