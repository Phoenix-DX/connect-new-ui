define("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostAllocation_HelperItem.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.entities", "Connect2_OrbitMobile_MUI.model$LocalOrbitMilestoneTypeRecordList", "Connect2_OrbitMobile_MUI.model$LocalOrbitMilestoneTypeRec"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIEntities) {
var OS = OutSystems.Internal;
var GetLocalOrbitMilestoneTypeHelperAggrRec = (function (_super) {
__extends(GetLocalOrbitMilestoneTypeHelperAggrRec, _super);
function GetLocalOrbitMilestoneTypeHelperAggrRec(defaults) {
_super.apply(this, arguments);
}
GetLocalOrbitMilestoneTypeHelperAggrRec.RecordListType = Connect2_OrbitMobile_MUIModel.LocalOrbitMilestoneTypeRecordList;
GetLocalOrbitMilestoneTypeHelperAggrRec.init();
return GetLocalOrbitMilestoneTypeHelperAggrRec;
})(OS.Model.AggregateRecord);


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("ItemName", "itemNameVar", "ItemName", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("GetLocalOrbitMilestoneTypeHelper", "getLocalOrbitMilestoneTypeHelperAggr", "getLocalOrbitMilestoneTypeHelperAggr", true, true, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new GetLocalOrbitMilestoneTypeHelperAggrRec());
}, true, GetLocalOrbitMilestoneTypeHelperAggrRec)
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
};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Orbit_Blocks.HostAllocation_HelperItem");
});
define("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostAllocation_HelperItem.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_MUI.entities", "react", "OutSystems/ReactView/Main", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostAllocation_HelperItem.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostAllocation_HelperItem.mvc$controller", "Connect2_OrbitMobile_MUI.clientVariables", "OutSystems/ReactWidgets/Main", "Connect2_OrbitMobile_MUI.model$LocalOrbitMilestoneTypeRecordList", "Connect2_OrbitMobile_MUI.model$LocalOrbitMilestoneTypeRec"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_MUIEntities, React, OSView, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostAllocation_HelperItem_mvc_model, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostAllocation_HelperItem_mvc_controller, Connect2_OrbitMobile_MUIClientVariables, OSWidgets) {
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
        View.displayName = "Orbit_Blocks.HostAllocation_HelperItem";
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
                return Connect2_OrbitMobile_MUI_Orbit_Blocks_HostAllocation_HelperItem_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Connect2_OrbitMobile_MUI_Orbit_Blocks_HostAllocation_HelperItem_mvc_controller;
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
style: "host-allocation-list-item",
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "host-allocation-list-item-left",
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
extendedProperties: {
className: ("icon " + model.variables.getLocalOrbitMilestoneTypeHelperAggr.listOut.getCurrent(callContext.iterationContext).localOrbitMilestoneTypeAttr.mainIconAttr)
},
icon: "flag",
iconSize: /*FontSize*/ 0,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
style: "margin-left-base",
value: model.variables.itemNameVar,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/HostAllocation_HelperItem/Container onclick");
controller.onClick_ViewHelpers$Action(model.variables.itemNameVar, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
style: "host-allocation-list-item-right",
visible: true,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "View",
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}))));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostAllocation_HelperItem.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_MUI.entities", "Connect2_OrbitMobile_MUI.languageResources", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostAllocation_HelperItem.mvc$debugger", "Connect2_OrbitMobile_MUI.model$LocalOrbitMilestoneTypeRecordList", "Connect2_OrbitMobile_MUI.model$LocalOrbitMilestoneTypeRec"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_MUIEntities, Connect2_OrbitMobile_MUILanguageResources, Connect2_OrbitMobile_MUIClientVariables, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostAllocation_HelperItem_mvc_Debugger) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {};
this.dataFetchDependenciesOriginal = {
getLocalOrbitMilestoneTypeHelper$AggrRefresh: 0
};
this.dataFetchDependentsGraph = {
getLocalOrbitMilestoneTypeHelper$AggrRefresh: []
};
this.shouldSendClientVarsToDataSources = false;
}
// Server Actions

// Aggregates and Data Actions
Controller.prototype.getLocalOrbitMilestoneTypeHelper$AggrRefresh = function (maxRecords) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext();

var executeQuery = null;
if(OS.NativeHelper.isRunningOnNative()) {
executeQuery = function () {
var targetListType = Connect2_OrbitMobile_MUIModel.LocalOrbitMilestoneTypeRecordList;
var result = {
list: null,
count: OS.DataTypes.LongInteger.defaultValue
};
var countArgsList = new OS.Entities.QueryArgumentsList();
if(!(maxRecords)) {
maxRecords = 1;
}


var optimizeSelect = false;
var selectSql = "";
var fromAndWhereSql = "";
var groupByAndHavingSql = "";
var orderBySql = "";
var argsList = new OS.Entities.QueryArgumentsList();

selectSql += "SELECT ";
if (optimizeSelect) {
selectSql += "NULL o0, NULL o1, NULL o2, NULL o3, NULL o4, \"ENLocalOrbitMilestoneType\".\"MainIcon\" o5, NULL o6, NULL o7, NULL o8, NULL o9, NULL o10, NULL o11";
} else {
selectSql += "\"ENLocalOrbitMilestoneType\".\"Id\" o0, \"ENLocalOrbitMilestoneType\".\"Order\" o1, \"ENLocalOrbitMilestoneType\".\"Type\" o2, \"ENLocalOrbitMilestoneType\".\"Name\" o3, \"ENLocalOrbitMilestoneType\".\"MainColorVar\" o4, \"ENLocalOrbitMilestoneType\".\"MainIcon\" o5, \"ENLocalOrbitMilestoneType\".\"CanHost\" o6, \"ENLocalOrbitMilestoneType\".\"IsTransportMilestone\" o7, \"ENLocalOrbitMilestoneType\".\"IconTransportDeparture\" o8, \"ENLocalOrbitMilestoneType\".\"IconTransportArrival\" o9, \"ENLocalOrbitMilestoneType\".\"TransportHeaderClass\" o10, \"ENLocalOrbitMilestoneType\".\"TravelInfoHeader\" o11";
}
fromAndWhereSql += " FROM \"MAIN\".\"OSUSR_hq9_LocalOrbitMilestoneType\" \"ENLocalOrbitMilestoneType\"";
fromAndWhereSql += " WHERE (\"ENLocalOrbitMilestoneType\".\"Id\" = ";
fromAndWhereSql += ("\'" + (Connect2_OrbitMobile_MUIModel.staticEntities.orbitMilestoneType.helper.replace(/'/g, "\'\'") + "\'"));
fromAndWhereSql += ")";
if (maxRecords > 0) {
orderBySql += " LIMIT ";
orderBySql += maxRecords;
}
var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;

return OS.Entities.webSQLStorageInstance.executeQuery(sql, Connect2_OrbitMobile_MUIModel.LocalOrbitMilestoneTypeRecordList, function (rec, r) {
var indexRef = {
value: 0
};
var attrOrder = [
"localOrbitMilestoneTypeAttr",
];
return OS.DataConversion.LocalStorageConverter.from(r, targetListType.getItemType(), indexRef, attrOrder);

}, argsList).then(function (resultList) {
result.list = resultList;
}).then(function () {
}).then(function () {
return result;
});
};
} else {
executeQuery = function () {
if(!(maxRecords)) {
maxRecords = 1;
}

return new Promise(function (resolve, reject) {
require(["Connect2_OrbitMobile_MUI.aggregates.IDB"], function (Connect2_OrbitMobile_MUIAggregates_IDB) {
return Connect2_OrbitMobile_MUIAggregates_IDB.executeOrbit_Blocks_HostAllocation_HelperItem$Block$getLocalOrbitMilestoneTypeHelperAggr(maxRecords).then(function (result) {
resolve(result);
}).catch(function (e) {
reject(e);
});
});
});
};
}

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:WRLYwju2zUuo+TrVuWg4ww:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.78t8hdwZYkKGItTUslj8TQ/ScreenDataSets.WRLYwju2zUuo+TrVuWg4ww:0t_MfLqNjKnJi3x+mpOcLg", "Connect2_OrbitMobile_MUI", "GetLocalOrbitMilestoneTypeHelper", "NRNodes.WebScreenDataSet", callContext.id, varBag);
OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_Blocks/HostAllocation_HelperItem/GetLocalOrbitMilestoneTypeHelper");
return controller.executeScreenClientAggregate(executeQuery, function () {
return model.variables.getLocalOrbitMilestoneTypeHelperAggr;
}, function () {
});

}, function () {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:WRLYwju2zUuo+TrVuWg4ww", callContext.id);
controller.popDebuggerContext(callContext);

});
};

Controller.prototype.dataFetchActionNames = ["getLocalOrbitMilestoneTypeHelper$AggrRefresh"];
// Client Actions
Controller.prototype._onReady$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnReady");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:HQMTQyEgfkKSqq8BFpPSEA:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.78t8hdwZYkKGItTUslj8TQ/ClientActions.HQMTQyEgfkKSqq8BFpPSEA:IFwbiNtTxKZ+XMZ2z5cujw", "Connect2_OrbitMobile_MUI", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:bG3_zBrkDkKTBLE4MnrsbA", callContext.id);
// Set ItemName
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:GfZwgqpucEaq1s7Dmorosg", callContext.id);
// ItemName = "Helper"
model.variables.itemNameVar = "Helper";
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:AHKCmU10e0+XcAGUD+KXkQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:HQMTQyEgfkKSqq8BFpPSEA", callContext.id);
}

};

Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.onClick_ViewHelpers$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:Qj0wv+k4akW2_YHY41VrPQ:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ:tepBwzTPFZZUt4uwi04GJA", "Connect2_OrbitMobile_MUI", "Orbit_Blocks", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:78t8hdwZYkKGItTUslj8TQ:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.78t8hdwZYkKGItTUslj8TQ:l_AJaQ7iVFfn9M5Fjhs7Cg", "Connect2_OrbitMobile_MUI", "HostAllocation_HelperItem", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:78t8hdwZYkKGItTUslj8TQ", callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:Qj0wv+k4akW2_YHY41VrPQ", callContext.id);
};
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_Blocks/HostAllocation_HelperItem On Ready");
return controller.onReady$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = null;
Controller.prototype.onParametersChangedEventHandler = null;
Controller.prototype.handleError = function (ex) {
return controller.handleError(ex);
};
Controller.checkPermissions = function () {
};
Controller.prototype.getDefaultTimeout = function () {
return Connect2_OrbitMobile_MUIController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, Connect2_OrbitMobile_MUILanguageResources);
});

define("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostAllocation_HelperItem.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"aI6iGVBK2kmDuByTIg2Udg": {
getter: function (varBag, idService) {
return varBag.model.variables.itemNameVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"WRLYwju2zUuo+TrVuWg4ww": {
getter: function (varBag, idService) {
return varBag.model.variables.getLocalOrbitMilestoneTypeHelperAggr;
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
