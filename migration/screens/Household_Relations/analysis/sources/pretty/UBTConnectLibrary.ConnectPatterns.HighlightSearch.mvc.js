define("UBTConnectLibrary.ConnectPatterns.HighlightSearch.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.ConnectPatterns.IconInline_Internal.mvc$model", "UBTConnectLibrary.model$InlineIconRec", "UBTConnectLibrary.controller$RemoveRegexSpecialCharacters"], function(OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibrary_ConnectPatterns_IconInline_Internal_mvcModel) {
    var OS = OutSystems.Internal;


    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("MainContainerClass", "mainContainerClassVar", "MainContainerClass", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "highlight-search";
                }, false),
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
                }, false),
                this.attr("HighlightClasses", "highlightClassesIn", "HighlightClasses", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_highlightClassesInDataFetchStatus", "_highlightClassesInDataFetchStatus", "_highlightClassesInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("InlineIcon", "inlineIconIn", "InlineIcon", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.InlineIconRec());
                }, false, UBTConnectLibraryModel.InlineIconRec),
                this.attr("_inlineIconInDataFetchStatus", "_inlineIconInDataFetchStatus", "_inlineIconInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
                    Model._hasValidationWidgetsValue = UBTConnectLibrary_ConnectPatterns_IconInline_Internal_mvcModel.hasValidationWidgets;
                }

                return Model._hasValidationWidgetsValue;
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

            if ("HighlightClasses" in inputs) {
                this.variables.highlightClassesIn = inputs.HighlightClasses;
                if ("_highlightClassesInDataFetchStatus" in inputs) {
                    this.variables._highlightClassesInDataFetchStatus = inputs._highlightClassesInDataFetchStatus;
                }

            }

            if ("InlineIcon" in inputs) {
                this.variables.inlineIconIn = inputs.InlineIcon;
                if ("_inlineIconInDataFetchStatus" in inputs) {
                    this.variables._inlineIconInDataFetchStatus = inputs._inlineIconInDataFetchStatus;
                }

            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "ConnectPatterns.HighlightSearch");
});
define("UBTConnectLibrary.ConnectPatterns.HighlightSearch.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "react", "OutSystems/ReactView/Main", "UBTConnectLibrary.ConnectPatterns.HighlightSearch.mvc$model", "UBTConnectLibrary.ConnectPatterns.HighlightSearch.mvc$controller", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.ConnectPatterns.IconInline_Internal.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.model$InlineIconRec", "UBTConnectLibrary.controller$RemoveRegexSpecialCharacters"], function(OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, React, OSView, UBTConnectLibrary_ConnectPatterns_HighlightSearch_mvc_model, UBTConnectLibrary_ConnectPatterns_HighlightSearch_mvc_controller, UBTConnectLibraryClientVariables, UBTConnectLibrary_ConnectPatterns_IconInline_Internal_mvc_view, OSWidgets) {
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
        View.displayName = "ConnectPatterns.HighlightSearch";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_ConnectPatterns_IconInline_Internal_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnectLibrary_ConnectPatterns_HighlightSearch_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnectLibrary_ConnectPatterns_HighlightSearch_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnectLibrary_ConnectPatterns_IconInline_Internal_mvc_view, {
                inputs: {
                    InlineIcon: model.variables.inlineIconIn,
                    _inlineIconInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._inlineIconInDataFetchStatus)
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
                _dependencies: []
            }), $if(false, false, this, function() {
                return [];
            }, function() {
                return [];
            }), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    style: "display: inline;"
                },
                style: model.variables.mainContainerClassVar,
                visible: true,
                _idProps: {
                    service: idService,
                    name: "Contents"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);

    return View;
});
define("UBTConnectLibrary.ConnectPatterns.HighlightSearch.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.languageResources", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.ConnectPatterns.HighlightSearch.mvc$debugger", "UBTConnectLibrary.ConnectPatterns.HighlightSearch.mvc$controller.OnReady.Highlight_V3JS", "UBTConnectLibrary.model$InlineIconRec", "UBTConnectLibrary.controller$RemoveRegexSpecialCharacters"], function(OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryLanguageResources, UBTConnectLibraryClientVariables, UBTConnectLibrary_ConnectPatterns_HighlightSearch_mvc_Debugger, UBTConnectLibrary_ConnectPatterns_HighlightSearch_mvc_controller_OnReady_Highlight_V3JS) {
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
            var removeRegexSpecialCharacters2Var = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.removeRegexSpecialCharacters2Var = removeRegexSpecialCharacters2Var;
            try {
                OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:mTktObBZrkCJoVkMtAz28Q:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g/NodesShownInESpaceTree._dLBZHexLkaY3ZBsJ+NyKA/ClientActions.mTktObBZrkCJoVkMtAz28Q:nvONV30lW9N3lfBhmigzPQ", "UBTConnectLibrary", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:rt_Wt0Bpg0+39Cj3i3FmSw", callContext.id);
                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:6+1hiILaCEyAsBUycNfrOA", callContext.id);
                // Execute Action: RemoveRegexSpecialCharacters2
                removeRegexSpecialCharacters2Var.value = UBTConnectLibraryController.default.removeRegexSpecialCharacters$Action(model.variables.searchTermsIn, callContext);

                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:3NGRcXo4QU+ysqh2Wxwamw", callContext.id);
                controller.safeExecuteJSNode(UBTConnectLibrary_ConnectPatterns_HighlightSearch_mvc_controller_OnReady_Highlight_V3JS, "Highlight_V3", "OnReady", {
                    StopWords: OS.DataConversion.JSNodeParamConverter.to(model.variables.stopWordsIn, OS.DataTypes.DataTypes.Text),
                    Text: OS.DataConversion.JSNodeParamConverter.to(model.variables.textIn, OS.DataTypes.DataTypes.Text),
                    HighlightClasses: OS.DataConversion.JSNodeParamConverter.to(model.variables.highlightClassesIn, OS.DataTypes.DataTypes.Text),
                    ContainerId: OS.DataConversion.JSNodeParamConverter.to(idService.getId("Contents"), OS.DataTypes.DataTypes.Text),
                    useWordbound: OS.DataConversion.JSNodeParamConverter.to(model.variables.isWordboundIn, OS.DataTypes.DataTypes.Boolean),
                    SearchTerms: OS.DataConversion.JSNodeParamConverter.to(removeRegexSpecialCharacters2Var.value.textRegexSafeOut, OS.DataTypes.DataTypes.Text)
                }, function($parameters) {}, {}, {});
                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:C5f8p+7_70yFNb94r2rJ0Q", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:mTktObBZrkCJoVkMtAz28Q", callContext.id);
            }

        };

        Controller.prototype.onReady$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:GRnUlqBGNE26Hxr_Ah3_7g:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g:3o_94888UGa0qaomZFOpnQ", "UBTConnectLibrary", "ConnectPatterns", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:_dLBZHexLkaY3ZBsJ+NyKA:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g/NodesShownInESpaceTree._dLBZHexLkaY3ZBsJ+NyKA:C6pNm4CBJRWMgFlQwaDQoA", "UBTConnectLibrary", "HighlightSearch", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:_dLBZHexLkaY3ZBsJ+NyKA", callContext.id);
            OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:GRnUlqBGNE26Hxr_Ah3_7g", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = null;
        Controller.prototype.onReadyEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "ConnectPatterns/HighlightSearch On Ready");
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

                OutSystemsDebugger.setThreadStartName(callContext.id, "ConnectPatterns/HighlightSearch On Parameters Changed");
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
            return UBTConnectLibraryController.default.defaultTimeout;
        };
        return Controller;
    })(OS.Controller.BaseViewController);
    return new OS.Controller.ControllerFactory(Controller, UBTConnectLibraryLanguageResources);
});
define("UBTConnectLibrary.ConnectPatterns.HighlightSearch.mvc$controller.OnReady.Highlight_V3JS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        // Helper function to normalize text (remove accents)
        function normalizeText(text) {
            return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        }

        var container = document.getElementById($parameters.ContainerId);

        // Initialize the pattern for search terms
        var wordsPattern = "";

        if ($parameters.SearchTerms) {
            if ($parameters.SearchTerms.length > 1) {
                // Remove stop words using regex
                var stopWordsRegex = new RegExp(" (" + $parameters.StopWords.replace(/\s+/g, "|") + ") ", "gi");
                wordsPattern = $parameters.SearchTerms; // Keep the search term intact (without normalization)
                wordsPattern = wordsPattern.replace(stopWordsRegex, " ").replace(/( )+/g, "|").replace(/(^\|)|(\|$)/g, ""); // Clean stop words and spaces
            } else {
                wordsPattern = $parameters.SearchTerms; // Single term, no normalization
            }
        }

        // Empty the container
        var newContainer = container.cloneNode(false);
        container.parentNode.replaceChild(newContainer, container);
        container = newContainer;

        if (wordsPattern) {
            // Build regex for search terms
            wordsPattern = "(" + wordsPattern.split("|").sort(function(a, b) {
                return b.length - a.length;
            }).join("|") + ")";

            // Check if word boundaries should be used
            var wordBoundary = $parameters.useWordbound ? "\\b" : ""; // Add word boundaries if useWordbound is true

            // Regex for exact search term matching (accent-sensitive)
            var exactRegex = new RegExp(wordBoundary + wordsPattern + wordBoundary, "gi"); // Case-insensitive, accent-sensitive, word boundary if needed
            var normalizedRegex = new RegExp(wordBoundary + normalizeText(wordsPattern) + wordBoundary, "gi"); // Case-insensitive, normalized, word boundary if needed

            // Process the text for highlighting
            var searchText = $parameters.Text; // Original text with accents
            var normalizedText = normalizeText($parameters.Text); // Normalized text for additional matching
            var lastIndex = 0;

            // Step 1: Check for exact matches
            var exactMatchFound = false;
            var matches = [];
            var match;

            while ((match = exactRegex.exec(searchText))) {
                matches.push({
                    start: match.index,
                    end: match.index + match[0].length,
                    text: match[0]
                });
                exactMatchFound = true;
            }

            // Step 2: If no exact matches, check for normalized matches
            if (!exactMatchFound) {
                while ((match = normalizedRegex.exec(normalizedText))) {
                    matches.push({
                        start: match.index,
                        end: match.index + match[0].length,
                        text: searchText.substr(match.index, match[0].length)
                    });
                    break; // Highlight only the first normalized match
                }
            }

            // Step 3: Sort matches by start index
            matches.sort((a, b) => a.start - b.start);

            // Step 4: Build the highlighted text
            matches.forEach((match) => {
                // Append non-highlighted text before the match
                if (lastIndex < match.start) {
                    var span = document.createElement("span");
                    span.appendChild(document.createTextNode(searchText.substring(lastIndex, match.start)));
                    container.appendChild(span);
                }

                // Append the highlighted text
                var span = document.createElement("span");
                var classes = $parameters.HighlightClasses.replace(/^\s+|\s+$/g, "").split(/\s+/);

                for (var i = 0; i < classes.length; i++) {
                    if (classes[i]) {
                        span.classList.add(classes[i]);
                    }
                }
                var mark = document.createElement("mark");
                span.appendChild(mark);
                mark.appendChild(document.createTextNode(match.text));
                container.appendChild(span);

                lastIndex = match.end;
            });

            // Append any remaining text after the last match
            if (lastIndex < searchText.length) {
                var span = document.createElement("span");
                span.appendChild(document.createTextNode(searchText.substring(lastIndex)));
                container.appendChild(span);
            }

        } else {
            // If no search terms, display the entire text without highlighting
            var span = document.createElement("span");
            span.appendChild(document.createTextNode($parameters.Text));
            container.appendChild(span);
        }

    };
});

define("UBTConnectLibrary.ConnectPatterns.HighlightSearch.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "6+1hiILaCEyAsBUycNfrOA": {
            getter: function(varBag, idService) {
                return varBag.removeRegexSpecialCharacters2Var.value;
            }
        },
        "3NGRcXo4QU+ysqh2Wxwamw": {
            getter: function(varBag, idService) {
                return varBag.highlight_V3JSResult.value;
            }
        },
        "aNBI7NhSt0yfatAJgsM_uQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.mainContainerClassVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "1bkKsSS5IEuqj8yy4heuGg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.textIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "bNlBBqCTikCIWi2hMQhGrw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.searchTermsIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "8u2Ydu5JskCoEk3ybAyWng": {
            getter: function(varBag, idService) {
                return varBag.model.variables.stopWordsIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "VCvsnRRP80Oy5dq7nWtzxQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isWordboundIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "nDQWnUioLECJRbCroOkFOQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.highlightClassesIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "c2fSx+aN706p75x+eedrRg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.inlineIconIn;
            }
        },
        "HnjVN5ozPUir7YVAHMwo9g": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("If_False"));
                })(varBag.model, idService);
            }
        },
        "jsDiP89EhkiHruo32CXI+A": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Contents"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});