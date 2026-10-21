define("UBT_AppManager.model$Token_InvalidResponseUrlRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model"], function(exports, OutSystems, UBT_AppManagerModel) {
    var OS = OutSystems.Internal;
    var Token_InvalidResponseUrlRec = (function(_super) {
        __extends(Token_InvalidResponseUrlRec, _super);

        function Token_InvalidResponseUrlRec(defaults) {
            _super.apply(this, arguments);
        }
        Token_InvalidResponseUrlRec.attributesToDeclare = function() {
            return [
                this.attr("CodeLength", "codeLengthAttr", "CodeLength", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                    return OS.DataTypes.LongInteger.defaultValue;
                }, true),
                this.attr("Error", "errorAttr", "Error", false, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, true),
                this.attr("IdTokenLength", "idTokenLengthAttr", "IdTokenLength", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                    return OS.DataTypes.LongInteger.defaultValue;
                }, true),
                this.attr("ErrorDescription", "errorDescriptionAttr", "ErrorDescription", false, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, true),
                this.attr("B2C_ErrorTypesId", "b2C_ErrorTypesIdAttr", "B2C_ErrorTypesId", false, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, true)
            ].concat(_super.attributesToDeclare.call(this));
        };
        Token_InvalidResponseUrlRec.init();
        return Token_InvalidResponseUrlRec;
    })(OS.DataTypes.GenericRecord);
    UBT_AppManagerModel.Token_InvalidResponseUrlRec = Token_InvalidResponseUrlRec;

});
define("UBT_AppManager.model$Token_InvalidResponseUrlList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.model$Token_InvalidResponseUrlRec"], function(exports, OutSystems, UBT_AppManagerModel) {
    var OS = OutSystems.Internal;
    var Token_InvalidResponseUrlList = (function(_super) {
        __extends(Token_InvalidResponseUrlList, _super);

        function Token_InvalidResponseUrlList(defaults) {
            _super.apply(this, arguments);
        }
        Token_InvalidResponseUrlList.itemType = UBT_AppManagerModel.Token_InvalidResponseUrlRec;
        return Token_InvalidResponseUrlList;
    })(OS.DataTypes.GenericRecordList);
    UBT_AppManagerModel.Token_InvalidResponseUrlList = Token_InvalidResponseUrlList;

});
define("UBT_AppManager.model$", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model"], function(exports, OutSystems, UBT_AppManagerModel) {
    var OS = OutSystems.Internal;
    var TextList = (function(_super) {
        __extends(TextList, _super);

        function TextList(defaults) {
            _super.apply(this, arguments);
        }
        TextList.itemType = OS.DataTypes.DataTypes.Text;
        return TextList;
    })(OS.DataTypes.GenericRecordList);
    UBT_AppManagerModel.TextList = TextList;

});
define("UBT_AppManager.model$AppManager_UserInfoClientList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager.model", "UBT_AppManager_CS.model$AppManager_UserInfoClientRec", "UBT_AppManager.referencesHealth", "UBT_AppManager.referencesHealth$UBT_AppManager_CS"], function(exports, OutSystems, UBT_AppManager_CSModel, UBT_AppManagerModel) {
    var OS = OutSystems.Internal;
    var AppManager_UserInfoClientList = (function(_super) {
        __extends(AppManager_UserInfoClientList, _super);

        function AppManager_UserInfoClientList(defaults) {
            _super.apply(this, arguments);
        }
        AppManager_UserInfoClientList.itemType = UBT_AppManager_CSModel.AppManager_UserInfoClientRec;
        return AppManager_UserInfoClientList;
    })(OS.DataTypes.GenericRecordList);
    UBT_AppManagerModel.AppManager_UserInfoClientList = AppManager_UserInfoClientList;

});
define("UBT_AppManager.model$FirebaseEventRecord", ["exports", "OutSystems/ClientRuntime/Main", "Firebase.model", "UBT_AppManager.model", "Firebase.model$FirebaseEventRec", "UBT_AppManager.referencesHealth", "UBT_AppManager.referencesHealth$Firebase"], function(exports, OutSystems, FirebaseModel, UBT_AppManagerModel) {
    var OS = OutSystems.Internal;
    var FirebaseEventRecord = (function(_super) {
        __extends(FirebaseEventRecord, _super);

        function FirebaseEventRecord(defaults) {
            _super.apply(this, arguments);
        }
        FirebaseEventRecord.attributesToDeclare = function() {
            return [
                this.attr("FirebaseEvent", "firebaseEventAttr", "FirebaseEvent", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new FirebaseModel.FirebaseEventRec());
                }, true, FirebaseModel.FirebaseEventRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        FirebaseEventRecord.fromStructure = function(str) {
            return new FirebaseEventRecord(new FirebaseEventRecord.RecordClass({
                firebaseEventAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        FirebaseEventRecord._isAnonymousRecord = true;
        FirebaseEventRecord.UniqueId = "c8201267-45ce-8e1f-e229-a7336ffdc0d0";
        FirebaseEventRecord.init();
        return FirebaseEventRecord;
    })(OS.DataTypes.GenericRecord);
    UBT_AppManagerModel.FirebaseEventRecord = FirebaseEventRecord;

});
define("UBT_AppManager.model$FirebaseEventRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.model$FirebaseEventRecord"], function(exports, OutSystems, UBT_AppManagerModel) {
    var OS = OutSystems.Internal;
    var FirebaseEventRecordList = (function(_super) {
        __extends(FirebaseEventRecordList, _super);

        function FirebaseEventRecordList(defaults) {
            _super.apply(this, arguments);
        }
        FirebaseEventRecordList.itemType = UBT_AppManagerModel.FirebaseEventRecord;
        return FirebaseEventRecordList;
    })(OS.DataTypes.GenericRecordList);
    UBT_AppManagerModel.FirebaseEventRecordList = FirebaseEventRecordList;

});
define("UBT_AppManager.model$B2C_ErrorTypeList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_DB.model", "UBT_AppManager.model", "UBT_AppManager_DB.model$B2C_ErrorTypeRec", "UBT_AppManager.referencesHealth", "UBT_AppManager.referencesHealth$UBT_AppManager_DB"], function(exports, OutSystems, UBT_AppManager_DBModel, UBT_AppManagerModel) {
    var OS = OutSystems.Internal;
    var B2C_ErrorTypeList = (function(_super) {
        __extends(B2C_ErrorTypeList, _super);

        function B2C_ErrorTypeList(defaults) {
            _super.apply(this, arguments);
        }
        B2C_ErrorTypeList.itemType = UBT_AppManager_DBModel.B2C_ErrorTypeRec;
        return B2C_ErrorTypeList;
    })(OS.DataTypes.GenericRecordList);
    UBT_AppManagerModel.B2C_ErrorTypeList = B2C_ErrorTypeList;

});
define("UBT_AppManager.model$AppManager_CallbackRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model"], function(exports, OutSystems, UBT_AppManagerModel) {
    var OS = OutSystems.Internal;
    var AppManager_CallbackRec = (function(_super) {
        __extends(AppManager_CallbackRec, _super);

        function AppManager_CallbackRec(defaults) {
            _super.apply(this, arguments);
        }
        AppManager_CallbackRec.attributesToDeclare = function() {
            return [
                this.attr("isSucess", "isSucessAttr", "isSucess", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, true),
                this.attr("Message", "messageAttr", "Message", false, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, true),
                this.attr("MessageTitle", "messageTitleAttr", "MessageTitle", false, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, true),
                this.attr("MessageType", "messageTypeAttr", "MessageType", false, false, OS.DataTypes.DataTypes.Integer, function() {
                    return UBT_AppManagerModel.staticEntities.uBT_MessageType.error;
                }, true),
                this.attr("CallbackType", "callbackTypeAttr", "CallbackType", false, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, true),
                this.attr("LoginOperationGUID", "loginOperationGUIDAttr", "LoginOperationGUID", false, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, true)
            ].concat(_super.attributesToDeclare.call(this));
        };
        AppManager_CallbackRec.init();
        return AppManager_CallbackRec;
    })(OS.DataTypes.GenericRecord);
    UBT_AppManagerModel.AppManager_CallbackRec = AppManager_CallbackRec;

});
define("UBT_AppManager.model$AppManager_CallbackRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.model$AppManager_CallbackRec"], function(exports, OutSystems, UBT_AppManagerModel) {
    var OS = OutSystems.Internal;
    var AppManager_CallbackRecord = (function(_super) {
        __extends(AppManager_CallbackRecord, _super);

        function AppManager_CallbackRecord(defaults) {
            _super.apply(this, arguments);
        }
        AppManager_CallbackRecord.attributesToDeclare = function() {
            return [
                this.attr("AppManager_Callback", "appManager_CallbackAttr", "AppManager_Callback", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBT_AppManagerModel.AppManager_CallbackRec());
                }, true, UBT_AppManagerModel.AppManager_CallbackRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        AppManager_CallbackRecord.fromStructure = function(str) {
            return new AppManager_CallbackRecord(new AppManager_CallbackRecord.RecordClass({
                appManager_CallbackAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        AppManager_CallbackRecord._isAnonymousRecord = true;
        AppManager_CallbackRecord.UniqueId = "090aee6c-397f-fecf-c6e6-52d3281ffbca";
        AppManager_CallbackRecord.init();
        return AppManager_CallbackRecord;
    })(OS.DataTypes.GenericRecord);
    UBT_AppManagerModel.AppManager_CallbackRecord = AppManager_CallbackRecord;

});
define("UBT_AppManager.model$PIN_FingerprintAvailableCallback_ResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model"], function(exports, OutSystems, UBT_AppManagerModel) {
    var OS = OutSystems.Internal;
    var PIN_FingerprintAvailableCallback_ResponseRec = (function(_super) {
        __extends(PIN_FingerprintAvailableCallback_ResponseRec, _super);

        function PIN_FingerprintAvailableCallback_ResponseRec(defaults) {
            _super.apply(this, arguments);
        }
        PIN_FingerprintAvailableCallback_ResponseRec.attributesToDeclare = function() {
            return [
                this.attr("IsAvailable", "isAvailableAttr", "IsAvailable", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, true)
            ].concat(_super.attributesToDeclare.call(this));
        };
        PIN_FingerprintAvailableCallback_ResponseRec.fromStructure = function(str) {
            return new PIN_FingerprintAvailableCallback_ResponseRec(new PIN_FingerprintAvailableCallback_ResponseRec.RecordClass({
                isAvailableAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        PIN_FingerprintAvailableCallback_ResponseRec.init();
        return PIN_FingerprintAvailableCallback_ResponseRec;
    })(OS.DataTypes.GenericRecord);
    UBT_AppManagerModel.PIN_FingerprintAvailableCallback_ResponseRec = PIN_FingerprintAvailableCallback_ResponseRec;

});
define("UBT_AppManager.model$AppManager_JSUtils_ElementCache_ParentRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model"], function(exports, OutSystems, UBT_AppManagerModel) {
    var OS = OutSystems.Internal;
    var AppManager_JSUtils_ElementCache_ParentRec = (function(_super) {
        __extends(AppManager_JSUtils_ElementCache_ParentRec, _super);

        function AppManager_JSUtils_ElementCache_ParentRec(defaults) {
            _super.apply(this, arguments);
        }
        AppManager_JSUtils_ElementCache_ParentRec.attributesToDeclare = function() {
            return [
                this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, true)
            ].concat(_super.attributesToDeclare.call(this));
        };
        AppManager_JSUtils_ElementCache_ParentRec.fromStructure = function(str) {
            return new AppManager_JSUtils_ElementCache_ParentRec(new AppManager_JSUtils_ElementCache_ParentRec.RecordClass({
                labelAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        AppManager_JSUtils_ElementCache_ParentRec.init();
        return AppManager_JSUtils_ElementCache_ParentRec;
    })(OS.DataTypes.GenericRecord);
    UBT_AppManagerModel.AppManager_JSUtils_ElementCache_ParentRec = AppManager_JSUtils_ElementCache_ParentRec;

});
define("UBT_AppManager.model$AppManager_JSUtils_ElementCache_ParentRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.model$AppManager_JSUtils_ElementCache_ParentRec"], function(exports, OutSystems, UBT_AppManagerModel) {
    var OS = OutSystems.Internal;
    var AppManager_JSUtils_ElementCache_ParentRecord = (function(_super) {
        __extends(AppManager_JSUtils_ElementCache_ParentRecord, _super);

        function AppManager_JSUtils_ElementCache_ParentRecord(defaults) {
            _super.apply(this, arguments);
        }
        AppManager_JSUtils_ElementCache_ParentRecord.attributesToDeclare = function() {
            return [
                this.attr("AppManager_JSUtils_ElementCache_Parent", "appManager_JSUtils_ElementCache_ParentAttr", "AppManager_JSUtils_ElementCache_Parent", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBT_AppManagerModel.AppManager_JSUtils_ElementCache_ParentRec());
                }, true, UBT_AppManagerModel.AppManager_JSUtils_ElementCache_ParentRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        AppManager_JSUtils_ElementCache_ParentRecord.fromStructure = function(str) {
            return new AppManager_JSUtils_ElementCache_ParentRecord(new AppManager_JSUtils_ElementCache_ParentRecord.RecordClass({
                appManager_JSUtils_ElementCache_ParentAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        AppManager_JSUtils_ElementCache_ParentRecord._isAnonymousRecord = true;
        AppManager_JSUtils_ElementCache_ParentRecord.UniqueId = "dca21cb7-f6d8-a66c-5304-c1d0102996b2";
        AppManager_JSUtils_ElementCache_ParentRecord.init();
        return AppManager_JSUtils_ElementCache_ParentRecord;
    })(OS.DataTypes.GenericRecord);
    UBT_AppManagerModel.AppManager_JSUtils_ElementCache_ParentRecord = AppManager_JSUtils_ElementCache_ParentRecord;

});
define("UBT_AppManager.model$AppManager_JSUtils_ElementCache_ParentRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.model$AppManager_JSUtils_ElementCache_ParentRecord"], function(exports, OutSystems, UBT_AppManagerModel) {
    var OS = OutSystems.Internal;
    var AppManager_JSUtils_ElementCache_ParentRecordList = (function(_super) {
        __extends(AppManager_JSUtils_ElementCache_ParentRecordList, _super);

        function AppManager_JSUtils_ElementCache_ParentRecordList(defaults) {
            _super.apply(this, arguments);
        }
        AppManager_JSUtils_ElementCache_ParentRecordList.itemType = UBT_AppManagerModel.AppManager_JSUtils_ElementCache_ParentRecord;
        return AppManager_JSUtils_ElementCache_ParentRecordList;
    })(OS.DataTypes.GenericRecordList);
    UBT_AppManagerModel.AppManager_JSUtils_ElementCache_ParentRecordList = AppManager_JSUtils_ElementCache_ParentRecordList;

});
define("UBT_AppManager.model$AppManager_JSUtils_CustomEventsRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model"], function(exports, OutSystems, UBT_AppManagerModel) {
    var OS = OutSystems.Internal;
    var AppManager_JSUtils_CustomEventsRec = (function(_super) {
        __extends(AppManager_JSUtils_CustomEventsRec, _super);

        function AppManager_JSUtils_CustomEventsRec(defaults) {
            _super.apply(this, arguments);
        }
        AppManager_JSUtils_CustomEventsRec.attributesToDeclare = function() {
            return [
                this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, true)
            ].concat(_super.attributesToDeclare.call(this));
        };
        AppManager_JSUtils_CustomEventsRec.fromStructure = function(str) {
            return new AppManager_JSUtils_CustomEventsRec(new AppManager_JSUtils_CustomEventsRec.RecordClass({
                labelAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        AppManager_JSUtils_CustomEventsRec.init();
        return AppManager_JSUtils_CustomEventsRec;
    })(OS.DataTypes.GenericRecord);
    UBT_AppManagerModel.AppManager_JSUtils_CustomEventsRec = AppManager_JSUtils_CustomEventsRec;

});
define("UBT_AppManager.model$AppManager_JSUtils_CustomEventsRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.model$AppManager_JSUtils_CustomEventsRec"], function(exports, OutSystems, UBT_AppManagerModel) {
    var OS = OutSystems.Internal;
    var AppManager_JSUtils_CustomEventsRecord = (function(_super) {
        __extends(AppManager_JSUtils_CustomEventsRecord, _super);

        function AppManager_JSUtils_CustomEventsRecord(defaults) {
            _super.apply(this, arguments);
        }
        AppManager_JSUtils_CustomEventsRecord.attributesToDeclare = function() {
            return [
                this.attr("AppManager_JSUtils_CustomEvents", "appManager_JSUtils_CustomEventsAttr", "AppManager_JSUtils_CustomEvents", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBT_AppManagerModel.AppManager_JSUtils_CustomEventsRec());
                }, true, UBT_AppManagerModel.AppManager_JSUtils_CustomEventsRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        AppManager_JSUtils_CustomEventsRecord.fromStructure = function(str) {
            return new AppManager_JSUtils_CustomEventsRecord(new AppManager_JSUtils_CustomEventsRecord.RecordClass({
                appManager_JSUtils_CustomEventsAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        AppManager_JSUtils_CustomEventsRecord._isAnonymousRecord = true;
        AppManager_JSUtils_CustomEventsRecord.UniqueId = "8aff05a9-cae5-1abb-da9c-84f70a7c29ef";
        AppManager_JSUtils_CustomEventsRecord.init();
        return AppManager_JSUtils_CustomEventsRecord;
    })(OS.DataTypes.GenericRecord);
    UBT_AppManagerModel.AppManager_JSUtils_CustomEventsRecord = AppManager_JSUtils_CustomEventsRecord;

});
define("UBT_AppManager.model$AppManager_JSUtils_CustomEventsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.model$AppManager_JSUtils_CustomEventsRecord"], function(exports, OutSystems, UBT_AppManagerModel) {
    var OS = OutSystems.Internal;
    var AppManager_JSUtils_CustomEventsRecordList = (function(_super) {
        __extends(AppManager_JSUtils_CustomEventsRecordList, _super);

        function AppManager_JSUtils_CustomEventsRecordList(defaults) {
            _super.apply(this, arguments);
        }
        AppManager_JSUtils_CustomEventsRecordList.itemType = UBT_AppManagerModel.AppManager_JSUtils_CustomEventsRecord;
        return AppManager_JSUtils_CustomEventsRecordList;
    })(OS.DataTypes.GenericRecordList);
    UBT_AppManagerModel.AppManager_JSUtils_CustomEventsRecordList = AppManager_JSUtils_CustomEventsRecordList;

});
define("UBT_AppManager.model$AppManager_CallbackList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.model$AppManager_CallbackRec"], function(exports, OutSystems, UBT_AppManagerModel) {
    var OS = OutSystems.Internal;
    var AppManager_CallbackList = (function(_super) {
        __extends(AppManager_CallbackList, _super);

        function AppManager_CallbackList(defaults) {
            _super.apply(this, arguments);
        }
        AppManager_CallbackList.itemType = UBT_AppManagerModel.AppManager_CallbackRec;
        return AppManager_CallbackList;
    })(OS.DataTypes.GenericRecordList);
    UBT_AppManagerModel.AppManager_CallbackList = AppManager_CallbackList;

});
define("UBT_AppManager.model$Pin_LocalStorage_ItemRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model"], function(exports, OutSystems, UBT_AppManagerModel) {
    var OS = OutSystems.Internal;
    var Pin_LocalStorage_ItemRec = (function(_super) {
        __extends(Pin_LocalStorage_ItemRec, _super);

        function Pin_LocalStorage_ItemRec(defaults) {
            _super.apply(this, arguments);
        }
        Pin_LocalStorage_ItemRec.attributesToDeclare = function() {
            return [
                this.attr("PINCode", "pINCodeAttr", "PINCode", false, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, true),
                this.attr("AppId", "appIdAttr", "AppId", false, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, true),
                this.attr("UserId", "userIdAttr", "UserId", false, false, OS.DataTypes.DataTypes.Integer, function() {
                    return 0;
                }, true)
            ].concat(_super.attributesToDeclare.call(this));
        };
        Pin_LocalStorage_ItemRec.init();
        return Pin_LocalStorage_ItemRec;
    })(OS.DataTypes.GenericRecord);
    UBT_AppManagerModel.Pin_LocalStorage_ItemRec = Pin_LocalStorage_ItemRec;

});
define("UBT_AppManager.model$Pin_LocalStorage_ItemList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.model$Pin_LocalStorage_ItemRec"], function(exports, OutSystems, UBT_AppManagerModel) {
    var OS = OutSystems.Internal;
    var Pin_LocalStorage_ItemList = (function(_super) {
        __extends(Pin_LocalStorage_ItemList, _super);

        function Pin_LocalStorage_ItemList(defaults) {
            _super.apply(this, arguments);
        }
        Pin_LocalStorage_ItemList.itemType = UBT_AppManagerModel.Pin_LocalStorage_ItemRec;
        return Pin_LocalStorage_ItemList;
    })(OS.DataTypes.GenericRecordList);
    UBT_AppManagerModel.Pin_LocalStorage_ItemList = Pin_LocalStorage_ItemList;

});
define("UBT_AppManager.model$PIN_LocalStorageRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.model$Pin_LocalStorage_ItemList"], function(exports, OutSystems, UBT_AppManagerModel) {
    var OS = OutSystems.Internal;
    var PIN_LocalStorageRec = (function(_super) {
        __extends(PIN_LocalStorageRec, _super);

        function PIN_LocalStorageRec(defaults) {
            _super.apply(this, arguments);
        }
        PIN_LocalStorageRec.attributesToDeclare = function() {
            return [
                this.attr("List", "listAttr", "List", false, false, OS.DataTypes.DataTypes.RecordList, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBT_AppManagerModel.Pin_LocalStorage_ItemList());
                }, true, UBT_AppManagerModel.Pin_LocalStorage_ItemList)
            ].concat(_super.attributesToDeclare.call(this));
        };
        PIN_LocalStorageRec.fromStructure = function(str) {
            return new PIN_LocalStorageRec(new PIN_LocalStorageRec.RecordClass({
                listAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        PIN_LocalStorageRec.init();
        return PIN_LocalStorageRec;
    })(OS.DataTypes.GenericRecord);
    UBT_AppManagerModel.PIN_LocalStorageRec = PIN_LocalStorageRec;

});
define("UBT_AppManager.model$PIN_LocalStorageList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.model$PIN_LocalStorageRec"], function(exports, OutSystems, UBT_AppManagerModel) {
    var OS = OutSystems.Internal;
    var PIN_LocalStorageList = (function(_super) {
        __extends(PIN_LocalStorageList, _super);

        function PIN_LocalStorageList(defaults) {
            _super.apply(this, arguments);
        }
        PIN_LocalStorageList.itemType = UBT_AppManagerModel.PIN_LocalStorageRec;
        return PIN_LocalStorageList;
    })(OS.DataTypes.GenericRecordList);
    UBT_AppManagerModel.PIN_LocalStorageList = PIN_LocalStorageList;

});
define("UBT_AppManager.model$AppManager_JSUtils_ElementCache_PropertyRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model"], function(exports, OutSystems, UBT_AppManagerModel) {
    var OS = OutSystems.Internal;
    var AppManager_JSUtils_ElementCache_PropertyRec = (function(_super) {
        __extends(AppManager_JSUtils_ElementCache_PropertyRec, _super);

        function AppManager_JSUtils_ElementCache_PropertyRec(defaults) {
            _super.apply(this, arguments);
        }
        AppManager_JSUtils_ElementCache_PropertyRec.attributesToDeclare = function() {
            return [
                this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, true)
            ].concat(_super.attributesToDeclare.call(this));
        };
        AppManager_JSUtils_ElementCache_PropertyRec.fromStructure = function(str) {
            return new AppManager_JSUtils_ElementCache_PropertyRec(new AppManager_JSUtils_ElementCache_PropertyRec.RecordClass({
                labelAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        AppManager_JSUtils_ElementCache_PropertyRec.init();
        return AppManager_JSUtils_ElementCache_PropertyRec;
    })(OS.DataTypes.GenericRecord);
    UBT_AppManagerModel.AppManager_JSUtils_ElementCache_PropertyRec = AppManager_JSUtils_ElementCache_PropertyRec;

});
define("UBT_AppManager.model$AppManager_JSUtils_ElementCache_PropertyRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.model$AppManager_JSUtils_ElementCache_PropertyRec"], function(exports, OutSystems, UBT_AppManagerModel) {
    var OS = OutSystems.Internal;
    var AppManager_JSUtils_ElementCache_PropertyRecord = (function(_super) {
        __extends(AppManager_JSUtils_ElementCache_PropertyRecord, _super);

        function AppManager_JSUtils_ElementCache_PropertyRecord(defaults) {
            _super.apply(this, arguments);
        }
        AppManager_JSUtils_ElementCache_PropertyRecord.attributesToDeclare = function() {
            return [
                this.attr("AppManager_JSUtils_ElementCache_Property", "appManager_JSUtils_ElementCache_PropertyAttr", "AppManager_JSUtils_ElementCache_Property", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBT_AppManagerModel.AppManager_JSUtils_ElementCache_PropertyRec());
                }, true, UBT_AppManagerModel.AppManager_JSUtils_ElementCache_PropertyRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        AppManager_JSUtils_ElementCache_PropertyRecord.fromStructure = function(str) {
            return new AppManager_JSUtils_ElementCache_PropertyRecord(new AppManager_JSUtils_ElementCache_PropertyRecord.RecordClass({
                appManager_JSUtils_ElementCache_PropertyAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        AppManager_JSUtils_ElementCache_PropertyRecord._isAnonymousRecord = true;
        AppManager_JSUtils_ElementCache_PropertyRecord.UniqueId = "1e38f0ed-146d-f39b-9c8f-a564b5ae46e2";
        AppManager_JSUtils_ElementCache_PropertyRecord.init();
        return AppManager_JSUtils_ElementCache_PropertyRecord;
    })(OS.DataTypes.GenericRecord);
    UBT_AppManagerModel.AppManager_JSUtils_ElementCache_PropertyRecord = AppManager_JSUtils_ElementCache_PropertyRecord;

});
define("UBT_AppManager.model$AppManager_JSUtils_ElementCache_PropertyRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.model$AppManager_JSUtils_ElementCache_PropertyRecord"], function(exports, OutSystems, UBT_AppManagerModel) {
    var OS = OutSystems.Internal;
    var AppManager_JSUtils_ElementCache_PropertyRecordList = (function(_super) {
        __extends(AppManager_JSUtils_ElementCache_PropertyRecordList, _super);

        function AppManager_JSUtils_ElementCache_PropertyRecordList(defaults) {
            _super.apply(this, arguments);
        }
        AppManager_JSUtils_ElementCache_PropertyRecordList.itemType = UBT_AppManagerModel.AppManager_JSUtils_ElementCache_PropertyRecord;
        return AppManager_JSUtils_ElementCache_PropertyRecordList;
    })(OS.DataTypes.GenericRecordList);
    UBT_AppManagerModel.AppManager_JSUtils_ElementCache_PropertyRecordList = AppManager_JSUtils_ElementCache_PropertyRecordList;

});
define("UBT_AppManager.model$AppManager_DeviceContextRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager.model", "UBT_AppManager_CS.model$AppManager_DeviceContextRec", "UBT_AppManager.referencesHealth", "UBT_AppManager.referencesHealth$UBT_AppManager_CS"], function(exports, OutSystems, UBT_AppManager_CSModel, UBT_AppManagerModel) {
    var OS = OutSystems.Internal;
    var AppManager_DeviceContextRecord = (function(_super) {
        __extends(AppManager_DeviceContextRecord, _super);

        function AppManager_DeviceContextRecord(defaults) {
            _super.apply(this, arguments);
        }
        AppManager_DeviceContextRecord.attributesToDeclare = function() {
            return [
                this.attr("AppManager_DeviceContext", "appManager_DeviceContextAttr", "AppManager_DeviceContext", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_CSModel.AppManager_DeviceContextRec());
                }, true, UBT_AppManager_CSModel.AppManager_DeviceContextRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        AppManager_DeviceContextRecord.fromStructure = function(str) {
            return new AppManager_DeviceContextRecord(new AppManager_DeviceContextRecord.RecordClass({
                appManager_DeviceContextAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        AppManager_DeviceContextRecord._isAnonymousRecord = true;
        AppManager_DeviceContextRecord.UniqueId = "e046fbad-9b16-97b9-a3a8-12797a167da9";
        AppManager_DeviceContextRecord.init();
        return AppManager_DeviceContextRecord;
    })(OS.DataTypes.GenericRecord);
    UBT_AppManagerModel.AppManager_DeviceContextRecord = AppManager_DeviceContextRecord;

});
define("UBT_AppManager.model$AppManager_DeviceContextRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.model$AppManager_DeviceContextRecord"], function(exports, OutSystems, UBT_AppManagerModel) {
    var OS = OutSystems.Internal;
    var AppManager_DeviceContextRecordList = (function(_super) {
        __extends(AppManager_DeviceContextRecordList, _super);

        function AppManager_DeviceContextRecordList(defaults) {
            _super.apply(this, arguments);
        }
        AppManager_DeviceContextRecordList.itemType = UBT_AppManagerModel.AppManager_DeviceContextRecord;
        return AppManager_DeviceContextRecordList;
    })(OS.DataTypes.GenericRecordList);
    UBT_AppManagerModel.AppManager_DeviceContextRecordList = AppManager_DeviceContextRecordList;

});
define("UBT_AppManager.model$FirebaseRD_EventJSONList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager.model", "UBT_AppManager_CS.model$FirebaseRD_EventJSONRec", "UBT_AppManager.referencesHealth", "UBT_AppManager.referencesHealth$UBT_AppManager_CS"], function(exports, OutSystems, UBT_AppManager_CSModel, UBT_AppManagerModel) {
    var OS = OutSystems.Internal;
    var FirebaseRD_EventJSONList = (function(_super) {
        __extends(FirebaseRD_EventJSONList, _super);

        function FirebaseRD_EventJSONList(defaults) {
            _super.apply(this, arguments);
        }
        FirebaseRD_EventJSONList.itemType = UBT_AppManager_CSModel.FirebaseRD_EventJSONRec;
        return FirebaseRD_EventJSONList;
    })(OS.DataTypes.GenericRecordList);
    UBT_AppManagerModel.FirebaseRD_EventJSONList = FirebaseRD_EventJSONList;

});
define("UBT_AppManager.model$AppManager_ConfigClientCacheList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager.model", "UBT_AppManager_CS.model$AppManager_ConfigClientCacheRec", "UBT_AppManager.referencesHealth", "UBT_AppManager.referencesHealth$UBT_AppManager_CS"], function(exports, OutSystems, UBT_AppManager_CSModel, UBT_AppManagerModel) {
    var OS = OutSystems.Internal;
    var AppManager_ConfigClientCacheList = (function(_super) {
        __extends(AppManager_ConfigClientCacheList, _super);

        function AppManager_ConfigClientCacheList(defaults) {
            _super.apply(this, arguments);
        }
        AppManager_ConfigClientCacheList.itemType = UBT_AppManager_CSModel.AppManager_ConfigClientCacheRec;
        return AppManager_ConfigClientCacheList;
    })(OS.DataTypes.GenericRecordList);
    UBT_AppManagerModel.AppManager_ConfigClientCacheList = AppManager_ConfigClientCacheList;

});
define("UBT_AppManager.model$PIN_FingerprintReadCallback_ResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model"], function(exports, OutSystems, UBT_AppManagerModel) {
    var OS = OutSystems.Internal;
    var PIN_FingerprintReadCallback_ResponseRec = (function(_super) {
        __extends(PIN_FingerprintReadCallback_ResponseRec, _super);

        function PIN_FingerprintReadCallback_ResponseRec(defaults) {
            _super.apply(this, arguments);
        }
        PIN_FingerprintReadCallback_ResponseRec.attributesToDeclare = function() {
            return [
                this.attr("IsSuccess", "isSuccessAttr", "IsSuccess", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, true),
                this.attr("IsUnavailable", "isUnavailableAttr", "IsUnavailable", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, true),
                this.attr("ErrorMessage", "errorMessageAttr", "ErrorMessage", false, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, true),
                this.attr("ErrorCode", "errorCodeAttr", "ErrorCode", false, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, true)
            ].concat(_super.attributesToDeclare.call(this));
        };
        PIN_FingerprintReadCallback_ResponseRec.init();
        return PIN_FingerprintReadCallback_ResponseRec;
    })(OS.DataTypes.GenericRecord);
    UBT_AppManagerModel.PIN_FingerprintReadCallback_ResponseRec = PIN_FingerprintReadCallback_ResponseRec;

});
define("UBT_AppManager.model$PIN_FingerprintReadCallback_ResponseList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.model$PIN_FingerprintReadCallback_ResponseRec"], function(exports, OutSystems, UBT_AppManagerModel) {
    var OS = OutSystems.Internal;
    var PIN_FingerprintReadCallback_ResponseList = (function(_super) {
        __extends(PIN_FingerprintReadCallback_ResponseList, _super);

        function PIN_FingerprintReadCallback_ResponseList(defaults) {
            _super.apply(this, arguments);
        }
        PIN_FingerprintReadCallback_ResponseList.itemType = UBT_AppManagerModel.PIN_FingerprintReadCallback_ResponseRec;
        return PIN_FingerprintReadCallback_ResponseList;
    })(OS.DataTypes.GenericRecordList);
    UBT_AppManagerModel.PIN_FingerprintReadCallback_ResponseList = PIN_FingerprintReadCallback_ResponseList;

});
define("UBT_AppManager.model$PIN_FingerprintReadCallback_InputRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model"], function(exports, OutSystems, UBT_AppManagerModel) {
    var OS = OutSystems.Internal;
    var PIN_FingerprintReadCallback_InputRec = (function(_super) {
        __extends(PIN_FingerprintReadCallback_InputRec, _super);

        function PIN_FingerprintReadCallback_InputRec(defaults) {
            _super.apply(this, arguments);
        }
        PIN_FingerprintReadCallback_InputRec.attributesToDeclare = function() {
            return [
                this.attr("IsUserInitiated", "isUserInitiatedAttr", "IsUserInitiated", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, true),
                this.attr("Title", "titleAttr", "Title", false, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, true),
                this.attr("Message", "messageAttr", "Message", false, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, true),
                this.attr("Subtitle", "subtitleAttr", "Subtitle", false, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, true)
            ].concat(_super.attributesToDeclare.call(this));
        };
        PIN_FingerprintReadCallback_InputRec.init();
        return PIN_FingerprintReadCallback_InputRec;
    })(OS.DataTypes.GenericRecord);
    UBT_AppManagerModel.PIN_FingerprintReadCallback_InputRec = PIN_FingerprintReadCallback_InputRec;

});
define("UBT_AppManager.model$PIN_FingerprintReadCallback_InputRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.model$PIN_FingerprintReadCallback_InputRec"], function(exports, OutSystems, UBT_AppManagerModel) {
    var OS = OutSystems.Internal;
    var PIN_FingerprintReadCallback_InputRecord = (function(_super) {
        __extends(PIN_FingerprintReadCallback_InputRecord, _super);

        function PIN_FingerprintReadCallback_InputRecord(defaults) {
            _super.apply(this, arguments);
        }
        PIN_FingerprintReadCallback_InputRecord.attributesToDeclare = function() {
            return [
                this.attr("PIN_FingerprintReadCallback_Input", "pIN_FingerprintReadCallback_InputAttr", "PIN_FingerprintReadCallback_Input", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBT_AppManagerModel.PIN_FingerprintReadCallback_InputRec());
                }, true, UBT_AppManagerModel.PIN_FingerprintReadCallback_InputRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        PIN_FingerprintReadCallback_InputRecord.fromStructure = function(str) {
            return new PIN_FingerprintReadCallback_InputRecord(new PIN_FingerprintReadCallback_InputRecord.RecordClass({
                pIN_FingerprintReadCallback_InputAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        PIN_FingerprintReadCallback_InputRecord._isAnonymousRecord = true;
        PIN_FingerprintReadCallback_InputRecord.UniqueId = "65a5d941-1742-a5d2-b95e-e0ca0d501d92";
        PIN_FingerprintReadCallback_InputRecord.init();
        return PIN_FingerprintReadCallback_InputRecord;
    })(OS.DataTypes.GenericRecord);
    UBT_AppManagerModel.PIN_FingerprintReadCallback_InputRecord = PIN_FingerprintReadCallback_InputRecord;

});
define("UBT_AppManager.model$PIN_FingerprintReadCallback_InputRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.model$PIN_FingerprintReadCallback_InputRecord"], function(exports, OutSystems, UBT_AppManagerModel) {
    var OS = OutSystems.Internal;
    var PIN_FingerprintReadCallback_InputRecordList = (function(_super) {
        __extends(PIN_FingerprintReadCallback_InputRecordList, _super);

        function PIN_FingerprintReadCallback_InputRecordList(defaults) {
            _super.apply(this, arguments);
        }
        PIN_FingerprintReadCallback_InputRecordList.itemType = UBT_AppManagerModel.PIN_FingerprintReadCallback_InputRecord;
        return PIN_FingerprintReadCallback_InputRecordList;
    })(OS.DataTypes.GenericRecordList);
    UBT_AppManagerModel.PIN_FingerprintReadCallback_InputRecordList = PIN_FingerprintReadCallback_InputRecordList;

});
define("UBT_AppManager.model$Pin_LocalStorage_ItemRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.model$Pin_LocalStorage_ItemRec"], function(exports, OutSystems, UBT_AppManagerModel) {
    var OS = OutSystems.Internal;
    var Pin_LocalStorage_ItemRecord = (function(_super) {
        __extends(Pin_LocalStorage_ItemRecord, _super);

        function Pin_LocalStorage_ItemRecord(defaults) {
            _super.apply(this, arguments);
        }
        Pin_LocalStorage_ItemRecord.attributesToDeclare = function() {
            return [
                this.attr("Pin_LocalStorage_Item", "pin_LocalStorage_ItemAttr", "Pin_LocalStorage_Item", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBT_AppManagerModel.Pin_LocalStorage_ItemRec());
                }, true, UBT_AppManagerModel.Pin_LocalStorage_ItemRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        Pin_LocalStorage_ItemRecord.fromStructure = function(str) {
            return new Pin_LocalStorage_ItemRecord(new Pin_LocalStorage_ItemRecord.RecordClass({
                pin_LocalStorage_ItemAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        Pin_LocalStorage_ItemRecord._isAnonymousRecord = true;
        Pin_LocalStorage_ItemRecord.UniqueId = "602265d0-f50b-a9e7-9332-2491db7b693c";
        Pin_LocalStorage_ItemRecord.init();
        return Pin_LocalStorage_ItemRecord;
    })(OS.DataTypes.GenericRecord);
    UBT_AppManagerModel.Pin_LocalStorage_ItemRecord = Pin_LocalStorage_ItemRecord;

});
define("UBT_AppManager.model$Pin_LocalStorage_ItemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.model$Pin_LocalStorage_ItemRecord"], function(exports, OutSystems, UBT_AppManagerModel) {
    var OS = OutSystems.Internal;
    var Pin_LocalStorage_ItemRecordList = (function(_super) {
        __extends(Pin_LocalStorage_ItemRecordList, _super);

        function Pin_LocalStorage_ItemRecordList(defaults) {
            _super.apply(this, arguments);
        }
        Pin_LocalStorage_ItemRecordList.itemType = UBT_AppManagerModel.Pin_LocalStorage_ItemRecord;
        return Pin_LocalStorage_ItemRecordList;
    })(OS.DataTypes.GenericRecordList);
    UBT_AppManagerModel.Pin_LocalStorage_ItemRecordList = Pin_LocalStorage_ItemRecordList;

});
define("UBT_AppManager.model$AppManager_ConfigClientCacheRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager.model", "UBT_AppManager_CS.model$AppManager_ConfigClientCacheRec", "UBT_AppManager.referencesHealth", "UBT_AppManager.referencesHealth$UBT_AppManager_CS"], function(exports, OutSystems, UBT_AppManager_CSModel, UBT_AppManagerModel) {
    var OS = OutSystems.Internal;
    var AppManager_ConfigClientCacheRecord = (function(_super) {
        __extends(AppManager_ConfigClientCacheRecord, _super);

        function AppManager_ConfigClientCacheRecord(defaults) {
            _super.apply(this, arguments);
        }
        AppManager_ConfigClientCacheRecord.attributesToDeclare = function() {
            return [
                this.attr("AppManager_ConfigClientCache", "appManager_ConfigClientCacheAttr", "AppManager_ConfigClientCache", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_CSModel.AppManager_ConfigClientCacheRec());
                }, true, UBT_AppManager_CSModel.AppManager_ConfigClientCacheRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        AppManager_ConfigClientCacheRecord.fromStructure = function(str) {
            return new AppManager_ConfigClientCacheRecord(new AppManager_ConfigClientCacheRecord.RecordClass({
                appManager_ConfigClientCacheAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        AppManager_ConfigClientCacheRecord._isAnonymousRecord = true;
        AppManager_ConfigClientCacheRecord.UniqueId = "2bdc8a79-52bb-5aaa-40a9-71d785a17ccb";
        AppManager_ConfigClientCacheRecord.init();
        return AppManager_ConfigClientCacheRecord;
    })(OS.DataTypes.GenericRecord);
    UBT_AppManagerModel.AppManager_ConfigClientCacheRecord = AppManager_ConfigClientCacheRecord;

});
define("UBT_AppManager.model$PermissionListRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager.model", "UBT_AppManager_CS.model$PermissionListRec", "UBT_AppManager.referencesHealth", "UBT_AppManager.referencesHealth$UBT_AppManager_CS"], function(exports, OutSystems, UBT_AppManager_CSModel, UBT_AppManagerModel) {
    var OS = OutSystems.Internal;
    var PermissionListRecord = (function(_super) {
        __extends(PermissionListRecord, _super);

        function PermissionListRecord(defaults) {
            _super.apply(this, arguments);
        }
        PermissionListRecord.attributesToDeclare = function() {
            return [
                this.attr("PermissionList", "permissionListAttr", "PermissionList", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_CSModel.PermissionListRec());
                }, true, UBT_AppManager_CSModel.PermissionListRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        PermissionListRecord.fromStructure = function(str) {
            return new PermissionListRecord(new PermissionListRecord.RecordClass({
                permissionListAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        PermissionListRecord._isAnonymousRecord = true;
        PermissionListRecord.UniqueId = "304118b3-0081-145d-2b8f-19893b827812";
        PermissionListRecord.init();
        return PermissionListRecord;
    })(OS.DataTypes.GenericRecord);
    UBT_AppManagerModel.PermissionListRecord = PermissionListRecord;

});
define("UBT_AppManager.model$AppManager_ConfigClientRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager.model", "UBT_AppManager_CS.model$AppManager_ConfigClientRec", "UBT_AppManager.referencesHealth", "UBT_AppManager.referencesHealth$UBT_AppManager_CS"], function(exports, OutSystems, UBT_AppManager_CSModel, UBT_AppManagerModel) {
    var OS = OutSystems.Internal;
    var AppManager_ConfigClientRecord = (function(_super) {
        __extends(AppManager_ConfigClientRecord, _super);

        function AppManager_ConfigClientRecord(defaults) {
            _super.apply(this, arguments);
        }
        AppManager_ConfigClientRecord.attributesToDeclare = function() {
            return [
                this.attr("AppManager_ConfigClient", "appManager_ConfigClientAttr", "AppManager_ConfigClient", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_CSModel.AppManager_ConfigClientRec());
                }, true, UBT_AppManager_CSModel.AppManager_ConfigClientRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        AppManager_ConfigClientRecord.fromStructure = function(str) {
            return new AppManager_ConfigClientRecord(new AppManager_ConfigClientRecord.RecordClass({
                appManager_ConfigClientAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        AppManager_ConfigClientRecord._isAnonymousRecord = true;
        AppManager_ConfigClientRecord.UniqueId = "39b57c01-5c22-cd1f-f995-b55082c7573a";
        AppManager_ConfigClientRecord.init();
        return AppManager_ConfigClientRecord;
    })(OS.DataTypes.GenericRecord);
    UBT_AppManagerModel.AppManager_ConfigClientRecord = AppManager_ConfigClientRecord;

});
define("UBT_AppManager.model$UBT_MessageTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTJavaScriptUtils.model", "UBT_AppManager.model", "UBTJavaScriptUtils.model$UBT_MessageTypeRec", "UBT_AppManager.referencesHealth", "UBT_AppManager.referencesHealth$UBTJavaScriptUtils"], function(exports, OutSystems, UBTJavaScriptUtilsModel, UBT_AppManagerModel) {
    var OS = OutSystems.Internal;
    var UBT_MessageTypeRecord = (function(_super) {
        __extends(UBT_MessageTypeRecord, _super);

        function UBT_MessageTypeRecord(defaults) {
            _super.apply(this, arguments);
        }
        UBT_MessageTypeRecord.attributesToDeclare = function() {
            return [
                this.attr("UBT_MessageType", "uBT_MessageTypeAttr", "UBT_MessageType", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTJavaScriptUtilsModel.UBT_MessageTypeRec());
                }, true, UBTJavaScriptUtilsModel.UBT_MessageTypeRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        UBT_MessageTypeRecord.fromStructure = function(str) {
            return new UBT_MessageTypeRecord(new UBT_MessageTypeRecord.RecordClass({
                uBT_MessageTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        UBT_MessageTypeRecord._isAnonymousRecord = true;
        UBT_MessageTypeRecord.UniqueId = "39fb871d-a8eb-6e00-0e38-5ca7658159dc";
        UBT_MessageTypeRecord.init();
        return UBT_MessageTypeRecord;
    })(OS.DataTypes.GenericRecord);
    UBT_AppManagerModel.UBT_MessageTypeRecord = UBT_MessageTypeRecord;

});
define("UBT_AppManager.model$AppManager_AzureInsightsEventsRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_DB.model", "UBT_AppManager.model", "UBT_AppManager_DB.model$AppManager_AzureInsightsEventRec", "UBT_AppManager.referencesHealth", "UBT_AppManager.referencesHealth$UBT_AppManager_DB"], function(exports, OutSystems, UBT_AppManager_DBModel, UBT_AppManagerModel) {
    var OS = OutSystems.Internal;
    var AppManager_AzureInsightsEventsRecord = (function(_super) {
        __extends(AppManager_AzureInsightsEventsRecord, _super);

        function AppManager_AzureInsightsEventsRecord(defaults) {
            _super.apply(this, arguments);
        }
        AppManager_AzureInsightsEventsRecord.attributesToDeclare = function() {
            return [
                this.attr("AppManager_AzureInsightsEvent", "appManager_AzureInsightsEventAttr", "AppManager_AzureInsightsEvents", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_DBModel.AppManager_AzureInsightsEventRec());
                }, true, UBT_AppManager_DBModel.AppManager_AzureInsightsEventRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        AppManager_AzureInsightsEventsRecord.fromStructure = function(str) {
            return new AppManager_AzureInsightsEventsRecord(new AppManager_AzureInsightsEventsRecord.RecordClass({
                appManager_AzureInsightsEventAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        AppManager_AzureInsightsEventsRecord._isAnonymousRecord = true;
        AppManager_AzureInsightsEventsRecord.UniqueId = "3ed99897-a250-ef48-9daf-3a285f01c395";
        AppManager_AzureInsightsEventsRecord.init();
        return AppManager_AzureInsightsEventsRecord;
    })(OS.DataTypes.GenericRecord);
    UBT_AppManagerModel.AppManager_AzureInsightsEventsRecord = AppManager_AzureInsightsEventsRecord;

});
define("UBT_AppManager.model$Token_InvalidResponseUrlRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.model$Token_InvalidResponseUrlRec"], function(exports, OutSystems, UBT_AppManagerModel) {
    var OS = OutSystems.Internal;
    var Token_InvalidResponseUrlRecord = (function(_super) {
        __extends(Token_InvalidResponseUrlRecord, _super);

        function Token_InvalidResponseUrlRecord(defaults) {
            _super.apply(this, arguments);
        }
        Token_InvalidResponseUrlRecord.attributesToDeclare = function() {
            return [
                this.attr("Token_InvalidResponseUrl", "token_InvalidResponseUrlAttr", "Token_InvalidResponseUrl", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBT_AppManagerModel.Token_InvalidResponseUrlRec());
                }, true, UBT_AppManagerModel.Token_InvalidResponseUrlRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        Token_InvalidResponseUrlRecord.fromStructure = function(str) {
            return new Token_InvalidResponseUrlRecord(new Token_InvalidResponseUrlRecord.RecordClass({
                token_InvalidResponseUrlAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        Token_InvalidResponseUrlRecord._isAnonymousRecord = true;
        Token_InvalidResponseUrlRecord.UniqueId = "85e45c80-dfdc-71aa-0b10-cb0aee66d23d";
        Token_InvalidResponseUrlRecord.init();
        return Token_InvalidResponseUrlRecord;
    })(OS.DataTypes.GenericRecord);
    UBT_AppManagerModel.Token_InvalidResponseUrlRecord = Token_InvalidResponseUrlRecord;

});
define("UBT_AppManager.model$Token_InvalidResponseUrlRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.model$Token_InvalidResponseUrlRecord"], function(exports, OutSystems, UBT_AppManagerModel) {
    var OS = OutSystems.Internal;
    var Token_InvalidResponseUrlRecordList = (function(_super) {
        __extends(Token_InvalidResponseUrlRecordList, _super);

        function Token_InvalidResponseUrlRecordList(defaults) {
            _super.apply(this, arguments);
        }
        Token_InvalidResponseUrlRecordList.itemType = UBT_AppManagerModel.Token_InvalidResponseUrlRecord;
        return Token_InvalidResponseUrlRecordList;
    })(OS.DataTypes.GenericRecordList);
    UBT_AppManagerModel.Token_InvalidResponseUrlRecordList = Token_InvalidResponseUrlRecordList;

});
define("UBT_AppManager.model$AppManager_CallbackRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.model$AppManager_CallbackRecord"], function(exports, OutSystems, UBT_AppManagerModel) {
    var OS = OutSystems.Internal;
    var AppManager_CallbackRecordList = (function(_super) {
        __extends(AppManager_CallbackRecordList, _super);

        function AppManager_CallbackRecordList(defaults) {
            _super.apply(this, arguments);
        }
        AppManager_CallbackRecordList.itemType = UBT_AppManagerModel.AppManager_CallbackRecord;
        return AppManager_CallbackRecordList;
    })(OS.DataTypes.GenericRecordList);
    UBT_AppManagerModel.AppManager_CallbackRecordList = AppManager_CallbackRecordList;

});
define("UBT_AppManager.model$AppManager_ClientExceptionMessageRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager.model", "UBT_AppManager_CS.model$AppManager_ClientExceptionMessageRec", "UBT_AppManager.referencesHealth", "UBT_AppManager.referencesHealth$UBT_AppManager_CS"], function(exports, OutSystems, UBT_AppManager_CSModel, UBT_AppManagerModel) {
    var OS = OutSystems.Internal;
    var AppManager_ClientExceptionMessageRecord = (function(_super) {
        __extends(AppManager_ClientExceptionMessageRecord, _super);

        function AppManager_ClientExceptionMessageRecord(defaults) {
            _super.apply(this, arguments);
        }
        AppManager_ClientExceptionMessageRecord.attributesToDeclare = function() {
            return [
                this.attr("AppManager_ClientExceptionMessage", "appManager_ClientExceptionMessageAttr", "AppManager_ClientExceptionMessage", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_CSModel.AppManager_ClientExceptionMessageRec());
                }, true, UBT_AppManager_CSModel.AppManager_ClientExceptionMessageRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        AppManager_ClientExceptionMessageRecord.fromStructure = function(str) {
            return new AppManager_ClientExceptionMessageRecord(new AppManager_ClientExceptionMessageRecord.RecordClass({
                appManager_ClientExceptionMessageAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        AppManager_ClientExceptionMessageRecord._isAnonymousRecord = true;
        AppManager_ClientExceptionMessageRecord.UniqueId = "4e441ecb-c848-28cd-047c-861c32db9f61";
        AppManager_ClientExceptionMessageRecord.init();
        return AppManager_ClientExceptionMessageRecord;
    })(OS.DataTypes.GenericRecord);
    UBT_AppManagerModel.AppManager_ClientExceptionMessageRecord = AppManager_ClientExceptionMessageRecord;

});
define("UBT_AppManager.model$AppManager_UserInfoClientRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager.model", "UBT_AppManager_CS.model$AppManager_UserInfoClientRec", "UBT_AppManager.referencesHealth", "UBT_AppManager.referencesHealth$UBT_AppManager_CS"], function(exports, OutSystems, UBT_AppManager_CSModel, UBT_AppManagerModel) {
    var OS = OutSystems.Internal;
    var AppManager_UserInfoClientRecord = (function(_super) {
        __extends(AppManager_UserInfoClientRecord, _super);

        function AppManager_UserInfoClientRecord(defaults) {
            _super.apply(this, arguments);
        }
        AppManager_UserInfoClientRecord.attributesToDeclare = function() {
            return [
                this.attr("AppManager_UserInfoClient", "appManager_UserInfoClientAttr", "AppManager_UserInfoClient", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_CSModel.AppManager_UserInfoClientRec());
                }, true, UBT_AppManager_CSModel.AppManager_UserInfoClientRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        AppManager_UserInfoClientRecord.fromStructure = function(str) {
            return new AppManager_UserInfoClientRecord(new AppManager_UserInfoClientRecord.RecordClass({
                appManager_UserInfoClientAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        AppManager_UserInfoClientRecord._isAnonymousRecord = true;
        AppManager_UserInfoClientRecord.UniqueId = "501536c8-c756-d806-5637-928f4a5a9a93";
        AppManager_UserInfoClientRecord.init();
        return AppManager_UserInfoClientRecord;
    })(OS.DataTypes.GenericRecord);
    UBT_AppManagerModel.AppManager_UserInfoClientRecord = AppManager_UserInfoClientRecord;

});
define("UBT_AppManager.model$PIN_LocalStorageRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.model$PIN_LocalStorageRec"], function(exports, OutSystems, UBT_AppManagerModel) {
    var OS = OutSystems.Internal;
    var PIN_LocalStorageRecord = (function(_super) {
        __extends(PIN_LocalStorageRecord, _super);

        function PIN_LocalStorageRecord(defaults) {
            _super.apply(this, arguments);
        }
        PIN_LocalStorageRecord.attributesToDeclare = function() {
            return [
                this.attr("PIN_LocalStorage", "pIN_LocalStorageAttr", "PIN_LocalStorage", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBT_AppManagerModel.PIN_LocalStorageRec());
                }, true, UBT_AppManagerModel.PIN_LocalStorageRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        PIN_LocalStorageRecord.fromStructure = function(str) {
            return new PIN_LocalStorageRecord(new PIN_LocalStorageRecord.RecordClass({
                pIN_LocalStorageAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        PIN_LocalStorageRecord._isAnonymousRecord = true;
        PIN_LocalStorageRecord.UniqueId = "50b80080-213b-13ad-d4e2-857b498150c5";
        PIN_LocalStorageRecord.init();
        return PIN_LocalStorageRecord;
    })(OS.DataTypes.GenericRecord);
    UBT_AppManagerModel.PIN_LocalStorageRecord = PIN_LocalStorageRecord;

});
define("UBT_AppManager.model$PermissionListRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.model$PermissionListRecord"], function(exports, OutSystems, UBT_AppManagerModel) {
    var OS = OutSystems.Internal;
    var PermissionListRecordList = (function(_super) {
        __extends(PermissionListRecordList, _super);

        function PermissionListRecordList(defaults) {
            _super.apply(this, arguments);
        }
        PermissionListRecordList.itemType = UBT_AppManagerModel.PermissionListRecord;
        return PermissionListRecordList;
    })(OS.DataTypes.GenericRecordList);
    UBT_AppManagerModel.PermissionListRecordList = PermissionListRecordList;

});
define("UBT_AppManager.model$PIN_FingerprintAvailableCallback_ResponseRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.model$PIN_FingerprintAvailableCallback_ResponseRec"], function(exports, OutSystems, UBT_AppManagerModel) {
    var OS = OutSystems.Internal;
    var PIN_FingerprintAvailableCallback_ResponseRecord = (function(_super) {
        __extends(PIN_FingerprintAvailableCallback_ResponseRecord, _super);

        function PIN_FingerprintAvailableCallback_ResponseRecord(defaults) {
            _super.apply(this, arguments);
        }
        PIN_FingerprintAvailableCallback_ResponseRecord.attributesToDeclare = function() {
            return [
                this.attr("PIN_FingerprintAvailableCallback_Response", "pIN_FingerprintAvailableCallback_ResponseAttr", "PIN_FingerprintAvailableCallback_Response", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBT_AppManagerModel.PIN_FingerprintAvailableCallback_ResponseRec());
                }, true, UBT_AppManagerModel.PIN_FingerprintAvailableCallback_ResponseRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        PIN_FingerprintAvailableCallback_ResponseRecord.fromStructure = function(str) {
            return new PIN_FingerprintAvailableCallback_ResponseRecord(new PIN_FingerprintAvailableCallback_ResponseRecord.RecordClass({
                pIN_FingerprintAvailableCallback_ResponseAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        PIN_FingerprintAvailableCallback_ResponseRecord._isAnonymousRecord = true;
        PIN_FingerprintAvailableCallback_ResponseRecord.UniqueId = "d39eed69-c6cc-8dfe-9675-90de333afef1";
        PIN_FingerprintAvailableCallback_ResponseRecord.init();
        return PIN_FingerprintAvailableCallback_ResponseRecord;
    })(OS.DataTypes.GenericRecord);
    UBT_AppManagerModel.PIN_FingerprintAvailableCallback_ResponseRecord = PIN_FingerprintAvailableCallback_ResponseRecord;

});
define("UBT_AppManager.model$PIN_FingerprintAvailableCallback_ResponseRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.model$PIN_FingerprintAvailableCallback_ResponseRecord"], function(exports, OutSystems, UBT_AppManagerModel) {
    var OS = OutSystems.Internal;
    var PIN_FingerprintAvailableCallback_ResponseRecordList = (function(_super) {
        __extends(PIN_FingerprintAvailableCallback_ResponseRecordList, _super);

        function PIN_FingerprintAvailableCallback_ResponseRecordList(defaults) {
            _super.apply(this, arguments);
        }
        PIN_FingerprintAvailableCallback_ResponseRecordList.itemType = UBT_AppManagerModel.PIN_FingerprintAvailableCallback_ResponseRecord;
        return PIN_FingerprintAvailableCallback_ResponseRecordList;
    })(OS.DataTypes.GenericRecordList);
    UBT_AppManagerModel.PIN_FingerprintAvailableCallback_ResponseRecordList = PIN_FingerprintAvailableCallback_ResponseRecordList;

});
define("UBT_AppManager.model$AppManager_DelayedMessageRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model"], function(exports, OutSystems, UBT_AppManagerModel) {
    var OS = OutSystems.Internal;
    var AppManager_DelayedMessageRec = (function(_super) {
        __extends(AppManager_DelayedMessageRec, _super);

        function AppManager_DelayedMessageRec(defaults) {
            _super.apply(this, arguments);
        }
        AppManager_DelayedMessageRec.attributesToDeclare = function() {
            return [
                this.attr("Type", "typeAttr", "Type", false, false, OS.DataTypes.DataTypes.Integer, function() {
                    return 0;
                }, true),
                this.attr("Message", "messageAttr", "Message", false, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, true),
                this.attr("MessageTitle", "messageTitleAttr", "MessageTitle", false, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, true)
            ].concat(_super.attributesToDeclare.call(this));
        };
        AppManager_DelayedMessageRec.init();
        return AppManager_DelayedMessageRec;
    })(OS.DataTypes.GenericRecord);
    UBT_AppManagerModel.AppManager_DelayedMessageRec = AppManager_DelayedMessageRec;

});
define("UBT_AppManager.model$AppManager_DelayedMessageList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.model$AppManager_DelayedMessageRec"], function(exports, OutSystems, UBT_AppManagerModel) {
    var OS = OutSystems.Internal;
    var AppManager_DelayedMessageList = (function(_super) {
        __extends(AppManager_DelayedMessageList, _super);

        function AppManager_DelayedMessageList(defaults) {
            _super.apply(this, arguments);
        }
        AppManager_DelayedMessageList.itemType = UBT_AppManagerModel.AppManager_DelayedMessageRec;
        return AppManager_DelayedMessageList;
    })(OS.DataTypes.GenericRecordList);
    UBT_AppManagerModel.AppManager_DelayedMessageList = AppManager_DelayedMessageList;

});
define("UBT_AppManager.model$AppManager_ClientExceptionMessageRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.model$AppManager_ClientExceptionMessageRecord"], function(exports, OutSystems, UBT_AppManagerModel) {
    var OS = OutSystems.Internal;
    var AppManager_ClientExceptionMessageRecordList = (function(_super) {
        __extends(AppManager_ClientExceptionMessageRecordList, _super);

        function AppManager_ClientExceptionMessageRecordList(defaults) {
            _super.apply(this, arguments);
        }
        AppManager_ClientExceptionMessageRecordList.itemType = UBT_AppManagerModel.AppManager_ClientExceptionMessageRecord;
        return AppManager_ClientExceptionMessageRecordList;
    })(OS.DataTypes.GenericRecordList);
    UBT_AppManagerModel.AppManager_ClientExceptionMessageRecordList = AppManager_ClientExceptionMessageRecordList;

});
define("UBT_AppManager.model$AppManager_DelayedMessageRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.model$AppManager_DelayedMessageRec"], function(exports, OutSystems, UBT_AppManagerModel) {
    var OS = OutSystems.Internal;
    var AppManager_DelayedMessageRecord = (function(_super) {
        __extends(AppManager_DelayedMessageRecord, _super);

        function AppManager_DelayedMessageRecord(defaults) {
            _super.apply(this, arguments);
        }
        AppManager_DelayedMessageRecord.attributesToDeclare = function() {
            return [
                this.attr("AppManager_DelayedMessage", "appManager_DelayedMessageAttr", "AppManager_DelayedMessage", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBT_AppManagerModel.AppManager_DelayedMessageRec());
                }, true, UBT_AppManagerModel.AppManager_DelayedMessageRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        AppManager_DelayedMessageRecord.fromStructure = function(str) {
            return new AppManager_DelayedMessageRecord(new AppManager_DelayedMessageRecord.RecordClass({
                appManager_DelayedMessageAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        AppManager_DelayedMessageRecord._isAnonymousRecord = true;
        AppManager_DelayedMessageRecord.UniqueId = "6491ee9d-4fa0-d7df-7e2a-d4129d124fae";
        AppManager_DelayedMessageRecord.init();
        return AppManager_DelayedMessageRecord;
    })(OS.DataTypes.GenericRecord);
    UBT_AppManagerModel.AppManager_DelayedMessageRecord = AppManager_DelayedMessageRecord;

});
define("UBT_AppManager.model$AppManager_CachedUserInfoRec", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model"], function(exports, OutSystems, UBT_AppManagerModel) {
    var OS = OutSystems.Internal;
    var AppManager_CachedUserInfoRec = (function(_super) {
        __extends(AppManager_CachedUserInfoRec, _super);

        function AppManager_CachedUserInfoRec(defaults) {
            _super.apply(this, arguments);
        }
        AppManager_CachedUserInfoRec.attributesToDeclare = function() {
            return [
                this.attr("isCommunityMember", "isCommunityMemberAttr", "isCommunityMember", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, true),
                this.attr("ContactBaseId", "contactBaseIdAttr", "ContactBaseId", false, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, true),
                this.attr("MemberId", "memberIdAttr", "MemberId", false, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, true),
                this.attr("FirstName", "firstNameAttr", "FirstName", false, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, true),
                this.attr("LastName", "lastNameAttr", "LastName", false, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, true),
                this.attr("Locality", "localityAttr", "Locality", false, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, true),
                this.attr("Country", "countryAttr", "Country", false, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, true),
                this.attr("CountryCode", "countryCodeAttr", "CountryCode", false, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, true),
                this.attr("UserExternalId", "userExternalIdAttr", "UserExternalId", false, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, true),
                this.attr("Username", "usernameAttr", "Username", false, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, true),
                this.attr("Email", "emailAttr", "Email", false, false, OS.DataTypes.DataTypes.Email, function() {
                    return "";
                }, true),
                this.attr("Phone", "phoneAttr", "Phone", false, false, OS.DataTypes.DataTypes.PhoneNumber, function() {
                    return "";
                }, true)
            ].concat(_super.attributesToDeclare.call(this));
        };
        AppManager_CachedUserInfoRec.init();
        return AppManager_CachedUserInfoRec;
    })(OS.DataTypes.GenericRecord);
    UBT_AppManagerModel.AppManager_CachedUserInfoRec = AppManager_CachedUserInfoRec;

});
define("UBT_AppManager.model$AppManager_CachedUserInfoRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.model$AppManager_CachedUserInfoRec"], function(exports, OutSystems, UBT_AppManagerModel) {
    var OS = OutSystems.Internal;
    var AppManager_CachedUserInfoRecord = (function(_super) {
        __extends(AppManager_CachedUserInfoRecord, _super);

        function AppManager_CachedUserInfoRecord(defaults) {
            _super.apply(this, arguments);
        }
        AppManager_CachedUserInfoRecord.attributesToDeclare = function() {
            return [
                this.attr("AppManager_CachedUserInfo", "appManager_CachedUserInfoAttr", "AppManager_CachedUserInfo", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBT_AppManagerModel.AppManager_CachedUserInfoRec());
                }, true, UBT_AppManagerModel.AppManager_CachedUserInfoRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        AppManager_CachedUserInfoRecord.fromStructure = function(str) {
            return new AppManager_CachedUserInfoRecord(new AppManager_CachedUserInfoRecord.RecordClass({
                appManager_CachedUserInfoAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        AppManager_CachedUserInfoRecord._isAnonymousRecord = true;
        AppManager_CachedUserInfoRecord.UniqueId = "b35ca5be-3302-f76a-374d-1f39ba4542b7";
        AppManager_CachedUserInfoRecord.init();
        return AppManager_CachedUserInfoRecord;
    })(OS.DataTypes.GenericRecord);
    UBT_AppManagerModel.AppManager_CachedUserInfoRecord = AppManager_CachedUserInfoRecord;

});
define("UBT_AppManager.model$AppManager_CachedUserInfoRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.model$AppManager_CachedUserInfoRecord"], function(exports, OutSystems, UBT_AppManagerModel) {
    var OS = OutSystems.Internal;
    var AppManager_CachedUserInfoRecordList = (function(_super) {
        __extends(AppManager_CachedUserInfoRecordList, _super);

        function AppManager_CachedUserInfoRecordList(defaults) {
            _super.apply(this, arguments);
        }
        AppManager_CachedUserInfoRecordList.itemType = UBT_AppManagerModel.AppManager_CachedUserInfoRecord;
        return AppManager_CachedUserInfoRecordList;
    })(OS.DataTypes.GenericRecordList);
    UBT_AppManagerModel.AppManager_CachedUserInfoRecordList = AppManager_CachedUserInfoRecordList;

});
define("UBT_AppManager.model$AppManager_ConfigClientList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager.model", "UBT_AppManager_CS.model$AppManager_ConfigClientRec", "UBT_AppManager.referencesHealth", "UBT_AppManager.referencesHealth$UBT_AppManager_CS"], function(exports, OutSystems, UBT_AppManager_CSModel, UBT_AppManagerModel) {
    var OS = OutSystems.Internal;
    var AppManager_ConfigClientList = (function(_super) {
        __extends(AppManager_ConfigClientList, _super);

        function AppManager_ConfigClientList(defaults) {
            _super.apply(this, arguments);
        }
        AppManager_ConfigClientList.itemType = UBT_AppManager_CSModel.AppManager_ConfigClientRec;
        return AppManager_ConfigClientList;
    })(OS.DataTypes.GenericRecordList);
    UBT_AppManagerModel.AppManager_ConfigClientList = AppManager_ConfigClientList;

});
define("UBT_AppManager.model$PermissionListList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager.model", "UBT_AppManager_CS.model$PermissionListRec", "UBT_AppManager.referencesHealth", "UBT_AppManager.referencesHealth$UBT_AppManager_CS"], function(exports, OutSystems, UBT_AppManager_CSModel, UBT_AppManagerModel) {
    var OS = OutSystems.Internal;
    var PermissionListList = (function(_super) {
        __extends(PermissionListList, _super);

        function PermissionListList(defaults) {
            _super.apply(this, arguments);
        }
        PermissionListList.itemType = UBT_AppManager_CSModel.PermissionListRec;
        return PermissionListList;
    })(OS.DataTypes.GenericRecordList);
    UBT_AppManagerModel.PermissionListList = PermissionListList;

});
define("UBT_AppManager.model$PIN_LocalStorageRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.model$PIN_LocalStorageRecord"], function(exports, OutSystems, UBT_AppManagerModel) {
    var OS = OutSystems.Internal;
    var PIN_LocalStorageRecordList = (function(_super) {
        __extends(PIN_LocalStorageRecordList, _super);

        function PIN_LocalStorageRecordList(defaults) {
            _super.apply(this, arguments);
        }
        PIN_LocalStorageRecordList.itemType = UBT_AppManagerModel.PIN_LocalStorageRecord;
        return PIN_LocalStorageRecordList;
    })(OS.DataTypes.GenericRecordList);
    UBT_AppManagerModel.PIN_LocalStorageRecordList = PIN_LocalStorageRecordList;

});
define("UBT_AppManager.model$AppManager_FRD_EventsList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_DB.model", "UBT_AppManager.model", "UBT_AppManager_DB.model$AppManager_FRD_EventRec", "UBT_AppManager.referencesHealth", "UBT_AppManager.referencesHealth$UBT_AppManager_DB"], function(exports, OutSystems, UBT_AppManager_DBModel, UBT_AppManagerModel) {
    var OS = OutSystems.Internal;
    var AppManager_FRD_EventsList = (function(_super) {
        __extends(AppManager_FRD_EventsList, _super);

        function AppManager_FRD_EventsList(defaults) {
            _super.apply(this, arguments);
        }
        AppManager_FRD_EventsList.itemType = UBT_AppManager_DBModel.AppManager_FRD_EventRec;
        return AppManager_FRD_EventsList;
    })(OS.DataTypes.GenericRecordList);
    UBT_AppManagerModel.AppManager_FRD_EventsList = AppManager_FRD_EventsList;

});
define("UBT_AppManager.model$AppManager_ConfigClientCacheRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.model$AppManager_ConfigClientCacheRecord"], function(exports, OutSystems, UBT_AppManagerModel) {
    var OS = OutSystems.Internal;
    var AppManager_ConfigClientCacheRecordList = (function(_super) {
        __extends(AppManager_ConfigClientCacheRecordList, _super);

        function AppManager_ConfigClientCacheRecordList(defaults) {
            _super.apply(this, arguments);
        }
        AppManager_ConfigClientCacheRecordList.itemType = UBT_AppManagerModel.AppManager_ConfigClientCacheRecord;
        return AppManager_ConfigClientCacheRecordList;
    })(OS.DataTypes.GenericRecordList);
    UBT_AppManagerModel.AppManager_ConfigClientCacheRecordList = AppManager_ConfigClientCacheRecordList;

});
define("UBT_AppManager.model$PIN_FingerprintReadCallback_ResponseRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.model$PIN_FingerprintReadCallback_ResponseRec"], function(exports, OutSystems, UBT_AppManagerModel) {
    var OS = OutSystems.Internal;
    var PIN_FingerprintReadCallback_ResponseRecord = (function(_super) {
        __extends(PIN_FingerprintReadCallback_ResponseRecord, _super);

        function PIN_FingerprintReadCallback_ResponseRecord(defaults) {
            _super.apply(this, arguments);
        }
        PIN_FingerprintReadCallback_ResponseRecord.attributesToDeclare = function() {
            return [
                this.attr("PIN_FingerprintReadCallback_Response", "pIN_FingerprintReadCallback_ResponseAttr", "PIN_FingerprintReadCallback_Response", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBT_AppManagerModel.PIN_FingerprintReadCallback_ResponseRec());
                }, true, UBT_AppManagerModel.PIN_FingerprintReadCallback_ResponseRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        PIN_FingerprintReadCallback_ResponseRecord.fromStructure = function(str) {
            return new PIN_FingerprintReadCallback_ResponseRecord(new PIN_FingerprintReadCallback_ResponseRecord.RecordClass({
                pIN_FingerprintReadCallback_ResponseAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        PIN_FingerprintReadCallback_ResponseRecord._isAnonymousRecord = true;
        PIN_FingerprintReadCallback_ResponseRecord.UniqueId = "d01f939e-1fb5-40c9-78c2-888de49f88d5";
        PIN_FingerprintReadCallback_ResponseRecord.init();
        return PIN_FingerprintReadCallback_ResponseRecord;
    })(OS.DataTypes.GenericRecord);
    UBT_AppManagerModel.PIN_FingerprintReadCallback_ResponseRecord = PIN_FingerprintReadCallback_ResponseRecord;

});
define("UBT_AppManager.model$PIN_FingerprintReadCallback_ResponseRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.model$PIN_FingerprintReadCallback_ResponseRecord"], function(exports, OutSystems, UBT_AppManagerModel) {
    var OS = OutSystems.Internal;
    var PIN_FingerprintReadCallback_ResponseRecordList = (function(_super) {
        __extends(PIN_FingerprintReadCallback_ResponseRecordList, _super);

        function PIN_FingerprintReadCallback_ResponseRecordList(defaults) {
            _super.apply(this, arguments);
        }
        PIN_FingerprintReadCallback_ResponseRecordList.itemType = UBT_AppManagerModel.PIN_FingerprintReadCallback_ResponseRecord;
        return PIN_FingerprintReadCallback_ResponseRecordList;
    })(OS.DataTypes.GenericRecordList);
    UBT_AppManagerModel.PIN_FingerprintReadCallback_ResponseRecordList = PIN_FingerprintReadCallback_ResponseRecordList;

});
define("UBT_AppManager.model$AppManager_JSUtils_ElementCache_ParentList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.model$AppManager_JSUtils_ElementCache_ParentRec"], function(exports, OutSystems, UBT_AppManagerModel) {
    var OS = OutSystems.Internal;
    var AppManager_JSUtils_ElementCache_ParentList = (function(_super) {
        __extends(AppManager_JSUtils_ElementCache_ParentList, _super);

        function AppManager_JSUtils_ElementCache_ParentList(defaults) {
            _super.apply(this, arguments);
        }
        AppManager_JSUtils_ElementCache_ParentList.itemType = UBT_AppManagerModel.AppManager_JSUtils_ElementCache_ParentRec;
        return AppManager_JSUtils_ElementCache_ParentList;
    })(OS.DataTypes.GenericRecordList);
    UBT_AppManagerModel.AppManager_JSUtils_ElementCache_ParentList = AppManager_JSUtils_ElementCache_ParentList;

});
define("UBT_AppManager.model$AppManager_IdpProviderRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_DB.model", "UBT_AppManager.model", "UBT_AppManager_DB.model$AppManager_IdpProviderRec", "UBT_AppManager.referencesHealth", "UBT_AppManager.referencesHealth$UBT_AppManager_DB"], function(exports, OutSystems, UBT_AppManager_DBModel, UBT_AppManagerModel) {
    var OS = OutSystems.Internal;
    var AppManager_IdpProviderRecord = (function(_super) {
        __extends(AppManager_IdpProviderRecord, _super);

        function AppManager_IdpProviderRecord(defaults) {
            _super.apply(this, arguments);
        }
        AppManager_IdpProviderRecord.attributesToDeclare = function() {
            return [
                this.attr("AppManager_IdpProvider", "appManager_IdpProviderAttr", "AppManager_IdpProvider", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_DBModel.AppManager_IdpProviderRec());
                }, true, UBT_AppManager_DBModel.AppManager_IdpProviderRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        AppManager_IdpProviderRecord.fromStructure = function(str) {
            return new AppManager_IdpProviderRecord(new AppManager_IdpProviderRecord.RecordClass({
                appManager_IdpProviderAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        AppManager_IdpProviderRecord._isAnonymousRecord = true;
        AppManager_IdpProviderRecord.UniqueId = "856224dd-c23d-4f9f-c3f0-2629953056a7";
        AppManager_IdpProviderRecord.init();
        return AppManager_IdpProviderRecord;
    })(OS.DataTypes.GenericRecord);
    UBT_AppManagerModel.AppManager_IdpProviderRecord = AppManager_IdpProviderRecord;

});
define("UBT_AppManager.model$FirebaseRD_EventJSONRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager.model", "UBT_AppManager_CS.model$FirebaseRD_EventJSONRec", "UBT_AppManager.referencesHealth", "UBT_AppManager.referencesHealth$UBT_AppManager_CS"], function(exports, OutSystems, UBT_AppManager_CSModel, UBT_AppManagerModel) {
    var OS = OutSystems.Internal;
    var FirebaseRD_EventJSONRecord = (function(_super) {
        __extends(FirebaseRD_EventJSONRecord, _super);

        function FirebaseRD_EventJSONRecord(defaults) {
            _super.apply(this, arguments);
        }
        FirebaseRD_EventJSONRecord.attributesToDeclare = function() {
            return [
                this.attr("FirebaseRD_EventJSON", "firebaseRD_EventJSONAttr", "FirebaseRD_EventJSON", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_CSModel.FirebaseRD_EventJSONRec());
                }, true, UBT_AppManager_CSModel.FirebaseRD_EventJSONRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        FirebaseRD_EventJSONRecord.fromStructure = function(str) {
            return new FirebaseRD_EventJSONRecord(new FirebaseRD_EventJSONRecord.RecordClass({
                firebaseRD_EventJSONAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        FirebaseRD_EventJSONRecord._isAnonymousRecord = true;
        FirebaseRD_EventJSONRecord.UniqueId = "e6f676ad-1d80-eda2-b613-78d9b34fbb24";
        FirebaseRD_EventJSONRecord.init();
        return FirebaseRD_EventJSONRecord;
    })(OS.DataTypes.GenericRecord);
    UBT_AppManagerModel.FirebaseRD_EventJSONRecord = FirebaseRD_EventJSONRecord;

});
define("UBT_AppManager.model$FirebaseRD_EventJSONRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.model$FirebaseRD_EventJSONRecord"], function(exports, OutSystems, UBT_AppManagerModel) {
    var OS = OutSystems.Internal;
    var FirebaseRD_EventJSONRecordList = (function(_super) {
        __extends(FirebaseRD_EventJSONRecordList, _super);

        function FirebaseRD_EventJSONRecordList(defaults) {
            _super.apply(this, arguments);
        }
        FirebaseRD_EventJSONRecordList.itemType = UBT_AppManagerModel.FirebaseRD_EventJSONRecord;
        return FirebaseRD_EventJSONRecordList;
    })(OS.DataTypes.GenericRecordList);
    UBT_AppManagerModel.FirebaseRD_EventJSONRecordList = FirebaseRD_EventJSONRecordList;

});
define("UBT_AppManager.model$AppManager_FRD_EventsRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_DB.model", "UBT_AppManager.model", "UBT_AppManager_DB.model$AppManager_FRD_EventRec", "UBT_AppManager.referencesHealth", "UBT_AppManager.referencesHealth$UBT_AppManager_DB"], function(exports, OutSystems, UBT_AppManager_DBModel, UBT_AppManagerModel) {
    var OS = OutSystems.Internal;
    var AppManager_FRD_EventsRecord = (function(_super) {
        __extends(AppManager_FRD_EventsRecord, _super);

        function AppManager_FRD_EventsRecord(defaults) {
            _super.apply(this, arguments);
        }
        AppManager_FRD_EventsRecord.attributesToDeclare = function() {
            return [
                this.attr("AppManager_FRD_Event", "appManager_FRD_EventAttr", "AppManager_FRD_Events", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_DBModel.AppManager_FRD_EventRec());
                }, true, UBT_AppManager_DBModel.AppManager_FRD_EventRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        AppManager_FRD_EventsRecord.fromStructure = function(str) {
            return new AppManager_FRD_EventsRecord(new AppManager_FRD_EventsRecord.RecordClass({
                appManager_FRD_EventAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        AppManager_FRD_EventsRecord._isAnonymousRecord = true;
        AppManager_FRD_EventsRecord.UniqueId = "abaab225-8030-09a3-c89b-f88eb84adda8";
        AppManager_FRD_EventsRecord.init();
        return AppManager_FRD_EventsRecord;
    })(OS.DataTypes.GenericRecord);
    UBT_AppManagerModel.AppManager_FRD_EventsRecord = AppManager_FRD_EventsRecord;

});
define("UBT_AppManager.model$AppManager_FRD_EventsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.model$AppManager_FRD_EventsRecord"], function(exports, OutSystems, UBT_AppManagerModel) {
    var OS = OutSystems.Internal;
    var AppManager_FRD_EventsRecordList = (function(_super) {
        __extends(AppManager_FRD_EventsRecordList, _super);

        function AppManager_FRD_EventsRecordList(defaults) {
            _super.apply(this, arguments);
        }
        AppManager_FRD_EventsRecordList.itemType = UBT_AppManagerModel.AppManager_FRD_EventsRecord;
        return AppManager_FRD_EventsRecordList;
    })(OS.DataTypes.GenericRecordList);
    UBT_AppManagerModel.AppManager_FRD_EventsRecordList = AppManager_FRD_EventsRecordList;

});
define("UBT_AppManager.model$AppManager_JSUtils_ElementCache_PropertyList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.model$AppManager_JSUtils_ElementCache_PropertyRec"], function(exports, OutSystems, UBT_AppManagerModel) {
    var OS = OutSystems.Internal;
    var AppManager_JSUtils_ElementCache_PropertyList = (function(_super) {
        __extends(AppManager_JSUtils_ElementCache_PropertyList, _super);

        function AppManager_JSUtils_ElementCache_PropertyList(defaults) {
            _super.apply(this, arguments);
        }
        AppManager_JSUtils_ElementCache_PropertyList.itemType = UBT_AppManagerModel.AppManager_JSUtils_ElementCache_PropertyRec;
        return AppManager_JSUtils_ElementCache_PropertyList;
    })(OS.DataTypes.GenericRecordList);
    UBT_AppManagerModel.AppManager_JSUtils_ElementCache_PropertyList = AppManager_JSUtils_ElementCache_PropertyList;

});
define("UBT_AppManager.model$AppManager_CachedUserInfoList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.model$AppManager_CachedUserInfoRec"], function(exports, OutSystems, UBT_AppManagerModel) {
    var OS = OutSystems.Internal;
    var AppManager_CachedUserInfoList = (function(_super) {
        __extends(AppManager_CachedUserInfoList, _super);

        function AppManager_CachedUserInfoList(defaults) {
            _super.apply(this, arguments);
        }
        AppManager_CachedUserInfoList.itemType = UBT_AppManagerModel.AppManager_CachedUserInfoRec;
        return AppManager_CachedUserInfoList;
    })(OS.DataTypes.GenericRecordList);
    UBT_AppManagerModel.AppManager_CachedUserInfoList = AppManager_CachedUserInfoList;

});
define("UBT_AppManager.model$LicenseListList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager.model", "UBT_AppManager_CS.model$LicenseListRec", "UBT_AppManager.referencesHealth", "UBT_AppManager.referencesHealth$UBT_AppManager_CS"], function(exports, OutSystems, UBT_AppManager_CSModel, UBT_AppManagerModel) {
    var OS = OutSystems.Internal;
    var LicenseListList = (function(_super) {
        __extends(LicenseListList, _super);

        function LicenseListList(defaults) {
            _super.apply(this, arguments);
        }
        LicenseListList.itemType = UBT_AppManager_CSModel.LicenseListRec;
        return LicenseListList;
    })(OS.DataTypes.GenericRecordList);
    UBT_AppManagerModel.LicenseListList = LicenseListList;

});
define("UBT_AppManager.model$AppManager_AzureInsightsEventsList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_DB.model", "UBT_AppManager.model", "UBT_AppManager_DB.model$AppManager_AzureInsightsEventRec", "UBT_AppManager.referencesHealth", "UBT_AppManager.referencesHealth$UBT_AppManager_DB"], function(exports, OutSystems, UBT_AppManager_DBModel, UBT_AppManagerModel) {
    var OS = OutSystems.Internal;
    var AppManager_AzureInsightsEventsList = (function(_super) {
        __extends(AppManager_AzureInsightsEventsList, _super);

        function AppManager_AzureInsightsEventsList(defaults) {
            _super.apply(this, arguments);
        }
        AppManager_AzureInsightsEventsList.itemType = UBT_AppManager_DBModel.AppManager_AzureInsightsEventRec;
        return AppManager_AzureInsightsEventsList;
    })(OS.DataTypes.GenericRecordList);
    UBT_AppManagerModel.AppManager_AzureInsightsEventsList = AppManager_AzureInsightsEventsList;

});
define("UBT_AppManager.model$AppManager_UserExtendedList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_DB.model", "UBT_AppManager.model", "UBT_AppManager_DB.model$AppManager_UserExtendedRec", "UBT_AppManager.referencesHealth", "UBT_AppManager.referencesHealth$UBT_AppManager_DB"], function(exports, OutSystems, UBT_AppManager_DBModel, UBT_AppManagerModel) {
    var OS = OutSystems.Internal;
    var AppManager_UserExtendedList = (function(_super) {
        __extends(AppManager_UserExtendedList, _super);

        function AppManager_UserExtendedList(defaults) {
            _super.apply(this, arguments);
        }
        AppManager_UserExtendedList.itemType = UBT_AppManager_DBModel.AppManager_UserExtendedRec;
        return AppManager_UserExtendedList;
    })(OS.DataTypes.GenericRecordList);
    UBT_AppManagerModel.AppManager_UserExtendedList = AppManager_UserExtendedList;

});
define("UBT_AppManager.model$VersionContextRecord", ["exports", "OutSystems/ClientRuntime/Main", "ApplicationInsightsConnector.model", "UBT_AppManager.model", "ApplicationInsightsConnector.model$VersionContextRec", "UBT_AppManager.referencesHealth", "UBT_AppManager.referencesHealth$ApplicationInsightsConnector"], function(exports, OutSystems, ApplicationInsightsConnectorModel, UBT_AppManagerModel) {
    var OS = OutSystems.Internal;
    var VersionContextRecord = (function(_super) {
        __extends(VersionContextRecord, _super);

        function VersionContextRecord(defaults) {
            _super.apply(this, arguments);
        }
        VersionContextRecord.attributesToDeclare = function() {
            return [
                this.attr("VersionContext", "versionContextAttr", "VersionContext", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new ApplicationInsightsConnectorModel.VersionContextRec());
                }, true, ApplicationInsightsConnectorModel.VersionContextRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        VersionContextRecord.fromStructure = function(str) {
            return new VersionContextRecord(new VersionContextRecord.RecordClass({
                versionContextAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        VersionContextRecord._isAnonymousRecord = true;
        VersionContextRecord.UniqueId = "9f68c1dc-1501-10f3-5bf4-f96b5ac359e7";
        VersionContextRecord.init();
        return VersionContextRecord;
    })(OS.DataTypes.GenericRecord);
    UBT_AppManagerModel.VersionContextRecord = VersionContextRecord;

});
define("UBT_AppManager.model$AppManager_UserExtendedRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_DB.model", "UBT_AppManager.model", "UBT_AppManager_DB.model$AppManager_UserExtendedRec", "UBT_AppManager.referencesHealth", "UBT_AppManager.referencesHealth$UBT_AppManager_DB"], function(exports, OutSystems, UBT_AppManager_DBModel, UBT_AppManagerModel) {
    var OS = OutSystems.Internal;
    var AppManager_UserExtendedRecord = (function(_super) {
        __extends(AppManager_UserExtendedRecord, _super);

        function AppManager_UserExtendedRecord(defaults) {
            _super.apply(this, arguments);
        }
        AppManager_UserExtendedRecord.attributesToDeclare = function() {
            return [
                this.attr("AppManager_UserExtended", "appManager_UserExtendedAttr", "AppManager_UserExtended", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_DBModel.AppManager_UserExtendedRec());
                }, true, UBT_AppManager_DBModel.AppManager_UserExtendedRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        AppManager_UserExtendedRecord.fromStructure = function(str) {
            return new AppManager_UserExtendedRecord(new AppManager_UserExtendedRecord.RecordClass({
                appManager_UserExtendedAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        AppManager_UserExtendedRecord._isAnonymousRecord = true;
        AppManager_UserExtendedRecord.UniqueId = "d80ef878-b0c6-75c9-c595-43a61974b82d";
        AppManager_UserExtendedRecord.init();
        return AppManager_UserExtendedRecord;
    })(OS.DataTypes.GenericRecord);
    UBT_AppManagerModel.AppManager_UserExtendedRecord = AppManager_UserExtendedRecord;

});
define("UBT_AppManager.model$AppManager_UserExtendedRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.model$AppManager_UserExtendedRecord"], function(exports, OutSystems, UBT_AppManagerModel) {
    var OS = OutSystems.Internal;
    var AppManager_UserExtendedRecordList = (function(_super) {
        __extends(AppManager_UserExtendedRecordList, _super);

        function AppManager_UserExtendedRecordList(defaults) {
            _super.apply(this, arguments);
        }
        AppManager_UserExtendedRecordList.itemType = UBT_AppManagerModel.AppManager_UserExtendedRecord;
        return AppManager_UserExtendedRecordList;
    })(OS.DataTypes.GenericRecordList);
    UBT_AppManagerModel.AppManager_UserExtendedRecordList = AppManager_UserExtendedRecordList;

});
define("UBT_AppManager.model$LicenseListRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager.model", "UBT_AppManager_CS.model$LicenseListRec", "UBT_AppManager.referencesHealth", "UBT_AppManager.referencesHealth$UBT_AppManager_CS"], function(exports, OutSystems, UBT_AppManager_CSModel, UBT_AppManagerModel) {
    var OS = OutSystems.Internal;
    var LicenseListRecord = (function(_super) {
        __extends(LicenseListRecord, _super);

        function LicenseListRecord(defaults) {
            _super.apply(this, arguments);
        }
        LicenseListRecord.attributesToDeclare = function() {
            return [
                this.attr("LicenseList", "licenseListAttr", "LicenseList", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_CSModel.LicenseListRec());
                }, true, UBT_AppManager_CSModel.LicenseListRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        LicenseListRecord.fromStructure = function(str) {
            return new LicenseListRecord(new LicenseListRecord.RecordClass({
                licenseListAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        LicenseListRecord._isAnonymousRecord = true;
        LicenseListRecord.UniqueId = "bdb3ec26-59c4-537b-4e08-49aae2f65236";
        LicenseListRecord.init();
        return LicenseListRecord;
    })(OS.DataTypes.GenericRecord);
    UBT_AppManagerModel.LicenseListRecord = LicenseListRecord;

});
define("UBT_AppManager.model$UBT_MessageTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.model$UBT_MessageTypeRecord"], function(exports, OutSystems, UBT_AppManagerModel) {
    var OS = OutSystems.Internal;
    var UBT_MessageTypeRecordList = (function(_super) {
        __extends(UBT_MessageTypeRecordList, _super);

        function UBT_MessageTypeRecordList(defaults) {
            _super.apply(this, arguments);
        }
        UBT_MessageTypeRecordList.itemType = UBT_AppManagerModel.UBT_MessageTypeRecord;
        return UBT_MessageTypeRecordList;
    })(OS.DataTypes.GenericRecordList);
    UBT_AppManagerModel.UBT_MessageTypeRecordList = UBT_MessageTypeRecordList;

});
define("UBT_AppManager.model$FirebaseEventList", ["exports", "OutSystems/ClientRuntime/Main", "Firebase.model", "UBT_AppManager.model", "Firebase.model$FirebaseEventRec", "UBT_AppManager.referencesHealth", "UBT_AppManager.referencesHealth$Firebase"], function(exports, OutSystems, FirebaseModel, UBT_AppManagerModel) {
    var OS = OutSystems.Internal;
    var FirebaseEventList = (function(_super) {
        __extends(FirebaseEventList, _super);

        function FirebaseEventList(defaults) {
            _super.apply(this, arguments);
        }
        FirebaseEventList.itemType = FirebaseModel.FirebaseEventRec;
        return FirebaseEventList;
    })(OS.DataTypes.GenericRecordList);
    UBT_AppManagerModel.FirebaseEventList = FirebaseEventList;

});
define("UBT_AppManager.model$AppManager_ClientExceptionMessageList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager.model", "UBT_AppManager_CS.model$AppManager_ClientExceptionMessageRec", "UBT_AppManager.referencesHealth", "UBT_AppManager.referencesHealth$UBT_AppManager_CS"], function(exports, OutSystems, UBT_AppManager_CSModel, UBT_AppManagerModel) {
    var OS = OutSystems.Internal;
    var AppManager_ClientExceptionMessageList = (function(_super) {
        __extends(AppManager_ClientExceptionMessageList, _super);

        function AppManager_ClientExceptionMessageList(defaults) {
            _super.apply(this, arguments);
        }
        AppManager_ClientExceptionMessageList.itemType = UBT_AppManager_CSModel.AppManager_ClientExceptionMessageRec;
        return AppManager_ClientExceptionMessageList;
    })(OS.DataTypes.GenericRecordList);
    UBT_AppManagerModel.AppManager_ClientExceptionMessageList = AppManager_ClientExceptionMessageList;

});
define("UBT_AppManager.model$AppManager_ConfigClientRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.model$AppManager_ConfigClientRecord"], function(exports, OutSystems, UBT_AppManagerModel) {
    var OS = OutSystems.Internal;
    var AppManager_ConfigClientRecordList = (function(_super) {
        __extends(AppManager_ConfigClientRecordList, _super);

        function AppManager_ConfigClientRecordList(defaults) {
            _super.apply(this, arguments);
        }
        AppManager_ConfigClientRecordList.itemType = UBT_AppManagerModel.AppManager_ConfigClientRecord;
        return AppManager_ConfigClientRecordList;
    })(OS.DataTypes.GenericRecordList);
    UBT_AppManagerModel.AppManager_ConfigClientRecordList = AppManager_ConfigClientRecordList;

});
define("UBT_AppManager.model$AppManager_DeviceContextList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBT_AppManager.model", "UBT_AppManager_CS.model$AppManager_DeviceContextRec", "UBT_AppManager.referencesHealth", "UBT_AppManager.referencesHealth$UBT_AppManager_CS"], function(exports, OutSystems, UBT_AppManager_CSModel, UBT_AppManagerModel) {
    var OS = OutSystems.Internal;
    var AppManager_DeviceContextList = (function(_super) {
        __extends(AppManager_DeviceContextList, _super);

        function AppManager_DeviceContextList(defaults) {
            _super.apply(this, arguments);
        }
        AppManager_DeviceContextList.itemType = UBT_AppManager_CSModel.AppManager_DeviceContextRec;
        return AppManager_DeviceContextList;
    })(OS.DataTypes.GenericRecordList);
    UBT_AppManagerModel.AppManager_DeviceContextList = AppManager_DeviceContextList;

});
define("UBT_AppManager.model$B2C_ErrorTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_DB.model", "UBT_AppManager.model", "UBT_AppManager_DB.model$B2C_ErrorTypeRec", "UBT_AppManager.referencesHealth", "UBT_AppManager.referencesHealth$UBT_AppManager_DB"], function(exports, OutSystems, UBT_AppManager_DBModel, UBT_AppManagerModel) {
    var OS = OutSystems.Internal;
    var B2C_ErrorTypeRecord = (function(_super) {
        __extends(B2C_ErrorTypeRecord, _super);

        function B2C_ErrorTypeRecord(defaults) {
            _super.apply(this, arguments);
        }
        B2C_ErrorTypeRecord.attributesToDeclare = function() {
            return [
                this.attr("B2C_ErrorType", "b2C_ErrorTypeAttr", "B2C_ErrorType", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBT_AppManager_DBModel.B2C_ErrorTypeRec());
                }, true, UBT_AppManager_DBModel.B2C_ErrorTypeRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        B2C_ErrorTypeRecord.fromStructure = function(str) {
            return new B2C_ErrorTypeRecord(new B2C_ErrorTypeRecord.RecordClass({
                b2C_ErrorTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        B2C_ErrorTypeRecord._isAnonymousRecord = true;
        B2C_ErrorTypeRecord.UniqueId = "f1cc2d18-7c50-7d21-5a17-9137d99ab2cd";
        B2C_ErrorTypeRecord.init();
        return B2C_ErrorTypeRecord;
    })(OS.DataTypes.GenericRecord);
    UBT_AppManagerModel.B2C_ErrorTypeRecord = B2C_ErrorTypeRecord;

});
define("UBT_AppManager.model$B2C_ErrorTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.model$B2C_ErrorTypeRecord"], function(exports, OutSystems, UBT_AppManagerModel) {
    var OS = OutSystems.Internal;
    var B2C_ErrorTypeRecordList = (function(_super) {
        __extends(B2C_ErrorTypeRecordList, _super);

        function B2C_ErrorTypeRecordList(defaults) {
            _super.apply(this, arguments);
        }
        B2C_ErrorTypeRecordList.itemType = UBT_AppManagerModel.B2C_ErrorTypeRecord;
        return B2C_ErrorTypeRecordList;
    })(OS.DataTypes.GenericRecordList);
    UBT_AppManagerModel.B2C_ErrorTypeRecordList = B2C_ErrorTypeRecordList;

});
define("UBT_AppManager.model$AppManager_AzureInsightsEventsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.model$AppManager_AzureInsightsEventsRecord"], function(exports, OutSystems, UBT_AppManagerModel) {
    var OS = OutSystems.Internal;
    var AppManager_AzureInsightsEventsRecordList = (function(_super) {
        __extends(AppManager_AzureInsightsEventsRecordList, _super);

        function AppManager_AzureInsightsEventsRecordList(defaults) {
            _super.apply(this, arguments);
        }
        AppManager_AzureInsightsEventsRecordList.itemType = UBT_AppManagerModel.AppManager_AzureInsightsEventsRecord;
        return AppManager_AzureInsightsEventsRecordList;
    })(OS.DataTypes.GenericRecordList);
    UBT_AppManagerModel.AppManager_AzureInsightsEventsRecordList = AppManager_AzureInsightsEventsRecordList;

});
define("UBT_AppManager.model$AppManager_IdpProviderList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_DB.model", "UBT_AppManager.model", "UBT_AppManager_DB.model$AppManager_IdpProviderRec", "UBT_AppManager.referencesHealth", "UBT_AppManager.referencesHealth$UBT_AppManager_DB"], function(exports, OutSystems, UBT_AppManager_DBModel, UBT_AppManagerModel) {
    var OS = OutSystems.Internal;
    var AppManager_IdpProviderList = (function(_super) {
        __extends(AppManager_IdpProviderList, _super);

        function AppManager_IdpProviderList(defaults) {
            _super.apply(this, arguments);
        }
        AppManager_IdpProviderList.itemType = UBT_AppManager_DBModel.AppManager_IdpProviderRec;
        return AppManager_IdpProviderList;
    })(OS.DataTypes.GenericRecordList);
    UBT_AppManagerModel.AppManager_IdpProviderList = AppManager_IdpProviderList;

});
define("UBT_AppManager.model$AppManager_UserInfoClientRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.model$AppManager_UserInfoClientRecord"], function(exports, OutSystems, UBT_AppManagerModel) {
    var OS = OutSystems.Internal;
    var AppManager_UserInfoClientRecordList = (function(_super) {
        __extends(AppManager_UserInfoClientRecordList, _super);

        function AppManager_UserInfoClientRecordList(defaults) {
            _super.apply(this, arguments);
        }
        AppManager_UserInfoClientRecordList.itemType = UBT_AppManagerModel.AppManager_UserInfoClientRecord;
        return AppManager_UserInfoClientRecordList;
    })(OS.DataTypes.GenericRecordList);
    UBT_AppManagerModel.AppManager_UserInfoClientRecordList = AppManager_UserInfoClientRecordList;

});
define("UBT_AppManager.model$AppManager_DelayedMessageRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.model$AppManager_DelayedMessageRecord"], function(exports, OutSystems, UBT_AppManagerModel) {
    var OS = OutSystems.Internal;
    var AppManager_DelayedMessageRecordList = (function(_super) {
        __extends(AppManager_DelayedMessageRecordList, _super);

        function AppManager_DelayedMessageRecordList(defaults) {
            _super.apply(this, arguments);
        }
        AppManager_DelayedMessageRecordList.itemType = UBT_AppManagerModel.AppManager_DelayedMessageRecord;
        return AppManager_DelayedMessageRecordList;
    })(OS.DataTypes.GenericRecordList);
    UBT_AppManagerModel.AppManager_DelayedMessageRecordList = AppManager_DelayedMessageRecordList;

});
define("UBT_AppManager.model$VersionContextList", ["exports", "OutSystems/ClientRuntime/Main", "ApplicationInsightsConnector.model", "UBT_AppManager.model", "ApplicationInsightsConnector.model$VersionContextRec", "UBT_AppManager.referencesHealth", "UBT_AppManager.referencesHealth$ApplicationInsightsConnector"], function(exports, OutSystems, ApplicationInsightsConnectorModel, UBT_AppManagerModel) {
    var OS = OutSystems.Internal;
    var VersionContextList = (function(_super) {
        __extends(VersionContextList, _super);

        function VersionContextList(defaults) {
            _super.apply(this, arguments);
        }
        VersionContextList.itemType = ApplicationInsightsConnectorModel.VersionContextRec;
        return VersionContextList;
    })(OS.DataTypes.GenericRecordList);
    UBT_AppManagerModel.VersionContextList = VersionContextList;

});
define("UBT_AppManager.model$AppManager_JSUtils_CustomEventsList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.model$AppManager_JSUtils_CustomEventsRec"], function(exports, OutSystems, UBT_AppManagerModel) {
    var OS = OutSystems.Internal;
    var AppManager_JSUtils_CustomEventsList = (function(_super) {
        __extends(AppManager_JSUtils_CustomEventsList, _super);

        function AppManager_JSUtils_CustomEventsList(defaults) {
            _super.apply(this, arguments);
        }
        AppManager_JSUtils_CustomEventsList.itemType = UBT_AppManagerModel.AppManager_JSUtils_CustomEventsRec;
        return AppManager_JSUtils_CustomEventsList;
    })(OS.DataTypes.GenericRecordList);
    UBT_AppManagerModel.AppManager_JSUtils_CustomEventsList = AppManager_JSUtils_CustomEventsList;

});
define("UBT_AppManager.model$PIN_FingerprintReadCallback_InputList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.model$PIN_FingerprintReadCallback_InputRec"], function(exports, OutSystems, UBT_AppManagerModel) {
    var OS = OutSystems.Internal;
    var PIN_FingerprintReadCallback_InputList = (function(_super) {
        __extends(PIN_FingerprintReadCallback_InputList, _super);

        function PIN_FingerprintReadCallback_InputList(defaults) {
            _super.apply(this, arguments);
        }
        PIN_FingerprintReadCallback_InputList.itemType = UBT_AppManagerModel.PIN_FingerprintReadCallback_InputRec;
        return PIN_FingerprintReadCallback_InputList;
    })(OS.DataTypes.GenericRecordList);
    UBT_AppManagerModel.PIN_FingerprintReadCallback_InputList = PIN_FingerprintReadCallback_InputList;

});
define("UBT_AppManager.model$PIN_FingerprintAvailableCallback_ResponseList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.model$PIN_FingerprintAvailableCallback_ResponseRec"], function(exports, OutSystems, UBT_AppManagerModel) {
    var OS = OutSystems.Internal;
    var PIN_FingerprintAvailableCallback_ResponseList = (function(_super) {
        __extends(PIN_FingerprintAvailableCallback_ResponseList, _super);

        function PIN_FingerprintAvailableCallback_ResponseList(defaults) {
            _super.apply(this, arguments);
        }
        PIN_FingerprintAvailableCallback_ResponseList.itemType = UBT_AppManagerModel.PIN_FingerprintAvailableCallback_ResponseRec;
        return PIN_FingerprintAvailableCallback_ResponseList;
    })(OS.DataTypes.GenericRecordList);
    UBT_AppManagerModel.PIN_FingerprintAvailableCallback_ResponseList = PIN_FingerprintAvailableCallback_ResponseList;

});
define("UBT_AppManager.model$VersionContextRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.model$VersionContextRecord"], function(exports, OutSystems, UBT_AppManagerModel) {
    var OS = OutSystems.Internal;
    var VersionContextRecordList = (function(_super) {
        __extends(VersionContextRecordList, _super);

        function VersionContextRecordList(defaults) {
            _super.apply(this, arguments);
        }
        VersionContextRecordList.itemType = UBT_AppManagerModel.VersionContextRecord;
        return VersionContextRecordList;
    })(OS.DataTypes.GenericRecordList);
    UBT_AppManagerModel.VersionContextRecordList = VersionContextRecordList;

});
define("UBT_AppManager.model$UBT_MessageTypeList", ["exports", "OutSystems/ClientRuntime/Main", "UBTJavaScriptUtils.model", "UBT_AppManager.model", "UBTJavaScriptUtils.model$UBT_MessageTypeRec", "UBT_AppManager.referencesHealth", "UBT_AppManager.referencesHealth$UBTJavaScriptUtils"], function(exports, OutSystems, UBTJavaScriptUtilsModel, UBT_AppManagerModel) {
    var OS = OutSystems.Internal;
    var UBT_MessageTypeList = (function(_super) {
        __extends(UBT_MessageTypeList, _super);

        function UBT_MessageTypeList(defaults) {
            _super.apply(this, arguments);
        }
        UBT_MessageTypeList.itemType = UBTJavaScriptUtilsModel.UBT_MessageTypeRec;
        return UBT_MessageTypeList;
    })(OS.DataTypes.GenericRecordList);
    UBT_AppManagerModel.UBT_MessageTypeList = UBT_MessageTypeList;

});
define("UBT_AppManager.model$AppManager_IdpProviderRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.model$AppManager_IdpProviderRecord"], function(exports, OutSystems, UBT_AppManagerModel) {
    var OS = OutSystems.Internal;
    var AppManager_IdpProviderRecordList = (function(_super) {
        __extends(AppManager_IdpProviderRecordList, _super);

        function AppManager_IdpProviderRecordList(defaults) {
            _super.apply(this, arguments);
        }
        AppManager_IdpProviderRecordList.itemType = UBT_AppManagerModel.AppManager_IdpProviderRecord;
        return AppManager_IdpProviderRecordList;
    })(OS.DataTypes.GenericRecordList);
    UBT_AppManagerModel.AppManager_IdpProviderRecordList = AppManager_IdpProviderRecordList;

});
define("UBT_AppManager.model$LicenseListRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.model$LicenseListRecord"], function(exports, OutSystems, UBT_AppManagerModel) {
    var OS = OutSystems.Internal;
    var LicenseListRecordList = (function(_super) {
        __extends(LicenseListRecordList, _super);

        function LicenseListRecordList(defaults) {
            _super.apply(this, arguments);
        }
        LicenseListRecordList.itemType = UBT_AppManagerModel.LicenseListRecord;
        return LicenseListRecordList;
    })(OS.DataTypes.GenericRecordList);
    UBT_AppManagerModel.LicenseListRecordList = LicenseListRecordList;

});
define("UBT_AppManager.model", ["exports", "OutSystems/ClientRuntime/Main"], function(exports, OutSystems) {
    var OS = OutSystems.Internal;
    var UBT_AppManagerModel = exports;
    Object.defineProperty(UBT_AppManagerModel, "module", {
        get: function() {
            return OS.ApplicationInfo.getModules()["4ea8e953-0b8c-47e1-a2fa-1fb452518d3d"];
        }
    });

    UBT_AppManagerModel.staticEntities = {};
    UBT_AppManagerModel.staticEntities.appManager_JSUtils_ElementCache_Parent = {};
    var getAppManager_JSUtils_ElementCache_ParentRecord = function(record) {
        return UBT_AppManagerModel.module.staticEntities["4dc9e5b8-1a29-4706-ac76-877a59b008f8"][record];
    };
    Object.defineProperty(UBT_AppManagerModel.staticEntities.appManager_JSUtils_ElementCache_Parent, "appManager", {
        get: function() {
            return getAppManager_JSUtils_ElementCache_ParentRecord("e5f13965-2d64-47b0-8364-0076f6b55297");
        }
    });

    UBT_AppManagerModel.staticEntities.appManager_JSUtils_ElementCache_Property = {};
    var getAppManager_JSUtils_ElementCache_PropertyRecord = function(record) {
        return UBT_AppManagerModel.module.staticEntities["8c811931-66f8-490a-afa8-27d697715a54"][record];
    };
    Object.defineProperty(UBT_AppManagerModel.staticEntities.appManager_JSUtils_ElementCache_Property, "obj_FirebaseUserCallback", {
        get: function() {
            return getAppManager_JSUtils_ElementCache_PropertyRecord("0e7f941b-d6fb-4ded-aa95-4ad891121420");
        }
    });

    Object.defineProperty(UBT_AppManagerModel.staticEntities.appManager_JSUtils_ElementCache_Property, "id_ResetPasswordPopUp", {
        get: function() {
            return getAppManager_JSUtils_ElementCache_PropertyRecord("1977d134-e812-44cb-82b1-575b35fa52d4");
        }
    });

    Object.defineProperty(UBT_AppManagerModel.staticEntities.appManager_JSUtils_ElementCache_Property, "obj_UserOfflineCallback", {
        get: function() {
            return getAppManager_JSUtils_ElementCache_PropertyRecord("2c8c7be8-8911-4954-95ca-0ff1ec7ef4e8");
        }
    });

    Object.defineProperty(UBT_AppManagerModel.staticEntities.appManager_JSUtils_ElementCache_Property, "obj_FirebaseCloudMessageDeeplinkCallback", {
        get: function() {
            return getAppManager_JSUtils_ElementCache_PropertyRecord("3249686c-d579-4bd4-a19b-080192625b1f");
        }
    });

    Object.defineProperty(UBT_AppManagerModel.staticEntities.appManager_JSUtils_ElementCache_Property, "obj_SessionInactivityDestroyCallback", {
        get: function() {
            return getAppManager_JSUtils_ElementCache_PropertyRecord("48630982-aa3a-4ead-9fca-939e0dd8de70");
        }
    });

    Object.defineProperty(UBT_AppManagerModel.staticEntities.appManager_JSUtils_ElementCache_Property, "date_SessionInactivityLastDate", {
        get: function() {
            return getAppManager_JSUtils_ElementCache_PropertyRecord("5d7d4b0a-7555-44a5-9eb2-1a6297189f1a");
        }
    });

    Object.defineProperty(UBT_AppManagerModel.staticEntities.appManager_JSUtils_ElementCache_Property, "obj_OnAfterInitializeCallback", {
        get: function() {
            return getAppManager_JSUtils_ElementCache_PropertyRecord("779c3f9a-f3d0-4179-a8e2-0fc522ec362c");
        }
    });

    Object.defineProperty(UBT_AppManagerModel.staticEntities.appManager_JSUtils_ElementCache_Property, "obj_PinUnlockCallback", {
        get: function() {
            return getAppManager_JSUtils_ElementCache_PropertyRecord("95980a2d-e966-49d8-ac1c-6379986cf11a");
        }
    });

    Object.defineProperty(UBT_AppManagerModel.staticEntities.appManager_JSUtils_ElementCache_Property, "obj_StreamlineTOTPCallback", {
        get: function() {
            return getAppManager_JSUtils_ElementCache_PropertyRecord("ae1953ae-4f81-4da6-bb14-d59daeaade1c");
        }
    });

    Object.defineProperty(UBT_AppManagerModel.staticEntities.appManager_JSUtils_ElementCache_Property, "obj_UserPendingPingCallback", {
        get: function() {
            return getAppManager_JSUtils_ElementCache_PropertyRecord("b28c3e56-6b57-42c5-90c0-5fee5e6a22bf");
        }
    });

    Object.defineProperty(UBT_AppManagerModel.staticEntities.appManager_JSUtils_ElementCache_Property, "obj_MobileAfterLogin", {
        get: function() {
            return getAppManager_JSUtils_ElementCache_PropertyRecord("b5a7fe50-04ef-4a67-a532-cd8e25107f78");
        }
    });

    Object.defineProperty(UBT_AppManagerModel.staticEntities.appManager_JSUtils_ElementCache_Property, "obj_FirebaseCloudMessageNotificationCallback", {
        get: function() {
            return getAppManager_JSUtils_ElementCache_PropertyRecord("c62f7698-e5e9-4e81-bb3e-b3ff4513b23a");
        }
    });

    Object.defineProperty(UBT_AppManagerModel.staticEntities.appManager_JSUtils_ElementCache_Property, "localStorageKey_Pin", {
        get: function() {
            return getAppManager_JSUtils_ElementCache_PropertyRecord("d8d77c29-f500-4f84-b909-11974e31f1f0");
        }
    });

    Object.defineProperty(UBT_AppManagerModel.staticEntities.appManager_JSUtils_ElementCache_Property, "obj_UserOnlineCallback", {
        get: function() {
            return getAppManager_JSUtils_ElementCache_PropertyRecord("dbd1c320-e8e3-42a9-908f-7b262270ed67");
        }
    });

    Object.defineProperty(UBT_AppManagerModel.staticEntities.appManager_JSUtils_ElementCache_Property, "text_OnReadyChecker", {
        get: function() {
            return getAppManager_JSUtils_ElementCache_PropertyRecord("fe58bf26-deb1-4d8f-97e7-1b4135908a37");
        }
    });

    UBT_AppManagerModel.staticEntities.appManager_JSUtils_CustomEvents = {};
    var getAppManager_JSUtils_CustomEventsRecord = function(record) {
        return UBT_AppManagerModel.module.staticEntities["8e3ce7e2-e69b-4dd2-a115-d294032c8377"][record];
    };
    Object.defineProperty(UBT_AppManagerModel.staticEntities.appManager_JSUtils_CustomEvents, "idP_OnCancelled", {
        get: function() {
            return getAppManager_JSUtils_CustomEventsRecord("0f5d52f3-d57e-494e-b0e4-ee375a450f8e");
        }
    });

    Object.defineProperty(UBT_AppManagerModel.staticEntities.appManager_JSUtils_CustomEvents, "deviceAwareness_InvalidDevice", {
        get: function() {
            return getAppManager_JSUtils_CustomEventsRecord("33316176-18a6-4bb8-83ad-b6bf7b414f0e");
        }
    });

    Object.defineProperty(UBT_AppManagerModel.staticEntities.appManager_JSUtils_CustomEvents, "idP_OnLogin", {
        get: function() {
            return getAppManager_JSUtils_CustomEventsRecord("3a09b068-b35e-4c96-b910-b79fcb73bfe9");
        }
    });

    Object.defineProperty(UBT_AppManagerModel.staticEntities.appManager_JSUtils_CustomEvents, "pIN_NeedRegistration", {
        get: function() {
            return getAppManager_JSUtils_CustomEventsRecord("53989d9e-9b1e-496a-ac04-16b65b1e4497");
        }
    });

    Object.defineProperty(UBT_AppManagerModel.staticEntities.appManager_JSUtils_CustomEvents, "idP_OnOffline", {
        get: function() {
            return getAppManager_JSUtils_CustomEventsRecord("6f1bd157-5ec1-4dfe-9f90-36019ba226a0");
        }
    });

    Object.defineProperty(UBT_AppManagerModel.staticEntities.appManager_JSUtils_CustomEvents, "idP_OnClose", {
        get: function() {
            return getAppManager_JSUtils_CustomEventsRecord("80bb5797-bb9b-453a-a99d-c4ba70c1f9a9");
        }
    });

    Object.defineProperty(UBT_AppManagerModel.staticEntities.appManager_JSUtils_CustomEvents, "idp_OnError", {
        get: function() {
            return getAppManager_JSUtils_CustomEventsRecord("ad056ddd-17ab-461c-be99-934e8734f05f");
        }
    });

    Object.defineProperty(UBT_AppManagerModel.staticEntities.appManager_JSUtils_CustomEvents, "idP_OnResetPassword", {
        get: function() {
            return getAppManager_JSUtils_CustomEventsRecord("b180a957-4c04-472e-8231-b959dfb0e8fe");
        }
    });

    Object.defineProperty(UBT_AppManagerModel.staticEntities.appManager_JSUtils_CustomEvents, "pIN_OnTimeout", {
        get: function() {
            return getAppManager_JSUtils_CustomEventsRecord("b6642751-4f20-41b0-b8b9-042831d7d9af");
        }
    });

    UBT_AppManagerModel.staticEntities.uBT_MessageType = {};
    var getUBT_MessageTypeRecord = function(record) {
        return OS.ApplicationInfo.getModules()["2c2986c3-daaf-4dc5-a0c6-d9a75a42125d"].staticEntities["5a451e53-0d4f-4a13-8dcd-d2c12db5eb4f"][record];
    };
    Object.defineProperty(UBT_AppManagerModel.staticEntities.uBT_MessageType, "error", {
        get: function() {
            return OS.BuiltinFunctions.textToInteger(getUBT_MessageTypeRecord("11de012f-8214-4480-bc41-e674f8463a2a"));
        }
    });

    Object.defineProperty(UBT_AppManagerModel.staticEntities.uBT_MessageType, "success", {
        get: function() {
            return OS.BuiltinFunctions.textToInteger(getUBT_MessageTypeRecord("232e2df8-4514-48c8-bd5d-136ff9bc8cf0"));
        }
    });

    Object.defineProperty(UBT_AppManagerModel.staticEntities.uBT_MessageType, "info", {
        get: function() {
            return OS.BuiltinFunctions.textToInteger(getUBT_MessageTypeRecord("b69f4bc5-4211-4808-ae64-b62df5426873"));
        }
    });

    Object.defineProperty(UBT_AppManagerModel.staticEntities.uBT_MessageType, "warning", {
        get: function() {
            return OS.BuiltinFunctions.textToInteger(getUBT_MessageTypeRecord("d02ae75c-15a9-4617-abb2-814d976949d2"));
        }
    });

    UBT_AppManagerModel.staticEntities.b2C_ErrorType = {};
    var getB2C_ErrorTypeRecord = function(record) {
        return OS.ApplicationInfo.getModules()["41ff0174-9cb7-40a2-963a-fdb95cd05756"].staticEntities["0d4b5083-219c-4320-8402-e1910aa4e5b0"][record];
    };
    Object.defineProperty(UBT_AppManagerModel.staticEntities.b2C_ErrorType, "resetPassword", {
        get: function() {
            return getB2C_ErrorTypeRecord("01c98835-d48f-4cc6-ba02-a2c377330a10");
        }
    });

    Object.defineProperty(UBT_AppManagerModel.staticEntities.b2C_ErrorType, "scriptError", {
        get: function() {
            return getB2C_ErrorTypeRecord("1c36b345-eab9-466d-9bf0-cfc2abe014a5");
        }
    });

    Object.defineProperty(UBT_AppManagerModel.staticEntities.b2C_ErrorType, "invalidPolicyForToken", {
        get: function() {
            return getB2C_ErrorTypeRecord("3c6db2c7-331d-4ac1-9eaf-790be61ed602");
        }
    });

    Object.defineProperty(UBT_AppManagerModel.staticEntities.b2C_ErrorType, "cancelled", {
        get: function() {
            return getB2C_ErrorTypeRecord("4d5cf0b5-8582-4ad4-af1e-a04fba4a1b71");
        }
    });

    Object.defineProperty(UBT_AppManagerModel.staticEntities.b2C_ErrorType, "unkown", {
        get: function() {
            return getB2C_ErrorTypeRecord("cdc77697-fff2-40cf-bacd-912ef4f807f3");
        }
    });

    UBT_AppManagerModel.staticEntities.appManager_FRD_Events = {};
    var getAppManager_FRD_EventsRecord = function(record) {
        return OS.ApplicationInfo.getModules()["41ff0174-9cb7-40a2-963a-fdb95cd05756"].staticEntities["34f7f12d-fd7a-488d-8468-963e690bf256"][record];
    };
    Object.defineProperty(UBT_AppManagerModel.staticEntities.appManager_FRD_Events, "logOut", {
        get: function() {
            return getAppManager_FRD_EventsRecord("3b5b8939-2eb7-4180-bf27-9968950b6e9f");
        }
    });

    UBT_AppManagerModel.staticEntities.appManager_IdpProvider = {};
    var getAppManager_IdpProviderRecord = function(record) {
        return OS.ApplicationInfo.getModules()["41ff0174-9cb7-40a2-963a-fdb95cd05756"].staticEntities["a8868974-edc4-4d46-8929-9e794aaeeb1e"][record];
    };
    Object.defineProperty(UBT_AppManagerModel.staticEntities.appManager_IdpProvider, "azureB2C", {
        get: function() {
            return OS.BuiltinFunctions.textToInteger(getAppManager_IdpProviderRecord("55b1849e-1a70-47ed-a3cd-ed55369e7fae"));
        }
    });

    Object.defineProperty(UBT_AppManagerModel.staticEntities.appManager_IdpProvider, "frontEgg", {
        get: function() {
            return OS.BuiltinFunctions.textToInteger(getAppManager_IdpProviderRecord("efadda25-9a40-4a8b-a349-84f6be74bc82"));
        }
    });

    UBT_AppManagerModel.staticEntities.appManager_AzureInsightsEvents = {};
    var getAppManager_AzureInsightsEventsRecord = function(record) {
        return OS.ApplicationInfo.getModules()["41ff0174-9cb7-40a2-963a-fdb95cd05756"].staticEntities["d6d99a73-592f-470c-926e-4a8e608b3913"][record];
    };
    Object.defineProperty(UBT_AppManagerModel.staticEntities.appManager_AzureInsightsEvents, "fCM_ReceivedPushNotification", {
        get: function() {
            return getAppManager_AzureInsightsEventsRecord("299cee48-8b1b-4cdf-873b-10e886183939");
        }
    });

    Object.defineProperty(UBT_AppManagerModel.staticEntities.appManager_AzureInsightsEvents, "invalidDeviceLogin_Identified", {
        get: function() {
            return getAppManager_AzureInsightsEventsRecord("29c405a5-08d5-48bc-b351-cea0e6b096c2");
        }
    });

    Object.defineProperty(UBT_AppManagerModel.staticEntities.appManager_AzureInsightsEvents, "fRD_ReceivedSignal", {
        get: function() {
            return getAppManager_AzureInsightsEventsRecord("42495ad4-3c2f-4438-a90a-7bc6afd3bba6");
        }
    });

    Object.defineProperty(UBT_AppManagerModel.staticEntities.appManager_AzureInsightsEvents, "auth_Logout", {
        get: function() {
            return getAppManager_AzureInsightsEventsRecord("4822a98c-d431-41ed-b160-159ea0701025");
        }
    });

    Object.defineProperty(UBT_AppManagerModel.staticEntities.appManager_AzureInsightsEvents, "invalidDeviceLogin_Continued", {
        get: function() {
            return getAppManager_AzureInsightsEventsRecord("81b511d9-09d6-4f43-8d5c-5a6ff0492a33");
        }
    });

    Object.defineProperty(UBT_AppManagerModel.staticEntities.appManager_AzureInsightsEvents, "auth_Login", {
        get: function() {
            return getAppManager_AzureInsightsEventsRecord("b8ec143a-6455-4e19-a8d5-4b0c4354f4f3");
        }
    });

    Object.defineProperty(UBT_AppManagerModel.staticEntities.appManager_AzureInsightsEvents, "auth_ResetPassword", {
        get: function() {
            return getAppManager_AzureInsightsEventsRecord("bc456877-6435-4344-b659-1bf98673c584");
        }
    });

    Object.defineProperty(UBT_AppManagerModel.staticEntities.appManager_AzureInsightsEvents, "invalidDeviceLogin_Cancelled", {
        get: function() {
            return getAppManager_AzureInsightsEventsRecord("c9895955-8c58-489d-a298-42fe352edcde");
        }
    });

});