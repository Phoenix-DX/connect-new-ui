define("UBTConnect.App_Menu_ContactUs.ContactUsDetails.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "Connect_Communication_CS.model", "UBTConnect_Utils.model", "UBTConnectLibrary.model", "UBTJavaScriptUtils.controller", "UBTConnectLibrary.controller", "NavigationHandler.controller", "APIDomain_Directory_IS.model", "UBT_AppManager.controller", "UBTConnect.controller", "Connect_Geography_CS.model", "Connect_Communication_CS.model$UI_ContactUsFormRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect_Communication_CS", "UBTConnect_Utils.model$ContactByPhonePopupDataRec", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTConnect.model$BooleanDirectory_UserCurrentRecord", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$ButtonOptionsRec", "UBTConnectLibrary.model$AvatarIconOptionsRec", "UBTConnect_Utils.model$ContactPopupDataRec", "UBTJavaScriptUtils.controller$FeedbackMessage_AutoClose", "UBTConnect.referencesHealth$UBTJavaScriptUtils", "UBTConnectLibrary.controller$IsPhoneNumberValid", "NavigationHandler.controller$ConfirmAction", "UBTConnect.referencesHealth$NavigationHandler", "UBTConnectLibrary.controller$IsEmailValid", "UBTJavaScriptUtils.controller$JSUtils_String_CheckNumbers", "APIDomain_Directory_IS.model$Directory_UserCurrentRec", "UBTConnect.referencesHealth$APIDomain_Directory_IS", "UBT_AppManager.controller$PIN_Check", "UBTConnect.referencesHealth$UBT_AppManager", "UBTConnect.controller$Get_ContactUsFormDescription", "NavigationHandler.controller$PreventNavigation", "Connect_Geography_CS.model$CS_CountryNameRec", "UBTConnect.referencesHealth$Connect_Geography_CS", "UBTConnect.model$CS_CountryNameList"], function(OutSystems, UBTConnectModel, Connect_Communication_CSModel, UBTConnect_UtilsModel, UBTConnectLibraryModel, UBTJavaScriptUtilsController, UBTConnectLibraryController, NavigationHandlerController, APIDomain_Directory_ISModel, UBT_AppManagerController, UBTConnectController, Connect_Geography_CSModel) {
    var OS = OutSystems.Internal;

    var DataAction_GetLocalityTimezoneDataActRec = (function(_super) {
        __extends(DataAction_GetLocalityTimezoneDataActRec, _super);

        function DataAction_GetLocalityTimezoneDataActRec(defaults) {
            _super.apply(this, arguments);
        }
        DataAction_GetLocalityTimezoneDataActRec.attributesToDeclare = function() {
            return [
                this.attr("Out_TimezoneName", "out_TimezoneNameOut", "Out_TimezoneName", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, true),
                this.attr("Out_TimezoneOffset", "out_TimezoneOffsetOut", "Out_TimezoneOffset", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return 0;
                }, true)
            ].concat(_super.attributesToDeclare.call(this));
        };
        DataAction_GetLocalityTimezoneDataActRec.init();
        return DataAction_GetLocalityTimezoneDataActRec;
    })(OS.Model.DataSourceRecord);
    var DataAction_GetCountriesNamesDataActRec = (function(_super) {
        __extends(DataAction_GetCountriesNamesDataActRec, _super);

        function DataAction_GetCountriesNamesDataActRec(defaults) {
            _super.apply(this, arguments);
        }
        DataAction_GetCountriesNamesDataActRec.attributesToDeclare = function() {
            return [
                this.attr("Countries", "countriesOut", "Countries", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.CS_CountryNameList());
                }, true, UBTConnectModel.CS_CountryNameList)
            ].concat(_super.attributesToDeclare.call(this));
        };
        DataAction_GetCountriesNamesDataActRec.fromStructure = function(str) {
            return new DataAction_GetCountriesNamesDataActRec(new DataAction_GetCountriesNamesDataActRec.RecordClass({
                countriesOut: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        DataAction_GetCountriesNamesDataActRec.init();
        return DataAction_GetCountriesNamesDataActRec;
    })(OS.Model.DataSourceRecord);

    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("ContactUsForm", "contactUsFormVar", "ContactUsForm", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect_Communication_CSModel.UI_ContactUsFormRec());
                }, false, Connect_Communication_CSModel.UI_ContactUsFormRec),
                this.attr("IsFormFilled", "isFormFilledVar", "IsFormFilled", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("IsAnyFilled", "isAnyFilledVar", "IsAnyFilled", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("Description", "descriptionVar", "Description", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("MessagePrompt", "messagePromptVar", "MessagePrompt", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("isLogged", "isLoggedVar", "isLogged", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("CountryPhone", "countryPhoneVar", "CountryPhone", true, false, OS.DataTypes.DataTypes.PhoneNumber, function() {
                    return "";
                }, false),
                this.attr("isSubmiting", "isSubmitingVar", "isSubmiting", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("Rate_SelectedRate", "rate_SelectedRateVar", "Rate_SelectedRate", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return 0;
                }, false),
                this.attr("Rate_ShowRate", "rate_ShowRateVar", "Rate_ShowRate", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("Rate_UserWantToBeContacted", "rate_UserWantToBeContactedVar", "Rate_UserWantToBeContacted", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("CallPopupData", "callPopupDataVar", "CallPopupData", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnect_UtilsModel.ContactByPhonePopupDataRec());
                }, false, UBTConnect_UtilsModel.ContactByPhonePopupDataRec),
                this.attr("LocalCacheControl_UserInformation", "localCacheControl_UserInformationVar", "LocalCacheControl_UserInformation", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.BooleanDirectory_UserCurrentRecord());
                }, false, UBTConnectModel.BooleanDirectory_UserCurrentRecord),
                this.attr("isLoadingMainData", "isLoadingMainDataVar", "isLoadingMainData", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return true;
                }, false),
                this.attr("IgnorePolices", "ignorePolicesVar", "IgnorePolices", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("In_ContactSubjectId", "in_ContactSubjectIdIn", "In_ContactSubjectId", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_in_ContactSubjectIdInDataFetchStatus", "_in_ContactSubjectIdInDataFetchStatus", "_in_ContactSubjectIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_ContactSubjectTitle", "in_ContactSubjectTitleIn", "In_ContactSubjectTitle", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_in_ContactSubjectTitleInDataFetchStatus", "_in_ContactSubjectTitleInDataFetchStatus", "_in_ContactSubjectTitleInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_ListMenuOptionLabel", "in_ListMenuOptionLabelIn", "In_ListMenuOptionLabel", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_in_ListMenuOptionLabelInDataFetchStatus", "_in_ListMenuOptionLabelInDataFetchStatus", "_in_ListMenuOptionLabelInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("DataAction_GetLocalityTimezone", "dataAction_GetLocalityTimezoneDataAct", "dataAction_GetLocalityTimezoneDataAct", true, true, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new DataAction_GetLocalityTimezoneDataActRec());
                }, true, DataAction_GetLocalityTimezoneDataActRec),
                this.attr("DataAction_GetCountriesNames", "dataAction_GetCountriesNamesDataAct", "dataAction_GetCountriesNamesDataAct", true, true, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new DataAction_GetCountriesNamesDataActRec());
                }, true, DataAction_GetCountriesNamesDataActRec)
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
            return {
                Form_ContactUs: OS.Model.ValidationWidgetRecord,
                Input_FullName: OS.Model.ValidationWidgetRecord,
                Input_Email: OS.Model.ValidationWidgetRecord,
                Input_PhoneNumber: OS.Model.ValidationWidgetRecord,
                Dropdown_Country: OS.Model.ValidationWidgetRecord,
                Input_Locality: OS.Model.ValidationWidgetRecord,
                TextArea_Message: OS.Model.ValidationWidgetRecord
            };
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
        Object.defineProperty(Model, "hasValidationWidgets", {
            enumerable: true,
            configurable: true,
            get: function() {
                return true;
            }
        });

        Model.prototype.setInputs = function(inputs) {
            if ("In_ContactSubjectId" in inputs) {
                this.variables.in_ContactSubjectIdIn = OS.DataConversion.ServerDataConverter.from(inputs.In_ContactSubjectId, OS.DataTypes.DataTypes.Text);
            }

            if ("In_ContactSubjectTitle" in inputs) {
                this.variables.in_ContactSubjectTitleIn = OS.DataConversion.ServerDataConverter.from(inputs.In_ContactSubjectTitle, OS.DataTypes.DataTypes.Text);
            }

            if ("In_ListMenuOptionLabel" in inputs) {
                this.variables.in_ListMenuOptionLabelIn = OS.DataConversion.ServerDataConverter.from(inputs.In_ListMenuOptionLabel, OS.DataTypes.DataTypes.Text);
            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "App_Menu_ContactUs.ContactUsDetails");
});
define("UBTConnect.App_Menu_ContactUs.ContactUsDetails.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "Connect_Communication_CS.model", "UBTConnect_Utils.model", "UBTConnectLibrary.model", "UBTJavaScriptUtils.controller", "UBTConnectLibrary.controller", "NavigationHandler.controller", "APIDomain_Directory_IS.model", "UBT_AppManager.controller", "Connect_Geography_CS.model", "react", "OutSystems/ReactView/Main", "UBTConnect.App_Menu_ContactUs.ContactUsDetails.mvc$model", "UBTConnect.App_Menu_ContactUs.ContactUsDetails.mvc$controller", "UBTConnect.clientVariables", "UBTConnectLibrary.Layouts.Layout_DetailPage.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "UBTConnect.App_Common_Blocks.SectionSeparator.mvc$view", "UBTConnect.SubLayout.SubLayout_DirectoryDetailScreen_Section.mvc$view", "UBTConnect.App_Menu_ContactUs.ContactUs_Rate.mvc$view", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$view", "UBTConnectLibrary.ConnectPatterns.TextArea_WithCounter.mvc$view", "UBTConnectLibrary.ConnectPatterns.IconText.mvc$view", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$view", "UBTConnectLibrary.ConnectPatterns.FixedFooter.mvc$view", "OutSystemsUI_2_23.Utilities.ButtonLoading.mvc$view", "UBTConnect_Utils.CW_Common.Button.mvc$view", "UBTConnect.App_Common_Blocks_PopupDialogs.Dialog_Information.mvc$view", "UBTConnectLibrary.ConnectPatterns.CircleButton_WithLabel.mvc$view", "UBTConnect.App_Common_Blocks_PopupDialogs.Dialog_Navigation.mvc$view", "UBTConnect_Utils.CW_CTA_PopUps.ContactPopup_ByPhone.mvc$view", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$view", "UBTConnect.App_Cache.CacheControl_UserInfo_Wrapper.mvc$view", "Connect_Communication_CS.model$UI_ContactUsFormRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect_Communication_CS", "UBTConnect_Utils.model$ContactByPhonePopupDataRec", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTConnect.model$BooleanDirectory_UserCurrentRecord", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$ButtonOptionsRec", "UBTConnectLibrary.model$AvatarIconOptionsRec", "UBTConnect_Utils.model$ContactPopupDataRec", "UBTJavaScriptUtils.controller$FeedbackMessage_AutoClose", "UBTConnect.referencesHealth$UBTJavaScriptUtils", "UBTConnectLibrary.controller$IsPhoneNumberValid", "NavigationHandler.controller$ConfirmAction", "UBTConnect.referencesHealth$NavigationHandler", "UBTConnectLibrary.controller$IsEmailValid", "UBTJavaScriptUtils.controller$JSUtils_String_CheckNumbers", "APIDomain_Directory_IS.model$Directory_UserCurrentRec", "UBTConnect.referencesHealth$APIDomain_Directory_IS", "UBT_AppManager.controller$PIN_Check", "UBTConnect.referencesHealth$UBT_AppManager", "UBTConnect.controller$Get_ContactUsFormDescription", "NavigationHandler.controller$PreventNavigation", "Connect_Geography_CS.model$CS_CountryNameRec", "UBTConnect.referencesHealth$Connect_Geography_CS", "UBTConnect.model$CS_CountryNameList"], function(OutSystems, UBTConnectModel, UBTConnectController, Connect_Communication_CSModel, UBTConnect_UtilsModel, UBTConnectLibraryModel, UBTJavaScriptUtilsController, UBTConnectLibraryController, NavigationHandlerController, APIDomain_Directory_ISModel, UBT_AppManagerController, Connect_Geography_CSModel, React, OSView, UBTConnect_App_Menu_ContactUs_ContactUsDetails_mvc_model, UBTConnect_App_Menu_ContactUs_ContactUsDetails_mvc_controller, UBTConnectClientVariables, UBTConnectLibrary_Layouts_Layout_DetailPage_mvc_view, OSWidgets, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnect_App_Common_Blocks_SectionSeparator_mvc_view, UBTConnect_SubLayout_SubLayout_DirectoryDetailScreen_Section_mvc_view, UBTConnect_App_Menu_ContactUs_ContactUs_Rate_mvc_view, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, UBTConnectLibrary_ConnectPatterns_TextArea_WithCounter_mvc_view, UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnectLibrary_ConnectPatterns_FixedFooter_mvc_view, OutSystemsUI_2_23_Utilities_ButtonLoading_mvc_view, UBTConnect_Utils_CW_Common_Button_mvc_view, UBTConnect_App_Common_Blocks_PopupDialogs_Dialog_Information_mvc_view, UBTConnectLibrary_ConnectPatterns_CircleButton_WithLabel_mvc_view, UBTConnect_App_Common_Blocks_PopupDialogs_Dialog_Navigation_mvc_view, UBTConnect_Utils_CW_CTA_PopUps_ContactPopup_ByPhone_mvc_view, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view, UBTConnect_App_Cache_CacheControl_UserInfo_Wrapper_mvc_view) {
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
        View.displayName = "App_Menu_ContactUs.ContactUsDetails";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI_2_23.OutSystemsUI.css", "css/UBTConnectLibrary.UBTConnectBase.css", "css/UBTConnectLibrary.UBTConnectLibrary.css", "css/Connect2_LegacyShared.UBTConnect.css", "css/OutSystemsUI_2_23.OutSystemsUI.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_Layouts_Layout_DetailPage_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnect_App_Common_Blocks_SectionSeparator_mvc_view, UBTConnect_SubLayout_SubLayout_DirectoryDetailScreen_Section_mvc_view, UBTConnect_App_Menu_ContactUs_ContactUs_Rate_mvc_view, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, UBTConnectLibrary_ConnectPatterns_TextArea_WithCounter_mvc_view, UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnectLibrary_ConnectPatterns_FixedFooter_mvc_view, OutSystemsUI_2_23_Utilities_ButtonLoading_mvc_view, UBTConnect_Utils_CW_Common_Button_mvc_view, UBTConnect_App_Common_Blocks_PopupDialogs_Dialog_Information_mvc_view, UBTConnectLibrary_ConnectPatterns_CircleButton_WithLabel_mvc_view, UBTConnect_App_Common_Blocks_PopupDialogs_Dialog_Navigation_mvc_view, UBTConnect_Utils_CW_CTA_PopUps_ContactPopup_ByPhone_mvc_view, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view, UBTConnect_App_Cache_CacheControl_UserInfo_Wrapper_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_App_Menu_ContactUs_ContactUsDetails_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_App_Menu_ContactUs_ContactUsDetails_mvc_controller;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "title", {
            get: function() {
                return "ContactUsDetails";
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnectLibrary_Layouts_Layout_DetailPage_mvc_view, {
                inputs: {
                    In_ExtendedClass: "bottom-padding-base-button",
                    In_AlignTitleLeft: true
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
                    placeholder_Header_Title: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Expression, {
                            value: model.variables.in_ContactSubjectTitleIn,
                            _idProps: {
                                service: idService,
                                uuid: "1"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })];
                    }),
                    placeholder_Header_Right: PlaceholderContent.Empty,
                    headerContent: PlaceholderContent.Empty,
                    content: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "Content"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                            inputs: {
                                Options: model.getCachedValue(idService.getId("gwumsN8mykKiBmitrV0fnA.Options"), function() {
                                    return function() {
                                        var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                                        rec.paddingSizeAttr = function() {
                                            var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                            rec.verticalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
                                            rec.horizontalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.base;
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
                                uuid: "3",
                                alias: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                content: new PlaceholderContent(function() {
                                    return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                                        inputs: {
                                            Options: model.getCachedValue(idService.getId("VqM7sNM2KUWyiH0Gh4Nqhw.Options"), function() {
                                                return function() {
                                                    var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                                                    rec.textOptionsAttr = function() {
                                                        var rec = new UBTConnectLibraryModel.TextOptionsRec();
                                                        rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral10;
                                                        rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.small;
                                                        rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.semiBold;
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
                                            alias: "3"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        placeholders: {
                                            content: new PlaceholderContent(function() {
                                                return [React.createElement(OSWidgets.Expression, {
                                                    value: model.variables.in_ListMenuOptionLabelIn,
                                                    _idProps: {
                                                        service: idService,
                                                        uuid: "5"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider
                                                })];
                                            })
                                        },
                                        _dependencies: [asPrimitiveValue(model.variables.in_ListMenuOptionLabelIn)]
                                    }), React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                                        inputs: {
                                            Options: model.getCachedValue(idService.getId("c8HDQVmFekmddUvHo7zPeQ.Options"), function() {
                                                return function() {
                                                    var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                                                    rec.marginSizeAttr = function() {
                                                        var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                                        rec.topSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
                                                        return rec;
                                                    }();
                                                    rec.textOptionsAttr = function() {
                                                        var rec = new UBTConnectLibraryModel.TextOptionsRec();
                                                        rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.small;
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
                                            uuid: "6",
                                            alias: "4"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        placeholders: {
                                            content: new PlaceholderContent(function() {
                                                return [React.createElement(OSWidgets.Expression, {
                                                    value: model.variables.descriptionVar,
                                                    _idProps: {
                                                        service: idService,
                                                        uuid: "7"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider
                                                })];
                                            })
                                        },
                                        _dependencies: [asPrimitiveValue(model.variables.descriptionVar)]
                                    }), $if((model.variables.isLoggedVar && ((model.variables.countryPhoneVar) !== (""))), false, this, function() {
                                        return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                                            inputs: {
                                                Options: model.getCachedValue(idService.getId("KWrLtGmjnUWEV+QDD4psYw.Options"), function() {
                                                    return function() {
                                                        var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                                                        rec.marginSizeAttr = function() {
                                                            var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                                            rec.topSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.base;
                                                            return rec;
                                                        }();
                                                        rec.textOptionsAttr = function() {
                                                            var rec = new UBTConnectLibraryModel.TextOptionsRec();
                                                            rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.small;
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
                                                uuid: "8",
                                                alias: "5"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider,
                                            placeholders: {
                                                content: new PlaceholderContent(function() {
                                                    return [React.createElement(OSWidgets.Expression, {
                                                        value: "Prefer to speak with someone? \r\nGive our ",
                                                        _idProps: {
                                                            service: idService,
                                                            uuid: "9"
                                                        },
                                                        _widgetRecordProvider: widgetsRecordProvider
                                                    }), React.createElement(OSWidgets.Link, {
                                                        enabled: true,
                                                        gridProperties: {
                                                            marginLeft: "0"
                                                        },
                                                        onClick: function() {
                                                            var eventHandlerContext = callContext.clone();
                                                            return OS.Flow.tryFinally(function() {
                                                                var varBag = {};
                                                                controller.pushDebuggerContext(eventHandlerContext);

                                                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "App_Menu_ContactUs/ContactUsDetails/Link OnClick");
                                                                controller.onClick_SupportTeam$Action(controller.callContext(eventHandlerContext));
                                                            }, function() {
                                                                controller.popDebuggerContext(eventHandlerContext);
                                                            });

                                                            ;
                                                        },
                                                        style: "text-underline",
                                                        visible: true,
                                                        _idProps: {
                                                            service: idService,
                                                            uuid: "10"
                                                        },
                                                        _widgetRecordProvider: widgetsRecordProvider
                                                    }, "Support Team"), React.createElement(OSWidgets.Expression, {
                                                        gridProperties: {
                                                            marginLeft: "0"
                                                        },
                                                        value: " a call.",
                                                        _idProps: {
                                                            service: idService,
                                                            uuid: "11"
                                                        },
                                                        _widgetRecordProvider: widgetsRecordProvider
                                                    })];
                                                })
                                            },
                                            _dependencies: []
                                        })];
                                    }, function() {
                                        return [];
                                    })];
                                })
                            },
                            _dependencies: [asPrimitiveValue(model.variables.countryPhoneVar), asPrimitiveValue(model.variables.isLoggedVar), asPrimitiveValue(model.variables.descriptionVar), asPrimitiveValue(model.variables.in_ListMenuOptionLabelIn)]
                        }), React.createElement(UBTConnect_App_Common_Blocks_SectionSeparator_mvc_view, {
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
                                uuid: "12",
                                alias: "6"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        }), React.createElement(UBTConnect_SubLayout_SubLayout_DirectoryDetailScreen_Section_mvc_view, {
                            inputs: {
                                In_Title: ""
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
                                alias: "7"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                placeholder_SectionContent: new PlaceholderContent(function() {
                                    return [$if(model.variables.rate_ShowRateVar, false, this, function() {
                                        return [React.createElement(UBTConnect_App_Menu_ContactUs_ContactUs_Rate_mvc_view, {
                                            inputs: {
                                                SelectedRate: model.variables.rate_SelectedRateVar,
                                                isEnabled: !(model.variables.isSubmitingVar)
                                            },
                                            events: {
                                                _handleError: function(ex) {
                                                    controller.handleError(ex);
                                                },
                                                rateSelected$Action: function(rateIn) {
                                                    var eventHandlerContext = callContext.clone();
                                                    return OS.Flow.tryFinally(function() {
                                                        var varBag = {};
                                                        controller.pushDebuggerContext(eventHandlerContext);

                                                        OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "App_Menu_ContactUs/ContactUs_Rate RateSelected");
                                                        controller.contactUs_RateRateSelected$Action(rateIn, controller.callContext(eventHandlerContext));
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
                                                uuid: "14",
                                                alias: "8"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider,
                                            _dependencies: []
                                        })];
                                    }, function() {
                                        return [];
                                    }), $if(model.variables.isLoggedVar, false, this, function() {
                                        return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                                            inputs: {
                                                Options: model.getCachedValue(idService.getId("Bg+AWhZ71k2Qa9hMagAt+A.Options"), function() {
                                                    return function() {
                                                        var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                                                        rec.marginSizeAttr = function() {
                                                            var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                                            rec.bottomSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
                                                            return rec;
                                                        }();
                                                        rec.textOptionsAttr = function() {
                                                            var rec = new UBTConnectLibraryModel.TextOptionsRec();
                                                            rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.small;
                                                            rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.semiBold;
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
                                                uuid: "15",
                                                alias: "9"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider,
                                            placeholders: {
                                                content: new PlaceholderContent(function() {
                                                    return [React.createElement(OSWidgets.Expression, {
                                                        value: model.getCachedValue(idService.getId("D4UwqGgzRkO4zwpGf2TsDA.Value"), function() {
                                                            return (((model.variables.in_ContactSubjectIdIn === UBTConnectModel.staticEntities.type_ContactSubject.generalSuggestionsFeedbackRating)) ? ("Please provide your suggestions and feedback") : ("How can we help you?"));
                                                        }, function() {
                                                            return model.variables.in_ContactSubjectIdIn;
                                                        }),
                                                        _idProps: {
                                                            service: idService,
                                                            uuid: "16"
                                                        },
                                                        _widgetRecordProvider: widgetsRecordProvider
                                                    })];
                                                })
                                            },
                                            _dependencies: [asPrimitiveValue(model.variables.in_ContactSubjectIdIn)]
                                        })];
                                    }, function() {
                                        return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                                            inputs: {
                                                Options: model.getCachedValue(idService.getId("UNWhkF3fj0+mm7worNaa+w.Options"), function() {
                                                    return function() {
                                                        var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                                                        rec.marginSizeAttr = function() {
                                                            var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                                            rec.bottomSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
                                                            return rec;
                                                        }();
                                                        rec.textOptionsAttr = function() {
                                                            var rec = new UBTConnectLibraryModel.TextOptionsRec();
                                                            rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.small;
                                                            rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.semiBold;
                                                            rec.isItalicAttr = true;
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
                                                uuid: "17",
                                                alias: "10"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider,
                                            placeholders: {
                                                content: new PlaceholderContent(function() {
                                                    return [React.createElement(OSWidgets.Expression, {
                                                        value: "All fields are required.",
                                                        _idProps: {
                                                            service: idService,
                                                            uuid: "18"
                                                        },
                                                        _widgetRecordProvider: widgetsRecordProvider
                                                    })];
                                                })
                                            },
                                            _dependencies: []
                                        })];
                                    }), React.createElement(UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, {
                                        inputs: {
                                            In_IsLoading: model.variables.isLoadingMainDataVar
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
                                            uuid: "19",
                                            alias: "11"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        placeholders: {
                                            placeholder_LoadingSection: new PlaceholderContent(function() {
                                                return [React.createElement(OSWidgets.Form, {
                                                    _validationProps: {
                                                        validationService: validationService
                                                    },
                                                    gridProperties: {
                                                        classes: "OSFillParent"
                                                    },
                                                    style: "form",
                                                    _idProps: {
                                                        service: idService,
                                                        name: "Form_ContactUs"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider
                                                }, $if(!(model.variables.isLoggedVar), false, this, function() {
                                                    return [React.createElement(OSWidgets.Container, {
                                                        align: /*Default*/ 0,
                                                        animate: false,
                                                        visible: true,
                                                        _idProps: {
                                                            service: idService,
                                                            uuid: "21"
                                                        },
                                                        _widgetRecordProvider: widgetsRecordProvider
                                                    }, $if(true, false, this, function() {
                                                        return [React.createElement(OSWidgets.Label, {
                                                            gridProperties: {
                                                                classes: "OSFillParent"
                                                            },
                                                            mandatory: true,
                                                            targetWidget: "Input_FullName",
                                                            _idProps: {
                                                                service: idService,
                                                                uuid: "22"
                                                            },
                                                            _widgetRecordProvider: widgetsRecordProvider
                                                        }, "Full Name"), React.createElement(OSWidgets.Input, {
                                                            _validationProps: {
                                                                validationService: validationService,
                                                                validationParentId: idService.getId("Form_ContactUs")
                                                            },
                                                            enabled: !(model.variables.isSubmitingVar),
                                                            gridProperties: {
                                                                classes: "OSFillParent"
                                                            },
                                                            inputType: /*Text*/ 0,
                                                            mandatory: true,
                                                            maxLength: 50,
                                                            onChange: function() {
                                                                var eventHandlerContext = callContext.clone();
                                                                return OS.Flow.tryFinally(function() {
                                                                    var varBag = {};
                                                                    controller.pushDebuggerContext(eventHandlerContext);

                                                                    OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "App_Menu_ContactUs/ContactUsDetails/Input_FullName OnChange");
                                                                    controller.onChange_FormInput$Action(controller.callContext(eventHandlerContext));
                                                                }, function() {
                                                                    controller.popDebuggerContext(eventHandlerContext);
                                                                });

                                                                ;
                                                            },
                                                            prompt: "Enter Full Name",
                                                            style: "form-control",
                                                            variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.contactUsFormVar.fullNameAttr, function(value) {
                                                                model.variables.contactUsFormVar.fullNameAttr = value;
                                                            }),
                                                            _idProps: {
                                                                service: idService,
                                                                name: "Input_FullName"
                                                            },
                                                            _widgetRecordProvider: widgetsRecordProvider
                                                        })];
                                                    }, function() {
                                                        return [];
                                                    }), $if(false, false, this, function() {
                                                        return [];
                                                    }, function() {
                                                        return [];
                                                    })), React.createElement(OSWidgets.Container, {
                                                        align: /*Default*/ 0,
                                                        animate: false,
                                                        visible: true,
                                                        _idProps: {
                                                            service: idService,
                                                            uuid: "24"
                                                        },
                                                        _widgetRecordProvider: widgetsRecordProvider
                                                    }, React.createElement(OSWidgets.Label, {
                                                        gridProperties: {
                                                            classes: "OSFillParent"
                                                        },
                                                        mandatory: true,
                                                        targetWidget: "Input_Email",
                                                        _idProps: {
                                                            service: idService,
                                                            uuid: "25"
                                                        },
                                                        _widgetRecordProvider: widgetsRecordProvider
                                                    }, "Email"), React.createElement(OSWidgets.Input, {
                                                        _validationProps: {
                                                            validationService: validationService,
                                                            validationParentId: idService.getId("Form_ContactUs")
                                                        },
                                                        enabled: !(model.variables.isSubmitingVar),
                                                        gridProperties: {
                                                            classes: "OSFillParent"
                                                        },
                                                        inputType: /*Email*/ 7,
                                                        mandatory: true,
                                                        maxLength: 50,
                                                        onChange: function() {
                                                            var eventHandlerContext = callContext.clone();
                                                            return OS.Flow.tryFinally(function() {
                                                                var varBag = {};
                                                                controller.pushDebuggerContext(eventHandlerContext);

                                                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "App_Menu_ContactUs/ContactUsDetails/Input_Email OnChange");
                                                                controller.onChange_Email$Action(controller.callContext(eventHandlerContext));
                                                            }, function() {
                                                                controller.popDebuggerContext(eventHandlerContext);
                                                            });

                                                            ;
                                                        },
                                                        prompt: "Enter Your Email Address",
                                                        style: "form-control",
                                                        variable: model.createVariable(OS.DataTypes.DataTypes.Email, model.variables.contactUsFormVar.emailAttr, function(value) {
                                                            model.variables.contactUsFormVar.emailAttr = value;
                                                        }),
                                                        _idProps: {
                                                            service: idService,
                                                            name: "Input_Email"
                                                        },
                                                        _widgetRecordProvider: widgetsRecordProvider
                                                    })), React.createElement(OSWidgets.Container, {
                                                        align: /*Default*/ 0,
                                                        animate: false,
                                                        visible: true,
                                                        _idProps: {
                                                            service: idService,
                                                            uuid: "27"
                                                        },
                                                        _widgetRecordProvider: widgetsRecordProvider
                                                    }, React.createElement(OSWidgets.Label, {
                                                        gridProperties: {
                                                            classes: "OSFillParent"
                                                        },
                                                        mandatory: true,
                                                        targetWidget: "Input_PhoneNumber",
                                                        _idProps: {
                                                            service: idService,
                                                            uuid: "28"
                                                        },
                                                        _widgetRecordProvider: widgetsRecordProvider
                                                    }, "Phone Number"), React.createElement(OSWidgets.Input, {
                                                        _validationProps: {
                                                            validationService: validationService,
                                                            validationParentId: idService.getId("Form_ContactUs")
                                                        },
                                                        enabled: !(model.variables.isSubmitingVar),
                                                        gridProperties: {
                                                            classes: "OSFillParent"
                                                        },
                                                        inputType: /*Phone*/ 6,
                                                        mandatory: true,
                                                        maxLength: 50,
                                                        onChange: function() {
                                                            var eventHandlerContext = callContext.clone();
                                                            return OS.Flow.tryFinally(function() {
                                                                var varBag = {};
                                                                controller.pushDebuggerContext(eventHandlerContext);

                                                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "App_Menu_ContactUs/ContactUsDetails/Input_PhoneNumber OnChange");
                                                                controller.onChange_PhoneNumber$Action(controller.callContext(eventHandlerContext));
                                                            }, function() {
                                                                controller.popDebuggerContext(eventHandlerContext);
                                                            });

                                                            ;
                                                        },
                                                        prompt: "Enter Phone Number",
                                                        style: "form-control",
                                                        variable: model.createVariable(OS.DataTypes.DataTypes.PhoneNumber, model.variables.contactUsFormVar.phoneNumberAttr, function(value) {
                                                            model.variables.contactUsFormVar.phoneNumberAttr = value;
                                                        }),
                                                        _idProps: {
                                                            service: idService,
                                                            name: "Input_PhoneNumber"
                                                        },
                                                        _widgetRecordProvider: widgetsRecordProvider
                                                    })), React.createElement(OSWidgets.Container, {
                                                        align: /*Default*/ 0,
                                                        animate: false,
                                                        visible: true,
                                                        _idProps: {
                                                            service: idService,
                                                            uuid: "30"
                                                        },
                                                        _widgetRecordProvider: widgetsRecordProvider
                                                    }, React.createElement(OSWidgets.Label, {
                                                        gridProperties: {
                                                            classes: "OSFillParent"
                                                        },
                                                        mandatory: true,
                                                        targetWidget: "Dropdown_Country",
                                                        _idProps: {
                                                            service: idService,
                                                            uuid: "31"
                                                        },
                                                        _widgetRecordProvider: widgetsRecordProvider
                                                    }, "Country"), React.createElement(OSWidgets.Dropdown, {
                                                        _validationProps: {
                                                            validationService: validationService,
                                                            validationParentId: idService.getId("Form_ContactUs")
                                                        },
                                                        dropdownMode: /*Custom*/ 1,
                                                        emptyValue: "Select Your Country",
                                                        enabled: !(model.variables.isSubmitingVar),
                                                        list: model.variables.dataAction_GetCountriesNamesDataAct.countriesOut,
                                                        mandatory: true,
                                                        onChange: function() {
                                                            var eventHandlerContext = callContext.clone();
                                                            return OS.Flow.tryFinally(function() {
                                                                var varBag = {};
                                                                controller.pushDebuggerContext(eventHandlerContext);

                                                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "App_Menu_ContactUs/ContactUsDetails/Dropdown_Country OnChange");
                                                                controller.onChange_FormInput$Action(controller.callContext(eventHandlerContext));
                                                            }, function() {
                                                                controller.popDebuggerContext(eventHandlerContext);
                                                            });

                                                            ;
                                                        },
                                                        style: "dropdown",
                                                        values: function(elem) {
                                                            return elem.codeAttr;
                                                        },
                                                        variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.contactUsFormVar.countryAttr, function(value) {
                                                            model.variables.contactUsFormVar.countryAttr = value;
                                                        }),
                                                        _idProps: {
                                                            service: idService,
                                                            name: "Dropdown_Country"
                                                        },
                                                        _widgetRecordProvider: widgetsRecordProvider,
                                                        list_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.dataAction_GetCountriesNamesDataAct.dataFetchStatusAttr),
                                                        placeholders: {
                                                            content: new IteratorPlaceholderContent(function(idService, callContext) {
                                                                return [React.createElement(OSWidgets.Container, {
                                                                    align: /*Default*/ 0,
                                                                    animate: false,
                                                                    visible: true,
                                                                    _idProps: {
                                                                        service: idService,
                                                                        uuid: "33"
                                                                    },
                                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                                    _dependencies: [asPrimitiveValue(model.variables.dataAction_GetCountriesNamesDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.dataAction_GetCountriesNamesDataAct.countriesOut.getCurrent(callContext.iterationContext).nameAttr)]
                                                                }, React.createElement(OSWidgets.Expression, {
                                                                    value: model.variables.dataAction_GetCountriesNamesDataAct.countriesOut.getCurrent(callContext.iterationContext).nameAttr,
                                                                    _idProps: {
                                                                        service: idService,
                                                                        uuid: "34"
                                                                    },
                                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                                    value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.dataAction_GetCountriesNamesDataAct.dataFetchStatusAttr)
                                                                }))];
                                                            }, callContext, idService, "1")
                                                        },
                                                        _dependencies: [asPrimitiveValue(model.variables.dataAction_GetCountriesNamesDataAct.dataFetchStatusAttr)]
                                                    })), React.createElement(OSWidgets.Container, {
                                                        align: /*Default*/ 0,
                                                        animate: false,
                                                        visible: true,
                                                        _idProps: {
                                                            service: idService,
                                                            uuid: "35"
                                                        },
                                                        _widgetRecordProvider: widgetsRecordProvider
                                                    }, React.createElement(OSWidgets.Label, {
                                                        gridProperties: {
                                                            classes: "OSFillParent"
                                                        },
                                                        mandatory: true,
                                                        targetWidget: "Input_Locality",
                                                        _idProps: {
                                                            service: idService,
                                                            uuid: "36"
                                                        },
                                                        _widgetRecordProvider: widgetsRecordProvider
                                                    }, "Locality"), React.createElement(OSWidgets.Input, {
                                                        _validationProps: {
                                                            validationService: validationService,
                                                            validationParentId: idService.getId("Form_ContactUs")
                                                        },
                                                        enabled: !(model.variables.isSubmitingVar),
                                                        gridProperties: {
                                                            classes: "OSFillParent"
                                                        },
                                                        inputType: /*Text*/ 0,
                                                        mandatory: true,
                                                        maxLength: 50,
                                                        onChange: function() {
                                                            var eventHandlerContext = callContext.clone();
                                                            return OS.Flow.tryFinally(function() {
                                                                var varBag = {};
                                                                controller.pushDebuggerContext(eventHandlerContext);

                                                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "App_Menu_ContactUs/ContactUsDetails/Input_Locality OnChange");
                                                                controller.onChange_FormInput$Action(controller.callContext(eventHandlerContext));
                                                            }, function() {
                                                                controller.popDebuggerContext(eventHandlerContext);
                                                            });

                                                            ;
                                                        },
                                                        prompt: "Enter Your Locality",
                                                        style: "form-control",
                                                        variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.contactUsFormVar.localityAttr, function(value) {
                                                            model.variables.contactUsFormVar.localityAttr = value;
                                                        }),
                                                        _idProps: {
                                                            service: idService,
                                                            name: "Input_Locality"
                                                        },
                                                        _widgetRecordProvider: widgetsRecordProvider
                                                    }))];
                                                }, function() {
                                                    return [];
                                                }), React.createElement(OSWidgets.Container, {
                                                    align: /*Default*/ 0,
                                                    animate: false,
                                                    visible: true,
                                                    _idProps: {
                                                        service: idService,
                                                        uuid: "38"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider
                                                }, React.createElement(UBTConnectLibrary_ConnectPatterns_TextArea_WithCounter_mvc_view, {
                                                    inputs: {
                                                        In_InitialLength: 0
                                                    },
                                                    events: {
                                                        _handleError: function(ex) {
                                                            controller.handleError(ex);
                                                        }
                                                    },
                                                    _validationProps: {
                                                        validationService: validationService,
                                                        validationParentId: idService.getId("Form_ContactUs")
                                                    },
                                                    _idProps: {
                                                        service: idService,
                                                        uuid: "39",
                                                        alias: "12"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                    placeholders: {
                                                        placeholder_Input: new PlaceholderContent(function() {
                                                            return [React.createElement(OSWidgets.Label, {
                                                                gridProperties: {
                                                                    classes: "OSFillParent"
                                                                },
                                                                mandatory: true,
                                                                targetWidget: "TextArea_Message",
                                                                _idProps: {
                                                                    service: idService,
                                                                    uuid: "40"
                                                                },
                                                                _widgetRecordProvider: widgetsRecordProvider
                                                            }, "Message"), React.createElement(OSWidgets.TextArea, {
                                                                _validationProps: {
                                                                    validationService: validationService,
                                                                    validationParentId: idService.getId("Form_ContactUs")
                                                                },
                                                                enabled: !(model.variables.isSubmitingVar),
                                                                gridProperties: {
                                                                    classes: "OSFillParent"
                                                                },
                                                                mandatory: true,
                                                                maxLength: 500,
                                                                onChange: function() {
                                                                    var eventHandlerContext = callContext.clone();
                                                                    return OS.Flow.tryFinally(function() {
                                                                        var varBag = {};
                                                                        controller.pushDebuggerContext(eventHandlerContext);

                                                                        OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "App_Menu_ContactUs/ContactUsDetails/TextArea_Message OnChange");
                                                                        controller.onChange_FormInput$Action(controller.callContext(eventHandlerContext));
                                                                    }, function() {
                                                                        controller.popDebuggerContext(eventHandlerContext);
                                                                    });

                                                                    ;
                                                                },
                                                                prompt: model.variables.messagePromptVar,
                                                                style: "form-control",
                                                                textLines: 3,
                                                                variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.contactUsFormVar.messageAttr, function(value) {
                                                                    model.variables.contactUsFormVar.messageAttr = value;
                                                                }),
                                                                _idProps: {
                                                                    service: idService,
                                                                    name: "TextArea_Message"
                                                                },
                                                                _widgetRecordProvider: widgetsRecordProvider
                                                            })];
                                                        })
                                                    },
                                                    _dependencies: [asPrimitiveValue(model.variables.isSubmitingVar), asPrimitiveValue(model.variables.messagePromptVar), asPrimitiveValue(model.variables.contactUsFormVar.messageAttr)]
                                                })), $if(model.variables.rate_ShowRateVar, false, this, function() {
                                                    return [React.createElement(UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, {
                                                        inputs: {
                                                            Text: "I would like to be contacted about my feedback. "
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

                                                                    OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/IconText Clicked");
                                                                    controller.onClick_UserWantToBeContacted$Action(controller.callContext(eventHandlerContext));
                                                                }, function() {
                                                                    controller.popDebuggerContext(eventHandlerContext);
                                                                });

                                                                ;
                                                            }
                                                        },
                                                        _validationProps: {
                                                            validationService: validationService,
                                                            validationParentId: idService.getId("Form_ContactUs")
                                                        },
                                                        _idProps: {
                                                            service: idService,
                                                            uuid: "42",
                                                            alias: "13"
                                                        },
                                                        _widgetRecordProvider: widgetsRecordProvider,
                                                        placeholders: {
                                                            icon: new PlaceholderContent(function() {
                                                                return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
                                                                    inputs: {
                                                                        In_IconId: model.getCachedValue(idService.getId("EFyYcydpy0O2wgcSQce+QA.In_IconId"), function() {
                                                                            return ((model.variables.rate_UserWantToBeContactedVar) ? (UBTConnectModel.staticEntities.uBT_Icons2.checkbox) : (UBTConnectModel.staticEntities.uBT_Icons2.checkboxOutlineBlank));
                                                                        }, function() {
                                                                            return model.variables.rate_UserWantToBeContactedVar;
                                                                        }),
                                                                        In_ColorId: model.getCachedValue(idService.getId("EFyYcydpy0O2wgcSQce+QA.In_ColorId"), function() {
                                                                            return ((model.variables.rate_UserWantToBeContactedVar) ? (OS.BuiltinFunctions.nullTextIdentifier()) : (UBTConnectModel.staticEntities.uBT_Color.neutral5));
                                                                        }, function() {
                                                                            return model.variables.rate_UserWantToBeContactedVar;
                                                                        })
                                                                    },
                                                                    events: {
                                                                        _handleError: function(ex) {
                                                                            controller.handleError(ex);
                                                                        }
                                                                    },
                                                                    _validationProps: {
                                                                        validationService: validationService,
                                                                        validationParentId: idService.getId("Form_ContactUs")
                                                                    },
                                                                    _idProps: {
                                                                        service: idService,
                                                                        uuid: "43",
                                                                        alias: "14"
                                                                    },
                                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                                    _dependencies: []
                                                                })];
                                                            })
                                                        },
                                                        _dependencies: [asPrimitiveValue(model.variables.rate_UserWantToBeContactedVar)]
                                                    })];
                                                }, function() {
                                                    return [];
                                                }))];
                                            })
                                        },
                                        _dependencies: [asPrimitiveValue(model.variables.rate_UserWantToBeContactedVar), asPrimitiveValue(model.variables.rate_ShowRateVar), asPrimitiveValue(model.variables.messagePromptVar), asPrimitiveValue(model.variables.dataAction_GetCountriesNamesDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.dataAction_GetCountriesNamesDataAct.countriesOut), asPrimitiveValue(model.variables.isSubmitingVar), asPrimitiveValue(model.variables.contactUsFormVar.messageAttr), asPrimitiveValue(model.variables.contactUsFormVar.localityAttr), asPrimitiveValue(model.variables.contactUsFormVar.countryAttr), asPrimitiveValue(model.variables.contactUsFormVar.phoneNumberAttr), asPrimitiveValue(model.variables.contactUsFormVar.emailAttr), asPrimitiveValue(model.variables.contactUsFormVar.fullNameAttr), asPrimitiveValue(model.variables.isLoggedVar)]
                                    })];
                                })
                            },
                            _dependencies: [asPrimitiveValue(model.variables.rate_UserWantToBeContactedVar), asPrimitiveValue(model.variables.messagePromptVar), asPrimitiveValue(model.variables.dataAction_GetCountriesNamesDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.dataAction_GetCountriesNamesDataAct.countriesOut), asPrimitiveValue(model.variables.contactUsFormVar.messageAttr), asPrimitiveValue(model.variables.contactUsFormVar.localityAttr), asPrimitiveValue(model.variables.contactUsFormVar.countryAttr), asPrimitiveValue(model.variables.contactUsFormVar.phoneNumberAttr), asPrimitiveValue(model.variables.contactUsFormVar.emailAttr), asPrimitiveValue(model.variables.contactUsFormVar.fullNameAttr), asPrimitiveValue(model.variables.isLoadingMainDataVar), asPrimitiveValue(model.variables.in_ContactSubjectIdIn), asPrimitiveValue(model.variables.isLoggedVar), asPrimitiveValue(model.variables.isSubmitingVar), asPrimitiveValue(model.variables.rate_SelectedRateVar), asPrimitiveValue(model.variables.rate_ShowRateVar)]
                        })), React.createElement(UBTConnectLibrary_ConnectPatterns_FixedFooter_mvc_view, {
                            inputs: {
                                ExpectedFooterHeight: "calc(2 * var(--space-base) + var(--ubt-button-height-m))",
                                ContentContainerId: idService.getId("Content"),
                                useBottomBar: false
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
                                uuid: "44",
                                alias: "15"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                content: new PlaceholderContent(function() {
                                    return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                                        inputs: {
                                            Options: model.getCachedValue(idService.getId("SPS02WzdoUmyiPJCeK5X7w.Options"), function() {
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
                                                    rec.shadowIdAttr = UBTConnectModel.staticEntities.uBT_Shadow.extraSmallTop;
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
                                            uuid: "45",
                                            alias: "16"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        placeholders: {
                                            content: new PlaceholderContent(function() {
                                                return [React.createElement(OutSystemsUI_2_23_Utilities_ButtonLoading_mvc_view, {
                                                    inputs: {
                                                        IsLoading: model.variables.isSubmitingVar
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
                                                        uuid: "46",
                                                        alias: "17"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                    placeholders: {
                                                        button: new PlaceholderContent(function() {
                                                            return [React.createElement(UBTConnect_Utils_CW_Common_Button_mvc_view, {
                                                                inputs: {
                                                                    ButtonText: "Send",
                                                                    IsDisabled: (!(model.variables.isFormFilledVar) || model.variables.isLoadingMainDataVar)
                                                                },
                                                                events: {
                                                                    _handleError: function(ex) {
                                                                        controller.handleError(ex);
                                                                    },
                                                                    buttonOnClick$Action: function() {
                                                                        return Promise.resolve().then(function() {
                                                                            var eventHandlerContext = callContext.clone();
                                                                            return OS.Flow.tryFinally(function() {
                                                                                var varBag = {};
                                                                                controller.pushDebuggerContext(eventHandlerContext);

                                                                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "CW_Common/Button buttonOnClick");
                                                                                return controller.onClick_SubmitForm$Action(controller.callContext(eventHandlerContext));
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
                                                                    uuid: "47",
                                                                    alias: "18"
                                                                },
                                                                _widgetRecordProvider: widgetsRecordProvider,
                                                                _dependencies: []
                                                            })];
                                                        })
                                                    },
                                                    _dependencies: [asPrimitiveValue(model.variables.isLoadingMainDataVar), asPrimitiveValue(model.variables.isFormFilledVar)]
                                                })];
                                            })
                                        },
                                        _dependencies: [asPrimitiveValue(model.variables.isLoadingMainDataVar), asPrimitiveValue(model.variables.isFormFilledVar), asPrimitiveValue(model.variables.isSubmitingVar)]
                                    })];
                                })
                            },
                            _dependencies: [asPrimitiveValue(model.variables.isLoadingMainDataVar), asPrimitiveValue(model.variables.isFormFilledVar), asPrimitiveValue(model.variables.isSubmitingVar)]
                        }), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "PopUps"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(UBTConnect_App_Common_Blocks_PopupDialogs_Dialog_Information_mvc_view, {
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
                                name: "SubmittedConfirmation",
                                alias: "19"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                placeholder_Header: new PlaceholderContent(function() {
                                    return [React.createElement(OSWidgets.Expression, {
                                        value: "Thank you",
                                        _idProps: {
                                            service: idService,
                                            uuid: "50"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    })];
                                }),
                                placeholder_Body: new PlaceholderContent(function() {
                                    return [React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        style: "text-align-center",
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "51"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(UBTConnectLibrary_ConnectPatterns_CircleButton_WithLabel_mvc_view, {
                                        inputs: {
                                            SizeId: UBTConnectModel.staticEntities.uBT_AvatarSize.base_52,
                                            BackgroundColorId: UBTConnectModel.staticEntities.uBT_Color.greenLightest
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
                                            uuid: "52",
                                            alias: "20"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        placeholders: {
                                            icon: new PlaceholderContent(function() {
                                                return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
                                                    inputs: {
                                                        In_SizeId: UBTConnectModel.staticEntities.uBT_IconsSize.display_36,
                                                        In_ColorId: UBTConnectModel.staticEntities.uBT_Color.greenDarker,
                                                        In_IconId: UBTConnectModel.staticEntities.uBT_Icons2.mail
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
                                                        uuid: "53",
                                                        alias: "21"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                    _dependencies: []
                                                })];
                                            }),
                                            badge: PlaceholderContent.Empty,
                                            text: PlaceholderContent.Empty
                                        },
                                        _dependencies: []
                                    }), $if(false, false, this, function() {
                                        return [];
                                    }, function() {
                                        return [];
                                    })), React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                                        inputs: {
                                            Options: model.getCachedValue(idService.getId("DVAD1N3kBUaVCRWiYdTmgw.Options"), function() {
                                                return function() {
                                                    var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                                                    rec.marginSizeAttr = function() {
                                                        var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                                        rec.topSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.base;
                                                        return rec;
                                                    }();
                                                    rec.textOptionsAttr = function() {
                                                        var rec = new UBTConnectLibraryModel.TextOptionsRec();
                                                        rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.small;
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
                                            uuid: "54",
                                            alias: "22"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        placeholders: {
                                            content: new PlaceholderContent(function() {
                                                return [React.createElement(OSWidgets.Expression, {
                                                    value: "Your message has been sent. A member from our Customer Care Team will be in touch soon.",
                                                    _idProps: {
                                                        service: idService,
                                                        uuid: "55"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider
                                                })];
                                            })
                                        },
                                        _dependencies: []
                                    })];
                                }),
                                placeholder_ButtonLabel: new PlaceholderContent(function() {
                                    return ["Close"];
                                })
                            },
                            _dependencies: []
                        }), $if(model.variables.isAnyFilledVar, false, this, function() {
                            return [React.createElement(UBTConnect_App_Common_Blocks_PopupDialogs_Dialog_Navigation_mvc_view, {
                                inputs: {},
                                events: {
                                    _handleError: function(ex) {
                                        controller.handleError(ex);
                                    },
                                    event_OnBackNavigation$Action: function(event_NavigationEventIn) {
                                        var eventHandlerContext = callContext.clone();
                                        return OS.Flow.tryFinally(function() {
                                            var varBag = {};
                                            controller.pushDebuggerContext(eventHandlerContext);

                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "App_Common_Blocks_PopupDialogs/Dialog_Navigation Event_OnBackNavigation");
                                            controller.onBackNavigation_ConfirmDiscard$Action(event_NavigationEventIn, controller.callContext(eventHandlerContext));
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
                                    uuid: "56",
                                    alias: "23"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                placeholders: {
                                    placeholder_Header: new PlaceholderContent(function() {
                                        return [React.createElement(OSWidgets.Expression, {
                                            value: "Delete message?",
                                            _idProps: {
                                                service: idService,
                                                uuid: "57"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        })];
                                    }),
                                    placeholder_Body: new PlaceholderContent(function() {
                                        return [React.createElement(OSWidgets.Expression, {
                                            value: "Are you sure you want to delete this message?",
                                            _idProps: {
                                                service: idService,
                                                uuid: "58"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        })];
                                    })
                                },
                                _dependencies: []
                            })];
                        }, function() {
                            return [];
                        }), React.createElement(UBTConnect_Utils_CW_CTA_PopUps_ContactPopup_ByPhone_mvc_view, {
                            inputs: {
                                In_CallPopupData: model.variables.callPopupDataVar,
                                In_ImageSizeId: UBTConnectModel.staticEntities.uBT_ImageSize.auto
                            },
                            events: {
                                _handleError: function(ex) {
                                    controller.handleError(ex);
                                },
                                event_Cancel$Action: function() {
                                    var eventHandlerContext = callContext.clone();
                                    return OS.Flow.tryFinally(function() {
                                        var varBag = {};
                                        controller.pushDebuggerContext(eventHandlerContext);

                                        OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "CW_CTA_PopUps/ContactPopup_ByPhone Event_Cancel");
                                        controller.handler_CallPopup_Cancel$Action(controller.callContext(eventHandlerContext));
                                    }, function() {
                                        controller.popDebuggerContext(eventHandlerContext);
                                    });

                                    ;
                                },
                                event_Call$Action: function(event_NumberIn) {
                                    var eventHandlerContext = callContext.clone();
                                    return OS.Flow.tryFinally(function() {
                                        var varBag = {};
                                        controller.pushDebuggerContext(eventHandlerContext);

                                        OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "CW_CTA_PopUps/ContactPopup_ByPhone Event_Call");
                                        controller.handler_CallPopup_Cancel$Action(controller.callContext(eventHandlerContext));
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
                                uuid: "59",
                                alias: "24"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        }))];
                    }),
                    bottom: PlaceholderContent.Empty,
                    placeholder_CommonUI_Inside_Layout: new PlaceholderContent(function() {
                        return [React.createElement(UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view, {
                            inputs: {
                                In_IgnorePolicy: model.variables.ignorePolicesVar
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
                                uuid: "60",
                                alias: "25"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        })];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.ignorePolicesVar), asPrimitiveValue(model.variables.callPopupDataVar), asPrimitiveValue(model.variables.isAnyFilledVar), asPrimitiveValue(model.variables.isFormFilledVar), asPrimitiveValue(model.variables.rate_UserWantToBeContactedVar), asPrimitiveValue(model.variables.messagePromptVar), asPrimitiveValue(model.variables.dataAction_GetCountriesNamesDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.dataAction_GetCountriesNamesDataAct.countriesOut), asPrimitiveValue(model.variables.contactUsFormVar.messageAttr), asPrimitiveValue(model.variables.contactUsFormVar.localityAttr), asPrimitiveValue(model.variables.contactUsFormVar.countryAttr), asPrimitiveValue(model.variables.contactUsFormVar.phoneNumberAttr), asPrimitiveValue(model.variables.contactUsFormVar.emailAttr), asPrimitiveValue(model.variables.contactUsFormVar.fullNameAttr), asPrimitiveValue(model.variables.isLoadingMainDataVar), asPrimitiveValue(model.variables.in_ContactSubjectIdIn), asPrimitiveValue(model.variables.isSubmitingVar), asPrimitiveValue(model.variables.rate_SelectedRateVar), asPrimitiveValue(model.variables.rate_ShowRateVar), asPrimitiveValue(model.variables.countryPhoneVar), asPrimitiveValue(model.variables.isLoggedVar), asPrimitiveValue(model.variables.descriptionVar), asPrimitiveValue(model.variables.in_ListMenuOptionLabelIn), asPrimitiveValue(model.variables.in_ContactSubjectTitleIn)]
            }), $if(model.variables.isLoggedVar, false, this, function() {
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
                        uuid: "61",
                        alias: "26"
                    },
                    _widgetRecordProvider: widgetsRecordProvider,
                    _dependencies: []
                })];
            }, function() {
                return [];
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);

    return View;
});
define("UBTConnect.App_Menu_ContactUs.ContactUsDetails.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "Connect_Communication_CS.model", "UBTConnect_Utils.model", "UBTConnectLibrary.model", "UBTJavaScriptUtils.controller", "UBTConnectLibrary.controller", "NavigationHandler.controller", "APIDomain_Directory_IS.model", "UBT_AppManager.controller", "Connect_Geography_CS.model", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.App_Menu_ContactUs.ContactUsDetails.mvc$debugger", "UBTConnect.App_Menu_ContactUs.controller", "Connect_Communication_CS.model$UI_ContactUsFormRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect_Communication_CS", "UBTConnect_Utils.model$ContactByPhonePopupDataRec", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTConnect.model$BooleanDirectory_UserCurrentRecord", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$ButtonOptionsRec", "UBTConnectLibrary.model$AvatarIconOptionsRec", "UBTConnect_Utils.model$ContactPopupDataRec", "UBTJavaScriptUtils.controller$FeedbackMessage_AutoClose", "UBTConnect.referencesHealth$UBTJavaScriptUtils", "UBTConnectLibrary.controller$IsPhoneNumberValid", "NavigationHandler.controller$ConfirmAction", "UBTConnect.referencesHealth$NavigationHandler", "UBTConnectLibrary.controller$IsEmailValid", "UBTJavaScriptUtils.controller$JSUtils_String_CheckNumbers", "APIDomain_Directory_IS.model$Directory_UserCurrentRec", "UBTConnect.referencesHealth$APIDomain_Directory_IS", "UBT_AppManager.controller$PIN_Check", "UBTConnect.referencesHealth$UBT_AppManager", "UBTConnect.controller$Get_ContactUsFormDescription", "NavigationHandler.controller$PreventNavigation", "Connect_Geography_CS.model$CS_CountryNameRec", "UBTConnect.referencesHealth$Connect_Geography_CS", "UBTConnect.model$CS_CountryNameList"], function(OutSystems, UBTConnectModel, UBTConnectController, Connect_Communication_CSModel, UBTConnect_UtilsModel, UBTConnectLibraryModel, UBTJavaScriptUtilsController, UBTConnectLibraryController, NavigationHandlerController, APIDomain_Directory_ISModel, UBT_AppManagerController, Connect_Geography_CSModel, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_App_Menu_ContactUs_ContactUsDetails_mvc_Debugger, _flow_UBTConnect_App_Menu_ContactUsController) {
    var OS = OutSystems.Internal;
    var Controller = (function(_super) {
        __extends(Controller, _super);

        function Controller() {
            _super.apply(this, arguments);
            var controller = this.controller;
            this.clientActionProxies = {};
            this.dataFetchDependenciesOriginal = {
                dataAction_GetLocalityTimezone$DataActRefresh: -1,
                dataAction_GetCountriesNames$DataActRefresh: -1
            };
            this.dataFetchDependentsGraph = {
                dataAction_GetLocalityTimezone$DataActRefresh: [],
                dataAction_GetCountriesNames$DataActRefresh: []
            };
            this.shouldSendClientVarsToDataSources = false;
        }
        // Server Actions
        Controller.prototype.sendContactUsMessage$ServerAction = function(in_ContactUsFormIn, in_ContactSubjectIdIn, rateIn, rate_UserWantToBeContactedIn, callContext) {
            var controller = this.controller;
            var inputs = {
                In_ContactUsForm: OS.DataConversion.ServerDataConverter.to(in_ContactUsFormIn, OS.DataTypes.DataTypes.Record),
                In_ContactSubjectId: OS.DataConversion.ServerDataConverter.to(in_ContactSubjectIdIn, OS.DataTypes.DataTypes.Text),
                Rate: OS.DataConversion.ServerDataConverter.to(rateIn, OS.DataTypes.DataTypes.Integer),
                Rate_UserWantToBeContacted: OS.DataConversion.ServerDataConverter.to(rate_UserWantToBeContactedIn, OS.DataTypes.DataTypes.Boolean)
            };
            return controller.callServerAction("SendContactUsMessage", "screenservices/UBTConnect/App_Menu_ContactUs/ContactUsDetails/ServiceAPISendContactUsMessage", "4q12Sh7k7AOtuyz8uucV0w", inputs, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function(json, headers) {
                OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
            }, false).then(function(outputs) {
                var executeServerActionResult = new(controller.constructor.getVariableGroupType("UBTConnect.App_Menu_ContactUs.ContactUsDetails$ServiceAPISendContactUsMessage"))();
                executeServerActionResult.out_ErrorMessageOut = OS.DataConversion.ServerDataConverter.from(outputs.Out_ErrorMessage, OS.DataTypes.DataTypes.Text);
                return executeServerActionResult;
            });
        };
        Controller.registerVariableGroupType("UBTConnect.App_Menu_ContactUs.ContactUsDetails$ServiceAPISendContactUsMessage", [{
            name: "Out_ErrorMessage",
            attrName: "out_ErrorMessageOut",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);

        // Aggregates and Data Actions
        Controller.prototype.dataAction_GetLocalityTimezone$DataActRefresh = function(callContext) {
            var model = this.model;
            var controller = this.controller;
            var callContext = controller.callContext(callContext);
            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:tEJ5f0RDM0G3+9MfpBO2ZQ:/NRWebFlows.8Rf7+7BkAkCmweOUSt2Oiw/NodesShownInESpaceTree.MjUov4B8DE6PQDfGiJsoig/DataActions.tEJ5f0RDM0G3+9MfpBO2ZQ:PmAqsDnMNzHdSyKtZplp_w", "UBTConnect", "DataAction_GetLocalityTimezone", "NRFlows.DataScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.setThreadStartName(callContext.id, "App_Menu_ContactUs/ContactUsDetails/DataAction_GetLocalityTimezone");
                return controller.callDataAction("DataActionDataAction_GetLocalityTimezone", "screenservices/UBTConnect/App_Menu_ContactUs/ContactUsDetails/DataActionDataAction_GetLocalityTimezone", "Xvap8ZQFqP68jcLpw+ejHw", function(b) {
                    model.variables.dataAction_GetLocalityTimezoneDataAct.dataFetchStatusAttr = b;
                }, function(json) {
                    model.variables.dataAction_GetLocalityTimezoneDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.dataAction_GetLocalityTimezoneDataAct.constructor));
                }, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function(json, headers) {
                    OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
                }, callContext, undefined, false).then(function() {
                    OutSystemsDebugger.setThreadStartName(callContext.id, "App_Menu_ContactUs/ContactUsDetails/DataAction_GetLocalityTimezone On After Fetch");
                    controller._onAfterFetch_GetLocalityTimezone$Action(controller.callContext(callContext));

                });

            }, function() {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:tEJ5f0RDM0G3+9MfpBO2ZQ", callContext.id);
                controller.popDebuggerContext(callContext);

            });
        };
        Controller.prototype.dataAction_GetCountriesNames$DataActRefresh = function(callContext) {
            var model = this.model;
            var controller = this.controller;
            var callContext = controller.callContext(callContext);
            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:CdFZ2an7H02s80EMUTebOw:/NRWebFlows.8Rf7+7BkAkCmweOUSt2Oiw/NodesShownInESpaceTree.MjUov4B8DE6PQDfGiJsoig/DataActions.CdFZ2an7H02s80EMUTebOw:ctCiJLXKBWoq+z+x7+nDfQ", "UBTConnect", "DataAction_GetCountriesNames", "NRFlows.DataScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.setThreadStartName(callContext.id, "App_Menu_ContactUs/ContactUsDetails/DataAction_GetCountriesNames");
                return controller.callDataAction("DataActionDataAction_GetCountriesNames", "screenservices/UBTConnect/App_Menu_ContactUs/ContactUsDetails/DataActionDataAction_GetCountriesNames", "yR3vU010C+wMmR55do37yg", function(b) {
                    model.variables.dataAction_GetCountriesNamesDataAct.dataFetchStatusAttr = b;
                }, function(json) {
                    model.variables.dataAction_GetCountriesNamesDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.dataAction_GetCountriesNamesDataAct.constructor));
                }, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function(json, headers) {
                    OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
                }, callContext, undefined, false);

            }, function() {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:CdFZ2an7H02s80EMUTebOw", callContext.id);
                controller.popDebuggerContext(callContext);

            });
        };

        Controller.prototype.dataFetchActionNames = ["dataAction_GetLocalityTimezone$DataActRefresh", "dataAction_GetCountriesNames$DataActRefresh"];
        // Client Actions
        Controller.prototype._onChange_FormInput$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnChange_FormInput");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:miJVDfOCr0qgVIYhxoSW1w:/NRWebFlows.8Rf7+7BkAkCmweOUSt2Oiw/NodesShownInESpaceTree.MjUov4B8DE6PQDfGiJsoig/ClientActions.miJVDfOCr0qgVIYhxoSW1w:WMQ4Ss0oNz3sKYNt5Ibjjw", "UBTConnect", "OnChange_FormInput", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:jzW8OjtrVkeKK___K+igMw", callContext.id);
                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:C8Y9nisylEOo4w9sab+YVQ", callContext.id) && model.variables.isLoggedVar)) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:s4wit0siTk+CK4ZyLI3s8g", callContext.id);
                    // IsFormFilled = ContactUsForm.Message <> "" or In_ContactSubjectId = GeneralSuggestionsFeedbackRating and Rate_SelectedRate <> 0
                    model.variables.isFormFilledVar = (((model.variables.contactUsFormVar.messageAttr) !== ("")) || ((model.variables.in_ContactSubjectIdIn === UBTConnectModel.staticEntities.type_ContactSubject.generalSuggestionsFeedbackRating) && ((model.variables.rate_SelectedRateVar) !== (0))));
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:s4wit0siTk+CK4ZyLI3s8g", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                    // IsAnyFilled = ContactUsForm.Message <> ""
                    model.variables.isAnyFilledVar = ((model.variables.contactUsFormVar.messageAttr) !== (""));
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:DhWz5HWXTEWgPoICnKBU3w", callContext.id);
                } else {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:WYI9LGa_30Sp94xrSDe0_g", callContext.id);
                    // IsFormFilled = Trim <> "" and Trim <> "" and Trim <> "" and Trim <> "" and Trim <> "" and Trim <> ""
                    model.variables.isFormFilledVar = (((((((OS.BuiltinFunctions.trim(model.variables.contactUsFormVar.fullNameAttr)) !== ("")) && ((OS.BuiltinFunctions.trim(model.variables.contactUsFormVar.emailAttr)) !== (""))) && ((OS.BuiltinFunctions.trim(model.variables.contactUsFormVar.phoneNumberAttr)) !== (""))) && ((OS.BuiltinFunctions.trim(model.variables.contactUsFormVar.countryAttr)) !== (""))) && ((OS.BuiltinFunctions.trim(model.variables.contactUsFormVar.localityAttr)) !== (""))) && ((OS.BuiltinFunctions.trim(model.variables.contactUsFormVar.messageAttr)) !== ("")));
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:WYI9LGa_30Sp94xrSDe0_g", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                    // IsAnyFilled = Trim <> "" or Trim <> "" or Trim <> "" or Trim <> "" or Trim <> "" or Trim <> ""
                    model.variables.isAnyFilledVar = (((((((OS.BuiltinFunctions.trim(model.variables.contactUsFormVar.fullNameAttr)) !== ("")) || ((OS.BuiltinFunctions.trim(model.variables.contactUsFormVar.emailAttr)) !== (""))) || ((OS.BuiltinFunctions.trim(model.variables.contactUsFormVar.phoneNumberAttr)) !== (""))) || ((OS.BuiltinFunctions.trim(model.variables.contactUsFormVar.countryAttr)) !== (""))) || ((OS.BuiltinFunctions.trim(model.variables.contactUsFormVar.localityAttr)) !== (""))) || ((OS.BuiltinFunctions.trim(model.variables.contactUsFormVar.messageAttr)) !== ("")));
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:DhWz5HWXTEWgPoICnKBU3w", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:miJVDfOCr0qgVIYhxoSW1w", callContext.id);
            }

        };
        Controller.prototype._onAfterFetch_GetLocalityTimezone$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnAfterFetch_GetLocalityTimezone");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:yXf5I8LbjUuUeNtoBJ5qXA:/NRWebFlows.8Rf7+7BkAkCmweOUSt2Oiw/NodesShownInESpaceTree.MjUov4B8DE6PQDfGiJsoig/ClientActions.yXf5I8LbjUuUeNtoBJ5qXA:4jL6iwOF++rgRySfrNXr2A", "UBTConnect", "OnAfterFetch_GetLocalityTimezone", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:_N1N0Hb25EKnBUMDuD3aXw", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ZNkrebUFJEW3izmOvCOE5A", callContext.id);
                // CallPopupData.ContactPopupData.TimezoneName = DataAction_GetLocalityTimezone.Out_TimezoneName
                model.variables.callPopupDataVar.contactPopupDataAttr.timezoneNameAttr = model.variables.dataAction_GetLocalityTimezoneDataAct.out_TimezoneNameOut;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ZNkrebUFJEW3izmOvCOE5A", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                // CallPopupData.ContactPopupData.TimezoneOffset = DataAction_GetLocalityTimezone.Out_TimezoneOffset
                model.variables.callPopupDataVar.contactPopupDataAttr.timezoneOffsetAttr = model.variables.dataAction_GetLocalityTimezoneDataAct.out_TimezoneOffsetOut;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:_8BVUGYZAE+yLddrJ2sl9g", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:yXf5I8LbjUuUeNtoBJ5qXA", callContext.id);
            }

        };
        Controller.prototype._action_ResetForm$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Action_ResetForm");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.App_Menu_ContactUs.ContactUsDetails.Action_ResetForm$vars"))());
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:HjkSQ1QZSEKkOPVe6Z_KMg:/NRWebFlows.8Rf7+7BkAkCmweOUSt2Oiw/NodesShownInESpaceTree.MjUov4B8DE6PQDfGiJsoig/ClientActions.HjkSQ1QZSEKkOPVe6Z_KMg:KDu+3kVEsChJFeVfQR6ubQ", "UBTConnect", "Action_ResetForm", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:+pZsLDOnCUuaVRD29HCATg", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:9PAyJQ+8m0qMYK4hb_9cOw", callContext.id);
                // ContactUsForm = EmptyContactUsForm
                model.variables.contactUsFormVar = vars.value.emptyContactUsFormVar;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:9PAyJQ+8m0qMYK4hb_9cOw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                // IsFormFilled = False
                model.variables.isFormFilledVar = false;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:9PAyJQ+8m0qMYK4hb_9cOw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
                // IsAnyFilled = False
                model.variables.isAnyFilledVar = false;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:M3_zkX1aTEWlMMEbyJo4TQ", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:HjkSQ1QZSEKkOPVe6Z_KMg", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.App_Menu_ContactUs.ContactUsDetails.Action_ResetForm$vars", [{
            name: "EmptyContactUsForm",
            attrName: "emptyContactUsFormVar",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Record,
            defaultValue: function() {
                return new Connect_Communication_CSModel.UI_ContactUsFormRec();
            },
            complexType: Connect_Communication_CSModel.UI_ContactUsFormRec
        }]);
        Controller.prototype._onClick_SubmitForm$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnClick_SubmitForm");
            callContext = controller.callContext(callContext);
            var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
            var sendContactUsMessageVar = new OS.DataTypes.VariableHolder();
            var isPhoneNumberValidVar = new OS.DataTypes.VariableHolder();
            var confirmActionVar = new OS.DataTypes.VariableHolder();
            var isEmailValidVar = new OS.DataTypes.VariableHolder();
            var nameHasNumbersVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.allExceptionsVar = allExceptionsVar;
            varBag.sendContactUsMessageVar = sendContactUsMessageVar;
            varBag.isPhoneNumberValidVar = isPhoneNumberValidVar;
            varBag.confirmActionVar = confirmActionVar;
            varBag.isEmailValidVar = isEmailValidVar;
            varBag.nameHasNumbersVar = nameHasNumbersVar;
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:2TN1SeEyAk+Vl2G6Fc7fHw:/NRWebFlows.8Rf7+7BkAkCmweOUSt2Oiw/NodesShownInESpaceTree.MjUov4B8DE6PQDfGiJsoig/ClientActions.2TN1SeEyAk+Vl2G6Fc7fHw:fsO7dx9plAIOXz0fk871eg", "UBTConnect", "OnClick_SubmitForm", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:CfhAVu7ilk2zi1+UXseOPg", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:rOo83C3tcUKGwIrF4GzcRw", callContext.id);
                // ContactUsForm.FullName = Trim
                model.variables.contactUsFormVar.fullNameAttr = OS.BuiltinFunctions.trim(model.variables.contactUsFormVar.fullNameAttr);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:rOo83C3tcUKGwIrF4GzcRw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                // ContactUsForm.Email = Trim
                model.variables.contactUsFormVar.emailAttr = OS.BuiltinFunctions.trim(model.variables.contactUsFormVar.emailAttr);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:rOo83C3tcUKGwIrF4GzcRw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
                // ContactUsForm.PhoneNumber = Trim
                model.variables.contactUsFormVar.phoneNumberAttr = OS.BuiltinFunctions.trim(model.variables.contactUsFormVar.phoneNumberAttr);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:rOo83C3tcUKGwIrF4GzcRw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
                // ContactUsForm.Country = Trim
                model.variables.contactUsFormVar.countryAttr = OS.BuiltinFunctions.trim(model.variables.contactUsFormVar.countryAttr);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:rOo83C3tcUKGwIrF4GzcRw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
                // ContactUsForm.Locality = Trim
                model.variables.contactUsFormVar.localityAttr = OS.BuiltinFunctions.trim(model.variables.contactUsFormVar.localityAttr);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:rOo83C3tcUKGwIrF4GzcRw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "6");
                // ContactUsForm.Message = Trim
                model.variables.contactUsFormVar.messageAttr = OS.BuiltinFunctions.trim(model.variables.contactUsFormVar.messageAttr);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:rOo83C3tcUKGwIrF4GzcRw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "7");
                // isSubmiting = True
                model.variables.isSubmitingVar = true;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:WpEs78zrZ0iwTcduj221qw", callContext.id);
                // Execute Action: NameHasNumbers
                nameHasNumbersVar.value = UBTJavaScriptUtilsController.default.jSUtils_String_CheckNumbers$Action(model.variables.contactUsFormVar.fullNameAttr, callContext);

                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:l5AdOghBUkiTCBD17X361A", callContext.id) && nameHasNumbersVar.value.foundOut)) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:quFpVYxIJ02rWYdtLIgYDg", callContext.id);
                    // Input_FullName.Valid = False
                    model.widgets.get(idService.getId("Input_FullName")).validAttr = false;
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:quFpVYxIJ02rWYdtLIgYDg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                    // Input_FullName.ValidationMessage = "This field cannot contain numeric values!"
                    model.widgets.get(idService.getId("Input_FullName")).validationMessageAttr = "This field cannot contain numeric values!";
                } else {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:5WB9zpzb4UODK1JN9DqZ2g", callContext.id);
                    // Input_FullName.Valid = True
                    model.widgets.get(idService.getId("Input_FullName")).validAttr = true;
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:5WB9zpzb4UODK1JN9DqZ2g", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                    // Input_FullName.ValidationMessage = ""
                    model.widgets.get(idService.getId("Input_FullName")).validationMessageAttr = "";
                }

                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:7+9ruBIoHk63smivQYmhtQ", callContext.id);
                // Execute Action: IsEmailValid
                isEmailValidVar.value = UBTConnectLibraryController.default.isEmailValid$Action(model.variables.contactUsFormVar.emailAttr, callContext);

                // Check if IsEmailValid Out_Valid
                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:kS7PXJvW7kOoODPtM+t0Kw", callContext.id) && (isEmailValidVar.value.out_ValidOut === true))) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:SL21qAfVHEusmVbDk5RVgw", callContext.id);
                    // Input_Email.Valid = True
                    model.widgets.get(idService.getId("Input_Email")).validAttr = true;
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:SL21qAfVHEusmVbDk5RVgw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                    // Input_Email.ValidationMessage = ""
                    model.widgets.get(idService.getId("Input_Email")).validationMessageAttr = "";
                } else {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:YNH5LZmrRUy+CdR1Mcltqg", callContext.id);
                    // Input_Email.Valid = False
                    model.widgets.get(idService.getId("Input_Email")).validAttr = false;
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:YNH5LZmrRUy+CdR1Mcltqg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                    // Input_Email.ValidationMessage = "Invalid email!"
                    model.widgets.get(idService.getId("Input_Email")).validationMessageAttr = "Invalid email!";
                }

                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:cEUMpqTOhkaubS+xNPYq3g", callContext.id);
                // Execute Action: IsPhoneNumberValid
                isPhoneNumberValidVar.value = UBTConnectLibraryController.default.isPhoneNumberValid$Action(model.variables.contactUsFormVar.phoneNumberAttr, callContext);

                // Check if IsPhoneNumberValid Out_Valid
                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:2cV8oNgj9kq5F+YaTtNTWw", callContext.id) && (isPhoneNumberValidVar.value.out_ValidOut === true))) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:47egtPSlBkCyIRvXVmThSg", callContext.id);
                    // Input_PhoneNumber.Valid = True
                    model.widgets.get(idService.getId("Input_PhoneNumber")).validAttr = true;
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:47egtPSlBkCyIRvXVmThSg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                    // Input_PhoneNumber.ValidationMessage = ""
                    model.widgets.get(idService.getId("Input_PhoneNumber")).validationMessageAttr = "";
                } else {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:4WKKrxTuwU+q6tKsO48R_w", callContext.id);
                    // Input_PhoneNumber.Valid = False
                    model.widgets.get(idService.getId("Input_PhoneNumber")).validAttr = false;
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:4WKKrxTuwU+q6tKsO48R_w", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                    // Input_PhoneNumber.ValidationMessage = "Invalid Phone"
                    model.widgets.get(idService.getId("Input_PhoneNumber")).validationMessageAttr = "Invalid Phone";
                }

                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:kIceEvUR10SOe6CqqqLsbg", callContext.id);
                // IsFormFilled = False
                model.variables.isFormFilledVar = false;
                return OS.Flow.executeSequence(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:uYhh8CQWgkGlVunIuZoWnw", callContext.id) && model.widgets.get(idService.getId("Form_ContactUs")).validAttr)) {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:_N22JjyzCEuKn2emFM1ugw", callContext.id);
                        // Execute Action: SendContactUsMessage
                        model.flush();
                        return controller.sendContactUsMessage$ServerAction(model.variables.contactUsFormVar, model.variables.in_ContactSubjectIdIn, model.variables.rate_SelectedRateVar, model.variables.rate_UserWantToBeContactedVar, callContext).then(function(value) {
                            sendContactUsMessageVar.value = value;
                        }).then(function() {
                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:1zj4zcOiwUa_bXs0Yw6yEw", callContext.id);
                            // isSubmiting = False
                            model.variables.isSubmitingVar = false;
                        }).then(function() {
                            return OS.Flow.executeSequence(function() {
                                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:MQYJcRqpXkS_Tq2_2RkJtw", callContext.id) && (sendContactUsMessageVar.value.out_ErrorMessageOut === ""))) {
                                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:RU9QriEfD0qXPSO6qMPqrg", callContext.id);
                                    // Execute Action: ConfirmAction
                                    model.flush();
                                    return NavigationHandlerController.default.confirmAction$Action(idService.getId("SubmittedConfirmation"), callContext).then(function(value) {
                                        confirmActionVar.value = value;
                                    }).then(function() {
                                        // Check if ConfirmAction IsConfirmed
                                        if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ZfLzXyK2qkWeFPolyX1MqQ", callContext.id) && (confirmActionVar.value.isConfirmedOut === true))) {
                                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:3AF5aNzym0+Zv0JxZB0ZDg", callContext.id);
                                            // Execute Action: Action_ResetForm
                                            controller._action_ResetForm$Action(callContext);
                                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:DdJUBzv27Eyt1YzIcEWQ3A", callContext.id);
                                            // Destination: (PreviousScreen)
                                            return OS.Flow.returnAsync(OS.Navigation.navigateBack(null, callContext, true));
                                        } else {
                                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:E8dmE4GowE+NeyfCBNmaTA", callContext.id);
                                        }

                                    });
                                } else {
                                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:TBxTf+hPw0OvzKsKfVjB+w", callContext.id);
                                    // Execute Action: FeedbackMessage_AutoClose2
                                    UBTJavaScriptUtilsController.default.feedbackMessage_AutoClose$Action("", sendContactUsMessageVar.value.out_ErrorMessageOut, UBTConnectModel.staticEntities.uBT_MessageType.error, true, "", 0, false, callContext);
                                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:gQ2hTenlL06OI3icMnwutg", callContext.id);
                                }

                            });
                        });
                    } else {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:fZMAlrubmk2Hjsr8kVEgWg", callContext.id);
                        // isSubmiting = False
                        model.variables.isSubmitingVar = false;
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:OBFPqQV8Ek+ktzAKLCHOew", callContext.id);
                    }

                });
            }).catch(function(ex) {
                OS.Logger.trace("ContactUsDetails.OnClick_SubmitForm", OS.Exceptions.getMessage(ex), ex.name);
                // Handle Error: AllExceptions
                if (!(OS.Exceptions.isSystem(ex))) {
                    OS.Logger.error(null, ex);
                    allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                    OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
                    return OS.Flow.executeAsyncFlow(function() {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:OoyUGdAmMEOovFGoc+MmFg", callContext.id);
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:QVGdywsw5k6lbN0xdXf_yQ", callContext.id);
                        // isSubmiting = False
                        model.variables.isSubmitingVar = false;
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:q4yoHCxnpU2GMHx1k4vQNA", callContext.id);
                        // Execute Action: FeedbackMessage_AutoClose
                        UBTJavaScriptUtilsController.default.feedbackMessage_AutoClose$Action("", allExceptionsVar.value.exceptionMessageAttr, UBTConnectModel.staticEntities.uBT_MessageType.error, true, "", 0, false, callContext);
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:KHN4lufGr0OBDcwQqldu6A", callContext.id);
                        return OS.Flow.returnAsync();

                    });
                }

                throw ex;
            }).then(function(res) {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:2TN1SeEyAk+Vl2G6Fc7fHw", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:2TN1SeEyAk+Vl2G6Fc7fHw", callContext.id);
                throw ex;

            });
        };
        Controller.prototype._screenEvent_OnReady$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("ScreenEvent_OnReady");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:WGsYVVA3TkiQgLcpTGc5wg:/NRWebFlows.8Rf7+7BkAkCmweOUSt2Oiw/NodesShownInESpaceTree.MjUov4B8DE6PQDfGiJsoig/ClientActions.WGsYVVA3TkiQgLcpTGc5wg:2vHaheuwb6eKbsmCOnvOqw", "UBTConnect", "ScreenEvent_OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:THNnSRGhoE2k6bYozoz+Zg", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                return OS.Flow.executeSequence(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:iOTyTZIsuUKsmAzHbiEDVQ", callContext.id) && model.variables.isLoggedVar)) {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:d2KW0Lw82Eev5vpFyg6SOw", callContext.id);
                    } else {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:J5xwjJ9vJUqYc7asiA__IQ", callContext.id);
                        // Refresh Query: DataAction_GetCountriesNames
                        var result = controller.dataAction_GetCountriesNames$DataActRefresh(callContext);
                        model.flush();
                        return result.then(function() {
                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:+FtqLXJ8O0u9pbytgEiRKA", callContext.id);
                        });
                    }

                });
            }).then(function(res) {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:WGsYVVA3TkiQgLcpTGc5wg", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:WGsYVVA3TkiQgLcpTGc5wg", callContext.id);
                throw ex;

            });
        };
        Controller.prototype._contactUs_RateRateSelected$Action = function(rateIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("ContactUs_RateRateSelected");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.App_Menu_ContactUs.ContactUsDetails.ContactUs_RateRateSelected$vars"))());
            vars.value.rateInLocal = rateIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:IWcdXtqvOE2fAPMbLb+9WA:/NRWebFlows.8Rf7+7BkAkCmweOUSt2Oiw/NodesShownInESpaceTree.MjUov4B8DE6PQDfGiJsoig/ClientActions.IWcdXtqvOE2fAPMbLb+9WA:NuT8mUD7yzczQz6gaWcYAg", "UBTConnect", "ContactUs_RateRateSelected", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:7UPTNahdU0eOamX7NMBA5g", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:8hRyZgVaiU6nKc+sXYCeYw", callContext.id);
                // Rate_SelectedRate = Rate
                model.variables.rate_SelectedRateVar = vars.value.rateInLocal;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:rVnWkc7BFECeAmXk5x4iOw", callContext.id);
                // Execute Action: OnChange_FormInput
                controller._onChange_FormInput$Action(callContext);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:HXKn1TahmkWLDj6f_w26HQ", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:IWcdXtqvOE2fAPMbLb+9WA", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.App_Menu_ContactUs.ContactUsDetails.ContactUs_RateRateSelected$vars", [{
            name: "Rate",
            attrName: "rateInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Integer,
            defaultValue: function() {
                return 0;
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
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.App_Menu_ContactUs.ContactUsDetails.CacheControl_UserInfo_WrapperResult$vars"))());
            vars.value.userInformationInLocal = userInformationIn.clone();
            varBag.callContext = callContext;
            varBag.vars = vars;
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:KWXJXjFpC0ieTO9S5r2Z6Q:/NRWebFlows.8Rf7+7BkAkCmweOUSt2Oiw/NodesShownInESpaceTree.MjUov4B8DE6PQDfGiJsoig/ClientActions.KWXJXjFpC0ieTO9S5r2Z6Q:6kQhNEQKcDlLUxJt2rxZ_g", "UBTConnect", "CacheControl_UserInfo_WrapperResult", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:cZmcH3TxrUehBmm_607bBw", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:4KRgRgiKEUKInKVmd+o1oA", callContext.id);
                // LocalCacheControl_UserInformation.Directory_UserCurrent = UserInformation
                model.variables.localCacheControl_UserInformationVar.directory_UserCurrentAttr = vars.value.userInformationInLocal;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:4KRgRgiKEUKInKVmd+o1oA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                // LocalCacheControl_UserInformation.isFetched = True
                model.variables.localCacheControl_UserInformationVar.isFetchedAttr = true;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:4KRgRgiKEUKInKVmd+o1oA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
                // isLoadingMainData = False
                model.variables.isLoadingMainDataVar = false;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Ps_2QqNiL0O2js07JABgUQ", callContext.id);
                // ContactUsForm.FullName = UserInformation.FullName
                model.variables.contactUsFormVar.fullNameAttr = vars.value.userInformationInLocal.fullNameAttr;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Ps_2QqNiL0O2js07JABgUQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                // ContactUsForm.Email = UserInformation.Email
                model.variables.contactUsFormVar.emailAttr = vars.value.userInformationInLocal.emailAttr;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Ps_2QqNiL0O2js07JABgUQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
                // ContactUsForm.Country = UserInformation.Directory_UserCurrent_Geography.Country_Name
                model.variables.contactUsFormVar.countryAttr = vars.value.userInformationInLocal.directory_UserCurrent_GeographyAttr.country_NameAttr;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Ps_2QqNiL0O2js07JABgUQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
                // ContactUsForm.Locality = UserInformation.Directory_UserCurrent_Geography.Locality_Name
                model.variables.contactUsFormVar.localityAttr = vars.value.userInformationInLocal.directory_UserCurrent_GeographyAttr.locality_NameAttr;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Ps_2QqNiL0O2js07JABgUQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
                // ContactUsForm.PhoneNumber = UserInformation.HomeNumber
                model.variables.contactUsFormVar.phoneNumberAttr = vars.value.userInformationInLocal.homeNumberAttr;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Ps_2QqNiL0O2js07JABgUQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "6");
                // CountryPhone = UserInformation.Directory_UserCurrent_Geography.Country_Phone
                model.variables.countryPhoneVar = vars.value.userInformationInLocal.directory_UserCurrent_GeographyAttr.country_PhoneAttr;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:psOFub9qMEy3Rt9lh+RZaQ", callContext.id);
                // Refresh Query: DataAction_GetLocalityTimezone
                var result = controller.dataAction_GetLocalityTimezone$DataActRefresh(callContext);
                model.flush();
                return result.then(function() {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ORsQ0E9Iy02KIa1Hk6U7Pg", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:KWXJXjFpC0ieTO9S5r2Z6Q", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:KWXJXjFpC0ieTO9S5r2Z6Q", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("UBTConnect.App_Menu_ContactUs.ContactUsDetails.CacheControl_UserInfo_WrapperResult$vars", [{
            name: "UserInformation",
            attrName: "userInformationInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Record,
            defaultValue: function() {
                return new APIDomain_Directory_ISModel.Directory_UserCurrentRec();
            },
            complexType: APIDomain_Directory_ISModel.Directory_UserCurrentRec
        }]);
        Controller.prototype._onChange_Email$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnChange_Email");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:zK9SX3t7x0eZQ0n85Becaw:/NRWebFlows.8Rf7+7BkAkCmweOUSt2Oiw/NodesShownInESpaceTree.MjUov4B8DE6PQDfGiJsoig/ClientActions.zK9SX3t7x0eZQ0n85Becaw:Sb946eRIpjNebbFeT4Iiug", "UBTConnect", "OnChange_Email", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:2F8n2bohH0G0oSEkpLLqxw", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:6UcH7FjKJU20PvIav1UvbA", callContext.id);
                // Input_Email.Valid = True
                model.widgets.get(idService.getId("Input_Email")).validAttr = true;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:6UcH7FjKJU20PvIav1UvbA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                // Input_Email.ValidationMessage = ""
                model.widgets.get(idService.getId("Input_Email")).validationMessageAttr = "";
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:OFwV43Yli0uuUvxGkQzFjQ", callContext.id);
                // Execute Action: OnChange_FormInput
                controller._onChange_FormInput$Action(callContext);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:J2IzpY12mke+BXdVcnqk1g", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:zK9SX3t7x0eZQ0n85Becaw", callContext.id);
            }

        };
        Controller.prototype._onClick_SupportTeam$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnClick_SupportTeam");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:2R2BdGUaXE298lGbAb9TvA:/NRWebFlows.8Rf7+7BkAkCmweOUSt2Oiw/NodesShownInESpaceTree.MjUov4B8DE6PQDfGiJsoig/ClientActions.2R2BdGUaXE298lGbAb9TvA:xNZkeUhc_PevDSlfW6tc6w", "UBTConnect", "OnClick_SupportTeam", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:+u9DrKUm00uaD6VCyPbVOQ", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:s2PV6wNAIkuKOAU_X01XOg", callContext.id);
                // CallPopupData.ContactPopupData.ImageURL = Images.UbtLogo.URL
                model.variables.callPopupDataVar.contactPopupDataAttr.imageURLAttr = OS.Navigation.VersionedURL.getVersionedUrl("img/UBTConnect.UbtLogo.png");
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:s2PV6wNAIkuKOAU_X01XOg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                // CallPopupData.ContactPopupData.Name = "Support Team"
                model.variables.callPopupDataVar.contactPopupDataAttr.nameAttr = "Support Team";
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:s2PV6wNAIkuKOAU_X01XOg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
                // CallPopupData.ContactPopupData.TimezoneName = DataAction_GetLocalityTimezone.Out_TimezoneName
                model.variables.callPopupDataVar.contactPopupDataAttr.timezoneNameAttr = model.variables.dataAction_GetLocalityTimezoneDataAct.out_TimezoneNameOut;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:s2PV6wNAIkuKOAU_X01XOg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
                // CallPopupData.ContactPopupData.Locality = ContactUsForm.Locality
                model.variables.callPopupDataVar.contactPopupDataAttr.localityAttr = model.variables.contactUsFormVar.localityAttr;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:s2PV6wNAIkuKOAU_X01XOg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
                // CallPopupData.ContactPopupData.TimezoneOffset = DataAction_GetLocalityTimezone.Out_TimezoneOffset
                model.variables.callPopupDataVar.contactPopupDataAttr.timezoneOffsetAttr = model.variables.dataAction_GetLocalityTimezoneDataAct.out_TimezoneOffsetOut;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:s2PV6wNAIkuKOAU_X01XOg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "6");
                // CallPopupData.ContactPopupData.ShowPopup = False
                model.variables.callPopupDataVar.contactPopupDataAttr.showPopupAttr = false;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:s2PV6wNAIkuKOAU_X01XOg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "7");
                // CallPopupData.ContactPopupData.DisplayContactNumber = CountryPhone
                model.variables.callPopupDataVar.contactPopupDataAttr.displayContactNumberAttr = model.variables.countryPhoneVar;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:s2PV6wNAIkuKOAU_X01XOg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "8");
                // CallPopupData.ContactPopupData.IsAvatarImage = False
                model.variables.callPopupDataVar.contactPopupDataAttr.isAvatarImageAttr = false;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:s2PV6wNAIkuKOAU_X01XOg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "9");
                // CallPopupData.Phone = CountryPhone
                model.variables.callPopupDataVar.phoneAttr = model.variables.countryPhoneVar;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:s2PV6wNAIkuKOAU_X01XOg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "10");
                // CallPopupData.ContactPopupData.CountryName = ContactUsForm.Country
                model.variables.callPopupDataVar.contactPopupDataAttr.countryNameAttr = model.variables.contactUsFormVar.countryAttr;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:s2PV6wNAIkuKOAU_X01XOg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "11");
                // CallPopupData.ContactPopupData.TitleTerminator = "?"
                model.variables.callPopupDataVar.contactPopupDataAttr.titleTerminatorAttr = "?";
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:B8IXsxRLFkSytFSEe571+g", callContext.id);
                // CallPopupData.ContactPopupData.ShowPopup = True
                model.variables.callPopupDataVar.contactPopupDataAttr.showPopupAttr = true;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:b6omzyy9tUyqHIQga94BKQ", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:2R2BdGUaXE298lGbAb9TvA", callContext.id);
            }

        };
        Controller.prototype._handler_CallPopup_Cancel$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_CallPopup_Cancel");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:SZhQhq99W0mj3j_rgSm+QA:/NRWebFlows.8Rf7+7BkAkCmweOUSt2Oiw/NodesShownInESpaceTree.MjUov4B8DE6PQDfGiJsoig/ClientActions.SZhQhq99W0mj3j_rgSm+QA:1rwUYDIhipZi6dw9v_dz6A", "UBTConnect", "Handler_CallPopup_Cancel", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:g2typO42dEyen+jF9CLM6Q", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:XCGVIsUh4E6nRR7LUcDaVg", callContext.id);
                // CallPopupData.ContactPopupData.ShowPopup = False
                model.variables.callPopupDataVar.contactPopupDataAttr.showPopupAttr = false;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:n7Vc1LmoaUeZlfSvlL_B_A", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:SZhQhq99W0mj3j_rgSm+QA", callContext.id);
            }

        };
        Controller.prototype._onClick_UserWantToBeContacted$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnClick_UserWantToBeContacted");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:aaohk+BJPU+2LkUZQGYArw:/NRWebFlows.8Rf7+7BkAkCmweOUSt2Oiw/NodesShownInESpaceTree.MjUov4B8DE6PQDfGiJsoig/ClientActions.aaohk+BJPU+2LkUZQGYArw:xT3fQGnORtoHt+8xr2H0+Q", "UBTConnect", "OnClick_UserWantToBeContacted", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:m4ZdqrtCGUO2zjx283fAjQ", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:L1ZeAFhu10OisirkN5j57Q", callContext.id);
                // Rate_UserWantToBeContacted = notRate_UserWantToBeContacted
                model.variables.rate_UserWantToBeContactedVar = !(model.variables.rate_UserWantToBeContactedVar);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ceFzUMmTj0yWWfEKt0C5Vw", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:aaohk+BJPU+2LkUZQGYArw", callContext.id);
            }

        };
        Controller.prototype._onChange_PhoneNumber$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnChange_PhoneNumber");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:Tar7vTqtQkGHeT4XrrpneA:/NRWebFlows.8Rf7+7BkAkCmweOUSt2Oiw/NodesShownInESpaceTree.MjUov4B8DE6PQDfGiJsoig/ClientActions.Tar7vTqtQkGHeT4XrrpneA:A_87bTLRA29YW1PH3B3UpA", "UBTConnect", "OnChange_PhoneNumber", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:muk856fK8UqkPfJ4JVCA9w", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:0L7AKOR+UkiQx0bG0bt1kw", callContext.id);
                // Input_PhoneNumber.Valid = True
                model.widgets.get(idService.getId("Input_PhoneNumber")).validAttr = true;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:0L7AKOR+UkiQx0bG0bt1kw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                // Input_PhoneNumber.ValidationMessage = ""
                model.widgets.get(idService.getId("Input_PhoneNumber")).validationMessageAttr = "";
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:fx5wx2VHYU2dePSy3ZQPqw", callContext.id);
                // Execute Action: OnChange_FormInput
                controller._onChange_FormInput$Action(callContext);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:u34WNGvJhkOdlMuJd8lGtg", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:Tar7vTqtQkGHeT4XrrpneA", callContext.id);
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
            var pIN_CheckVar = new OS.DataTypes.VariableHolder();
            var get_ContactUsFormDescriptionVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.pIN_CheckVar = pIN_CheckVar;
            varBag.get_ContactUsFormDescriptionVar = get_ContactUsFormDescriptionVar;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:5k8eyXI9_0mFuvedEiLFXg:/NRWebFlows.8Rf7+7BkAkCmweOUSt2Oiw/NodesShownInESpaceTree.MjUov4B8DE6PQDfGiJsoig/ClientActions.5k8eyXI9_0mFuvedEiLFXg:54SLlMLwgAqsrzZ+BBVpuQ", "UBTConnect", "ScreenEvent_OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:raPZYnhupEWE_HEc+BXXEg", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:FgHXWEa690acipjeiPVC6A", callContext.id);
                // Execute Action: PIN_Check
                pIN_CheckVar.value = UBT_AppManagerController.default.pIN_Check$Action(callContext);

                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Pjwq+MaMiUyPNNvdFfTH9Q", callContext.id);
                // IgnorePolices = GetUserId = NullIdentifier or PIN_Check.NeedRegister
                model.variables.ignorePolicesVar = ((OS.BuiltinFunctions.getUserId() === OS.BuiltinFunctions.nullIdentifier()) || pIN_CheckVar.value.needRegisterOut);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:2JGxdRXRoUi0iuRZmhT+DA", callContext.id);
                // Execute Action: Get_ContactUsFormDescription
                get_ContactUsFormDescriptionVar.value = UBTConnectController.default.get_ContactUsFormDescription$Action(model.variables.in_ContactSubjectIdIn, callContext);

                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:9Q8APEa6J0GTypkgfFaZTQ", callContext.id);
                // Description = Get_ContactUsFormDescription.Out_FormDescription
                model.variables.descriptionVar = get_ContactUsFormDescriptionVar.value.out_FormDescriptionOut;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:9Q8APEa6J0GTypkgfFaZTQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                // MessagePrompt = Get_ContactUsFormDescription.Out_MessagePrompt
                model.variables.messagePromptVar = get_ContactUsFormDescriptionVar.value.out_MessagePromptOut;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:9Q8APEa6J0GTypkgfFaZTQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
                // isLogged = GetUserId <> NullIdentifier
                model.variables.isLoggedVar = ((OS.BuiltinFunctions.getUserId()) !== (OS.BuiltinFunctions.nullIdentifier()));
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:9Q8APEa6J0GTypkgfFaZTQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
                // Rate_ShowRate = In_ContactSubjectId = GeneralSuggestionsFeedbackRating and isLogged
                model.variables.rate_ShowRateVar = ((model.variables.in_ContactSubjectIdIn === UBTConnectModel.staticEntities.type_ContactSubject.generalSuggestionsFeedbackRating) && model.variables.isLoggedVar);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:9Q8APEa6J0GTypkgfFaZTQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
                // isLoadingMainData = isLogged
                model.variables.isLoadingMainDataVar = model.variables.isLoggedVar;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:VT5ElLAQfkiDGl16C4vaNw", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:5k8eyXI9_0mFuvedEiLFXg", callContext.id);
            }

        };
        Controller.prototype._onBackNavigation_ConfirmDiscard$Action = function(event_NavigationEventIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnBackNavigation_ConfirmDiscard");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.App_Menu_ContactUs.ContactUsDetails.OnBackNavigation_ConfirmDiscard$vars"))());
            vars.value.event_NavigationEventInLocal = event_NavigationEventIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:m1qm6rveIEOmvTrPzsGY_Q:/NRWebFlows.8Rf7+7BkAkCmweOUSt2Oiw/NodesShownInESpaceTree.MjUov4B8DE6PQDfGiJsoig/ClientActions.m1qm6rveIEOmvTrPzsGY_Q:kOJfpWMreHVGAOWwqdywLA", "UBTConnect", "OnBackNavigation_ConfirmDiscard", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:3klJxuVSpEuQugMkp8eHcQ", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Jp35AeSbeUycGF9mI9XWOw", callContext.id);
                // Execute Action: PreventNavigation
                NavigationHandlerController.default.preventNavigation$Action(vars.value.event_NavigationEventInLocal, callContext);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Yn6qkrZaYU2rg7OwyWb8CQ", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:m1qm6rveIEOmvTrPzsGY_Q", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.App_Menu_ContactUs.ContactUsDetails.OnBackNavigation_ConfirmDiscard$vars", [{
            name: "Event_NavigationEvent",
            attrName: "event_NavigationEventInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Object,
            defaultValue: function() {
                return null;
            }
        }]);

        Controller.prototype.onChange_FormInput$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onChange_FormInput$Action, callContext);

        };
        Controller.prototype.onAfterFetch_GetLocalityTimezone$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onAfterFetch_GetLocalityTimezone$Action, callContext);

        };
        Controller.prototype.action_ResetForm$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._action_ResetForm$Action, callContext);

        };
        Controller.prototype.onClick_SubmitForm$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onClick_SubmitForm$Action, callContext);

        };
        Controller.prototype.screenEvent_OnReady$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._screenEvent_OnReady$Action, callContext);

        };
        Controller.prototype.contactUs_RateRateSelected$Action = function(rateIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._contactUs_RateRateSelected$Action, callContext, rateIn);

        };
        Controller.prototype.cacheControl_UserInfo_WrapperResult$Action = function(userInformationIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._cacheControl_UserInfo_WrapperResult$Action, callContext, userInformationIn);

        };
        Controller.prototype.onChange_Email$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onChange_Email$Action, callContext);

        };
        Controller.prototype.onClick_SupportTeam$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onClick_SupportTeam$Action, callContext);

        };
        Controller.prototype.handler_CallPopup_Cancel$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_CallPopup_Cancel$Action, callContext);

        };
        Controller.prototype.onClick_UserWantToBeContacted$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onClick_UserWantToBeContacted$Action, callContext);

        };
        Controller.prototype.onChange_PhoneNumber$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onChange_PhoneNumber$Action, callContext);

        };
        Controller.prototype.screenEvent_OnInitialize$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._screenEvent_OnInitialize$Action, callContext);

        };
        Controller.prototype.onBackNavigation_ConfirmDiscard$Action = function(event_NavigationEventIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onBackNavigation_ConfirmDiscard$Action, callContext, event_NavigationEventIn);

        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:8Rf7+7BkAkCmweOUSt2Oiw:/NRWebFlows.8Rf7+7BkAkCmweOUSt2Oiw:7tOPq2rcK3ccLkU7+umGCg", "UBTConnect", "App_Menu_ContactUs", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:MjUov4B8DE6PQDfGiJsoig:/NRWebFlows.8Rf7+7BkAkCmweOUSt2Oiw/NodesShownInESpaceTree.MjUov4B8DE6PQDfGiJsoig:PyAlfSCG6tw8iholpEyVsA", "UBTConnect", "ContactUsDetails", "NRNodes.WebScreen", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:MjUov4B8DE6PQDfGiJsoig", callContext.id);
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:8Rf7+7BkAkCmweOUSt2Oiw", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "App_Menu_ContactUs/ContactUsDetails On Initialize");
                return controller.screenEvent_OnInitialize$Action(callContext);

            }, function() {
                controller.popDebuggerContext(callContext);

            });

        };
        Controller.prototype.onReadyEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "App_Menu_ContactUs/ContactUsDetails On Ready");
                return controller.screenEvent_OnReady$Action(callContext);

            }, function() {
                controller.popDebuggerContext(callContext);

            });

        };
        Controller.prototype.onRenderEventHandler = null;
        Controller.prototype.onDestroyEventHandler = null;
        Controller.prototype.onParametersChangedEventHandler = null;
        Controller.prototype.handleError = function(ex) {
            return _flow_UBTConnect_App_Menu_ContactUsController.default.handleError(ex, this.callContext());
        };
        Controller.checkPermissions = function() {};
        Controller.prototype.getDefaultTimeout = function() {
            return UBTConnectController.default.defaultTimeout;
        };
        return Controller;
    })(OS.Controller.BaseViewController);
    return new OS.Controller.ControllerFactory(Controller, UBTConnectLanguageResources);
});

define("UBTConnect.App_Menu_ContactUs.ContactUsDetails.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "mkAZeVM0tka9n0seDqyblg": {
            getter: function(varBag, idService) {
                return varBag.vars.value.emptyContactUsFormVar;
            }
        },
        "OoyUGdAmMEOovFGoc+MmFg": {
            getter: function(varBag, idService) {
                return varBag.allExceptionsVar.value;
            }
        },
        "_N22JjyzCEuKn2emFM1ugw": {
            getter: function(varBag, idService) {
                return varBag.sendContactUsMessageVar.value;
            }
        },
        "cEUMpqTOhkaubS+xNPYq3g": {
            getter: function(varBag, idService) {
                return varBag.isPhoneNumberValidVar.value;
            }
        },
        "RU9QriEfD0qXPSO6qMPqrg": {
            getter: function(varBag, idService) {
                return varBag.confirmActionVar.value;
            }
        },
        "7+9ruBIoHk63smivQYmhtQ": {
            getter: function(varBag, idService) {
                return varBag.isEmailValidVar.value;
            }
        },
        "WpEs78zrZ0iwTcduj221qw": {
            getter: function(varBag, idService) {
                return varBag.nameHasNumbersVar.value;
            }
        },
        "vXC35cI1lkOdVzJ0hYYIjg": {
            getter: function(varBag, idService) {
                return varBag.vars.value.rateInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Integer
        },
        "_LxcqghHBkWC0Sk5qzyr5A": {
            getter: function(varBag, idService) {
                return varBag.vars.value.userInformationInLocal;
            }
        },
        "FgHXWEa690acipjeiPVC6A": {
            getter: function(varBag, idService) {
                return varBag.pIN_CheckVar.value;
            }
        },
        "2JGxdRXRoUi0iuRZmhT+DA": {
            getter: function(varBag, idService) {
                return varBag.get_ContactUsFormDescriptionVar.value;
            }
        },
        "UZbC9SAbEE+r011hua97pQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.event_NavigationEventInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Object
        },
        "gbuzkX0iD0+xtBRI9oeq9w": {
            getter: function(varBag, idService) {
                return varBag.model.variables.contactUsFormVar;
            }
        },
        "cfHyjuB1vUOQl55kH_Q6wg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isFormFilledVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "Wep25NbgNUG4VQaqFgNxpA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isAnyFilledVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "oGqGGx7UPkqGJ14hOBRaeQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.descriptionVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "Ec+aKD_yd0qliiofCd_wIQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.messagePromptVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "gOGD3r+x5EW0+m4oUidxkQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isLoggedVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "Fze1+beSq0aVLICQe8drEQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.countryPhoneVar;
            },
            dataType: OS.DataTypes.DataTypes.PhoneNumber
        },
        "b6xEE7+Pvk6DkkXuGlcLZQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isSubmitingVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "dfVA4F5k1UO9oVBCS57AlA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.rate_SelectedRateVar;
            },
            dataType: OS.DataTypes.DataTypes.Integer
        },
        "32G6i293eUaxXckKJLCCxA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.rate_ShowRateVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "ME_5MEM6h0CxV5vsLBm_ew": {
            getter: function(varBag, idService) {
                return varBag.model.variables.rate_UserWantToBeContactedVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "ryGVy3vyakSR9N5L5hDDEw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.callPopupDataVar;
            }
        },
        "nmPJyARFrEOQTr2c4ETODQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.localCacheControl_UserInformationVar;
            }
        },
        "rXRkIjjDw0a35bCnSJc_Aw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isLoadingMainDataVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "THu+MHgQ7EGpody9XKUXvA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.ignorePolicesVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "6dw0TDHJ40yB8y_kJnU98Q": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_ContactSubjectIdIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "XyB8y9GokEqWnhwPevbT7g": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_ContactSubjectTitleIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "STQjCkyjPEaQH_nXC8E1hg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_ListMenuOptionLabelIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "tEJ5f0RDM0G3+9MfpBO2ZQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.dataAction_GetLocalityTimezoneDataAct;
            }
        },
        "CdFZ2an7H02s80EMUTebOw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.dataAction_GetCountriesNamesDataAct;
            }
        },
        "fXS7hySgvkGmm2f3b3lvpw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_Header_Title"));
                })(varBag.model, idService);
            }
        },
        "hbqlLyCr6UmVy+Ww5aFvJA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_Header_Right"));
                })(varBag.model, idService);
            }
        },
        "3+RViNAd90CIoTyH_KSpHA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HeaderContent"));
                })(varBag.model, idService);
            }
        },
        "pE4eeVm0tECNJkwj6GCMpw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "URBThq304kGfXU+EdlxlZg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "32mXuH18IEC39gaEY9ZzDg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "BKZUpSLVRE2YOmtlQTzPbA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "hGCpVAkzHU2bOQ4r1KwSjw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "JUe2r0RxOUWTwR0o6YRUkw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "AzEFzwLpdEOhPvFAoKTTfA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_SectionContent"));
                })(varBag.model, idService);
            }
        },
        "kIemyy4XZU+06cLPpjbahg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Rates"));
                })(varBag.model, idService);
            }
        },
        "2kBmrL81SkGVdFjB_1Edcw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Title"));
                })(varBag.model, idService);
            }
        },
        "5mwHiuPsH0qmjhVRGomcQw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "X_OA7MSmYkeJRNkr1ngVoQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "awjDb8RbPEqo33+bTu6jVg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_LoadingSection"));
                })(varBag.model, idService);
            }
        },
        "SiqUXrhoxUuMrU2hJjrCaw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Form_ContactUs"));
                })(varBag.model, idService);
            }
        },
        "Uy7XKPqy3k+DFW0UTTXZng": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Input_FullName"));
                })(varBag.model, idService);
            }
        },
        "J44dcDjAEEebepdu8QXchQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Input_Email"));
                })(varBag.model, idService);
            }
        },
        "FQkXkWB7A0m6HxOwkOk4wQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Input_PhoneNumber"));
                })(varBag.model, idService);
            }
        },
        "g+GcgxCwCE62M4QCgZqO+w": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Dropdown_Country"));
                })(varBag.model, idService);
            }
        },
        "WrFGSWYPnEK0wlxsOtBbGw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Input_Locality"));
                })(varBag.model, idService);
            }
        },
        "H41O4liPfkefiw6cugu_sw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_Input"));
                })(varBag.model, idService);
            }
        },
        "U+fsw8HVCU+SHYb5ZVrvHA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("TextArea_Message"));
                })(varBag.model, idService);
            }
        },
        "I2a90Gm86UinN1Z9BDQoyg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Icon"));
                })(varBag.model, idService);
            }
        },
        "j5nYxhnt7kajn6X2rGrEYg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "QceAXa_6dUeinb6yopUxpg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "aJE7PT6YREmMp8Qw+6YuLg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Button"));
                })(varBag.model, idService);
            }
        },
        "zpCwDp_jHkWGFXbgg8zkmQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("PopUps"));
                })(varBag.model, idService);
            }
        },
        "QimhrcjYHU+gMxH+6jTy9g": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("SubmittedConfirmation"));
                })(varBag.model, idService);
            }
        },
        "lJoVMVMQrUa0rB_KSJFjQg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_Header"));
                })(varBag.model, idService);
            }
        },
        "faj0Z8Oz2kCU4IAmQ1Ckag": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_Body"));
                })(varBag.model, idService);
            }
        },
        "2fkC+Jua+E2kk8kGHUIzbg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Icon"));
                })(varBag.model, idService);
            }
        },
        "RViGrWuGDkSjUbndHQ0qQw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Badge"));
                })(varBag.model, idService);
            }
        },
        "E7k12cTotUuJdi+fIbpBHQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Text"));
                })(varBag.model, idService);
            }
        },
        "_9wel4cKf0uhDwqbjhmHqA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "v9MI0sy+VES7q5HSPGxqOQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_ButtonLabel"));
                })(varBag.model, idService);
            }
        },
        "WgYGkcBVh0OJINBhyoNssQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_Header"));
                })(varBag.model, idService);
            }
        },
        "GNClu_He_EGlEI1+5uh48A": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_Body"));
                })(varBag.model, idService);
            }
        },
        "qZ2X9EC7DUyqBqnqbImftQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Bottom"));
                })(varBag.model, idService);
            }
        },
        "YJNf+EE9mk6WJRexooQqhg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_CommonUI_Inside_Layout"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});