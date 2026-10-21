define("Connect2_LegacyShared.NewConnect_Utilities.NC_Card_Item_Visual.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "Connect2_LegacyShared.controller$GetCacheableSignedPhotoURL"], function (OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("Last_Bucket", "last_BucketVar", "Last_Bucket", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("Last_Path", "last_PathVar", "Last_Path", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("Last_Type", "last_TypeVar", "Last_Type", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("Last_SignedURL", "last_SignedURLVar", "Last_SignedURL", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("ShowPlaceholderForImage", "showPlaceholderForImageIn", "ShowPlaceholderForImage", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_showPlaceholderForImageInDataFetchStatus", "_showPlaceholderForImageInDataFetchStatus", "_showPlaceholderForImageInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_ImageHeight", "in_ImageHeightIn", "In_ImageHeight", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 202;
}, false), 
this.attr("_in_ImageHeightInDataFetchStatus", "_in_ImageHeightInDataFetchStatus", "_in_ImageHeightInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_ResultType", "in_ResultTypeIn", "In_ResultType", true, false, OS.DataTypes.DataTypes.Integer, function () {
return OS.BuiltinFunctions.nullIdentifier();
}, false), 
this.attr("_in_ResultTypeInDataFetchStatus", "_in_ResultTypeInDataFetchStatus", "_in_ResultTypeInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_SignedURL", "in_SignedURLIn", "In_SignedURL", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_SignedURLInDataFetchStatus", "_in_SignedURLInDataFetchStatus", "_in_SignedURLInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_Bucket", "in_BucketIn", "In_Bucket", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_BucketInDataFetchStatus", "_in_BucketInDataFetchStatus", "_in_BucketInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_Path", "in_PathIn", "In_Path", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_PathInDataFetchStatus", "_in_PathInDataFetchStatus", "_in_PathInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_Type", "in_TypeIn", "In_Type", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_TypeInDataFetchStatus", "_in_TypeInDataFetchStatus", "_in_TypeInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_FloatingPillPosition", "in_FloatingPillPositionIn", "In_FloatingPillPosition", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_FloatingPillPositionInDataFetchStatus", "_in_FloatingPillPositionInDataFetchStatus", "_in_FloatingPillPositionInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_FloatingOverlayTextPosition", "in_FloatingOverlayTextPositionIn", "In_FloatingOverlayTextPosition", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_FloatingOverlayTextPositionInDataFetchStatus", "_in_FloatingOverlayTextPositionInDataFetchStatus", "_in_FloatingOverlayTextPositionInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_ImageCoverPositionX", "in_ImageCoverPositionXIn", "In_ImageCoverPositionX", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_ImageCoverPositionXInDataFetchStatus", "_in_ImageCoverPositionXInDataFetchStatus", "_in_ImageCoverPositionXInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_ImageCoverPositionY", "in_ImageCoverPositionYIn", "In_ImageCoverPositionY", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_ImageCoverPositionYInDataFetchStatus", "_in_ImageCoverPositionYInDataFetchStatus", "_in_ImageCoverPositionYInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Object.defineProperty(Model, "hasValidationWidgets", {
enumerable: true,
configurable: true,
get: function () {
return false;
}
});

Model.prototype.setInputs = function (inputs) {
if("ShowPlaceholderForImage" in inputs) {
this.variables.showPlaceholderForImageIn = inputs.ShowPlaceholderForImage;
if("_showPlaceholderForImageInDataFetchStatus" in inputs) {
this.variables._showPlaceholderForImageInDataFetchStatus = inputs._showPlaceholderForImageInDataFetchStatus;
}

}

if("In_ImageHeight" in inputs) {
this.variables.in_ImageHeightIn = inputs.In_ImageHeight;
if("_in_ImageHeightInDataFetchStatus" in inputs) {
this.variables._in_ImageHeightInDataFetchStatus = inputs._in_ImageHeightInDataFetchStatus;
}

}

if("In_ResultType" in inputs) {
this.variables.in_ResultTypeIn = inputs.In_ResultType;
if("_in_ResultTypeInDataFetchStatus" in inputs) {
this.variables._in_ResultTypeInDataFetchStatus = inputs._in_ResultTypeInDataFetchStatus;
}

}

if("In_SignedURL" in inputs) {
this.variables.in_SignedURLIn = inputs.In_SignedURL;
if("_in_SignedURLInDataFetchStatus" in inputs) {
this.variables._in_SignedURLInDataFetchStatus = inputs._in_SignedURLInDataFetchStatus;
}

}

if("In_Bucket" in inputs) {
this.variables.in_BucketIn = inputs.In_Bucket;
if("_in_BucketInDataFetchStatus" in inputs) {
this.variables._in_BucketInDataFetchStatus = inputs._in_BucketInDataFetchStatus;
}

}

if("In_Path" in inputs) {
this.variables.in_PathIn = inputs.In_Path;
if("_in_PathInDataFetchStatus" in inputs) {
this.variables._in_PathInDataFetchStatus = inputs._in_PathInDataFetchStatus;
}

}

if("In_Type" in inputs) {
this.variables.in_TypeIn = inputs.In_Type;
if("_in_TypeInDataFetchStatus" in inputs) {
this.variables._in_TypeInDataFetchStatus = inputs._in_TypeInDataFetchStatus;
}

}

if("In_FloatingPillPosition" in inputs) {
this.variables.in_FloatingPillPositionIn = inputs.In_FloatingPillPosition;
if("_in_FloatingPillPositionInDataFetchStatus" in inputs) {
this.variables._in_FloatingPillPositionInDataFetchStatus = inputs._in_FloatingPillPositionInDataFetchStatus;
}

}

if("In_FloatingOverlayTextPosition" in inputs) {
this.variables.in_FloatingOverlayTextPositionIn = inputs.In_FloatingOverlayTextPosition;
if("_in_FloatingOverlayTextPositionInDataFetchStatus" in inputs) {
this.variables._in_FloatingOverlayTextPositionInDataFetchStatus = inputs._in_FloatingOverlayTextPositionInDataFetchStatus;
}

}

if("In_ImageCoverPositionX" in inputs) {
this.variables.in_ImageCoverPositionXIn = inputs.In_ImageCoverPositionX;
if("_in_ImageCoverPositionXInDataFetchStatus" in inputs) {
this.variables._in_ImageCoverPositionXInDataFetchStatus = inputs._in_ImageCoverPositionXInDataFetchStatus;
}

}

if("In_ImageCoverPositionY" in inputs) {
this.variables.in_ImageCoverPositionYIn = inputs.In_ImageCoverPositionY;
if("_in_ImageCoverPositionYInDataFetchStatus" in inputs) {
this.variables._in_ImageCoverPositionYInDataFetchStatus = inputs._in_ImageCoverPositionYInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "NewConnect_Utilities.NC_Card_Item_Visual");
});
define("Connect2_LegacyShared.NewConnect_Utilities.NC_Card_Item_Visual.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "react", "OutSystems/ReactView/Main", "Connect2_LegacyShared.NewConnect_Utilities.NC_Card_Item_Visual.mvc$model", "Connect2_LegacyShared.NewConnect_Utilities.NC_Card_Item_Visual.mvc$controller", "Connect2_LegacyShared.clientVariables", "OutSystems/ReactWidgets/Main", "Connect2_LegacyShared.controller$GetCacheableSignedPhotoURL"], function (OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, React, OSView, Connect2_LegacyShared_NewConnect_Utilities_NC_Card_Item_Visual_mvc_model, Connect2_LegacyShared_NewConnect_Utilities_NC_Card_Item_Visual_mvc_controller, Connect2_LegacySharedClientVariables, OSWidgets) {
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
        View.displayName = "NewConnect_Utilities.NC_Card_Item_Visual";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return Connect2_LegacyShared_NewConnect_Utilities_NC_Card_Item_Visual_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Connect2_LegacyShared_NewConnect_Utilities_NC_Card_Item_Visual_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), $if(false, false, this, function () {
return [];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "position-relative",
visible: true,
_idProps: {
service: idService,
name: "Result_Visual"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.placeholder_FloatingPill,
style: ("position-absolute absolute-" + model.variables.in_FloatingPillPositionIn),
_idProps: {
service: idService,
name: "Placeholder_FloatingPill"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_FloatingPillPositionInDataFetchStatus)
}), React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.placeholder_OverlayText,
style: ("position-absolute absolute-" + model.variables.in_FloatingOverlayTextPositionIn),
_idProps: {
service: idService,
name: "Placeholder_OverlayText"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_FloatingOverlayTextPositionInDataFetchStatus)
}), $if(model.variables.showPlaceholderForImageIn, false, this, function () {
return [React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.placeholder_Image,
_idProps: {
service: idService,
name: "Placeholder_Image"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [$if(((model.variables.in_SignedURLIn) !== ("")), false, this, function () {
return [React.createElement(OSWidgets.Image, {
extendedProperties: {
"data-error-placeholder-src": model.getCachedValue(idService.getId("Result_Item_Photo.data-error-placeholder-src"), function () {
return (((model.variables.in_ResultTypeIn === Connect2_LegacySharedModel.staticEntities.resultListType.subdivision)) ? (OS.Navigation.VersionedURL.getVersionedUrl("img/Connect2_LegacyShared.no_division_rectangle.png")) : (OS.Navigation.VersionedURL.getVersionedUrl("img/Connect2_LegacyShared.User_rectangle.png")));
}, function () {
return model.variables.in_ResultTypeIn;
}),
style: ((((("height: " + (model.variables.in_ImageHeightIn).toString()) + "px; object-position: ") + model.variables.in_ImageCoverPositionYIn) + " ") + model.variables.in_ImageCoverPositionXIn)
},
style: "img-cover full-width",
type: /*External*/ 1,
url: model.variables.in_SignedURLIn,
_idProps: {
service: idService,
name: "Result_Item_Photo"
},
_widgetRecordProvider: widgetsRecordProvider,
url_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_SignedURLInDataFetchStatus)
})];
}, function () {
return [React.createElement(OSWidgets.Image, {
extendedProperties: {
"data-error-placeholder-src": model.getCachedValue(idService.getId("Result_Item_Default_NoData.data-error-placeholder-src"), function () {
return (((model.variables.in_ResultTypeIn === Connect2_LegacySharedModel.staticEntities.resultListType.subdivision)) ? (OS.Navigation.VersionedURL.getVersionedUrl("img/Connect2_LegacyShared.no_division_rectangle.png")) : (OS.Navigation.VersionedURL.getVersionedUrl("img/Connect2_LegacyShared.User_rectangle.png")));
}, function () {
return model.variables.in_ResultTypeIn;
}),
style: (("height: " + (model.variables.in_ImageHeightIn).toString()) + "px;")
},
image: OS.Navigation.VersionedURL.getVersionedUrl("img/Connect2_LegacyShared.no_division_rectangle.png"),
style: "img-cover full-width img-cover--top-center",
type: /*Static*/ 0,
_idProps: {
service: idService,
name: "Result_Item_Default_NoData"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})];
}))];
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("Connect2_LegacyShared.NewConnect_Utilities.NC_Card_Item_Visual.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "Connect2_LegacyShared.languageResources", "Connect2_LegacyShared.clientVariables", "Connect2_LegacyShared.NewConnect_Utilities.NC_Card_Item_Visual.mvc$debugger", "Connect2_LegacyShared.controller$GetCacheableSignedPhotoURL"], function (OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, Connect2_LegacySharedLanguageResources, Connect2_LegacySharedClientVariables, Connect2_LegacyShared_NewConnect_Utilities_NC_Card_Item_Visual_mvc_Debugger) {
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
Controller.prototype._loadPhotoAsync$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("LoadPhotoAsync");
callContext = controller.callContext(callContext);
var getCacheableSignedPhotoURLVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.getCacheableSignedPhotoURLVar = getCacheableSignedPhotoURLVar;
OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:I26yy7ApvkagSK2GHaKKlw:/NRWebFlows.wx5XeNqAakmtpZYvs3tr_Q/NodesShownInESpaceTree.cNFHmR9mBU+4QoyG2kBr3Q/ClientActions.I26yy7ApvkagSK2GHaKKlw:iT5uldJAy34vgBs2cLr1Kw", "Connect2_LegacyShared", "LoadPhotoAsync", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:mfyRvcd6b0SGirnAhWVn1A", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:7+Td4oVrqUWTzEDRuPL2+g", callContext.id) && (model.variables.in_SignedURLIn === ""))) {
// Is image already signed?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:PQbyLCpXCkKi9Jrt7kNDQw", callContext.id) && (((((model.variables.in_BucketIn === model.variables.last_BucketVar) && (model.variables.in_PathIn === model.variables.last_PathVar)) && (model.variables.in_TypeIn === model.variables.last_TypeVar)) && (model.variables.in_SignedURLIn === "")) && ((model.variables.last_SignedURLVar) !== (""))))) {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:N9c_V26Qj0CllLmXqQGKCw", callContext.id);
// In_SignedURL = Last_SignedURL
model.variables.in_SignedURLIn = model.variables.last_SignedURLVar;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:WJiUk5Bk80KSbKa2jXky1A", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:sZlq+FONpE+rfmRYc2OyQw", callContext.id);
// Execute Action: GetCacheableSignedPhotoURL
model.flush();
return Connect2_LegacySharedController.default.getCacheableSignedPhotoURL$Action(model.variables.in_BucketIn, model.variables.in_PathIn, model.variables.in_TypeIn, callContext).then(function (value) {
getCacheableSignedPhotoURLVar.value = value;
}).then(function () {
// Set Loaded Info
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:6Ddv0txM3kyzDIJPZQvvjg", callContext.id);
// Last_Bucket = In_Bucket
model.variables.last_BucketVar = model.variables.in_BucketIn;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:6Ddv0txM3kyzDIJPZQvvjg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Last_Path = In_Path
model.variables.last_PathVar = model.variables.in_PathIn;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:6Ddv0txM3kyzDIJPZQvvjg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Last_Type = In_Type
model.variables.last_TypeVar = model.variables.in_TypeIn;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:6Ddv0txM3kyzDIJPZQvvjg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// In_SignedURL = GetCacheableSignedPhotoURL.URL
model.variables.in_SignedURLIn = getCacheableSignedPhotoURLVar.value.uRLOut;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:6Ddv0txM3kyzDIJPZQvvjg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
// Last_SignedURL = In_SignedURL
model.variables.last_SignedURLVar = model.variables.in_SignedURLIn;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:m4n4rzRMDk++5csqN_CNYw", callContext.id);
});
}

});
} else {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:sGh9_XZDSU+pf14zKTBipQ", callContext.id);
}

});
}).then(function (res) {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:I26yy7ApvkagSK2GHaKKlw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:I26yy7ApvkagSK2GHaKKlw", callContext.id);
throw ex;

});
};

Controller.prototype.loadPhotoAsync$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._loadPhotoAsync$Action, callContext);

};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:wx5XeNqAakmtpZYvs3tr_Q:/NRWebFlows.wx5XeNqAakmtpZYvs3tr_Q:L7MzDwd4oJkt5Vso1m_eUg", "Connect2_LegacyShared", "NewConnect_Utilities", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:cNFHmR9mBU+4QoyG2kBr3Q:/NRWebFlows.wx5XeNqAakmtpZYvs3tr_Q/NodesShownInESpaceTree.cNFHmR9mBU+4QoyG2kBr3Q:mrJQyvNyVEi8cqP066tpww", "Connect2_LegacyShared", "NC_Card_Item_Visual", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:cNFHmR9mBU+4QoyG2kBr3Q", callContext.id);
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:wx5XeNqAakmtpZYvs3tr_Q", callContext.id);
};
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "NewConnect_Utilities/NC_Card_Item_Visual On Ready");
return controller.loadPhotoAsync$Action(callContext);

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

OutSystemsDebugger.setThreadStartName(callContext.id, "NewConnect_Utilities/NC_Card_Item_Visual On Parameters Changed");
return controller.loadPhotoAsync$Action(callContext);

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
return Connect2_LegacySharedController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, Connect2_LegacySharedLanguageResources);
});

define("Connect2_LegacyShared.NewConnect_Utilities.NC_Card_Item_Visual.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"sZlq+FONpE+rfmRYc2OyQw": {
getter: function (varBag, idService) {
return varBag.getCacheableSignedPhotoURLVar.value;
}
},
"EGFM5v1Kk0i1DAjks2voig": {
getter: function (varBag, idService) {
return varBag.model.variables.last_BucketVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"EF1YGO38dE2TIjg4WFVzUw": {
getter: function (varBag, idService) {
return varBag.model.variables.last_PathVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"ZDIJ93WBIUaRdSTOn4JaBg": {
getter: function (varBag, idService) {
return varBag.model.variables.last_TypeVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"IIF99e3Q_EysbYPZsXLwrg": {
getter: function (varBag, idService) {
return varBag.model.variables.last_SignedURLVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"4UX0wxu4+06SG14t1YRWsA": {
getter: function (varBag, idService) {
return varBag.model.variables.showPlaceholderForImageIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"j2U2HhrEvEyz6T74iaZkfA": {
getter: function (varBag, idService) {
return varBag.model.variables.in_ImageHeightIn;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"C9DIiNbmaEmtG7J0H83CTQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_ResultTypeIn;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"j5n9p4eri0SONXP2DgyxxQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_SignedURLIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Gs_eujJI8EG9slF7fxLJ7A": {
getter: function (varBag, idService) {
return varBag.model.variables.in_BucketIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"0bXfxsn02kudnkvSN+BOSQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_PathIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"SI9NFv_mEki9QK2exRqaEw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_TypeIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"VrOsaUxs7E+XZ6rDo03zwA": {
getter: function (varBag, idService) {
return varBag.model.variables.in_FloatingPillPositionIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"9DFAoreBzkSh2bw_WluGXQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_FloatingOverlayTextPositionIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"QgCpg3yND02gsak1Rydr7A": {
getter: function (varBag, idService) {
return varBag.model.variables.in_ImageCoverPositionXIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"sOB67mRq+U2NyT982e9Onw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_ImageCoverPositionYIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"rJ6FXFOAvEeqrwfFOMrr7w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Result_Visual"));
})(varBag.model, idService);
}
},
"jh0CPh915EaBZ+HoLn_sZQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_FloatingPill"));
})(varBag.model, idService);
}
},
"qSV0dsVJY0WQRRggEyURGQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_OverlayText"));
})(varBag.model, idService);
}
},
"pIxZJkTou0eO2vFwI0Uj_Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_ShowPlaceholderForImage"));
})(varBag.model, idService);
}
},
"av6alOumCEWJiodXSynT+w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Image"));
})(varBag.model, idService);
}
},
"KB+ihgfJ_UOhmTKxNuBD5Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HasSignedURL"));
})(varBag.model, idService);
}
},
"sBSrkzYSF06TgKfx+bxB+A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Result_Item_Photo"));
})(varBag.model, idService);
}
},
"V9ylxZ73EUGGspFDCsdSNg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Result_Item_Default_NoData"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
