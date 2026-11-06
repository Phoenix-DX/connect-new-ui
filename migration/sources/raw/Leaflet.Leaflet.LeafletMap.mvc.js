define("Leaflet.Leaflet.LeafletMap.mvc$model", ["OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.controller", "Leaflet.model$TileLayerRec", "Leaflet.model$MapOptionsRec", "Leaflet.model$MarkerWithWindowList", "Leaflet.model$GeoJSONFeatureList", "Leaflet.model$ZoomControlOptionsRec", "Leaflet.controller$Map_Zoom_Control", "Leaflet.model$MarkerWithWindowRec", "Leaflet.controller$Map_Marker_Add", "Leaflet.controller$Map_Marker_DeleteAll", "Leaflet.controller$Map_MarkerCluster_AddToMap", "Leaflet.controller$Map_SetTileLayer", "Leaflet.model$GeoJSONFeatureRec", "Leaflet.controller$Map_GeoJSON_Feature_Add", "Leaflet.controller$Map_SetCurrentLocation", "Leaflet.controller$Map_InvalidateSize", "Leaflet.controller$LL_MapObject_Attr", "Leaflet.controller$Map_Zoom_GetLevel", "Leaflet.controller$Map_MarkerCluster_UsingCluster_Set", "Leaflet.model$MapVisibleBoundariesRec", "Leaflet.controller$Map_GetVisibleBoundaries"], function (OutSystems, LeafletModel, LeafletController) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("TileLayer_Local", "tileLayer_LocalVar", "TileLayer_Local", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new LeafletModel.TileLayerRec());
}, false, LeafletModel.TileLayerRec), 
this.attr("isInitialized", "isInitializedVar", "isInitialized", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("MapOptions", "mapOptionsIn", "MapOptions", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new LeafletModel.MapOptionsRec());
}, false, LeafletModel.MapOptionsRec), 
this.attr("_mapOptionsInDataFetchStatus", "_mapOptionsInDataFetchStatus", "_mapOptionsInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("MarkersList", "markersListIn", "MarkersList", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new LeafletModel.MarkerWithWindowList());
}, false, LeafletModel.MarkerWithWindowList), 
this.attr("_markersListInDataFetchStatus", "_markersListInDataFetchStatus", "_markersListInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("TileLayer", "tileLayerIn", "TileLayer", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new LeafletModel.TileLayerRec());
}, false, LeafletModel.TileLayerRec), 
this.attr("_tileLayerInDataFetchStatus", "_tileLayerInDataFetchStatus", "_tileLayerInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("GeoJSON_Features", "geoJSON_FeaturesIn", "GeoJSON_Features", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new LeafletModel.GeoJSONFeatureList());
}, false, LeafletModel.GeoJSONFeatureList), 
this.attr("_geoJSON_FeaturesInDataFetchStatus", "_geoJSON_FeaturesInDataFetchStatus", "_geoJSON_FeaturesInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("ZoomControlOptions", "zoomControlOptionsIn", "ZoomControlOptions", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new LeafletModel.ZoomControlOptionsRec());
}, false, LeafletModel.ZoomControlOptionsRec), 
this.attr("_zoomControlOptionsInDataFetchStatus", "_zoomControlOptionsInDataFetchStatus", "_zoomControlOptionsInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("useClustering", "useClusteringIn", "useClustering", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_useClusteringInDataFetchStatus", "_useClusteringInDataFetchStatus", "_useClusteringInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("centerToCurrentLocation", "centerToCurrentLocationIn", "centerToCurrentLocation", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_centerToCurrentLocationInDataFetchStatus", "_centerToCurrentLocationInDataFetchStatus", "_centerToCurrentLocationInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
if("MapOptions" in inputs) {
this.variables.mapOptionsIn = inputs.MapOptions;
if("_mapOptionsInDataFetchStatus" in inputs) {
this.variables._mapOptionsInDataFetchStatus = inputs._mapOptionsInDataFetchStatus;
}

}

if("MarkersList" in inputs) {
this.variables.markersListIn = inputs.MarkersList;
if("_markersListInDataFetchStatus" in inputs) {
this.variables._markersListInDataFetchStatus = inputs._markersListInDataFetchStatus;
}

}

if("TileLayer" in inputs) {
this.variables.tileLayerIn = inputs.TileLayer;
if("_tileLayerInDataFetchStatus" in inputs) {
this.variables._tileLayerInDataFetchStatus = inputs._tileLayerInDataFetchStatus;
}

}

if("GeoJSON_Features" in inputs) {
this.variables.geoJSON_FeaturesIn = inputs.GeoJSON_Features;
if("_geoJSON_FeaturesInDataFetchStatus" in inputs) {
this.variables._geoJSON_FeaturesInDataFetchStatus = inputs._geoJSON_FeaturesInDataFetchStatus;
}

}

if("ZoomControlOptions" in inputs) {
this.variables.zoomControlOptionsIn = inputs.ZoomControlOptions;
if("_zoomControlOptionsInDataFetchStatus" in inputs) {
this.variables._zoomControlOptionsInDataFetchStatus = inputs._zoomControlOptionsInDataFetchStatus;
}

}

if("useClustering" in inputs) {
this.variables.useClusteringIn = inputs.useClustering;
if("_useClusteringInDataFetchStatus" in inputs) {
this.variables._useClusteringInDataFetchStatus = inputs._useClusteringInDataFetchStatus;
}

}

if("centerToCurrentLocation" in inputs) {
this.variables.centerToCurrentLocationIn = inputs.centerToCurrentLocation;
if("_centerToCurrentLocationInDataFetchStatus" in inputs) {
this.variables._centerToCurrentLocationInDataFetchStatus = inputs._centerToCurrentLocationInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Leaflet.LeafletMap");
});
define("Leaflet.Leaflet.LeafletMap.mvc$view", ["OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.controller", "react", "OutSystems/ReactView/Main", "Leaflet.Leaflet.LeafletMap.mvc$model", "Leaflet.Leaflet.LeafletMap.mvc$controller", "OutSystems/ReactWidgets/Main", "Leaflet.model$TileLayerRec", "Leaflet.model$MapOptionsRec", "Leaflet.model$MarkerWithWindowList", "Leaflet.model$GeoJSONFeatureList", "Leaflet.model$ZoomControlOptionsRec", "Leaflet.controller$Map_Zoom_Control", "Leaflet.model$MarkerWithWindowRec", "Leaflet.controller$Map_Marker_Add", "Leaflet.controller$Map_Marker_DeleteAll", "Leaflet.controller$Map_MarkerCluster_AddToMap", "Leaflet.controller$Map_SetTileLayer", "Leaflet.model$GeoJSONFeatureRec", "Leaflet.controller$Map_GeoJSON_Feature_Add", "Leaflet.controller$Map_SetCurrentLocation", "Leaflet.controller$Map_InvalidateSize", "Leaflet.controller$LL_MapObject_Attr", "Leaflet.controller$Map_Zoom_GetLevel", "Leaflet.controller$Map_MarkerCluster_UsingCluster_Set", "Leaflet.model$MapVisibleBoundariesRec", "Leaflet.controller$Map_GetVisibleBoundaries"], function (OutSystems, LeafletModel, LeafletController, React, OSView, Leaflet_Leaflet_LeafletMap_mvc_model, Leaflet_Leaflet_LeafletMap_mvc_controller, OSWidgets) {
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
        View.displayName = "Leaflet.LeafletMap";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/Leaflet.Leaflet.LeafletMap.css"];
        };
        View.getJsDependencies = function() {
            return ["scripts/Leaflet.leafletsrc.js", "scripts/Leaflet.leaflet_markerclustersrc.js"];
        };
        View.getBlocks = function() {
            return [];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return Leaflet_Leaflet_LeafletMap_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Leaflet_Leaflet_LeafletMap_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
name: "LeafletMap"
},
_widgetRecordProvider: widgetsRecordProvider
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("Leaflet.Leaflet.LeafletMap.mvc$controller", ["OutSystems/ClientRuntime/Main", "Leaflet.model", "Leaflet.controller", "Leaflet.languageResources", "Leaflet.Leaflet.LeafletMap.mvc$debugger", "Leaflet.Leaflet.LeafletMap.mvc$controller.Map_DefineZoomControl.GetFuncJS", "Leaflet.Leaflet.LeafletMap.mvc$controller.Map_DefineMarkers.GetFuncsJS", "Leaflet.Leaflet.LeafletMap.mvc$controller.Map_DefineGeoJSON.GetFuncsJS", "Leaflet.Leaflet.LeafletMap.mvc$controller.OnReady.InitializeJS", "Leaflet.model$TileLayerRec", "Leaflet.model$MapOptionsRec", "Leaflet.model$MarkerWithWindowList", "Leaflet.model$GeoJSONFeatureList", "Leaflet.model$ZoomControlOptionsRec", "Leaflet.controller$Map_Zoom_Control", "Leaflet.model$MarkerWithWindowRec", "Leaflet.controller$Map_Marker_Add", "Leaflet.controller$Map_Marker_DeleteAll", "Leaflet.controller$Map_MarkerCluster_AddToMap", "Leaflet.controller$Map_SetTileLayer", "Leaflet.model$GeoJSONFeatureRec", "Leaflet.controller$Map_GeoJSON_Feature_Add", "Leaflet.controller$Map_SetCurrentLocation", "Leaflet.controller$Map_InvalidateSize", "Leaflet.controller$LL_MapObject_Attr", "Leaflet.controller$Map_Zoom_GetLevel", "Leaflet.controller$Map_MarkerCluster_UsingCluster_Set", "Leaflet.model$MapVisibleBoundariesRec", "Leaflet.controller$Map_GetVisibleBoundaries"], function (OutSystems, LeafletModel, LeafletController, LeafletLanguageResources, Leaflet_Leaflet_LeafletMap_mvc_Debugger, Leaflet_Leaflet_LeafletMap_mvc_controller_Map_DefineZoomControl_GetFuncJS, Leaflet_Leaflet_LeafletMap_mvc_controller_Map_DefineMarkers_GetFuncsJS, Leaflet_Leaflet_LeafletMap_mvc_controller_Map_DefineGeoJSON_GetFuncsJS, Leaflet_Leaflet_LeafletMap_mvc_controller_OnReady_InitializeJS) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {
event_OnGoToMyLocation_Clicked$Action: function () {
return controller.executeActionInsideJSNode(controller._event_OnGoToMyLocation_Clicked$Action.bind(controller), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "Event_OnGoToMyLocation_Clicked");
},
event_OnMarker_Clicked$Action: function (idIn, typeIn, extraDataIn, latIn, longIn, markerObjIn) {
idIn = (idIn === undefined) ? "" : idIn;
typeIn = (typeIn === undefined) ? "" : typeIn;
extraDataIn = (extraDataIn === undefined) ? "" : extraDataIn;
latIn = (latIn === undefined) ? OS.DataTypes.Decimal.defaultValue : latIn;
longIn = (longIn === undefined) ? OS.DataTypes.Decimal.defaultValue : longIn;
markerObjIn = (markerObjIn === undefined) ? null : markerObjIn;
return controller.executeActionInsideJSNode(controller._event_OnMarker_Clicked$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(idIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(typeIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(extraDataIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(latIn, OS.DataTypes.DataTypes.Decimal), OS.DataConversion.JSNodeParamConverter.from(longIn, OS.DataTypes.DataTypes.Decimal), OS.DataConversion.JSNodeParamConverter.from(markerObjIn, OS.DataTypes.DataTypes.Object)), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "Event_OnMarker_Clicked");
},
event_OnGeoJSON_Clicked$Action: function (idIn, typeIn, extraDataIn) {
idIn = (idIn === undefined) ? "" : idIn;
typeIn = (typeIn === undefined) ? "" : typeIn;
extraDataIn = (extraDataIn === undefined) ? "" : extraDataIn;
return controller.executeActionInsideJSNode(controller._event_OnGeoJSON_Clicked$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(idIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(typeIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(extraDataIn, OS.DataTypes.DataTypes.Text)), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "Event_OnGeoJSON_Clicked");
},
event_OnZoomEnd$Action: function () {
return controller.executeActionInsideJSNode(controller._event_OnZoomEnd$Action.bind(controller), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "Event_OnZoomEnd");
},
event_OnMoveEnd$Action: function () {
return controller.executeActionInsideJSNode(controller._event_OnMoveEnd$Action.bind(controller), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "Event_OnMoveEnd");
}
};
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
varBag.callContext = callContext;
try {OutSystemsDebugger.push("gSdMjyuovE6NKxHbjyoUZA:1R1AASF43UqFAlkJBM_ObQ:/NRWebFlows.7GbFvyUSsU6rwo_nZz42og/NodesShownInESpaceTree.m30ooB4D80elrJ5vJrw4fw/ClientActions.1R1AASF43UqFAlkJBM_ObQ:ThLO+zevt1s8DJeZyEFl1Q", "Leaflet", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:9DHQSMpGsk2bPyXSOv41Ew", callContext.id);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:oPr3cDasrk+0lvULqHcneg", callContext.id);
// isInitialized = False
model.variables.isInitializedVar = false;
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:k3CR45jPN0i+yGDJhG28ZA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gSdMjyuovE6NKxHbjyoUZA:1R1AASF43UqFAlkJBM_ObQ", callContext.id);
}

};
Controller.prototype._event_OnGeoJSON_Clicked$Action = function (idIn, typeIn, extraDataIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Event_OnGeoJSON_Clicked");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Leaflet.Leaflet.LeafletMap.Event_OnGeoJSON_Clicked$vars"))());
vars.value.idInLocal = idIn;
vars.value.typeInLocal = typeIn;
vars.value.extraDataInLocal = extraDataIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("gSdMjyuovE6NKxHbjyoUZA:3tGmR064cUKU0UcmUs5KoQ:/NRWebFlows.7GbFvyUSsU6rwo_nZz42og/NodesShownInESpaceTree.m30ooB4D80elrJ5vJrw4fw/ClientActions.3tGmR064cUKU0UcmUs5KoQ:Xn70Qr7EstgNTn9sMm9tTQ", "Leaflet", "Event_OnGeoJSON_Clicked", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:NEpv+_isp0Kl+1h2Ee_VyQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:aNsSz0xs+EaRcCYQ+Pq+_A", callContext.id);
// Trigger Event: OnGeoJSON_Clicked
return controller.onGeoJSON_Clicked$Action(vars.value.idInLocal, idService.getId("LeafletMap"), vars.value.typeInLocal, vars.value.extraDataInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:rGytRbSIpEaZS3vPvyK7Dw", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("gSdMjyuovE6NKxHbjyoUZA:3tGmR064cUKU0UcmUs5KoQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("gSdMjyuovE6NKxHbjyoUZA:3tGmR064cUKU0UcmUs5KoQ", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("Leaflet.Leaflet.LeafletMap.Event_OnGeoJSON_Clicked$vars", [{
name: "Id",
attrName: "idInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Type",
attrName: "typeInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "ExtraData",
attrName: "extraDataInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._map_DefineZoomControl$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Map_DefineZoomControl");
callContext = controller.callContext(callContext);
var getFuncJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.getFuncJSResult = getFuncJSResult;
try {OutSystemsDebugger.push("gSdMjyuovE6NKxHbjyoUZA:zbJAcUuv70SkuQJBk_qhdg:/NRWebFlows.7GbFvyUSsU6rwo_nZz42og/NodesShownInESpaceTree.m30ooB4D80elrJ5vJrw4fw/ClientActions.zbJAcUuv70SkuQJBk_qhdg:MS2DYJ_uZZ7RXGDGYN_Bhg", "Leaflet", "Map_DefineZoomControl", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:8_h+sv0qTEeK08p73beIfA", callContext.id);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:mCnk+uXR_kyX8U8YFfvfWQ", callContext.id);
getFuncJSResult.value = controller.safeExecuteJSNode(Leaflet_Leaflet_LeafletMap_mvc_controller_Map_DefineZoomControl_GetFuncJS, "GetFunc", "Map_DefineZoomControl", {
Object: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Leaflet.Leaflet.LeafletMap.Map_DefineZoomControl$getFuncJSResult"))();
jsNodeResult.objectOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Object, OS.DataTypes.DataTypes.Object);
return jsNodeResult;
}, {
Event_OnGoToMyLocation_Clicked: controller.clientActionProxies.event_OnGoToMyLocation_Clicked$Action
}, {});
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:O4aKoH34IUq_IotCwz0KQQ", callContext.id);
// Execute Action: Map_Zoom_Control
LeafletController.default.map_Zoom_Control$Action(model.variables.zoomControlOptionsIn, idService.getId("LeafletMap"), getFuncJSResult.value.objectOut, callContext);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:dg2MGUupe0aEdGP4T4OarQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gSdMjyuovE6NKxHbjyoUZA:zbJAcUuv70SkuQJBk_qhdg", callContext.id);
}

};
Controller.registerVariableGroupType("Leaflet.Leaflet.LeafletMap.Map_DefineZoomControl$getFuncJSResult", [{
name: "Object",
attrName: "objectOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
Controller.prototype._map_DefineMarkers$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Map_DefineMarkers");
callContext = controller.callContext(callContext);
var getFuncsJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.getFuncsJSResult = getFuncsJSResult;
try {OutSystemsDebugger.push("gSdMjyuovE6NKxHbjyoUZA:RgkFd4amwUKUPFzYmf4Drg:/NRWebFlows.7GbFvyUSsU6rwo_nZz42og/NodesShownInESpaceTree.m30ooB4D80elrJ5vJrw4fw/ClientActions.RgkFd4amwUKUPFzYmf4Drg:Xbl_mnXNLJR7gVyxPOG+VA", "Leaflet", "Map_DefineMarkers", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:2kybyQUHWUq0LIwIqMjbKQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:LDEj6c_fhU2Sf4dreK+yiQ", callContext.id);
getFuncsJSResult.value = controller.safeExecuteJSNode(Leaflet_Leaflet_LeafletMap_mvc_controller_Map_DefineMarkers_GetFuncsJS, "GetFuncs", "Map_DefineMarkers", {
OnClickFunction: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Leaflet.Leaflet.LeafletMap.Map_DefineMarkers$getFuncsJSResult"))();
jsNodeResult.onClickFunctionOut = OS.DataConversion.JSNodeParamConverter.from($parameters.OnClickFunction, OS.DataTypes.DataTypes.Object);
return jsNodeResult;
}, {
Event_OnMarker_Clicked: controller.clientActionProxies.event_OnMarker_Clicked$Action
}, {});
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:eUZWcaAPFEGFdaGZrRw5_w", callContext.id);
// Execute Action: Map_Marker_DeleteAll
LeafletController.default.map_Marker_DeleteAll$Action(idService.getId("LeafletMap"), callContext);
// Foreach MarkersList
callContext.iterationContext.registerIterationStart(model.variables.markersListIn);
try {var markersListIterator = callContext.iterationContext.getIterator(model.variables.markersListIn);
var markersListIndex = 0;
while ((OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:vuXv1_uhzkau0K4ykvXtzQ", callContext.id) && (markersListIndex < model.variables.markersListIn.length))) {
markersListIterator.currentRowNumber = markersListIndex;
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:DSoOa0h_WkelCGiSNGLQgQ", callContext.id);
// Execute Action: Map_Marker_Add
LeafletController.default.map_Marker_Add$Action(idService.getId("LeafletMap"), model.variables.markersListIn.getItem(markersListIndex.valueOf()), getFuncsJSResult.value.onClickFunctionOut, false, callContext);
markersListIndex++;
}

} finally {
callContext.iterationContext.registerIterationEnd(model.variables.markersListIn);
}

if((OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:shVnAzWx2UmwfW2R_MwZDA", callContext.id) && model.variables.useClusteringIn)) {
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:q97sg813u0G9nO0Tc60CTg", callContext.id);
// Execute Action: Map_MarkerCluster_AddToMap
LeafletController.default.map_MarkerCluster_AddToMap$Action(idService.getId("LeafletMap"), callContext);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:nopfzWN9i02yugFOXctPqQ", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:nopfzWN9i02yugFOXctPqQ", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gSdMjyuovE6NKxHbjyoUZA:RgkFd4amwUKUPFzYmf4Drg", callContext.id);
}

};
Controller.registerVariableGroupType("Leaflet.Leaflet.LeafletMap.Map_DefineMarkers$getFuncsJSResult", [{
name: "OnClickFunction",
attrName: "onClickFunctionOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
Controller.prototype._map_DefineTileUI$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Map_DefineTileUI");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Leaflet.Leaflet.LeafletMap.Map_DefineTileUI$vars"))());
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("gSdMjyuovE6NKxHbjyoUZA:MW7PeS3SNEaEYj_gJRYq7g:/NRWebFlows.7GbFvyUSsU6rwo_nZz42og/NodesShownInESpaceTree.m30ooB4D80elrJ5vJrw4fw/ClientActions.MW7PeS3SNEaEYj_gJRYq7g:Ax_tDm+qjrRmUS9_rS9KtA", "Leaflet", "Map_DefineTileUI", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:SQGYf_K_9UeT19b2O4KNWQ", callContext.id);
// Changed?
if((OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:Ho01MSQyTU2JYZZtus+U3A", callContext.id) && (model.variables.tileLayerIn.equals(model.variables.tileLayer_LocalVar) && model.variables.isInitializedVar))) {
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:9Ml0ZDjBZ0e5rXGkDO0szw", callContext.id);
} else {
if((OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:9p3XyaMuU0mO7nVSa7q3GQ", callContext.id) && ((model.variables.tileLayer_LocalVar) !== (vars.value.tileLayer_EmptyVar)))) {
// TODO
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:B_e0OhOZTk+K9a3ElcT6ZQ", callContext.id);
}

OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:YPL8TH1TL0GBG1btKUaYsg", callContext.id);
// TileLayer_Local = TileLayer
model.variables.tileLayer_LocalVar = model.variables.tileLayerIn;
// Empty Domains
if((OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:fNwoPzu9vEupcQndu60tfQ", callContext.id) && (model.variables.tileLayerIn.optionsAttr.subdomainsAttr.isEmpty && (model.variables.tileLayerIn.urlAttr === "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")))) {
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:+nl78OSkkUW_bTDFYQ63Sg", callContext.id);
// Execute Action: ListAppendAll_Subdomains
OS.SystemActions.listAppendAll(model.variables.tileLayerIn.optionsAttr.subdomainsAttr, function () {
var list = new OS.DataTypes.TextList();
list.pushAll(["a", "b", "c"]);
return list;
}(), callContext);
}

OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:jTbu7IOJ9UaQrAj6FNU+Jw", callContext.id);
// Execute Action: Map_SetTileLayer
LeafletController.default.map_SetTileLayer$Action(model.variables.tileLayerIn, idService.getId("LeafletMap"), callContext);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:xXCp2pUNyUyPkaobMIn5Lw", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gSdMjyuovE6NKxHbjyoUZA:MW7PeS3SNEaEYj_gJRYq7g", callContext.id);
}

};
Controller.registerVariableGroupType("Leaflet.Leaflet.LeafletMap.Map_DefineTileUI$vars", [{
name: "TileLayer_Empty",
attrName: "tileLayer_EmptyVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new LeafletModel.TileLayerRec();
},
complexType: LeafletModel.TileLayerRec
}]);
Controller.prototype._map_DefineGeoJSON$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Map_DefineGeoJSON");
callContext = controller.callContext(callContext);
var getFuncsJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.getFuncsJSResult = getFuncsJSResult;
try {OutSystemsDebugger.push("gSdMjyuovE6NKxHbjyoUZA:5mrhlTYQ20OOvGKROKEpMA:/NRWebFlows.7GbFvyUSsU6rwo_nZz42og/NodesShownInESpaceTree.m30ooB4D80elrJ5vJrw4fw/ClientActions.5mrhlTYQ20OOvGKROKEpMA:SPohw8oOhZ_WCW0UsxXkkA", "Leaflet", "Map_DefineGeoJSON", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:yyQC4X472UKvHn01gNkcBw", callContext.id);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:YTy_CtyTEkCTdBvoTU+qYg", callContext.id);
getFuncsJSResult.value = controller.safeExecuteJSNode(Leaflet_Leaflet_LeafletMap_mvc_controller_Map_DefineGeoJSON_GetFuncsJS, "GetFuncs", "Map_DefineGeoJSON", {
OnClickFunction: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Leaflet.Leaflet.LeafletMap.Map_DefineGeoJSON$getFuncsJSResult"))();
jsNodeResult.onClickFunctionOut = OS.DataConversion.JSNodeParamConverter.from($parameters.OnClickFunction, OS.DataTypes.DataTypes.Object);
return jsNodeResult;
}, {
Event_OnGeoJSON_Clicked: controller.clientActionProxies.event_OnGeoJSON_Clicked$Action
}, {});
// Foreach GeoJSON_Features
callContext.iterationContext.registerIterationStart(model.variables.geoJSON_FeaturesIn);
try {var geoJSON_FeaturesIterator = callContext.iterationContext.getIterator(model.variables.geoJSON_FeaturesIn);
var geoJSON_FeaturesIndex = 0;
while ((OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:sEAGrqk6LkqvwpyRNfMRQg", callContext.id) && (geoJSON_FeaturesIndex < model.variables.geoJSON_FeaturesIn.length))) {
geoJSON_FeaturesIterator.currentRowNumber = geoJSON_FeaturesIndex;
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:uJDmrLRRt0aTuSPEHgtUxg", callContext.id);
// Execute Action: Map_GeoJSON_Feature_Add
LeafletController.default.map_GeoJSON_Feature_Add$Action(model.variables.geoJSON_FeaturesIn.getItem(geoJSON_FeaturesIndex.valueOf()), idService.getId("LeafletMap"), getFuncsJSResult.value.onClickFunctionOut, callContext);
geoJSON_FeaturesIndex++;
}

} finally {
callContext.iterationContext.registerIterationEnd(model.variables.geoJSON_FeaturesIn);
}

OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:YuxpWtFhgkyRs+w2cQVlNQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gSdMjyuovE6NKxHbjyoUZA:5mrhlTYQ20OOvGKROKEpMA", callContext.id);
}

};
Controller.registerVariableGroupType("Leaflet.Leaflet.LeafletMap.Map_DefineGeoJSON$getFuncsJSResult", [{
name: "OnClickFunction",
attrName: "onClickFunctionOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
Controller.prototype._onReady$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnReady");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Leaflet.Leaflet.LeafletMap.OnReady$vars"))());
var jSONSerialize1Var = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.jSONSerialize1Var = jSONSerialize1Var;
OutSystemsDebugger.push("gSdMjyuovE6NKxHbjyoUZA:Scs0sroZgUC7lSa6GFE1+w:/NRWebFlows.7GbFvyUSsU6rwo_nZz42og/NodesShownInESpaceTree.m30ooB4D80elrJ5vJrw4fw/ClientActions.Scs0sroZgUC7lSa6GFE1+w:ryPb8t2MKu_bwNDL_WGGnA", "Leaflet", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:plm0GqaUI0SrbsI26fhE7A", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
if((OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:u8VZEMlMHEO0ElBW6da6kw", callContext.id) && model.variables.mapOptionsIn.centerAttr.isEmpty)) {
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:UT9ZxqJri0iLxg4WAI1CpQ", callContext.id);
// HasNoCenter = True
vars.value.hasNoCenterVar = true;
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:__ztxOM8o0WftLtwLGJi1w", callContext.id);
// Execute Action: ListAppendAll_Center
OS.SystemActions.listAppendAll(model.variables.mapOptionsIn.centerAttr, function () {
var list = new OS.DataTypes.DecimalList();
list.pushAll([(new OS.DataTypes.Decimal("51.505")), (new OS.DataTypes.Decimal("0.09")).neg()]);
return list;
}(), callContext);
}

OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:20Qi4Ji+I0m3pAOaw13aLQ", callContext.id);
// JSON Serialize: JSONSerialize1
jSONSerialize1Var.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.mapOptionsIn, true, false);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:+8oeZxxpOkmAs8I5EDTi_g", callContext.id);
// Trigger Event: SetCallbacks
return controller.setCallbacks$Action(idService.getId("LeafletMap"), callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:Z6hX12qAr0qz+lRdvhjLGw", callContext.id);
controller.safeExecuteJSNode(Leaflet_Leaflet_LeafletMap_mvc_controller_OnReady_InitializeJS, "Initialize", "OnReady", {
LL_MapObject_Attr: OS.DataConversion.JSNodeParamConverter.to(OutSystemsDebugger.handleFunctionCall(function () {
return LeafletController.default.lL_MapObject_Attr$Action(callContext).nameOut;
}, OS.DataTypes.DataTypes.Text, callContext.id), OS.DataTypes.DataTypes.Text),
Options: OS.DataConversion.JSNodeParamConverter.to(jSONSerialize1Var.value.jSONOut, OS.DataTypes.DataTypes.Text),
Id: OS.DataConversion.JSNodeParamConverter.to(idService.getId("LeafletMap"), OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {
Event_OnZoomEnd: controller.clientActionProxies.event_OnZoomEnd$Action,
Event_OnMoveEnd: controller.clientActionProxies.event_OnMoveEnd$Action
}, {});
}).then(function () {
if((OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:fAPTaqJg60yf7x2_R5bp5A", callContext.id) && (vars.value.hasNoCenterVar && model.variables.centerToCurrentLocationIn))) {
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:urVooroNvUO06jLxP41Krw", callContext.id);
// Execute Action: Map_SetCurrentLocation
LeafletController.default.map_SetCurrentLocation$Action(idService.getId("LeafletMap"), callContext);
}

OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:kxhDqDRYC0qLLRFMSBzkyg", callContext.id);
// Execute Action: Map_UpdateOptions
controller._map_UpdateOptions$Action(callContext);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:RdKw7G2mVUeC1MM0GCbNTA", callContext.id);
// isInitialized = True
model.variables.isInitializedVar = true;
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:92bCxpEQmkyhInGOZoz6Hw", callContext.id);
// Execute Action: Map_InvalidateSize
LeafletController.default.map_InvalidateSize$Action(idService.getId("LeafletMap"), callContext);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:rka297AepkeZKhyGLLAoJw", callContext.id);
// Trigger Event: OnInitialized
return controller.onInitialized$Action(idService.getId("LeafletMap"), callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:GAH+1_QiLkeA+lUj4POAQg", callContext.id);
});
});
}).then(function (res) {
OutSystemsDebugger.pop("gSdMjyuovE6NKxHbjyoUZA:Scs0sroZgUC7lSa6GFE1+w", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("gSdMjyuovE6NKxHbjyoUZA:Scs0sroZgUC7lSa6GFE1+w", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("Leaflet.Leaflet.LeafletMap.OnReady$vars", [{
name: "HasNoCenter",
attrName: "hasNoCenterVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._onParametersChanged_$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnParametersChanged_");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("gSdMjyuovE6NKxHbjyoUZA:BKHossRB80OIU2B4Fd6TtA:/NRWebFlows.7GbFvyUSsU6rwo_nZz42og/NodesShownInESpaceTree.m30ooB4D80elrJ5vJrw4fw/ClientActions.BKHossRB80OIU2B4Fd6TtA:yvsoYz58VXXnbSqa3P0Y_Q", "Leaflet", "OnParametersChanged_", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:N0l0WuOrxEK7xgE26ulYXw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:TgAU2XhSCUy4JvnzOK8tDA", callContext.id);
// Execute Action: Map_UpdateOptions
controller._map_UpdateOptions$Action(callContext);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:W+HsJbyNd06ROVtH+xgH5g", callContext.id);
// Trigger Event: OnParametersChanged
return controller.onParametersChanged$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:z7_ZekZT4Eafz0_TkQVheQ", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("gSdMjyuovE6NKxHbjyoUZA:BKHossRB80OIU2B4Fd6TtA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("gSdMjyuovE6NKxHbjyoUZA:BKHossRB80OIU2B4Fd6TtA", callContext.id);
throw ex;

});
};
Controller.prototype._event_OnZoomEnd$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Event_OnZoomEnd");
callContext = controller.callContext(callContext);
var map_Zoom_GetLevelVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.map_Zoom_GetLevelVar = map_Zoom_GetLevelVar;
OutSystemsDebugger.push("gSdMjyuovE6NKxHbjyoUZA:QTyFwGgLRkCwa8FfheuOcA:/NRWebFlows.7GbFvyUSsU6rwo_nZz42og/NodesShownInESpaceTree.m30ooB4D80elrJ5vJrw4fw/ClientActions.QTyFwGgLRkCwa8FfheuOcA:litt163HDzQgxzjurDta2Q", "Leaflet", "Event_OnZoomEnd", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:3HZN1vD550SKbQ1pkeT0jA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:MGdQ1o0k50CvhOFuKNMV+g", callContext.id);
// Execute Action: Map_Zoom_GetLevel
map_Zoom_GetLevelVar.value = LeafletController.default.map_Zoom_GetLevel$Action(idService.getId("LeafletMap"), callContext);

OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:AjkYR8GL2k+jTeuskGGlSw", callContext.id);
// Trigger Event: OnZoomEnd
return controller.onZoomEnd$Action(map_Zoom_GetLevelVar.value.zoomLevelOut, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:BXXu2pXZUE+MU0ls6DY5HQ", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("gSdMjyuovE6NKxHbjyoUZA:QTyFwGgLRkCwa8FfheuOcA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("gSdMjyuovE6NKxHbjyoUZA:QTyFwGgLRkCwa8FfheuOcA", callContext.id);
throw ex;

});
};
Controller.prototype._event_OnGoToMyLocation_Clicked$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Event_OnGoToMyLocation_Clicked");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("gSdMjyuovE6NKxHbjyoUZA:l7Ro2l5Sk0+FMmxOTxw_IQ:/NRWebFlows.7GbFvyUSsU6rwo_nZz42og/NodesShownInESpaceTree.m30ooB4D80elrJ5vJrw4fw/ClientActions.l7Ro2l5Sk0+FMmxOTxw_IQ:0eoYLsEYIhmOb8rbJwVl3g", "Leaflet", "Event_OnGoToMyLocation_Clicked", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:g8ryDObXo0yIJOqhq7jMhw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:heoVJfhEQEK3uqX9GlymFg", callContext.id);
// Trigger Event: OnGoToMyLocation_Clicked
return controller.onGoToMyLocation_Clicked$Action(idService.getId("LeafletMap"), callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:CsEJ0rH_9USxVG+ztqlADQ", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("gSdMjyuovE6NKxHbjyoUZA:l7Ro2l5Sk0+FMmxOTxw_IQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("gSdMjyuovE6NKxHbjyoUZA:l7Ro2l5Sk0+FMmxOTxw_IQ", callContext.id);
throw ex;

});
};
Controller.prototype._event_OnMarker_Clicked$Action = function (idIn, typeIn, extraDataIn, latIn, longIn, markerObjIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Event_OnMarker_Clicked");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Leaflet.Leaflet.LeafletMap.Event_OnMarker_Clicked$vars"))());
vars.value.idInLocal = idIn;
vars.value.typeInLocal = typeIn;
vars.value.extraDataInLocal = extraDataIn;
vars.value.latInLocal = latIn;
vars.value.longInLocal = longIn;
vars.value.markerObjInLocal = markerObjIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("gSdMjyuovE6NKxHbjyoUZA:cI5O5UifsECbyWuWE4F8+A:/NRWebFlows.7GbFvyUSsU6rwo_nZz42og/NodesShownInESpaceTree.m30ooB4D80elrJ5vJrw4fw/ClientActions.cI5O5UifsECbyWuWE4F8+A:XK9sCOZ2vq3ZwJqUPfhnyw", "Leaflet", "Event_OnMarker_Clicked", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:lwweYlAadEuKd5WoqU3tdA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:DrYFRFP2pUq3ffR_F0Qtag", callContext.id);
// Trigger Event: OnMarker_Clicked
return controller.onMarker_Clicked$Action(vars.value.idInLocal, idService.getId("LeafletMap"), vars.value.typeInLocal, vars.value.extraDataInLocal, vars.value.latInLocal, vars.value.longInLocal, vars.value.markerObjInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:kOPATYW6zU6dGAjvYQUomg", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("gSdMjyuovE6NKxHbjyoUZA:cI5O5UifsECbyWuWE4F8+A", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("gSdMjyuovE6NKxHbjyoUZA:cI5O5UifsECbyWuWE4F8+A", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("Leaflet.Leaflet.LeafletMap.Event_OnMarker_Clicked$vars", [{
name: "Id",
attrName: "idInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Type",
attrName: "typeInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "ExtraData",
attrName: "extraDataInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Lat",
attrName: "latInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Decimal,
defaultValue: function () {
return OS.DataTypes.Decimal.defaultValue;
}
}, {
name: "Long",
attrName: "longInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Decimal,
defaultValue: function () {
return OS.DataTypes.Decimal.defaultValue;
}
}, {
name: "MarkerObj",
attrName: "markerObjInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
Controller.prototype._map_UpdateOptions$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Map_UpdateOptions");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("gSdMjyuovE6NKxHbjyoUZA:1hYS51xRZ0KQdLFRkprf5A:/NRWebFlows.7GbFvyUSsU6rwo_nZz42og/NodesShownInESpaceTree.m30ooB4D80elrJ5vJrw4fw/ClientActions.1hYS51xRZ0KQdLFRkprf5A:Llhi4flrHK17705IujlOOA", "Leaflet", "Map_UpdateOptions", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:1csbEYhxj0WkTPQpbNTfVQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:ACBvaE6sO0urr0RpmtFCGA", callContext.id);
// Execute Action: Map_MarkerCluster_UsingCluster_Set
LeafletController.default.map_MarkerCluster_UsingCluster_Set$Action(idService.getId("LeafletMap"), model.variables.useClusteringIn, callContext);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:XLoTXlSVFUqqHzv7f37s7g", callContext.id);
// Execute Action: Map_DefineTileUI
controller._map_DefineTileUI$Action(callContext);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:uqb71xWJHkGJB9FC3lsTBw", callContext.id);
// Execute Action: Map_DefineMarkers
controller._map_DefineMarkers$Action(callContext);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:N1VK8lXwykKgmzPfCWHIPw", callContext.id);
// Execute Action: Map_DefineGeoJSON
controller._map_DefineGeoJSON$Action(callContext);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:OVZ9eSID5E2KmviVlEF7Pg", callContext.id);
// Execute Action: Map_DefineZoomControl
controller._map_DefineZoomControl$Action(callContext);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:xD9eEk3nIEewA9IdC9HRbQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("gSdMjyuovE6NKxHbjyoUZA:1hYS51xRZ0KQdLFRkprf5A", callContext.id);
}

};
Controller.prototype._event_OnMoveEnd$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Event_OnMoveEnd");
callContext = controller.callContext(callContext);
var map_GetVisibleBoundariesVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.map_GetVisibleBoundariesVar = map_GetVisibleBoundariesVar;
OutSystemsDebugger.push("gSdMjyuovE6NKxHbjyoUZA:l3j27avHQkSOcuR0OQplFQ:/NRWebFlows.7GbFvyUSsU6rwo_nZz42og/NodesShownInESpaceTree.m30ooB4D80elrJ5vJrw4fw/ClientActions.l3j27avHQkSOcuR0OQplFQ:RYvoZt4ydtfMJDmzfrGpHw", "Leaflet", "Event_OnMoveEnd", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:UDvMM3Zap0CgJqJKVylvFA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:H2OrtH19NUiCa8t2tbve+w", callContext.id);
// Execute Action: Map_GetVisibleBoundaries
map_GetVisibleBoundariesVar.value = LeafletController.default.map_GetVisibleBoundaries$Action(idService.getId("LeafletMap"), callContext);

OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:9RH42UoFjE6tOn7t3WLU6Q", callContext.id);
// Trigger Event: OnMoveEnd
return controller.onMoveEnd$Action(map_GetVisibleBoundariesVar.value.mapVisibleBoundariesOut, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("gSdMjyuovE6NKxHbjyoUZA:PaZO5xxNn0yxcRuSqO3JeQ", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("gSdMjyuovE6NKxHbjyoUZA:l3j27avHQkSOcuR0OQplFQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("gSdMjyuovE6NKxHbjyoUZA:l3j27avHQkSOcuR0OQplFQ", callContext.id);
throw ex;

});
};

Controller.prototype.onInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

};
Controller.prototype.event_OnGeoJSON_Clicked$Action = function (idIn, typeIn, extraDataIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._event_OnGeoJSON_Clicked$Action, callContext, idIn, typeIn, extraDataIn);

};
Controller.prototype.map_DefineZoomControl$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._map_DefineZoomControl$Action, callContext);

};
Controller.prototype.map_DefineMarkers$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._map_DefineMarkers$Action, callContext);

};
Controller.prototype.map_DefineTileUI$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._map_DefineTileUI$Action, callContext);

};
Controller.prototype.map_DefineGeoJSON$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._map_DefineGeoJSON$Action, callContext);

};
Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.onParametersChanged_$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onParametersChanged_$Action, callContext);

};
Controller.prototype.event_OnZoomEnd$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._event_OnZoomEnd$Action, callContext);

};
Controller.prototype.event_OnGoToMyLocation_Clicked$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._event_OnGoToMyLocation_Clicked$Action, callContext);

};
Controller.prototype.event_OnMarker_Clicked$Action = function (idIn, typeIn, extraDataIn, latIn, longIn, markerObjIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._event_OnMarker_Clicked$Action, callContext, idIn, typeIn, extraDataIn, latIn, longIn, markerObjIn);

};
Controller.prototype.map_UpdateOptions$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._map_UpdateOptions$Action, callContext);

};
Controller.prototype.event_OnMoveEnd$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._event_OnMoveEnd$Action, callContext);

};
Controller.prototype.setCallbacks$Action = function () {
return Promise.resolve();
};
Controller.prototype.onGeoJSON_Clicked$Action = function () {
return Promise.resolve();
};
Controller.prototype.onZoomEnd$Action = function () {
return Promise.resolve();
};
Controller.prototype.onGoToMyLocation_Clicked$Action = function () {
return Promise.resolve();
};
Controller.prototype.onInitialized$Action = function () {
return Promise.resolve();
};
Controller.prototype.onMarker_Clicked$Action = function () {
return Promise.resolve();
};
Controller.prototype.onParametersChanged$Action = function () {
return Promise.resolve();
};
Controller.prototype.onMoveEnd$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("gSdMjyuovE6NKxHbjyoUZA:7GbFvyUSsU6rwo_nZz42og:/NRWebFlows.7GbFvyUSsU6rwo_nZz42og:s0JBt2ryKJ40cUOpncpy5A", "Leaflet", "Leaflet", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("gSdMjyuovE6NKxHbjyoUZA:m30ooB4D80elrJ5vJrw4fw:/NRWebFlows.7GbFvyUSsU6rwo_nZz42og/NodesShownInESpaceTree.m30ooB4D80elrJ5vJrw4fw:IzzqaZRiysKkJcam4NT5Sg", "Leaflet", "LeafletMap", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("gSdMjyuovE6NKxHbjyoUZA:m30ooB4D80elrJ5vJrw4fw", callContext.id);
OutSystemsDebugger.pop("gSdMjyuovE6NKxHbjyoUZA:7GbFvyUSsU6rwo_nZz42og", callContext.id);
};
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Leaflet/LeafletMap On Initialize");
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

OutSystemsDebugger.setThreadStartName(callContext.id, "Leaflet/LeafletMap On Ready");
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

OutSystemsDebugger.setThreadStartName(callContext.id, "Leaflet/LeafletMap On Parameters Changed");
return controller.onParametersChanged_$Action(callContext);

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
return LeafletController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, LeafletLanguageResources);
});
define("Leaflet.Leaflet.LeafletMap.mvc$controller.Map_DefineZoomControl.GetFuncJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.Object = $actions.Event_OnGoToMyLocation_Clicked;
};
});
define("Leaflet.Leaflet.LeafletMap.mvc$controller.Map_DefineMarkers.GetFuncsJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.OnClickFunction = $actions.Event_OnMarker_Clicked;
};
});
define("Leaflet.Leaflet.LeafletMap.mvc$controller.Map_DefineGeoJSON.GetFuncsJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.OnClickFunction = $actions.Event_OnGeoJSON_Clicked;
};
});
define("Leaflet.Leaflet.LeafletMap.mvc$controller.OnReady.InitializeJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var el = document.getElementById($parameters.Id);
if(el) {
    let mapOptions = JSON.parse($parameters.Options);
    let maxBounds = [[mapOptions.maxBounds.Min_Lat,mapOptions.maxBounds.Min_Long],[mapOptions.maxBounds.Max_Lat,mapOptions.maxBounds.Max_Long]];
    mapOptions.maxBounds = maxBounds;
    el[$parameters.LL_MapObject_Attr] =  L.map(el, mapOptions);
    let map = el[$parameters.LL_MapObject_Attr];
    map.setMaxBounds(maxBounds);
    map.on('zoomend', function () {
        $actions.Event_OnZoomEnd();
    });
    map.on('moveend', function () {
        $actions.Event_OnMoveEnd();
    });
}

};
});

define("Leaflet.Leaflet.LeafletMap.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"PnZ9NA0ZjUm_x+gwiQmUNA": {
getter: function (varBag, idService) {
return varBag.vars.value.idInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"2UG5IolQtU+LURMZjS+yvA": {
getter: function (varBag, idService) {
return varBag.vars.value.typeInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"qXlmdg7Q0keLuUYil63zNQ": {
getter: function (varBag, idService) {
return varBag.vars.value.extraDataInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"mCnk+uXR_kyX8U8YFfvfWQ": {
getter: function (varBag, idService) {
return varBag.getFuncJSResult.value;
}
},
"LDEj6c_fhU2Sf4dreK+yiQ": {
getter: function (varBag, idService) {
return varBag.getFuncsJSResult.value;
}
},
"34PHFqOVkkSygnE0Ux3FWw": {
getter: function (varBag, idService) {
return varBag.vars.value.tileLayer_EmptyVar;
}
},
"YTy_CtyTEkCTdBvoTU+qYg": {
getter: function (varBag, idService) {
return varBag.getFuncsJSResult.value;
}
},
"KmCLSR6tQECf023R1oJrBQ": {
getter: function (varBag, idService) {
return varBag.vars.value.hasNoCenterVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"20Qi4Ji+I0m3pAOaw13aLQ": {
getter: function (varBag, idService) {
return varBag.jSONSerialize1Var.value;
}
},
"Z6hX12qAr0qz+lRdvhjLGw": {
getter: function (varBag, idService) {
return varBag.initializeJSResult.value;
}
},
"MGdQ1o0k50CvhOFuKNMV+g": {
getter: function (varBag, idService) {
return varBag.map_Zoom_GetLevelVar.value;
}
},
"YzpacoyrGUeOhFaHJ8Y7yg": {
getter: function (varBag, idService) {
return varBag.vars.value.idInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"+PROtNfziUWmqeqksCKWKw": {
getter: function (varBag, idService) {
return varBag.vars.value.typeInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"1OGNtChSpkKwxvF4fxL2yw": {
getter: function (varBag, idService) {
return varBag.vars.value.extraDataInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"MvCeI2oe0kat6ySE0E5dIw": {
getter: function (varBag, idService) {
return varBag.vars.value.latInLocal;
},
dataType: OS.DataTypes.DataTypes.Decimal
},
"w2V2T0CpSkWBD5a0M8kV9Q": {
getter: function (varBag, idService) {
return varBag.vars.value.longInLocal;
},
dataType: OS.DataTypes.DataTypes.Decimal
},
"zrBndb7g4kKUmBV9yQFPeA": {
getter: function (varBag, idService) {
return varBag.vars.value.markerObjInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"H2OrtH19NUiCa8t2tbve+w": {
getter: function (varBag, idService) {
return varBag.map_GetVisibleBoundariesVar.value;
}
},
"ZZX5DEVDgEmaX_gaxs6bdg": {
getter: function (varBag, idService) {
return varBag.model.variables.tileLayer_LocalVar;
}
},
"mgJ5m0Toz06bSYaYFH_Znw": {
getter: function (varBag, idService) {
return varBag.model.variables.isInitializedVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"SBGtLxBl90WZdvITNiNkhg": {
getter: function (varBag, idService) {
return varBag.model.variables.mapOptionsIn;
}
},
"BcYrkaYnIEWAww4gxeBmEw": {
getter: function (varBag, idService) {
return varBag.model.variables.markersListIn;
}
},
"EcHlZakxCE+csHxxGnkBnw": {
getter: function (varBag, idService) {
return varBag.model.variables.tileLayerIn;
}
},
"hgrCh35R2kiMzWu0nB+3WA": {
getter: function (varBag, idService) {
return varBag.model.variables.geoJSON_FeaturesIn;
}
},
"5J5ucJugLEKTLSUMQwZIRA": {
getter: function (varBag, idService) {
return varBag.model.variables.zoomControlOptionsIn;
}
},
"uFy5Q_7lZEKd2UDJZSEN1A": {
getter: function (varBag, idService) {
return varBag.model.variables.useClusteringIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"1PEz8bRir0qYfJtxhB+fsg": {
getter: function (varBag, idService) {
return varBag.model.variables.centerToCurrentLocationIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"y_V93ElepUWMNmUm5zgmow": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("LeafletMap"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
