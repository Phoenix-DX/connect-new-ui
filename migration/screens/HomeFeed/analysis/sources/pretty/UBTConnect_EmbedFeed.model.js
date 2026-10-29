define("UBTConnect_EmbedFeed.model$UBT_FontSizeList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_EmbedFeed.model", "UBTConnectLibrary.model$UBT_FontSizeRec", "UBTConnect_EmbedFeed.referencesHealth", "UBTConnect_EmbedFeed.referencesHealth$UBTConnectLibrary"], function(exports, OutSystems, UBTConnectLibraryModel, UBTConnect_EmbedFeedModel) {
    var OS = OutSystems.Internal;
    var UBT_FontSizeList = (function(_super) {
        __extends(UBT_FontSizeList, _super);

        function UBT_FontSizeList(defaults) {
            _super.apply(this, arguments);
        }
        UBT_FontSizeList.itemType = UBTConnectLibraryModel.UBT_FontSizeRec;
        return UBT_FontSizeList;
    })(OS.DataTypes.GenericRecordList);
    UBTConnect_EmbedFeedModel.UBT_FontSizeList = UBT_FontSizeList;

});
define("UBTConnect_EmbedFeed.model$UBT_IconsRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_EmbedFeed.model", "UBTConnectLibrary.model$UBT_IconsRec", "UBTConnect_EmbedFeed.referencesHealth", "UBTConnect_EmbedFeed.referencesHealth$UBTConnectLibrary"], function(exports, OutSystems, UBTConnectLibraryModel, UBTConnect_EmbedFeedModel) {
    var OS = OutSystems.Internal;
    var UBT_IconsRecord = (function(_super) {
        __extends(UBT_IconsRecord, _super);

        function UBT_IconsRecord(defaults) {
            _super.apply(this, arguments);
        }
        UBT_IconsRecord.attributesToDeclare = function() {
            return [
                this.attr("UBT_Icons", "uBT_IconsAttr", "UBT_Icons", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.UBT_IconsRec());
                }, true, UBTConnectLibraryModel.UBT_IconsRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        UBT_IconsRecord.fromStructure = function(str) {
            return new UBT_IconsRecord(new UBT_IconsRecord.RecordClass({
                uBT_IconsAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        UBT_IconsRecord._isAnonymousRecord = true;
        UBT_IconsRecord.UniqueId = "1231e4fe-de0a-eba3-623f-3a924dc07de7";
        UBT_IconsRecord.init();
        return UBT_IconsRecord;
    })(OS.DataTypes.GenericRecord);
    UBTConnect_EmbedFeedModel.UBT_IconsRecord = UBT_IconsRecord;

});
define("UBTConnect_EmbedFeed.model$UBT_ShapeRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_EmbedFeed.model", "UBTConnectLibrary.model$UBT_ShapeRec", "UBTConnect_EmbedFeed.referencesHealth", "UBTConnect_EmbedFeed.referencesHealth$UBTConnectLibrary"], function(exports, OutSystems, UBTConnectLibraryModel, UBTConnect_EmbedFeedModel) {
    var OS = OutSystems.Internal;
    var UBT_ShapeRecord = (function(_super) {
        __extends(UBT_ShapeRecord, _super);

        function UBT_ShapeRecord(defaults) {
            _super.apply(this, arguments);
        }
        UBT_ShapeRecord.attributesToDeclare = function() {
            return [
                this.attr("UBT_Shape", "uBT_ShapeAttr", "UBT_Shape", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.UBT_ShapeRec());
                }, true, UBTConnectLibraryModel.UBT_ShapeRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        UBT_ShapeRecord.fromStructure = function(str) {
            return new UBT_ShapeRecord(new UBT_ShapeRecord.RecordClass({
                uBT_ShapeAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        UBT_ShapeRecord._isAnonymousRecord = true;
        UBT_ShapeRecord.UniqueId = "15ae935d-91c4-5b4d-4629-8b67f181820e";
        UBT_ShapeRecord.init();
        return UBT_ShapeRecord;
    })(OS.DataTypes.GenericRecord);
    UBTConnect_EmbedFeedModel.UBT_ShapeRecord = UBT_ShapeRecord;

});
define("UBTConnect_EmbedFeed.model$RadiusOptionsRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_EmbedFeed.model", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnect_EmbedFeed.referencesHealth", "UBTConnect_EmbedFeed.referencesHealth$UBTConnectLibrary"], function(exports, OutSystems, UBTConnectLibraryModel, UBTConnect_EmbedFeedModel) {
    var OS = OutSystems.Internal;
    var RadiusOptionsRecord = (function(_super) {
        __extends(RadiusOptionsRecord, _super);

        function RadiusOptionsRecord(defaults) {
            _super.apply(this, arguments);
        }
        RadiusOptionsRecord.attributesToDeclare = function() {
            return [
                this.attr("RadiusOptions", "radiusOptionsAttr", "RadiusOptions", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.RadiusOptionsRec());
                }, true, UBTConnectLibraryModel.RadiusOptionsRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        RadiusOptionsRecord.fromStructure = function(str) {
            return new RadiusOptionsRecord(new RadiusOptionsRecord.RecordClass({
                radiusOptionsAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        RadiusOptionsRecord._isAnonymousRecord = true;
        RadiusOptionsRecord.UniqueId = "1a7930e2-86c1-b24d-bc00-6d1f02a6993d";
        RadiusOptionsRecord.init();
        return RadiusOptionsRecord;
    })(OS.DataTypes.GenericRecord);
    UBTConnect_EmbedFeedModel.RadiusOptionsRecord = RadiusOptionsRecord;

});
define("UBTConnect_EmbedFeed.model$UBT_ColorList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_EmbedFeed.model", "UBTConnectLibrary.model$UBT_ColorRec", "UBTConnect_EmbedFeed.referencesHealth", "UBTConnect_EmbedFeed.referencesHealth$UBTConnectLibrary"], function(exports, OutSystems, UBTConnectLibraryModel, UBTConnect_EmbedFeedModel) {
    var OS = OutSystems.Internal;
    var UBT_ColorList = (function(_super) {
        __extends(UBT_ColorList, _super);

        function UBT_ColorList(defaults) {
            _super.apply(this, arguments);
        }
        UBT_ColorList.itemType = UBTConnectLibraryModel.UBT_ColorRec;
        return UBT_ColorList;
    })(OS.DataTypes.GenericRecordList);
    UBTConnect_EmbedFeedModel.UBT_ColorList = UBT_ColorList;

});
define("UBTConnect_EmbedFeed.model$UBT_ShapeList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_EmbedFeed.model", "UBTConnectLibrary.model$UBT_ShapeRec", "UBTConnect_EmbedFeed.referencesHealth", "UBTConnect_EmbedFeed.referencesHealth$UBTConnectLibrary"], function(exports, OutSystems, UBTConnectLibraryModel, UBTConnect_EmbedFeedModel) {
    var OS = OutSystems.Internal;
    var UBT_ShapeList = (function(_super) {
        __extends(UBT_ShapeList, _super);

        function UBT_ShapeList(defaults) {
            _super.apply(this, arguments);
        }
        UBT_ShapeList.itemType = UBTConnectLibraryModel.UBT_ShapeRec;
        return UBT_ShapeList;
    })(OS.DataTypes.GenericRecordList);
    UBTConnect_EmbedFeedModel.UBT_ShapeList = UBT_ShapeList;

});
define("UBTConnect_EmbedFeed.model$AppManager_ConfigClientCacheList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBTConnect_EmbedFeed.model", "UBT_AppManager_CS.model$AppManager_ConfigClientCacheRec", "UBTConnect_EmbedFeed.referencesHealth", "UBTConnect_EmbedFeed.referencesHealth$UBT_AppManager_CS"], function(exports, OutSystems, UBT_AppManager_CSModel, UBTConnect_EmbedFeedModel) {
    var OS = OutSystems.Internal;
    var AppManager_ConfigClientCacheList = (function(_super) {
        __extends(AppManager_ConfigClientCacheList, _super);

        function AppManager_ConfigClientCacheList(defaults) {
            _super.apply(this, arguments);
        }
        AppManager_ConfigClientCacheList.itemType = UBT_AppManager_CSModel.AppManager_ConfigClientCacheRec;
        return AppManager_ConfigClientCacheList;
    })(OS.DataTypes.GenericRecordList);
    UBTConnect_EmbedFeedModel.AppManager_ConfigClientCacheList = AppManager_ConfigClientCacheList;

});
define("UBTConnect_EmbedFeed.model$UBT_ColorRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_EmbedFeed.model", "UBTConnectLibrary.model$UBT_ColorRec", "UBTConnect_EmbedFeed.referencesHealth", "UBTConnect_EmbedFeed.referencesHealth$UBTConnectLibrary"], function(exports, OutSystems, UBTConnectLibraryModel, UBTConnect_EmbedFeedModel) {
    var OS = OutSystems.Internal;
    var UBT_ColorRecord = (function(_super) {
        __extends(UBT_ColorRecord, _super);

        function UBT_ColorRecord(defaults) {
            _super.apply(this, arguments);
        }
        UBT_ColorRecord.attributesToDeclare = function() {
            return [
                this.attr("UBT_Color", "uBT_ColorAttr", "UBT_Color", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.UBT_ColorRec());
                }, true, UBTConnectLibraryModel.UBT_ColorRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        UBT_ColorRecord.fromStructure = function(str) {
            return new UBT_ColorRecord(new UBT_ColorRecord.RecordClass({
                uBT_ColorAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        UBT_ColorRecord._isAnonymousRecord = true;
        UBT_ColorRecord.UniqueId = "3490cded-94ee-8559-0813-5fa401213bc4";
        UBT_ColorRecord.init();
        return UBT_ColorRecord;
    })(OS.DataTypes.GenericRecord);
    UBTConnect_EmbedFeedModel.UBT_ColorRecord = UBT_ColorRecord;

});
define("UBTConnect_EmbedFeed.model$UBT_ColorRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_EmbedFeed.model", "UBTConnect_EmbedFeed.model$UBT_ColorRecord"], function(exports, OutSystems, UBTConnect_EmbedFeedModel) {
    var OS = OutSystems.Internal;
    var UBT_ColorRecordList = (function(_super) {
        __extends(UBT_ColorRecordList, _super);

        function UBT_ColorRecordList(defaults) {
            _super.apply(this, arguments);
        }
        UBT_ColorRecordList.itemType = UBTConnect_EmbedFeedModel.UBT_ColorRecord;
        return UBT_ColorRecordList;
    })(OS.DataTypes.GenericRecordList);
    UBTConnect_EmbedFeedModel.UBT_ColorRecordList = UBT_ColorRecordList;

});
define("UBTConnect_EmbedFeed.model$UBT_ImageSizeRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_EmbedFeed.model", "UBTConnectLibrary.model$UBT_ImageSizeRec", "UBTConnect_EmbedFeed.referencesHealth", "UBTConnect_EmbedFeed.referencesHealth$UBTConnectLibrary"], function(exports, OutSystems, UBTConnectLibraryModel, UBTConnect_EmbedFeedModel) {
    var OS = OutSystems.Internal;
    var UBT_ImageSizeRecord = (function(_super) {
        __extends(UBT_ImageSizeRecord, _super);

        function UBT_ImageSizeRecord(defaults) {
            _super.apply(this, arguments);
        }
        UBT_ImageSizeRecord.attributesToDeclare = function() {
            return [
                this.attr("UBT_ImageSize", "uBT_ImageSizeAttr", "UBT_ImageSize", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.UBT_ImageSizeRec());
                }, true, UBTConnectLibraryModel.UBT_ImageSizeRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        UBT_ImageSizeRecord.fromStructure = function(str) {
            return new UBT_ImageSizeRecord(new UBT_ImageSizeRecord.RecordClass({
                uBT_ImageSizeAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        UBT_ImageSizeRecord._isAnonymousRecord = true;
        UBT_ImageSizeRecord.UniqueId = "b63b1197-018d-6f35-ef1a-e2956550771d";
        UBT_ImageSizeRecord.init();
        return UBT_ImageSizeRecord;
    })(OS.DataTypes.GenericRecord);
    UBTConnect_EmbedFeedModel.UBT_ImageSizeRecord = UBT_ImageSizeRecord;

});
define("UBTConnect_EmbedFeed.model$UBT_ImageSizeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_EmbedFeed.model", "UBTConnect_EmbedFeed.model$UBT_ImageSizeRecord"], function(exports, OutSystems, UBTConnect_EmbedFeedModel) {
    var OS = OutSystems.Internal;
    var UBT_ImageSizeRecordList = (function(_super) {
        __extends(UBT_ImageSizeRecordList, _super);

        function UBT_ImageSizeRecordList(defaults) {
            _super.apply(this, arguments);
        }
        UBT_ImageSizeRecordList.itemType = UBTConnect_EmbedFeedModel.UBT_ImageSizeRecord;
        return UBT_ImageSizeRecordList;
    })(OS.DataTypes.GenericRecordList);
    UBTConnect_EmbedFeedModel.UBT_ImageSizeRecordList = UBT_ImageSizeRecordList;

});
define("UBTConnect_EmbedFeed.model$UBT_ShapeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_EmbedFeed.model", "UBTConnect_EmbedFeed.model$UBT_ShapeRecord"], function(exports, OutSystems, UBTConnect_EmbedFeedModel) {
    var OS = OutSystems.Internal;
    var UBT_ShapeRecordList = (function(_super) {
        __extends(UBT_ShapeRecordList, _super);

        function UBT_ShapeRecordList(defaults) {
            _super.apply(this, arguments);
        }
        UBT_ShapeRecordList.itemType = UBTConnect_EmbedFeedModel.UBT_ShapeRecord;
        return UBT_ShapeRecordList;
    })(OS.DataTypes.GenericRecordList);
    UBTConnect_EmbedFeedModel.UBT_ShapeRecordList = UBT_ShapeRecordList;

});
define("UBTConnect_EmbedFeed.model$AvatarImageFallbackoptionsRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_EmbedFeed.model", "UBTConnectLibrary.model$AvatarImageFallbackoptionsRec", "UBTConnect_EmbedFeed.referencesHealth", "UBTConnect_EmbedFeed.referencesHealth$UBTConnectLibrary"], function(exports, OutSystems, UBTConnectLibraryModel, UBTConnect_EmbedFeedModel) {
    var OS = OutSystems.Internal;
    var AvatarImageFallbackoptionsRecord = (function(_super) {
        __extends(AvatarImageFallbackoptionsRecord, _super);

        function AvatarImageFallbackoptionsRecord(defaults) {
            _super.apply(this, arguments);
        }
        AvatarImageFallbackoptionsRecord.attributesToDeclare = function() {
            return [
                this.attr("AvatarImageFallbackoptions", "avatarImageFallbackoptionsAttr", "AvatarImageFallbackoptions", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.AvatarImageFallbackoptionsRec());
                }, true, UBTConnectLibraryModel.AvatarImageFallbackoptionsRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        AvatarImageFallbackoptionsRecord.fromStructure = function(str) {
            return new AvatarImageFallbackoptionsRecord(new AvatarImageFallbackoptionsRecord.RecordClass({
                avatarImageFallbackoptionsAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        AvatarImageFallbackoptionsRecord._isAnonymousRecord = true;
        AvatarImageFallbackoptionsRecord.UniqueId = "285ad076-c469-e14e-6a4f-adb5f1012e06";
        AvatarImageFallbackoptionsRecord.init();
        return AvatarImageFallbackoptionsRecord;
    })(OS.DataTypes.GenericRecord);
    UBTConnect_EmbedFeedModel.AvatarImageFallbackoptionsRecord = AvatarImageFallbackoptionsRecord;

});
define("UBTConnect_EmbedFeed.model$UBT_ImageSizeList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_EmbedFeed.model", "UBTConnectLibrary.model$UBT_ImageSizeRec", "UBTConnect_EmbedFeed.referencesHealth", "UBTConnect_EmbedFeed.referencesHealth$UBTConnectLibrary"], function(exports, OutSystems, UBTConnectLibraryModel, UBTConnect_EmbedFeedModel) {
    var OS = OutSystems.Internal;
    var UBT_ImageSizeList = (function(_super) {
        __extends(UBT_ImageSizeList, _super);

        function UBT_ImageSizeList(defaults) {
            _super.apply(this, arguments);
        }
        UBT_ImageSizeList.itemType = UBTConnectLibraryModel.UBT_ImageSizeRec;
        return UBT_ImageSizeList;
    })(OS.DataTypes.GenericRecordList);
    UBTConnect_EmbedFeedModel.UBT_ImageSizeList = UBT_ImageSizeList;

});
define("UBTConnect_EmbedFeed.model$BackgroundOptionsList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_EmbedFeed.model", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnect_EmbedFeed.referencesHealth", "UBTConnect_EmbedFeed.referencesHealth$UBTConnectLibrary"], function(exports, OutSystems, UBTConnectLibraryModel, UBTConnect_EmbedFeedModel) {
    var OS = OutSystems.Internal;
    var BackgroundOptionsList = (function(_super) {
        __extends(BackgroundOptionsList, _super);

        function BackgroundOptionsList(defaults) {
            _super.apply(this, arguments);
        }
        BackgroundOptionsList.itemType = UBTConnectLibraryModel.BackgroundOptionsRec;
        return BackgroundOptionsList;
    })(OS.DataTypes.GenericRecordList);
    UBTConnect_EmbedFeedModel.BackgroundOptionsList = BackgroundOptionsList;

});
define("UBTConnect_EmbedFeed.model$AppManager_ConfigClientCacheRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBTConnect_EmbedFeed.model", "UBT_AppManager_CS.model$AppManager_ConfigClientCacheRec", "UBTConnect_EmbedFeed.referencesHealth", "UBTConnect_EmbedFeed.referencesHealth$UBT_AppManager_CS"], function(exports, OutSystems, UBT_AppManager_CSModel, UBTConnect_EmbedFeedModel) {
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
    UBTConnect_EmbedFeedModel.AppManager_ConfigClientCacheRecord = AppManager_ConfigClientCacheRecord;

});
define("UBTConnect_EmbedFeed.model$ImageBorderOptionsRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_EmbedFeed.model", "UBTConnectLibrary.model$ImageBorderOptionsRec", "UBTConnect_EmbedFeed.referencesHealth", "UBTConnect_EmbedFeed.referencesHealth$UBTConnectLibrary"], function(exports, OutSystems, UBTConnectLibraryModel, UBTConnect_EmbedFeedModel) {
    var OS = OutSystems.Internal;
    var ImageBorderOptionsRecord = (function(_super) {
        __extends(ImageBorderOptionsRecord, _super);

        function ImageBorderOptionsRecord(defaults) {
            _super.apply(this, arguments);
        }
        ImageBorderOptionsRecord.attributesToDeclare = function() {
            return [
                this.attr("ImageBorderOptions", "imageBorderOptionsAttr", "ImageBorderOptions", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.ImageBorderOptionsRec());
                }, true, UBTConnectLibraryModel.ImageBorderOptionsRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        ImageBorderOptionsRecord.fromStructure = function(str) {
            return new ImageBorderOptionsRecord(new ImageBorderOptionsRecord.RecordClass({
                imageBorderOptionsAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        ImageBorderOptionsRecord._isAnonymousRecord = true;
        ImageBorderOptionsRecord.UniqueId = "f4ee7189-4cac-b1ec-c90f-31fe90073a0d";
        ImageBorderOptionsRecord.init();
        return ImageBorderOptionsRecord;
    })(OS.DataTypes.GenericRecord);
    UBTConnect_EmbedFeedModel.ImageBorderOptionsRecord = ImageBorderOptionsRecord;

});
define("UBTConnect_EmbedFeed.model$ImageBorderOptionsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_EmbedFeed.model", "UBTConnect_EmbedFeed.model$ImageBorderOptionsRecord"], function(exports, OutSystems, UBTConnect_EmbedFeedModel) {
    var OS = OutSystems.Internal;
    var ImageBorderOptionsRecordList = (function(_super) {
        __extends(ImageBorderOptionsRecordList, _super);

        function ImageBorderOptionsRecordList(defaults) {
            _super.apply(this, arguments);
        }
        ImageBorderOptionsRecordList.itemType = UBTConnect_EmbedFeedModel.ImageBorderOptionsRecord;
        return ImageBorderOptionsRecordList;
    })(OS.DataTypes.GenericRecordList);
    UBTConnect_EmbedFeedModel.ImageBorderOptionsRecordList = ImageBorderOptionsRecordList;

});
define("UBTConnect_EmbedFeed.model$BorderOptionsRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_EmbedFeed.model", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnect_EmbedFeed.referencesHealth", "UBTConnect_EmbedFeed.referencesHealth$UBTConnectLibrary"], function(exports, OutSystems, UBTConnectLibraryModel, UBTConnect_EmbedFeedModel) {
    var OS = OutSystems.Internal;
    var BorderOptionsRecord = (function(_super) {
        __extends(BorderOptionsRecord, _super);

        function BorderOptionsRecord(defaults) {
            _super.apply(this, arguments);
        }
        BorderOptionsRecord.attributesToDeclare = function() {
            return [
                this.attr("BorderOptions", "borderOptionsAttr", "BorderOptions", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.BorderOptionsRec());
                }, true, UBTConnectLibraryModel.BorderOptionsRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        BorderOptionsRecord.fromStructure = function(str) {
            return new BorderOptionsRecord(new BorderOptionsRecord.RecordClass({
                borderOptionsAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        BorderOptionsRecord._isAnonymousRecord = true;
        BorderOptionsRecord.UniqueId = "7e6c94eb-ca32-af63-9cc6-1a2ebfc43a00";
        BorderOptionsRecord.init();
        return BorderOptionsRecord;
    })(OS.DataTypes.GenericRecord);
    UBTConnect_EmbedFeedModel.BorderOptionsRecord = BorderOptionsRecord;

});
define("UBTConnect_EmbedFeed.model$BorderOptionsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_EmbedFeed.model", "UBTConnect_EmbedFeed.model$BorderOptionsRecord"], function(exports, OutSystems, UBTConnect_EmbedFeedModel) {
    var OS = OutSystems.Internal;
    var BorderOptionsRecordList = (function(_super) {
        __extends(BorderOptionsRecordList, _super);

        function BorderOptionsRecordList(defaults) {
            _super.apply(this, arguments);
        }
        BorderOptionsRecordList.itemType = UBTConnect_EmbedFeedModel.BorderOptionsRecord;
        return BorderOptionsRecordList;
    })(OS.DataTypes.GenericRecordList);
    UBTConnect_EmbedFeedModel.BorderOptionsRecordList = BorderOptionsRecordList;

});
define("UBTConnect_EmbedFeed.model$AppManager_ConfigClientRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBTConnect_EmbedFeed.model", "UBT_AppManager_CS.model$AppManager_ConfigClientRec", "UBTConnect_EmbedFeed.referencesHealth", "UBTConnect_EmbedFeed.referencesHealth$UBT_AppManager_CS"], function(exports, OutSystems, UBT_AppManager_CSModel, UBTConnect_EmbedFeedModel) {
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
    UBTConnect_EmbedFeedModel.AppManager_ConfigClientRecord = AppManager_ConfigClientRecord;

});
define("UBTConnect_EmbedFeed.model$LazyImageSizeRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_EmbedFeed.model", "UBTConnectLibrary.model$LazyImageSizeRec", "UBTConnect_EmbedFeed.referencesHealth", "UBTConnect_EmbedFeed.referencesHealth$UBTConnectLibrary"], function(exports, OutSystems, UBTConnectLibraryModel, UBTConnect_EmbedFeedModel) {
    var OS = OutSystems.Internal;
    var LazyImageSizeRecord = (function(_super) {
        __extends(LazyImageSizeRecord, _super);

        function LazyImageSizeRecord(defaults) {
            _super.apply(this, arguments);
        }
        LazyImageSizeRecord.attributesToDeclare = function() {
            return [
                this.attr("LazyImageSize", "lazyImageSizeAttr", "LazyImageSize", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.LazyImageSizeRec());
                }, true, UBTConnectLibraryModel.LazyImageSizeRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        LazyImageSizeRecord.fromStructure = function(str) {
            return new LazyImageSizeRecord(new LazyImageSizeRecord.RecordClass({
                lazyImageSizeAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        LazyImageSizeRecord._isAnonymousRecord = true;
        LazyImageSizeRecord.UniqueId = "4c061984-90a3-ec22-5824-8503ba6d4ff3";
        LazyImageSizeRecord.init();
        return LazyImageSizeRecord;
    })(OS.DataTypes.GenericRecord);
    UBTConnect_EmbedFeedModel.LazyImageSizeRecord = LazyImageSizeRecord;

});
define("UBTConnect_EmbedFeed.model$LazyImageSizeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_EmbedFeed.model", "UBTConnect_EmbedFeed.model$LazyImageSizeRecord"], function(exports, OutSystems, UBTConnect_EmbedFeedModel) {
    var OS = OutSystems.Internal;
    var LazyImageSizeRecordList = (function(_super) {
        __extends(LazyImageSizeRecordList, _super);

        function LazyImageSizeRecordList(defaults) {
            _super.apply(this, arguments);
        }
        LazyImageSizeRecordList.itemType = UBTConnect_EmbedFeedModel.LazyImageSizeRecord;
        return LazyImageSizeRecordList;
    })(OS.DataTypes.GenericRecordList);
    UBTConnect_EmbedFeedModel.LazyImageSizeRecordList = LazyImageSizeRecordList;

});
define("UBTConnect_EmbedFeed.model$SizeOptionsList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_EmbedFeed.model", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnect_EmbedFeed.referencesHealth", "UBTConnect_EmbedFeed.referencesHealth$UBTConnectLibrary"], function(exports, OutSystems, UBTConnectLibraryModel, UBTConnect_EmbedFeedModel) {
    var OS = OutSystems.Internal;
    var SizeOptionsList = (function(_super) {
        __extends(SizeOptionsList, _super);

        function SizeOptionsList(defaults) {
            _super.apply(this, arguments);
        }
        SizeOptionsList.itemType = UBTConnectLibraryModel.SizeOptionsRec;
        return SizeOptionsList;
    })(OS.DataTypes.GenericRecordList);
    UBTConnect_EmbedFeedModel.SizeOptionsList = SizeOptionsList;

});
define("UBTConnect_EmbedFeed.model$DisplayOptionsRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_EmbedFeed.model", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnect_EmbedFeed.referencesHealth", "UBTConnect_EmbedFeed.referencesHealth$UBTConnectLibrary"], function(exports, OutSystems, UBTConnectLibraryModel, UBTConnect_EmbedFeedModel) {
    var OS = OutSystems.Internal;
    var DisplayOptionsRecord = (function(_super) {
        __extends(DisplayOptionsRecord, _super);

        function DisplayOptionsRecord(defaults) {
            _super.apply(this, arguments);
        }
        DisplayOptionsRecord.attributesToDeclare = function() {
            return [
                this.attr("DisplayOptions", "displayOptionsAttr", "DisplayOptions", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.DisplayOptionsRec());
                }, true, UBTConnectLibraryModel.DisplayOptionsRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        DisplayOptionsRecord.fromStructure = function(str) {
            return new DisplayOptionsRecord(new DisplayOptionsRecord.RecordClass({
                displayOptionsAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        DisplayOptionsRecord._isAnonymousRecord = true;
        DisplayOptionsRecord.UniqueId = "de763328-7667-cb2f-9d07-694eace5c631";
        DisplayOptionsRecord.init();
        return DisplayOptionsRecord;
    })(OS.DataTypes.GenericRecord);
    UBTConnect_EmbedFeedModel.DisplayOptionsRecord = DisplayOptionsRecord;

});
define("UBTConnect_EmbedFeed.model$DisplayOptionsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_EmbedFeed.model", "UBTConnect_EmbedFeed.model$DisplayOptionsRecord"], function(exports, OutSystems, UBTConnect_EmbedFeedModel) {
    var OS = OutSystems.Internal;
    var DisplayOptionsRecordList = (function(_super) {
        __extends(DisplayOptionsRecordList, _super);

        function DisplayOptionsRecordList(defaults) {
            _super.apply(this, arguments);
        }
        DisplayOptionsRecordList.itemType = UBTConnect_EmbedFeedModel.DisplayOptionsRecord;
        return DisplayOptionsRecordList;
    })(OS.DataTypes.GenericRecordList);
    UBTConnect_EmbedFeedModel.DisplayOptionsRecordList = DisplayOptionsRecordList;

});
define("UBTConnect_EmbedFeed.model$UBT_IconsList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_EmbedFeed.model", "UBTConnectLibrary.model$UBT_IconsRec", "UBTConnect_EmbedFeed.referencesHealth", "UBTConnect_EmbedFeed.referencesHealth$UBTConnectLibrary"], function(exports, OutSystems, UBTConnectLibraryModel, UBTConnect_EmbedFeedModel) {
    var OS = OutSystems.Internal;
    var UBT_IconsList = (function(_super) {
        __extends(UBT_IconsList, _super);

        function UBT_IconsList(defaults) {
            _super.apply(this, arguments);
        }
        UBT_IconsList.itemType = UBTConnectLibraryModel.UBT_IconsRec;
        return UBT_IconsList;
    })(OS.DataTypes.GenericRecordList);
    UBTConnect_EmbedFeedModel.UBT_IconsList = UBT_IconsList;

});
define("UBTConnect_EmbedFeed.model$RadiusOptionsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_EmbedFeed.model", "UBTConnect_EmbedFeed.model$RadiusOptionsRecord"], function(exports, OutSystems, UBTConnect_EmbedFeedModel) {
    var OS = OutSystems.Internal;
    var RadiusOptionsRecordList = (function(_super) {
        __extends(RadiusOptionsRecordList, _super);

        function RadiusOptionsRecordList(defaults) {
            _super.apply(this, arguments);
        }
        RadiusOptionsRecordList.itemType = UBTConnect_EmbedFeedModel.RadiusOptionsRecord;
        return RadiusOptionsRecordList;
    })(OS.DataTypes.GenericRecordList);
    UBTConnect_EmbedFeedModel.RadiusOptionsRecordList = RadiusOptionsRecordList;

});
define("UBTConnect_EmbedFeed.model$SpacingOptionsList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_EmbedFeed.model", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnect_EmbedFeed.referencesHealth", "UBTConnect_EmbedFeed.referencesHealth$UBTConnectLibrary"], function(exports, OutSystems, UBTConnectLibraryModel, UBTConnect_EmbedFeedModel) {
    var OS = OutSystems.Internal;
    var SpacingOptionsList = (function(_super) {
        __extends(SpacingOptionsList, _super);

        function SpacingOptionsList(defaults) {
            _super.apply(this, arguments);
        }
        SpacingOptionsList.itemType = UBTConnectLibraryModel.SpacingOptionsRec;
        return SpacingOptionsList;
    })(OS.DataTypes.GenericRecordList);
    UBTConnect_EmbedFeedModel.SpacingOptionsList = SpacingOptionsList;

});
define("UBTConnect_EmbedFeed.model$UBT_SizeRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_EmbedFeed.model", "UBTConnectLibrary.model$UBT_SizeRec", "UBTConnect_EmbedFeed.referencesHealth", "UBTConnect_EmbedFeed.referencesHealth$UBTConnectLibrary"], function(exports, OutSystems, UBTConnectLibraryModel, UBTConnect_EmbedFeedModel) {
    var OS = OutSystems.Internal;
    var UBT_SizeRecord = (function(_super) {
        __extends(UBT_SizeRecord, _super);

        function UBT_SizeRecord(defaults) {
            _super.apply(this, arguments);
        }
        UBT_SizeRecord.attributesToDeclare = function() {
            return [
                this.attr("UBT_Size", "uBT_SizeAttr", "UBT_Size", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.UBT_SizeRec());
                }, true, UBTConnectLibraryModel.UBT_SizeRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        UBT_SizeRecord.fromStructure = function(str) {
            return new UBT_SizeRecord(new UBT_SizeRecord.RecordClass({
                uBT_SizeAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        UBT_SizeRecord._isAnonymousRecord = true;
        UBT_SizeRecord.UniqueId = "d61a9bac-e6f1-22f3-9bd7-e1f359bbbea3";
        UBT_SizeRecord.init();
        return UBT_SizeRecord;
    })(OS.DataTypes.GenericRecord);
    UBTConnect_EmbedFeedModel.UBT_SizeRecord = UBT_SizeRecord;

});
define("UBTConnect_EmbedFeed.model$UBT_SizeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_EmbedFeed.model", "UBTConnect_EmbedFeed.model$UBT_SizeRecord"], function(exports, OutSystems, UBTConnect_EmbedFeedModel) {
    var OS = OutSystems.Internal;
    var UBT_SizeRecordList = (function(_super) {
        __extends(UBT_SizeRecordList, _super);

        function UBT_SizeRecordList(defaults) {
            _super.apply(this, arguments);
        }
        UBT_SizeRecordList.itemType = UBTConnect_EmbedFeedModel.UBT_SizeRecord;
        return UBT_SizeRecordList;
    })(OS.DataTypes.GenericRecordList);
    UBTConnect_EmbedFeedModel.UBT_SizeRecordList = UBT_SizeRecordList;

});
define("UBTConnect_EmbedFeed.model$BackgroundImageList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_EmbedFeed.model", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnect_EmbedFeed.referencesHealth", "UBTConnect_EmbedFeed.referencesHealth$UBTConnectLibrary"], function(exports, OutSystems, UBTConnectLibraryModel, UBTConnect_EmbedFeedModel) {
    var OS = OutSystems.Internal;
    var BackgroundImageList = (function(_super) {
        __extends(BackgroundImageList, _super);

        function BackgroundImageList(defaults) {
            _super.apply(this, arguments);
        }
        BackgroundImageList.itemType = UBTConnectLibraryModel.BackgroundImageRec;
        return BackgroundImageList;
    })(OS.DataTypes.GenericRecordList);
    UBTConnect_EmbedFeedModel.BackgroundImageList = BackgroundImageList;

});
define("UBTConnect_EmbedFeed.model$AppManager_ConfigClientList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_CS.model", "UBTConnect_EmbedFeed.model", "UBT_AppManager_CS.model$AppManager_ConfigClientRec", "UBTConnect_EmbedFeed.referencesHealth", "UBTConnect_EmbedFeed.referencesHealth$UBT_AppManager_CS"], function(exports, OutSystems, UBT_AppManager_CSModel, UBTConnect_EmbedFeedModel) {
    var OS = OutSystems.Internal;
    var AppManager_ConfigClientList = (function(_super) {
        __extends(AppManager_ConfigClientList, _super);

        function AppManager_ConfigClientList(defaults) {
            _super.apply(this, arguments);
        }
        AppManager_ConfigClientList.itemType = UBT_AppManager_CSModel.AppManager_ConfigClientRec;
        return AppManager_ConfigClientList;
    })(OS.DataTypes.GenericRecordList);
    UBTConnect_EmbedFeedModel.AppManager_ConfigClientList = AppManager_ConfigClientList;

});
define("UBTConnect_EmbedFeed.model$BackgroundOptionsRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_EmbedFeed.model", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnect_EmbedFeed.referencesHealth", "UBTConnect_EmbedFeed.referencesHealth$UBTConnectLibrary"], function(exports, OutSystems, UBTConnectLibraryModel, UBTConnect_EmbedFeedModel) {
    var OS = OutSystems.Internal;
    var BackgroundOptionsRecord = (function(_super) {
        __extends(BackgroundOptionsRecord, _super);

        function BackgroundOptionsRecord(defaults) {
            _super.apply(this, arguments);
        }
        BackgroundOptionsRecord.attributesToDeclare = function() {
            return [
                this.attr("BackgroundOptions", "backgroundOptionsAttr", "BackgroundOptions", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.BackgroundOptionsRec());
                }, true, UBTConnectLibraryModel.BackgroundOptionsRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        BackgroundOptionsRecord.fromStructure = function(str) {
            return new BackgroundOptionsRecord(new BackgroundOptionsRecord.RecordClass({
                backgroundOptionsAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        BackgroundOptionsRecord._isAnonymousRecord = true;
        BackgroundOptionsRecord.UniqueId = "8336cc9d-cd2e-7526-b001-3e8d028c81a3";
        BackgroundOptionsRecord.init();
        return BackgroundOptionsRecord;
    })(OS.DataTypes.GenericRecord);
    UBTConnect_EmbedFeedModel.BackgroundOptionsRecord = BackgroundOptionsRecord;

});
define("UBTConnect_EmbedFeed.model$BackgroundOptionsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_EmbedFeed.model", "UBTConnect_EmbedFeed.model$BackgroundOptionsRecord"], function(exports, OutSystems, UBTConnect_EmbedFeedModel) {
    var OS = OutSystems.Internal;
    var BackgroundOptionsRecordList = (function(_super) {
        __extends(BackgroundOptionsRecordList, _super);

        function BackgroundOptionsRecordList(defaults) {
            _super.apply(this, arguments);
        }
        BackgroundOptionsRecordList.itemType = UBTConnect_EmbedFeedModel.BackgroundOptionsRecord;
        return BackgroundOptionsRecordList;
    })(OS.DataTypes.GenericRecordList);
    UBTConnect_EmbedFeedModel.BackgroundOptionsRecordList = BackgroundOptionsRecordList;

});
define("UBTConnect_EmbedFeed.model$TextOptionsList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_EmbedFeed.model", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnect_EmbedFeed.referencesHealth", "UBTConnect_EmbedFeed.referencesHealth$UBTConnectLibrary"], function(exports, OutSystems, UBTConnectLibraryModel, UBTConnect_EmbedFeedModel) {
    var OS = OutSystems.Internal;
    var TextOptionsList = (function(_super) {
        __extends(TextOptionsList, _super);

        function TextOptionsList(defaults) {
            _super.apply(this, arguments);
        }
        TextOptionsList.itemType = UBTConnectLibraryModel.TextOptionsRec;
        return TextOptionsList;
    })(OS.DataTypes.GenericRecordList);
    UBTConnect_EmbedFeedModel.TextOptionsList = TextOptionsList;

});
define("UBTConnect_EmbedFeed.model$BackgroundImageRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_EmbedFeed.model", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnect_EmbedFeed.referencesHealth", "UBTConnect_EmbedFeed.referencesHealth$UBTConnectLibrary"], function(exports, OutSystems, UBTConnectLibraryModel, UBTConnect_EmbedFeedModel) {
    var OS = OutSystems.Internal;
    var BackgroundImageRecord = (function(_super) {
        __extends(BackgroundImageRecord, _super);

        function BackgroundImageRecord(defaults) {
            _super.apply(this, arguments);
        }
        BackgroundImageRecord.attributesToDeclare = function() {
            return [
                this.attr("BackgroundImage", "backgroundImageAttr", "BackgroundImage", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.BackgroundImageRec());
                }, true, UBTConnectLibraryModel.BackgroundImageRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        BackgroundImageRecord.fromStructure = function(str) {
            return new BackgroundImageRecord(new BackgroundImageRecord.RecordClass({
                backgroundImageAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        BackgroundImageRecord._isAnonymousRecord = true;
        BackgroundImageRecord.UniqueId = "7a12ce89-0c7a-ed80-58a6-dbda7d32eb72";
        BackgroundImageRecord.init();
        return BackgroundImageRecord;
    })(OS.DataTypes.GenericRecord);
    UBTConnect_EmbedFeedModel.BackgroundImageRecord = BackgroundImageRecord;

});
define("UBTConnect_EmbedFeed.model$AppManager_ConfigClientCacheRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_EmbedFeed.model", "UBTConnect_EmbedFeed.model$AppManager_ConfigClientCacheRecord"], function(exports, OutSystems, UBTConnect_EmbedFeedModel) {
    var OS = OutSystems.Internal;
    var AppManager_ConfigClientCacheRecordList = (function(_super) {
        __extends(AppManager_ConfigClientCacheRecordList, _super);

        function AppManager_ConfigClientCacheRecordList(defaults) {
            _super.apply(this, arguments);
        }
        AppManager_ConfigClientCacheRecordList.itemType = UBTConnect_EmbedFeedModel.AppManager_ConfigClientCacheRecord;
        return AppManager_ConfigClientCacheRecordList;
    })(OS.DataTypes.GenericRecordList);
    UBTConnect_EmbedFeedModel.AppManager_ConfigClientCacheRecordList = AppManager_ConfigClientCacheRecordList;

});
define("UBTConnect_EmbedFeed.model$TextOptionsRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_EmbedFeed.model", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnect_EmbedFeed.referencesHealth", "UBTConnect_EmbedFeed.referencesHealth$UBTConnectLibrary"], function(exports, OutSystems, UBTConnectLibraryModel, UBTConnect_EmbedFeedModel) {
    var OS = OutSystems.Internal;
    var TextOptionsRecord = (function(_super) {
        __extends(TextOptionsRecord, _super);

        function TextOptionsRecord(defaults) {
            _super.apply(this, arguments);
        }
        TextOptionsRecord.attributesToDeclare = function() {
            return [
                this.attr("TextOptions", "textOptionsAttr", "TextOptions", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.TextOptionsRec());
                }, true, UBTConnectLibraryModel.TextOptionsRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        TextOptionsRecord.fromStructure = function(str) {
            return new TextOptionsRecord(new TextOptionsRecord.RecordClass({
                textOptionsAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        TextOptionsRecord._isAnonymousRecord = true;
        TextOptionsRecord.UniqueId = "9f66f55c-798b-6cd3-7fb4-bedbd1a7c92a";
        TextOptionsRecord.init();
        return TextOptionsRecord;
    })(OS.DataTypes.GenericRecord);
    UBTConnect_EmbedFeedModel.TextOptionsRecord = TextOptionsRecord;

});
define("UBTConnect_EmbedFeed.model$TextOptionsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_EmbedFeed.model", "UBTConnect_EmbedFeed.model$TextOptionsRecord"], function(exports, OutSystems, UBTConnect_EmbedFeedModel) {
    var OS = OutSystems.Internal;
    var TextOptionsRecordList = (function(_super) {
        __extends(TextOptionsRecordList, _super);

        function TextOptionsRecordList(defaults) {
            _super.apply(this, arguments);
        }
        TextOptionsRecordList.itemType = UBTConnect_EmbedFeedModel.TextOptionsRecord;
        return TextOptionsRecordList;
    })(OS.DataTypes.GenericRecordList);
    UBTConnect_EmbedFeedModel.TextOptionsRecordList = TextOptionsRecordList;

});
define("UBTConnect_EmbedFeed.model$UserRecord", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model", "UBTConnect_EmbedFeed.model", "ServiceCenter.model$UserRec", "UBTConnect_EmbedFeed.referencesHealth", "UBTConnect_EmbedFeed.referencesHealth$ServiceCenter"], function(exports, OutSystems, ServiceCenterModel, UBTConnect_EmbedFeedModel) {
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
    UBTConnect_EmbedFeedModel.UserRecord = UserRecord;

});
define("UBTConnect_EmbedFeed.model$UserRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_EmbedFeed.model", "UBTConnect_EmbedFeed.model$UserRecord"], function(exports, OutSystems, UBTConnect_EmbedFeedModel) {
    var OS = OutSystems.Internal;
    var UserRecordList = (function(_super) {
        __extends(UserRecordList, _super);

        function UserRecordList(defaults) {
            _super.apply(this, arguments);
        }
        UserRecordList.itemType = UBTConnect_EmbedFeedModel.UserRecord;
        return UserRecordList;
    })(OS.DataTypes.GenericRecordList);
    UBTConnect_EmbedFeedModel.UserRecordList = UserRecordList;

});
define("UBTConnect_EmbedFeed.model$LazyImageSizeList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_EmbedFeed.model", "UBTConnectLibrary.model$LazyImageSizeRec", "UBTConnect_EmbedFeed.referencesHealth", "UBTConnect_EmbedFeed.referencesHealth$UBTConnectLibrary"], function(exports, OutSystems, UBTConnectLibraryModel, UBTConnect_EmbedFeedModel) {
    var OS = OutSystems.Internal;
    var LazyImageSizeList = (function(_super) {
        __extends(LazyImageSizeList, _super);

        function LazyImageSizeList(defaults) {
            _super.apply(this, arguments);
        }
        LazyImageSizeList.itemType = UBTConnectLibraryModel.LazyImageSizeRec;
        return LazyImageSizeList;
    })(OS.DataTypes.GenericRecordList);
    UBTConnect_EmbedFeedModel.LazyImageSizeList = LazyImageSizeList;

});
define("UBTConnect_EmbedFeed.model$AppManager_IdpProviderRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_DB.model", "UBTConnect_EmbedFeed.model", "UBT_AppManager_DB.model$AppManager_IdpProviderRec", "UBTConnect_EmbedFeed.referencesHealth", "UBTConnect_EmbedFeed.referencesHealth$UBT_AppManager_DB"], function(exports, OutSystems, UBT_AppManager_DBModel, UBTConnect_EmbedFeedModel) {
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
    UBTConnect_EmbedFeedModel.AppManager_IdpProviderRecord = AppManager_IdpProviderRecord;

});
define("UBTConnect_EmbedFeed.model$RadiusOptionsList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_EmbedFeed.model", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnect_EmbedFeed.referencesHealth", "UBTConnect_EmbedFeed.referencesHealth$UBTConnectLibrary"], function(exports, OutSystems, UBTConnectLibraryModel, UBTConnect_EmbedFeedModel) {
    var OS = OutSystems.Internal;
    var RadiusOptionsList = (function(_super) {
        __extends(RadiusOptionsList, _super);

        function RadiusOptionsList(defaults) {
            _super.apply(this, arguments);
        }
        RadiusOptionsList.itemType = UBTConnectLibraryModel.RadiusOptionsRec;
        return RadiusOptionsList;
    })(OS.DataTypes.GenericRecordList);
    UBTConnect_EmbedFeedModel.RadiusOptionsList = RadiusOptionsList;

});
define("UBTConnect_EmbedFeed.model$AvatarImageFallbackoptionsList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_EmbedFeed.model", "UBTConnectLibrary.model$AvatarImageFallbackoptionsRec", "UBTConnect_EmbedFeed.referencesHealth", "UBTConnect_EmbedFeed.referencesHealth$UBTConnectLibrary"], function(exports, OutSystems, UBTConnectLibraryModel, UBTConnect_EmbedFeedModel) {
    var OS = OutSystems.Internal;
    var AvatarImageFallbackoptionsList = (function(_super) {
        __extends(AvatarImageFallbackoptionsList, _super);

        function AvatarImageFallbackoptionsList(defaults) {
            _super.apply(this, arguments);
        }
        AvatarImageFallbackoptionsList.itemType = UBTConnectLibraryModel.AvatarImageFallbackoptionsRec;
        return AvatarImageFallbackoptionsList;
    })(OS.DataTypes.GenericRecordList);
    UBTConnect_EmbedFeedModel.AvatarImageFallbackoptionsList = AvatarImageFallbackoptionsList;

});
define("UBTConnect_EmbedFeed.model$BorderOptionsList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_EmbedFeed.model", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnect_EmbedFeed.referencesHealth", "UBTConnect_EmbedFeed.referencesHealth$UBTConnectLibrary"], function(exports, OutSystems, UBTConnectLibraryModel, UBTConnect_EmbedFeedModel) {
    var OS = OutSystems.Internal;
    var BorderOptionsList = (function(_super) {
        __extends(BorderOptionsList, _super);

        function BorderOptionsList(defaults) {
            _super.apply(this, arguments);
        }
        BorderOptionsList.itemType = UBTConnectLibraryModel.BorderOptionsRec;
        return BorderOptionsList;
    })(OS.DataTypes.GenericRecordList);
    UBTConnect_EmbedFeedModel.BorderOptionsList = BorderOptionsList;

});
define("UBTConnect_EmbedFeed.model$DisplayOptionsList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_EmbedFeed.model", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnect_EmbedFeed.referencesHealth", "UBTConnect_EmbedFeed.referencesHealth$UBTConnectLibrary"], function(exports, OutSystems, UBTConnectLibraryModel, UBTConnect_EmbedFeedModel) {
    var OS = OutSystems.Internal;
    var DisplayOptionsList = (function(_super) {
        __extends(DisplayOptionsList, _super);

        function DisplayOptionsList(defaults) {
            _super.apply(this, arguments);
        }
        DisplayOptionsList.itemType = UBTConnectLibraryModel.DisplayOptionsRec;
        return DisplayOptionsList;
    })(OS.DataTypes.GenericRecordList);
    UBTConnect_EmbedFeedModel.DisplayOptionsList = DisplayOptionsList;

});
define("UBTConnect_EmbedFeed.model$UBT_SizeList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_EmbedFeed.model", "UBTConnectLibrary.model$UBT_SizeRec", "UBTConnect_EmbedFeed.referencesHealth", "UBTConnect_EmbedFeed.referencesHealth$UBTConnectLibrary"], function(exports, OutSystems, UBTConnectLibraryModel, UBTConnect_EmbedFeedModel) {
    var OS = OutSystems.Internal;
    var UBT_SizeList = (function(_super) {
        __extends(UBT_SizeList, _super);

        function UBT_SizeList(defaults) {
            _super.apply(this, arguments);
        }
        UBT_SizeList.itemType = UBTConnectLibraryModel.UBT_SizeRec;
        return UBT_SizeList;
    })(OS.DataTypes.GenericRecordList);
    UBTConnect_EmbedFeedModel.UBT_SizeList = UBT_SizeList;

});
define("UBTConnect_EmbedFeed.model$ContainerOptionsRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_EmbedFeed.model", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect_EmbedFeed.referencesHealth", "UBTConnect_EmbedFeed.referencesHealth$UBTConnectLibrary"], function(exports, OutSystems, UBTConnectLibraryModel, UBTConnect_EmbedFeedModel) {
    var OS = OutSystems.Internal;
    var ContainerOptionsRecord = (function(_super) {
        __extends(ContainerOptionsRecord, _super);

        function ContainerOptionsRecord(defaults) {
            _super.apply(this, arguments);
        }
        ContainerOptionsRecord.attributesToDeclare = function() {
            return [
                this.attr("ContainerOptions", "containerOptionsAttr", "ContainerOptions", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.ContainerOptionsRec());
                }, true, UBTConnectLibraryModel.ContainerOptionsRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        ContainerOptionsRecord.fromStructure = function(str) {
            return new ContainerOptionsRecord(new ContainerOptionsRecord.RecordClass({
                containerOptionsAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        ContainerOptionsRecord._isAnonymousRecord = true;
        ContainerOptionsRecord.UniqueId = "ff143c1b-c1c5-0ea7-32ee-9d68318414e1";
        ContainerOptionsRecord.init();
        return ContainerOptionsRecord;
    })(OS.DataTypes.GenericRecord);
    UBTConnect_EmbedFeedModel.ContainerOptionsRecord = ContainerOptionsRecord;

});
define("UBTConnect_EmbedFeed.model$ContainerOptionsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_EmbedFeed.model", "UBTConnect_EmbedFeed.model$ContainerOptionsRecord"], function(exports, OutSystems, UBTConnect_EmbedFeedModel) {
    var OS = OutSystems.Internal;
    var ContainerOptionsRecordList = (function(_super) {
        __extends(ContainerOptionsRecordList, _super);

        function ContainerOptionsRecordList(defaults) {
            _super.apply(this, arguments);
        }
        ContainerOptionsRecordList.itemType = UBTConnect_EmbedFeedModel.ContainerOptionsRecord;
        return ContainerOptionsRecordList;
    })(OS.DataTypes.GenericRecordList);
    UBTConnect_EmbedFeedModel.ContainerOptionsRecordList = ContainerOptionsRecordList;

});
define("UBTConnect_EmbedFeed.model$AvatarImageFallbackoptionsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_EmbedFeed.model", "UBTConnect_EmbedFeed.model$AvatarImageFallbackoptionsRecord"], function(exports, OutSystems, UBTConnect_EmbedFeedModel) {
    var OS = OutSystems.Internal;
    var AvatarImageFallbackoptionsRecordList = (function(_super) {
        __extends(AvatarImageFallbackoptionsRecordList, _super);

        function AvatarImageFallbackoptionsRecordList(defaults) {
            _super.apply(this, arguments);
        }
        AvatarImageFallbackoptionsRecordList.itemType = UBTConnect_EmbedFeedModel.AvatarImageFallbackoptionsRecord;
        return AvatarImageFallbackoptionsRecordList;
    })(OS.DataTypes.GenericRecordList);
    UBTConnect_EmbedFeedModel.AvatarImageFallbackoptionsRecordList = AvatarImageFallbackoptionsRecordList;

});
define("UBTConnect_EmbedFeed.model$UBT_FontSizeRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_EmbedFeed.model", "UBTConnectLibrary.model$UBT_FontSizeRec", "UBTConnect_EmbedFeed.referencesHealth", "UBTConnect_EmbedFeed.referencesHealth$UBTConnectLibrary"], function(exports, OutSystems, UBTConnectLibraryModel, UBTConnect_EmbedFeedModel) {
    var OS = OutSystems.Internal;
    var UBT_FontSizeRecord = (function(_super) {
        __extends(UBT_FontSizeRecord, _super);

        function UBT_FontSizeRecord(defaults) {
            _super.apply(this, arguments);
        }
        UBT_FontSizeRecord.attributesToDeclare = function() {
            return [
                this.attr("UBT_FontSize", "uBT_FontSizeAttr", "UBT_FontSize", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.UBT_FontSizeRec());
                }, true, UBTConnectLibraryModel.UBT_FontSizeRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        UBT_FontSizeRecord.fromStructure = function(str) {
            return new UBT_FontSizeRecord(new UBT_FontSizeRecord.RecordClass({
                uBT_FontSizeAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        UBT_FontSizeRecord._isAnonymousRecord = true;
        UBT_FontSizeRecord.UniqueId = "a2254625-48b7-a75e-5fcf-c17f5bd21996";
        UBT_FontSizeRecord.init();
        return UBT_FontSizeRecord;
    })(OS.DataTypes.GenericRecord);
    UBTConnect_EmbedFeedModel.UBT_FontSizeRecord = UBT_FontSizeRecord;

});
define("UBTConnect_EmbedFeed.model$ContainerOptionsList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_EmbedFeed.model", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect_EmbedFeed.referencesHealth", "UBTConnect_EmbedFeed.referencesHealth$UBTConnectLibrary"], function(exports, OutSystems, UBTConnectLibraryModel, UBTConnect_EmbedFeedModel) {
    var OS = OutSystems.Internal;
    var ContainerOptionsList = (function(_super) {
        __extends(ContainerOptionsList, _super);

        function ContainerOptionsList(defaults) {
            _super.apply(this, arguments);
        }
        ContainerOptionsList.itemType = UBTConnectLibraryModel.ContainerOptionsRec;
        return ContainerOptionsList;
    })(OS.DataTypes.GenericRecordList);
    UBTConnect_EmbedFeedModel.ContainerOptionsList = ContainerOptionsList;

});
define("UBTConnect_EmbedFeed.model$UBT_FontSizeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_EmbedFeed.model", "UBTConnect_EmbedFeed.model$UBT_FontSizeRecord"], function(exports, OutSystems, UBTConnect_EmbedFeedModel) {
    var OS = OutSystems.Internal;
    var UBT_FontSizeRecordList = (function(_super) {
        __extends(UBT_FontSizeRecordList, _super);

        function UBT_FontSizeRecordList(defaults) {
            _super.apply(this, arguments);
        }
        UBT_FontSizeRecordList.itemType = UBTConnect_EmbedFeedModel.UBT_FontSizeRecord;
        return UBT_FontSizeRecordList;
    })(OS.DataTypes.GenericRecordList);
    UBTConnect_EmbedFeedModel.UBT_FontSizeRecordList = UBT_FontSizeRecordList;

});
define("UBTConnect_EmbedFeed.model$BackgroundImageRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_EmbedFeed.model", "UBTConnect_EmbedFeed.model$BackgroundImageRecord"], function(exports, OutSystems, UBTConnect_EmbedFeedModel) {
    var OS = OutSystems.Internal;
    var BackgroundImageRecordList = (function(_super) {
        __extends(BackgroundImageRecordList, _super);

        function BackgroundImageRecordList(defaults) {
            _super.apply(this, arguments);
        }
        BackgroundImageRecordList.itemType = UBTConnect_EmbedFeedModel.BackgroundImageRecord;
        return BackgroundImageRecordList;
    })(OS.DataTypes.GenericRecordList);
    UBTConnect_EmbedFeedModel.BackgroundImageRecordList = BackgroundImageRecordList;

});
define("UBTConnect_EmbedFeed.model$UBT_IconsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_EmbedFeed.model", "UBTConnect_EmbedFeed.model$UBT_IconsRecord"], function(exports, OutSystems, UBTConnect_EmbedFeedModel) {
    var OS = OutSystems.Internal;
    var UBT_IconsRecordList = (function(_super) {
        __extends(UBT_IconsRecordList, _super);

        function UBT_IconsRecordList(defaults) {
            _super.apply(this, arguments);
        }
        UBT_IconsRecordList.itemType = UBTConnect_EmbedFeedModel.UBT_IconsRecord;
        return UBT_IconsRecordList;
    })(OS.DataTypes.GenericRecordList);
    UBTConnect_EmbedFeedModel.UBT_IconsRecordList = UBT_IconsRecordList;

});
define("UBTConnect_EmbedFeed.model$SizeOptionsRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_EmbedFeed.model", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnect_EmbedFeed.referencesHealth", "UBTConnect_EmbedFeed.referencesHealth$UBTConnectLibrary"], function(exports, OutSystems, UBTConnectLibraryModel, UBTConnect_EmbedFeedModel) {
    var OS = OutSystems.Internal;
    var SizeOptionsRecord = (function(_super) {
        __extends(SizeOptionsRecord, _super);

        function SizeOptionsRecord(defaults) {
            _super.apply(this, arguments);
        }
        SizeOptionsRecord.attributesToDeclare = function() {
            return [
                this.attr("SizeOptions", "sizeOptionsAttr", "SizeOptions", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.SizeOptionsRec());
                }, true, UBTConnectLibraryModel.SizeOptionsRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        SizeOptionsRecord.fromStructure = function(str) {
            return new SizeOptionsRecord(new SizeOptionsRecord.RecordClass({
                sizeOptionsAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        SizeOptionsRecord._isAnonymousRecord = true;
        SizeOptionsRecord.UniqueId = "c1394f27-ec54-dd8c-9b47-c3a83414e146";
        SizeOptionsRecord.init();
        return SizeOptionsRecord;
    })(OS.DataTypes.GenericRecord);
    UBTConnect_EmbedFeedModel.SizeOptionsRecord = SizeOptionsRecord;

});
define("UBTConnect_EmbedFeed.model$AppManager_ConfigClientRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_EmbedFeed.model", "UBTConnect_EmbedFeed.model$AppManager_ConfigClientRecord"], function(exports, OutSystems, UBTConnect_EmbedFeedModel) {
    var OS = OutSystems.Internal;
    var AppManager_ConfigClientRecordList = (function(_super) {
        __extends(AppManager_ConfigClientRecordList, _super);

        function AppManager_ConfigClientRecordList(defaults) {
            _super.apply(this, arguments);
        }
        AppManager_ConfigClientRecordList.itemType = UBTConnect_EmbedFeedModel.AppManager_ConfigClientRecord;
        return AppManager_ConfigClientRecordList;
    })(OS.DataTypes.GenericRecordList);
    UBTConnect_EmbedFeedModel.AppManager_ConfigClientRecordList = AppManager_ConfigClientRecordList;

});
define("UBTConnect_EmbedFeed.model$SizeOptionsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_EmbedFeed.model", "UBTConnect_EmbedFeed.model$SizeOptionsRecord"], function(exports, OutSystems, UBTConnect_EmbedFeedModel) {
    var OS = OutSystems.Internal;
    var SizeOptionsRecordList = (function(_super) {
        __extends(SizeOptionsRecordList, _super);

        function SizeOptionsRecordList(defaults) {
            _super.apply(this, arguments);
        }
        SizeOptionsRecordList.itemType = UBTConnect_EmbedFeedModel.SizeOptionsRecord;
        return SizeOptionsRecordList;
    })(OS.DataTypes.GenericRecordList);
    UBTConnect_EmbedFeedModel.SizeOptionsRecordList = SizeOptionsRecordList;

});
define("UBTConnect_EmbedFeed.model$SpacingOptionsRecord", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_EmbedFeed.model", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnect_EmbedFeed.referencesHealth", "UBTConnect_EmbedFeed.referencesHealth$UBTConnectLibrary"], function(exports, OutSystems, UBTConnectLibraryModel, UBTConnect_EmbedFeedModel) {
    var OS = OutSystems.Internal;
    var SpacingOptionsRecord = (function(_super) {
        __extends(SpacingOptionsRecord, _super);

        function SpacingOptionsRecord(defaults) {
            _super.apply(this, arguments);
        }
        SpacingOptionsRecord.attributesToDeclare = function() {
            return [
                this.attr("SpacingOptions", "spacingOptionsAttr", "SpacingOptions", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.SpacingOptionsRec());
                }, true, UBTConnectLibraryModel.SpacingOptionsRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        SpacingOptionsRecord.fromStructure = function(str) {
            return new SpacingOptionsRecord(new SpacingOptionsRecord.RecordClass({
                spacingOptionsAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        SpacingOptionsRecord._isAnonymousRecord = true;
        SpacingOptionsRecord.UniqueId = "d5ed874f-6776-aae4-f3c6-1ea265e33181";
        SpacingOptionsRecord.init();
        return SpacingOptionsRecord;
    })(OS.DataTypes.GenericRecord);
    UBTConnect_EmbedFeedModel.SpacingOptionsRecord = SpacingOptionsRecord;

});
define("UBTConnect_EmbedFeed.model$SpacingOptionsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_EmbedFeed.model", "UBTConnect_EmbedFeed.model$SpacingOptionsRecord"], function(exports, OutSystems, UBTConnect_EmbedFeedModel) {
    var OS = OutSystems.Internal;
    var SpacingOptionsRecordList = (function(_super) {
        __extends(SpacingOptionsRecordList, _super);

        function SpacingOptionsRecordList(defaults) {
            _super.apply(this, arguments);
        }
        SpacingOptionsRecordList.itemType = UBTConnect_EmbedFeedModel.SpacingOptionsRecord;
        return SpacingOptionsRecordList;
    })(OS.DataTypes.GenericRecordList);
    UBTConnect_EmbedFeedModel.SpacingOptionsRecordList = SpacingOptionsRecordList;

});
define("UBTConnect_EmbedFeed.model$AppManager_IdpProviderList", ["exports", "OutSystems/ClientRuntime/Main", "UBT_AppManager_DB.model", "UBTConnect_EmbedFeed.model", "UBT_AppManager_DB.model$AppManager_IdpProviderRec", "UBTConnect_EmbedFeed.referencesHealth", "UBTConnect_EmbedFeed.referencesHealth$UBT_AppManager_DB"], function(exports, OutSystems, UBT_AppManager_DBModel, UBTConnect_EmbedFeedModel) {
    var OS = OutSystems.Internal;
    var AppManager_IdpProviderList = (function(_super) {
        __extends(AppManager_IdpProviderList, _super);

        function AppManager_IdpProviderList(defaults) {
            _super.apply(this, arguments);
        }
        AppManager_IdpProviderList.itemType = UBT_AppManager_DBModel.AppManager_IdpProviderRec;
        return AppManager_IdpProviderList;
    })(OS.DataTypes.GenericRecordList);
    UBTConnect_EmbedFeedModel.AppManager_IdpProviderList = AppManager_IdpProviderList;

});
define("UBTConnect_EmbedFeed.model$ImageBorderOptionsList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnect_EmbedFeed.model", "UBTConnectLibrary.model$ImageBorderOptionsRec", "UBTConnect_EmbedFeed.referencesHealth", "UBTConnect_EmbedFeed.referencesHealth$UBTConnectLibrary"], function(exports, OutSystems, UBTConnectLibraryModel, UBTConnect_EmbedFeedModel) {
    var OS = OutSystems.Internal;
    var ImageBorderOptionsList = (function(_super) {
        __extends(ImageBorderOptionsList, _super);

        function ImageBorderOptionsList(defaults) {
            _super.apply(this, arguments);
        }
        ImageBorderOptionsList.itemType = UBTConnectLibraryModel.ImageBorderOptionsRec;
        return ImageBorderOptionsList;
    })(OS.DataTypes.GenericRecordList);
    UBTConnect_EmbedFeedModel.ImageBorderOptionsList = ImageBorderOptionsList;

});
define("UBTConnect_EmbedFeed.model$UserList", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model", "UBTConnect_EmbedFeed.model", "ServiceCenter.model$UserRec", "UBTConnect_EmbedFeed.referencesHealth", "UBTConnect_EmbedFeed.referencesHealth$ServiceCenter"], function(exports, OutSystems, ServiceCenterModel, UBTConnect_EmbedFeedModel) {
    var OS = OutSystems.Internal;
    var UserList = (function(_super) {
        __extends(UserList, _super);

        function UserList(defaults) {
            _super.apply(this, arguments);
        }
        UserList.itemType = ServiceCenterModel.UserRec;
        return UserList;
    })(OS.DataTypes.GenericRecordList);
    UBTConnect_EmbedFeedModel.UserList = UserList;

});
define("UBTConnect_EmbedFeed.model$AppManager_IdpProviderRecordList", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnect_EmbedFeed.model", "UBTConnect_EmbedFeed.model$AppManager_IdpProviderRecord"], function(exports, OutSystems, UBTConnect_EmbedFeedModel) {
    var OS = OutSystems.Internal;
    var AppManager_IdpProviderRecordList = (function(_super) {
        __extends(AppManager_IdpProviderRecordList, _super);

        function AppManager_IdpProviderRecordList(defaults) {
            _super.apply(this, arguments);
        }
        AppManager_IdpProviderRecordList.itemType = UBTConnect_EmbedFeedModel.AppManager_IdpProviderRecord;
        return AppManager_IdpProviderRecordList;
    })(OS.DataTypes.GenericRecordList);
    UBTConnect_EmbedFeedModel.AppManager_IdpProviderRecordList = AppManager_IdpProviderRecordList;

});
define("UBTConnect_EmbedFeed.model", ["exports", "OutSystems/ClientRuntime/Main"], function(exports, OutSystems) {
    var OS = OutSystems.Internal;
    var UBTConnect_EmbedFeedModel = exports;
    Object.defineProperty(UBTConnect_EmbedFeedModel, "module", {
        get: function() {
            return OS.ApplicationInfo.getModules()["de45276c-1962-475e-b5d8-bf470f193542"];
        }
    });

    UBTConnect_EmbedFeedModel.staticEntities = {};
    UBTConnect_EmbedFeedModel.staticEntities.appManager_IdpProvider = {};
    var getAppManager_IdpProviderRecord = function(record) {
        return OS.ApplicationInfo.getModules()["41ff0174-9cb7-40a2-963a-fdb95cd05756"].staticEntities["a8868974-edc4-4d46-8929-9e794aaeeb1e"][record];
    };
    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.appManager_IdpProvider, "azureB2C", {
        get: function() {
            return OS.BuiltinFunctions.textToInteger(getAppManager_IdpProviderRecord("55b1849e-1a70-47ed-a3cd-ed55369e7fae"));
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.appManager_IdpProvider, "frontEgg", {
        get: function() {
            return OS.BuiltinFunctions.textToInteger(getAppManager_IdpProviderRecord("efadda25-9a40-4a8b-a349-84f6be74bc82"));
        }
    });

    UBTConnect_EmbedFeedModel.staticEntities.uBT_ImageSize = {};
    var getUBT_ImageSizeRecord = function(record) {
        return OS.ApplicationInfo.getModules()["cd340494-ad2e-4c10-a5e8-10482bdca8d4"].staticEntities["07cee39a-18ef-4dbf-8471-ec7fcfedef5a"][record];
    };
    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_ImageSize, "fullHeight_100_Percent", {
        get: function() {
            return getUBT_ImageSizeRecord("0323f7f5-c991-4653-8ef6-506692bdfc4b");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_ImageSize, "fullWidth_100_Percent", {
        get: function() {
            return getUBT_ImageSizeRecord("0f7c1d4a-dfe7-42a5-a4d4-7043e009450b");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_ImageSize, "medium_60", {
        get: function() {
            return getUBT_ImageSizeRecord("1b1aea95-ad82-4429-b68a-80820cf8fc1c");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_ImageSize, "extraSmall_32", {
        get: function() {
            return getUBT_ImageSizeRecord("22b961e4-50eb-4be4-b2e0-a450630f9091");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_ImageSize, "large_65", {
        get: function() {
            return getUBT_ImageSizeRecord("306a3f94-642c-4c0f-bc20-cd559b261dbc");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_ImageSize, "small_40", {
        get: function() {
            return getUBT_ImageSizeRecord("388c970f-f6ab-40cc-a651-5f5c016da8b6");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_ImageSize, "listThumbnail_104", {
        get: function() {
            return getUBT_ImageSizeRecord("3ea349ce-8f4d-4c79-a02d-d10da50b8170");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_ImageSize, "square", {
        get: function() {
            return getUBT_ImageSizeRecord("5fe1292f-fb79-4c0e-8275-31a50a05797b");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_ImageSize, "auto", {
        get: function() {
            return getUBT_ImageSizeRecord("6d5cd9e3-3b51-4955-bf2e-b2ce75fe3487");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_ImageSize, "base_52", {
        get: function() {
            return getUBT_ImageSizeRecord("83108d3c-d465-43d3-a8be-9813f5299db9");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_ImageSize, "extraLarge_100", {
        get: function() {
            return getUBT_ImageSizeRecord("9b640159-8fa5-47a0-bafd-e56680d4258a");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_ImageSize, "halfWidth_50vw", {
        get: function() {
            return getUBT_ImageSizeRecord("a820108b-9612-4fbc-99ea-b622a04efe9d");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_ImageSize, "maxHeight_100vh", {
        get: function() {
            return getUBT_ImageSizeRecord("c61c2400-2aee-4b97-aae0-9a25a06a0beb");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_ImageSize, "quarterWidth_25vw", {
        get: function() {
            return getUBT_ImageSizeRecord("ca560d17-83a8-4050-8346-7872a1ebd03f");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_ImageSize, "maxWidth_100vw", {
        get: function() {
            return getUBT_ImageSizeRecord("cd58b82c-6f73-4350-834c-3962510a400d");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_ImageSize, "doubleExtraLarge_176", {
        get: function() {
            return getUBT_ImageSizeRecord("e366276e-e1d4-44fb-a3f2-b04d303b0669");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_ImageSize, "thirdWidth_33vw", {
        get: function() {
            return getUBT_ImageSizeRecord("e79a4d16-4d28-4610-bbed-3079e45e639f");
        }
    });

    UBTConnect_EmbedFeedModel.staticEntities.uBT_Color = {};
    var getUBT_ColorRecord = function(record) {
        return OS.ApplicationInfo.getModules()["cd340494-ad2e-4c10-a5e8-10482bdca8d4"].staticEntities["15a2eb42-4574-4866-81b1-27212b512e30"][record];
    };
    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Color, "purpleDarkest", {
        get: function() {
            return getUBT_ColorRecord("05830090-6546-41ec-bd4a-339f0bd9de3e");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Color, "blueDarkest", {
        get: function() {
            return getUBT_ColorRecord("08872960-e4ef-4ee6-87d2-ed3c25354046");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Color, "peachDarkGradientLinear", {
        get: function() {
            return getUBT_ColorRecord("0e45baea-3480-4314-a952-7426e2e48f07");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Color, "tertiary", {
        get: function() {
            return getUBT_ColorRecord("13882892-29e0-4466-87d6-8bf6a647a5e6");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Color, "blueLightest", {
        get: function() {
            return getUBT_ColorRecord("164d1944-08b6-4ac1-86cb-3c7df3a2ac1e");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Color, "cyanDarkGradientLinear", {
        get: function() {
            return getUBT_ColorRecord("16d0c42f-008b-4dec-b157-bad1fe350783");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Color, "blueLight", {
        get: function() {
            return getUBT_ColorRecord("184b3928-360f-4550-a484-b7ba3e58c2c5");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Color, "cyanLighter", {
        get: function() {
            return getUBT_ColorRecord("185b2676-2026-47ee-a0b3-c75a1c8a1288");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Color, "peachDarker", {
        get: function() {
            return getUBT_ColorRecord("1fda6565-fa77-4f73-9504-c6d831e41be6");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Color, "yellowDarkest", {
        get: function() {
            return getUBT_ColorRecord("21ec71cc-7550-4356-8cf8-a78054fac1b8");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Color, "neutral8", {
        get: function() {
            return getUBT_ColorRecord("23e5ec91-9544-4fd5-89f8-b733bcd83734");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Color, "pink", {
        get: function() {
            return getUBT_ColorRecord("2c310cbc-847b-4e25-8063-1c2ae12e1309");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Color, "primaryGradientRadial", {
        get: function() {
            return getUBT_ColorRecord("2e7bb6b2-9912-43f7-9d2e-56944941a6e8");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Color, "redDarker", {
        get: function() {
            return getUBT_ColorRecord("31ac2430-9041-4ac7-8ce6-6a0d6f331045");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Color, "cyanLightest", {
        get: function() {
            return getUBT_ColorRecord("33117849-859f-436f-8e94-1b426720e0e6");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Color, "cyan", {
        get: function() {
            return getUBT_ColorRecord("342d31e3-5c19-4fe7-bcbc-86819dd070aa");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Color, "yellowLighter", {
        get: function() {
            return getUBT_ColorRecord("3523291e-51ee-4f2b-89ab-2400cf943740");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Color, "cyanDarker", {
        get: function() {
            return getUBT_ColorRecord("3767d77b-68a6-411b-a176-c6a90cd3448d");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Color, "error", {
        get: function() {
            return getUBT_ColorRecord("3798cac6-af7e-46e9-acc2-9f8bea33fafa");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Color, "grape", {
        get: function() {
            return getUBT_ColorRecord("3972a60d-06e5-444d-8237-d5a00416e8c2");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Color, "initial", {
        get: function() {
            return getUBT_ColorRecord("3d795492-e13d-4e93-9d76-19d01fb327e7");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Color, "inherit", {
        get: function() {
            return getUBT_ColorRecord("3f12e5fd-3aa8-4024-87e8-c5db6470f756");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Color, "neutral0", {
        get: function() {
            return getUBT_ColorRecord("4089faf6-2df0-4abd-a972-8887dbba8b5b");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Color, "neutral4", {
        get: function() {
            return getUBT_ColorRecord("49cca530-5a45-4f7f-b2b2-57c33874ec1f");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Color, "primaryGradientLinear", {
        get: function() {
            return getUBT_ColorRecord("4ffa8385-a5e4-4b60-a516-fdfca21cd066");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Color, "peachDarkest", {
        get: function() {
            return getUBT_ColorRecord("518e0c1d-595e-4dd5-b4c3-cfe77d842ebc");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Color, "peachLighter", {
        get: function() {
            return getUBT_ColorRecord("5753052b-e2f1-4b7c-bb19-0ccb1c5e7f79");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Color, "greenLightest", {
        get: function() {
            return getUBT_ColorRecord("59e2d10f-4d67-4a69-900b-f413511b580c");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Color, "blueDark", {
        get: function() {
            return getUBT_ColorRecord("5c12954d-57e4-487a-a815-4cf7ed0c7598");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Color, "neutral6", {
        get: function() {
            return getUBT_ColorRecord("5f10c2b1-7b7f-4959-aba3-113716521d47");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Color, "redDark", {
        get: function() {
            return getUBT_ColorRecord("607f3988-475c-43a0-aba4-2ba4b58907ea");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Color, "pinkNonStandardDarker", {
        get: function() {
            return getUBT_ColorRecord("633662b9-2ea8-4041-b701-0536e9c42ff1");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Color, "blueNonStandard", {
        get: function() {
            return getUBT_ColorRecord("63bf24fc-38fc-4e0d-834f-1ce87dc0b10a");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Color, "warning", {
        get: function() {
            return getUBT_ColorRecord("65d4bf68-0e90-4cb7-a7b2-6ceb4f92c9df");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Color, "revert", {
        get: function() {
            return getUBT_ColorRecord("67b0c706-c10c-4797-a007-9b1ce8545235");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Color, "blue", {
        get: function() {
            return getUBT_ColorRecord("71b82b5e-b87e-4b1b-b13b-835c761d99fc");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Color, "purpleLightest", {
        get: function() {
            return getUBT_ColorRecord("78f36fed-68c7-4882-a056-b3fda622cb2c");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Color, "purpleDark", {
        get: function() {
            return getUBT_ColorRecord("7b9fda54-5e8c-4b3d-aa35-9a511d69e5df");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Color, "neutral3", {
        get: function() {
            return getUBT_ColorRecord("7f4b5d80-4007-43d3-a275-e312abe700f4");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Color, "yellowLight", {
        get: function() {
            return getUBT_ColorRecord("845b1f32-a12e-4389-9f67-3ae2fa9b0d2b");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Color, "purpleDarkGradientLinear", {
        get: function() {
            return getUBT_ColorRecord("85b0a09c-16b7-44b4-96d8-1f9da2408dbb");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Color, "green", {
        get: function() {
            return getUBT_ColorRecord("85c37060-4326-44df-a0cc-5a13f69f26d5");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Color, "teal", {
        get: function() {
            return getUBT_ColorRecord("8edd2770-9752-4b46-a493-80e135e23644");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Color, "unset", {
        get: function() {
            return getUBT_ColorRecord("9240137f-908b-42b0-bd3f-b800caf21763");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Color, "peachDark", {
        get: function() {
            return getUBT_ColorRecord("938ec1e5-34f4-4467-aae5-fd7a89984c47");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Color, "neutral2", {
        get: function() {
            return getUBT_ColorRecord("95b3893d-02fc-429e-99f3-28f89b523a0e");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Color, "blueLighter", {
        get: function() {
            return getUBT_ColorRecord("9887169b-0ae7-49e6-96ac-4bd3af1178d4");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Color, "peachLigh", {
        get: function() {
            return getUBT_ColorRecord("9be02ce6-47be-414a-9c8b-ec370651dac3");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Color, "lime", {
        get: function() {
            return getUBT_ColorRecord("9d4aed3b-1f36-4052-9d5c-34e77a615615");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Color, "pinkNonStandard", {
        get: function() {
            return getUBT_ColorRecord("a1e29ef9-84ed-49d3-826c-cc69c24c7db3");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Color, "greenDarker", {
        get: function() {
            return getUBT_ColorRecord("a50a3956-0ce6-4416-a796-667fe54fa4a6");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Color, "yellow", {
        get: function() {
            return getUBT_ColorRecord("a93a0099-6233-4cd9-9f24-63a491bef071");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Color, "orange", {
        get: function() {
            return getUBT_ColorRecord("a947cac8-4262-401d-94b7-c31c42ba15bc");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Color, "neutral5", {
        get: function() {
            return getUBT_ColorRecord("aa4cac98-190b-413a-8fc2-c21902ea6b5e");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Color, "cyanDarkest", {
        get: function() {
            return getUBT_ColorRecord("ae936fa8-46e1-4945-ab06-297b1675d4c4");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Color, "neutral1", {
        get: function() {
            return getUBT_ColorRecord("b16bdf21-ff3f-4360-a8a7-cb36698afaf3");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Color, "transparent", {
        get: function() {
            return getUBT_ColorRecord("b29917b7-38c4-47f2-be97-4515098cf2e2");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Color, "neutral10", {
        get: function() {
            return getUBT_ColorRecord("b4537f80-ed23-4d32-aaef-8b9dd53be850");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Color, "purpleLighter", {
        get: function() {
            return getUBT_ColorRecord("b59d16dd-20dd-49a9-92fa-1db232143f8c");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Color, "purpleDarker", {
        get: function() {
            return getUBT_ColorRecord("b7cfbe79-7a84-4f1b-9194-3a0e444d8c23");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Color, "greenLighter", {
        get: function() {
            return getUBT_ColorRecord("b93c6fb3-b092-48cd-9840-9ca063748e80");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Color, "cyanDark", {
        get: function() {
            return getUBT_ColorRecord("bba397ea-8a54-4af2-95d2-a10e500fe97c");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Color, "success", {
        get: function() {
            return getUBT_ColorRecord("be151629-8a62-4b12-b1ea-563e8353213d");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Color, "purpleLight", {
        get: function() {
            return getUBT_ColorRecord("c3edeafe-e2af-4517-a5b9-814d25f96fb3");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Color, "neutral9", {
        get: function() {
            return getUBT_ColorRecord("c5289117-fd0c-46eb-b407-29ae599a70a8");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Color, "blueDarker", {
        get: function() {
            return getUBT_ColorRecord("c8ca8c59-c581-48f7-8e21-d0bff1f606b6");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Color, "violet", {
        get: function() {
            return getUBT_ColorRecord("cc5fce11-6caf-4f83-a062-3c87d045aa5b");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Color, "yellowLightest", {
        get: function() {
            return getUBT_ColorRecord("ccf99b97-b006-4cf3-838e-18a31ec7485f");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Color, "peachLightest", {
        get: function() {
            return getUBT_ColorRecord("ce399b09-df7c-48f3-a796-ba35722697d5");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Color, "primary", {
        get: function() {
            return getUBT_ColorRecord("d27276c0-e4ce-4d45-b89c-7ada5a5874dd");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Color, "secondary", {
        get: function() {
            return getUBT_ColorRecord("dad810e5-c4ab-40dc-9ab3-63c043cfc5ae");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Color, "neutral7", {
        get: function() {
            return getUBT_ColorRecord("dc618da1-29e1-4b32-b176-697d63ed0603");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Color, "blueNonStandarDarker", {
        get: function() {
            return getUBT_ColorRecord("e1b590d2-5868-4575-8190-9c4d7021a27e");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Color, "greenDark", {
        get: function() {
            return getUBT_ColorRecord("e4297c8c-fbc1-45cf-bd37-26d5b41da6a9");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Color, "yellowDarker", {
        get: function() {
            return getUBT_ColorRecord("e757b4a0-7402-46d6-a00c-319209d8ff2d");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Color, "indigo", {
        get: function() {
            return getUBT_ColorRecord("e899a76a-b1ec-41b0-936d-e7ce2081a389");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Color, "greenDarkest", {
        get: function() {
            return getUBT_ColorRecord("eb901679-daca-482b-bd68-c434c83479f2");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Color, "peach", {
        get: function() {
            return getUBT_ColorRecord("ebcf5343-615e-40cb-a2e8-0b5f747824d7");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Color, "cyanLight", {
        get: function() {
            return getUBT_ColorRecord("efd1b932-24d7-4d2c-8f21-3ef2c8c84edb");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Color, "greenLight", {
        get: function() {
            return getUBT_ColorRecord("f3e04b12-ec38-4c39-8bde-776328a69748");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Color, "yellowDark", {
        get: function() {
            return getUBT_ColorRecord("f9715390-dae9-4684-b452-9e0145dfd68d");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Color, "blueDarkGradientLinear", {
        get: function() {
            return getUBT_ColorRecord("fc7450fa-8faa-48b1-90ea-02176cd11a23");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Color, "purple", {
        get: function() {
            return getUBT_ColorRecord("fcbb74a3-797c-455c-87b4-d4465652e5e9");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Color, "info", {
        get: function() {
            return getUBT_ColorRecord("fdffead9-4f49-483a-9f70-991b0cf13531");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Color, "red", {
        get: function() {
            return getUBT_ColorRecord("fe45b252-bf2a-494a-9a8c-72adae48034a");
        }
    });

    UBTConnect_EmbedFeedModel.staticEntities.uBT_Shape = {};
    var getUBT_ShapeRecord = function(record) {
        return OS.ApplicationInfo.getModules()["cd340494-ad2e-4c10-a5e8-10482bdca8d4"].staticEntities["5950c080-6e4b-48f6-89fe-55655482924b"][record];
    };
    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Shape, "soft", {
        get: function() {
            return getUBT_ShapeRecord("0c36bb8f-4073-4775-8c28-eb1d30eed6aa");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Shape, "medium", {
        get: function() {
            return getUBT_ShapeRecord("4223ce2a-7c06-4b23-afcd-7841b7559881");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Shape, "circle", {
        get: function() {
            return getUBT_ShapeRecord("87962f03-f5ed-42ea-801f-b98f51cb559c");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Shape, "large", {
        get: function() {
            return getUBT_ShapeRecord("d61799bc-5a05-4315-ac46-77c3b0504beb");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Shape, "none", {
        get: function() {
            return getUBT_ShapeRecord("f37348d0-8b88-4a75-80a6-e76e86e9bc35");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Shape, "rounded", {
        get: function() {
            return getUBT_ShapeRecord("fb7c5397-3c16-44fd-b5ea-36a00efdcd7c");
        }
    });

    UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons = {};
    var getUBT_IconsRecord = function(record) {
        return OS.ApplicationInfo.getModules()["cd340494-ad2e-4c10-a5e8-10482bdca8d4"].staticEntities["761dc95a-0f68-4160-83a0-143749383d08"][record];
    };
    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "marriage", {
        get: function() {
            return getUBT_IconsRecord("01967ad4-6bbf-443e-8285-e8e57b2b0632");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "cottage", {
        get: function() {
            return getUBT_IconsRecord("01fd0b0c-e174-41e1-b88b-9df6517c95ce");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "sVG_CommunityCountries", {
        get: function() {
            return getUBT_IconsRecord("023e6a1c-c170-4b43-8324-297e10e0e896");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "group", {
        get: function() {
            return getUBT_IconsRecord("038a4fe0-799e-494a-ab3c-211c23271654");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "arrowRight", {
        get: function() {
            return getUBT_IconsRecord("046695a9-b2b2-4670-a1a9-123ce6f5fd7f");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "boy", {
        get: function() {
            return getUBT_IconsRecord("051f2c2a-d1ce-42f4-b09b-bd094bca02f8");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "add", {
        get: function() {
            return getUBT_IconsRecord("0714fea8-7dea-4bcf-8671-f26dfb688cc0");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "sVG_CommunityMembers", {
        get: function() {
            return getUBT_IconsRecord("07cd8dc1-ba67-43c5-8b4a-98ff341f6944");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "chevronDown", {
        get: function() {
            return getUBT_IconsRecord("08166391-4813-4ac9-b20b-b990cfe18ae0");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "luggage", {
        get: function() {
            return getUBT_IconsRecord("08c8828f-9d45-4857-90df-6ab3793a846b");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "myLocationFill", {
        get: function() {
            return getUBT_IconsRecord("0979fad9-693b-4810-a256-195cae4fb739");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "union", {
        get: function() {
            return getUBT_IconsRecord("09ae4e7b-1487-4dc7-9155-9a6e066300d3");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "locationOn", {
        get: function() {
            return getUBT_IconsRecord("0c0a76dd-c942-4b57-9437-74976a916818");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "storefront", {
        get: function() {
            return getUBT_IconsRecord("0c519f0f-c843-4abc-941d-f6d9f4c12ea7");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "whatsapp", {
        get: function() {
            return getUBT_IconsRecord("0d96f6ca-9cef-4ac1-843c-81ad4c237aa6");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "visibilityFill", {
        get: function() {
            return getUBT_IconsRecord("0dfa82bd-c1ed-42fc-90e9-e5aa423bc16d");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "cancel", {
        get: function() {
            return getUBT_IconsRecord("0e32ef3f-efa3-48ea-a1b0-568f0ee4a6f5");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "personAdd", {
        get: function() {
            return getUBT_IconsRecord("0ec699ba-0eaa-4ce6-83ad-00eb6adc1f2b");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "password", {
        get: function() {
            return getUBT_IconsRecord("0ed02f7d-cad7-44c6-9e53-0f56734e0f07");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "dynamicFeed", {
        get: function() {
            return getUBT_IconsRecord("102b4b8c-bcd3-4011-9aaa-d7bfdd542433");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "iosShare", {
        get: function() {
            return getUBT_IconsRecord("10688e47-0812-45e3-9169-377f63e47c75");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "calendarAdd", {
        get: function() {
            return getUBT_IconsRecord("11e01581-c412-423e-824a-284305392186");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "gift", {
        get: function() {
            return getUBT_IconsRecord("1305faf0-5480-4bff-8141-7b23376d8b2c");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "record1", {
        get: function() {
            return getUBT_IconsRecord("13861d84-80dc-4c04-9d63-1d770681dd5d");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "lDM", {
        get: function() {
            return getUBT_IconsRecord("143fb3dc-b108-4637-a17b-408cc1a4fce5");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "reply", {
        get: function() {
            return getUBT_IconsRecord("144c3c28-9950-4880-a721-f92fbe7c28ef");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "partnerExchange", {
        get: function() {
            return getUBT_IconsRecord("15867a0f-96f6-431f-b82c-0da4464c9c56");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "arrowOutward", {
        get: function() {
            return getUBT_IconsRecord("1905fa31-1db8-4232-af51-113be9cccdd0");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "home", {
        get: function() {
            return getUBT_IconsRecord("190939d9-36b6-4191-b454-90e31962ef06");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "globeUK", {
        get: function() {
            return getUBT_IconsRecord("1952ef28-39f3-4883-b47a-1394459997a0");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "replay", {
        get: function() {
            return getUBT_IconsRecord("1a48b465-71e7-4d09-b5b9-f87f76144c8b");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "explore", {
        get: function() {
            return getUBT_IconsRecord("1c2c7434-d5dd-4a2a-9eff-49d7063aa0cb");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "connectLogo", {
        get: function() {
            return getUBT_IconsRecord("1c301095-4bf7-4096-beea-85decd0b8bcf");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "error", {
        get: function() {
            return getUBT_IconsRecord("1c71bc61-b231-4c87-922a-c313d6ddf3e0");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "playArrow", {
        get: function() {
            return getUBT_IconsRecord("1cb80687-9552-4b2d-9939-3eec621500f9");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "checkboxFill", {
        get: function() {
            return getUBT_IconsRecord("1d090f65-b6a8-4450-b31b-0430867aa2b7");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "sVG_ElGusto", {
        get: function() {
            return getUBT_IconsRecord("1d1ff2cc-8c99-45de-81be-a6c5c0e5f764");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "openNew", {
        get: function() {
            return getUBT_IconsRecord("1dfd3b2f-914f-410a-b6be-633c5c93b53d");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "sVG_PinOneSchool", {
        get: function() {
            return getUBT_IconsRecord("22660839-d944-4d18-ae82-7f7d8f853b9f");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "orbit", {
        get: function() {
            return getUBT_IconsRecord("254d3ef1-005e-4355-8f1f-7df80a0468bc");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "uBT", {
        get: function() {
            return getUBT_IconsRecord("2882a951-2fb4-479a-a87f-f327da1b192d");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "policy", {
        get: function() {
            return getUBT_IconsRecord("28f8245a-3cd9-42e8-8aa8-de3cd49ef203");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "radioUnchecked", {
        get: function() {
            return getUBT_IconsRecord("2a358645-89a2-4b9e-9e77-44c270956f4b");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "public", {
        get: function() {
            return getUBT_IconsRecord("2b09c68d-9361-4b85-ab9c-d74804f94e37");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "eventNote", {
        get: function() {
            return getUBT_IconsRecord("2bba9527-6d3e-4bd7-8380-0c2de4845d73");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "help", {
        get: function() {
            return getUBT_IconsRecord("2c71544f-d715-40b9-82fe-a8017341e7ec");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "trove", {
        get: function() {
            return getUBT_IconsRecord("2d018719-66ae-4989-9dbb-b54dde21349b");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "gridView", {
        get: function() {
            return getUBT_IconsRecord("2e1c7b32-5180-4009-98e3-5da055ca9360");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "notificationsFill", {
        get: function() {
            return getUBT_IconsRecord("2e749a54-d19c-4362-80fe-82ffbbfd69ad");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "calendar", {
        get: function() {
            return getUBT_IconsRecord("307db9b8-6f77-44b6-a601-9587539d4d6c");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "tune", {
        get: function() {
            return getUBT_IconsRecord("31aa6503-79ac-47bc-abc4-c1470a0f9abb");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "enterprise", {
        get: function() {
            return getUBT_IconsRecord("31ec4566-40e0-459f-ba26-7c85f670a2d0");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "myLocation", {
        get: function() {
            return getUBT_IconsRecord("32f51bcb-30ec-4970-b53b-2e44b60944da");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "sVG_PinLock", {
        get: function() {
            return getUBT_IconsRecord("337fcfdd-ec24-4706-af2a-c771796c4e90");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "contactsFill", {
        get: function() {
            return getUBT_IconsRecord("33c801dc-95ec-4700-afff-104ce126eaae");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "eventNoteFill", {
        get: function() {
            return getUBT_IconsRecord("33ca9fc2-4e5d-4755-b4d7-e0649b5c6f18");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "call", {
        get: function() {
            return getUBT_IconsRecord("3525444b-9d1f-4c52-a922-4723c0ce07c1");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "notifications", {
        get: function() {
            return getUBT_IconsRecord("3a0d7a28-5f0e-41eb-8766-dd9bc984f8f0");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "sort", {
        get: function() {
            return getUBT_IconsRecord("3a730ce3-50a4-4f24-83c3-835105bfb19f");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "aodFill", {
        get: function() {
            return getUBT_IconsRecord("3c668376-fac3-401a-9378-d97065bda812");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "sVG_CommunityTradelink", {
        get: function() {
            return getUBT_IconsRecord("3da48273-0ed5-4609-8dd3-f28f6190645b");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "scheduleFill", {
        get: function() {
            return getUBT_IconsRecord("3fdd2f3c-4040-42bc-85e3-aefad039c432");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "homeFill", {
        get: function() {
            return getUBT_IconsRecord("40ad5a6b-25f8-442a-8b98-552823e3a567");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "sendMoney", {
        get: function() {
            return getUBT_IconsRecord("4125d6a8-da17-457a-bda0-e29fe27cf556");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "mailFill", {
        get: function() {
            return getUBT_IconsRecord("41ac9174-8215-434f-b067-277c7ef0ebcb");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "block", {
        get: function() {
            return getUBT_IconsRecord("41ae034e-150a-408a-8ed3-78f1db8ee7ea");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "errorFill", {
        get: function() {
            return getUBT_IconsRecord("4343b5c4-be73-485f-919a-8c42fb06c6f5");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "tooltipFill", {
        get: function() {
            return getUBT_IconsRecord("442943e0-01d4-450e-9e62-d3c53fb66b0c");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "checkbox", {
        get: function() {
            return getUBT_IconsRecord("450a7217-12f4-4df4-a15c-45504366d99d");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "arrowLeft", {
        get: function() {
            return getUBT_IconsRecord("47f4fbb7-f2e5-4745-b966-1120481fb8d4");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "personPlay", {
        get: function() {
            return getUBT_IconsRecord("4b903c72-8b47-4ee9-b9d0-72da2e48e323");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "signal", {
        get: function() {
            return getUBT_IconsRecord("4ccb171d-6f30-4cfe-aadc-64fdab936092");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "tooltip", {
        get: function() {
            return getUBT_IconsRecord("4cd3ad41-b170-41e4-ae1f-43e4ae7b4928");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "cardOff", {
        get: function() {
            return getUBT_IconsRecord("4e38fd3c-e33c-4acc-8f9c-c07b7101e7e2");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "keep", {
        get: function() {
            return getUBT_IconsRecord("4e78cf1f-85dd-4fc6-b62d-37633c21d07f");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "house", {
        get: function() {
            return getUBT_IconsRecord("4ecc405e-a68f-4163-85bf-483b529e8f55");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "homePinFill", {
        get: function() {
            return getUBT_IconsRecord("4fb8c000-c28e-49e5-93d6-1a46ca0dae15");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "backspace", {
        get: function() {
            return getUBT_IconsRecord("51e1ef34-4966-4668-872a-bc7313d34e4e");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "stopCircle", {
        get: function() {
            return getUBT_IconsRecord("534a0f62-e9f9-4ffc-b39b-62df5c0bf951");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "pause", {
        get: function() {
            return getUBT_IconsRecord("549a714b-5fca-4863-b5c2-717ffd0324c9");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "calendarBusy", {
        get: function() {
            return getUBT_IconsRecord("5565d93a-0fe1-4cf2-ab10-3173b7fa33fe");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "gifting", {
        get: function() {
            return getUBT_IconsRecord("55748e60-9192-4b5a-9686-cfedad3d3bfe");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "cancelFill", {
        get: function() {
            return getUBT_IconsRecord("569668bf-eb84-4f5d-8896-18c59ea0af08");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "turnRight", {
        get: function() {
            return getUBT_IconsRecord("56df2e44-a1f2-432f-a49e-58d240f7757d");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "globeAsia", {
        get: function() {
            return getUBT_IconsRecord("593bfdba-792d-4067-b38b-867e5201b476");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "eventFill", {
        get: function() {
            return getUBT_IconsRecord("5a54402e-02af-48c8-af0d-91d1bdb07781");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "girl", {
        get: function() {
            return getUBT_IconsRecord("5f2b16ea-8416-45b8-8f83-ccf1ee554f71");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "link", {
        get: function() {
            return getUBT_IconsRecord("5f373e28-f02b-4ed2-b64c-a051b5f34025");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "cardGear", {
        get: function() {
            return getUBT_IconsRecord("606307c7-e8bd-4f7f-99ce-09a63426e795");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "expandLess", {
        get: function() {
            return getUBT_IconsRecord("609859bb-222b-4549-a272-0a7237537ce2");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "share", {
        get: function() {
            return getUBT_IconsRecord("625b037d-b75b-49b0-8042-72853eec2389");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "check", {
        get: function() {
            return getUBT_IconsRecord("64173b93-10a3-4c59-af2c-c3b013998a03");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "chevronRight", {
        get: function() {
            return getUBT_IconsRecord("64f7fd47-fbb4-4889-94b3-990455d7dc86");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "directionsSubway", {
        get: function() {
            return getUBT_IconsRecord("651e0ad5-cae1-41a0-9b53-b2e1c59d26b9");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "imageGallery", {
        get: function() {
            return getUBT_IconsRecord("65cbcd7b-8b1f-4718-8736-814742d65ba8");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "borderColor", {
        get: function() {
            return getUBT_IconsRecord("67ff3648-c211-4e45-bfba-5049b13629b1");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "fingerprint", {
        get: function() {
            return getUBT_IconsRecord("697e7e46-4ba7-4792-92cf-fd25c9e93d72");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "card", {
        get: function() {
            return getUBT_IconsRecord("6a0fdee2-65d5-4054-9a03-b301453b03ba");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "checkboxDash", {
        get: function() {
            return getUBT_IconsRecord("6bb67cbb-c4ca-4aaf-a89a-10e296b5394b");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "warning", {
        get: function() {
            return getUBT_IconsRecord("6bf835d0-facb-4471-a254-68add2237f0b");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "checkCircleFill", {
        get: function() {
            return getUBT_IconsRecord("6d436649-dabd-449e-afa9-16c39ded9c64");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "widgets", {
        get: function() {
            return getUBT_IconsRecord("6e7d0422-f469-49b8-9e4d-53e28142f342");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "calendarFill", {
        get: function() {
            return getUBT_IconsRecord("7061c91e-09a4-4726-990b-ccb38664b700");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "draft", {
        get: function() {
            return getUBT_IconsRecord("711f01ca-4b00-4edc-9037-fb5e5c68f506");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "delete", {
        get: function() {
            return getUBT_IconsRecord("7188c903-cd71-4d06-9573-14884be682dc");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "arrowDropDown", {
        get: function() {
            return getUBT_IconsRecord("74c4d722-5c41-474a-8a0d-bea8500220cf");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "listAlt", {
        get: function() {
            return getUBT_IconsRecord("76af9e65-b846-418b-a5bb-a3df0cec1d31");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "videocamFill", {
        get: function() {
            return getUBT_IconsRecord("7749b73a-3d4a-4e9a-86dd-6bcba267b08f");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "photoCamera", {
        get: function() {
            return getUBT_IconsRecord("78042bd0-55fa-4f4f-b2e7-74cf164f05df");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "eventList", {
        get: function() {
            return getUBT_IconsRecord("783ea5b1-d0c2-4e5c-8a7b-b187e98130c3");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "letter", {
        get: function() {
            return getUBT_IconsRecord("78de31ce-cd56-44bc-b094-721ad2786921");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "event", {
        get: function() {
            return getUBT_IconsRecord("78f1778a-8f97-4ef9-8c9c-50130bef4954");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "idCard", {
        get: function() {
            return getUBT_IconsRecord("7a2a42c6-cafc-41bb-a093-b2c5ff9a7cb8");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "refresh", {
        get: function() {
            return getUBT_IconsRecord("7a36a0a7-591a-4442-9168-143af08ce314");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "login", {
        get: function() {
            return getUBT_IconsRecord("7c019819-fab5-4f1e-bece-4fcdade0e6af");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "schedule", {
        get: function() {
            return getUBT_IconsRecord("7ca2b35d-0a8d-454f-9fdc-763329ab10c1");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "bookOpen", {
        get: function() {
            return getUBT_IconsRecord("7de9ad7a-96de-4a02-946b-d0d5466f2646");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "listAltFill", {
        get: function() {
            return getUBT_IconsRecord("7e16e742-d9f9-42c3-ade4-2d8d48c44c78");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "floatLandscape", {
        get: function() {
            return getUBT_IconsRecord("7e770565-6756-489c-861a-03aa64a06828");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "arrowDown", {
        get: function() {
            return getUBT_IconsRecord("82678915-1fde-4af5-b771-5962b251de3e");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "videocam", {
        get: function() {
            return getUBT_IconsRecord("8346d388-9271-49fa-9b2c-5a38911088a4");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "checkboxOutlineBlank", {
        get: function() {
            return getUBT_IconsRecord("85518b22-ee0b-4246-b791-3c32802c4878");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "contacts", {
        get: function() {
            return getUBT_IconsRecord("85e10228-6778-48d1-8e84-227f094b6aba");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "edit", {
        get: function() {
            return getUBT_IconsRecord("86a23e9d-91f9-4fca-9354-a2ddc5b38457");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "expandMore", {
        get: function() {
            return getUBT_IconsRecord("88ecfd16-0c74-471a-9eb7-24ef16c673cb");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "folder", {
        get: function() {
            return getUBT_IconsRecord("8af2a151-f264-4de2-b97e-b3027492d43b");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "filterAlt", {
        get: function() {
            return getUBT_IconsRecord("8ed754ea-2b4c-48b5-939f-4ec30b7a7354");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "bookClosed", {
        get: function() {
            return getUBT_IconsRecord("8f9d52f6-785b-4315-9fb9-7dca224db806");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "quoteFill", {
        get: function() {
            return getUBT_IconsRecord("900a6e7d-3539-4ceb-b038-281a6b9ae564");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "menu", {
        get: function() {
            return getUBT_IconsRecord("913b1341-974f-41fa-b3d2-8c173d29ae47");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "notes", {
        get: function() {
            return getUBT_IconsRecord("9428e91a-7445-4eff-a625-6563174cfd8e");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "callFill", {
        get: function() {
            return getUBT_IconsRecord("953d45c9-d5e1-4767-8b63-d2dcf0752f13");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "folderOpen", {
        get: function() {
            return getUBT_IconsRecord("97af837b-8428-4292-99c5-dd60bad9c300");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "bookmarkFill", {
        get: function() {
            return getUBT_IconsRecord("97dfc4b7-5c87-4cf2-b1a6-b740f5c1f486");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "close", {
        get: function() {
            return getUBT_IconsRecord("98231ddd-01a5-4cc5-99dd-758d32eef751");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "family", {
        get: function() {
            return getUBT_IconsRecord("98250881-935b-48c2-8d01-997c69c7c0a3");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "playCircle", {
        get: function() {
            return getUBT_IconsRecord("9ed563f2-c328-44ee-8812-51d88f3862dd");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "globe", {
        get: function() {
            return getUBT_IconsRecord("9f6709a5-3f25-4783-a603-09a816e52aa3");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "schoolFill", {
        get: function() {
            return getUBT_IconsRecord("a014cf6f-cb89-49d6-80ad-8b1ee8dfa941");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "settings", {
        get: function() {
            return getUBT_IconsRecord("a3a8997b-297b-4ef1-aed0-2384be658ed2");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "checkboxDashFill", {
        get: function() {
            return getUBT_IconsRecord("a618e000-d4f9-41e1-a33f-e2fb334b59e7");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "bookmark", {
        get: function() {
            return getUBT_IconsRecord("a73519f3-9a59-4ca0-a7b3-502a2243eb9f");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "arrowRightAlt", {
        get: function() {
            return getUBT_IconsRecord("a8cf78de-1154-4db5-bffb-e06ad12e6056");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "remove", {
        get: function() {
            return getUBT_IconsRecord("aa6d64e1-b646-4687-9d76-b06980882167");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "homePIn", {
        get: function() {
            return getUBT_IconsRecord("ab0942f0-9de6-4f70-bd6f-384c28e09d87");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "nearMe", {
        get: function() {
            return getUBT_IconsRecord("adfcacc5-456f-4a69-84ed-970b9327d191");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "sVG_CommunityHouseholds", {
        get: function() {
            return getUBT_IconsRecord("b2215bc2-e092-417f-87f8-cb12b3a2b672");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "attachFile", {
        get: function() {
            return getUBT_IconsRecord("b27013a5-8612-4010-a849-44a7ff7cb50b");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "sVG_OneSchoolGlobal", {
        get: function() {
            return getUBT_IconsRecord("b27cae42-c155-419b-9c52-a6ded1478bf8");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "person", {
        get: function() {
            return getUBT_IconsRecord("b3936174-dfa9-4604-a4e7-d97c384c06da");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "repeat", {
        get: function() {
            return getUBT_IconsRecord("b62d5d0b-5744-47d6-8415-e22c79503f89");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "search", {
        get: function() {
            return getUBT_IconsRecord("b66c2fec-a1aa-4787-ba19-79a7993bb086");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "calendarBusyFill", {
        get: function() {
            return getUBT_IconsRecord("b91e1e92-44c2-42b6-8057-d2b67e6a3fce");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "personFill", {
        get: function() {
            return getUBT_IconsRecord("ba1e4aea-ea5c-4c90-90c4-7c69df1970ec");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "infoFill", {
        get: function() {
            return getUBT_IconsRecord("ba1ee3b1-9de8-41a7-9d41-d05eaabe60b1");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "history", {
        get: function() {
            return getUBT_IconsRecord("ba3df0b5-1b83-4c43-aeaf-898b25db9f7c");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "mail", {
        get: function() {
            return getUBT_IconsRecord("bbb1690b-a9c4-4329-8441-7aec6bffc14f");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "sVG_PinCountry", {
        get: function() {
            return getUBT_IconsRecord("bc43fe1e-3e97-4b79-ad53-29dd65875a61");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "domain", {
        get: function() {
            return getUBT_IconsRecord("bc79bfae-bf5a-42e9-8a25-5f7ffb15643f");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "sVG_PinMember", {
        get: function() {
            return getUBT_IconsRecord("be0942ca-62a0-4714-a777-e60d054467c1");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "list", {
        get: function() {
            return getUBT_IconsRecord("bff74171-1624-46a3-a510-db5d33b7bf3e");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "visibility", {
        get: function() {
            return getUBT_IconsRecord("c176e42d-75b8-4192-9fff-c442300a50c1");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "payments", {
        get: function() {
            return getUBT_IconsRecord("c1af3a7c-8bc1-4c0e-b1e9-bd3828753c0d");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "assemble", {
        get: function() {
            return getUBT_IconsRecord("c23327a4-3eaf-413a-9265-01d068aafec8");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "accountCircleFill", {
        get: function() {
            return getUBT_IconsRecord("c46a02e3-6f2c-4460-abac-b5f48a644ea7");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "locationOnFill", {
        get: function() {
            return getUBT_IconsRecord("c483fbf3-95c0-4401-8b6f-8543ee7c35d5");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "arrowUp", {
        get: function() {
            return getUBT_IconsRecord("c60b1b20-beb3-434e-98b8-70bf14ecb947");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "checkCircle", {
        get: function() {
            return getUBT_IconsRecord("c60ed7fb-f4a1-4ba3-a1f1-e5db4b751804");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "removeFill", {
        get: function() {
            return getUBT_IconsRecord("c7de90b6-2331-4a23-8673-820f5111cca0");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "addCircle", {
        get: function() {
            return getUBT_IconsRecord("c996fa79-7b40-4447-8652-c9e635d4741c");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "arrowLeftAlt", {
        get: function() {
            return getUBT_IconsRecord("cacda8b6-18de-4d1b-ade1-be59af00de52");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "flag", {
        get: function() {
            return getUBT_IconsRecord("cd219881-7949-49d3-bd88-91280e24a506");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "accountCircle", {
        get: function() {
            return getUBT_IconsRecord("ce22e045-ec31-4e83-b5f3-9b14f1eefcbb");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "shoppingBasket", {
        get: function() {
            return getUBT_IconsRecord("ce7fab1d-5561-4ad4-9716-40090b87af51");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "contentCopy", {
        get: function() {
            return getUBT_IconsRecord("cf72d202-480f-4fe5-a8c8-7021673034f7");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "sVG_HR100", {
        get: function() {
            return getUBT_IconsRecord("d00930ac-8425-4356-b7c6-4c55c910aea8");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "visibilityOff", {
        get: function() {
            return getUBT_IconsRecord("d08478ad-9e1a-4c88-9dba-78eaea3cb291");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "school", {
        get: function() {
            return getUBT_IconsRecord("d15b6b62-6b8c-45d8-b8e4-142d44c83ec9");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "sVG_CommunityLocalities", {
        get: function() {
            return getUBT_IconsRecord("d2063973-e843-4517-a3fc-1a0a56fb1876");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "houseFill", {
        get: function() {
            return getUBT_IconsRecord("d4413405-ebb2-4d3c-bbd2-43e489cb09e8");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "arrowDropUp", {
        get: function() {
            return getUBT_IconsRecord("d4f63836-85a1-4f9a-9d57-4a324075707c");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "shoppingCart", {
        get: function() {
            return getUBT_IconsRecord("d7863646-a37e-4bd6-aedc-72183f218a9e");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "cottageFill", {
        get: function() {
            return getUBT_IconsRecord("d8b16ffa-c27c-4afa-b73c-6c6949fc39c8");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "orbitText", {
        get: function() {
            return getUBT_IconsRecord("d983ec69-df26-4a49-9482-4f7aa99ceebc");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "feedItem", {
        get: function() {
            return getUBT_IconsRecord("d99f1b4c-3673-4cc0-a3ab-b01d6059e46c");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "chevronLeft", {
        get: function() {
            return getUBT_IconsRecord("da912e1e-5017-423f-a27d-410797f75821");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "aod", {
        get: function() {
            return getUBT_IconsRecord("dc9e6375-f296-4eab-900b-33553d24fab7");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "moreVertical", {
        get: function() {
            return getUBT_IconsRecord("ddfcefe1-b2ac-4720-98ee-28658e3f4177");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "quote", {
        get: function() {
            return getUBT_IconsRecord("deec24f4-831f-4b87-bc37-3f92ab62ef11");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "sMS", {
        get: function() {
            return getUBT_IconsRecord("e2b0003e-25ec-41f2-9e14-00a2237353bc");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "notificationsOff", {
        get: function() {
            return getUBT_IconsRecord("e4119eb7-0c25-419d-8340-568a03b0e1d6");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "lock", {
        get: function() {
            return getUBT_IconsRecord("e493382b-67d4-42e6-91b9-db927bba8425");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "warningFill", {
        get: function() {
            return getUBT_IconsRecord("e5c898e5-4553-49d0-a045-8f7dab8084b2");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "sVG_PinHouse", {
        get: function() {
            return getUBT_IconsRecord("e708de25-9eb6-45b0-8a99-597ce4fddba5");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "download", {
        get: function() {
            return getUBT_IconsRecord("e86df772-a4d7-4eb9-b75e-7b91f89d6363");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "radioChecked", {
        get: function() {
            return getUBT_IconsRecord("f0ef9a69-7505-43c5-a83d-c9d3b456e780");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "moreHorizontal", {
        get: function() {
            return getUBT_IconsRecord("f3a35331-2768-478e-8d50-e1dce38559bc");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "widgetsFill", {
        get: function() {
            return getUBT_IconsRecord("f3e18937-6a20-4f30-b105-b8edf0a3877e");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "info", {
        get: function() {
            return getUBT_IconsRecord("f4cb4cb8-0378-49fb-bbf8-b3132e61c1ab");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "send", {
        get: function() {
            return getUBT_IconsRecord("f64340c2-0f84-4eed-b61c-a0142f3df5c6");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "clock", {
        get: function() {
            return getUBT_IconsRecord("f6b5303c-159a-413e-9cac-f717149da346");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "household", {
        get: function() {
            return getUBT_IconsRecord("f70d86e0-1a95-49a7-acd6-38be58ffef5c");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "sVG_PinLocality", {
        get: function() {
            return getUBT_IconsRecord("f919f6d4-df1b-45b3-8fae-789c332d6e6e");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "autorenew", {
        get: function() {
            return getUBT_IconsRecord("f9654262-1712-4ec7-9486-0b4fa24e1d47");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "publish", {
        get: function() {
            return getUBT_IconsRecord("fa177ef4-da9a-4abb-8932-6242e54625f0");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "inbox", {
        get: function() {
            return getUBT_IconsRecord("fada5b0e-d8d6-41af-b9d8-2be4a071cd75");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "dragIndicator", {
        get: function() {
            return getUBT_IconsRecord("fe74b0de-e2ce-4b19-9045-e594f412a630");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "logout", {
        get: function() {
            return getUBT_IconsRecord("fe7564bc-5ed5-45f4-aed5-4b2e1f5877fa");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Icons, "cached", {
        get: function() {
            return getUBT_IconsRecord("fea2d750-e35b-49fd-9cd8-4eb34f32d8ca");
        }
    });

    UBTConnect_EmbedFeedModel.staticEntities.uBT_FontSize = {};
    var getUBT_FontSizeRecord = function(record) {
        return OS.ApplicationInfo.getModules()["cd340494-ad2e-4c10-a5e8-10482bdca8d4"].staticEntities["b7b01d95-224a-4a59-8320-00ac87c8c15d"][record];
    };
    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_FontSize, "heading1", {
        get: function() {
            return getUBT_FontSizeRecord("1a0d6a49-f43e-40ee-a8fd-0066a663ecf2");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_FontSize, "doubleExtraSmall", {
        get: function() {
            return getUBT_FontSizeRecord("4aec019d-0785-4536-8d5d-ccd64a8f1cb2");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_FontSize, "heading6", {
        get: function() {
            return getUBT_FontSizeRecord("59c90066-6dc3-47f2-a136-b66c9b6a4769");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_FontSize, "heading3", {
        get: function() {
            return getUBT_FontSizeRecord("687365cc-97da-4fc7-ba13-59ec4b73f5e4");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_FontSize, "heading2", {
        get: function() {
            return getUBT_FontSizeRecord("6ffca60c-607f-4ec0-8e6e-d7ebd942f6d4");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_FontSize, "base", {
        get: function() {
            return getUBT_FontSizeRecord("81883c37-ffcd-4a9c-8214-da3cce9318e9");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_FontSize, "label", {
        get: function() {
            return getUBT_FontSizeRecord("a2605a0a-6427-4966-adf2-667e245ccf2f");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_FontSize, "extraSmall", {
        get: function() {
            return getUBT_FontSizeRecord("a87a69cd-c0ae-4561-9dd6-a8bdc20ca209");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_FontSize, "heading4", {
        get: function() {
            return getUBT_FontSizeRecord("caeebac3-8ee1-4b13-b099-5987cab93997");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_FontSize, "small", {
        get: function() {
            return getUBT_FontSizeRecord("d85f0341-b6d0-4460-b8f1-77218c0e044d");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_FontSize, "heading5", {
        get: function() {
            return getUBT_FontSizeRecord("e9e010dd-3a7f-45c8-af50-6d1ca540a50c");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_FontSize, "display", {
        get: function() {
            return getUBT_FontSizeRecord("e9eb6493-6ec3-431c-a967-b22b98eaca78");
        }
    });

    UBTConnect_EmbedFeedModel.staticEntities.uBT_Size = {};
    var getUBT_SizeRecord = function(record) {
        return OS.ApplicationInfo.getModules()["cd340494-ad2e-4c10-a5e8-10482bdca8d4"].staticEntities["e18a3aeb-48c0-4cfb-ae8a-f06bd2918ec5"][record];
    };
    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Size, "doubleExtraLarge", {
        get: function() {
            return getUBT_SizeRecord("0844bebb-5226-468b-86e8-72f61a7f93e0");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Size, "none", {
        get: function() {
            return getUBT_SizeRecord("08be7f0b-cf16-46c6-b25c-3a0a6cb01158");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Size, "medium", {
        get: function() {
            return getUBT_SizeRecord("355f0849-d9d4-4fec-872e-d4a426c7aada");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Size, "extraLarge", {
        get: function() {
            return getUBT_SizeRecord("3615c822-6889-4ddd-abe2-01c202138a9e");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Size, "base", {
        get: function() {
            return getUBT_SizeRecord("531e9a8b-9545-4d16-84c5-d14341c81aeb");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Size, "extraSmall", {
        get: function() {
            return getUBT_SizeRecord("7a79672a-3f95-45d0-a13f-03aa177f7bc4");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Size, "smallBase", {
        get: function() {
            return getUBT_SizeRecord("8cf9b30a-d783-4182-a793-67935fb7ba2f");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Size, "large", {
        get: function() {
            return getUBT_SizeRecord("adc0cb24-0a84-47c6-b2ac-c842b0fdb94a");
        }
    });

    Object.defineProperty(UBTConnect_EmbedFeedModel.staticEntities.uBT_Size, "small", {
        get: function() {
            return getUBT_SizeRecord("e7190f3c-0aab-4540-befc-7a7373406b70");
        }
    });

});