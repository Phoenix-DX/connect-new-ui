define("Connect2_LegacyShared.Share_UI.ScreenBlock_ShareObject.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect_CommunityBusiness_CS.model", "UBTConnectLibrary.model", "UBT_AppManager.model", "UBT_AppManager.controller", "Connect_Household_CS.model", "Connect2_LegacyShared.Layout.Layout.mvc$model", "Connect2_LegacyShared.Layout.MenuIcon_Back.mvc$model", "Connect2_LegacyShared.Utility.Result_Item_Image.mvc$model", "UBTConnect_Utils.CW_Image.UBT_LazyImage.mvc$model", "UBTConnectLibrary.ConnectPatterns.AvatarImage.mvc$model", "Connect2_LegacyShared.Share_UI.ProfileList.mvc$model", "Connect_CommunityBusiness_CS.model$UI_CommunityBusiness_ShareCardRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$Connect_CommunityBusiness_CS", "UBTConnectLibrary.model$LazyImageSizeRec", "Connect2_LegacyShared.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$AvatarImageRec", "UBTConnectLibrary.model$AvatarImageFallbackoptionsRec", "UBT_AppManager.model$AppManager_CachedUserInfoRec", "Connect2_LegacyShared.referencesHealth$UBT_AppManager", "UBT_AppManager.controller$AppManager_GetCachedUserInfo", "Connect2_LegacyShared.model$ShareProfileRec", "Connect_Household_CS.model$UI_Screen_HouseholdDetailsRec", "Connect2_LegacyShared.referencesHealth$Connect_Household_CS", "Connect_Household_CS.model$UI_HouseholdMemberRec", "Connect2_LegacyShared.model$UI_HouseholdMemberList", "Connect2_LegacyShared.model$Type_ShareObjectRecordList"], function(OutSystems, Connect2_LegacySharedModel, Connect_CommunityBusiness_CSModel, UBTConnectLibraryModel, UBT_AppManagerModel, UBT_AppManagerController, Connect_Household_CSModel, Connect2_LegacyShared_Layout_Layout_mvcModel, Connect2_LegacyShared_Layout_MenuIcon_Back_mvcModel, Connect2_LegacyShared_Utility_Result_Item_Image_mvcModel, UBTConnect_Utils_CW_Image_UBT_LazyImage_mvcModel, UBTConnectLibrary_ConnectPatterns_AvatarImage_mvcModel, Connect2_LegacyShared_Share_UI_ProfileList_mvcModel) {
    var OS = OutSystems.Internal;
    var GetShareObjectTypeByIdAggrRec = (function(_super) {
        __extends(GetShareObjectTypeByIdAggrRec, _super);

        function GetShareObjectTypeByIdAggrRec(defaults) {
            _super.apply(this, arguments);
        }
        GetShareObjectTypeByIdAggrRec.RecordListType = Connect2_LegacySharedModel.Type_ShareObjectRecordList;
        GetShareObjectTypeByIdAggrRec.init();
        return GetShareObjectTypeByIdAggrRec;
    })(OS.Model.AggregateRecord);


    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("HouseholdName", "householdNameVar", "HouseholdName", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("HouseholdDescription", "householdDescriptionVar", "HouseholdDescription", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("HouseholdTag", "householdTagVar", "HouseholdTag", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("Bucket", "bucketVar", "Bucket", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("Path", "pathVar", "Path", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("Type", "typeVar", "Type", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("SignedURL", "signedURLVar", "SignedURL", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("CommunityBusiness", "communityBusinessVar", "CommunityBusiness", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect_CommunityBusiness_CSModel.UI_CommunityBusiness_ShareCardRec());
                }, false, Connect_CommunityBusiness_CSModel.UI_CommunityBusiness_ShareCardRec),
                this.attr("IsLoading", "isLoadingVar", "IsLoading", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("ShareObjectTypeId", "shareObjectTypeIdIn", "ShareObjectTypeId", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_shareObjectTypeIdInDataFetchStatus", "_shareObjectTypeIdInDataFetchStatus", "_shareObjectTypeIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("ObjectId", "objectIdIn", "ObjectId", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_objectIdInDataFetchStatus", "_objectIdInDataFetchStatus", "_objectIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_CustomTitle", "in_CustomTitleIn", "In_CustomTitle", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_in_CustomTitleInDataFetchStatus", "_in_CustomTitleInDataFetchStatus", "_in_CustomTitleInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("User_AgeVisibility", "user_AgeVisibilityIn", "User_AgeVisibility", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("_user_AgeVisibilityInDataFetchStatus", "_user_AgeVisibilityInDataFetchStatus", "_user_AgeVisibilityInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("GetShareObjectTypeById", "getShareObjectTypeByIdAggr", "getShareObjectTypeByIdAggr", true, true, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new GetShareObjectTypeByIdAggrRec());
                }, true, GetShareObjectTypeByIdAggrRec)
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
                    Model._hasValidationWidgetsValue = (((((Connect2_LegacyShared_Layout_Layout_mvcModel.hasValidationWidgets || Connect2_LegacyShared_Layout_MenuIcon_Back_mvcModel.hasValidationWidgets) || Connect2_LegacyShared_Utility_Result_Item_Image_mvcModel.hasValidationWidgets) || UBTConnect_Utils_CW_Image_UBT_LazyImage_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_AvatarImage_mvcModel.hasValidationWidgets) || Connect2_LegacyShared_Share_UI_ProfileList_mvcModel.hasValidationWidgets);
                }

                return Model._hasValidationWidgetsValue;
            }
        });

        Model.prototype.setInputs = function(inputs) {
            if ("ShareObjectTypeId" in inputs) {
                this.variables.shareObjectTypeIdIn = inputs.ShareObjectTypeId;
                if ("_shareObjectTypeIdInDataFetchStatus" in inputs) {
                    this.variables._shareObjectTypeIdInDataFetchStatus = inputs._shareObjectTypeIdInDataFetchStatus;
                }

            }

            if ("ObjectId" in inputs) {
                this.variables.objectIdIn = inputs.ObjectId;
                if ("_objectIdInDataFetchStatus" in inputs) {
                    this.variables._objectIdInDataFetchStatus = inputs._objectIdInDataFetchStatus;
                }

            }

            if ("In_CustomTitle" in inputs) {
                this.variables.in_CustomTitleIn = inputs.In_CustomTitle;
                if ("_in_CustomTitleInDataFetchStatus" in inputs) {
                    this.variables._in_CustomTitleInDataFetchStatus = inputs._in_CustomTitleInDataFetchStatus;
                }

            }

            if ("User_AgeVisibility" in inputs) {
                this.variables.user_AgeVisibilityIn = inputs.User_AgeVisibility;
                if ("_user_AgeVisibilityInDataFetchStatus" in inputs) {
                    this.variables._user_AgeVisibilityInDataFetchStatus = inputs._user_AgeVisibilityInDataFetchStatus;
                }

            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "Share_UI.ScreenBlock_ShareObject");
});
define("Connect2_LegacyShared.Share_UI.ScreenBlock_ShareObject.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "Connect_CommunityBusiness_CS.model", "UBTConnectLibrary.model", "UBT_AppManager.model", "UBT_AppManager.controller", "Connect_Household_CS.model", "react", "OutSystems/ReactView/Main", "Connect2_LegacyShared.Share_UI.ScreenBlock_ShareObject.mvc$model", "Connect2_LegacyShared.Share_UI.ScreenBlock_ShareObject.mvc$controller", "Connect2_LegacyShared.clientVariables", "Connect2_LegacyShared.Layout.Layout.mvc$view", "OutSystems/ReactWidgets/Main", "Connect2_LegacyShared.Layout.MenuIcon_Back.mvc$view", "Connect2_LegacyShared.Utility.Result_Item_Image.mvc$view", "UBTConnect_Utils.CW_Image.UBT_LazyImage.mvc$view", "UBTConnectLibrary.ConnectPatterns.AvatarImage.mvc$view", "Connect2_LegacyShared.Share_UI.ProfileList.mvc$view", "Connect_CommunityBusiness_CS.model$UI_CommunityBusiness_ShareCardRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$Connect_CommunityBusiness_CS", "UBTConnectLibrary.model$LazyImageSizeRec", "Connect2_LegacyShared.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$AvatarImageRec", "UBTConnectLibrary.model$AvatarImageFallbackoptionsRec", "UBT_AppManager.model$AppManager_CachedUserInfoRec", "Connect2_LegacyShared.referencesHealth$UBT_AppManager", "UBT_AppManager.controller$AppManager_GetCachedUserInfo", "Connect2_LegacyShared.model$ShareProfileRec", "Connect_Household_CS.model$UI_Screen_HouseholdDetailsRec", "Connect2_LegacyShared.referencesHealth$Connect_Household_CS", "Connect_Household_CS.model$UI_HouseholdMemberRec", "Connect2_LegacyShared.model$UI_HouseholdMemberList", "Connect2_LegacyShared.model$Type_ShareObjectRecordList"], function(OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, Connect_CommunityBusiness_CSModel, UBTConnectLibraryModel, UBT_AppManagerModel, UBT_AppManagerController, Connect_Household_CSModel, React, OSView, Connect2_LegacyShared_Share_UI_ScreenBlock_ShareObject_mvc_model, Connect2_LegacyShared_Share_UI_ScreenBlock_ShareObject_mvc_controller, Connect2_LegacySharedClientVariables, Connect2_LegacyShared_Layout_Layout_mvc_view, OSWidgets, Connect2_LegacyShared_Layout_MenuIcon_Back_mvc_view, Connect2_LegacyShared_Utility_Result_Item_Image_mvc_view, UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view, UBTConnectLibrary_ConnectPatterns_AvatarImage_mvc_view, Connect2_LegacyShared_Share_UI_ProfileList_mvc_view) {
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
        View.displayName = "Share_UI.ScreenBlock_ShareObject";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [Connect2_LegacyShared_Layout_Layout_mvc_view, Connect2_LegacyShared_Layout_MenuIcon_Back_mvc_view, Connect2_LegacyShared_Utility_Result_Item_Image_mvc_view, UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view, UBTConnectLibrary_ConnectPatterns_AvatarImage_mvc_view, Connect2_LegacyShared_Share_UI_ProfileList_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return Connect2_LegacyShared_Share_UI_ScreenBlock_ShareObject_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return Connect2_LegacyShared_Share_UI_ScreenBlock_ShareObject_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(Connect2_LegacyShared_Layout_Layout_mvc_view, {
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
                placeholders: {
                    menu: PlaceholderContent.Empty,
                    headerLeft: new PlaceholderContent(function() {
                        return [React.createElement(Connect2_LegacyShared_Layout_MenuIcon_Back_mvc_view, {
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
                                uuid: "1",
                                alias: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        })];
                    }),
                    title: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "text-align-center",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Expression, {
                            value: ("Share " + model.variables.getShareObjectTypeByIdAggr.listOut.getCurrent(callContext.iterationContext).type_ShareObjectAttr.labelAttr),
                            _idProps: {
                                service: idService,
                                uuid: "3"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getShareObjectTypeByIdAggr.dataFetchStatusAttr)
                        }))];
                    }),
                    headerRight: PlaceholderContent.Empty,
                    headerContent: PlaceholderContent.Empty,
                    content: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "padding",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "4"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "border-radius-soft border-neutral-4",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "5"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, $if((model.variables.shareObjectTypeIdIn === Connect2_LegacySharedModel.staticEntities.type_ShareObject.household), false, this, function() {
                            return [React.createElement(Connect2_LegacyShared_Utility_Result_Item_Image_mvc_view, {
                                inputs: {
                                    In_ShowDescription: model.getCachedValue(idService.getId("Household_List_Item.In_ShowDescription"), function() {
                                        return ((((model.variables.householdDescriptionVar) !== (""))) ? (true) : (false));
                                    }, function() {
                                        return model.variables.householdDescriptionVar;
                                    }),
                                    In_IsNavigationLoading: model.variables.isLoadingVar,
                                    ShowPlaceholderForImage: true,
                                    In_ResultType: Connect2_LegacySharedModel.staticEntities.resultListType.household,
                                    In_Path: model.variables.pathVar,
                                    In_SignedURL: model.variables.signedURLVar,
                                    In_HasAction: false,
                                    In_Bucket: model.variables.bucketVar,
                                    In_Type: model.variables.typeVar,
                                    In_ShowTag: model.getCachedValue(idService.getId("Household_List_Item.In_ShowTag"), function() {
                                        return ((((model.variables.householdTagVar) !== (""))) ? (true) : (false));
                                    }, function() {
                                        return model.variables.householdTagVar;
                                    }),
                                    In_HasBorder: false
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
                                    name: "Household_List_Item",
                                    alias: "3"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                placeholders: {
                                    imagePlaceholder: new PlaceholderContent(function() {
                                        return [$if(false, false, this, function() {
                                            return [];
                                        }, function() {
                                            return [React.createElement(UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view, {
                                                inputs: {
                                                    EntityType: Connect2_LegacySharedModel.staticEntities.connect_Entity.household,
                                                    ImageSize: model.getCachedValue(idService.getId("4O3Ws0bGOU2L8CP1Gggf+g.ImageSize"), function() {
                                                        return function() {
                                                            var rec = new UBTConnectLibraryModel.LazyImageSizeRec();
                                                            rec.widthAttr = Connect2_LegacySharedModel.staticEntities.uBT_ImageSize.large_65;
                                                            return rec;
                                                        }();
                                                    }),
                                                    EntityId: model.variables.objectIdIn,
                                                    _entityIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._objectIdInDataFetchStatus)
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
                                                    alias: "4"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider,
                                                _dependencies: []
                                            })];
                                        })];
                                    }),
                                    title_Placeholder: new PlaceholderContent(function() {
                                        return [React.createElement(OSWidgets.Expression, {
                                            style: "font-size-0-9em bold",
                                            value: model.variables.householdNameVar,
                                            _idProps: {
                                                service: idService,
                                                name: "Household_Title"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        })];
                                    }),
                                    description_Placeholder: new PlaceholderContent(function() {
                                        return [React.createElement(OSWidgets.Expression, {
                                            style: "country-household-count household-locality-no-paddingleft",
                                            value: model.getCachedValue(idService.getId("Household_Description.Value"), function() {
                                                return ((((model.variables.householdDescriptionVar) !== (""))) ? (model.variables.householdDescriptionVar) : (""));
                                            }, function() {
                                                return model.variables.householdDescriptionVar;
                                            }),
                                            _idProps: {
                                                service: idService,
                                                name: "Household_Description"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        })];
                                    }),
                                    tag_Placeholder: new PlaceholderContent(function() {
                                        return [React.createElement(OSWidgets.Expression, {
                                            extendedProperties: {
                                                style: "color: #000; font-size: 0.8em;"
                                            },
                                            style: "font-size-0-75em text-align-left padding-x-xs padding-y-xs border-radius-soft background-neutral-2 text-neutral-6",
                                            value: model.getCachedValue(idService.getId("Household_Tag.Value"), function() {
                                                return ((((model.variables.householdTagVar) !== (""))) ? (model.variables.householdTagVar) : (""));
                                            }, function() {
                                                return model.variables.householdTagVar;
                                            }),
                                            _idProps: {
                                                service: idService,
                                                name: "Household_Tag"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        })];
                                    }),
                                    result_Item_Placeholder: PlaceholderContent.Empty,
                                    bookmarkNote: PlaceholderContent.Empty
                                },
                                _dependencies: [asPrimitiveValue(model.variables.householdTagVar), asPrimitiveValue(model.variables.householdDescriptionVar), asPrimitiveValue(model.variables.householdNameVar), asPrimitiveValue(model.variables._objectIdInDataFetchStatus), asPrimitiveValue(model.variables.objectIdIn)]
                            })];
                        }, function() {
                            return [];
                        }), $if(((model.variables.shareObjectTypeIdIn === Connect2_LegacySharedModel.staticEntities.type_ShareObject.oneSchoolGlobal) || (model.variables.shareObjectTypeIdIn === Connect2_LegacySharedModel.staticEntities.type_ShareObject.campusCo)), false, this, function() {
                            return [React.createElement(Connect2_LegacyShared_Utility_Result_Item_Image_mvc_view, {
                                inputs: {
                                    In_Type: model.variables.communityBusinessVar.photoTypeAttr,
                                    In_ShowTag: (((model.variables.communityBusinessVar.countryNameAttr) !== ("")) || ((model.variables.communityBusinessVar.areasServedAttr) !== (""))),
                                    In_SignedURL: model.getCachedValue(idService.getId("CommunityBusiness_List_Item.In_SignedURL"), function() {
                                        return (((((((model.variables.communityBusinessVar.photoBucketAttr) !== ("")) && ((model.variables.communityBusinessVar.photoPathAttr) !== (""))) && ((model.variables.communityBusinessVar.photoTypeAttr) !== (""))) && ((model.variables.communityBusinessVar.photoSignedPathAttr) !== ("")))) ? (model.variables.communityBusinessVar.photoSignedPathAttr) : ((((model.variables.shareObjectTypeIdIn === Connect2_LegacySharedModel.staticEntities.type_ShareObject.campusCo)) ? (OS.Navigation.VersionedURL.getVersionedUrl("img/Connect2_LegacyShared.CampusCo_PhotoComingSoon.png")) : (OS.Navigation.VersionedURL.getVersionedUrl("img/Connect2_LegacyShared.OneSchool_PhotoComingSoon.png")))));
                                    }, function() {
                                        return model.variables.communityBusinessVar.photoBucketAttr;
                                    }, function() {
                                        return model.variables.communityBusinessVar.photoPathAttr;
                                    }, function() {
                                        return model.variables.communityBusinessVar.photoTypeAttr;
                                    }, function() {
                                        return model.variables.communityBusinessVar.photoSignedPathAttr;
                                    }, function() {
                                        return model.variables.shareObjectTypeIdIn;
                                    }),
                                    _in_SignedURLInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._shareObjectTypeIdInDataFetchStatus),
                                    In_Path: model.variables.communityBusinessVar.photoPathAttr,
                                    In_IsNavigationLoading: model.variables.isLoadingVar,
                                    In_Bucket: model.variables.communityBusinessVar.photoBucketAttr,
                                    In_HasAction: false,
                                    In_ShowDescription: false,
                                    In_HasBorder: false,
                                    In_ResultType: Connect2_LegacySharedModel.staticEntities.resultListType.subdivision,
                                    ShowPlaceholderForImage: false
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
                                    name: "CommunityBusiness_List_Item",
                                    alias: "5"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                placeholders: {
                                    imagePlaceholder: new PlaceholderContent(function() {
                                        return [$if(true, false, this, function() {
                                            return [React.createElement(OSWidgets.Icon, {
                                                icon: "spinner",
                                                iconSize: /*Threetimes*/ 2,
                                                style: "icon fa-spin",
                                                visible: true,
                                                _idProps: {
                                                    service: idService,
                                                    uuid: "12"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider
                                            })];
                                        }, function() {
                                            return [];
                                        })];
                                    }),
                                    title_Placeholder: new PlaceholderContent(function() {
                                        return [React.createElement(OSWidgets.Expression, {
                                            style: "font-size-0-9em bold",
                                            value: model.variables.communityBusinessVar.nameAttr,
                                            _idProps: {
                                                service: idService,
                                                name: "CommunityBusiness_Title"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        })];
                                    }),
                                    description_Placeholder: PlaceholderContent.Empty,
                                    tag_Placeholder: new PlaceholderContent(function() {
                                        return [React.createElement(OSWidgets.Expression, {
                                            extendedProperties: {
                                                style: "color: #000; font-size: 0.8em;"
                                            },
                                            style: "font-size-0-75em text-align-left padding-x-xs padding-y-xs border-radius-soft background-neutral-2 text-neutral-6",
                                            value: model.variables.communityBusinessVar.areasServedAttr,
                                            _idProps: {
                                                service: idService,
                                                name: "CommunityBusiness_Tag"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        })];
                                    }),
                                    result_Item_Placeholder: PlaceholderContent.Empty,
                                    bookmarkNote: PlaceholderContent.Empty
                                },
                                _dependencies: [asPrimitiveValue(model.variables.communityBusinessVar.areasServedAttr), asPrimitiveValue(model.variables.communityBusinessVar.nameAttr)]
                            })];
                        }, function() {
                            return [];
                        }), $if((model.variables.shareObjectTypeIdIn === Connect2_LegacySharedModel.staticEntities.type_ShareObject.feed), false, this, function() {
                            return [React.createElement(Connect2_LegacyShared_Utility_Result_Item_Image_mvc_view, {
                                inputs: {
                                    In_ShowDescription: true,
                                    In_HasAction: false,
                                    ShowPlaceholderForImage: true,
                                    In_IsNavigationLoading: model.variables.isLoadingVar,
                                    In_HasBorder: false,
                                    In_ShowTag: false
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
                                    name: "Feed_List_Item",
                                    alias: "6"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                placeholders: {
                                    imagePlaceholder: new PlaceholderContent(function() {
                                        return [React.createElement(UBTConnectLibrary_ConnectPatterns_AvatarImage_mvc_view, {
                                            inputs: {
                                                In_BorderRadius: Connect2_LegacySharedModel.staticEntities.uBT_Shape.soft,
                                                In_AvatarImage: model.getCachedValue(idService.getId("uQLt+e10EUK6WBi6iTEaSQ.In_AvatarImage"), function() {
                                                    return function() {
                                                        var rec = new UBTConnectLibraryModel.AvatarImageRec();
                                                        rec.fallbackOptionsAttr = function() {
                                                            var rec = new UBTConnectLibraryModel.AvatarImageFallbackoptionsRec();
                                                            rec.iconIdAttr = Connect2_LegacySharedModel.staticEntities.uBT_Icons2.feedItem;
                                                            rec.backgroundColorAttr = Connect2_LegacySharedModel.staticEntities.uBT_Color.cyanDark;
                                                            rec.fontColorAttr = Connect2_LegacySharedModel.staticEntities.uBT_Color.neutral0;
                                                            return rec;
                                                        }();
                                                        return rec;
                                                    }();
                                                }),
                                                In_SizeId: Connect2_LegacySharedModel.staticEntities.uBT_AvatarSize.large_65
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
                                                uuid: "16",
                                                alias: "7"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider,
                                            _dependencies: []
                                        })];
                                    }),
                                    title_Placeholder: new PlaceholderContent(function() {
                                        return [React.createElement(OSWidgets.Expression, {
                                            style: "font-size-0-9em bold",
                                            value: model.variables.in_CustomTitleIn,
                                            _idProps: {
                                                service: idService,
                                                name: "Feed_Title"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider,
                                            value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_CustomTitleInDataFetchStatus)
                                        })];
                                    }),
                                    description_Placeholder: PlaceholderContent.Empty,
                                    tag_Placeholder: PlaceholderContent.Empty,
                                    result_Item_Placeholder: PlaceholderContent.Empty,
                                    bookmarkNote: PlaceholderContent.Empty
                                },
                                _dependencies: [asPrimitiveValue(model.variables._in_CustomTitleInDataFetchStatus), asPrimitiveValue(model.variables.in_CustomTitleIn)]
                            })];
                        }, function() {
                            return [];
                        })), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "margin-top-base",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "18"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(Connect2_LegacyShared_Share_UI_ProfileList_mvc_view, {
                            inputs: {
                                ShareObjectTypeId: model.variables.shareObjectTypeIdIn,
                                _shareObjectTypeIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._shareObjectTypeIdInDataFetchStatus),
                                ShareObjectId: model.variables.objectIdIn,
                                _shareObjectIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._objectIdInDataFetchStatus)
                            },
                            events: {
                                _handleError: function(ex) {
                                    controller.handleError(ex);
                                },
                                subscriptionDenied$Action: function() {
                                    var eventHandlerContext = callContext.clone();
                                    return OS.Flow.tryFinally(function() {
                                        var varBag = {};
                                        controller.pushDebuggerContext(eventHandlerContext);

                                        OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Share_UI/ProfileList SubscriptionDenied");
                                        controller.subscriptionDenied$Action(controller.callContext(eventHandlerContext));
                                    }, function() {
                                        controller.popDebuggerContext(eventHandlerContext);
                                    });

                                    ;
                                },
                                share$Action: function(shareProfileIn) {
                                    return Promise.resolve().then(function() {
                                        var eventHandlerContext = callContext.clone();
                                        return OS.Flow.tryFinally(function() {
                                            var varBag = {};
                                            controller.pushDebuggerContext(eventHandlerContext);

                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Share_UI/ProfileList Share");
                                            return controller.handleShareProfileList$Action(shareProfileIn, controller.callContext(eventHandlerContext));
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
                                alias: "8"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        })))];
                    }),
                    bottomBar: new PlaceholderContent(function() {
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
                    commonUI_Elements: new PlaceholderContent(function() {
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
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);

    return View;
});
define("Connect2_LegacyShared.Share_UI.ScreenBlock_ShareObject.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "Connect_CommunityBusiness_CS.model", "UBTConnectLibrary.model", "UBT_AppManager.model", "UBT_AppManager.controller", "Connect_Household_CS.model", "Connect2_LegacyShared.languageResources", "Connect2_LegacyShared.clientVariables", "Connect2_LegacyShared.Share_UI.ScreenBlock_ShareObject.mvc$debugger", "Connect2_LegacyShared.Share_UI.ScreenBlock_ShareObject.mvc$controller.HandleShareProfileList.DeferHandleShareJS", "Connect_CommunityBusiness_CS.model$UI_CommunityBusiness_ShareCardRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$Connect_CommunityBusiness_CS", "UBTConnectLibrary.model$LazyImageSizeRec", "Connect2_LegacyShared.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$AvatarImageRec", "UBTConnectLibrary.model$AvatarImageFallbackoptionsRec", "UBT_AppManager.model$AppManager_CachedUserInfoRec", "Connect2_LegacyShared.referencesHealth$UBT_AppManager", "UBT_AppManager.controller$AppManager_GetCachedUserInfo", "Connect2_LegacyShared.model$ShareProfileRec", "Connect_Household_CS.model$UI_Screen_HouseholdDetailsRec", "Connect2_LegacyShared.referencesHealth$Connect_Household_CS", "Connect_Household_CS.model$UI_HouseholdMemberRec", "Connect2_LegacyShared.model$UI_HouseholdMemberList", "Connect2_LegacyShared.model$Type_ShareObjectRecordList"], function(OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, Connect_CommunityBusiness_CSModel, UBTConnectLibraryModel, UBT_AppManagerModel, UBT_AppManagerController, Connect_Household_CSModel, Connect2_LegacySharedLanguageResources, Connect2_LegacySharedClientVariables, Connect2_LegacyShared_Share_UI_ScreenBlock_ShareObject_mvc_Debugger, Connect2_LegacyShared_Share_UI_ScreenBlock_ShareObject_mvc_controller_HandleShareProfileList_DeferHandleShareJS) {
    var OS = OutSystems.Internal;
    var Controller = (function(_super) {
        __extends(Controller, _super);

        function Controller() {
            _super.apply(this, arguments);
            var controller = this.controller;
            this.clientActionProxies = {
                deferredHandleShareProfileList$Action: function(targetProfileIdIn) {
                    targetProfileIdIn = (targetProfileIdIn === undefined) ? "" : targetProfileIdIn;
                    return controller.executeActionInsideJSNode(controller._deferredHandleShareProfileList$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(targetProfileIdIn, OS.DataTypes.DataTypes.Text)), controller.callContext(), function(actionResults) {
                        return {};
                    }, function() {
                        return;
                    }, "DeferredHandleShareProfileList");
                }
            };
            this.dataFetchDependenciesOriginal = {
                getShareObjectTypeById$AggrRefresh: 0
            };
            this.dataFetchDependentsGraph = {
                getShareObjectTypeById$AggrRefresh: []
            };
            this.shouldSendClientVarsToDataSources = false;
        }
        // Server Actions
        Controller.prototype.shareObject$ServerAction = function(in_ShareObjectTypeIdIn, in_SharedObjectIdIn, in_SharingProfileNameIn, in_TargetCBUserIdIn, in_UpdateTypeIn, in_UpdateDateIn, callContext) {
            var controller = this.controller;
            var inputs = {
                In_ShareObjectTypeId: OS.DataConversion.ServerDataConverter.to(in_ShareObjectTypeIdIn, OS.DataTypes.DataTypes.Text),
                In_SharedObjectId: OS.DataConversion.ServerDataConverter.to(in_SharedObjectIdIn, OS.DataTypes.DataTypes.Text),
                In_SharingProfileName: OS.DataConversion.ServerDataConverter.to(in_SharingProfileNameIn, OS.DataTypes.DataTypes.Text),
                In_TargetCBUserId: OS.DataConversion.ServerDataConverter.to(in_TargetCBUserIdIn, OS.DataTypes.DataTypes.Text),
                In_UpdateType: OS.DataConversion.ServerDataConverter.to(in_UpdateTypeIn, OS.DataTypes.DataTypes.Text),
                In_UpdateDate: OS.DataConversion.ServerDataConverter.to(in_UpdateDateIn, OS.DataTypes.DataTypes.Date)
            };
            return controller.callServerAction("ShareObject", "screenservices/Connect2_LegacyShared/Share_UI/ScreenBlock_ShareObject/ActionShareObject", "IUeaBfLHtjtW5etokxPmRA", inputs, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function(json, headers) {
                OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
            }, false).then(function(outputs) {
                var executeServerActionResult = new(controller.constructor.getVariableGroupType("Connect2_LegacyShared.Share_UI.ScreenBlock_ShareObject$rssespaceconnect2_sharing_cs_ActionShareObject"))();
                executeServerActionResult.isSuccessOut = OS.DataConversion.ServerDataConverter.from(outputs.IsSuccess, OS.DataTypes.DataTypes.Boolean);
                executeServerActionResult.messageOut = OS.DataConversion.ServerDataConverter.from(outputs.Message, OS.DataTypes.DataTypes.Text);
                executeServerActionResult.isAllowedOut = OS.DataConversion.ServerDataConverter.from(outputs.IsAllowed, OS.DataTypes.DataTypes.Boolean);
                executeServerActionResult.shareIdOut = OS.DataConversion.ServerDataConverter.from(outputs.ShareId, OS.DataTypes.DataTypes.LongInteger);
                return executeServerActionResult;
            });
        };
        Controller.registerVariableGroupType("Connect2_LegacyShared.Share_UI.ScreenBlock_ShareObject$rssespaceconnect2_sharing_cs_ActionShareObject", [{
            name: "IsSuccess",
            attrName: "isSuccessOut",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }, {
            name: "Message",
            attrName: "messageOut",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }, {
            name: "IsAllowed",
            attrName: "isAllowedOut",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }, {
            name: "ShareId",
            attrName: "shareIdOut",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.LongInteger,
            defaultValue: function() {
                return OS.DataTypes.LongInteger.defaultValue;
            }
        }]);
        Controller.prototype.get_UI_CommunityBusinessShareCard$ServerAction = function(in_CommunityBusinessIdIn, callContext) {
            var controller = this.controller;
            var inputs = {
                In_CommunityBusinessId: OS.DataConversion.ServerDataConverter.to(in_CommunityBusinessIdIn, OS.DataTypes.DataTypes.LongInteger)
            };
            return controller.callServerAction("Get_UI_CommunityBusinessShareCard", "screenservices/Connect2_LegacyShared/Share_UI/ScreenBlock_ShareObject/ServiceAPIGet_UI_CommunityBusinessShareCard", "cFDL6IaanDDmMfwbh1NA6Q", inputs, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function(json, headers) {
                OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
            }, false).then(function(outputs) {
                var executeServerActionResult = new(controller.constructor.getVariableGroupType("Connect2_LegacyShared.Share_UI.ScreenBlock_ShareObject$ServiceAPIGet_UI_CommunityBusinessShareCard"))();
                executeServerActionResult.out_UI_CommunityBusiness_ShareCardOut = OS.DataConversion.ServerDataConverter.from(outputs.Out_UI_CommunityBusiness_ShareCard, Connect_CommunityBusiness_CSModel.UI_CommunityBusiness_ShareCardRec);
                return executeServerActionResult;
            });
        };
        Controller.registerVariableGroupType("Connect2_LegacyShared.Share_UI.ScreenBlock_ShareObject$ServiceAPIGet_UI_CommunityBusinessShareCard", [{
            name: "Out_UI_CommunityBusiness_ShareCard",
            attrName: "out_UI_CommunityBusiness_ShareCardOut",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Record,
            defaultValue: function() {
                return new Connect_CommunityBusiness_CSModel.UI_CommunityBusiness_ShareCardRec();
            },
            complexType: Connect_CommunityBusiness_CSModel.UI_CommunityBusiness_ShareCardRec
        }]);
        Controller.prototype.getHouseholdDetails$ServerAction = function(householdIdIn, user_AgeVisibilityIn, checkVisibilityIn, callContext) {
            var controller = this.controller;
            var inputs = {
                HouseholdId: OS.DataConversion.ServerDataConverter.to(householdIdIn, OS.DataTypes.DataTypes.LongInteger),
                User_AgeVisibility: OS.DataConversion.ServerDataConverter.to(user_AgeVisibilityIn, OS.DataTypes.DataTypes.Boolean),
                CheckVisibility: OS.DataConversion.ServerDataConverter.to(checkVisibilityIn, OS.DataTypes.DataTypes.Boolean)
            };
            return controller.callServerAction("GetHouseholdDetails", "screenservices/Connect2_LegacyShared/Share_UI/ScreenBlock_ShareObject/ServiceAPIGetHouseholdDetails", "2_Jz_JNMGo8N6DK48JJzog", inputs, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function(json, headers) {
                OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
            }, false).then(function(outputs) {
                var executeServerActionResult = new(controller.constructor.getVariableGroupType("Connect2_LegacyShared.Share_UI.ScreenBlock_ShareObject$ServiceAPIGetHouseholdDetails"))();
                executeServerActionResult.uI_Screen_HouseholdDetailsOut = OS.DataConversion.ServerDataConverter.from(outputs.UI_Screen_HouseholdDetails, Connect_Household_CSModel.UI_Screen_HouseholdDetailsRec);
                executeServerActionResult.out_HouseholdMembersOut = OS.DataConversion.ServerDataConverter.from(outputs.Out_HouseholdMembers, Connect2_LegacySharedModel.UI_HouseholdMemberList);
                executeServerActionResult.out_NonHouseholdMembersOut = OS.DataConversion.ServerDataConverter.from(outputs.Out_NonHouseholdMembers, Connect2_LegacySharedModel.UI_HouseholdMemberList);
                executeServerActionResult.isVisibleOut = OS.DataConversion.ServerDataConverter.from(outputs.isVisible, OS.DataTypes.DataTypes.Boolean);
                return executeServerActionResult;
            });
        };
        Controller.registerVariableGroupType("Connect2_LegacyShared.Share_UI.ScreenBlock_ShareObject$ServiceAPIGetHouseholdDetails", [{
            name: "UI_Screen_HouseholdDetails",
            attrName: "uI_Screen_HouseholdDetailsOut",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Record,
            defaultValue: function() {
                return new Connect_Household_CSModel.UI_Screen_HouseholdDetailsRec();
            },
            complexType: Connect_Household_CSModel.UI_Screen_HouseholdDetailsRec
        }, {
            name: "Out_HouseholdMembers",
            attrName: "out_HouseholdMembersOut",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.RecordList,
            defaultValue: function() {
                return new Connect2_LegacySharedModel.UI_HouseholdMemberList();
            },
            complexType: Connect2_LegacySharedModel.UI_HouseholdMemberList
        }, {
            name: "Out_NonHouseholdMembers",
            attrName: "out_NonHouseholdMembersOut",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.RecordList,
            defaultValue: function() {
                return new Connect2_LegacySharedModel.UI_HouseholdMemberList();
            },
            complexType: Connect2_LegacySharedModel.UI_HouseholdMemberList
        }, {
            name: "isVisible",
            attrName: "isVisibleOut",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return true;
            }
        }]);

        // Aggregates and Data Actions
        Controller.prototype.getShareObjectTypeById$AggrRefresh = function(maxRecords, startIndex, callContext) {
            var model = this.model;
            var controller = this.controller;
            var callContext = controller.callContext(callContext);
            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:UeN236X7G0WxN1JtyALfjQ:/NRWebFlows.lZepHxCQC0OwqtkQndml+Q/NodesShownInESpaceTree.yfFgw3mN4EG5gmWEqURUAA/ScreenDataSets.UeN236X7G0WxN1JtyALfjQ:y7uTO9dLbJElkCoxJ9nCAw", "Connect2_LegacyShared", "GetShareObjectTypeById", "NRNodes.WebScreenDataSet", callContext.id, varBag);
                OutSystemsDebugger.setThreadStartName(callContext.id, "Share_UI/ScreenBlock_ShareObject/GetShareObjectTypeById");
                return controller.callAggregateWithStartIndexAndClientVars("ScreenDataSetGetShareObjectTypeById", "screenservices/Connect2_LegacyShared/Share_UI/ScreenBlock_ShareObject/ScreenDataSetGetShareObjectTypeById", "eER10c1SHIaVdhNKA_kcpw", maxRecords, startIndex, function(b) {
                    model.variables.getShareObjectTypeByIdAggr.dataFetchStatusAttr = b;
                }, function(json) {
                    model.variables.getShareObjectTypeByIdAggr.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getShareObjectTypeByIdAggr.constructor));
                }, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function(json, headers) {
                    OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
                }, callContext, undefined, false);

            }, function() {
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:UeN236X7G0WxN1JtyALfjQ", callContext.id);
                controller.popDebuggerContext(callContext);

            });
        };

        Controller.prototype.dataFetchActionNames = ["getShareObjectTypeById$AggrRefresh"];
        // Client Actions
        Controller.prototype._deferredHandleShareProfileList$Action = function(targetProfileIdIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("DeferredHandleShareProfileList");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_LegacyShared.Share_UI.ScreenBlock_ShareObject.DeferredHandleShareProfileList$vars"))());
            vars.value.targetProfileIdInLocal = targetProfileIdIn;
            var shareObjectVar = new OS.DataTypes.VariableHolder();
            var appManager_GetCachedUserInfoVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.vars = vars;
            varBag.shareObjectVar = shareObjectVar;
            varBag.appManager_GetCachedUserInfoVar = appManager_GetCachedUserInfoVar;
            OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:E8dhAm2HVkORSXwAqSzLSg:/NRWebFlows.lZepHxCQC0OwqtkQndml+Q/NodesShownInESpaceTree.yfFgw3mN4EG5gmWEqURUAA/ClientActions.E8dhAm2HVkORSXwAqSzLSg:1eHOu0KRmka1qpjOd9tRuw", "Connect2_LegacyShared", "DeferredHandleShareProfileList", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:UZXhSUJ3SUqFWZfWav24iw", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:ObFDhDKvLkWmdUb4M_W0iA", callContext.id);
                // Execute Action: AppManager_GetCachedUserInfo
                appManager_GetCachedUserInfoVar.value = UBT_AppManagerController.default.appManager_GetCachedUserInfo$Action(callContext);

                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:KzimlWht70q3fP3A_Qydpw", callContext.id);
                // Execute Action: ShareObject
                model.flush();
                return controller.shareObject$ServerAction(model.variables.shareObjectTypeIdIn, model.variables.objectIdIn, ((appManager_GetCachedUserInfoVar.value.userInformationOut.firstNameAttr + " ") + appManager_GetCachedUserInfoVar.value.userInformationOut.lastNameAttr), vars.value.targetProfileIdInLocal, "", OS.DataTypes.DateTime.defaultValue, callContext).then(function(value) {
                    shareObjectVar.value = value;
                }).then(function() {
                    OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:JRRyh0Oz4USLv8pL4hIEwA", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:E8dhAm2HVkORSXwAqSzLSg", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:E8dhAm2HVkORSXwAqSzLSg", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("Connect2_LegacyShared.Share_UI.ScreenBlock_ShareObject.DeferredHandleShareProfileList$vars", [{
            name: "TargetProfileId",
            attrName: "targetProfileIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.prototype._onParametersChanged$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnParametersChanged");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:MMtiEsxGRUaLoWuYF0WOXw:/NRWebFlows.lZepHxCQC0OwqtkQndml+Q/NodesShownInESpaceTree.yfFgw3mN4EG5gmWEqURUAA/ClientActions.MMtiEsxGRUaLoWuYF0WOXw:g0g0e8FRc0U+OcitcusvgQ", "Connect2_LegacyShared", "OnParametersChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:7PJcqFg7v0O7U0Jgm00CRg", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:LJa8f8aPIUOaupddXsxReQ", callContext.id);
                // Refresh Query: GetShareObjectTypeById
                var result = controller.getShareObjectTypeById$AggrRefresh(50, 0, callContext);
                model.flush();
                return result.then(function() {
                    OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:WT9N745vR06817Z7R7sn9Q", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:MMtiEsxGRUaLoWuYF0WOXw", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:MMtiEsxGRUaLoWuYF0WOXw", callContext.id);
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
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:o1m8GH6InEqAzNEp+BO+Xw:/NRWebFlows.lZepHxCQC0OwqtkQndml+Q/NodesShownInESpaceTree.yfFgw3mN4EG5gmWEqURUAA/ClientActions.o1m8GH6InEqAzNEp+BO+Xw:b6M_Wpi4v+dbaqQBL4T3wg", "Connect2_LegacyShared", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:QGl7K5qDzUSJ9mQsSO29xQ", callContext.id);
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:mlczvFaQ2kuQZvOanaiABw", callContext.id);
                // IsLoading = True
                model.variables.isLoadingVar = true;
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:KHfz1SHmHEmN5HHI8z18Dg", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:o1m8GH6InEqAzNEp+BO+Xw", callContext.id);
            }

        };
        Controller.prototype._handleShareProfileList$Action = function(shareTargetProfileIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("HandleShareProfileList");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_LegacyShared.Share_UI.ScreenBlock_ShareObject.HandleShareProfileList$vars"))());
            vars.value.shareTargetProfileInLocal = shareTargetProfileIn.clone();
            varBag.callContext = callContext;
            varBag.vars = vars;
            OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:8kb4fD7MEkeux2nzGqLiRw:/NRWebFlows.lZepHxCQC0OwqtkQndml+Q/NodesShownInESpaceTree.yfFgw3mN4EG5gmWEqURUAA/ClientActions.8kb4fD7MEkeux2nzGqLiRw:n9v4ou4HXrak+gi+P6PCMw", "Connect2_LegacyShared", "HandleShareProfileList", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:qdrVWPdL4UeZLN3INZ20zA", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:bcg2gn8Pu0yLTvDPe4l8eg", callContext.id);
                return controller.safeExecuteAsyncJSNode(Connect2_LegacyShared_Share_UI_ScreenBlock_ShareObject_mvc_controller_HandleShareProfileList_DeferHandleShareJS, "DeferHandleShare", "HandleShareProfileList", {
                    TargetProfileId: OS.DataConversion.JSNodeParamConverter.to(vars.value.shareTargetProfileInLocal.profileIdAttr, OS.DataTypes.DataTypes.Text)
                }, function($parameters) {}, {
                    DeferredHandleShareProfileList: controller.clientActionProxies.deferredHandleShareProfileList$Action
                }, {}).then(function() {
                    OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:qr9BOT_D8ke4bHFGVWMDZw", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:8kb4fD7MEkeux2nzGqLiRw", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:8kb4fD7MEkeux2nzGqLiRw", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("Connect2_LegacyShared.Share_UI.ScreenBlock_ShareObject.HandleShareProfileList$vars", [{
            name: "ShareTargetProfile",
            attrName: "shareTargetProfileInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Record,
            defaultValue: function() {
                return new Connect2_LegacySharedModel.ShareProfileRec();
            },
            complexType: Connect2_LegacySharedModel.ShareProfileRec
        }]);
        Controller.prototype._onReady$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnReady");
            callContext = controller.callContext(callContext);
            var get_UI_CommunityBusinessShareCardVar = new OS.DataTypes.VariableHolder();
            var getHouseholdDetailsVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.get_UI_CommunityBusinessShareCardVar = get_UI_CommunityBusinessShareCardVar;
            varBag.getHouseholdDetailsVar = getHouseholdDetailsVar;
            OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:JWEQlQigDUqZRG7llj5kvA:/NRWebFlows.lZepHxCQC0OwqtkQndml+Q/NodesShownInESpaceTree.yfFgw3mN4EG5gmWEqURUAA/ClientActions.JWEQlQigDUqZRG7llj5kvA:bxvzSJeew42A+83I_kFaew", "Connect2_LegacyShared", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:e93mBeotkU6cmLSsY2sBOQ", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                // ShareObjectType
                return OS.Flow.executeSequence(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:RSo+1iaCuEKQMSquEIw+qg", callContext.id) && (model.variables.shareObjectTypeIdIn === Connect2_LegacySharedModel.staticEntities.type_ShareObject.household))) {
                        OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:VJzt7txDDUW_+wDGTDRZ_w", callContext.id);
                        // Execute Action: GetHouseholdDetails
                        model.flush();
                        return controller.getHouseholdDetails$ServerAction(OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.textToInteger(model.variables.objectIdIn)), model.variables.user_AgeVisibilityIn, false, callContext).then(function(value) {
                            getHouseholdDetailsVar.value = value;
                        }).then(function() {
                            // Set Household
                            OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:dH5fojecMUuOkaWdqgkDJA", callContext.id);
                            // HouseholdName = GetHouseholdDetails.UI_Screen_HouseholdDetails.HouseholdCard.Household_Card_Content.Name
                            model.variables.householdNameVar = getHouseholdDetailsVar.value.uI_Screen_HouseholdDetailsOut.householdCardAttr.household_Card_ContentAttr.nameAttr;
                            OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:dH5fojecMUuOkaWdqgkDJA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                            // HouseholdDescription = GetHouseholdDetails.UI_Screen_HouseholdDetails.HouseholdCard.Household_Card_Content.FamilyNames
                            model.variables.householdDescriptionVar = getHouseholdDetailsVar.value.uI_Screen_HouseholdDetailsOut.householdCardAttr.household_Card_ContentAttr.familyNamesAttr;
                            OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:dH5fojecMUuOkaWdqgkDJA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
                            // Bucket = ""
                            model.variables.bucketVar = "";
                            OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:dH5fojecMUuOkaWdqgkDJA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
                            // Path = ""
                            model.variables.pathVar = "";
                            OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:dH5fojecMUuOkaWdqgkDJA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
                            // Type = ""
                            model.variables.typeVar = "";
                            OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:dH5fojecMUuOkaWdqgkDJA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "6");
                            // SignedURL = ""
                            model.variables.signedURLVar = "";
                            OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:dH5fojecMUuOkaWdqgkDJA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "7");
                            // HouseholdTag = GetHouseholdDetails.UI_Screen_HouseholdDetails.HouseholdCard.Household_Card_Content.LocalityName + ", " + GetHouseholdDetails.UI_Screen_HouseholdDetails.HouseholdCard.Household_Card_Content.CountryName
                            model.variables.householdTagVar = ((getHouseholdDetailsVar.value.uI_Screen_HouseholdDetailsOut.householdCardAttr.household_Card_ContentAttr.localityNameAttr + ", ") + getHouseholdDetailsVar.value.uI_Screen_HouseholdDetailsOut.householdCardAttr.household_Card_ContentAttr.countryNameAttr);
                        });
                    } else {
                        return OS.Flow.executeSequence(function() {
                            if (((model.variables.shareObjectTypeIdIn === Connect2_LegacySharedModel.staticEntities.type_ShareObject.campusCo) || (model.variables.shareObjectTypeIdIn === Connect2_LegacySharedModel.staticEntities.type_ShareObject.oneSchoolGlobal))) {
                                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:qixwHBq8l0GDjbQhgjG8GQ", callContext.id);
                                // Execute Action: Get_UI_CommunityBusinessShareCard
                                model.flush();
                                return controller.get_UI_CommunityBusinessShareCard$ServerAction(OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.textToInteger(model.variables.objectIdIn)), callContext).then(function(value) {
                                    get_UI_CommunityBusinessShareCardVar.value = value;
                                }).then(function() {
                                    // Set Data
                                    OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:2nVsE3k0zECzgiHvqVahhQ", callContext.id);
                                    // CommunityBusiness = Get_UI_CommunityBusinessShareCard.Out_UI_CommunityBusiness_ShareCard
                                    model.variables.communityBusinessVar = get_UI_CommunityBusinessShareCardVar.value.out_UI_CommunityBusiness_ShareCardOut;
                                    OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:2nVsE3k0zECzgiHvqVahhQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                                    // CommunityBusiness.AreasServed = Get_UI_CommunityBusinessShareCard.Out_UI_CommunityBusiness_ShareCard.AreasServed + If
                                    model.variables.communityBusinessVar.areasServedAttr = (get_UI_CommunityBusinessShareCardVar.value.out_UI_CommunityBusiness_ShareCardOut.areasServedAttr + ((((get_UI_CommunityBusinessShareCardVar.value.out_UI_CommunityBusiness_ShareCardOut.countryNameAttr) !== (""))) ? ((", " + get_UI_CommunityBusinessShareCardVar.value.out_UI_CommunityBusiness_ShareCardOut.countryNameAttr)) : ("")));
                                });
                            } else {
                                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:YVls5h4Ewka+MBgidxWjOA", callContext.id);
                                // IsLoading = False
                                model.variables.isLoadingVar = false;
                                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:rGUns97iHE2d5PwFEQnj2A", callContext.id);
                                return OS.Flow.returnAsync();

                            }

                        });
                    }

                }).then(function() {
                    OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:yfz0IIcEPUCfafUxtmmB9A", callContext.id);
                    // IsLoading = False
                    model.variables.isLoadingVar = false;
                    OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:JniUCvKG+EmVnlLFhpNA_g", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:JWEQlQigDUqZRG7llj5kvA", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:JWEQlQigDUqZRG7llj5kvA", callContext.id);
                throw ex;

            });
        };

        Controller.prototype.deferredHandleShareProfileList$Action = function(targetProfileIdIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._deferredHandleShareProfileList$Action, callContext, targetProfileIdIn);

        };
        Controller.prototype.onParametersChanged$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);

        };
        Controller.prototype.onInitialize$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

        };
        Controller.prototype.handleShareProfileList$Action = function(shareTargetProfileIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handleShareProfileList$Action, callContext, shareTargetProfileIn);

        };
        Controller.prototype.onReady$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

        };
        Controller.prototype.subscriptionDenied$Action = function() {
            return Promise.resolve();
        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:lZepHxCQC0OwqtkQndml+Q:/NRWebFlows.lZepHxCQC0OwqtkQndml+Q:pv7815SkwH5QyvCi55ul5Q", "Connect2_LegacyShared", "Share_UI", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:yfFgw3mN4EG5gmWEqURUAA:/NRWebFlows.lZepHxCQC0OwqtkQndml+Q/NodesShownInESpaceTree.yfFgw3mN4EG5gmWEqURUAA:_5IemV11NbmDyXx3Ynf17g", "Connect2_LegacyShared", "ScreenBlock_ShareObject", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:yfFgw3mN4EG5gmWEqURUAA", callContext.id);
            OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:lZepHxCQC0OwqtkQndml+Q", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "Share_UI/ScreenBlock_ShareObject On Initialize");
                return controller.onInitialize$Action(callContext);

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

                OutSystemsDebugger.setThreadStartName(callContext.id, "Share_UI/ScreenBlock_ShareObject On Ready");
                return controller.onReady$Action(callContext);

            }, function() {
                controller.popDebuggerContext(callContext);

            });

        };
        Controller.prototype.onRenderEventHandler = null;
        Controller.prototype.onDestroyEventHandler = null;
        Controller.prototype.onParametersChangedEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "Share_UI/ScreenBlock_ShareObject On Parameters Changed");
                return controller.onParametersChanged$Action(callContext);

            }, function() {
                controller.popDebuggerContext(callContext);

            });

        };
        Controller.prototype.handleError = function(ex) {
            return controller.handleError(ex);
        };
        Controller.checkPermissions = function() {};
        Controller.prototype.getDefaultTimeout = function() {
            return Connect2_LegacySharedController.default.defaultTimeout;
        };
        return Controller;
    })(OS.Controller.BaseViewController);
    return new OS.Controller.ControllerFactory(Controller, Connect2_LegacySharedLanguageResources);
});
define("Connect2_LegacyShared.Share_UI.ScreenBlock_ShareObject.mvc$controller.HandleShareProfileList.DeferHandleShareJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        return new Promise(function($resolve, $reject) {
            $actions.DeferredHandleShareProfileList($parameters.TargetProfileId);
            $resolve();
        });
    };
});

define("Connect2_LegacyShared.Share_UI.ScreenBlock_ShareObject.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "NOSnmybyMEqjQsiO8KxL9w": {
            getter: function(varBag, idService) {
                return varBag.vars.value.targetProfileIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "KzimlWht70q3fP3A_Qydpw": {
            getter: function(varBag, idService) {
                return varBag.shareObjectVar.value;
            }
        },
        "ObFDhDKvLkWmdUb4M_W0iA": {
            getter: function(varBag, idService) {
                return varBag.appManager_GetCachedUserInfoVar.value;
            }
        },
        "2fzhP2V3QUKA8gsundcCAA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.shareTargetProfileInLocal;
            }
        },
        "bcg2gn8Pu0yLTvDPe4l8eg": {
            getter: function(varBag, idService) {
                return varBag.deferHandleShareJSResult.value;
            }
        },
        "qixwHBq8l0GDjbQhgjG8GQ": {
            getter: function(varBag, idService) {
                return varBag.get_UI_CommunityBusinessShareCardVar.value;
            }
        },
        "VJzt7txDDUW_+wDGTDRZ_w": {
            getter: function(varBag, idService) {
                return varBag.getHouseholdDetailsVar.value;
            }
        },
        "ALmDNqofK0irQBkAYjitRw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.householdNameVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "7FU9+LzjFEq1qF_zpbIcJA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.householdDescriptionVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "DWYx0ygX1EWD0hFaHU0_ZA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.householdTagVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "A1WSInMukkO2DJSK7ANsGg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.bucketVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "e3pc_AlUmUCS97dGvPia0Q": {
            getter: function(varBag, idService) {
                return varBag.model.variables.pathVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "zEX_ykbyMEa8vplhqUkeGA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.typeVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "zHqwIP_cq02W8jIp4eNstA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.signedURLVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "JXRQPdeyTEOZfvFz8Jd7ig": {
            getter: function(varBag, idService) {
                return varBag.model.variables.communityBusinessVar;
            }
        },
        "n95TQ91n_k6B8yipwPjhZg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isLoadingVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "8hdVYe+u40e7SZ0b0vAVJg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.shareObjectTypeIdIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "gvg4WUHnb0+X69pF+DTq_g": {
            getter: function(varBag, idService) {
                return varBag.model.variables.objectIdIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "uuLwvGIBm0uLMRbEZrPYkg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_CustomTitleIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "rI6N8kEY6kO37ritesl4qA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.user_AgeVisibilityIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "UeN236X7G0WxN1JtyALfjQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.getShareObjectTypeByIdAggr;
            }
        },
        "v6FXIMn_kkSYghZXNOZy1Q": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Menu"));
                })(varBag.model, idService);
            }
        },
        "ABerFV+J0kKMeggZYpeP3Q": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HeaderLeft"));
                })(varBag.model, idService);
            }
        },
        "L3veX18suEK+aw132vNjJQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Title"));
                })(varBag.model, idService);
            }
        },
        "eZ+zoDKBiUymgxlf0pJMww": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HeaderRight"));
                })(varBag.model, idService);
            }
        },
        "INqb7eDUsUSb02BLRRUEzQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HeaderContent"));
                })(varBag.model, idService);
            }
        },
        "zPqQgSmt+U+oWuV6E9bFaQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "RCJvSDq1o0+seNvPnR0TuA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("IsHousehold"));
                })(varBag.model, idService);
            }
        },
        "1RimQf4raUmL9nbQNI7bNA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Household_List_Item"));
                })(varBag.model, idService);
            }
        },
        "nlhXUOnQRk6dx+qHUUUKeA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("ImagePlaceholder"));
                })(varBag.model, idService);
            }
        },
        "czbOWGJFoEaPeob3GhnyIg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Title_Placeholder"));
                })(varBag.model, idService);
            }
        },
        "kDv8O+EEeUKxEfdQOm+zEA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Household_Title"));
                })(varBag.model, idService);
            }
        },
        "tmfqZEKgRkGc5kt8_97xJw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Description_Placeholder"));
                })(varBag.model, idService);
            }
        },
        "xv2wXTmKKEi7LrNUT3U1Pg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Household_Description"));
                })(varBag.model, idService);
            }
        },
        "fH1cyM0oAUayPt9ABXUfGw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Tag_Placeholder"));
                })(varBag.model, idService);
            }
        },
        "3z6uCF2NqEKj4K2ipbFWmg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Household_Tag"));
                })(varBag.model, idService);
            }
        },
        "1eylv9uwqU6gumTsMoB_Pw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Result_Item_Placeholder"));
                })(varBag.model, idService);
            }
        },
        "laMmS82Usk2syXoqLaTzGA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("BookmarkNote"));
                })(varBag.model, idService);
            }
        },
        "d5xRBj2MekSLb98Na1hCZg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("IsCommunityBusiness"));
                })(varBag.model, idService);
            }
        },
        "QCkL1EfJCUaOTugGHggjjQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("CommunityBusiness_List_Item"));
                })(varBag.model, idService);
            }
        },
        "G095FRZO2EOKynWmTs6GgQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("ImagePlaceholder"));
                })(varBag.model, idService);
            }
        },
        "7sn0iEnSJEiq87_9tCGHPQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Title_Placeholder"));
                })(varBag.model, idService);
            }
        },
        "z0toB5iB3EWHUtKJeTv6_g": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("CommunityBusiness_Title"));
                })(varBag.model, idService);
            }
        },
        "gPY+TfWbVkeYFJzX5JOcVg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Description_Placeholder"));
                })(varBag.model, idService);
            }
        },
        "3QWf4TtZHkqffkbMAq2kDg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Tag_Placeholder"));
                })(varBag.model, idService);
            }
        },
        "qlwtq58UV0S9iSzVPHco6w": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("CommunityBusiness_Tag"));
                })(varBag.model, idService);
            }
        },
        "mTRN8q_56EmDCkWlol7hWg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Result_Item_Placeholder"));
                })(varBag.model, idService);
            }
        },
        "HtZQWrKd5kywPnLsa23Djg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("BookmarkNote"));
                })(varBag.model, idService);
            }
        },
        "hp0DOk7tyEGDzRjTDsUiUw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("IsFeedItem"));
                })(varBag.model, idService);
            }
        },
        "Z3+RpF4R9EawwmHI0BA8sA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Feed_List_Item"));
                })(varBag.model, idService);
            }
        },
        "8cBe9oodWEmZxgSNpbKmdQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("ImagePlaceholder"));
                })(varBag.model, idService);
            }
        },
        "Z9V6Jko+1UesYYIviUzwQw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Title_Placeholder"));
                })(varBag.model, idService);
            }
        },
        "hjukG9kxKEySQIyWdyTgzA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Feed_Title"));
                })(varBag.model, idService);
            }
        },
        "JR_bRWVsZ0WZZuIDGH5Alw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Description_Placeholder"));
                })(varBag.model, idService);
            }
        },
        "9i9rnSUWFUuvRtwu3QetHg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Tag_Placeholder"));
                })(varBag.model, idService);
            }
        },
        "hj90LJHv8kuqSIdqCIvLLg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Result_Item_Placeholder"));
                })(varBag.model, idService);
            }
        },
        "Ix+5J4zA00Cn_l0dpk9KFg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("BookmarkNote"));
                })(varBag.model, idService);
            }
        },
        "lEfmrcebR0ay7O+XK+7nQQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("BottomBar"));
                })(varBag.model, idService);
            }
        },
        "SpqBam0DIUqlWrOWhYET9A": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("BottomBar"));
                })(varBag.model, idService);
            }
        },
        "XtWtthpS9U+R1x+7TjnXmQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("CommonUI_Elements"));
                })(varBag.model, idService);
            }
        },
        "Qo8pfYHKWkCMqrv0MYjt+w": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("CommonUI_Elements"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});