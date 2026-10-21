define("Connect2_AndroidAppLinksPlugin.model$ParamRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_AndroidAppLinksPlugin.model"], function(exports, OutSystems, Connect2_AndroidAppLinksPluginModel) {
    var OS = OutSystems.Internal;
    var ParamRec = (function(_super) {
        __extends(ParamRec, _super);

        function ParamRec(defaults) {
            _super.apply(this, arguments);
        }
        ParamRec.attributesToDeclare = function() {
            return [
                this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, true),
                this.attr("Value", "valueAttr", "Value", false, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, true)
            ].concat(_super.attributesToDeclare.call(this));
        };
        ParamRec.init();
        return ParamRec;
    })(OS.DataTypes.GenericRecord);
    Connect2_AndroidAppLinksPluginModel.ParamRec = ParamRec;

});
define("Connect2_AndroidAppLinksPlugin.model$ParamList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_AndroidAppLinksPlugin.model", "Connect2_AndroidAppLinksPlugin.model$ParamRec"], function(exports, OutSystems, Connect2_AndroidAppLinksPluginModel) {
    var OS = OutSystems.Internal;
    var ParamList = (function(_super) {
        __extends(ParamList, _super);

        function ParamList(defaults) {
            _super.apply(this, arguments);
        }
        ParamList.itemType = Connect2_AndroidAppLinksPluginModel.ParamRec;
        return ParamList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_AndroidAppLinksPluginModel.ParamList = ParamList;

});
define("Connect2_AndroidAppLinksPlugin.model$EventDataRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_AndroidAppLinksPlugin.model", "Connect2_AndroidAppLinksPlugin.model$ParamList"], function(exports, OutSystems, Connect2_AndroidAppLinksPluginModel) {
    var OS = OutSystems.Internal;
    var EventDataRec = (function(_super) {
        __extends(EventDataRec, _super);

        function EventDataRec(defaults) {
            _super.apply(this, arguments);
        }
        EventDataRec.attributesToDeclare = function() {
            return [
                this.attr("Scheme", "schemeAttr", "scheme", false, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, true),
                this.attr("Host", "hostAttr", "host", false, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, true),
                this.attr("Path", "pathAttr", "path", false, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, true),
                this.attr("URL", "uRLAttr", "url", false, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, true),
                this.attr("Hash", "hashAttr", "hash", false, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, true),
                this.attr("Params", "paramsAttr", "Params", false, false, OS.DataTypes.DataTypes.RecordList, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_AndroidAppLinksPluginModel.ParamList());
                }, true, Connect2_AndroidAppLinksPluginModel.ParamList)
            ].concat(_super.attributesToDeclare.call(this));
        };
        EventDataRec.init();
        return EventDataRec;
    })(OS.DataTypes.GenericRecord);
    Connect2_AndroidAppLinksPluginModel.EventDataRec = EventDataRec;

});
define("Connect2_AndroidAppLinksPlugin.model$EventDataRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_AndroidAppLinksPlugin.model", "Connect2_AndroidAppLinksPlugin.model$EventDataRec"], function(exports, OutSystems, Connect2_AndroidAppLinksPluginModel) {
    var OS = OutSystems.Internal;
    var EventDataRecord = (function(_super) {
        __extends(EventDataRecord, _super);

        function EventDataRecord(defaults) {
            _super.apply(this, arguments);
        }
        EventDataRecord.attributesToDeclare = function() {
            return [
                this.attr("EventData", "eventDataAttr", "EventData", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_AndroidAppLinksPluginModel.EventDataRec());
                }, true, Connect2_AndroidAppLinksPluginModel.EventDataRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        EventDataRecord.fromStructure = function(str) {
            return new EventDataRecord(new EventDataRecord.RecordClass({
                eventDataAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        EventDataRecord._isAnonymousRecord = true;
        EventDataRecord.UniqueId = "f77717cf-8014-ffbb-e1ae-a8c83150a80c";
        EventDataRecord.init();
        return EventDataRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_AndroidAppLinksPluginModel.EventDataRecord = EventDataRecord;

});
define("Connect2_AndroidAppLinksPlugin.model$EventDataRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_AndroidAppLinksPlugin.model", "Connect2_AndroidAppLinksPlugin.model$EventDataRecord"], function(exports, OutSystems, Connect2_AndroidAppLinksPluginModel) {
    var OS = OutSystems.Internal;
    var EventDataRecordList = (function(_super) {
        __extends(EventDataRecordList, _super);

        function EventDataRecordList(defaults) {
            _super.apply(this, arguments);
        }
        EventDataRecordList.itemType = Connect2_AndroidAppLinksPluginModel.EventDataRecord;
        return EventDataRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_AndroidAppLinksPluginModel.EventDataRecordList = EventDataRecordList;

});
define("Connect2_AndroidAppLinksPlugin.model$ParamRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_AndroidAppLinksPlugin.model", "Connect2_AndroidAppLinksPlugin.model$ParamRec"], function(exports, OutSystems, Connect2_AndroidAppLinksPluginModel) {
    var OS = OutSystems.Internal;
    var ParamRecord = (function(_super) {
        __extends(ParamRecord, _super);

        function ParamRecord(defaults) {
            _super.apply(this, arguments);
        }
        ParamRecord.attributesToDeclare = function() {
            return [
                this.attr("Param", "paramAttr", "Param", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_AndroidAppLinksPluginModel.ParamRec());
                }, true, Connect2_AndroidAppLinksPluginModel.ParamRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        ParamRecord.fromStructure = function(str) {
            return new ParamRecord(new ParamRecord.RecordClass({
                paramAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        ParamRecord._isAnonymousRecord = true;
        ParamRecord.UniqueId = "27974ee5-8e9f-a297-e99d-d3e2e24d6e46";
        ParamRecord.init();
        return ParamRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_AndroidAppLinksPluginModel.ParamRecord = ParamRecord;

});
define("Connect2_AndroidAppLinksPlugin.model$ErrorList", ["exports", "OutSystems/ClientRuntime/Main", "CommonPlugin.model", "Connect2_AndroidAppLinksPlugin.model", "CommonPlugin.model$ErrorRec", "Connect2_AndroidAppLinksPlugin.referencesHealth", "Connect2_AndroidAppLinksPlugin.referencesHealth$CommonPlugin"], function(exports, OutSystems, CommonPluginModel, Connect2_AndroidAppLinksPluginModel) {
    var OS = OutSystems.Internal;
    var ErrorList = (function(_super) {
        __extends(ErrorList, _super);

        function ErrorList(defaults) {
            _super.apply(this, arguments);
        }
        ErrorList.itemType = CommonPluginModel.ErrorRec;
        return ErrorList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_AndroidAppLinksPluginModel.ErrorList = ErrorList;

});
define("Connect2_AndroidAppLinksPlugin.model$Mobile_OperatingSystemRecord", ["exports", "OutSystems/ClientRuntime/Main", "CommonPlugin.model", "Connect2_AndroidAppLinksPlugin.model", "CommonPlugin.model$Mobile_OperatingSystemRec", "Connect2_AndroidAppLinksPlugin.referencesHealth", "Connect2_AndroidAppLinksPlugin.referencesHealth$CommonPlugin"], function(exports, OutSystems, CommonPluginModel, Connect2_AndroidAppLinksPluginModel) {
    var OS = OutSystems.Internal;
    var Mobile_OperatingSystemRecord = (function(_super) {
        __extends(Mobile_OperatingSystemRecord, _super);

        function Mobile_OperatingSystemRecord(defaults) {
            _super.apply(this, arguments);
        }
        Mobile_OperatingSystemRecord.attributesToDeclare = function() {
            return [
                this.attr("Mobile_OperatingSystem", "mobile_OperatingSystemAttr", "Mobile_OperatingSystem", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new CommonPluginModel.Mobile_OperatingSystemRec());
                }, true, CommonPluginModel.Mobile_OperatingSystemRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        Mobile_OperatingSystemRecord.fromStructure = function(str) {
            return new Mobile_OperatingSystemRecord(new Mobile_OperatingSystemRecord.RecordClass({
                mobile_OperatingSystemAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        Mobile_OperatingSystemRecord._isAnonymousRecord = true;
        Mobile_OperatingSystemRecord.UniqueId = "f56bdc75-0614-38d3-e901-3cdbe4073c38";
        Mobile_OperatingSystemRecord.init();
        return Mobile_OperatingSystemRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_AndroidAppLinksPluginModel.Mobile_OperatingSystemRecord = Mobile_OperatingSystemRecord;

});
define("Connect2_AndroidAppLinksPlugin.model$Mobile_OperatingSystemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_AndroidAppLinksPlugin.model", "Connect2_AndroidAppLinksPlugin.model$Mobile_OperatingSystemRecord"], function(exports, OutSystems, Connect2_AndroidAppLinksPluginModel) {
    var OS = OutSystems.Internal;
    var Mobile_OperatingSystemRecordList = (function(_super) {
        __extends(Mobile_OperatingSystemRecordList, _super);

        function Mobile_OperatingSystemRecordList(defaults) {
            _super.apply(this, arguments);
        }
        Mobile_OperatingSystemRecordList.itemType = Connect2_AndroidAppLinksPluginModel.Mobile_OperatingSystemRecord;
        return Mobile_OperatingSystemRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_AndroidAppLinksPluginModel.Mobile_OperatingSystemRecordList = Mobile_OperatingSystemRecordList;

});
define("Connect2_AndroidAppLinksPlugin.model$PluginLicenseRecord", ["exports", "OutSystems/ClientRuntime/Main", "CommonPlugin.model", "Connect2_AndroidAppLinksPlugin.model", "CommonPlugin.model$PluginLicenseRec", "Connect2_AndroidAppLinksPlugin.referencesHealth", "Connect2_AndroidAppLinksPlugin.referencesHealth$CommonPlugin"], function(exports, OutSystems, CommonPluginModel, Connect2_AndroidAppLinksPluginModel) {
    var OS = OutSystems.Internal;
    var PluginLicenseRecord = (function(_super) {
        __extends(PluginLicenseRecord, _super);

        function PluginLicenseRecord(defaults) {
            _super.apply(this, arguments);
        }
        PluginLicenseRecord.attributesToDeclare = function() {
            return [
                this.attr("PluginLicense", "pluginLicenseAttr", "PluginLicense", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new CommonPluginModel.PluginLicenseRec());
                }, true, CommonPluginModel.PluginLicenseRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        PluginLicenseRecord.fromStructure = function(str) {
            return new PluginLicenseRecord(new PluginLicenseRecord.RecordClass({
                pluginLicenseAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        PluginLicenseRecord._isAnonymousRecord = true;
        PluginLicenseRecord.UniqueId = "4f3ba093-4c73-508e-cfa6-9aca510d9587";
        PluginLicenseRecord.init();
        return PluginLicenseRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_AndroidAppLinksPluginModel.PluginLicenseRecord = PluginLicenseRecord;

});
define("Connect2_AndroidAppLinksPlugin.model$ParamRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_AndroidAppLinksPlugin.model", "Connect2_AndroidAppLinksPlugin.model$ParamRecord"], function(exports, OutSystems, Connect2_AndroidAppLinksPluginModel) {
    var OS = OutSystems.Internal;
    var ParamRecordList = (function(_super) {
        __extends(ParamRecordList, _super);

        function ParamRecordList(defaults) {
            _super.apply(this, arguments);
        }
        ParamRecordList.itemType = Connect2_AndroidAppLinksPluginModel.ParamRecord;
        return ParamRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_AndroidAppLinksPluginModel.ParamRecordList = ParamRecordList;

});
define("Connect2_AndroidAppLinksPlugin.model$ErrorRecord", ["exports", "OutSystems/ClientRuntime/Main", "CommonPlugin.model", "Connect2_AndroidAppLinksPlugin.model", "CommonPlugin.model$ErrorRec", "Connect2_AndroidAppLinksPlugin.referencesHealth", "Connect2_AndroidAppLinksPlugin.referencesHealth$CommonPlugin"], function(exports, OutSystems, CommonPluginModel, Connect2_AndroidAppLinksPluginModel) {
    var OS = OutSystems.Internal;
    var ErrorRecord = (function(_super) {
        __extends(ErrorRecord, _super);

        function ErrorRecord(defaults) {
            _super.apply(this, arguments);
        }
        ErrorRecord.attributesToDeclare = function() {
            return [
                this.attr("Error", "errorAttr", "Error", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new CommonPluginModel.ErrorRec());
                }, true, CommonPluginModel.ErrorRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        ErrorRecord.fromStructure = function(str) {
            return new ErrorRecord(new ErrorRecord.RecordClass({
                errorAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        ErrorRecord._isAnonymousRecord = true;
        ErrorRecord.UniqueId = "cbbd7d57-66e1-86ff-28ab-3b75adf75b93";
        ErrorRecord.init();
        return ErrorRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_AndroidAppLinksPluginModel.ErrorRecord = ErrorRecord;

});
define("Connect2_AndroidAppLinksPlugin.model$ErrorRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_AndroidAppLinksPlugin.model", "Connect2_AndroidAppLinksPlugin.model$ErrorRecord"], function(exports, OutSystems, Connect2_AndroidAppLinksPluginModel) {
    var OS = OutSystems.Internal;
    var ErrorRecordList = (function(_super) {
        __extends(ErrorRecordList, _super);

        function ErrorRecordList(defaults) {
            _super.apply(this, arguments);
        }
        ErrorRecordList.itemType = Connect2_AndroidAppLinksPluginModel.ErrorRecord;
        return ErrorRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_AndroidAppLinksPluginModel.ErrorRecordList = ErrorRecordList;

});
define("Connect2_AndroidAppLinksPlugin.model$EventDataList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_AndroidAppLinksPlugin.model", "Connect2_AndroidAppLinksPlugin.model$EventDataRec"], function(exports, OutSystems, Connect2_AndroidAppLinksPluginModel) {
    var OS = OutSystems.Internal;
    var EventDataList = (function(_super) {
        __extends(EventDataList, _super);

        function EventDataList(defaults) {
            _super.apply(this, arguments);
        }
        EventDataList.itemType = Connect2_AndroidAppLinksPluginModel.EventDataRec;
        return EventDataList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_AndroidAppLinksPluginModel.EventDataList = EventDataList;

});
define("Connect2_AndroidAppLinksPlugin.model$PluginLicenseList", ["exports", "OutSystems/ClientRuntime/Main", "CommonPlugin.model", "Connect2_AndroidAppLinksPlugin.model", "CommonPlugin.model$PluginLicenseRec", "Connect2_AndroidAppLinksPlugin.referencesHealth", "Connect2_AndroidAppLinksPlugin.referencesHealth$CommonPlugin"], function(exports, OutSystems, CommonPluginModel, Connect2_AndroidAppLinksPluginModel) {
    var OS = OutSystems.Internal;
    var PluginLicenseList = (function(_super) {
        __extends(PluginLicenseList, _super);

        function PluginLicenseList(defaults) {
            _super.apply(this, arguments);
        }
        PluginLicenseList.itemType = CommonPluginModel.PluginLicenseRec;
        return PluginLicenseList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_AndroidAppLinksPluginModel.PluginLicenseList = PluginLicenseList;

});
define("Connect2_AndroidAppLinksPlugin.model$PluginLicenseRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_AndroidAppLinksPlugin.model", "Connect2_AndroidAppLinksPlugin.model$PluginLicenseRecord"], function(exports, OutSystems, Connect2_AndroidAppLinksPluginModel) {
    var OS = OutSystems.Internal;
    var PluginLicenseRecordList = (function(_super) {
        __extends(PluginLicenseRecordList, _super);

        function PluginLicenseRecordList(defaults) {
            _super.apply(this, arguments);
        }
        PluginLicenseRecordList.itemType = Connect2_AndroidAppLinksPluginModel.PluginLicenseRecord;
        return PluginLicenseRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_AndroidAppLinksPluginModel.PluginLicenseRecordList = PluginLicenseRecordList;

});
define("Connect2_AndroidAppLinksPlugin.model$Mobile_OperatingSystemList", ["exports", "OutSystems/ClientRuntime/Main", "CommonPlugin.model", "Connect2_AndroidAppLinksPlugin.model", "CommonPlugin.model$Mobile_OperatingSystemRec", "Connect2_AndroidAppLinksPlugin.referencesHealth", "Connect2_AndroidAppLinksPlugin.referencesHealth$CommonPlugin"], function(exports, OutSystems, CommonPluginModel, Connect2_AndroidAppLinksPluginModel) {
    var OS = OutSystems.Internal;
    var Mobile_OperatingSystemList = (function(_super) {
        __extends(Mobile_OperatingSystemList, _super);

        function Mobile_OperatingSystemList(defaults) {
            _super.apply(this, arguments);
        }
        Mobile_OperatingSystemList.itemType = CommonPluginModel.Mobile_OperatingSystemRec;
        return Mobile_OperatingSystemList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_AndroidAppLinksPluginModel.Mobile_OperatingSystemList = Mobile_OperatingSystemList;

});
define("Connect2_AndroidAppLinksPlugin.model", ["exports", "OutSystems/ClientRuntime/Main"], function(exports, OutSystems) {
    var OS = OutSystems.Internal;
    var Connect2_AndroidAppLinksPluginModel = exports;
    Object.defineProperty(Connect2_AndroidAppLinksPluginModel, "module", {
        get: function() {
            return OS.ApplicationInfo.getModules()["d99ab2ff-09e5-41b1-81e3-727ab259c933"];
        }
    });

    Connect2_AndroidAppLinksPluginModel.staticEntities = {};
    Connect2_AndroidAppLinksPluginModel.staticEntities.mobile_OperatingSystem = {};
    var getMobile_OperatingSystemRecord = function(record) {
        return OS.ApplicationInfo.getModules()["5b6515d9-f417-41d9-9c45-5dfc1a7b019f"].staticEntities["c1eb5dfb-b8c1-47fc-bc7d-1cd017f67311"][record];
    };
    Object.defineProperty(Connect2_AndroidAppLinksPluginModel.staticEntities.mobile_OperatingSystem, "android", {
        get: function() {
            return getMobile_OperatingSystemRecord("01edb2f7-0e57-4dc0-9509-92d0d28ebfe3");
        }
    });

    Object.defineProperty(Connect2_AndroidAppLinksPluginModel.staticEntities.mobile_OperatingSystem, "windows", {
        get: function() {
            return getMobile_OperatingSystemRecord("164b2bee-9204-44fd-99b7-4d8e15ea9c63");
        }
    });

    Object.defineProperty(Connect2_AndroidAppLinksPluginModel.staticEntities.mobile_OperatingSystem, "iOS", {
        get: function() {
            return getMobile_OperatingSystemRecord("91c837e3-89f4-4179-9b8c-c79a99090027");
        }
    });

    Object.defineProperty(Connect2_AndroidAppLinksPluginModel.staticEntities.mobile_OperatingSystem, "other", {
        get: function() {
            return getMobile_OperatingSystemRecord("e0264a53-735d-4dea-8647-b8bfe757d34b");
        }
    });

});