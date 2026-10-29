define("UBTConnect.Directory_CommonBlocks.Directory_EntityDetailsActions.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect_Utils.controller", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "Connect2_Sharing_CS.model", "UBTJavaScriptUtils.controller", "UBTConnect.controller", "UBTConnect_Bookmarks_MCS.model", "UBTConnect_Bookmarks_MCS.controller", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$model", "UBTConnectLibrary.ConnectCorePatterns.ActionsMenu.mvc$model", "UBTConnect_Utils.CW_CTA_PopUps.ContactByMessage_Wrapper.mvc$model", "UBTConnect_Utils.CW_CTA_PopUps.ContactPopup_ByPhone.mvc$model", "UBTConnect_Utils.CW_CTA_PopUps.SharePopup.mvc$model", "UBTConnect_Utils.CW_Share.ShareSheet.mvc$model", "UBTConnect_Utils.CW_Share.ShareableObject_Generic.mvc$model", "UBTConnect_Utils.CW_Notes.NotesSheet.mvc$model", "UBTConnect_Utils.controller$GetHasExtendedShare", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTConnectLibrary.model$ActionsMenuOptionsRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$NotesRec", "UBTConnect_Utils.model$ContactPopUp_OverrideOptionsRec", "UBTConnectLibrary.model$ActionsMenuEnableOptionsRec", "UBTConnect_Utils.model$UI_ContactByMessage_WrapperDataRec", "UBTConnect_Utils.model$ContactPopupDataRec", "UBTConnect_Utils.model$ContactByPhonePopupDataRec", "Connect2_Sharing_CS.model$UI_ShareableObject_GenericRec", "UBTConnect.referencesHealth$Connect2_Sharing_CS", "UBTConnectLibrary.model$Note_ItemRec", "UBTConnect.model$Note_ItemList", "UBTJavaScriptUtils.controller$ScreenController_RaiseError", "UBTConnect.referencesHealth$UBTJavaScriptUtils", "UBTJavaScriptUtils.controller$ScreenController_RaiseTypedException", "UBTJavaScriptUtils.controller$ScreenController_RaiseCommunicationError", "UBTConnect_Utils.controller$ShareEntity_ByURL", "UBTConnect.controller$ToggleBookmarkItem_C2", "UBTConnect.controller$GetNameAndSurname_ByFullName", "UBTConnect_Bookmarks_MCS.model$LocalBookmarkRec", "UBTConnect.referencesHealth$UBTConnect_Bookmarks_MCS", "UBTConnect_Bookmarks_MCS.controller$GetLocalBookmarkByObjectId", "UBTConnect.controller$GetBookmarkCategoryId_ByEntityTypeId", "UBTConnect.controller$GetShareType_FromEntity", "UBTConnect.controller$Get_NoteCategoryId_ByEntityTypeId", "UBTConnect.controller$Notes_InterchangeId_ComposeId"], function(OutSystems, UBTConnectModel, UBTConnect_UtilsController, UBTConnectLibraryModel, UBTConnect_UtilsModel, Connect2_Sharing_CSModel, UBTJavaScriptUtilsController, UBTConnectController, UBTConnect_Bookmarks_MCSModel, UBTConnect_Bookmarks_MCSController, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvcModel, UBTConnectLibrary_ConnectCorePatterns_ActionsMenu_mvcModel, UBTConnect_Utils_CW_CTA_PopUps_ContactByMessage_Wrapper_mvcModel, UBTConnect_Utils_CW_CTA_PopUps_ContactPopup_ByPhone_mvcModel, UBTConnect_Utils_CW_CTA_PopUps_SharePopup_mvcModel, UBTConnect_Utils_CW_Share_ShareSheet_mvcModel, UBTConnect_Utils_CW_Share_ShareableObject_Generic_mvcModel, UBTConnect_Utils_CW_Notes_NotesSheet_mvcModel) {
    var OS = OutSystems.Internal;

    var FetchContactDetailsDataActRec = (function(_super) {
        __extends(FetchContactDetailsDataActRec, _super);

        function FetchContactDetailsDataActRec(defaults) {
            _super.apply(this, arguments);
        }
        FetchContactDetailsDataActRec.attributesToDeclare = function() {
            return [
                this.attr("ContactPopupData", "contactPopupDataOut", "ContactPopupData", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnect_UtilsModel.ContactPopupDataRec());
                }, true, UBTConnect_UtilsModel.ContactPopupDataRec),
                this.attr("Phone", "phoneOut", "Phone", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, true),
                this.attr("MobilePhone", "mobilePhoneOut", "MobilePhone", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, true),
                this.attr("HomePhone", "homePhoneOut", "HomePhone", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, true),
                this.attr("WorkPhone", "workPhoneOut", "WorkPhone", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, true),
                this.attr("Email", "emailOut", "Email", true, false, OS.DataTypes.DataTypes.Email, function() {
                    return "";
                }, true),
                this.attr("CountryName", "countryNameOut", "CountryName", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, true),
                this.attr("LocalityId", "localityIdOut", "LocalityId", true, false, OS.DataTypes.DataTypes.LongInteger, function() {
                    return OS.DataTypes.LongInteger.defaultValue;
                }, true),
                this.attr("LocalityName", "localityNameOut", "LocalityName", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, true),
                this.attr("EntitySubtitle", "entitySubtitleOut", "EntitySubtitle", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, true),
                this.attr("EntityName", "entityNameOut", "EntityName", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, true)
            ].concat(_super.attributesToDeclare.call(this));
        };
        FetchContactDetailsDataActRec.init();
        return FetchContactDetailsDataActRec;
    })(OS.Model.DataSourceRecord);
    var FetchNotesDataActRec = (function(_super) {
        __extends(FetchNotesDataActRec, _super);

        function FetchNotesDataActRec(defaults) {
            _super.apply(this, arguments);
        }
        FetchNotesDataActRec.attributesToDeclare = function() {
            return [
                this.attr("Notes", "notesOut", "Notes", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.NotesRec());
                }, true, UBTConnectLibraryModel.NotesRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        FetchNotesDataActRec.fromStructure = function(str) {
            return new FetchNotesDataActRec(new FetchNotesDataActRec.RecordClass({
                notesOut: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        FetchNotesDataActRec.init();
        return FetchNotesDataActRec;
    })(OS.Model.DataSourceRecord);

    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("Local_isBookmarked", "local_isBookmarkedVar", "Local_isBookmarked", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("Local_BookmarkTypeId", "local_BookmarkTypeIdVar", "Local_BookmarkTypeId", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("Local_In_ActionsMenuOptions", "local_In_ActionsMenuOptionsVar", "Local_In_ActionsMenuOptions", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.ActionsMenuOptionsRec());
                }, false, UBTConnectLibraryModel.ActionsMenuOptionsRec),
                this.attr("isLoaded", "isLoadedVar", "isLoaded", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("Local_ShareType", "local_ShareTypeVar", "Local_ShareType", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("ShowCallPopUp", "showCallPopUpVar", "ShowCallPopUp", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("ShowEmailPopUp", "showEmailPopUpVar", "ShowEmailPopUp", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("ShowSharePopup", "showSharePopupVar", "ShowSharePopup", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("ShowNotesSheet", "showNotesSheetVar", "ShowNotesSheet", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("isFetchContacts", "isFetchContactsVar", "isFetchContacts", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("ShowIconLabels", "showIconLabelsVar", "ShowIconLabels", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return true;
                }, false),
                this.attr("ShareSheet_OverwriteImageURL", "shareSheet_OverwriteImageURLVar", "ShareSheet_OverwriteImageURL", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("NoteCategoryId", "noteCategoryIdVar", "NoteCategoryId", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("EntityNotes", "entityNotesVar", "EntityNotes", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.NotesRec());
                }, false, UBTConnectLibraryModel.NotesRec),
                this.attr("FetchNoteId", "fetchNoteIdVar", "FetchNoteId", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("IsEnabled", "isEnabledIn", "IsEnabled", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return true;
                }, false),
                this.attr("_isEnabledInDataFetchStatus", "_isEnabledInDataFetchStatus", "_isEnabledInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("EntityType", "entityTypeIn", "EntityType", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_entityTypeInDataFetchStatus", "_entityTypeInDataFetchStatus", "_entityTypeInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("EntityId", "entityIdIn", "EntityId", true, false, OS.DataTypes.DataTypes.LongInteger, function() {
                    return OS.DataTypes.LongInteger.defaultValue;
                }, false),
                this.attr("_entityIdInDataFetchStatus", "_entityIdInDataFetchStatus", "_entityIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("ContactPopUp_OverrideOptions", "contactPopUp_OverrideOptionsIn", "ContactPopUp_OverrideOptions", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnect_UtilsModel.ContactPopUp_OverrideOptionsRec());
                }, false, UBTConnect_UtilsModel.ContactPopUp_OverrideOptionsRec),
                this.attr("_contactPopUp_OverrideOptionsInDataFetchStatus", "_contactPopUp_OverrideOptionsInDataFetchStatus", "_contactPopUp_OverrideOptionsInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("EnableOptions", "enableOptionsIn", "EnableOptions", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.ActionsMenuEnableOptionsRec());
                }, false, UBTConnectLibraryModel.ActionsMenuEnableOptionsRec),
                this.attr("_enableOptionsInDataFetchStatus", "_enableOptionsInDataFetchStatus", "_enableOptionsInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("useViewDetails", "useViewDetailsIn", "useViewDetails", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("_useViewDetailsInDataFetchStatus", "_useViewDetailsInDataFetchStatus", "_useViewDetailsInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_LocalityId", "in_LocalityIdIn", "In_LocalityId", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_in_LocalityIdInDataFetchStatus", "_in_LocalityIdInDataFetchStatus", "_in_LocalityIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("FetchContactDetails", "fetchContactDetailsDataAct", "fetchContactDetailsDataAct", true, true, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new FetchContactDetailsDataActRec());
                }, true, FetchContactDetailsDataActRec),
                this.attr("FetchNotes", "fetchNotesDataAct", "fetchNotesDataAct", true, true, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new FetchNotesDataActRec());
                }, true, FetchNotesDataActRec)
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
                    Model._hasValidationWidgetsValue = (((((((UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvcModel.hasValidationWidgets || UBTConnectLibrary_ConnectCorePatterns_ActionsMenu_mvcModel.hasValidationWidgets) || UBTConnect_Utils_CW_CTA_PopUps_ContactByMessage_Wrapper_mvcModel.hasValidationWidgets) || UBTConnect_Utils_CW_CTA_PopUps_ContactPopup_ByPhone_mvcModel.hasValidationWidgets) || UBTConnect_Utils_CW_CTA_PopUps_SharePopup_mvcModel.hasValidationWidgets) || UBTConnect_Utils_CW_Share_ShareSheet_mvcModel.hasValidationWidgets) || UBTConnect_Utils_CW_Share_ShareableObject_Generic_mvcModel.hasValidationWidgets) || UBTConnect_Utils_CW_Notes_NotesSheet_mvcModel.hasValidationWidgets);
                }

                return Model._hasValidationWidgetsValue;
            }
        });

        Model.prototype.setInputs = function(inputs) {
            if ("IsEnabled" in inputs) {
                this.variables.isEnabledIn = inputs.IsEnabled;
                if ("_isEnabledInDataFetchStatus" in inputs) {
                    this.variables._isEnabledInDataFetchStatus = inputs._isEnabledInDataFetchStatus;
                }

            }

            if ("EntityType" in inputs) {
                this.variables.entityTypeIn = inputs.EntityType;
                if ("_entityTypeInDataFetchStatus" in inputs) {
                    this.variables._entityTypeInDataFetchStatus = inputs._entityTypeInDataFetchStatus;
                }

            }

            if ("EntityId" in inputs) {
                this.variables.entityIdIn = inputs.EntityId;
                if ("_entityIdInDataFetchStatus" in inputs) {
                    this.variables._entityIdInDataFetchStatus = inputs._entityIdInDataFetchStatus;
                }

            }

            if ("ContactPopUp_OverrideOptions" in inputs) {
                this.variables.contactPopUp_OverrideOptionsIn = inputs.ContactPopUp_OverrideOptions;
                if ("_contactPopUp_OverrideOptionsInDataFetchStatus" in inputs) {
                    this.variables._contactPopUp_OverrideOptionsInDataFetchStatus = inputs._contactPopUp_OverrideOptionsInDataFetchStatus;
                }

            }

            if ("EnableOptions" in inputs) {
                this.variables.enableOptionsIn = inputs.EnableOptions;
                if ("_enableOptionsInDataFetchStatus" in inputs) {
                    this.variables._enableOptionsInDataFetchStatus = inputs._enableOptionsInDataFetchStatus;
                }

            }

            if ("useViewDetails" in inputs) {
                this.variables.useViewDetailsIn = inputs.useViewDetails;
                if ("_useViewDetailsInDataFetchStatus" in inputs) {
                    this.variables._useViewDetailsInDataFetchStatus = inputs._useViewDetailsInDataFetchStatus;
                }

            }

            if ("In_LocalityId" in inputs) {
                this.variables.in_LocalityIdIn = inputs.In_LocalityId;
                if ("_in_LocalityIdInDataFetchStatus" in inputs) {
                    this.variables._in_LocalityIdInDataFetchStatus = inputs._in_LocalityIdInDataFetchStatus;
                }

            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "Directory_CommonBlocks.Directory_EntityDetailsActions");
});
define("UBTConnect.Directory_CommonBlocks.Directory_EntityDetailsActions.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnect_Utils.controller", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "Connect2_Sharing_CS.model", "UBTJavaScriptUtils.controller", "UBTConnect_Bookmarks_MCS.model", "UBTConnect_Bookmarks_MCS.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.Directory_CommonBlocks.Directory_EntityDetailsActions.mvc$model", "UBTConnect.Directory_CommonBlocks.Directory_EntityDetailsActions.mvc$controller", "UBTConnect.clientVariables", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.ConnectCorePatterns.ActionsMenu.mvc$view", "UBTConnect_Utils.CW_CTA_PopUps.ContactByMessage_Wrapper.mvc$view", "UBTConnect_Utils.CW_CTA_PopUps.ContactPopup_ByPhone.mvc$view", "UBTConnect_Utils.CW_CTA_PopUps.SharePopup.mvc$view", "UBTConnect_Utils.CW_Share.ShareSheet.mvc$view", "UBTConnect_Utils.CW_Share.ShareableObject_Generic.mvc$view", "UBTConnect_Utils.CW_Notes.NotesSheet.mvc$view", "UBTConnect_Utils.controller$GetHasExtendedShare", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTConnectLibrary.model$ActionsMenuOptionsRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$NotesRec", "UBTConnect_Utils.model$ContactPopUp_OverrideOptionsRec", "UBTConnectLibrary.model$ActionsMenuEnableOptionsRec", "UBTConnect_Utils.model$UI_ContactByMessage_WrapperDataRec", "UBTConnect_Utils.model$ContactPopupDataRec", "UBTConnect_Utils.model$ContactByPhonePopupDataRec", "Connect2_Sharing_CS.model$UI_ShareableObject_GenericRec", "UBTConnect.referencesHealth$Connect2_Sharing_CS", "UBTConnectLibrary.model$Note_ItemRec", "UBTConnect.model$Note_ItemList", "UBTJavaScriptUtils.controller$ScreenController_RaiseError", "UBTConnect.referencesHealth$UBTJavaScriptUtils", "UBTJavaScriptUtils.controller$ScreenController_RaiseTypedException", "UBTJavaScriptUtils.controller$ScreenController_RaiseCommunicationError", "UBTConnect_Utils.controller$ShareEntity_ByURL", "UBTConnect.controller$ToggleBookmarkItem_C2", "UBTConnect.controller$GetNameAndSurname_ByFullName", "UBTConnect_Bookmarks_MCS.model$LocalBookmarkRec", "UBTConnect.referencesHealth$UBTConnect_Bookmarks_MCS", "UBTConnect_Bookmarks_MCS.controller$GetLocalBookmarkByObjectId", "UBTConnect.controller$GetBookmarkCategoryId_ByEntityTypeId", "UBTConnect.controller$GetShareType_FromEntity", "UBTConnect.controller$Get_NoteCategoryId_ByEntityTypeId", "UBTConnect.controller$Notes_InterchangeId_ComposeId"], function(OutSystems, UBTConnectModel, UBTConnectController, UBTConnect_UtilsController, UBTConnectLibraryModel, UBTConnect_UtilsModel, Connect2_Sharing_CSModel, UBTJavaScriptUtilsController, UBTConnect_Bookmarks_MCSModel, UBTConnect_Bookmarks_MCSController, React, OSView, UBTConnect_Directory_CommonBlocks_Directory_EntityDetailsActions_mvc_model, UBTConnect_Directory_CommonBlocks_Directory_EntityDetailsActions_mvc_controller, UBTConnectClientVariables, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, OSWidgets, UBTConnectLibrary_ConnectCorePatterns_ActionsMenu_mvc_view, UBTConnect_Utils_CW_CTA_PopUps_ContactByMessage_Wrapper_mvc_view, UBTConnect_Utils_CW_CTA_PopUps_ContactPopup_ByPhone_mvc_view, UBTConnect_Utils_CW_CTA_PopUps_SharePopup_mvc_view, UBTConnect_Utils_CW_Share_ShareSheet_mvc_view, UBTConnect_Utils_CW_Share_ShareableObject_Generic_mvc_view, UBTConnect_Utils_CW_Notes_NotesSheet_mvc_view) {
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
                                        rec.hasBookmarkAttr = (model.variables.local_In_ActionsMenuOptionsVar.hasBookmarkAttr && !(model.variables.local_isBookmarkedVar));
                                        rec.hasUnbookmarkAttr = (model.variables.local_In_ActionsMenuOptionsVar.hasBookmarkAttr && model.variables.local_isBookmarkedVar);
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

                                        OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectCorePatterns/ActionsMenu Event_Click_Share");
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

                                        OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectCorePatterns/ActionsMenu Event_Click_ViewDetails");
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

                                        OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectCorePatterns/ActionsMenu Event_Click_Call");
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

                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectCorePatterns/ActionsMenu Event_Click_Unbookmark");
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

                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectCorePatterns/ActionsMenu Event_Click_Bookmark");
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

                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectCorePatterns/ActionsMenu Event_Click_Notes");
                                            return controller.handler_AddNotesOnClick$Action(controller.callContext(eventHandlerContext));
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

                                        OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectCorePatterns/ActionsMenu Event_Click_Email");
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
                _dependencies: [asPrimitiveValue(model.variables.local_isBookmarkedVar), asPrimitiveValue(model.variables.local_In_ActionsMenuOptionsVar.hasViewDetailsAttr), asPrimitiveValue(model.variables.local_In_ActionsMenuOptionsVar.hasEmailAttr), asPrimitiveValue(model.variables.local_In_ActionsMenuOptionsVar.hasCallAttr), asPrimitiveValue(model.variables.local_In_ActionsMenuOptionsVar.hasShareAttr), asPrimitiveValue(model.variables.local_In_ActionsMenuOptionsVar.hasGiftAttr), asPrimitiveValue(model.variables.local_In_ActionsMenuOptionsVar.hasNotesAttr), asPrimitiveValue(model.variables.local_In_ActionsMenuOptionsVar.hasBookmarkAttr), asPrimitiveValue(model.variables.enableOptionsIn), asPrimitiveValue(model.variables.showIconLabelsVar), asPrimitiveValue(model.variables._enableOptionsInDataFetchStatus), asPrimitiveValue(model.variables._isEnabledInDataFetchStatus), asPrimitiveValue(model.variables.isEnabledIn)]
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
                    }, function() {
                        return model.variables.entityIdIn;
                    }, function() {
                        return model.variables.fetchContactDetailsDataAct.contactPopupDataOut.isAvatarImageAttr;
                    }, function() {
                        return model.variables.fetchContactDetailsDataAct.contactPopupDataOut.actionNameAttr;
                    }, function() {
                        return model.variables.fetchContactDetailsDataAct.contactPopupDataOut.nameAttr;
                    }, function() {
                        return model.variables.fetchContactDetailsDataAct.contactPopupDataOut.localityAttr;
                    }, function() {
                        return model.variables.fetchContactDetailsDataAct.contactPopupDataOut.timezoneNameAttr;
                    }, function() {
                        return model.variables.fetchContactDetailsDataAct.contactPopupDataOut.timezoneOffsetAttr;
                    }, function() {
                        return model.variables.showEmailPopUpVar;
                    }, function() {
                        return model.variables.fetchContactDetailsDataAct.contactPopupDataOut.displayContactNumberAttr;
                    }, function() {
                        return model.variables.fetchContactDetailsDataAct.isDataFetchedAttr;
                    }, function() {
                        return model.variables.fetchContactDetailsDataAct.hasFetchErrorAttr;
                    }, function() {
                        return model.variables.fetchContactDetailsDataAct.contactPopupDataOut.countryNameAttr;
                    }),
                    _in_ContactPopupDataInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.fetchContactDetailsDataAct.dataFetchStatusAttr, model.variables._contactPopUp_OverrideOptionsInDataFetchStatus, model.variables._entityTypeInDataFetchStatus, model.variables._entityIdInDataFetchStatus)
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

                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "CW_CTA_PopUps/ContactByMessage_Wrapper Event_Cancel");
                            controller.handle_Mail$Action(false, controller.callContext(eventHandlerContext));
                        }, function() {
                            controller.popDebuggerContext(eventHandlerContext);
                        });

                        ;
                    },
                    event_Email$Action: function() {
                        return Promise.resolve().then(function() {
                            var eventHandlerContext = callContext.clone();
                            return OS.Flow.tryFinally(function() {
                                var varBag = {};
                                controller.pushDebuggerContext(eventHandlerContext);

                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "CW_CTA_PopUps/ContactByMessage_Wrapper Event_Email");
                                return controller.handle_Mail_Page$Action(controller.callContext(eventHandlerContext));
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
                    uuid: "2",
                    alias: "3"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                _dependencies: []
            }), React.createElement(UBTConnect_Utils_CW_CTA_PopUps_ContactPopup_ByPhone_mvc_view, {
                inputs: {
                    In_CallPopupData: model.getCachedValue(idService.getId("SCJil1JlcEuoyVsjFnPvwQ.In_CallPopupData"), function() {
                        return function() {
                            var rec = new UBTConnect_UtilsModel.ContactByPhonePopupDataRec();
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
                                rec.showPopupAttr = model.variables.showCallPopUpVar;
                                rec.displayContactNumberAttr = model.variables.fetchContactDetailsDataAct.contactPopupDataOut.displayContactNumberAttr;
                                rec.isFetchingTimezoneAttr = false;
                                rec.isLoadingAttr = !((model.variables.fetchContactDetailsDataAct.isDataFetchedAttr || model.variables.fetchContactDetailsDataAct.hasFetchErrorAttr));
                                rec.countryNameAttr = model.variables.fetchContactDetailsDataAct.contactPopupDataOut.countryNameAttr;
                                rec.titleTerminatorAttr = model.variables.fetchContactDetailsDataAct.contactPopupDataOut.titleTerminatorAttr;
                                return rec;
                            }();
                            rec.phoneAttr = model.variables.fetchContactDetailsDataAct.phoneOut;
                            rec.mobilePhoneAttr = model.variables.fetchContactDetailsDataAct.mobilePhoneOut;
                            rec.homePhoneAttr = model.variables.fetchContactDetailsDataAct.homePhoneOut;
                            rec.workPhoneAttr = model.variables.fetchContactDetailsDataAct.workPhoneOut;
                            return rec;
                        }();
                    }, function() {
                        return model.variables.contactPopUp_OverrideOptionsIn.imageURLAttr;
                    }, function() {
                        return model.variables.entityTypeIn;
                    }, function() {
                        return model.variables.entityIdIn;
                    }, function() {
                        return model.variables.fetchContactDetailsDataAct.contactPopupDataOut.isAvatarImageAttr;
                    }, function() {
                        return model.variables.fetchContactDetailsDataAct.contactPopupDataOut.actionNameAttr;
                    }, function() {
                        return model.variables.fetchContactDetailsDataAct.contactPopupDataOut.nameAttr;
                    }, function() {
                        return model.variables.fetchContactDetailsDataAct.contactPopupDataOut.localityAttr;
                    }, function() {
                        return model.variables.fetchContactDetailsDataAct.contactPopupDataOut.timezoneNameAttr;
                    }, function() {
                        return model.variables.fetchContactDetailsDataAct.contactPopupDataOut.timezoneOffsetAttr;
                    }, function() {
                        return model.variables.showCallPopUpVar;
                    }, function() {
                        return model.variables.fetchContactDetailsDataAct.contactPopupDataOut.displayContactNumberAttr;
                    }, function() {
                        return model.variables.fetchContactDetailsDataAct.isDataFetchedAttr;
                    }, function() {
                        return model.variables.fetchContactDetailsDataAct.hasFetchErrorAttr;
                    }, function() {
                        return model.variables.fetchContactDetailsDataAct.contactPopupDataOut.countryNameAttr;
                    }, function() {
                        return model.variables.fetchContactDetailsDataAct.contactPopupDataOut.titleTerminatorAttr;
                    }, function() {
                        return model.variables.fetchContactDetailsDataAct.phoneOut;
                    }, function() {
                        return model.variables.fetchContactDetailsDataAct.mobilePhoneOut;
                    }, function() {
                        return model.variables.fetchContactDetailsDataAct.homePhoneOut;
                    }, function() {
                        return model.variables.fetchContactDetailsDataAct.workPhoneOut;
                    }),
                    _in_CallPopupDataInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._contactPopUp_OverrideOptionsInDataFetchStatus, model.variables._entityTypeInDataFetchStatus, model.variables._entityIdInDataFetchStatus, model.variables.fetchContactDetailsDataAct.dataFetchStatusAttr)
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
                            controller.handle_Call$Action(false, controller.callContext(eventHandlerContext));
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
                    alias: "4"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                _dependencies: []
            }), React.createElement(UBTConnect_Utils_CW_CTA_PopUps_SharePopup_mvc_view, {
                inputs: {
                    In_ContactPopupData: model.getCachedValue(idService.getId("94vRk6dqV0qk0G8LQbatfw.In_ContactPopupData"), function() {
                        return function() {
                            var rec = new UBTConnect_UtilsModel.ContactPopupDataRec();
                            rec.imageURLAttr = model.variables.contactPopUp_OverrideOptionsIn.imageURLAttr;
                            rec.entityTypeIdAttr = model.variables.entityTypeIn;
                            rec.entityIdAttr = model.variables.entityIdIn;
                            rec.actionNameAttr = "Share";
                            rec.nameAttr = model.variables.fetchContactDetailsDataAct.contactPopupDataOut.nameAttr;
                            rec.localityAttr = "";
                            rec.timezoneNameAttr = "";
                            rec.timezoneOffsetAttr = 0;
                            rec.showPopupAttr = (model.variables.showSharePopupVar && !(OutSystemsDebugger.handleFunctionCall(function() {
                                return UBTConnect_UtilsController.default.getHasExtendedShare$Action(callContext).hasExtendedShareOut;
                            }, OS.DataTypes.DataTypes.Boolean, callContext.id)));
                            rec.isLoadingAttr = !(model.variables.isLoadedVar);
                            rec.showTimezoneAttr = false;
                            return rec;
                        }();
                    }, function() {
                        return model.variables.contactPopUp_OverrideOptionsIn.imageURLAttr;
                    }, function() {
                        return model.variables.entityTypeIn;
                    }, function() {
                        return model.variables.entityIdIn;
                    }, function() {
                        return model.variables.fetchContactDetailsDataAct.contactPopupDataOut.nameAttr;
                    }, function() {
                        return model.variables.showSharePopupVar;
                    }, function() {
                        return model.variables.isLoadedVar;
                    }),
                    _in_ContactPopupDataInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._contactPopUp_OverrideOptionsInDataFetchStatus, model.variables._entityTypeInDataFetchStatus, model.variables._entityIdInDataFetchStatus, model.variables.fetchContactDetailsDataAct.dataFetchStatusAttr)
                },
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    },
                    event_ShareToConnect$Action: function() {
                        return Promise.resolve().then(function() {
                            var eventHandlerContext = callContext.clone();
                            return OS.Flow.tryFinally(function() {
                                var varBag = {};
                                controller.pushDebuggerContext(eventHandlerContext);

                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "CW_CTA_PopUps/SharePopup Event_ShareToConnect");
                                return controller.handle_Share_Connect$Action(controller.callContext(eventHandlerContext));
                            }, function() {
                                controller.popDebuggerContext(eventHandlerContext);
                            });
                        });;
                    },
                    event_ShareToOthers$Action: function() {
                        return Promise.resolve().then(function() {
                            var eventHandlerContext = callContext.clone();
                            return OS.Flow.tryFinally(function() {
                                var varBag = {};
                                controller.pushDebuggerContext(eventHandlerContext);

                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "CW_CTA_PopUps/SharePopup Event_ShareToOthers");
                                return controller.handle_Share_Others$Action(controller.callContext(eventHandlerContext));
                            }, function() {
                                controller.popDebuggerContext(eventHandlerContext);
                            });
                        });;
                    },
                    event_Cancel$Action: function() {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);

                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "CW_CTA_PopUps/SharePopup Event_Cancel");
                            controller.handle_Share$Action(false, controller.callContext(eventHandlerContext));
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
                    uuid: "4",
                    alias: "5"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                _dependencies: []
            }), $if((OutSystemsDebugger.handleFunctionCall(function() {
                return UBTConnect_UtilsController.default.getHasExtendedShare$Action(callContext).hasExtendedShareOut;
            }, OS.DataTypes.DataTypes.Boolean, callContext.id) && model.variables.local_In_ActionsMenuOptionsVar.hasShareAttr), false, this, function() {
                return [React.createElement(OSWidgets.Popup, {
                    showPopup: true,
                    style: "popup-dialog connect-share-portal",
                    _idProps: {
                        service: idService,
                        uuid: "5"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(UBTConnect_Utils_CW_Share_ShareSheet_mvc_view, {
                    inputs: {
                        In_IsOpen: model.getCachedValue(idService.getId("O030decfrUSgRqhxfSRyMA.In_IsOpen"), function() {
                            return (OutSystemsDebugger.handleFunctionCall(function() {
                                return UBTConnect_UtilsController.default.getHasExtendedShare$Action(callContext).hasExtendedShareOut;
                            }, OS.DataTypes.DataTypes.Boolean, callContext.id) && model.variables.showSharePopupVar);
                        }, function() {
                            return model.variables.showSharePopupVar;
                        }),
                        In_ShareObjectTypeId: model.variables.local_ShareTypeVar,
                        In_ShareableObjectId: OS.BuiltinFunctions.longIntegerToText(model.variables.entityIdIn),
                        _in_ShareableObjectIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._entityIdInDataFetchStatus)
                    },
                    events: {
                        _handleError: function(ex) {
                            controller.handleError(ex);
                        },
                        event_ClosedShareSheet$Action: function() {
                            var eventHandlerContext = callContext.clone();
                            return OS.Flow.tryFinally(function() {
                                var varBag = {};
                                controller.pushDebuggerContext(eventHandlerContext);

                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "CW_Share/ShareSheet Event_ClosedShareSheet");
                                controller.handle_ClosedShareSheet$Action(controller.callContext(eventHandlerContext));
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
                        uuid: "6",
                        alias: "6"
                    },
                    _widgetRecordProvider: widgetsRecordProvider,
                    placeholders: {
                        placeholder_ShareableObject: new PlaceholderContent(function() {
                            return [React.createElement(UBTConnect_Utils_CW_Share_ShareableObject_Generic_mvc_view, {
                                inputs: {
                                    In_ShareableObject: model.getCachedValue(idService.getId("3taN3kmhpUGu2imPBjSohQ.In_ShareableObject"), function() {
                                        return function() {
                                            var rec = new Connect2_Sharing_CSModel.UI_ShareableObject_GenericRec();
                                            rec.connectEntityTypeIdAttr = model.variables.entityTypeIn;
                                            rec.idAttr = OS.BuiltinFunctions.longIntegerToText(model.variables.entityIdIn);
                                            rec.signedURLAttr = model.variables.shareSheet_OverwriteImageURLVar;
                                            rec.titleAttr = model.variables.fetchContactDetailsDataAct.entityNameOut;
                                            rec.subtitleAttr = model.variables.fetchContactDetailsDataAct.entitySubtitleOut;
                                            rec.locationAttr = ((model.variables.fetchContactDetailsDataAct.localityNameOut + ", ") + model.variables.fetchContactDetailsDataAct.countryNameOut);
                                            return rec;
                                        }();
                                    }, function() {
                                        return model.variables.entityTypeIn;
                                    }, function() {
                                        return model.variables.entityIdIn;
                                    }, function() {
                                        return model.variables.shareSheet_OverwriteImageURLVar;
                                    }, function() {
                                        return model.variables.fetchContactDetailsDataAct.entityNameOut;
                                    }, function() {
                                        return model.variables.fetchContactDetailsDataAct.entitySubtitleOut;
                                    }, function() {
                                        return model.variables.fetchContactDetailsDataAct.localityNameOut;
                                    }, function() {
                                        return model.variables.fetchContactDetailsDataAct.countryNameOut;
                                    }),
                                    _in_ShareableObjectInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._entityTypeInDataFetchStatus, model.variables._entityIdInDataFetchStatus, model.variables.fetchContactDetailsDataAct.dataFetchStatusAttr)
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
                                    alias: "7"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                _dependencies: []
                            })];
                        })
                    },
                    _dependencies: [asPrimitiveValue(model.variables.fetchContactDetailsDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables._entityIdInDataFetchStatus), asPrimitiveValue(model.variables._entityTypeInDataFetchStatus), asPrimitiveValue(model.variables.fetchContactDetailsDataAct.countryNameOut), asPrimitiveValue(model.variables.fetchContactDetailsDataAct.localityNameOut), asPrimitiveValue(model.variables.fetchContactDetailsDataAct.entitySubtitleOut), asPrimitiveValue(model.variables.fetchContactDetailsDataAct.entityNameOut), asPrimitiveValue(model.variables.shareSheet_OverwriteImageURLVar), asPrimitiveValue(model.variables.entityIdIn), asPrimitiveValue(model.variables.entityTypeIn)]
                }))];
            }, function() {
                return [];
            }), $if(false, false, this, function() {
                return [];
            }, function() {
                return [React.createElement(OSWidgets.Popup, {
                    showPopup: true,
                    style: "popup-dialog connect-share-portal",
                    _idProps: {
                        service: idService,
                        uuid: "8"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(UBTConnect_Utils_CW_Notes_NotesSheet_mvc_view, {
                    inputs: {
                        In_ItemId: model.getCachedValue(idService.getId("s0w6J4sQh0mzmhvpkb_jkA.In_ItemId"), function() {
                            return ((((model.variables.entityTypeIn === UBTConnectModel.staticEntities.connect_Entity.interchange) && ((model.variables.in_LocalityIdIn) !== ("")))) ? (((model.variables.in_LocalityIdIn + ":") + OS.BuiltinFunctions.longIntegerToText(model.variables.entityIdIn))) : (OS.BuiltinFunctions.longIntegerToText(model.variables.entityIdIn)));
                        }, function() {
                            return model.variables.entityTypeIn;
                        }, function() {
                            return model.variables.in_LocalityIdIn;
                        }, function() {
                            return model.variables.entityIdIn;
                        }),
                        _in_ItemIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._entityTypeInDataFetchStatus, model.variables._in_LocalityIdInDataFetchStatus, model.variables._entityIdInDataFetchStatus),
                        In_Notes: model.variables.entityNotesVar,
                        In_IsOpen: model.variables.showNotesSheetVar,
                        In_NoteCategoryId: model.variables.noteCategoryIdVar
                    },
                    events: {
                        _handleError: function(ex) {
                            controller.handleError(ex);
                        },
                        on_NotesChanged$Action: function(new_NotesIn) {
                            var eventHandlerContext = callContext.clone();
                            return OS.Flow.tryFinally(function() {
                                var varBag = {};
                                controller.pushDebuggerContext(eventHandlerContext);

                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "CW_Notes/NotesSheet On_NotesChanged");
                                controller.handler_OnSheetNotesChanged$Action(new_NotesIn, controller.callContext(eventHandlerContext));
                            }, function() {
                                controller.popDebuggerContext(eventHandlerContext);
                            });

                            ;
                        },
                        on_NoteDeleted$Action: function(noteIdIn, wasLastNoteIn) {
                            var eventHandlerContext = callContext.clone();
                            return OS.Flow.tryFinally(function() {
                                var varBag = {};
                                controller.pushDebuggerContext(eventHandlerContext);

                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "CW_Notes/NotesSheet On_NoteDeleted");
                                controller.handler_OnNoteDeleted$Action(noteIdIn, controller.callContext(eventHandlerContext));
                            }, function() {
                                controller.popDebuggerContext(eventHandlerContext);
                            });

                            ;
                        },
                        on_NoteSheet_Closed$Action: function() {
                            var eventHandlerContext = callContext.clone();
                            return OS.Flow.tryFinally(function() {
                                var varBag = {};
                                controller.pushDebuggerContext(eventHandlerContext);

                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "CW_Notes/NotesSheet On_NoteSheet_Closed");
                                controller.handler_OnNotesSheetClosed$Action(controller.callContext(eventHandlerContext));
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
                        uuid: "9",
                        alias: "8"
                    },
                    _widgetRecordProvider: widgetsRecordProvider,
                    _dependencies: []
                }))];
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);

    return View;
});
define("UBTConnect.Directory_CommonBlocks.Directory_EntityDetailsActions.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnect_Utils.controller", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "Connect2_Sharing_CS.model", "UBTJavaScriptUtils.controller", "UBTConnect_Bookmarks_MCS.model", "UBTConnect_Bookmarks_MCS.controller", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.Directory_CommonBlocks.Directory_EntityDetailsActions.mvc$debugger", "UBTConnect.Directory_CommonBlocks.Directory_EntityDetailsActions.mvc$controller.Handle_Mail_Page.YieldJS", "UBTConnect.Directory_CommonBlocks.Directory_EntityDetailsActions.mvc$controller.OnReady.CheckRestoredJS", "UBTConnect.Directory_CommonBlocks.Directory_EntityDetailsActions.mvc$controller.Action_UpdateContactDetails.AsynRefreshJS", "UBTConnect.Directory_CommonBlocks.Directory_EntityDetailsActions.mvc$controller.Handle_Share_Connect.YieldJS", "UBTConnect_Utils.controller$GetHasExtendedShare", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTConnectLibrary.model$ActionsMenuOptionsRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$NotesRec", "UBTConnect_Utils.model$ContactPopUp_OverrideOptionsRec", "UBTConnectLibrary.model$ActionsMenuEnableOptionsRec", "UBTConnect_Utils.model$UI_ContactByMessage_WrapperDataRec", "UBTConnect_Utils.model$ContactPopupDataRec", "UBTConnect_Utils.model$ContactByPhonePopupDataRec", "Connect2_Sharing_CS.model$UI_ShareableObject_GenericRec", "UBTConnect.referencesHealth$Connect2_Sharing_CS", "UBTConnectLibrary.model$Note_ItemRec", "UBTConnect.model$Note_ItemList", "UBTJavaScriptUtils.controller$ScreenController_RaiseError", "UBTConnect.referencesHealth$UBTJavaScriptUtils", "UBTJavaScriptUtils.controller$ScreenController_RaiseTypedException", "UBTJavaScriptUtils.controller$ScreenController_RaiseCommunicationError", "UBTConnect_Utils.controller$ShareEntity_ByURL", "UBTConnect.controller$ToggleBookmarkItem_C2", "UBTConnect.controller$GetNameAndSurname_ByFullName", "UBTConnect_Bookmarks_MCS.model$LocalBookmarkRec", "UBTConnect.referencesHealth$UBTConnect_Bookmarks_MCS", "UBTConnect_Bookmarks_MCS.controller$GetLocalBookmarkByObjectId", "UBTConnect.controller$GetBookmarkCategoryId_ByEntityTypeId", "UBTConnect.controller$GetShareType_FromEntity", "UBTConnect.controller$Get_NoteCategoryId_ByEntityTypeId", "UBTConnect.controller$Notes_InterchangeId_ComposeId"], function(OutSystems, UBTConnectModel, UBTConnectController, UBTConnect_UtilsController, UBTConnectLibraryModel, UBTConnect_UtilsModel, Connect2_Sharing_CSModel, UBTJavaScriptUtilsController, UBTConnect_Bookmarks_MCSModel, UBTConnect_Bookmarks_MCSController, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_Directory_CommonBlocks_Directory_EntityDetailsActions_mvc_Debugger, UBTConnect_Directory_CommonBlocks_Directory_EntityDetailsActions_mvc_controller_Handle_Mail_Page_YieldJS, UBTConnect_Directory_CommonBlocks_Directory_EntityDetailsActions_mvc_controller_OnReady_CheckRestoredJS, UBTConnect_Directory_CommonBlocks_Directory_EntityDetailsActions_mvc_controller_Action_UpdateContactDetails_AsynRefreshJS, UBTConnect_Directory_CommonBlocks_Directory_EntityDetailsActions_mvc_controller_Handle_Share_Connect_YieldJS) {
    var OS = OutSystems.Internal;
    var Controller = (function(_super) {
        __extends(Controller, _super);

        function Controller() {
            _super.apply(this, arguments);
            var controller = this.controller;
            this.clientActionProxies = {
                action_AsyncRefresh_ContactDetails$Action: function() {
                    return controller.executeActionInsideJSNode(controller._action_AsyncRefresh_ContactDetails$Action.bind(controller), controller.callContext(), function(actionResults) {
                        return {};
                    }, function() {
                        return;
                    }, "Action_AsyncRefresh_ContactDetails");
                }
            };
            this.dataFetchDependenciesOriginal = {
                fetchContactDetails$DataActRefresh: -1,
                fetchNotes$DataActRefresh: -1
            };
            this.dataFetchDependentsGraph = {
                fetchContactDetails$DataActRefresh: [],
                fetchNotes$DataActRefresh: []
            };
            this.shouldSendClientVarsToDataSources = false;
        }
        // Server Actions

        // Aggregates and Data Actions
        Controller.prototype.fetchContactDetails$DataActRefresh = function(callContext) {
            var model = this.model;
            var controller = this.controller;
            var callContext = controller.callContext(callContext);
            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:JvHTKFJKiUe8nuzFv8t3IQ:/NRWebFlows.jGNlo9EW9U24MVecsZ_9tQ/NodesShownInESpaceTree.fJ0qEtiFx0e19F0VJxsZLQ/DataActions.JvHTKFJKiUe8nuzFv8t3IQ:yGC1SFczO4fw9dVt7JzjSw", "UBTConnect", "FetchContactDetails", "NRFlows.DataScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.setThreadStartName(callContext.id, "Directory_CommonBlocks/Directory_EntityDetailsActions/FetchContactDetails");
                return controller.callDataAction("DataActionFetchContactDetails", "screenservices/UBTConnect/Directory_CommonBlocks/Directory_EntityDetailsActions/DataActionFetchContactDetails", "HWIaNwdemptdLQ_0N10HVA", function(b) {
                    model.variables.fetchContactDetailsDataAct.dataFetchStatusAttr = b;
                }, function(json) {
                    model.variables.fetchContactDetailsDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.fetchContactDetailsDataAct.constructor));
                }, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function(json, headers) {
                    OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
                }, callContext, undefined, false).then(function() {
                    OutSystemsDebugger.setThreadStartName(callContext.id, "Directory_CommonBlocks/Directory_EntityDetailsActions/FetchContactDetails On After Fetch");
                    controller._onAfterFetch_FetchContactDetails$Action(controller.callContext(callContext));

                });

            }, function() {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:JvHTKFJKiUe8nuzFv8t3IQ", callContext.id);
                controller.popDebuggerContext(callContext);

            });
        };
        Controller.prototype.fetchNotes$DataActRefresh = function(callContext) {
            var model = this.model;
            var controller = this.controller;
            var callContext = controller.callContext(callContext);
            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:HZUOaXkmDkGeR+c_sO83xg:/NRWebFlows.jGNlo9EW9U24MVecsZ_9tQ/NodesShownInESpaceTree.fJ0qEtiFx0e19F0VJxsZLQ/DataActions.HZUOaXkmDkGeR+c_sO83xg:ON9uVgPrm7f+_K9DwSVxaw", "UBTConnect", "FetchNotes", "NRFlows.DataScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.setThreadStartName(callContext.id, "Directory_CommonBlocks/Directory_EntityDetailsActions/FetchNotes");
                return controller.callDataAction("DataActionFetchNotes", "screenservices/UBTConnect/Directory_CommonBlocks/Directory_EntityDetailsActions/DataActionFetchNotes", "WH122zjVJs_kThBXLU+R_g", function(b) {
                    model.variables.fetchNotesDataAct.dataFetchStatusAttr = b;
                }, function(json) {
                    model.variables.fetchNotesDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.fetchNotesDataAct.constructor));
                }, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function(json, headers) {
                    OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
                }, callContext, undefined, false).then(function() {
                    OutSystemsDebugger.setThreadStartName(callContext.id, "Directory_CommonBlocks/Directory_EntityDetailsActions/FetchNotes On After Fetch");
                    controller._onAfterFetch_FetchNotes$Action(controller.callContext(callContext));

                });

            }, function() {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:HZUOaXkmDkGeR+c_sO83xg", callContext.id);
                controller.popDebuggerContext(callContext);

            });
        };

        Controller.prototype.dataFetchActionNames = ["fetchContactDetails$DataActRefresh", "fetchNotes$DataActRefresh"];
        // Client Actions
        Controller.prototype._handler_OnNotesSheetClosed$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_OnNotesSheetClosed");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:9FIFBTL9P0asOtNkolVhRA:/NRWebFlows.jGNlo9EW9U24MVecsZ_9tQ/NodesShownInESpaceTree.fJ0qEtiFx0e19F0VJxsZLQ/ClientActions.9FIFBTL9P0asOtNkolVhRA:e0NgbHSgn933OBZtMZrQ6Q", "UBTConnect", "Handler_OnNotesSheetClosed", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:S3NMwRXgIEyM1AAYzSETEw", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:hoSFaN4OX0CAsbGGTHNk6A", callContext.id);
                // ShowNotesSheet = False
                model.variables.showNotesSheetVar = false;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:l4d2ef9FKUGmYYTgMJ9X+A", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:9FIFBTL9P0asOtNkolVhRA", callContext.id);
            }

        };
        Controller.prototype._handleFetchError$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("HandleFetchError");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:rHryF8j860GFsLaNUEIDfA:/NRWebFlows.jGNlo9EW9U24MVecsZ_9tQ/NodesShownInESpaceTree.fJ0qEtiFx0e19F0VJxsZLQ/ClientActions.rHryF8j860GFsLaNUEIDfA:QtaeymN1TAw+xUj0j3Vq3Q", "UBTConnect", "HandleFetchError", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ev8oA6b9nEaz49sYfTShrA", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:eCs5LFi6AUa1cUeBw2WwnQ", callContext.id);
                // EnableOptions.EnableBookmark = False
                model.variables.enableOptionsIn.enableBookmarkAttr = false;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:eCs5LFi6AUa1cUeBw2WwnQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                // EnableOptions.EnableNotes = False
                model.variables.enableOptionsIn.enableNotesAttr = false;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:eCs5LFi6AUa1cUeBw2WwnQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
                // EnableOptions.EnableGift = False
                model.variables.enableOptionsIn.enableGiftAttr = false;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:eCs5LFi6AUa1cUeBw2WwnQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
                // EnableOptions.EnableShare = False
                model.variables.enableOptionsIn.enableShareAttr = false;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:eCs5LFi6AUa1cUeBw2WwnQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
                // EnableOptions.EnableCall = False
                model.variables.enableOptionsIn.enableCallAttr = false;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:eCs5LFi6AUa1cUeBw2WwnQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "6");
                // EnableOptions.EnableEmail = False
                model.variables.enableOptionsIn.enableEmailAttr = false;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:FWWNSoIj80i+0N67UM8Cxg", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:rHryF8j860GFsLaNUEIDfA", callContext.id);
            }

        };
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
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:eiyRKjwHcEq5j6btUORNjg:/NRWebFlows.jGNlo9EW9U24MVecsZ_9tQ/NodesShownInESpaceTree.fJ0qEtiFx0e19F0VJxsZLQ/ClientActions.eiyRKjwHcEq5j6btUORNjg:Avf9mkUb7iuZE_T7Kzs8Ww", "UBTConnect", "OnParametersChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:49XoHRh1006FOdUSn7Ltsg", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:13z3sri_g0mocXl_QkqpUw", callContext.id);
                // Execute Action: Action_UpdateContactDetails
                controller._action_UpdateContactDetails$Action(callContext);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:RWcpO2pro0CushpIz0tM0g", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:eiyRKjwHcEq5j6btUORNjg", callContext.id);
            }

        };
        Controller.prototype._action_AsyncRefresh_ContactDetails$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Action_AsyncRefresh_ContactDetails");
            callContext = controller.callContext(callContext);
            var notRegisteredVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
            var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
            var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
            varBag.callContext = callContext;
            varBag.notRegisteredVar = notRegisteredVar;
            varBag.allExceptionsVar = allExceptionsVar;
            varBag.communicationExceptionVar = communicationExceptionVar;
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:7pk3N86k5k+xLykQ_Y1STA:/NRWebFlows.jGNlo9EW9U24MVecsZ_9tQ/NodesShownInESpaceTree.fJ0qEtiFx0e19F0VJxsZLQ/ClientActions.7pk3N86k5k+xLykQ_Y1STA:ReX7zkspi+mvGxZh9skWbg", "UBTConnect", "Action_AsyncRefresh_ContactDetails", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:CMrCBYXgrkStKHXrv0jaDA", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ImHmHoOuRkSeb4Z+aPfDxQ", callContext.id);
                // Refresh Query: FetchContactDetails
                var result = controller.fetchContactDetails$DataActRefresh(callContext);
                model.flush();
                return result.then(function() {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:4Fedn_myVEOVMZr6VoqzVQ", callContext.id);
                });
            }).catch(function(ex) {
                OS.Logger.trace("Directory_EntityDetailsActions.Action_AsyncRefresh_ContactDetails", OS.Exceptions.getMessage(ex), ex.name);
                // Handle Error: NotRegistered
                if (OS.Exceptions.isInstanceOf(ex, OS.Exceptions.Exceptions.NotRegisteredException)) {
                    OS.Logger.error(null, ex);
                    notRegisteredVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                    OutSystemsDebugger.handleException(notRegisteredVar.value.exceptionMessageAttr, callContext.id);
                    return OS.Flow.executeAsyncFlow(function() {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:qgLJGK2hZkq2sB5wV6CKgg", callContext.id);
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:2ayLfmXNV0SF9_WDyHRFfg", callContext.id);
                        // Execute Action: ScreenController_RaiseTypedException2
                        model.flush();
                        return UBTJavaScriptUtilsController.default.screenController_RaiseTypedException$Action(notRegisteredVar.value.exceptionMessageAttr, UBTConnectModel.staticEntities.uBT_SystemExceptionTypes.notRegisteredException, "", "", callContext).then(function() {
                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:uQithJymwU6Yqa1CPr3dHQ", callContext.id);
                            return OS.Flow.returnAsync();

                        });
                    });
                }

                // Handle Error: CommunicationException
                if (OS.Exceptions.isInstanceOf(ex, OS.Exceptions.Exceptions.CommunicationException)) {
                    OS.Logger.error(null, ex);
                    communicationExceptionVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                    OutSystemsDebugger.handleException(communicationExceptionVar.value.exceptionMessageAttr, callContext.id);
                    return OS.Flow.executeAsyncFlow(function() {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:N9d8tgF3QUird3SAZGvmyw", callContext.id);
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ii4JTZ_anEa2mfbcBZNNvQ", callContext.id);
                        // Execute Action: HandleFetchError2
                        controller._handleFetchError$Action(callContext);
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:GFkcuPgD1UGTd7n2b+oKYA", callContext.id);
                        // Execute Action: ScreenController_RaiseCommunicationError
                        model.flush();
                        return UBTJavaScriptUtilsController.default.screenController_RaiseCommunicationError$Action(communicationExceptionVar.value.exceptionMessageAttr, callContext).then(function() {
                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:+eQt_G_jOkKAVMoznbeJHA", callContext.id);
                            return OS.Flow.returnAsync();

                        });
                    });
                }

                // Handle Error: AllExceptions
                if (!(OS.Exceptions.isSystem(ex))) {
                    OS.Logger.error(null, ex);
                    allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                    OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
                    return OS.Flow.executeAsyncFlow(function() {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:biX1RiYFdkub_M2Bpm1JOw", callContext.id);
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:nySosFQuM02wfnWLZgVC2g", callContext.id);
                        // Execute Action: HandleFetchError
                        controller._handleFetchError$Action(callContext);
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:IkILYO0ayUyNdsk5utOB3w", callContext.id);
                        // Execute Action: ScreenController_RaiseError
                        model.flush();
                        return UBTJavaScriptUtilsController.default.screenController_RaiseError$Action(allExceptionsVar.value.exceptionMessageAttr, callContext).then(function() {
                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:EyrREAWFS0avr_mvrNyNQA", callContext.id);
                            return OS.Flow.returnAsync();

                        });
                    });
                }

                throw ex;
            }).then(function(res) {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:7pk3N86k5k+xLykQ_Y1STA", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:7pk3N86k5k+xLykQ_Y1STA", callContext.id);
                throw ex;

            });
        };
        Controller.prototype._handler_OnSheetNotesChanged$Action = function(new_NotesIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_OnSheetNotesChanged");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.Directory_CommonBlocks.Directory_EntityDetailsActions.Handler_OnSheetNotesChanged$vars"))());
            vars.value.new_NotesInLocal = new_NotesIn.clone();
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:cZ6COB1V4EC_fISuYPgV5g:/NRWebFlows.jGNlo9EW9U24MVecsZ_9tQ/NodesShownInESpaceTree.fJ0qEtiFx0e19F0VJxsZLQ/ClientActions.cZ6COB1V4EC_fISuYPgV5g:s06mI2VLE3sNAdSBar5whA", "UBTConnect", "Handler_OnSheetNotesChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:LisNz5e9RUufw5bReBGU9Q", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:OL3HeJl7_U2tmF0kNQ3jZg", callContext.id);
                // EntityNotes = New_Notes
                model.variables.entityNotesVar = vars.value.new_NotesInLocal;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:DITzjkSWk0ynzL6r9AdMxA", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:cZ6COB1V4EC_fISuYPgV5g", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.Directory_CommonBlocks.Directory_EntityDetailsActions.Handler_OnSheetNotesChanged$vars", [{
            name: "New_Notes",
            attrName: "new_NotesInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Record,
            defaultValue: function() {
                return new UBTConnectLibraryModel.NotesRec();
            },
            complexType: UBTConnectLibraryModel.NotesRec
        }]);
        Controller.prototype._handle_Share_Others$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handle_Share_Others");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:IEnTQxk0vUORnz_nRpGwVQ:/NRWebFlows.jGNlo9EW9U24MVecsZ_9tQ/NodesShownInESpaceTree.fJ0qEtiFx0e19F0VJxsZLQ/ClientActions.IEnTQxk0vUORnz_nRpGwVQ:+efy1BNTd7Ub57CNPmQM5w", "UBTConnect", "Handle_Share_Others", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:2m+GmgZUR0+QQTKpNiMP0A", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:v1pnJ63uDUKtwQusQG+HtA", callContext.id);
                // Execute Action: Handle_Share
                controller._handle_Share$Action(false, callContext);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:jHgxV2zWkkqaDiLDNhiUag", callContext.id);
                // Execute Action: ShareEntity_ByURL
                model.flush();
                return UBTConnect_UtilsController.default.shareEntity_ByURL$Action(model.variables.local_ShareTypeVar, OS.BuiltinFunctions.longIntegerToText(model.variables.entityIdIn), "", OS.DataTypes.DateTime.defaultValue, callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:fMFyBt0rUEWkVxR1e9f3Mw", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:IEnTQxk0vUORnz_nRpGwVQ", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:IEnTQxk0vUORnz_nRpGwVQ", callContext.id);
                throw ex;

            });
        };
        Controller.prototype._handler_AddNotesOnClick$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_AddNotesOnClick");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:_SBrSYy3FU+584s3XFVvNQ:/NRWebFlows.jGNlo9EW9U24MVecsZ_9tQ/NodesShownInESpaceTree.fJ0qEtiFx0e19F0VJxsZLQ/ClientActions._SBrSYy3FU+584s3XFVvNQ:9duGc1Y4WLO_i3TDfscs7w", "UBTConnect", "Handler_AddNotesOnClick", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:3FENyeggh0GHIiYw32lrAQ", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:qPV5Y6nDQUagz_lWiDBlDA", callContext.id);
                // Execute Action: Action_RefreshFetchNotes
                return controller._action_RefreshFetchNotes$Action(callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:N6qULxNLrkKV5UdKNKlzJA", callContext.id);
                    // ShowNotesSheet = True
                    model.variables.showNotesSheetVar = true;
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:qto4Up+AGkKP6h_NNWahTA", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:_SBrSYy3FU+584s3XFVvNQ", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:_SBrSYy3FU+584s3XFVvNQ", callContext.id);
                throw ex;

            });
        };
        Controller.prototype._handle_Bookmark$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handle_Bookmark");
            callContext = controller.callContext(callContext);
            var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
            var notRegisteredVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
            var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
            varBag.callContext = callContext;
            varBag.allExceptionsVar = allExceptionsVar;
            varBag.notRegisteredVar = notRegisteredVar;
            varBag.communicationExceptionVar = communicationExceptionVar;
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:IfyyVGjW6US7kYYIg7xrAA:/NRWebFlows.jGNlo9EW9U24MVecsZ_9tQ/NodesShownInESpaceTree.fJ0qEtiFx0e19F0VJxsZLQ/ClientActions.IfyyVGjW6US7kYYIg7xrAA:TiksPe7_R1UlX1lQzC2LdQ", "UBTConnect", "Handle_Bookmark", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:SMX07VYIwkCVzf8HL3abgw", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:+yloMj4X8kSrRpONVz5zHg", callContext.id);
                // isLoaded = False
                model.variables.isLoadedVar = false;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:nigsJ8Hvx06rWWiZIdFZTg", callContext.id);
                // Execute Action: ToggleBookmarkItem_C2
                model.flush();
                return UBTConnectController.default.toggleBookmarkItem_C2$Action(OS.BuiltinFunctions.longIntegerToText(model.variables.entityIdIn), model.variables.local_BookmarkTypeIdVar, model.variables.local_isBookmarkedVar, callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:02qoZUjXYkKjYABASwF8ww", callContext.id);
                    // Local_isBookmarked = notLocal_isBookmarked
                    model.variables.local_isBookmarkedVar = !(model.variables.local_isBookmarkedVar);
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:02qoZUjXYkKjYABASwF8ww", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                    // isLoaded = True
                    model.variables.isLoadedVar = true;
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:EWXGm5ofOUimVD_ob0OHcw", callContext.id);
                    // Trigger Event: OnChange_Bookmark2
                    return controller.onChange_Bookmark$Action(model.variables.local_isBookmarkedVar, callContext);
                }).then(function() {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:QiUeax2G50G+vfP8htH7vA", callContext.id);
                });
            }).catch(function(ex) {
                OS.Logger.trace("Directory_EntityDetailsActions.Handle_Bookmark", OS.Exceptions.getMessage(ex), ex.name);
                // Handle Error: NotRegistered
                if (OS.Exceptions.isInstanceOf(ex, OS.Exceptions.Exceptions.NotRegisteredException)) {
                    OS.Logger.error(null, ex);
                    notRegisteredVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                    OutSystemsDebugger.handleException(notRegisteredVar.value.exceptionMessageAttr, callContext.id);
                    return OS.Flow.executeAsyncFlow(function() {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:zdxaaaXRvU6lkW4YcE9NYg", callContext.id);
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Sl9SyKCDFECplH8ZD9QLjg", callContext.id);
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
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:o5GJ1FAdmEG70s4GasafRQ", callContext.id);
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:cVZ6N_r76UK668sFPfERvg", callContext.id);
                        // isLoaded = True
                        model.variables.isLoadedVar = true;
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Tb_8bpTVqUmf59VW8fWM5g", callContext.id);
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
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:kV3FAvQ5sU204_DDYIkQVA", callContext.id);
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:QYLP82qJckaVef1dpDgqbg", callContext.id);
                        // isLoaded = True
                        model.variables.isLoadedVar = true;
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:LvjhNU+o406fVemADfEz0A", callContext.id);
                        // Raise Error: BubbleGenericException
                        throw new OS.Exceptions.Exceptions.UserException("UBTConnect.BubbleGenericException", allExceptionsVar.value.exceptionMessageAttr);
                    });
                }

                throw ex;
            }).then(function(res) {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:IfyyVGjW6US7kYYIg7xrAA", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:IfyyVGjW6US7kYYIg7xrAA", callContext.id);
                throw ex;

            });
        };
        Controller.prototype._action_ApplyPopUpOverrides$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Action_ApplyPopUpOverrides");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:dPZcZc00pEiNPSWwGP6TfQ:/NRWebFlows.jGNlo9EW9U24MVecsZ_9tQ/NodesShownInESpaceTree.fJ0qEtiFx0e19F0VJxsZLQ/ClientActions.dPZcZc00pEiNPSWwGP6TfQ:r1NC2E28S5LveGFEGY_FXA", "UBTConnect", "Action_ApplyPopUpOverrides", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:FrMGhQInjkqFFPHD586GlA", callContext.id);
                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:PbKma92rUk6jvNYN87FR0A", callContext.id) && (model.variables.entityTypeIn === UBTConnectModel.staticEntities.connect_Entity.oneSchoolGlobal))) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:kgY16nnzzk6t1qSsvd5k3A", callContext.id);
                    // ShareSheet_OverwriteImageURL = ContactPopUp_OverrideOptions.ImageURL
                    model.variables.shareSheet_OverwriteImageURLVar = model.variables.contactPopUp_OverrideOptionsIn.imageURLAttr;
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:kgY16nnzzk6t1qSsvd5k3A", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                    // ContactPopUp_OverrideOptions.ImageURL = Images.OneSchoolGlobal.URL
                    model.variables.contactPopUp_OverrideOptionsIn.imageURLAttr = OS.Navigation.VersionedURL.getVersionedUrl("img/UBTConnectLibrary.OneSchoolGlobal.svg");
                }

                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:eVPB3o1hWEalRtPc9NDKIA", callContext.id);
                // FetchContactDetails.ContactPopupData.ImageURL = ContactPopUp_OverrideOptions.ImageURL
                model.variables.fetchContactDetailsDataAct.contactPopupDataOut.imageURLAttr = model.variables.contactPopUp_OverrideOptionsIn.imageURLAttr;
                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:k7qzLODTBUa7qjnep6+eXA", callContext.id) && ((model.variables.contactPopUp_OverrideOptionsIn.nameAttr) !== ("")))) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:fmnkfllYw0OWHX3vLBD7OA", callContext.id);
                    // FetchContactDetails.ContactPopupData.Name = ContactPopUp_OverrideOptions.Name
                    model.variables.fetchContactDetailsDataAct.contactPopupDataOut.nameAttr = model.variables.contactPopUp_OverrideOptionsIn.nameAttr;
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:fmnkfllYw0OWHX3vLBD7OA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                    // FetchContactDetails.EntityName = ContactPopUp_OverrideOptions.Name
                    model.variables.fetchContactDetailsDataAct.entityNameOut = model.variables.contactPopUp_OverrideOptionsIn.nameAttr;
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:oGfsZAvCMkm6jh3dB4msQA", callContext.id);
                } else {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:oGfsZAvCMkm6jh3dB4msQA", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:dPZcZc00pEiNPSWwGP6TfQ", callContext.id);
            }

        };
        Controller.prototype._handler_OnNoteDeleted$Action = function(noteIdIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_OnNoteDeleted");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.Directory_CommonBlocks.Directory_EntityDetailsActions.Handler_OnNoteDeleted$vars"))());
            vars.value.noteIdInLocal = noteIdIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:J78hdTLq0ke+Gxnsz7iKrA:/NRWebFlows.jGNlo9EW9U24MVecsZ_9tQ/NodesShownInESpaceTree.fJ0qEtiFx0e19F0VJxsZLQ/ClientActions.J78hdTLq0ke+Gxnsz7iKrA:bk1xVExWYItHeNILqVvXsg", "UBTConnect", "Handler_OnNoteDeleted", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:vBvySdf9N02BmhdHwEh32A", callContext.id);
                // Foreach EntityNotes.Note_Item_List
                callContext.iterationContext.registerIterationStart(model.variables.entityNotesVar.note_Item_ListAttr);
                try {
                    var note_Item_ListIterator = callContext.iterationContext.getIterator(model.variables.entityNotesVar.note_Item_ListAttr);
                    var note_Item_ListIndex = 0;
                    while ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:TP4J_dhpTESWKkKjjOE6sw", callContext.id) && (note_Item_ListIndex < model.variables.entityNotesVar.note_Item_ListAttr.length))) {
                        note_Item_ListIterator.currentRowNumber = note_Item_ListIndex;
                        if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:VlqTq42L+02ZoaPodhaXLg", callContext.id) && !(model.variables.entityNotesVar.note_Item_ListAttr.getItem(note_Item_ListIndex.valueOf()).idAttr.equals(vars.value.noteIdInLocal)))) {
                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:4fDEcz+BwUiLdlDBGPYwzw", callContext.id);
                            // Execute Action: ListAppend
                            OS.SystemActions.listAppend(vars.value.updatedNotesVar.note_Item_ListAttr, model.variables.entityNotesVar.note_Item_ListAttr.getItem(note_Item_ListIndex.valueOf()), callContext);
                        }

                        note_Item_ListIndex++;
                    }

                } finally {
                    callContext.iterationContext.registerIterationEnd(model.variables.entityNotesVar.note_Item_ListAttr);
                }

                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:bm25O9Q_0k+03qwDYCKlNA", callContext.id);
                // UpdatedNotes.Total = UpdatedNotes.Note_Item_List.Length
                vars.value.updatedNotesVar.totalAttr = vars.value.updatedNotesVar.note_Item_ListAttr.length;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:bm25O9Q_0k+03qwDYCKlNA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                // EntityNotes = UpdatedNotes
                model.variables.entityNotesVar = vars.value.updatedNotesVar;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:IXELNeDa5ESGFBv8LIOL0Q", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:J78hdTLq0ke+Gxnsz7iKrA", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.Directory_CommonBlocks.Directory_EntityDetailsActions.Handler_OnNoteDeleted$vars", [{
            name: "NoteId",
            attrName: "noteIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.LongInteger,
            defaultValue: function() {
                return OS.DataTypes.LongInteger.defaultValue;
            }
        }, {
            name: "UpdatedNotes",
            attrName: "updatedNotesVar",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Record,
            defaultValue: function() {
                return new UBTConnectLibraryModel.NotesRec();
            },
            complexType: UBTConnectLibraryModel.NotesRec
        }]);
        Controller.prototype._handle_Mail_Page$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handle_Mail_Page");
            callContext = controller.callContext(callContext);
            var getNameAndSurname_ByFullNameVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.getNameAndSurname_ByFullNameVar = getNameAndSurname_ByFullNameVar;
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:i3UUhFM9RUCt0HuDS6ZbAQ:/NRWebFlows.jGNlo9EW9U24MVecsZ_9tQ/NodesShownInESpaceTree.fJ0qEtiFx0e19F0VJxsZLQ/ClientActions.i3UUhFM9RUCt0HuDS6ZbAQ:0oTm1rXRV0zoeiv2viJkGQ", "UBTConnect", "Handle_Mail_Page", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:LIV2olZL9EqPCCw8e5+E8A", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:AROoQI1F_kekE1Ji280jNg", callContext.id);
                // Execute Action: GetNameAndSurname_ByFullName
                getNameAndSurname_ByFullNameVar.value = UBTConnectController.default.getNameAndSurname_ByFullName$Action(model.variables.fetchContactDetailsDataAct.contactPopupDataOut.nameAttr, callContext);

                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:QzlW5VhRN0mtIgkryR6xWg", callContext.id);
                return controller.safeExecuteAsyncJSNode(UBTConnect_Directory_CommonBlocks_Directory_EntityDetailsActions_mvc_controller_Handle_Mail_Page_YieldJS, "Yield", "Handle_Mail_Page", null, function($parameters) {}, {}, {}).then(function() {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:eRVqIkk1dkCHRifdgmg1Mw", callContext.id);
                    // Destination: /UBTConnect/ContactByEmailMember
                    return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/ContactByEmailMember", {
                        In_ContactName: OS.DataConversion.ServerDataConverter.asString(getNameAndSurname_ByFullNameVar.value.out_NameOut, OS.DataTypes.DataTypes.Text),
                        In_ContactSurname: OS.DataConversion.ServerDataConverter.asString(getNameAndSurname_ByFullNameVar.value.out_SurnameOut, OS.DataTypes.DataTypes.Text),
                        In_EmailTo: OS.DataConversion.ServerDataConverter.asString(model.variables.fetchContactDetailsDataAct.emailOut, OS.DataTypes.DataTypes.Text),
                        In_ContactLocality: OS.DataConversion.ServerDataConverter.asString(model.variables.fetchContactDetailsDataAct.contactPopupDataOut.localityAttr, OS.DataTypes.DataTypes.Text),
                        In_EntityType: OS.DataConversion.ServerDataConverter.asString(model.variables.fetchContactDetailsDataAct.contactPopupDataOut.entityTypeIdAttr, OS.DataTypes.DataTypes.Text),
                        In_EntityId: OS.DataConversion.ServerDataConverter.asString(model.variables.fetchContactDetailsDataAct.contactPopupDataOut.entityIdAttr, OS.DataTypes.DataTypes.LongInteger),
                        In_ContactCountry: OS.DataConversion.ServerDataConverter.asString(model.variables.fetchContactDetailsDataAct.countryNameOut, OS.DataTypes.DataTypes.Text),
                        In_AvatarURL: OS.DataConversion.ServerDataConverter.asString(model.variables.fetchContactDetailsDataAct.contactPopupDataOut.imageURLAttr, OS.DataTypes.DataTypes.Text)
                    }), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:i3UUhFM9RUCt0HuDS6ZbAQ", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:i3UUhFM9RUCt0HuDS6ZbAQ", callContext.id);
                throw ex;

            });
        };
        Controller.prototype._onReady$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnReady");
            callContext = controller.callContext(callContext);
            var getLocalBookmarkByObjectId_C2Var = new OS.DataTypes.VariableHolder();
            var getBookmarkCategoryId_ByEntityTypeIdVar = new OS.DataTypes.VariableHolder();
            var getShareType_FromEntityVar = new OS.DataTypes.VariableHolder();
            var checkRestoredJSResult = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.getLocalBookmarkByObjectId_C2Var = getLocalBookmarkByObjectId_C2Var;
            varBag.getBookmarkCategoryId_ByEntityTypeIdVar = getBookmarkCategoryId_ByEntityTypeIdVar;
            varBag.getShareType_FromEntityVar = getShareType_FromEntityVar;
            varBag.checkRestoredJSResult = checkRestoredJSResult;
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:LpxxpMZjO0W736oa9hF6nw:/NRWebFlows.jGNlo9EW9U24MVecsZ_9tQ/NodesShownInESpaceTree.fJ0qEtiFx0e19F0VJxsZLQ/ClientActions.LpxxpMZjO0W736oa9hF6nw:w23MbB+ov23v4EzIWJEYgQ", "UBTConnect", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:PIaNJvvI70a5VyAW0I9kmQ", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ampTSmy_gUCwX3cl7+Cmzg", callContext.id);
                checkRestoredJSResult.value = controller.safeExecuteJSNode(UBTConnect_Directory_CommonBlocks_Directory_EntityDetailsActions_mvc_controller_OnReady_CheckRestoredJS, "CheckRestored", "OnReady", {
                    FromCache: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
                    FromHistory: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
                }, function($parameters) {
                    var jsNodeResult = new(controller.constructor.getVariableGroupType("UBTConnect.Directory_CommonBlocks.Directory_EntityDetailsActions.OnReady$checkRestoredJSResult"))();
                    jsNodeResult.fromCacheOut = OS.DataConversion.JSNodeParamConverter.from($parameters.FromCache, OS.DataTypes.DataTypes.Boolean);
                    jsNodeResult.fromHistoryOut = OS.DataConversion.JSNodeParamConverter.from($parameters.FromHistory, OS.DataTypes.DataTypes.Boolean);
                    return jsNodeResult;
                }, {}, {});
                return OS.Flow.executeSequence(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:k_bAasP0eUKNfp1xSL3ZLg", callContext.id) && (checkRestoredJSResult.value.fromCacheOut || checkRestoredJSResult.value.fromHistoryOut))) {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:jGgIrF3S2UmLjhHfHuAPmw", callContext.id);
                    } else {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:2hMMY8G7h0yF2aWe694dqw", callContext.id);
                        // NoteCategoryId = Get_NoteCategoryId_ByEntityTypeId(EntityType)
                        model.variables.noteCategoryIdVar = OutSystemsDebugger.handleFunctionCall(function() {
                            return UBTConnectController.default.get_NoteCategoryId_ByEntityTypeId$Action(model.variables.entityTypeIn, callContext).out_NoteCategoryIdOut;
                        }, OS.DataTypes.DataTypes.Text, callContext.id);
                        // Type
                        if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Hwf31Mz7kUKhDthPvSU1+g", callContext.id) && (model.variables.entityTypeIn === UBTConnectModel.staticEntities.connect_Entity.member))) {
                            // Member
                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:PMuPkFN0OkSdi_RfZP8mRg", callContext.id);
                            // Local_In_ActionsMenuOptions.HasBookmark = False
                            model.variables.local_In_ActionsMenuOptionsVar.hasBookmarkAttr = false;
                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:PMuPkFN0OkSdi_RfZP8mRg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                            // Local_In_ActionsMenuOptions.HasUnbookmark = False
                            model.variables.local_In_ActionsMenuOptionsVar.hasUnbookmarkAttr = false;
                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:PMuPkFN0OkSdi_RfZP8mRg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
                            // Local_In_ActionsMenuOptions.HasNotes = False
                            model.variables.local_In_ActionsMenuOptionsVar.hasNotesAttr = false;
                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:PMuPkFN0OkSdi_RfZP8mRg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
                            // Local_In_ActionsMenuOptions.HasGift = False
                            model.variables.local_In_ActionsMenuOptionsVar.hasGiftAttr = false;
                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:PMuPkFN0OkSdi_RfZP8mRg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
                            // Local_In_ActionsMenuOptions.HasShare = False
                            model.variables.local_In_ActionsMenuOptionsVar.hasShareAttr = false;
                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:PMuPkFN0OkSdi_RfZP8mRg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "6");
                            // Local_In_ActionsMenuOptions.HasCall = True
                            model.variables.local_In_ActionsMenuOptionsVar.hasCallAttr = true;
                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:PMuPkFN0OkSdi_RfZP8mRg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "7");
                            // Local_In_ActionsMenuOptions.HasEmail = True
                            model.variables.local_In_ActionsMenuOptionsVar.hasEmailAttr = true;
                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:PMuPkFN0OkSdi_RfZP8mRg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "8");
                            // ShowIconLabels = False
                            model.variables.showIconLabelsVar = false;
                        } else {
                            if ((model.variables.entityTypeIn === UBTConnectModel.staticEntities.connect_Entity.locality)) {
                                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:W2E6YbBU3kmcb3JdWYWIxg", callContext.id);
                                // Raise Error: InvalidAction
                                throw new OS.Exceptions.Exceptions.UserException("UBTConnect.InvalidAction", "Invalid option");
                            } else {
                                if ((model.variables.entityTypeIn === UBTConnectModel.staticEntities.connect_Entity.household)) {
                                    // Household
                                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:j2PtBiikBEytD5E5LtJLTw", callContext.id);
                                    // Local_In_ActionsMenuOptions.HasBookmark = True
                                    model.variables.local_In_ActionsMenuOptionsVar.hasBookmarkAttr = true;
                                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:j2PtBiikBEytD5E5LtJLTw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                                    // Local_In_ActionsMenuOptions.HasUnbookmark = True
                                    model.variables.local_In_ActionsMenuOptionsVar.hasUnbookmarkAttr = true;
                                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:j2PtBiikBEytD5E5LtJLTw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
                                    // Local_In_ActionsMenuOptions.HasNotes = True
                                    model.variables.local_In_ActionsMenuOptionsVar.hasNotesAttr = true;
                                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:j2PtBiikBEytD5E5LtJLTw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
                                    // Local_In_ActionsMenuOptions.HasGift = True
                                    model.variables.local_In_ActionsMenuOptionsVar.hasGiftAttr = true;
                                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:j2PtBiikBEytD5E5LtJLTw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
                                    // Local_In_ActionsMenuOptions.HasShare = True
                                    model.variables.local_In_ActionsMenuOptionsVar.hasShareAttr = true;
                                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:j2PtBiikBEytD5E5LtJLTw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "6");
                                    // Local_In_ActionsMenuOptions.HasCall = False
                                    model.variables.local_In_ActionsMenuOptionsVar.hasCallAttr = false;
                                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:j2PtBiikBEytD5E5LtJLTw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "7");
                                    // Local_In_ActionsMenuOptions.HasEmail = False
                                    model.variables.local_In_ActionsMenuOptionsVar.hasEmailAttr = false;
                                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:j2PtBiikBEytD5E5LtJLTw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "8");
                                    // Local_In_ActionsMenuOptions.HasViewDetails = useViewDetails
                                    model.variables.local_In_ActionsMenuOptionsVar.hasViewDetailsAttr = model.variables.useViewDetailsIn;
                                } else {
                                    if ((model.variables.entityTypeIn === UBTConnectModel.staticEntities.connect_Entity.interchange)) {
                                        // Interchange
                                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:AtqtbE3410GPtd4C9eUaMQ", callContext.id);
                                        // Local_In_ActionsMenuOptions.HasBookmark = True
                                        model.variables.local_In_ActionsMenuOptionsVar.hasBookmarkAttr = true;
                                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:AtqtbE3410GPtd4C9eUaMQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                                        // Local_In_ActionsMenuOptions.HasUnbookmark = True
                                        model.variables.local_In_ActionsMenuOptionsVar.hasUnbookmarkAttr = true;
                                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:AtqtbE3410GPtd4C9eUaMQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
                                        // Local_In_ActionsMenuOptions.HasNotes = True
                                        model.variables.local_In_ActionsMenuOptionsVar.hasNotesAttr = true;
                                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:AtqtbE3410GPtd4C9eUaMQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
                                        // Local_In_ActionsMenuOptions.HasGift = False
                                        model.variables.local_In_ActionsMenuOptionsVar.hasGiftAttr = false;
                                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:AtqtbE3410GPtd4C9eUaMQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
                                        // Local_In_ActionsMenuOptions.HasShare = False
                                        model.variables.local_In_ActionsMenuOptionsVar.hasShareAttr = false;
                                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:AtqtbE3410GPtd4C9eUaMQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "6");
                                        // Local_In_ActionsMenuOptions.HasCall = False
                                        model.variables.local_In_ActionsMenuOptionsVar.hasCallAttr = false;
                                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:AtqtbE3410GPtd4C9eUaMQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "7");
                                        // Local_In_ActionsMenuOptions.HasEmail = False
                                        model.variables.local_In_ActionsMenuOptionsVar.hasEmailAttr = false;
                                    } else {
                                        if ((model.variables.entityTypeIn === UBTConnectModel.staticEntities.connect_Entity.supperMeetings_aka_Subdivisions)) {
                                            // SupperMeetings
                                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:GJiLP1rLMk+9n1GoXzqXCg", callContext.id);
                                            // Local_In_ActionsMenuOptions.HasBookmark = True
                                            model.variables.local_In_ActionsMenuOptionsVar.hasBookmarkAttr = true;
                                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:GJiLP1rLMk+9n1GoXzqXCg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                                            // Local_In_ActionsMenuOptions.HasUnbookmark = True
                                            model.variables.local_In_ActionsMenuOptionsVar.hasUnbookmarkAttr = true;
                                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:GJiLP1rLMk+9n1GoXzqXCg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
                                            // Local_In_ActionsMenuOptions.HasNotes = True
                                            model.variables.local_In_ActionsMenuOptionsVar.hasNotesAttr = true;
                                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:GJiLP1rLMk+9n1GoXzqXCg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
                                            // Local_In_ActionsMenuOptions.HasGift = False
                                            model.variables.local_In_ActionsMenuOptionsVar.hasGiftAttr = false;
                                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:GJiLP1rLMk+9n1GoXzqXCg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
                                            // Local_In_ActionsMenuOptions.HasShare = True
                                            model.variables.local_In_ActionsMenuOptionsVar.hasShareAttr = true;
                                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:GJiLP1rLMk+9n1GoXzqXCg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "6");
                                            // Local_In_ActionsMenuOptions.HasCall = False
                                            model.variables.local_In_ActionsMenuOptionsVar.hasCallAttr = false;
                                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:GJiLP1rLMk+9n1GoXzqXCg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "7");
                                            // Local_In_ActionsMenuOptions.HasEmail = False
                                            model.variables.local_In_ActionsMenuOptionsVar.hasEmailAttr = false;
                                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:GJiLP1rLMk+9n1GoXzqXCg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "8");
                                            // Local_In_ActionsMenuOptions.HasViewDetails = useViewDetails
                                            model.variables.local_In_ActionsMenuOptionsVar.hasViewDetailsAttr = model.variables.useViewDetailsIn;
                                        } else {
                                            if ((model.variables.entityTypeIn === UBTConnectModel.staticEntities.connect_Entity.oneSchoolGlobal)) {
                                                // OneSchool
                                                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:_T6kUIpvckeU9HzdtGkykA", callContext.id);
                                                // Local_In_ActionsMenuOptions.HasBookmark = True
                                                model.variables.local_In_ActionsMenuOptionsVar.hasBookmarkAttr = true;
                                                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:_T6kUIpvckeU9HzdtGkykA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                                                // Local_In_ActionsMenuOptions.HasUnbookmark = True
                                                model.variables.local_In_ActionsMenuOptionsVar.hasUnbookmarkAttr = true;
                                                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:_T6kUIpvckeU9HzdtGkykA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
                                                // Local_In_ActionsMenuOptions.HasNotes = True
                                                model.variables.local_In_ActionsMenuOptionsVar.hasNotesAttr = true;
                                                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:_T6kUIpvckeU9HzdtGkykA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
                                                // Local_In_ActionsMenuOptions.HasGift = False
                                                model.variables.local_In_ActionsMenuOptionsVar.hasGiftAttr = false;
                                                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:_T6kUIpvckeU9HzdtGkykA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
                                                // Local_In_ActionsMenuOptions.HasShare = True
                                                model.variables.local_In_ActionsMenuOptionsVar.hasShareAttr = true;
                                                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:_T6kUIpvckeU9HzdtGkykA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "6");
                                                // Local_In_ActionsMenuOptions.HasCall = True
                                                model.variables.local_In_ActionsMenuOptionsVar.hasCallAttr = true;
                                                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:_T6kUIpvckeU9HzdtGkykA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "7");
                                                // Local_In_ActionsMenuOptions.HasEmail = True
                                                model.variables.local_In_ActionsMenuOptionsVar.hasEmailAttr = true;
                                                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:_T6kUIpvckeU9HzdtGkykA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "8");
                                                // Local_In_ActionsMenuOptions.HasViewDetails = useViewDetails
                                                model.variables.local_In_ActionsMenuOptionsVar.hasViewDetailsAttr = model.variables.useViewDetailsIn;
                                            } else {
                                                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:3ulL+uhi90aLUgyKjJ37KA", callContext.id);
                                                // Raise Error: InvalidAction
                                                throw new OS.Exceptions.Exceptions.UserException("UBTConnect.InvalidAction", "Bookmarks not available");
                                            }

                                        }

                                    }

                                }

                            }

                        }

                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ObQZyWBP_kikoexhhwnSxA", callContext.id);
                        // isFetchContacts = Local_In_ActionsMenuOptions.HasCall or Local_In_ActionsMenuOptions.HasEmail or Local_In_ActionsMenuOptions.HasShare
                        model.variables.isFetchContactsVar = ((model.variables.local_In_ActionsMenuOptionsVar.hasCallAttr || model.variables.local_In_ActionsMenuOptionsVar.hasEmailAttr) || model.variables.local_In_ActionsMenuOptionsVar.hasShareAttr);
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:4JUnOdM9SUS2TEJXRSZx6A", callContext.id);
                        // Execute Action: Action_UpdateContactDetails
                        controller._action_UpdateContactDetails$Action(callContext);
                        if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ycWYQyNwokC74eNXGFB3aQ", callContext.id) && model.variables.local_In_ActionsMenuOptionsVar.hasShareAttr)) {
                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:fcHXfYLFC0C+s0ZVrSL30w", callContext.id);
                            // Execute Action: GetShareType_FromEntity
                            getShareType_FromEntityVar.value = UBTConnectController.default.getShareType_FromEntity$Action(model.variables.entityTypeIn, false, callContext);

                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:WazjFRCLeEO2LDffhXbTDQ", callContext.id);
                            // Local_ShareType = GetShareType_FromEntity.ShareType
                            model.variables.local_ShareTypeVar = getShareType_FromEntityVar.value.shareTypeOut;
                        }

                        return OS.Flow.executeSequence(function() {
                            if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Aan2Hrn3akatTrCVF1nlwQ", callContext.id) && (model.variables.local_In_ActionsMenuOptionsVar.hasBookmarkAttr || model.variables.local_In_ActionsMenuOptionsVar.hasUnbookmarkAttr))) {
                                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:8OtJcRa9_Eia6TT14JldFQ", callContext.id);
                                // Execute Action: GetBookmarkCategoryId_ByEntityTypeId
                                getBookmarkCategoryId_ByEntityTypeIdVar.value = UBTConnectController.default.getBookmarkCategoryId_ByEntityTypeId$Action(model.variables.entityTypeIn, callContext);

                                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:PidAnK9m9UW7E96hmIfX4g", callContext.id);
                                // Local_BookmarkTypeId = GetBookmarkCategoryId_ByEntityTypeId.BookmarkType
                                model.variables.local_BookmarkTypeIdVar = getBookmarkCategoryId_ByEntityTypeIdVar.value.bookmarkTypeOut;
                                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:8+vWUvQSkkOD0OwONf957g", callContext.id);
                                // Execute Action: GetLocalBookmarkByObjectId_C2
                                model.flush();
                                return UBTConnect_Bookmarks_MCSController.default.getLocalBookmarkByObjectId$Action(OS.BuiltinFunctions.longIntegerToText(model.variables.entityIdIn), callContext).then(function(value) {
                                    getLocalBookmarkByObjectId_C2Var.value = value;
                                }).then(function() {
                                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:NxOhKGaADEOacv0gom7uUA", callContext.id);
                                    // Local_isBookmarked = GetLocalBookmarkByObjectId_C2.LocalBookmark.Id <> NullIdentifier
                                    model.variables.local_isBookmarkedVar = !(getLocalBookmarkByObjectId_C2Var.value.localBookmarkOut.idAttr.equals(OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.nullIdentifier())));
                                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:xrhCKLMkekiW3Ejl8JLosg", callContext.id);
                                    // Trigger Event: OnChange_Bookmark2
                                    return controller.onChange_Bookmark$Action(model.variables.local_isBookmarkedVar, callContext);
                                }).then(function() {
                                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:PZDdSYTtPEWaazGXcB9eiA", callContext.id);
                                    // Execute Action: Action_RefreshFetchNotes
                                    return controller._action_RefreshFetchNotes$Action(callContext);
                                });
                            }

                        }).then(function() {
                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Jq3yP0FCo0SnX0_njx7HZQ", callContext.id);
                            // isLoaded = notisFetchContacts or FetchContactDetails.IsDataFetched or FetchContactDetails.HasFetchError
                            model.variables.isLoadedVar = ((!(model.variables.isFetchContactsVar) || model.variables.fetchContactDetailsDataAct.isDataFetchedAttr) || model.variables.fetchContactDetailsDataAct.hasFetchErrorAttr);
                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:kfgQNnl4EUiNqHJGKHRM1g", callContext.id);
                        });
                    }

                });
            }).then(function(res) {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:LpxxpMZjO0W736oa9hF6nw", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:LpxxpMZjO0W736oa9hF6nw", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("UBTConnect.Directory_CommonBlocks.Directory_EntityDetailsActions.OnReady$checkRestoredJSResult", [{
            name: "FromCache",
            attrName: "fromCacheOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }, {
            name: "FromHistory",
            attrName: "fromHistoryOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);
        Controller.prototype._action_UpdateContactDetails$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Action_UpdateContactDetails");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:ha_Rpf0WmkehbNGz5+c7eg:/NRWebFlows.jGNlo9EW9U24MVecsZ_9tQ/NodesShownInESpaceTree.fJ0qEtiFx0e19F0VJxsZLQ/ClientActions.ha_Rpf0WmkehbNGz5+c7eg:clzHxD76zVdroTlQjWjAFg", "UBTConnect", "Action_UpdateContactDetails", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:owZjj4fvH06Sox0jmyKrHg", callContext.id);
                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:rgnf4CodNEeZE7cr6+g2YA", callContext.id) && model.variables.entityIdIn.equals(OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.nullIdentifier())))) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:TOyl6LXYQ0CFIjKV+1FzmQ", callContext.id);
                } else {
                    if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:a9wCwo7b+Ey2E63U3BlaaQ", callContext.id) && model.variables.isFetchContactsVar)) {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:UR2xsroqg02u+6+o4FMcSA", callContext.id);
                        controller.safeExecuteJSNode(UBTConnect_Directory_CommonBlocks_Directory_EntityDetailsActions_mvc_controller_Action_UpdateContactDetails_AsynRefreshJS, "AsynRefresh", "Action_UpdateContactDetails", null, function($parameters) {}, {
                            Action_AsyncRefresh_ContactDetails: controller.clientActionProxies.action_AsyncRefresh_ContactDetails$Action
                        }, {});
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:1HzH_kvuNEOihtRfeltgqA", callContext.id);
                    } else {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:3bry2ZLouEKl0s9UYU1mHw", callContext.id);
                        // Execute Action: Action_ApplyPopUpOverrides
                        controller._action_ApplyPopUpOverrides$Action(callContext);
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:1HzH_kvuNEOihtRfeltgqA", callContext.id);
                    }

                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:ha_Rpf0WmkehbNGz5+c7eg", callContext.id);
            }

        };
        Controller.prototype._handle_Mail$Action = function(isOpenIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handle_Mail");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.Directory_CommonBlocks.Directory_EntityDetailsActions.Handle_Mail$vars"))());
            vars.value.isOpenInLocal = isOpenIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:xVTvryqtuUCryoKJP97nqg:/NRWebFlows.jGNlo9EW9U24MVecsZ_9tQ/NodesShownInESpaceTree.fJ0qEtiFx0e19F0VJxsZLQ/ClientActions.xVTvryqtuUCryoKJP97nqg:U1pOnKwggnvg5YB91ckIvQ", "UBTConnect", "Handle_Mail", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:eNz1R+WOmE6YF7uGDtIBgA", callContext.id);
                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:qwFIjBy_x0ybSc0OD6nQ_g", callContext.id) && (model.variables.entityTypeIn === UBTConnectModel.staticEntities.connect_Entity.oneSchoolGlobal))) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:mH5ZMfgXMkupaeyUHQ+wwA", callContext.id);
                    // Destination: /UBTConnect/ContactByEmailOneSchoolGlobal
                    return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/ContactByEmailOneSchoolGlobal", {
                        In_ContactName: OS.DataConversion.ServerDataConverter.asString(model.variables.fetchContactDetailsDataAct.contactPopupDataOut.nameAttr, OS.DataTypes.DataTypes.Text),
                        In_EmailTo: OS.DataConversion.ServerDataConverter.asString(model.variables.fetchContactDetailsDataAct.emailOut, OS.DataTypes.DataTypes.Text)
                    }), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                } else {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:5zIilHlEp0iMMhhNFYLUxg", callContext.id);
                    // ShowEmailPopUp = isOpen
                    model.variables.showEmailPopUpVar = vars.value.isOpenInLocal;
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:JMDAm6eO9UyqlA6YPKm8wA", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:xVTvryqtuUCryoKJP97nqg", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.Directory_CommonBlocks.Directory_EntityDetailsActions.Handle_Mail$vars", [{
            name: "isOpen",
            attrName: "isOpenInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);
        Controller.prototype._handle_Share$Action = function(isOpenIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handle_Share");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.Directory_CommonBlocks.Directory_EntityDetailsActions.Handle_Share$vars"))());
            vars.value.isOpenInLocal = isOpenIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:3vfMv0xZok+pJcjJowDW9A:/NRWebFlows.jGNlo9EW9U24MVecsZ_9tQ/NodesShownInESpaceTree.fJ0qEtiFx0e19F0VJxsZLQ/ClientActions.3vfMv0xZok+pJcjJowDW9A:u4Gl5Po6OdbLbHsrf53tVQ", "UBTConnect", "Handle_Share", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:OuGY9pBNWEGeOlQbwKMWdA", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:HCTPbrhhhU+z68j8OsODqA", callContext.id);
                // ShowSharePopup = isOpen
                model.variables.showSharePopupVar = vars.value.isOpenInLocal;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:lpatv2BeGU2yaDPzlxSQFw", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:3vfMv0xZok+pJcjJowDW9A", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.Directory_CommonBlocks.Directory_EntityDetailsActions.Handle_Share$vars", [{
            name: "isOpen",
            attrName: "isOpenInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);
        Controller.prototype._onAfterFetch_FetchNotes$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnAfterFetch_FetchNotes");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:IIxYyHAOhkamgmlMm9JwOQ:/NRWebFlows.jGNlo9EW9U24MVecsZ_9tQ/NodesShownInESpaceTree.fJ0qEtiFx0e19F0VJxsZLQ/ClientActions.IIxYyHAOhkamgmlMm9JwOQ:VZG4yUIUMiTo_IFAVRRf6g", "UBTConnect", "OnAfterFetch_FetchNotes", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:V6hQSjaFlk+CYfGk+WDG8Q", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:u8Y_d7Q64kCKDKtBrMJWaA", callContext.id);
                // EntityNotes = FetchNotes.Notes
                model.variables.entityNotesVar = model.variables.fetchNotesDataAct.notesOut;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:IGziaPXMiUidISNZ_6fAbg", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:IIxYyHAOhkamgmlMm9JwOQ", callContext.id);
            }

        };
        Controller.prototype._handle_Call$Action = function(isOpenIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handle_Call");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.Directory_CommonBlocks.Directory_EntityDetailsActions.Handle_Call$vars"))());
            vars.value.isOpenInLocal = isOpenIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:dikz0MoPvkeCblBbc3thug:/NRWebFlows.jGNlo9EW9U24MVecsZ_9tQ/NodesShownInESpaceTree.fJ0qEtiFx0e19F0VJxsZLQ/ClientActions.dikz0MoPvkeCblBbc3thug:by4ckExf0_FGEwrfmrtksw", "UBTConnect", "Handle_Call", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:4q7No7XM602+9IhsEvksJw", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:w6PjBMnKq06UA4UsZhTgtA", callContext.id);
                // ShowCallPopUp = isOpen
                model.variables.showCallPopUpVar = vars.value.isOpenInLocal;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:OwtM+C_7HkWAa6XKTgq3ww", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:dikz0MoPvkeCblBbc3thug", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.Directory_CommonBlocks.Directory_EntityDetailsActions.Handle_Call$vars", [{
            name: "isOpen",
            attrName: "isOpenInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);
        Controller.prototype._handle_Share_Connect$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handle_Share_Connect");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:diRR1c1k+Eq7rs7zYpy0AA:/NRWebFlows.jGNlo9EW9U24MVecsZ_9tQ/NodesShownInESpaceTree.fJ0qEtiFx0e19F0VJxsZLQ/ClientActions.diRR1c1k+Eq7rs7zYpy0AA:qJGsrwP4MBVY2DUhPp51Mg", "UBTConnect", "Handle_Share_Connect", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:dWQhbHioNUKvZXjC5wOjHA", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:eSUVjtmwh022j7nTFSzjOg", callContext.id);
                // Execute Action: Handle_Share
                controller._handle_Share$Action(false, callContext);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:nBDWtD5ybUysQShA0wrr1A", callContext.id);
                return controller.safeExecuteAsyncJSNode(UBTConnect_Directory_CommonBlocks_Directory_EntityDetailsActions_mvc_controller_Handle_Share_Connect_YieldJS, "Yield", "Handle_Share_Connect", null, function($parameters) {}, {}, {}).then(function() {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:0L2B99yIj027Bs+zGDC5dA", callContext.id);
                    // Destination: /UBTConnect/LegacyShareObject
                    return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/LegacyShareObject", {
                        In_ShareObjectTypeId: OS.DataConversion.ServerDataConverter.asString(model.variables.local_ShareTypeVar, OS.DataTypes.DataTypes.Text),
                        In_ObjectId: OS.DataConversion.ServerDataConverter.asString(OS.BuiltinFunctions.longIntegerToText(model.variables.entityIdIn), OS.DataTypes.DataTypes.Text)
                    }), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:diRR1c1k+Eq7rs7zYpy0AA", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:diRR1c1k+Eq7rs7zYpy0AA", callContext.id);
                throw ex;

            });
        };
        Controller.prototype._action_RefreshFetchNotes$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Action_RefreshFetchNotes");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:GDFh3RW_Yk2PBPW7aIesJA:/NRWebFlows.jGNlo9EW9U24MVecsZ_9tQ/NodesShownInESpaceTree.fJ0qEtiFx0e19F0VJxsZLQ/ClientActions.GDFh3RW_Yk2PBPW7aIesJA:T7UTLDd0FZLgOGT9xL5thg", "UBTConnect", "Action_RefreshFetchNotes", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:j922wa0q2UySVyag8InBLw", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                return OS.Flow.executeSequence(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:NxK+YqDLeEysf_dnYhdriA", callContext.id) && model.variables.entityIdIn.equals(OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.nullIdentifier())))) {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:rMV_ma7b_EmLWutQmDlm_g", callContext.id);
                    } else {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:4sEVvKxJnUiZlH1F0+JPCA", callContext.id);
                        // FetchNoteId = If
                        model.variables.fetchNoteIdVar = (((model.variables.entityTypeIn === UBTConnectModel.staticEntities.connect_Entity.interchange)) ? (OutSystemsDebugger.handleFunctionCall(function() {
                            return UBTConnectController.default.notes_InterchangeId_ComposeId$Action(model.variables.in_LocalityIdIn, OS.BuiltinFunctions.longIntegerToText(model.variables.entityIdIn), callContext).noteInterchangeIdOut;
                        }, OS.DataTypes.DataTypes.Text, callContext.id)) : (OS.BuiltinFunctions.longIntegerToText(model.variables.entityIdIn)));
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:JUSl+IeAwE2fLPLMues10g", callContext.id);
                        // Refresh Query: FetchNotes
                        var result = controller.fetchNotes$DataActRefresh(callContext);
                        model.flush();
                        return result.then(function() {
                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:X5iraG+0REiX94GmmHYNsQ", callContext.id);
                        });
                    }

                });
            }).then(function(res) {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:GDFh3RW_Yk2PBPW7aIesJA", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:GDFh3RW_Yk2PBPW7aIesJA", callContext.id);
                throw ex;

            });
        };
        Controller.prototype._handle_ClosedShareSheet$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handle_ClosedShareSheet");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:kJ2q6kY2KECtJmEy7pQZeA:/NRWebFlows.jGNlo9EW9U24MVecsZ_9tQ/NodesShownInESpaceTree.fJ0qEtiFx0e19F0VJxsZLQ/ClientActions.kJ2q6kY2KECtJmEy7pQZeA:JuY4BVM2fAjqKm15swA3Ww", "UBTConnect", "Handle_ClosedShareSheet", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:AEtYCpomREGT4MKocXaDDA", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:5i4PAc3WukqyNzqM77VG1w", callContext.id);
                // ShowSharePopup = False
                model.variables.showSharePopupVar = false;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:7FDd3cmZGEe2oSHcZ72bXQ", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:kJ2q6kY2KECtJmEy7pQZeA", callContext.id);
            }

        };
        Controller.prototype._onAfterFetch_FetchContactDetails$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnAfterFetch_FetchContactDetails");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:K+hY_vmWG0mnisUBvmNa1Q:/NRWebFlows.jGNlo9EW9U24MVecsZ_9tQ/NodesShownInESpaceTree.fJ0qEtiFx0e19F0VJxsZLQ/ClientActions.K+hY_vmWG0mnisUBvmNa1Q:G6UfCXdDmNfZCh43sBJvHg", "UBTConnect", "OnAfterFetch_FetchContactDetails", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:K1QHFm+V3EKCxuInmVQaaw", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:+0Edr1RRTECPZ3a5HuWJOw", callContext.id);
                // Execute Action: Action_ApplyPopUpOverrides
                controller._action_ApplyPopUpOverrides$Action(callContext);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Dsc5964iHkyfty0GTeOwVg", callContext.id);
                // Local_In_ActionsMenuOptions.HasCall = FetchContactDetails.Phone <> "" or FetchContactDetails.MobilePhone <> "" or FetchContactDetails.HomePhone <> "" or FetchContactDetails.WorkPhone <> ""
                model.variables.local_In_ActionsMenuOptionsVar.hasCallAttr = (((((model.variables.fetchContactDetailsDataAct.phoneOut) !== ("")) || ((model.variables.fetchContactDetailsDataAct.mobilePhoneOut) !== (""))) || ((model.variables.fetchContactDetailsDataAct.homePhoneOut) !== (""))) || ((model.variables.fetchContactDetailsDataAct.workPhoneOut) !== ("")));
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Dsc5964iHkyfty0GTeOwVg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                // Local_In_ActionsMenuOptions.HasEmail = FetchContactDetails.MobilePhone <> "" or FetchContactDetails.Email <> ""
                model.variables.local_In_ActionsMenuOptionsVar.hasEmailAttr = (((model.variables.fetchContactDetailsDataAct.mobilePhoneOut) !== ("")) || ((model.variables.fetchContactDetailsDataAct.emailOut) !== ("")));
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Dsc5964iHkyfty0GTeOwVg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
                // isLoaded = True
                model.variables.isLoadedVar = true;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:qMScRQJT9E6D7fwb09RXug", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:K+hY_vmWG0mnisUBvmNa1Q", callContext.id);
            }

        };

        Controller.prototype.handler_OnNotesSheetClosed$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_OnNotesSheetClosed$Action, callContext);

        };
        Controller.prototype.handleFetchError$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handleFetchError$Action, callContext);

        };
        Controller.prototype.onParametersChanged$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);

        };
        Controller.prototype.action_AsyncRefresh_ContactDetails$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._action_AsyncRefresh_ContactDetails$Action, callContext);

        };
        Controller.prototype.handler_OnSheetNotesChanged$Action = function(new_NotesIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_OnSheetNotesChanged$Action, callContext, new_NotesIn);

        };
        Controller.prototype.handle_Share_Others$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handle_Share_Others$Action, callContext);

        };
        Controller.prototype.handler_AddNotesOnClick$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_AddNotesOnClick$Action, callContext);

        };
        Controller.prototype.handle_Bookmark$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handle_Bookmark$Action, callContext);

        };
        Controller.prototype.action_ApplyPopUpOverrides$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._action_ApplyPopUpOverrides$Action, callContext);

        };
        Controller.prototype.handler_OnNoteDeleted$Action = function(noteIdIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_OnNoteDeleted$Action, callContext, noteIdIn);

        };
        Controller.prototype.handle_Mail_Page$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handle_Mail_Page$Action, callContext);

        };
        Controller.prototype.onReady$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

        };
        Controller.prototype.action_UpdateContactDetails$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._action_UpdateContactDetails$Action, callContext);

        };
        Controller.prototype.handle_Mail$Action = function(isOpenIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handle_Mail$Action, callContext, isOpenIn);

        };
        Controller.prototype.handle_Share$Action = function(isOpenIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handle_Share$Action, callContext, isOpenIn);

        };
        Controller.prototype.onAfterFetch_FetchNotes$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onAfterFetch_FetchNotes$Action, callContext);

        };
        Controller.prototype.handle_Call$Action = function(isOpenIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handle_Call$Action, callContext, isOpenIn);

        };
        Controller.prototype.handle_Share_Connect$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handle_Share_Connect$Action, callContext);

        };
        Controller.prototype.action_RefreshFetchNotes$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._action_RefreshFetchNotes$Action, callContext);

        };
        Controller.prototype.handle_ClosedShareSheet$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handle_ClosedShareSheet$Action, callContext);

        };
        Controller.prototype.onAfterFetch_FetchContactDetails$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onAfterFetch_FetchContactDetails$Action, callContext);

        };
        Controller.prototype.viewDetails_OnClick$Action = function() {
            return Promise.resolve();
        };
        Controller.prototype.onChange_Bookmark$Action = function() {
            return Promise.resolve();
        };
        Controller.prototype.event_MenuEdit$Action = function() {
            return Promise.resolve();
        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:jGNlo9EW9U24MVecsZ_9tQ:/NRWebFlows.jGNlo9EW9U24MVecsZ_9tQ:rc_AvpAI2laOpbdC1taVaA", "UBTConnect", "Directory_CommonBlocks", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:fJ0qEtiFx0e19F0VJxsZLQ:/NRWebFlows.jGNlo9EW9U24MVecsZ_9tQ/NodesShownInESpaceTree.fJ0qEtiFx0e19F0VJxsZLQ:LgDa5iPUFntW85ej4Zm4Lg", "UBTConnect", "Directory_EntityDetailsActions", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:fJ0qEtiFx0e19F0VJxsZLQ", callContext.id);
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:jGNlo9EW9U24MVecsZ_9tQ", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = null;
        Controller.prototype.onReadyEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "Directory_CommonBlocks/Directory_EntityDetailsActions On Ready");
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

                OutSystemsDebugger.setThreadStartName(callContext.id, "Directory_CommonBlocks/Directory_EntityDetailsActions On Parameters Changed");
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
            return UBTConnectController.default.defaultTimeout;
        };
        return Controller;
    })(OS.Controller.BaseViewController);
    return new OS.Controller.ControllerFactory(Controller, UBTConnectLanguageResources);
});
define("UBTConnect.Directory_CommonBlocks.Directory_EntityDetailsActions.mvc$controller.Handle_Mail_Page.YieldJS", [], function() {
    return function($actions, $roles, $public) {
        return new Promise(function($resolve, $reject) {
            Promise.resolve().then($resolve);
        });
    };
});
define("UBTConnect.Directory_CommonBlocks.Directory_EntityDetailsActions.mvc$controller.OnReady.CheckRestoredJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.FromCache = $public.View.wasCurrentViewRestoredFromCache();
        //$parameters.FromHistory = $public.Navigation.navigatedFromHistory();
    };
});
define("UBTConnect.Directory_CommonBlocks.Directory_EntityDetailsActions.mvc$controller.Action_UpdateContactDetails.AsynRefreshJS", [], function() {
    return function($actions, $roles, $public) {
        $actions.Action_AsyncRefresh_ContactDetails();
    };
});
define("UBTConnect.Directory_CommonBlocks.Directory_EntityDetailsActions.mvc$controller.Handle_Share_Connect.YieldJS", [], function() {
    return function($actions, $roles, $public) {
        return new Promise(function($resolve, $reject) {
            Promise.resolve().then($resolve);
        });
    };
});

define("UBTConnect.Directory_CommonBlocks.Directory_EntityDetailsActions.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "qgLJGK2hZkq2sB5wV6CKgg": {
            getter: function(varBag, idService) {
                return varBag.notRegisteredVar.value;
            }
        },
        "biX1RiYFdkub_M2Bpm1JOw": {
            getter: function(varBag, idService) {
                return varBag.allExceptionsVar.value;
            }
        },
        "N9d8tgF3QUird3SAZGvmyw": {
            getter: function(varBag, idService) {
                return varBag.communicationExceptionVar.value;
            }
        },
        "M_LRoe6iEE+TA0_ztuTQnQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.new_NotesInLocal;
            }
        },
        "kV3FAvQ5sU204_DDYIkQVA": {
            getter: function(varBag, idService) {
                return varBag.allExceptionsVar.value;
            }
        },
        "zdxaaaXRvU6lkW4YcE9NYg": {
            getter: function(varBag, idService) {
                return varBag.notRegisteredVar.value;
            }
        },
        "o5GJ1FAdmEG70s4GasafRQ": {
            getter: function(varBag, idService) {
                return varBag.communicationExceptionVar.value;
            }
        },
        "lN9gr9vIJ0OE9a4rSgsWaw": {
            getter: function(varBag, idService) {
                return varBag.vars.value.updatedNotesVar;
            }
        },
        "uS9AjVHs6Ee3Lu2BQAFUYA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.noteIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "AROoQI1F_kekE1Ji280jNg": {
            getter: function(varBag, idService) {
                return varBag.getNameAndSurname_ByFullNameVar.value;
            }
        },
        "QzlW5VhRN0mtIgkryR6xWg": {
            getter: function(varBag, idService) {
                return varBag.yieldJSResult.value;
            }
        },
        "8+vWUvQSkkOD0OwONf957g": {
            getter: function(varBag, idService) {
                return varBag.getLocalBookmarkByObjectId_C2Var.value;
            }
        },
        "8OtJcRa9_Eia6TT14JldFQ": {
            getter: function(varBag, idService) {
                return varBag.getBookmarkCategoryId_ByEntityTypeIdVar.value;
            }
        },
        "fcHXfYLFC0C+s0ZVrSL30w": {
            getter: function(varBag, idService) {
                return varBag.getShareType_FromEntityVar.value;
            }
        },
        "ampTSmy_gUCwX3cl7+Cmzg": {
            getter: function(varBag, idService) {
                return varBag.checkRestoredJSResult.value;
            }
        },
        "UR2xsroqg02u+6+o4FMcSA": {
            getter: function(varBag, idService) {
                return varBag.asynRefreshJSResult.value;
            }
        },
        "w8IEuTYGLUCk3MitrdCbjg": {
            getter: function(varBag, idService) {
                return varBag.vars.value.isOpenInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "jAS92xfjo0qErRx80r6zUg": {
            getter: function(varBag, idService) {
                return varBag.vars.value.isOpenInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "k0JM0SCwLkedqd1j8E4FSw": {
            getter: function(varBag, idService) {
                return varBag.vars.value.isOpenInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "nBDWtD5ybUysQShA0wrr1A": {
            getter: function(varBag, idService) {
                return varBag.yieldJSResult.value;
            }
        },
        "1+6JXwp7skexijEEArl4Bg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.local_isBookmarkedVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "ardvkbeDakWLihsrcxkAmw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.local_BookmarkTypeIdVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "5P5eCBYP7kKLzItmJMyjZA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.local_In_ActionsMenuOptionsVar;
            }
        },
        "b+vFLSMFBU6VCKG326e09A": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isLoadedVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "cnjHWs6i0k6Vpzmv7SFdqw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.local_ShareTypeVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "JNZMD6r480yri0NcD+vtqg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.showCallPopUpVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "JKON+W_DAEmcYIUx43MmpQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.showEmailPopUpVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "7XFQRndToEy7BfEntqY_AQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.showSharePopupVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "Znh+a6BBbkKnZzjtGnTnYQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.showNotesSheetVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "16hpFAWR6kS1Jr2i7LkKaw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isFetchContactsVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "CocXo3yXaU+c9gTv4IdSvA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.showIconLabelsVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "zXA3Ynm6I02h0KGKkzNCkg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.shareSheet_OverwriteImageURLVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "E7xFE_tpjkKnJjrCT+vDXA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.noteCategoryIdVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "mO2cR53LbEe479IN+LKL4w": {
            getter: function(varBag, idService) {
                return varBag.model.variables.entityNotesVar;
            }
        },
        "H+CjU_UKt0+vABNaErf62w": {
            getter: function(varBag, idService) {
                return varBag.model.variables.fetchNoteIdVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "1adN6H007k2lVRZeQqVdeg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isEnabledIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "xRaQ_T0Um0uGin70mcLJNg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.entityTypeIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "dGFVe9W5BU+NJUYEGPKKUg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.entityIdIn;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "PY1il0IZw0akQFub0c74zQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.contactPopUp_OverrideOptionsIn;
            }
        },
        "d4CHJrQqYkO6TvlzZJQqPg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.enableOptionsIn;
            }
        },
        "X0kLzqxh50eqt+t7xYaxyA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.useViewDetailsIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "dMB6PZa0S0iDJhCb3ZE10A": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_LocalityIdIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "JvHTKFJKiUe8nuzFv8t3IQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.fetchContactDetailsDataAct;
            }
        },
        "HZUOaXkmDkGeR+c_sO83xg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.fetchNotesDataAct;
            }
        },
        "OqCLCYa1102WaB7XZ4lMUQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_LoadingSection"));
                })(varBag.model, idService);
            }
        },
        "LWJGLU6x10mQcYxq1ok_Pg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_ShareableObject"));
                })(varBag.model, idService);
            }
        },
        "QmcTNWMRK0aWuESU1yoKBg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HideInServiceStudio_BottomSheet"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});