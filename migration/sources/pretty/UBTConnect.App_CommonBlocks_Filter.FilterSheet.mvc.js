define("UBTConnect.App_CommonBlocks_Filter.FilterSheet.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnectLibrary.model", "APIDomain_Directory_IS.model", "UBTConnectLibrary.controller", "UBTConnect_Utils.model", "UBTConnect.controller", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "NavigationHandler.controller", "UBTConnectLibrary.ConnectPatterns.BottomSheet.mvc$model", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$model", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$model", "UBTConnectLibrary.BasePatterns.Columns_Two.mvc$model", "UBTConnectLibrary.BasePatterns.CustomText.mvc$model", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$model", "UBTConnect.App_CommonBlocks_Filter.FilterSheet_OptionChoice_Item.mvc$model", "UBTConnectLibrary.ConnectPatterns.SelectionOption_List.mvc$model", "UBTConnect.App_CommonBlocks_Filter.FilterSheet_OptionList_Item.mvc$model", "UBTConnectLibrary.ConnectPatterns.Button.mvc$model", "UBTConnect_Utils.CacheControl.CacheControl_AllCountries.mvc$model", "UBTConnect_Utils.CacheControl.CacheControl_AllLocalities.mvc$model", "UBTConnect.App_Cache.CacheControl_UserInfo_Wrapper.mvc$model", "NavigationHandler.NavigationHandler.BackNavigationHandler.mvc$model", "UBTConnect.model$Filter_Common_Control_ListRec", "UBTConnect.model$CacheControl_AllCountriesBooleanRecord", "UBTConnect.model$CacheControl_AllLocalitiesBooleanRecord", "UBTConnect.model$BooleanDirectory_UserCurrentRecord", "UBTConnect.model$Filter_Common_Control_ListListFilter_Common_Control_ListListFilter_Common_Control_ChoiceListRecord", "UBTConnect.model$Filter_CommonRec", "UBTConnect.model$Filter_Common_OptionsRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnect.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.model$InlineIconRec", "UBTConnect.model$Filter_Common_Control_ChoiceRec", "UBTConnectLibrary.model$SelectionOption_ItemRec", "UBTConnect.model$SelectionOption_ItemList", "UBTConnectLibrary.model$ButtonOptionsRec", "APIDomain_Directory_IS.model$Directory_UserCurrentRec", "UBTConnect.referencesHealth$APIDomain_Directory_IS", "UBTConnectLibrary.controller$Input_ClearString", "UBTConnect_Utils.model$CacheControl_AllCountriesRec", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTConnect_Utils.model$UI_CountryDetailsRec", "UBTConnect.model$UI_CountryDetails2List", "UBTConnect.controller$App_CommonFilter_DefineOptionNames", "UBTConnect.model$TextTextLongIntegerRecordList", "UBTConnect.controller$App_CommonFilter_CheckCountry", "UBTConnect.model$Filter_Common_Control_ListList", "OutSystemsUI_2_23.model$ErrorMessageRec", "UBTConnect.referencesHealth$OutSystemsUI_2_23", "OutSystemsUI_2_23.controller$BottomSheetClose", "NavigationHandler.controller$PreventNavigation", "UBTConnect.referencesHealth$NavigationHandler", "UBTConnect.model$Filter_Common_Control_ChoiceList", "UBTConnect_Utils.model$UI_LocalityDetailsRec", "UBTConnect.model$UI_LocalityDetailsList", "UBTConnect_Utils.model$CacheControl_AllLocalitiesRec"], function(OutSystems, UBTConnectModel, UBTConnectLibraryModel, APIDomain_Directory_ISModel, UBTConnectLibraryController, UBTConnect_UtilsModel, UBTConnectController, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, NavigationHandlerController, UBTConnectLibrary_ConnectPatterns_BottomSheet_mvcModel, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvcModel, UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel, UBTConnectLibrary_BasePatterns_Columns_Two_mvcModel, UBTConnectLibrary_BasePatterns_CustomText_mvcModel, UBTConnectLibrary_ConnectPatterns_Icon_mvcModel, UBTConnect_App_CommonBlocks_Filter_FilterSheet_OptionChoice_Item_mvcModel, UBTConnectLibrary_ConnectPatterns_SelectionOption_List_mvcModel, UBTConnect_App_CommonBlocks_Filter_FilterSheet_OptionList_Item_mvcModel, UBTConnectLibrary_ConnectPatterns_Button_mvcModel, UBTConnect_Utils_CacheControl_CacheControl_AllCountries_mvcModel, UBTConnect_Utils_CacheControl_CacheControl_AllLocalities_mvcModel, UBTConnect_App_Cache_CacheControl_UserInfo_Wrapper_mvcModel, NavigationHandler_NavigationHandler_BackNavigationHandler_mvcModel) {
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
                    return "Sort by";
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
                this.attr("In_Options", "in_OptionsIn", "In_Options", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.Filter_Common_OptionsRec());
                }, false, UBTConnectModel.Filter_Common_OptionsRec),
                this.attr("_in_OptionsInDataFetchStatus", "_in_OptionsInDataFetchStatus", "_in_OptionsInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
                    Model._hasValidationWidgetsValue = (((((((((((((UBTConnectLibrary_ConnectPatterns_BottomSheet_mvcModel.hasValidationWidgets || UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvcModel.hasValidationWidgets) || UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel.hasValidationWidgets) || UBTConnectLibrary_BasePatterns_Columns_Two_mvcModel.hasValidationWidgets) || UBTConnectLibrary_BasePatterns_CustomText_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_Icon_mvcModel.hasValidationWidgets) || UBTConnect_App_CommonBlocks_Filter_FilterSheet_OptionChoice_Item_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_SelectionOption_List_mvcModel.hasValidationWidgets) || UBTConnect_App_CommonBlocks_Filter_FilterSheet_OptionList_Item_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_Button_mvcModel.hasValidationWidgets) || UBTConnect_Utils_CacheControl_CacheControl_AllCountries_mvcModel.hasValidationWidgets) || UBTConnect_Utils_CacheControl_CacheControl_AllLocalities_mvcModel.hasValidationWidgets) || UBTConnect_App_Cache_CacheControl_UserInfo_Wrapper_mvcModel.hasValidationWidgets) || NavigationHandler_NavigationHandler_BackNavigationHandler_mvcModel.hasValidationWidgets);
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

            if ("In_Options" in inputs) {
                this.variables.in_OptionsIn = inputs.In_Options;
                if ("_in_OptionsInDataFetchStatus" in inputs) {
                    this.variables._in_OptionsInDataFetchStatus = inputs._in_OptionsInDataFetchStatus;
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
    return new OS.Model.ModelFactory(Model, "App_CommonBlocks_Filter.FilterSheet");
});
define("UBTConnect.App_CommonBlocks_Filter.FilterSheet.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "APIDomain_Directory_IS.model", "UBTConnectLibrary.controller", "UBTConnect_Utils.model", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "NavigationHandler.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.App_CommonBlocks_Filter.FilterSheet.mvc$model", "UBTConnect.App_CommonBlocks_Filter.FilterSheet.mvc$controller", "UBTConnect.clientVariables", "UBTConnectLibrary.ConnectPatterns.BottomSheet.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$view", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "UBTConnectLibrary.BasePatterns.Columns_Two.mvc$view", "UBTConnectLibrary.BasePatterns.CustomText.mvc$view", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$view", "UBTConnect.App_CommonBlocks_Filter.FilterSheet_OptionChoice_Item.mvc$view", "UBTConnectLibrary.ConnectPatterns.SelectionOption_List.mvc$view", "UBTConnect.App_CommonBlocks_Filter.FilterSheet_OptionList_Item.mvc$view", "UBTConnectLibrary.ConnectPatterns.Button.mvc$view", "UBTConnect_Utils.CacheControl.CacheControl_AllCountries.mvc$view", "UBTConnect_Utils.CacheControl.CacheControl_AllLocalities.mvc$view", "UBTConnect.App_Cache.CacheControl_UserInfo_Wrapper.mvc$view", "NavigationHandler.NavigationHandler.BackNavigationHandler.mvc$view", "UBTConnect.model$Filter_Common_Control_ListRec", "UBTConnect.model$CacheControl_AllCountriesBooleanRecord", "UBTConnect.model$CacheControl_AllLocalitiesBooleanRecord", "UBTConnect.model$BooleanDirectory_UserCurrentRecord", "UBTConnect.model$Filter_Common_Control_ListListFilter_Common_Control_ListListFilter_Common_Control_ChoiceListRecord", "UBTConnect.model$Filter_CommonRec", "UBTConnect.model$Filter_Common_OptionsRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnect.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.model$InlineIconRec", "UBTConnect.model$Filter_Common_Control_ChoiceRec", "UBTConnectLibrary.model$SelectionOption_ItemRec", "UBTConnect.model$SelectionOption_ItemList", "UBTConnectLibrary.model$ButtonOptionsRec", "APIDomain_Directory_IS.model$Directory_UserCurrentRec", "UBTConnect.referencesHealth$APIDomain_Directory_IS", "UBTConnectLibrary.controller$Input_ClearString", "UBTConnect_Utils.model$CacheControl_AllCountriesRec", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTConnect_Utils.model$UI_CountryDetailsRec", "UBTConnect.model$UI_CountryDetails2List", "UBTConnect.controller$App_CommonFilter_DefineOptionNames", "UBTConnect.model$TextTextLongIntegerRecordList", "UBTConnect.controller$App_CommonFilter_CheckCountry", "UBTConnect.model$Filter_Common_Control_ListList", "OutSystemsUI_2_23.model$ErrorMessageRec", "UBTConnect.referencesHealth$OutSystemsUI_2_23", "OutSystemsUI_2_23.controller$BottomSheetClose", "NavigationHandler.controller$PreventNavigation", "UBTConnect.referencesHealth$NavigationHandler", "UBTConnect.model$Filter_Common_Control_ChoiceList", "UBTConnect_Utils.model$UI_LocalityDetailsRec", "UBTConnect.model$UI_LocalityDetailsList", "UBTConnect_Utils.model$CacheControl_AllLocalitiesRec"], function(OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, APIDomain_Directory_ISModel, UBTConnectLibraryController, UBTConnect_UtilsModel, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, NavigationHandlerController, React, OSView, UBTConnect_App_CommonBlocks_Filter_FilterSheet_mvc_model, UBTConnect_App_CommonBlocks_Filter_FilterSheet_mvc_controller, UBTConnectClientVariables, UBTConnectLibrary_ConnectPatterns_BottomSheet_mvc_view, OSWidgets, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnect_App_CommonBlocks_Filter_FilterSheet_OptionChoice_Item_mvc_view, UBTConnectLibrary_ConnectPatterns_SelectionOption_List_mvc_view, UBTConnect_App_CommonBlocks_Filter_FilterSheet_OptionList_Item_mvc_view, UBTConnectLibrary_ConnectPatterns_Button_mvc_view, UBTConnect_Utils_CacheControl_CacheControl_AllCountries_mvc_view, UBTConnect_Utils_CacheControl_CacheControl_AllLocalities_mvc_view, UBTConnect_App_Cache_CacheControl_UserInfo_Wrapper_mvc_view, NavigationHandler_NavigationHandler_BackNavigationHandler_mvc_view) {
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
        View.displayName = "App_CommonBlocks_Filter.FilterSheet";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_ConnectPatterns_BottomSheet_mvc_view, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnect_App_CommonBlocks_Filter_FilterSheet_OptionChoice_Item_mvc_view, UBTConnectLibrary_ConnectPatterns_SelectionOption_List_mvc_view, UBTConnect_App_CommonBlocks_Filter_FilterSheet_OptionList_Item_mvc_view, UBTConnectLibrary_ConnectPatterns_Button_mvc_view, UBTConnect_Utils_CacheControl_CacheControl_AllCountries_mvc_view, UBTConnect_Utils_CacheControl_CacheControl_AllLocalities_mvc_view, UBTConnect_App_Cache_CacheControl_UserInfo_Wrapper_mvc_view, NavigationHandler_NavigationHandler_BackNavigationHandler_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_App_CommonBlocks_Filter_FilterSheet_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_App_CommonBlocks_Filter_FilterSheet_mvc_controller;
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
                    Content_BackgroundColorId: UBTConnectModel.staticEntities.uBT_Color.neutral2,
                    Title: model.getCachedValue(idService.getId("aczah8942EeuyHayRZGrqw.Title"), function() {
                        return (((model.variables.subState_SelectedVar === model.variables.subState_MainVar)) ? ("Sort & Filter") : ((model.variables.optionList_SelectedVar.sheetTitleAttr + " Filter")));
                    }, function() {
                        return model.variables.subState_SelectedVar;
                    }, function() {
                        return model.variables.subState_MainVar;
                    }, function() {
                        return model.variables.optionList_SelectedVar.sheetTitleAttr;
                    }),
                    Content_Padding: model.getCachedValue(idService.getId("aczah8942EeuyHayRZGrqw.Content_Padding"), function() {
                        return function() {
                            var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                            rec.generalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
                            return rec;
                        }();
                    }),
                    FooterHeight: "72px",
                    ExtendedClasses: model.variables.extendedClassesIn,
                    _extendedClassesInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._extendedClassesInDataFetchStatus)
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
                        return [$if((model.variables.subState_SelectedVar === model.variables.subState_MainVar), false, this, function() {
                            return [React.createElement(UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, {
                                inputs: {
                                    In_IsLoading: ((!((model.variables.localCacheControl_AllLocalitiesVar.isFetchedAttr || model.variables.localCacheControl_UserInfoVar.isFetchedAttr)) && model.variables.in_OptionsIn.hasLocalitiesAttr.enableAttr) && (!((model.variables.localCacheControl_AllCountriesVar.isFetchedAttr || !(model.variables.localCacheControl_UserInfoVar.isFetchedAttr))) && model.variables.in_OptionsIn.hasCountriesAttr.enableAttr)),
                                    _in_IsLoadingInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_OptionsInDataFetchStatus)
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
                                    name: "Loading",
                                    alias: "2"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                placeholders: {
                                    placeholder_LoadingSection: new PlaceholderContent(function() {
                                        return [React.createElement(OSWidgets.List, {
                                            animateItems: true,
                                            gridProperties: {
                                                classes: "OSFillParent"
                                            },
                                            mode: /*Default*/ 0,
                                            source: model.variables.optionControlVar.optionList_ControlAttr,
                                            style: "list list-group",
                                            tag: "div",
                                            _idProps: {
                                                service: idService,
                                                name: "OptionsList"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider,
                                            placeholders: {
                                                content: new IteratorPlaceholderContent(function(idService, callContext) {
                                                    return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                                                        inputs: {
                                                            Options: model.getCachedValue(idService.getId("OptionList_Item.Options"), function() {
                                                                return function() {
                                                                    var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                                                                    rec.backgroundAttr = function() {
                                                                        var rec = new UBTConnectLibraryModel.BackgroundOptionsRec();
                                                                        rec.backgroundColorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral0;
                                                                        return rec;
                                                                    }();
                                                                    rec.paddingSizeAttr = function() {
                                                                        var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                                                        rec.generalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
                                                                        return rec;
                                                                    }();
                                                                    rec.marginSizeAttr = function() {
                                                                        var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                                                        rec.bottomSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.extraSmall;
                                                                        return rec;
                                                                    }();
                                                                    rec.borderOptionsAttr = function() {
                                                                        var rec = new UBTConnectLibraryModel.BorderOptionsRec();
                                                                        rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral3;
                                                                        rec.sizeAttr = function() {
                                                                            var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                                                            rec.generalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
                                                                            return rec;
                                                                        }();
                                                                        rec.radiusAttr = function() {
                                                                            var rec = new UBTConnectLibraryModel.RadiusOptionsRec();
                                                                            rec.generalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Shape.soft;
                                                                            return rec;
                                                                        }();
                                                                        return rec;
                                                                    }();
                                                                    return rec;
                                                                }();
                                                            })
                                                        },
                                                        events: {
                                                            _handleError: function(ex) {
                                                                controller.handleError(ex);
                                                            },
                                                            clicked$Action: function() {
                                                                var eventHandlerContext = callContext.clone();
                                                                return OS.Flow.tryFinally(function() {
                                                                    var varBag = {};
                                                                    controller.pushDebuggerContext(eventHandlerContext);

                                                                    OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "BasePatterns/CustomContainer Clicked");
                                                                    controller.onClick_SelectionOption$Action(model.variables.optionControlVar.optionList_ControlAttr.getCurrent(callContext.iterationContext).titleAttr, controller.callContext(eventHandlerContext));
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
                                                            name: "OptionList_Item",
                                                            alias: "3"
                                                        },
                                                        _widgetRecordProvider: widgetsRecordProvider,
                                                        placeholders: {
                                                            content: new PlaceholderContent(function() {
                                                                return [React.createElement(UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, {
                                                                    inputs: {
                                                                        ColumnOptions: model.getCachedValue(idService.getId("j9erbEWEwECsUyL5wmz5mw.ColumnOptions"), function() {
                                                                            return function() {
                                                                                var rec = new UBTConnectLibraryModel.ColumnOptionsRec();
                                                                                rec.columnBehaviourAttr = UBTConnectModel.staticEntities.uBT_ColumnBehaviour.reduceLast;
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
                                                                            return [React.createElement(OSWidgets.Container, {
                                                                                align: /*Default*/ 0,
                                                                                animate: false,
                                                                                extendedProperties: {
                                                                                    style: "text-align: left;"
                                                                                },
                                                                                visible: true,
                                                                                _idProps: {
                                                                                    service: idService,
                                                                                    uuid: "5"
                                                                                },
                                                                                _widgetRecordProvider: widgetsRecordProvider
                                                                            }, React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
                                                                                inputs: {
                                                                                    In_TextOptions: model.getCachedValue(idService.getId("GpxKpZqHvUeu62Ha3Enp_g.In_TextOptions"), function() {
                                                                                        return function() {
                                                                                            var rec = new UBTConnectLibraryModel.TextOptionsRec();
                                                                                            rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.small;
                                                                                            return rec;
                                                                                        }();
                                                                                    }),
                                                                                    In_Text: ("All " + model.variables.optionControlVar.optionList_ControlAttr.getCurrent(callContext.iterationContext).titleAttr)
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
                                                                                    uuid: "6",
                                                                                    alias: "5"
                                                                                },
                                                                                _widgetRecordProvider: widgetsRecordProvider,
                                                                                _dependencies: []
                                                                            }))];
                                                                        }),
                                                                        right: new PlaceholderContent(function() {
                                                                            return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
                                                                                inputs: {
                                                                                    In_IconId: UBTConnectModel.staticEntities.uBT_Icons2.chevronRight,
                                                                                    In_SizeId: UBTConnectModel.staticEntities.uBT_IconsSize.base_24,
                                                                                    In_ColorId: UBTConnectModel.staticEntities.uBT_Color.neutral7
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
                                                                                    uuid: "7",
                                                                                    alias: "6"
                                                                                },
                                                                                _widgetRecordProvider: widgetsRecordProvider,
                                                                                _dependencies: []
                                                                            })];
                                                                        })
                                                                    },
                                                                    _dependencies: [asPrimitiveValue(model.variables.optionControlVar.optionList_ControlAttr.getCurrent(callContext.iterationContext).titleAttr)]
                                                                }), $if(!(model.variables.optionControlVar.optionList_ControlAttr.getCurrent(callContext.iterationContext).selectedNamesAttr.isEmpty), false, this, function() {
                                                                    return [React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
                                                                        inputs: {
                                                                            InJustifyText: true,
                                                                            In_Text: model.variables.optionControlVar.optionList_ControlAttr.getCurrent(callContext.iterationContext).selectedNamesAttr.getCurrent(callContext.iterationContext),
                                                                            In_TextOptions: model.getCachedValue(idService.getId("C0WeTuALGU+41oHUaK5rtg.In_TextOptions"), function() {
                                                                                return function() {
                                                                                    var rec = new UBTConnectLibraryModel.TextOptionsRec();
                                                                                    rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral7;
                                                                                    rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.extraSmall;
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
                                                                            uuid: "8",
                                                                            alias: "7"
                                                                        },
                                                                        _widgetRecordProvider: widgetsRecordProvider,
                                                                        _dependencies: []
                                                                    })];
                                                                }, function() {
                                                                    return [];
                                                                })];
                                                            })
                                                        },
                                                        _dependencies: [asPrimitiveValue(model.variables.optionControlVar.optionList_ControlAttr.getCurrent(callContext.iterationContext).selectedNamesAttr.getCurrent(callContext.iterationContext)), asPrimitiveValue(model.variables.optionControlVar.optionList_ControlAttr.getCurrent(callContext.iterationContext).selectedNamesAttr.isEmpty), asPrimitiveValue(model.variables.optionControlVar.optionList_ControlAttr.getCurrent(callContext.iterationContext).titleAttr)]
                                                    })];
                                                }, callContext, idService, "1")
                                            },
                                            _dependencies: []
                                        }), React.createElement(OSWidgets.List, {
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
                                                            uuid: "10",
                                                            alias: "8"
                                                        },
                                                        _widgetRecordProvider: widgetsRecordProvider,
                                                        _dependencies: []
                                                    })];
                                                }, callContext, idService, "2")
                                            },
                                            _dependencies: []
                                        }), React.createElement(OSWidgets.List, {
                                            animateItems: true,
                                            gridProperties: {
                                                classes: "OSFillParent"
                                            },
                                            mode: /*Default*/ 0,
                                            source: model.variables.optionControlVar.optionFlatList_ControlAttr,
                                            style: "list list-group",
                                            tag: "div",
                                            _idProps: {
                                                service: idService,
                                                name: "Options_FlatList"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider,
                                            placeholders: {
                                                content: new IteratorPlaceholderContent(function(idService, callContext) {
                                                    return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                                                        inputs: {
                                                            Options: model.getCachedValue(idService.getId("Choice.Options"), function() {
                                                                return function() {
                                                                    var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                                                                    rec.backgroundAttr = function() {
                                                                        var rec = new UBTConnectLibraryModel.BackgroundOptionsRec();
                                                                        rec.backgroundColorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral0;
                                                                        return rec;
                                                                    }();
                                                                    rec.paddingSizeAttr = function() {
                                                                        var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                                                        rec.verticalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.base;
                                                                        rec.horizontalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
                                                                        return rec;
                                                                    }();
                                                                    rec.marginSizeAttr = function() {
                                                                        var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                                                        rec.bottomSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.extraSmall;
                                                                        return rec;
                                                                    }();
                                                                    rec.borderOptionsAttr = function() {
                                                                        var rec = new UBTConnectLibraryModel.BorderOptionsRec();
                                                                        rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral3;
                                                                        rec.sizeAttr = function() {
                                                                            var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                                                            rec.generalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
                                                                            return rec;
                                                                        }();
                                                                        rec.radiusAttr = function() {
                                                                            var rec = new UBTConnectLibraryModel.RadiusOptionsRec();
                                                                            rec.generalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Shape.soft;
                                                                            return rec;
                                                                        }();
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
                                                            name: "Choice",
                                                            alias: "9"
                                                        },
                                                        _widgetRecordProvider: widgetsRecordProvider,
                                                        placeholders: {
                                                            content: new PlaceholderContent(function() {
                                                                return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                                                                    inputs: {
                                                                        Options: model.getCachedValue(idService.getId("lmjMQtfgO0+nuHhop4GqBQ.Options"), function() {
                                                                            return function() {
                                                                                var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                                                                                rec.marginSizeAttr = function() {
                                                                                    var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                                                                    rec.bottomSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
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
                                                                        uuid: "13",
                                                                        alias: "10"
                                                                    },
                                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                                    placeholders: {
                                                                        content: new PlaceholderContent(function() {
                                                                            return [React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
                                                                                inputs: {
                                                                                    In_Text: model.variables.in_OptionsIn.extra_OptionFlatListsAttr.getCurrent(callContext.iterationContext).titleAttr,
                                                                                    _in_TextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_OptionsInDataFetchStatus),
                                                                                    In_TextOptions: model.getCachedValue(idService.getId("nIfgO0TzWkyPWwq5xcDozg.In_TextOptions"), function() {
                                                                                        return function() {
                                                                                            var rec = new UBTConnectLibraryModel.TextOptionsRec();
                                                                                            rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.base;
                                                                                            rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.semiBold;
                                                                                            return rec;
                                                                                        }();
                                                                                    }),
                                                                                    ExtendedClasses: "text-align-left"
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
                                                                                    uuid: "14",
                                                                                    alias: "11"
                                                                                },
                                                                                _widgetRecordProvider: widgetsRecordProvider,
                                                                                _dependencies: []
                                                                            })];
                                                                        })
                                                                    },
                                                                    _dependencies: [asPrimitiveValue(model.variables._in_OptionsInDataFetchStatus), asPrimitiveValue(model.variables.in_OptionsIn.extra_OptionFlatListsAttr.getCurrent(callContext.iterationContext).titleAttr)]
                                                                }), React.createElement(UBTConnectLibrary_ConnectPatterns_SelectionOption_List_mvc_view, {
                                                                    inputs: {
                                                                        LastItem_StyleOptions: model.getCachedValue(idService.getId("b2uQ+2JIoU2jTAFo_CNdBg.LastItem_StyleOptions"), function() {
                                                                            return function() {
                                                                                var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                                                                                rec.marginSizeAttr = function() {
                                                                                    var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                                                                    rec.bottomSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.none;
                                                                                    return rec;
                                                                                }();
                                                                                return rec;
                                                                            }();
                                                                        }),
                                                                        isMultiselect: true,
                                                                        SelectionOption_ItemList: model.variables.optionControlVar.optionFlatList_ControlAttr.getCurrent(callContext.iterationContext).in_OptionsAttr,
                                                                        Item_StyleOptions: model.getCachedValue(idService.getId("b2uQ+2JIoU2jTAFo_CNdBg.Item_StyleOptions"), function() {
                                                                            return function() {
                                                                                var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                                                                                rec.marginSizeAttr = function() {
                                                                                    var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                                                                    rec.bottomSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.base;
                                                                                    return rec;
                                                                                }();
                                                                                return rec;
                                                                            }();
                                                                        })
                                                                    },
                                                                    events: {
                                                                        _handleError: function(ex) {
                                                                            controller.handleError(ex);
                                                                        },
                                                                        onSelectionChange$Action: function(selectedItemsIn, clickedItemIdIn) {
                                                                            var eventHandlerContext = callContext.clone();
                                                                            return OS.Flow.tryFinally(function() {
                                                                                var varBag = {};
                                                                                controller.pushDebuggerContext(eventHandlerContext);

                                                                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/SelectionOption_List OnSelectionChange");
                                                                                controller.handler_ListOnSelectionChange$Action(selectedItemsIn, clickedItemIdIn, controller.callContext(eventHandlerContext));
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
                                                                        uuid: "15",
                                                                        alias: "12"
                                                                    },
                                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                                    _dependencies: []
                                                                })];
                                                            })
                                                        },
                                                        _dependencies: [asPrimitiveValue(model.variables.optionControlVar.optionFlatList_ControlAttr.getCurrent(callContext.iterationContext).in_OptionsAttr), asPrimitiveValue(model.variables._in_OptionsInDataFetchStatus), asPrimitiveValue(model.variables.in_OptionsIn.extra_OptionFlatListsAttr.getCurrent(callContext.iterationContext).titleAttr)]
                                                    })];
                                                }, callContext, idService, "3")
                                            },
                                            _dependencies: [asPrimitiveValue(model.variables._in_OptionsInDataFetchStatus), asPrimitiveValue(model.variables.in_OptionsIn.extra_OptionFlatListsAttr.getCurrent(callContext.iterationContext).titleAttr)]
                                        })];
                                    })
                                },
                                _dependencies: [asPrimitiveValue(model.variables._in_OptionsInDataFetchStatus), asPrimitiveValue(model.variables.in_OptionsIn.extra_OptionFlatListsAttr.getCurrent(callContext.iterationContext).titleAttr), asPrimitiveValue(model.variables.optionControlVar.optionFlatList_ControlAttr), asPrimitiveValue(model.variables.optionControlVar.optionChoice_ControlAttr), asPrimitiveValue(model.variables.optionControlVar.optionList_ControlAttr)]
                            })];
                        }, function() {
                            return [React.createElement(UBTConnect_App_CommonBlocks_Filter_FilterSheet_OptionList_Item_mvc_view, {
                                inputs: {
                                    Filter_Common_Control_List: model.variables.optionList_SelectedVar,
                                    ForceUpdate: model.variables.forceUpdateOptionListVar,
                                    ShowHeader: !(model.variables.isSingleFilterVar)
                                },
                                events: {
                                    _handleError: function(ex) {
                                        controller.handleError(ex);
                                    },
                                    onBack$Action: function() {
                                        var eventHandlerContext = callContext.clone();
                                        return OS.Flow.tryFinally(function() {
                                            var varBag = {};
                                            controller.pushDebuggerContext(eventHandlerContext);

                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "App_CommonBlocks_Filter/FilterSheet_OptionList_Item OnBack");
                                            controller.onClick_SelectionBack$Action(controller.callContext(eventHandlerContext));
                                        }, function() {
                                            controller.popDebuggerContext(eventHandlerContext);
                                        });

                                        ;
                                    },
                                    event_Input_OnReady$Action: function(idIn) {
                                        var eventHandlerContext = callContext.clone();
                                        return OS.Flow.tryFinally(function() {
                                            var varBag = {};
                                            controller.pushDebuggerContext(eventHandlerContext);

                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "App_CommonBlocks_Filter/FilterSheet_OptionList_Item Event_Input_OnReady");
                                            controller.handler_Input_OnReady$Action(idIn, controller.callContext(eventHandlerContext));
                                        }, function() {
                                            controller.popDebuggerContext(eventHandlerContext);
                                        });

                                        ;
                                    },
                                    onChange$Action: function(selectedIdsIn, titleIn) {
                                        var eventHandlerContext = callContext.clone();
                                        return OS.Flow.tryFinally(function() {
                                            var varBag = {};
                                            controller.pushDebuggerContext(eventHandlerContext);

                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "App_CommonBlocks_Filter/FilterSheet_OptionList_Item OnChange");
                                            controller.onChange_ListOption$Action(selectedIdsIn, titleIn, controller.callContext(eventHandlerContext));
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
                                    uuid: "16",
                                    alias: "13"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                _dependencies: []
                            })];
                        })];
                    }),
                    footer: new PlaceholderContent(function() {
                        return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                            inputs: {
                                Options: model.getCachedValue(idService.getId("74RgBcQMHUGJZclhK8WvNw.Options"), function() {
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
                                uuid: "17",
                                alias: "14"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                content: new PlaceholderContent(function() {
                                    return [React.createElement(UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, {
                                        inputs: {
                                            ColumnOptions: model.getCachedValue(idService.getId("P6duwtCrWESdBLzya0eA1Q.ColumnOptions"), function() {
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
                                            uuid: "18",
                                            alias: "15"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        placeholders: {
                                            left: new PlaceholderContent(function() {
                                                return [React.createElement(UBTConnectLibrary_ConnectPatterns_Button_mvc_view, {
                                                    inputs: {
                                                        In_IsDisabled: model.variables.optionControlVar.equals(model.variables.empty_OptionControlVar),
                                                        In_ButtonOptions: model.getCachedValue(idService.getId("dwnu1632RkOxAhtYtLopbA.In_ButtonOptions"), function() {
                                                            return function() {
                                                                var rec = new UBTConnectLibraryModel.ButtonOptionsRec();
                                                                rec.uBT_ButtonSizeIdAttr = UBTConnectModel.staticEntities.uBT_ButtonSize.small;
                                                                rec.uBT_ButtonTypeIdAttr = UBTConnectModel.staticEntities.uBT_ButtonType.scondary;
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
                                                                    return controller.onClick_ClearFilters$Action(controller.callContext(eventHandlerContext));
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
                                                        uuid: "19",
                                                        alias: "16"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                    placeholders: {
                                                        content: new PlaceholderContent(function() {
                                                            return ["Clear filters"];
                                                        })
                                                    },
                                                    _dependencies: []
                                                })];
                                            }),
                                            right: new PlaceholderContent(function() {
                                                return [React.createElement(UBTConnectLibrary_ConnectPatterns_Button_mvc_view, {
                                                    inputs: {
                                                        In_IsDisabled: model.variables.optionControlVar.equals(model.variables.lastSearched_OptionControlVar),
                                                        In_ButtonOptions: model.getCachedValue(idService.getId("Nukpm8TZgEKToktl9l30dg.In_ButtonOptions"), function() {
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
                                                        uuid: "20",
                                                        alias: "17"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                    placeholders: {
                                                        content: new PlaceholderContent(function() {
                                                            return ["Apply filters"];
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
                _dependencies: [asPrimitiveValue(model.variables.lastSearched_OptionControlVar), asPrimitiveValue(model.variables.empty_OptionControlVar), asPrimitiveValue(model.variables.isSingleFilterVar), asPrimitiveValue(model.variables.forceUpdateOptionListVar), asPrimitiveValue(model.variables.optionList_SelectedVar), asPrimitiveValue(model.variables.optionControlVar), asPrimitiveValue(model.variables._in_OptionsInDataFetchStatus), asPrimitiveValue(model.variables.localCacheControl_AllCountriesVar.isFetchedAttr), asPrimitiveValue(model.variables.in_OptionsIn.extra_OptionFlatListsAttr.getCurrent(callContext.iterationContext).titleAttr), asPrimitiveValue(model.variables.in_OptionsIn.hasCountriesAttr.enableAttr), asPrimitiveValue(model.variables.in_OptionsIn.hasLocalitiesAttr.enableAttr), asPrimitiveValue(model.variables.localCacheControl_UserInfoVar.isFetchedAttr), asPrimitiveValue(model.variables.localCacheControl_AllLocalitiesVar.isFetchedAttr), asPrimitiveValue(model.variables.subState_MainVar), asPrimitiveValue(model.variables.subState_SelectedVar)]
            }), $if(model.variables.in_OptionsIn.hasCountriesAttr.enableAttr, false, this, function() {
                return [React.createElement(UBTConnect_Utils_CacheControl_CacheControl_AllCountries_mvc_view, {
                    inputs: {},
                    events: {
                        _handleError: function(ex) {
                            controller.handleError(ex);
                        },
                        result$Action: function(cacheControl_ResponseIn) {
                            var eventHandlerContext = callContext.clone();
                            return OS.Flow.tryFinally(function() {
                                var varBag = {};
                                controller.pushDebuggerContext(eventHandlerContext);

                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "CacheControl/CacheControl_AllCountries Result");
                                controller.cacheControl_AllCountriesResult$Action(cacheControl_ResponseIn, controller.callContext(eventHandlerContext));
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
                        uuid: "21",
                        alias: "18"
                    },
                    _widgetRecordProvider: widgetsRecordProvider,
                    _dependencies: []
                })];
            }, function() {
                return [];
            }), $if(model.variables.in_OptionsIn.hasLocalitiesAttr.enableAttr, false, this, function() {
                return [React.createElement(UBTConnect_Utils_CacheControl_CacheControl_AllLocalities_mvc_view, {
                    inputs: {},
                    events: {
                        _handleError: function(ex) {
                            controller.handleError(ex);
                        },
                        result$Action: function(cacheControl_ResponseIn) {
                            var eventHandlerContext = callContext.clone();
                            return OS.Flow.tryFinally(function() {
                                var varBag = {};
                                controller.pushDebuggerContext(eventHandlerContext);

                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "CacheControl/CacheControl_AllLocalities Result");
                                controller.cacheControl_AllLocalitiesResult$Action(cacheControl_ResponseIn, controller.callContext(eventHandlerContext));
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
                        uuid: "22",
                        alias: "19"
                    },
                    _widgetRecordProvider: widgetsRecordProvider,
                    _dependencies: []
                })];
            }, function() {
                return [];
            }), $if((model.variables.in_OptionsIn.hasCountriesAttr.enableAttr || model.variables.in_OptionsIn.hasLocalitiesAttr.enableAttr), false, this, function() {
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
                        uuid: "23",
                        alias: "20"
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
                    uuid: "24",
                    alias: "21"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                _dependencies: []
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);

    return View;
});
define("UBTConnect.App_CommonBlocks_Filter.FilterSheet.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "APIDomain_Directory_IS.model", "UBTConnectLibrary.controller", "UBTConnect_Utils.model", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "NavigationHandler.controller", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.App_CommonBlocks_Filter.FilterSheet.mvc$debugger", "UBTConnect.model$Filter_Common_Control_ListRec", "UBTConnect.model$CacheControl_AllCountriesBooleanRecord", "UBTConnect.model$CacheControl_AllLocalitiesBooleanRecord", "UBTConnect.model$BooleanDirectory_UserCurrentRecord", "UBTConnect.model$Filter_Common_Control_ListListFilter_Common_Control_ListListFilter_Common_Control_ChoiceListRecord", "UBTConnect.model$Filter_CommonRec", "UBTConnect.model$Filter_Common_OptionsRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnect.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.model$InlineIconRec", "UBTConnect.model$Filter_Common_Control_ChoiceRec", "UBTConnectLibrary.model$SelectionOption_ItemRec", "UBTConnect.model$SelectionOption_ItemList", "UBTConnectLibrary.model$ButtonOptionsRec", "APIDomain_Directory_IS.model$Directory_UserCurrentRec", "UBTConnect.referencesHealth$APIDomain_Directory_IS", "UBTConnectLibrary.controller$Input_ClearString", "UBTConnect_Utils.model$CacheControl_AllCountriesRec", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTConnect_Utils.model$UI_CountryDetailsRec", "UBTConnect.model$UI_CountryDetails2List", "UBTConnect.controller$App_CommonFilter_DefineOptionNames", "UBTConnect.model$TextTextLongIntegerRecordList", "UBTConnect.controller$App_CommonFilter_CheckCountry", "UBTConnect.model$Filter_Common_Control_ListList", "OutSystemsUI_2_23.model$ErrorMessageRec", "UBTConnect.referencesHealth$OutSystemsUI_2_23", "OutSystemsUI_2_23.controller$BottomSheetClose", "NavigationHandler.controller$PreventNavigation", "UBTConnect.referencesHealth$NavigationHandler", "UBTConnect.model$Filter_Common_Control_ChoiceList", "UBTConnect_Utils.model$UI_LocalityDetailsRec", "UBTConnect.model$UI_LocalityDetailsList", "UBTConnect_Utils.model$CacheControl_AllLocalitiesRec"], function(OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, APIDomain_Directory_ISModel, UBTConnectLibraryController, UBTConnect_UtilsModel, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, NavigationHandlerController, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_App_CommonBlocks_Filter_FilterSheet_mvc_Debugger) {
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
        Controller.prototype._action_Define_OptionControl_Last$Action = function(isFromApplyIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Action_Define_OptionControl_Last");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.App_CommonBlocks_Filter.FilterSheet.Action_Define_OptionControl_Last$vars"))());
            vars.value.isFromApplyInLocal = isFromApplyIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:ll+EBwHtZE+sW80fBwxXWQ:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.puW55n9l7EKEPdI6ZSmT8A/ClientActions.ll+EBwHtZE+sW80fBwxXWQ:nmc4pszsjaR8zBSEPQAqWQ", "UBTConnect", "Action_Define_OptionControl_Last", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:VM1Gnu7QiUuS7XOkio2SDQ", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:9Me1rZNUhky9LOe8x+aq+w", callContext.id);
                // LastSearched_OptionControl = OptionControl
                model.variables.lastSearched_OptionControlVar = model.variables.optionControlVar;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:mpBGvQaG5USE_3GeZ7fDLA", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:ll+EBwHtZE+sW80fBwxXWQ", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.App_CommonBlocks_Filter.FilterSheet.Action_Define_OptionControl_Last$vars", [{
            name: "isFromApply",
            attrName: "isFromApplyInLocal",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);
        Controller.prototype._cacheControl_UserInfo_WrapperResult$Action = function(userInformationIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("CacheControl_UserInfo_WrapperResult");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.App_CommonBlocks_Filter.FilterSheet.CacheControl_UserInfo_WrapperResult$vars"))());
            vars.value.userInformationInLocal = userInformationIn.clone();
            varBag.callContext = callContext;
            varBag.vars = vars;
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:GwMWG5jMdkq93ZhQOLTvZA:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.puW55n9l7EKEPdI6ZSmT8A/ClientActions.GwMWG5jMdkq93ZhQOLTvZA:P4H5O49JNE7HhHnkYKJmBA", "UBTConnect", "CacheControl_UserInfo_WrapperResult", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:p6qX_StUKUOWy_xBga_2VA", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                // LocalCacheControl_UserInfo
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:PSrQvI9ad0GvMluW07YVLg", callContext.id);
                // LocalCacheControl_UserInfo.Directory_UserCurrent = UserInformation
                model.variables.localCacheControl_UserInfoVar.directory_UserCurrentAttr = vars.value.userInformationInLocal;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:PSrQvI9ad0GvMluW07YVLg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                // LocalCacheControl_UserInfo.isFetched = True
                model.variables.localCacheControl_UserInfoVar.isFetchedAttr = true;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:FFF2Rvu59UuXNQNkrZ11NQ", callContext.id);
                // Execute Action: Action_Define_Countries
                controller._action_Define_Countries$Action(callContext);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:u0zdavOaE0Ok7UzSmZsW_A", callContext.id);
                // Execute Action: Action_Define_Localities
                controller._action_Define_Localities$Action(callContext);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:eiFYcb5w+USgiSA1NnJKsA", callContext.id);
                // HasFiltersOtherThanLocality = notIn_Options.Extra_OptionLists.Empty or notIn_Options.Extra_OptionChoices.Empty or In_Options.HasSorting.Enable
                vars.value.hasFiltersOtherThanLocalityVar = ((!(model.variables.in_OptionsIn.extra_OptionListsAttr.isEmpty) || !(model.variables.in_OptionsIn.extra_OptionChoicesAttr.isEmpty)) || model.variables.in_OptionsIn.hasSortingAttr.enableAttr);
                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:LG4JpVWtx0+auF54RXULwQ", callContext.id) && vars.value.hasFiltersOtherThanLocalityVar)) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:nIdgrIaV+0GVwxTVioiV_w", callContext.id);
                    // ShowSubscriptionOnClick = False
                    vars.value.showSubscriptionOnClickVar = false;
                } else {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:q2MtXS5YR0qZtQy7_VWi8w", callContext.id);
                    // ShowSubscriptionOnClick = UserInformation.Directory_UserCurrent_Subscription.SubscriptionType = Free
                    vars.value.showSubscriptionOnClickVar = (vars.value.userInformationInLocal.directory_UserCurrent_SubscriptionAttr.subscriptionTypeAttr === UBTConnectModel.staticEntities.connect_Subscription_Plan.free);
                }

                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Hyl3CAEWh0mZV1L8W2Pr8A", callContext.id);
                // Trigger Event: Loaded
                return controller.loaded$Action(vars.value.showSubscriptionOnClickVar, callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:TGf8KtqFxkyYTaRWe2JyRw", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:GwMWG5jMdkq93ZhQOLTvZA", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:GwMWG5jMdkq93ZhQOLTvZA", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("UBTConnect.App_CommonBlocks_Filter.FilterSheet.CacheControl_UserInfo_WrapperResult$vars", [{
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
        Controller.prototype._bottomSheetOnToggle$Action = function(isOpenIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("BottomSheetOnToggle");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.App_CommonBlocks_Filter.FilterSheet.BottomSheetOnToggle$vars"))());
            vars.value.isOpenInLocal = isOpenIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:K9t0GxtIBk6FxziXxY9RJg:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.puW55n9l7EKEPdI6ZSmT8A/ClientActions.K9t0GxtIBk6FxziXxY9RJg:N5u57w7dDT+eESTHPYnbIA", "UBTConnect", "BottomSheetOnToggle", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:2rNzZmmtS0eLIp30kP8MXw", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:0FFuWd88s0mFzdmww68N0Q", callContext.id);
                // isOpen_Local = IsOpen
                model.variables.isOpen_LocalVar = vars.value.isOpenInLocal;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:C+896+D5OEyAN6c6tFhtug", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:K9t0GxtIBk6FxziXxY9RJg", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.App_CommonBlocks_Filter.FilterSheet.BottomSheetOnToggle$vars", [{
            name: "IsOpen",
            attrName: "isOpenInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
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
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:_5ksHewjj0ituixRpM4IKw:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.puW55n9l7EKEPdI6ZSmT8A/ClientActions._5ksHewjj0ituixRpM4IKw:iLwzsM5KlHZl3wuh7wZrJg", "UBTConnect", "ScreenEvent_OnParametersChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:vXQcnMHjvkCkx9tigASBUA", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:F_uKzS_A30CtV1HbExJHOA", callContext.id);
                // Execute Action: Action_Define_OptionControl
                controller._action_Define_OptionControl$Action(callContext);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:pj2O14v270Cn0_2HldtWBA", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:_5ksHewjj0ituixRpM4IKw", callContext.id);
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
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:IuMZHstZIUecr59BCNEu1A:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.puW55n9l7EKEPdI6ZSmT8A/ClientActions.IuMZHstZIUecr59BCNEu1A:YVBbmUOaGQx3NpvSXLJaEQ", "UBTConnect", "Action_ClearSearchString", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:BLXs9Ujmv0KYt1CNeiI3hA", callContext.id);
                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:24TxhN1shEWLyyTfmQLfrA", callContext.id) && ((model.variables.searchInputIdVar) !== ("")))) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:UzstC3fGpEm9NgiR8k5TvQ", callContext.id);
                    // Execute Action: Input_ClearString
                    UBTConnectLibraryController.default.input_ClearString$Action(model.variables.searchInputIdVar, false, callContext);
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:nVyQCApZIE6vbiTI37wrmg", callContext.id);
                } else {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:nVyQCApZIE6vbiTI37wrmg", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:IuMZHstZIUecr59BCNEu1A", callContext.id);
            }

        };
        Controller.prototype._onClick_ClearFilters$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnClick_ClearFilters");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:VcDYKbkrq0GMuQXe8LK19w:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.puW55n9l7EKEPdI6ZSmT8A/ClientActions.VcDYKbkrq0GMuQXe8LK19w:FxJw1LQ0zo_2DnHMUC8oJw", "UBTConnect", "OnClick_ClearFilters", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:MkeTSIX3CUO3hYNPjUrTVA", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:r30PjD7GoUGU1FTijZzxKg", callContext.id);
                // OptionControl = Empty_OptionControl
                model.variables.optionControlVar = model.variables.empty_OptionControlVar;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:D7_XdrBlyUyRI9dEpy0H5w", callContext.id);
                // Execute Action: ListClear
                OS.SystemActions.listClear(model.variables.optionList_SelectedVar.selectedIdsAttr, callContext);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:n3hAbEpsP0GyZNB21ZAMhA", callContext.id);
                // Execute Action: ListClear2
                OS.SystemActions.listClear(model.variables.optionList_SelectedVar.selectedNamesAttr, callContext);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:E95+0yr1LkSxQX4nynqL9A", callContext.id);
                // Execute Action: OnClick_Apply
                return controller._onClick_Apply$Action(callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:TzZpAlLdjkyi6oquL2mNug", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:VcDYKbkrq0GMuQXe8LK19w", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:VcDYKbkrq0GMuQXe8LK19w", callContext.id);
                throw ex;

            });
        };
        Controller.prototype._cacheControl_AllCountriesResult$Action = function(cacheControl_ResponseIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("CacheControl_AllCountriesResult");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.App_CommonBlocks_Filter.FilterSheet.CacheControl_AllCountriesResult$vars"))());
            vars.value.cacheControl_ResponseInLocal = cacheControl_ResponseIn.clone();
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:6k6dNjcdxEaO1Wr2DSbeCg:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.puW55n9l7EKEPdI6ZSmT8A/ClientActions.6k6dNjcdxEaO1Wr2DSbeCg:UOSNnjZEjpLwBytIXrhPIg", "UBTConnect", "CacheControl_AllCountriesResult", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:NtzemjoTu0+2GmiYkg0ymQ", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:_Fl2ZMxMVEGrwyDLHJbdFw", callContext.id);
                // LocalCacheControl_AllCountries = CacheControl_Response
                model.variables.localCacheControl_AllCountriesVar = OS.DataConversion.JSConversions.typeConvertRecord(vars.value.cacheControl_ResponseInLocal, new UBTConnectModel.CacheControl_AllCountriesBooleanRecord(), function(source, target) {
                    target.cacheControl_AllCountriesAttr.countryListAttr = source.countryListAttr;
                    target.isFetchedAttr = true;
                    return target;
                });
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:zPKVoAeVh0OOCTLCk+8Msw", callContext.id);
                // Execute Action: Action_Define_Countries
                controller._action_Define_Countries$Action(callContext);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:hMnUClELHEOeV6+ThaZF9w", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:6k6dNjcdxEaO1Wr2DSbeCg", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.App_CommonBlocks_Filter.FilterSheet.CacheControl_AllCountriesResult$vars", [{
            name: "CacheControl_Response",
            attrName: "cacheControl_ResponseInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Record,
            defaultValue: function() {
                return new UBTConnect_UtilsModel.CacheControl_AllCountriesRec();
            },
            complexType: UBTConnect_UtilsModel.CacheControl_AllCountriesRec
        }]);
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
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:6OVeQLhM0U20TTaVi6DQVQ:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.puW55n9l7EKEPdI6ZSmT8A/ClientActions.6OVeQLhM0U20TTaVi6DQVQ:kjEi_SHBCVDyWAnPuMAXJQ", "UBTConnect", "Action_SetSingleFilter", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:fpPux5GzPUmsmEg+FAletg", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:cKJraczkekq8mvELg7ju7g", callContext.id);
                // isSingleFilter = OptionControl.OptionChoice_Control.Length + OptionControl.OptionList_Control.Length = 1
                model.variables.isSingleFilterVar = ((model.variables.optionControlVar.optionChoice_ControlAttr.length + model.variables.optionControlVar.optionList_ControlAttr.length) === 1);
                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:k4hNZl1ISkilgpsUjK7mHg", callContext.id) && model.variables.isSingleFilterVar)) {
                    // OptionList?
                    if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:5NQ0CWEfu0G_8jtRcA_DKw", callContext.id) && model.variables.optionControlVar.optionList_ControlAttr.isEmpty)) {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Lug4QP_4X0+DSUC2H91ydg", callContext.id);
                    } else {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:HjiDMZBVp0GLJQKDoNxn3g", callContext.id);
                        // SubState_Selected = OptionControl.OptionList_Control.Current.Title
                        model.variables.subState_SelectedVar = model.variables.optionControlVar.optionList_ControlAttr.getCurrent(callContext.iterationContext).titleAttr;
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:HjiDMZBVp0GLJQKDoNxn3g", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                        // OptionList_Selected = OptionControl.OptionList_Control.Current
                        model.variables.optionList_SelectedVar = model.variables.optionControlVar.optionList_ControlAttr.getCurrent(callContext.iterationContext);
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Lug4QP_4X0+DSUC2H91ydg", callContext.id);
                    }

                } else {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:KCrrH+F6DUCQfNy5k3VvqA", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:6OVeQLhM0U20TTaVi6DQVQ", callContext.id);
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
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.App_CommonBlocks_Filter.FilterSheet.BottomSheetInitialized$vars"))());
            vars.value.idInLocal = idIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:rNKxRhtDl0Wen2ovb0xlaQ:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.puW55n9l7EKEPdI6ZSmT8A/ClientActions.rNKxRhtDl0Wen2ovb0xlaQ:_PI80nqSaKc2Kjt4zVAJ6A", "UBTConnect", "BottomSheetInitialized", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ZseiMySLzkSg1+mAqGnJpg", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:PhYkmPDhY0G849_mBvOg3Q", callContext.id);
                // BottomSheetId = Id
                model.variables.bottomSheetIdVar = vars.value.idInLocal;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:+aTSkQm5o0WHDynkxjVAKg", callContext.id);
                // Trigger Event: SheetInitialized
                return controller.sheetInitialized$Action(vars.value.idInLocal, callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:_CUudjzyIECXfvXimpAIFA", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:rNKxRhtDl0Wen2ovb0xlaQ", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:rNKxRhtDl0Wen2ovb0xlaQ", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("UBTConnect.App_CommonBlocks_Filter.FilterSheet.BottomSheetInitialized$vars", [{
            name: "Id",
            attrName: "idInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.prototype._action_Define_Countries$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Action_Define_Countries");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.App_CommonBlocks_Filter.FilterSheet.Action_Define_Countries$vars"))());
            var app_CommonFilter_DefineOptionNamesVar = new OS.DataTypes.VariableHolder();
            var positionVar = new OS.DataTypes.VariableHolder();
            var app_CommonFilter_CheckCountryVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.vars = vars;
            varBag.app_CommonFilter_DefineOptionNamesVar = app_CommonFilter_DefineOptionNamesVar;
            varBag.positionVar = positionVar;
            varBag.app_CommonFilter_CheckCountryVar = app_CommonFilter_CheckCountryVar;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:a0bERhpuC0CFWlK5iAAAjQ:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.puW55n9l7EKEPdI6ZSmT8A/ClientActions.a0bERhpuC0CFWlK5iAAAjQ:X5FFNt_u7bGg+Ss0AnOpCA", "UBTConnect", "Action_Define_Countries", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:939zkDdPZ0eZjfx3TzhwNA", callContext.id);
                // HasData
                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:5vvwP98KlkG7pxZ9zVhZeA", callContext.id) && ((model.variables.localCacheControl_AllCountriesVar.isFetchedAttr && model.variables.localCacheControl_UserInfoVar.isFetchedAttr) && ((model.variables.localCacheControl_UserInfoVar.directory_UserCurrentAttr.directory_UserCurrent_SubscriptionAttr.subscriptionTypeAttr) !== (UBTConnectModel.staticEntities.connect_Subscription_Plan.free))))) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:hN7Go9TvLk6bahYPJbQOuw", callContext.id);
                    // LocalFilter_SelectionControls.Title = SubState_Countries
                    vars.value.localFilter_SelectionControlsVar.titleAttr = model.variables.subState_CountriesVar;
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:hN7Go9TvLk6bahYPJbQOuw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                    // LocalFilter_SelectionControls.In_Options = LocalCacheControl_AllCountries.CacheControl_AllCountries.CountryList
                    vars.value.localFilter_SelectionControlsVar.in_OptionsAttr = OS.DataConversion.JSConversions.typeConvertRecordList(model.variables.localCacheControl_AllCountriesVar.cacheControl_AllCountriesAttr.countryListAttr, new UBTConnectModel.SelectionOption_ItemList(), function(source, target) {
                        target.idAttr = source.countryCodeAttr;
                        target.displayTextAttr = source.countryNameAttr;
                        target.countryCodeAttr = source.countryCodeAttr;
                        return target;
                    });
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:hN7Go9TvLk6bahYPJbQOuw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
                    // LocalFilter_SelectionControls.Order = In_Options.HasCountries.Order
                    vars.value.localFilter_SelectionControlsVar.orderAttr = model.variables.in_OptionsIn.hasCountriesAttr.orderAttr;
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:hN7Go9TvLk6bahYPJbQOuw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
                    // LocalFilter_SelectionControls.AddAllOptions = In_Options.HasCountries.AddAllOptions
                    vars.value.localFilter_SelectionControlsVar.addAllOptionsAttr = model.variables.in_OptionsIn.hasCountriesAttr.addAllOptionsAttr;
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:hN7Go9TvLk6bahYPJbQOuw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
                    // LocalFilter_SelectionControls.SheetTitle = "Country"
                    vars.value.localFilter_SelectionControlsVar.sheetTitleAttr = "Country";
                    if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:HWcwZ9kNmkSF7WVGitr_hA", callContext.id) && model.variables.in_StartFilterIn.countryIdsAttr.isEmpty)) {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:S2p9NH7PWUWHPgvRYlltoQ", callContext.id);
                        // Execute Action: AppenAllOption
                        OS.SystemActions.listAppend(vars.value.localFilter_SelectionControlsVar.selectedIdsAttr, UBTConnectModel.staticEntities.choice.none, callContext);
                    } else {
                        // Foreach In_StartFilter.CountryIds
                        callContext.iterationContext.registerIterationStart(model.variables.in_StartFilterIn.countryIdsAttr);
                        try {
                            var countryIdsIterator = callContext.iterationContext.getIterator(model.variables.in_StartFilterIn.countryIdsAttr);
                            var countryIdsIndex = 0;
                            while ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:OEaQYYhOSkOuWVP7LIB+Og", callContext.id) && (countryIdsIndex < model.variables.in_StartFilterIn.countryIdsAttr.length))) {
                                countryIdsIterator.currentRowNumber = countryIdsIndex;
                                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:wlQlXXZiyUeNykrkn8bNJA", callContext.id);
                                // Execute Action: ListAppend
                                OS.SystemActions.listAppend(vars.value.localFilter_SelectionControlsVar.selectedIdsAttr, model.variables.in_StartFilterIn.countryIdsAttr.getItem(countryIdsIndex.valueOf()), callContext);
                                countryIdsIndex++;
                            }

                        } finally {
                            callContext.iterationContext.registerIterationEnd(model.variables.in_StartFilterIn.countryIdsAttr);
                        }

                    }

                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:IoJVSL1+P0mMxtMaeRFkNg", callContext.id);
                    // Execute Action: App_CommonFilter_DefineOptionNames
                    app_CommonFilter_DefineOptionNamesVar.value = UBTConnectController.default.app_CommonFilter_DefineOptionNames$Action(vars.value.localFilter_SelectionControlsVar, callContext);

                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:+tJZcWaPqEqhCmNHrUQMBA", callContext.id);
                    // LocalFilter_SelectionControls = App_CommonFilter_DefineOptionNames.Formatted
                    vars.value.localFilter_SelectionControlsVar = app_CommonFilter_DefineOptionNamesVar.value.formattedOut;
                    // Not Global?
                    if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:xKEoZfERNUalvjTuhphE3A", callContext.id) && ((model.variables.localCacheControl_UserInfoVar.directory_UserCurrentAttr.directory_UserCurrent_SubscriptionAttr.subscriptionTypeAttr) !== (UBTConnectModel.staticEntities.connect_Subscription_Plan.global)))) {
                        // Foreach LocalFilter_SelectionControls.In_Options
                        callContext.iterationContext.registerIterationStart(vars.value.localFilter_SelectionControlsVar.in_OptionsAttr);
                        try {
                            var in_OptionsIterator = callContext.iterationContext.getIterator(vars.value.localFilter_SelectionControlsVar.in_OptionsAttr);
                            var in_OptionsIndex = 0;
                            while ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:3y3NarYO30ictzI3N8+2ZA", callContext.id) && (in_OptionsIndex < vars.value.localFilter_SelectionControlsVar.in_OptionsAttr.length))) {
                                in_OptionsIterator.currentRowNumber = in_OptionsIndex;
                                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:4Pky8EWwFk2NRo15ps87pQ", callContext.id);
                                // Execute Action: App_CommonFilter_CheckCountry
                                app_CommonFilter_CheckCountryVar.value = UBTConnectController.default.app_CommonFilter_CheckCountry$Action(vars.value.localFilter_SelectionControlsVar.in_OptionsAttr.getItem(in_OptionsIndex.valueOf()).idAttr, model.variables.localCacheControl_UserInfoVar.directory_UserCurrentAttr.directory_UserCurrent_SubscriptionAttr.subscribedCountriesAttr, callContext);

                                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:e+pOQ2GtjkClBXuhJ_E5Ag", callContext.id);
                                // LocalFilter_SelectionControls.In_Options.Current.isEnabled = App_CommonFilter_CheckCountry.IsEnabled
                                vars.value.localFilter_SelectionControlsVar.in_OptionsAttr.getItem(in_OptionsIndex.valueOf()).isEnabledAttr = app_CommonFilter_CheckCountryVar.value.isEnabledOut;
                                in_OptionsIndex++;
                            }

                        } finally {
                            callContext.iterationContext.registerIterationEnd(vars.value.localFilter_SelectionControlsVar.in_OptionsAttr);
                        }

                    }

                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:_k0s3WQUcU2NlnQH25z1jw", callContext.id);
                    // Execute Action: Position
                    positionVar.value = OS.SystemActions.listIndexOf(model.variables.optionControlVar.optionList_ControlAttr, function(p) {
                        return (p.titleAttr === model.variables.subState_CountriesVar);
                    }, callContext);

                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:38B1XKKh2UWne5gR4xfYgg", callContext.id);
                    // Execute Action: ListSort
                    OS.SystemActions.listSort(vars.value.localFilter_SelectionControlsVar.in_OptionsAttr, function(p) {
                        return p.displayTextAttr;
                    }, true, callContext);
                    // AlreadyHasElement
                    if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:GYTv7QSV+kaZxNaqzl0Jzg", callContext.id) && (positionVar.value.positionOut >= 0))) {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:IqTbSH+VIE6TSoSHUkaWcA", callContext.id);
                        // OptionControl.OptionList_Control[Position.Position] = LocalFilter_SelectionControls
                        model.variables.optionControlVar.optionList_ControlAttr.setItem(positionVar.value.positionOut, vars.value.localFilter_SelectionControlsVar);
                    } else {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:8S3GpYPBVkCb5Pyk0PwOtQ", callContext.id);
                        // Execute Action: ListAppend3
                        OS.SystemActions.listAppend(model.variables.optionControlVar.optionList_ControlAttr, vars.value.localFilter_SelectionControlsVar, callContext);
                    }

                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:FPYbI_ek20ikkx1A1o1Bwg", callContext.id);
                    // Execute Action: Action_FilterLocalitiesByCountry
                    controller._action_FilterLocalitiesByCountry$Action(callContext);
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:CKx1bmT5XUORmWDikcy+JQ", callContext.id);
                    // Execute Action: Action_Define_OptionControl_Last
                    controller._action_Define_OptionControl_Last$Action(false, callContext);
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:6Ojs+3xuDEalRlgtNAM6uQ", callContext.id);
                    // Execute Action: Action_DefineOptionControl_Empty
                    controller._action_DefineOptionControl_Empty$Action(callContext);
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:UY5RY8KXPkCyaIXHOaSCLw", callContext.id);
                } else {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:UCv0yM5Vs0CCU24GKecaFQ", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:a0bERhpuC0CFWlK5iAAAjQ", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.App_CommonBlocks_Filter.FilterSheet.Action_Define_Countries$vars", [{
            name: "LocalFilter_SelectionControls",
            attrName: "localFilter_SelectionControlsVar",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Record,
            defaultValue: function() {
                return new UBTConnectModel.Filter_Common_Control_ListRec();
            },
            complexType: UBTConnectModel.Filter_Common_Control_ListRec
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
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.App_CommonBlocks_Filter.FilterSheet.Handler_BackNavigation$vars"))());
            vars.value.backNavigationEventInLocal = backNavigationEventIn;
            var bottomSheetCloseVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.vars = vars;
            varBag.bottomSheetCloseVar = bottomSheetCloseVar;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:HWqoXgC_x0ug1LOApaHGag:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.puW55n9l7EKEPdI6ZSmT8A/ClientActions.HWqoXgC_x0ug1LOApaHGag:vr6cTwDVod9lAwm1LPNMxA", "UBTConnect", "Handler_BackNavigation", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:bz0+ggp61k2P3Sr_pQUSuA", callContext.id);
                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Cuzh4A3vWEWbZLt0T+dQbg", callContext.id) && model.variables.isOpen_LocalVar)) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:f2ro1H+hsUaXYo14bjhqzA", callContext.id);
                    // Execute Action: BottomSheetClose
                    bottomSheetCloseVar.value = OutSystemsUI_2_23Controller.default.bottomSheetClose$Action(model.variables.bottomSheetIdVar, callContext);

                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:0mVC+iLQyUqpMZP9PbvQgA", callContext.id);
                    // Execute Action: PreventNavigation
                    NavigationHandlerController.default.preventNavigation$Action(vars.value.backNavigationEventInLocal, callContext);
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:waGuRo6o7UW67n97mg+uhQ", callContext.id);
                } else {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:xB7rfa4N2EiPgTiFOEZ_QA", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:HWqoXgC_x0ug1LOApaHGag", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.App_CommonBlocks_Filter.FilterSheet.Handler_BackNavigation$vars", [{
            name: "BackNavigationEvent",
            attrName: "backNavigationEventInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Object,
            defaultValue: function() {
                return null;
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
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:FDdYaR1wHEWGomI3PpEmBQ:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.puW55n9l7EKEPdI6ZSmT8A/ClientActions.FDdYaR1wHEWGomI3PpEmBQ:cTyFYKiTpoBwP29Smy0eBA", "UBTConnect", "Action_Define_OptionControl", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Jjvfl5U6uEioYy7mgxtvig", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Mep4qa1_Xk+wFeOTJrGBVw", callContext.id);
                // OptionControl.OptionList_Control = In_Options.Extra_OptionLists
                model.variables.optionControlVar.optionList_ControlAttr = model.variables.in_OptionsIn.extra_OptionListsAttr;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Mep4qa1_Xk+wFeOTJrGBVw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                // OptionControl.OptionChoice_Control = In_Options.Extra_OptionChoices
                model.variables.optionControlVar.optionChoice_ControlAttr = model.variables.in_OptionsIn.extra_OptionChoicesAttr;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Mep4qa1_Xk+wFeOTJrGBVw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
                // OptionControl.OptionFlatList_Control = In_Options.Extra_OptionFlatLists
                model.variables.optionControlVar.optionFlatList_ControlAttr = model.variables.in_OptionsIn.extra_OptionFlatListsAttr;
                // Countries
                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:6Kr+Fpy3tEyc1X04mHayOg", callContext.id) && model.variables.in_OptionsIn.hasCountriesAttr.enableAttr)) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:+EsktmEUi0i20wUtKZKoCg", callContext.id);
                    // Execute Action: Action_Define_Countries
                    controller._action_Define_Countries$Action(callContext);
                }

                // Localities
                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:EdS+Xw9jvkezo+pxr4LceA", callContext.id) && model.variables.in_OptionsIn.hasLocalitiesAttr.enableAttr)) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:s7syZPSFr0iX2FSNwTKciQ", callContext.id);
                    // Execute Action: Action_Define_Localities
                    controller._action_Define_Localities$Action(callContext);
                }

                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:uajUfpgsS0CMESS5N9Fh0w", callContext.id) && model.variables.in_OptionsIn.hasSortingAttr.enableAttr)) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:+SQF3rSpKEKnxHZF1nvKXw", callContext.id);
                    // Execute Action: Action_DefineSortBy
                    controller._action_DefineSortBy$Action(callContext);
                }

                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:xdGucD3+oUW8DqHO2Q65jA", callContext.id);
                // Execute Action: ListSort
                OS.SystemActions.listSort(model.variables.optionControlVar.optionChoice_ControlAttr, function(p) {
                    return p.orderAttr;
                }, true, callContext);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:SHvCTkAd4UOKkkRQmVDHJQ", callContext.id);
                // Execute Action: ListSort2
                OS.SystemActions.listSort(model.variables.optionControlVar.optionList_ControlAttr, function(p) {
                    return p.orderAttr;
                }, true, callContext);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:zyPvMrHlKUezBmkqBhhu3g", callContext.id);
                // Execute Action: ListSort3
                OS.SystemActions.listSort(model.variables.optionControlVar.optionFlatList_ControlAttr, function(p) {
                    return p.orderAttr;
                }, true, callContext);
                // Has Year Flat List Options
                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:_tjGiMDOGU610EPe22DRog", callContext.id) && !(model.variables.in_OptionsIn.extra_OptionFlatListsAttr.getCurrent(callContext.iterationContext).in_OptionsAttr.isEmpty))) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:BlFWgJBCm0+B2OB8nbuwpQ", callContext.id);
                }

                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Ar9jMkxJGU2AtuS3cCLqgQ", callContext.id);
                // Execute Action: Action_Define_OptionControlVars
                controller._action_Define_OptionControl_Last$Action(false, callContext);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:_cOWWlMHSkecr2iABjQeeA", callContext.id);
                // Execute Action: Action_DefineOptionControl_Empty
                controller._action_DefineOptionControl_Empty$Action(callContext);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:wnuL_rzmQ0GLjpGBgueycw", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:FDdYaR1wHEWGomI3PpEmBQ", callContext.id);
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
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.App_CommonBlocks_Filter.FilterSheet.Action_Define_Localities$vars"))());
            var app_CommonFilter_DefineOptionNamesVar = new OS.DataTypes.VariableHolder();
            var positionVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.vars = vars;
            varBag.app_CommonFilter_DefineOptionNamesVar = app_CommonFilter_DefineOptionNamesVar;
            varBag.positionVar = positionVar;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:V9fgawtNwkemdoRCWgaH_A:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.puW55n9l7EKEPdI6ZSmT8A/ClientActions.V9fgawtNwkemdoRCWgaH_A:A6GLcI8ygRQ8WmcqFWLVCQ", "UBTConnect", "Action_Define_Localities", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:DIAFQol9Q068aG75O5qL2A", callContext.id);
                // HasData
                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:rBWc0oW7Ake5vfywV0gohA", callContext.id) && ((model.variables.localCacheControl_AllLocalitiesVar.isFetchedAttr && model.variables.localCacheControl_UserInfoVar.isFetchedAttr) && ((model.variables.localCacheControl_UserInfoVar.directory_UserCurrentAttr.directory_UserCurrent_SubscriptionAttr.subscriptionTypeAttr) !== (UBTConnectModel.staticEntities.connect_Subscription_Plan.free))))) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:U3IIGffup0iou+A9eX1lkg", callContext.id);
                    // LocalFilter_SelectionControls.Title = SubState_Localities
                    vars.value.localFilter_SelectionControlsVar.titleAttr = model.variables.subState_LocalitiesVar;
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:U3IIGffup0iou+A9eX1lkg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                    // LocalFilter_SelectionControls.In_Options = LocalCacheControl_AllLocalities.CacheControl_AllLocalities.LocalityList
                    vars.value.localFilter_SelectionControlsVar.in_OptionsAttr = OS.DataConversion.JSConversions.typeConvertRecordList(model.variables.localCacheControl_AllLocalitiesVar.cacheControl_AllLocalitiesAttr.localityListAttr, new UBTConnectModel.SelectionOption_ItemList(), function(source, target) {
                        target.idAttr = source.localityIdAttr;
                        target.displayTextAttr = source.nameAttr;
                        target.countryCodeAttr = source.countryCodeAttr;
                        return target;
                    });
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:U3IIGffup0iou+A9eX1lkg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
                    // LocalFilter_SelectionControls.Order = In_Options.HasSorting.Order
                    vars.value.localFilter_SelectionControlsVar.orderAttr = model.variables.in_OptionsIn.hasSortingAttr.orderAttr;
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:U3IIGffup0iou+A9eX1lkg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
                    // LocalFilter_SelectionControls.AddAllOptions = In_Options.HasLocalities.AddAllOptions
                    vars.value.localFilter_SelectionControlsVar.addAllOptionsAttr = model.variables.in_OptionsIn.hasLocalitiesAttr.addAllOptionsAttr;
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:U3IIGffup0iou+A9eX1lkg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
                    // LocalFilter_SelectionControls.SheetTitle = "Locality"
                    vars.value.localFilter_SelectionControlsVar.sheetTitleAttr = "Locality";
                    if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:KdHITTe0x0eMZtzXfroc8g", callContext.id) && model.variables.in_StartFilterIn.localitiesIdsAttr.isEmpty)) {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:8wiJlUj9vkiDnx4zki_VMw", callContext.id);
                        // Execute Action: AppenAllOption
                        OS.SystemActions.listAppend(vars.value.localFilter_SelectionControlsVar.selectedIdsAttr, UBTConnectModel.staticEntities.choice.none, callContext);
                    } else {
                        // Foreach In_StartFilter.LocalitiesIds
                        callContext.iterationContext.registerIterationStart(model.variables.in_StartFilterIn.localitiesIdsAttr);
                        try {
                            var localitiesIdsIterator = callContext.iterationContext.getIterator(model.variables.in_StartFilterIn.localitiesIdsAttr);
                            var localitiesIdsIndex = 0;
                            while ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:l_JSEBy4YEakvqC63kCrUA", callContext.id) && (localitiesIdsIndex < model.variables.in_StartFilterIn.localitiesIdsAttr.length))) {
                                localitiesIdsIterator.currentRowNumber = localitiesIdsIndex;
                                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:+Tn1VuvU0EuU9EZil6Iozw", callContext.id);
                                // Execute Action: ListAppend3
                                OS.SystemActions.listAppend(vars.value.localFilter_SelectionControlsVar.selectedIdsAttr, model.variables.in_StartFilterIn.countryIdsAttr.getCurrent(callContext.iterationContext), callContext);
                                localitiesIdsIndex++;
                            }

                        } finally {
                            callContext.iterationContext.registerIterationEnd(model.variables.in_StartFilterIn.localitiesIdsAttr);
                        }

                    }

                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:LoX1aNX8AkirRfyZd66ErQ", callContext.id);
                    // Execute Action: App_CommonFilter_DefineOptionNames
                    app_CommonFilter_DefineOptionNamesVar.value = UBTConnectController.default.app_CommonFilter_DefineOptionNames$Action(vars.value.localFilter_SelectionControlsVar, callContext);

                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ae0jqc7E90GHJ0MrhzZgfQ", callContext.id);
                    // LocalFilter_SelectionControls = App_CommonFilter_DefineOptionNames.Formatted
                    vars.value.localFilter_SelectionControlsVar = app_CommonFilter_DefineOptionNamesVar.value.formattedOut;
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:9Hoy4UYlZUu1j4G+lSkg3w", callContext.id);
                    // Execute Action: Position
                    positionVar.value = OS.SystemActions.listIndexOf(model.variables.optionControlVar.optionList_ControlAttr, function(p) {
                        return (p.titleAttr === model.variables.subState_LocalitiesVar);
                    }, callContext);

                    // AlreadyHasElement
                    if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:banh9Ccy1UGwimeP7YZEmA", callContext.id) && (positionVar.value.positionOut >= 0))) {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:1HwAzikvt0Sb0jln0KUJiA", callContext.id);
                        // OptionControl.OptionList_Control[Position.Position] = LocalFilter_SelectionControls
                        model.variables.optionControlVar.optionList_ControlAttr.setItem(positionVar.value.positionOut, vars.value.localFilter_SelectionControlsVar);
                    } else {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:CqZQkjVxY0iVOzoAhijBtg", callContext.id);
                        // Execute Action: ListAppend
                        OS.SystemActions.listAppend(model.variables.optionControlVar.optionList_ControlAttr, vars.value.localFilter_SelectionControlsVar, callContext);
                    }

                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:F433NhJmyEiqCFPKQ2qEgA", callContext.id);
                    // Execute Action: Action_FilterLocalitiesByCountry
                    controller._action_FilterLocalitiesByCountry$Action(callContext);
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:IFoDQHPN606GwTZBps3cNw", callContext.id);
                    // Execute Action: Action_Define_OptionControlVars
                    controller._action_Define_OptionControl_Last$Action(false, callContext);
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:_QAxnv4NYUq0HfRs6I5_yQ", callContext.id);
                    // Execute Action: Action_DefineOptionControl_Empty
                    controller._action_DefineOptionControl_Empty$Action(callContext);
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:pBTFG7yvA0uc4onRG58fAA", callContext.id);
                } else {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:SwdE79YGKE61L97Uc8KUBQ", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:V9fgawtNwkemdoRCWgaH_A", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.App_CommonBlocks_Filter.FilterSheet.Action_Define_Localities$vars", [{
            name: "LocalFilter_SelectionControls",
            attrName: "localFilter_SelectionControlsVar",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Record,
            defaultValue: function() {
                return new UBTConnectModel.Filter_Common_Control_ListRec();
            },
            complexType: UBTConnectModel.Filter_Common_Control_ListRec
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
            var listFilterVar = new OS.DataTypes.VariableHolder();
            var listIndexOfCountriesVar = new OS.DataTypes.VariableHolder();
            var listIndexOfLocalitiesVar = new OS.DataTypes.VariableHolder();
            var listAnyVar = new OS.DataTypes.VariableHolder();
            var app_CommonFilter_DefineOptionNamesVar = new OS.DataTypes.VariableHolder();
            var listDuplicateVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.listFilterVar = listFilterVar;
            varBag.listIndexOfCountriesVar = listIndexOfCountriesVar;
            varBag.listIndexOfLocalitiesVar = listIndexOfLocalitiesVar;
            varBag.listAnyVar = listAnyVar;
            varBag.app_CommonFilter_DefineOptionNamesVar = app_CommonFilter_DefineOptionNamesVar;
            varBag.listDuplicateVar = listDuplicateVar;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:Wkqse3qQAEelKtDk4CnWLw:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.puW55n9l7EKEPdI6ZSmT8A/ClientActions.Wkqse3qQAEelKtDk4CnWLw:KYzYEIeLZsiMkLg3Mfg1og", "UBTConnect", "Action_FilterLocalitiesByCountry", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:1+AA6vPISUSLk9B9TI9dgA", callContext.id);
                // ShouldFilter
                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:v8Opdw8sN0WyzyuRVZZg6Q", callContext.id) && (model.variables.in_OptionsIn.hasCountriesAttr.enableAttr && model.variables.in_OptionsIn.hasLocalitiesAttr.enableAttr))) {
                    // isFetched
                    if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:LKQI1EqlGEq+IGQwoI7p_g", callContext.id) && (model.variables.localCacheControl_AllCountriesVar.isFetchedAttr && model.variables.localCacheControl_AllLocalitiesVar.isFetchedAttr))) {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:+zIIWcF6iEuRp8ZNEGbbbw", callContext.id);
                        // Execute Action: ListIndexOfLocalities
                        listIndexOfLocalitiesVar.value = OS.SystemActions.listIndexOf(model.variables.optionControlVar.optionList_ControlAttr, function(p) {
                            return (p.titleAttr === model.variables.subState_LocalitiesVar);
                        }, callContext);

                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:zAd5N3OKDUKhrpcB05GzAg", callContext.id);
                        // Execute Action: ListIndexOfCountries
                        listIndexOfCountriesVar.value = OS.SystemActions.listIndexOf(model.variables.optionControlVar.optionList_ControlAttr, function(p) {
                            return (p.titleAttr === model.variables.subState_CountriesVar);
                        }, callContext);

                        // HasItems
                        if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:zGJCwXWNSUmxjFpByAHPHw", callContext.id) && ((listIndexOfLocalitiesVar.value.positionOut >= 0) && (listIndexOfCountriesVar.value.positionOut >= 0)))) {
                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:WJ5ImfiShUedW8Pwwq6jjA", callContext.id);
                            // Execute Action: ListClear
                            OS.SystemActions.listClear(model.variables.optionControlVar.optionList_ControlAttr.getItem(listIndexOfLocalitiesVar.value.positionOut).in_OptionsAttr, callContext);
                            // Country Has All Selected
                            if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:UWjIIfTKaEKX3JNkurO5XQ", callContext.id) && (model.variables.optionControlVar.optionList_ControlAttr.getItem(listIndexOfCountriesVar.value.positionOut).selectedIdsAttr.getCurrent(callContext.iterationContext) === UBTConnectModel.staticEntities.choice.none))) {
                                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:_1IZYBHVtkeK6cxuwpjXcQ", callContext.id);
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
                                    while ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:LfJCDM8w2kSYC6zRXBADIA", callContext.id) && (selectedIdsIndex < model.variables.optionControlVar.optionList_ControlAttr.getItem(listIndexOfCountriesVar.value.positionOut).selectedIdsAttr.length))) {
                                        selectedIdsIterator.currentRowNumber = selectedIdsIndex;
                                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:+WdEF2TKN0C6oHVpbpmdzQ", callContext.id);
                                        // Execute Action: ListFilter
                                        listFilterVar.value = OS.SystemActions.listFilter(model.variables.localCacheControl_AllLocalitiesVar.cacheControl_AllLocalitiesAttr.localityListAttr, function(p) {
                                            return (OS.BuiltinFunctions.toUpper(OS.BuiltinFunctions.trim(p.countryCodeAttr)) === OS.BuiltinFunctions.toUpper(OS.BuiltinFunctions.trim(model.variables.optionControlVar.optionList_ControlAttr.getItem(listIndexOfCountriesVar.value.positionOut).selectedIdsAttr.getItem(selectedIdsIndex.valueOf()))));
                                        }, callContext);

                                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:7D7pfT1DxUak+LIqUonUXg", callContext.id);
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

                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:DAMQpPgOMk+YV+DPVs8zrw", callContext.id);
                            // Execute Action: ListSort
                            OS.SystemActions.listSort(model.variables.optionControlVar.optionList_ControlAttr.getItem(listIndexOfLocalitiesVar.value.positionOut).in_OptionsAttr, function(p) {
                                return (p.countryCodeAttr + p.displayTextAttr);
                            }, true, callContext);
                            // Locality Has All Selected
                            if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Rq8iOdiCg0Wd1+e_8Z2KUw", callContext.id) && (model.variables.optionControlVar.optionList_ControlAttr.getItem(listIndexOfLocalitiesVar.value.positionOut).selectedIdsAttr.getCurrent(callContext.iterationContext) === UBTConnectModel.staticEntities.choice.none))) {
                                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:DMJyEAP1QUGBhaZFtA8ldA", callContext.id);
                            } else {
                                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:+fffzc1_5USNJoyVvaGCyg", callContext.id);
                                // Execute Action: ListDuplicate
                                listDuplicateVar.value = OS.SystemActions.listDuplicate(model.variables.optionControlVar.optionList_ControlAttr.getItem(listIndexOfLocalitiesVar.value.positionOut).selectedIdsAttr, callContext);

                                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Uufm7xSHZ0ecHZm9N1C9Dw", callContext.id);
                                // Execute Action: ListClear2
                                OS.SystemActions.listClear(model.variables.optionControlVar.optionList_ControlAttr.getItem(listIndexOfLocalitiesVar.value.positionOut).selectedIdsAttr, callContext);
                                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ShGSum8pu02wFAgZlKThMA", callContext.id);
                                // Execute Action: ListClear3
                                OS.SystemActions.listClear(model.variables.optionControlVar.optionList_ControlAttr.getItem(listIndexOfLocalitiesVar.value.positionOut).selectedNamesAttr, callContext);
                                // Foreach ListDuplicate.DuplicatedList
                                callContext.iterationContext.registerIterationStart(listDuplicateVar.value.duplicatedListOut);
                                try {
                                    var duplicatedListIterator = callContext.iterationContext.getIterator(listDuplicateVar.value.duplicatedListOut);
                                    var duplicatedListIndex = 0;
                                    while ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:HBo5vqYTX0OasldJyElM0g", callContext.id) && (duplicatedListIndex < listDuplicateVar.value.duplicatedListOut.length))) {
                                        duplicatedListIterator.currentRowNumber = duplicatedListIndex;
                                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:q5CWhQgxHUyfhQ1TgpPgkw", callContext.id);
                                        // Execute Action: ListAny
                                        listAnyVar.value = OS.SystemActions.listAny(model.variables.optionControlVar.optionList_ControlAttr.getItem(listIndexOfLocalitiesVar.value.positionOut).in_OptionsAttr, function(p) {
                                            return (p.idAttr === listDuplicateVar.value.duplicatedListOut.getItem(duplicatedListIndex.valueOf()));
                                        }, callContext);

                                        // SelectedOptionStillExist
                                        if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:V4Unsx2ahkOg4qa2oOrFEw", callContext.id) && listAnyVar.value.resultOut)) {
                                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:BoqJ0TBtpUmDnypy7piTPQ", callContext.id);
                                            // Execute Action: ListAppend
                                            OS.SystemActions.listAppend(model.variables.optionControlVar.optionList_ControlAttr.getItem(listIndexOfLocalitiesVar.value.positionOut).selectedIdsAttr, listDuplicateVar.value.duplicatedListOut.getItem(duplicatedListIndex.valueOf()), callContext);
                                        }

                                        duplicatedListIndex++;
                                    }

                                } finally {
                                    callContext.iterationContext.registerIterationEnd(listDuplicateVar.value.duplicatedListOut);
                                }

                                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:FZehiJbuR0KmtlDV18yaiQ", callContext.id);
                                // Execute Action: App_CommonFilter_DefineOptionNames
                                app_CommonFilter_DefineOptionNamesVar.value = UBTConnectController.default.app_CommonFilter_DefineOptionNames$Action(model.variables.optionControlVar.optionList_ControlAttr.getItem(listIndexOfLocalitiesVar.value.positionOut), callContext);

                                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:145xnlnK0kSCSOW2QxTjOQ", callContext.id);
                                // OptionControl.OptionList_Control[ListIndexOfLocalities.Position] = App_CommonFilter_DefineOptionNames.Formatted
                                model.variables.optionControlVar.optionList_ControlAttr.setItem(listIndexOfLocalitiesVar.value.positionOut, app_CommonFilter_DefineOptionNamesVar.value.formattedOut);
                                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:1lRXg5rfC0+1p8GTxvGjGA", callContext.id);
                            }

                        } else {
                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:8G41JhOEB0CV5VYKGmVHog", callContext.id);
                        }

                    } else {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:deN9O+xOj0S7xFxFQNnR8g", callContext.id);
                    }

                } else {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:deN9O+xOj0S7xFxFQNnR8g", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:Wkqse3qQAEelKtDk4CnWLw", callContext.id);
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
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.App_CommonBlocks_Filter.FilterSheet.Action_SetSubState$vars"))());
            vars.value.in_SubStateInLocal = in_SubStateIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:Rlo8fn0D7UiDiFDK9k9+Hw:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.puW55n9l7EKEPdI6ZSmT8A/ClientActions.Rlo8fn0D7UiDiFDK9k9+Hw:f0HmKV7R8GUSC2MCc244pQ", "UBTConnect", "Action_SetSubState", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:lCY+t2CIW0yTaQ84M_JLCg", callContext.id);
                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:rUCl9yFaN0a1KYMbyjC_Lw", callContext.id) && ((vars.value.in_SubStateInLocal === model.variables.subState_MainVar) && model.variables.isSingleFilterVar))) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:htPu0oEgMU+ny2+J2JclGg", callContext.id);
                    // Execute Action: Action_SetSingleFilter
                    controller._action_SetSingleFilter$Action(callContext);
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:rTjjc2y7606KsXS6VQDmFw", callContext.id);
                } else {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:4LuqFV+nvkO68BkfSB6aIg", callContext.id);
                    // SubState_Selected = In_SubState
                    model.variables.subState_SelectedVar = vars.value.in_SubStateInLocal;
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:u1ImipuBEkquhzxVk7bS4A", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:Rlo8fn0D7UiDiFDK9k9+Hw", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.App_CommonBlocks_Filter.FilterSheet.Action_SetSubState$vars", [{
            name: "In_SubState",
            attrName: "in_SubStateInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
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
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.App_CommonBlocks_Filter.FilterSheet.OnChange_ChoiceOption$vars"))());
            vars.value.in_TitleInLocal = in_TitleIn;
            vars.value.choiceIdInLocal = choiceIdIn;
            var listIndexOfVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.vars = vars;
            varBag.listIndexOfVar = listIndexOfVar;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:ps23jGn1yUSKRPoF5RDdFg:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.puW55n9l7EKEPdI6ZSmT8A/ClientActions.ps23jGn1yUSKRPoF5RDdFg:RRoyt5SKHILSasNy21DYdA", "UBTConnect", "OnChange_ChoiceOption", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:6wRa9KJey0CNm6oV8P3jkw", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:lCWIt4U_tUyYXj+XpPpa2Q", callContext.id);
                // Execute Action: ListIndexOf
                listIndexOfVar.value = OS.SystemActions.listIndexOf(model.variables.optionControlVar.optionChoice_ControlAttr, function(p) {
                    return (p.titleAttr === vars.value.in_TitleInLocal);
                }, callContext);

                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:BYJ2BkxvrEmwIBqqJh2qNA", callContext.id) && (listIndexOfVar.value.positionOut >= 0))) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:5c_ST_VeOU+NO2CaWgCXXQ", callContext.id);
                    // OptionControl.OptionChoice_Control[ListIndexOf.Position].SelectedChoiceId = ChoiceId
                    model.variables.optionControlVar.optionChoice_ControlAttr.getItem(listIndexOfVar.value.positionOut).selectedChoiceIdAttr = vars.value.choiceIdInLocal;
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:BLU1DA39hEWWi3O3x44WYA", callContext.id);
                } else {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:BLU1DA39hEWWi3O3x44WYA", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:ps23jGn1yUSKRPoF5RDdFg", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.App_CommonBlocks_Filter.FilterSheet.OnChange_ChoiceOption$vars", [{
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
        Controller.prototype._onClick_SelectionOption$Action = function(in_TitleIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnClick_SelectionOption");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.App_CommonBlocks_Filter.FilterSheet.OnClick_SelectionOption$vars"))());
            vars.value.in_TitleInLocal = in_TitleIn;
            var listIndexOfVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.vars = vars;
            varBag.listIndexOfVar = listIndexOfVar;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:oD6xjjy1YEeV0kBAb4ZTLw:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.puW55n9l7EKEPdI6ZSmT8A/ClientActions.oD6xjjy1YEeV0kBAb4ZTLw:557U5k40_TQmY8znIFBQJg", "UBTConnect", "OnClick_SelectionOption", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:OjwtCfhB6ku_7KWlD9KUEg", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:lj8q39EIO0G6oGYrR6atTg", callContext.id);
                // Execute Action: ListIndexOf
                listIndexOfVar.value = OS.SystemActions.listIndexOf(model.variables.optionControlVar.optionList_ControlAttr, function(p) {
                    return (p.titleAttr === vars.value.in_TitleInLocal);
                }, callContext);

                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:AlqDZYTFM0mKFyDEltbePw", callContext.id) && (listIndexOfVar.value.positionOut >= 0))) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:EboNuso3NU2YC4JtnWwBPg", callContext.id);
                    // Execute Action: Action_SetSubState
                    controller._action_SetSubState$Action(model.variables.optionControlVar.optionList_ControlAttr.getCurrent(callContext.iterationContext).titleAttr, callContext);
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:SIQWA2O2O0iUCogOumvSjg", callContext.id);
                    // OptionList_Selected = OptionControl.OptionList_Control[ListIndexOf.Position]
                    model.variables.optionList_SelectedVar = model.variables.optionControlVar.optionList_ControlAttr.getItem(listIndexOfVar.value.positionOut);
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:1SBtLYlA2kujOdO5CRNoOQ", callContext.id);
                } else {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:yPNyOCEID0Ozkh+L2gvkXQ", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:oD6xjjy1YEeV0kBAb4ZTLw", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.App_CommonBlocks_Filter.FilterSheet.OnClick_SelectionOption$vars", [{
            name: "In_Title",
            attrName: "in_TitleInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
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
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:VNiVkCZ8H0i5wiVV+SgN8A:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.puW55n9l7EKEPdI6ZSmT8A/ClientActions.VNiVkCZ8H0i5wiVV+SgN8A:RQO2FcR7YaZTrloL_PYJfA", "UBTConnect", "OnClick_Apply", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:8NQK_CKcIEaMAUO4FJ0PMA", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:l2hL9qe0RU6jgeHkkkMebQ", callContext.id);
                // Execute Action: Action_Define_OptionControl_Last
                controller._action_Define_OptionControl_Last$Action(true, callContext);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:m4fmO2rQnECycGoNcwW2Pw", callContext.id);
                // Execute Action: Action_CloseSheet
                controller._action_CloseSheet$Action(callContext);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:HftTj09cVkOITe084BP9Vg", callContext.id);
                // Trigger Event: ApplyFilters
                return controller.applyFilters$Action(model.variables.optionControlVar.optionList_ControlAttr, model.variables.optionControlVar.optionChoice_ControlAttr, model.variables.optionControlVar.optionFlatList_ControlAttr, model.variables.subState_LocalitiesVar, model.variables.subState_CountriesVar, model.variables.sortBy_TitleVar, !(model.variables.optionControlVar.equals(model.variables.empty_OptionControlVar)), callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:TYOZNeQrUEyPw0p7ck3FWQ", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:VNiVkCZ8H0i5wiVV+SgN8A", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:VNiVkCZ8H0i5wiVV+SgN8A", callContext.id);
                throw ex;

            });
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
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.App_CommonBlocks_Filter.FilterSheet.Action_DefineSortBy$vars"))());
            var listIndexOfVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.vars = vars;
            varBag.listIndexOfVar = listIndexOfVar;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:AKtDmloPdU2ZfJwC_VGeVw:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.puW55n9l7EKEPdI6ZSmT8A/ClientActions.AKtDmloPdU2ZfJwC_VGeVw:TqiHQfntNAu7u8FSVLFVig", "UBTConnect", "Action_DefineSortBy", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:dRaNSatwZEWnEbrd057qqQ", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:i1kNUWtVrkKpXGqn+WzAcA", callContext.id);
                // Execute Action: ListIndexOf
                listIndexOfVar.value = OS.SystemActions.listIndexOf(model.variables.optionControlVar.optionChoice_ControlAttr, function(p) {
                    return (p.titleAttr === model.variables.sortBy_TitleVar);
                }, callContext);

                // Has Sorting
                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:mVuW2FPf0kubESQ5LfpYrw", callContext.id) && model.variables.in_OptionsIn.hasSortingAttr.enableAttr)) {
                    // Already Has Element
                    if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:hI77V4qvzkWMuI6TmuNecA", callContext.id) && (listIndexOfVar.value.positionOut >= 0))) {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:I8Q+FfoQL0KrMU+d1IiixQ", callContext.id);
                    } else {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:td4Bn5r4Q0uWLVlLnYKs2A", callContext.id);
                        // Local_FilterChoiceItem.Title = SortBy_Title
                        vars.value.local_FilterChoiceItemVar.titleAttr = model.variables.sortBy_TitleVar;
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:td4Bn5r4Q0uWLVlLnYKs2A", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                        // Local_FilterChoiceItem.SelectedChoiceId = If
                        vars.value.local_FilterChoiceItemVar.selectedChoiceIdAttr = (((model.variables.in_StartFilterIn.sort_ByNewestAttr === OS.BuiltinFunctions.nullTextIdentifier())) ? (UBTConnectModel.staticEntities.choice.yes) : (model.variables.in_StartFilterIn.sort_ByNewestAttr));
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:td4Bn5r4Q0uWLVlLnYKs2A", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
                        // Local_FilterChoiceItem.YesLabel = In_Options.HasSorting.YesLabel
                        vars.value.local_FilterChoiceItemVar.yesLabelAttr = model.variables.in_OptionsIn.hasSortingAttr.yesLabelAttr;
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:td4Bn5r4Q0uWLVlLnYKs2A", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
                        // Local_FilterChoiceItem.NoLabel = In_Options.HasSorting.NoLabel
                        vars.value.local_FilterChoiceItemVar.noLabelAttr = model.variables.in_OptionsIn.hasSortingAttr.noLabelAttr;
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:td4Bn5r4Q0uWLVlLnYKs2A", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
                        // Local_FilterChoiceItem.NoneLabel = ""
                        vars.value.local_FilterChoiceItemVar.noneLabelAttr = "";
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:td4Bn5r4Q0uWLVlLnYKs2A", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "6");
                        // Local_FilterChoiceItem.Order = In_Options.HasSorting.Order
                        vars.value.local_FilterChoiceItemVar.orderAttr = model.variables.in_OptionsIn.hasSortingAttr.orderAttr;
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:wivN8R0hykaS9zKzmCDREg", callContext.id);
                        // Execute Action: ListAppend
                        OS.SystemActions.listAppend(model.variables.optionControlVar.optionChoice_ControlAttr, vars.value.local_FilterChoiceItemVar, callContext);
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:1aU+RXiL8ku2sAuWAwWW2w", callContext.id);
                    }

                } else {
                    // Already Has Element
                    if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:7+ohGK7mLk+m4pGc0ANerA", callContext.id) && (listIndexOfVar.value.positionOut >= 0))) {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:4xgBBNKysEajd7MQDXTTKQ", callContext.id);
                        // Execute Action: ListRemove
                        OS.SystemActions.listRemove(model.variables.optionControlVar.optionChoice_ControlAttr, listIndexOfVar.value.positionOut, callContext);
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:1aU+RXiL8ku2sAuWAwWW2w", callContext.id);
                    } else {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ypWxuxODykSdhIhg4EtD2A", callContext.id);
                    }

                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:AKtDmloPdU2ZfJwC_VGeVw", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.App_CommonBlocks_Filter.FilterSheet.Action_DefineSortBy$vars", [{
            name: "Local_FilterChoiceItem",
            attrName: "local_FilterChoiceItemVar",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Record,
            defaultValue: function() {
                return new UBTConnectModel.Filter_Common_Control_ChoiceRec();
            },
            complexType: UBTConnectModel.Filter_Common_Control_ChoiceRec
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
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:G3r4nO7oLESFClGB3P0FTA:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.puW55n9l7EKEPdI6ZSmT8A/ClientActions.G3r4nO7oLESFClGB3P0FTA:BAu0Dv6i_hlcph4QnkzhQg", "UBTConnect", "Action_DefineOptionControl_Empty", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:O4SDQ8yvP06b0mk6wlprTQ", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:GBiGgTiIUUGRWo4cy3zPjQ", callContext.id);
                // Empty_OptionControl = OptionControl
                model.variables.empty_OptionControlVar = model.variables.optionControlVar;
                // Foreach Empty_OptionControl.OptionList_Control
                callContext.iterationContext.registerIterationStart(model.variables.empty_OptionControlVar.optionList_ControlAttr);
                try {
                    var optionList_ControlIterator = callContext.iterationContext.getIterator(model.variables.empty_OptionControlVar.optionList_ControlAttr);
                    var optionList_ControlIndex = 0;
                    while ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:KvBqM3YHu0ajdaSVP2ae_w", callContext.id) && (optionList_ControlIndex < model.variables.empty_OptionControlVar.optionList_ControlAttr.length))) {
                        optionList_ControlIterator.currentRowNumber = optionList_ControlIndex;
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ZojK0WC11UKElVHTk1iy8A", callContext.id);
                        // Execute Action: ListClear
                        OS.SystemActions.listClear(model.variables.empty_OptionControlVar.optionList_ControlAttr.getItem(optionList_ControlIndex.valueOf()).selectedIdsAttr, callContext);
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:2wZzUZlAS0eexstXUjZQBw", callContext.id);
                        // Execute Action: ListClear2
                        OS.SystemActions.listClear(model.variables.empty_OptionControlVar.optionList_ControlAttr.getItem(optionList_ControlIndex.valueOf()).selectedNamesAttr, callContext);
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:WSt74NjT60eE4S+2Q7O5mQ", callContext.id);
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
                    while ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:BImydruVLk2DEm4eC_4Dgg", callContext.id) && (optionChoice_ControlIndex < model.variables.empty_OptionControlVar.optionChoice_ControlAttr.length))) {
                        optionChoice_ControlIterator.currentRowNumber = optionChoice_ControlIndex;
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Mna+Sk9KgUqxdaBHpAkDJA", callContext.id);
                        // Empty_OptionControl.OptionChoice_Control.Current.SelectedChoiceId = None
                        model.variables.empty_OptionControlVar.optionChoice_ControlAttr.getItem(optionChoice_ControlIndex.valueOf()).selectedChoiceIdAttr = UBTConnectModel.staticEntities.choice.none;
                        optionChoice_ControlIndex++;
                    }

                } finally {
                    callContext.iterationContext.registerIterationEnd(model.variables.empty_OptionControlVar.optionChoice_ControlAttr);
                }

                // Foreach Empty_OptionControl.OptionFlatList_Control
                callContext.iterationContext.registerIterationStart(model.variables.empty_OptionControlVar.optionFlatList_ControlAttr);
                try {
                    var optionFlatList_ControlIterator = callContext.iterationContext.getIterator(model.variables.empty_OptionControlVar.optionFlatList_ControlAttr);
                    var optionFlatList_ControlIndex = 0;
                    while ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:bYWEGsQZ0USxWM3eOTR2dg", callContext.id) && (optionFlatList_ControlIndex < model.variables.empty_OptionControlVar.optionFlatList_ControlAttr.length))) {
                        optionFlatList_ControlIterator.currentRowNumber = optionFlatList_ControlIndex;
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:FP+ucI16T0SMdGVwrJQtjQ", callContext.id);
                        // Execute Action: ListClear3
                        OS.SystemActions.listClear(model.variables.empty_OptionControlVar.optionFlatList_ControlAttr.getItem(optionFlatList_ControlIndex.valueOf()).selectedIdsAttr, callContext);
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:zttf3YwGg0OP7RqcOm6u9w", callContext.id);
                        // Execute Action: ListClear4
                        OS.SystemActions.listClear(model.variables.empty_OptionControlVar.optionFlatList_ControlAttr.getItem(optionFlatList_ControlIndex.valueOf()).selectedNamesAttr, callContext);
                        // Foreach Empty_OptionControl.OptionFlatList_Control.Current.In_Options
                        callContext.iterationContext.registerIterationStart(model.variables.empty_OptionControlVar.optionFlatList_ControlAttr.getItem(optionFlatList_ControlIndex.valueOf()).in_OptionsAttr);
                        try {
                            var in_Options1Iterator = callContext.iterationContext.getIterator(model.variables.empty_OptionControlVar.optionFlatList_ControlAttr.getItem(optionFlatList_ControlIndex.valueOf()).in_OptionsAttr);
                            var in_Options1Index = 0;
                            while ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:N9DM+P8+cE2N0qiYUBSyGg", callContext.id) && (in_Options1Index < model.variables.empty_OptionControlVar.optionFlatList_ControlAttr.getItem(optionFlatList_ControlIndex.valueOf()).in_OptionsAttr.length))) {
                                in_Options1Iterator.currentRowNumber = in_Options1Index;
                                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:_6oL5sdlNEKo2YNnhowm4g", callContext.id);
                                // Empty_OptionControl.OptionFlatList_Control.Current.In_Options.Current.isSelected = False
                                model.variables.empty_OptionControlVar.optionFlatList_ControlAttr.getItem(optionFlatList_ControlIndex.valueOf()).in_OptionsAttr.getItem(in_Options1Index.valueOf()).isSelectedAttr = false;
                                in_Options1Index++;
                            }

                        } finally {
                            callContext.iterationContext.registerIterationEnd(model.variables.empty_OptionControlVar.optionFlatList_ControlAttr.getItem(optionFlatList_ControlIndex.valueOf()).in_OptionsAttr);
                        }

                        optionFlatList_ControlIndex++;
                    }

                } finally {
                    callContext.iterationContext.registerIterationEnd(model.variables.empty_OptionControlVar.optionFlatList_ControlAttr);
                }

                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:hgTlhbxphUeG4s6EFtS+Xg", callContext.id);
                // Execute Action: ListIndexOf
                listIndexOfVar.value = OS.SystemActions.listIndexOf(model.variables.empty_OptionControlVar.optionChoice_ControlAttr, function(p) {
                    return (p.titleAttr === model.variables.sortBy_TitleVar);
                }, callContext);

                // Has Sort
                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:0bBXya9FVkSm13gBquvcIg", callContext.id) && (listIndexOfVar.value.positionOut >= 0))) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:fYz2dAYvrkOXf8lHb_Y_LQ", callContext.id);
                    // Empty_OptionControl.OptionChoice_Control[ListIndexOf.Position].SelectedChoiceId = Yes
                    model.variables.empty_OptionControlVar.optionChoice_ControlAttr.getItem(listIndexOfVar.value.positionOut).selectedChoiceIdAttr = UBTConnectModel.staticEntities.choice.yes;
                }

                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:bHvQRMNvhkCIbzOH+OO5Hw", callContext.id);
                // Execute Action: Action_SetSingleFilter
                controller._action_SetSingleFilter$Action(callContext);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:YvmxRqB8i0SFwmI8DniObQ", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:G3r4nO7oLESFClGB3P0FTA", callContext.id);
            }

        };
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
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:GuIXpvUYFkCbyaQCj0o48g:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.puW55n9l7EKEPdI6ZSmT8A/ClientActions.GuIXpvUYFkCbyaQCj0o48g:Crc1XpxeYO7CrkFWovAo2Q", "UBTConnect", "ScreenEvent_OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:WULRq2r9WEehqGjHo_zl2A", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:2nMZvQnjvkWkxvl5MT0q+g", callContext.id);
                // Execute Action: Action_Define_OptionControl
                controller._action_Define_OptionControl$Action(callContext);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:G22fA18WLE2FMuOQ06obAQ", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:GuIXpvUYFkCbyaQCj0o48g", callContext.id);
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
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.App_CommonBlocks_Filter.FilterSheet.Handler_Input_OnReady$vars"))());
            vars.value.idInLocal = idIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:frO3uNgEXkGiuyLptLM9vw:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.puW55n9l7EKEPdI6ZSmT8A/ClientActions.frO3uNgEXkGiuyLptLM9vw:XafNujQUYSJk1Ocmn1_5rg", "UBTConnect", "Handler_Input_OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:pZP8jZma5UOuIqEnbVQKBw", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:UZegw8DF6kCbstGxbF1gfg", callContext.id);
                // SearchInputId = Id
                model.variables.searchInputIdVar = vars.value.idInLocal;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:TyGIvVALjEGc1pjrGLJt+A", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:frO3uNgEXkGiuyLptLM9vw", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.App_CommonBlocks_Filter.FilterSheet.Handler_Input_OnReady$vars", [{
            name: "Id",
            attrName: "idInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
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
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.App_CommonBlocks_Filter.FilterSheet.Handler_ListOnSelectionChange$vars"))());
            vars.value.selectedItemsInLocal = selectedItemsIn.clone();
            vars.value.clickedItemIdInLocal = clickedItemIdIn;
            var listIndexOfVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.vars = vars;
            varBag.listIndexOfVar = listIndexOfVar;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:qMOJwARAukuueaZWrihEtg:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.puW55n9l7EKEPdI6ZSmT8A/ClientActions.qMOJwARAukuueaZWrihEtg:pOpMz5no8N+Rx2gV6aX8YQ", "UBTConnect", "Handler_ListOnSelectionChange", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ICcrWApuBEqsiqcHbBxj5A", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:WlS4ipabaku2LygfBIxhow", callContext.id);
                // OptionControl.OptionFlatList_Control.Current.SelectedIds = SelectedItems
                model.variables.optionControlVar.optionFlatList_ControlAttr.getCurrent(callContext.iterationContext).selectedIdsAttr = OS.DataConversion.JSConversions.typeConvertRecordList(vars.value.selectedItemsInLocal, new OS.DataTypes.TextList(), function(source, target) {
                    target = source.idAttr;
                    return target;
                });
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:WlS4ipabaku2LygfBIxhow", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                // OptionControl.OptionFlatList_Control.Current.SelectedNames = SelectedItems
                model.variables.optionControlVar.optionFlatList_ControlAttr.getCurrent(callContext.iterationContext).selectedNamesAttr = OS.DataConversion.JSConversions.typeConvertRecordList(vars.value.selectedItemsInLocal, new OS.DataTypes.TextList(), function(source, target) {
                    target = source.displayTextAttr;
                    return target;
                });
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:VKr9blE1q0e+v+uvkkPv4g", callContext.id);
                // Execute Action: ListIndexOf
                listIndexOfVar.value = OS.SystemActions.listIndexOf(model.variables.optionControlVar.optionFlatList_ControlAttr.getCurrent(callContext.iterationContext).in_OptionsAttr, function(p) {
                    return (p.idAttr === vars.value.clickedItemIdInLocal);
                }, callContext);

                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:3VBQnXsXlEuchSCc+UQDTQ", callContext.id) && (listIndexOfVar.value.positionOut >= 0))) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:UFxyqVO_tkyM2UBaVZ2mEg", callContext.id);
                    // OptionControl.OptionFlatList_Control.Current.In_Options[ListIndexOf.Position].isSelected = notOptionControl.OptionFlatList_Control.Current.In_Options[ListIndexOf.Position].isSelected
                    model.variables.optionControlVar.optionFlatList_ControlAttr.getCurrent(callContext.iterationContext).in_OptionsAttr.getItem(listIndexOfVar.value.positionOut).isSelectedAttr = !(model.variables.optionControlVar.optionFlatList_ControlAttr.getCurrent(callContext.iterationContext).in_OptionsAttr.getItem(listIndexOfVar.value.positionOut).isSelectedAttr);
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:kZmiEoTfTUaqhlHwTFP2eQ", callContext.id);
                } else {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:kZmiEoTfTUaqhlHwTFP2eQ", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:qMOJwARAukuueaZWrihEtg", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.App_CommonBlocks_Filter.FilterSheet.Handler_ListOnSelectionChange$vars", [{
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
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:1Mn4w62Uwkus7Jne9OoODw:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.puW55n9l7EKEPdI6ZSmT8A/ClientActions.1Mn4w62Uwkus7Jne9OoODw:XGZgFAn6qkwHOotJa7pfkQ", "UBTConnect", "BottomSheetOnClose", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:maZ_v0caH0yoU6TpZmp+Rw", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:XjN6A9URxUKJm8KNy4NlZg", callContext.id);
                // OptionControl = LastSearched_OptionControl
                model.variables.optionControlVar = model.variables.lastSearched_OptionControlVar;
                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:gFWHvCOJ50mTEWWgxI3B5g", callContext.id) && model.variables.isSingleFilterVar)) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Pq0AazcX7kWagb1NH9dyWA", callContext.id);
                    // ForceUpdateOptionList = notForceUpdateOptionList
                    model.variables.forceUpdateOptionListVar = !(model.variables.forceUpdateOptionListVar);
                }

                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:VcCCP3A0O0ODmo_5Em+hFQ", callContext.id);
                // Execute Action: BottomSheetClose
                bottomSheetCloseVar.value = OutSystemsUI_2_23Controller.default.bottomSheetClose$Action(model.variables.bottomSheetIdVar, callContext);

                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:m_fP8UxCdU6n1MTPTLUcdg", callContext.id);
                // Execute Action: Action_SetSubState
                controller._action_SetSubState$Action(model.variables.subState_MainVar, callContext);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:BVTtHdzjTESVpazzM8jEiQ", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:1Mn4w62Uwkus7Jne9OoODw", callContext.id);
            }

        };
        Controller.prototype._onChange_ListOption$Action = function(in_SelectedIdsIn, in_TitleIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnChange_ListOption");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.App_CommonBlocks_Filter.FilterSheet.OnChange_ListOption$vars"))());
            vars.value.in_SelectedIdsInLocal = in_SelectedIdsIn.clone();
            vars.value.in_TitleInLocal = in_TitleIn;
            var listIndexOfVar = new OS.DataTypes.VariableHolder();
            var app_CommonFilter_DefineOptionNamesVar = new OS.DataTypes.VariableHolder();
            var listIndexOfLocalitiesVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.vars = vars;
            varBag.listIndexOfVar = listIndexOfVar;
            varBag.app_CommonFilter_DefineOptionNamesVar = app_CommonFilter_DefineOptionNamesVar;
            varBag.listIndexOfLocalitiesVar = listIndexOfLocalitiesVar;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:kKKa0RbTg0+I+vBXBGNdBQ:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.puW55n9l7EKEPdI6ZSmT8A/ClientActions.kKKa0RbTg0+I+vBXBGNdBQ:5Mrym_ZZZIVd+fu90rF6pQ", "UBTConnect", "OnChange_ListOption", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:fpQLnaTYPUuWWvZUlUu7ww", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:6NfDJ+QozUu6YwmVxeHqWQ", callContext.id);
                // Execute Action: ListIndexOf
                listIndexOfVar.value = OS.SystemActions.listIndexOf(model.variables.optionControlVar.optionList_ControlAttr, function(p) {
                    return (p.titleAttr === vars.value.in_TitleInLocal);
                }, callContext);

                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:I8TX4rndoUKT29WWKsgR4g", callContext.id) && (listIndexOfVar.value.positionOut >= 0))) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:RwvAdxDRlECJCcT9F7qNgw", callContext.id);
                    // OptionControl.OptionList_Control[ListIndexOf.Position].SelectedIds = In_SelectedIds
                    model.variables.optionControlVar.optionList_ControlAttr.getItem(listIndexOfVar.value.positionOut).selectedIdsAttr = vars.value.in_SelectedIdsInLocal;
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:EO13oLp8u0mzLSWNRHYhtQ", callContext.id);
                    // Execute Action: App_CommonFilter_DefineOptionNames
                    app_CommonFilter_DefineOptionNamesVar.value = UBTConnectController.default.app_CommonFilter_DefineOptionNames$Action(model.variables.optionControlVar.optionList_ControlAttr.getItem(listIndexOfVar.value.positionOut), callContext);

                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:_9pv1gDTp0qjDhWA+GLpmw", callContext.id);
                    // OptionControl.OptionList_Control[ListIndexOf.Position] = App_CommonFilter_DefineOptionNames.Formatted
                    model.variables.optionControlVar.optionList_ControlAttr.setItem(listIndexOfVar.value.positionOut, app_CommonFilter_DefineOptionNamesVar.value.formattedOut);
                }

                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:WgAkWixphkyEfKmV_atNVQ", callContext.id) && (vars.value.in_TitleInLocal === model.variables.subState_CountriesVar))) {
                    // IsAllCountries
                    if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:CCi6NIiUW02Esmq9OF2iVA", callContext.id) && (vars.value.in_SelectedIdsInLocal.getCurrent(callContext.iterationContext) === UBTConnectModel.staticEntities.choice.none))) {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:gLWWt8Y4j0Gr64i2u_Pv0g", callContext.id);
                        // Execute Action: ListIndexOfLocalities
                        listIndexOfLocalitiesVar.value = OS.SystemActions.listIndexOf(model.variables.optionControlVar.optionList_ControlAttr, function(p) {
                            return (p.titleAttr === model.variables.subState_LocalitiesVar);
                        }, callContext);

                        if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:BomNIx1XHk2k8MK4GTnMng", callContext.id) && ((listIndexOfLocalitiesVar.value.positionOut) !== (-1)))) {
                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Fw0OWhH6wkOWnXGke7Ie5g", callContext.id);
                            // Execute Action: ListClear
                            OS.SystemActions.listClear(model.variables.optionControlVar.optionList_ControlAttr.getItem(listIndexOfLocalitiesVar.value.positionOut).selectedIdsAttr, callContext);
                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:1PalRX8gh0ir23d3eBzg5g", callContext.id);
                            // Execute Action: ListClear2
                            OS.SystemActions.listClear(model.variables.optionControlVar.optionList_ControlAttr.getItem(listIndexOfLocalitiesVar.value.positionOut).selectedNamesAttr, callContext);
                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:0EqTcAWuC0OtgzbOIkVldg", callContext.id);
                            // OptionControl.OptionList_Control[ListIndexOfLocalities.Position].SelectedIds = In_SelectedIds
                            model.variables.optionControlVar.optionList_ControlAttr.getItem(listIndexOfLocalitiesVar.value.positionOut).selectedIdsAttr = vars.value.in_SelectedIdsInLocal;
                        }

                    }

                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:uhxmBfbXgUG14H59nYtYzQ", callContext.id);
                    // Execute Action: Action_FilterLocalitiesByCountry
                    controller._action_FilterLocalitiesByCountry$Action(callContext);
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:eLpWF0tP4EOnceb2qiLfcw", callContext.id);
                } else {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:eLpWF0tP4EOnceb2qiLfcw", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:kKKa0RbTg0+I+vBXBGNdBQ", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.App_CommonBlocks_Filter.FilterSheet.OnChange_ListOption$vars", [{
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
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:ONSc1Zf57kyyzS2Y8iU4YQ:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.puW55n9l7EKEPdI6ZSmT8A/ClientActions.ONSc1Zf57kyyzS2Y8iU4YQ:eethlZTGTkasTQnkz_uqKQ", "UBTConnect", "Action_CloseSheet", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:JJzTshx4mE6dKVRJcNRg+g", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ogu_WrGT_EWQotACk9r03Q", callContext.id);
                // Execute Action: BottomSheetClose
                bottomSheetCloseVar.value = OutSystemsUI_2_23Controller.default.bottomSheetClose$Action(model.variables.bottomSheetIdVar, callContext);

                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:qMwL+_i5GEqQ5df4HUGf_g", callContext.id);
                // Execute Action: Action_SetSubState
                controller._action_SetSubState$Action(model.variables.subState_MainVar, callContext);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:oJahImbAVkm7ohCwzci6Hg", callContext.id);
                // Execute Action: Action_ClearSearchString
                controller._action_ClearSearchString$Action(callContext);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:BPfRI7JM9EGcXeVUK1kdOQ", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:ONSc1Zf57kyyzS2Y8iU4YQ", callContext.id);
            }

        };
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
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:Mjs16AaFUEywjz0gQekvbw:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.puW55n9l7EKEPdI6ZSmT8A/ClientActions.Mjs16AaFUEywjz0gQekvbw:tXlL7uf3Uz_yOgo+67_t2w", "UBTConnect", "OnClick_SelectionBack", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:J8HXRMWkRUC3joagcmk+bg", callContext.id);
                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:dWY6OERS2UmW161RaeJvIw", callContext.id) && model.variables.isSingleFilterVar)) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:E86tEO6dLk+pkL0zyT0uvQ", callContext.id);
                    // Execute Action: Action_CloseSheet
                    controller._action_CloseSheet$Action(callContext);
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:oFPjLyhscUy5qFCOVo7AdA", callContext.id);
                } else {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ut3T1g6GoEai+3CWrV1Fhw", callContext.id);
                    // Execute Action: Action_SetSubState
                    controller._action_SetSubState$Action(model.variables.subState_MainVar, callContext);
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:igDmNruRIke2sQIwnJe_Cw", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:Mjs16AaFUEywjz0gQekvbw", callContext.id);
            }

        };
        Controller.prototype._cacheControl_AllLocalitiesResult$Action = function(cacheControl_ResponseIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("CacheControl_AllLocalitiesResult");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.App_CommonBlocks_Filter.FilterSheet.CacheControl_AllLocalitiesResult$vars"))());
            vars.value.cacheControl_ResponseInLocal = cacheControl_ResponseIn.clone();
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:tUYn6yr_E0a03omN3jx1nw:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.puW55n9l7EKEPdI6ZSmT8A/ClientActions.tUYn6yr_E0a03omN3jx1nw:QhY04glYoP9S_D11r4YaXQ", "UBTConnect", "CacheControl_AllLocalitiesResult", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:kd6_NGvdU0CrrgTAKz72mA", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:nY31CQu9NE+JLjTs1qsNvA", callContext.id);
                // LocalCacheControl_AllLocalities = CacheControl_Response
                model.variables.localCacheControl_AllLocalitiesVar = OS.DataConversion.JSConversions.typeConvertRecord(vars.value.cacheControl_ResponseInLocal, new UBTConnectModel.CacheControl_AllLocalitiesBooleanRecord(), function(source, target) {
                    target.cacheControl_AllLocalitiesAttr.localityListAttr = source.localityListAttr;
                    target.isFetchedAttr = true;
                    return target;
                });
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:7peFI7MpU0q4w8bb0a2CLA", callContext.id);
                // Execute Action: Action_Define_Localities
                controller._action_Define_Localities$Action(callContext);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:+V6cqpeKdEypmh1ZxYR6tA", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:tUYn6yr_E0a03omN3jx1nw", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.App_CommonBlocks_Filter.FilterSheet.CacheControl_AllLocalitiesResult$vars", [{
            name: "CacheControl_Response",
            attrName: "cacheControl_ResponseInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Record,
            defaultValue: function() {
                return new UBTConnect_UtilsModel.CacheControl_AllLocalitiesRec();
            },
            complexType: UBTConnect_UtilsModel.CacheControl_AllLocalitiesRec
        }]);

        Controller.prototype.action_Define_OptionControl_Last$Action = function(isFromApplyIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._action_Define_OptionControl_Last$Action, callContext, isFromApplyIn);

        };
        Controller.prototype.cacheControl_UserInfo_WrapperResult$Action = function(userInformationIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._cacheControl_UserInfo_WrapperResult$Action, callContext, userInformationIn);

        };
        Controller.prototype.bottomSheetOnToggle$Action = function(isOpenIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._bottomSheetOnToggle$Action, callContext, isOpenIn);

        };
        Controller.prototype.screenEvent_OnParametersChanged$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._screenEvent_OnParametersChanged$Action, callContext);

        };
        Controller.prototype.action_ClearSearchString$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._action_ClearSearchString$Action, callContext);

        };
        Controller.prototype.onClick_ClearFilters$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onClick_ClearFilters$Action, callContext);

        };
        Controller.prototype.cacheControl_AllCountriesResult$Action = function(cacheControl_ResponseIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._cacheControl_AllCountriesResult$Action, callContext, cacheControl_ResponseIn);

        };
        Controller.prototype.action_SetSingleFilter$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._action_SetSingleFilter$Action, callContext);

        };
        Controller.prototype.bottomSheetInitialized$Action = function(idIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._bottomSheetInitialized$Action, callContext, idIn);

        };
        Controller.prototype.action_Define_Countries$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._action_Define_Countries$Action, callContext);

        };
        Controller.prototype.handler_BackNavigation$Action = function(backNavigationEventIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_BackNavigation$Action, callContext, backNavigationEventIn);

        };
        Controller.prototype.action_Define_OptionControl$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._action_Define_OptionControl$Action, callContext);

        };
        Controller.prototype.action_Define_Localities$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._action_Define_Localities$Action, callContext);

        };
        Controller.prototype.action_FilterLocalitiesByCountry$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._action_FilterLocalitiesByCountry$Action, callContext);

        };
        Controller.prototype.action_SetSubState$Action = function(in_SubStateIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._action_SetSubState$Action, callContext, in_SubStateIn);

        };
        Controller.prototype.onChange_ChoiceOption$Action = function(in_TitleIn, choiceIdIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onChange_ChoiceOption$Action, callContext, in_TitleIn, choiceIdIn);

        };
        Controller.prototype.onClick_SelectionOption$Action = function(in_TitleIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onClick_SelectionOption$Action, callContext, in_TitleIn);

        };
        Controller.prototype.onClick_Apply$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onClick_Apply$Action, callContext);

        };
        Controller.prototype.action_DefineSortBy$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._action_DefineSortBy$Action, callContext);

        };
        Controller.prototype.action_DefineOptionControl_Empty$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._action_DefineOptionControl_Empty$Action, callContext);

        };
        Controller.prototype.screenEvent_OnInitialize$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._screenEvent_OnInitialize$Action, callContext);

        };
        Controller.prototype.handler_Input_OnReady$Action = function(idIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_Input_OnReady$Action, callContext, idIn);

        };
        Controller.prototype.handler_ListOnSelectionChange$Action = function(selectedItemsIn, clickedItemIdIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_ListOnSelectionChange$Action, callContext, selectedItemsIn, clickedItemIdIn);

        };
        Controller.prototype.bottomSheetOnClose$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._bottomSheetOnClose$Action, callContext);

        };
        Controller.prototype.onChange_ListOption$Action = function(in_SelectedIdsIn, in_TitleIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onChange_ListOption$Action, callContext, in_SelectedIdsIn, in_TitleIn);

        };
        Controller.prototype.action_CloseSheet$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._action_CloseSheet$Action, callContext);

        };
        Controller.prototype.onClick_SelectionBack$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onClick_SelectionBack$Action, callContext);

        };
        Controller.prototype.cacheControl_AllLocalitiesResult$Action = function(cacheControl_ResponseIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._cacheControl_AllLocalitiesResult$Action, callContext, cacheControl_ResponseIn);

        };
        Controller.prototype.loaded$Action = function() {
            return Promise.resolve();
        };
        Controller.prototype.sheetInitialized$Action = function() {
            return Promise.resolve();
        };
        Controller.prototype.applyFilters$Action = function() {
            return Promise.resolve();
        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:Jpw6vcM30keGIepdkjtS7A:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A:aO+UykmPPS6VEpIYdNjDCA", "UBTConnect", "App_CommonBlocks_Filter", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:puW55n9l7EKEPdI6ZSmT8A:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.puW55n9l7EKEPdI6ZSmT8A:84p0uxa7QqdVSnEBRF8ivQ", "UBTConnect", "FilterSheet", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:puW55n9l7EKEPdI6ZSmT8A", callContext.id);
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:Jpw6vcM30keGIepdkjtS7A", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "App_CommonBlocks_Filter/FilterSheet On Initialize");
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

                OutSystemsDebugger.setThreadStartName(callContext.id, "App_CommonBlocks_Filter/FilterSheet On Parameters Changed");
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

define("UBTConnect.App_CommonBlocks_Filter.FilterSheet.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "8hfjkMVlKE6EZf9+Ev_5DQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.isFromApplyInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "vS4aHf84OUaGY2L0JtePaA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.hasFiltersOtherThanLocalityVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "8J4cBcyU_USe+08oTjignQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.showSubscriptionOnClickVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "m+NgcXAxFEe6A0rhuL4gzw": {
            getter: function(varBag, idService) {
                return varBag.vars.value.userInformationInLocal;
            }
        },
        "UEi6A6U1tUSfEV6Hewy+yg": {
            getter: function(varBag, idService) {
                return varBag.vars.value.isOpenInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "ZAsv3geqr0Wrp9bpbp8L+w": {
            getter: function(varBag, idService) {
                return varBag.vars.value.cacheControl_ResponseInLocal;
            }
        },
        "Xu7IaQ4pCUqdwPxGb8G3QQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.idInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "gk05_HqrJUmGWVEbwBWiSw": {
            getter: function(varBag, idService) {
                return varBag.vars.value.localFilter_SelectionControlsVar;
            }
        },
        "IoJVSL1+P0mMxtMaeRFkNg": {
            getter: function(varBag, idService) {
                return varBag.app_CommonFilter_DefineOptionNamesVar.value;
            }
        },
        "_k0s3WQUcU2NlnQH25z1jw": {
            getter: function(varBag, idService) {
                return varBag.positionVar.value;
            }
        },
        "4Pky8EWwFk2NRo15ps87pQ": {
            getter: function(varBag, idService) {
                return varBag.app_CommonFilter_CheckCountryVar.value;
            }
        },
        "pLiqPcmmAECpncIJJb3tdw": {
            getter: function(varBag, idService) {
                return varBag.vars.value.backNavigationEventInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Object
        },
        "f2ro1H+hsUaXYo14bjhqzA": {
            getter: function(varBag, idService) {
                return varBag.bottomSheetCloseVar.value;
            }
        },
        "YhinFpIb_ECcG9LcrkrMXg": {
            getter: function(varBag, idService) {
                return varBag.vars.value.localFilter_SelectionControlsVar;
            }
        },
        "LoX1aNX8AkirRfyZd66ErQ": {
            getter: function(varBag, idService) {
                return varBag.app_CommonFilter_DefineOptionNamesVar.value;
            }
        },
        "9Hoy4UYlZUu1j4G+lSkg3w": {
            getter: function(varBag, idService) {
                return varBag.positionVar.value;
            }
        },
        "+WdEF2TKN0C6oHVpbpmdzQ": {
            getter: function(varBag, idService) {
                return varBag.listFilterVar.value;
            }
        },
        "zAd5N3OKDUKhrpcB05GzAg": {
            getter: function(varBag, idService) {
                return varBag.listIndexOfCountriesVar.value;
            }
        },
        "+zIIWcF6iEuRp8ZNEGbbbw": {
            getter: function(varBag, idService) {
                return varBag.listIndexOfLocalitiesVar.value;
            }
        },
        "q5CWhQgxHUyfhQ1TgpPgkw": {
            getter: function(varBag, idService) {
                return varBag.listAnyVar.value;
            }
        },
        "FZehiJbuR0KmtlDV18yaiQ": {
            getter: function(varBag, idService) {
                return varBag.app_CommonFilter_DefineOptionNamesVar.value;
            }
        },
        "+fffzc1_5USNJoyVvaGCyg": {
            getter: function(varBag, idService) {
                return varBag.listDuplicateVar.value;
            }
        },
        "2h2CjNYWwkCS2EQZRZBAsQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.in_SubStateInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "etYkKq8W7UWuRuaEPDMjlA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.in_TitleInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "grqkCFEAAU+ikKxAc0J5nw": {
            getter: function(varBag, idService) {
                return varBag.vars.value.choiceIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "lCWIt4U_tUyYXj+XpPpa2Q": {
            getter: function(varBag, idService) {
                return varBag.listIndexOfVar.value;
            }
        },
        "BTCE3LZpu02AmAjtKWfMEw": {
            getter: function(varBag, idService) {
                return varBag.vars.value.in_TitleInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "lj8q39EIO0G6oGYrR6atTg": {
            getter: function(varBag, idService) {
                return varBag.listIndexOfVar.value;
            }
        },
        "8DZjxZQCLUSVK7HTiI2BLg": {
            getter: function(varBag, idService) {
                return varBag.vars.value.local_FilterChoiceItemVar;
            }
        },
        "i1kNUWtVrkKpXGqn+WzAcA": {
            getter: function(varBag, idService) {
                return varBag.listIndexOfVar.value;
            }
        },
        "hgTlhbxphUeG4s6EFtS+Xg": {
            getter: function(varBag, idService) {
                return varBag.listIndexOfVar.value;
            }
        },
        "NPiRCwY1xEejmdTPbxsBEQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.idInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "czlly55emEmyNoUhvtnEdQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.selectedItemsInLocal;
            }
        },
        "sHLVe7jyb0uAVaBLalhezQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.clickedItemIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "VKr9blE1q0e+v+uvkkPv4g": {
            getter: function(varBag, idService) {
                return varBag.listIndexOfVar.value;
            }
        },
        "VcCCP3A0O0ODmo_5Em+hFQ": {
            getter: function(varBag, idService) {
                return varBag.bottomSheetCloseVar.value;
            }
        },
        "OKTTinXxr0WJ7ohliwHZoQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.in_SelectedIdsInLocal;
            }
        },
        "8GXpa4Sc90ODVCYiBBG7OA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.in_TitleInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "6NfDJ+QozUu6YwmVxeHqWQ": {
            getter: function(varBag, idService) {
                return varBag.listIndexOfVar.value;
            }
        },
        "EO13oLp8u0mzLSWNRHYhtQ": {
            getter: function(varBag, idService) {
                return varBag.app_CommonFilter_DefineOptionNamesVar.value;
            }
        },
        "gLWWt8Y4j0Gr64i2u_Pv0g": {
            getter: function(varBag, idService) {
                return varBag.listIndexOfLocalitiesVar.value;
            }
        },
        "ogu_WrGT_EWQotACk9r03Q": {
            getter: function(varBag, idService) {
                return varBag.bottomSheetCloseVar.value;
            }
        },
        "F4kw+hklakmry3ZgMJucJw": {
            getter: function(varBag, idService) {
                return varBag.vars.value.cacheControl_ResponseInLocal;
            }
        },
        "vnGD4w4miEuGXNQKWFZNkw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.bottomSheetIdVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "rBZ2lqJ_sUSNCBlcnQtiIA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.subState_SelectedVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "_pRkV3bU80+zbFwUVyuN5w": {
            getter: function(varBag, idService) {
                return varBag.model.variables.subState_MainVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "nbv8A2bQH0+k_tETqNjXeA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.subState_LocalitiesVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "4Bj5cWIaDUi5SmBnwNn0Fg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.subState_CountriesVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "03A+npgOLEaWsgVAnkLeRA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.sortBy_TitleVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "uEVoGbtAX0KUvDeU0FcaZw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.optionList_SelectedVar;
            }
        },
        "91PUN8J0mUK2L7jyuG4PzQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.localCacheControl_AllCountriesVar;
            }
        },
        "ocL9maPu9EWyDQSK76VfbA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.localCacheControl_AllLocalitiesVar;
            }
        },
        "HNJ8UF8kT02dSMUZLohMeg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.localCacheControl_UserInfoVar;
            }
        },
        "49ScEljnT0uMFuwIXrUrTA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.optionControlVar;
            }
        },
        "j6CktSJ+7kqCU78P_yzaHg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.lastSearched_OptionControlVar;
            }
        },
        "NKvkb7hvQEK5p4LrZ50Fow": {
            getter: function(varBag, idService) {
                return varBag.model.variables.empty_OptionControlVar;
            }
        },
        "pd5rGmbPWUGNwSc9i_BHjA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isSingleFilterVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "WWysQXhOV0yhmCQopfe4Yw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isOpen_LocalVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "MxgmNEDsjUmuFAdq61S7BA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.searchInputIdVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "Ftl8Q5Fa6U234voowH9Kxg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.forceUpdateOptionListVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "4OMbayI0F0CNO8mjudbvig": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_StartFilterIn;
            }
        },
        "wtGtXOQJGUKQgdxPGMvYYQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_OptionsIn;
            }
        },
        "F43bkm+UIkSZvv1IZD4C4A": {
            getter: function(varBag, idService) {
                return varBag.model.variables.extendedClassesIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "bZ_RFTCAVEa28ox1faJaPg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "SD2pYqNTIEWpopDOtV15+w": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Main"));
                })(varBag.model, idService);
            }
        },
        "uYi4lkKln0GMpOgCKhMdKw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Loading"));
                })(varBag.model, idService);
            }
        },
        "JyzwrCjFn0eTrWHVlaxUrA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_LoadingSection"));
                })(varBag.model, idService);
            }
        },
        "ZRVqTd2jJ0u3XL60iTJD_A": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("OptionsList"));
                })(varBag.model, idService);
            }
        },
        "BmRLqCGZ5k6b50sE0O744g": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("OptionList_Item"));
                })(varBag.model, idService);
            }
        },
        "2Uaa+Gv6v0WG6aA51oTNAA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "bbp5zfjqiUGHxNOut09Q_g": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Left"));
                })(varBag.model, idService);
            }
        },
        "1pvMM8o8xUunRT7t5Rdj6Q": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Right"));
                })(varBag.model, idService);
            }
        },
        "_93iKmSSeU2+m_dPoukEtA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HasSelected"));
                })(varBag.model, idService);
            }
        },
        "4CKoGKUHIkiATIVHlBT4AQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Options_Choices"));
                })(varBag.model, idService);
            }
        },
        "6ZCqxg2Mb0ypvDsV01grEQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Options_FlatList"));
                })(varBag.model, idService);
            }
        },
        "WnVGnumyMUW22TzUVZpHCA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Choice"));
                })(varBag.model, idService);
            }
        },
        "WURd82rj_U2g0J03_JvJhQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "G0pQc4A2q0uezKt+A6_hyg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "Pe5hGUHyDkmDjsp+e1J7fA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Footer"));
                })(varBag.model, idService);
            }
        },
        "4xyx3ZEelE+WTSsUbavt0g": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "z8YUYzfc00if7VriYIfQkg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Left"));
                })(varBag.model, idService);
            }
        },
        "wqxxnlq1aECy9cZD2ndu3A": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "EvBaN0WkaEqTzjdSqancHg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Right"));
                })(varBag.model, idService);
            }
        },
        "WRenL12Oz0C6+8PPxu_1mA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "L9BJpcXve0W8gQegWd1uoQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HasCountries"));
                })(varBag.model, idService);
            }
        },
        "Jn1gYoCzeUKhHh4OQiuBXw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HasLocalities"));
                })(varBag.model, idService);
            }
        },
        "3TyRaSXjkEqenE2yQkjXmw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("NeedSubscriptionData"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});