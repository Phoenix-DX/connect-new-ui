define("UBTConnect.App_Services.Services.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "Connect_Services_CS.model", "UBTConnectLibrary.model", "UBTJavaScriptUtils.controller", "UBTConnectLibrary.Layouts.Layout_DetailPage.mvc$model", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$model", "SortableJS.Sortable.SortableList.mvc$model", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$model", "UBTConnectLibrary.BasePatterns.CustomText.mvc$model", "UBTConnectLibrary.BasePatterns.Columns_Two.mvc$model", "SortableJS.Sortable.SortableList_Draggable.mvc$model", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$model", "UBTConnectLibrary.ConnectPatterns.IconText.mvc$model", "UBTConnect.App_Common_Blocks.SectionSeparator.mvc$model", "UBTConnectLibrary.BasePatterns.Columns_Three.mvc$model", "UBTConnectLibrary.ConnectPatterns.FixedFooter.mvc$model", "OutSystemsUI_2_23.Utilities.ButtonLoading.mvc$model", "UBTConnect_Utils.CW_Common.Button.mvc$model", "Connect_Services_CS.model$Connect_ServicesRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect_Services_CS", "UBTConnect.model$Connect_ServicesList", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$InlineIconRec", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnect.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.model$ButtonOptionsRec", "UBTJavaScriptUtils.controller$FeedbackMessage_AutoClose", "UBTConnect.referencesHealth$UBTJavaScriptUtils", "UBTConnect.model$Connect_ServicesConnect_Service_UserRecordList", "UBTConnect.model$Connect_ServicesConnect_Service_UserRecord"], function(OutSystems, UBTConnectModel, Connect_Services_CSModel, UBTConnectLibraryModel, UBTJavaScriptUtilsController, UBTConnectLibrary_Layouts_Layout_DetailPage_mvcModel, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvcModel, SortableJS_Sortable_SortableList_mvcModel, UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel, UBTConnectLibrary_BasePatterns_CustomText_mvcModel, UBTConnectLibrary_BasePatterns_Columns_Two_mvcModel, SortableJS_Sortable_SortableList_Draggable_mvcModel, UBTConnectLibrary_ConnectPatterns_Icon_mvcModel, UBTConnectLibrary_ConnectPatterns_IconText_mvcModel, UBTConnect_App_Common_Blocks_SectionSeparator_mvcModel, UBTConnectLibrary_BasePatterns_Columns_Three_mvcModel, UBTConnectLibrary_ConnectPatterns_FixedFooter_mvcModel, OutSystemsUI_2_23_Utilities_ButtonLoading_mvcModel, UBTConnect_Utils_CW_Common_Button_mvcModel) {
    var OS = OutSystems.Internal;

    var GetServicesDataActRec = (function(_super) {
        __extends(GetServicesDataActRec, _super);

        function GetServicesDataActRec(defaults) {
            _super.apply(this, arguments);
        }
        GetServicesDataActRec.attributesToDeclare = function() {
            return [
                this.attr("AvailableServices", "availableServicesOut", "AvailableServices", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.Connect_ServicesList());
                }, true, UBTConnectModel.Connect_ServicesList),
                this.attr("CurrentServices", "currentServicesOut", "CurrentServices", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.Connect_ServicesConnect_Service_UserRecordList());
                }, true, UBTConnectModel.Connect_ServicesConnect_Service_UserRecordList)
            ].concat(_super.attributesToDeclare.call(this));
        };
        GetServicesDataActRec.init();
        return GetServicesDataActRec;
    })(OS.Model.DataSourceRecord);

    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("isLoading", "isLoadingVar", "isLoading", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("ReferenceServices", "referenceServicesVar", "ReferenceServices", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.Connect_ServicesList());
                }, false, UBTConnectModel.Connect_ServicesList),
                this.attr("HasChanges", "hasChangesVar", "HasChanges", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("GetServices", "getServicesDataAct", "getServicesDataAct", true, true, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new GetServicesDataActRec());
                }, true, GetServicesDataActRec)
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
                    Model._hasValidationWidgetsValue = (((((((((((((UBTConnectLibrary_Layouts_Layout_DetailPage_mvcModel.hasValidationWidgets || UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvcModel.hasValidationWidgets) || SortableJS_Sortable_SortableList_mvcModel.hasValidationWidgets) || UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel.hasValidationWidgets) || UBTConnectLibrary_BasePatterns_CustomText_mvcModel.hasValidationWidgets) || UBTConnectLibrary_BasePatterns_Columns_Two_mvcModel.hasValidationWidgets) || SortableJS_Sortable_SortableList_Draggable_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_Icon_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_IconText_mvcModel.hasValidationWidgets) || UBTConnect_App_Common_Blocks_SectionSeparator_mvcModel.hasValidationWidgets) || UBTConnectLibrary_BasePatterns_Columns_Three_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_FixedFooter_mvcModel.hasValidationWidgets) || OutSystemsUI_2_23_Utilities_ButtonLoading_mvcModel.hasValidationWidgets) || UBTConnect_Utils_CW_Common_Button_mvcModel.hasValidationWidgets);
                }

                return Model._hasValidationWidgetsValue;
            }
        });

        Model.prototype.setInputs = function(inputs) {};
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "App_Services.Services");
});
define("UBTConnect.App_Services.Services.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "Connect_Services_CS.model", "UBTConnectLibrary.model", "UBTJavaScriptUtils.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.App_Services.Services.mvc$model", "UBTConnect.App_Services.Services.mvc$controller", "UBTConnect.clientVariables", "UBTConnectLibrary.Layouts.Layout_DetailPage.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$view", "SortableJS.Sortable.SortableList.mvc$view", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "UBTConnectLibrary.BasePatterns.CustomText.mvc$view", "UBTConnectLibrary.BasePatterns.Columns_Two.mvc$view", "SortableJS.Sortable.SortableList_Draggable.mvc$view", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$view", "UBTConnectLibrary.ConnectPatterns.IconText.mvc$view", "UBTConnect.App_Common_Blocks.SectionSeparator.mvc$view", "UBTConnectLibrary.BasePatterns.Columns_Three.mvc$view", "UBTConnectLibrary.ConnectPatterns.FixedFooter.mvc$view", "OutSystemsUI_2_23.Utilities.ButtonLoading.mvc$view", "UBTConnect_Utils.CW_Common.Button.mvc$view", "Connect_Services_CS.model$Connect_ServicesRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect_Services_CS", "UBTConnect.model$Connect_ServicesList", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$InlineIconRec", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnect.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.model$ButtonOptionsRec", "UBTJavaScriptUtils.controller$FeedbackMessage_AutoClose", "UBTConnect.referencesHealth$UBTJavaScriptUtils", "UBTConnect.model$Connect_ServicesConnect_Service_UserRecordList", "UBTConnect.model$Connect_ServicesConnect_Service_UserRecord"], function(OutSystems, UBTConnectModel, UBTConnectController, Connect_Services_CSModel, UBTConnectLibraryModel, UBTJavaScriptUtilsController, React, OSView, UBTConnect_App_Services_Services_mvc_model, UBTConnect_App_Services_Services_mvc_controller, UBTConnectClientVariables, UBTConnectLibrary_Layouts_Layout_DetailPage_mvc_view, OSWidgets, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, SortableJS_Sortable_SortableList_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, SortableJS_Sortable_SortableList_Draggable_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, UBTConnect_App_Common_Blocks_SectionSeparator_mvc_view, UBTConnectLibrary_BasePatterns_Columns_Three_mvc_view, UBTConnectLibrary_ConnectPatterns_FixedFooter_mvc_view, OutSystemsUI_2_23_Utilities_ButtonLoading_mvc_view, UBTConnect_Utils_CW_Common_Button_mvc_view) {
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
        View.displayName = "App_Services.Services";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI_2_23.OutSystemsUI.css", "css/UBTConnectLibrary.UBTConnectBase.css", "css/UBTConnectLibrary.UBTConnectLibrary.css", "css/Connect2_LegacyShared.UBTConnect.css", "css/UBTConnect.App_Services.Services.css", "css/OutSystemsUI_2_23.OutSystemsUI.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_Layouts_Layout_DetailPage_mvc_view, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, SortableJS_Sortable_SortableList_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, SortableJS_Sortable_SortableList_Draggable_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, UBTConnect_App_Common_Blocks_SectionSeparator_mvc_view, UBTConnectLibrary_BasePatterns_Columns_Three_mvc_view, UBTConnectLibrary_ConnectPatterns_FixedFooter_mvc_view, OutSystemsUI_2_23_Utilities_ButtonLoading_mvc_view, UBTConnect_Utils_CW_Common_Button_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_App_Services_Services_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_App_Services_Services_mvc_controller;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "title", {
            get: function() {
                return "Services";
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
                    placeholder_Header_Title: new PlaceholderContent(function() {
                        return ["Manage Services"];
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
                                name: "ContentWrapper"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, {
                            inputs: {
                                In_IsLoading: (!((model.variables.getServicesDataAct.isDataFetchedAttr || model.variables.getServicesDataAct.hasFetchErrorAttr)) || model.variables.isLoadingVar)
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
                                name: "Content",
                                alias: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                placeholder_LoadingSection: new PlaceholderContent(function() {
                                    return [React.createElement(SortableJS_Sortable_SortableList_mvc_view, {
                                        inputs: {
                                            PreventDomMove: true,
                                            Group: "services"
                                        },
                                        events: {
                                            _handleError: function(ex) {
                                                controller.handleError(ex);
                                            },
                                            onDragEnd$Action: function(fromIdIn, toIdIn, oldIndexIn, newIndexIn, itemIdIn) {
                                                var eventHandlerContext = callContext.clone();
                                                return OS.Flow.tryFinally(function() {
                                                    var varBag = {};
                                                    controller.pushDebuggerContext(eventHandlerContext);

                                                    OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Sortable/SortableList OnDragEnd");
                                                    controller.handler_SortableListOnDragEnd$Action(fromIdIn, toIdIn, oldIndexIn, newIndexIn, itemIdIn, controller.callContext(eventHandlerContext));
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
                                            uuid: "3",
                                            alias: "3"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        placeholders: {
                                            listPlaceholder: new PlaceholderContent(function() {
                                                return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                                                    inputs: {
                                                        Options: model.getCachedValue(idService.getId("Favourites2.Options"), function() {
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
                                                        name: "Favourites2",
                                                        alias: "4"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                    placeholders: {
                                                        content: new PlaceholderContent(function() {
                                                            return [React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
                                                                inputs: {
                                                                    In_TextOptions: model.getCachedValue(idService.getId("OWnhxr4SL0aSO_v6iI39TQ.In_TextOptions"), function() {
                                                                        return function() {
                                                                            var rec = new UBTConnectLibraryModel.TextOptionsRec();
                                                                            rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral10;
                                                                            rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.heading6;
                                                                            rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.semiBold;
                                                                            return rec;
                                                                        }();
                                                                    }),
                                                                    In_PaddingOptions: model.getCachedValue(idService.getId("OWnhxr4SL0aSO_v6iI39TQ.In_PaddingOptions"), function() {
                                                                        return function() {
                                                                            var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                                                            rec.verticalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
                                                                            return rec;
                                                                        }();
                                                                    }),
                                                                    In_Text: "Favourites"
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
                                                                    alias: "5"
                                                                },
                                                                _widgetRecordProvider: widgetsRecordProvider,
                                                                _dependencies: []
                                                            }), React.createElement(OSWidgets.List, {
                                                                animateItems: true,
                                                                gridProperties: {
                                                                    classes: "OSFillParent"
                                                                },
                                                                mode: /*Default*/ 0,
                                                                source: model.variables.getServicesDataAct.currentServicesOut,
                                                                style: "list list-group",
                                                                tag: "div",
                                                                _idProps: {
                                                                    service: idService,
                                                                    name: "FavouriteList"
                                                                },
                                                                _widgetRecordProvider: widgetsRecordProvider,
                                                                source_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getServicesDataAct.dataFetchStatusAttr),
                                                                placeholders: {
                                                                    content: new IteratorPlaceholderContent(function(idService, callContext) {
                                                                        return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                                                                            inputs: {
                                                                                Options: model.getCachedValue(idService.getId("ED_Eb5+7TUyjOL+PZP4tDw.Options"), function() {
                                                                                    return function() {
                                                                                        var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                                                                                        rec.paddingSizeAttr = function() {
                                                                                            var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                                                                            rec.verticalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
                                                                                            return rec;
                                                                                        }();
                                                                                        rec.borderOptionsAttr = function() {
                                                                                            var rec = new UBTConnectLibraryModel.BorderOptionsRec();
                                                                                            rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral4;
                                                                                            rec.sizeAttr = function() {
                                                                                                var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                                                                                rec.bottomSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
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
                                                                                uuid: "7",
                                                                                alias: "6"
                                                                            },
                                                                            _widgetRecordProvider: widgetsRecordProvider,
                                                                            placeholders: {
                                                                                content: new PlaceholderContent(function() {
                                                                                    return [React.createElement(UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, {
                                                                                        inputs: {
                                                                                            ColumnOptions: model.getCachedValue(idService.getId("evLb_E_1KEixZyaHvw9GjQ.ColumnOptions"), function() {
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
                                                                                            uuid: "8",
                                                                                            alias: "7"
                                                                                        },
                                                                                        _widgetRecordProvider: widgetsRecordProvider,
                                                                                        placeholders: {
                                                                                            left: new PlaceholderContent(function() {
                                                                                                return [React.createElement(SortableJS_Sortable_SortableList_Draggable_mvc_view, {
                                                                                                    inputs: {
                                                                                                        Id: model.variables.getServicesDataAct.currentServicesOut.getCurrent(callContext.iterationContext).connect_ServicesAttr.idAttr,
                                                                                                        _idInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getServicesDataAct.dataFetchStatusAttr),
                                                                                                        UseCustomDragHandle: true
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
                                                                                                        uuid: "9",
                                                                                                        alias: "8"
                                                                                                    },
                                                                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                                                                    placeholders: {
                                                                                                        item: new PlaceholderContent(function() {
                                                                                                            return [React.createElement(UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, {
                                                                                                                inputs: {
                                                                                                                    ColumnOptions: model.getCachedValue(idService.getId("recD+Kyeb0yhMdGbcec7rw.ColumnOptions"), function() {
                                                                                                                        return function() {
                                                                                                                            var rec = new UBTConnectLibraryModel.ColumnOptionsRec();
                                                                                                                            rec.columnBehaviourAttr = UBTConnectModel.staticEntities.uBT_ColumnBehaviour.reduceFirst;
                                                                                                                            rec.spacingSizeAttr = UBTConnectModel.staticEntities.uBT_Size.small;
                                                                                                                            rec.verticalAlignAttr = UBTConnectModel.staticEntities.uBT_VerticalAlign.center;
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
                                                                                                                    uuid: "10",
                                                                                                                    alias: "9"
                                                                                                                },
                                                                                                                _widgetRecordProvider: widgetsRecordProvider,
                                                                                                                placeholders: {
                                                                                                                    left: new PlaceholderContent(function() {
                                                                                                                        return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                                                                                                                            inputs: {
                                                                                                                                Options: model.getCachedValue(idService.getId("grxugL86UUuq9QFUo0tOGg.Options"), function() {
                                                                                                                                    return function() {
                                                                                                                                        var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                                                                                                                                        rec.backgroundAttr = function() {
                                                                                                                                            var rec = new UBTConnectLibraryModel.BackgroundOptionsRec();
                                                                                                                                            rec.backgroundColorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral1;
                                                                                                                                            return rec;
                                                                                                                                        }();
                                                                                                                                        rec.paddingSizeAttr = function() {
                                                                                                                                            var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                                                                                                                            rec.verticalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
                                                                                                                                            rec.horizontalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.extraSmall;
                                                                                                                                            return rec;
                                                                                                                                        }();
                                                                                                                                        rec.borderOptionsAttr = function() {
                                                                                                                                            var rec = new UBTConnectLibraryModel.BorderOptionsRec();
                                                                                                                                            rec.radiusAttr = function() {
                                                                                                                                                var rec = new UBTConnectLibraryModel.RadiusOptionsRec();
                                                                                                                                                rec.generalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Shape.rounded;
                                                                                                                                                return rec;
                                                                                                                                            }();
                                                                                                                                            return rec;
                                                                                                                                        }();
                                                                                                                                        rec.isInlineBlockAttr = true;
                                                                                                                                        return rec;
                                                                                                                                    }();
                                                                                                                                }),
                                                                                                                                ExtendedClasses: "drag-handle"
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
                                                                                                                                alias: "10"
                                                                                                                            },
                                                                                                                            _widgetRecordProvider: widgetsRecordProvider,
                                                                                                                            placeholders: {
                                                                                                                                content: new PlaceholderContent(function() {
                                                                                                                                    return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
                                                                                                                                        inputs: {
                                                                                                                                            In_SizeId: UBTConnectModel.staticEntities.uBT_IconsSize.nonStandard_14,
                                                                                                                                            In_IconId: UBTConnectModel.staticEntities.uBT_Icons2.dragIndicator,
                                                                                                                                            In_ColorId: UBTConnectModel.staticEntities.uBT_Color.neutral6
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
                                                                                                                                            uuid: "12",
                                                                                                                                            alias: "11"
                                                                                                                                        },
                                                                                                                                        _widgetRecordProvider: widgetsRecordProvider,
                                                                                                                                        _dependencies: []
                                                                                                                                    })];
                                                                                                                                })
                                                                                                                            },
                                                                                                                            _dependencies: []
                                                                                                                        })];
                                                                                                                    }),
                                                                                                                    right: new PlaceholderContent(function() {
                                                                                                                        return [React.createElement(UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, {
                                                                                                                            inputs: {
                                                                                                                                SpacingSize: UBTConnectModel.staticEntities.uBT_Size.small,
                                                                                                                                TextOptions: model.getCachedValue(idService.getId("L22GeMAlmkKewDtxaOTdaw.TextOptions"), function() {
                                                                                                                                    return function() {
                                                                                                                                        var rec = new UBTConnectLibraryModel.TextOptionsRec();
                                                                                                                                        rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral10;
                                                                                                                                        rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.base;
                                                                                                                                        rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.semiBold;
                                                                                                                                        return rec;
                                                                                                                                    }();
                                                                                                                                }),
                                                                                                                                Text: model.variables.getServicesDataAct.currentServicesOut.getCurrent(callContext.iterationContext).connect_ServicesAttr.labelAttr,
                                                                                                                                _textInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getServicesDataAct.dataFetchStatusAttr)
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
                                                                                                                                alias: "12"
                                                                                                                            },
                                                                                                                            _widgetRecordProvider: widgetsRecordProvider,
                                                                                                                            placeholders: {
                                                                                                                                icon: new PlaceholderContent(function() {
                                                                                                                                    return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
                                                                                                                                        inputs: {
                                                                                                                                            In_IconId: model.variables.getServicesDataAct.currentServicesOut.getCurrent(callContext.iterationContext).connect_ServicesAttr.iconIdAttr,
                                                                                                                                            _in_IconIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getServicesDataAct.dataFetchStatusAttr),
                                                                                                                                            In_SizeId: UBTConnectModel.staticEntities.uBT_IconsSize.base_24
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
                                                                                                                                            alias: "13"
                                                                                                                                        },
                                                                                                                                        _widgetRecordProvider: widgetsRecordProvider,
                                                                                                                                        _dependencies: []
                                                                                                                                    })];
                                                                                                                                })
                                                                                                                            },
                                                                                                                            _dependencies: [asPrimitiveValue(model.variables.getServicesDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.getServicesDataAct.currentServicesOut.getCurrent(callContext.iterationContext).connect_ServicesAttr.iconIdAttr)]
                                                                                                                        })];
                                                                                                                    })
                                                                                                                },
                                                                                                                _dependencies: [asPrimitiveValue(model.variables.getServicesDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.getServicesDataAct.currentServicesOut.getCurrent(callContext.iterationContext).connect_ServicesAttr.iconIdAttr), asPrimitiveValue(model.variables.getServicesDataAct.currentServicesOut.getCurrent(callContext.iterationContext).connect_ServicesAttr.labelAttr)]
                                                                                                            })];
                                                                                                        })
                                                                                                    },
                                                                                                    _dependencies: [asPrimitiveValue(model.variables.getServicesDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.getServicesDataAct.currentServicesOut.getCurrent(callContext.iterationContext).connect_ServicesAttr.iconIdAttr), asPrimitiveValue(model.variables.getServicesDataAct.currentServicesOut.getCurrent(callContext.iterationContext).connect_ServicesAttr.labelAttr)]
                                                                                                })];
                                                                                            }),
                                                                                            right: new PlaceholderContent(function() {
                                                                                                return [$if(model.variables.getServicesDataAct.currentServicesOut.getCurrent(callContext.iterationContext).connect_ServicesAttr.isMandatoryAttr, false, this, function() {
                                                                                                    return [];
                                                                                                }, function() {
                                                                                                    return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
                                                                                                        inputs: {
                                                                                                            In_SizeId: UBTConnectModel.staticEntities.uBT_IconsSize.base_24,
                                                                                                            In_IconId: UBTConnectModel.staticEntities.uBT_Icons2.cancelFill,
                                                                                                            In_ColorId: UBTConnectModel.staticEntities.uBT_Color.neutral7
                                                                                                        },
                                                                                                        events: {
                                                                                                            _handleError: function(ex) {
                                                                                                                controller.handleError(ex);
                                                                                                            },
                                                                                                            click$Action: function() {
                                                                                                                var eventHandlerContext = callContext.clone();
                                                                                                                return OS.Flow.tryFinally(function() {
                                                                                                                    var varBag = {};
                                                                                                                    controller.pushDebuggerContext(eventHandlerContext);

                                                                                                                    OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/Icon Click");
                                                                                                                    controller.handler_SortableListOnDragEnd$Action(idService.ownerService.getId("FavouriteList"), idService.ownerService.getId("Suggestions2"), model.variables.getServicesDataAct.currentServicesOut.getCurrent(callContext.iterationContext).connect_Service_UserAttr.orderAttr, -1, model.variables.getServicesDataAct.currentServicesOut.getCurrent(callContext.iterationContext).connect_ServicesAttr.idAttr, controller.callContext(eventHandlerContext));
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
                                                                                                            alias: "14"
                                                                                                        },
                                                                                                        _widgetRecordProvider: widgetsRecordProvider,
                                                                                                        _dependencies: []
                                                                                                    })];
                                                                                                })];
                                                                                            })
                                                                                        },
                                                                                        _dependencies: [asPrimitiveValue(model.variables.getServicesDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.getServicesDataAct.currentServicesOut.getCurrent(callContext.iterationContext).connect_Service_UserAttr.orderAttr), asPrimitiveValue(model.variables.getServicesDataAct.currentServicesOut.getCurrent(callContext.iterationContext).connect_ServicesAttr.isMandatoryAttr), asPrimitiveValue(model.variables.getServicesDataAct.currentServicesOut.getCurrent(callContext.iterationContext).connect_ServicesAttr.iconIdAttr), asPrimitiveValue(model.variables.getServicesDataAct.currentServicesOut.getCurrent(callContext.iterationContext).connect_ServicesAttr.labelAttr), asPrimitiveValue(model.variables.getServicesDataAct.currentServicesOut.getCurrent(callContext.iterationContext).connect_ServicesAttr.idAttr)]
                                                                                    })];
                                                                                })
                                                                            },
                                                                            _dependencies: [asPrimitiveValue(model.variables.getServicesDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.getServicesDataAct.currentServicesOut.getCurrent(callContext.iterationContext).connect_Service_UserAttr.orderAttr), asPrimitiveValue(model.variables.getServicesDataAct.currentServicesOut.getCurrent(callContext.iterationContext).connect_ServicesAttr.isMandatoryAttr), asPrimitiveValue(model.variables.getServicesDataAct.currentServicesOut.getCurrent(callContext.iterationContext).connect_ServicesAttr.iconIdAttr), asPrimitiveValue(model.variables.getServicesDataAct.currentServicesOut.getCurrent(callContext.iterationContext).connect_ServicesAttr.labelAttr), asPrimitiveValue(model.variables.getServicesDataAct.currentServicesOut.getCurrent(callContext.iterationContext).connect_ServicesAttr.idAttr)]
                                                                        })];
                                                                    }, callContext, idService, "1")
                                                                },
                                                                _dependencies: [asPrimitiveValue(model.variables.getServicesDataAct.dataFetchStatusAttr)]
                                                            })];
                                                        })
                                                    },
                                                    _dependencies: [asPrimitiveValue(model.variables.getServicesDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.getServicesDataAct.currentServicesOut)]
                                                })];
                                            })
                                        },
                                        _dependencies: [asPrimitiveValue(model.variables.getServicesDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.getServicesDataAct.currentServicesOut)]
                                    }), $if(!(model.variables.getServicesDataAct.availableServicesOut.isEmpty), false, this, function() {
                                        return [React.createElement(UBTConnect_App_Common_Blocks_SectionSeparator_mvc_view, {
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
                                                uuid: "16",
                                                alias: "15"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider,
                                            _dependencies: []
                                        }), React.createElement(SortableJS_Sortable_SortableList_mvc_view, {
                                            inputs: {
                                                PreventDomMove: true,
                                                Group: "services",
                                                DenyLists: model.getCachedValue(idService.getId("8chGT8RMmE2jqRolPSMEvQ.DenyLists"), function() {
                                                    return function() {
                                                        var list = new OS.DataTypes.TextList();
                                                        list.pushAll([idService.getId("SuggestionList"), idService.getId("FavouriteList")]);
                                                        return list;
                                                    }();
                                                })
                                            },
                                            events: {
                                                _handleError: function(ex) {
                                                    controller.handleError(ex);
                                                },
                                                onDragEnd$Action: function(fromIdIn, toIdIn, oldIndexIn, newIndexIn, itemIdIn) {
                                                    var eventHandlerContext = callContext.clone();
                                                    return OS.Flow.tryFinally(function() {
                                                        var varBag = {};
                                                        controller.pushDebuggerContext(eventHandlerContext);

                                                        OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Sortable/SortableList OnDragEnd");
                                                        controller.handler_SortableListOnDragEnd$Action(fromIdIn, toIdIn, oldIndexIn, newIndexIn, itemIdIn, controller.callContext(eventHandlerContext));
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
                                                uuid: "17",
                                                alias: "16"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider,
                                            placeholders: {
                                                listPlaceholder: new PlaceholderContent(function() {
                                                    return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                                                        inputs: {
                                                            Options: model.getCachedValue(idService.getId("Suggestions2.Options"), function() {
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
                                                            name: "Suggestions2",
                                                            alias: "17"
                                                        },
                                                        _widgetRecordProvider: widgetsRecordProvider,
                                                        placeholders: {
                                                            content: new PlaceholderContent(function() {
                                                                return [React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
                                                                    inputs: {
                                                                        In_Text: "Suggestions",
                                                                        In_TextOptions: model.getCachedValue(idService.getId("aHJaJ7ijFE+R6WylBgYwqQ.In_TextOptions"), function() {
                                                                            return function() {
                                                                                var rec = new UBTConnectLibraryModel.TextOptionsRec();
                                                                                rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral10;
                                                                                rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.heading6;
                                                                                rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.semiBold;
                                                                                return rec;
                                                                            }();
                                                                        }),
                                                                        In_PaddingOptions: model.getCachedValue(idService.getId("aHJaJ7ijFE+R6WylBgYwqQ.In_PaddingOptions"), function() {
                                                                            return function() {
                                                                                var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                                                                rec.verticalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
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
                                                                        uuid: "19",
                                                                        alias: "18"
                                                                    },
                                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                                    _dependencies: []
                                                                }), React.createElement(OSWidgets.List, {
                                                                    animateItems: true,
                                                                    gridProperties: {
                                                                        classes: "OSFillParent"
                                                                    },
                                                                    mode: /*Default*/ 0,
                                                                    source: model.variables.getServicesDataAct.availableServicesOut,
                                                                    style: "list list-group",
                                                                    tag: "div",
                                                                    _idProps: {
                                                                        service: idService,
                                                                        name: "SuggestionList"
                                                                    },
                                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                                    source_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getServicesDataAct.dataFetchStatusAttr),
                                                                    placeholders: {
                                                                        content: new IteratorPlaceholderContent(function(idService, callContext) {
                                                                            return [React.createElement(SortableJS_Sortable_SortableList_Draggable_mvc_view, {
                                                                                inputs: {
                                                                                    Id: model.variables.getServicesDataAct.availableServicesOut.getCurrent(callContext.iterationContext).idAttr,
                                                                                    _idInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getServicesDataAct.dataFetchStatusAttr),
                                                                                    UseCustomDragHandle: true
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
                                                                                    uuid: "21",
                                                                                    alias: "19"
                                                                                },
                                                                                _widgetRecordProvider: widgetsRecordProvider,
                                                                                placeholders: {
                                                                                    item: new PlaceholderContent(function() {
                                                                                        return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                                                                                            inputs: {
                                                                                                Options: model.getCachedValue(idService.getId("gxA1wRR7sEWQGlRj3SoSlQ.Options"), function() {
                                                                                                    return function() {
                                                                                                        var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                                                                                                        rec.paddingSizeAttr = function() {
                                                                                                            var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                                                                                            rec.verticalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
                                                                                                            return rec;
                                                                                                        }();
                                                                                                        rec.borderOptionsAttr = function() {
                                                                                                            var rec = new UBTConnectLibraryModel.BorderOptionsRec();
                                                                                                            rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral4;
                                                                                                            rec.sizeAttr = function() {
                                                                                                                var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                                                                                                rec.bottomSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
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
                                                                                                uuid: "22",
                                                                                                alias: "20"
                                                                                            },
                                                                                            _widgetRecordProvider: widgetsRecordProvider,
                                                                                            placeholders: {
                                                                                                content: new PlaceholderContent(function() {
                                                                                                    return [React.createElement(UBTConnectLibrary_BasePatterns_Columns_Three_mvc_view, {
                                                                                                        inputs: {
                                                                                                            ColumnOptions: model.getCachedValue(idService.getId("yf3ZJDgtFUmHmHJ2iyZrIg.ColumnOptions"), function() {
                                                                                                                return function() {
                                                                                                                    var rec = new UBTConnectLibraryModel.ColumnOptionsRec();
                                                                                                                    rec.columnBehaviourAttr = UBTConnectModel.staticEntities.uBT_ColumnBehaviour.expandMiddle;
                                                                                                                    rec.spacingSizeAttr = UBTConnectModel.staticEntities.uBT_Size.small;
                                                                                                                    rec.verticalAlignAttr = UBTConnectModel.staticEntities.uBT_VerticalAlign.center;
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
                                                                                                            uuid: "23",
                                                                                                            alias: "21"
                                                                                                        },
                                                                                                        _widgetRecordProvider: widgetsRecordProvider,
                                                                                                        placeholders: {
                                                                                                            left: new PlaceholderContent(function() {
                                                                                                                return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                                                                                                                    inputs: {
                                                                                                                        ExtendedClasses: "drag-handle",
                                                                                                                        Options: model.getCachedValue(idService.getId("KQeQIQx8C0GgjsUxjrfRaA.Options"), function() {
                                                                                                                            return function() {
                                                                                                                                var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                                                                                                                                rec.backgroundAttr = function() {
                                                                                                                                    var rec = new UBTConnectLibraryModel.BackgroundOptionsRec();
                                                                                                                                    rec.backgroundColorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral1;
                                                                                                                                    return rec;
                                                                                                                                }();
                                                                                                                                rec.paddingSizeAttr = function() {
                                                                                                                                    var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                                                                                                                    rec.verticalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
                                                                                                                                    rec.horizontalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.extraSmall;
                                                                                                                                    return rec;
                                                                                                                                }();
                                                                                                                                rec.borderOptionsAttr = function() {
                                                                                                                                    var rec = new UBTConnectLibraryModel.BorderOptionsRec();
                                                                                                                                    rec.radiusAttr = function() {
                                                                                                                                        var rec = new UBTConnectLibraryModel.RadiusOptionsRec();
                                                                                                                                        rec.generalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Shape.rounded;
                                                                                                                                        return rec;
                                                                                                                                    }();
                                                                                                                                    return rec;
                                                                                                                                }();
                                                                                                                                rec.isInlineBlockAttr = true;
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
                                                                                                                        uuid: "24",
                                                                                                                        alias: "22"
                                                                                                                    },
                                                                                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                                                                                    placeholders: {
                                                                                                                        content: new PlaceholderContent(function() {
                                                                                                                            return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
                                                                                                                                inputs: {
                                                                                                                                    In_SizeId: UBTConnectModel.staticEntities.uBT_IconsSize.nonStandard_14,
                                                                                                                                    In_IconId: UBTConnectModel.staticEntities.uBT_Icons2.dragIndicator,
                                                                                                                                    In_ColorId: UBTConnectModel.staticEntities.uBT_Color.neutral6
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
                                                                                                                                    uuid: "25",
                                                                                                                                    alias: "23"
                                                                                                                                },
                                                                                                                                _widgetRecordProvider: widgetsRecordProvider,
                                                                                                                                _dependencies: []
                                                                                                                            })];
                                                                                                                        })
                                                                                                                    },
                                                                                                                    _dependencies: []
                                                                                                                })];
                                                                                                            }),
                                                                                                            middle: new PlaceholderContent(function() {
                                                                                                                return [React.createElement(UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, {
                                                                                                                    inputs: {
                                                                                                                        TextOptions: model.getCachedValue(idService.getId("SR_Y0UhxFkCZ_BppVqJprQ.TextOptions"), function() {
                                                                                                                            return function() {
                                                                                                                                var rec = new UBTConnectLibraryModel.TextOptionsRec();
                                                                                                                                rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral10;
                                                                                                                                rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.base;
                                                                                                                                rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.semiBold;
                                                                                                                                return rec;
                                                                                                                            }();
                                                                                                                        }),
                                                                                                                        Text: model.variables.getServicesDataAct.availableServicesOut.getCurrent(callContext.iterationContext).labelAttr,
                                                                                                                        _textInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getServicesDataAct.dataFetchStatusAttr),
                                                                                                                        SpacingSize: UBTConnectModel.staticEntities.uBT_Size.small
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
                                                                                                                        uuid: "26",
                                                                                                                        alias: "24"
                                                                                                                    },
                                                                                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                                                                                    placeholders: {
                                                                                                                        icon: new PlaceholderContent(function() {
                                                                                                                            return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
                                                                                                                                inputs: {
                                                                                                                                    In_SizeId: UBTConnectModel.staticEntities.uBT_IconsSize.base_24,
                                                                                                                                    In_IconId: model.variables.getServicesDataAct.availableServicesOut.getCurrent(callContext.iterationContext).iconIdAttr,
                                                                                                                                    _in_IconIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getServicesDataAct.dataFetchStatusAttr)
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
                                                                                                                                    uuid: "27",
                                                                                                                                    alias: "25"
                                                                                                                                },
                                                                                                                                _widgetRecordProvider: widgetsRecordProvider,
                                                                                                                                _dependencies: []
                                                                                                                            })];
                                                                                                                        })
                                                                                                                    },
                                                                                                                    _dependencies: [asPrimitiveValue(model.variables.getServicesDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.getServicesDataAct.availableServicesOut.getCurrent(callContext.iterationContext).iconIdAttr)]
                                                                                                                })];
                                                                                                            }),
                                                                                                            right: new PlaceholderContent(function() {
                                                                                                                return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
                                                                                                                    inputs: {
                                                                                                                        In_SizeId: UBTConnectModel.staticEntities.uBT_IconsSize.base_24,
                                                                                                                        In_IconId: UBTConnectModel.staticEntities.uBT_Icons2.addCircle,
                                                                                                                        In_ColorId: UBTConnectModel.staticEntities.uBT_Color.primary
                                                                                                                    },
                                                                                                                    events: {
                                                                                                                        _handleError: function(ex) {
                                                                                                                            controller.handleError(ex);
                                                                                                                        },
                                                                                                                        click$Action: function() {
                                                                                                                            var eventHandlerContext = callContext.clone();
                                                                                                                            return OS.Flow.tryFinally(function() {
                                                                                                                                var varBag = {};
                                                                                                                                controller.pushDebuggerContext(eventHandlerContext);

                                                                                                                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/Icon Click");
                                                                                                                                controller.handler_SortableListOnDragEnd$Action(idService.ownerService.getId("SuggestionList"), idService.ownerService.getId("FavouriteList"), -1, (model.variables.getServicesDataAct.currentServicesOut.length + 1), model.variables.getServicesDataAct.availableServicesOut.getCurrent(callContext.iterationContext).idAttr, controller.callContext(eventHandlerContext));
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
                                                                                                                        uuid: "28",
                                                                                                                        alias: "26"
                                                                                                                    },
                                                                                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                                                                                    _dependencies: []
                                                                                                                })];
                                                                                                            })
                                                                                                        },
                                                                                                        _dependencies: [asPrimitiveValue(model.variables.getServicesDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.getServicesDataAct.currentServicesOut.length), asPrimitiveValue(model.variables.getServicesDataAct.availableServicesOut.getCurrent(callContext.iterationContext).idAttr), asPrimitiveValue(model.variables.getServicesDataAct.availableServicesOut.getCurrent(callContext.iterationContext).iconIdAttr), asPrimitiveValue(model.variables.getServicesDataAct.availableServicesOut.getCurrent(callContext.iterationContext).labelAttr)]
                                                                                                    })];
                                                                                                })
                                                                                            },
                                                                                            _dependencies: [asPrimitiveValue(model.variables.getServicesDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.getServicesDataAct.currentServicesOut.length), asPrimitiveValue(model.variables.getServicesDataAct.availableServicesOut.getCurrent(callContext.iterationContext).idAttr), asPrimitiveValue(model.variables.getServicesDataAct.availableServicesOut.getCurrent(callContext.iterationContext).iconIdAttr), asPrimitiveValue(model.variables.getServicesDataAct.availableServicesOut.getCurrent(callContext.iterationContext).labelAttr)]
                                                                                        })];
                                                                                    })
                                                                                },
                                                                                _dependencies: [asPrimitiveValue(model.variables.getServicesDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.getServicesDataAct.currentServicesOut.length), asPrimitiveValue(model.variables.getServicesDataAct.availableServicesOut.getCurrent(callContext.iterationContext).idAttr), asPrimitiveValue(model.variables.getServicesDataAct.availableServicesOut.getCurrent(callContext.iterationContext).iconIdAttr), asPrimitiveValue(model.variables.getServicesDataAct.availableServicesOut.getCurrent(callContext.iterationContext).labelAttr)]
                                                                            })];
                                                                        }, callContext, idService, "2")
                                                                    },
                                                                    _dependencies: [asPrimitiveValue(model.variables.getServicesDataAct.currentServicesOut.length), asPrimitiveValue(model.variables.getServicesDataAct.dataFetchStatusAttr)]
                                                                })];
                                                            })
                                                        },
                                                        _dependencies: [asPrimitiveValue(model.variables.getServicesDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.getServicesDataAct.currentServicesOut.length), asPrimitiveValue(model.variables.getServicesDataAct.availableServicesOut)]
                                                    })];
                                                })
                                            },
                                            _dependencies: [asPrimitiveValue(model.variables.getServicesDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.getServicesDataAct.currentServicesOut.length), asPrimitiveValue(model.variables.getServicesDataAct.availableServicesOut)]
                                        })];
                                    }, function() {
                                        return [];
                                    })];
                                })
                            },
                            _dependencies: [asPrimitiveValue(model.variables.getServicesDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.getServicesDataAct.availableServicesOut), asPrimitiveValue(model.variables.getServicesDataAct.currentServicesOut)]
                        })), React.createElement(UBTConnectLibrary_ConnectPatterns_FixedFooter_mvc_view, {
                            inputs: {
                                ContentContainerId: idService.getId("ContentWrapper"),
                                ExpectedFooterHeight: "calc(2 * var(--space-base) + var(--ubt-button-height-m))",
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
                                uuid: "29",
                                alias: "27"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                content: new PlaceholderContent(function() {
                                    return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                                        inputs: {
                                            Options: model.getCachedValue(idService.getId("0iNNJfk6p0m5zjC+dJfVFQ.Options"), function() {
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
                                            uuid: "30",
                                            alias: "28"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        placeholders: {
                                            content: new PlaceholderContent(function() {
                                                return [React.createElement(OutSystemsUI_2_23_Utilities_ButtonLoading_mvc_view, {
                                                    inputs: {
                                                        IsLoading: model.variables.isLoadingVar
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
                                                        uuid: "31",
                                                        alias: "29"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                    placeholders: {
                                                        button: new PlaceholderContent(function() {
                                                            return [React.createElement(UBTConnect_Utils_CW_Common_Button_mvc_view, {
                                                                inputs: {
                                                                    ButtonText: "Save changes",
                                                                    IsDisabled: model.variables.isLoadingVar
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
                                                                                return controller.onClick_SaveChanges$Action(controller.callContext(eventHandlerContext));
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
                                                                    uuid: "32",
                                                                    alias: "30"
                                                                },
                                                                _widgetRecordProvider: widgetsRecordProvider,
                                                                _dependencies: []
                                                            })];
                                                        })
                                                    },
                                                    _dependencies: [asPrimitiveValue(model.variables.isLoadingVar)]
                                                })];
                                            })
                                        },
                                        _dependencies: [asPrimitiveValue(model.variables.isLoadingVar)]
                                    })];
                                })
                            },
                            _dependencies: [asPrimitiveValue(model.variables.isLoadingVar)]
                        })];
                    }),
                    bottom: PlaceholderContent.Empty,
                    placeholder_CommonUI_Inside_Layout: PlaceholderContent.Empty
                },
                _dependencies: [asPrimitiveValue(model.variables.getServicesDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.isLoadingVar), asPrimitiveValue(model.variables.getServicesDataAct.availableServicesOut), asPrimitiveValue(model.variables.getServicesDataAct.currentServicesOut), asPrimitiveValue(model.variables.getServicesDataAct.hasFetchErrorAttr), asPrimitiveValue(model.variables.getServicesDataAct.isDataFetchedAttr)]
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);

    return View;
});
define("UBTConnect.App_Services.Services.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "Connect_Services_CS.model", "UBTConnectLibrary.model", "UBTJavaScriptUtils.controller", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.App_Services.Services.mvc$debugger", "UBTConnect.App_Services.controller", "Connect_Services_CS.model$Connect_ServicesRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect_Services_CS", "UBTConnect.model$Connect_ServicesList", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$InlineIconRec", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnect.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.model$ButtonOptionsRec", "UBTJavaScriptUtils.controller$FeedbackMessage_AutoClose", "UBTConnect.referencesHealth$UBTJavaScriptUtils", "UBTConnect.model$Connect_ServicesConnect_Service_UserRecordList", "UBTConnect.model$Connect_ServicesConnect_Service_UserRecord"], function(OutSystems, UBTConnectModel, UBTConnectController, Connect_Services_CSModel, UBTConnectLibraryModel, UBTJavaScriptUtilsController, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_App_Services_Services_mvc_Debugger, _flow_UBTConnect_App_ServicesController) {
    var OS = OutSystems.Internal;
    var Controller = (function(_super) {
        __extends(Controller, _super);

        function Controller() {
            _super.apply(this, arguments);
            var controller = this.controller;
            this.clientActionProxies = {};
            this.dataFetchDependenciesOriginal = {
                getServices$DataActRefresh: 0
            };
            this.dataFetchDependentsGraph = {
                getServices$DataActRefresh: []
            };
            this.shouldSendClientVarsToDataSources = false;
        }
        // Server Actions
        Controller.prototype.service_ConnectServices_ChangeOrder_Bulk$ServerAction = function(currentServicesIn, callContext) {
            var controller = this.controller;
            var inputs = {
                CurrentServices: OS.DataConversion.ServerDataConverter.to(currentServicesIn, OS.DataTypes.DataTypes.RecordList)
            };
            return controller.callServerAction("Service_ConnectServices_ChangeOrder_Bulk", "screenservices/UBTConnect/App_Services/Services/ServiceAPIService_ConnectServices_ChangeOrder_Bulk", "X9zpTRkd4iYHe+QFHMKfhw", inputs, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function(json, headers) {
                OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
            }, false).then(function(outputs) {});
        };

        // Aggregates and Data Actions
        Controller.prototype.getServices$DataActRefresh = function(callContext) {
            var model = this.model;
            var controller = this.controller;
            var callContext = controller.callContext(callContext);
            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:88v2y8XZTky18wZtG7PCRA:/NRWebFlows.D3SAbq064kmZ1GnTCUyAHw/NodesShownInESpaceTree.FFna2jpTeki2qn5WfVYnxA/DataActions.88v2y8XZTky18wZtG7PCRA:HxlDd3FaTBpKnBm+sbFhuw", "UBTConnect", "GetServices", "NRFlows.DataScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.setThreadStartName(callContext.id, "App_Services/Services/GetServices");
                return controller.callDataAction("DataActionGetServices", "screenservices/UBTConnect/App_Services/Services/DataActionGetServices", "NZKnRfSoafAYT90tbz0LUw", function(b) {
                    model.variables.getServicesDataAct.dataFetchStatusAttr = b;
                }, function(json) {
                    model.variables.getServicesDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getServicesDataAct.constructor));
                }, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function(json, headers) {
                    OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
                }, callContext, undefined, false).then(function() {
                    OutSystemsDebugger.setThreadStartName(callContext.id, "App_Services/Services/GetServices On After Fetch");
                    controller._onAfterFetch_GetServices$Action(controller.callContext(callContext));

                });

            }, function() {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:88v2y8XZTky18wZtG7PCRA", callContext.id);
                controller.popDebuggerContext(callContext);

            });
        };

        Controller.prototype.dataFetchActionNames = ["getServices$DataActRefresh"];
        // Client Actions
        Controller.prototype._onClick_SaveChanges$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnClick_SaveChanges");
            callContext = controller.callContext(callContext);
            var notRegisteredVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
            var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
            var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
            varBag.callContext = callContext;
            varBag.notRegisteredVar = notRegisteredVar;
            varBag.communicationExceptionVar = communicationExceptionVar;
            varBag.allExceptionsVar = allExceptionsVar;
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:d1NcB7sGm0yd3OjQ7AtXqg:/NRWebFlows.D3SAbq064kmZ1GnTCUyAHw/NodesShownInESpaceTree.FFna2jpTeki2qn5WfVYnxA/ClientActions.d1NcB7sGm0yd3OjQ7AtXqg:meUsZUAuL7KtZAekfdWfOg", "UBTConnect", "OnClick_SaveChanges", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:wh3pp05EpkqqFJqjGBmggA", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                return OS.Flow.executeSequence(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:AudZFZhoJkGWKMFczkEZ6Q", callContext.id) && model.variables.hasChangesVar)) {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:1Zpi+6tnn0id3WHp1hwIrA", callContext.id);
                        // isLoading = True
                        model.variables.isLoadingVar = true;
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:JlZE3U8OskKI44n+_AxHZw", callContext.id);
                        // Execute Action: Service_ConnectServices_ChangeOrder_Bulk
                        model.flush();
                        return controller.service_ConnectServices_ChangeOrder_Bulk$ServerAction(model.variables.getServicesDataAct.currentServicesOut, callContext).then(function() {
                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:JeS0S8sVx0+K7IP1yPn6Xw", callContext.id);
                            // isLoading = False
                            model.variables.isLoadingVar = false;
                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:5gP8H9epHEqQXnWi69DrwA", callContext.id);
                            // Execute Action: FeedbackMessage_AutoClose
                            UBTJavaScriptUtilsController.default.feedbackMessage_AutoClose$Action("", "Your changes were saved.", UBTConnectModel.staticEntities.uBT_MessageType.success, true, "", 0, false, callContext);
                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:YgyctFKUnEa68v25aVwqmQ", callContext.id);
                            // HasChanges = False
                            model.variables.hasChangesVar = false;
                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:2GYJxZeSVEuLJnA_Wc0NYg", callContext.id);
                        });
                    } else {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:LjeenZEqC0Sgiuk9Dk4itQ", callContext.id);
                    }

                });
            }).catch(function(ex) {
                OS.Logger.trace("Services.OnClick_SaveChanges", OS.Exceptions.getMessage(ex), ex.name);
                // Handle Error: NotRegistered
                if (OS.Exceptions.isInstanceOf(ex, OS.Exceptions.Exceptions.NotRegisteredException)) {
                    OS.Logger.error(null, ex);
                    notRegisteredVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                    OutSystemsDebugger.handleException(notRegisteredVar.value.exceptionMessageAttr, callContext.id);
                    return OS.Flow.executeAsyncFlow(function() {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:9CgUFCvHnk+CL6unyvuhJw", callContext.id);
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Nj7sUmxCzkqc95bbTO5H2w", callContext.id);
                        // Raise Error: NotRegistered
                        throw new OS.Exceptions.Exceptions.NotRegisteredException("NotRegistered", notRegisteredVar.value.exceptionMessageAttr);
                    });
                }

                // Handle Error: CommunicationException
                if (OS.Exceptions.isInstanceOf(ex, OS.Exceptions.Exceptions.CommunicationException)) {
                    OS.Logger.error(null, ex);
                    communicationExceptionVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                    OutSystemsDebugger.handleException(communicationExceptionVar.value.exceptionMessageAttr, callContext.id);
                    return OS.Flow.executeAsyncFlow(function() {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:1Tqohquya0OzV5EoWXZ0+Q", callContext.id);
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Cx+0Psptxki_t+mldP1vrg", callContext.id);
                        // isLoading = False
                        model.variables.isLoadingVar = false;
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:3Mv2SCPZ5UWk5khWQua9HA", callContext.id);
                        // Raise Error: BubbleCommunicationException
                        throw new OS.Exceptions.Exceptions.UserException("UBTConnect.BubbleCommunicationException", communicationExceptionVar.value.exceptionMessageAttr);
                    });
                }

                // Handle Error: AllExceptions
                if (!(OS.Exceptions.isSystem(ex))) {
                    OS.Logger.error(null, ex);
                    allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                    OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
                    return OS.Flow.executeAsyncFlow(function() {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:pINg_LPj20ukc+7HwfGJwA", callContext.id);
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:uY3v2qFeR0WA+7po+9eMZA", callContext.id);
                        // isLoading = False
                        model.variables.isLoadingVar = false;
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:yWvPhNKB7UWjTf3ZhPkYoQ", callContext.id);
                        // Raise Error: BubbleGenericException
                        throw new OS.Exceptions.Exceptions.UserException("UBTConnect.BubbleGenericException", allExceptionsVar.value.exceptionMessageAttr);
                    });
                }

                throw ex;
            }).then(function(res) {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:d1NcB7sGm0yd3OjQ7AtXqg", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:d1NcB7sGm0yd3OjQ7AtXqg", callContext.id);
                throw ex;

            });
        };
        Controller.prototype._action_ChangeOrderLocal$Action = function(newOrderIn, oldOrderIn, isFromFavoriteListIn, isToFavoriteListIn, itemIdIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Action_ChangeOrderLocal");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.App_Services.Services.Action_ChangeOrderLocal$vars"))());
            vars.value.newOrderInLocal = newOrderIn;
            vars.value.oldOrderInLocal = oldOrderIn;
            vars.value.isFromFavoriteListInLocal = isFromFavoriteListIn;
            vars.value.isToFavoriteListInLocal = isToFavoriteListIn;
            vars.value.itemIdInLocal = itemIdIn;
            var getAvailableItemVar = new OS.DataTypes.VariableHolder();
            var getReferenceServiceVar = new OS.DataTypes.VariableHolder();
            var getCurrentServiceVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.vars = vars;
            varBag.getAvailableItemVar = getAvailableItemVar;
            varBag.getReferenceServiceVar = getReferenceServiceVar;
            varBag.getCurrentServiceVar = getCurrentServiceVar;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:0UgNKwud6UCKgkN0Jfw8xA:/NRWebFlows.D3SAbq064kmZ1GnTCUyAHw/NodesShownInESpaceTree.FFna2jpTeki2qn5WfVYnxA/ClientActions.0UgNKwud6UCKgkN0Jfw8xA:9Ojkz8HcTK_KUBoxQwtCYw", "UBTConnect", "Action_ChangeOrderLocal", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:DXZghWOH4UitaqGbnoVqBg", callContext.id);
                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:sA+GrVb5BUmsYQLSZKruNQ", callContext.id) && (vars.value.newOrderInLocal === vars.value.oldOrderInLocal))) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:UbLBhRS6606B5jGv668LgQ", callContext.id);
                } else {
                    do {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:4cBMe9xHH06H9BGP719vFQ", callContext.id);
                        // HasChanges = True
                        model.variables.hasChangesVar = true;
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:2b3cAxsiMUSNJFbq6doXqw", callContext.id);
                        // isReorderingFavorites = isFromFavoriteList and isToFavoriteList
                        vars.value.isReorderingFavoritesVar = (vars.value.isFromFavoriteListInLocal && vars.value.isToFavoriteListInLocal);
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:2b3cAxsiMUSNJFbq6doXqw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                        // isRemovingFavorites = isFromFavoriteList and notisToFavoriteList
                        vars.value.isRemovingFavoritesVar = (vars.value.isFromFavoriteListInLocal && !(vars.value.isToFavoriteListInLocal));
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:2b3cAxsiMUSNJFbq6doXqw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
                        // isAddingFavorites = isToFavoriteList and notisFromFavoriteList
                        vars.value.isAddingFavoritesVar = (vars.value.isToFavoriteListInLocal && !(vars.value.isFromFavoriteListInLocal));
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:2b3cAxsiMUSNJFbq6doXqw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
                        // UserId = GetUserId
                        vars.value.userIdVar = OS.BuiltinFunctions.getUserId();
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:2b3cAxsiMUSNJFbq6doXqw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
                        // isUseMovingDown = NewOrder > OldOrder
                        vars.value.isUseMovingDownVar = (vars.value.newOrderInLocal > vars.value.oldOrderInLocal);
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:2b3cAxsiMUSNJFbq6doXqw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "6");
                        // isUseMovingUp = OldOrder > NewOrder
                        vars.value.isUseMovingUpVar = (vars.value.oldOrderInLocal > vars.value.newOrderInLocal);
                        // Adjust for zero based
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:kz6LLCOSsU+mGBiqGOz2Iw", callContext.id);
                        // NewOrder = NewOrder - 1
                        vars.value.newOrderInLocal = (vars.value.newOrderInLocal - 1);
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:kz6LLCOSsU+mGBiqGOz2Iw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                        // OldOrder = OldOrder - 1
                        vars.value.oldOrderInLocal = (vars.value.oldOrderInLocal - 1);
                        if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:AeN9SDVScE2_VmwwiLLwyg", callContext.id) && vars.value.isAddingFavoritesVar)) {
                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:NaruftnFA0+VE5j9wUPEtQ", callContext.id);
                            // Execute Action: GetReferenceService
                            getReferenceServiceVar.value = OS.SystemActions.listFilter(model.variables.referenceServicesVar, function(p) {
                                return (p.idAttr === OS.BuiltinFunctions.textToIdentifier(vars.value.itemIdInLocal));
                            }, callContext);

                            // LocalService
                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:6hp6YggaFEWJRB7rPvq2VQ", callContext.id);
                            // Connect_Service_User.Connect_Service_User.UserId = UserId
                            vars.value.connect_Service_UserVar.connect_Service_UserAttr.userIdAttr = vars.value.userIdVar;
                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:6hp6YggaFEWJRB7rPvq2VQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                            // Connect_Service_User.Connect_Service_User.ConnectServiceId = TextToIdentifier
                            vars.value.connect_Service_UserVar.connect_Service_UserAttr.connectServiceIdAttr = OS.BuiltinFunctions.textToIdentifier(vars.value.itemIdInLocal);
                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:6hp6YggaFEWJRB7rPvq2VQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
                            // Connect_Service_User.Connect_Service_User.Id = NullIdentifier
                            vars.value.connect_Service_UserVar.connect_Service_UserAttr.idAttr = OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.nullIdentifier());
                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:6hp6YggaFEWJRB7rPvq2VQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
                            // Connect_Service_User.Connect_Services = GetReferenceService.FilteredList.Current
                            vars.value.connect_Service_UserVar.connect_ServicesAttr = getReferenceServiceVar.value.filteredListOut.getCurrent(callContext.iterationContext);
                        } else {
                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:hadpvieIvEqYTj8uYoRoww", callContext.id);
                            // Execute Action: GetCurrentService
                            getCurrentServiceVar.value = OS.SystemActions.listIndexOf(model.variables.getServicesDataAct.currentServicesOut, function(p) {
                                return (p.connect_ServicesAttr.idAttr === OS.BuiltinFunctions.textToIdentifier(vars.value.itemIdInLocal));
                            }, callContext);

                            // LocalService
                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:KIVQtXAoLUGE6YxuPjfpLA", callContext.id);
                            // Connect_Service_User = GetServices.CurrentServices[GetCurrentService.Position]
                            vars.value.connect_Service_UserVar = model.variables.getServicesDataAct.currentServicesOut.getItem(getCurrentServiceVar.value.positionOut);
                        }

                        if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:MUHAYmAjoU+O98ymuneeeQ", callContext.id) && vars.value.isRemovingFavoritesVar)) {
                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:jsnLstxaukCauwf1aRNXJQ", callContext.id);
                            // Execute Action: ListRemove
                            OS.SystemActions.listRemove(model.variables.getServicesDataAct.currentServicesOut, vars.value.oldOrderInLocal, callContext);
                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:dStv7I8f+0WseAArdG8DRA", callContext.id);
                            // Execute Action: ListInsert3
                            OS.SystemActions.listInsert(model.variables.getServicesDataAct.availableServicesOut, OS.DataConversion.JSConversions.typeConvertRecord(vars.value.connect_Service_UserVar, new Connect_Services_CSModel.Connect_ServicesRec(), function(source, target) {
                                target = source.connect_ServicesAttr;
                                return target;
                            }), 0, callContext);
                        } else {
                            if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:CPQs1eXQGU6z5+lsMlAXSg", callContext.id) && vars.value.isReorderingFavoritesVar)) {
                                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ho0zyzBV30+zvxSg8TyJaw", callContext.id);
                                // Execute Action: ListRemove2
                                OS.SystemActions.listRemove(model.variables.getServicesDataAct.currentServicesOut, vars.value.oldOrderInLocal, callContext);
                            } else {
                                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:9mu8gKi6x0GiwNgPtEP2Fw", callContext.id) && vars.value.isAddingFavoritesVar)) {
                                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:z8_XXgQXKUO2p0NArureBg", callContext.id);
                                    // Execute Action: GetAvailableItem
                                    getAvailableItemVar.value = OS.SystemActions.listIndexOf(model.variables.getServicesDataAct.availableServicesOut, function(p) {
                                        return (p.idAttr === OS.BuiltinFunctions.textToIdentifier(vars.value.itemIdInLocal));
                                    }, callContext);

                                    if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:E+zi0qMTkU2uuPgeY397zQ", callContext.id) && ((getAvailableItemVar.value.positionOut) !== (-1)))) {
                                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:LCytXRNiTkGamiEKFS8k1g", callContext.id);
                                        // Execute Action: ListRemove3
                                        OS.SystemActions.listRemove(model.variables.getServicesDataAct.availableServicesOut, getAvailableItemVar.value.positionOut, callContext);
                                    }

                                } else {
                                    break;
                                }

                            }

                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:fR7dlvWDDUq_aGNLHM5fMg", callContext.id);
                            // Execute Action: ListInsert2
                            OS.SystemActions.listInsert(model.variables.getServicesDataAct.currentServicesOut, vars.value.connect_Service_UserVar, vars.value.newOrderInLocal, callContext);
                        }

                    } while (false);
                    // Foreach GetServices.CurrentServices
                    callContext.iterationContext.registerIterationStart(model.variables.getServicesDataAct.currentServicesOut);
                    try {
                        var currentServicesIterator = callContext.iterationContext.getIterator(model.variables.getServicesDataAct.currentServicesOut);
                        var currentServicesIndex = 0;
                        while ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:n0w_VMlML0SSl6rPfoF5sw", callContext.id) && (currentServicesIndex < model.variables.getServicesDataAct.currentServicesOut.length))) {
                            currentServicesIterator.currentRowNumber = currentServicesIndex;
                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:aj4XtJCAd0SUBLbmbo1Xeg", callContext.id);
                            // GetServices.CurrentServices.Current.Connect_Service_User.Order = GetServices.CurrentServices.CurrentRowNumber + 1
                            model.variables.getServicesDataAct.currentServicesOut.getItem(currentServicesIndex.valueOf()).connect_Service_UserAttr.orderAttr = (model.variables.getServicesDataAct.currentServicesOut.getCurrentRowNumber(callContext.iterationContext) + 1);
                            currentServicesIndex++;
                        }

                    } finally {
                        callContext.iterationContext.registerIterationEnd(model.variables.getServicesDataAct.currentServicesOut);
                    }

                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:AdwPQq0h7k62E2KS1_cXVQ", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:0UgNKwud6UCKgkN0Jfw8xA", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.App_Services.Services.Action_ChangeOrderLocal$vars", [{
            name: "NewOrder",
            attrName: "newOrderInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Integer,
            defaultValue: function() {
                return 0;
            }
        }, {
            name: "OldOrder",
            attrName: "oldOrderInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Integer,
            defaultValue: function() {
                return 0;
            }
        }, {
            name: "isFromFavoriteList",
            attrName: "isFromFavoriteListInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }, {
            name: "isToFavoriteList",
            attrName: "isToFavoriteListInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }, {
            name: "ItemId",
            attrName: "itemIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }, {
            name: "isReorderingFavorites",
            attrName: "isReorderingFavoritesVar",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }, {
            name: "isRemovingFavorites",
            attrName: "isRemovingFavoritesVar",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }, {
            name: "isAddingFavorites",
            attrName: "isAddingFavoritesVar",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }, {
            name: "isUseMovingDown",
            attrName: "isUseMovingDownVar",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }, {
            name: "isUseMovingUp",
            attrName: "isUseMovingUpVar",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }, {
            name: "UserId",
            attrName: "userIdVar",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Integer,
            defaultValue: function() {
                return 0;
            }
        }, {
            name: "Connect_Service_User",
            attrName: "connect_Service_UserVar",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Record,
            defaultValue: function() {
                return new UBTConnectModel.Connect_ServicesConnect_Service_UserRecord();
            },
            complexType: UBTConnectModel.Connect_ServicesConnect_Service_UserRecord
        }]);
        Controller.prototype._onAfterFetch_GetServices$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnAfterFetch_GetServices");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:oghNNU8v0UeS1qeigUQLqg:/NRWebFlows.D3SAbq064kmZ1GnTCUyAHw/NodesShownInESpaceTree.FFna2jpTeki2qn5WfVYnxA/ClientActions.oghNNU8v0UeS1qeigUQLqg:uIYeU90BEtn7ORfXgSLo6Q", "UBTConnect", "OnAfterFetch_GetServices", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:s7ZvvKREj0Sb5MNNWkymBA", callContext.id);
                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:l0_TIRXiKEuenRxIUNbQrA", callContext.id) && model.variables.referenceServicesVar.isEmpty)) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ITsx3kDngkKGbZi82m5rJQ", callContext.id);
                    // Execute Action: ListAppendAll
                    OS.SystemActions.listAppendAll(model.variables.referenceServicesVar, model.variables.getServicesDataAct.availableServicesOut, callContext);
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:DW3w75HigEiN7W5oJqgFog", callContext.id);
                    // Execute Action: ListAppendAll2
                    OS.SystemActions.listAppendAll(model.variables.referenceServicesVar, OS.DataConversion.JSConversions.typeConvertRecordList(model.variables.getServicesDataAct.currentServicesOut, new UBTConnectModel.Connect_ServicesList(), function(source, target) {
                        target = source.connect_ServicesAttr;
                        return target;
                    }), callContext);
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Ltrw3JOH1EKkjVwT0DW8yw", callContext.id);
                } else {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:h+3XLHcINEKJlBfFsE6ffw", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:oghNNU8v0UeS1qeigUQLqg", callContext.id);
            }

        };
        Controller.prototype._handler_SortableListOnDragEnd$Action = function(fromIdIn, toIdIn, oldIndexIn, newIndexIn, itemIdIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_SortableListOnDragEnd");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.App_Services.Services.Handler_SortableListOnDragEnd$vars"))());
            vars.value.fromIdInLocal = fromIdIn;
            vars.value.toIdInLocal = toIdIn;
            vars.value.oldIndexInLocal = oldIndexIn;
            vars.value.newIndexInLocal = newIndexIn;
            vars.value.itemIdInLocal = itemIdIn;
            var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
            var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
            var notRegisteredVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
            varBag.callContext = callContext;
            varBag.vars = vars;
            varBag.communicationExceptionVar = communicationExceptionVar;
            varBag.allExceptionsVar = allExceptionsVar;
            varBag.notRegisteredVar = notRegisteredVar;
            try {
                try {
                    OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:CgJmylynJkirfGuDmCnD+g:/NRWebFlows.D3SAbq064kmZ1GnTCUyAHw/NodesShownInESpaceTree.FFna2jpTeki2qn5WfVYnxA/ClientActions.CgJmylynJkirfGuDmCnD+g:e8rZgLXYGg6rHf97nzohCA", "UBTConnect", "Handler_SortableListOnDragEnd", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:XHRzERPPNEqO6d2T4AV4hw", callContext.id);
                    if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:kqnym63ix0GRPHVezBMLhg", callContext.id) && (vars.value.oldIndexInLocal === vars.value.newIndexInLocal))) {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:djdoo2hXCUaxVDFfRz4M_g", callContext.id);
                    } else {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:uLSWnIWKMkSgyu2MlGcfmw", callContext.id);
                        // Execute Action: Action_ChangeOrderLocal
                        controller._action_ChangeOrderLocal$Action(vars.value.newIndexInLocal, vars.value.oldIndexInLocal, (vars.value.fromIdInLocal === idService.getId("FavouriteList")), (vars.value.toIdInLocal === idService.getId("FavouriteList")), vars.value.itemIdInLocal, callContext);
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:JkCT0y+EO0mkuViEJwsCrg", callContext.id);
                    }

                } catch (ex) {
                    (function() {
                        OS.Logger.trace("Services.Handler_SortableListOnDragEnd", OS.Exceptions.getMessage(ex), ex.name);
                        // Handle Error: CommunicationException
                        if (OS.Exceptions.isInstanceOf(ex, OS.Exceptions.Exceptions.CommunicationException)) {
                            OS.Logger.error(null, ex);
                            communicationExceptionVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                            OutSystemsDebugger.handleException(communicationExceptionVar.value.exceptionMessageAttr, callContext.id);
                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:1RnLKF4nGUWAqglypbRbDA", callContext.id);
                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:xXSnvJdMOUqV8EoBVyYl1Q", callContext.id);
                            // isLoading = False
                            model.variables.isLoadingVar = false;
                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:X7YlRrEsg0W4vKAjdUEVbg", callContext.id);
                            // Raise Error: BubbleCommunicationException
                            throw new OS.Exceptions.Exceptions.UserException("UBTConnect.BubbleCommunicationException", communicationExceptionVar.value.exceptionMessageAttr);
                        }

                        // Handle Error: NotRegistered
                        if (OS.Exceptions.isInstanceOf(ex, OS.Exceptions.Exceptions.NotRegisteredException)) {
                            OS.Logger.error(null, ex);
                            notRegisteredVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                            OutSystemsDebugger.handleException(notRegisteredVar.value.exceptionMessageAttr, callContext.id);
                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:h3PT+2dspEOj2avnM2dwdA", callContext.id);
                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:cOLZq+NO20iBCGYWa__+xg", callContext.id);
                            // Raise Error: NotRegistered
                            throw new OS.Exceptions.Exceptions.NotRegisteredException("NotRegistered", notRegisteredVar.value.exceptionMessageAttr);
                        }

                        // Handle Error: AllExceptions
                        if (!(OS.Exceptions.isSystem(ex))) {
                            OS.Logger.error(null, ex);
                            allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                            OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:QgOxtzHVgU623GSHLC6nVA", callContext.id);
                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:nMxzVWw50EimU2ou25DTuA", callContext.id);
                            // isLoading = False
                            model.variables.isLoadingVar = false;
                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:SU27LwAKdk679PY2KCVb8Q", callContext.id);
                            // Raise Error: BubbleGenericException
                            throw new OS.Exceptions.Exceptions.UserException("UBTConnect.BubbleGenericException", allExceptionsVar.value.exceptionMessageAttr);
                        }

                        throw ex;
                    })();
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:CgJmylynJkirfGuDmCnD+g", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.App_Services.Services.Handler_SortableListOnDragEnd$vars", [{
            name: "FromId",
            attrName: "fromIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }, {
            name: "ToId",
            attrName: "toIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }, {
            name: "OldIndex",
            attrName: "oldIndexInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Integer,
            defaultValue: function() {
                return 0;
            }
        }, {
            name: "NewIndex",
            attrName: "newIndexInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Integer,
            defaultValue: function() {
                return 0;
            }
        }, {
            name: "ItemId",
            attrName: "itemIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);

        Controller.prototype.onClick_SaveChanges$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onClick_SaveChanges$Action, callContext);

        };
        Controller.prototype.action_ChangeOrderLocal$Action = function(newOrderIn, oldOrderIn, isFromFavoriteListIn, isToFavoriteListIn, itemIdIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._action_ChangeOrderLocal$Action, callContext, newOrderIn, oldOrderIn, isFromFavoriteListIn, isToFavoriteListIn, itemIdIn);

        };
        Controller.prototype.onAfterFetch_GetServices$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onAfterFetch_GetServices$Action, callContext);

        };
        Controller.prototype.handler_SortableListOnDragEnd$Action = function(fromIdIn, toIdIn, oldIndexIn, newIndexIn, itemIdIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_SortableListOnDragEnd$Action, callContext, fromIdIn, toIdIn, oldIndexIn, newIndexIn, itemIdIn);

        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:D3SAbq064kmZ1GnTCUyAHw:/NRWebFlows.D3SAbq064kmZ1GnTCUyAHw:wxgQofjWk77uQoFJpaZvow", "UBTConnect", "App_Services", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:FFna2jpTeki2qn5WfVYnxA:/NRWebFlows.D3SAbq064kmZ1GnTCUyAHw/NodesShownInESpaceTree.FFna2jpTeki2qn5WfVYnxA:ou8yDHEqDlO_d72lm90Vyg", "UBTConnect", "Services", "NRNodes.WebScreen", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:FFna2jpTeki2qn5WfVYnxA", callContext.id);
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:D3SAbq064kmZ1GnTCUyAHw", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = null;
        Controller.prototype.onReadyEventHandler = null;
        Controller.prototype.onRenderEventHandler = null;
        Controller.prototype.onDestroyEventHandler = null;
        Controller.prototype.onParametersChangedEventHandler = null;
        Controller.prototype.handleError = function(ex) {
            return _flow_UBTConnect_App_ServicesController.default.handleError(ex, this.callContext());
        };
        Controller.checkPermissions = function() {
            OS.RolesInfo.checkRegistered();
        };
        Controller.prototype.getDefaultTimeout = function() {
            return UBTConnectController.default.defaultTimeout;
        };
        return Controller;
    })(OS.Controller.BaseViewController);
    return new OS.Controller.ControllerFactory(Controller, UBTConnectLanguageResources);
});

define("UBTConnect.App_Services.Services.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "9CgUFCvHnk+CL6unyvuhJw": {
            getter: function(varBag, idService) {
                return varBag.notRegisteredVar.value;
            }
        },
        "1Tqohquya0OzV5EoWXZ0+Q": {
            getter: function(varBag, idService) {
                return varBag.communicationExceptionVar.value;
            }
        },
        "pINg_LPj20ukc+7HwfGJwA": {
            getter: function(varBag, idService) {
                return varBag.allExceptionsVar.value;
            }
        },
        "whD2UjYtD0aC0uR3e0m+2w": {
            getter: function(varBag, idService) {
                return varBag.vars.value.isReorderingFavoritesVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "lHwd4IxP50iUdnylmf9erQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.isRemovingFavoritesVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "dxqPk9G_MU+l9IQNsYyo1g": {
            getter: function(varBag, idService) {
                return varBag.vars.value.isAddingFavoritesVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "bUhlzqp0e0io_Wvkg9hmwQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.isUseMovingDownVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "0HNRBasLS0uZD_f+ns_W+Q": {
            getter: function(varBag, idService) {
                return varBag.vars.value.isUseMovingUpVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "EVNWqGlvDUOdYpMc8jii4w": {
            getter: function(varBag, idService) {
                return varBag.vars.value.userIdVar;
            },
            dataType: OS.DataTypes.DataTypes.Integer
        },
        "rGJ9+BCjyUmBFofJmnnpGA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.connect_Service_UserVar;
            }
        },
        "SvUzN2EUb0O9+V1sxV+umg": {
            getter: function(varBag, idService) {
                return varBag.vars.value.newOrderInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Integer
        },
        "rHGopLgZNUimbmEAGmxnwA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.oldOrderInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Integer
        },
        "pAj5bylV0kmwGN576BWUBQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.isFromFavoriteListInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "Nc7XbD4gWUuhU1EZhslU4Q": {
            getter: function(varBag, idService) {
                return varBag.vars.value.isToFavoriteListInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "U50xzMzmdEuakAT+ckxicQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.itemIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "z8_XXgQXKUO2p0NArureBg": {
            getter: function(varBag, idService) {
                return varBag.getAvailableItemVar.value;
            }
        },
        "NaruftnFA0+VE5j9wUPEtQ": {
            getter: function(varBag, idService) {
                return varBag.getReferenceServiceVar.value;
            }
        },
        "hadpvieIvEqYTj8uYoRoww": {
            getter: function(varBag, idService) {
                return varBag.getCurrentServiceVar.value;
            }
        },
        "zgA+vxrNf0OJk3XS_zkcAA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.fromIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "TtA2Zghf2EGxm0hDxrYRVg": {
            getter: function(varBag, idService) {
                return varBag.vars.value.toIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "JU0RwwEVMkCkJXQFTfee+g": {
            getter: function(varBag, idService) {
                return varBag.vars.value.oldIndexInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Integer
        },
        "l5i3SFOJ2kqsDNGDNvbJnQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.newIndexInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Integer
        },
        "VKGOkz63zUK6J2H71wMZig": {
            getter: function(varBag, idService) {
                return varBag.vars.value.itemIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "1RnLKF4nGUWAqglypbRbDA": {
            getter: function(varBag, idService) {
                return varBag.communicationExceptionVar.value;
            }
        },
        "QgOxtzHVgU623GSHLC6nVA": {
            getter: function(varBag, idService) {
                return varBag.allExceptionsVar.value;
            }
        },
        "h3PT+2dspEOj2avnM2dwdA": {
            getter: function(varBag, idService) {
                return varBag.notRegisteredVar.value;
            }
        },
        "gGYLrXTwBk2BwQM_LUATrw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isLoadingVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "4pMOcK8Z0UmsDNxAntcSRQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.referenceServicesVar;
            }
        },
        "jvjXdL+hak2tnmOCNVAAzQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.hasChangesVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "88v2y8XZTky18wZtG7PCRA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.getServicesDataAct;
            }
        },
        "kOkk77hDvUaKwDxw2+ikDw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_Header_Title"));
                })(varBag.model, idService);
            }
        },
        "ewYY4KJilE+XA_ijiHMoeg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_Header_Right"));
                })(varBag.model, idService);
            }
        },
        "0FXj6NadU0athSEjM4Tl4w": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HeaderContent"));
                })(varBag.model, idService);
            }
        },
        "fbMlvu27MUu+UTXjiLqkLQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "BzYhZuzOe0yoIsI8JQ6lxw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("ContentWrapper"));
                })(varBag.model, idService);
            }
        },
        "xzYu3e7pQEW05P3MCIKZPw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "7a6MQd71qUSIi2gWbySmPA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_LoadingSection"));
                })(varBag.model, idService);
            }
        },
        "gD+U1dre6Ee3n65PWp+m3g": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("ListPlaceholder"));
                })(varBag.model, idService);
            }
        },
        "3L71rphyKEKb4IFBKXly1w": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Favourites2"));
                })(varBag.model, idService);
            }
        },
        "oDak1tLYlkKAm+G9NCjM2Q": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "X8_dmjd_30KHDsRc7Q3jXw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("FavouriteList"));
                })(varBag.model, idService);
            }
        },
        "eGXmEUNnD0ep56ZxABXbMQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "a_mkQMmdbk+adzPoZw7t7w": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Left"));
                })(varBag.model, idService);
            }
        },
        "lwkBwDPE4EGM9Vgb0Wa0mg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Item"));
                })(varBag.model, idService);
            }
        },
        "XYkn29oLYU2DsBMudZ7eVg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Left"));
                })(varBag.model, idService);
            }
        },
        "Vxe8q_0aV0e63azN6y5dZQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "Rv+ckZVoHEa02hIqnxSppg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Right"));
                })(varBag.model, idService);
            }
        },
        "zUdxCABq2UGa7R_zdcO7uw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Icon"));
                })(varBag.model, idService);
            }
        },
        "1QsVuMP1nUSdQAybkx_+WQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Right"));
                })(varBag.model, idService);
            }
        },
        "nzkXU9v830mbZ40vcunA7A": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("IsMandatory2"));
                })(varBag.model, idService);
            }
        },
        "4Zmj9WvoZkiJd0fAsD1tCg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("ListPlaceholder"));
                })(varBag.model, idService);
            }
        },
        "_WVU2+OzEUWjWhhjWGSkHg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Suggestions2"));
                })(varBag.model, idService);
            }
        },
        "rk55bnDgBkmzW06YiVApwg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "pBdDA4gQvUykvI5qeVH9VA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("SuggestionList"));
                })(varBag.model, idService);
            }
        },
        "vZaUOe_WkkCPwb6rEdlfRg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Item"));
                })(varBag.model, idService);
            }
        },
        "GBB1NP0S802YxN2d3DvHMg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "oFQ462zfpkKFigdm1LdArg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Left"));
                })(varBag.model, idService);
            }
        },
        "0m2SyO2950GLi7KwW4Rv1Q": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "2I6vsZhMYUmSp5R3Ruq3Lg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Middle"));
                })(varBag.model, idService);
            }
        },
        "Ih1nYWdPgUG1yZ6L3vZ09w": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Icon"));
                })(varBag.model, idService);
            }
        },
        "XEpEIE+Jh0Knf3TwdvQA5w": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Right"));
                })(varBag.model, idService);
            }
        },
        "PwMcwVo2Qk+Q6iwjh0rLHA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "oUueEdAsmEumO32BNkxDIA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "XXjjgzPOZECZs_SG7qNIcQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Button"));
                })(varBag.model, idService);
            }
        },
        "_1Tcxz9VGEmYsEAZrfJWvw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Bottom"));
                })(varBag.model, idService);
            }
        },
        "r1ed3oB3R0iYFAiwz10c9Q": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_CommonUI_Inside_Layout"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});