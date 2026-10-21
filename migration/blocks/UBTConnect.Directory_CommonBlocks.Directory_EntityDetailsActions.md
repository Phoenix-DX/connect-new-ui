# UBTConnect.Directory_CommonBlocks.Directory_EntityDetailsActions

- Kind: shared; build screens using it: HouseholdCarousel, HouseholdDetails, Locality_Details, OneSchoolGlobalDetails, Profile, SupperMeeting_Carousel, SupperMeeting_Details
- Compiled source: `migration/screens/HouseholdCarousel/analysis/sources/pretty/UBTConnect.Directory_CommonBlocks.Directory_EntityDetailsActions.mvc.js`
- Child blocks: UBTConnectLibrary.ConnectCorePatterns.ActionsMenu, UBTConnectLibrary.ConnectPatterns.SkeletonSection, UBTConnect_Utils.CW_CTA_PopUps.ContactByMessage_Wrapper, UBTConnect_Utils.CW_CTA_PopUps.ContactPopup_ByPhone, UBTConnect_Utils.CW_CTA_PopUps.SharePopup, UBTConnect_Utils.CW_Notes.NotesSheet, UBTConnect_Utils.CW_Share.ShareSheet, UBTConnect_Utils.CW_Share.ShareableObject_Generic (queue: UBTConnectLibrary.ConnectCorePatterns.ActionsMenu, UBTConnect_Utils.CW_CTA_PopUps.ContactByMessage_Wrapper, UBTConnect_Utils.CW_CTA_PopUps.ContactPopup_ByPhone, UBTConnect_Utils.CW_CTA_PopUps.SharePopup, UBTConnect_Utils.CW_Notes.NotesSheet, UBTConnect_Utils.CW_Share.ShareSheet, UBTConnect_Utils.CW_Share.ShareableObject_Generic)

## Inputs

| Input | Type |
|---|---|
| EnableOptions | Record ActionsMenuEnableOptionsRec |
| useViewDetails | Boolean |

## Captured DOM variants (1 distinct, 42 instances)

### Variant 1: HouseholdCarousel/default (×42)

```html
<div class="OSBlockWidget" data-block="Directory_CommonBlocks.Directory_EntityDetailsActions" id="b3-l1-1152_0-b2-b3-b1-$b33">
  <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="b3-l1-1152_0-b2-b3-b1-b33-$b1"><!-- nested block: 88 nodes --></div>
  <div class="OSBlockWidget" data-block="CW_CTA_PopUps.ContactByMessage_Wrapper" id="b3-l1-1152_0-b2-b3-b1-b33-$b3"><!-- nested block: 2 nodes --></div>
  <div class="OSBlockWidget" data-block="CW_CTA_PopUps.ContactPopup_ByPhone" id="b3-l1-1152_0-b2-b3-b1-b33-$b4"><!-- nested block: 1 nodes --></div>
  <div class="OSBlockWidget" data-block="CW_CTA_PopUps.SharePopup" id="b3-l1-1152_0-b2-b3-b1-b33-$b5"><!-- nested block: 1 nodes --></div>
  <div class="OSBlockWidget" data-block="CW_Notes.NotesSheet" id="b3-l1-1152_0-b2-b3-b1-b33-$b8"><!-- nested block: 0 nodes --></div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("UBTConnect.Directory_CommonBlocks.Directory_EntityDetailsActions.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnect_Utils.controller", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "Connect2_Sharing_CS.model", "UBTJavaScriptUtils.controller", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "UBTConnect_Bookmarks_MCS.model", "UBTConnect_Bookmarks_MCS.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.Directory_CommonBlocks.Directory_EntityDetailsActions.mvc$model", "UBTConnect.Directory_CommonBlocks.Directory_EntityDetailsActions.mvc$controller", "UBTConnect.clientVariables", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.ConnectCorePatterns.ActionsMenu.mvc$view", "UBTConnect_Utils.CW_CTA_PopUps.ContactByMessage_Wrapper.mvc$view", "UBTConnect_Utils.CW_CTA_PopUps.ContactPopup_ByPhone.mvc$view", "UBTConnect_Utils.CW_CTA_PopUps.SharePopup.mvc$view", "UBTConnect_Utils.CW_Share.ShareSheet.mvc$view", "UBTConnect_Utils.CW_Share.ShareableObject_Generic.mvc$view", "UBTConnect_Utils.CW_Notes.NotesSheet.mvc$view", "UBTConnect_Utils.controller$GetHasNewBookmarks", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTConnect_Utils.controller$GetHasExtendedShare", "UBTConnectLibrary.model$ActionsMenuOptionsRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnect_Utils.model$ContactPopUp_OverrideOptionsRec", "UBTConnectLibrary.model$ActionsMenuEnableOptionsRec", "UBTConnect_Utils.model$UI_ContactByMessage_WrapperDataRec", "UBTConnect_Utils.model$ContactPopupDataRec", "UBTConnect_Utils.model$ContactByPhonePopupDataRec", "Connect2_Sharing_CS.model$UI_ShareableObject_GenericRec", "UBTConnect.referencesHealth$Connect2_Sharing_CS", "UBTConnectLibrary.model$NotesRec", "UBTConnectLibrary.model$Note_ItemRec", "UBTConnect.model$Note_ItemList", "UBTJavaScriptUtils.controller$ScreenController_RaiseError", "UBTConnect.referencesHealth$UBTJavaScriptUtils", "UBTJavaScriptUtils.controller$ScreenController_RaiseTypedException", "UBTJavaScriptUtils.controller$ScreenController_RaiseCommunicationError", "UBTConnect_Utils.controller$ShareEntity_ByURL", "UBTConnect.controller$ToggleBookmarkItem_C2", "UBTConnect.controller$ToggleBookmarkItem", "UBTConnect.controller$GetNameAndSurname_ByFullName", "Connect2_LegacyShared.model$LocalBookmarkRec", "UBTConnect.referencesHealth$Connect2_LegacyShared", "Connect2_LegacyShared.controller$Get_LocalBookmarkByObjectId", "UBTConnect.controller$GetBookmarkType_FromEntity", "UBTConnect_Bookmarks_MCS.model$LocalBookmarkRec", "UBTConnect.referencesHealth$UBTConnect_Bookmarks_MCS", "UBTConnect_Bookmarks_MCS.controller$GetLocalBookmarkByObjectId", "UBTConnect.controller$GetBookmarkCategoryId_ByEntityTypeId", "UBTConnect.controller$GetShareType_FromEntity", "UBTConnect.controller$Get_NoteCategoryId_ByEntityTypeId"], function(OutSystems, UBTConnectModel, UBTConnectController, UBTConnect_UtilsController, UBTConnectLibraryModel, UBTConnect_UtilsModel, Connect2_Sharing_CSModel, UBTJavaScriptUtilsController, Connect2_LegacySharedModel, Connect2_LegacySharedController, UBTConnect_Bookmarks_MCSModel, UBTConnect_Bookmarks_MCSController, React, OSView, UBTConnect_Directory_CommonBlocks_Directory_EntityDetailsActions_mvc_model, UBTConnect_Directory_CommonBlocks_Directory_EntityDetailsActions_mvc_controller, UBTConnectClientVariables, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, OSWidgets, UBTConnectLibrary_ConnectCorePatterns_ActionsMenu_mvc_view, UBTConnect_Utils_CW_CTA_PopUps_ContactByMessage_Wrapper_mvc_view, UBTConnect_Utils_CW_CTA_PopUps_ContactPopup_ByPhone_mvc_view, UBTConnect_Utils_CW_CTA_PopUps_SharePopup_mvc_view, UBTConnect_Utils_CW_Share_ShareSheet_mvc_view, UBTConnect_Utils_CW_Share_ShareableObject_Generic_mvc_view, UBTConnect_Utils_CW_Notes_NotesSheet_mvc_view) {
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
        View.displayName = "Directory_CommonBlocks.Directory_EntityDetailsActions";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, UBTConnectLibrary_ConnectCorePatterns_ActionsMenu_mvc_view, UBTConnect_Utils_CW_CTA_PopUps_ContactByMessage_Wrapper_mvc_view, UBTConnect_Utils_CW_CTA_PopUps_ContactPopup_ByPhone_mvc_view, UBTConnect_Utils_CW_CTA_PopUps_SharePopup_mvc_view, UBTConnect_Utils_CW_Share_ShareSheet_mvc_view, UBTConnect_Utils_CW_Share_ShareableObject_Generic_mvc_view, UBTConnect_Utils_CW_Notes_NotesSheet_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_Directory_CommonBlocks_Directory_EntityDetailsActions_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_Directory_CommonBlocks_Directory_EntityDetailsActions_mvc_controller;
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
            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, {
                inputs: {
                    In_IsLoading: (((!(model.variables.isLoadedVar) || !(UBTConnectClientVariables.getBookmarks_IsSynched())) || !(UBTConnectClientVariables.getNotes_IsSynched())) && !(model.variables.fetchContactDetailsDataAct.hasFetchErrorAttr))
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
                    placeholder_LoadingSection: new PlaceholderContent(function() {
                        return [React.createElement(UBTConnectLibrary_ConnectCorePatterns_ActionsMenu_mvc_view, {
                            inputs: {
                                IsEnabled: model.variables.isEnabledIn,
                                _isEnabledInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isEnabledInDataFetchStatus),
                                InShowLabels: model.variables.showIconLabelsVar,
                                In_ActionsEnableOptions: model.variables.enableOptionsIn,
                                _in_ActionsEnableOptionsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._enableOptionsInDataFetchStatus),
                                In_ActionsMenuOptions: model.getCachedValue(idService.getId("6MKRTYwotESbnmBfOAh6zQ.In_ActionsMenuOptions"), function() {
                                    return function() {
                                        var rec = new UBTConnectLibraryModel.ActionsMenuOptionsRec();
                                            return UBTConnect_UtilsController.default.getHasNewBookmarks$Action(callContext).out_HasNewBookmarksOut;
                                        }, OS.DataTypes.DataTypes.Boolean, callContext.id))) ? (!(model.variables.local_isBookmarkedVar)) : (!(model.variables.local_isBookmarked_C2Var))));
                                            return UBTConnect_UtilsController.default.getHasNewBookmarks$Action(callContext).out_HasNewBookmarksOut;
                                        }, OS.DataTypes.DataTypes.Boolean, callContext.id))) ? (model.variables.local_isBookmarkedVar) : (model.variables.local_isBookmarked_C2Var)));
                                        rec.hasNotesAttr = model.variables.local_In_ActionsMenuOptionsVar.hasNotesAttr;
                                        rec.hasGiftAttr = model.variables.local_In_ActionsMenuOptionsVar.hasGiftAttr;
                                        rec.hasShareAttr = model.variables.local_In_ActionsMenuOptionsVar.hasShareAttr;
                                        rec.hasCallAttr = model.variables.local_In_ActionsMenuOptionsVar.hasCallAttr;
                                        rec.hasEmailAttr = model.variables.local_In_ActionsMenuOptionsVar.hasEmailAttr;
                                        rec.hasViewDetailsAttr = model.variables.local_In_ActionsMenuOptionsVar.hasViewDetailsAttr;
                                        return rec;
                                    }();
                                }, function() {
                                    return model.variables.local_In_ActionsMenuOptionsVar.hasBookmarkAttr;
                                }, function() {
                                    return model.variables.local_isBookmarkedVar;
                                }, function() {
                                    return model.variables.local_isBookmarked_C2Var;
                                }, function() {
                                    return model.variables.local_In_ActionsMenuOptionsVar.hasNotesAttr;
                                }, function() {
                                    return model.variables.local_In_ActionsMenuOptionsVar.hasGiftAttr;
                                }, function() {
                                    return model.variables.local_In_ActionsMenuOptionsVar.hasShareAttr;
                                }, function() {
                                    return model.variables.local_In_ActionsMenuOptionsVar.hasCallAttr;
                                }, function() {
                                    return model.variables.local_In_ActionsMenuOptionsVar.hasEmailAttr;
                                }, function() {
                                    return model.variables.local_In_ActionsMenuOptionsVar.hasViewDetailsAttr;
                                })
                            },
                            events: {
                                _handleError: function(ex) {
                                    controller.handleError(ex);
                                },
                                event_Click_Share$Action: function() {
                                    var eventHandlerContext = callContext.clone();
                                    return OS.Flow.tryFinally(function() {
                                        var varBag = {};
                                        controller.pushDebuggerContext(eventHandlerContext);
                                        controller.handle_Share$Action(true, controller.callContext(eventHandlerContext));
                                    }, function() {
                                        controller.popDebuggerContext(eventHandlerContext);
                                    });
                                    ;
                                },
                                event_Click_ViewDetails$Action: function() {
                                    var eventHandlerContext = callContext.clone();
                                    return OS.Flow.tryFinally(function() {
                                        var varBag = {};
                                        controller.pushDebuggerContext(eventHandlerContext);
                                        controller.viewDetails_OnClick$Action(controller.callContext(eventHandlerContext));
                                    }, function() {
                                        controller.popDebuggerContext(eventHandlerContext);
                                    });
                                    ;
                                },
                                event_Click_Call$Action: function() {
                                    var eventHandlerContext = callContext.clone();
                                    return OS.Flow.tryFinally(function() {
                                        var varBag = {};
                                        controller.pushDebuggerContext(eventHandlerContext);
                                        controller.handle_Call$Action(true, controller.callContext(eventHandlerContext));
                                    }, function() {
                                        controller.popDebuggerContext(eventHandlerContext);
                                    });
                                    ;
                                },
                                event_Click_Unbookmark$Action: function() {
                                    return Promise.resolve().then(function() {
                                        var eventHandlerContext = callContext.clone();
                                        return OS.Flow.tryFinally(function() {
                                            var varBag = {};
                                            controller.pushDebuggerContext(eventHandlerContext);
                                            return controller.handle_Bookmark$Action(controller.callContext(eventHandlerContext));
                                        }, function() {
                                            controller.popDebuggerContext(eventHandlerContext);
                                        });
                                    });;
                                },
                                event_Click_Bookmark$Action: function() {
                                    return Promise.resolve().then(function() {
                                        var eventHandlerContext = callContext.clone();
                                        return OS.Flow.tryFinally(function() {
                                            var varBag = {};
                                            controller.pushDebuggerContext(eventHandlerContext);
                                            return controller.handle_Bookmark$Action(controller.callContext(eventHandlerContext));
                                        }, function() {
                                            controller.popDebuggerContext(eventHandlerContext);
                                        });
                                    });;
                                },
                                event_Click_Notes$Action: function() {
                                    return Promise.resolve().then(function() {
                                        var eventHandlerContext = callContext.clone();
                                        return OS.Flow.tryFinally(function() {
                                            var varBag = {};
                                            controller.pushDebuggerContext(eventHandlerContext);
                                            return controller.handler_AddNotes$Action(controller.callContext(eventHandlerContext));
                                        }, function() {
                                            controller.popDebuggerContext(eventHandlerContext);
                                        });
                                    });;
                                },
                                event_Click_Email$Action: function() {
                                    var eventHandlerContext = callContext.clone();
                                    return OS.Flow.tryFinally(function() {
                                        var varBag = {};
                                        controller.pushDebuggerContext(eventHandlerContext);
                                        controller.handle_Mail$Action(true, controller.callContext(eventHandlerContext));
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
                                uuid: "1",
                                alias: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        })];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.local_isBookmarked_C2Var), asPrimitiveValue(model.variables.local_isBookmarkedVar), asPrimitiveValue(model.variables.local_In_ActionsMenuOptionsVar.hasViewDetailsAttr), asPrimitiveValue(model.variables.local_In_ActionsMenuOptionsVar.hasEmailAttr), asPrimitiveValue(model.variables.local_In_ActionsMenuOptionsVar.hasCallAttr), asPrimitiveValue(model.variables.local_In_ActionsMenuOptionsVar.hasShareAttr), asPrimitiveValue(model.variables.local_In_ActionsMenuOptionsVar.hasGiftAttr), asPrimitiveValue(model.variables.local_In_ActionsMenuOptionsVar.hasNotesAttr), asPrimitiveValue(model.variables.local_In_ActionsMenuOptionsVar.hasBookmarkAttr), asPrimitiveValue(model.variables.enableOptionsIn), asPrimitiveValue(model.variables.showIconLabelsVar), asPrimitiveValue(model.variables._enableOptionsInDataFetchStatus), asPrimitiveValue(model.variables._isEnabledInDataFetchStatus), asPrimitiveValue(model.variables.isEnabledIn)]
            }), React.createElement(UBTConnect_Utils_CW_CTA_PopUps_ContactByMessage_Wrapper_mvc_view, {
                inputs: {
                    In_ContactPopupData: model.getCachedValue(idService.getId("8wBcfYl7mU2A7nOuWh3qEg.In_ContactPopupData"), function() {
                        return function() {
                            var rec = new UBTConnect_UtilsModel.UI_ContactByMessage_WrapperDataRec();
                            rec.emailAttr = model.variables.fetchContactDetailsDataAct.emailOut;
                            rec.phoneAttr = model.variables.fetchContactDetailsDataAct.mobilePhoneOut;
                            rec.contactPopupDataAttr = function() {
                                var rec = new UBTConnect_UtilsModel.ContactPopupDataRec();
                                rec.imageURLAttr = model.variables.contactPopUp_OverrideOptionsIn.imageURLAttr;
                                rec.entityTypeIdAttr = model.variables.entityTypeIn;
                                rec.entityIdAttr = model.variables.entityIdIn;
                                rec.isAvatarImageAttr = model.variables.fetchContactDetailsDataAct.contactPopupDataOut.isAvatarImageAttr;
                                rec.actionNameAttr = model.variables.fetchContactDetailsDataAct.contactPopupDataOut.actionNameAttr;
                                rec.nameAttr = model.variables.fetchContactDetailsDataAct.contactPopupDataOut.nameAttr;
                                rec.localityAttr = model.variables.fetchContactDetailsDataAct.contactPopupDataOut.localityAttr;
                                rec.timezoneNameAttr = model.variables.fetchContactDetailsDataAct.contactPopupDataOut.timezoneNameAttr;
                                rec.timezoneOffsetAttr = model.variables.fetchContactDetailsDataAct.contactPopupDataOut.timezoneOffsetAttr;
                                rec.showPopupAttr = model.variables.showEmailPopUpVar;
                                rec.displayContactNumberAttr = model.variables.fetchContactDetailsDataAct.contactPopupDataOut.displayContactNumberAttr;
                                rec.isFetchingTimezoneAttr = false;
                                rec.isLoadingAttr = !((model.variables.fetchContactDetailsDataAct.isDataFetchedAttr || model.variables.fetchContactDetailsDataAct.hasFetchErrorAttr));
                                rec.countryNameAttr = model.variables.fetchContactDetailsDataAct.contactPopupDataOut.countryNameAttr;
                                return rec;
                            }();
                            return rec;
                        }();
                    }, function() {
                        return model.variables.fetchContactDetailsDataAct.emailOut;
                    }, function() {
                        return model.variables.fetchContactDetailsDataAct.mobilePhoneOut;
                    }, function() {
                        return model.variables.contactPopUp_OverrideOptionsIn.imageURLAttr;
                    }, function() {
                        return model.variables.entityTypeIn;
```
(… 414 more lines in `migration/screens/HouseholdCarousel/analysis/sources/pretty/UBTConnect.Directory_CommonBlocks.Directory_EntityDetailsActions.mvc.js`)
