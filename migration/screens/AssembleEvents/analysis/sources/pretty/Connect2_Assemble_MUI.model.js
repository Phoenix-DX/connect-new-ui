define("Connect2_Assemble_MUI.model$PhotoURLRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_Assemble_MUI.model", "APIDomain_Directory_IS.model$PhotoURLRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS"], function(exports, OutSystems, APIDomain_Directory_ISModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var PhotoURLRecord = (function(_super) {
        __extends(PhotoURLRecord, _super);

        function PhotoURLRecord(defaults) {
            _super.apply(this, arguments);
        }
        PhotoURLRecord.attributesToDeclare = function() {
            return [
                this.attr("PhotoURL", "photoURLAttr", "PhotoURL", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.PhotoURLRec());
                }, true, APIDomain_Directory_ISModel.PhotoURLRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        PhotoURLRecord.fromStructure = function(str) {
            return new PhotoURLRecord(new PhotoURLRecord.RecordClass({
                photoURLAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        PhotoURLRecord._isAnonymousRecord = true;
        PhotoURLRecord.UniqueId = "3336d11f-19ec-3217-4cb5-a1a019564a43";
        PhotoURLRecord.init();
        return PhotoURLRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.PhotoURLRecord = PhotoURLRecord;

});
define("Connect2_Assemble_MUI.model$PhotoURLRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$PhotoURLRecord"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var PhotoURLRecordList = (function(_super) {
        __extends(PhotoURLRecordList, _super);

        function PhotoURLRecordList(defaults) {
            _super.apply(this, arguments);
        }
        PhotoURLRecordList.itemType = Connect2_Assemble_MUIModel.PhotoURLRecord;
        return PhotoURLRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.PhotoURLRecordList = PhotoURLRecordList;

});
define("Connect2_Assemble_MUI.model$HouseholdCarouselPreloadedItemRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_Assemble_MUI.model", "Connect2_LegacyShared.model$HouseholdCarouselPreloadedItemRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_LegacyShared"], function(exports, OutSystems, Connect2_LegacySharedModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var HouseholdCarouselPreloadedItemRecord = (function(_super) {
        __extends(HouseholdCarouselPreloadedItemRecord, _super);

        function HouseholdCarouselPreloadedItemRecord(defaults) {
            _super.apply(this, arguments);
        }
        HouseholdCarouselPreloadedItemRecord.attributesToDeclare = function() {
            return [
                this.attr("HouseholdCarouselPreloadedItem", "householdCarouselPreloadedItemAttr", "HouseholdCarouselPreloadedItem", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.HouseholdCarouselPreloadedItemRec());
                }, true, Connect2_LegacySharedModel.HouseholdCarouselPreloadedItemRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        HouseholdCarouselPreloadedItemRecord.fromStructure = function(str) {
            return new HouseholdCarouselPreloadedItemRecord(new HouseholdCarouselPreloadedItemRecord.RecordClass({
                householdCarouselPreloadedItemAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        HouseholdCarouselPreloadedItemRecord._isAnonymousRecord = true;
        HouseholdCarouselPreloadedItemRecord.UniqueId = "5e9ee544-55d6-6991-9128-d7b2c27f33b8";
        HouseholdCarouselPreloadedItemRecord.init();
        return HouseholdCarouselPreloadedItemRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.HouseholdCarouselPreloadedItemRecord = HouseholdCarouselPreloadedItemRecord;

});
define("Connect2_Assemble_MUI.model$HouseholdCarouselPreloadedItemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$HouseholdCarouselPreloadedItemRecord"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var HouseholdCarouselPreloadedItemRecordList = (function(_super) {
        __extends(HouseholdCarouselPreloadedItemRecordList, _super);

        function HouseholdCarouselPreloadedItemRecordList(defaults) {
            _super.apply(this, arguments);
        }
        HouseholdCarouselPreloadedItemRecordList.itemType = Connect2_Assemble_MUIModel.HouseholdCarouselPreloadedItemRecord;
        return HouseholdCarouselPreloadedItemRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.HouseholdCarouselPreloadedItemRecordList = HouseholdCarouselPreloadedItemRecordList;

});
define("Connect2_Assemble_MUI.model$LocalityResultItemWithGPSList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_Assemble_MUI.model", "Connect2_LegacyShared.model$LocalityResultItemWithGPSRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_LegacyShared"], function(exports, OutSystems, Connect2_LegacySharedModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var LocalityResultItemWithGPSList = (function(_super) {
        __extends(LocalityResultItemWithGPSList, _super);

        function LocalityResultItemWithGPSList(defaults) {
            _super.apply(this, arguments);
        }
        LocalityResultItemWithGPSList.itemType = Connect2_LegacySharedModel.LocalityResultItemWithGPSRec;
        return LocalityResultItemWithGPSList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.LocalityResultItemWithGPSList = LocalityResultItemWithGPSList;

});
define("Connect2_Assemble_MUI.model$AssembleDetailsPreloadingRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_CS.model", "Connect2_Assemble_MUI.model", "Connect2_Assemble_CS.model$AssembleDetailsPreloadingRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_Assemble_CS"], function(exports, OutSystems, Connect2_Assemble_CSModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var AssembleDetailsPreloadingRecord = (function(_super) {
        __extends(AssembleDetailsPreloadingRecord, _super);

        function AssembleDetailsPreloadingRecord(defaults) {
            _super.apply(this, arguments);
        }
        AssembleDetailsPreloadingRecord.attributesToDeclare = function() {
            return [
                this.attr("AssembleDetailsPreloading", "assembleDetailsPreloadingAttr", "AssembleDetailsPreloading", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_Assemble_CSModel.AssembleDetailsPreloadingRec());
                }, true, Connect2_Assemble_CSModel.AssembleDetailsPreloadingRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        AssembleDetailsPreloadingRecord.fromStructure = function(str) {
            return new AssembleDetailsPreloadingRecord(new AssembleDetailsPreloadingRecord.RecordClass({
                assembleDetailsPreloadingAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        AssembleDetailsPreloadingRecord._isAnonymousRecord = true;
        AssembleDetailsPreloadingRecord.UniqueId = "4cf6e027-180c-b8ff-2dc5-ebf1b4c02063";
        AssembleDetailsPreloadingRecord.init();
        return AssembleDetailsPreloadingRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.AssembleDetailsPreloadingRecord = AssembleDetailsPreloadingRecord;

});
define("Connect2_Assemble_MUI.model$AssembleDetailsPreloadingRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$AssembleDetailsPreloadingRecord"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var AssembleDetailsPreloadingRecordList = (function(_super) {
        __extends(AssembleDetailsPreloadingRecordList, _super);

        function AssembleDetailsPreloadingRecordList(defaults) {
            _super.apply(this, arguments);
        }
        AssembleDetailsPreloadingRecordList.itemType = Connect2_Assemble_MUIModel.AssembleDetailsPreloadingRecord;
        return AssembleDetailsPreloadingRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.AssembleDetailsPreloadingRecordList = AssembleDetailsPreloadingRecordList;

});
define("Connect2_Assemble_MUI.model$DateTimeDateTimeRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var DateTimeDateTimeRecord = (function(_super) {
        __extends(DateTimeDateTimeRecord, _super);

        function DateTimeDateTimeRecord(defaults) {
            _super.apply(this, arguments);
        }
        DateTimeDateTimeRecord.attributesToDeclare = function() {
            return [
                this.attr("EndDateTime", "endDateTimeAttr", "EndDateTime", false, false, OS.DataTypes.DataTypes.DateTime, function() {
                    return OS.DataTypes.DateTime.defaultValue;
                }, true),
                this.attr("StartDateTime", "startDateTimeAttr", "StartDateTime", false, false, OS.DataTypes.DataTypes.DateTime, function() {
                    return OS.DataTypes.DateTime.defaultValue;
                }, true)
            ].concat(_super.attributesToDeclare.call(this));
        };
        DateTimeDateTimeRecord._isAnonymousRecord = true;
        DateTimeDateTimeRecord.UniqueId = "09f52707-932c-dea6-9a9f-eca7dfbee804";
        DateTimeDateTimeRecord.init();
        return DateTimeDateTimeRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.DateTimeDateTimeRecord = DateTimeDateTimeRecord;

});
define("Connect2_Assemble_MUI.model$LocalityHouseholdsItemRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_Assemble_MUI.model", "Connect2_LegacyShared.model$LocalityHouseholdsItemRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_LegacyShared"], function(exports, OutSystems, Connect2_LegacySharedModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var LocalityHouseholdsItemRecord = (function(_super) {
        __extends(LocalityHouseholdsItemRecord, _super);

        function LocalityHouseholdsItemRecord(defaults) {
            _super.apply(this, arguments);
        }
        LocalityHouseholdsItemRecord.attributesToDeclare = function() {
            return [
                this.attr("LocalityHouseholdsItem", "localityHouseholdsItemAttr", "LocalityHouseholdsItem", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.LocalityHouseholdsItemRec());
                }, true, Connect2_LegacySharedModel.LocalityHouseholdsItemRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        LocalityHouseholdsItemRecord.fromStructure = function(str) {
            return new LocalityHouseholdsItemRecord(new LocalityHouseholdsItemRecord.RecordClass({
                localityHouseholdsItemAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        LocalityHouseholdsItemRecord._isAnonymousRecord = true;
        LocalityHouseholdsItemRecord.UniqueId = "0a65ad3f-8ebb-cdea-b78b-ada7665f83ff";
        LocalityHouseholdsItemRecord.init();
        return LocalityHouseholdsItemRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.LocalityHouseholdsItemRecord = LocalityHouseholdsItemRecord;

});
define("Connect2_Assemble_MUI.model$MyBookmarks_ObjectTypeList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_IS.model", "Connect2_Assemble_MUI.model", "Connect2_MyBookmarks_IS.model$MyBookmarks_ObjectTypeRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_MyBookmarks_IS"], function(exports, OutSystems, Connect2_MyBookmarks_ISModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var MyBookmarks_ObjectTypeList = (function(_super) {
        __extends(MyBookmarks_ObjectTypeList, _super);

        function MyBookmarks_ObjectTypeList(defaults) {
            _super.apply(this, arguments);
        }
        MyBookmarks_ObjectTypeList.itemType = Connect2_MyBookmarks_ISModel.MyBookmarks_ObjectTypeRec;
        return MyBookmarks_ObjectTypeList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.MyBookmarks_ObjectTypeList = MyBookmarks_ObjectTypeList;

});
define("Connect2_Assemble_MUI.model$", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var TextList = (function(_super) {
        __extends(TextList, _super);

        function TextList(defaults) {
            _super.apply(this, arguments);
        }
        TextList.itemType = OS.DataTypes.DataTypes.Text;
        return TextList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.TextList = TextList;

});
define("Connect2_Assemble_MUI.model$SpouseRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_Assemble_MUI.model", "APIDomain_Directory_IS.model$SpouseRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS"], function(exports, OutSystems, APIDomain_Directory_ISModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var SpouseRecord = (function(_super) {
        __extends(SpouseRecord, _super);

        function SpouseRecord(defaults) {
            _super.apply(this, arguments);
        }
        SpouseRecord.attributesToDeclare = function() {
            return [
                this.attr("Spouse", "spouseAttr", "Spouse", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.SpouseRec());
                }, true, APIDomain_Directory_ISModel.SpouseRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        SpouseRecord.fromStructure = function(str) {
            return new SpouseRecord(new SpouseRecord.RecordClass({
                spouseAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        SpouseRecord._isAnonymousRecord = true;
        SpouseRecord.UniqueId = "2951b8ee-54c1-e6a9-6ae3-32884c27e410";
        SpouseRecord.init();
        return SpouseRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.SpouseRecord = SpouseRecord;

});
define("Connect2_Assemble_MUI.model$SpouseRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$SpouseRecord"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var SpouseRecordList = (function(_super) {
        __extends(SpouseRecordList, _super);

        function SpouseRecordList(defaults) {
            _super.apply(this, arguments);
        }
        SpouseRecordList.itemType = Connect2_Assemble_MUIModel.SpouseRecord;
        return SpouseRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.SpouseRecordList = SpouseRecordList;

});
define("Connect2_Assemble_MUI.model$PhotoDetailsRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_IS.model", "Connect2_Assemble_MUI.model", "Connect2_MyBookmarks_IS.model$PhotoDetailsRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_MyBookmarks_IS"], function(exports, OutSystems, Connect2_MyBookmarks_ISModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var PhotoDetailsRecord = (function(_super) {
        __extends(PhotoDetailsRecord, _super);

        function PhotoDetailsRecord(defaults) {
            _super.apply(this, arguments);
        }
        PhotoDetailsRecord.attributesToDeclare = function() {
            return [
                this.attr("PhotoDetails", "photoDetailsAttr", "PhotoDetails", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_MyBookmarks_ISModel.PhotoDetailsRec());
                }, true, Connect2_MyBookmarks_ISModel.PhotoDetailsRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        PhotoDetailsRecord.fromStructure = function(str) {
            return new PhotoDetailsRecord(new PhotoDetailsRecord.RecordClass({
                photoDetailsAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        PhotoDetailsRecord._isAnonymousRecord = true;
        PhotoDetailsRecord.UniqueId = "0ed98616-7a81-527b-25bb-07fcbdb2d01d";
        PhotoDetailsRecord.init();
        return PhotoDetailsRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.PhotoDetailsRecord = PhotoDetailsRecord;

});
define("Connect2_Assemble_MUI.model$ConnectConfigRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_Assemble_MUI.model", "APIDomain_Directory_IS.model$ConnectConfigRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS"], function(exports, OutSystems, APIDomain_Directory_ISModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var ConnectConfigRecord = (function(_super) {
        __extends(ConnectConfigRecord, _super);

        function ConnectConfigRecord(defaults) {
            _super.apply(this, arguments);
        }
        ConnectConfigRecord.attributesToDeclare = function() {
            return [
                this.attr("ConnectConfig", "connectConfigAttr", "ConnectConfig", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.ConnectConfigRec());
                }, true, APIDomain_Directory_ISModel.ConnectConfigRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        ConnectConfigRecord.fromStructure = function(str) {
            return new ConnectConfigRecord(new ConnectConfigRecord.RecordClass({
                connectConfigAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        ConnectConfigRecord._isAnonymousRecord = true;
        ConnectConfigRecord.UniqueId = "102f7240-4699-1795-0378-75c37cf47e99";
        ConnectConfigRecord.init();
        return ConnectConfigRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.ConnectConfigRecord = ConnectConfigRecord;

});
define("Connect2_Assemble_MUI.model$AssembleAttendeeGuestList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_CS.model", "Connect2_Assemble_MUI.model", "Connect2_Assemble_CS.model$AssembleAttendeeGuestRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_Assemble_CS"], function(exports, OutSystems, Connect2_Assemble_CSModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var AssembleAttendeeGuestList = (function(_super) {
        __extends(AssembleAttendeeGuestList, _super);

        function AssembleAttendeeGuestList(defaults) {
            _super.apply(this, arguments);
        }
        AssembleAttendeeGuestList.itemType = Connect2_Assemble_CSModel.AssembleAttendeeGuestRec;
        return AssembleAttendeeGuestList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.AssembleAttendeeGuestList = AssembleAttendeeGuestList;

});
define("Connect2_Assemble_MUI.model$AssembleAttendeeSubdivisionList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_CS.model", "Connect2_Assemble_MUI.model", "Connect2_Assemble_CS.model$AssembleAttendeeSubdivisionRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_Assemble_CS"], function(exports, OutSystems, Connect2_Assemble_CSModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var AssembleAttendeeSubdivisionList = (function(_super) {
        __extends(AssembleAttendeeSubdivisionList, _super);

        function AssembleAttendeeSubdivisionList(defaults) {
            _super.apply(this, arguments);
        }
        AssembleAttendeeSubdivisionList.itemType = Connect2_Assemble_CSModel.AssembleAttendeeSubdivisionRec;
        return AssembleAttendeeSubdivisionList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.AssembleAttendeeSubdivisionList = AssembleAttendeeSubdivisionList;

});
define("Connect2_Assemble_MUI.model$LocalityDetailsBooleanRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_CS.model", "Connect2_Assemble_MUI.model", "Connect2_Assemble_CS.model$LocalityDetailsRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_Assemble_CS"], function(exports, OutSystems, Connect2_Assemble_CSModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var LocalityDetailsBooleanRecord = (function(_super) {
        __extends(LocalityDetailsBooleanRecord, _super);

        function LocalityDetailsBooleanRecord(defaults) {
            _super.apply(this, arguments);
        }
        LocalityDetailsBooleanRecord.attributesToDeclare = function() {
            return [
                this.attr("LocalityDetail", "localityDetailAttr", "LocalityDetail", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_Assemble_CSModel.LocalityDetailsRec());
                }, true, Connect2_Assemble_CSModel.LocalityDetailsRec),
                this.attr("IsSelected", "isSelectedAttr", "IsSelected", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, true)
            ].concat(_super.attributesToDeclare.call(this));
        };
        LocalityDetailsBooleanRecord._isAnonymousRecord = true;
        LocalityDetailsBooleanRecord.UniqueId = "124cbadf-9b10-466c-14e0-f38e279bd7bf";
        LocalityDetailsBooleanRecord.init();
        return LocalityDetailsBooleanRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.LocalityDetailsBooleanRecord = LocalityDetailsBooleanRecord;

});
define("Connect2_Assemble_MUI.model$AssembleEventSummaryList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_CS.model", "Connect2_Assemble_MUI.model", "Connect2_Assemble_CS.model$AssembleEventSummaryRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_Assemble_CS"], function(exports, OutSystems, Connect2_Assemble_CSModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var AssembleEventSummaryList = (function(_super) {
        __extends(AssembleEventSummaryList, _super);

        function AssembleEventSummaryList(defaults) {
            _super.apply(this, arguments);
        }
        AssembleEventSummaryList.itemType = Connect2_Assemble_CSModel.AssembleEventSummaryRec;
        return AssembleEventSummaryList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.AssembleEventSummaryList = AssembleEventSummaryList;

});
define("Connect2_Assemble_MUI.model$TextTextLongIntegerRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var TextTextLongIntegerRecord = (function(_super) {
        __extends(TextTextLongIntegerRecord, _super);

        function TextTextLongIntegerRecord(defaults) {
            _super.apply(this, arguments);
        }
        TextTextLongIntegerRecord.attributesToDeclare = function() {
            return [
                this.attr("Code", "codeAttr", "Code", false, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, true),
                this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, true),
                this.attr("RegionId", "regionIdAttr", "RegionId", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                    return OS.DataTypes.LongInteger.defaultValue;
                }, true)
            ].concat(_super.attributesToDeclare.call(this));
        };
        TextTextLongIntegerRecord._isAnonymousRecord = true;
        TextTextLongIntegerRecord.UniqueId = "e0513088-a367-43e6-cebf-843baa3a1a2d";
        TextTextLongIntegerRecord.init();
        return TextTextLongIntegerRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.TextTextLongIntegerRecord = TextTextLongIntegerRecord;

});
define("Connect2_Assemble_MUI.model$TextTextLongIntegerRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$TextTextLongIntegerRecord"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var TextTextLongIntegerRecordList = (function(_super) {
        __extends(TextTextLongIntegerRecordList, _super);

        function TextTextLongIntegerRecordList(defaults) {
            _super.apply(this, arguments);
        }
        TextTextLongIntegerRecordList.itemType = Connect2_Assemble_MUIModel.TextTextLongIntegerRecord;
        return TextTextLongIntegerRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.TextTextLongIntegerRecordList = TextTextLongIntegerRecordList;

});
define("Connect2_Assemble_MUI.model$Directory_UserCurrent_SubscriptionRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_Assemble_MUI.model", "APIDomain_Directory_IS.model$Directory_UserCurrent_SubscriptionRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS"], function(exports, OutSystems, APIDomain_Directory_ISModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var Directory_UserCurrent_SubscriptionRecord = (function(_super) {
        __extends(Directory_UserCurrent_SubscriptionRecord, _super);

        function Directory_UserCurrent_SubscriptionRecord(defaults) {
            _super.apply(this, arguments);
        }
        Directory_UserCurrent_SubscriptionRecord.attributesToDeclare = function() {
            return [
                this.attr("Directory_UserCurrent_Subscription", "directory_UserCurrent_SubscriptionAttr", "Directory_UserCurrent_Subscription", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.Directory_UserCurrent_SubscriptionRec());
                }, true, APIDomain_Directory_ISModel.Directory_UserCurrent_SubscriptionRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        Directory_UserCurrent_SubscriptionRecord.fromStructure = function(str) {
            return new Directory_UserCurrent_SubscriptionRecord(new Directory_UserCurrent_SubscriptionRecord.RecordClass({
                directory_UserCurrent_SubscriptionAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        Directory_UserCurrent_SubscriptionRecord._isAnonymousRecord = true;
        Directory_UserCurrent_SubscriptionRecord.UniqueId = "12fffd2e-e48c-df0d-2451-c4a227301f67";
        Directory_UserCurrent_SubscriptionRecord.init();
        return Directory_UserCurrent_SubscriptionRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.Directory_UserCurrent_SubscriptionRecord = Directory_UserCurrent_SubscriptionRecord;

});
define("Connect2_Assemble_MUI.model$TextTextTextRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var TextTextTextRecord = (function(_super) {
        __extends(TextTextTextRecord, _super);

        function TextTextTextRecord(defaults) {
            _super.apply(this, arguments);
        }
        TextTextTextRecord.attributesToDeclare = function() {
            return [
                this.attr("FirstRow", "firstRowAttr", "FirstRow", false, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, true),
                this.attr("SecondRow", "secondRowAttr", "SecondRow", false, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, true),
                this.attr("SingleLine", "singleLineAttr", "SingleLine", false, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, true)
            ].concat(_super.attributesToDeclare.call(this));
        };
        TextTextTextRecord._isAnonymousRecord = true;
        TextTextTextRecord.UniqueId = "46a3eba1-5162-bc3d-6394-d7344e2915b4";
        TextTextTextRecord.init();
        return TextTextTextRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.TextTextTextRecord = TextTextTextRecord;

});
define("Connect2_Assemble_MUI.model$TextTextTextRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$TextTextTextRecord"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var TextTextTextRecordList = (function(_super) {
        __extends(TextTextTextRecordList, _super);

        function TextTextTextRecordList(defaults) {
            _super.apply(this, arguments);
        }
        TextTextTextRecordList.itemType = Connect2_Assemble_MUIModel.TextTextTextRecord;
        return TextTextTextRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.TextTextTextRecordList = TextTextTextRecordList;

});
define("Connect2_Assemble_MUI.model$HouseholdCarouselPreloadedItemList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_Assemble_MUI.model", "Connect2_LegacyShared.model$HouseholdCarouselPreloadedItemRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_LegacyShared"], function(exports, OutSystems, Connect2_LegacySharedModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var HouseholdCarouselPreloadedItemList = (function(_super) {
        __extends(HouseholdCarouselPreloadedItemList, _super);

        function HouseholdCarouselPreloadedItemList(defaults) {
            _super.apply(this, arguments);
        }
        HouseholdCarouselPreloadedItemList.itemType = Connect2_LegacySharedModel.HouseholdCarouselPreloadedItemRec;
        return HouseholdCarouselPreloadedItemList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.HouseholdCarouselPreloadedItemList = HouseholdCarouselPreloadedItemList;

});
define("Connect2_Assemble_MUI.model$ContactByPhonePopupDataRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "Connect2_Assemble_MUI.model", "UBTConnect_Utils.model$ContactByPhonePopupDataRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$UBTConnect_Utils"], function(exports, OutSystems, UBTConnect_UtilsModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var ContactByPhonePopupDataRecord = (function(_super) {
        __extends(ContactByPhonePopupDataRecord, _super);

        function ContactByPhonePopupDataRecord(defaults) {
            _super.apply(this, arguments);
        }
        ContactByPhonePopupDataRecord.attributesToDeclare = function() {
            return [
                this.attr("ContactByPhonePopupData", "contactByPhonePopupDataAttr", "ContactByPhonePopupData", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnect_UtilsModel.ContactByPhonePopupDataRec());
                }, true, UBTConnect_UtilsModel.ContactByPhonePopupDataRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        ContactByPhonePopupDataRecord.fromStructure = function(str) {
            return new ContactByPhonePopupDataRecord(new ContactByPhonePopupDataRecord.RecordClass({
                contactByPhonePopupDataAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        ContactByPhonePopupDataRecord._isAnonymousRecord = true;
        ContactByPhonePopupDataRecord.UniqueId = "14372885-2691-d970-33e1-2ed0026f9173";
        ContactByPhonePopupDataRecord.init();
        return ContactByPhonePopupDataRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.ContactByPhonePopupDataRecord = ContactByPhonePopupDataRecord;

});
define("Connect2_Assemble_MUI.model$AssembleAttendeeGuestRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_CS.model", "Connect2_Assemble_MUI.model", "Connect2_Assemble_CS.model$AssembleAttendeeGuestRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_Assemble_CS"], function(exports, OutSystems, Connect2_Assemble_CSModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var AssembleAttendeeGuestRecord = (function(_super) {
        __extends(AssembleAttendeeGuestRecord, _super);

        function AssembleAttendeeGuestRecord(defaults) {
            _super.apply(this, arguments);
        }
        AssembleAttendeeGuestRecord.attributesToDeclare = function() {
            return [
                this.attr("AssembleAttendeeGuest", "assembleAttendeeGuestAttr", "AssembleAttendeeGuest", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_Assemble_CSModel.AssembleAttendeeGuestRec());
                }, true, Connect2_Assemble_CSModel.AssembleAttendeeGuestRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        AssembleAttendeeGuestRecord.fromStructure = function(str) {
            return new AssembleAttendeeGuestRecord(new AssembleAttendeeGuestRecord.RecordClass({
                assembleAttendeeGuestAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        AssembleAttendeeGuestRecord._isAnonymousRecord = true;
        AssembleAttendeeGuestRecord.UniqueId = "1473bb26-291d-fae7-6a7f-80f303a8df71";
        AssembleAttendeeGuestRecord.init();
        return AssembleAttendeeGuestRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.AssembleAttendeeGuestRecord = AssembleAttendeeGuestRecord;

});
define("Connect2_Assemble_MUI.model$Custom_Address_ItemList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_Assemble_MUI.model", "APIDomain_Directory_IS.model$Custom_Address_ItemRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS"], function(exports, OutSystems, APIDomain_Directory_ISModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var Custom_Address_ItemList = (function(_super) {
        __extends(Custom_Address_ItemList, _super);

        function Custom_Address_ItemList(defaults) {
            _super.apply(this, arguments);
        }
        Custom_Address_ItemList.itemType = APIDomain_Directory_ISModel.Custom_Address_ItemRec;
        return Custom_Address_ItemList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.Custom_Address_ItemList = Custom_Address_ItemList;

});
define("Connect2_Assemble_MUI.model$MenuActionRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_Assemble_MUI.model", "OutSystemsUI_2_23.model$MenuActionRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$OutSystemsUI_2_23"], function(exports, OutSystems, OutSystemsUI_2_23Model, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var MenuActionRecord = (function(_super) {
        __extends(MenuActionRecord, _super);

        function MenuActionRecord(defaults) {
            _super.apply(this, arguments);
        }
        MenuActionRecord.attributesToDeclare = function() {
            return [
                this.attr("MenuAction", "menuActionAttr", "MenuAction", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.MenuActionRec());
                }, true, OutSystemsUI_2_23Model.MenuActionRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        MenuActionRecord.fromStructure = function(str) {
            return new MenuActionRecord(new MenuActionRecord.RecordClass({
                menuActionAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        MenuActionRecord._isAnonymousRecord = true;
        MenuActionRecord.UniqueId = "152b85d3-e824-823c-c634-7a228030f9b6";
        MenuActionRecord.init();
        return MenuActionRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.MenuActionRecord = MenuActionRecord;

});
define("Connect2_Assemble_MUI.model$ExtensionRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_Assemble_MUI.model", "APIDomain_Directory_IS.model$ExtensionRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS"], function(exports, OutSystems, APIDomain_Directory_ISModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var ExtensionRecord = (function(_super) {
        __extends(ExtensionRecord, _super);

        function ExtensionRecord(defaults) {
            _super.apply(this, arguments);
        }
        ExtensionRecord.attributesToDeclare = function() {
            return [
                this.attr("Extension", "extensionAttr", "Extension", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.ExtensionRec());
                }, true, APIDomain_Directory_ISModel.ExtensionRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        ExtensionRecord.fromStructure = function(str) {
            return new ExtensionRecord(new ExtensionRecord.RecordClass({
                extensionAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        ExtensionRecord._isAnonymousRecord = true;
        ExtensionRecord.UniqueId = "2f628101-99f9-bea6-abdb-ea7bac9b6c95";
        ExtensionRecord.init();
        return ExtensionRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.ExtensionRecord = ExtensionRecord;

});
define("Connect2_Assemble_MUI.model$ExtensionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$ExtensionRecord"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var ExtensionRecordList = (function(_super) {
        __extends(ExtensionRecordList, _super);

        function ExtensionRecordList(defaults) {
            _super.apply(this, arguments);
        }
        ExtensionRecordList.itemType = Connect2_Assemble_MUIModel.ExtensionRecord;
        return ExtensionRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.ExtensionRecordList = ExtensionRecordList;

});
define("Connect2_Assemble_MUI.model$ContactByPhonePopupDataRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$ContactByPhonePopupDataRecord"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var ContactByPhonePopupDataRecordList = (function(_super) {
        __extends(ContactByPhonePopupDataRecordList, _super);

        function ContactByPhonePopupDataRecordList(defaults) {
            _super.apply(this, arguments);
        }
        ContactByPhonePopupDataRecordList.itemType = Connect2_Assemble_MUIModel.ContactByPhonePopupDataRecord;
        return ContactByPhonePopupDataRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.ContactByPhonePopupDataRecordList = ContactByPhonePopupDataRecordList;

});
define("Connect2_Assemble_MUI.model$ResultListTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_Assemble_MUI.model", "Connect2_LegacyShared.model$ResultListTypeRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_LegacyShared"], function(exports, OutSystems, Connect2_LegacySharedModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var ResultListTypeRecord = (function(_super) {
        __extends(ResultListTypeRecord, _super);

        function ResultListTypeRecord(defaults) {
            _super.apply(this, arguments);
        }
        ResultListTypeRecord.attributesToDeclare = function() {
            return [
                this.attr("ResultListType", "resultListTypeAttr", "ResultListType", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.ResultListTypeRec());
                }, true, Connect2_LegacySharedModel.ResultListTypeRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        ResultListTypeRecord.fromStructure = function(str) {
            return new ResultListTypeRecord(new ResultListTypeRecord.RecordClass({
                resultListTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        ResultListTypeRecord._isAnonymousRecord = true;
        ResultListTypeRecord.UniqueId = "1727d670-aab8-02be-6977-7527394b45ff";
        ResultListTypeRecord.init();
        return ResultListTypeRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.ResultListTypeRecord = ResultListTypeRecord;

});
define("Connect2_Assemble_MUI.model$GetCountriesBySubscriptionIdList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_Assemble_MUI.model", "APIDomain_Directory_IS.model$GetCountriesBySubscriptionIdRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS"], function(exports, OutSystems, APIDomain_Directory_ISModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var GetCountriesBySubscriptionIdList = (function(_super) {
        __extends(GetCountriesBySubscriptionIdList, _super);

        function GetCountriesBySubscriptionIdList(defaults) {
            _super.apply(this, arguments);
        }
        GetCountriesBySubscriptionIdList.itemType = APIDomain_Directory_ISModel.GetCountriesBySubscriptionIdRec;
        return GetCountriesBySubscriptionIdList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.GetCountriesBySubscriptionIdList = GetCountriesBySubscriptionIdList;

});
define("Connect2_Assemble_MUI.model$SearchInputRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "Connect2_Assemble_MUI.model", "UBTConnectLibrary.model$SearchInputRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$UBTConnectLibrary"], function(exports, OutSystems, UBTConnectLibraryModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var SearchInputRecord = (function(_super) {
        __extends(SearchInputRecord, _super);

        function SearchInputRecord(defaults) {
            _super.apply(this, arguments);
        }
        SearchInputRecord.attributesToDeclare = function() {
            return [
                this.attr("SearchInput", "searchInputAttr", "SearchInput", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.SearchInputRec());
                }, true, UBTConnectLibraryModel.SearchInputRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        SearchInputRecord.fromStructure = function(str) {
            return new SearchInputRecord(new SearchInputRecord.RecordClass({
                searchInputAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        SearchInputRecord._isAnonymousRecord = true;
        SearchInputRecord.UniqueId = "18a02b4d-f1c3-c8a9-ddeb-2129145f50f3";
        SearchInputRecord.init();
        return SearchInputRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.SearchInputRecord = SearchInputRecord;

});
define("Connect2_Assemble_MUI.model$SubscribedRegionItemRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_Assemble_MUI.model", "APIDomain_Directory_IS.model$SubscribedRegionItemRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS"], function(exports, OutSystems, APIDomain_Directory_ISModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var SubscribedRegionItemRecord = (function(_super) {
        __extends(SubscribedRegionItemRecord, _super);

        function SubscribedRegionItemRecord(defaults) {
            _super.apply(this, arguments);
        }
        SubscribedRegionItemRecord.attributesToDeclare = function() {
            return [
                this.attr("SubscribedRegionItem", "subscribedRegionItemAttr", "SubscribedRegionItem", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.SubscribedRegionItemRec());
                }, true, APIDomain_Directory_ISModel.SubscribedRegionItemRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        SubscribedRegionItemRecord.fromStructure = function(str) {
            return new SubscribedRegionItemRecord(new SubscribedRegionItemRecord.RecordClass({
                subscribedRegionItemAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        SubscribedRegionItemRecord._isAnonymousRecord = true;
        SubscribedRegionItemRecord.UniqueId = "1921ca2f-d18a-3f6d-6b70-956d59ff6afa";
        SubscribedRegionItemRecord.init();
        return SubscribedRegionItemRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.SubscribedRegionItemRecord = SubscribedRegionItemRecord;

});
define("Connect2_Assemble_MUI.model$AssembleAttendeeSubdivisionBooleanRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_CS.model", "Connect2_Assemble_MUI.model", "Connect2_Assemble_CS.model$AssembleAttendeeSubdivisionRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_Assemble_CS"], function(exports, OutSystems, Connect2_Assemble_CSModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var AssembleAttendeeSubdivisionBooleanRecord = (function(_super) {
        __extends(AssembleAttendeeSubdivisionBooleanRecord, _super);

        function AssembleAttendeeSubdivisionBooleanRecord(defaults) {
            _super.apply(this, arguments);
        }
        AssembleAttendeeSubdivisionBooleanRecord.attributesToDeclare = function() {
            return [
                this.attr("AssembleAttendeeSubdivision", "assembleAttendeeSubdivisionAttr", "AssembleAttendeeSubdivision", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_Assemble_CSModel.AssembleAttendeeSubdivisionRec());
                }, true, Connect2_Assemble_CSModel.AssembleAttendeeSubdivisionRec),
                this.attr("IsSelected", "isSelectedAttr", "IsSelected", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, true)
            ].concat(_super.attributesToDeclare.call(this));
        };
        AssembleAttendeeSubdivisionBooleanRecord._isAnonymousRecord = true;
        AssembleAttendeeSubdivisionBooleanRecord.UniqueId = "f1f5843b-ab47-c66e-e7b8-b02b49890134";
        AssembleAttendeeSubdivisionBooleanRecord.init();
        return AssembleAttendeeSubdivisionBooleanRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.AssembleAttendeeSubdivisionBooleanRecord = AssembleAttendeeSubdivisionBooleanRecord;

});
define("Connect2_Assemble_MUI.model$AssembleAttendeeSubdivisionBooleanRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$AssembleAttendeeSubdivisionBooleanRecord"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var AssembleAttendeeSubdivisionBooleanRecordList = (function(_super) {
        __extends(AssembleAttendeeSubdivisionBooleanRecordList, _super);

        function AssembleAttendeeSubdivisionBooleanRecordList(defaults) {
            _super.apply(this, arguments);
        }
        AssembleAttendeeSubdivisionBooleanRecordList.itemType = Connect2_Assemble_MUIModel.AssembleAttendeeSubdivisionBooleanRecord;
        return AssembleAttendeeSubdivisionBooleanRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.AssembleAttendeeSubdivisionBooleanRecordList = AssembleAttendeeSubdivisionBooleanRecordList;

});
define("Connect2_Assemble_MUI.model$HouseholdCarouselPreloadingList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_Assemble_MUI.model", "Connect2_LegacyShared.model$HouseholdCarouselPreloadingRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_LegacyShared"], function(exports, OutSystems, Connect2_LegacySharedModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var HouseholdCarouselPreloadingList = (function(_super) {
        __extends(HouseholdCarouselPreloadingList, _super);

        function HouseholdCarouselPreloadingList(defaults) {
            _super.apply(this, arguments);
        }
        HouseholdCarouselPreloadingList.itemType = Connect2_LegacySharedModel.HouseholdCarouselPreloadingRec;
        return HouseholdCarouselPreloadingList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.HouseholdCarouselPreloadingList = HouseholdCarouselPreloadingList;

});
define("Connect2_Assemble_MUI.model$ExtrasList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_AppLauncherPlugin.model", "Connect2_Assemble_MUI.model", "Connect2_AppLauncherPlugin.model$ExtrasRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_AppLauncherPlugin"], function(exports, OutSystems, Connect2_AppLauncherPluginModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var ExtrasList = (function(_super) {
        __extends(ExtrasList, _super);

        function ExtrasList(defaults) {
            _super.apply(this, arguments);
        }
        ExtrasList.itemType = Connect2_AppLauncherPluginModel.ExtrasRec;
        return ExtrasList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.ExtrasList = ExtrasList;

});
define("Connect2_Assemble_MUI.model$ColorList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_Assemble_MUI.model", "OutSystemsUI_2_23.model$ColorRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$OutSystemsUI_2_23"], function(exports, OutSystems, OutSystemsUI_2_23Model, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var ColorList = (function(_super) {
        __extends(ColorList, _super);

        function ColorList(defaults) {
            _super.apply(this, arguments);
        }
        ColorList.itemType = OutSystemsUI_2_23Model.ColorRec;
        return ColorList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.ColorList = ColorList;

});
define("Connect2_Assemble_MUI.model$CacheControl_UserInformationRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "Connect2_Assemble_MUI.model", "UBTConnect_Utils.model$CacheControl_UserInformationRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$UBTConnect_Utils"], function(exports, OutSystems, UBTConnect_UtilsModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var CacheControl_UserInformationRecord = (function(_super) {
        __extends(CacheControl_UserInformationRecord, _super);

        function CacheControl_UserInformationRecord(defaults) {
            _super.apply(this, arguments);
        }
        CacheControl_UserInformationRecord.attributesToDeclare = function() {
            return [
                this.attr("CacheControl_UserInformation", "cacheControl_UserInformationAttr", "CacheControl_UserInformation", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnect_UtilsModel.CacheControl_UserInformationRec());
                }, true, UBTConnect_UtilsModel.CacheControl_UserInformationRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        CacheControl_UserInformationRecord.fromStructure = function(str) {
            return new CacheControl_UserInformationRecord(new CacheControl_UserInformationRecord.RecordClass({
                cacheControl_UserInformationAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        CacheControl_UserInformationRecord._isAnonymousRecord = true;
        CacheControl_UserInformationRecord.UniqueId = "1d61dbf6-1790-a772-b9fd-36988f57a53a";
        CacheControl_UserInformationRecord.init();
        return CacheControl_UserInformationRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.CacheControl_UserInformationRecord = CacheControl_UserInformationRecord;

});
define("Connect2_Assemble_MUI.model$LocalityDetailsList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_CS.model", "Connect2_Assemble_MUI.model", "Connect2_Assemble_CS.model$LocalityDetailsRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_Assemble_CS"], function(exports, OutSystems, Connect2_Assemble_CSModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var LocalityDetailsList = (function(_super) {
        __extends(LocalityDetailsList, _super);

        function LocalityDetailsList(defaults) {
            _super.apply(this, arguments);
        }
        LocalityDetailsList.itemType = Connect2_Assemble_CSModel.LocalityDetailsRec;
        return LocalityDetailsList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.LocalityDetailsList = LocalityDetailsList;

});
define("Connect2_Assemble_MUI.model$", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var LongIntegerList = (function(_super) {
        __extends(LongIntegerList, _super);

        function LongIntegerList(defaults) {
            _super.apply(this, arguments);
        }
        LongIntegerList.itemType = OS.DataTypes.DataTypes.LongInteger;
        return LongIntegerList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.LongIntegerList = LongIntegerList;

});
define("Connect2_Assemble_MUI.model$AssembleEventRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_CS.model", "Connect2_Assemble_MUI.model", "Connect2_Assemble_CS.model$AssembleEventRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_Assemble_CS"], function(exports, OutSystems, Connect2_Assemble_CSModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var AssembleEventRecord = (function(_super) {
        __extends(AssembleEventRecord, _super);

        function AssembleEventRecord(defaults) {
            _super.apply(this, arguments);
        }
        AssembleEventRecord.attributesToDeclare = function() {
            return [
                this.attr("AssembleEvent", "assembleEventAttr", "AssembleEvent", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_Assemble_CSModel.AssembleEventRec());
                }, true, Connect2_Assemble_CSModel.AssembleEventRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        AssembleEventRecord.fromStructure = function(str) {
            return new AssembleEventRecord(new AssembleEventRecord.RecordClass({
                assembleEventAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        AssembleEventRecord._isAnonymousRecord = true;
        AssembleEventRecord.UniqueId = "d0c047b9-d0cb-bc96-76eb-8d30e3657ce3";
        AssembleEventRecord.init();
        return AssembleEventRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.AssembleEventRecord = AssembleEventRecord;

});
define("Connect2_Assemble_MUI.model$AssembleEventRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$AssembleEventRecord"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var AssembleEventRecordList = (function(_super) {
        __extends(AssembleEventRecordList, _super);

        function AssembleEventRecordList(defaults) {
            _super.apply(this, arguments);
        }
        AssembleEventRecordList.itemType = Connect2_Assemble_MUIModel.AssembleEventRecord;
        return AssembleEventRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.AssembleEventRecordList = AssembleEventRecordList;

});
define("Connect2_Assemble_MUI.model$DetailItemRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_Assemble_MUI.model", "APIDomain_Directory_IS.model$DetailItemRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS"], function(exports, OutSystems, APIDomain_Directory_ISModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var DetailItemRecord = (function(_super) {
        __extends(DetailItemRecord, _super);

        function DetailItemRecord(defaults) {
            _super.apply(this, arguments);
        }
        DetailItemRecord.attributesToDeclare = function() {
            return [
                this.attr("DetailItem", "detailItemAttr", "DetailItem", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.DetailItemRec());
                }, true, APIDomain_Directory_ISModel.DetailItemRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        DetailItemRecord.fromStructure = function(str) {
            return new DetailItemRecord(new DetailItemRecord.RecordClass({
                detailItemAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        DetailItemRecord._isAnonymousRecord = true;
        DetailItemRecord.UniqueId = "21139b78-aae6-baae-441d-3bf905184a63";
        DetailItemRecord.init();
        return DetailItemRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.DetailItemRecord = DetailItemRecord;

});
define("Connect2_Assemble_MUI.model$DetailItemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$DetailItemRecord"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var DetailItemRecordList = (function(_super) {
        __extends(DetailItemRecordList, _super);

        function DetailItemRecordList(defaults) {
            _super.apply(this, arguments);
        }
        DetailItemRecordList.itemType = Connect2_Assemble_MUIModel.DetailItemRecord;
        return DetailItemRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.DetailItemRecordList = DetailItemRecordList;

});
define("Connect2_Assemble_MUI.model$AssembleAttendeeGuest2List", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_Assemble_MUI.model", "Connect2_LegacyShared.model$AssembleAttendeeGuestRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_LegacyShared"], function(exports, OutSystems, Connect2_LegacySharedModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var AssembleAttendeeGuest2List = (function(_super) {
        __extends(AssembleAttendeeGuest2List, _super);

        function AssembleAttendeeGuest2List(defaults) {
            _super.apply(this, arguments);
        }
        AssembleAttendeeGuest2List.itemType = Connect2_LegacySharedModel.AssembleAttendeeGuestRec;
        return AssembleAttendeeGuest2List;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.AssembleAttendeeGuest2List = AssembleAttendeeGuest2List;

});
define("Connect2_Assemble_MUI.model$SpaceList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_Assemble_MUI.model", "OutSystemsUI_2_23.model$SpaceRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$OutSystemsUI_2_23"], function(exports, OutSystems, OutSystemsUI_2_23Model, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var SpaceList = (function(_super) {
        __extends(SpaceList, _super);

        function SpaceList(defaults) {
            _super.apply(this, arguments);
        }
        SpaceList.itemType = OutSystemsUI_2_23Model.SpaceRec;
        return SpaceList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.SpaceList = SpaceList;

});
define("Connect2_Assemble_MUI.model$UI_ContactByMessage_WrapperDataRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "Connect2_Assemble_MUI.model", "UBTConnect_Utils.model$UI_ContactByMessage_WrapperDataRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$UBTConnect_Utils"], function(exports, OutSystems, UBTConnect_UtilsModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var UI_ContactByMessage_WrapperDataRecord = (function(_super) {
        __extends(UI_ContactByMessage_WrapperDataRecord, _super);

        function UI_ContactByMessage_WrapperDataRecord(defaults) {
            _super.apply(this, arguments);
        }
        UI_ContactByMessage_WrapperDataRecord.attributesToDeclare = function() {
            return [
                this.attr("UI_ContactByMessage_WrapperData", "uI_ContactByMessage_WrapperDataAttr", "UI_ContactByMessage_WrapperData", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnect_UtilsModel.UI_ContactByMessage_WrapperDataRec());
                }, true, UBTConnect_UtilsModel.UI_ContactByMessage_WrapperDataRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        UI_ContactByMessage_WrapperDataRecord.fromStructure = function(str) {
            return new UI_ContactByMessage_WrapperDataRecord(new UI_ContactByMessage_WrapperDataRecord.RecordClass({
                uI_ContactByMessage_WrapperDataAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        UI_ContactByMessage_WrapperDataRecord._isAnonymousRecord = true;
        UI_ContactByMessage_WrapperDataRecord.UniqueId = "21be8117-2933-5bb8-1879-1c0f1eefd126";
        UI_ContactByMessage_WrapperDataRecord.init();
        return UI_ContactByMessage_WrapperDataRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.UI_ContactByMessage_WrapperDataRecord = UI_ContactByMessage_WrapperDataRecord;

});
define("Connect2_Assemble_MUI.model$Custom_AddressRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_Assemble_MUI.model", "APIDomain_Directory_IS.model$Custom_AddressRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS"], function(exports, OutSystems, APIDomain_Directory_ISModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var Custom_AddressRecord = (function(_super) {
        __extends(Custom_AddressRecord, _super);

        function Custom_AddressRecord(defaults) {
            _super.apply(this, arguments);
        }
        Custom_AddressRecord.attributesToDeclare = function() {
            return [
                this.attr("Custom_Address", "custom_AddressAttr", "Custom_Address", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.Custom_AddressRec());
                }, true, APIDomain_Directory_ISModel.Custom_AddressRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        Custom_AddressRecord.fromStructure = function(str) {
            return new Custom_AddressRecord(new Custom_AddressRecord.RecordClass({
                custom_AddressAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        Custom_AddressRecord._isAnonymousRecord = true;
        Custom_AddressRecord.UniqueId = "c7712318-c19f-7cf6-b839-3659abfc25e9";
        Custom_AddressRecord.init();
        return Custom_AddressRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.Custom_AddressRecord = Custom_AddressRecord;

});
define("Connect2_Assemble_MUI.model$Custom_AddressRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$Custom_AddressRecord"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var Custom_AddressRecordList = (function(_super) {
        __extends(Custom_AddressRecordList, _super);

        function Custom_AddressRecordList(defaults) {
            _super.apply(this, arguments);
        }
        Custom_AddressRecordList.itemType = Connect2_Assemble_MUIModel.Custom_AddressRecord;
        return Custom_AddressRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.Custom_AddressRecordList = Custom_AddressRecordList;

});
define("Connect2_Assemble_MUI.model$Directory_UserCurrent_VisibilityRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_Assemble_MUI.model", "APIDomain_Directory_IS.model$Directory_UserCurrent_VisibilityRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS"], function(exports, OutSystems, APIDomain_Directory_ISModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var Directory_UserCurrent_VisibilityRecord = (function(_super) {
        __extends(Directory_UserCurrent_VisibilityRecord, _super);

        function Directory_UserCurrent_VisibilityRecord(defaults) {
            _super.apply(this, arguments);
        }
        Directory_UserCurrent_VisibilityRecord.attributesToDeclare = function() {
            return [
                this.attr("Directory_UserCurrent_Visibility", "directory_UserCurrent_VisibilityAttr", "Directory_UserCurrent_Visibility", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.Directory_UserCurrent_VisibilityRec());
                }, true, APIDomain_Directory_ISModel.Directory_UserCurrent_VisibilityRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        Directory_UserCurrent_VisibilityRecord.fromStructure = function(str) {
            return new Directory_UserCurrent_VisibilityRecord(new Directory_UserCurrent_VisibilityRecord.RecordClass({
                directory_UserCurrent_VisibilityAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        Directory_UserCurrent_VisibilityRecord._isAnonymousRecord = true;
        Directory_UserCurrent_VisibilityRecord.UniqueId = "7b7e67a5-bdc1-86e0-8fe8-24efe525a0f9";
        Directory_UserCurrent_VisibilityRecord.init();
        return Directory_UserCurrent_VisibilityRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.Directory_UserCurrent_VisibilityRecord = Directory_UserCurrent_VisibilityRecord;

});
define("Connect2_Assemble_MUI.model$Directory_UserCurrent_VisibilityRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$Directory_UserCurrent_VisibilityRecord"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var Directory_UserCurrent_VisibilityRecordList = (function(_super) {
        __extends(Directory_UserCurrent_VisibilityRecordList, _super);

        function Directory_UserCurrent_VisibilityRecordList(defaults) {
            _super.apply(this, arguments);
        }
        Directory_UserCurrent_VisibilityRecordList.itemType = Connect2_Assemble_MUIModel.Directory_UserCurrent_VisibilityRecord;
        return Directory_UserCurrent_VisibilityRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.Directory_UserCurrent_VisibilityRecordList = Directory_UserCurrent_VisibilityRecordList;

});
define("Connect2_Assemble_MUI.model$ContactPopupDataRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "Connect2_Assemble_MUI.model", "UBTConnect_Utils.model$ContactPopupDataRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$UBTConnect_Utils"], function(exports, OutSystems, UBTConnect_UtilsModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var ContactPopupDataRecord = (function(_super) {
        __extends(ContactPopupDataRecord, _super);

        function ContactPopupDataRecord(defaults) {
            _super.apply(this, arguments);
        }
        ContactPopupDataRecord.attributesToDeclare = function() {
            return [
                this.attr("ContactPopupData", "contactPopupDataAttr", "ContactPopupData", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnect_UtilsModel.ContactPopupDataRec());
                }, true, UBTConnect_UtilsModel.ContactPopupDataRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        ContactPopupDataRecord.fromStructure = function(str) {
            return new ContactPopupDataRecord(new ContactPopupDataRecord.RecordClass({
                contactPopupDataAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        ContactPopupDataRecord._isAnonymousRecord = true;
        ContactPopupDataRecord.UniqueId = "38712f2e-67bf-7c5e-1879-85b5070e6b5f";
        ContactPopupDataRecord.init();
        return ContactPopupDataRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.ContactPopupDataRecord = ContactPopupDataRecord;

});
define("Connect2_Assemble_MUI.model$ContactPopupDataRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$ContactPopupDataRecord"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var ContactPopupDataRecordList = (function(_super) {
        __extends(ContactPopupDataRecordList, _super);

        function ContactPopupDataRecordList(defaults) {
            _super.apply(this, arguments);
        }
        ContactPopupDataRecordList.itemType = Connect2_Assemble_MUIModel.ContactPopupDataRecord;
        return ContactPopupDataRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.ContactPopupDataRecordList = ContactPopupDataRecordList;

});
define("Connect2_Assemble_MUI.model$SubdivisionExtendedRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_Assemble_MUI.model", "Connect2_LegacyShared.model$SubdivisionExtendedRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_LegacyShared"], function(exports, OutSystems, Connect2_LegacySharedModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var SubdivisionExtendedRecord = (function(_super) {
        __extends(SubdivisionExtendedRecord, _super);

        function SubdivisionExtendedRecord(defaults) {
            _super.apply(this, arguments);
        }
        SubdivisionExtendedRecord.attributesToDeclare = function() {
            return [
                this.attr("SubdivisionExtended", "subdivisionExtendedAttr", "SubdivisionExtended", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.SubdivisionExtendedRec());
                }, true, Connect2_LegacySharedModel.SubdivisionExtendedRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        SubdivisionExtendedRecord.fromStructure = function(str) {
            return new SubdivisionExtendedRecord(new SubdivisionExtendedRecord.RecordClass({
                subdivisionExtendedAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        SubdivisionExtendedRecord._isAnonymousRecord = true;
        SubdivisionExtendedRecord.UniqueId = "248396bb-674f-a463-d311-7d043b091947";
        SubdivisionExtendedRecord.init();
        return SubdivisionExtendedRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.SubdivisionExtendedRecord = SubdivisionExtendedRecord;

});
define("Connect2_Assemble_MUI.model$TextLongIntegerRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var TextLongIntegerRecord = (function(_super) {
        __extends(TextLongIntegerRecord, _super);

        function TextLongIntegerRecord(defaults) {
            _super.apply(this, arguments);
        }
        TextLongIntegerRecord.attributesToDeclare = function() {
            return [
                this.attr("TimezoneLabel", "timezoneLabelAttr", "TimezoneLabel", false, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, true),
                this.attr("OffsetSeconds", "offsetSecondsAttr", "OffsetSeconds", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                    return OS.DataTypes.LongInteger.defaultValue;
                }, true)
            ].concat(_super.attributesToDeclare.call(this));
        };
        TextLongIntegerRecord._isAnonymousRecord = true;
        TextLongIntegerRecord.UniqueId = "24c7dc51-9320-4edd-35bf-d37dfc23bb54";
        TextLongIntegerRecord.init();
        return TextLongIntegerRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.TextLongIntegerRecord = TextLongIntegerRecord;

});
define("Connect2_Assemble_MUI.model$LauncherParametersRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_AppLauncherPlugin.model", "Connect2_Assemble_MUI.model", "Connect2_AppLauncherPlugin.model$LauncherParametersRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_AppLauncherPlugin"], function(exports, OutSystems, Connect2_AppLauncherPluginModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var LauncherParametersRecord = (function(_super) {
        __extends(LauncherParametersRecord, _super);

        function LauncherParametersRecord(defaults) {
            _super.apply(this, arguments);
        }
        LauncherParametersRecord.attributesToDeclare = function() {
            return [
                this.attr("LauncherParameters", "launcherParametersAttr", "LauncherParameters", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_AppLauncherPluginModel.LauncherParametersRec());
                }, true, Connect2_AppLauncherPluginModel.LauncherParametersRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        LauncherParametersRecord.fromStructure = function(str) {
            return new LauncherParametersRecord(new LauncherParametersRecord.RecordClass({
                launcherParametersAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        LauncherParametersRecord._isAnonymousRecord = true;
        LauncherParametersRecord.UniqueId = "24d22ada-ffc3-dbcc-79b2-1df4fa733ab0";
        LauncherParametersRecord.init();
        return LauncherParametersRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.LauncherParametersRecord = LauncherParametersRecord;

});
define("Connect2_Assemble_MUI.model$DetailItemList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_Assemble_MUI.model", "APIDomain_Directory_IS.model$DetailItemRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS"], function(exports, OutSystems, APIDomain_Directory_ISModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var DetailItemList = (function(_super) {
        __extends(DetailItemList, _super);

        function DetailItemList(defaults) {
            _super.apply(this, arguments);
        }
        DetailItemList.itemType = APIDomain_Directory_ISModel.DetailItemRec;
        return DetailItemList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.DetailItemList = DetailItemList;

});
define("Connect2_Assemble_MUI.model$MemberRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_Assemble_MUI.model", "APIDomain_Directory_IS.model$MemberRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS"], function(exports, OutSystems, APIDomain_Directory_ISModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var MemberRecord = (function(_super) {
        __extends(MemberRecord, _super);

        function MemberRecord(defaults) {
            _super.apply(this, arguments);
        }
        MemberRecord.attributesToDeclare = function() {
            return [
                this.attr("Member", "memberAttr", "Member", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.MemberRec());
                }, true, APIDomain_Directory_ISModel.MemberRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        MemberRecord.fromStructure = function(str) {
            return new MemberRecord(new MemberRecord.RecordClass({
                memberAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        MemberRecord._isAnonymousRecord = true;
        MemberRecord.UniqueId = "e80aede2-6a26-4d55-fb4a-cc4adf664f2d";
        MemberRecord.init();
        return MemberRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.MemberRecord = MemberRecord;

});
define("Connect2_Assemble_MUI.model$MemberRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$MemberRecord"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var MemberRecordList = (function(_super) {
        __extends(MemberRecordList, _super);

        function MemberRecordList(defaults) {
            _super.apply(this, arguments);
        }
        MemberRecordList.itemType = Connect2_Assemble_MUIModel.MemberRecord;
        return MemberRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.MemberRecordList = MemberRecordList;

});
define("Connect2_Assemble_MUI.model$LocalityDetailsBooleanRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$LocalityDetailsBooleanRecord"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var LocalityDetailsBooleanRecordList = (function(_super) {
        __extends(LocalityDetailsBooleanRecordList, _super);

        function LocalityDetailsBooleanRecordList(defaults) {
            _super.apply(this, arguments);
        }
        LocalityDetailsBooleanRecordList.itemType = Connect2_Assemble_MUIModel.LocalityDetailsBooleanRecord;
        return LocalityDetailsBooleanRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.LocalityDetailsBooleanRecordList = LocalityDetailsBooleanRecordList;

});
define("Connect2_Assemble_MUI.model$SubdivisionsItemRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_Assemble_MUI.model", "Connect2_LegacyShared.model$SubdivisionsItemRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_LegacyShared"], function(exports, OutSystems, Connect2_LegacySharedModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var SubdivisionsItemRecord = (function(_super) {
        __extends(SubdivisionsItemRecord, _super);

        function SubdivisionsItemRecord(defaults) {
            _super.apply(this, arguments);
        }
        SubdivisionsItemRecord.attributesToDeclare = function() {
            return [
                this.attr("SubdivisionsItem", "subdivisionsItemAttr", "SubdivisionsItem", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.SubdivisionsItemRec());
                }, true, Connect2_LegacySharedModel.SubdivisionsItemRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        SubdivisionsItemRecord.fromStructure = function(str) {
            return new SubdivisionsItemRecord(new SubdivisionsItemRecord.RecordClass({
                subdivisionsItemAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        SubdivisionsItemRecord._isAnonymousRecord = true;
        SubdivisionsItemRecord.UniqueId = "28142865-55f2-2039-3ef9-4835efca9c66";
        SubdivisionsItemRecord.init();
        return SubdivisionsItemRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.SubdivisionsItemRecord = SubdivisionsItemRecord;

});
define("Connect2_Assemble_MUI.model$SubscribedRegionItemList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_Assemble_MUI.model", "APIDomain_Directory_IS.model$SubscribedRegionItemRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS"], function(exports, OutSystems, APIDomain_Directory_ISModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var SubscribedRegionItemList = (function(_super) {
        __extends(SubscribedRegionItemList, _super);

        function SubscribedRegionItemList(defaults) {
            _super.apply(this, arguments);
        }
        SubscribedRegionItemList.itemType = APIDomain_Directory_ISModel.SubscribedRegionItemRec;
        return SubscribedRegionItemList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.SubscribedRegionItemList = SubscribedRegionItemList;

});
define("Connect2_Assemble_MUI.model$CountryList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_Assemble_MUI.model", "APIDomain_Directory_IS.model$CountryRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS"], function(exports, OutSystems, APIDomain_Directory_ISModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var CountryList = (function(_super) {
        __extends(CountryList, _super);

        function CountryList(defaults) {
            _super.apply(this, arguments);
        }
        CountryList.itemType = APIDomain_Directory_ISModel.CountryRec;
        return CountryList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.CountryList = CountryList;

});
define("Connect2_Assemble_MUI.model$SubscriptionRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_Assemble_MUI.model", "APIDomain_Directory_IS.model$SubscriptionRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS"], function(exports, OutSystems, APIDomain_Directory_ISModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var SubscriptionRecord = (function(_super) {
        __extends(SubscriptionRecord, _super);

        function SubscriptionRecord(defaults) {
            _super.apply(this, arguments);
        }
        SubscriptionRecord.attributesToDeclare = function() {
            return [
                this.attr("Subscription", "subscriptionAttr", "Subscription", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.SubscriptionRec());
                }, true, APIDomain_Directory_ISModel.SubscriptionRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        SubscriptionRecord.fromStructure = function(str) {
            return new SubscriptionRecord(new SubscriptionRecord.RecordClass({
                subscriptionAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        SubscriptionRecord._isAnonymousRecord = true;
        SubscriptionRecord.UniqueId = "f464bee9-2374-b4c4-ec54-7f38fcbc899d";
        SubscriptionRecord.init();
        return SubscriptionRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.SubscriptionRecord = SubscriptionRecord;

});
define("Connect2_Assemble_MUI.model$SubscriptionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$SubscriptionRecord"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var SubscriptionRecordList = (function(_super) {
        __extends(SubscriptionRecordList, _super);

        function SubscriptionRecordList(defaults) {
            _super.apply(this, arguments);
        }
        SubscriptionRecordList.itemType = Connect2_Assemble_MUIModel.SubscriptionRecord;
        return SubscriptionRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.SubscriptionRecordList = SubscriptionRecordList;

});
define("Connect2_Assemble_MUI.model$TagRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_Assemble_MUI.model", "Connect2_LegacyShared.model$TagRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_LegacyShared"], function(exports, OutSystems, Connect2_LegacySharedModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var TagRecord = (function(_super) {
        __extends(TagRecord, _super);

        function TagRecord(defaults) {
            _super.apply(this, arguments);
        }
        TagRecord.attributesToDeclare = function() {
            return [
                this.attr("Tag", "tagAttr", "Tag", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.TagRec());
                }, true, Connect2_LegacySharedModel.TagRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        TagRecord.fromStructure = function(str) {
            return new TagRecord(new TagRecord.RecordClass({
                tagAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        TagRecord._isAnonymousRecord = true;
        TagRecord.UniqueId = "8af9eea0-f56d-3d06-32fd-7ee9ac8f14fe";
        TagRecord.init();
        return TagRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.TagRecord = TagRecord;

});
define("Connect2_Assemble_MUI.model$TagRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$TagRecord"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var TagRecordList = (function(_super) {
        __extends(TagRecordList, _super);

        function TagRecordList(defaults) {
            _super.apply(this, arguments);
        }
        TagRecordList.itemType = Connect2_Assemble_MUIModel.TagRecord;
        return TagRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.TagRecordList = TagRecordList;

});
define("Connect2_Assemble_MUI.model$Directory_CDNRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_Assemble_MUI.model", "APIDomain_Directory_IS.model$Directory_CDNRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS"], function(exports, OutSystems, APIDomain_Directory_ISModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var Directory_CDNRecord = (function(_super) {
        __extends(Directory_CDNRecord, _super);

        function Directory_CDNRecord(defaults) {
            _super.apply(this, arguments);
        }
        Directory_CDNRecord.attributesToDeclare = function() {
            return [
                this.attr("Directory_CDN", "directory_CDNAttr", "Directory_CDN", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.Directory_CDNRec());
                }, true, APIDomain_Directory_ISModel.Directory_CDNRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        Directory_CDNRecord.fromStructure = function(str) {
            return new Directory_CDNRecord(new Directory_CDNRecord.RecordClass({
                directory_CDNAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        Directory_CDNRecord._isAnonymousRecord = true;
        Directory_CDNRecord.UniqueId = "ec2fcf22-c891-8e93-ddf0-a8ea0d45dbd4";
        Directory_CDNRecord.init();
        return Directory_CDNRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.Directory_CDNRecord = Directory_CDNRecord;

});
define("Connect2_Assemble_MUI.model$Directory_CDNRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$Directory_CDNRecord"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var Directory_CDNRecordList = (function(_super) {
        __extends(Directory_CDNRecordList, _super);

        function Directory_CDNRecordList(defaults) {
            _super.apply(this, arguments);
        }
        Directory_CDNRecordList.itemType = Connect2_Assemble_MUIModel.Directory_CDNRecord;
        return Directory_CDNRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.Directory_CDNRecordList = Directory_CDNRecordList;

});
define("Connect2_Assemble_MUI.model$ErrorMessageRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_Assemble_MUI.model", "OutSystemsUI_2_23.model$ErrorMessageRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$OutSystemsUI_2_23"], function(exports, OutSystems, OutSystemsUI_2_23Model, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var ErrorMessageRecord = (function(_super) {
        __extends(ErrorMessageRecord, _super);

        function ErrorMessageRecord(defaults) {
            _super.apply(this, arguments);
        }
        ErrorMessageRecord.attributesToDeclare = function() {
            return [
                this.attr("ErrorMessage", "errorMessageAttr", "ErrorMessage", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.ErrorMessageRec());
                }, true, OutSystemsUI_2_23Model.ErrorMessageRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        ErrorMessageRecord.fromStructure = function(str) {
            return new ErrorMessageRecord(new ErrorMessageRecord.RecordClass({
                errorMessageAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        ErrorMessageRecord._isAnonymousRecord = true;
        ErrorMessageRecord.UniqueId = "a82b48d6-38f9-1d56-04e3-2c713e6d5950";
        ErrorMessageRecord.init();
        return ErrorMessageRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.ErrorMessageRecord = ErrorMessageRecord;

});
define("Connect2_Assemble_MUI.model$ErrorMessageRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$ErrorMessageRecord"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var ErrorMessageRecordList = (function(_super) {
        __extends(ErrorMessageRecordList, _super);

        function ErrorMessageRecordList(defaults) {
            _super.apply(this, arguments);
        }
        ErrorMessageRecordList.itemType = Connect2_Assemble_MUIModel.ErrorMessageRecord;
        return ErrorMessageRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.ErrorMessageRecordList = ErrorMessageRecordList;

});
define("Connect2_Assemble_MUI.model$SpouseList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_Assemble_MUI.model", "APIDomain_Directory_IS.model$SpouseRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS"], function(exports, OutSystems, APIDomain_Directory_ISModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var SpouseList = (function(_super) {
        __extends(SpouseList, _super);

        function SpouseList(defaults) {
            _super.apply(this, arguments);
        }
        SpouseList.itemType = APIDomain_Directory_ISModel.SpouseRec;
        return SpouseList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.SpouseList = SpouseList;

});
define("Connect2_Assemble_MUI.model$ErrorMessageList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_Assemble_MUI.model", "OutSystemsUI_2_23.model$ErrorMessageRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$OutSystemsUI_2_23"], function(exports, OutSystems, OutSystemsUI_2_23Model, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var ErrorMessageList = (function(_super) {
        __extends(ErrorMessageList, _super);

        function ErrorMessageList(defaults) {
            _super.apply(this, arguments);
        }
        ErrorMessageList.itemType = OutSystemsUI_2_23Model.ErrorMessageRec;
        return ErrorMessageList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.ErrorMessageList = ErrorMessageList;

});
define("Connect2_Assemble_MUI.model$SubdivisionsItemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$SubdivisionsItemRecord"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var SubdivisionsItemRecordList = (function(_super) {
        __extends(SubdivisionsItemRecordList, _super);

        function SubdivisionsItemRecordList(defaults) {
            _super.apply(this, arguments);
        }
        SubdivisionsItemRecordList.itemType = Connect2_Assemble_MUIModel.SubdivisionsItemRecord;
        return SubdivisionsItemRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.SubdivisionsItemRecordList = SubdivisionsItemRecordList;

});
define("Connect2_Assemble_MUI.model$TextLongIntegerRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$TextLongIntegerRecord"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var TextLongIntegerRecordList = (function(_super) {
        __extends(TextLongIntegerRecordList, _super);

        function TextLongIntegerRecordList(defaults) {
            _super.apply(this, arguments);
        }
        TextLongIntegerRecordList.itemType = Connect2_Assemble_MUIModel.TextLongIntegerRecord;
        return TextLongIntegerRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.TextLongIntegerRecordList = TextLongIntegerRecordList;

});
define("Connect2_Assemble_MUI.model$Directory_UserCurrent_GeographyList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_Assemble_MUI.model", "APIDomain_Directory_IS.model$Directory_UserCurrent_GeographyRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS"], function(exports, OutSystems, APIDomain_Directory_ISModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var Directory_UserCurrent_GeographyList = (function(_super) {
        __extends(Directory_UserCurrent_GeographyList, _super);

        function Directory_UserCurrent_GeographyList(defaults) {
            _super.apply(this, arguments);
        }
        Directory_UserCurrent_GeographyList.itemType = APIDomain_Directory_ISModel.Directory_UserCurrent_GeographyRec;
        return Directory_UserCurrent_GeographyList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.Directory_UserCurrent_GeographyList = Directory_UserCurrent_GeographyList;

});
define("Connect2_Assemble_MUI.model$RoleItemRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_Assemble_MUI.model", "APIDomain_Directory_IS.model$RoleItemRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS"], function(exports, OutSystems, APIDomain_Directory_ISModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var RoleItemRecord = (function(_super) {
        __extends(RoleItemRecord, _super);

        function RoleItemRecord(defaults) {
            _super.apply(this, arguments);
        }
        RoleItemRecord.attributesToDeclare = function() {
            return [
                this.attr("RoleItem", "roleItemAttr", "RoleItem", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.RoleItemRec());
                }, true, APIDomain_Directory_ISModel.RoleItemRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        RoleItemRecord.fromStructure = function(str) {
            return new RoleItemRecord(new RoleItemRecord.RecordClass({
                roleItemAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        RoleItemRecord._isAnonymousRecord = true;
        RoleItemRecord.UniqueId = "980a77b3-9862-6d8b-f223-f418a93bde51";
        RoleItemRecord.init();
        return RoleItemRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.RoleItemRecord = RoleItemRecord;

});
define("Connect2_Assemble_MUI.model$RoleItemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$RoleItemRecord"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var RoleItemRecordList = (function(_super) {
        __extends(RoleItemRecordList, _super);

        function RoleItemRecordList(defaults) {
            _super.apply(this, arguments);
        }
        RoleItemRecordList.itemType = Connect2_Assemble_MUIModel.RoleItemRecord;
        return RoleItemRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.RoleItemRecordList = RoleItemRecordList;

});
define("Connect2_Assemble_MUI.model$LocalityDetailsRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_CS.model", "Connect2_Assemble_MUI.model", "Connect2_Assemble_CS.model$LocalityDetailsRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_Assemble_CS"], function(exports, OutSystems, Connect2_Assemble_CSModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var LocalityDetailsRecord = (function(_super) {
        __extends(LocalityDetailsRecord, _super);

        function LocalityDetailsRecord(defaults) {
            _super.apply(this, arguments);
        }
        LocalityDetailsRecord.attributesToDeclare = function() {
            return [
                this.attr("LocalityDetails", "localityDetailsAttr", "LocalityDetails", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_Assemble_CSModel.LocalityDetailsRec());
                }, true, Connect2_Assemble_CSModel.LocalityDetailsRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        LocalityDetailsRecord.fromStructure = function(str) {
            return new LocalityDetailsRecord(new LocalityDetailsRecord.RecordClass({
                localityDetailsAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        LocalityDetailsRecord._isAnonymousRecord = true;
        LocalityDetailsRecord.UniqueId = "81e455a4-46ea-a72a-c455-e159f6733d43";
        LocalityDetailsRecord.init();
        return LocalityDetailsRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.LocalityDetailsRecord = LocalityDetailsRecord;

});
define("Connect2_Assemble_MUI.model$LocalityDetailsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$LocalityDetailsRecord"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var LocalityDetailsRecordList = (function(_super) {
        __extends(LocalityDetailsRecordList, _super);

        function LocalityDetailsRecordList(defaults) {
            _super.apply(this, arguments);
        }
        LocalityDetailsRecordList.itemType = Connect2_Assemble_MUIModel.LocalityDetailsRecord;
        return LocalityDetailsRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.LocalityDetailsRecordList = LocalityDetailsRecordList;

});
define("Connect2_Assemble_MUI.model$PhotoTagList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_Assemble_MUI.model", "APIDomain_Directory_IS.model$PhotoTagRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS"], function(exports, OutSystems, APIDomain_Directory_ISModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var PhotoTagList = (function(_super) {
        __extends(PhotoTagList, _super);

        function PhotoTagList(defaults) {
            _super.apply(this, arguments);
        }
        PhotoTagList.itemType = APIDomain_Directory_ISModel.PhotoTagRec;
        return PhotoTagList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.PhotoTagList = PhotoTagList;

});
define("Connect2_Assemble_MUI.model$AssembleEventTypeList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_CS.model", "Connect2_Assemble_MUI.model", "Connect2_Assemble_CS.model$AssembleEventTypeRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_Assemble_CS"], function(exports, OutSystems, Connect2_Assemble_CSModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var AssembleEventTypeList = (function(_super) {
        __extends(AssembleEventTypeList, _super);

        function AssembleEventTypeList(defaults) {
            _super.apply(this, arguments);
        }
        AssembleEventTypeList.itemType = Connect2_Assemble_CSModel.AssembleEventTypeRec;
        return AssembleEventTypeList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.AssembleEventTypeList = AssembleEventTypeList;

});
define("Connect2_Assemble_MUI.model$SubdivisionRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_Assemble_MUI.model", "APIDomain_Directory_IS.model$SubdivisionRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS"], function(exports, OutSystems, APIDomain_Directory_ISModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var SubdivisionRecord = (function(_super) {
        __extends(SubdivisionRecord, _super);

        function SubdivisionRecord(defaults) {
            _super.apply(this, arguments);
        }
        SubdivisionRecord.attributesToDeclare = function() {
            return [
                this.attr("Subdivision", "subdivisionAttr", "Subdivision", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.SubdivisionRec());
                }, true, APIDomain_Directory_ISModel.SubdivisionRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        SubdivisionRecord.fromStructure = function(str) {
            return new SubdivisionRecord(new SubdivisionRecord.RecordClass({
                subdivisionAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        SubdivisionRecord._isAnonymousRecord = true;
        SubdivisionRecord.UniqueId = "326a465d-a961-7533-0340-7b556923bc4e";
        SubdivisionRecord.init();
        return SubdivisionRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.SubdivisionRecord = SubdivisionRecord;

});
define("Connect2_Assemble_MUI.model$MemoryCacheResultRecord", ["exports", "OutSystems/ClientRuntime/Main", "MemoryClientCache.model", "Connect2_Assemble_MUI.model", "MemoryClientCache.model$MemoryCacheResultRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$MemoryClientCache"], function(exports, OutSystems, MemoryClientCacheModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var MemoryCacheResultRecord = (function(_super) {
        __extends(MemoryCacheResultRecord, _super);

        function MemoryCacheResultRecord(defaults) {
            _super.apply(this, arguments);
        }
        MemoryCacheResultRecord.attributesToDeclare = function() {
            return [
                this.attr("MemoryCacheResult", "memoryCacheResultAttr", "MemoryCacheResult", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new MemoryClientCacheModel.MemoryCacheResultRec());
                }, true, MemoryClientCacheModel.MemoryCacheResultRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        MemoryCacheResultRecord.fromStructure = function(str) {
            return new MemoryCacheResultRecord(new MemoryCacheResultRecord.RecordClass({
                memoryCacheResultAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        MemoryCacheResultRecord._isAnonymousRecord = true;
        MemoryCacheResultRecord.UniqueId = "9c1b9e17-cba5-5973-e862-979a81a4f983";
        MemoryCacheResultRecord.init();
        return MemoryCacheResultRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.MemoryCacheResultRecord = MemoryCacheResultRecord;

});
define("Connect2_Assemble_MUI.model$MemoryCacheResultRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$MemoryCacheResultRecord"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var MemoryCacheResultRecordList = (function(_super) {
        __extends(MemoryCacheResultRecordList, _super);

        function MemoryCacheResultRecordList(defaults) {
            _super.apply(this, arguments);
        }
        MemoryCacheResultRecordList.itemType = Connect2_Assemble_MUIModel.MemoryCacheResultRecord;
        return MemoryCacheResultRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.MemoryCacheResultRecordList = MemoryCacheResultRecordList;

});
define("Connect2_Assemble_MUI.model$Connect_Entity2Record", ["exports", "OutSystems/ClientRuntime/Main", "Connect_CommonEntities_DB.model", "Connect2_Assemble_MUI.model", "Connect_CommonEntities_DB.model$Connect_EntityRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect_CommonEntities_DB"], function(exports, OutSystems, Connect_CommonEntities_DBModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var Connect_Entity2Record = (function(_super) {
        __extends(Connect_Entity2Record, _super);

        function Connect_Entity2Record(defaults) {
            _super.apply(this, arguments);
        }
        Connect_Entity2Record.attributesToDeclare = function() {
            return [
                this.attr("Connect_Entity", "connect_EntityAttr", "Connect_Entity2", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect_CommonEntities_DBModel.Connect_EntityRec());
                }, true, Connect_CommonEntities_DBModel.Connect_EntityRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        Connect_Entity2Record.fromStructure = function(str) {
            return new Connect_Entity2Record(new Connect_Entity2Record.RecordClass({
                connect_EntityAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        Connect_Entity2Record._isAnonymousRecord = true;
        Connect_Entity2Record.UniqueId = "3514ce6c-0a23-b49d-ae55-1b6dcb4baa9d";
        Connect_Entity2Record.init();
        return Connect_Entity2Record;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.Connect_Entity2Record = Connect_Entity2Record;

});
define("Connect2_Assemble_MUI.model$UI_ContactByMessage_WrapperDataList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "Connect2_Assemble_MUI.model", "UBTConnect_Utils.model$UI_ContactByMessage_WrapperDataRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$UBTConnect_Utils"], function(exports, OutSystems, UBTConnect_UtilsModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var UI_ContactByMessage_WrapperDataList = (function(_super) {
        __extends(UI_ContactByMessage_WrapperDataList, _super);

        function UI_ContactByMessage_WrapperDataList(defaults) {
            _super.apply(this, arguments);
        }
        UI_ContactByMessage_WrapperDataList.itemType = UBTConnect_UtilsModel.UI_ContactByMessage_WrapperDataRec;
        return UI_ContactByMessage_WrapperDataList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.UI_ContactByMessage_WrapperDataList = UI_ContactByMessage_WrapperDataList;

});
define("Connect2_Assemble_MUI.model$Directory_UserCurrent_MemberList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_Assemble_MUI.model", "APIDomain_Directory_IS.model$Directory_UserCurrent_MemberRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS"], function(exports, OutSystems, APIDomain_Directory_ISModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var Directory_UserCurrent_MemberList = (function(_super) {
        __extends(Directory_UserCurrent_MemberList, _super);

        function Directory_UserCurrent_MemberList(defaults) {
            _super.apply(this, arguments);
        }
        Directory_UserCurrent_MemberList.itemType = APIDomain_Directory_ISModel.Directory_UserCurrent_MemberRec;
        return Directory_UserCurrent_MemberList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.Directory_UserCurrent_MemberList = Directory_UserCurrent_MemberList;

});
define("Connect2_Assemble_MUI.model$ApplicationEvents_DirectoryList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_Assemble_MUI.model", "Connect2_LegacyShared.model$ApplicationEvents_DirectoryRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_LegacyShared"], function(exports, OutSystems, Connect2_LegacySharedModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var ApplicationEvents_DirectoryList = (function(_super) {
        __extends(ApplicationEvents_DirectoryList, _super);

        function ApplicationEvents_DirectoryList(defaults) {
            _super.apply(this, arguments);
        }
        ApplicationEvents_DirectoryList.itemType = Connect2_LegacySharedModel.ApplicationEvents_DirectoryRec;
        return ApplicationEvents_DirectoryList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.ApplicationEvents_DirectoryList = ApplicationEvents_DirectoryList;

});
define("Connect2_Assemble_MUI.model$GetLocalityStatisticsResponseRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_Assemble_MUI.model", "APIDomain_Directory_IS.model$GetLocalityStatisticsResponseRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS"], function(exports, OutSystems, APIDomain_Directory_ISModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var GetLocalityStatisticsResponseRecord = (function(_super) {
        __extends(GetLocalityStatisticsResponseRecord, _super);

        function GetLocalityStatisticsResponseRecord(defaults) {
            _super.apply(this, arguments);
        }
        GetLocalityStatisticsResponseRecord.attributesToDeclare = function() {
            return [
                this.attr("GetLocalityStatisticsResponse", "getLocalityStatisticsResponseAttr", "GetLocalityStatisticsResponse", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.GetLocalityStatisticsResponseRec());
                }, true, APIDomain_Directory_ISModel.GetLocalityStatisticsResponseRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        GetLocalityStatisticsResponseRecord.fromStructure = function(str) {
            return new GetLocalityStatisticsResponseRecord(new GetLocalityStatisticsResponseRecord.RecordClass({
                getLocalityStatisticsResponseAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        GetLocalityStatisticsResponseRecord._isAnonymousRecord = true;
        GetLocalityStatisticsResponseRecord.UniqueId = "377ab4ef-a0d2-cdcd-0077-9cbf3aecb441";
        GetLocalityStatisticsResponseRecord.init();
        return GetLocalityStatisticsResponseRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.GetLocalityStatisticsResponseRecord = GetLocalityStatisticsResponseRecord;

});
define("Connect2_Assemble_MUI.model$GetCountriesBySubscriptionIdRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_Assemble_MUI.model", "APIDomain_Directory_IS.model$GetCountriesBySubscriptionIdRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS"], function(exports, OutSystems, APIDomain_Directory_ISModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var GetCountriesBySubscriptionIdRecord = (function(_super) {
        __extends(GetCountriesBySubscriptionIdRecord, _super);

        function GetCountriesBySubscriptionIdRecord(defaults) {
            _super.apply(this, arguments);
        }
        GetCountriesBySubscriptionIdRecord.attributesToDeclare = function() {
            return [
                this.attr("GetCountriesBySubscriptionId", "getCountriesBySubscriptionIdAttr", "GetCountriesBySubscriptionId", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.GetCountriesBySubscriptionIdRec());
                }, true, APIDomain_Directory_ISModel.GetCountriesBySubscriptionIdRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        GetCountriesBySubscriptionIdRecord.fromStructure = function(str) {
            return new GetCountriesBySubscriptionIdRecord(new GetCountriesBySubscriptionIdRecord.RecordClass({
                getCountriesBySubscriptionIdAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        GetCountriesBySubscriptionIdRecord._isAnonymousRecord = true;
        GetCountriesBySubscriptionIdRecord.UniqueId = "59d6e874-9908-ef8c-164d-9869b8c4df71";
        GetCountriesBySubscriptionIdRecord.init();
        return GetCountriesBySubscriptionIdRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.GetCountriesBySubscriptionIdRecord = GetCountriesBySubscriptionIdRecord;

});
define("Connect2_Assemble_MUI.model$GetCountriesBySubscriptionIdRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$GetCountriesBySubscriptionIdRecord"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var GetCountriesBySubscriptionIdRecordList = (function(_super) {
        __extends(GetCountriesBySubscriptionIdRecordList, _super);

        function GetCountriesBySubscriptionIdRecordList(defaults) {
            _super.apply(this, arguments);
        }
        GetCountriesBySubscriptionIdRecordList.itemType = Connect2_Assemble_MUIModel.GetCountriesBySubscriptionIdRecord;
        return GetCountriesBySubscriptionIdRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.GetCountriesBySubscriptionIdRecordList = GetCountriesBySubscriptionIdRecordList;

});
define("Connect2_Assemble_MUI.model$GetLocalityStatisticsResponseList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_Assemble_MUI.model", "APIDomain_Directory_IS.model$GetLocalityStatisticsResponseRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS"], function(exports, OutSystems, APIDomain_Directory_ISModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var GetLocalityStatisticsResponseList = (function(_super) {
        __extends(GetLocalityStatisticsResponseList, _super);

        function GetLocalityStatisticsResponseList(defaults) {
            _super.apply(this, arguments);
        }
        GetLocalityStatisticsResponseList.itemType = APIDomain_Directory_ISModel.GetLocalityStatisticsResponseRec;
        return GetLocalityStatisticsResponseList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.GetLocalityStatisticsResponseList = GetLocalityStatisticsResponseList;

});
define("Connect2_Assemble_MUI.model$HouseholdCarouselPreloadingRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_Assemble_MUI.model", "Connect2_LegacyShared.model$HouseholdCarouselPreloadingRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_LegacyShared"], function(exports, OutSystems, Connect2_LegacySharedModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var HouseholdCarouselPreloadingRecord = (function(_super) {
        __extends(HouseholdCarouselPreloadingRecord, _super);

        function HouseholdCarouselPreloadingRecord(defaults) {
            _super.apply(this, arguments);
        }
        HouseholdCarouselPreloadingRecord.attributesToDeclare = function() {
            return [
                this.attr("HouseholdCarouselPreloading", "householdCarouselPreloadingAttr", "HouseholdCarouselPreloading", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.HouseholdCarouselPreloadingRec());
                }, true, Connect2_LegacySharedModel.HouseholdCarouselPreloadingRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        HouseholdCarouselPreloadingRecord.fromStructure = function(str) {
            return new HouseholdCarouselPreloadingRecord(new HouseholdCarouselPreloadingRecord.RecordClass({
                householdCarouselPreloadingAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        HouseholdCarouselPreloadingRecord._isAnonymousRecord = true;
        HouseholdCarouselPreloadingRecord.UniqueId = "e8b31aec-a385-e7d7-39ea-50dc6bde6880";
        HouseholdCarouselPreloadingRecord.init();
        return HouseholdCarouselPreloadingRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.HouseholdCarouselPreloadingRecord = HouseholdCarouselPreloadingRecord;

});
define("Connect2_Assemble_MUI.model$HouseholdCarouselPreloadingRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$HouseholdCarouselPreloadingRecord"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var HouseholdCarouselPreloadingRecordList = (function(_super) {
        __extends(HouseholdCarouselPreloadingRecordList, _super);

        function HouseholdCarouselPreloadingRecordList(defaults) {
            _super.apply(this, arguments);
        }
        HouseholdCarouselPreloadingRecordList.itemType = Connect2_Assemble_MUIModel.HouseholdCarouselPreloadingRecord;
        return HouseholdCarouselPreloadingRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.HouseholdCarouselPreloadingRecordList = HouseholdCarouselPreloadingRecordList;

});
define("Connect2_Assemble_MUI.model$AssembleAttendeeGuestRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$AssembleAttendeeGuestRecord"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var AssembleAttendeeGuestRecordList = (function(_super) {
        __extends(AssembleAttendeeGuestRecordList, _super);

        function AssembleAttendeeGuestRecordList(defaults) {
            _super.apply(this, arguments);
        }
        AssembleAttendeeGuestRecordList.itemType = Connect2_Assemble_MUIModel.AssembleAttendeeGuestRecord;
        return AssembleAttendeeGuestRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.AssembleAttendeeGuestRecordList = AssembleAttendeeGuestRecordList;

});
define("Connect2_Assemble_MUI.model$LocalityHouseholdsResultItemList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_Assemble_MUI.model", "APIDomain_Directory_IS.model$LocalityHouseholdsResultItemRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS"], function(exports, OutSystems, APIDomain_Directory_ISModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var LocalityHouseholdsResultItemList = (function(_super) {
        __extends(LocalityHouseholdsResultItemList, _super);

        function LocalityHouseholdsResultItemList(defaults) {
            _super.apply(this, arguments);
        }
        LocalityHouseholdsResultItemList.itemType = APIDomain_Directory_ISModel.LocalityHouseholdsResultItemRec;
        return LocalityHouseholdsResultItemList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.LocalityHouseholdsResultItemList = LocalityHouseholdsResultItemList;

});
define("Connect2_Assemble_MUI.model$SpaceRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_Assemble_MUI.model", "OutSystemsUI_2_23.model$SpaceRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$OutSystemsUI_2_23"], function(exports, OutSystems, OutSystemsUI_2_23Model, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var SpaceRecord = (function(_super) {
        __extends(SpaceRecord, _super);

        function SpaceRecord(defaults) {
            _super.apply(this, arguments);
        }
        SpaceRecord.attributesToDeclare = function() {
            return [
                this.attr("Space", "spaceAttr", "Space", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.SpaceRec());
                }, true, OutSystemsUI_2_23Model.SpaceRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        SpaceRecord.fromStructure = function(str) {
            return new SpaceRecord(new SpaceRecord.RecordClass({
                spaceAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        SpaceRecord._isAnonymousRecord = true;
        SpaceRecord.UniqueId = "de422bca-c75e-499b-55e3-ff48fdab55f6";
        SpaceRecord.init();
        return SpaceRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.SpaceRecord = SpaceRecord;

});
define("Connect2_Assemble_MUI.model$SpaceRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$SpaceRecord"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var SpaceRecordList = (function(_super) {
        __extends(SpaceRecordList, _super);

        function SpaceRecordList(defaults) {
            _super.apply(this, arguments);
        }
        SpaceRecordList.itemType = Connect2_Assemble_MUIModel.SpaceRecord;
        return SpaceRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.SpaceRecordList = SpaceRecordList;

});
define("Connect2_Assemble_MUI.model$BookmarkItemList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_IS.model", "Connect2_Assemble_MUI.model", "Connect2_MyBookmarks_IS.model$BookmarkItemRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_MyBookmarks_IS"], function(exports, OutSystems, Connect2_MyBookmarks_ISModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var BookmarkItemList = (function(_super) {
        __extends(BookmarkItemList, _super);

        function BookmarkItemList(defaults) {
            _super.apply(this, arguments);
        }
        BookmarkItemList.itemType = Connect2_MyBookmarks_ISModel.BookmarkItemRec;
        return BookmarkItemList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.BookmarkItemList = BookmarkItemList;

});
define("Connect2_Assemble_MUI.model$AssembleEventTypeBooleanRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_CS.model", "Connect2_Assemble_MUI.model", "Connect2_Assemble_CS.model$AssembleEventTypeRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_Assemble_CS"], function(exports, OutSystems, Connect2_Assemble_CSModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var AssembleEventTypeBooleanRecord = (function(_super) {
        __extends(AssembleEventTypeBooleanRecord, _super);

        function AssembleEventTypeBooleanRecord(defaults) {
            _super.apply(this, arguments);
        }
        AssembleEventTypeBooleanRecord.attributesToDeclare = function() {
            return [
                this.attr("AssembleEventType", "assembleEventTypeAttr", "AssembleEventType", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_Assemble_CSModel.AssembleEventTypeRec());
                }, true, Connect2_Assemble_CSModel.AssembleEventTypeRec),
                this.attr("IsSelected", "isSelectedAttr", "IsSelected", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, true)
            ].concat(_super.attributesToDeclare.call(this));
        };
        AssembleEventTypeBooleanRecord._isAnonymousRecord = true;
        AssembleEventTypeBooleanRecord.UniqueId = "40c6abc9-bd04-62c0-7466-b3f07df92ada";
        AssembleEventTypeBooleanRecord.init();
        return AssembleEventTypeBooleanRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.AssembleEventTypeBooleanRecord = AssembleEventTypeBooleanRecord;

});
define("Connect2_Assemble_MUI.model$ExtrasRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_AppLauncherPlugin.model", "Connect2_Assemble_MUI.model", "Connect2_AppLauncherPlugin.model$ExtrasRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_AppLauncherPlugin"], function(exports, OutSystems, Connect2_AppLauncherPluginModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var ExtrasRecord = (function(_super) {
        __extends(ExtrasRecord, _super);

        function ExtrasRecord(defaults) {
            _super.apply(this, arguments);
        }
        ExtrasRecord.attributesToDeclare = function() {
            return [
                this.attr("Extras", "extrasAttr", "Extras", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_AppLauncherPluginModel.ExtrasRec());
                }, true, Connect2_AppLauncherPluginModel.ExtrasRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        ExtrasRecord.fromStructure = function(str) {
            return new ExtrasRecord(new ExtrasRecord.RecordClass({
                extrasAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        ExtrasRecord._isAnonymousRecord = true;
        ExtrasRecord.UniqueId = "a4a8de75-51f0-c077-7174-e0cca79bda91";
        ExtrasRecord.init();
        return ExtrasRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.ExtrasRecord = ExtrasRecord;

});
define("Connect2_Assemble_MUI.model$ExtrasRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$ExtrasRecord"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var ExtrasRecordList = (function(_super) {
        __extends(ExtrasRecordList, _super);

        function ExtrasRecordList(defaults) {
            _super.apply(this, arguments);
        }
        ExtrasRecordList.itemType = Connect2_Assemble_MUIModel.ExtrasRecord;
        return ExtrasRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.ExtrasRecordList = ExtrasRecordList;

});
define("Connect2_Assemble_MUI.model$Directory_UserCurrentList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_Assemble_MUI.model", "APIDomain_Directory_IS.model$Directory_UserCurrentRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS"], function(exports, OutSystems, APIDomain_Directory_ISModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var Directory_UserCurrentList = (function(_super) {
        __extends(Directory_UserCurrentList, _super);

        function Directory_UserCurrentList(defaults) {
            _super.apply(this, arguments);
        }
        Directory_UserCurrentList.itemType = APIDomain_Directory_ISModel.Directory_UserCurrentRec;
        return Directory_UserCurrentList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.Directory_UserCurrentList = Directory_UserCurrentList;

});
define("Connect2_Assemble_MUI.model$OpeningHourItemList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_Assemble_MUI.model", "APIDomain_Directory_IS.model$OpeningHourItemRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS"], function(exports, OutSystems, APIDomain_Directory_ISModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var OpeningHourItemList = (function(_super) {
        __extends(OpeningHourItemList, _super);

        function OpeningHourItemList(defaults) {
            _super.apply(this, arguments);
        }
        OpeningHourItemList.itemType = APIDomain_Directory_ISModel.OpeningHourItemRec;
        return OpeningHourItemList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.OpeningHourItemList = OpeningHourItemList;

});
define("Connect2_Assemble_MUI.model$BusinessLinkItemList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_Assemble_MUI.model", "APIDomain_Directory_IS.model$BusinessLinkItemRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS"], function(exports, OutSystems, APIDomain_Directory_ISModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var BusinessLinkItemList = (function(_super) {
        __extends(BusinessLinkItemList, _super);

        function BusinessLinkItemList(defaults) {
            _super.apply(this, arguments);
        }
        BusinessLinkItemList.itemType = APIDomain_Directory_ISModel.BusinessLinkItemRec;
        return BusinessLinkItemList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.BusinessLinkItemList = BusinessLinkItemList;

});
define("Connect2_Assemble_MUI.model$LocalityCommunityBusinessRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_Assemble_MUI.model", "APIDomain_Directory_IS.model$LocalityCommunityBusinessRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS"], function(exports, OutSystems, APIDomain_Directory_ISModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var LocalityCommunityBusinessRecord = (function(_super) {
        __extends(LocalityCommunityBusinessRecord, _super);

        function LocalityCommunityBusinessRecord(defaults) {
            _super.apply(this, arguments);
        }
        LocalityCommunityBusinessRecord.attributesToDeclare = function() {
            return [
                this.attr("LocalityCommunityBusiness", "localityCommunityBusinessAttr", "LocalityCommunityBusiness", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.LocalityCommunityBusinessRec());
                }, true, APIDomain_Directory_ISModel.LocalityCommunityBusinessRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        LocalityCommunityBusinessRecord.fromStructure = function(str) {
            return new LocalityCommunityBusinessRecord(new LocalityCommunityBusinessRecord.RecordClass({
                localityCommunityBusinessAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        LocalityCommunityBusinessRecord._isAnonymousRecord = true;
        LocalityCommunityBusinessRecord.UniqueId = "98cc55f1-9ff6-a6be-7673-76b0be00be87";
        LocalityCommunityBusinessRecord.init();
        return LocalityCommunityBusinessRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.LocalityCommunityBusinessRecord = LocalityCommunityBusinessRecord;

});
define("Connect2_Assemble_MUI.model$LocalityCommunityBusinessRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$LocalityCommunityBusinessRecord"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var LocalityCommunityBusinessRecordList = (function(_super) {
        __extends(LocalityCommunityBusinessRecordList, _super);

        function LocalityCommunityBusinessRecordList(defaults) {
            _super.apply(this, arguments);
        }
        LocalityCommunityBusinessRecordList.itemType = Connect2_Assemble_MUIModel.LocalityCommunityBusinessRecord;
        return LocalityCommunityBusinessRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.LocalityCommunityBusinessRecordList = LocalityCommunityBusinessRecordList;

});
define("Connect2_Assemble_MUI.model$TimezoneRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_Assemble_MUI.model", "APIDomain_Directory_IS.model$TimezoneRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS"], function(exports, OutSystems, APIDomain_Directory_ISModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var TimezoneRecord = (function(_super) {
        __extends(TimezoneRecord, _super);

        function TimezoneRecord(defaults) {
            _super.apply(this, arguments);
        }
        TimezoneRecord.attributesToDeclare = function() {
            return [
                this.attr("Timezone", "timezoneAttr", "Timezone", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.TimezoneRec());
                }, true, APIDomain_Directory_ISModel.TimezoneRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        TimezoneRecord.fromStructure = function(str) {
            return new TimezoneRecord(new TimezoneRecord.RecordClass({
                timezoneAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        TimezoneRecord._isAnonymousRecord = true;
        TimezoneRecord.UniqueId = "7c1edbba-89c5-49b8-58cc-f493f35403b0";
        TimezoneRecord.init();
        return TimezoneRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.TimezoneRecord = TimezoneRecord;

});
define("Connect2_Assemble_MUI.model$TimezoneRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$TimezoneRecord"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var TimezoneRecordList = (function(_super) {
        __extends(TimezoneRecordList, _super);

        function TimezoneRecordList(defaults) {
            _super.apply(this, arguments);
        }
        TimezoneRecordList.itemType = Connect2_Assemble_MUIModel.TimezoneRecord;
        return TimezoneRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.TimezoneRecordList = TimezoneRecordList;

});
define("Connect2_Assemble_MUI.model$PhotoRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_Assemble_MUI.model", "APIDomain_Directory_IS.model$PhotoRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS"], function(exports, OutSystems, APIDomain_Directory_ISModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var PhotoRecord = (function(_super) {
        __extends(PhotoRecord, _super);

        function PhotoRecord(defaults) {
            _super.apply(this, arguments);
        }
        PhotoRecord.attributesToDeclare = function() {
            return [
                this.attr("Photo", "photoAttr", "Photo", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.PhotoRec());
                }, true, APIDomain_Directory_ISModel.PhotoRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        PhotoRecord.fromStructure = function(str) {
            return new PhotoRecord(new PhotoRecord.RecordClass({
                photoAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        PhotoRecord._isAnonymousRecord = true;
        PhotoRecord.UniqueId = "485e1dda-923d-9b35-8659-101d2907ffd5";
        PhotoRecord.init();
        return PhotoRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.PhotoRecord = PhotoRecord;

});
define("Connect2_Assemble_MUI.model$HallPhoto2Record", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_Assemble_MUI.model", "APIDomain_Directory_IS.model$HallPhotoRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS"], function(exports, OutSystems, APIDomain_Directory_ISModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var HallPhoto2Record = (function(_super) {
        __extends(HallPhoto2Record, _super);

        function HallPhoto2Record(defaults) {
            _super.apply(this, arguments);
        }
        HallPhoto2Record.attributesToDeclare = function() {
            return [
                this.attr("HallPhoto", "hallPhotoAttr", "HallPhoto2", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.HallPhotoRec());
                }, true, APIDomain_Directory_ISModel.HallPhotoRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        HallPhoto2Record.fromStructure = function(str) {
            return new HallPhoto2Record(new HallPhoto2Record.RecordClass({
                hallPhotoAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        HallPhoto2Record._isAnonymousRecord = true;
        HallPhoto2Record.UniqueId = "87a95065-ca87-86bc-4360-fc71fc41409c";
        HallPhoto2Record.init();
        return HallPhoto2Record;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.HallPhoto2Record = HallPhoto2Record;

});
define("Connect2_Assemble_MUI.model$HallPhoto2RecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$HallPhoto2Record"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var HallPhoto2RecordList = (function(_super) {
        __extends(HallPhoto2RecordList, _super);

        function HallPhoto2RecordList(defaults) {
            _super.apply(this, arguments);
        }
        HallPhoto2RecordList.itemType = Connect2_Assemble_MUIModel.HallPhoto2Record;
        return HallPhoto2RecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.HallPhoto2RecordList = HallPhoto2RecordList;

});
define("Connect2_Assemble_MUI.model$SubdivisionExtendedList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_Assemble_MUI.model", "Connect2_LegacyShared.model$SubdivisionExtendedRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_LegacyShared"], function(exports, OutSystems, Connect2_LegacySharedModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var SubdivisionExtendedList = (function(_super) {
        __extends(SubdivisionExtendedList, _super);

        function SubdivisionExtendedList(defaults) {
            _super.apply(this, arguments);
        }
        SubdivisionExtendedList.itemType = Connect2_LegacySharedModel.SubdivisionExtendedRec;
        return SubdivisionExtendedList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.SubdivisionExtendedList = SubdivisionExtendedList;

});
define("Connect2_Assemble_MUI.model$MemberList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_Assemble_MUI.model", "APIDomain_Directory_IS.model$MemberRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS"], function(exports, OutSystems, APIDomain_Directory_ISModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var MemberList = (function(_super) {
        __extends(MemberList, _super);

        function MemberList(defaults) {
            _super.apply(this, arguments);
        }
        MemberList.itemType = APIDomain_Directory_ISModel.MemberRec;
        return MemberList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.MemberList = MemberList;

});
define("Connect2_Assemble_MUI.model$OpeningHourItemRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_Assemble_MUI.model", "APIDomain_Directory_IS.model$OpeningHourItemRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS"], function(exports, OutSystems, APIDomain_Directory_ISModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var OpeningHourItemRecord = (function(_super) {
        __extends(OpeningHourItemRecord, _super);

        function OpeningHourItemRecord(defaults) {
            _super.apply(this, arguments);
        }
        OpeningHourItemRecord.attributesToDeclare = function() {
            return [
                this.attr("OpeningHourItem", "openingHourItemAttr", "OpeningHourItem", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.OpeningHourItemRec());
                }, true, APIDomain_Directory_ISModel.OpeningHourItemRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        OpeningHourItemRecord.fromStructure = function(str) {
            return new OpeningHourItemRecord(new OpeningHourItemRecord.RecordClass({
                openingHourItemAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        OpeningHourItemRecord._isAnonymousRecord = true;
        OpeningHourItemRecord.UniqueId = "4c08221b-cd76-ea64-bfea-6bcc5dae54fa";
        OpeningHourItemRecord.init();
        return OpeningHourItemRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.OpeningHourItemRecord = OpeningHourItemRecord;

});
define("Connect2_Assemble_MUI.model$CDNRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_Assemble_MUI.model", "APIDomain_Directory_IS.model$CDNRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS"], function(exports, OutSystems, APIDomain_Directory_ISModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var CDNRecord = (function(_super) {
        __extends(CDNRecord, _super);

        function CDNRecord(defaults) {
            _super.apply(this, arguments);
        }
        CDNRecord.attributesToDeclare = function() {
            return [
                this.attr("CDN", "cDNAttr", "CDN", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.CDNRec());
                }, true, APIDomain_Directory_ISModel.CDNRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        CDNRecord.fromStructure = function(str) {
            return new CDNRecord(new CDNRecord.RecordClass({
                cDNAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        CDNRecord._isAnonymousRecord = true;
        CDNRecord.UniqueId = "4dcfb80a-1587-3f18-b937-819347fc346c";
        CDNRecord.init();
        return CDNRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.CDNRecord = CDNRecord;

});
define("Connect2_Assemble_MUI.model$UI_ShareableObject_GenericRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Sharing_CS.model", "Connect2_Assemble_MUI.model", "Connect2_Sharing_CS.model$UI_ShareableObject_GenericRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_Sharing_CS"], function(exports, OutSystems, Connect2_Sharing_CSModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var UI_ShareableObject_GenericRecord = (function(_super) {
        __extends(UI_ShareableObject_GenericRecord, _super);

        function UI_ShareableObject_GenericRecord(defaults) {
            _super.apply(this, arguments);
        }
        UI_ShareableObject_GenericRecord.attributesToDeclare = function() {
            return [
                this.attr("UI_ShareableObject_Generic", "uI_ShareableObject_GenericAttr", "UI_ShareableObject_Generic", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_Sharing_CSModel.UI_ShareableObject_GenericRec());
                }, true, Connect2_Sharing_CSModel.UI_ShareableObject_GenericRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        UI_ShareableObject_GenericRecord.fromStructure = function(str) {
            return new UI_ShareableObject_GenericRecord(new UI_ShareableObject_GenericRecord.RecordClass({
                uI_ShareableObject_GenericAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        UI_ShareableObject_GenericRecord._isAnonymousRecord = true;
        UI_ShareableObject_GenericRecord.UniqueId = "7e260f1d-2814-5f62-7edf-596a63247ddd";
        UI_ShareableObject_GenericRecord.init();
        return UI_ShareableObject_GenericRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.UI_ShareableObject_GenericRecord = UI_ShareableObject_GenericRecord;

});
define("Connect2_Assemble_MUI.model$UI_ShareableObject_GenericRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$UI_ShareableObject_GenericRecord"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var UI_ShareableObject_GenericRecordList = (function(_super) {
        __extends(UI_ShareableObject_GenericRecordList, _super);

        function UI_ShareableObject_GenericRecordList(defaults) {
            _super.apply(this, arguments);
        }
        UI_ShareableObject_GenericRecordList.itemType = Connect2_Assemble_MUIModel.UI_ShareableObject_GenericRecord;
        return UI_ShareableObject_GenericRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.UI_ShareableObject_GenericRecordList = UI_ShareableObject_GenericRecordList;

});
define("Connect2_Assemble_MUI.model$TagList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_Assemble_MUI.model", "Connect2_LegacyShared.model$TagRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_LegacyShared"], function(exports, OutSystems, Connect2_LegacySharedModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var TagList = (function(_super) {
        __extends(TagList, _super);

        function TagList(defaults) {
            _super.apply(this, arguments);
        }
        TagList.itemType = Connect2_LegacySharedModel.TagRec;
        return TagList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.TagList = TagList;

});
define("Connect2_Assemble_MUI.model$MapNavigationRedirectList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_Assemble_MUI.model", "Connect2_LegacyShared.model$MapNavigationRedirectRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_LegacyShared"], function(exports, OutSystems, Connect2_LegacySharedModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var MapNavigationRedirectList = (function(_super) {
        __extends(MapNavigationRedirectList, _super);

        function MapNavigationRedirectList(defaults) {
            _super.apply(this, arguments);
        }
        MapNavigationRedirectList.itemType = Connect2_LegacySharedModel.MapNavigationRedirectRec;
        return MapNavigationRedirectList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.MapNavigationRedirectList = MapNavigationRedirectList;

});
define("Connect2_Assemble_MUI.model$LocalityHouseholdsItemList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_Assemble_MUI.model", "Connect2_LegacyShared.model$LocalityHouseholdsItemRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_LegacyShared"], function(exports, OutSystems, Connect2_LegacySharedModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var LocalityHouseholdsItemList = (function(_super) {
        __extends(LocalityHouseholdsItemList, _super);

        function LocalityHouseholdsItemList(defaults) {
            _super.apply(this, arguments);
        }
        LocalityHouseholdsItemList.itemType = Connect2_LegacySharedModel.LocalityHouseholdsItemRec;
        return LocalityHouseholdsItemList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.LocalityHouseholdsItemList = LocalityHouseholdsItemList;

});
define("Connect2_Assemble_MUI.model$SubdivisionsItemList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_Assemble_MUI.model", "Connect2_LegacyShared.model$SubdivisionsItemRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_LegacyShared"], function(exports, OutSystems, Connect2_LegacySharedModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var SubdivisionsItemList = (function(_super) {
        __extends(SubdivisionsItemList, _super);

        function SubdivisionsItemList(defaults) {
            _super.apply(this, arguments);
        }
        SubdivisionsItemList.itemType = Connect2_LegacySharedModel.SubdivisionsItemRec;
        return SubdivisionsItemList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.SubdivisionsItemList = SubdivisionsItemList;

});
define("Connect2_Assemble_MUI.model$InterchangeItemList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_Assemble_MUI.model", "Connect2_LegacyShared.model$InterchangeItemRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_LegacyShared"], function(exports, OutSystems, Connect2_LegacySharedModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var InterchangeItemList = (function(_super) {
        __extends(InterchangeItemList, _super);

        function InterchangeItemList(defaults) {
            _super.apply(this, arguments);
        }
        InterchangeItemList.itemType = Connect2_LegacySharedModel.InterchangeItemRec;
        return InterchangeItemList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.InterchangeItemList = InterchangeItemList;

});
define("Connect2_Assemble_MUI.model$LocalityCommunityBusinessList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_Assemble_MUI.model", "APIDomain_Directory_IS.model$LocalityCommunityBusinessRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS"], function(exports, OutSystems, APIDomain_Directory_ISModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var LocalityCommunityBusinessList = (function(_super) {
        __extends(LocalityCommunityBusinessList, _super);

        function LocalityCommunityBusinessList(defaults) {
            _super.apply(this, arguments);
        }
        LocalityCommunityBusinessList.itemType = APIDomain_Directory_ISModel.LocalityCommunityBusinessRec;
        return LocalityCommunityBusinessList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.LocalityCommunityBusinessList = LocalityCommunityBusinessList;

});
define("Connect2_Assemble_MUI.model$TextRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var TextRecord = (function(_super) {
        __extends(TextRecord, _super);

        function TextRecord(defaults) {
            _super.apply(this, arguments);
        }
        TextRecord.attributesToDeclare = function() {
            return [
                this.attr("Type", "typeAttr", "Type", false, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, true)
            ].concat(_super.attributesToDeclare.call(this));
        };
        TextRecord.fromStructure = function(str) {
            return new TextRecord(new TextRecord.RecordClass({
                typeAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        TextRecord._isAnonymousRecord = true;
        TextRecord.UniqueId = "b8a6ca99-92f4-9590-1043-ce69fd76d10e";
        TextRecord.init();
        return TextRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.TextRecord = TextRecord;

});
define("Connect2_Assemble_MUI.model$TextRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$TextRecord"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var TextRecordList = (function(_super) {
        __extends(TextRecordList, _super);

        function TextRecordList(defaults) {
            _super.apply(this, arguments);
        }
        TextRecordList.itemType = Connect2_Assemble_MUIModel.TextRecord;
        return TextRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.TextRecordList = TextRecordList;

});
define("Connect2_Assemble_MUI.model$SubdivisionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$SubdivisionRecord"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var SubdivisionRecordList = (function(_super) {
        __extends(SubdivisionRecordList, _super);

        function SubdivisionRecordList(defaults) {
            _super.apply(this, arguments);
        }
        SubdivisionRecordList.itemType = Connect2_Assemble_MUIModel.SubdivisionRecord;
        return SubdivisionRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.SubdivisionRecordList = SubdivisionRecordList;

});
define("Connect2_Assemble_MUI.model$DetailsJsonList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_IS.model", "Connect2_Assemble_MUI.model", "Connect2_MyBookmarks_IS.model$DetailsJsonRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_MyBookmarks_IS"], function(exports, OutSystems, Connect2_MyBookmarks_ISModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var DetailsJsonList = (function(_super) {
        __extends(DetailsJsonList, _super);

        function DetailsJsonList(defaults) {
            _super.apply(this, arguments);
        }
        DetailsJsonList.itemType = Connect2_MyBookmarks_ISModel.DetailsJsonRec;
        return DetailsJsonList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.DetailsJsonList = DetailsJsonList;

});
define("Connect2_Assemble_MUI.model$PositionList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_Assemble_MUI.model", "OutSystemsUI_2_23.model$PositionRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$OutSystemsUI_2_23"], function(exports, OutSystems, OutSystemsUI_2_23Model, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var PositionList = (function(_super) {
        __extends(PositionList, _super);

        function PositionList(defaults) {
            _super.apply(this, arguments);
        }
        PositionList.itemType = OutSystemsUI_2_23Model.PositionRec;
        return PositionList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.PositionList = PositionList;

});
define("Connect2_Assemble_MUI.model$SubdivisionList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_Assemble_MUI.model", "APIDomain_Directory_IS.model$SubdivisionRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS"], function(exports, OutSystems, APIDomain_Directory_ISModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var SubdivisionList = (function(_super) {
        __extends(SubdivisionList, _super);

        function SubdivisionList(defaults) {
            _super.apply(this, arguments);
        }
        SubdivisionList.itemType = APIDomain_Directory_ISModel.SubdivisionRec;
        return SubdivisionList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.SubdivisionList = SubdivisionList;

});
define("Connect2_Assemble_MUI.model$ShapeList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_Assemble_MUI.model", "OutSystemsUI_2_23.model$ShapeRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$OutSystemsUI_2_23"], function(exports, OutSystems, OutSystemsUI_2_23Model, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var ShapeList = (function(_super) {
        __extends(ShapeList, _super);

        function ShapeList(defaults) {
            _super.apply(this, arguments);
        }
        ShapeList.itemType = OutSystemsUI_2_23Model.ShapeRec;
        return ShapeList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.ShapeList = ShapeList;

});
define("Connect2_Assemble_MUI.model$LauncherParametersList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_AppLauncherPlugin.model", "Connect2_Assemble_MUI.model", "Connect2_AppLauncherPlugin.model$LauncherParametersRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_AppLauncherPlugin"], function(exports, OutSystems, Connect2_AppLauncherPluginModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var LauncherParametersList = (function(_super) {
        __extends(LauncherParametersList, _super);

        function LauncherParametersList(defaults) {
            _super.apply(this, arguments);
        }
        LauncherParametersList.itemType = Connect2_AppLauncherPluginModel.LauncherParametersRec;
        return LauncherParametersList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.LauncherParametersList = LauncherParametersList;

});
define("Connect2_Assemble_MUI.model$SubscribedRegionItemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$SubscribedRegionItemRecord"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var SubscribedRegionItemRecordList = (function(_super) {
        __extends(SubscribedRegionItemRecordList, _super);

        function SubscribedRegionItemRecordList(defaults) {
            _super.apply(this, arguments);
        }
        SubscribedRegionItemRecordList.itemType = Connect2_Assemble_MUIModel.SubscribedRegionItemRecord;
        return SubscribedRegionItemRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.SubscribedRegionItemRecordList = SubscribedRegionItemRecordList;

});
define("Connect2_Assemble_MUI.model$BookmarkNoteRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_Assemble_MUI.model", "Connect2_LegacyShared.model$BookmarkNoteRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_LegacyShared"], function(exports, OutSystems, Connect2_LegacySharedModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var BookmarkNoteRecord = (function(_super) {
        __extends(BookmarkNoteRecord, _super);

        function BookmarkNoteRecord(defaults) {
            _super.apply(this, arguments);
        }
        BookmarkNoteRecord.attributesToDeclare = function() {
            return [
                this.attr("BookmarkNote", "bookmarkNoteAttr", "BookmarkNote", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.BookmarkNoteRec());
                }, true, Connect2_LegacySharedModel.BookmarkNoteRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        BookmarkNoteRecord.fromStructure = function(str) {
            return new BookmarkNoteRecord(new BookmarkNoteRecord.RecordClass({
                bookmarkNoteAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        BookmarkNoteRecord._isAnonymousRecord = true;
        BookmarkNoteRecord.UniqueId = "5d0ccedf-5d4b-1826-c884-1c206f184db9";
        BookmarkNoteRecord.init();
        return BookmarkNoteRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.BookmarkNoteRecord = BookmarkNoteRecord;

});
define("Connect2_Assemble_MUI.model$Type_ShareObjectList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Sharing_CS.model", "Connect2_Assemble_MUI.model", "Connect2_Sharing_CS.model$Type_ShareObjectRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_Sharing_CS"], function(exports, OutSystems, Connect2_Sharing_CSModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var Type_ShareObjectList = (function(_super) {
        __extends(Type_ShareObjectList, _super);

        function Type_ShareObjectList(defaults) {
            _super.apply(this, arguments);
        }
        Type_ShareObjectList.itemType = Connect2_Sharing_CSModel.Type_ShareObjectRec;
        return Type_ShareObjectList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.Type_ShareObjectList = Type_ShareObjectList;

});
define("Connect2_Assemble_MUI.model$AssembleAttendeeGuest2Record", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_Assemble_MUI.model", "Connect2_LegacyShared.model$AssembleAttendeeGuestRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_LegacyShared"], function(exports, OutSystems, Connect2_LegacySharedModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var AssembleAttendeeGuest2Record = (function(_super) {
        __extends(AssembleAttendeeGuest2Record, _super);

        function AssembleAttendeeGuest2Record(defaults) {
            _super.apply(this, arguments);
        }
        AssembleAttendeeGuest2Record.attributesToDeclare = function() {
            return [
                this.attr("AssembleAttendeeGuest", "assembleAttendeeGuestAttr", "AssembleAttendeeGuest2", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.AssembleAttendeeGuestRec());
                }, true, Connect2_LegacySharedModel.AssembleAttendeeGuestRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        AssembleAttendeeGuest2Record.fromStructure = function(str) {
            return new AssembleAttendeeGuest2Record(new AssembleAttendeeGuest2Record.RecordClass({
                assembleAttendeeGuestAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        AssembleAttendeeGuest2Record._isAnonymousRecord = true;
        AssembleAttendeeGuest2Record.UniqueId = "782e2345-3d2a-5f0d-2596-8af4cf1f3c5f";
        AssembleAttendeeGuest2Record.init();
        return AssembleAttendeeGuest2Record;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.AssembleAttendeeGuest2Record = AssembleAttendeeGuest2Record;

});
define("Connect2_Assemble_MUI.model$AssembleAttendeeGuest2RecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$AssembleAttendeeGuest2Record"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var AssembleAttendeeGuest2RecordList = (function(_super) {
        __extends(AssembleAttendeeGuest2RecordList, _super);

        function AssembleAttendeeGuest2RecordList(defaults) {
            _super.apply(this, arguments);
        }
        AssembleAttendeeGuest2RecordList.itemType = Connect2_Assemble_MUIModel.AssembleAttendeeGuest2Record;
        return AssembleAttendeeGuest2RecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.AssembleAttendeeGuest2RecordList = AssembleAttendeeGuest2RecordList;

});
define("Connect2_Assemble_MUI.model$ImageDataList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_Assemble_MUI.model", "APIDomain_Directory_IS.model$ImageDataRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS"], function(exports, OutSystems, APIDomain_Directory_ISModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var ImageDataList = (function(_super) {
        __extends(ImageDataList, _super);

        function ImageDataList(defaults) {
            _super.apply(this, arguments);
        }
        ImageDataList.itemType = APIDomain_Directory_ISModel.ImageDataRec;
        return ImageDataList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.ImageDataList = ImageDataList;

});
define("Connect2_Assemble_MUI.model$AssembleEventContactRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_CS.model", "Connect2_Assemble_MUI.model", "Connect2_Assemble_CS.model$AssembleEventContactRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_Assemble_CS"], function(exports, OutSystems, Connect2_Assemble_CSModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var AssembleEventContactRecord = (function(_super) {
        __extends(AssembleEventContactRecord, _super);

        function AssembleEventContactRecord(defaults) {
            _super.apply(this, arguments);
        }
        AssembleEventContactRecord.attributesToDeclare = function() {
            return [
                this.attr("AssembleEventContact", "assembleEventContactAttr", "AssembleEventContact", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_Assemble_CSModel.AssembleEventContactRec());
                }, true, Connect2_Assemble_CSModel.AssembleEventContactRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        AssembleEventContactRecord.fromStructure = function(str) {
            return new AssembleEventContactRecord(new AssembleEventContactRecord.RecordClass({
                assembleEventContactAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        AssembleEventContactRecord._isAnonymousRecord = true;
        AssembleEventContactRecord.UniqueId = "5f6ef249-59ef-a808-9c16-d97f52c8aa59";
        AssembleEventContactRecord.init();
        return AssembleEventContactRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.AssembleEventContactRecord = AssembleEventContactRecord;

});
define("Connect2_Assemble_MUI.model$SearchInputRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$SearchInputRecord"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var SearchInputRecordList = (function(_super) {
        __extends(SearchInputRecordList, _super);

        function SearchInputRecordList(defaults) {
            _super.apply(this, arguments);
        }
        SearchInputRecordList.itemType = Connect2_Assemble_MUIModel.SearchInputRecord;
        return SearchInputRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.SearchInputRecordList = SearchInputRecordList;

});
define("Connect2_Assemble_MUI.model$AssembleEventTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_CS.model", "Connect2_Assemble_MUI.model", "Connect2_Assemble_CS.model$AssembleEventTypeRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_Assemble_CS"], function(exports, OutSystems, Connect2_Assemble_CSModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var AssembleEventTypeRecord = (function(_super) {
        __extends(AssembleEventTypeRecord, _super);

        function AssembleEventTypeRecord(defaults) {
            _super.apply(this, arguments);
        }
        AssembleEventTypeRecord.attributesToDeclare = function() {
            return [
                this.attr("AssembleEventType", "assembleEventTypeAttr", "AssembleEventType", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_Assemble_CSModel.AssembleEventTypeRec());
                }, true, Connect2_Assemble_CSModel.AssembleEventTypeRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        AssembleEventTypeRecord.fromStructure = function(str) {
            return new AssembleEventTypeRecord(new AssembleEventTypeRecord.RecordClass({
                assembleEventTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        AssembleEventTypeRecord._isAnonymousRecord = true;
        AssembleEventTypeRecord.UniqueId = "62622778-8299-aa96-33dc-804832a6b329";
        AssembleEventTypeRecord.init();
        return AssembleEventTypeRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.AssembleEventTypeRecord = AssembleEventTypeRecord;

});
define("Connect2_Assemble_MUI.model$Householder_MemberList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_Assemble_MUI.model", "APIDomain_Directory_IS.model$Householder_MemberRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS"], function(exports, OutSystems, APIDomain_Directory_ISModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var Householder_MemberList = (function(_super) {
        __extends(Householder_MemberList, _super);

        function Householder_MemberList(defaults) {
            _super.apply(this, arguments);
        }
        Householder_MemberList.itemType = APIDomain_Directory_ISModel.Householder_MemberRec;
        return Householder_MemberList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.Householder_MemberList = Householder_MemberList;

});
define("Connect2_Assemble_MUI.model$RoleItemList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_Assemble_MUI.model", "APIDomain_Directory_IS.model$RoleItemRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS"], function(exports, OutSystems, APIDomain_Directory_ISModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var RoleItemList = (function(_super) {
        __extends(RoleItemList, _super);

        function RoleItemList(defaults) {
            _super.apply(this, arguments);
        }
        RoleItemList.itemType = APIDomain_Directory_ISModel.RoleItemRec;
        return RoleItemList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.RoleItemList = RoleItemList;

});
define("Connect2_Assemble_MUI.model$ClaimItemList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_Assemble_MUI.model", "APIDomain_Directory_IS.model$ClaimItemRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS"], function(exports, OutSystems, APIDomain_Directory_ISModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var ClaimItemList = (function(_super) {
        __extends(ClaimItemList, _super);

        function ClaimItemList(defaults) {
            _super.apply(this, arguments);
        }
        ClaimItemList.itemType = APIDomain_Directory_ISModel.ClaimItemRec;
        return ClaimItemList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.ClaimItemList = ClaimItemList;

});
define("Connect2_Assemble_MUI.model$Users_Current_GETResponseRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_Assemble_MUI.model", "APIDomain_Directory_IS.model$Users_Current_GETResponseRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS"], function(exports, OutSystems, APIDomain_Directory_ISModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var Users_Current_GETResponseRecord = (function(_super) {
        __extends(Users_Current_GETResponseRecord, _super);

        function Users_Current_GETResponseRecord(defaults) {
            _super.apply(this, arguments);
        }
        Users_Current_GETResponseRecord.attributesToDeclare = function() {
            return [
                this.attr("Users_Current_GETResponse", "users_Current_GETResponseAttr", "Users_Current_GETResponse", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.Users_Current_GETResponseRec());
                }, true, APIDomain_Directory_ISModel.Users_Current_GETResponseRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        Users_Current_GETResponseRecord.fromStructure = function(str) {
            return new Users_Current_GETResponseRecord(new Users_Current_GETResponseRecord.RecordClass({
                users_Current_GETResponseAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        Users_Current_GETResponseRecord._isAnonymousRecord = true;
        Users_Current_GETResponseRecord.UniqueId = "e8058748-3b5b-98ac-9328-6803f9adbf4f";
        Users_Current_GETResponseRecord.init();
        return Users_Current_GETResponseRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.Users_Current_GETResponseRecord = Users_Current_GETResponseRecord;

});
define("Connect2_Assemble_MUI.model$Users_Current_GETResponseRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$Users_Current_GETResponseRecord"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var Users_Current_GETResponseRecordList = (function(_super) {
        __extends(Users_Current_GETResponseRecordList, _super);

        function Users_Current_GETResponseRecordList(defaults) {
            _super.apply(this, arguments);
        }
        Users_Current_GETResponseRecordList.itemType = Connect2_Assemble_MUIModel.Users_Current_GETResponseRecord;
        return Users_Current_GETResponseRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.Users_Current_GETResponseRecordList = Users_Current_GETResponseRecordList;

});
define("Connect2_Assemble_MUI.model$ContactByMessagePopupDataList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "Connect2_Assemble_MUI.model", "UBTConnect_Utils.model$ContactByMessagePopupDataRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$UBTConnect_Utils"], function(exports, OutSystems, UBTConnect_UtilsModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var ContactByMessagePopupDataList = (function(_super) {
        __extends(ContactByMessagePopupDataList, _super);

        function ContactByMessagePopupDataList(defaults) {
            _super.apply(this, arguments);
        }
        ContactByMessagePopupDataList.itemType = UBTConnect_UtilsModel.ContactByMessagePopupDataRec;
        return ContactByMessagePopupDataList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.ContactByMessagePopupDataList = ContactByMessagePopupDataList;

});
define("Connect2_Assemble_MUI.model$CacheableGeocodeInformationRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_Assemble_MUI.model", "Connect2_LegacyShared.model$CacheableGeocodeInformationRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_LegacyShared"], function(exports, OutSystems, Connect2_LegacySharedModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var CacheableGeocodeInformationRecord = (function(_super) {
        __extends(CacheableGeocodeInformationRecord, _super);

        function CacheableGeocodeInformationRecord(defaults) {
            _super.apply(this, arguments);
        }
        CacheableGeocodeInformationRecord.attributesToDeclare = function() {
            return [
                this.attr("CacheableGeocodeInformation", "cacheableGeocodeInformationAttr", "CacheableGeocodeInformation", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.CacheableGeocodeInformationRec());
                }, true, Connect2_LegacySharedModel.CacheableGeocodeInformationRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        CacheableGeocodeInformationRecord.fromStructure = function(str) {
            return new CacheableGeocodeInformationRecord(new CacheableGeocodeInformationRecord.RecordClass({
                cacheableGeocodeInformationAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        CacheableGeocodeInformationRecord._isAnonymousRecord = true;
        CacheableGeocodeInformationRecord.UniqueId = "65ef38fa-aecf-f49a-0b38-7001769f5f61";
        CacheableGeocodeInformationRecord.init();
        return CacheableGeocodeInformationRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.CacheableGeocodeInformationRecord = CacheableGeocodeInformationRecord;

});
define("Connect2_Assemble_MUI.model$Directory_UserCurrent_GeographyRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_Assemble_MUI.model", "APIDomain_Directory_IS.model$Directory_UserCurrent_GeographyRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS"], function(exports, OutSystems, APIDomain_Directory_ISModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var Directory_UserCurrent_GeographyRecord = (function(_super) {
        __extends(Directory_UserCurrent_GeographyRecord, _super);

        function Directory_UserCurrent_GeographyRecord(defaults) {
            _super.apply(this, arguments);
        }
        Directory_UserCurrent_GeographyRecord.attributesToDeclare = function() {
            return [
                this.attr("Directory_UserCurrent_Geography", "directory_UserCurrent_GeographyAttr", "Directory_UserCurrent_Geography", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.Directory_UserCurrent_GeographyRec());
                }, true, APIDomain_Directory_ISModel.Directory_UserCurrent_GeographyRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        Directory_UserCurrent_GeographyRecord.fromStructure = function(str) {
            return new Directory_UserCurrent_GeographyRecord(new Directory_UserCurrent_GeographyRecord.RecordClass({
                directory_UserCurrent_GeographyAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        Directory_UserCurrent_GeographyRecord._isAnonymousRecord = true;
        Directory_UserCurrent_GeographyRecord.UniqueId = "66b448fa-1897-d2e2-a7fa-cc7c1440b306";
        Directory_UserCurrent_GeographyRecord.init();
        return Directory_UserCurrent_GeographyRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.Directory_UserCurrent_GeographyRecord = Directory_UserCurrent_GeographyRecord;

});
define("Connect2_Assemble_MUI.model$DefaultCountryList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_Assemble_MUI.model", "APIDomain_Directory_IS.model$DefaultCountryRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS"], function(exports, OutSystems, APIDomain_Directory_ISModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var DefaultCountryList = (function(_super) {
        __extends(DefaultCountryList, _super);

        function DefaultCountryList(defaults) {
            _super.apply(this, arguments);
        }
        DefaultCountryList.itemType = APIDomain_Directory_ISModel.DefaultCountryRec;
        return DefaultCountryList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.DefaultCountryList = DefaultCountryList;

});
define("Connect2_Assemble_MUI.model$Directory_UserCurrent_MemberRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_Assemble_MUI.model", "APIDomain_Directory_IS.model$Directory_UserCurrent_MemberRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS"], function(exports, OutSystems, APIDomain_Directory_ISModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var Directory_UserCurrent_MemberRecord = (function(_super) {
        __extends(Directory_UserCurrent_MemberRecord, _super);

        function Directory_UserCurrent_MemberRecord(defaults) {
            _super.apply(this, arguments);
        }
        Directory_UserCurrent_MemberRecord.attributesToDeclare = function() {
            return [
                this.attr("Directory_UserCurrent_Member", "directory_UserCurrent_MemberAttr", "Directory_UserCurrent_Member", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.Directory_UserCurrent_MemberRec());
                }, true, APIDomain_Directory_ISModel.Directory_UserCurrent_MemberRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        Directory_UserCurrent_MemberRecord.fromStructure = function(str) {
            return new Directory_UserCurrent_MemberRecord(new Directory_UserCurrent_MemberRecord.RecordClass({
                directory_UserCurrent_MemberAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        Directory_UserCurrent_MemberRecord._isAnonymousRecord = true;
        Directory_UserCurrent_MemberRecord.UniqueId = "6d54e593-baa9-6db1-7764-3f7f0e4e3daf";
        Directory_UserCurrent_MemberRecord.init();
        return Directory_UserCurrent_MemberRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.Directory_UserCurrent_MemberRecord = Directory_UserCurrent_MemberRecord;

});
define("Connect2_Assemble_MUI.model$Directory_UserCurrent_MemberRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$Directory_UserCurrent_MemberRecord"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var Directory_UserCurrent_MemberRecordList = (function(_super) {
        __extends(Directory_UserCurrent_MemberRecordList, _super);

        function Directory_UserCurrent_MemberRecordList(defaults) {
            _super.apply(this, arguments);
        }
        Directory_UserCurrent_MemberRecordList.itemType = Connect2_Assemble_MUIModel.Directory_UserCurrent_MemberRecord;
        return Directory_UserCurrent_MemberRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.Directory_UserCurrent_MemberRecordList = Directory_UserCurrent_MemberRecordList;

});
define("Connect2_Assemble_MUI.model$CountryWithMapPositionList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_Assemble_MUI.model", "Connect2_LegacyShared.model$CountryWithMapPositionRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_LegacyShared"], function(exports, OutSystems, Connect2_LegacySharedModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var CountryWithMapPositionList = (function(_super) {
        __extends(CountryWithMapPositionList, _super);

        function CountryWithMapPositionList(defaults) {
            _super.apply(this, arguments);
        }
        CountryWithMapPositionList.itemType = Connect2_LegacySharedModel.CountryWithMapPositionRec;
        return CountryWithMapPositionList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.CountryWithMapPositionList = CountryWithMapPositionList;

});
define("Connect2_Assemble_MUI.model$Directory_PhotoRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_Assemble_MUI.model", "APIDomain_Directory_IS.model$Directory_PhotoRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS"], function(exports, OutSystems, APIDomain_Directory_ISModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var Directory_PhotoRecord = (function(_super) {
        __extends(Directory_PhotoRecord, _super);

        function Directory_PhotoRecord(defaults) {
            _super.apply(this, arguments);
        }
        Directory_PhotoRecord.attributesToDeclare = function() {
            return [
                this.attr("Directory_Photo", "directory_PhotoAttr", "Directory_Photo", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.Directory_PhotoRec());
                }, true, APIDomain_Directory_ISModel.Directory_PhotoRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        Directory_PhotoRecord.fromStructure = function(str) {
            return new Directory_PhotoRecord(new Directory_PhotoRecord.RecordClass({
                directory_PhotoAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        Directory_PhotoRecord._isAnonymousRecord = true;
        Directory_PhotoRecord.UniqueId = "e43a19ea-a4bc-4b65-a43c-963635eddccc";
        Directory_PhotoRecord.init();
        return Directory_PhotoRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.Directory_PhotoRecord = Directory_PhotoRecord;

});
define("Connect2_Assemble_MUI.model$Directory_PhotoRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$Directory_PhotoRecord"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var Directory_PhotoRecordList = (function(_super) {
        __extends(Directory_PhotoRecordList, _super);

        function Directory_PhotoRecordList(defaults) {
            _super.apply(this, arguments);
        }
        Directory_PhotoRecordList.itemType = Connect2_Assemble_MUIModel.Directory_PhotoRecord;
        return Directory_PhotoRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.Directory_PhotoRecordList = Directory_PhotoRecordList;

});
define("Connect2_Assemble_MUI.model$AssembleEventList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_CS.model", "Connect2_Assemble_MUI.model", "Connect2_Assemble_CS.model$AssembleEventRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_Assemble_CS"], function(exports, OutSystems, Connect2_Assemble_CSModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var AssembleEventList = (function(_super) {
        __extends(AssembleEventList, _super);

        function AssembleEventList(defaults) {
            _super.apply(this, arguments);
        }
        AssembleEventList.itemType = Connect2_Assemble_CSModel.AssembleEventRec;
        return AssembleEventList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.AssembleEventList = AssembleEventList;

});
define("Connect2_Assemble_MUI.model$BookmarkNoteList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_Assemble_MUI.model", "Connect2_LegacyShared.model$BookmarkNoteRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_LegacyShared"], function(exports, OutSystems, Connect2_LegacySharedModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var BookmarkNoteList = (function(_super) {
        __extends(BookmarkNoteList, _super);

        function BookmarkNoteList(defaults) {
            _super.apply(this, arguments);
        }
        BookmarkNoteList.itemType = Connect2_LegacySharedModel.BookmarkNoteRec;
        return BookmarkNoteList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.BookmarkNoteList = BookmarkNoteList;

});
define("Connect2_Assemble_MUI.model$AssembleEventContact2Record", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_Assemble_MUI.model", "Connect2_LegacyShared.model$MemberContactWithTimezoneRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_LegacyShared"], function(exports, OutSystems, Connect2_LegacySharedModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var AssembleEventContact2Record = (function(_super) {
        __extends(AssembleEventContact2Record, _super);

        function AssembleEventContact2Record(defaults) {
            _super.apply(this, arguments);
        }
        AssembleEventContact2Record.attributesToDeclare = function() {
            return [
                this.attr("MemberContactWithTimezone", "memberContactWithTimezoneAttr", "AssembleEventContact2", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.MemberContactWithTimezoneRec());
                }, true, Connect2_LegacySharedModel.MemberContactWithTimezoneRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        AssembleEventContact2Record.fromStructure = function(str) {
            return new AssembleEventContact2Record(new AssembleEventContact2Record.RecordClass({
                memberContactWithTimezoneAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        AssembleEventContact2Record._isAnonymousRecord = true;
        AssembleEventContact2Record.UniqueId = "6c30128f-abe2-7a19-500f-2074354d48ed";
        AssembleEventContact2Record.init();
        return AssembleEventContact2Record;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.AssembleEventContact2Record = AssembleEventContact2Record;

});
define("Connect2_Assemble_MUI.model$SubdivisionLocalityRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_Assemble_MUI.model", "APIDomain_Directory_IS.model$SubdivisionLocalityRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS"], function(exports, OutSystems, APIDomain_Directory_ISModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var SubdivisionLocalityRecord = (function(_super) {
        __extends(SubdivisionLocalityRecord, _super);

        function SubdivisionLocalityRecord(defaults) {
            _super.apply(this, arguments);
        }
        SubdivisionLocalityRecord.attributesToDeclare = function() {
            return [
                this.attr("SubdivisionLocality", "subdivisionLocalityAttr", "SubdivisionLocality", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.SubdivisionLocalityRec());
                }, true, APIDomain_Directory_ISModel.SubdivisionLocalityRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        SubdivisionLocalityRecord.fromStructure = function(str) {
            return new SubdivisionLocalityRecord(new SubdivisionLocalityRecord.RecordClass({
                subdivisionLocalityAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        SubdivisionLocalityRecord._isAnonymousRecord = true;
        SubdivisionLocalityRecord.UniqueId = "6c342559-8de7-cd37-faae-f1d49edb49d7";
        SubdivisionLocalityRecord.init();
        return SubdivisionLocalityRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.SubdivisionLocalityRecord = SubdivisionLocalityRecord;

});
define("Connect2_Assemble_MUI.model$LocalityHouseholdsResultItemRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_Assemble_MUI.model", "APIDomain_Directory_IS.model$LocalityHouseholdsResultItemRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS"], function(exports, OutSystems, APIDomain_Directory_ISModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var LocalityHouseholdsResultItemRecord = (function(_super) {
        __extends(LocalityHouseholdsResultItemRecord, _super);

        function LocalityHouseholdsResultItemRecord(defaults) {
            _super.apply(this, arguments);
        }
        LocalityHouseholdsResultItemRecord.attributesToDeclare = function() {
            return [
                this.attr("LocalityHouseholdsResultItem", "localityHouseholdsResultItemAttr", "LocalityHouseholdsResultItem", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.LocalityHouseholdsResultItemRec());
                }, true, APIDomain_Directory_ISModel.LocalityHouseholdsResultItemRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        LocalityHouseholdsResultItemRecord.fromStructure = function(str) {
            return new LocalityHouseholdsResultItemRecord(new LocalityHouseholdsResultItemRecord.RecordClass({
                localityHouseholdsResultItemAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        LocalityHouseholdsResultItemRecord._isAnonymousRecord = true;
        LocalityHouseholdsResultItemRecord.UniqueId = "734c73b9-3c8b-11d6-a804-6fbab9485f47";
        LocalityHouseholdsResultItemRecord.init();
        return LocalityHouseholdsResultItemRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.LocalityHouseholdsResultItemRecord = LocalityHouseholdsResultItemRecord;

});
define("Connect2_Assemble_MUI.model$LocalityHouseholdsResultItemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$LocalityHouseholdsResultItemRecord"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var LocalityHouseholdsResultItemRecordList = (function(_super) {
        __extends(LocalityHouseholdsResultItemRecordList, _super);

        function LocalityHouseholdsResultItemRecordList(defaults) {
            _super.apply(this, arguments);
        }
        LocalityHouseholdsResultItemRecordList.itemType = Connect2_Assemble_MUIModel.LocalityHouseholdsResultItemRecord;
        return LocalityHouseholdsResultItemRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.LocalityHouseholdsResultItemRecordList = LocalityHouseholdsResultItemRecordList;

});
define("Connect2_Assemble_MUI.model$Subdivision_ById_GETResponseList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_Assemble_MUI.model", "APIDomain_Directory_IS.model$Subdivision_ById_GETResponseRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS"], function(exports, OutSystems, APIDomain_Directory_ISModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var Subdivision_ById_GETResponseList = (function(_super) {
        __extends(Subdivision_ById_GETResponseList, _super);

        function Subdivision_ById_GETResponseList(defaults) {
            _super.apply(this, arguments);
        }
        Subdivision_ById_GETResponseList.itemType = APIDomain_Directory_ISModel.Subdivision_ById_GETResponseRec;
        return Subdivision_ById_GETResponseList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.Subdivision_ById_GETResponseList = Subdivision_ById_GETResponseList;

});
define("Connect2_Assemble_MUI.model$Type_ShareObjectRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Sharing_CS.model", "Connect2_Assemble_MUI.model", "Connect2_Sharing_CS.model$Type_ShareObjectRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_Sharing_CS"], function(exports, OutSystems, Connect2_Sharing_CSModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var Type_ShareObjectRecord = (function(_super) {
        __extends(Type_ShareObjectRecord, _super);

        function Type_ShareObjectRecord(defaults) {
            _super.apply(this, arguments);
        }
        Type_ShareObjectRecord.attributesToDeclare = function() {
            return [
                this.attr("Type_ShareObject", "type_ShareObjectAttr", "Type_ShareObject", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_Sharing_CSModel.Type_ShareObjectRec());
                }, true, Connect2_Sharing_CSModel.Type_ShareObjectRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        Type_ShareObjectRecord.fromStructure = function(str) {
            return new Type_ShareObjectRecord(new Type_ShareObjectRecord.RecordClass({
                type_ShareObjectAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        Type_ShareObjectRecord._isAnonymousRecord = true;
        Type_ShareObjectRecord.UniqueId = "718078dc-4cf8-be0d-3e09-e6c98c787d90";
        Type_ShareObjectRecord.init();
        return Type_ShareObjectRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.Type_ShareObjectRecord = Type_ShareObjectRecord;

});
define("Connect2_Assemble_MUI.model$ResultListTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$ResultListTypeRecord"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var ResultListTypeRecordList = (function(_super) {
        __extends(ResultListTypeRecordList, _super);

        function ResultListTypeRecordList(defaults) {
            _super.apply(this, arguments);
        }
        ResultListTypeRecordList.itemType = Connect2_Assemble_MUIModel.ResultListTypeRecord;
        return ResultListTypeRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.ResultListTypeRecordList = ResultListTypeRecordList;

});
define("Connect2_Assemble_MUI.model$BookmarkNoteRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$BookmarkNoteRecord"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var BookmarkNoteRecordList = (function(_super) {
        __extends(BookmarkNoteRecordList, _super);

        function BookmarkNoteRecordList(defaults) {
            _super.apply(this, arguments);
        }
        BookmarkNoteRecordList.itemType = Connect2_Assemble_MUIModel.BookmarkNoteRecord;
        return BookmarkNoteRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.BookmarkNoteRecordList = BookmarkNoteRecordList;

});
define("Connect2_Assemble_MUI.model$ConfigRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_Assemble_MUI.model", "APIDomain_Directory_IS.model$ConfigRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS"], function(exports, OutSystems, APIDomain_Directory_ISModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var ConfigRecord = (function(_super) {
        __extends(ConfigRecord, _super);

        function ConfigRecord(defaults) {
            _super.apply(this, arguments);
        }
        ConfigRecord.attributesToDeclare = function() {
            return [
                this.attr("Config", "configAttr", "Config", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.ConfigRec());
                }, true, APIDomain_Directory_ISModel.ConfigRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        ConfigRecord.fromStructure = function(str) {
            return new ConfigRecord(new ConfigRecord.RecordClass({
                configAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        ConfigRecord._isAnonymousRecord = true;
        ConfigRecord.UniqueId = "fd3c1f4d-91bb-e25c-7c0b-799b4aee3ac3";
        ConfigRecord.init();
        return ConfigRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.ConfigRecord = ConfigRecord;

});
define("Connect2_Assemble_MUI.model$ConfigRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$ConfigRecord"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var ConfigRecordList = (function(_super) {
        __extends(ConfigRecordList, _super);

        function ConfigRecordList(defaults) {
            _super.apply(this, arguments);
        }
        ConfigRecordList.itemType = Connect2_Assemble_MUIModel.ConfigRecord;
        return ConfigRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.ConfigRecordList = ConfigRecordList;

});
define("Connect2_Assemble_MUI.model$LocalityHouseholdsItemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$LocalityHouseholdsItemRecord"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var LocalityHouseholdsItemRecordList = (function(_super) {
        __extends(LocalityHouseholdsItemRecordList, _super);

        function LocalityHouseholdsItemRecordList(defaults) {
            _super.apply(this, arguments);
        }
        LocalityHouseholdsItemRecordList.itemType = Connect2_Assemble_MUIModel.LocalityHouseholdsItemRecord;
        return LocalityHouseholdsItemRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.LocalityHouseholdsItemRecordList = LocalityHouseholdsItemRecordList;

});
define("Connect2_Assemble_MUI.model$PhotoTagRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_Assemble_MUI.model", "APIDomain_Directory_IS.model$PhotoTagRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS"], function(exports, OutSystems, APIDomain_Directory_ISModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var PhotoTagRecord = (function(_super) {
        __extends(PhotoTagRecord, _super);

        function PhotoTagRecord(defaults) {
            _super.apply(this, arguments);
        }
        PhotoTagRecord.attributesToDeclare = function() {
            return [
                this.attr("PhotoTag", "photoTagAttr", "PhotoTag", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.PhotoTagRec());
                }, true, APIDomain_Directory_ISModel.PhotoTagRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        PhotoTagRecord.fromStructure = function(str) {
            return new PhotoTagRecord(new PhotoTagRecord.RecordClass({
                photoTagAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        PhotoTagRecord._isAnonymousRecord = true;
        PhotoTagRecord.UniqueId = "9a4052d6-eddc-b349-3edd-3b1a292fc7cc";
        PhotoTagRecord.init();
        return PhotoTagRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.PhotoTagRecord = PhotoTagRecord;

});
define("Connect2_Assemble_MUI.model$PhotoTagRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$PhotoTagRecord"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var PhotoTagRecordList = (function(_super) {
        __extends(PhotoTagRecordList, _super);

        function PhotoTagRecordList(defaults) {
            _super.apply(this, arguments);
        }
        PhotoTagRecordList.itemType = Connect2_Assemble_MUIModel.PhotoTagRecord;
        return PhotoTagRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.PhotoTagRecordList = PhotoTagRecordList;

});
define("Connect2_Assemble_MUI.model$PhotoDetailsList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_IS.model", "Connect2_Assemble_MUI.model", "Connect2_MyBookmarks_IS.model$PhotoDetailsRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_MyBookmarks_IS"], function(exports, OutSystems, Connect2_MyBookmarks_ISModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var PhotoDetailsList = (function(_super) {
        __extends(PhotoDetailsList, _super);

        function PhotoDetailsList(defaults) {
            _super.apply(this, arguments);
        }
        PhotoDetailsList.itemType = Connect2_MyBookmarks_ISModel.PhotoDetailsRec;
        return PhotoDetailsList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.PhotoDetailsList = PhotoDetailsList;

});
define("Connect2_Assemble_MUI.model$ViewmodeTypeList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_CS.model", "Connect2_Assemble_MUI.model", "Connect2_Assemble_CS.model$ViewmodeTypeRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_Assemble_CS"], function(exports, OutSystems, Connect2_Assemble_CSModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var ViewmodeTypeList = (function(_super) {
        __extends(ViewmodeTypeList, _super);

        function ViewmodeTypeList(defaults) {
            _super.apply(this, arguments);
        }
        ViewmodeTypeList.itemType = Connect2_Assemble_CSModel.ViewmodeTypeRec;
        return ViewmodeTypeList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.ViewmodeTypeList = ViewmodeTypeList;

});
define("Connect2_Assemble_MUI.model$LocalityResultItemWithGPSRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_Assemble_MUI.model", "Connect2_LegacyShared.model$LocalityResultItemWithGPSRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_LegacyShared"], function(exports, OutSystems, Connect2_LegacySharedModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var LocalityResultItemWithGPSRecord = (function(_super) {
        __extends(LocalityResultItemWithGPSRecord, _super);

        function LocalityResultItemWithGPSRecord(defaults) {
            _super.apply(this, arguments);
        }
        LocalityResultItemWithGPSRecord.attributesToDeclare = function() {
            return [
                this.attr("LocalityResultItemWithGPS", "localityResultItemWithGPSAttr", "LocalityResultItemWithGPS", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.LocalityResultItemWithGPSRec());
                }, true, Connect2_LegacySharedModel.LocalityResultItemWithGPSRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        LocalityResultItemWithGPSRecord.fromStructure = function(str) {
            return new LocalityResultItemWithGPSRecord(new LocalityResultItemWithGPSRecord.RecordClass({
                localityResultItemWithGPSAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        LocalityResultItemWithGPSRecord._isAnonymousRecord = true;
        LocalityResultItemWithGPSRecord.UniqueId = "7f1607e2-9c98-4abd-bed7-733843c41cd8";
        LocalityResultItemWithGPSRecord.init();
        return LocalityResultItemWithGPSRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.LocalityResultItemWithGPSRecord = LocalityResultItemWithGPSRecord;

});
define("Connect2_Assemble_MUI.model$ResultListTypeList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_Assemble_MUI.model", "Connect2_LegacyShared.model$ResultListTypeRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_LegacyShared"], function(exports, OutSystems, Connect2_LegacySharedModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var ResultListTypeList = (function(_super) {
        __extends(ResultListTypeList, _super);

        function ResultListTypeList(defaults) {
            _super.apply(this, arguments);
        }
        ResultListTypeList.itemType = Connect2_LegacySharedModel.ResultListTypeRec;
        return ResultListTypeList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.ResultListTypeList = ResultListTypeList;

});
define("Connect2_Assemble_MUI.model$Locality2List", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_Assemble_MUI.model", "APIDomain_Directory_IS.model$LocalityRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS"], function(exports, OutSystems, APIDomain_Directory_ISModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var Locality2List = (function(_super) {
        __extends(Locality2List, _super);

        function Locality2List(defaults) {
            _super.apply(this, arguments);
        }
        Locality2List.itemType = APIDomain_Directory_ISModel.LocalityRec;
        return Locality2List;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.Locality2List = Locality2List;

});
define("Connect2_Assemble_MUI.model$LauncherReturnRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_AppLauncherPlugin.model", "Connect2_Assemble_MUI.model", "Connect2_AppLauncherPlugin.model$LauncherReturnRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_AppLauncherPlugin"], function(exports, OutSystems, Connect2_AppLauncherPluginModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var LauncherReturnRecord = (function(_super) {
        __extends(LauncherReturnRecord, _super);

        function LauncherReturnRecord(defaults) {
            _super.apply(this, arguments);
        }
        LauncherReturnRecord.attributesToDeclare = function() {
            return [
                this.attr("LauncherReturn", "launcherReturnAttr", "LauncherReturn", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_AppLauncherPluginModel.LauncherReturnRec());
                }, true, Connect2_AppLauncherPluginModel.LauncherReturnRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        LauncherReturnRecord.fromStructure = function(str) {
            return new LauncherReturnRecord(new LauncherReturnRecord.RecordClass({
                launcherReturnAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        LauncherReturnRecord._isAnonymousRecord = true;
        LauncherReturnRecord.UniqueId = "83a47c01-3304-94b9-4bc2-68927a20804d";
        LauncherReturnRecord.init();
        return LauncherReturnRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.LauncherReturnRecord = LauncherReturnRecord;

});
define("Connect2_Assemble_MUI.model$UserRecord", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model", "Connect2_Assemble_MUI.model", "ServiceCenter.model$UserRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$ServiceCenter"], function(exports, OutSystems, ServiceCenterModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var UserRecord = (function(_super) {
        __extends(UserRecord, _super);

        function UserRecord(defaults) {
            _super.apply(this, arguments);
        }
        UserRecord.attributesToDeclare = function() {
            return [
                this.attr("User", "userAttr", "User", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new ServiceCenterModel.UserRec());
                }, true, ServiceCenterModel.UserRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        UserRecord.fromStructure = function(str) {
            return new UserRecord(new UserRecord.RecordClass({
                userAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        UserRecord._isAnonymousRecord = true;
        UserRecord.UniqueId = "ced01335-8a82-a813-f1d9-a5108f17ce79";
        UserRecord.init();
        return UserRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.UserRecord = UserRecord;

});
define("Connect2_Assemble_MUI.model$UserRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$UserRecord"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var UserRecordList = (function(_super) {
        __extends(UserRecordList, _super);

        function UserRecordList(defaults) {
            _super.apply(this, arguments);
        }
        UserRecordList.itemType = Connect2_Assemble_MUIModel.UserRecord;
        return UserRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.UserRecordList = UserRecordList;

});
define("Connect2_Assemble_MUI.model$AssembleDetailsPreloadingList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_CS.model", "Connect2_Assemble_MUI.model", "Connect2_Assemble_CS.model$AssembleDetailsPreloadingRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_Assemble_CS"], function(exports, OutSystems, Connect2_Assemble_CSModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var AssembleDetailsPreloadingList = (function(_super) {
        __extends(AssembleDetailsPreloadingList, _super);

        function AssembleDetailsPreloadingList(defaults) {
            _super.apply(this, arguments);
        }
        AssembleDetailsPreloadingList.itemType = Connect2_Assemble_CSModel.AssembleDetailsPreloadingRec;
        return AssembleDetailsPreloadingList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.AssembleDetailsPreloadingList = AssembleDetailsPreloadingList;

});
define("Connect2_Assemble_MUI.model$ApplicationEvents_DirectoryRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_Assemble_MUI.model", "Connect2_LegacyShared.model$ApplicationEvents_DirectoryRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_LegacyShared"], function(exports, OutSystems, Connect2_LegacySharedModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var ApplicationEvents_DirectoryRecord = (function(_super) {
        __extends(ApplicationEvents_DirectoryRecord, _super);

        function ApplicationEvents_DirectoryRecord(defaults) {
            _super.apply(this, arguments);
        }
        ApplicationEvents_DirectoryRecord.attributesToDeclare = function() {
            return [
                this.attr("ApplicationEvents_Directory", "applicationEvents_DirectoryAttr", "ApplicationEvents_Directory", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.ApplicationEvents_DirectoryRec());
                }, true, Connect2_LegacySharedModel.ApplicationEvents_DirectoryRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        ApplicationEvents_DirectoryRecord.fromStructure = function(str) {
            return new ApplicationEvents_DirectoryRecord(new ApplicationEvents_DirectoryRecord.RecordClass({
                applicationEvents_DirectoryAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        ApplicationEvents_DirectoryRecord._isAnonymousRecord = true;
        ApplicationEvents_DirectoryRecord.UniqueId = "e999351d-1074-2dab-5400-64c00c98c182";
        ApplicationEvents_DirectoryRecord.init();
        return ApplicationEvents_DirectoryRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.ApplicationEvents_DirectoryRecord = ApplicationEvents_DirectoryRecord;

});
define("Connect2_Assemble_MUI.model$ApplicationEvents_DirectoryRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$ApplicationEvents_DirectoryRecord"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var ApplicationEvents_DirectoryRecordList = (function(_super) {
        __extends(ApplicationEvents_DirectoryRecordList, _super);

        function ApplicationEvents_DirectoryRecordList(defaults) {
            _super.apply(this, arguments);
        }
        ApplicationEvents_DirectoryRecordList.itemType = Connect2_Assemble_MUIModel.ApplicationEvents_DirectoryRecord;
        return ApplicationEvents_DirectoryRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.ApplicationEvents_DirectoryRecordList = ApplicationEvents_DirectoryRecordList;

});
define("Connect2_Assemble_MUI.model$CacheableSubdivisionInformationRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_Assemble_MUI.model", "Connect2_LegacyShared.model$CacheableSubdivisionInformationRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_LegacyShared"], function(exports, OutSystems, Connect2_LegacySharedModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var CacheableSubdivisionInformationRecord = (function(_super) {
        __extends(CacheableSubdivisionInformationRecord, _super);

        function CacheableSubdivisionInformationRecord(defaults) {
            _super.apply(this, arguments);
        }
        CacheableSubdivisionInformationRecord.attributesToDeclare = function() {
            return [
                this.attr("CacheableSubdivisionInformation", "cacheableSubdivisionInformationAttr", "CacheableSubdivisionInformation", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.CacheableSubdivisionInformationRec());
                }, true, Connect2_LegacySharedModel.CacheableSubdivisionInformationRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        CacheableSubdivisionInformationRecord.fromStructure = function(str) {
            return new CacheableSubdivisionInformationRecord(new CacheableSubdivisionInformationRecord.RecordClass({
                cacheableSubdivisionInformationAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        CacheableSubdivisionInformationRecord._isAnonymousRecord = true;
        CacheableSubdivisionInformationRecord.UniqueId = "86b4e397-dd34-0cf3-bbb9-68d527e0da47";
        CacheableSubdivisionInformationRecord.init();
        return CacheableSubdivisionInformationRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.CacheableSubdivisionInformationRecord = CacheableSubdivisionInformationRecord;

});
define("Connect2_Assemble_MUI.model$SearchInputList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "Connect2_Assemble_MUI.model", "UBTConnectLibrary.model$SearchInputRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$UBTConnectLibrary"], function(exports, OutSystems, UBTConnectLibraryModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var SearchInputList = (function(_super) {
        __extends(SearchInputList, _super);

        function SearchInputList(defaults) {
            _super.apply(this, arguments);
        }
        SearchInputList.itemType = UBTConnectLibraryModel.SearchInputRec;
        return SearchInputList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.SearchInputList = SearchInputList;

});
define("Connect2_Assemble_MUI.model$InterchangeItemRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_Assemble_MUI.model", "Connect2_LegacyShared.model$InterchangeItemRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_LegacyShared"], function(exports, OutSystems, Connect2_LegacySharedModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var InterchangeItemRecord = (function(_super) {
        __extends(InterchangeItemRecord, _super);

        function InterchangeItemRecord(defaults) {
            _super.apply(this, arguments);
        }
        InterchangeItemRecord.attributesToDeclare = function() {
            return [
                this.attr("InterchangeItem", "interchangeItemAttr", "InterchangeItem", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.InterchangeItemRec());
                }, true, Connect2_LegacySharedModel.InterchangeItemRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        InterchangeItemRecord.fromStructure = function(str) {
            return new InterchangeItemRecord(new InterchangeItemRecord.RecordClass({
                interchangeItemAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        InterchangeItemRecord._isAnonymousRecord = true;
        InterchangeItemRecord.UniqueId = "891e87ec-01d7-4677-e5e1-efd7f783ec6e";
        InterchangeItemRecord.init();
        return InterchangeItemRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.InterchangeItemRecord = InterchangeItemRecord;

});
define("Connect2_Assemble_MUI.model$AssembleAttendeeSubdivisionRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_CS.model", "Connect2_Assemble_MUI.model", "Connect2_Assemble_CS.model$AssembleAttendeeSubdivisionRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_Assemble_CS"], function(exports, OutSystems, Connect2_Assemble_CSModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var AssembleAttendeeSubdivisionRecord = (function(_super) {
        __extends(AssembleAttendeeSubdivisionRecord, _super);

        function AssembleAttendeeSubdivisionRecord(defaults) {
            _super.apply(this, arguments);
        }
        AssembleAttendeeSubdivisionRecord.attributesToDeclare = function() {
            return [
                this.attr("AssembleAttendeeSubdivision", "assembleAttendeeSubdivisionAttr", "AssembleAttendeeSubdivision", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_Assemble_CSModel.AssembleAttendeeSubdivisionRec());
                }, true, Connect2_Assemble_CSModel.AssembleAttendeeSubdivisionRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        AssembleAttendeeSubdivisionRecord.fromStructure = function(str) {
            return new AssembleAttendeeSubdivisionRecord(new AssembleAttendeeSubdivisionRecord.RecordClass({
                assembleAttendeeSubdivisionAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        AssembleAttendeeSubdivisionRecord._isAnonymousRecord = true;
        AssembleAttendeeSubdivisionRecord.UniqueId = "8cee43ea-8853-f20b-8fa5-92af9e04fd61";
        AssembleAttendeeSubdivisionRecord.init();
        return AssembleAttendeeSubdivisionRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.AssembleAttendeeSubdivisionRecord = AssembleAttendeeSubdivisionRecord;

});
define("Connect2_Assemble_MUI.model$ShapeRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_Assemble_MUI.model", "OutSystemsUI_2_23.model$ShapeRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$OutSystemsUI_2_23"], function(exports, OutSystems, OutSystemsUI_2_23Model, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var ShapeRecord = (function(_super) {
        __extends(ShapeRecord, _super);

        function ShapeRecord(defaults) {
            _super.apply(this, arguments);
        }
        ShapeRecord.attributesToDeclare = function() {
            return [
                this.attr("Shape", "shapeAttr", "Shape", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.ShapeRec());
                }, true, OutSystemsUI_2_23Model.ShapeRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        ShapeRecord.fromStructure = function(str) {
            return new ShapeRecord(new ShapeRecord.RecordClass({
                shapeAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        ShapeRecord._isAnonymousRecord = true;
        ShapeRecord.UniqueId = "8e0376cf-909c-4f58-31a5-283a541cbb6b";
        ShapeRecord.init();
        return ShapeRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.ShapeRecord = ShapeRecord;

});
define("Connect2_Assemble_MUI.model$MapNavigationRedirectRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_Assemble_MUI.model", "Connect2_LegacyShared.model$MapNavigationRedirectRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_LegacyShared"], function(exports, OutSystems, Connect2_LegacySharedModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var MapNavigationRedirectRecord = (function(_super) {
        __extends(MapNavigationRedirectRecord, _super);

        function MapNavigationRedirectRecord(defaults) {
            _super.apply(this, arguments);
        }
        MapNavigationRedirectRecord.attributesToDeclare = function() {
            return [
                this.attr("MapNavigationRedirect", "mapNavigationRedirectAttr", "MapNavigationRedirect", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.MapNavigationRedirectRec());
                }, true, Connect2_LegacySharedModel.MapNavigationRedirectRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        MapNavigationRedirectRecord.fromStructure = function(str) {
            return new MapNavigationRedirectRecord(new MapNavigationRedirectRecord.RecordClass({
                mapNavigationRedirectAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        MapNavigationRedirectRecord._isAnonymousRecord = true;
        MapNavigationRedirectRecord.UniqueId = "99ba919c-21ff-38ae-030b-74bc7d3409d7";
        MapNavigationRedirectRecord.init();
        return MapNavigationRedirectRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.MapNavigationRedirectRecord = MapNavigationRedirectRecord;

});
define("Connect2_Assemble_MUI.model$MapNavigationRedirectRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$MapNavigationRedirectRecord"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var MapNavigationRedirectRecordList = (function(_super) {
        __extends(MapNavigationRedirectRecordList, _super);

        function MapNavigationRedirectRecordList(defaults) {
            _super.apply(this, arguments);
        }
        MapNavigationRedirectRecordList.itemType = Connect2_Assemble_MUIModel.MapNavigationRedirectRecord;
        return MapNavigationRedirectRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.MapNavigationRedirectRecordList = MapNavigationRedirectRecordList;

});
define("Connect2_Assemble_MUI.model$Custom_Address_ItemRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_Assemble_MUI.model", "APIDomain_Directory_IS.model$Custom_Address_ItemRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS"], function(exports, OutSystems, APIDomain_Directory_ISModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var Custom_Address_ItemRecord = (function(_super) {
        __extends(Custom_Address_ItemRecord, _super);

        function Custom_Address_ItemRecord(defaults) {
            _super.apply(this, arguments);
        }
        Custom_Address_ItemRecord.attributesToDeclare = function() {
            return [
                this.attr("Custom_Address_Item", "custom_Address_ItemAttr", "Custom_Address_Item", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.Custom_Address_ItemRec());
                }, true, APIDomain_Directory_ISModel.Custom_Address_ItemRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        Custom_Address_ItemRecord.fromStructure = function(str) {
            return new Custom_Address_ItemRecord(new Custom_Address_ItemRecord.RecordClass({
                custom_Address_ItemAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        Custom_Address_ItemRecord._isAnonymousRecord = true;
        Custom_Address_ItemRecord.UniqueId = "90f1c8dc-e620-f415-cba4-5d8b6daf100b";
        Custom_Address_ItemRecord.init();
        return Custom_Address_ItemRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.Custom_Address_ItemRecord = Custom_Address_ItemRecord;

});
define("Connect2_Assemble_MUI.model$BusinessLinkItemRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_Assemble_MUI.model", "APIDomain_Directory_IS.model$BusinessLinkItemRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS"], function(exports, OutSystems, APIDomain_Directory_ISModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var BusinessLinkItemRecord = (function(_super) {
        __extends(BusinessLinkItemRecord, _super);

        function BusinessLinkItemRecord(defaults) {
            _super.apply(this, arguments);
        }
        BusinessLinkItemRecord.attributesToDeclare = function() {
            return [
                this.attr("BusinessLinkItem", "businessLinkItemAttr", "BusinessLinkItem", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.BusinessLinkItemRec());
                }, true, APIDomain_Directory_ISModel.BusinessLinkItemRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        BusinessLinkItemRecord.fromStructure = function(str) {
            return new BusinessLinkItemRecord(new BusinessLinkItemRecord.RecordClass({
                businessLinkItemAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        BusinessLinkItemRecord._isAnonymousRecord = true;
        BusinessLinkItemRecord.UniqueId = "90f765c9-b98a-5cfb-2d9a-31039302f82b";
        BusinessLinkItemRecord.init();
        return BusinessLinkItemRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.BusinessLinkItemRecord = BusinessLinkItemRecord;

});
define("Connect2_Assemble_MUI.model$SubdivisionLocalityList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_Assemble_MUI.model", "APIDomain_Directory_IS.model$SubdivisionLocalityRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS"], function(exports, OutSystems, APIDomain_Directory_ISModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var SubdivisionLocalityList = (function(_super) {
        __extends(SubdivisionLocalityList, _super);

        function SubdivisionLocalityList(defaults) {
            _super.apply(this, arguments);
        }
        SubdivisionLocalityList.itemType = APIDomain_Directory_ISModel.SubdivisionLocalityRec;
        return SubdivisionLocalityList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.SubdivisionLocalityList = SubdivisionLocalityList;

});
define("Connect2_Assemble_MUI.model$ClaimItemRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_Assemble_MUI.model", "APIDomain_Directory_IS.model$ClaimItemRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS"], function(exports, OutSystems, APIDomain_Directory_ISModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var ClaimItemRecord = (function(_super) {
        __extends(ClaimItemRecord, _super);

        function ClaimItemRecord(defaults) {
            _super.apply(this, arguments);
        }
        ClaimItemRecord.attributesToDeclare = function() {
            return [
                this.attr("ClaimItem", "claimItemAttr", "ClaimItem", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.ClaimItemRec());
                }, true, APIDomain_Directory_ISModel.ClaimItemRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        ClaimItemRecord.fromStructure = function(str) {
            return new ClaimItemRecord(new ClaimItemRecord.RecordClass({
                claimItemAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        ClaimItemRecord._isAnonymousRecord = true;
        ClaimItemRecord.UniqueId = "9ddedd14-dd5c-9f7c-7e82-41f7477b78d4";
        ClaimItemRecord.init();
        return ClaimItemRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.ClaimItemRecord = ClaimItemRecord;

});
define("Connect2_Assemble_MUI.model$ClaimItemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$ClaimItemRecord"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var ClaimItemRecordList = (function(_super) {
        __extends(ClaimItemRecordList, _super);

        function ClaimItemRecordList(defaults) {
            _super.apply(this, arguments);
        }
        ClaimItemRecordList.itemType = Connect2_Assemble_MUIModel.ClaimItemRecord;
        return ClaimItemRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.ClaimItemRecordList = ClaimItemRecordList;

});
define("Connect2_Assemble_MUI.model$Type_ShareObjectRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$Type_ShareObjectRecord"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var Type_ShareObjectRecordList = (function(_super) {
        __extends(Type_ShareObjectRecordList, _super);

        function Type_ShareObjectRecordList(defaults) {
            _super.apply(this, arguments);
        }
        Type_ShareObjectRecordList.itemType = Connect2_Assemble_MUIModel.Type_ShareObjectRecord;
        return Type_ShareObjectRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.Type_ShareObjectRecordList = Type_ShareObjectRecordList;

});
define("Connect2_Assemble_MUI.model$Custom_AddressList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_Assemble_MUI.model", "APIDomain_Directory_IS.model$Custom_AddressRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS"], function(exports, OutSystems, APIDomain_Directory_ISModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var Custom_AddressList = (function(_super) {
        __extends(Custom_AddressList, _super);

        function Custom_AddressList(defaults) {
            _super.apply(this, arguments);
        }
        Custom_AddressList.itemType = APIDomain_Directory_ISModel.Custom_AddressRec;
        return Custom_AddressList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.Custom_AddressList = Custom_AddressList;

});
define("Connect2_Assemble_MUI.model$CacheableSubdivisionInformationList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_Assemble_MUI.model", "Connect2_LegacyShared.model$CacheableSubdivisionInformationRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_LegacyShared"], function(exports, OutSystems, Connect2_LegacySharedModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var CacheableSubdivisionInformationList = (function(_super) {
        __extends(CacheableSubdivisionInformationList, _super);

        function CacheableSubdivisionInformationList(defaults) {
            _super.apply(this, arguments);
        }
        CacheableSubdivisionInformationList.itemType = Connect2_LegacySharedModel.CacheableSubdivisionInformationRec;
        return CacheableSubdivisionInformationList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.CacheableSubdivisionInformationList = CacheableSubdivisionInformationList;

});
define("Connect2_Assemble_MUI.model$DetailsJsonRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_IS.model", "Connect2_Assemble_MUI.model", "Connect2_MyBookmarks_IS.model$DetailsJsonRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_MyBookmarks_IS"], function(exports, OutSystems, Connect2_MyBookmarks_ISModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var DetailsJsonRecord = (function(_super) {
        __extends(DetailsJsonRecord, _super);

        function DetailsJsonRecord(defaults) {
            _super.apply(this, arguments);
        }
        DetailsJsonRecord.attributesToDeclare = function() {
            return [
                this.attr("DetailsJson", "detailsJsonAttr", "DetailsJson", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_MyBookmarks_ISModel.DetailsJsonRec());
                }, true, Connect2_MyBookmarks_ISModel.DetailsJsonRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        DetailsJsonRecord.fromStructure = function(str) {
            return new DetailsJsonRecord(new DetailsJsonRecord.RecordClass({
                detailsJsonAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        DetailsJsonRecord._isAnonymousRecord = true;
        DetailsJsonRecord.UniqueId = "e5c679bb-91b8-85c7-2973-16a31f6d9560";
        DetailsJsonRecord.init();
        return DetailsJsonRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.DetailsJsonRecord = DetailsJsonRecord;

});
define("Connect2_Assemble_MUI.model$DetailsJsonRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$DetailsJsonRecord"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var DetailsJsonRecordList = (function(_super) {
        __extends(DetailsJsonRecordList, _super);

        function DetailsJsonRecordList(defaults) {
            _super.apply(this, arguments);
        }
        DetailsJsonRecordList.itemType = Connect2_Assemble_MUIModel.DetailsJsonRecord;
        return DetailsJsonRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.DetailsJsonRecordList = DetailsJsonRecordList;

});
define("Connect2_Assemble_MUI.model$AssembleEventTypeBooleanRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$AssembleEventTypeBooleanRecord"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var AssembleEventTypeBooleanRecordList = (function(_super) {
        __extends(AssembleEventTypeBooleanRecordList, _super);

        function AssembleEventTypeBooleanRecordList(defaults) {
            _super.apply(this, arguments);
        }
        AssembleEventTypeBooleanRecordList.itemType = Connect2_Assemble_MUIModel.AssembleEventTypeBooleanRecord;
        return AssembleEventTypeBooleanRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.AssembleEventTypeBooleanRecordList = AssembleEventTypeBooleanRecordList;

});
define("Connect2_Assemble_MUI.model$AssembleEventFilterRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_CS.model", "Connect2_Assemble_MUI.model", "Connect2_Assemble_CS.model$AssembleEventFilterRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_Assemble_CS"], function(exports, OutSystems, Connect2_Assemble_CSModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var AssembleEventFilterRecord = (function(_super) {
        __extends(AssembleEventFilterRecord, _super);

        function AssembleEventFilterRecord(defaults) {
            _super.apply(this, arguments);
        }
        AssembleEventFilterRecord.attributesToDeclare = function() {
            return [
                this.attr("AssembleEventFilter", "assembleEventFilterAttr", "AssembleEventFilter", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_Assemble_CSModel.AssembleEventFilterRec());
                }, true, Connect2_Assemble_CSModel.AssembleEventFilterRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        AssembleEventFilterRecord.fromStructure = function(str) {
            return new AssembleEventFilterRecord(new AssembleEventFilterRecord.RecordClass({
                assembleEventFilterAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        AssembleEventFilterRecord._isAnonymousRecord = true;
        AssembleEventFilterRecord.UniqueId = "983ac4f4-4e6d-978a-edda-1fe93eae2577";
        AssembleEventFilterRecord.init();
        return AssembleEventFilterRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.AssembleEventFilterRecord = AssembleEventFilterRecord;

});
define("Connect2_Assemble_MUI.model$ConnectConfigList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_Assemble_MUI.model", "APIDomain_Directory_IS.model$ConnectConfigRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS"], function(exports, OutSystems, APIDomain_Directory_ISModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var ConnectConfigList = (function(_super) {
        __extends(ConnectConfigList, _super);

        function ConnectConfigList(defaults) {
            _super.apply(this, arguments);
        }
        ConnectConfigList.itemType = APIDomain_Directory_ISModel.ConnectConfigRec;
        return ConnectConfigList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.ConnectConfigList = ConnectConfigList;

});
define("Connect2_Assemble_MUI.model$CacheableGeocodeInformationList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_Assemble_MUI.model", "Connect2_LegacyShared.model$CacheableGeocodeInformationRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_LegacyShared"], function(exports, OutSystems, Connect2_LegacySharedModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var CacheableGeocodeInformationList = (function(_super) {
        __extends(CacheableGeocodeInformationList, _super);

        function CacheableGeocodeInformationList(defaults) {
            _super.apply(this, arguments);
        }
        CacheableGeocodeInformationList.itemType = Connect2_LegacySharedModel.CacheableGeocodeInformationRec;
        return CacheableGeocodeInformationList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.CacheableGeocodeInformationList = CacheableGeocodeInformationList;

});
define("Connect2_Assemble_MUI.model$ExtensionList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_Assemble_MUI.model", "APIDomain_Directory_IS.model$ExtensionRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS"], function(exports, OutSystems, APIDomain_Directory_ISModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var ExtensionList = (function(_super) {
        __extends(ExtensionList, _super);

        function ExtensionList(defaults) {
            _super.apply(this, arguments);
        }
        ExtensionList.itemType = APIDomain_Directory_ISModel.ExtensionRec;
        return ExtensionList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.ExtensionList = ExtensionList;

});
define("Connect2_Assemble_MUI.model$Custom_Address_ItemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$Custom_Address_ItemRecord"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var Custom_Address_ItemRecordList = (function(_super) {
        __extends(Custom_Address_ItemRecordList, _super);

        function Custom_Address_ItemRecordList(defaults) {
            _super.apply(this, arguments);
        }
        Custom_Address_ItemRecordList.itemType = Connect2_Assemble_MUIModel.Custom_Address_ItemRecord;
        return Custom_Address_ItemRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.Custom_Address_ItemRecordList = Custom_Address_ItemRecordList;

});
define("Connect2_Assemble_MUI.model$BusinessLinkItemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$BusinessLinkItemRecord"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var BusinessLinkItemRecordList = (function(_super) {
        __extends(BusinessLinkItemRecordList, _super);

        function BusinessLinkItemRecordList(defaults) {
            _super.apply(this, arguments);
        }
        BusinessLinkItemRecordList.itemType = Connect2_Assemble_MUIModel.BusinessLinkItemRecord;
        return BusinessLinkItemRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.BusinessLinkItemRecordList = BusinessLinkItemRecordList;

});
define("Connect2_Assemble_MUI.model$Directory_UserCurrentRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_Assemble_MUI.model", "APIDomain_Directory_IS.model$Directory_UserCurrentRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS"], function(exports, OutSystems, APIDomain_Directory_ISModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var Directory_UserCurrentRecord = (function(_super) {
        __extends(Directory_UserCurrentRecord, _super);

        function Directory_UserCurrentRecord(defaults) {
            _super.apply(this, arguments);
        }
        Directory_UserCurrentRecord.attributesToDeclare = function() {
            return [
                this.attr("Directory_UserCurrent", "directory_UserCurrentAttr", "Directory_UserCurrent", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.Directory_UserCurrentRec());
                }, true, APIDomain_Directory_ISModel.Directory_UserCurrentRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        Directory_UserCurrentRecord.fromStructure = function(str) {
            return new Directory_UserCurrentRecord(new Directory_UserCurrentRecord.RecordClass({
                directory_UserCurrentAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        Directory_UserCurrentRecord._isAnonymousRecord = true;
        Directory_UserCurrentRecord.UniqueId = "a1153076-039f-7703-4690-22ba35d61b2f";
        Directory_UserCurrentRecord.init();
        return Directory_UserCurrentRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.Directory_UserCurrentRecord = Directory_UserCurrentRecord;

});
define("Connect2_Assemble_MUI.model$ConnectConfigRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$ConnectConfigRecord"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var ConnectConfigRecordList = (function(_super) {
        __extends(ConnectConfigRecordList, _super);

        function ConnectConfigRecordList(defaults) {
            _super.apply(this, arguments);
        }
        ConnectConfigRecordList.itemType = Connect2_Assemble_MUIModel.ConnectConfigRecord;
        return ConnectConfigRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.ConnectConfigRecordList = ConnectConfigRecordList;

});
define("Connect2_Assemble_MUI.model$Directory_CDNList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_Assemble_MUI.model", "APIDomain_Directory_IS.model$Directory_CDNRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS"], function(exports, OutSystems, APIDomain_Directory_ISModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var Directory_CDNList = (function(_super) {
        __extends(Directory_CDNList, _super);

        function Directory_CDNList(defaults) {
            _super.apply(this, arguments);
        }
        Directory_CDNList.itemType = APIDomain_Directory_ISModel.Directory_CDNRec;
        return Directory_CDNList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.Directory_CDNList = Directory_CDNList;

});
define("Connect2_Assemble_MUI.model$ConfigList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_Assemble_MUI.model", "APIDomain_Directory_IS.model$ConfigRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS"], function(exports, OutSystems, APIDomain_Directory_ISModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var ConfigList = (function(_super) {
        __extends(ConfigList, _super);

        function ConfigList(defaults) {
            _super.apply(this, arguments);
        }
        ConfigList.itemType = APIDomain_Directory_ISModel.ConfigRec;
        return ConfigList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.ConfigList = ConfigList;

});
define("Connect2_Assemble_MUI.model$AssembleEventTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$AssembleEventTypeRecord"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var AssembleEventTypeRecordList = (function(_super) {
        __extends(AssembleEventTypeRecordList, _super);

        function AssembleEventTypeRecordList(defaults) {
            _super.apply(this, arguments);
        }
        AssembleEventTypeRecordList.itemType = Connect2_Assemble_MUIModel.AssembleEventTypeRecord;
        return AssembleEventTypeRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.AssembleEventTypeRecordList = AssembleEventTypeRecordList;

});
define("Connect2_Assemble_MUI.model$Directory_UserCurrent_VisibilityList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_Assemble_MUI.model", "APIDomain_Directory_IS.model$Directory_UserCurrent_VisibilityRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS"], function(exports, OutSystems, APIDomain_Directory_ISModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var Directory_UserCurrent_VisibilityList = (function(_super) {
        __extends(Directory_UserCurrent_VisibilityList, _super);

        function Directory_UserCurrent_VisibilityList(defaults) {
            _super.apply(this, arguments);
        }
        Directory_UserCurrent_VisibilityList.itemType = APIDomain_Directory_ISModel.Directory_UserCurrent_VisibilityRec;
        return Directory_UserCurrent_VisibilityList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.Directory_UserCurrent_VisibilityList = Directory_UserCurrent_VisibilityList;

});
define("Connect2_Assemble_MUI.model$PhotoDetailsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$PhotoDetailsRecord"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var PhotoDetailsRecordList = (function(_super) {
        __extends(PhotoDetailsRecordList, _super);

        function PhotoDetailsRecordList(defaults) {
            _super.apply(this, arguments);
        }
        PhotoDetailsRecordList.itemType = Connect2_Assemble_MUIModel.PhotoDetailsRecord;
        return PhotoDetailsRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.PhotoDetailsRecordList = PhotoDetailsRecordList;

});
define("Connect2_Assemble_MUI.model$LocalityResultItemWithGPSRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$LocalityResultItemWithGPSRecord"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var LocalityResultItemWithGPSRecordList = (function(_super) {
        __extends(LocalityResultItemWithGPSRecordList, _super);

        function LocalityResultItemWithGPSRecordList(defaults) {
            _super.apply(this, arguments);
        }
        LocalityResultItemWithGPSRecordList.itemType = Connect2_Assemble_MUIModel.LocalityResultItemWithGPSRecord;
        return LocalityResultItemWithGPSRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.LocalityResultItemWithGPSRecordList = LocalityResultItemWithGPSRecordList;

});
define("Connect2_Assemble_MUI.model$CacheableSubdivisionInformationRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$CacheableSubdivisionInformationRecord"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var CacheableSubdivisionInformationRecordList = (function(_super) {
        __extends(CacheableSubdivisionInformationRecordList, _super);

        function CacheableSubdivisionInformationRecordList(defaults) {
            _super.apply(this, arguments);
        }
        CacheableSubdivisionInformationRecordList.itemType = Connect2_Assemble_MUIModel.CacheableSubdivisionInformationRecord;
        return CacheableSubdivisionInformationRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.CacheableSubdivisionInformationRecordList = CacheableSubdivisionInformationRecordList;

});
define("Connect2_Assemble_MUI.model$Users_Current_GETResponseList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_Assemble_MUI.model", "APIDomain_Directory_IS.model$Users_Current_GETResponseRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS"], function(exports, OutSystems, APIDomain_Directory_ISModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var Users_Current_GETResponseList = (function(_super) {
        __extends(Users_Current_GETResponseList, _super);

        function Users_Current_GETResponseList(defaults) {
            _super.apply(this, arguments);
        }
        Users_Current_GETResponseList.itemType = APIDomain_Directory_ISModel.Users_Current_GETResponseRec;
        return Users_Current_GETResponseList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.Users_Current_GETResponseList = Users_Current_GETResponseList;

});
define("Connect2_Assemble_MUI.model$BookmarkItemRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_IS.model", "Connect2_Assemble_MUI.model", "Connect2_MyBookmarks_IS.model$BookmarkItemRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_MyBookmarks_IS"], function(exports, OutSystems, Connect2_MyBookmarks_ISModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var BookmarkItemRecord = (function(_super) {
        __extends(BookmarkItemRecord, _super);

        function BookmarkItemRecord(defaults) {
            _super.apply(this, arguments);
        }
        BookmarkItemRecord.attributesToDeclare = function() {
            return [
                this.attr("BookmarkItem", "bookmarkItemAttr", "BookmarkItem", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_MyBookmarks_ISModel.BookmarkItemRec());
                }, true, Connect2_MyBookmarks_ISModel.BookmarkItemRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        BookmarkItemRecord.fromStructure = function(str) {
            return new BookmarkItemRecord(new BookmarkItemRecord.RecordClass({
                bookmarkItemAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        BookmarkItemRecord._isAnonymousRecord = true;
        BookmarkItemRecord.UniqueId = "aba0b140-6102-15e5-c64e-80ff3532321e";
        BookmarkItemRecord.init();
        return BookmarkItemRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.BookmarkItemRecord = BookmarkItemRecord;

});
define("Connect2_Assemble_MUI.model$CacheControl_UserInformationList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "Connect2_Assemble_MUI.model", "UBTConnect_Utils.model$CacheControl_UserInformationRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$UBTConnect_Utils"], function(exports, OutSystems, UBTConnect_UtilsModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var CacheControl_UserInformationList = (function(_super) {
        __extends(CacheControl_UserInformationList, _super);

        function CacheControl_UserInformationList(defaults) {
            _super.apply(this, arguments);
        }
        CacheControl_UserInformationList.itemType = UBTConnect_UtilsModel.CacheControl_UserInformationRec;
        return CacheControl_UserInformationList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.CacheControl_UserInformationList = CacheControl_UserInformationList;

});
define("Connect2_Assemble_MUI.model$AssembleEventContact2List", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_Assemble_MUI.model", "Connect2_LegacyShared.model$MemberContactWithTimezoneRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_LegacyShared"], function(exports, OutSystems, Connect2_LegacySharedModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var AssembleEventContact2List = (function(_super) {
        __extends(AssembleEventContact2List, _super);

        function AssembleEventContact2List(defaults) {
            _super.apply(this, arguments);
        }
        AssembleEventContact2List.itemType = Connect2_LegacySharedModel.MemberContactWithTimezoneRec;
        return AssembleEventContact2List;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.AssembleEventContact2List = AssembleEventContact2List;

});
define("Connect2_Assemble_MUI.model$ViewmodeTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_CS.model", "Connect2_Assemble_MUI.model", "Connect2_Assemble_CS.model$ViewmodeTypeRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_Assemble_CS"], function(exports, OutSystems, Connect2_Assemble_CSModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var ViewmodeTypeRecord = (function(_super) {
        __extends(ViewmodeTypeRecord, _super);

        function ViewmodeTypeRecord(defaults) {
            _super.apply(this, arguments);
        }
        ViewmodeTypeRecord.attributesToDeclare = function() {
            return [
                this.attr("ViewmodeType", "viewmodeTypeAttr", "ViewmodeType", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_Assemble_CSModel.ViewmodeTypeRec());
                }, true, Connect2_Assemble_CSModel.ViewmodeTypeRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        ViewmodeTypeRecord.fromStructure = function(str) {
            return new ViewmodeTypeRecord(new ViewmodeTypeRecord.RecordClass({
                viewmodeTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        ViewmodeTypeRecord._isAnonymousRecord = true;
        ViewmodeTypeRecord.UniqueId = "ccbadb6f-48fe-eb2e-f332-1a11779e870c";
        ViewmodeTypeRecord.init();
        return ViewmodeTypeRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.ViewmodeTypeRecord = ViewmodeTypeRecord;

});
define("Connect2_Assemble_MUI.model$ViewmodeTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$ViewmodeTypeRecord"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var ViewmodeTypeRecordList = (function(_super) {
        __extends(ViewmodeTypeRecordList, _super);

        function ViewmodeTypeRecordList(defaults) {
            _super.apply(this, arguments);
        }
        ViewmodeTypeRecordList.itemType = Connect2_Assemble_MUIModel.ViewmodeTypeRecord;
        return ViewmodeTypeRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.ViewmodeTypeRecordList = ViewmodeTypeRecordList;

});
define("Connect2_Assemble_MUI.model$AssembleAttendeeSubdivisionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$AssembleAttendeeSubdivisionRecord"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var AssembleAttendeeSubdivisionRecordList = (function(_super) {
        __extends(AssembleAttendeeSubdivisionRecordList, _super);

        function AssembleAttendeeSubdivisionRecordList(defaults) {
            _super.apply(this, arguments);
        }
        AssembleAttendeeSubdivisionRecordList.itemType = Connect2_Assemble_MUIModel.AssembleAttendeeSubdivisionRecord;
        return AssembleAttendeeSubdivisionRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.AssembleAttendeeSubdivisionRecordList = AssembleAttendeeSubdivisionRecordList;

});
define("Connect2_Assemble_MUI.model$CacheableGeocodeInformationRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$CacheableGeocodeInformationRecord"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var CacheableGeocodeInformationRecordList = (function(_super) {
        __extends(CacheableGeocodeInformationRecordList, _super);

        function CacheableGeocodeInformationRecordList(defaults) {
            _super.apply(this, arguments);
        }
        CacheableGeocodeInformationRecordList.itemType = Connect2_Assemble_MUIModel.CacheableGeocodeInformationRecord;
        return CacheableGeocodeInformationRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.CacheableGeocodeInformationRecordList = CacheableGeocodeInformationRecordList;

});
define("Connect2_Assemble_MUI.model$SubdivisionLocalityRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$SubdivisionLocalityRecord"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var SubdivisionLocalityRecordList = (function(_super) {
        __extends(SubdivisionLocalityRecordList, _super);

        function SubdivisionLocalityRecordList(defaults) {
            _super.apply(this, arguments);
        }
        SubdivisionLocalityRecordList.itemType = Connect2_Assemble_MUIModel.SubdivisionLocalityRecord;
        return SubdivisionLocalityRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.SubdivisionLocalityRecordList = SubdivisionLocalityRecordList;

});
define("Connect2_Assemble_MUI.model$HallPhotoExtensive3List", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_Assemble_MUI.model", "APIDomain_Directory_IS.model$HallPhotoExtensiveRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS"], function(exports, OutSystems, APIDomain_Directory_ISModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var HallPhotoExtensive3List = (function(_super) {
        __extends(HallPhotoExtensive3List, _super);

        function HallPhotoExtensive3List(defaults) {
            _super.apply(this, arguments);
        }
        HallPhotoExtensive3List.itemType = APIDomain_Directory_ISModel.HallPhotoExtensiveRec;
        return HallPhotoExtensive3List;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.HallPhotoExtensive3List = HallPhotoExtensive3List;

});
define("Connect2_Assemble_MUI.model$Subdivision_ById_GETResponseRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_Assemble_MUI.model", "APIDomain_Directory_IS.model$Subdivision_ById_GETResponseRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS"], function(exports, OutSystems, APIDomain_Directory_ISModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var Subdivision_ById_GETResponseRecord = (function(_super) {
        __extends(Subdivision_ById_GETResponseRecord, _super);

        function Subdivision_ById_GETResponseRecord(defaults) {
            _super.apply(this, arguments);
        }
        Subdivision_ById_GETResponseRecord.attributesToDeclare = function() {
            return [
                this.attr("Subdivision_ById_GETResponse", "subdivision_ById_GETResponseAttr", "Subdivision_ById_GETResponse", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.Subdivision_ById_GETResponseRec());
                }, true, APIDomain_Directory_ISModel.Subdivision_ById_GETResponseRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        Subdivision_ById_GETResponseRecord.fromStructure = function(str) {
            return new Subdivision_ById_GETResponseRecord(new Subdivision_ById_GETResponseRecord.RecordClass({
                subdivision_ById_GETResponseAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        Subdivision_ById_GETResponseRecord._isAnonymousRecord = true;
        Subdivision_ById_GETResponseRecord.UniqueId = "b7172f4a-d7ec-8a34-e1b0-df882f4a22d8";
        Subdivision_ById_GETResponseRecord.init();
        return Subdivision_ById_GETResponseRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.Subdivision_ById_GETResponseRecord = Subdivision_ById_GETResponseRecord;

});
define("Connect2_Assemble_MUI.model$Subdivision_ById_GETResponseRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$Subdivision_ById_GETResponseRecord"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var Subdivision_ById_GETResponseRecordList = (function(_super) {
        __extends(Subdivision_ById_GETResponseRecordList, _super);

        function Subdivision_ById_GETResponseRecordList(defaults) {
            _super.apply(this, arguments);
        }
        Subdivision_ById_GETResponseRecordList.itemType = Connect2_Assemble_MUIModel.Subdivision_ById_GETResponseRecord;
        return Subdivision_ById_GETResponseRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.Subdivision_ById_GETResponseRecordList = Subdivision_ById_GETResponseRecordList;

});
define("Connect2_Assemble_MUI.model$LocalBookmarkList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_Assemble_MUI.model", "Connect2_LegacyShared.model$LocalBookmarkRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_LegacyShared"], function(exports, OutSystems, Connect2_LegacySharedModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var LocalBookmarkList = (function(_super) {
        __extends(LocalBookmarkList, _super);

        function LocalBookmarkList(defaults) {
            _super.apply(this, arguments);
        }
        LocalBookmarkList.itemType = Connect2_LegacySharedModel.LocalBookmarkRec;
        return LocalBookmarkList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.LocalBookmarkList = LocalBookmarkList;

});
define("Connect2_Assemble_MUI.model$ContactByMessagePopupDataRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "Connect2_Assemble_MUI.model", "UBTConnect_Utils.model$ContactByMessagePopupDataRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$UBTConnect_Utils"], function(exports, OutSystems, UBTConnect_UtilsModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var ContactByMessagePopupDataRecord = (function(_super) {
        __extends(ContactByMessagePopupDataRecord, _super);

        function ContactByMessagePopupDataRecord(defaults) {
            _super.apply(this, arguments);
        }
        ContactByMessagePopupDataRecord.attributesToDeclare = function() {
            return [
                this.attr("ContactByMessagePopupData", "contactByMessagePopupDataAttr", "ContactByMessagePopupData", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnect_UtilsModel.ContactByMessagePopupDataRec());
                }, true, UBTConnect_UtilsModel.ContactByMessagePopupDataRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        ContactByMessagePopupDataRecord.fromStructure = function(str) {
            return new ContactByMessagePopupDataRecord(new ContactByMessagePopupDataRecord.RecordClass({
                contactByMessagePopupDataAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        ContactByMessagePopupDataRecord._isAnonymousRecord = true;
        ContactByMessagePopupDataRecord.UniqueId = "b8f83af3-009e-edbc-c436-a23ab699d981";
        ContactByMessagePopupDataRecord.init();
        return ContactByMessagePopupDataRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.ContactByMessagePopupDataRecord = ContactByMessagePopupDataRecord;

});
define("Connect2_Assemble_MUI.model$ColorRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_Assemble_MUI.model", "OutSystemsUI_2_23.model$ColorRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$OutSystemsUI_2_23"], function(exports, OutSystems, OutSystemsUI_2_23Model, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var ColorRecord = (function(_super) {
        __extends(ColorRecord, _super);

        function ColorRecord(defaults) {
            _super.apply(this, arguments);
        }
        ColorRecord.attributesToDeclare = function() {
            return [
                this.attr("Color", "colorAttr", "Color", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.ColorRec());
                }, true, OutSystemsUI_2_23Model.ColorRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        ColorRecord.fromStructure = function(str) {
            return new ColorRecord(new ColorRecord.RecordClass({
                colorAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        ColorRecord._isAnonymousRecord = true;
        ColorRecord.UniqueId = "b9ca3ce2-cce6-fb6c-6a64-3d347a5ec750";
        ColorRecord.init();
        return ColorRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.ColorRecord = ColorRecord;

});
define("Connect2_Assemble_MUI.model$LocalBookmarkRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_Assemble_MUI.model", "Connect2_LegacyShared.model$LocalBookmarkRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_LegacyShared"], function(exports, OutSystems, Connect2_LegacySharedModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var LocalBookmarkRecord = (function(_super) {
        __extends(LocalBookmarkRecord, _super);

        function LocalBookmarkRecord(defaults) {
            _super.apply(this, arguments);
        }
        LocalBookmarkRecord.attributesToDeclare = function() {
            return [
                this.attr("LocalBookmark", "localBookmarkAttr", "LocalBookmark", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.LocalBookmarkRec());
                }, true, Connect2_LegacySharedModel.LocalBookmarkRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        LocalBookmarkRecord.fromStructure = function(str) {
            return new LocalBookmarkRecord(new LocalBookmarkRecord.RecordClass({
                localBookmarkAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        LocalBookmarkRecord._isAnonymousRecord = true;
        LocalBookmarkRecord.UniqueId = "b9fb5354-c450-4d8a-c89a-3d31a340832e";
        LocalBookmarkRecord.init();
        return LocalBookmarkRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.LocalBookmarkRecord = LocalBookmarkRecord;

});
define("Connect2_Assemble_MUI.model$DateTimeDateTimeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$DateTimeDateTimeRecord"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var DateTimeDateTimeRecordList = (function(_super) {
        __extends(DateTimeDateTimeRecordList, _super);

        function DateTimeDateTimeRecordList(defaults) {
            _super.apply(this, arguments);
        }
        DateTimeDateTimeRecordList.itemType = Connect2_Assemble_MUIModel.DateTimeDateTimeRecord;
        return DateTimeDateTimeRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.DateTimeDateTimeRecordList = DateTimeDateTimeRecordList;

});
define("Connect2_Assemble_MUI.model$HallPhoto2List", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_Assemble_MUI.model", "APIDomain_Directory_IS.model$HallPhotoRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS"], function(exports, OutSystems, APIDomain_Directory_ISModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var HallPhoto2List = (function(_super) {
        __extends(HallPhoto2List, _super);

        function HallPhoto2List(defaults) {
            _super.apply(this, arguments);
        }
        HallPhoto2List.itemType = APIDomain_Directory_ISModel.HallPhotoRec;
        return HallPhoto2List;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.HallPhoto2List = HallPhoto2List;

});
define("Connect2_Assemble_MUI.model$CDNList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_Assemble_MUI.model", "APIDomain_Directory_IS.model$CDNRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS"], function(exports, OutSystems, APIDomain_Directory_ISModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var CDNList = (function(_super) {
        __extends(CDNList, _super);

        function CDNList(defaults) {
            _super.apply(this, arguments);
        }
        CDNList.itemType = APIDomain_Directory_ISModel.CDNRec;
        return CDNList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.CDNList = CDNList;

});
define("Connect2_Assemble_MUI.model$Connect_Entity2List", ["exports", "OutSystems/ClientRuntime/Main", "Connect_CommonEntities_DB.model", "Connect2_Assemble_MUI.model", "Connect_CommonEntities_DB.model$Connect_EntityRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect_CommonEntities_DB"], function(exports, OutSystems, Connect_CommonEntities_DBModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var Connect_Entity2List = (function(_super) {
        __extends(Connect_Entity2List, _super);

        function Connect_Entity2List(defaults) {
            _super.apply(this, arguments);
        }
        Connect_Entity2List.itemType = Connect_CommonEntities_DBModel.Connect_EntityRec;
        return Connect_Entity2List;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.Connect_Entity2List = Connect_Entity2List;

});
define("Connect2_Assemble_MUI.model$ShapeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$ShapeRecord"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var ShapeRecordList = (function(_super) {
        __extends(ShapeRecordList, _super);

        function ShapeRecordList(defaults) {
            _super.apply(this, arguments);
        }
        ShapeRecordList.itemType = Connect2_Assemble_MUIModel.ShapeRecord;
        return ShapeRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.ShapeRecordList = ShapeRecordList;

});
define("Connect2_Assemble_MUI.model$MemoryCacheResultList", ["exports", "OutSystems/ClientRuntime/Main", "MemoryClientCache.model", "Connect2_Assemble_MUI.model", "MemoryClientCache.model$MemoryCacheResultRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$MemoryClientCache"], function(exports, OutSystems, MemoryClientCacheModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var MemoryCacheResultList = (function(_super) {
        __extends(MemoryCacheResultList, _super);

        function MemoryCacheResultList(defaults) {
            _super.apply(this, arguments);
        }
        MemoryCacheResultList.itemType = MemoryClientCacheModel.MemoryCacheResultRec;
        return MemoryCacheResultList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.MemoryCacheResultList = MemoryCacheResultList;

});
define("Connect2_Assemble_MUI.model$CacheableLocalityInformationRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_Assemble_MUI.model", "Connect2_LegacyShared.model$CacheableLocalityInformationRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_LegacyShared"], function(exports, OutSystems, Connect2_LegacySharedModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var CacheableLocalityInformationRecord = (function(_super) {
        __extends(CacheableLocalityInformationRecord, _super);

        function CacheableLocalityInformationRecord(defaults) {
            _super.apply(this, arguments);
        }
        CacheableLocalityInformationRecord.attributesToDeclare = function() {
            return [
                this.attr("CacheableLocalityInformation", "cacheableLocalityInformationAttr", "CacheableLocalityInformation", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.CacheableLocalityInformationRec());
                }, true, Connect2_LegacySharedModel.CacheableLocalityInformationRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        CacheableLocalityInformationRecord.fromStructure = function(str) {
            return new CacheableLocalityInformationRecord(new CacheableLocalityInformationRecord.RecordClass({
                cacheableLocalityInformationAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        CacheableLocalityInformationRecord._isAnonymousRecord = true;
        CacheableLocalityInformationRecord.UniqueId = "bffb0164-d348-91fa-fe8a-679847f00fdc";
        CacheableLocalityInformationRecord.init();
        return CacheableLocalityInformationRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.CacheableLocalityInformationRecord = CacheableLocalityInformationRecord;

});
define("Connect2_Assemble_MUI.model$Locality2Record", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_Assemble_MUI.model", "APIDomain_Directory_IS.model$LocalityRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS"], function(exports, OutSystems, APIDomain_Directory_ISModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var Locality2Record = (function(_super) {
        __extends(Locality2Record, _super);

        function Locality2Record(defaults) {
            _super.apply(this, arguments);
        }
        Locality2Record.attributesToDeclare = function() {
            return [
                this.attr("Locality", "localityAttr", "Locality2", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.LocalityRec());
                }, true, APIDomain_Directory_ISModel.LocalityRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        Locality2Record.fromStructure = function(str) {
            return new Locality2Record(new Locality2Record.RecordClass({
                localityAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        Locality2Record._isAnonymousRecord = true;
        Locality2Record.UniqueId = "c03dcc02-7922-03ee-9d9e-39e2c4d9e0e7";
        Locality2Record.init();
        return Locality2Record;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.Locality2Record = Locality2Record;

});
define("Connect2_Assemble_MUI.model$MyBookmarks_GroupRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_BL.model", "Connect2_Assemble_MUI.model", "Connect2_MyBookmarks_BL.model$MyBookmarks_GroupRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_MyBookmarks_BL"], function(exports, OutSystems, Connect2_MyBookmarks_BLModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var MyBookmarks_GroupRecord = (function(_super) {
        __extends(MyBookmarks_GroupRecord, _super);

        function MyBookmarks_GroupRecord(defaults) {
            _super.apply(this, arguments);
        }
        MyBookmarks_GroupRecord.attributesToDeclare = function() {
            return [
                this.attr("MyBookmarks_Group", "myBookmarks_GroupAttr", "MyBookmarks_Group", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_MyBookmarks_BLModel.MyBookmarks_GroupRec());
                }, true, Connect2_MyBookmarks_BLModel.MyBookmarks_GroupRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        MyBookmarks_GroupRecord.fromStructure = function(str) {
            return new MyBookmarks_GroupRecord(new MyBookmarks_GroupRecord.RecordClass({
                myBookmarks_GroupAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        MyBookmarks_GroupRecord._isAnonymousRecord = true;
        MyBookmarks_GroupRecord.UniqueId = "d5562bf4-2fac-a49a-16aa-434ebfa850c3";
        MyBookmarks_GroupRecord.init();
        return MyBookmarks_GroupRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.MyBookmarks_GroupRecord = MyBookmarks_GroupRecord;

});
define("Connect2_Assemble_MUI.model$MyBookmarks_GroupRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$MyBookmarks_GroupRecord"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var MyBookmarks_GroupRecordList = (function(_super) {
        __extends(MyBookmarks_GroupRecordList, _super);

        function MyBookmarks_GroupRecordList(defaults) {
            _super.apply(this, arguments);
        }
        MyBookmarks_GroupRecordList.itemType = Connect2_Assemble_MUIModel.MyBookmarks_GroupRecord;
        return MyBookmarks_GroupRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.MyBookmarks_GroupRecordList = MyBookmarks_GroupRecordList;

});
define("Connect2_Assemble_MUI.model$GetLocalityStatisticsResponseRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$GetLocalityStatisticsResponseRecord"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var GetLocalityStatisticsResponseRecordList = (function(_super) {
        __extends(GetLocalityStatisticsResponseRecordList, _super);

        function GetLocalityStatisticsResponseRecordList(defaults) {
            _super.apply(this, arguments);
        }
        GetLocalityStatisticsResponseRecordList.itemType = Connect2_Assemble_MUIModel.GetLocalityStatisticsResponseRecord;
        return GetLocalityStatisticsResponseRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.GetLocalityStatisticsResponseRecordList = GetLocalityStatisticsResponseRecordList;

});
define("Connect2_Assemble_MUI.model$OpeningHourItemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$OpeningHourItemRecord"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var OpeningHourItemRecordList = (function(_super) {
        __extends(OpeningHourItemRecordList, _super);

        function OpeningHourItemRecordList(defaults) {
            _super.apply(this, arguments);
        }
        OpeningHourItemRecordList.itemType = Connect2_Assemble_MUIModel.OpeningHourItemRecord;
        return OpeningHourItemRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.OpeningHourItemRecordList = OpeningHourItemRecordList;

});
define("Connect2_Assemble_MUI.model$InterchangeItemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$InterchangeItemRecord"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var InterchangeItemRecordList = (function(_super) {
        __extends(InterchangeItemRecordList, _super);

        function InterchangeItemRecordList(defaults) {
            _super.apply(this, arguments);
        }
        InterchangeItemRecordList.itemType = Connect2_Assemble_MUIModel.InterchangeItemRecord;
        return InterchangeItemRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.InterchangeItemRecordList = InterchangeItemRecordList;

});
define("Connect2_Assemble_MUI.model$SubscriptionList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_Assemble_MUI.model", "APIDomain_Directory_IS.model$SubscriptionRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS"], function(exports, OutSystems, APIDomain_Directory_ISModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var SubscriptionList = (function(_super) {
        __extends(SubscriptionList, _super);

        function SubscriptionList(defaults) {
            _super.apply(this, arguments);
        }
        SubscriptionList.itemType = APIDomain_Directory_ISModel.SubscriptionRec;
        return SubscriptionList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.SubscriptionList = SubscriptionList;

});
define("Connect2_Assemble_MUI.model$ContactByMessagePopupDataRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$ContactByMessagePopupDataRecord"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var ContactByMessagePopupDataRecordList = (function(_super) {
        __extends(ContactByMessagePopupDataRecordList, _super);

        function ContactByMessagePopupDataRecordList(defaults) {
            _super.apply(this, arguments);
        }
        ContactByMessagePopupDataRecordList.itemType = Connect2_Assemble_MUIModel.ContactByMessagePopupDataRecord;
        return ContactByMessagePopupDataRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.ContactByMessagePopupDataRecordList = ContactByMessagePopupDataRecordList;

});
define("Connect2_Assemble_MUI.model$Connect_Entity2RecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$Connect_Entity2Record"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var Connect_Entity2RecordList = (function(_super) {
        __extends(Connect_Entity2RecordList, _super);

        function Connect_Entity2RecordList(defaults) {
            _super.apply(this, arguments);
        }
        Connect_Entity2RecordList.itemType = Connect2_Assemble_MUIModel.Connect_Entity2Record;
        return Connect_Entity2RecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.Connect_Entity2RecordList = Connect_Entity2RecordList;

});
define("Connect2_Assemble_MUI.model$CountryWithMapPositionRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_Assemble_MUI.model", "Connect2_LegacyShared.model$CountryWithMapPositionRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_LegacyShared"], function(exports, OutSystems, Connect2_LegacySharedModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var CountryWithMapPositionRecord = (function(_super) {
        __extends(CountryWithMapPositionRecord, _super);

        function CountryWithMapPositionRecord(defaults) {
            _super.apply(this, arguments);
        }
        CountryWithMapPositionRecord.attributesToDeclare = function() {
            return [
                this.attr("CountryWithMapPosition", "countryWithMapPositionAttr", "CountryWithMapPosition", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.CountryWithMapPositionRec());
                }, true, Connect2_LegacySharedModel.CountryWithMapPositionRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        CountryWithMapPositionRecord.fromStructure = function(str) {
            return new CountryWithMapPositionRecord(new CountryWithMapPositionRecord.RecordClass({
                countryWithMapPositionAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        CountryWithMapPositionRecord._isAnonymousRecord = true;
        CountryWithMapPositionRecord.UniqueId = "c720f651-2f17-9b7e-5b82-d2943e69a968";
        CountryWithMapPositionRecord.init();
        return CountryWithMapPositionRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.CountryWithMapPositionRecord = CountryWithMapPositionRecord;

});
define("Connect2_Assemble_MUI.model$LauncherParametersRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$LauncherParametersRecord"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var LauncherParametersRecordList = (function(_super) {
        __extends(LauncherParametersRecordList, _super);

        function LauncherParametersRecordList(defaults) {
            _super.apply(this, arguments);
        }
        LauncherParametersRecordList.itemType = Connect2_Assemble_MUIModel.LauncherParametersRecord;
        return LauncherParametersRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.LauncherParametersRecordList = LauncherParametersRecordList;

});
define("Connect2_Assemble_MUI.model$MyBookmarks_ObjectTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_IS.model", "Connect2_Assemble_MUI.model", "Connect2_MyBookmarks_IS.model$MyBookmarks_ObjectTypeRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_MyBookmarks_IS"], function(exports, OutSystems, Connect2_MyBookmarks_ISModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var MyBookmarks_ObjectTypeRecord = (function(_super) {
        __extends(MyBookmarks_ObjectTypeRecord, _super);

        function MyBookmarks_ObjectTypeRecord(defaults) {
            _super.apply(this, arguments);
        }
        MyBookmarks_ObjectTypeRecord.attributesToDeclare = function() {
            return [
                this.attr("MyBookmarks_ObjectType", "myBookmarks_ObjectTypeAttr", "MyBookmarks_ObjectType", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_MyBookmarks_ISModel.MyBookmarks_ObjectTypeRec());
                }, true, Connect2_MyBookmarks_ISModel.MyBookmarks_ObjectTypeRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        MyBookmarks_ObjectTypeRecord.fromStructure = function(str) {
            return new MyBookmarks_ObjectTypeRecord(new MyBookmarks_ObjectTypeRecord.RecordClass({
                myBookmarks_ObjectTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        MyBookmarks_ObjectTypeRecord._isAnonymousRecord = true;
        MyBookmarks_ObjectTypeRecord.UniqueId = "c8e45004-2c67-ba1f-8483-7a5a6c10d5bc";
        MyBookmarks_ObjectTypeRecord.init();
        return MyBookmarks_ObjectTypeRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.MyBookmarks_ObjectTypeRecord = MyBookmarks_ObjectTypeRecord;

});
define("Connect2_Assemble_MUI.model$PhotoRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$PhotoRecord"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var PhotoRecordList = (function(_super) {
        __extends(PhotoRecordList, _super);

        function PhotoRecordList(defaults) {
            _super.apply(this, arguments);
        }
        PhotoRecordList.itemType = Connect2_Assemble_MUIModel.PhotoRecord;
        return PhotoRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.PhotoRecordList = PhotoRecordList;

});
define("Connect2_Assemble_MUI.model$CountryRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_Assemble_MUI.model", "APIDomain_Directory_IS.model$CountryRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS"], function(exports, OutSystems, APIDomain_Directory_ISModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var CountryRecord = (function(_super) {
        __extends(CountryRecord, _super);

        function CountryRecord(defaults) {
            _super.apply(this, arguments);
        }
        CountryRecord.attributesToDeclare = function() {
            return [
                this.attr("Country", "countryAttr", "Country", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.CountryRec());
                }, true, APIDomain_Directory_ISModel.CountryRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        CountryRecord.fromStructure = function(str) {
            return new CountryRecord(new CountryRecord.RecordClass({
                countryAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        CountryRecord._isAnonymousRecord = true;
        CountryRecord.UniqueId = "ca5bf4ee-fb3d-ba53-00f5-83305fe3b8e6";
        CountryRecord.init();
        return CountryRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.CountryRecord = CountryRecord;

});
define("Connect2_Assemble_MUI.model$Text1Record", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var Text1Record = (function(_super) {
        __extends(Text1Record, _super);

        function Text1Record(defaults) {
            _super.apply(this, arguments);
        }
        Text1Record.attributesToDeclare = function() {
            return [
                this.attr("Text", "textAttr", "Text", false, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, true)
            ].concat(_super.attributesToDeclare.call(this));
        };
        Text1Record.fromStructure = function(str) {
            return new Text1Record(new Text1Record.RecordClass({
                textAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        Text1Record._isAnonymousRecord = true;
        Text1Record.UniqueId = "ca61515b-5f1b-81a3-f63a-72f69693ae36";
        Text1Record.init();
        return Text1Record;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.Text1Record = Text1Record;

});
define("Connect2_Assemble_MUI.model$AssembleEventContactList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_CS.model", "Connect2_Assemble_MUI.model", "Connect2_Assemble_CS.model$AssembleEventContactRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_Assemble_CS"], function(exports, OutSystems, Connect2_Assemble_CSModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var AssembleEventContactList = (function(_super) {
        __extends(AssembleEventContactList, _super);

        function AssembleEventContactList(defaults) {
            _super.apply(this, arguments);
        }
        AssembleEventContactList.itemType = Connect2_Assemble_CSModel.AssembleEventContactRec;
        return AssembleEventContactList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.AssembleEventContactList = AssembleEventContactList;

});
define("Connect2_Assemble_MUI.model$AssembleEventContact2RecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$AssembleEventContact2Record"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var AssembleEventContact2RecordList = (function(_super) {
        __extends(AssembleEventContact2RecordList, _super);

        function AssembleEventContact2RecordList(defaults) {
            _super.apply(this, arguments);
        }
        AssembleEventContact2RecordList.itemType = Connect2_Assemble_MUIModel.AssembleEventContact2Record;
        return AssembleEventContact2RecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.AssembleEventContact2RecordList = AssembleEventContact2RecordList;

});
define("Connect2_Assemble_MUI.model$UI_ContactByMessage_WrapperDataRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$UI_ContactByMessage_WrapperDataRecord"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var UI_ContactByMessage_WrapperDataRecordList = (function(_super) {
        __extends(UI_ContactByMessage_WrapperDataRecordList, _super);

        function UI_ContactByMessage_WrapperDataRecordList(defaults) {
            _super.apply(this, arguments);
        }
        UI_ContactByMessage_WrapperDataRecordList.itemType = Connect2_Assemble_MUIModel.UI_ContactByMessage_WrapperDataRecord;
        return UI_ContactByMessage_WrapperDataRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.UI_ContactByMessage_WrapperDataRecordList = UI_ContactByMessage_WrapperDataRecordList;

});
define("Connect2_Assemble_MUI.model$AssembleEventFilterList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_CS.model", "Connect2_Assemble_MUI.model", "Connect2_Assemble_CS.model$AssembleEventFilterRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_Assemble_CS"], function(exports, OutSystems, Connect2_Assemble_CSModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var AssembleEventFilterList = (function(_super) {
        __extends(AssembleEventFilterList, _super);

        function AssembleEventFilterList(defaults) {
            _super.apply(this, arguments);
        }
        AssembleEventFilterList.itemType = Connect2_Assemble_CSModel.AssembleEventFilterRec;
        return AssembleEventFilterList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.AssembleEventFilterList = AssembleEventFilterList;

});
define("Connect2_Assemble_MUI.model$MyBookmarks_ObjectTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$MyBookmarks_ObjectTypeRecord"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var MyBookmarks_ObjectTypeRecordList = (function(_super) {
        __extends(MyBookmarks_ObjectTypeRecordList, _super);

        function MyBookmarks_ObjectTypeRecordList(defaults) {
            _super.apply(this, arguments);
        }
        MyBookmarks_ObjectTypeRecordList.itemType = Connect2_Assemble_MUIModel.MyBookmarks_ObjectTypeRecord;
        return MyBookmarks_ObjectTypeRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.MyBookmarks_ObjectTypeRecordList = MyBookmarks_ObjectTypeRecordList;

});
define("Connect2_Assemble_MUI.model$Householder_MemberRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_Assemble_MUI.model", "APIDomain_Directory_IS.model$Householder_MemberRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS"], function(exports, OutSystems, APIDomain_Directory_ISModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var Householder_MemberRecord = (function(_super) {
        __extends(Householder_MemberRecord, _super);

        function Householder_MemberRecord(defaults) {
            _super.apply(this, arguments);
        }
        Householder_MemberRecord.attributesToDeclare = function() {
            return [
                this.attr("Householder_Member", "householder_MemberAttr", "Householder_Member", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.Householder_MemberRec());
                }, true, APIDomain_Directory_ISModel.Householder_MemberRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        Householder_MemberRecord.fromStructure = function(str) {
            return new Householder_MemberRecord(new Householder_MemberRecord.RecordClass({
                householder_MemberAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        Householder_MemberRecord._isAnonymousRecord = true;
        Householder_MemberRecord.UniqueId = "cec076a0-962e-2e49-dcdc-340914fdcaa8";
        Householder_MemberRecord.init();
        return Householder_MemberRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.Householder_MemberRecord = Householder_MemberRecord;

});
define("Connect2_Assemble_MUI.model$SubdivisionExtendedRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$SubdivisionExtendedRecord"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var SubdivisionExtendedRecordList = (function(_super) {
        __extends(SubdivisionExtendedRecordList, _super);

        function SubdivisionExtendedRecordList(defaults) {
            _super.apply(this, arguments);
        }
        SubdivisionExtendedRecordList.itemType = Connect2_Assemble_MUIModel.SubdivisionExtendedRecord;
        return SubdivisionExtendedRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.SubdivisionExtendedRecordList = SubdivisionExtendedRecordList;

});
define("Connect2_Assemble_MUI.model$UI_ShareableObject_GenericList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Sharing_CS.model", "Connect2_Assemble_MUI.model", "Connect2_Sharing_CS.model$UI_ShareableObject_GenericRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_Sharing_CS"], function(exports, OutSystems, Connect2_Sharing_CSModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var UI_ShareableObject_GenericList = (function(_super) {
        __extends(UI_ShareableObject_GenericList, _super);

        function UI_ShareableObject_GenericList(defaults) {
            _super.apply(this, arguments);
        }
        UI_ShareableObject_GenericList.itemType = Connect2_Sharing_CSModel.UI_ShareableObject_GenericRec;
        return UI_ShareableObject_GenericList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.UI_ShareableObject_GenericList = UI_ShareableObject_GenericList;

});
define("Connect2_Assemble_MUI.model$CacheControl_UserInformationRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$CacheControl_UserInformationRecord"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var CacheControl_UserInformationRecordList = (function(_super) {
        __extends(CacheControl_UserInformationRecordList, _super);

        function CacheControl_UserInformationRecordList(defaults) {
            _super.apply(this, arguments);
        }
        CacheControl_UserInformationRecordList.itemType = Connect2_Assemble_MUIModel.CacheControl_UserInformationRecord;
        return CacheControl_UserInformationRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.CacheControl_UserInformationRecordList = CacheControl_UserInformationRecordList;

});
define("Connect2_Assemble_MUI.model$PositionRecord", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_Assemble_MUI.model", "OutSystemsUI_2_23.model$PositionRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$OutSystemsUI_2_23"], function(exports, OutSystems, OutSystemsUI_2_23Model, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var PositionRecord = (function(_super) {
        __extends(PositionRecord, _super);

        function PositionRecord(defaults) {
            _super.apply(this, arguments);
        }
        PositionRecord.attributesToDeclare = function() {
            return [
                this.attr("Position", "positionAttr", "Position", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.PositionRec());
                }, true, OutSystemsUI_2_23Model.PositionRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        PositionRecord.fromStructure = function(str) {
            return new PositionRecord(new PositionRecord.RecordClass({
                positionAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        PositionRecord._isAnonymousRecord = true;
        PositionRecord.UniqueId = "d2de5608-cd0b-09c9-dac8-81bb66d10271";
        PositionRecord.init();
        return PositionRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.PositionRecord = PositionRecord;

});
define("Connect2_Assemble_MUI.model$ImageDataRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_Assemble_MUI.model", "APIDomain_Directory_IS.model$ImageDataRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS"], function(exports, OutSystems, APIDomain_Directory_ISModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var ImageDataRecord = (function(_super) {
        __extends(ImageDataRecord, _super);

        function ImageDataRecord(defaults) {
            _super.apply(this, arguments);
        }
        ImageDataRecord.attributesToDeclare = function() {
            return [
                this.attr("ImageData", "imageDataAttr", "ImageData", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.ImageDataRec());
                }, true, APIDomain_Directory_ISModel.ImageDataRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        ImageDataRecord.fromStructure = function(str) {
            return new ImageDataRecord(new ImageDataRecord.RecordClass({
                imageDataAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        ImageDataRecord._isAnonymousRecord = true;
        ImageDataRecord.UniqueId = "f98be347-1fa7-061c-67b0-0d46eff090b4";
        ImageDataRecord.init();
        return ImageDataRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.ImageDataRecord = ImageDataRecord;

});
define("Connect2_Assemble_MUI.model$ImageDataRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$ImageDataRecord"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var ImageDataRecordList = (function(_super) {
        __extends(ImageDataRecordList, _super);

        function ImageDataRecordList(defaults) {
            _super.apply(this, arguments);
        }
        ImageDataRecordList.itemType = Connect2_Assemble_MUIModel.ImageDataRecord;
        return ImageDataRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.ImageDataRecordList = ImageDataRecordList;

});
define("Connect2_Assemble_MUI.model$TimezoneList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_Assemble_MUI.model", "APIDomain_Directory_IS.model$TimezoneRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS"], function(exports, OutSystems, APIDomain_Directory_ISModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var TimezoneList = (function(_super) {
        __extends(TimezoneList, _super);

        function TimezoneList(defaults) {
            _super.apply(this, arguments);
        }
        TimezoneList.itemType = APIDomain_Directory_ISModel.TimezoneRec;
        return TimezoneList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.TimezoneList = TimezoneList;

});
define("Connect2_Assemble_MUI.model$Directory_PhotoList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_Assemble_MUI.model", "APIDomain_Directory_IS.model$Directory_PhotoRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS"], function(exports, OutSystems, APIDomain_Directory_ISModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var Directory_PhotoList = (function(_super) {
        __extends(Directory_PhotoList, _super);

        function Directory_PhotoList(defaults) {
            _super.apply(this, arguments);
        }
        Directory_PhotoList.itemType = APIDomain_Directory_ISModel.Directory_PhotoRec;
        return Directory_PhotoList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.Directory_PhotoList = Directory_PhotoList;

});
define("Connect2_Assemble_MUI.model$Directory_UserCurrent_SubscriptionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$Directory_UserCurrent_SubscriptionRecord"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var Directory_UserCurrent_SubscriptionRecordList = (function(_super) {
        __extends(Directory_UserCurrent_SubscriptionRecordList, _super);

        function Directory_UserCurrent_SubscriptionRecordList(defaults) {
            _super.apply(this, arguments);
        }
        Directory_UserCurrent_SubscriptionRecordList.itemType = Connect2_Assemble_MUIModel.Directory_UserCurrent_SubscriptionRecord;
        return Directory_UserCurrent_SubscriptionRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.Directory_UserCurrent_SubscriptionRecordList = Directory_UserCurrent_SubscriptionRecordList;

});
define("Connect2_Assemble_MUI.model$DefaultCountryRecord", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_Assemble_MUI.model", "APIDomain_Directory_IS.model$DefaultCountryRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS"], function(exports, OutSystems, APIDomain_Directory_ISModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var DefaultCountryRecord = (function(_super) {
        __extends(DefaultCountryRecord, _super);

        function DefaultCountryRecord(defaults) {
            _super.apply(this, arguments);
        }
        DefaultCountryRecord.attributesToDeclare = function() {
            return [
                this.attr("DefaultCountry", "defaultCountryAttr", "DefaultCountry", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.DefaultCountryRec());
                }, true, APIDomain_Directory_ISModel.DefaultCountryRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        DefaultCountryRecord.fromStructure = function(str) {
            return new DefaultCountryRecord(new DefaultCountryRecord.RecordClass({
                defaultCountryAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        DefaultCountryRecord._isAnonymousRecord = true;
        DefaultCountryRecord.UniqueId = "f0cca3d9-97dc-9f7c-180c-008c0a8d209e";
        DefaultCountryRecord.init();
        return DefaultCountryRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.DefaultCountryRecord = DefaultCountryRecord;

});
define("Connect2_Assemble_MUI.model$DefaultCountryRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$DefaultCountryRecord"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var DefaultCountryRecordList = (function(_super) {
        __extends(DefaultCountryRecordList, _super);

        function DefaultCountryRecordList(defaults) {
            _super.apply(this, arguments);
        }
        DefaultCountryRecordList.itemType = Connect2_Assemble_MUIModel.DefaultCountryRecord;
        return DefaultCountryRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.DefaultCountryRecordList = DefaultCountryRecordList;

});
define("Connect2_Assemble_MUI.model$AssembleEventSummaryRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_CS.model", "Connect2_Assemble_MUI.model", "Connect2_Assemble_CS.model$AssembleEventSummaryRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_Assemble_CS"], function(exports, OutSystems, Connect2_Assemble_CSModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var AssembleEventSummaryRecord = (function(_super) {
        __extends(AssembleEventSummaryRecord, _super);

        function AssembleEventSummaryRecord(defaults) {
            _super.apply(this, arguments);
        }
        AssembleEventSummaryRecord.attributesToDeclare = function() {
            return [
                this.attr("AssembleEventSummary", "assembleEventSummaryAttr", "AssembleEventSummary", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_Assemble_CSModel.AssembleEventSummaryRec());
                }, true, Connect2_Assemble_CSModel.AssembleEventSummaryRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        AssembleEventSummaryRecord.fromStructure = function(str) {
            return new AssembleEventSummaryRecord(new AssembleEventSummaryRecord.RecordClass({
                assembleEventSummaryAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        AssembleEventSummaryRecord._isAnonymousRecord = true;
        AssembleEventSummaryRecord.UniqueId = "fb4c50da-2da7-1a30-a20e-a31886106661";
        AssembleEventSummaryRecord.init();
        return AssembleEventSummaryRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.AssembleEventSummaryRecord = AssembleEventSummaryRecord;

});
define("Connect2_Assemble_MUI.model$AssembleEventSummaryRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$AssembleEventSummaryRecord"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var AssembleEventSummaryRecordList = (function(_super) {
        __extends(AssembleEventSummaryRecordList, _super);

        function AssembleEventSummaryRecordList(defaults) {
            _super.apply(this, arguments);
        }
        AssembleEventSummaryRecordList.itemType = Connect2_Assemble_MUIModel.AssembleEventSummaryRecord;
        return AssembleEventSummaryRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.AssembleEventSummaryRecordList = AssembleEventSummaryRecordList;

});
define("Connect2_Assemble_MUI.model$Directory_UserCurrentRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$Directory_UserCurrentRecord"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var Directory_UserCurrentRecordList = (function(_super) {
        __extends(Directory_UserCurrentRecordList, _super);

        function Directory_UserCurrentRecordList(defaults) {
            _super.apply(this, arguments);
        }
        Directory_UserCurrentRecordList.itemType = Connect2_Assemble_MUIModel.Directory_UserCurrentRecord;
        return Directory_UserCurrentRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.Directory_UserCurrentRecordList = Directory_UserCurrentRecordList;

});
define("Connect2_Assemble_MUI.model$HallPhotoExtensive3Record", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_Assemble_MUI.model", "APIDomain_Directory_IS.model$HallPhotoExtensiveRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS"], function(exports, OutSystems, APIDomain_Directory_ISModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var HallPhotoExtensive3Record = (function(_super) {
        __extends(HallPhotoExtensive3Record, _super);

        function HallPhotoExtensive3Record(defaults) {
            _super.apply(this, arguments);
        }
        HallPhotoExtensive3Record.attributesToDeclare = function() {
            return [
                this.attr("HallPhotoExtensive", "hallPhotoExtensiveAttr", "HallPhotoExtensive3", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.HallPhotoExtensiveRec());
                }, true, APIDomain_Directory_ISModel.HallPhotoExtensiveRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        HallPhotoExtensive3Record.fromStructure = function(str) {
            return new HallPhotoExtensive3Record(new HallPhotoExtensive3Record.RecordClass({
                hallPhotoExtensiveAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        HallPhotoExtensive3Record._isAnonymousRecord = true;
        HallPhotoExtensive3Record.UniqueId = "db3af86a-07d8-c8f8-d098-ed27ef4636ae";
        HallPhotoExtensive3Record.init();
        return HallPhotoExtensive3Record;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.HallPhotoExtensive3Record = HallPhotoExtensive3Record;

});
define("Connect2_Assemble_MUI.model$LauncherReturnRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$LauncherReturnRecord"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var LauncherReturnRecordList = (function(_super) {
        __extends(LauncherReturnRecordList, _super);

        function LauncherReturnRecordList(defaults) {
            _super.apply(this, arguments);
        }
        LauncherReturnRecordList.itemType = Connect2_Assemble_MUIModel.LauncherReturnRecord;
        return LauncherReturnRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.LauncherReturnRecordList = LauncherReturnRecordList;

});
define("Connect2_Assemble_MUI.model$Directory_UserCurrent_GeographyRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$Directory_UserCurrent_GeographyRecord"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var Directory_UserCurrent_GeographyRecordList = (function(_super) {
        __extends(Directory_UserCurrent_GeographyRecordList, _super);

        function Directory_UserCurrent_GeographyRecordList(defaults) {
            _super.apply(this, arguments);
        }
        Directory_UserCurrent_GeographyRecordList.itemType = Connect2_Assemble_MUIModel.Directory_UserCurrent_GeographyRecord;
        return Directory_UserCurrent_GeographyRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.Directory_UserCurrent_GeographyRecordList = Directory_UserCurrent_GeographyRecordList;

});
define("Connect2_Assemble_MUI.model$ContactPopupDataList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "Connect2_Assemble_MUI.model", "UBTConnect_Utils.model$ContactPopupDataRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$UBTConnect_Utils"], function(exports, OutSystems, UBTConnect_UtilsModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var ContactPopupDataList = (function(_super) {
        __extends(ContactPopupDataList, _super);

        function ContactPopupDataList(defaults) {
            _super.apply(this, arguments);
        }
        ContactPopupDataList.itemType = UBTConnect_UtilsModel.ContactPopupDataRec;
        return ContactPopupDataList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.ContactPopupDataList = ContactPopupDataList;

});
define("Connect2_Assemble_MUI.model$Text1RecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$Text1Record"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var Text1RecordList = (function(_super) {
        __extends(Text1RecordList, _super);

        function Text1RecordList(defaults) {
            _super.apply(this, arguments);
        }
        Text1RecordList.itemType = Connect2_Assemble_MUIModel.Text1Record;
        return Text1RecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.Text1RecordList = Text1RecordList;

});
define("Connect2_Assemble_MUI.model$TextLongIntegerLongIntegerRecord", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var TextLongIntegerLongIntegerRecord = (function(_super) {
        __extends(TextLongIntegerLongIntegerRecord, _super);

        function TextLongIntegerLongIntegerRecord(defaults) {
            _super.apply(this, arguments);
        }
        TextLongIntegerLongIntegerRecord.attributesToDeclare = function() {
            return [
                this.attr("CountryCode", "countryCodeAttr", "CountryCode", false, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, true),
                this.attr("HouseholdId", "householdIdAttr", "HouseholdId", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                    return OS.DataTypes.LongInteger.defaultValue;
                }, true),
                this.attr("LocalityId", "localityIdAttr", "LocalityId", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                    return OS.DataTypes.LongInteger.defaultValue;
                }, true)
            ].concat(_super.attributesToDeclare.call(this));
        };
        TextLongIntegerLongIntegerRecord._isAnonymousRecord = true;
        TextLongIntegerLongIntegerRecord.UniqueId = "e077f6b5-0eee-9fe7-46dd-6b834a228030";
        TextLongIntegerLongIntegerRecord.init();
        return TextLongIntegerLongIntegerRecord;
    })(OS.DataTypes.GenericRecord);
    Connect2_Assemble_MUIModel.TextLongIntegerLongIntegerRecord = TextLongIntegerLongIntegerRecord;

});
define("Connect2_Assemble_MUI.model$CacheableLocalityInformationList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_Assemble_MUI.model", "Connect2_LegacyShared.model$CacheableLocalityInformationRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_LegacyShared"], function(exports, OutSystems, Connect2_LegacySharedModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var CacheableLocalityInformationList = (function(_super) {
        __extends(CacheableLocalityInformationList, _super);

        function CacheableLocalityInformationList(defaults) {
            _super.apply(this, arguments);
        }
        CacheableLocalityInformationList.itemType = Connect2_LegacySharedModel.CacheableLocalityInformationRec;
        return CacheableLocalityInformationList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.CacheableLocalityInformationList = CacheableLocalityInformationList;

});
define("Connect2_Assemble_MUI.model$LauncherReturnList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_AppLauncherPlugin.model", "Connect2_Assemble_MUI.model", "Connect2_AppLauncherPlugin.model$LauncherReturnRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_AppLauncherPlugin"], function(exports, OutSystems, Connect2_AppLauncherPluginModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var LauncherReturnList = (function(_super) {
        __extends(LauncherReturnList, _super);

        function LauncherReturnList(defaults) {
            _super.apply(this, arguments);
        }
        LauncherReturnList.itemType = Connect2_AppLauncherPluginModel.LauncherReturnRec;
        return LauncherReturnList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.LauncherReturnList = LauncherReturnList;

});
define("Connect2_Assemble_MUI.model$CacheableLocalityInformationRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$CacheableLocalityInformationRecord"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var CacheableLocalityInformationRecordList = (function(_super) {
        __extends(CacheableLocalityInformationRecordList, _super);

        function CacheableLocalityInformationRecordList(defaults) {
            _super.apply(this, arguments);
        }
        CacheableLocalityInformationRecordList.itemType = Connect2_Assemble_MUIModel.CacheableLocalityInformationRecord;
        return CacheableLocalityInformationRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.CacheableLocalityInformationRecordList = CacheableLocalityInformationRecordList;

});
define("Connect2_Assemble_MUI.model$CountryRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$CountryRecord"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var CountryRecordList = (function(_super) {
        __extends(CountryRecordList, _super);

        function CountryRecordList(defaults) {
            _super.apply(this, arguments);
        }
        CountryRecordList.itemType = Connect2_Assemble_MUIModel.CountryRecord;
        return CountryRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.CountryRecordList = CountryRecordList;

});
define("Connect2_Assemble_MUI.model$AssembleEventFilterRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$AssembleEventFilterRecord"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var AssembleEventFilterRecordList = (function(_super) {
        __extends(AssembleEventFilterRecordList, _super);

        function AssembleEventFilterRecordList(defaults) {
            _super.apply(this, arguments);
        }
        AssembleEventFilterRecordList.itemType = Connect2_Assemble_MUIModel.AssembleEventFilterRecord;
        return AssembleEventFilterRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.AssembleEventFilterRecordList = AssembleEventFilterRecordList;

});
define("Connect2_Assemble_MUI.model$MyBookmarks_GroupList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_BL.model", "Connect2_Assemble_MUI.model", "Connect2_MyBookmarks_BL.model$MyBookmarks_GroupRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_MyBookmarks_BL"], function(exports, OutSystems, Connect2_MyBookmarks_BLModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var MyBookmarks_GroupList = (function(_super) {
        __extends(MyBookmarks_GroupList, _super);

        function MyBookmarks_GroupList(defaults) {
            _super.apply(this, arguments);
        }
        MyBookmarks_GroupList.itemType = Connect2_MyBookmarks_BLModel.MyBookmarks_GroupRec;
        return MyBookmarks_GroupList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.MyBookmarks_GroupList = MyBookmarks_GroupList;

});
define("Connect2_Assemble_MUI.model$PositionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$PositionRecord"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var PositionRecordList = (function(_super) {
        __extends(PositionRecordList, _super);

        function PositionRecordList(defaults) {
            _super.apply(this, arguments);
        }
        PositionRecordList.itemType = Connect2_Assemble_MUIModel.PositionRecord;
        return PositionRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.PositionRecordList = PositionRecordList;

});
define("Connect2_Assemble_MUI.model$UserList", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model", "Connect2_Assemble_MUI.model", "ServiceCenter.model$UserRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$ServiceCenter"], function(exports, OutSystems, ServiceCenterModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var UserList = (function(_super) {
        __extends(UserList, _super);

        function UserList(defaults) {
            _super.apply(this, arguments);
        }
        UserList.itemType = ServiceCenterModel.UserRec;
        return UserList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.UserList = UserList;

});
define("Connect2_Assemble_MUI.model$PhotoURLList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_Assemble_MUI.model", "APIDomain_Directory_IS.model$PhotoURLRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS"], function(exports, OutSystems, APIDomain_Directory_ISModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var PhotoURLList = (function(_super) {
        __extends(PhotoURLList, _super);

        function PhotoURLList(defaults) {
            _super.apply(this, arguments);
        }
        PhotoURLList.itemType = APIDomain_Directory_ISModel.PhotoURLRec;
        return PhotoURLList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.PhotoURLList = PhotoURLList;

});
define("Connect2_Assemble_MUI.model$MenuActionList", ["exports", "OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "Connect2_Assemble_MUI.model", "OutSystemsUI_2_23.model$MenuActionRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$OutSystemsUI_2_23"], function(exports, OutSystems, OutSystemsUI_2_23Model, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var MenuActionList = (function(_super) {
        __extends(MenuActionList, _super);

        function MenuActionList(defaults) {
            _super.apply(this, arguments);
        }
        MenuActionList.itemType = OutSystemsUI_2_23Model.MenuActionRec;
        return MenuActionList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.MenuActionList = MenuActionList;

});
define("Connect2_Assemble_MUI.model$LocalBookmarkRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$LocalBookmarkRecord"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var LocalBookmarkRecordList = (function(_super) {
        __extends(LocalBookmarkRecordList, _super);

        function LocalBookmarkRecordList(defaults) {
            _super.apply(this, arguments);
        }
        LocalBookmarkRecordList.itemType = Connect2_Assemble_MUIModel.LocalBookmarkRecord;
        return LocalBookmarkRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.LocalBookmarkRecordList = LocalBookmarkRecordList;

});
define("Connect2_Assemble_MUI.model$ContactByPhonePopupDataList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "Connect2_Assemble_MUI.model", "UBTConnect_Utils.model$ContactByPhonePopupDataRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$UBTConnect_Utils"], function(exports, OutSystems, UBTConnect_UtilsModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var ContactByPhonePopupDataList = (function(_super) {
        __extends(ContactByPhonePopupDataList, _super);

        function ContactByPhonePopupDataList(defaults) {
            _super.apply(this, arguments);
        }
        ContactByPhonePopupDataList.itemType = UBTConnect_UtilsModel.ContactByPhonePopupDataRec;
        return ContactByPhonePopupDataList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.ContactByPhonePopupDataList = ContactByPhonePopupDataList;

});
define("Connect2_Assemble_MUI.model$Locality2RecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$Locality2Record"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var Locality2RecordList = (function(_super) {
        __extends(Locality2RecordList, _super);

        function Locality2RecordList(defaults) {
            _super.apply(this, arguments);
        }
        Locality2RecordList.itemType = Connect2_Assemble_MUIModel.Locality2Record;
        return Locality2RecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.Locality2RecordList = Locality2RecordList;

});
define("Connect2_Assemble_MUI.model$CountryWithMapPositionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$CountryWithMapPositionRecord"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var CountryWithMapPositionRecordList = (function(_super) {
        __extends(CountryWithMapPositionRecordList, _super);

        function CountryWithMapPositionRecordList(defaults) {
            _super.apply(this, arguments);
        }
        CountryWithMapPositionRecordList.itemType = Connect2_Assemble_MUIModel.CountryWithMapPositionRecord;
        return CountryWithMapPositionRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.CountryWithMapPositionRecordList = CountryWithMapPositionRecordList;

});
define("Connect2_Assemble_MUI.model$CDNRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$CDNRecord"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var CDNRecordList = (function(_super) {
        __extends(CDNRecordList, _super);

        function CDNRecordList(defaults) {
            _super.apply(this, arguments);
        }
        CDNRecordList.itemType = Connect2_Assemble_MUIModel.CDNRecord;
        return CDNRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.CDNRecordList = CDNRecordList;

});
define("Connect2_Assemble_MUI.model$TextLongIntegerLongIntegerRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$TextLongIntegerLongIntegerRecord"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var TextLongIntegerLongIntegerRecordList = (function(_super) {
        __extends(TextLongIntegerLongIntegerRecordList, _super);

        function TextLongIntegerLongIntegerRecordList(defaults) {
            _super.apply(this, arguments);
        }
        TextLongIntegerLongIntegerRecordList.itemType = Connect2_Assemble_MUIModel.TextLongIntegerLongIntegerRecord;
        return TextLongIntegerLongIntegerRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.TextLongIntegerLongIntegerRecordList = TextLongIntegerLongIntegerRecordList;

});
define("Connect2_Assemble_MUI.model$AssembleEventContactRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$AssembleEventContactRecord"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var AssembleEventContactRecordList = (function(_super) {
        __extends(AssembleEventContactRecordList, _super);

        function AssembleEventContactRecordList(defaults) {
            _super.apply(this, arguments);
        }
        AssembleEventContactRecordList.itemType = Connect2_Assemble_MUIModel.AssembleEventContactRecord;
        return AssembleEventContactRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.AssembleEventContactRecordList = AssembleEventContactRecordList;

});
define("Connect2_Assemble_MUI.model$MenuActionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$MenuActionRecord"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var MenuActionRecordList = (function(_super) {
        __extends(MenuActionRecordList, _super);

        function MenuActionRecordList(defaults) {
            _super.apply(this, arguments);
        }
        MenuActionRecordList.itemType = Connect2_Assemble_MUIModel.MenuActionRecord;
        return MenuActionRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.MenuActionRecordList = MenuActionRecordList;

});
define("Connect2_Assemble_MUI.model$ColorRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$ColorRecord"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var ColorRecordList = (function(_super) {
        __extends(ColorRecordList, _super);

        function ColorRecordList(defaults) {
            _super.apply(this, arguments);
        }
        ColorRecordList.itemType = Connect2_Assemble_MUIModel.ColorRecord;
        return ColorRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.ColorRecordList = ColorRecordList;

});
define("Connect2_Assemble_MUI.model$BookmarkItemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$BookmarkItemRecord"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var BookmarkItemRecordList = (function(_super) {
        __extends(BookmarkItemRecordList, _super);

        function BookmarkItemRecordList(defaults) {
            _super.apply(this, arguments);
        }
        BookmarkItemRecordList.itemType = Connect2_Assemble_MUIModel.BookmarkItemRecord;
        return BookmarkItemRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.BookmarkItemRecordList = BookmarkItemRecordList;

});
define("Connect2_Assemble_MUI.model$HallPhotoExtensive3RecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$HallPhotoExtensive3Record"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var HallPhotoExtensive3RecordList = (function(_super) {
        __extends(HallPhotoExtensive3RecordList, _super);

        function HallPhotoExtensive3RecordList(defaults) {
            _super.apply(this, arguments);
        }
        HallPhotoExtensive3RecordList.itemType = Connect2_Assemble_MUIModel.HallPhotoExtensive3Record;
        return HallPhotoExtensive3RecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.HallPhotoExtensive3RecordList = HallPhotoExtensive3RecordList;

});
define("Connect2_Assemble_MUI.model$Householder_MemberRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.model$Householder_MemberRecord"], function(exports, OutSystems, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var Householder_MemberRecordList = (function(_super) {
        __extends(Householder_MemberRecordList, _super);

        function Householder_MemberRecordList(defaults) {
            _super.apply(this, arguments);
        }
        Householder_MemberRecordList.itemType = Connect2_Assemble_MUIModel.Householder_MemberRecord;
        return Householder_MemberRecordList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.Householder_MemberRecordList = Householder_MemberRecordList;

});
define("Connect2_Assemble_MUI.model$PhotoList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_Assemble_MUI.model", "APIDomain_Directory_IS.model$PhotoRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS"], function(exports, OutSystems, APIDomain_Directory_ISModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var PhotoList = (function(_super) {
        __extends(PhotoList, _super);

        function PhotoList(defaults) {
            _super.apply(this, arguments);
        }
        PhotoList.itemType = APIDomain_Directory_ISModel.PhotoRec;
        return PhotoList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.PhotoList = PhotoList;

});
define("Connect2_Assemble_MUI.model$Directory_UserCurrent_SubscriptionList", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_Assemble_MUI.model", "APIDomain_Directory_IS.model$Directory_UserCurrent_SubscriptionRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS"], function(exports, OutSystems, APIDomain_Directory_ISModel, Connect2_Assemble_MUIModel) {
    var OS = OutSystems.Internal;
    var Directory_UserCurrent_SubscriptionList = (function(_super) {
        __extends(Directory_UserCurrent_SubscriptionList, _super);

        function Directory_UserCurrent_SubscriptionList(defaults) {
            _super.apply(this, arguments);
        }
        Directory_UserCurrent_SubscriptionList.itemType = APIDomain_Directory_ISModel.Directory_UserCurrent_SubscriptionRec;
        return Directory_UserCurrent_SubscriptionList;
    })(OS.DataTypes.GenericRecordList);
    Connect2_Assemble_MUIModel.Directory_UserCurrent_SubscriptionList = Directory_UserCurrent_SubscriptionList;

});
define("Connect2_Assemble_MUI.model", ["exports", "OutSystems/ClientRuntime/Main"], function(exports, OutSystems) {
    var OS = OutSystems.Internal;
    var Connect2_Assemble_MUIModel = exports;
    Object.defineProperty(Connect2_Assemble_MUIModel, "module", {
        get: function() {
            return OS.ApplicationInfo.getModules()["09d48be1-f964-4fdd-ba06-b656b1559cdd"];
        }
    });

    Connect2_Assemble_MUIModel.staticEntities = {};
    Connect2_Assemble_MUIModel.staticEntities.viewmodeType = {};
    var getViewmodeTypeRecord = function(record) {
        return OS.ApplicationInfo.getModules()["0c51d58e-77f1-4675-b0fd-b4849aee5e81"].staticEntities["e32c825f-23e7-4840-b8a4-ed7daf238d43"][record];
    };
    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.viewmodeType, "today", {
        get: function() {
            return getViewmodeTypeRecord("0c62e774-f6cd-46be-b5e7-741adbc10309");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.viewmodeType, "pastMeetings", {
        get: function() {
            return getViewmodeTypeRecord("55fcfcb3-48ae-4dee-acfa-1adf9e516dba");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.viewmodeType, "upcomingMeetings", {
        get: function() {
            return getViewmodeTypeRecord("cfe5de3f-314a-4555-8f9d-919b95cef98c");
        }
    });

    Connect2_Assemble_MUIModel.staticEntities.applicationEvents_Directory = {};
    var getApplicationEvents_DirectoryRecord = function(record) {
        return OS.ApplicationInfo.getModules()["3712370e-f7b5-4c2a-ade3-d8800219efd4"].staticEntities["7135cb3f-7154-4f32-8efe-c36ec04964af"][record];
    };
    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.applicationEvents_Directory, "clickOutboundLink", {
        get: function() {
            return getApplicationEvents_DirectoryRecord("06623104-9d6c-4607-9643-6ed7fec8cbe0");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.applicationEvents_Directory, "appMovedToForeground", {
        get: function() {
            return getApplicationEvents_DirectoryRecord("09782f21-ef81-4c08-8059-a209c8c4232e");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.applicationEvents_Directory, "shareView", {
        get: function() {
            return getApplicationEvents_DirectoryRecord("0aeea4c4-5634-4f5d-ad4e-8a013b781d01");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.applicationEvents_Directory, "locality", {
        get: function() {
            return getApplicationEvents_DirectoryRecord("1984e427-d7de-4ef7-8847-990374ea6444");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.applicationEvents_Directory, "shareItem", {
        get: function() {
            return getApplicationEvents_DirectoryRecord("1b9157b8-efcc-43bf-b6a1-4bfa9a460435");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.applicationEvents_Directory, "country", {
        get: function() {
            return getApplicationEvents_DirectoryRecord("2b3ae623-40d5-453c-9034-8584dcdc4c0e");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.applicationEvents_Directory, "menu_ContextMenuExpanded", {
        get: function() {
            return getApplicationEvents_DirectoryRecord("3395812b-15cb-41a3-9e27-e63393e3f918");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.applicationEvents_Directory, "accessViaDifferentDevice", {
        get: function() {
            return getApplicationEvents_DirectoryRecord("356b35a9-da26-49c5-bb5d-4b9deda27f70");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.applicationEvents_Directory, "policyAccepted", {
        get: function() {
            return getApplicationEvents_DirectoryRecord("3570b7d4-3e53-4524-8805-81733608d8b5");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.applicationEvents_Directory, "updates", {
        get: function() {
            return getApplicationEvents_DirectoryRecord("35b4003d-c566-4310-bc10-0f0de787774c");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.applicationEvents_Directory, "menu_Privacy", {
        get: function() {
            return getApplicationEvents_DirectoryRecord("3808c9c3-ef11-4da0-8586-adbcaae52fa5");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.applicationEvents_Directory, "deceasedHousehold", {
        get: function() {
            return getApplicationEvents_DirectoryRecord("3cb17ed0-cdcf-485d-8644-46163e73bea8");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.applicationEvents_Directory, "appMovedToBackground", {
        get: function() {
            return getApplicationEvents_DirectoryRecord("3e2ab468-3ff7-4908-9385-d7c7830d9929");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.applicationEvents_Directory, "defaultLocalityUpdated", {
        get: function() {
            return getApplicationEvents_DirectoryRecord("44767208-6235-49ee-a3c4-f6c0e122de28");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.applicationEvents_Directory, "newPinRegistered", {
        get: function() {
            return getApplicationEvents_DirectoryRecord("453fcb0f-bf87-4490-8854-ec5a8d93da71");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.applicationEvents_Directory, "oneSignalNotSubscribed", {
        get: function() {
            return getApplicationEvents_DirectoryRecord("47821145-1fc6-442f-ae9a-5254fe515ee2");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.applicationEvents_Directory, "subscriptionRequired", {
        get: function() {
            return getApplicationEvents_DirectoryRecord("48a6ed4c-c666-4216-b64a-34b47cd3b6b9");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.applicationEvents_Directory, "inactivityScreenPINEntered", {
        get: function() {
            return getApplicationEvents_DirectoryRecord("4f7a85bf-65ba-4ee5-8c78-9d0f5a861bb0");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.applicationEvents_Directory, "ageVisibility_Change", {
        get: function() {
            return getApplicationEvents_DirectoryRecord("5076482b-4fd3-45b8-8274-2eedc01fbdde");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.applicationEvents_Directory, "menu_Terms", {
        get: function() {
            return getApplicationEvents_DirectoryRecord("561f3c4d-3a3f-407e-95ef-cebd1a2ecc5a");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.applicationEvents_Directory, "menu_LogoutButton", {
        get: function() {
            return getApplicationEvents_DirectoryRecord("66c0e7f7-9f69-45a9-92d9-07f6b9dedc17");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.applicationEvents_Directory, "javascriptVersion", {
        get: function() {
            return getApplicationEvents_DirectoryRecord("6c923cc7-1e07-43ab-8626-f3b4e5a5461b");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.applicationEvents_Directory, "debugLogEvent", {
        get: function() {
            return getApplicationEvents_DirectoryRecord("71d1c864-a4f0-48bb-b762-ad8ba37f6ebf");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.applicationEvents_Directory, "errorFromPhotoView", {
        get: function() {
            return getApplicationEvents_DirectoryRecord("9893e8f8-d778-4343-8742-fd7d66fee56c");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.applicationEvents_Directory, "menu_OptionsButton", {
        get: function() {
            return getApplicationEvents_DirectoryRecord("9e116ea8-97fb-451b-8208-d0fdae632c88");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.applicationEvents_Directory, "emailHousehold", {
        get: function() {
            return getApplicationEvents_DirectoryRecord("a4b43615-4675-4209-8bdf-cc082a98eeea");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.applicationEvents_Directory, "changeRequest", {
        get: function() {
            return getApplicationEvents_DirectoryRecord("b4aa8d9f-d871-4d5f-b427-f6973156bd23");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.applicationEvents_Directory, "search", {
        get: function() {
            return getApplicationEvents_DirectoryRecord("ba0caa26-9a00-49da-a5f9-1e6a7cd45f53");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.applicationEvents_Directory, "subdivision", {
        get: function() {
            return getApplicationEvents_DirectoryRecord("c017f217-af03-436d-907f-b1c2fb4d0e43");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.applicationEvents_Directory, "household", {
        get: function() {
            return getApplicationEvents_DirectoryRecord("c20340df-3266-49cf-8f6c-368611b36dc2");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.applicationEvents_Directory, "contact", {
        get: function() {
            return getApplicationEvents_DirectoryRecord("df9b82f8-44db-4ed2-a1dc-0960185099b0");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.applicationEvents_Directory, "menu_Entity", {
        get: function() {
            return getApplicationEvents_DirectoryRecord("f83295c2-fc9e-4b88-8f39-2de51ac26880");
        }
    });

    Connect2_Assemble_MUIModel.staticEntities.resultListType = {};
    var getResultListTypeRecord = function(record) {
        return OS.ApplicationInfo.getModules()["3712370e-f7b5-4c2a-ade3-d8800219efd4"].staticEntities["ab5965c3-4530-48a3-9550-29933fbf4cdb"][record];
    };
    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.resultListType, "notification", {
        get: function() {
            return OS.BuiltinFunctions.textToInteger(getResultListTypeRecord("1ce929a9-9861-4c7a-8395-db3e7abad9b7"));
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.resultListType, "household", {
        get: function() {
            return OS.BuiltinFunctions.textToInteger(getResultListTypeRecord("2450795b-3f42-4957-9abd-6c0458007300"));
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.resultListType, "subdivision", {
        get: function() {
            return OS.BuiltinFunctions.textToInteger(getResultListTypeRecord("24bfbfd0-7715-4194-8730-334d0ecd62a9"));
        }
    });

    Connect2_Assemble_MUIModel.staticEntities.mapNavigationRedirect = {};
    var getMapNavigationRedirectRecord = function(record) {
        return OS.ApplicationInfo.getModules()["3712370e-f7b5-4c2a-ade3-d8800219efd4"].staticEntities["ee7cfd75-0bfd-4ea6-ab8b-27d888db527d"][record];
    };
    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.mapNavigationRedirect, "iPhoneBrowser", {
        get: function() {
            return OS.BuiltinFunctions.textToInteger(getMapNavigationRedirectRecord("407e7546-4846-4a7a-9ced-85025fa3c146"));
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.mapNavigationRedirect, "androidNative", {
        get: function() {
            return OS.BuiltinFunctions.textToInteger(getMapNavigationRedirectRecord("81bd4fbf-8cc8-46e3-9d19-82c0bbd5aefa"));
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.mapNavigationRedirect, "androidBrowser", {
        get: function() {
            return OS.BuiltinFunctions.textToInteger(getMapNavigationRedirectRecord("9d683b79-1ece-4ab6-8fcf-457086872ce8"));
        }
    });

    Connect2_Assemble_MUIModel.staticEntities.type_ShareObject = {};
    var getType_ShareObjectRecord = function(record) {
        return OS.ApplicationInfo.getModules()["89a8b22b-4939-4962-ac03-ed124a10543f"].staticEntities["fdd27f53-9f9c-477e-8a4a-1dd00c45a277"][record];
    };
    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.type_ShareObject, "communityNotice", {
        get: function() {
            return getType_ShareObjectRecord("3b68532c-c7a8-490d-84bd-fc1842d6f70a");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.type_ShareObject, "locality", {
        get: function() {
            return getType_ShareObjectRecord("50105edb-d74e-4da5-8518-19cff43aca1e");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.type_ShareObject, "myHousehold", {
        get: function() {
            return getType_ShareObjectRecord("62d133fd-03de-4a54-b6a9-41b45317bcd2");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.type_ShareObject, "supperMeeting", {
        get: function() {
            return getType_ShareObjectRecord("66862e7a-561e-4166-b594-860a0e00d015");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.type_ShareObject, "update", {
        get: function() {
            return getType_ShareObjectRecord("804d78ff-a96b-43a0-88a9-9bac7e5923a9");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.type_ShareObject, "localityContact", {
        get: function() {
            return getType_ShareObjectRecord("8540a0c3-d763-43b9-aacb-4da071245b38");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.type_ShareObject, "feed", {
        get: function() {
            return getType_ShareObjectRecord("9b83faac-3c6d-4a69-9be5-7c00c9ff787a");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.type_ShareObject, "household", {
        get: function() {
            return getType_ShareObjectRecord("be388807-f406-4e72-86b3-b4e136d63453");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.type_ShareObject, "campusCo", {
        get: function() {
            return getType_ShareObjectRecord("c5cd2483-9015-4ddb-8878-3321d4f7cce3");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.type_ShareObject, "oneSchoolGlobal", {
        get: function() {
            return getType_ShareObjectRecord("e62e5bba-01ff-40c5-abe9-333c594000a7");
        }
    });

    Connect2_Assemble_MUIModel.staticEntities.myBookmarks_Group = {};
    var getMyBookmarks_GroupRecord = function(record) {
        return OS.ApplicationInfo.getModules()["ccacdbe8-c124-4e26-ac14-d39cf1b372dc"].staticEntities["d277c37a-277e-419f-81ea-0ffb36be8558"][record];
    };
    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.myBookmarks_Group, "locations", {
        get: function() {
            return getMyBookmarks_GroupRecord("2860dbc3-b113-4f27-bf00-060398d4854a");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.myBookmarks_Group, "entities", {
        get: function() {
            return getMyBookmarks_GroupRecord("77369632-c604-40b2-872b-6218e0eed2b6");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.myBookmarks_Group, "contacts", {
        get: function() {
            return getMyBookmarks_GroupRecord("e247ecb6-1adf-4f59-9ec9-2683f67eb8cd");
        }
    });

    Connect2_Assemble_MUIModel.staticEntities.shape = {};
    var getShapeRecord = function(record) {
        return OS.ApplicationInfo.getModules()["d56fb881-3978-4994-bb55-529378718c43"].staticEntities["6fe168a9-c16d-4cdb-9b6f-a9e6c6b79326"][record];
    };
    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.shape, "sharp", {
        get: function() {
            return getShapeRecord("94deb1f5-6153-4438-92ad-cedea3c1f6f0");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.shape, "softRounded", {
        get: function() {
            return getShapeRecord("d1093539-d77d-439d-8d53-03d2e0053a52");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.shape, "rounded", {
        get: function() {
            return getShapeRecord("f20c2269-270a-43b2-ba29-bd8fbff2519f");
        }
    });

    Connect2_Assemble_MUIModel.staticEntities.position = {};
    var getPositionRecord = function(record) {
        return OS.ApplicationInfo.getModules()["d56fb881-3978-4994-bb55-529378718c43"].staticEntities["83c073e8-bac2-4122-9772-aa6e122a5d36"][record];
    };
    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.position, "top", {
        get: function() {
            return getPositionRecord("3bbcac35-309e-49a8-bf1b-a3c66e1ef3cd");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.position, "left", {
        get: function() {
            return getPositionRecord("4d70c81a-67bd-4a1f-a21a-c6aa13d0f364");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.position, "bottomRight", {
        get: function() {
            return getPositionRecord("73459c44-0160-4454-8ad0-c9bd44778a61");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.position, "bottomLeft", {
        get: function() {
            return getPositionRecord("7352570c-243a-4f05-b6d1-608495931118");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.position, "right", {
        get: function() {
            return getPositionRecord("bf43697b-2483-4855-a6c2-0a786bab472f");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.position, "topLeft", {
        get: function() {
            return getPositionRecord("c1d22c62-5a36-4d69-b188-02d62b8fe7c4");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.position, "topRight", {
        get: function() {
            return getPositionRecord("d14d8aae-f1c9-4538-a4a9-91a2690e6d92");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.position, "center", {
        get: function() {
            return getPositionRecord("dcc9ffa2-34a7-4097-86d0-dde224907425");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.position, "bottom", {
        get: function() {
            return getPositionRecord("fb8d90f9-5432-4678-932b-f468c00d3361");
        }
    });

    Connect2_Assemble_MUIModel.staticEntities.space = {};
    var getSpaceRecord = function(record) {
        return OS.ApplicationInfo.getModules()["d56fb881-3978-4994-bb55-529378718c43"].staticEntities["8fb3d471-82a4-439c-9cc1-0555dfa91451"][record];
    };
    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.space, "large", {
        get: function() {
            return getSpaceRecord("51b55067-e608-49ed-9f00-1faf9e4a694a");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.space, "medium", {
        get: function() {
            return getSpaceRecord("7340e97f-de64-4337-ad0d-1defcab8adb2");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.space, "xXLarge", {
        get: function() {
            return getSpaceRecord("823213f8-9df9-4de0-8aba-2b5566e6f87d");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.space, "extraSmall", {
        get: function() {
            return getSpaceRecord("83adf9ba-fbcf-4ce0-b4a4-bc6330956b89");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.space, "small", {
        get: function() {
            return getSpaceRecord("919210a5-6b3b-40c9-9a28-b4e2c28a46f8");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.space, "base", {
        get: function() {
            return getSpaceRecord("f0572ad3-54ac-4755-8c8e-a9004171fcb1");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.space, "extraLarge", {
        get: function() {
            return getSpaceRecord("f8dafab9-63b9-40b2-9755-f2f8fa3d6e84");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.space, "none", {
        get: function() {
            return getSpaceRecord("fb937b97-bd94-4ba4-80ff-446cb3bdf6ae");
        }
    });

    Connect2_Assemble_MUIModel.staticEntities.menuAction = {};
    var getMenuActionRecord = function(record) {
        return OS.ApplicationInfo.getModules()["d56fb881-3978-4994-bb55-529378718c43"].staticEntities["9cc12883-06ab-4cf0-9997-ede7c6c02d67"][record];
    };
    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.menuAction, "menu", {
        get: function() {
            return getMenuActionRecord("55ba18a9-cd6b-45dd-99ce-9081ee1387ea");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.menuAction, "auto", {
        get: function() {
            return getMenuActionRecord("6c0c753a-86f4-4e76-9781-6e821c850c72");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.menuAction, "hidden", {
        get: function() {
            return getMenuActionRecord("86c9d356-be64-46a1-b027-843ab93b4aea");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.menuAction, "back", {
        get: function() {
            return getMenuActionRecord("f2db3c50-4c38-4ee7-a770-aa9476cb0d68");
        }
    });

    Connect2_Assemble_MUIModel.staticEntities.color = {};
    var getColorRecord = function(record) {
        return OS.ApplicationInfo.getModules()["d56fb881-3978-4994-bb55-529378718c43"].staticEntities["cb6d1da7-26d4-45d9-bc22-9a4c482e6ce2"][record];
    };
    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.color, "neutral9", {
        get: function() {
            return getColorRecord("04a6c700-0ae5-44d5-81ce-34ec81d72c1c");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.color, "grape", {
        get: function() {
            return getColorRecord("0d81324f-81ae-44eb-b81e-cd27ebce7460");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.color, "neutral7", {
        get: function() {
            return getColorRecord("1434454b-4d44-4ec7-a9ee-8353529b1621");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.color, "neutral10", {
        get: function() {
            return getColorRecord("1566893e-a30d-405f-878b-e64efdab7f7b");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.color, "teal", {
        get: function() {
            return getColorRecord("19254415-08b2-4887-a6cf-36433bb1ade0");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.color, "primary", {
        get: function() {
            return getColorRecord("1df261bf-454e-49a0-951e-87f6077cbbc1");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.color, "neutral4", {
        get: function() {
            return getColorRecord("20d4e7d1-c296-4853-b584-d2b004ddf9f5");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.color, "neutral8", {
        get: function() {
            return getColorRecord("31cd8495-438d-4825-8a93-c083bf6f016a");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.color, "indigo", {
        get: function() {
            return getColorRecord("47b9565a-4f82-4a9d-a543-4aaa707853ac");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.color, "orange", {
        get: function() {
            return getColorRecord("4d20d5b8-5570-4e18-9345-55772434a9ad");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.color, "lime", {
        get: function() {
            return getColorRecord("50b20d51-09a6-43df-aa5d-6ae3c99f31e8");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.color, "cyan", {
        get: function() {
            return getColorRecord("59edafdd-089e-409e-a2d2-78298e55e0f2");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.color, "secondary", {
        get: function() {
            return getColorRecord("61f545b9-e074-40ee-a884-8102a56d9ee7");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.color, "neutral6", {
        get: function() {
            return getColorRecord("69c65fbc-5ddc-4e41-afcf-03acff40e7a8");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.color, "yellow", {
        get: function() {
            return getColorRecord("80145099-0e84-4301-902b-2bd6a933e319");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.color, "neutral2", {
        get: function() {
            return getColorRecord("8577e423-4296-434f-9ca1-9a18b91e0c29");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.color, "neutral1", {
        get: function() {
            return getColorRecord("9946980c-176a-4345-90ff-312523579ef0");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.color, "neutral3", {
        get: function() {
            return getColorRecord("b7447296-c2b5-4d01-883b-b49d25b1c8a6");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.color, "transparent", {
        get: function() {
            return getColorRecord("b87c59d9-4a95-4567-876d-b978ca413429");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.color, "violet", {
        get: function() {
            return getColorRecord("bb39306e-ce82-47a7-9c0f-a78f92ff53c6");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.color, "blue", {
        get: function() {
            return getColorRecord("c1bb8b1b-2f09-4fe9-bec9-eeb243b903d5");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.color, "neutral5", {
        get: function() {
            return getColorRecord("c1d63249-fde7-4438-b4c9-d445bcfc9257");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.color, "red", {
        get: function() {
            return getColorRecord("d6c564f5-847a-4155-ba84-91b826bd676f");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.color, "pink", {
        get: function() {
            return getColorRecord("e9991560-a98c-431e-a583-b707840dc2f3");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.color, "green", {
        get: function() {
            return getColorRecord("ede4099b-595f-47f0-98ed-583414f4f6bd");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.color, "neutral0", {
        get: function() {
            return getColorRecord("fb934ce5-6b33-4c96-8d40-b06352706a8d");
        }
    });

    Connect2_Assemble_MUIModel.staticEntities.connect_Entity2 = {};
    var getConnect_Entity2Record = function(record) {
        return OS.ApplicationInfo.getModules()["d86ffdd7-ae1d-48f1-9fea-17fe11fb97da"].staticEntities["2710e296-7733-44ad-8ef9-bbcd4c4dd77c"][record];
    };
    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.connect_Entity2, "household", {
        get: function() {
            return getConnect_Entity2Record("57dd184c-b9fc-4a7f-9f9a-f20e6e275fe3");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.connect_Entity2, "supperMeetings_aka_Subdivisions", {
        get: function() {
            return getConnect_Entity2Record("62a170b3-4134-43b4-a09f-3e030e687bfd");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.connect_Entity2, "interchange", {
        get: function() {
            return getConnect_Entity2Record("6f037faf-a5dc-4f83-b491-b5a1af3012c2");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.connect_Entity2, "locality", {
        get: function() {
            return getConnect_Entity2Record("78e8b5bb-7b51-447b-8f03-ac3f57c4bab3");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.connect_Entity2, "country", {
        get: function() {
            return getConnect_Entity2Record("a35b9acc-2c9c-4d8c-95bf-3842b859880e");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.connect_Entity2, "oneSchoolGlobal", {
        get: function() {
            return getConnect_Entity2Record("a896e28c-f387-4cf4-93f1-7ba6b8f3ac64");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.connect_Entity2, "member", {
        get: function() {
            return getConnect_Entity2Record("dbaf9275-057c-4718-b4fb-c4b31ae95ccc");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.connect_Entity2, "feedItem", {
        get: function() {
            return getConnect_Entity2Record("e22d3178-31c6-411a-a572-083e8aa9db11");
        }
    });

    Connect2_Assemble_MUIModel.staticEntities.myBookmarks_ObjectType = {};
    var getMyBookmarks_ObjectTypeRecord = function(record) {
        return OS.ApplicationInfo.getModules()["fe9b0d8f-ebbc-40ef-9656-bcd3ff4ff144"].staticEntities["fcd90c60-8ab8-4cbf-920e-b2bc935b5137"][record];
    };
    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.myBookmarks_ObjectType, "oneSchoolGlobal", {
        get: function() {
            return getMyBookmarks_ObjectTypeRecord("3a8efbd2-60e6-4ac0-9530-1f8aaf3fbfc0");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.myBookmarks_ObjectType, "contact", {
        get: function() {
            return getMyBookmarks_ObjectTypeRecord("69c4b072-c8f1-45c3-b37a-fff8ae5d83bb");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.myBookmarks_ObjectType, "news", {
        get: function() {
            return getMyBookmarks_ObjectTypeRecord("73375254-03da-429b-a414-55e045a7ffac");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.myBookmarks_ObjectType, "subdivision", {
        get: function() {
            return getMyBookmarks_ObjectTypeRecord("dc61e1a2-7207-4e1e-8787-c36e87c4b7d9");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.myBookmarks_ObjectType, "campusCo", {
        get: function() {
            return getMyBookmarks_ObjectTypeRecord("e5d1dd55-062c-4830-919d-c0546acff53e");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.myBookmarks_ObjectType, "communityBusiness", {
        get: function() {
            return getMyBookmarks_ObjectTypeRecord("f9b3e1dc-f33f-4d84-89f5-95fe4af185df");
        }
    });

    Object.defineProperty(Connect2_Assemble_MUIModel.staticEntities.myBookmarks_ObjectType, "locality", {
        get: function() {
            return getMyBookmarks_ObjectTypeRecord("fd16c400-f618-4619-a8b9-0f6e084766cc");
        }
    });

});