define("Connect2_MyBookmarks_MUI.MyBookmarksFlow.NoBookmarks.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_LegacyShared.Reusable.ConnectBlankSlate.mvc$model"], function (OutSystems, Connect2_MyBookmarks_MUIModel, Connect2_LegacyShared_Reusable_ConnectBlankSlate_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("IsToDisplay", "isToDisplayIn", "IsToDisplay", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_isToDisplayInDataFetchStatus", "_isToDisplayInDataFetchStatus", "_isToDisplayInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = Connect2_LegacyShared_Reusable_ConnectBlankSlate_mvcModel.hasValidationWidgets;
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("IsToDisplay" in inputs) {
this.variables.isToDisplayIn = inputs.IsToDisplay;
if("_isToDisplayInDataFetchStatus" in inputs) {
this.variables._isToDisplayInDataFetchStatus = inputs._isToDisplayInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "MyBookmarksFlow.NoBookmarks");
});
define("Connect2_MyBookmarks_MUI.MyBookmarksFlow.NoBookmarks.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.controller", "react", "OutSystems/ReactView/Main", "Connect2_MyBookmarks_MUI.MyBookmarksFlow.NoBookmarks.mvc$model", "Connect2_MyBookmarks_MUI.MyBookmarksFlow.NoBookmarks.mvc$controller", "Connect2_LegacyShared.Reusable.ConnectBlankSlate.mvc$view", "OutSystems/ReactWidgets/Main"], function (OutSystems, Connect2_MyBookmarks_MUIModel, Connect2_MyBookmarks_MUIController, React, OSView, Connect2_MyBookmarks_MUI_MyBookmarksFlow_NoBookmarks_mvc_model, Connect2_MyBookmarks_MUI_MyBookmarksFlow_NoBookmarks_mvc_controller, Connect2_LegacyShared_Reusable_ConnectBlankSlate_mvc_view, OSWidgets) {
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
        View.displayName = "MyBookmarksFlow.NoBookmarks";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [Connect2_LegacyShared_Reusable_ConnectBlankSlate_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return Connect2_MyBookmarks_MUI_MyBookmarksFlow_NoBookmarks_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Connect2_MyBookmarks_MUI_MyBookmarksFlow_NoBookmarks_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), $if(model.variables.isToDisplayIn, false, this, function () {
return [React.createElement(Connect2_LegacyShared_Reusable_ConnectBlankSlate_mvc_view, {
inputs: {},
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
image: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Image, {
gridProperties: {
classes: "OSFillParent"
},
image: OS.Navigation.VersionedURL.getVersionedUrl("img/Connect2_LegacyShared.bookmark_unavailable_icon.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
title: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.titlePlaceholder,
_idProps: {
service: idService,
name: "TitlePlaceholder"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
subtitle: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.textPlaceholder,
_idProps: {
service: idService,
name: "TextPlaceholder"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})
}
})];
}, function () {
return [];
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("Connect2_MyBookmarks_MUI.MyBookmarksFlow.NoBookmarks.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.controller", "Connect2_MyBookmarks_MUI.languageResources", "Connect2_MyBookmarks_MUI.MyBookmarksFlow.NoBookmarks.mvc$debugger"], function (OutSystems, Connect2_MyBookmarks_MUIModel, Connect2_MyBookmarks_MUIController, Connect2_MyBookmarks_MUILanguageResources, Connect2_MyBookmarks_MUI_MyBookmarksFlow_NoBookmarks_mvc_Debugger) {
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


// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("UunlNQ2jyEq6yy9zIw6bHA:CBvOGFy8j0+xPUeAWREtQw:/NRWebFlows.CBvOGFy8j0+xPUeAWREtQw:9WxoUPdIIKPcyGMtXvfZqg", "Connect2_MyBookmarks_MUI", "MyBookmarksFlow", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("UunlNQ2jyEq6yy9zIw6bHA:0DObukzjN0ahPNDcLvgr1A:/NRWebFlows.CBvOGFy8j0+xPUeAWREtQw/NodesShownInESpaceTree.0DObukzjN0ahPNDcLvgr1A:wttdcrZyTVxi2wmTyggMbw", "Connect2_MyBookmarks_MUI", "NoBookmarks", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("UunlNQ2jyEq6yy9zIw6bHA:0DObukzjN0ahPNDcLvgr1A", callContext.id);
OutSystemsDebugger.pop("UunlNQ2jyEq6yy9zIw6bHA:CBvOGFy8j0+xPUeAWREtQw", callContext.id);
};
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = null;
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = null;
Controller.prototype.onParametersChangedEventHandler = null;
Controller.prototype.handleError = function (ex) {
return controller.handleError(ex);
};
Controller.checkPermissions = function () {
};
Controller.prototype.getDefaultTimeout = function () {
return Connect2_MyBookmarks_MUIController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, Connect2_MyBookmarks_MUILanguageResources);
});

define("Connect2_MyBookmarks_MUI.MyBookmarksFlow.NoBookmarks.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"TDkiuda13k6lWrKrcJrVig": {
getter: function (varBag, idService) {
return varBag.model.variables.isToDisplayIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"9lcsuRSH5UWhrffZyXJOZA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("IsToDisplayNoResults"));
})(varBag.model, idService);
}
},
"s9y10Ho_hUaDxWeNbZnd5A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Image"));
})(varBag.model, idService);
}
},
"LmNzsqEyG02sY0FVn9Zkfg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Title"));
})(varBag.model, idService);
}
},
"pWu749vyeUOvdgcJI2HTqA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("TitlePlaceholder"));
})(varBag.model, idService);
}
},
"_37mEkt6B0uUY8w1Kypf1A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Subtitle"));
})(varBag.model, idService);
}
},
"EwnEye6R5ku0BaPbQjFlEw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("TextPlaceholder"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
