define("UBTConnect.zDEV_Directory_CommunityBusinessBlocks.CommunityBusinessDetails_CoomingSoon.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnectLibrary.Layouts.Layout_MainPages.mvc$model", "UBTConnectLibrary.ConnectPatterns.StaticInput.mvc$model", "OutSystemsUI_2_23.Content.BlankSlate.mvc$model"], function (OutSystems, UBTConnectModel, UBTConnectLibrary_Layouts_Layout_MainPages_mvcModel, UBTConnectLibrary_ConnectPatterns_StaticInput_mvcModel, OutSystemsUI_2_23_Content_BlankSlate_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("In_CommunityBusinessId", "in_CommunityBusinessIdIn", "In_CommunityBusinessId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, false), 
this.attr("_in_CommunityBusinessIdInDataFetchStatus", "_in_CommunityBusinessIdInDataFetchStatus", "_in_CommunityBusinessIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = ((UBTConnectLibrary_Layouts_Layout_MainPages_mvcModel.hasValidationWidgets || UBTConnectLibrary_ConnectPatterns_StaticInput_mvcModel.hasValidationWidgets) || OutSystemsUI_2_23_Content_BlankSlate_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("In_CommunityBusinessId" in inputs) {
this.variables.in_CommunityBusinessIdIn = OS.DataConversion.ServerDataConverter.from(inputs.In_CommunityBusinessId, OS.DataTypes.DataTypes.LongInteger);
}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "zDEV_Directory_CommunityBusinessBlocks.CommunityBusinessDetails_CoomingSoon");
});
define("UBTConnect.zDEV_Directory_CommunityBusinessBlocks.CommunityBusinessDetails_CoomingSoon.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.zDEV_Directory_CommunityBusinessBlocks.CommunityBusinessDetails_CoomingSoon.mvc$model", "UBTConnect.zDEV_Directory_CommunityBusinessBlocks.CommunityBusinessDetails_CoomingSoon.mvc$controller", "UBTConnect.clientVariables", "UBTConnectLibrary.Layouts.Layout_MainPages.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.ConnectPatterns.StaticInput.mvc$view", "OutSystemsUI_2_23.Content.BlankSlate.mvc$view"], function (OutSystems, UBTConnectModel, UBTConnectController, React, OSView, UBTConnect_zDEV_Directory_CommunityBusinessBlocks_CommunityBusinessDetails_CoomingSoon_mvc_model, UBTConnect_zDEV_Directory_CommunityBusinessBlocks_CommunityBusinessDetails_CoomingSoon_mvc_controller, UBTConnectClientVariables, UBTConnectLibrary_Layouts_Layout_MainPages_mvc_view, OSWidgets, UBTConnectLibrary_ConnectPatterns_StaticInput_mvc_view, OutSystemsUI_2_23_Content_BlankSlate_mvc_view) {
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
        View.displayName = "zDEV_Directory_CommunityBusinessBlocks.CommunityBusinessDetails_CoomingSoon";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI_2_23.OutSystemsUI.css", "css/UBTConnectLibrary.UBTConnectBase.css", "css/UBTConnectLibrary.UBTConnectLibrary.css", "css/Connect2_LegacyShared.UBTConnect.css", "css/OutSystemsUI_2_23.OutSystemsUI.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_Layouts_Layout_MainPages_mvc_view, UBTConnectLibrary_ConnectPatterns_StaticInput_mvc_view, OutSystemsUI_2_23_Content_BlankSlate_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnect_zDEV_Directory_CommunityBusinessBlocks_CommunityBusinessDetails_CoomingSoon_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_zDEV_Directory_CommunityBusinessBlocks_CommunityBusinessDetails_CoomingSoon_mvc_controller;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "title", {
            get: function () {
                return "CommunityBusinessDetails_CoomingSoon";
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnectLibrary_Layouts_Layout_MainPages_mvc_view, {
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
placeholder_Header_Title: PlaceholderContent.Empty,
placeholder_Header_Right: PlaceholderContent.Empty,
placeholder_Header_Input: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_StaticInput_mvc_view, {
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
uuid: "1",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}),
placeholder_Header_Input_Icon: PlaceholderContent.Empty,
headerContent: PlaceholderContent.Empty,
content: new PlaceholderContent(function () {
return [React.createElement(OutSystemsUI_2_23_Content_BlankSlate_mvc_view, {
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
uuid: "2",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
icon: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Icon, {
icon: "ellipsis-h",
iconSize: /*Twotimes*/ 1,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
content: new PlaceholderContent(function () {
return ["Comming soon"];
}),
actions: PlaceholderContent.Empty
},
_dependencies: []
})];
}),
bottom: PlaceholderContent.Empty,
placeholder_CommonUI_Inside_Layout: PlaceholderContent.Empty
},
_dependencies: []
}));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);
	
    return View;
});
define("UBTConnect.zDEV_Directory_CommunityBusinessBlocks.CommunityBusinessDetails_CoomingSoon.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.zDEV_Directory_CommunityBusinessBlocks.CommunityBusinessDetails_CoomingSoon.mvc$debugger", "UBTConnect.zDEV_Directory_CommunityBusinessBlocks.controller"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_zDEV_Directory_CommunityBusinessBlocks_CommunityBusinessDetails_CoomingSoon_mvc_Debugger, _flow_UBTConnect_zDEV_Directory_CommunityBusinessBlocksController) {
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
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:jt2_vH7ZpUSe9ZXwCHD6lw:/NRWebFlows.jt2_vH7ZpUSe9ZXwCHD6lw:lvSxXvYHVMcVFn7SpVMviw", "UBTConnect", "zDEV_Directory_CommunityBusinessBlocks", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:siuO2J0g8UqQHtaostTDuQ:/NRWebFlows.jt2_vH7ZpUSe9ZXwCHD6lw/NodesShownInESpaceTree.siuO2J0g8UqQHtaostTDuQ:ozuNb1GjFwYmshRmXgSRQg", "UBTConnect", "CommunityBusinessDetails_CoomingSoon", "NRNodes.WebScreen", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:siuO2J0g8UqQHtaostTDuQ", callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:jt2_vH7ZpUSe9ZXwCHD6lw", callContext.id);
};
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = null;
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = null;
Controller.prototype.onParametersChangedEventHandler = null;
Controller.prototype.handleError = function (ex) {
return _flow_UBTConnect_zDEV_Directory_CommunityBusinessBlocksController.default.handleError(ex, this.callContext());
};
Controller.checkPermissions = function () {
OS.RolesInfo.checkRegistered();
};
Controller.prototype.getDefaultTimeout = function () {
return UBTConnectController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, UBTConnectLanguageResources);
});

define("UBTConnect.zDEV_Directory_CommunityBusinessBlocks.CommunityBusinessDetails_CoomingSoon.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"xIeKYP3HM0azK4DXQCst0g": {
getter: function (varBag, idService) {
return varBag.model.variables.in_CommunityBusinessIdIn;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"ReLe3Kwn10KnJ_VFobZJQg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Header_Title"));
})(varBag.model, idService);
}
},
"UOYIODhgGEK0gCft684NwQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Header_Right"));
})(varBag.model, idService);
}
},
"YMOAn4Lj1EKFhg8llq0o+A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Header_Input"));
})(varBag.model, idService);
}
},
"K8kWGJkh8UCFLmvk9B1Grg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Header_Input_Icon"));
})(varBag.model, idService);
}
},
"SarFPA3+NkKOB9Sbdgk30w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderContent"));
})(varBag.model, idService);
}
},
"aOF1cObgV0iUXvxbxsyMFA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"4+wBJB6xDkiLLqeSyTnCOQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Icon"));
})(varBag.model, idService);
}
},
"jXEEh3UlUUGhzMBoqZ7QNQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"9tzJ5A_Sj0OVJyxtLKhvXQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Actions"));
})(varBag.model, idService);
}
},
"aBuS2Ghm1kCDvXT_tWpQzw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Bottom"));
})(varBag.model, idService);
}
},
"XCzu6BriCESXOP8YifX44g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_CommonUI_Inside_Layout"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
