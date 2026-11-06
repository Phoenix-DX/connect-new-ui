define("Connect2_LegacyShared.Share_UI.ProfileList.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "UBT_AppManager.model", "UBT_AppManager.controller", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.model$ShareProfileList", "UBT_AppManager.model$AppManager_CachedUserInfoRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$UBT_AppManager", "UBT_AppManager.controller$AppManager_GetCachedUserInfo", "Connect2_LegacyShared.model$ShareProfileRec", "APIDomain_Directory_IS.model$SenderRec", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS", "Connect2_LegacyShared.model$SenderList", "APIDomain_Directory_IS.model$CDN4Rec", "APIDomain_Directory_IS.model$SearchResultRec"], function(OutSystems, Connect2_LegacySharedModel, UBT_AppManagerModel, UBT_AppManagerController, APIDomain_Directory_ISModel) {
    var OS = OutSystems.Internal;

    var GetAvailableUsersDataActRec = (function(_super) {
        __extends(GetAvailableUsersDataActRec, _super);

        function GetAvailableUsersDataActRec(defaults) {
            _super.apply(this, arguments);
        }
        GetAvailableUsersDataActRec.attributesToDeclare = function() {
            return [
                this.attr("Response", "responseOut", "Response", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.SearchResultRec());
                }, true, APIDomain_Directory_ISModel.SearchResultRec),
                this.attr("Label", "labelOut", "Label", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, true)
            ].concat(_super.attributesToDeclare.call(this));
        };
        GetAvailableUsersDataActRec.init();
        return GetAvailableUsersDataActRec;
    })(OS.Model.DataSourceRecord);

    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("ShareProfiles", "shareProfilesVar", "ShareProfiles", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.ShareProfileList());
                }, false, Connect2_LegacySharedModel.ShareProfileList),
                this.attr("SearchFilter", "searchFilterVar", "SearchFilter", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("SharedProfileIds", "sharedProfileIdsVar", "SharedProfileIds", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                    return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
                }, false, OS.DataTypes.TextList),
                this.attr("MaxRecords", "maxRecordsVar", "MaxRecords", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return 50;
                }, false),
                this.attr("HasSearched", "hasSearchedVar", "HasSearched", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("NoResultsFoundMessage", "noResultsFoundMessageVar", "NoResultsFoundMessage", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("ShareObjectId", "shareObjectIdIn", "ShareObjectId", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_shareObjectIdInDataFetchStatus", "_shareObjectIdInDataFetchStatus", "_shareObjectIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("ShareObjectTypeId", "shareObjectTypeIdIn", "ShareObjectTypeId", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_shareObjectTypeIdInDataFetchStatus", "_shareObjectTypeIdInDataFetchStatus", "_shareObjectTypeIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("GetAvailableUsers", "getAvailableUsersDataAct", "getAvailableUsersDataAct", true, true, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new GetAvailableUsersDataActRec());
                }, true, GetAvailableUsersDataActRec)
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
                Input_SearchFilter: OS.Model.ValidationWidgetRecord
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
            if ("ShareObjectId" in inputs) {
                this.variables.shareObjectIdIn = inputs.ShareObjectId;
                if ("_shareObjectIdInDataFetchStatus" in inputs) {
                    this.variables._shareObjectIdInDataFetchStatus = inputs._shareObjectIdInDataFetchStatus;
                }

            }

            if ("ShareObjectTypeId" in inputs) {
                this.variables.shareObjectTypeIdIn = inputs.ShareObjectTypeId;
                if ("_shareObjectTypeIdInDataFetchStatus" in inputs) {
                    this.variables._shareObjectTypeIdInDataFetchStatus = inputs._shareObjectTypeIdInDataFetchStatus;
                }

            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "Share_UI.ProfileList");
});
define("Connect2_LegacyShared.Share_UI.ProfileList.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "UBT_AppManager.model", "UBT_AppManager.controller", "APIDomain_Directory_IS.model", "react", "OutSystems/ReactView/Main", "Connect2_LegacyShared.Share_UI.ProfileList.mvc$model", "Connect2_LegacyShared.Share_UI.ProfileList.mvc$controller", "Connect2_LegacyShared.clientVariables", "OutSystems/ReactWidgets/Main", "OutSystemsUI_2_23.Interaction.InputWithIcon.mvc$view", "Connect2_LegacyShared.Utility.Result_Item_Image.mvc$view", "Connect2_LegacyShared.Directory.HighlightSearch.mvc$view", "Connect2_LegacyShared.Share_UI.ListBlankSlate.mvc$view", "Connect2_LegacyShared.Utility.FreeSubscriptionActionDialog.mvc$view", "Connect2_LegacyShared.model$ShareProfileList", "UBT_AppManager.model$AppManager_CachedUserInfoRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$UBT_AppManager", "UBT_AppManager.controller$AppManager_GetCachedUserInfo", "Connect2_LegacyShared.model$ShareProfileRec", "APIDomain_Directory_IS.model$SenderRec", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS", "Connect2_LegacyShared.model$SenderList", "APIDomain_Directory_IS.model$CDN4Rec", "APIDomain_Directory_IS.model$SearchResultRec"], function(OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, UBT_AppManagerModel, UBT_AppManagerController, APIDomain_Directory_ISModel, React, OSView, Connect2_LegacyShared_Share_UI_ProfileList_mvc_model, Connect2_LegacyShared_Share_UI_ProfileList_mvc_controller, Connect2_LegacySharedClientVariables, OSWidgets, OutSystemsUI_2_23_Interaction_InputWithIcon_mvc_view, Connect2_LegacyShared_Utility_Result_Item_Image_mvc_view, Connect2_LegacyShared_Directory_HighlightSearch_mvc_view, Connect2_LegacyShared_Share_UI_ListBlankSlate_mvc_view, Connect2_LegacyShared_Utility_FreeSubscriptionActionDialog_mvc_view) {
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
        View.displayName = "Share_UI.ProfileList";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [OutSystemsUI_2_23_Interaction_InputWithIcon_mvc_view, Connect2_LegacyShared_Utility_Result_Item_Image_mvc_view, Connect2_LegacyShared_Directory_HighlightSearch_mvc_view, Connect2_LegacyShared_Share_UI_ListBlankSlate_mvc_view, Connect2_LegacyShared_Utility_FreeSubscriptionActionDialog_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return Connect2_LegacyShared_Share_UI_ProfileList_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return Connect2_LegacyShared_Share_UI_ProfileList_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "share-with-input",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "0"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OutSystemsUI_2_23_Interaction_InputWithIcon_mvc_view, {
                inputs: {
                    ExtendedClass: "border-radius-soft border-neutral-4"
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
                    alias: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                placeholders: {
                    icon: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Icon, {
                            icon: "search",
                            iconSize: /*FontSize*/ 0,
                            style: "icon",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })];
                    }),
                    input: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "form-control ",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "3"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Input, {
                            _validationProps: {
                                validationService: validationService
                            },
                            enabled: true,
                            extendedEvents: {
                                onKeyUp: function() {
                                    var eventHandlerContext = callContext.clone();
                                    return OS.Flow.tryFinally(function() {
                                        var varBag = {};
                                        controller.pushDebuggerContext(eventHandlerContext);

                                        OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Share_UI/ProfileList/Input_SearchFilter onkeyup");
                                        controller.input_SearchFilterOnKeyup$Action(controller.callContext(eventHandlerContext));
                                    }, function() {
                                        controller.popDebuggerContext(eventHandlerContext);
                                    });

                                    ;
                                }
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            inputType: /*Search*/ 8,
                            mandatory: false,
                            maxLength: 50,
                            onChange: function() {
                                return Promise.resolve().then(function() {
                                    var eventHandlerContext = callContext.clone();
                                    return OS.Flow.tryFinally(function() {
                                        var varBag = {};
                                        controller.pushDebuggerContext(eventHandlerContext);

                                        OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Share_UI/ProfileList/Input_SearchFilter OnChange");
                                        return controller.input_SearchFilterOnChange$Action(controller.callContext(eventHandlerContext));
                                    }, function() {
                                        controller.popDebuggerContext(eventHandlerContext);
                                    });
                                });;
                            },
                            prompt: "Share with...",
                            style: "form-control",
                            variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.searchFilterVar, function(value) {
                                model.variables.searchFilterVar = value;
                            }),
                            _idProps: {
                                service: idService,
                                name: "Input_SearchFilter"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }))];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.searchFilterVar)]
            }), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: true,
                style: "margin-top-base text-bold",
                visible: ((model.variables.getAvailableUsersDataAct.labelOut) !== ("")),
                _idProps: {
                    service: idService,
                    uuid: "5"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getAvailableUsersDataAct.dataFetchStatusAttr)
            }, React.createElement(OSWidgets.Expression, {
                value: model.variables.getAvailableUsersDataAct.labelOut,
                _idProps: {
                    service: idService,
                    uuid: "6"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getAvailableUsersDataAct.dataFetchStatusAttr)
            })), $if(model.variables.getAvailableUsersDataAct.isDataFetchedAttr, false, this, function() {
                return [$if(!(model.variables.getAvailableUsersDataAct.responseOut.itemsAttr.isEmpty), false, this, function() {
                    return [React.createElement(OSWidgets.List, {
                        animateItems: false,
                        gridProperties: {
                            classes: "OSFillParent"
                        },
                        mode: /*Default*/ 0,
                        source: model.variables.shareProfilesVar,
                        style: "list list-group margin-top-base",
                        tag: "div",
                        _idProps: {
                            service: idService,
                            uuid: "7"
                        },
                        _widgetRecordProvider: widgetsRecordProvider,
                        placeholders: {
                            content: new IteratorPlaceholderContent(function(idService, callContext) {
                                return [React.createElement(OSWidgets.Container, {
                                    align: /*Default*/ 0,
                                    animate: false,
                                    style: "border-radius-soft border-neutral-4 margin-bottom-s",
                                    visible: true,
                                    _idProps: {
                                        service: idService,
                                        uuid: "8"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider,
                                    _dependencies: [asPrimitiveValue(model.variables.searchFilterVar), asPrimitiveValue(model.variables.shareProfilesVar.getCurrent(callContext.iterationContext).isSharedAttr), asPrimitiveValue(model.variables.shareProfilesVar.getCurrent(callContext.iterationContext).descriptionAttr), asPrimitiveValue(model.variables.shareProfilesVar.getCurrent(callContext.iterationContext).nameAttr), asPrimitiveValue(model.variables.shareProfilesVar.getCurrent(callContext.iterationContext).cDNAttr.bucketAttr), asPrimitiveValue(model.variables.shareProfilesVar.getCurrent(callContext.iterationContext).cDNAttr.signedPathAttr), asPrimitiveValue(model.variables.shareProfilesVar.getCurrent(callContext.iterationContext).cDNAttr.pathAttr), asPrimitiveValue(model.variables.shareProfilesVar.getCurrent(callContext.iterationContext).cDNAttr.typeAttr)]
                                }, React.createElement(Connect2_LegacyShared_Utility_Result_Item_Image_mvc_view, {
                                    inputs: {
                                        In_Type: model.variables.shareProfilesVar.getCurrent(callContext.iterationContext).cDNAttr.typeAttr,
                                        In_Path: model.variables.shareProfilesVar.getCurrent(callContext.iterationContext).cDNAttr.pathAttr,
                                        In_ResultType: Connect2_LegacySharedModel.staticEntities.resultListType.household,
                                        In_SignedURL: model.variables.shareProfilesVar.getCurrent(callContext.iterationContext).cDNAttr.signedPathAttr,
                                        In_HasAction: true,
                                        In_HasBorder: false,
                                        In_Bucket: model.variables.shareProfilesVar.getCurrent(callContext.iterationContext).cDNAttr.bucketAttr,
                                        In_ShowDescription: false,
                                        In_IsRoundImage: true,
                                        In_ShowTag: true
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
                                        alias: "2"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider,
                                    placeholders: {
                                        imagePlaceholder: PlaceholderContent.Empty,
                                        title_Placeholder: new PlaceholderContent(function() {
                                            return [React.createElement(OSWidgets.Container, {
                                                align: /*Default*/ 0,
                                                animate: false,
                                                style: "font-size-0-9em bold",
                                                visible: true,
                                                _idProps: {
                                                    service: idService,
                                                    uuid: "10"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider
                                            }, React.createElement(Connect2_LegacyShared_Directory_HighlightSearch_mvc_view, {
                                                inputs: {
                                                    Text: model.variables.shareProfilesVar.getCurrent(callContext.iterationContext).nameAttr,
                                                    SearchTerms: model.variables.searchFilterVar,
                                                    StopWords: ""
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
                                                    uuid: "11",
                                                    alias: "3"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider,
                                                _dependencies: []
                                            }))];
                                        }),
                                        description_Placeholder: PlaceholderContent.Empty,
                                        tag_Placeholder: new PlaceholderContent(function() {
                                            return [React.createElement(OSWidgets.Expression, {
                                                extendedProperties: {
                                                    style: "color: #000; font-size: 0.8em;"
                                                },
                                                style: "font-size-0-75em text-align-left padding-x-xs padding-y-xs border-radius-soft background-neutral-2 text-neutral-6",
                                                value: model.variables.shareProfilesVar.getCurrent(callContext.iterationContext).descriptionAttr,
                                                _idProps: {
                                                    service: idService,
                                                    name: "Household_Tag"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider
                                            })];
                                        }),
                                        result_Item_Placeholder: new PlaceholderContent(function() {
                                            return [$if(model.variables.shareProfilesVar.getCurrent(callContext.iterationContext).isSharedAttr, false, this, function() {
                                                return [React.createElement(OSWidgets.Icon, {
                                                    extendedProperties: {
                                                        style: "color: #009706;"
                                                    },
                                                    icon: "check-circle",
                                                    iconSize: /*Twotimes*/ 1,
                                                    style: "icon",
                                                    visible: true,
                                                    _idProps: {
                                                        service: idService,
                                                        uuid: "13"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider
                                                })];
                                            }, function() {
                                                return [React.createElement(OSWidgets.Icon, {
                                                    extendedEvents: {
                                                        onClick: function() {
                                                            return Promise.resolve().then(function() {
                                                                var eventHandlerContext = callContext.clone();
                                                                return OS.Flow.tryFinally(function() {
                                                                    var varBag = {};
                                                                    controller.pushDebuggerContext(eventHandlerContext);

                                                                    OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Share_UI/ProfileList/Icon onclick");
                                                                    return controller.onClick$Action(controller.callContext(eventHandlerContext));
                                                                }, function() {
                                                                    controller.popDebuggerContext(eventHandlerContext);
                                                                });
                                                            });;
                                                        }
                                                    },
                                                    extendedProperties: {
                                                        style: "color: #0064C0;"
                                                    },
                                                    icon: "share-square-o",
                                                    iconSize: /*Twotimes*/ 1,
                                                    style: "icon",
                                                    visible: true,
                                                    _idProps: {
                                                        service: idService,
                                                        uuid: "14"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider
                                                })];
                                            })];
                                        }),
                                        bookmarkNote: PlaceholderContent.Empty
                                    },
                                    _dependencies: [asPrimitiveValue(model.variables.searchFilterVar), asPrimitiveValue(model.variables.shareProfilesVar.getCurrent(callContext.iterationContext).isSharedAttr), asPrimitiveValue(model.variables.shareProfilesVar.getCurrent(callContext.iterationContext).descriptionAttr), asPrimitiveValue(model.variables.shareProfilesVar.getCurrent(callContext.iterationContext).nameAttr)]
                                }))];
                            }, callContext, idService, "1")
                        },
                        _dependencies: [asPrimitiveValue(model.variables.searchFilterVar)]
                    })];
                }, function() {
                    return [React.createElement(Connect2_LegacyShared_Share_UI_ListBlankSlate_mvc_view, {
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
                            uuid: "15",
                            alias: "4"
                        },
                        _widgetRecordProvider: widgetsRecordProvider,
                        placeholders: {
                            icon: new PlaceholderContent(function() {
                                return [React.createElement(OSWidgets.Icon, {
                                    icon: "search",
                                    iconSize: /*Twotimes*/ 1,
                                    style: "icon  font-size-6em",
                                    visible: true,
                                    _idProps: {
                                        service: idService,
                                        uuid: "16"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                })];
                            }),
                            message: new PlaceholderContent(function() {
                                return [React.createElement(OSWidgets.Expression, {
                                    value: model.variables.noResultsFoundMessageVar,
                                    _idProps: {
                                        service: idService,
                                        uuid: "17"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                })];
                            })
                        },
                        _dependencies: [asPrimitiveValue(model.variables.noResultsFoundMessageVar)]
                    })];
                })];
            }, function() {
                return [$if(model.variables.getAvailableUsersDataAct.hasFetchErrorAttr, false, this, function() {
                    return [React.createElement(Connect2_LegacyShared_Share_UI_ListBlankSlate_mvc_view, {
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
                            uuid: "18",
                            alias: "5"
                        },
                        _widgetRecordProvider: widgetsRecordProvider,
                        placeholders: {
                            icon: new PlaceholderContent(function() {
                                return [React.createElement(OSWidgets.Icon, {
                                    icon: "exclamation-triangle",
                                    iconSize: /*Twotimes*/ 1,
                                    style: "icon  font-size-6em",
                                    visible: true,
                                    _idProps: {
                                        service: idService,
                                        uuid: "19"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                })];
                            }),
                            message: new PlaceholderContent(function() {
                                return [React.createElement(OSWidgets.Expression, {
                                    value: "Error Searching ",
                                    _idProps: {
                                        service: idService,
                                        uuid: "20"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                })];
                            })
                        },
                        _dependencies: []
                    })];
                }, function() {
                    return [React.createElement(Connect2_LegacyShared_Share_UI_ListBlankSlate_mvc_view, {
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
                            uuid: "21",
                            alias: "6"
                        },
                        _widgetRecordProvider: widgetsRecordProvider,
                        placeholders: {
                            icon: new PlaceholderContent(function() {
                                return [React.createElement(OSWidgets.Icon, {
                                    icon: "spinner",
                                    iconSize: /*Twotimes*/ 1,
                                    style: "icon  font-size-6em fa-spin",
                                    visible: true,
                                    _idProps: {
                                        service: idService,
                                        uuid: "22"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                })];
                            }),
                            message: new PlaceholderContent(function() {
                                return [React.createElement(OSWidgets.Expression, {
                                    value: "Searching",
                                    _idProps: {
                                        service: idService,
                                        uuid: "23"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                })];
                            })
                        },
                        _dependencies: []
                    })];
                })];
            }), React.createElement(Connect2_LegacyShared_Utility_FreeSubscriptionActionDialog_mvc_view, {
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
                    name: "FreeSubscriptionAlert",
                    alias: "7"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                _dependencies: []
            })));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);

    return View;
});
define("Connect2_LegacyShared.Share_UI.ProfileList.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "UBT_AppManager.model", "UBT_AppManager.controller", "APIDomain_Directory_IS.model", "Connect2_LegacyShared.languageResources", "Connect2_LegacyShared.clientVariables", "Connect2_LegacyShared.Share_UI.ProfileList.mvc$debugger", "Connect2_LegacyShared.Share_UI.ProfileList.mvc$controller.OnClick.DeferHandleShareJS", "Connect2_LegacyShared.Share_UI.ProfileList.mvc$controller.Input_SearchFilterOnKeyup.JavaScript1JS", "Connect2_LegacyShared.model$ShareProfileList", "UBT_AppManager.model$AppManager_CachedUserInfoRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$UBT_AppManager", "UBT_AppManager.controller$AppManager_GetCachedUserInfo", "Connect2_LegacyShared.model$ShareProfileRec", "APIDomain_Directory_IS.model$SenderRec", "Connect2_LegacyShared.referencesHealth$APIDomain_Directory_IS", "Connect2_LegacyShared.model$SenderList", "APIDomain_Directory_IS.model$CDN4Rec", "APIDomain_Directory_IS.model$SearchResultRec"], function(OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, UBT_AppManagerModel, UBT_AppManagerController, APIDomain_Directory_ISModel, Connect2_LegacySharedLanguageResources, Connect2_LegacySharedClientVariables, Connect2_LegacyShared_Share_UI_ProfileList_mvc_Debugger, Connect2_LegacyShared_Share_UI_ProfileList_mvc_controller_OnClick_DeferHandleShareJS, Connect2_LegacyShared_Share_UI_ProfileList_mvc_controller_Input_SearchFilterOnKeyup_JavaScript1JS) {
    var OS = OutSystems.Internal;
    var Controller = (function(_super) {
        __extends(Controller, _super);

        function Controller() {
            _super.apply(this, arguments);
            var controller = this.controller;
            this.clientActionProxies = {
                deferredHandleShareObjectList$Action: function(targetProfileIdIn) {
                    targetProfileIdIn = (targetProfileIdIn === undefined) ? "" : targetProfileIdIn;
                    return controller.executeActionInsideJSNode(controller._deferredHandleShareObjectList$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(targetProfileIdIn, OS.DataTypes.DataTypes.Text)), controller.callContext(), function(actionResults) {
                        return {};
                    }, function() {
                        return;
                    }, "DeferredHandleShareObjectList");
                },
                searchProfile$Action: function() {
                    return controller.executeActionInsideJSNode(controller._searchProfile$Action.bind(controller), controller.callContext(), function(actionResults) {
                        return {};
                    }, function() {
                        return;
                    }, "SearchProfile");
                }
            };
            this.dataFetchDependenciesOriginal = {
                getAvailableUsers$DataActRefresh: 0
            };
            this.dataFetchDependentsGraph = {
                getAvailableUsers$DataActRefresh: []
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
            return controller.callServerAction("ShareObject", "screenservices/Connect2_LegacyShared/Share_UI/ProfileList/ActionShareObject", "IUeaBfLHtjtW5etokxPmRA", inputs, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function(json, headers) {
                OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
            }, false).then(function(outputs) {
                var executeServerActionResult = new(controller.constructor.getVariableGroupType("Connect2_LegacyShared.Share_UI.ProfileList$rssespaceconnect2_sharing_cs_ActionShareObject"))();
                executeServerActionResult.isSuccessOut = OS.DataConversion.ServerDataConverter.from(outputs.IsSuccess, OS.DataTypes.DataTypes.Boolean);
                executeServerActionResult.messageOut = OS.DataConversion.ServerDataConverter.from(outputs.Message, OS.DataTypes.DataTypes.Text);
                executeServerActionResult.isAllowedOut = OS.DataConversion.ServerDataConverter.from(outputs.IsAllowed, OS.DataTypes.DataTypes.Boolean);
                executeServerActionResult.shareIdOut = OS.DataConversion.ServerDataConverter.from(outputs.ShareId, OS.DataTypes.DataTypes.LongInteger);
                return executeServerActionResult;
            });
        };
        Controller.registerVariableGroupType("Connect2_LegacyShared.Share_UI.ProfileList$rssespaceconnect2_sharing_cs_ActionShareObject", [{
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

        // Aggregates and Data Actions
        Controller.prototype.getAvailableUsers$DataActRefresh = function(callContext) {
            var model = this.model;
            var controller = this.controller;
            var callContext = controller.callContext(callContext);
            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:urjm3+8VPEeq8Orh0bhHbQ:/NRWebFlows.lZepHxCQC0OwqtkQndml+Q/NodesShownInESpaceTree.NnUJ6WKyqU+fZppP1eddgw/DataActions.urjm3+8VPEeq8Orh0bhHbQ:bghxSG0vK59usOS52J6rsw", "Connect2_LegacyShared", "GetAvailableUsers", "NRFlows.DataScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.setThreadStartName(callContext.id, "Share_UI/ProfileList/GetAvailableUsers");
                return controller.callDataAction("DataActionGetAvailableUsers", "screenservices/Connect2_LegacyShared/Share_UI/ProfileList/DataActionGetAvailableUsers", "sahCpXxjWOJdk+jREEdIDA", function(b) {
                    model.variables.getAvailableUsersDataAct.dataFetchStatusAttr = b;
                }, function(json) {
                    model.variables.getAvailableUsersDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getAvailableUsersDataAct.constructor));
                }, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function(json, headers) {
                    OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
                }, callContext, undefined, false).then(function() {
                    OutSystemsDebugger.setThreadStartName(callContext.id, "Share_UI/ProfileList/GetAvailableUsers On After Fetch");
                    controller._getAvailableUsersOnAfterFetch$Action(controller.callContext(callContext));

                });

            }, function() {
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:urjm3+8VPEeq8Orh0bhHbQ", callContext.id);
                controller.popDebuggerContext(callContext);

            });
        };

        Controller.prototype.dataFetchActionNames = ["getAvailableUsers$DataActRefresh"];
        // Client Actions
        Controller.prototype._deferredHandleShareObjectList$Action = function(targetProfileIdIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("DeferredHandleShareObjectList");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_LegacyShared.Share_UI.ProfileList.DeferredHandleShareObjectList$vars"))());
            vars.value.targetProfileIdInLocal = targetProfileIdIn;
            var shareObjectVar = new OS.DataTypes.VariableHolder();
            var listFilterVar = new OS.DataTypes.VariableHolder();
            var listIndexOfVar = new OS.DataTypes.VariableHolder();
            var getUserInfoVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.vars = vars;
            varBag.shareObjectVar = shareObjectVar;
            varBag.listFilterVar = listFilterVar;
            varBag.listIndexOfVar = listIndexOfVar;
            varBag.getUserInfoVar = getUserInfoVar;
            OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:xlWIDkz4U0+NFvHGOhB10w:/NRWebFlows.lZepHxCQC0OwqtkQndml+Q/NodesShownInESpaceTree.NnUJ6WKyqU+fZppP1eddgw/ClientActions.xlWIDkz4U0+NFvHGOhB10w:w76YCxdR09os_u+d86_hDA", "Connect2_LegacyShared", "DeferredHandleShareObjectList", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:r0MDeK+Ob0KLTJ9Z5B4S7g", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:i1HwwEcmyEK2rohEVfrsOw", callContext.id);
                // Execute Action: GetUserInfo
                getUserInfoVar.value = UBT_AppManagerController.default.appManager_GetCachedUserInfo$Action(callContext);

                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:tNQX_4ETSkO891+WAf5nzw", callContext.id);
                // Execute Action: ShareObject
                model.flush();
                return controller.shareObject$ServerAction(model.variables.shareObjectTypeIdIn, model.variables.shareObjectIdIn, ((getUserInfoVar.value.userInformationOut.firstNameAttr + " ") + getUserInfoVar.value.userInformationOut.lastNameAttr), vars.value.targetProfileIdInLocal, "", OS.DataTypes.DateTime.defaultValue, callContext).then(function(value) {
                    shareObjectVar.value = value;
                }).then(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:nvatmBzuLkqS+_lptA6Dgw", callContext.id) && shareObjectVar.value.isAllowedOut)) {
                        if ((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:h1sxXygS1Empar7SsRFKvA", callContext.id) && shareObjectVar.value.isSuccessOut)) {
                            OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:_vBbcHWZIkC4iye5bwP2bg", callContext.id);
                            // Execute Action: ListIndexOf
                            listIndexOfVar.value = OS.SystemActions.listIndexOf(model.variables.shareProfilesVar, function(p) {
                                return (p.profileIdAttr === vars.value.targetProfileIdInLocal);
                            }, callContext);

                            OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:YYXQPtXXI0SdLZT+VP3K3g", callContext.id);
                            // ShareProfiles[ListIndexOf.Position].IsShared = True
                            model.variables.shareProfilesVar.getItem(listIndexOfVar.value.positionOut).isSharedAttr = true;
                            OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:jPZxRJgfSE+3UDkRSMM8RQ", callContext.id);
                            return OS.Flow.returnAsync();

                        } else {
                            OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:7RFmyDFG6k+S2yDeNXb3JA", callContext.id);
                            OS.FeedbackMessageService.showFeedbackMessage(shareObjectVar.value.messageOut, /*Error*/ 3);
                        }

                    } else {
                        OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:Y3G0ssV3Q0SoRd15POqreQ", callContext.id);
                    }

                    OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:CKXdOoOBOE6GLu_VzHsuPA", callContext.id);
                    // Execute Action: ListFilter
                    listFilterVar.value = OS.SystemActions.listFilter(model.variables.sharedProfileIdsVar, function(p) {
                        return ((p) !== (vars.value.targetProfileIdInLocal));
                    }, callContext);

                    OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:Pv8SxyKa5UeAP23VZ+IxvQ", callContext.id);
                    // SharedProfileIds = ListFilter.FilteredList
                    model.variables.sharedProfileIdsVar = listFilterVar.value.filteredListOut;
                    // Foreach ShareProfiles
                    callContext.iterationContext.registerIterationStart(model.variables.shareProfilesVar);
                    try {
                        var shareProfilesIterator = callContext.iterationContext.getIterator(model.variables.shareProfilesVar);
                        var shareProfilesIndex = 0;
                        while ((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:LSqvIJEWw0uZ3rHutafpVg", callContext.id) && (shareProfilesIndex < model.variables.shareProfilesVar.length))) {
                            shareProfilesIterator.currentRowNumber = shareProfilesIndex;
                            if ((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:VUQKIay1GUaPocO49yVcPg", callContext.id) && (model.variables.shareProfilesVar.getItem(shareProfilesIndex.valueOf()).profileIdAttr === vars.value.targetProfileIdInLocal))) {
                                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:NIM+8IyMgEmlFTv5KktT0Q", callContext.id);
                                // ShareProfiles.Current.IsShared = False
                                model.variables.shareProfilesVar.getItem(shareProfilesIndex.valueOf()).isSharedAttr = false;
                            }

                            shareProfilesIndex++;
                        }

                    } finally {
                        callContext.iterationContext.registerIterationEnd(model.variables.shareProfilesVar);
                    }

                    return OS.Flow.executeSequence(function() {
                        if ((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:WsbwIqQeuUGcJXggPWUMlA", callContext.id) && shareObjectVar.value.isAllowedOut)) {
                            OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:3DZn5ySYXkSKtARBXy+cvQ", callContext.id);
                        } else {
                            OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:rDGojU772USHgMWtzbJ+Bw", callContext.id);
                            // Trigger Event: SubscriptionDenied
                            return controller.subscriptionDenied$Action(callContext).then(function() {
                                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:x3LvJeORdkyB2iG4OQyRuQ", callContext.id);
                            });
                        }

                    });
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:xlWIDkz4U0+NFvHGOhB10w", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:xlWIDkz4U0+NFvHGOhB10w", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("Connect2_LegacyShared.Share_UI.ProfileList.DeferredHandleShareObjectList$vars", [{
            name: "TargetProfileId",
            attrName: "targetProfileIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.prototype._input_SearchFilterOnChange$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Input_SearchFilterOnChange");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:a96EI5vOtkCDtOrj4U9JoQ:/NRWebFlows.lZepHxCQC0OwqtkQndml+Q/NodesShownInESpaceTree.NnUJ6WKyqU+fZppP1eddgw/ClientActions.a96EI5vOtkCDtOrj4U9JoQ:oYyeE7Ge+ONeSKl36I_62A", "Connect2_LegacyShared", "Input_SearchFilterOnChange", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:scZLwuoFvES9+v_gQ0rdRw", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                return OS.Flow.executeSequence(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:664_BnWzs0+11M8ZMDiYBA", callContext.id) && ((OS.BuiltinFunctions.trim(model.variables.searchFilterVar) === "") && model.variables.hasSearchedVar))) {
                        OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:JWbkbtRuAkuV7XlHLludRg", callContext.id);
                        // Refresh Query: GetAvailableUsers
                        var result = controller.getAvailableUsers$DataActRefresh(callContext);
                        model.flush();
                        return result;
                    }

                }).then(function() {
                    OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:tvZUACTRvE+_Kt0981TWog", callContext.id);
                    // HasSearched = False
                    model.variables.hasSearchedVar = false;
                    OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:fi5bIN5Td0uDJrlB75vGsg", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:a96EI5vOtkCDtOrj4U9JoQ", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:a96EI5vOtkCDtOrj4U9JoQ", callContext.id);
                throw ex;

            });
        };
        Controller.prototype._searchProfile$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("SearchProfile");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:bSvyTnKcrEqViPgEsiXr_A:/NRWebFlows.lZepHxCQC0OwqtkQndml+Q/NodesShownInESpaceTree.NnUJ6WKyqU+fZppP1eddgw/ClientActions.bSvyTnKcrEqViPgEsiXr_A:fv_WJbxCWyBhP6R_PJKe9g", "Connect2_LegacyShared", "SearchProfile", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:lqZ2DvGVdk6AE5tPgusaKg", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:+dfcRyqqWkOGsxpgVj4wfw", callContext.id);
                // Refresh Query: GetAvailableUsers
                var result = controller.getAvailableUsers$DataActRefresh(callContext);
                model.flush();
                return result.then(function() {
                    OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:XpnNkVGYd0qTztY44bdA8g", callContext.id);
                    // HasSearched = True
                    model.variables.hasSearchedVar = true;
                    OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:gHL_xx0GWECK2xzpNbVi9g", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:bSvyTnKcrEqViPgEsiXr_A", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:bSvyTnKcrEqViPgEsiXr_A", callContext.id);
                throw ex;

            });
        };
        Controller.prototype._onClick$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnClick");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:q6csWr__H0eZEgfhgBwdDQ:/NRWebFlows.lZepHxCQC0OwqtkQndml+Q/NodesShownInESpaceTree.NnUJ6WKyqU+fZppP1eddgw/ClientActions.q6csWr__H0eZEgfhgBwdDQ:oBuXdnRF2EshbIKLjoKVpw", "Connect2_LegacyShared", "OnClick", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:rSJ6fr9lFk+YlzRgkMnfPA", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:tOSx3m45WE+GCMBQbZ0Caw", callContext.id);
                return controller.safeExecuteAsyncJSNode(Connect2_LegacyShared_Share_UI_ProfileList_mvc_controller_OnClick_DeferHandleShareJS, "DeferHandleShare", "OnClick", {
                    TargetProfileId: OS.DataConversion.JSNodeParamConverter.to(model.variables.shareProfilesVar.getCurrent(callContext.iterationContext).profileIdAttr, OS.DataTypes.DataTypes.Text)
                }, function($parameters) {}, {
                    DeferredHandleShareObjectList: controller.clientActionProxies.deferredHandleShareObjectList$Action
                }, {}).then(function() {
                    OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:InAsX5_M5UOh6Qeu1gW+YA", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:q6csWr__H0eZEgfhgBwdDQ", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:q6csWr__H0eZEgfhgBwdDQ", callContext.id);
                throw ex;

            });
        };
        Controller.prototype._getAvailableUsersOnAfterFetch$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("GetAvailableUsersOnAfterFetch");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_LegacyShared.Share_UI.ProfileList.GetAvailableUsersOnAfterFetch$vars"))());
            var listAnyVar = new OS.DataTypes.VariableHolder();
            var listFilterSharedProfilesVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.vars = vars;
            varBag.listAnyVar = listAnyVar;
            varBag.listFilterSharedProfilesVar = listFilterSharedProfilesVar;
            try {
                OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:k1H1mjkFaUmvGxkpYw71pw:/NRWebFlows.lZepHxCQC0OwqtkQndml+Q/NodesShownInESpaceTree.NnUJ6WKyqU+fZppP1eddgw/ClientActions.k1H1mjkFaUmvGxkpYw71pw:8Vh9p1fS6nuc4SCBp1jVnw", "Connect2_LegacyShared", "GetAvailableUsersOnAfterFetch", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:Wqsy5lohekGLHm7JFEQQGA", callContext.id);
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:oqjhmSFd+kOvCRvxnk886g", callContext.id);
                // NoResultsFoundMessage = "No results found for '" + SearchFilter + "'"
                model.variables.noResultsFoundMessageVar = (("No results found for \'" + model.variables.searchFilterVar) + "\'");
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:4okqmD_Pp0e9VDYRXU11sQ", callContext.id);
                // Execute Action: ListFilterSharedProfiles
                listFilterSharedProfilesVar.value = OS.SystemActions.listFilter(model.variables.shareProfilesVar, function(p) {
                    return p.isSharedAttr;
                }, callContext);

                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:ZOF2_MJRB0GQQU11f2cr9A", callContext.id);
                // Execute Action: ListAppendAll
                OS.SystemActions.listAppendAll(model.variables.sharedProfileIdsVar, OS.DataConversion.JSConversions.typeConvertRecordList(listFilterSharedProfilesVar.value.filteredListOut, new OS.DataTypes.TextList(), function(source, target) {
                    target = source.profileIdAttr;
                    return target;
                }), callContext);
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:YYOxS7WQ9Eu1tnfKuNyAog", callContext.id);
                // Execute Action: ListClear
                OS.SystemActions.listClear(model.variables.shareProfilesVar, callContext);
                // Foreach GetAvailableUsers.Response.Items
                callContext.iterationContext.registerIterationStart(model.variables.getAvailableUsersDataAct.responseOut.itemsAttr);
                try {
                    var itemsIterator = callContext.iterationContext.getIterator(model.variables.getAvailableUsersDataAct.responseOut.itemsAttr);
                    var itemsIndex = 0;
                    while ((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:H7esZBeHSkqBNURlyl9qMw", callContext.id) && (itemsIndex < model.variables.getAvailableUsersDataAct.responseOut.itemsAttr.length))) {
                        itemsIterator.currentRowNumber = itemsIndex;
                        OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:c6d1Ih1PsUO4d1m4n21Okg", callContext.id);
                        // Execute Action: ListAny
                        listAnyVar.value = OS.SystemActions.listAny(model.variables.sharedProfileIdsVar, function(p) {
                            return (p === model.variables.getAvailableUsersDataAct.responseOut.itemsAttr.getItem(itemsIndex.valueOf()).idAttr);
                        }, callContext);

                        OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:0iLe3fKpUU6ZvYDwIqIQGA", callContext.id);
                        // CurrentShareProfile = GetAvailableUsers.Response.Items.Current
                        vars.value.currentShareProfileVar = OS.DataConversion.JSConversions.typeConvertRecord(model.variables.getAvailableUsersDataAct.responseOut.itemsAttr.getItem(itemsIndex.valueOf()), new Connect2_LegacySharedModel.ShareProfileRec(), function(source, target) {
                            target.profileIdAttr = source.idAttr;
                            target.nameAttr = source.fullNameAttr;
                            target.descriptionAttr = ((source.localityNameAttr + ", ") + source.countryNameAttr);
                            target.cDNAttr = source.photoAttr;
                            target.isSharedAttr = listAnyVar.value.resultOut;
                            return target;
                        });
                        OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:Px2aGkJvFESG_Pd8AJuWqA", callContext.id);
                        // Execute Action: ListAppend
                        OS.SystemActions.listAppend(model.variables.shareProfilesVar, vars.value.currentShareProfileVar, callContext);
                        itemsIndex++;
                    }

                } finally {
                    callContext.iterationContext.registerIterationEnd(model.variables.getAvailableUsersDataAct.responseOut.itemsAttr);
                }

                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:mjqVEWYOFU6nnWKOsE+NBw", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:k1H1mjkFaUmvGxkpYw71pw", callContext.id);
            }

        };
        Controller.registerVariableGroupType("Connect2_LegacyShared.Share_UI.ProfileList.GetAvailableUsersOnAfterFetch$vars", [{
            name: "CurrentShareProfile",
            attrName: "currentShareProfileVar",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Record,
            defaultValue: function() {
                return new Connect2_LegacySharedModel.ShareProfileRec();
            },
            complexType: Connect2_LegacySharedModel.ShareProfileRec
        }]);
        Controller.prototype._input_SearchFilterOnKeyup$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Input_SearchFilterOnKeyup");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:yjum5DgENUmerQsAgnWZ2Q:/NRWebFlows.lZepHxCQC0OwqtkQndml+Q/NodesShownInESpaceTree.NnUJ6WKyqU+fZppP1eddgw/ClientActions.yjum5DgENUmerQsAgnWZ2Q:dg8WSpw2FdOS+rxu8bBEwA", "Connect2_LegacyShared", "Input_SearchFilterOnKeyup", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:L7OdUP7YEEmVNKd2V1NVnQ", callContext.id);
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:fhldc3B0YU+UfvFRgmIYAA", callContext.id);
                controller.safeExecuteJSNode(Connect2_LegacyShared_Share_UI_ProfileList_mvc_controller_Input_SearchFilterOnKeyup_JavaScript1JS, "JavaScript1", "Input_SearchFilterOnKeyup", null, function($parameters) {}, {
                    SearchProfile: controller.clientActionProxies.searchProfile$Action
                }, {});
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:c6cqa6QSZ0enTjKSQC1V0g", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:yjum5DgENUmerQsAgnWZ2Q", callContext.id);
            }

        };

        Controller.prototype.deferredHandleShareObjectList$Action = function(targetProfileIdIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._deferredHandleShareObjectList$Action, callContext, targetProfileIdIn);

        };
        Controller.prototype.input_SearchFilterOnChange$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._input_SearchFilterOnChange$Action, callContext);

        };
        Controller.prototype.searchProfile$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._searchProfile$Action, callContext);

        };
        Controller.prototype.onClick$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onClick$Action, callContext);

        };
        Controller.prototype.getAvailableUsersOnAfterFetch$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._getAvailableUsersOnAfterFetch$Action, callContext);

        };
        Controller.prototype.input_SearchFilterOnKeyup$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._input_SearchFilterOnKeyup$Action, callContext);

        };
        Controller.prototype.share$Action = function() {
            return Promise.resolve();
        };
        Controller.prototype.subscriptionDenied$Action = function() {
            return Promise.resolve();
        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:lZepHxCQC0OwqtkQndml+Q:/NRWebFlows.lZepHxCQC0OwqtkQndml+Q:pv7815SkwH5QyvCi55ul5Q", "Connect2_LegacyShared", "Share_UI", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:NnUJ6WKyqU+fZppP1eddgw:/NRWebFlows.lZepHxCQC0OwqtkQndml+Q/NodesShownInESpaceTree.NnUJ6WKyqU+fZppP1eddgw:MEMONyn3H+DlH2IFV_xMDg", "Connect2_LegacyShared", "ProfileList", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:NnUJ6WKyqU+fZppP1eddgw", callContext.id);
            OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:lZepHxCQC0OwqtkQndml+Q", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = null;
        Controller.prototype.onReadyEventHandler = null;
        Controller.prototype.onRenderEventHandler = null;
        Controller.prototype.onDestroyEventHandler = null;
        Controller.prototype.onParametersChangedEventHandler = null;
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
define("Connect2_LegacyShared.Share_UI.ProfileList.mvc$controller.OnClick.DeferHandleShareJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        return new Promise(function($resolve, $reject) {
            $actions.DeferredHandleShareObjectList($parameters.TargetProfileId);
            $resolve();
        });
    };
});
define("Connect2_LegacyShared.Share_UI.ProfileList.mvc$controller.Input_SearchFilterOnKeyup.JavaScript1JS", [], function() {
    return function($actions, $roles, $public) {
        if (event.keyCode == 13) {
            $actions.SearchProfile();
            event.target.blur();
        }
    };
});

define("Connect2_LegacyShared.Share_UI.ProfileList.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "o5Mc+dfidUiQ1EvHzAE8Vw": {
            getter: function(varBag, idService) {
                return varBag.vars.value.targetProfileIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "tNQX_4ETSkO891+WAf5nzw": {
            getter: function(varBag, idService) {
                return varBag.shareObjectVar.value;
            }
        },
        "CKXdOoOBOE6GLu_VzHsuPA": {
            getter: function(varBag, idService) {
                return varBag.listFilterVar.value;
            }
        },
        "_vBbcHWZIkC4iye5bwP2bg": {
            getter: function(varBag, idService) {
                return varBag.listIndexOfVar.value;
            }
        },
        "i1HwwEcmyEK2rohEVfrsOw": {
            getter: function(varBag, idService) {
                return varBag.getUserInfoVar.value;
            }
        },
        "tOSx3m45WE+GCMBQbZ0Caw": {
            getter: function(varBag, idService) {
                return varBag.deferHandleShareJSResult.value;
            }
        },
        "spsB1LknYUGV9bLu4khXsA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.currentShareProfileVar;
            }
        },
        "c6d1Ih1PsUO4d1m4n21Okg": {
            getter: function(varBag, idService) {
                return varBag.listAnyVar.value;
            }
        },
        "4okqmD_Pp0e9VDYRXU11sQ": {
            getter: function(varBag, idService) {
                return varBag.listFilterSharedProfilesVar.value;
            }
        },
        "fhldc3B0YU+UfvFRgmIYAA": {
            getter: function(varBag, idService) {
                return varBag.javaScript1JSResult.value;
            }
        },
        "aNTtJ9HcbUqv1l3uJostlw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.shareProfilesVar;
            }
        },
        "J1i3lV7JJE643SYMsDSz+Q": {
            getter: function(varBag, idService) {
                return varBag.model.variables.searchFilterVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "a+rpad1U9k2AG7svbqAlgQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.sharedProfileIdsVar;
            }
        },
        "R52DtO6h6Em55lMS+Uxrcw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.maxRecordsVar;
            },
            dataType: OS.DataTypes.DataTypes.Integer
        },
        "z4EJ+RDTsUyMY+xIpzSwAg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.hasSearchedVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "ncme6leCwU6PvyyjY_5PjA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.noResultsFoundMessageVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "UQaUDaBxYEC_aj8_YRPKCQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.shareObjectIdIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "EF4Cs+hhXkuFNZDtinGt5w": {
            getter: function(varBag, idService) {
                return varBag.model.variables.shareObjectTypeIdIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "urjm3+8VPEeq8Orh0bhHbQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.getAvailableUsersDataAct;
            }
        },
        "BkjquHwDSk+nQb_l0YDNhw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Icon"));
                })(varBag.model, idService);
            }
        },
        "uYmDflmIjEOOhS0CJZFG4Q": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Input"));
                })(varBag.model, idService);
            }
        },
        "W4B0dmICz0u7RBcVwzBF9A": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Input_SearchFilter"));
                })(varBag.model, idService);
            }
        },
        "zJghavk6IUaWEQQrhiJ67g": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("IsDataFetched"));
                })(varBag.model, idService);
            }
        },
        "I++0Mz3pg0m9U9mP3J8Zbg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HasResults"));
                })(varBag.model, idService);
            }
        },
        "7vKmLy0rw0ekflymSLuCJw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Household_List_Item"));
                })(varBag.model, idService);
            }
        },
        "oRv3NbKfAkeka3B8RqRsLQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("ImagePlaceholder"));
                })(varBag.model, idService);
            }
        },
        "Hfe7NRtl6kyEB4OMT_n96Q": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Title_Placeholder"));
                })(varBag.model, idService);
            }
        },
        "3BNx_OXisEa57huVRmdMFQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Description_Placeholder"));
                })(varBag.model, idService);
            }
        },
        "lFDpM+9Yyki73zVjnRwxAg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Tag_Placeholder"));
                })(varBag.model, idService);
            }
        },
        "hSfDGEWurk6m+RcLYAKRnA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Household_Tag"));
                })(varBag.model, idService);
            }
        },
        "5vX6wZm77EqFZUM7VIbJtw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Result_Item_Placeholder"));
                })(varBag.model, idService);
            }
        },
        "TrDeTMtDg0GMIMy8x5M4zQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("BookmarkNote"));
                })(varBag.model, idService);
            }
        },
        "Qy+MZB6hjUmsjy63WfSJhA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Icon"));
                })(varBag.model, idService);
            }
        },
        "h4UAdXfiWkeeLfGCkJbBug": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Message"));
                })(varBag.model, idService);
            }
        },
        "E2qJ_VWbAESHlRDqFkdp_g": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HasFetchError"));
                })(varBag.model, idService);
            }
        },
        "uBqfhWcYvkiZxJixMgroIw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Icon"));
                })(varBag.model, idService);
            }
        },
        "T11djee_0kyuTvwerq7ccA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Message"));
                })(varBag.model, idService);
            }
        },
        "KWqhOOZQ6Eq0FN_9ZkTAIg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Icon"));
                })(varBag.model, idService);
            }
        },
        "P_qWa5z5QU2dPTlIAsJ9LA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Message"));
                })(varBag.model, idService);
            }
        },
        "km2x91l+eEmljngatIuiyA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("FreeSubscriptionAlert"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});