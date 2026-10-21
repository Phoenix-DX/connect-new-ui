define("UBT_AppManager_Mobile.Fingerprint.PinUnlock_MobileWrapper.mvc$model", ["OutSystems/ClientRuntime/Main", "UBT_AppManager_Mobile.model", "UBT_AppManager.controller", "UBT_AppManager.PIN.Pincode_Unlock.mvc$model", "UBT_AppManager_Mobile.Fingerprint.FingerprintScanner.mvc$model", "UBT_AppManager.controller$AppManager_GetPIN_FingerprintReaderAvailable", "UBT_AppManager_Mobile.referencesHealth", "UBT_AppManager_Mobile.referencesHealth$UBT_AppManager"], function(OutSystems, UBT_AppManager_MobileModel, UBT_AppManagerController, UBT_AppManager_PIN_Pincode_Unlock_mvcModel, UBT_AppManager_Mobile_Fingerprint_FingerprintScanner_mvcModel) {
    var OS = OutSystems.Internal;


    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("In_PinLength", "in_PinLengthIn", "In_PinLength", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return 0;
                }, false),
                this.attr("_in_PinLengthInDataFetchStatus", "_in_PinLengthInDataFetchStatus", "_in_PinLengthInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_ExtendedClasses", "in_ExtendedClassesIn", "In_ExtendedClasses", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_in_ExtendedClassesInDataFetchStatus", "_in_ExtendedClassesInDataFetchStatus", "_in_ExtendedClassesInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_IsScanFingerprintOnReady", "in_IsScanFingerprintOnReadyIn", "In_IsScanFingerprintOnReady", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("_in_IsScanFingerprintOnReadyInDataFetchStatus", "_in_IsScanFingerprintOnReadyInDataFetchStatus", "_in_IsScanFingerprintOnReadyInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_ForceVisible", "in_ForceVisibleIn", "In_ForceVisible", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("_in_ForceVisibleInDataFetchStatus", "_in_ForceVisibleInDataFetchStatus", "_in_ForceVisibleInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_AllowBackNavigation", "in_AllowBackNavigationIn", "In_AllowBackNavigation", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("_in_AllowBackNavigationInDataFetchStatus", "_in_AllowBackNavigationInDataFetchStatus", "_in_AllowBackNavigationInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_HideFingerprint", "in_HideFingerprintIn", "In_HideFingerprint", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("_in_HideFingerprintInDataFetchStatus", "_in_HideFingerprintInDataFetchStatus", "_in_HideFingerprintInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
                    Model._hasValidationWidgetsValue = (UBT_AppManager_PIN_Pincode_Unlock_mvcModel.hasValidationWidgets || UBT_AppManager_Mobile_Fingerprint_FingerprintScanner_mvcModel.hasValidationWidgets);
                }

                return Model._hasValidationWidgetsValue;
            }
        });

        Model.prototype.setInputs = function(inputs) {
            if ("In_PinLength" in inputs) {
                this.variables.in_PinLengthIn = inputs.In_PinLength;
                if ("_in_PinLengthInDataFetchStatus" in inputs) {
                    this.variables._in_PinLengthInDataFetchStatus = inputs._in_PinLengthInDataFetchStatus;
                }

            }

            if ("In_ExtendedClasses" in inputs) {
                this.variables.in_ExtendedClassesIn = inputs.In_ExtendedClasses;
                if ("_in_ExtendedClassesInDataFetchStatus" in inputs) {
                    this.variables._in_ExtendedClassesInDataFetchStatus = inputs._in_ExtendedClassesInDataFetchStatus;
                }

            }

            if ("In_IsScanFingerprintOnReady" in inputs) {
                this.variables.in_IsScanFingerprintOnReadyIn = inputs.In_IsScanFingerprintOnReady;
                if ("_in_IsScanFingerprintOnReadyInDataFetchStatus" in inputs) {
                    this.variables._in_IsScanFingerprintOnReadyInDataFetchStatus = inputs._in_IsScanFingerprintOnReadyInDataFetchStatus;
                }

            }

            if ("In_ForceVisible" in inputs) {
                this.variables.in_ForceVisibleIn = inputs.In_ForceVisible;
                if ("_in_ForceVisibleInDataFetchStatus" in inputs) {
                    this.variables._in_ForceVisibleInDataFetchStatus = inputs._in_ForceVisibleInDataFetchStatus;
                }

            }

            if ("In_AllowBackNavigation" in inputs) {
                this.variables.in_AllowBackNavigationIn = inputs.In_AllowBackNavigation;
                if ("_in_AllowBackNavigationInDataFetchStatus" in inputs) {
                    this.variables._in_AllowBackNavigationInDataFetchStatus = inputs._in_AllowBackNavigationInDataFetchStatus;
                }

            }

            if ("In_HideFingerprint" in inputs) {
                this.variables.in_HideFingerprintIn = inputs.In_HideFingerprint;
                if ("_in_HideFingerprintInDataFetchStatus" in inputs) {
                    this.variables._in_HideFingerprintInDataFetchStatus = inputs._in_HideFingerprintInDataFetchStatus;
                }

            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "Fingerprint.PinUnlock_MobileWrapper");
});
define("UBT_AppManager_Mobile.Fingerprint.PinUnlock_MobileWrapper.mvc$view", ["OutSystems/ClientRuntime/Main", "UBT_AppManager_Mobile.model", "UBT_AppManager_Mobile.controller", "UBT_AppManager.controller", "react", "OutSystems/ReactView/Main", "UBT_AppManager_Mobile.Fingerprint.PinUnlock_MobileWrapper.mvc$model", "UBT_AppManager_Mobile.Fingerprint.PinUnlock_MobileWrapper.mvc$controller", "UBT_AppManager.PIN.Pincode_Unlock.mvc$view", "OutSystems/ReactWidgets/Main", "UBT_AppManager_Mobile.Fingerprint.FingerprintScanner.mvc$view", "UBT_AppManager.controller$AppManager_GetPIN_FingerprintReaderAvailable", "UBT_AppManager_Mobile.referencesHealth", "UBT_AppManager_Mobile.referencesHealth$UBT_AppManager"], function(OutSystems, UBT_AppManager_MobileModel, UBT_AppManager_MobileController, UBT_AppManagerController, React, OSView, UBT_AppManager_Mobile_Fingerprint_PinUnlock_MobileWrapper_mvc_model, UBT_AppManager_Mobile_Fingerprint_PinUnlock_MobileWrapper_mvc_controller, UBT_AppManager_PIN_Pincode_Unlock_mvc_view, OSWidgets, UBT_AppManager_Mobile_Fingerprint_FingerprintScanner_mvc_view) {
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
        View.displayName = "Fingerprint.PinUnlock_MobileWrapper";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBT_AppManager_PIN_Pincode_Unlock_mvc_view, UBT_AppManager_Mobile_Fingerprint_FingerprintScanner_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBT_AppManager_Mobile_Fingerprint_PinUnlock_MobileWrapper_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBT_AppManager_Mobile_Fingerprint_PinUnlock_MobileWrapper_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBT_AppManager_PIN_Pincode_Unlock_mvc_view, {
                inputs: {
                    In_PinLength: model.variables.in_PinLengthIn,
                    _in_PinLengthInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_PinLengthInDataFetchStatus),
                    In_ForceVisible: model.variables.in_ForceVisibleIn,
                    _in_ForceVisibleInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ForceVisibleInDataFetchStatus),
                    In_ExtendedClasses: model.variables.in_ExtendedClassesIn,
                    _in_ExtendedClassesInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ExtendedClassesInDataFetchStatus),
                    In_AllowBackNavigation: model.variables.in_AllowBackNavigationIn,
                    _in_AllowBackNavigationInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_AllowBackNavigationInDataFetchStatus)
                },
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    },
                    pinUnlockSuccess$Action: function() {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);

                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "PIN/Pincode_Unlock PinUnlockSuccess");
                            controller.pinUnlockSuccess$Action(controller.callContext(eventHandlerContext));
                        }, function() {
                            controller.popDebuggerContext(eventHandlerContext);
                        });

                        ;
                    },
                    pincodeChange$Action: function(inputLengthIn) {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);

                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "PIN/Pincode_Unlock PincodeChange");
                            controller.pincodeChange$Action(inputLengthIn, controller.callContext(eventHandlerContext));
                        }, function() {
                            controller.popDebuggerContext(eventHandlerContext);
                        });

                        ;
                    },
                    keyPressed$Action: function() {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);

                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "PIN/Pincode_Unlock KeyPressed");
                            controller.keyPressed$Action(controller.callContext(eventHandlerContext));
                        }, function() {
                            controller.popDebuggerContext(eventHandlerContext);
                        });

                        ;
                    },
                    userLoggedOut$Action: function() {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);

                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "PIN/Pincode_Unlock UserLoggedOut");
                            controller.userLoggedOut$Action(controller.callContext(eventHandlerContext));
                        }, function() {
                            controller.popDebuggerContext(eventHandlerContext);
                        });

                        ;
                    },
                    pinUnlockError$Action: function(errorMessageIn) {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);

                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "PIN/Pincode_Unlock PinUnlockError");
                            controller.pinUnlockError$Action(errorMessageIn, controller.callContext(eventHandlerContext));
                        }, function() {
                            controller.popDebuggerContext(eventHandlerContext);
                        });

                        ;
                    },
                    timeout$Action: function() {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);

                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "PIN/Pincode_Unlock Timeout");
                            controller.timeout$Action(controller.callContext(eventHandlerContext));
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
                    headerBar: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Placeholder, {
                            align: /*Default*/ 0,
                            content: _this.props.placeholders.placeholder_HeaderBar,
                            _idProps: {
                                service: idService,
                                name: "Placeholder_HeaderBar"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })];
                    }),
                    titlePlaceholder: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Placeholder, {
                            align: /*Default*/ 0,
                            content: _this.props.placeholders.placeholder_TitlePlaceholder,
                            _idProps: {
                                service: idService,
                                name: "Placeholder_TitlePlaceholder"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })];
                    }),
                    unlockText: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Placeholder, {
                            align: /*Default*/ 0,
                            content: _this.props.placeholders.placeholder_UnlockText,
                            _idProps: {
                                service: idService,
                                name: "Placeholder_UnlockText"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })];
                    }),
                    option: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: true,
                            visible: model.getCachedValue(idService.getId("l1T8bgwdTUy7YS2nzyQffw.Visible"), function() {
                                return (OutSystemsDebugger.handleFunctionCall(function() {
                                    return UBT_AppManagerController.default.appManager_GetPIN_FingerprintReaderAvailable$Action(callContext).availableOut;
                                }, OS.DataTypes.DataTypes.Boolean, callContext.id) && !(model.variables.in_HideFingerprintIn));
                            }, function() {
                                return model.variables.in_HideFingerprintIn;
                            }),
                            _idProps: {
                                service: idService,
                                uuid: "4"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_HideFingerprintInDataFetchStatus)
                        }, React.createElement(UBT_AppManager_Mobile_Fingerprint_FingerprintScanner_mvc_view, {
                            inputs: {
                                In_IsScanOnReady: model.variables.in_IsScanFingerprintOnReadyIn,
                                _in_IsScanOnReadyInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_IsScanFingerprintOnReadyInDataFetchStatus)
                            },
                            events: {
                                _handleError: function(ex) {
                                    controller.handleError(ex);
                                },
                                unlock$Action: function() {
                                    var eventHandlerContext = callContext.clone();
                                    return OS.Flow.tryFinally(function() {
                                        var varBag = {};
                                        controller.pushDebuggerContext(eventHandlerContext);

                                        OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Fingerprint/FingerprintScanner Unlock");
                                        controller.pinUnlockSuccess$Action(controller.callContext(eventHandlerContext));
                                    }, function() {
                                        controller.popDebuggerContext(eventHandlerContext);
                                    });

                                    ;
                                },
                                unlockError$Action: function(event_ErrorMessageIn) {
                                    var eventHandlerContext = callContext.clone();
                                    return OS.Flow.tryFinally(function() {
                                        var varBag = {};
                                        controller.pushDebuggerContext(eventHandlerContext);

                                        OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Fingerprint/FingerprintScanner UnlockError");
                                        controller.pinUnlockError$Action(event_ErrorMessageIn, controller.callContext(eventHandlerContext));
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
                                uuid: "5",
                                alias: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                content: new PlaceholderContent(function() {
                                    return [React.createElement(OSWidgets.Placeholder, {
                                        align: /*Default*/ 0,
                                        content: _this.props.placeholders.placeholder_FingerprintIcon,
                                        _idProps: {
                                            service: idService,
                                            name: "Placeholder_FingerprintIcon"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    })];
                                })
                            }
                        }))];
                    }),
                    eraseButton: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Placeholder, {
                            align: /*Default*/ 0,
                            content: _this.props.placeholders.placeholder_EraseButton,
                            _idProps: {
                                service: idService,
                                name: "Placeholder_EraseButton"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })];
                    }),
                    placeholder_BottomKeyboard: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Placeholder, {
                            align: /*Default*/ 0,
                            content: _this.props.placeholders.placeholder_BottomKeyboard,
                            _idProps: {
                                service: idService,
                                name: "Placeholder_BottomKeyboard"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })];
                    }),
                    contentPlaceholder: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Placeholder, {
                            align: /*Default*/ 0,
                            content: _this.props.placeholders.placeholder_Content,
                            _idProps: {
                                service: idService,
                                name: "Placeholder_Content"
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
define("UBT_AppManager_Mobile.Fingerprint.PinUnlock_MobileWrapper.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBT_AppManager_Mobile.model", "UBT_AppManager_Mobile.controller", "UBT_AppManager.controller", "UBT_AppManager_Mobile.languageResources", "UBT_AppManager_Mobile.Fingerprint.PinUnlock_MobileWrapper.mvc$debugger", "UBT_AppManager.controller$AppManager_GetPIN_FingerprintReaderAvailable", "UBT_AppManager_Mobile.referencesHealth", "UBT_AppManager_Mobile.referencesHealth$UBT_AppManager"], function(OutSystems, UBT_AppManager_MobileModel, UBT_AppManager_MobileController, UBT_AppManagerController, UBT_AppManager_MobileLanguageResources, UBT_AppManager_Mobile_Fingerprint_PinUnlock_MobileWrapper_mvc_Debugger) {
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

        Controller.prototype.timeout$Action = function() {
            return Promise.resolve();
        };
        Controller.prototype.pinUnlockSuccess$Action = function() {
            return Promise.resolve();
        };
        Controller.prototype.keyPressed$Action = function() {
            return Promise.resolve();
        };
        Controller.prototype.pincodeChange$Action = function() {
            return Promise.resolve();
        };
        Controller.prototype.pinUnlockError$Action = function() {
            return Promise.resolve();
        };
        Controller.prototype.userLoggedOut$Action = function() {
            return Promise.resolve();
        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("BY9jlG5exUW_vRtJ8oZ51A:WjgzaZ3LMUiT4LWMmZPOIA:/NRWebFlows.WjgzaZ3LMUiT4LWMmZPOIA:JX+ehGZDj99M2y+L38c3hw", "UBT_AppManager_Mobile", "Fingerprint", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("BY9jlG5exUW_vRtJ8oZ51A:CBg9LWOHyEKajx_jSD6LNA:/NRWebFlows.WjgzaZ3LMUiT4LWMmZPOIA/NodesShownInESpaceTree.CBg9LWOHyEKajx_jSD6LNA:ksXSh3LBiUwpp5ecGBK9oA", "UBT_AppManager_Mobile", "PinUnlock_MobileWrapper", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("BY9jlG5exUW_vRtJ8oZ51A:CBg9LWOHyEKajx_jSD6LNA", callContext.id);
            OutSystemsDebugger.pop("BY9jlG5exUW_vRtJ8oZ51A:WjgzaZ3LMUiT4LWMmZPOIA", callContext.id);
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
            return UBT_AppManager_MobileController.default.defaultTimeout;
        };
        return Controller;
    })(OS.Controller.BaseViewController);
    return new OS.Controller.ControllerFactory(Controller, UBT_AppManager_MobileLanguageResources);
});

define("UBT_AppManager_Mobile.Fingerprint.PinUnlock_MobileWrapper.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "eAlGsuH+UkS90_C7yHEyKw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_PinLengthIn;
            },
            dataType: OS.DataTypes.DataTypes.Integer
        },
        "XpFN2LNb+EqP57fei5Z7YA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_ExtendedClassesIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "5JkVMfBaQ0CAJ1_oUhAeqg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_IsScanFingerprintOnReadyIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "uO01AocvW0OUVDtFdQ6fHw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_ForceVisibleIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "B6iUeINR+U2mviuvooQIhQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_AllowBackNavigationIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "gnaD2qibREaXX7AXTEsncA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_HideFingerprintIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "pimUQrJNmUCC3uqhsd6Mug": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HeaderBar"));
                })(varBag.model, idService);
            }
        },
        "uWecj2ofVEq+AWqcKuxUww": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_HeaderBar"));
                })(varBag.model, idService);
            }
        },
        "VRM9l_M9RkiDMKbrxUWw3Q": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("TitlePlaceholder"));
                })(varBag.model, idService);
            }
        },
        "soskF4qx5km_r+PuiOC98g": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_TitlePlaceholder"));
                })(varBag.model, idService);
            }
        },
        "UlGmf9IWYEqUJxzaaoFGpQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("UnlockText"));
                })(varBag.model, idService);
            }
        },
        "b7RS2Kn3vkiZLKaQwlnw2w": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_UnlockText"));
                })(varBag.model, idService);
            }
        },
        "nTdf8ciapEaxm1xksW5YlA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Option"));
                })(varBag.model, idService);
            }
        },
        "qYgnOyoxqkW7jBRW9qN3CA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "dhfJY3PJRUm0+gLwucU1UQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_FingerprintIcon"));
                })(varBag.model, idService);
            }
        },
        "PPQZVI3nxUKPiFXak3b4AA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("EraseButton"));
                })(varBag.model, idService);
            }
        },
        "GYw7LSaXgE2djYybmj8ikg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_EraseButton"));
                })(varBag.model, idService);
            }
        },
        "lOZnxkGLrk+lTM0WeWVFEQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_BottomKeyboard"));
                })(varBag.model, idService);
            }
        },
        "Y9CTSq_NCka8VIVt8y2lpQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_BottomKeyboard"));
                })(varBag.model, idService);
            }
        },
        "pEMc3RkC+k2cYUo4vldmzg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("ContentPlaceholder"));
                })(varBag.model, idService);
            }
        },
        "_rOu9iKQEEy8uFl5rFRlvQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_Content"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});