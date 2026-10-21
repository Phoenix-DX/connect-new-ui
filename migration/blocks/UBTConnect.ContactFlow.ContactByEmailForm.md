# UBTConnect.ContactFlow.ContactByEmailForm

- Kind: shared; build screens using it: ContactByEmailMember, ContactByEmailOneSchoolGlobal
- Compiled source: `migration/screens/ContactByEmailMember/analysis/sources/pretty/UBTConnect.ContactFlow.ContactByEmailForm.mvc.js`
- Child blocks: OutSystemsUI_2_23.Utilities.ButtonLoading, UBTConnect.App_Common_Blocks_PopupDialogs.Dialog_Navigation, UBTConnectLibrary.BasePatterns.CustomContainer, UBTConnectLibrary.ConnectPatterns.DynamicTextArea, UBTConnectLibrary.ConnectPatterns.FixedFooter, UBTConnectLibrary.ConnectPatterns.InputCounter, UBTConnectLibrary.ConnectPatterns.TextArea_WithCounter, UBTConnect_Utils.CW_Common.Button (queue: UBTConnect.App_Common_Blocks_PopupDialogs.Dialog_Navigation, UBTConnectLibrary.ConnectPatterns.DynamicTextArea)

## Inputs

| Input | Type |
|---|---|
| IsLoading | Boolean |
| In_SubjectPlaceholder | Text |
| In_MessagePlaceholder | Text |
| In_Subject | Text |
| In_UseDynamicTextAreaSubject | Boolean |
| In_MessageLabel | Text |

## Captured DOM variants (1 distinct, 6 instances)

### Variant 1: ContactByEmailMember/default (×6)

```html
<div class="OSBlockWidget" data-block="ContactFlow.ContactByEmailForm" id="$b2">
  <div class="ubt-fixed-footer--content" data-container="" id="b2-Div_Content" style="--ubt-fixed-footer---footer-height: calc(2 * var(--space-base) + var(--ubt-button-height-m));">
    <div class="OSBlockWidget" data-block="BasePatterns.CustomContainer" id="b2-$b1"><!-- nested block: 77 nodes --></div>
  </div>
  <div class="OSBlockWidget" data-block="ConnectPatterns.FixedFooter" id="b2-$b8"><!-- nested block: 28 nodes --></div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("UBTConnect.ContactFlow.ContactByEmailForm.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "NavigationHandler.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.ContactFlow.ContactByEmailForm.mvc$model", "UBTConnect.ContactFlow.ContactByEmailForm.mvc$controller", "UBTConnect.clientVariables", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "UBTConnectLibrary.ConnectPatterns.DynamicTextArea.mvc$view", "UBTConnectLibrary.ConnectPatterns.InputCounter.mvc$view", "UBTConnectLibrary.ConnectPatterns.TextArea_WithCounter.mvc$view", "UBTConnectLibrary.ConnectPatterns.FixedFooter.mvc$view", "OutSystemsUI_2_23.Utilities.ButtonLoading.mvc$view", "UBTConnect_Utils.CW_Common.Button.mvc$view", "UBTConnect.App_Common_Blocks_PopupDialogs.Dialog_Navigation.mvc$view", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$ButtonOptionsRec", "NavigationHandler.controller$AllowUpcomingNavigation", "UBTConnect.referencesHealth$NavigationHandler", "NavigationHandler.controller$PreventNavigation"], function(OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, NavigationHandlerController, React, OSView, UBTConnect_ContactFlow_ContactByEmailForm_mvc_model, UBTConnect_ContactFlow_ContactByEmailForm_mvc_controller, UBTConnectClientVariables, OSWidgets, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_ConnectPatterns_DynamicTextArea_mvc_view, UBTConnectLibrary_ConnectPatterns_InputCounter_mvc_view, UBTConnectLibrary_ConnectPatterns_TextArea_WithCounter_mvc_view, UBTConnectLibrary_ConnectPatterns_FixedFooter_mvc_view, OutSystemsUI_2_23_Utilities_ButtonLoading_mvc_view, UBTConnect_Utils_CW_Common_Button_mvc_view, UBTConnect_App_Common_Blocks_PopupDialogs_Dialog_Navigation_mvc_view) {
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
        View.displayName = "ContactFlow.ContactByEmailForm";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_ConnectPatterns_DynamicTextArea_mvc_view, UBTConnectLibrary_ConnectPatterns_InputCounter_mvc_view, UBTConnectLibrary_ConnectPatterns_TextArea_WithCounter_mvc_view, UBTConnectLibrary_ConnectPatterns_FixedFooter_mvc_view, OutSystemsUI_2_23_Utilities_ButtonLoading_mvc_view, UBTConnect_Utils_CW_Common_Button_mvc_view, UBTConnect_App_Common_Blocks_PopupDialogs_Dialog_Navigation_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_ContactFlow_ContactByEmailForm_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_ContactFlow_ContactByEmailForm_mvc_controller;
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
                visible: true,
                _idProps: {
                    service: idService,
                    name: "Div_Content"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                inputs: {
                    Options: model.getCachedValue(idService.getId("lxT47mpyiECr28GDvoXkuA.Options"), function() {
                        return function() {
                            var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                            rec.paddingSizeAttr = function() {
                                var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                rec.horizontalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.base;
                                rec.topSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
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
                    content: new PlaceholderContent(function() {
                        return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                            inputs: {
                                Options: model.getCachedValue(idService.getId("sGeXMvNVn0Sf5Yzd0wg98A.Options"), function() {
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
                            placeholders: {
                                content: new PlaceholderContent(function() {
                                    return [React.createElement(OSWidgets.Placeholder, {
                                        align: /*Default*/ 0,
                                        content: _this.props.placeholders.placeholder_ContactCard,
                                        _idProps: {
                                            service: idService,
                                            name: "Placeholder_ContactCard"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    })];
                                })
                            }
                        }), React.createElement(OSWidgets.Form, {
                            _validationProps: {
                                validationService: validationService
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "form",
                            _idProps: {
                                service: idService,
                                name: "Form1"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "5"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Label, {
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            mandatory: false,
                            targetWidget: "Input_Subject",
                            _idProps: {
                                service: idService,
                                uuid: "6"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, "Subject"), $if(model.variables.in_UseDynamicTextAreaSubjectIn, false, this, function() {
                            return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                                inputs: {
                                    Options: model.getCachedValue(idService.getId("a3FuMEu5aka29LDbd9IMww.Options"), function() {
                                        return function() {
                                            var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
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
                                    validationService: validationService,
                                    validationParentId: idService.getId("Form1")
                                },
                                _idProps: {
                                    service: idService,
                                    uuid: "7",
                                    alias: "3"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                placeholders: {
                                    content: new PlaceholderContent(function() {
                                        return [React.createElement(UBTConnectLibrary_ConnectPatterns_DynamicTextArea_mvc_view, {
                                            inputs: {
                                                In_IsBounded: true,
                                                In_Text: model.variables.subjectVar
                                            },
                                            events: {
                                                _handleError: function(ex) {
                                                    controller.handleError(ex);
                                                }
                                            },
                                            _validationProps: {
                                                validationService: validationService,
                                                validationParentId: idService.getId("Form1")
                                            },
                                            _idProps: {
                                                service: idService,
                                                uuid: "8",
                                                alias: "4"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider,
                                            placeholders: {
                                                placeholder_TextArea: new PlaceholderContent(function() {
                                                    return [React.createElement(OSWidgets.TextArea, {
                                                        _validationProps: {
                                                            validationService: validationService,
                                                            validationParentId: idService.getId("Form1")
                                                        },
                                                        enabled: ((model.variables.in_SubjectIn === "") && !(model.variables.isLoadingIn)),
                                                        gridProperties: {
                                                            classes: "OSFillParent"
                                                        },
                                                        mandatory: false,
                                                        maxLength: 100,
                                                        style: "form-control",
                                                        textLines: 1,
                                                        variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.subjectVar, function(value) {
                                                            model.variables.subjectVar = value;
                                                        }),
                                                        _idProps: {
                                                            service: idService,
                                                            name: "TextArea_Subject"
                                                        },
                                                        _widgetRecordProvider: widgetsRecordProvider,
                                                        enabled_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_SubjectInDataFetchStatus, model.variables._isLoadingInDataFetchStatus)
                                                    })];
                                                })
                                            },
                                            _dependencies: [asPrimitiveValue(model.variables._isLoadingInDataFetchStatus), asPrimitiveValue(model.variables._in_SubjectInDataFetchStatus), asPrimitiveValue(model.variables.isLoadingIn), asPrimitiveValue(model.variables.in_SubjectIn), asPrimitiveValue(model.variables.subjectVar)]
                                        }), $if(((model.variables.in_SubjectIn) !== ("")), false, this, function() {
```
(… 343 more lines in `migration/screens/ContactByEmailMember/analysis/sources/pretty/UBTConnect.ContactFlow.ContactByEmailForm.mvc.js`)
