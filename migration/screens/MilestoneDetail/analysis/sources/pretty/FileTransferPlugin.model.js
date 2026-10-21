define("FileTransferPlugin.model$ProgressRec", ["exports", "OutSystems/ClientRuntime/Main", "FileTransferPlugin.model"], function(exports, OutSystems, FileTransferPluginModel) {
    var OS = OutSystems.Internal;
    var ProgressRec = (function(_super) {
        __extends(ProgressRec, _super);

        function ProgressRec(defaults) {
            _super.apply(this, arguments);
        }
        ProgressRec.attributesToDeclare = function() {
            return [
                this.attr("Loaded", "loadedAttr", "loaded", false, false, OS.DataTypes.DataTypes.Integer, function() {
                    return 0;
                }, true),
                this.attr("Total", "totalAttr", "total", false, false, OS.DataTypes.DataTypes.Integer, function() {
                    return 0;
                }, true),
                this.attr("LengthComputable", "lengthComputableAttr", "lengthComputable", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, true)
            ].concat(_super.attributesToDeclare.call(this));
        };
        ProgressRec.init();
        return ProgressRec;
    })(OS.DataTypes.GenericRecord);
    FileTransferPluginModel.ProgressRec = ProgressRec;

});
define("FileTransferPlugin.model$ProgressRecord", ["exports", "OutSystems/ClientRuntime/Main", "FileTransferPlugin.model", "FileTransferPlugin.model$ProgressRec"], function(exports, OutSystems, FileTransferPluginModel) {
    var OS = OutSystems.Internal;
    var ProgressRecord = (function(_super) {
        __extends(ProgressRecord, _super);

        function ProgressRecord(defaults) {
            _super.apply(this, arguments);
        }
        ProgressRecord.attributesToDeclare = function() {
            return [
                this.attr("Progress", "progressAttr", "Progress", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new FileTransferPluginModel.ProgressRec());
                }, true, FileTransferPluginModel.ProgressRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        ProgressRecord.fromStructure = function(str) {
            return new ProgressRecord(new ProgressRecord.RecordClass({
                progressAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        ProgressRecord._isAnonymousRecord = true;
        ProgressRecord.UniqueId = "0283883d-869b-c334-8a16-12d9ed364ef9";
        ProgressRecord.init();
        return ProgressRecord;
    })(OS.DataTypes.GenericRecord);
    FileTransferPluginModel.ProgressRecord = ProgressRecord;

});
define("FileTransferPlugin.model$WarningRecord", ["exports", "OutSystems/ClientRuntime/Main", "CommonPlugin.model", "FileTransferPlugin.model", "CommonPlugin.model$WarningRec", "FileTransferPlugin.referencesHealth", "FileTransferPlugin.referencesHealth$CommonPlugin"], function(exports, OutSystems, CommonPluginModel, FileTransferPluginModel) {
    var OS = OutSystems.Internal;
    var WarningRecord = (function(_super) {
        __extends(WarningRecord, _super);

        function WarningRecord(defaults) {
            _super.apply(this, arguments);
        }
        WarningRecord.attributesToDeclare = function() {
            return [
                this.attr("Warning", "warningAttr", "Warning", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new CommonPluginModel.WarningRec());
                }, true, CommonPluginModel.WarningRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        WarningRecord.fromStructure = function(str) {
            return new WarningRecord(new WarningRecord.RecordClass({
                warningAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        WarningRecord._isAnonymousRecord = true;
        WarningRecord.UniqueId = "1838e26c-3ba5-5f07-6914-2750034ccc7d";
        WarningRecord.init();
        return WarningRecord;
    })(OS.DataTypes.GenericRecord);
    FileTransferPluginModel.WarningRecord = WarningRecord;

});
define("FileTransferPlugin.model$WarningRecordList", ["exports", "OutSystems/ClientRuntime/Main", "FileTransferPlugin.model", "FileTransferPlugin.model$WarningRecord"], function(exports, OutSystems, FileTransferPluginModel) {
    var OS = OutSystems.Internal;
    var WarningRecordList = (function(_super) {
        __extends(WarningRecordList, _super);

        function WarningRecordList(defaults) {
            _super.apply(this, arguments);
        }
        WarningRecordList.itemType = FileTransferPluginModel.WarningRecord;
        return WarningRecordList;
    })(OS.DataTypes.GenericRecordList);
    FileTransferPluginModel.WarningRecordList = WarningRecordList;

});
define("FileTransferPlugin.model$FileTransferErrorRec", ["exports", "OutSystems/ClientRuntime/Main", "FileTransferPlugin.model"], function(exports, OutSystems, FileTransferPluginModel) {
    var OS = OutSystems.Internal;
    var FileTransferErrorRec = (function(_super) {
        __extends(FileTransferErrorRec, _super);

        function FileTransferErrorRec(defaults) {
            _super.apply(this, arguments);
        }
        FileTransferErrorRec.attributesToDeclare = function() {
            return [
                this.attr("Code", "codeAttr", "code", false, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, true),
                this.attr("Message", "messageAttr", "message", false, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, true),
                this.attr("Source", "sourceAttr", "source", false, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, true),
                this.attr("Target", "targetAttr", "target", false, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, true),
                this.attr("HttpStatus", "httpStatusAttr", "http_status", false, false, OS.DataTypes.DataTypes.Integer, function() {
                    return 0;
                }, true),
                this.attr("Body", "bodyAttr", "body", false, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, true),
                this.attr("Exception", "exceptionAttr", "exception", false, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, true),
                this.attr("Headers", "headersAttr", "headers", false, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, true)
            ].concat(_super.attributesToDeclare.call(this));
        };
        FileTransferErrorRec.init();
        return FileTransferErrorRec;
    })(OS.DataTypes.GenericRecord);
    FileTransferPluginModel.FileTransferErrorRec = FileTransferErrorRec;

});
define("FileTransferPlugin.model$FileTransferErrorRecord", ["exports", "OutSystems/ClientRuntime/Main", "FileTransferPlugin.model", "FileTransferPlugin.model$FileTransferErrorRec"], function(exports, OutSystems, FileTransferPluginModel) {
    var OS = OutSystems.Internal;
    var FileTransferErrorRecord = (function(_super) {
        __extends(FileTransferErrorRecord, _super);

        function FileTransferErrorRecord(defaults) {
            _super.apply(this, arguments);
        }
        FileTransferErrorRecord.attributesToDeclare = function() {
            return [
                this.attr("FileTransferError", "fileTransferErrorAttr", "FileTransferError", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new FileTransferPluginModel.FileTransferErrorRec());
                }, true, FileTransferPluginModel.FileTransferErrorRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        FileTransferErrorRecord.fromStructure = function(str) {
            return new FileTransferErrorRecord(new FileTransferErrorRecord.RecordClass({
                fileTransferErrorAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        FileTransferErrorRecord._isAnonymousRecord = true;
        FileTransferErrorRecord.UniqueId = "9784b7e8-5ddc-8775-4c56-73723c09268e";
        FileTransferErrorRecord.init();
        return FileTransferErrorRecord;
    })(OS.DataTypes.GenericRecord);
    FileTransferPluginModel.FileTransferErrorRecord = FileTransferErrorRecord;

});
define("FileTransferPlugin.model$FileTransferErrorRecordList", ["exports", "OutSystems/ClientRuntime/Main", "FileTransferPlugin.model", "FileTransferPlugin.model$FileTransferErrorRecord"], function(exports, OutSystems, FileTransferPluginModel) {
    var OS = OutSystems.Internal;
    var FileTransferErrorRecordList = (function(_super) {
        __extends(FileTransferErrorRecordList, _super);

        function FileTransferErrorRecordList(defaults) {
            _super.apply(this, arguments);
        }
        FileTransferErrorRecordList.itemType = FileTransferPluginModel.FileTransferErrorRecord;
        return FileTransferErrorRecordList;
    })(OS.DataTypes.GenericRecordList);
    FileTransferPluginModel.FileTransferErrorRecordList = FileTransferErrorRecordList;

});
define("FileTransferPlugin.model$HeaderRec", ["exports", "OutSystems/ClientRuntime/Main", "FileTransferPlugin.model"], function(exports, OutSystems, FileTransferPluginModel) {
    var OS = OutSystems.Internal;
    var HeaderRec = (function(_super) {
        __extends(HeaderRec, _super);

        function HeaderRec(defaults) {
            _super.apply(this, arguments);
        }
        HeaderRec.attributesToDeclare = function() {
            return [
                this.attr("Name", "nameAttr", "name", false, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, true),
                this.attr("Value", "valueAttr", "value", false, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, true)
            ].concat(_super.attributesToDeclare.call(this));
        };
        HeaderRec.init();
        return HeaderRec;
    })(OS.DataTypes.GenericRecord);
    FileTransferPluginModel.HeaderRec = HeaderRec;

});
define("FileTransferPlugin.model$FileDownloadResultRec", ["exports", "OutSystems/ClientRuntime/Main", "FileTransferPlugin.model"], function(exports, OutSystems, FileTransferPluginModel) {
    var OS = OutSystems.Internal;
    var FileDownloadResultRec = (function(_super) {
        __extends(FileDownloadResultRec, _super);

        function FileDownloadResultRec(defaults) {
            _super.apply(this, arguments);
        }
        FileDownloadResultRec.attributesToDeclare = function() {
            return [
                this.attr("isFile", "isFileAttr", "isFile", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, true),
                this.attr("isDirectory", "isDirectoryAttr", "isDirectory", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, true),
                this.attr("name", "nameAttr", "name", false, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, true),
                this.attr("fullPath", "fullPathAttr", "fullPath", false, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, true),
                this.attr("nativeURL", "nativeURLAttr", "nativeURL", false, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, true)
            ].concat(_super.attributesToDeclare.call(this));
        };
        FileDownloadResultRec.init();
        return FileDownloadResultRec;
    })(OS.DataTypes.GenericRecord);
    FileTransferPluginModel.FileDownloadResultRec = FileDownloadResultRec;

});
define("FileTransferPlugin.model$FileDownloadResultList", ["exports", "OutSystems/ClientRuntime/Main", "FileTransferPlugin.model", "FileTransferPlugin.model$FileDownloadResultRec"], function(exports, OutSystems, FileTransferPluginModel) {
    var OS = OutSystems.Internal;
    var FileDownloadResultList = (function(_super) {
        __extends(FileDownloadResultList, _super);

        function FileDownloadResultList(defaults) {
            _super.apply(this, arguments);
        }
        FileDownloadResultList.itemType = FileTransferPluginModel.FileDownloadResultRec;
        return FileDownloadResultList;
    })(OS.DataTypes.GenericRecordList);
    FileTransferPluginModel.FileDownloadResultList = FileDownloadResultList;

});
define("FileTransferPlugin.model$ErrorList", ["exports", "OutSystems/ClientRuntime/Main", "CommonPlugin.model", "FileTransferPlugin.model", "CommonPlugin.model$ErrorRec", "FileTransferPlugin.referencesHealth", "FileTransferPlugin.referencesHealth$CommonPlugin"], function(exports, OutSystems, CommonPluginModel, FileTransferPluginModel) {
    var OS = OutSystems.Internal;
    var ErrorList = (function(_super) {
        __extends(ErrorList, _super);

        function ErrorList(defaults) {
            _super.apply(this, arguments);
        }
        ErrorList.itemType = CommonPluginModel.ErrorRec;
        return ErrorList;
    })(OS.DataTypes.GenericRecordList);
    FileTransferPluginModel.ErrorList = ErrorList;

});
define("FileTransferPlugin.model$WarningList", ["exports", "OutSystems/ClientRuntime/Main", "CommonPlugin.model", "FileTransferPlugin.model", "CommonPlugin.model$WarningRec", "FileTransferPlugin.referencesHealth", "FileTransferPlugin.referencesHealth$CommonPlugin"], function(exports, OutSystems, CommonPluginModel, FileTransferPluginModel) {
    var OS = OutSystems.Internal;
    var WarningList = (function(_super) {
        __extends(WarningList, _super);

        function WarningList(defaults) {
            _super.apply(this, arguments);
        }
        WarningList.itemType = CommonPluginModel.WarningRec;
        return WarningList;
    })(OS.DataTypes.GenericRecordList);
    FileTransferPluginModel.WarningList = WarningList;

});
define("FileTransferPlugin.model$HeaderRecord", ["exports", "OutSystems/ClientRuntime/Main", "FileTransferPlugin.model", "FileTransferPlugin.model$HeaderRec"], function(exports, OutSystems, FileTransferPluginModel) {
    var OS = OutSystems.Internal;
    var HeaderRecord = (function(_super) {
        __extends(HeaderRecord, _super);

        function HeaderRecord(defaults) {
            _super.apply(this, arguments);
        }
        HeaderRecord.attributesToDeclare = function() {
            return [
                this.attr("Header", "headerAttr", "Header", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new FileTransferPluginModel.HeaderRec());
                }, true, FileTransferPluginModel.HeaderRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        HeaderRecord.fromStructure = function(str) {
            return new HeaderRecord(new HeaderRecord.RecordClass({
                headerAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        HeaderRecord._isAnonymousRecord = true;
        HeaderRecord.UniqueId = "9a85a264-9137-0598-52dd-56dd4c722fff";
        HeaderRecord.init();
        return HeaderRecord;
    })(OS.DataTypes.GenericRecord);
    FileTransferPluginModel.HeaderRecord = HeaderRecord;

});
define("FileTransferPlugin.model$HeaderRecordList", ["exports", "OutSystems/ClientRuntime/Main", "FileTransferPlugin.model", "FileTransferPlugin.model$HeaderRecord"], function(exports, OutSystems, FileTransferPluginModel) {
    var OS = OutSystems.Internal;
    var HeaderRecordList = (function(_super) {
        __extends(HeaderRecordList, _super);

        function HeaderRecordList(defaults) {
            _super.apply(this, arguments);
        }
        HeaderRecordList.itemType = FileTransferPluginModel.HeaderRecord;
        return HeaderRecordList;
    })(OS.DataTypes.GenericRecordList);
    FileTransferPluginModel.HeaderRecordList = HeaderRecordList;

});
define("FileTransferPlugin.model$FileDownloadResultRecord", ["exports", "OutSystems/ClientRuntime/Main", "FileTransferPlugin.model", "FileTransferPlugin.model$FileDownloadResultRec"], function(exports, OutSystems, FileTransferPluginModel) {
    var OS = OutSystems.Internal;
    var FileDownloadResultRecord = (function(_super) {
        __extends(FileDownloadResultRecord, _super);

        function FileDownloadResultRecord(defaults) {
            _super.apply(this, arguments);
        }
        FileDownloadResultRecord.attributesToDeclare = function() {
            return [
                this.attr("FileDownloadResult", "fileDownloadResultAttr", "FileDownloadResult", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new FileTransferPluginModel.FileDownloadResultRec());
                }, true, FileTransferPluginModel.FileDownloadResultRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        FileDownloadResultRecord.fromStructure = function(str) {
            return new FileDownloadResultRecord(new FileDownloadResultRecord.RecordClass({
                fileDownloadResultAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        FileDownloadResultRecord._isAnonymousRecord = true;
        FileDownloadResultRecord.UniqueId = "4ad04950-efde-a1f2-3b12-5133a5cc9e31";
        FileDownloadResultRecord.init();
        return FileDownloadResultRecord;
    })(OS.DataTypes.GenericRecord);
    FileTransferPluginModel.FileDownloadResultRecord = FileDownloadResultRecord;

});
define("FileTransferPlugin.model$ErrorRecord", ["exports", "OutSystems/ClientRuntime/Main", "CommonPlugin.model", "FileTransferPlugin.model", "CommonPlugin.model$ErrorRec", "FileTransferPlugin.referencesHealth", "FileTransferPlugin.referencesHealth$CommonPlugin"], function(exports, OutSystems, CommonPluginModel, FileTransferPluginModel) {
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
    FileTransferPluginModel.ErrorRecord = ErrorRecord;

});
define("FileTransferPlugin.model$ErrorRecordList", ["exports", "OutSystems/ClientRuntime/Main", "FileTransferPlugin.model", "FileTransferPlugin.model$ErrorRecord"], function(exports, OutSystems, FileTransferPluginModel) {
    var OS = OutSystems.Internal;
    var ErrorRecordList = (function(_super) {
        __extends(ErrorRecordList, _super);

        function ErrorRecordList(defaults) {
            _super.apply(this, arguments);
        }
        ErrorRecordList.itemType = FileTransferPluginModel.ErrorRecord;
        return ErrorRecordList;
    })(OS.DataTypes.GenericRecordList);
    FileTransferPluginModel.ErrorRecordList = ErrorRecordList;

});
define("FileTransferPlugin.model$FileTransferErrorList", ["exports", "OutSystems/ClientRuntime/Main", "FileTransferPlugin.model", "FileTransferPlugin.model$FileTransferErrorRec"], function(exports, OutSystems, FileTransferPluginModel) {
    var OS = OutSystems.Internal;
    var FileTransferErrorList = (function(_super) {
        __extends(FileTransferErrorList, _super);

        function FileTransferErrorList(defaults) {
            _super.apply(this, arguments);
        }
        FileTransferErrorList.itemType = FileTransferPluginModel.FileTransferErrorRec;
        return FileTransferErrorList;
    })(OS.DataTypes.GenericRecordList);
    FileTransferPluginModel.FileTransferErrorList = FileTransferErrorList;

});
define("FileTransferPlugin.model$ProgressRecordList", ["exports", "OutSystems/ClientRuntime/Main", "FileTransferPlugin.model", "FileTransferPlugin.model$ProgressRecord"], function(exports, OutSystems, FileTransferPluginModel) {
    var OS = OutSystems.Internal;
    var ProgressRecordList = (function(_super) {
        __extends(ProgressRecordList, _super);

        function ProgressRecordList(defaults) {
            _super.apply(this, arguments);
        }
        ProgressRecordList.itemType = FileTransferPluginModel.ProgressRecord;
        return ProgressRecordList;
    })(OS.DataTypes.GenericRecordList);
    FileTransferPluginModel.ProgressRecordList = ProgressRecordList;

});
define("FileTransferPlugin.model$ProgressList", ["exports", "OutSystems/ClientRuntime/Main", "FileTransferPlugin.model", "FileTransferPlugin.model$ProgressRec"], function(exports, OutSystems, FileTransferPluginModel) {
    var OS = OutSystems.Internal;
    var ProgressList = (function(_super) {
        __extends(ProgressList, _super);

        function ProgressList(defaults) {
            _super.apply(this, arguments);
        }
        ProgressList.itemType = FileTransferPluginModel.ProgressRec;
        return ProgressList;
    })(OS.DataTypes.GenericRecordList);
    FileTransferPluginModel.ProgressList = ProgressList;

});
define("FileTransferPlugin.model$FileUploadResultRec", ["exports", "OutSystems/ClientRuntime/Main", "FileTransferPlugin.model"], function(exports, OutSystems, FileTransferPluginModel) {
    var OS = OutSystems.Internal;
    var FileUploadResultRec = (function(_super) {
        __extends(FileUploadResultRec, _super);

        function FileUploadResultRec(defaults) {
            _super.apply(this, arguments);
        }
        FileUploadResultRec.attributesToDeclare = function() {
            return [
                this.attr("bytesSent", "bytesSentAttr", "bytesSent", false, false, OS.DataTypes.DataTypes.LongInteger, function() {
                    return OS.DataTypes.LongInteger.defaultValue;
                }, true),
                this.attr("responseCode", "responseCodeAttr", "responseCode", false, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, true),
                this.attr("response", "responseAttr", "response", false, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, true),
                this.attr("headers", "headersAttr", "headers", false, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, true)
            ].concat(_super.attributesToDeclare.call(this));
        };
        FileUploadResultRec.init();
        return FileUploadResultRec;
    })(OS.DataTypes.GenericRecord);
    FileTransferPluginModel.FileUploadResultRec = FileUploadResultRec;

});
define("FileTransferPlugin.model$FileUploadResultRecord", ["exports", "OutSystems/ClientRuntime/Main", "FileTransferPlugin.model", "FileTransferPlugin.model$FileUploadResultRec"], function(exports, OutSystems, FileTransferPluginModel) {
    var OS = OutSystems.Internal;
    var FileUploadResultRecord = (function(_super) {
        __extends(FileUploadResultRecord, _super);

        function FileUploadResultRecord(defaults) {
            _super.apply(this, arguments);
        }
        FileUploadResultRecord.attributesToDeclare = function() {
            return [
                this.attr("FileUploadResult", "fileUploadResultAttr", "FileUploadResult", false, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new FileTransferPluginModel.FileUploadResultRec());
                }, true, FileTransferPluginModel.FileUploadResultRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        FileUploadResultRecord.fromStructure = function(str) {
            return new FileUploadResultRecord(new FileUploadResultRecord.RecordClass({
                fileUploadResultAttr: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        FileUploadResultRecord._isAnonymousRecord = true;
        FileUploadResultRecord.UniqueId = "b7592a89-8440-5f82-51a6-a1f464178964";
        FileUploadResultRecord.init();
        return FileUploadResultRecord;
    })(OS.DataTypes.GenericRecord);
    FileTransferPluginModel.FileUploadResultRecord = FileUploadResultRecord;

});
define("FileTransferPlugin.model$FileUploadResultList", ["exports", "OutSystems/ClientRuntime/Main", "FileTransferPlugin.model", "FileTransferPlugin.model$FileUploadResultRec"], function(exports, OutSystems, FileTransferPluginModel) {
    var OS = OutSystems.Internal;
    var FileUploadResultList = (function(_super) {
        __extends(FileUploadResultList, _super);

        function FileUploadResultList(defaults) {
            _super.apply(this, arguments);
        }
        FileUploadResultList.itemType = FileTransferPluginModel.FileUploadResultRec;
        return FileUploadResultList;
    })(OS.DataTypes.GenericRecordList);
    FileTransferPluginModel.FileUploadResultList = FileUploadResultList;

});
define("FileTransferPlugin.model$HeaderList", ["exports", "OutSystems/ClientRuntime/Main", "FileTransferPlugin.model", "FileTransferPlugin.model$HeaderRec"], function(exports, OutSystems, FileTransferPluginModel) {
    var OS = OutSystems.Internal;
    var HeaderList = (function(_super) {
        __extends(HeaderList, _super);

        function HeaderList(defaults) {
            _super.apply(this, arguments);
        }
        HeaderList.itemType = FileTransferPluginModel.HeaderRec;
        return HeaderList;
    })(OS.DataTypes.GenericRecordList);
    FileTransferPluginModel.HeaderList = HeaderList;

});
define("FileTransferPlugin.model$FileDownloadResultRecordList", ["exports", "OutSystems/ClientRuntime/Main", "FileTransferPlugin.model", "FileTransferPlugin.model$FileDownloadResultRecord"], function(exports, OutSystems, FileTransferPluginModel) {
    var OS = OutSystems.Internal;
    var FileDownloadResultRecordList = (function(_super) {
        __extends(FileDownloadResultRecordList, _super);

        function FileDownloadResultRecordList(defaults) {
            _super.apply(this, arguments);
        }
        FileDownloadResultRecordList.itemType = FileTransferPluginModel.FileDownloadResultRecord;
        return FileDownloadResultRecordList;
    })(OS.DataTypes.GenericRecordList);
    FileTransferPluginModel.FileDownloadResultRecordList = FileDownloadResultRecordList;

});
define("FileTransferPlugin.model$FileUploadResultRecordList", ["exports", "OutSystems/ClientRuntime/Main", "FileTransferPlugin.model", "FileTransferPlugin.model$FileUploadResultRecord"], function(exports, OutSystems, FileTransferPluginModel) {
    var OS = OutSystems.Internal;
    var FileUploadResultRecordList = (function(_super) {
        __extends(FileUploadResultRecordList, _super);

        function FileUploadResultRecordList(defaults) {
            _super.apply(this, arguments);
        }
        FileUploadResultRecordList.itemType = FileTransferPluginModel.FileUploadResultRecord;
        return FileUploadResultRecordList;
    })(OS.DataTypes.GenericRecordList);
    FileTransferPluginModel.FileUploadResultRecordList = FileUploadResultRecordList;

});
define("FileTransferPlugin.model", ["exports", "OutSystems/ClientRuntime/Main"], function(exports, OutSystems) {
    var OS = OutSystems.Internal;
    var FileTransferPluginModel = exports;
    Object.defineProperty(FileTransferPluginModel, "module", {
        get: function() {
            return OS.ApplicationInfo.getModules()["7694fbc6-7c43-494c-89cf-b0785ca6b82d"];
        }
    });

    FileTransferPluginModel.staticEntities = {};
});