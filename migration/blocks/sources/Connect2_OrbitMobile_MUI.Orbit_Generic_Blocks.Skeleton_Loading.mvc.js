define("Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Skeleton_Loading.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model"], function (OutSystems, Connect2_OrbitMobile_MUIModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("LoadingBlocks", "loadingBlocksVar", "LoadingBlocks", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.LongIntegerList());
}, false, OS.DataTypes.LongIntegerList), 
this.attr("NumberOfBlocks", "numberOfBlocksVar", "NumberOfBlocks", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, false), 
this.attr("In_SkeletonLoadingId", "in_SkeletonLoadingIdIn", "In_SkeletonLoadingId", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, false), 
this.attr("_in_SkeletonLoadingIdInDataFetchStatus", "_in_SkeletonLoadingIdInDataFetchStatus", "_in_SkeletonLoadingIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
if("In_SkeletonLoadingId" in inputs) {
this.variables.in_SkeletonLoadingIdIn = inputs.In_SkeletonLoadingId;
if("_in_SkeletonLoadingIdInDataFetchStatus" in inputs) {
this.variables._in_SkeletonLoadingIdInDataFetchStatus = inputs._in_SkeletonLoadingIdInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Orbit_Generic_Blocks.Skeleton_Loading");
});
define("Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Skeleton_Loading.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "react", "OutSystems/ReactView/Main", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Skeleton_Loading.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Skeleton_Loading.mvc$controller", "Connect2_OrbitMobile_MUI.clientVariables", "OutSystems/ReactWidgets/Main"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, React, OSView, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Skeleton_Loading_mvc_model, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Skeleton_Loading_mvc_controller, Connect2_OrbitMobile_MUIClientVariables, OSWidgets) {
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
        View.displayName = "Orbit_Generic_Blocks.Skeleton_Loading";
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
                return Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Skeleton_Loading_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Skeleton_Loading_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), $if((model.variables.in_SkeletonLoadingIdIn === Connect2_OrbitMobile_MUIModel.staticEntities.orbitSkeletonLoading.singleItem), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-skeleton-loading-item orbit-skeleton-item-height-base",
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [];
}), $if((model.variables.in_SkeletonLoadingIdIn === Connect2_OrbitMobile_MUIModel.staticEntities.orbitSkeletonLoading.adminEventDetails), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-skeleton-loading-cont",
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-skeleton-loading-item orbit-skeleton-item-height-s",
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-skeleton-loading-item orbit-skeleton-item-height-s",
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-skeleton-loading-item orbit-skeleton-item-height-s",
visible: true,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-skeleton-loading-item orbit-skeleton-item-height-s",
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
}, function () {
return [];
}), $if(((((model.variables.in_SkeletonLoadingIdIn === Connect2_OrbitMobile_MUIModel.staticEntities.orbitSkeletonLoading.orbitLanding) || (model.variables.in_SkeletonLoadingIdIn === Connect2_OrbitMobile_MUIModel.staticEntities.orbitSkeletonLoading.transportDetail)) || (model.variables.in_SkeletonLoadingIdIn === Connect2_OrbitMobile_MUIModel.staticEntities.orbitSkeletonLoading.viewDocument)) || (model.variables.in_SkeletonLoadingIdIn === Connect2_OrbitMobile_MUIModel.staticEntities.orbitSkeletonLoading.hostSurveyHelpers)), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-skeleton-loading-cont",
visible: true,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.List, {
animateItems: true,
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.loadingBlocksVar,
style: "list list-group orbit-skeleton-loading-list",
tag: "div",
_idProps: {
service: idService,
name: "List_SkeletonLoadingSingle"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
className: model.getCachedValue(idService.getId("7+IhQGEwfUysCO0o7Ui8Kg.class"), function () {
return ("orbit-skeleton-loading-item" + (((model.variables.in_SkeletonLoadingIdIn === Connect2_OrbitMobile_MUIModel.staticEntities.orbitSkeletonLoading.orbitLanding)) ? (" orbit-skeleton-item-height-large") : ((((model.variables.in_SkeletonLoadingIdIn === Connect2_OrbitMobile_MUIModel.staticEntities.orbitSkeletonLoading.transportDetail)) ? (" orbit-skeleton-item-height-base") : ((((model.variables.in_SkeletonLoadingIdIn === Connect2_OrbitMobile_MUIModel.staticEntities.orbitSkeletonLoading.viewDocument)) ? (" orbit-skeleton-item-height-s") : (" orbit-skeleton-item-height-base")))))));
}, function () {
return model.variables.in_SkeletonLoadingIdIn;
})
},
visible: true,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, callContext, idService, "1")
},
_dependencies: [asPrimitiveValue(model.variables._in_SkeletonLoadingIdInDataFetchStatus), asPrimitiveValue(model.variables.in_SkeletonLoadingIdIn)]
}))];
}, function () {
return [];
}), $if((model.variables.in_SkeletonLoadingIdIn === Connect2_OrbitMobile_MUIModel.staticEntities.orbitSkeletonLoading.eventDetail), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-skeleton-loading-cont",
visible: true,
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-skeleton-loading-item orbit-skeleton-item-height-s",
visible: true,
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-skeleton-loading-item orbit-skeleton-item-height-s",
visible: true,
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-skeleton-loading-item orbit-skeleton-item-height-s",
visible: true,
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-skeleton-loading-item orbit-skeleton-item-height-s",
visible: true,
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-skeleton-loading-item orbit-skeleton-item-height-m",
visible: true,
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.List, {
animateItems: true,
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.loadingBlocksVar,
style: "list list-group orbit-skeleton-loading-list",
tag: "div",
_idProps: {
service: idService,
name: "List_SkeletonLoadingEventDetail"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-skeleton-loading-item orbit-skeleton-item-height-large",
visible: true,
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, callContext, idService, "2")
},
_dependencies: []
}))];
}, function () {
return [];
}), $if((model.variables.in_SkeletonLoadingIdIn === Connect2_OrbitMobile_MUIModel.staticEntities.orbitSkeletonLoading.milestoneDetailGuest), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-skeleton-loading-cont",
visible: true,
_idProps: {
service: idService,
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-skeleton-loading-item orbit-skeleton-item-height-s",
visible: true,
_idProps: {
service: idService,
uuid: "18"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-skeleton-loading-item orbit-skeleton-item-height-large",
visible: true,
_idProps: {
service: idService,
uuid: "19"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-skeleton-loading-item orbit-skeleton-item-height-m",
visible: true,
_idProps: {
service: idService,
uuid: "20"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-skeleton-loading-item-row",
visible: true,
_idProps: {
service: idService,
uuid: "21"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-skeleton-loading-item orbit-skeleton-item-height-base",
visible: true,
_idProps: {
service: idService,
uuid: "22"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-skeleton-loading-item orbit-skeleton-item-height-base",
visible: true,
_idProps: {
service: idService,
uuid: "23"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.List, {
animateItems: true,
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.loadingBlocksVar,
style: "list list-group orbit-skeleton-loading-list",
tag: "div",
_idProps: {
service: idService,
name: "List_SkeletonLoadingMilestoneDetail"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-skeleton-loading-item orbit-skeleton-item-height-base",
visible: true,
_idProps: {
service: idService,
uuid: "25"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, callContext, idService, "3")
},
_dependencies: []
}))];
}, function () {
return [];
}), $if((model.variables.in_SkeletonLoadingIdIn === Connect2_OrbitMobile_MUIModel.staticEntities.orbitSkeletonLoading.milestoneDetailHost), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-skeleton-loading-cont",
visible: true,
_idProps: {
service: idService,
uuid: "26"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-skeleton-loading-item orbit-skeleton-item-height-s",
visible: true,
_idProps: {
service: idService,
uuid: "27"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-skeleton-loading-item orbit-skeleton-item-height-s",
visible: true,
_idProps: {
service: idService,
uuid: "28"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-skeleton-loading-item orbit-skeleton-loading-item-no-border orbit-skeleton-loading-item-margin-s orbit-skeleton-item-height-sm",
visible: true,
_idProps: {
service: idService,
uuid: "29"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-skeleton-loading-item orbit-skeleton-loading-item-no-border orbit-skeleton-loading-item-margin-s orbit-skeleton-item-height-sm",
visible: true,
_idProps: {
service: idService,
uuid: "30"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-skeleton-loading-item orbit-skeleton-loading-item-no-border orbit-skeleton-loading-item-margin-s orbit-skeleton-item-height-sm",
visible: true,
_idProps: {
service: idService,
uuid: "31"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [];
}), $if((model.variables.in_SkeletonLoadingIdIn === Connect2_OrbitMobile_MUIModel.staticEntities.orbitSkeletonLoading.memberQRCode), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-skeleton-loading-cont",
visible: true,
_idProps: {
service: idService,
uuid: "32"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-skeleton-loading-item orbit-skeleton-item-height-m",
visible: true,
_idProps: {
service: idService,
uuid: "33"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-skeleton-loading-item orbit-skeleton-item-height-s",
visible: true,
_idProps: {
service: idService,
uuid: "34"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-skeleton-loading-item orbit-skeleton-item-height-s",
visible: true,
_idProps: {
service: idService,
uuid: "35"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-skeleton-loading-item orbit-skeleton-item-height-large",
visible: true,
_idProps: {
service: idService,
uuid: "36"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
}, function () {
return [];
}), $if((model.variables.in_SkeletonLoadingIdIn === Connect2_OrbitMobile_MUIModel.staticEntities.orbitSkeletonLoading.hostSurvey), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-skeleton-loading-cont",
visible: true,
_idProps: {
service: idService,
uuid: "37"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-skeleton-loading-item orbit-skeleton-item-height-large",
visible: true,
_idProps: {
service: idService,
uuid: "38"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.List, {
animateItems: true,
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.loadingBlocksVar,
style: "list list-group orbit-skeleton-loading-list",
tag: "div",
_idProps: {
service: idService,
name: "List_SkeletonLoadingDouble"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-skeleton-loading-item orbit-skeleton-item-height-m",
visible: true,
_idProps: {
service: idService,
uuid: "40"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, callContext, idService, "4")
},
_dependencies: []
}))];
}, function () {
return [];
}), $if((model.variables.in_SkeletonLoadingIdIn === Connect2_OrbitMobile_MUIModel.staticEntities.orbitSkeletonLoading.milestoneWrapper), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-skeleton-loading-header",
visible: true,
_idProps: {
service: idService,
uuid: "41"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [];
}), $if((model.variables.in_SkeletonLoadingIdIn === Connect2_OrbitMobile_MUIModel.staticEntities.orbitSkeletonLoading.eventBooklet), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-skeleton-loading-cont",
visible: true,
_idProps: {
service: idService,
uuid: "42"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-skeleton-loading-list-item",
visible: true,
_idProps: {
service: idService,
uuid: "43"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "width: 36vw;"
},
style: "orbit-skeleton-loading-item orbit-skeleton-item-height-s-medium orbit-skeleton-loading-item-no-margin",
visible: true,
_idProps: {
service: idService,
uuid: "44"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "full-width margin-top-xs display-flex flex-direction-row align-items-center justify-content-space-between",
visible: true,
_idProps: {
service: idService,
uuid: "45"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "width: 45%"
},
style: "orbit-skeleton-loading-item orbit-skeleton-item-height-s-large orbit-skeleton-loading-item-no-margin",
visible: true,
_idProps: {
service: idService,
uuid: "46"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "width: 12.5%"
},
style: "orbit-skeleton-loading-item orbit-skeleton-item-height-s-large orbit-skeleton-loading-item-no-margin",
visible: true,
_idProps: {
service: idService,
uuid: "47"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "width: 40%"
},
style: "orbit-skeleton-loading-item orbit-skeleton-item-height-s-large orbit-skeleton-loading-item-no-margin",
visible: true,
_idProps: {
service: idService,
uuid: "48"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-skeleton-loading-list-item opacity-0-75 margin-top-m",
visible: true,
_idProps: {
service: idService,
uuid: "49"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "width: 36vw;"
},
style: "orbit-skeleton-loading-item orbit-skeleton-item-height-s-medium orbit-skeleton-loading-item-no-margin",
visible: true,
_idProps: {
service: idService,
uuid: "50"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "full-width margin-top-xs display-flex flex-direction-row align-items-center justify-content-space-between",
visible: true,
_idProps: {
service: idService,
uuid: "51"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "width: 45%"
},
style: "orbit-skeleton-loading-item orbit-skeleton-item-height-s-large orbit-skeleton-loading-item-no-margin",
visible: true,
_idProps: {
service: idService,
uuid: "52"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "width: 12.5%"
},
style: "orbit-skeleton-loading-item orbit-skeleton-item-height-s-large orbit-skeleton-loading-item-no-margin",
visible: true,
_idProps: {
service: idService,
uuid: "53"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "width: 40%"
},
style: "orbit-skeleton-loading-item orbit-skeleton-item-height-s-large orbit-skeleton-loading-item-no-margin",
visible: true,
_idProps: {
service: idService,
uuid: "54"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-skeleton-loading-list-item opacity-0-5 margin-top-m",
visible: true,
_idProps: {
service: idService,
uuid: "55"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "width: 36vw;"
},
style: "orbit-skeleton-loading-item orbit-skeleton-item-height-s-medium orbit-skeleton-loading-item-no-margin",
visible: true,
_idProps: {
service: idService,
uuid: "56"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "full-width margin-top-xs display-flex flex-direction-row align-items-center justify-content-space-between",
visible: true,
_idProps: {
service: idService,
uuid: "57"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "width: 45%"
},
style: "orbit-skeleton-loading-item orbit-skeleton-item-height-s-large orbit-skeleton-loading-item-no-margin",
visible: true,
_idProps: {
service: idService,
uuid: "58"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "width: 12.5%"
},
style: "orbit-skeleton-loading-item orbit-skeleton-item-height-s-large orbit-skeleton-loading-item-no-margin",
visible: true,
_idProps: {
service: idService,
uuid: "59"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "width: 40%"
},
style: "orbit-skeleton-loading-item orbit-skeleton-item-height-s-large orbit-skeleton-loading-item-no-margin",
visible: true,
_idProps: {
service: idService,
uuid: "60"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-skeleton-loading-list-item opacity-0-25 margin-top-m",
visible: true,
_idProps: {
service: idService,
uuid: "61"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "width: 36vw;"
},
style: "orbit-skeleton-loading-item orbit-skeleton-item-height-s-medium orbit-skeleton-loading-item-no-margin",
visible: true,
_idProps: {
service: idService,
uuid: "62"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "full-width margin-top-xs display-flex flex-direction-row align-items-center justify-content-space-between",
visible: true,
_idProps: {
service: idService,
uuid: "63"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "width: 45%"
},
style: "orbit-skeleton-loading-item orbit-skeleton-item-height-s-large orbit-skeleton-loading-item-no-margin",
visible: true,
_idProps: {
service: idService,
uuid: "64"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "width: 12.5%"
},
style: "orbit-skeleton-loading-item orbit-skeleton-item-height-s-large orbit-skeleton-loading-item-no-margin",
visible: true,
_idProps: {
service: idService,
uuid: "65"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "width: 40%"
},
style: "orbit-skeleton-loading-item orbit-skeleton-item-height-s-large orbit-skeleton-loading-item-no-margin",
visible: true,
_idProps: {
service: idService,
uuid: "66"
},
_widgetRecordProvider: widgetsRecordProvider
}))))];
}, function () {
return [];
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Skeleton_Loading.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_MUI.languageResources", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Skeleton_Loading.mvc$debugger"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_MUILanguageResources, Connect2_OrbitMobile_MUIClientVariables, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Skeleton_Loading_mvc_Debugger) {
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
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:xLJjDwBZ90W+mIuiAhTO0g:/NRWebFlows.2QjgT4U4pUyWrkx7l+Yj_Q/NodesShownInESpaceTree.MD0qJnEWN0awL3WvztRCnw/ClientActions.xLJjDwBZ90W+mIuiAhTO0g:56nYhxV31orDLOLomq5j0w", "Connect2_OrbitMobile_MUI", "OnParametersChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:jDyAHTkaRU+XARFVp4tOzA", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:gP8NxPtxhUK7+fMrVRUq6g", callContext.id);
// Execute Action: ListClear
OS.SystemActions.listClear(model.variables.loadingBlocksVar, callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:o_U4xlJBBUyEQ+0IFPrSKA", callContext.id);
// Execute Action: OnInitialize
controller._onInitialize$Action(callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:yGiMGCstnki7UBi9hBWmxg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:xLJjDwBZ90W+mIuiAhTO0g", callContext.id);
}

};
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
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:fp+NyYRTAkeclLkXO4z23A:/NRWebFlows.2QjgT4U4pUyWrkx7l+Yj_Q/NodesShownInESpaceTree.MD0qJnEWN0awL3WvztRCnw/ClientActions.fp+NyYRTAkeclLkXO4z23A:fJqwZUnP1c2gE9jU3SGShA", "Connect2_OrbitMobile_MUI", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:9HHFm6niQk+M7b70CL6dcg", callContext.id);
// SkeletonLoadingId
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:QXdMD+TpVEyRHq3SucjI0w", callContext.id) && (model.variables.in_SkeletonLoadingIdIn === Connect2_OrbitMobile_MUIModel.staticEntities.orbitSkeletonLoading.orbitLanding))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:wFdzMF7d5U+7hvmZmX+GAw", callContext.id);
// NumberOfBlocks = 6
model.variables.numberOfBlocksVar = 6;
} else {
if((model.variables.in_SkeletonLoadingIdIn === Connect2_OrbitMobile_MUIModel.staticEntities.orbitSkeletonLoading.transportDetail)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:u5f_o7lbr0OJcSFIowHA9Q", callContext.id);
// NumberOfBlocks = 15
model.variables.numberOfBlocksVar = 15;
} else {
if((model.variables.in_SkeletonLoadingIdIn === Connect2_OrbitMobile_MUIModel.staticEntities.orbitSkeletonLoading.eventDetail)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:zYIkoN5sUUiQwnWqankq+w", callContext.id);
// NumberOfBlocks = 4
model.variables.numberOfBlocksVar = 4;
} else {
if((model.variables.in_SkeletonLoadingIdIn === Connect2_OrbitMobile_MUIModel.staticEntities.orbitSkeletonLoading.milestoneDetailGuest)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:s9+NaYTrzkao2sLNITjUtQ", callContext.id);
// NumberOfBlocks = 12
model.variables.numberOfBlocksVar = 12;
} else {
if((model.variables.in_SkeletonLoadingIdIn === Connect2_OrbitMobile_MUIModel.staticEntities.orbitSkeletonLoading.viewDocument)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:WYTJT_fGqUmzNdy0RV2bFA", callContext.id);
// NumberOfBlocks = 25
model.variables.numberOfBlocksVar = 25;
} else {
if((model.variables.in_SkeletonLoadingIdIn === Connect2_OrbitMobile_MUIModel.staticEntities.orbitSkeletonLoading.hostSurvey)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:n4Qzi9kZBUKGymjQWjV0vQ", callContext.id);
// NumberOfBlocks = 6
model.variables.numberOfBlocksVar = 6;
} else {
if((model.variables.in_SkeletonLoadingIdIn === Connect2_OrbitMobile_MUIModel.staticEntities.orbitSkeletonLoading.hostSurveyHelpers)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Fx2oBz5qvUOX5PY29LWDoA", callContext.id);
// NumberOfBlocks = 15
model.variables.numberOfBlocksVar = 15;
} else {
if((model.variables.in_SkeletonLoadingIdIn === Connect2_OrbitMobile_MUIModel.staticEntities.orbitSkeletonLoading.milestoneWrapper)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:XH8BR2_WGUaISTGUwDvaKg", callContext.id);
// NumberOfBlocks = 0
model.variables.numberOfBlocksVar = 0;
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:s8NsfaxhVUmXZwpPF3+ZpQ", callContext.id);
return ;

}

}

}

}

}

}

}

}

// Needs populating?
while ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:FnpEV7Lsek61MmVYh4bb4Q", callContext.id) && (model.variables.loadingBlocksVar.length < model.variables.numberOfBlocksVar))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:sj5WWUsQH0usfrVttpA+2A", callContext.id);
// Execute Action: ListAppend_SkeletonBlock
OS.SystemActions.listAppend(model.variables.loadingBlocksVar, OS.BuiltinFunctions.integerToLongInteger(1), callContext);
}

OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:HQHj7n2Z8kqnlqBEpCBG4Q", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:fp+NyYRTAkeclLkXO4z23A", callContext.id);
}

};

Controller.prototype.onParametersChanged$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);

};
Controller.prototype.onInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:2QjgT4U4pUyWrkx7l+Yj_Q:/NRWebFlows.2QjgT4U4pUyWrkx7l+Yj_Q:Zci6jLKRkxspqDpkWiLQxw", "Connect2_OrbitMobile_MUI", "Orbit_Generic_Blocks", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:MD0qJnEWN0awL3WvztRCnw:/NRWebFlows.2QjgT4U4pUyWrkx7l+Yj_Q/NodesShownInESpaceTree.MD0qJnEWN0awL3WvztRCnw:_tkPaxkx3Pah4tQcWzcskQ", "Connect2_OrbitMobile_MUI", "Skeleton_Loading", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:MD0qJnEWN0awL3WvztRCnw", callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:2QjgT4U4pUyWrkx7l+Yj_Q", callContext.id);
};
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_Generic_Blocks/Skeleton_Loading On Initialize");
return controller.onInitialize$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onReadyEventHandler = null;
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = null;
Controller.prototype.onParametersChangedEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_Generic_Blocks/Skeleton_Loading On Parameters Changed");
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
return Connect2_OrbitMobile_MUIController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, Connect2_OrbitMobile_MUILanguageResources);
});

define("Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Skeleton_Loading.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"EYBjun4O+kWVNqiUj9zWpA": {
getter: function (varBag, idService) {
return varBag.model.variables.loadingBlocksVar;
}
},
"fpDVIgN_jkeZlVvH4wmCOw": {
getter: function (varBag, idService) {
return varBag.model.variables.numberOfBlocksVar;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"m5hcfC1y7kGQtmB5jpgbcg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_SkeletonLoadingIdIn;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"RM3zfZ4uX0uqKYb+arTQIQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_SingleItem"));
})(varBag.model, idService);
}
},
"vmXDC1VLDEG5R6rTys17CQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_AdminEventDetail"));
})(varBag.model, idService);
}
},
"yZHRNZg1rkuJlYe3BAZeNg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_SingleList"));
})(varBag.model, idService);
}
},
"SDcoZz5DDkO0nZ6pcEFDjw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("List_SkeletonLoadingSingle"));
})(varBag.model, idService);
}
},
"3eDgWVIOUEu3mEC7lHue2A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_IsEventDetail"));
})(varBag.model, idService);
}
},
"zsqqdzXvRUK6HjiOL6W2iw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("List_SkeletonLoadingEventDetail"));
})(varBag.model, idService);
}
},
"cZiwyOsYiU6TFoBWoNMtJg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_IsMilestoneDetailGuest"));
})(varBag.model, idService);
}
},
"JFr3iJI+aUmRFWN8HY05yw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("List_SkeletonLoadingMilestoneDetail"));
})(varBag.model, idService);
}
},
"euLlpJM+PUWYV0x+cOu+ww": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_IsMilestoneDetailHost"));
})(varBag.model, idService);
}
},
"OwGPeDqOsUGq+lIMmVfU7A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_MemberQRCode"));
})(varBag.model, idService);
}
},
"G6dS4ZnpQ0SDoo5+vvheFw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_HostSurvey"));
})(varBag.model, idService);
}
},
"lwRo0YW9SkiUydzdlDMvnQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("List_SkeletonLoadingDouble"));
})(varBag.model, idService);
}
},
"o4tuX8xJPEGjVH+SC60x3g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_MilestoneWrapper"));
})(varBag.model, idService);
}
},
"ZBYfdcdMzE2qzuIkkxhTyA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_EventBooklet"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
