define("Connect2_LegacyShared.Directory.HighlightSearch.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "Connect2_LegacyShared.controller$RemoveRegexSpecialCharacters"], function(OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController) {
    var OS = OutSystems.Internal;


    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("Text", "textIn", "Text", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_textInDataFetchStatus", "_textInDataFetchStatus", "_textInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("SearchTerms", "searchTermsIn", "SearchTerms", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_searchTermsInDataFetchStatus", "_searchTermsInDataFetchStatus", "_searchTermsInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("StopWords", "stopWordsIn", "StopWords", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_stopWordsInDataFetchStatus", "_stopWordsInDataFetchStatus", "_stopWordsInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("isWordbound", "isWordboundIn", "isWordbound", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("_isWordboundInDataFetchStatus", "_isWordboundInDataFetchStatus", "_isWordboundInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
        Object.defineProperty(Model, "hasValidationWidgets", {
            enumerable: true,
            configurable: true,
            get: function() {
                return false;
            }
        });

        Model.prototype.setInputs = function(inputs) {
            if ("Text" in inputs) {
                this.variables.textIn = inputs.Text;
                if ("_textInDataFetchStatus" in inputs) {
                    this.variables._textInDataFetchStatus = inputs._textInDataFetchStatus;
                }

            }

            if ("SearchTerms" in inputs) {
                this.variables.searchTermsIn = inputs.SearchTerms;
                if ("_searchTermsInDataFetchStatus" in inputs) {
                    this.variables._searchTermsInDataFetchStatus = inputs._searchTermsInDataFetchStatus;
                }

            }

            if ("StopWords" in inputs) {
                this.variables.stopWordsIn = inputs.StopWords;
                if ("_stopWordsInDataFetchStatus" in inputs) {
                    this.variables._stopWordsInDataFetchStatus = inputs._stopWordsInDataFetchStatus;
                }

            }

            if ("isWordbound" in inputs) {
                this.variables.isWordboundIn = inputs.isWordbound;
                if ("_isWordboundInDataFetchStatus" in inputs) {
                    this.variables._isWordboundInDataFetchStatus = inputs._isWordboundInDataFetchStatus;
                }

            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "Directory.HighlightSearch");
});
define("Connect2_LegacyShared.Directory.HighlightSearch.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "react", "OutSystems/ReactView/Main", "Connect2_LegacyShared.Directory.HighlightSearch.mvc$model", "Connect2_LegacyShared.Directory.HighlightSearch.mvc$controller", "Connect2_LegacyShared.clientVariables", "OutSystems/ReactWidgets/Main", "Connect2_LegacyShared.controller$RemoveRegexSpecialCharacters"], function(OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, React, OSView, Connect2_LegacyShared_Directory_HighlightSearch_mvc_model, Connect2_LegacyShared_Directory_HighlightSearch_mvc_controller, Connect2_LegacySharedClientVariables, OSWidgets) {
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
        View.displayName = "Directory.HighlightSearch";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return Connect2_LegacyShared_Directory_HighlightSearch_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return Connect2_LegacyShared_Directory_HighlightSearch_mvc_controller;
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
                extendedProperties: {
                    style: "display: inline;"
                },
                visible: true,
                _idProps: {
                    service: idService,
                    name: "Contents"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, $if(false, false, this, function() {
                return [];
            }, function() {
                return [];
            })));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);

    return View;
});
define("Connect2_LegacyShared.Directory.HighlightSearch.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "Connect2_LegacyShared.languageResources", "Connect2_LegacyShared.clientVariables", "Connect2_LegacyShared.Directory.HighlightSearch.mvc$debugger", "Connect2_LegacyShared.Directory.HighlightSearch.mvc$controller.OnReady.HighlightJS", "Connect2_LegacyShared.controller$RemoveRegexSpecialCharacters"], function(OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, Connect2_LegacySharedLanguageResources, Connect2_LegacySharedClientVariables, Connect2_LegacyShared_Directory_HighlightSearch_mvc_Debugger, Connect2_LegacyShared_Directory_HighlightSearch_mvc_controller_OnReady_HighlightJS) {
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
        Controller.prototype._onReady$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnReady");
            callContext = controller.callContext(callContext);
            var removeRegexSpecialCharactersVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.removeRegexSpecialCharactersVar = removeRegexSpecialCharactersVar;
            try {
                OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:q9skpNEuCEayiqNjI7gpkA:/NRWebFlows.1d3sM7CHf0Wwgjg7N1WecQ/NodesShownInESpaceTree.rmkTbeNf8UuRRANXQvREHw/ClientActions.q9skpNEuCEayiqNjI7gpkA:G_mKpxZDWCfSCvDQLDNzNw", "Connect2_LegacyShared", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:_VCWEJkDUESc6u8E7Mq3gw", callContext.id);
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:jOZwlNKVrUmvZ56W2PimtA", callContext.id);
                // Execute Action: RemoveRegexSpecialCharacters
                removeRegexSpecialCharactersVar.value = Connect2_LegacySharedController.default.removeRegexSpecialCharacters$Action(model.variables.searchTermsIn, callContext);

                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:fre9hw62QU2RurXFLZjMiA", callContext.id);
                controller.safeExecuteJSNode(Connect2_LegacyShared_Directory_HighlightSearch_mvc_controller_OnReady_HighlightJS, "Highlight", "OnReady", {
                    SearchTerms: OS.DataConversion.JSNodeParamConverter.to(removeRegexSpecialCharactersVar.value.textRegexSafeOut, OS.DataTypes.DataTypes.Text),
                    ContainerId: OS.DataConversion.JSNodeParamConverter.to(idService.getId("Contents"), OS.DataTypes.DataTypes.Text),
                    useWordbound: OS.DataConversion.JSNodeParamConverter.to(model.variables.isWordboundIn, OS.DataTypes.DataTypes.Boolean),
                    Text: OS.DataConversion.JSNodeParamConverter.to(model.variables.textIn, OS.DataTypes.DataTypes.Text)
                }, function($parameters) {}, {}, {});
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:CsH7KrmvcEimKixdSOO45A", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:q9skpNEuCEayiqNjI7gpkA", callContext.id);
            }

        };

        Controller.prototype.onReady$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:1d3sM7CHf0Wwgjg7N1WecQ:/NRWebFlows.1d3sM7CHf0Wwgjg7N1WecQ:vP+hlK7oystlEn_ximUhgQ", "Connect2_LegacyShared", "Directory", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:rmkTbeNf8UuRRANXQvREHw:/NRWebFlows.1d3sM7CHf0Wwgjg7N1WecQ/NodesShownInESpaceTree.rmkTbeNf8UuRRANXQvREHw:N8+QGDZQEm7gslW_tIyDHQ", "Connect2_LegacyShared", "HighlightSearch", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:rmkTbeNf8UuRRANXQvREHw", callContext.id);
            OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:1d3sM7CHf0Wwgjg7N1WecQ", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = null;
        Controller.prototype.onReadyEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "Directory/HighlightSearch On Ready");
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

                OutSystemsDebugger.setThreadStartName(callContext.id, "Directory/HighlightSearch On Parameters Changed");
                return controller.onReady$Action(callContext);

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
define("Connect2_LegacyShared.Directory.HighlightSearch.mvc$controller.OnReady.HighlightJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        // remove accents
        function normalizeText(text) {
            return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        }

        // Escape regex special chars
        function escapeRegex(str) {
            return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        }

        var container = document.getElementById($parameters.ContainerId);

        // Reset container
        var newContainer = container.cloneNode(false);
        container.parentNode.replaceChild(newContainer, container);
        container = newContainer;

        var searchText = $parameters.Text || "";
        var terms = $parameters.SearchTerms ? $parameters.SearchTerms.split(" ") : [];
        var wordBoundary = $parameters.useWordbound ? "\\b" : "";

        var matches = [];

        terms.forEach(function(term) {
            if (!term) return;

            // Try exact first
            var escTerm = escapeRegex(term);
            var exactRegex = new RegExp(wordBoundary + escTerm + wordBoundary, "gi");
            var m;
            var found = false;
            while ((m = exactRegex.exec(searchText))) {
                matches.push({
                    start: m.index,
                    end: m.index + m[0].length,
                    text: m[0]
                });
                found = true;
            }

            // If nothing exact, try normalized
            if (!found) {
                var normTerm = normalizeText(term);
                var normText = normalizeText(searchText);
                var normRegex = new RegExp(wordBoundary + escapeRegex(normTerm) + wordBoundary, "gi");
                while ((m = normRegex.exec(normText))) {
                    var origStart = m.index;
                    var origEnd = m.index + m[0].length;
                    matches.push({
                        start: origStart,
                        end: origEnd,
                        text: searchText.substring(origStart, origEnd)
                    });
                }
            }
        });

        // Sort and remove overlaps
        matches.sort((a, b) => a.start - b.start);
        var merged = [];
        matches.forEach(curr => {
            if (!merged.length || curr.start > merged[merged.length - 1].end) {
                merged.push(curr);
            } else {
                merged[merged.length - 1].end = Math.max(merged[merged.length - 1].end, curr.end);
                merged[merged.length - 1].text = searchText.substring(merged[merged.length - 1].start, merged[merged.length - 1].end);
            }
        });


        var last = 0;
        merged.forEach(m => {
            if (last < m.start) container.appendChild(document.createTextNode(searchText.substring(last, m.start)));
            var mark = document.createElement("mark");
            mark.appendChild(document.createTextNode(m.text));
            container.appendChild(mark);
            last = m.end;
        });
        if (last < searchText.length) {
            container.appendChild(document.createTextNode(searchText.substring(last)));
        }

    };
});

define("Connect2_LegacyShared.Directory.HighlightSearch.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "jOZwlNKVrUmvZ56W2PimtA": {
            getter: function(varBag, idService) {
                return varBag.removeRegexSpecialCharactersVar.value;
            }
        },
        "fre9hw62QU2RurXFLZjMiA": {
            getter: function(varBag, idService) {
                return varBag.highlightJSResult.value;
            }
        },
        "Fg+p36nVh0KqqYothuCBsQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.textIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "MLB_7pwW_k6GAnQzW_8i8w": {
            getter: function(varBag, idService) {
                return varBag.model.variables.searchTermsIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "lEiESH7+xEStR_YZc6wk9A": {
            getter: function(varBag, idService) {
                return varBag.model.variables.stopWordsIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "IPTcQhl3CkaSqVt3+j3urA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isWordboundIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "0ni1DvCy80Oh9mkEWaQ8ag": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Contents"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});