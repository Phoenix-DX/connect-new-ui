define("Connect2_OrbitMobile_MUI.LDM_Blocks.EventCard_Guests.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_IS.model", "Connect2_LegacyShared.controller", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "OutSystemsUI_2_23.controller", "Connect2_LegacyShared.Widgets.OverlappingImages.mvc$model", "Connect2_LegacyShared.Utility.Result_Item_Image.mvc$model", "Connect2_LegacyShared.Reusable.Person_Contact_Options.mvc$model", "Connect2_OrbitMobile_MUI.controller$BuildGuestString", "Connect2_OrbitMobile_MUI.controller$ValidateBottomBorderOnListItem", "Connect2_OrbitMobile_IS.model$CalendarGuestItemRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "Connect2_OrbitMobile_MUI.model$CalendarGuestItemList", "Connect2_LegacyShared.controller$FlipHouseholdName", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_LegacyShared", "UBTConnect_Utils.model$ContactByPhonePopupDataRec", "Connect2_OrbitMobile_MUI.referencesHealth$UBTConnect_Utils", "UBTConnect_Utils.model$ContactPopupDataRec", "UBTConnect_Utils.controller$IsFreeSubscriptionPlan", "UBTConnect_Utils.controller$IsRegionalSubscriptionPlan", "Connect2_OrbitMobile_MUI.model$CalendarGuestItemExtList", "Connect2_OrbitMobile_MUI.model$HouseholdCarouselServerItemList", "Connect2_OrbitMobile_MUI.controller$CarouselFilteredEventResults", "Connect2_OrbitMobile_IS.model$GetTimezoneResponseRec", "OutSystemsUI_2_23.controller$GetNetworkStatus", "Connect2_OrbitMobile_MUI.referencesHealth$OutSystemsUI_2_23", "UBTConnect_Utils.model$UI_ContactByMessage_WrapperDataRec"], function(OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_ISModel, Connect2_LegacySharedController, UBTConnect_UtilsModel, UBTConnect_UtilsController, OutSystemsUI_2_23Controller, Connect2_LegacyShared_Widgets_OverlappingImages_mvcModel, Connect2_LegacyShared_Utility_Result_Item_Image_mvcModel, Connect2_LegacyShared_Reusable_Person_Contact_Options_mvcModel) {
    var OS = OutSystems.Internal;


    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("IsExpanded", "isExpandedVar", "IsExpanded", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("Guests", "guestsVar", "Guests", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.CalendarGuestItemList());
                }, false, Connect2_OrbitMobile_MUIModel.CalendarGuestItemList),
                this.attr("In_GuestCount", "in_GuestCountIn", "In_GuestCount", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_in_GuestCountInDataFetchStatus", "_in_GuestCountInDataFetchStatus", "_in_GuestCountInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_Guests", "in_GuestsIn", "In_Guests", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.CalendarGuestItemList());
                }, false, Connect2_OrbitMobile_MUIModel.CalendarGuestItemList),
                this.attr("_in_GuestsInDataFetchStatus", "_in_GuestsInDataFetchStatus", "_in_GuestsInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_IsExpandable", "in_IsExpandableIn", "In_IsExpandable", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("_in_IsExpandableInDataFetchStatus", "_in_IsExpandableInDataFetchStatus", "_in_IsExpandableInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_RightToLeft", "in_RightToLeftIn", "In_RightToLeft", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("_in_RightToLeftInDataFetchStatus", "_in_RightToLeftInDataFetchStatus", "_in_RightToLeftInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
                    Model._hasValidationWidgetsValue = ((Connect2_LegacyShared_Widgets_OverlappingImages_mvcModel.hasValidationWidgets || Connect2_LegacyShared_Utility_Result_Item_Image_mvcModel.hasValidationWidgets) || Connect2_LegacyShared_Reusable_Person_Contact_Options_mvcModel.hasValidationWidgets);
                }

                return Model._hasValidationWidgetsValue;
            }
        });

        Model.prototype.setInputs = function(inputs) {
            if ("In_GuestCount" in inputs) {
                this.variables.in_GuestCountIn = inputs.In_GuestCount;
                if ("_in_GuestCountInDataFetchStatus" in inputs) {
                    this.variables._in_GuestCountInDataFetchStatus = inputs._in_GuestCountInDataFetchStatus;
                }

            }

            if ("In_Guests" in inputs) {
                this.variables.in_GuestsIn = inputs.In_Guests;
                if ("_in_GuestsInDataFetchStatus" in inputs) {
                    this.variables._in_GuestsInDataFetchStatus = inputs._in_GuestsInDataFetchStatus;
                }

            }

            if ("In_IsExpandable" in inputs) {
                this.variables.in_IsExpandableIn = inputs.In_IsExpandable;
                if ("_in_IsExpandableInDataFetchStatus" in inputs) {
                    this.variables._in_IsExpandableInDataFetchStatus = inputs._in_IsExpandableInDataFetchStatus;
                }

            }

            if ("In_RightToLeft" in inputs) {
                this.variables.in_RightToLeftIn = inputs.In_RightToLeft;
                if ("_in_RightToLeftInDataFetchStatus" in inputs) {
                    this.variables._in_RightToLeftInDataFetchStatus = inputs._in_RightToLeftInDataFetchStatus;
                }

            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "LDM_Blocks.EventCard_Guests");
});
define("Connect2_OrbitMobile_MUI.LDM_Blocks.EventCard_Guests.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_IS.model", "Connect2_LegacyShared.controller", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "OutSystemsUI_2_23.controller", "react", "OutSystems/ReactView/Main", "Connect2_OrbitMobile_MUI.LDM_Blocks.EventCard_Guests.mvc$model", "Connect2_OrbitMobile_MUI.LDM_Blocks.EventCard_Guests.mvc$controller", "Connect2_OrbitMobile_MUI.clientVariables", "OutSystems/ReactWidgets/Main", "Connect2_LegacyShared.Widgets.OverlappingImages.mvc$view", "Connect2_LegacyShared.Utility.Result_Item_Image.mvc$view", "Connect2_LegacyShared.Reusable.Person_Contact_Options.mvc$view", "Connect2_OrbitMobile_MUI.controller$BuildGuestString", "Connect2_OrbitMobile_MUI.controller$ValidateBottomBorderOnListItem", "Connect2_OrbitMobile_IS.model$CalendarGuestItemRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "Connect2_OrbitMobile_MUI.model$CalendarGuestItemList", "Connect2_LegacyShared.controller$FlipHouseholdName", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_LegacyShared", "UBTConnect_Utils.model$ContactByPhonePopupDataRec", "Connect2_OrbitMobile_MUI.referencesHealth$UBTConnect_Utils", "UBTConnect_Utils.model$ContactPopupDataRec", "UBTConnect_Utils.controller$IsFreeSubscriptionPlan", "UBTConnect_Utils.controller$IsRegionalSubscriptionPlan", "Connect2_OrbitMobile_MUI.model$CalendarGuestItemExtList", "Connect2_OrbitMobile_MUI.model$HouseholdCarouselServerItemList", "Connect2_OrbitMobile_MUI.controller$CarouselFilteredEventResults", "Connect2_OrbitMobile_IS.model$GetTimezoneResponseRec", "OutSystemsUI_2_23.controller$GetNetworkStatus", "Connect2_OrbitMobile_MUI.referencesHealth$OutSystemsUI_2_23", "UBTConnect_Utils.model$UI_ContactByMessage_WrapperDataRec"], function(OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_ISModel, Connect2_LegacySharedController, UBTConnect_UtilsModel, UBTConnect_UtilsController, OutSystemsUI_2_23Controller, React, OSView, Connect2_OrbitMobile_MUI_LDM_Blocks_EventCard_Guests_mvc_model, Connect2_OrbitMobile_MUI_LDM_Blocks_EventCard_Guests_mvc_controller, Connect2_OrbitMobile_MUIClientVariables, OSWidgets, Connect2_LegacyShared_Widgets_OverlappingImages_mvc_view, Connect2_LegacyShared_Utility_Result_Item_Image_mvc_view, Connect2_LegacyShared_Reusable_Person_Contact_Options_mvc_view) {
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
        View.displayName = "LDM_Blocks.EventCard_Guests";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [Connect2_LegacyShared_Widgets_OverlappingImages_mvc_view, Connect2_LegacyShared_Utility_Result_Item_Image_mvc_view, Connect2_LegacyShared_Reusable_Person_Contact_Options_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return Connect2_OrbitMobile_MUI_LDM_Blocks_EventCard_Guests_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return Connect2_OrbitMobile_MUI_LDM_Blocks_EventCard_Guests_mvc_controller;
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
                animate: true,
                visible: model.variables.in_IsExpandableIn,
                _idProps: {
                    service: idService,
                    uuid: "0"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_IsExpandableInDataFetchStatus)
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "full-width inline-flex-center-vertical flex-direction-row flex-space-between",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "inline-flex-center-vertical flex-direction-row",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "2"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: true,
                visible: ((model.variables.in_GuestCountIn) !== ("")),
                _idProps: {
                    service: idService,
                    uuid: "3"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_GuestCountInDataFetchStatus)
            }, React.createElement(OSWidgets.Image, {
                image: OS.Navigation.VersionedURL.getVersionedUrl("img/Connect2_OrbitMobile_MUI.event_people_24px.svg"),
                type: /*Static*/ 0,
                _idProps: {
                    service: idService,
                    uuid: "4"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: true,
                style: "text-no-wrap margin-left-s",
                visible: ((model.variables.in_GuestCountIn) !== ("")),
                _idProps: {
                    service: idService,
                    uuid: "5"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_GuestCountInDataFetchStatus)
            }, React.createElement(OSWidgets.Expression, {
                value: model.getCachedValue(idService.getId("0svzm3fV0k+wF6kDJRq40g.Value"), function() {
                    return OutSystemsDebugger.handleFunctionCall(function() {
                        return Connect2_OrbitMobile_MUIController.default.buildGuestString$Action(model.variables.in_GuestCountIn, callContext).out_GuestCountOut;
                    }, OS.DataTypes.DataTypes.Text, callContext.id);
                }, function() {
                    return model.variables.in_GuestCountIn;
                }),
                _idProps: {
                    service: idService,
                    uuid: "6"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_GuestCountInDataFetchStatus)
            }))), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedEvents: {
                    onClick: function() {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);

                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "LDM_Blocks/EventCard_Guests/Container onclick");
                            controller.toggleGuestList$Action(controller.callContext(eventHandlerContext));
                        }, function() {
                            controller.popDebuggerContext(eventHandlerContext);
                        });

                        ;
                    }
                },
                style: model.getCachedValue(idService.getId("mveOIBpTtE+f3wRjQYA9YA.Style"), function() {
                    return ("flex-center-all" + ((model.variables.in_RightToLeftIn) ? ("") : (" text-align-right")));
                }, function() {
                    return model.variables.in_RightToLeftIn;
                }),
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "7"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_RightToLeftInDataFetchStatus)
            }, React.createElement(Connect2_LegacyShared_Widgets_OverlappingImages_mvc_view, {
                inputs: {
                    In_ShowRemainingCount: true,
                    In_IsRTL: model.variables.in_RightToLeftIn,
                    _in_IsRTLInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_RightToLeftInDataFetchStatus),
                    In_OverlapPercent: 40,
                    In_ImageURLs: model.getCachedValue(idService.getId("FJ4kzHa7Y0ShXDXbfZazag.In_ImageURLs"), function() {
                        return OS.DataConversion.JSConversions.typeConvertRecordList(model.variables.guestsVar, new OS.DataTypes.TextList(), function(source, target) {
                            target = source.signedImagePathAttr;
                            return target;
                        });
                    }, function() {
                        return model.variables.guestsVar;
                    }),
                    In_Diameter: "max(30px, 7vw)",
                    In_MaxDisplayImage: 5
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
                    alias: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                _dependencies: []
            }), $if(!(model.variables.guestsVar.isEmpty), false, this, function() {
                return [$if(model.variables.isExpandedVar, false, this, function() {
                    return [React.createElement(OSWidgets.Icon, {
                        icon: "angle-up",
                        iconSize: /*Twotimes*/ 1,
                        style: "icon padding5",
                        visible: true,
                        _idProps: {
                            service: idService,
                            uuid: "9"
                        },
                        _widgetRecordProvider: widgetsRecordProvider
                    })];
                }, function() {
                    return [React.createElement(OSWidgets.Icon, {
                        icon: "angle-down",
                        iconSize: /*Twotimes*/ 1,
                        style: "icon padding5",
                        visible: true,
                        _idProps: {
                            service: idService,
                            uuid: "10"
                        },
                        _widgetRecordProvider: widgetsRecordProvider
                    })];
                })];
            }, function() {
                return [];
            }))), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: true,
                visible: model.variables.isExpandedVar,
                _idProps: {
                    service: idService,
                    uuid: "11"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.List, {
                animateItems: true,
                extendedProperties: {
                    "disable-virtualization": "True"
                },
                gridProperties: {
                    classes: "OSFillParent"
                },
                mode: /*Default*/ 0,
                source: model.variables.guestsVar,
                style: "list list-group",
                tag: "div",
                _idProps: {
                    service: idService,
                    name: "List_Guests"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                placeholders: {
                    content: new IteratorPlaceholderContent(function(idService, callContext) {
                        return [React.createElement(Connect2_LegacyShared_Utility_Result_Item_Image_mvc_view, {
                            inputs: {
                                In_HasBorder: model.getCachedValue(idService.getId("List_Item_Guest.In_HasBorder"), function() {
                                    return OutSystemsDebugger.handleFunctionCall(function() {
                                        return Connect2_OrbitMobile_MUIController.default.validateBottomBorderOnListItem$Action(model.variables.guestsVar.getCurrentRowNumber(callContext.iterationContext), model.variables.guestsVar.length, callContext).out_HasBorderOut;
                                    }, OS.DataTypes.DataTypes.Boolean, callContext.id);
                                }, function() {
                                    return model.variables.guestsVar.getCurrentRowNumber(callContext.iterationContext);
                                }, function() {
                                    return model.variables.guestsVar.length;
                                }),
                                In_ShowTag: false,
                                In_ShowDescription: true,
                                In_IsRoundImage: true,
                                In_HasAction: true,
                                In_HasPadding: true,
                                In_SignedURL: model.variables.guestsVar.getCurrent(callContext.iterationContext).signedImagePathAttr
                            },
                            events: {
                                _handleError: function(ex) {
                                    controller.handleError(ex);
                                },
                                onClick_Item$Action: function() {
                                    return Promise.resolve().then(function() {
                                        var eventHandlerContext = callContext.clone();
                                        return OS.Flow.tryFinally(function() {
                                            var varBag = {};
                                            controller.pushDebuggerContext(eventHandlerContext);

                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Utility/Result_Item_Image OnClick_Item");
                                            return controller.onHandle_HouseholdClicked$Action(model.variables.guestsVar.getCurrent(callContext.iterationContext).householderIdAttr, model.variables.guestsVar.getCurrent(callContext.iterationContext).householderNameAttr, model.variables.guestsVar.getCurrentRowNumber(callContext.iterationContext), model.variables.guestsVar.getCurrent(callContext.iterationContext).recordDisabledAttr, model.variables.guestsVar.getCurrent(callContext.iterationContext).householdDisplayAttr, controller.callContext(eventHandlerContext));
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
                                name: "List_Item_Guest",
                                alias: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                imagePlaceholder: PlaceholderContent.Empty,
                                title_Placeholder: new PlaceholderContent(function() {
                                    return [React.createElement(OSWidgets.Expression, {
                                        style: "bold font-size-0-9em",
                                        value: model.variables.guestsVar.getCurrent(callContext.iterationContext).householderNameAttr,
                                        _idProps: {
                                            service: idService,
                                            name: "HouseholderName"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    })];
                                }),
                                description_Placeholder: new PlaceholderContent(function() {
                                    return [React.createElement(OSWidgets.Expression, {
                                        style: "font-size-0-75em",
                                        value: ((model.variables.guestsVar.getCurrent(callContext.iterationContext).localityNameAttr + ", ") + model.variables.guestsVar.getCurrent(callContext.iterationContext).countryCodeAttr),
                                        _idProps: {
                                            service: idService,
                                            name: "Guest_Locality"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    })];
                                }),
                                tag_Placeholder: PlaceholderContent.Empty,
                                result_Item_Placeholder: new PlaceholderContent(function() {
                                    return [React.createElement(Connect2_LegacyShared_Reusable_Person_Contact_Options_mvc_view, {
                                        inputs: {
                                            EmailAddress: model.variables.guestsVar.getCurrent(callContext.iterationContext).emailAttr,
                                            Phone: ((model.variables.guestsVar.getCurrent(callContext.iterationContext).mobilePhoneAttr + model.variables.guestsVar.getCurrent(callContext.iterationContext).workPhoneAttr) + model.variables.guestsVar.getCurrent(callContext.iterationContext).homePhoneAttr)
                                        },
                                        events: {
                                            _handleError: function(ex) {
                                                controller.handleError(ex);
                                            },
                                            callClicked$Action: function(phoneNumberIn) {
                                                return Promise.resolve().then(function() {
                                                    var eventHandlerContext = callContext.clone();
                                                    return OS.Flow.tryFinally(function() {
                                                        var varBag = {};
                                                        controller.pushDebuggerContext(eventHandlerContext);

                                                        OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Reusable/Person_Contact_Options CallClicked");
                                                        return controller.onHandle_Person_Contact_OptionsCallClicked$Action(model.variables.guestsVar.getCurrent(callContext.iterationContext), controller.callContext(eventHandlerContext));
                                                    }, function() {
                                                        controller.popDebuggerContext(eventHandlerContext);
                                                    });
                                                });;
                                            },
                                            emailClicked$Action: function(emailIn) {
                                                return Promise.resolve().then(function() {
                                                    var eventHandlerContext = callContext.clone();
                                                    return OS.Flow.tryFinally(function() {
                                                        var varBag = {};
                                                        controller.pushDebuggerContext(eventHandlerContext);

                                                        OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Reusable/Person_Contact_Options EmailClicked");
                                                        return controller.onHandle_ClickedEmail$Action(controller.callContext(eventHandlerContext));
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
                                            uuid: "16",
                                            alias: "3"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        _dependencies: []
                                    }), React.createElement(OSWidgets.Icon, {
                                        extendedEvents: {
                                            onClick: function() {
                                                return Promise.resolve().then(function() {
                                                    var eventHandlerContext = callContext.clone();
                                                    return OS.Flow.tryFinally(function() {
                                                        var varBag = {};
                                                        controller.pushDebuggerContext(eventHandlerContext);

                                                        OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "LDM_Blocks/EventCard_Guests/Icon onclick");
                                                        return controller.onHandle_HouseholdClicked$Action(model.variables.guestsVar.getCurrent(callContext.iterationContext).householderIdAttr, model.variables.guestsVar.getCurrent(callContext.iterationContext).householderNameAttr, model.variables.guestsVar.getCurrentRowNumber(callContext.iterationContext), model.variables.guestsVar.getCurrent(callContext.iterationContext).recordDisabledAttr, model.variables.guestsVar.getCurrent(callContext.iterationContext).householdDisplayAttr, controller.callContext(eventHandlerContext));
                                                    }, function() {
                                                        controller.popDebuggerContext(eventHandlerContext);
                                                    });
                                                });;
                                            }
                                        },
                                        extendedProperties: {
                                            style: model.getCachedValue(idService.getId("AsRz+4Y2EU28M2p3v4fBEQ.style"), function() {
                                                return ((!(model.variables.guestsVar.getCurrent(callContext.iterationContext).householdDisplayAttr)) ? ("visibility: hidden") : (""));
                                            }, function() {
                                                return model.variables.guestsVar.getCurrent(callContext.iterationContext).householdDisplayAttr;
                                            })
                                        },
                                        icon: "angle-right",
                                        iconSize: /*Twotimes*/ 1,
                                        style: "icon padding-left-base",
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "17"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    })];
                                }),
                                bookmarkNote: PlaceholderContent.Empty
                            },
                            _dependencies: [asPrimitiveValue(model.variables.guestsVar.getCurrent(callContext.iterationContext))]
                        })];
                    }, callContext, idService, "1")
                },
                _dependencies: []
            }))));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);

    return View;
});
define("Connect2_OrbitMobile_MUI.LDM_Blocks.EventCard_Guests.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_IS.model", "Connect2_LegacyShared.controller", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "OutSystemsUI_2_23.controller", "Connect2_OrbitMobile_MUI.languageResources", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.LDM_Blocks.EventCard_Guests.mvc$debugger", "Connect2_OrbitMobile_MUI.LDM_Blocks.EventCard_Guests.mvc$controller.OnHandle_ClickedEmail.GetLocalityNameJS", "Connect2_OrbitMobile_MUI.controller$BuildGuestString", "Connect2_OrbitMobile_MUI.controller$ValidateBottomBorderOnListItem", "Connect2_OrbitMobile_IS.model$CalendarGuestItemRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "Connect2_OrbitMobile_MUI.model$CalendarGuestItemList", "Connect2_LegacyShared.controller$FlipHouseholdName", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_LegacyShared", "UBTConnect_Utils.model$ContactByPhonePopupDataRec", "Connect2_OrbitMobile_MUI.referencesHealth$UBTConnect_Utils", "UBTConnect_Utils.model$ContactPopupDataRec", "UBTConnect_Utils.controller$IsFreeSubscriptionPlan", "UBTConnect_Utils.controller$IsRegionalSubscriptionPlan", "Connect2_OrbitMobile_MUI.model$CalendarGuestItemExtList", "Connect2_OrbitMobile_MUI.model$HouseholdCarouselServerItemList", "Connect2_OrbitMobile_MUI.controller$CarouselFilteredEventResults", "Connect2_OrbitMobile_IS.model$GetTimezoneResponseRec", "OutSystemsUI_2_23.controller$GetNetworkStatus", "Connect2_OrbitMobile_MUI.referencesHealth$OutSystemsUI_2_23", "UBTConnect_Utils.model$UI_ContactByMessage_WrapperDataRec"], function(OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_ISModel, Connect2_LegacySharedController, UBTConnect_UtilsModel, UBTConnect_UtilsController, OutSystemsUI_2_23Controller, Connect2_OrbitMobile_MUILanguageResources, Connect2_OrbitMobile_MUIClientVariables, Connect2_OrbitMobile_MUI_LDM_Blocks_EventCard_Guests_mvc_Debugger, Connect2_OrbitMobile_MUI_LDM_Blocks_EventCard_Guests_mvc_controller_OnHandle_ClickedEmail_GetLocalityNameJS) {
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
        Controller.prototype._onHandle_Person_Contact_OptionsCallClicked$Action = function(in_GuestItemIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnHandle_Person_Contact_OptionsCallClicked");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.LDM_Blocks.EventCard_Guests.OnHandle_Person_Contact_OptionsCallClicked$vars"))());
            vars.value.in_GuestItemInLocal = in_GuestItemIn.clone();
            varBag.callContext = callContext;
            varBag.vars = vars;
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:szVDDsEihEyv19RGxv2ZYg:/NRWebFlows.u4BC4QhydUm9ABIHkrjpQQ/NodesShownInESpaceTree.RlL41D9py06tP59JVJUyZg/ClientActions.szVDDsEihEyv19RGxv2ZYg:Q1PsfzhYemc4WWD57_08vg", "Connect2_OrbitMobile_MUI", "OnHandle_Person_Contact_OptionsCallClicked", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:iiJZjb0kxkSNmw6T4NO_MQ", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:LFXMVNilLEe6JmSyGbMrmQ", callContext.id);
                // Trigger Event: OnClick_PhoneCall
                return controller.onClick_PhoneCall$Action(function() {
                    var rec = new UBTConnect_UtilsModel.ContactByPhonePopupDataRec();
                    rec.contactPopupDataAttr = function() {
                        var rec = new UBTConnect_UtilsModel.ContactPopupDataRec();
                        rec.imageURLAttr = vars.value.in_GuestItemInLocal.signedImagePathAttr;
                        rec.nameAttr = OutSystemsDebugger.handleFunctionCall(function() {
                            return Connect2_LegacySharedController.default.flipHouseholdName$Action(vars.value.in_GuestItemInLocal.householderNameAttr, callContext).out_HouseholdNameFixedOut;
                        }, OS.DataTypes.DataTypes.Text, callContext.id);
                        rec.localityAttr = vars.value.in_GuestItemInLocal.localityNameAttr;
                        rec.timezoneNameAttr = vars.value.in_GuestItemInLocal.timeZoneAttr.abbreviationAttr;
                        rec.timezoneOffsetAttr = OS.BuiltinFunctions.longIntegerToInteger(vars.value.in_GuestItemInLocal.timeZoneAttr.offsetSecondsAttr);
                        rec.showPopupAttr = true;
                        rec.countryNameAttr = vars.value.in_GuestItemInLocal.countryNameAttr;
                        return rec;
                    }();
                    rec.mobilePhoneAttr = vars.value.in_GuestItemInLocal.mobilePhoneAttr;
                    rec.homePhoneAttr = vars.value.in_GuestItemInLocal.homePhoneAttr;
                    rec.workPhoneAttr = vars.value.in_GuestItemInLocal.workPhoneAttr;
                    return rec;
                }(), callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:5R5L+dHD0EysBmWgWkamTw", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:szVDDsEihEyv19RGxv2ZYg", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:szVDDsEihEyv19RGxv2ZYg", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.LDM_Blocks.EventCard_Guests.OnHandle_Person_Contact_OptionsCallClicked$vars", [{
            name: "In_GuestItem",
            attrName: "in_GuestItemInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Record,
            defaultValue: function() {
                return new Connect2_OrbitMobile_ISModel.CalendarGuestItemRec();
            },
            complexType: Connect2_OrbitMobile_ISModel.CalendarGuestItemRec
        }]);
        Controller.prototype._toggleGuestList$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("ToggleGuestList");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:bdKiMjuCG0qXvHUBBTeY6A:/NRWebFlows.u4BC4QhydUm9ABIHkrjpQQ/NodesShownInESpaceTree.RlL41D9py06tP59JVJUyZg/ClientActions.bdKiMjuCG0qXvHUBBTeY6A:G0zkvRl4vgcFIyHQDgcqBQ", "Connect2_OrbitMobile_MUI", "ToggleGuestList", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ZlPWnHSLLUOoJSOFu53U+Q", callContext.id);
                if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:dUnIO_onDU2IMEan_BOYeA", callContext.id) && model.variables.in_IsExpandableIn)) {
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Jn3WT0XYN0GKHuJsxiGNjQ", callContext.id);
                    // IsExpanded = notIsExpanded
                    model.variables.isExpandedVar = !(model.variables.isExpandedVar);
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:RRvjcfKU8U+KAg+QN0o8Sw", callContext.id);
                } else {
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:gdaUYExarEKB7ZydwsBQtQ", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:bdKiMjuCG0qXvHUBBTeY6A", callContext.id);
            }

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
                OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:AigyYaoXrkeUQ3kGkr1dsA:/NRWebFlows.u4BC4QhydUm9ABIHkrjpQQ/NodesShownInESpaceTree.RlL41D9py06tP59JVJUyZg/ClientActions.AigyYaoXrkeUQ3kGkr1dsA:oYSuXyoZ_0hndWM+BACKiw", "Connect2_OrbitMobile_MUI", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:F7i+HmN2Sk2YlVxwxSETnA", callContext.id);
                // Has data?
                if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:yWl_gfuDE0+2sB48iHFBLA", callContext.id) && !(model.variables.guestsVar.isEmpty))) {
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ZEZQobY0bU2AeX43Si79+g", callContext.id);
                } else {
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:zICbMTxwe028fPx2OBlfgA", callContext.id);
                    // Guests = In_Guests
                    model.variables.guestsVar = model.variables.in_GuestsIn;
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:rz6n7S_B50GJhRIVnW9hGA", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:AigyYaoXrkeUQ3kGkr1dsA", callContext.id);
            }

        };
        Controller.prototype._onHandle_HouseholdClicked$Action = function(in_GuestHouseholdIdIn, in_HouseholdNameIn, in_CurrentRowNumberIn, in_RecordDisabledIn, in_IsHouseholdDisplayedIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnHandle_HouseholdClicked");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.LDM_Blocks.EventCard_Guests.OnHandle_HouseholdClicked$vars"))());
            vars.value.in_GuestHouseholdIdInLocal = in_GuestHouseholdIdIn;
            vars.value.in_HouseholdNameInLocal = in_HouseholdNameIn;
            vars.value.in_CurrentRowNumberInLocal = in_CurrentRowNumberIn;
            vars.value.in_RecordDisabledInLocal = in_RecordDisabledIn;
            vars.value.in_IsHouseholdDisplayedInLocal = in_IsHouseholdDisplayedIn;
            var isFreeSubscriptionPlanVar = new OS.DataTypes.VariableHolder();
            var isRegionalSubscriptionPlanVar = new OS.DataTypes.VariableHolder();
            var carouselFilteredEventResultsVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.vars = vars;
            varBag.isFreeSubscriptionPlanVar = isFreeSubscriptionPlanVar;
            varBag.isRegionalSubscriptionPlanVar = isRegionalSubscriptionPlanVar;
            varBag.carouselFilteredEventResultsVar = carouselFilteredEventResultsVar;
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:aSMhkMR0uECM2PWI+wG2nA:/NRWebFlows.u4BC4QhydUm9ABIHkrjpQQ/NodesShownInESpaceTree.RlL41D9py06tP59JVJUyZg/ClientActions.aSMhkMR0uECM2PWI+wG2nA:Un_r2Aq2QvvHZ5TvXQROSA", "Connect2_OrbitMobile_MUI", "OnHandle_HouseholdClicked", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:eA0xKtENHkiSjxmdTvrVgQ", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:lMihes7O20S2jwThHtfM1w", callContext.id);
                // Execute Action: IsFreeSubscriptionPlan
                model.flush();
                return UBTConnect_UtilsController.default.isFreeSubscriptionPlan$Action(callContext).then(function(value) {
                    isFreeSubscriptionPlanVar.value = value;
                }).then(function() {
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:zhPGkt75wkurnMS6zWMNuA", callContext.id);
                    // Execute Action: IsRegionalSubscriptionPlan
                    model.flush();
                    return UBTConnect_UtilsController.default.isRegionalSubscriptionPlan$Action(callContext).then(function(value) {
                        isRegionalSubscriptionPlanVar.value = value;
                    });
                }).then(function() {
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:wYGAyZuJhUmLLnhbtb078g", callContext.id);
                    // Execute Action: CarouselFilteredEventResults
                    carouselFilteredEventResultsVar.value = Connect2_OrbitMobile_MUIController.default.carouselFilteredEventResults$Action(OS.DataConversion.JSConversions.typeConvertRecordList(model.variables.guestsVar, new Connect2_OrbitMobile_MUIModel.CalendarGuestItemExtList(), function(source, target) {
                        target.calendarGuestItemAttr.householderIdAttr = source.householderIdAttr;
                        target.calendarGuestItemAttr.eventGuestIdAttr = source.eventGuestIdAttr;
                        target.calendarGuestItemAttr.householderNameAttr = source.householderNameAttr;
                        target.calendarGuestItemAttr.localityIdAttr = source.localityIdAttr;
                        target.calendarGuestItemAttr.localityNameAttr = source.localityNameAttr;
                        target.calendarGuestItemAttr.mobilePhoneAttr = source.mobilePhoneAttr;
                        target.calendarGuestItemAttr.emailAttr = source.emailAttr;
                        target.calendarGuestItemAttr.workPhoneAttr = source.workPhoneAttr;
                        target.calendarGuestItemAttr.countryCodeAttr = source.countryCodeAttr;
                        target.calendarGuestItemAttr.signedImagePathAttr = source.signedImagePathAttr;
                        target.calendarGuestItemAttr.recordDisabledAttr = source.recordDisabledAttr;
                        target.calendarGuestItemAttr.householdDisplayAttr = source.householdDisplayAttr;
                        target.calendarGuestItemAttr.addressAttr = source.addressAttr;
                        target.calendarGuestItemAttr.countryNameAttr = source.countryNameAttr;
                        target.calendarGuestItemAttr.longitudeAttr = source.longitudeAttr;
                        target.calendarGuestItemAttr.latitudeAttr = source.latitudeAttr;
                        target.calendarGuestItemAttr.timeZoneAttr = source.timeZoneAttr;
                        target.calendarGuestItemAttr.homePhoneAttr = source.homePhoneAttr;
                        target.calendarGuestItemAttr.householderSignedImagePathAttr = source.householderSignedImagePathAttr;
                        target.calendarGuestItemAttr.householderFirstNameAttr = source.householderFirstNameAttr;
                        return target;
                    }), (isFreeSubscriptionPlanVar.value.isFreeSubscriptionPlanOut || isRegionalSubscriptionPlanVar.value.isRegionalSubscriptionPlanOut), vars.value.in_CurrentRowNumberInLocal, callContext);

                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:i_8EyTIkxkKB57UEKUJP1g", callContext.id);
                    // In_CurrentRowNumber = In_CurrentRowNumber - CarouselFilteredEventResults.NumberFilteredToCurrent
                    vars.value.in_CurrentRowNumberInLocal = (vars.value.in_CurrentRowNumberInLocal - carouselFilteredEventResultsVar.value.numberFilteredToCurrentOut);
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:g4gLaZ9zHkapmarLCZR_IQ", callContext.id);
                    // Trigger Event: HouseholdClicked
                    return controller.householdClicked$Action(vars.value.in_GuestHouseholdIdInLocal, vars.value.in_HouseholdNameInLocal, vars.value.in_CurrentRowNumberInLocal, carouselFilteredEventResultsVar.value.out_HouseholdIdListOut.length, vars.value.in_RecordDisabledInLocal, vars.value.in_IsHouseholdDisplayedInLocal, callContext);
                }).then(function() {
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:5bL3hiTnUUuKgDqkP2RvpQ", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:aSMhkMR0uECM2PWI+wG2nA", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:aSMhkMR0uECM2PWI+wG2nA", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.LDM_Blocks.EventCard_Guests.OnHandle_HouseholdClicked$vars", [{
            name: "In_GuestHouseholdId",
            attrName: "in_GuestHouseholdIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.LongInteger,
            defaultValue: function() {
                return OS.DataTypes.LongInteger.defaultValue;
            }
        }, {
            name: "In_HouseholdName",
            attrName: "in_HouseholdNameInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }, {
            name: "In_CurrentRowNumber",
            attrName: "in_CurrentRowNumberInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Integer,
            defaultValue: function() {
                return 0;
            }
        }, {
            name: "In_RecordDisabled",
            attrName: "in_RecordDisabledInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }, {
            name: "In_IsHouseholdDisplayed",
            attrName: "in_IsHouseholdDisplayedInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);
        Controller.prototype._onHandle_ClickedEmail$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnHandle_ClickedEmail");
            callContext = controller.callContext(callContext);
            var getNetworkStatusVar = new OS.DataTypes.VariableHolder();
            var flipHouseholdNameVar = new OS.DataTypes.VariableHolder();
            var getLocalityNameJSResult = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.getNetworkStatusVar = getNetworkStatusVar;
            varBag.flipHouseholdNameVar = flipHouseholdNameVar;
            varBag.getLocalityNameJSResult = getLocalityNameJSResult;
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:jBYn4Qlxo0i65KyEP8PKJw:/NRWebFlows.u4BC4QhydUm9ABIHkrjpQQ/NodesShownInESpaceTree.RlL41D9py06tP59JVJUyZg/ClientActions.jBYn4Qlxo0i65KyEP8PKJw:oWvBqDdffJ9Hb9PVYAoDyQ", "Connect2_OrbitMobile_MUI", "OnHandle_ClickedEmail", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:HWehjR+yCk6q2deJgV4OkA", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:fBYUQR0LCUmX+dI3fHO7xA", callContext.id);
                // Execute Action: GetNetworkStatus
                getNetworkStatusVar.value = OutSystemsUI_2_23Controller.default.getNetworkStatus$Action(callContext);

                // IsOnline?
                return OS.Flow.executeSequence(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:yFYPFlvW3UmNrwqTTQR4kw", callContext.id) && getNetworkStatusVar.value.isOnlineOut)) {
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Stcg+fzj6UWOnvuq2TyfrA", callContext.id);
                        // Execute Action: FlipHouseholdName
                        flipHouseholdNameVar.value = Connect2_LegacySharedController.default.flipHouseholdName$Action(model.variables.in_GuestsIn.getCurrent(callContext.iterationContext).householderNameAttr, callContext);

                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:QYUvZXY6nkC2JCJMGMmI1w", callContext.id);
                        getLocalityNameJSResult.value = controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_LDM_Blocks_EventCard_Guests_mvc_controller_OnHandle_ClickedEmail_GetLocalityNameJS, "GetLocalityName", "OnHandle_ClickedEmail", {
                            JS_Locality: OS.DataConversion.JSNodeParamConverter.to(model.variables.in_GuestsIn.getCurrent(callContext.iterationContext).localityNameAttr, OS.DataTypes.DataTypes.Text),
                            JS_LocalityName: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                        }, function($parameters) {
                            var jsNodeResult = new(controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.LDM_Blocks.EventCard_Guests.OnHandle_ClickedEmail$getLocalityNameJSResult"))();
                            jsNodeResult.jS_LocalityNameOut = OS.DataConversion.JSNodeParamConverter.from($parameters.JS_LocalityName, OS.DataTypes.DataTypes.Text);
                            return jsNodeResult;
                        }, {}, {});
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ScnyIjEd7kiXuk+DhrDnGQ", callContext.id);
                        // Trigger Event: OnClick_Message
                        return controller.onClick_Message$Action(function() {
                            var rec = new UBTConnect_UtilsModel.UI_ContactByMessage_WrapperDataRec();
                            rec.emailAttr = model.variables.in_GuestsIn.getCurrent(callContext.iterationContext).emailAttr;
                            rec.phoneAttr = model.variables.in_GuestsIn.getCurrent(callContext.iterationContext).mobilePhoneAttr;
                            rec.contactPopupDataAttr = function() {
                                var rec = new UBTConnect_UtilsModel.ContactPopupDataRec();
                                rec.imageURLAttr = model.variables.in_GuestsIn.getCurrent(callContext.iterationContext).signedImagePathAttr;
                                rec.nameAttr = flipHouseholdNameVar.value.out_HouseholdNameFixedOut;
                                rec.localityAttr = getLocalityNameJSResult.value.jS_LocalityNameOut;
                                rec.timezoneNameAttr = model.variables.in_GuestsIn.getCurrent(callContext.iterationContext).timeZoneAttr.abbreviationAttr;
                                rec.timezoneOffsetAttr = OS.BuiltinFunctions.longIntegerToInteger(model.variables.in_GuestsIn.getCurrent(callContext.iterationContext).timeZoneAttr.offsetSecondsAttr);
                                rec.showPopupAttr = true;
                                rec.countryNameAttr = model.variables.in_GuestsIn.getCurrent(callContext.iterationContext).countryNameAttr;
                                return rec;
                            }();
                            return rec;
                        }(), model.variables.in_GuestsIn.getCurrent(callContext.iterationContext).countryNameAttr, callContext).then(function() {
                            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:nsjwSDFLwk6MaQlcKUB6mg", callContext.id);
                        });
                    } else {
                        // Network
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:VhDLi1LYqUapSKlbcZeNLg", callContext.id);
                        OS.FeedbackMessageService.showFeedbackMessage("Please check your network connection and try again", /*Info*/ 0);
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:SiL6JCfmR0uMM9Y1anrPow", callContext.id);
                    }

                });
            }).then(function(res) {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:jBYn4Qlxo0i65KyEP8PKJw", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:jBYn4Qlxo0i65KyEP8PKJw", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.LDM_Blocks.EventCard_Guests.OnHandle_ClickedEmail$getLocalityNameJSResult", [{
            name: "JS_LocalityName",
            attrName: "jS_LocalityNameOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);

        Controller.prototype.onHandle_Person_Contact_OptionsCallClicked$Action = function(in_GuestItemIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onHandle_Person_Contact_OptionsCallClicked$Action, callContext, in_GuestItemIn);

        };
        Controller.prototype.toggleGuestList$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._toggleGuestList$Action, callContext);

        };
        Controller.prototype.onInitialize$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

        };
        Controller.prototype.onHandle_HouseholdClicked$Action = function(in_GuestHouseholdIdIn, in_HouseholdNameIn, in_CurrentRowNumberIn, in_RecordDisabledIn, in_IsHouseholdDisplayedIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onHandle_HouseholdClicked$Action, callContext, in_GuestHouseholdIdIn, in_HouseholdNameIn, in_CurrentRowNumberIn, in_RecordDisabledIn, in_IsHouseholdDisplayedIn);

        };
        Controller.prototype.onHandle_ClickedEmail$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onHandle_ClickedEmail$Action, callContext);

        };
        Controller.prototype.onClick_PhoneCall$Action = function() {
            return Promise.resolve();
        };
        Controller.prototype.householdClicked$Action = function() {
            return Promise.resolve();
        };
        Controller.prototype.onClick_Message$Action = function() {
            return Promise.resolve();
        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:u4BC4QhydUm9ABIHkrjpQQ:/NRWebFlows.u4BC4QhydUm9ABIHkrjpQQ:_P7gfhFmARrzYcq0IncBSg", "Connect2_OrbitMobile_MUI", "LDM_Blocks", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:RlL41D9py06tP59JVJUyZg:/NRWebFlows.u4BC4QhydUm9ABIHkrjpQQ/NodesShownInESpaceTree.RlL41D9py06tP59JVJUyZg:sXdEa4WeUa+3JcgJQIUUEw", "Connect2_OrbitMobile_MUI", "EventCard_Guests", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:RlL41D9py06tP59JVJUyZg", callContext.id);
            OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:u4BC4QhydUm9ABIHkrjpQQ", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "LDM_Blocks/EventCard_Guests On Initialize");
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
            return Connect2_OrbitMobile_MUIController.default.defaultTimeout;
        };
        return Controller;
    })(OS.Controller.BaseViewController);
    return new OS.Controller.ControllerFactory(Controller, Connect2_OrbitMobile_MUILanguageResources);
});
define("Connect2_OrbitMobile_MUI.LDM_Blocks.EventCard_Guests.mvc$controller.OnHandle_ClickedEmail.GetLocalityNameJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.JS_LocalityName = $parameters.JS_Locality.replace(/\s*\([^)]*\)/, "");
    };
});

define("Connect2_OrbitMobile_MUI.LDM_Blocks.EventCard_Guests.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "o2cCtLqaDES+6j8ndZO_vQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.in_GuestItemInLocal;
            }
        },
        "j2KGjzhTrUGd1a70XyRkhg": {
            getter: function(varBag, idService) {
                return varBag.vars.value.in_GuestHouseholdIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "gz76YFbNoUiIa93PerxC6w": {
            getter: function(varBag, idService) {
                return varBag.vars.value.in_HouseholdNameInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "3C9syjhZ6USYeVwlkHi4UQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.in_CurrentRowNumberInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Integer
        },
        "nvUPPTpa_0ShlL6+5X8LNA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.in_RecordDisabledInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "q_vfNd3Bd0iH8qsvrpEvDA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.in_IsHouseholdDisplayedInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "lMihes7O20S2jwThHtfM1w": {
            getter: function(varBag, idService) {
                return varBag.isFreeSubscriptionPlanVar.value;
            }
        },
        "zhPGkt75wkurnMS6zWMNuA": {
            getter: function(varBag, idService) {
                return varBag.isRegionalSubscriptionPlanVar.value;
            }
        },
        "wYGAyZuJhUmLLnhbtb078g": {
            getter: function(varBag, idService) {
                return varBag.carouselFilteredEventResultsVar.value;
            }
        },
        "fBYUQR0LCUmX+dI3fHO7xA": {
            getter: function(varBag, idService) {
                return varBag.getNetworkStatusVar.value;
            }
        },
        "Stcg+fzj6UWOnvuq2TyfrA": {
            getter: function(varBag, idService) {
                return varBag.flipHouseholdNameVar.value;
            }
        },
        "QYUvZXY6nkC2JCJMGMmI1w": {
            getter: function(varBag, idService) {
                return varBag.getLocalityNameJSResult.value;
            }
        },
        "8CA9FMks2UCbrN_uePuGCA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isExpandedVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "jyBATd7Pk0Sc+iRZSrgzeA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.guestsVar;
            }
        },
        "q_cOkK9pvESCLkyBcMpUoQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_GuestCountIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "q7o84dstv0yLUKk+PVtndg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_GuestsIn;
            }
        },
        "3cDl9yC9DUei4nYYgsi7ag": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_IsExpandableIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "IbZQiEYxbU6X54b4wWUbKQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_RightToLeftIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "+I1+loC0SUW3qlyARZgg5Q": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HasGuests"));
                })(varBag.model, idService);
            }
        },
        "SEQdmydEbEKiEWNh1o7TPA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("IsContentExpanded"));
                })(varBag.model, idService);
            }
        },
        "kCnw56XKbUKW1MlkFVQg2g": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("List_Guests"));
                })(varBag.model, idService);
            }
        },
        "5bMAlu5m10WzKDxV2H2PJQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("List_Item_Guest"));
                })(varBag.model, idService);
            }
        },
        "kFdxEGZx20eLpKCV0Tn05Q": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("ImagePlaceholder"));
                })(varBag.model, idService);
            }
        },
        "mxyBkySa10SE+1UzXL6lGA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Title_Placeholder"));
                })(varBag.model, idService);
            }
        },
        "RdVZUVtT5ka6+BOCA42oHw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HouseholderName"));
                })(varBag.model, idService);
            }
        },
        "w2umGV4gvUCSQgtQPKP3dg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Description_Placeholder"));
                })(varBag.model, idService);
            }
        },
        "4YREAzpr7k2HSLbzZOWn8Q": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Guest_Locality"));
                })(varBag.model, idService);
            }
        },
        "6YTQqeBpKEmHiccVfgQhDw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Tag_Placeholder"));
                })(varBag.model, idService);
            }
        },
        "jgtr9MSANUiIrn_lJwO4rQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Result_Item_Placeholder"));
                })(varBag.model, idService);
            }
        },
        "1gAtYjcOo0aX5tLBYNS7hw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("BookmarkNote"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});