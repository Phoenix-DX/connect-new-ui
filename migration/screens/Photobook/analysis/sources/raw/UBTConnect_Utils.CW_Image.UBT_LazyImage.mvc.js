define("UBTConnect_Utils.CW_Image.UBT_LazyImage.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnectLibrary.model", "UBTConnect_Utils.controller", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$model", "UBTConnectLibrary.ConnectPatterns.LazyImage.mvc$model", "UBTConnectLibrary.model$AvatarImageFallbackoptionsRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$LazyImageSizeRec", "UBTConnectLibrary.model$ImageBorderOptionsRec", "UBTConnect_Utils.controller$GetEntityType_Icon", "UBTConnect_Utils.controller$GetImageType_FromEntity", "UBTConnect_Utils.controller$Cache_SignedImageURL_Get"], function (OutSystems, UBTConnect_UtilsModel, UBTConnectLibraryModel, UBTConnect_UtilsController, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvcModel, UBTConnectLibrary_ConnectPatterns_LazyImage_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("LocalFallbackoptions", "localFallbackoptionsVar", "LocalFallbackoptions", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.AvatarImageFallbackoptionsRec());
}, false, UBTConnectLibraryModel.AvatarImageFallbackoptionsRec), 
this.attr("LocalFallbackPadding", "localFallbackPaddingVar", "LocalFallbackPadding", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.SpacingOptionsRec());
}, false, UBTConnectLibraryModel.SpacingOptionsRec), 
this.attr("LocalBorderRadius", "localBorderRadiusVar", "LocalBorderRadius", true, false, OS.DataTypes.DataTypes.Text, function () {
return UBTConnect_UtilsModel.staticEntities.uBT_Shape.circle;
}, false), 
this.attr("LocalBorderColorId", "localBorderColorIdVar", "LocalBorderColorId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("LocalBorderSizeId", "localBorderSizeIdVar", "LocalBorderSizeId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("isFetched", "isFetchedVar", "isFetched", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("LocalImageSizeId", "localImageSizeIdVar", "LocalImageSizeId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("LocalImageType", "localImageTypeVar", "LocalImageType", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("LocalEntityId", "localEntityIdVar", "LocalEntityId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("LocalImageURL", "localImageURLVar", "LocalImageURL", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("ImageURL", "imageURLIn", "ImageURL", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_imageURLInDataFetchStatus", "_imageURLInDataFetchStatus", "_imageURLInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("EntityId", "entityIdIn", "EntityId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_entityIdInDataFetchStatus", "_entityIdInDataFetchStatus", "_entityIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("EntityType", "entityTypeIn", "EntityType", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_entityTypeInDataFetchStatus", "_entityTypeInDataFetchStatus", "_entityTypeInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("ImageSize", "imageSizeIn", "ImageSize", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.LazyImageSizeRec());
}, false, UBTConnectLibraryModel.LazyImageSizeRec), 
this.attr("_imageSizeInDataFetchStatus", "_imageSizeInDataFetchStatus", "_imageSizeInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_BorderRadius", "in_BorderRadiusIn", "In_BorderRadius", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_BorderRadiusInDataFetchStatus", "_in_BorderRadiusInDataFetchStatus", "_in_BorderRadiusInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_HighRes", "in_HighResIn", "In_HighRes", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_in_HighResInDataFetchStatus", "_in_HighResInDataFetchStatus", "_in_HighResInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("HasErrorMessage", "hasErrorMessageIn", "HasErrorMessage", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_hasErrorMessageInDataFetchStatus", "_hasErrorMessageInDataFetchStatus", "_hasErrorMessageInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false)
].concat(_super.attributesToDeclare.call(this));
};
VariablesRecord.init();
return VariablesRecord;
})(OS.DataTypes.GenericRecord);
var WidgetsRecord = (function (_super) {
__extends(WidgetsRecord, _super);
function WidgetsRecord() {
_super.apply(this, arguments);
}
WidgetsRecord.getWidgetsType = function () {
return {};
};

return WidgetsRecord;
})(OS.Model.BaseWidgetRecordMap);
var Model = (function (_super) {
__extends(Model, _super);
function Model() {
_super.apply(this, arguments);
}
Model.getVariablesRecordConstructor = function () {
return VariablesRecord;
};
Model.getWidgetsRecordConstructor = function () {
return WidgetsRecord;
};
Model._hasValidationWidgetsValue = undefined;
Object.defineProperty(Model, "hasValidationWidgets", {
enumerable: true,
configurable: true,
get: function () {
if((Model._hasValidationWidgetsValue === undefined)) {
Model._hasValidationWidgetsValue = (UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvcModel.hasValidationWidgets || UBTConnectLibrary_ConnectPatterns_LazyImage_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("ImageURL" in inputs) {
this.variables.imageURLIn = inputs.ImageURL;
if("_imageURLInDataFetchStatus" in inputs) {
this.variables._imageURLInDataFetchStatus = inputs._imageURLInDataFetchStatus;
}

}

if("EntityId" in inputs) {
this.variables.entityIdIn = inputs.EntityId;
if("_entityIdInDataFetchStatus" in inputs) {
this.variables._entityIdInDataFetchStatus = inputs._entityIdInDataFetchStatus;
}

}

if("EntityType" in inputs) {
this.variables.entityTypeIn = inputs.EntityType;
if("_entityTypeInDataFetchStatus" in inputs) {
this.variables._entityTypeInDataFetchStatus = inputs._entityTypeInDataFetchStatus;
}

}

if("ImageSize" in inputs) {
this.variables.imageSizeIn = inputs.ImageSize;
if("_imageSizeInDataFetchStatus" in inputs) {
this.variables._imageSizeInDataFetchStatus = inputs._imageSizeInDataFetchStatus;
}

}

if("ExtendedClass" in inputs) {
this.variables.extendedClassIn = inputs.ExtendedClass;
if("_extendedClassInDataFetchStatus" in inputs) {
this.variables._extendedClassInDataFetchStatus = inputs._extendedClassInDataFetchStatus;
}

}

if("In_BorderRadius" in inputs) {
this.variables.in_BorderRadiusIn = inputs.In_BorderRadius;
if("_in_BorderRadiusInDataFetchStatus" in inputs) {
this.variables._in_BorderRadiusInDataFetchStatus = inputs._in_BorderRadiusInDataFetchStatus;
}

}

if("In_HighRes" in inputs) {
this.variables.in_HighResIn = inputs.In_HighRes;
if("_in_HighResInDataFetchStatus" in inputs) {
this.variables._in_HighResInDataFetchStatus = inputs._in_HighResInDataFetchStatus;
}

}

if("HasErrorMessage" in inputs) {
this.variables.hasErrorMessageIn = inputs.HasErrorMessage;
if("_hasErrorMessageInDataFetchStatus" in inputs) {
this.variables._hasErrorMessageInDataFetchStatus = inputs._hasErrorMessageInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "CW_Image.UBT_LazyImage");
});
define("UBTConnect_Utils.CW_Image.UBT_LazyImage.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "UBTConnectLibrary.model", "react", "OutSystems/ReactView/Main", "UBTConnect_Utils.CW_Image.UBT_LazyImage.mvc$model", "UBTConnect_Utils.CW_Image.UBT_LazyImage.mvc$controller", "UBTConnect_Utils.clientVariables", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.ConnectPatterns.LazyImage.mvc$view", "UBTConnectLibrary.model$AvatarImageFallbackoptionsRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$LazyImageSizeRec", "UBTConnectLibrary.model$ImageBorderOptionsRec", "UBTConnect_Utils.controller$GetEntityType_Icon", "UBTConnect_Utils.controller$GetImageType_FromEntity", "UBTConnect_Utils.controller$Cache_SignedImageURL_Get"], function (OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, UBTConnectLibraryModel, React, OSView, UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_model, UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_controller, UBTConnect_UtilsClientVariables, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, OSWidgets, UBTConnectLibrary_ConnectPatterns_LazyImage_mvc_view) {
    var OS = OutSystems.Internal;
var PlaceholderContent = OSView.Widget.PlaceholderContent;
var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;


    var View = (function (_super) {
        __extends(View,_super);
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
        View.displayName = "CW_Image.UBT_LazyImage";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, UBTConnectLibrary_ConnectPatterns_LazyImage_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_controller;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "title", {
            get: function () {
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
In_IsLoading: !(model.variables.isFetchedVar)
},
events: {
_handleError: function (ex) {
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
placeholder_LoadingSection: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_LazyImage_mvc_view, {
inputs: {
ImageURL: model.variables.localImageURLVar,
FallbackPadding: model.variables.localFallbackPaddingVar,
In_ImageSize: model.getCachedValue(idService.getId("jAphmcVMs0KdCwYUvGRxsg.In_ImageSize"), function () {
return function () {
var rec = new UBTConnectLibraryModel.LazyImageSizeRec();
rec.heightAttr = model.variables.imageSizeIn.heightAttr;
rec.widthAttr = model.variables.imageSizeIn.widthAttr;
return rec;
}();
}, function () {
return model.variables.imageSizeIn.heightAttr;
}, function () {
return model.variables.imageSizeIn.widthAttr;
}),
_in_ImageSizeInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._imageSizeInDataFetchStatus),
HasErrorMessage: model.variables.hasErrorMessageIn,
_hasErrorMessageInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._hasErrorMessageInDataFetchStatus),
In_BorderOptions: model.getCachedValue(idService.getId("jAphmcVMs0KdCwYUvGRxsg.In_BorderOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ImageBorderOptionsRec();
rec.borderRadiusAttr = model.variables.localBorderRadiusVar;
rec.borderColorIdAttr = model.variables.localBorderColorIdVar;
rec.borderSizeIdAttr = model.variables.localBorderSizeIdVar;
return rec;
}();
}, function () {
return model.variables.localBorderRadiusVar;
}, function () {
return model.variables.localBorderColorIdVar;
}, function () {
return model.variables.localBorderSizeIdVar;
}),
FallbackOptions: model.variables.localFallbackoptionsVar,
ExtendedClass: model.getCachedValue(idService.getId("jAphmcVMs0KdCwYUvGRxsg.ExtendedClass"), function () {
return (((model.variables.entityTypeIn === UBTConnect_UtilsModel.staticEntities.connect_Entity.member)) ? (("inline-block ubt-avatar-image" + ((((model.variables.extendedClassIn) !== (""))) ? ((" " + model.variables.extendedClassIn)) : ("")))) : (model.variables.extendedClassIn));
}, function () {
return model.variables.entityTypeIn;
}, function () {
return model.variables.extendedClassIn;
}),
_extendedClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._entityTypeInDataFetchStatus, model.variables._extendedClassInDataFetchStatus)
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
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
_dependencies: [asPrimitiveValue(model.variables.extendedClassIn), asPrimitiveValue(model.variables.entityTypeIn), asPrimitiveValue(model.variables.localFallbackoptionsVar), asPrimitiveValue(model.variables.localBorderSizeIdVar), asPrimitiveValue(model.variables.localBorderColorIdVar), asPrimitiveValue(model.variables.localBorderRadiusVar), asPrimitiveValue(model.variables.hasErrorMessageIn), asPrimitiveValue(model.variables._extendedClassInDataFetchStatus), asPrimitiveValue(model.variables._entityTypeInDataFetchStatus), asPrimitiveValue(model.variables._hasErrorMessageInDataFetchStatus), asPrimitiveValue(model.variables._imageSizeInDataFetchStatus), asPrimitiveValue(model.variables.imageSizeIn.widthAttr), asPrimitiveValue(model.variables.imageSizeIn.heightAttr), asPrimitiveValue(model.variables.localFallbackPaddingVar), asPrimitiveValue(model.variables.localImageURLVar)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("UBTConnect_Utils.CW_Image.UBT_LazyImage.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "UBTConnectLibrary.model", "UBTConnect_Utils.languageResources", "UBTConnect_Utils.clientVariables", "UBTConnect_Utils.CW_Image.UBT_LazyImage.mvc$debugger", "UBTConnectLibrary.model$AvatarImageFallbackoptionsRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$LazyImageSizeRec", "UBTConnectLibrary.model$ImageBorderOptionsRec", "UBTConnect_Utils.controller$GetEntityType_Icon", "UBTConnect_Utils.controller$GetImageType_FromEntity", "UBTConnect_Utils.controller$Cache_SignedImageURL_Get"], function (OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, UBTConnectLibraryModel, UBTConnect_UtilsLanguageResources, UBTConnect_UtilsClientVariables, UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_Debugger) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
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
Controller.prototype._onInitialize$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnInitialize");
callContext = controller.callContext(callContext);
var getEntityType_IconVar = new OS.DataTypes.VariableHolder();
var getImageType_FromEntityVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.getEntityType_IconVar = getEntityType_IconVar;
varBag.getImageType_FromEntityVar = getImageType_FromEntityVar;
try {OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:8NCFAwMuZ0WY9i2BTHxGLQ:/NRWebFlows.c4TUUTDcd0OByIhYz8oDyw/NodesShownInESpaceTree.mJtA5K35k0arh8Img1TV_w/ClientActions.8NCFAwMuZ0WY9i2BTHxGLQ:rk2AMfkYl9PZ3SF8lvrqYQ", "UBTConnect_Utils", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:CZQhPfGij0iQbORd022q+w", callContext.id);
var block3 = false;
do {
block3 = false;
do {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:tDcA+4Az60OaImK3MZVaGQ", callContext.id);
// Execute Action: SetLocalEntityId
controller._setLocalEntityId$Action(callContext);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:fVIIGJZ1N0ySVhVRqVCaiA", callContext.id);
// Execute Action: GetEntityType_Icon
getEntityType_IconVar.value = UBTConnect_UtilsController.default.getEntityType_Icon$Action(model.variables.entityTypeIn, callContext);

OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:j39daJNJ8UyGZwto4UVwOg", callContext.id);
// Execute Action: GetImageType_FromEntity
getImageType_FromEntityVar.value = UBTConnect_UtilsController.default.getImageType_FromEntity$Action(model.variables.entityTypeIn, callContext);

// Set Fallback Options
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:HE7gHPXEFkaJ9gdIIUs6wQ", callContext.id);
// LocalFallbackoptions.BackgroundColor = CyanLightest
model.variables.localFallbackoptionsVar.backgroundColorAttr = UBTConnect_UtilsModel.staticEntities.uBT_Color.cyanLightest;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:HE7gHPXEFkaJ9gdIIUs6wQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// LocalFallbackoptions.FontColor = CyanDarker
model.variables.localFallbackoptionsVar.fontColorAttr = UBTConnect_UtilsModel.staticEntities.uBT_Color.cyanDarker;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:HE7gHPXEFkaJ9gdIIUs6wQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// LocalFallbackoptions.BorderSize = None
model.variables.localFallbackoptionsVar.borderSizeAttr = UBTConnect_UtilsModel.staticEntities.uBT_Size.none;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:HE7gHPXEFkaJ9gdIIUs6wQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// LocalBorderRadius = None
model.variables.localBorderRadiusVar = UBTConnect_UtilsModel.staticEntities.uBT_Shape.none;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:HE7gHPXEFkaJ9gdIIUs6wQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
// LocalFallbackPadding.GeneralSizeId = Base
model.variables.localFallbackPaddingVar.generalSizeIdAttr = UBTConnect_UtilsModel.staticEntities.uBT_Size.base;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:HE7gHPXEFkaJ9gdIIUs6wQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "6");
// LocalFallbackoptions.FontSize = Display
model.variables.localFallbackoptionsVar.fontSizeAttr = UBTConnect_UtilsModel.staticEntities.uBT_FontSize.display;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:HE7gHPXEFkaJ9gdIIUs6wQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "7");
// LocalFallbackoptions.Message = If
model.variables.localFallbackoptionsVar.messageAttr = ((model.variables.hasErrorMessageIn) ? ("Sorry, no photo available") : (""));
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:HE7gHPXEFkaJ9gdIIUs6wQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "8");
// LocalFallbackoptions.IconId = GetEntityType_Icon.IconId
model.variables.localFallbackoptionsVar.iconIdAttr = getEntityType_IconVar.value.iconIdOut;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:HE7gHPXEFkaJ9gdIIUs6wQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "9");
// LocalImageType = GetImageType_FromEntity.Type
model.variables.localImageTypeVar = getImageType_FromEntityVar.value.typeOut;
// Size Height
if((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:wnyx_FxC1Uqmc7ZiukR3hQ", callContext.id) && (model.variables.imageSizeIn.heightAttr === UBTConnect_UtilsModel.staticEntities.uBT_ImageSize.extraSmall_32))) {
// ExtraSmall
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:wWbwRhXpnU+IMPmxif_1mQ", callContext.id);
// LocalFallbackoptions.FontSize = ExtraSmall
model.variables.localFallbackoptionsVar.fontSizeAttr = UBTConnect_UtilsModel.staticEntities.uBT_FontSize.extraSmall;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:wWbwRhXpnU+IMPmxif_1mQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// LocalFallbackoptions.IconSizeId = Medium_20
model.variables.localFallbackoptionsVar.iconSizeIdAttr = UBTConnect_UtilsModel.staticEntities.uBT_IconSize.medium_20;
} else {
if((model.variables.imageSizeIn.heightAttr === UBTConnect_UtilsModel.staticEntities.uBT_ImageSize.small_40)) {
// Small
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:RDrQw4nE8kyB9JhuuUyBDg", callContext.id);
// LocalFallbackoptions.FontSize = Small
model.variables.localFallbackoptionsVar.fontSizeAttr = UBTConnect_UtilsModel.staticEntities.uBT_FontSize.small;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:RDrQw4nE8kyB9JhuuUyBDg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// LocalFallbackoptions.IconSizeId = Base_24
model.variables.localFallbackoptionsVar.iconSizeIdAttr = UBTConnect_UtilsModel.staticEntities.uBT_IconSize.base_24;
} else {
if((model.variables.imageSizeIn.heightAttr === UBTConnect_UtilsModel.staticEntities.uBT_ImageSize.base_52)) {
// Base
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:rLlkWNgrZkSvt76qgzLx0w", callContext.id);
// LocalFallbackoptions.FontSize = Base
model.variables.localFallbackoptionsVar.fontSizeAttr = UBTConnect_UtilsModel.staticEntities.uBT_FontSize.base;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:rLlkWNgrZkSvt76qgzLx0w", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// LocalFallbackoptions.IconSizeId = NonStandard_32
model.variables.localFallbackoptionsVar.iconSizeIdAttr = UBTConnect_UtilsModel.staticEntities.uBT_IconSize.nonStandard_32;
} else {
if((model.variables.imageSizeIn.heightAttr === UBTConnect_UtilsModel.staticEntities.uBT_ImageSize.medium_60)) {
// Heading6
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:4V_CFVsKoE2yRUoxw8fMgw", callContext.id);
// LocalFallbackoptions.FontSize = Heading6
model.variables.localFallbackoptionsVar.fontSizeAttr = UBTConnect_UtilsModel.staticEntities.uBT_FontSize.heading6;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:4V_CFVsKoE2yRUoxw8fMgw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// LocalFallbackoptions.IconSizeId = Display_36
model.variables.localFallbackoptionsVar.iconSizeIdAttr = UBTConnect_UtilsModel.staticEntities.uBT_IconSize.display_36;
} else {
if((model.variables.imageSizeIn.heightAttr === UBTConnect_UtilsModel.staticEntities.uBT_ImageSize.large_65)) {
// Heading4
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:3OOygl94qka2xggB3f1QeA", callContext.id);
// LocalFallbackoptions.FontSize = Heading4
model.variables.localFallbackoptionsVar.fontSizeAttr = UBTConnect_UtilsModel.staticEntities.uBT_FontSize.heading4;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:3OOygl94qka2xggB3f1QeA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// LocalFallbackoptions.IconSizeId = Display_36
model.variables.localFallbackoptionsVar.iconSizeIdAttr = UBTConnect_UtilsModel.staticEntities.uBT_IconSize.display_36;
} else {
if((model.variables.imageSizeIn.heightAttr === UBTConnect_UtilsModel.staticEntities.uBT_ImageSize.extraLarge_100)) {
// Heading2
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:ptmYpQuBEkmMuW5sJBYspw", callContext.id);
// LocalFallbackoptions.FontSize = Heading2
model.variables.localFallbackoptionsVar.fontSizeAttr = UBTConnect_UtilsModel.staticEntities.uBT_FontSize.heading2;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:ptmYpQuBEkmMuW5sJBYspw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// LocalFallbackoptions.IconSizeId = NonStandard_64
model.variables.localFallbackoptionsVar.iconSizeIdAttr = UBTConnect_UtilsModel.staticEntities.uBT_IconSize.nonStandard_64;
} else {
if((model.variables.imageSizeIn.heightAttr === UBTConnect_UtilsModel.staticEntities.uBT_ImageSize.doubleExtraLarge_176)) {
// Display
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:4zq7tZXp_0qNbawbhgcgxQ", callContext.id);
// LocalFallbackoptions.FontSize = Display
model.variables.localFallbackoptionsVar.fontSizeAttr = UBTConnect_UtilsModel.staticEntities.uBT_FontSize.display;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:4zq7tZXp_0qNbawbhgcgxQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// LocalFallbackoptions.IconSizeId = NonStandard_108
model.variables.localFallbackoptionsVar.iconSizeIdAttr = UBTConnect_UtilsModel.staticEntities.uBT_IconSize.nonStandard_108;
} else {
if((model.variables.imageSizeIn.heightAttr === UBTConnect_UtilsModel.staticEntities.uBT_ImageSize.fullHeight_100_Percent)) {
// Display
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:ANk5OsBiJU2eXnSjkuLFRQ", callContext.id);
// LocalFallbackoptions.FontSize = Display
model.variables.localFallbackoptionsVar.fontSizeAttr = UBTConnect_UtilsModel.staticEntities.uBT_FontSize.display;
} else {
if((model.variables.imageSizeIn.heightAttr === UBTConnect_UtilsModel.staticEntities.uBT_ImageSize.maxHeight_100vh)) {
// Display
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:ljYSg85F2USduqbEyg8A7g", callContext.id);
// LocalFallbackoptions.FontSize = Display
model.variables.localFallbackoptionsVar.fontSizeAttr = UBTConnect_UtilsModel.staticEntities.uBT_FontSize.display;
} else {
// Size Width
do {
// Size Width
if((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:LHNTUe_RQESLPVDdoljPfg", callContext.id) && (model.variables.imageSizeIn.widthAttr === UBTConnect_UtilsModel.staticEntities.uBT_ImageSize.extraSmall_32))) {
// ExtraSmall
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:oHBJ1Ygjx02MGTFvRJJl6w", callContext.id);
// LocalFallbackoptions.FontSize = ExtraSmall
model.variables.localFallbackoptionsVar.fontSizeAttr = UBTConnect_UtilsModel.staticEntities.uBT_FontSize.extraSmall;
} else {
if((model.variables.imageSizeIn.widthAttr === UBTConnect_UtilsModel.staticEntities.uBT_ImageSize.small_40)) {
// Small
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:HYLv+Iq8I0C82OPXLSa0LA", callContext.id);
// LocalFallbackoptions.FontSize = Small
model.variables.localFallbackoptionsVar.fontSizeAttr = UBTConnect_UtilsModel.staticEntities.uBT_FontSize.small;
} else {
if((model.variables.imageSizeIn.widthAttr === UBTConnect_UtilsModel.staticEntities.uBT_ImageSize.base_52)) {
// Base
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:drh3rdLQbkCG6ARSzYz_oA", callContext.id);
// LocalFallbackoptions.FontSize = Base
model.variables.localFallbackoptionsVar.fontSizeAttr = UBTConnect_UtilsModel.staticEntities.uBT_FontSize.base;
} else {
if((model.variables.imageSizeIn.widthAttr === UBTConnect_UtilsModel.staticEntities.uBT_ImageSize.medium_60)) {
// Heading6
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:Xo+zRueUvkGnJuPt46uBLg", callContext.id);
// LocalFallbackoptions.FontSize = Heading6
model.variables.localFallbackoptionsVar.fontSizeAttr = UBTConnect_UtilsModel.staticEntities.uBT_FontSize.heading6;
} else {
if((model.variables.imageSizeIn.widthAttr === UBTConnect_UtilsModel.staticEntities.uBT_ImageSize.large_65)) {
// Heading4
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:zYXSTN9I+0mI0oBvA+11Iw", callContext.id);
// LocalFallbackoptions.FontSize = Heading4
model.variables.localFallbackoptionsVar.fontSizeAttr = UBTConnect_UtilsModel.staticEntities.uBT_FontSize.heading4;
} else {
if((model.variables.imageSizeIn.widthAttr === UBTConnect_UtilsModel.staticEntities.uBT_ImageSize.extraLarge_100)) {
// Heading2
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:_4ixAkIiXEaf0u5cDSgmPQ", callContext.id);
// LocalFallbackoptions.FontSize = Heading2
model.variables.localFallbackoptionsVar.fontSizeAttr = UBTConnect_UtilsModel.staticEntities.uBT_FontSize.heading2;
} else {
if((model.variables.imageSizeIn.widthAttr === UBTConnect_UtilsModel.staticEntities.uBT_ImageSize.doubleExtraLarge_176)) {
// Display
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:gzFyXDwn+U2A6Wb3M61kVg", callContext.id);
// LocalFallbackoptions.FontSize = Display
model.variables.localFallbackoptionsVar.fontSizeAttr = UBTConnect_UtilsModel.staticEntities.uBT_FontSize.display;
} else {
if((model.variables.imageSizeIn.widthAttr === UBTConnect_UtilsModel.staticEntities.uBT_ImageSize.fullWidth_100_Percent)) {
// Display
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:abPFh00Hs02yeHDtD7fAUQ", callContext.id);
// LocalFallbackoptions.FontSize = Display
model.variables.localFallbackoptionsVar.fontSizeAttr = UBTConnect_UtilsModel.staticEntities.uBT_FontSize.display;
} else {
if((model.variables.imageSizeIn.widthAttr === UBTConnect_UtilsModel.staticEntities.uBT_ImageSize.maxWidth_100vw)) {
// Display
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:dGxLIcDX7UOFDMBhYyQE+A", callContext.id);
// LocalFallbackoptions.FontSize = Display
model.variables.localFallbackoptionsVar.fontSizeAttr = UBTConnect_UtilsModel.staticEntities.uBT_FontSize.display;
} else {
// jump to block3
block3 = true;
break;
}

}

}

}

// LargeImage
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:++LePM5MZ0miv+TyYv0dEQ", callContext.id);
// LocalImageSizeId = Large
model.variables.localImageSizeIdVar = UBTConnect_UtilsModel.staticEntities.imageSize.large;
break;
}

}

// MediumImage
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:pLzaULrz2E2vJo01llWiAA", callContext.id);
// LocalImageSizeId = Medium
model.variables.localImageSizeIdVar = UBTConnect_UtilsModel.staticEntities.imageSize.medium;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:pLzaULrz2E2vJo01llWiAA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// LocalFallbackoptions.Message = ""
model.variables.localFallbackoptionsVar.messageAttr = "";
break;
}

}

}

// SmallImage
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:C2Dmh2jcukWnOFrgnpZZ1g", callContext.id);
// LocalImageSizeId = Small
model.variables.localImageSizeIdVar = UBTConnect_UtilsModel.staticEntities.imageSize.small;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:C2Dmh2jcukWnOFrgnpZZ1g", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// LocalFallbackoptions.Message = ""
model.variables.localFallbackoptionsVar.messageAttr = "";
} while(false)
;
if(block3) {
break;
}

// Dummy
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:QgNWQBDi3E+wQ42efd27Aw", callContext.id);
// Dummy
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:eFwI6d+HkkS5VLN0RY4WcQ", callContext.id);
// jump to block3
block3 = true;
break;
}

}

}

}

// LargeImage
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:GXcfdGjOFEa4r0TSBdKbdA", callContext.id);
// LocalImageSizeId = Large
model.variables.localImageSizeIdVar = UBTConnect_UtilsModel.staticEntities.imageSize.large;
break;
}

}

// MediumImage
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:G7l4KKGP0EWeiqhGl1QG_Q", callContext.id);
// LocalImageSizeId = Medium
model.variables.localImageSizeIdVar = UBTConnect_UtilsModel.staticEntities.imageSize.medium;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:G7l4KKGP0EWeiqhGl1QG_Q", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// LocalFallbackoptions.Message = ""
model.variables.localFallbackoptionsVar.messageAttr = "";
break;
}

}

}

// SmallImage
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:6pHjZkKAakW6ukyCOZuLzA", callContext.id);
// LocalImageSizeId = Small
model.variables.localImageSizeIdVar = UBTConnect_UtilsModel.staticEntities.imageSize.small;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:6pHjZkKAakW6ukyCOZuLzA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// LocalFallbackoptions.Message = ""
model.variables.localFallbackoptionsVar.messageAttr = "";
} while(false)
;
if(block3) {
break;
}

// Dummy
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:_YbpSLaoykOKNMqlcFCGTg", callContext.id);
// Dummy
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:6MqphmVdNEuoJJXzTfqymg", callContext.id);
} while(false)
;
if((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:mwS+younvUqqlI03nARn7g", callContext.id) && !(model.variables.in_HighResIn))) {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:zZOoAuKWQ0mtckpGXHpGAw", callContext.id);
// LocalImageSizeId = Medium
model.variables.localImageSizeIdVar = UBTConnect_UtilsModel.staticEntities.imageSize.medium;
}

// Has Border Radius?
if((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:uYnaaqO0NkiQuzcu26EafA", callContext.id) && ((model.variables.in_BorderRadiusIn) !== (OS.BuiltinFunctions.nullTextIdentifier())))) {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:LG6+xL7qcEmTHl4f8oYhiA", callContext.id);
// LocalBorderRadius = In_BorderRadius
model.variables.localBorderRadiusVar = model.variables.in_BorderRadiusIn;
}

// Is Member?
if((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:ubHYr+aGMk28hanohAQwXQ", callContext.id) && (model.variables.entityTypeIn === UBTConnect_UtilsModel.staticEntities.connect_Entity.member))) {
// Person
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:aQwbIBFcTk6FI9jsV6h_6w", callContext.id);
// LocalBorderRadius = Circle
model.variables.localBorderRadiusVar = UBTConnect_UtilsModel.staticEntities.uBT_Shape.circle;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:aQwbIBFcTk6FI9jsV6h_6w", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// LocalFallbackoptions.BorderSize = Small
model.variables.localFallbackoptionsVar.borderSizeAttr = UBTConnect_UtilsModel.staticEntities.uBT_Size.small;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:aQwbIBFcTk6FI9jsV6h_6w", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// LocalFallbackoptions.BorderColor = Neutral3
model.variables.localFallbackoptionsVar.borderColorAttr = UBTConnect_UtilsModel.staticEntities.uBT_Color.neutral3;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:aQwbIBFcTk6FI9jsV6h_6w", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// LocalBorderColorId = LocalFallbackoptions.BorderColor
model.variables.localBorderColorIdVar = model.variables.localFallbackoptionsVar.borderColorAttr;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:aQwbIBFcTk6FI9jsV6h_6w", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
// LocalBorderSizeId = LocalFallbackoptions.BorderSize
model.variables.localBorderSizeIdVar = model.variables.localFallbackoptionsVar.borderSizeAttr;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:79MfyFQZNkqQT5kNGvtl2Q", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:79MfyFQZNkqQT5kNGvtl2Q", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:8NCFAwMuZ0WY9i2BTHxGLQ", callContext.id);
}

};
Controller.prototype._onReady$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnReady");
callContext = controller.callContext(callContext);
var cache_SignedImageURL_GetVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.cache_SignedImageURL_GetVar = cache_SignedImageURL_GetVar;
OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:HPmTDUdaPEC9sUETb_f2sA:/NRWebFlows.c4TUUTDcd0OByIhYz8oDyw/NodesShownInESpaceTree.mJtA5K35k0arh8Img1TV_w/ClientActions.HPmTDUdaPEC9sUETb_f2sA:51udGunALBHzHB7GgfeMLA", "UBTConnect_Utils", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:LgCoShmGS0eWaw4CSn0lgg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:I5xE2bm3rUaV83WTArmpvQ", callContext.id);
// Execute Action: SetLocalEntityId
controller._setLocalEntityId$Action(callContext);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:YLRepWHCy0CmvW+GzrGyVQ", callContext.id);
// LocalImageURL = ImageURL
model.variables.localImageURLVar = model.variables.imageURLIn;
// AlreadyHasURL
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:_tLSvYaYCUeVWNEynmBdng", callContext.id) && !(((model.variables.localImageURLVar) !== (""))))) {
// HasData
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:QGVQQrpx9E62rtq4T+4CXg", callContext.id) && ((((model.variables.entityIdIn) !== ("")) && ((model.variables.entityIdIn) !== ("0"))) && ((model.variables.entityTypeIn) !== (OS.BuiltinFunctions.nullTextIdentifier()))))) {
// IsValidType
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:aS0D95HMBk2z4TAB8RzXcw", callContext.id) && ((model.variables.localImageTypeVar) !== ("")))) {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:JGWTRmkqqUW58CBNex1KDQ", callContext.id);
// isFetched = False
model.variables.isFetchedVar = false;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:fKz3xnAD0Emgir6_o09yow", callContext.id);
// Execute Action: Cache_SignedImageURL_Get
model.flush();
return UBTConnect_UtilsController.default.cache_SignedImageURL_Get$Action(OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.textToInteger(model.variables.entityIdIn)), model.variables.localImageTypeVar, model.variables.localImageSizeIdVar, callContext).then(function (value) {
cache_SignedImageURL_GetVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:N4ekM+iDV0SMo22b2MnQqA", callContext.id);
// LocalImageURL = Cache_SignedImageURL_Get.URL
model.variables.localImageURLVar = cache_SignedImageURL_GetVar.value.uRLOut;
});
}

});
}

});
}

}).then(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:wSXtcf3Or0KidwP6VwYOKA", callContext.id);
// isFetched = True
model.variables.isFetchedVar = true;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:o8y3+Ogi_UmFvj1OpeqKmQ", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:HPmTDUdaPEC9sUETb_f2sA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:HPmTDUdaPEC9sUETb_f2sA", callContext.id);
throw ex;

});
};
Controller.prototype._setLocalEntityId$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("SetLocalEntityId");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:XrKncaRu8kq7vx32sn3pJA:/NRWebFlows.c4TUUTDcd0OByIhYz8oDyw/NodesShownInESpaceTree.mJtA5K35k0arh8Img1TV_w/ClientActions.XrKncaRu8kq7vx32sn3pJA:djBkFfbayl9uqVTYCQZXhg", "UBTConnect_Utils", "SetLocalEntityId", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:ZjS98v33yUqXDUyBq5pwCQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:QF4O+M1OZka9JpU+fyBUQw", callContext.id);
// LocalEntityId = EntityId
model.variables.localEntityIdVar = model.variables.entityIdIn;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:FQYx4Nq2zk6M2tIW1eetyQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:XrKncaRu8kq7vx32sn3pJA", callContext.id);
}

};
Controller.prototype._onParametersChanged$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnParametersChanged");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:PXohjc22eUuJRobIigfYpQ:/NRWebFlows.c4TUUTDcd0OByIhYz8oDyw/NodesShownInESpaceTree.mJtA5K35k0arh8Img1TV_w/ClientActions.PXohjc22eUuJRobIigfYpQ:mlIDW6WSpGklqg0HU70Fug", "UBTConnect_Utils", "OnParametersChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:8kkZKwK1j02ZnnlBcm7_nQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
if((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:DpdWGgS35kSgZG_9hxeVMA", callContext.id) && ((model.variables.entityIdIn) !== (model.variables.localEntityIdVar)))) {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:V2R5J6Or+EmoeRqnyvlL3w", callContext.id);
// LocalImageURL = ""
model.variables.localImageURLVar = "";
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:V2R5J6Or+EmoeRqnyvlL3w", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// isFetched = False
model.variables.isFetchedVar = false;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:wSY7wIjECky1gTKZnn8HeQ", callContext.id);
// Execute Action: OnInitialize
controller._onInitialize$Action(callContext);
}

OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:Lfmmqx3eOU2e54aF3Qsefg", callContext.id);
// Execute Action: OnReady
return controller._onReady$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:LyP2qOyrmkOgDeck77MqVg", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:PXohjc22eUuJRobIigfYpQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:PXohjc22eUuJRobIigfYpQ", callContext.id);
throw ex;

});
};

Controller.prototype.onInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

};
Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.setLocalEntityId$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._setLocalEntityId$Action, callContext);

};
Controller.prototype.onParametersChanged$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);

};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:c4TUUTDcd0OByIhYz8oDyw:/NRWebFlows.c4TUUTDcd0OByIhYz8oDyw:Ub72qwAB8vI9fSZPWMJBzg", "UBTConnect_Utils", "CW_Image", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:mJtA5K35k0arh8Img1TV_w:/NRWebFlows.c4TUUTDcd0OByIhYz8oDyw/NodesShownInESpaceTree.mJtA5K35k0arh8Img1TV_w:wh5rd2K61WGy1iEJ17ko2A", "UBTConnect_Utils", "UBT_LazyImage", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:mJtA5K35k0arh8Img1TV_w", callContext.id);
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:c4TUUTDcd0OByIhYz8oDyw", callContext.id);
};
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "CW_Image/UBT_LazyImage On Initialize");
return controller.onInitialize$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onReadyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "CW_Image/UBT_LazyImage On Ready");
return controller.onReady$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = null;
Controller.prototype.onParametersChangedEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "CW_Image/UBT_LazyImage On Parameters Changed");
return controller.onParametersChanged$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.handleError = function (ex) {
return controller.handleError(ex);
};
Controller.checkPermissions = function () {
};
Controller.prototype.getDefaultTimeout = function () {
return UBTConnect_UtilsController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, UBTConnect_UtilsLanguageResources);
});

define("UBTConnect_Utils.CW_Image.UBT_LazyImage.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"fVIIGJZ1N0ySVhVRqVCaiA": {
getter: function (varBag, idService) {
return varBag.getEntityType_IconVar.value;
}
},
"j39daJNJ8UyGZwto4UVwOg": {
getter: function (varBag, idService) {
return varBag.getImageType_FromEntityVar.value;
}
},
"fKz3xnAD0Emgir6_o09yow": {
getter: function (varBag, idService) {
return varBag.cache_SignedImageURL_GetVar.value;
}
},
"yS_dgiwIRUajlv1boLl6rQ": {
getter: function (varBag, idService) {
return varBag.model.variables.localFallbackoptionsVar;
}
},
"LsNd73cAJUCkchWPR8DPXA": {
getter: function (varBag, idService) {
return varBag.model.variables.localFallbackPaddingVar;
}
},
"2WD9xfiZ1U6Cvew2oYdGuQ": {
getter: function (varBag, idService) {
return varBag.model.variables.localBorderRadiusVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"2_bVfMbJlU2FfNXGwoxGsg": {
getter: function (varBag, idService) {
return varBag.model.variables.localBorderColorIdVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"ffrMKA_iH0OHmCrZZHcwzA": {
getter: function (varBag, idService) {
return varBag.model.variables.localBorderSizeIdVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"2YdAgsE5ZkOiLh7t+xI3Mg": {
getter: function (varBag, idService) {
return varBag.model.variables.isFetchedVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"RhvZbdtjnkO21EftBaTt2w": {
getter: function (varBag, idService) {
return varBag.model.variables.localImageSizeIdVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"+BHCz6XbV0GgN17cnNQDgg": {
getter: function (varBag, idService) {
return varBag.model.variables.localImageTypeVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Iwb39NC_YUSPG9dgOeHz_A": {
getter: function (varBag, idService) {
return varBag.model.variables.localEntityIdVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"0ZymYpaOvkmXctXNOId0bg": {
getter: function (varBag, idService) {
return varBag.model.variables.localImageURLVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"9YI+CP7Vqk22glxT6SNiqg": {
getter: function (varBag, idService) {
return varBag.model.variables.imageURLIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"nuQHz4UxsUyOImWXh7V6iw": {
getter: function (varBag, idService) {
return varBag.model.variables.entityIdIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"+x_Qe9pjJUypUUkVapwFJg": {
getter: function (varBag, idService) {
return varBag.model.variables.entityTypeIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"nf4YyHE4y0KXriJ3RzAgLQ": {
getter: function (varBag, idService) {
return varBag.model.variables.imageSizeIn;
}
},
"RyXZp23ahkeAUIwFFmARlw": {
getter: function (varBag, idService) {
return varBag.model.variables.extendedClassIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Sp_t0tz2nkSnbx03eKC8Gg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_BorderRadiusIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"3cJ6RLNZakGNMlWcNzwj3g": {
getter: function (varBag, idService) {
return varBag.model.variables.in_HighResIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"y2Q+Lb4jZU+diljDQzUbzw": {
getter: function (varBag, idService) {
return varBag.model.variables.hasErrorMessageIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"ZJA+a41x8kezVirmzloqhw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_LoadingSection"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
