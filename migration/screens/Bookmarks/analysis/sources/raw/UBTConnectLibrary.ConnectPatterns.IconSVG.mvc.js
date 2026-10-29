define("UBTConnectLibrary.ConnectPatterns.IconSVG.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model"], function (OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("In_IconId", "in_IconIdIn", "In_IconId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_IconIdInDataFetchStatus", "_in_IconIdInDataFetchStatus", "_in_IconIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
if("In_IconId" in inputs) {
this.variables.in_IconIdIn = inputs.In_IconId;
if("_in_IconIdInDataFetchStatus" in inputs) {
this.variables._in_IconIdInDataFetchStatus = inputs._in_IconIdInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "ConnectPatterns.IconSVG");
});
define("UBTConnectLibrary.ConnectPatterns.IconSVG.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "react", "OutSystems/ReactView/Main", "UBTConnectLibrary.ConnectPatterns.IconSVG.mvc$model", "UBTConnectLibrary.ConnectPatterns.IconSVG.mvc$controller", "UBTConnectLibrary.clientVariables", "OutSystems/ReactWidgets/Main"], function (OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, React, OSView, UBTConnectLibrary_ConnectPatterns_IconSVG_mvc_model, UBTConnectLibrary_ConnectPatterns_IconSVG_mvc_controller, UBTConnectLibraryClientVariables, OSWidgets) {
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
        View.displayName = "ConnectPatterns.IconSVG";
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
                return UBTConnectLibrary_ConnectPatterns_IconSVG_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnectLibrary_ConnectPatterns_IconSVG_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), $if((model.variables.in_IconIdIn === UBTConnectLibraryModel.staticEntities.uBT_Icons.sVG_OneSchoolGlobal), false, this, function () {
return [React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/UBTConnectLibrary.OneSchoolGlobal.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [];
}), $if((model.variables.in_IconIdIn === UBTConnectLibraryModel.staticEntities.uBT_Icons.sVG_PinLock), true, this, function () {
return [React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/UBTConnectLibrary.Pin_Lock.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [];
}), $if((model.variables.in_IconIdIn === UBTConnectLibraryModel.staticEntities.uBT_Icons.sVG_PinHouse), true, this, function () {
return [React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/UBTConnectLibrary.Pin_House.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [];
}), $if((model.variables.in_IconIdIn === UBTConnectLibraryModel.staticEntities.uBT_Icons.sVG_PinMember), true, this, function () {
return [React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/UBTConnectLibrary.Pin_Member.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [];
}), $if((model.variables.in_IconIdIn === UBTConnectLibraryModel.staticEntities.uBT_Icons.sVG_PinOneSchool), true, this, function () {
return [React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/UBTConnectLibrary.Pin_OneSchool.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [];
}), $if((model.variables.in_IconIdIn === UBTConnectLibraryModel.staticEntities.uBT_Icons.sVG_HR100), true, this, function () {
return [React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/UBTConnectLibrary.HR100.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [];
}), $if((model.variables.in_IconIdIn === UBTConnectLibraryModel.staticEntities.uBT_Icons.sVG_ElGusto), true, this, function () {
return [React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/UBTConnectLibrary.ElGusto.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [];
}), $if((model.variables.in_IconIdIn === UBTConnectLibraryModel.staticEntities.uBT_Icons.sVG_CommunityTradelink), true, this, function () {
return [React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/UBTConnectLibrary.CommunityTradelink.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [];
}), $if((model.variables.in_IconIdIn === UBTConnectLibraryModel.staticEntities.uBT_Icons.sVG_PinLocality), true, this, function () {
return [React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/UBTConnectLibrary.Pin_Locality.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [];
}), $if((model.variables.in_IconIdIn === UBTConnectLibraryModel.staticEntities.uBT_Icons.sVG_PinCountry), true, this, function () {
return [React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/UBTConnectLibrary.Pin_Country.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [];
}), $if((model.variables.in_IconIdIn === UBTConnectLibraryModel.staticEntities.uBT_Icons.sVG_CommunityHouseholds), true, this, function () {
return [React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/UBTConnectLibrary.CommunityHouseholds.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [];
}), $if((model.variables.in_IconIdIn === UBTConnectLibraryModel.staticEntities.uBT_Icons.sVG_CommunityLocalities), true, this, function () {
return [React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/UBTConnectLibrary.CommunityLocalities.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [];
}), $if((model.variables.in_IconIdIn === UBTConnectLibraryModel.staticEntities.uBT_Icons.sVG_CommunityCountries), true, this, function () {
return [React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/UBTConnectLibrary.CommunityCountries.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [];
}), $if((model.variables.in_IconIdIn === UBTConnectLibraryModel.staticEntities.uBT_Icons.sVG_CommunityMembers), true, this, function () {
return [React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/UBTConnectLibrary.CommunityMembers.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [];
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("UBTConnectLibrary.ConnectPatterns.IconSVG.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.languageResources", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.ConnectPatterns.IconSVG.mvc$debugger"], function (OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryLanguageResources, UBTConnectLibraryClientVariables, UBTConnectLibrary_ConnectPatterns_IconSVG_mvc_Debugger) {
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
OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:GRnUlqBGNE26Hxr_Ah3_7g:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g:Y06DhYqVkffzqTnycnKUGw", "UBTConnectLibrary", "ConnectPatterns", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:xNF4FKmFSUmN4m8n4FU34w:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g/NodesShownInESpaceTree.xNF4FKmFSUmN4m8n4FU34w:thIxJ5l9b2t4onjh3+gjLg", "UBTConnectLibrary", "IconSVG", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:xNF4FKmFSUmN4m8n4FU34w", callContext.id);
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:GRnUlqBGNE26Hxr_Ah3_7g", callContext.id);
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
return UBTConnectLibraryController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, UBTConnectLibraryLanguageResources);
});

define("UBTConnectLibrary.ConnectPatterns.IconSVG.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"r6CuJ8TnUEGiHiY4f3tmpw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_IconIdIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Lzu2o8PIQk+Orov16ufm9A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("SVG_OneSchoolGlobal"));
})(varBag.model, idService);
}
},
"MBrq9WLQBU2e_czAJ3gUgQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("SVG_PinLock"));
})(varBag.model, idService);
}
},
"5IoxIBzrK0y4zVNDBd6k8Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("SVG_PinHouse"));
})(varBag.model, idService);
}
},
"GADTeYygQEa9Rsx7VBvOKw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("SVG_PinMember"));
})(varBag.model, idService);
}
},
"yz2jrgLFAE+gvtCgLkKdzA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("SVG_PinOneSchool"));
})(varBag.model, idService);
}
},
"yt6hFS8qeEeuJ9l_vyWq+w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("SVG_HR100"));
})(varBag.model, idService);
}
},
"bs2iOsD2NUi1wbm10vb4RA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("SVG_ElGusto"));
})(varBag.model, idService);
}
},
"LyQ99jo5VkymvAqqzWRRrQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("SVG_CommunityTradelink"));
})(varBag.model, idService);
}
},
"QrSidrP7aUiD3TABRjhg4Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("SVG_PinLocality"));
})(varBag.model, idService);
}
},
"+7hxMWjNXEmfNAFUT3+64Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("SVG_PinCountry"));
})(varBag.model, idService);
}
},
"uAKrEY+JSE6QeV7LCCWjEg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("SVG_CommunityHouseholds"));
})(varBag.model, idService);
}
},
"M2tOsmILiUSKrSGGL44zTA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("SVG_CommunityLocalities"));
})(varBag.model, idService);
}
},
"rp4xDNgqPUaKL7wlmWiclg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("SVG_CommunityCountries"));
})(varBag.model, idService);
}
},
"QcTOWYVCJUOiI_hr92x8VA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("SVG_CommunityMembers"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
