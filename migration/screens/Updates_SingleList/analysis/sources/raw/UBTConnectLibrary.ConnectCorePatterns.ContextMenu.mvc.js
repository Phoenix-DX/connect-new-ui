define("UBTConnectLibrary.ConnectCorePatterns.ContextMenu.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.ConnectPatterns.PopupMenu.mvc$model", "UBTConnectLibrary.ConnectPatterns.CircleButton_IconPrimary.mvc$model", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$model", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$model", "UBTConnectLibrary.ConnectPatterns.ContextMenu_Item.mvc$model", "UBTConnectLibrary.model$ContextMenuOptionsRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec"], function (OutSystems, UBTConnectLibraryModel, UBTConnectLibrary_ConnectPatterns_PopupMenu_mvcModel, UBTConnectLibrary_ConnectPatterns_CircleButton_IconPrimary_mvcModel, UBTConnectLibrary_ConnectPatterns_Icon_mvcModel, UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel, UBTConnectLibrary_ConnectPatterns_ContextMenu_Item_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("MainContainerClass", "mainContainerClassVar", "MainContainerClass", true, false, OS.DataTypes.DataTypes.Text, function () {
return "ubt-context-menu";
}, false), 
this.attr("In_ContextMenuOptions", "in_ContextMenuOptionsIn", "In_ContextMenuOptions", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.ContextMenuOptionsRec());
}, false, UBTConnectLibraryModel.ContextMenuOptionsRec), 
this.attr("_in_ContextMenuOptionsInDataFetchStatus", "_in_ContextMenuOptionsInDataFetchStatus", "_in_ContextMenuOptionsInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("Position", "positionIn", "Position", true, false, OS.DataTypes.DataTypes.Text, function () {
return UBTConnectLibraryModel.staticEntities.position.bottomLeft;
}, false), 
this.attr("_positionInDataFetchStatus", "_positionInDataFetchStatus", "_positionInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("isEnabled", "isEnabledIn", "isEnabled", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, false), 
this.attr("_isEnabledInDataFetchStatus", "_isEnabledInDataFetchStatus", "_isEnabledInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("usePrimaryButon", "usePrimaryButonIn", "usePrimaryButon", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_usePrimaryButonInDataFetchStatus", "_usePrimaryButonInDataFetchStatus", "_usePrimaryButonInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = ((((UBTConnectLibrary_ConnectPatterns_PopupMenu_mvcModel.hasValidationWidgets || UBTConnectLibrary_ConnectPatterns_CircleButton_IconPrimary_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_Icon_mvcModel.hasValidationWidgets) || UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_ContextMenu_Item_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("In_ContextMenuOptions" in inputs) {
this.variables.in_ContextMenuOptionsIn = inputs.In_ContextMenuOptions;
if("_in_ContextMenuOptionsInDataFetchStatus" in inputs) {
this.variables._in_ContextMenuOptionsInDataFetchStatus = inputs._in_ContextMenuOptionsInDataFetchStatus;
}

}

if("Position" in inputs) {
this.variables.positionIn = inputs.Position;
if("_positionInDataFetchStatus" in inputs) {
this.variables._positionInDataFetchStatus = inputs._positionInDataFetchStatus;
}

}

if("isEnabled" in inputs) {
this.variables.isEnabledIn = inputs.isEnabled;
if("_isEnabledInDataFetchStatus" in inputs) {
this.variables._isEnabledInDataFetchStatus = inputs._isEnabledInDataFetchStatus;
}

}

if("usePrimaryButon" in inputs) {
this.variables.usePrimaryButonIn = inputs.usePrimaryButon;
if("_usePrimaryButonInDataFetchStatus" in inputs) {
this.variables._usePrimaryButonInDataFetchStatus = inputs._usePrimaryButonInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "ConnectCorePatterns.ContextMenu");
});
define("UBTConnectLibrary.ConnectCorePatterns.ContextMenu.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "react", "OutSystems/ReactView/Main", "UBTConnectLibrary.ConnectCorePatterns.ContextMenu.mvc$model", "UBTConnectLibrary.ConnectCorePatterns.ContextMenu.mvc$controller", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.ConnectPatterns.PopupMenu.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.ConnectPatterns.CircleButton_IconPrimary.mvc$view", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$view", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "UBTConnectLibrary.ConnectPatterns.ContextMenu_Item.mvc$view", "UBTConnectLibrary.model$ContextMenuOptionsRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec"], function (OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, React, OSView, UBTConnectLibrary_ConnectCorePatterns_ContextMenu_mvc_model, UBTConnectLibrary_ConnectCorePatterns_ContextMenu_mvc_controller, UBTConnectLibraryClientVariables, UBTConnectLibrary_ConnectPatterns_PopupMenu_mvc_view, OSWidgets, UBTConnectLibrary_ConnectPatterns_CircleButton_IconPrimary_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_ConnectPatterns_ContextMenu_Item_mvc_view) {
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
        View.displayName = "ConnectCorePatterns.ContextMenu";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_ConnectPatterns_PopupMenu_mvc_view, UBTConnectLibrary_ConnectPatterns_CircleButton_IconPrimary_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_ConnectPatterns_ContextMenu_Item_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnectLibrary_ConnectCorePatterns_ContextMenu_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnectLibrary_ConnectCorePatterns_ContextMenu_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnectLibrary_ConnectPatterns_PopupMenu_mvc_view, {
inputs: {
Position: model.variables.positionIn,
_positionInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._positionInDataFetchStatus)
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
anchor: new PlaceholderContent(function () {
return [$if(model.variables.usePrimaryButonIn, false, this, function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_CircleButton_IconPrimary_mvc_view, {
inputs: {
isEnabled: model.variables.isEnabledIn,
_isEnabledInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isEnabledInDataFetchStatus),
IconId: UBTConnectLibraryModel.staticEntities.uBT_Icons.moreVertical
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
}, function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
inputs: {
In_ColorId: UBTConnectLibraryModel.staticEntities.uBT_Color.neutral7,
In_IconId: UBTConnectLibraryModel.staticEntities.uBT_Icons.moreVertical
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
uuid: "2",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})];
}),
popupMenu: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("uJ064ICLQ0KyR30JkDN7Zg.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.backgroundAttr = function () {
var rec = new UBTConnectLibraryModel.BackgroundOptionsRec();
rec.backgroundColorAttr = UBTConnectLibraryModel.staticEntities.uBT_Color.neutral0;
return rec;
}();
rec.borderOptionsAttr = function () {
var rec = new UBTConnectLibraryModel.BorderOptionsRec();
rec.radiusAttr = function () {
var rec = new UBTConnectLibraryModel.RadiusOptionsRec();
rec.generalSizeIdAttr = UBTConnectLibraryModel.staticEntities.uBT_Shape.soft;
return rec;
}();
return rec;
}();
rec.shadowIdAttr = UBTConnectLibraryModel.staticEntities.uBT_Shadow.extraSmall;
return rec;
}();
}),
ExtendedClasses: model.variables.mainContainerClassVar
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
uuid: "3",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [$if(model.variables.in_ContextMenuOptionsIn.hasSendGiftAttr, false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectCorePatterns/ContextMenu/Container onclick");
controller.event_SendGift$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
visible: true,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(UBTConnectLibrary_ConnectPatterns_ContextMenu_Item_mvc_view, {
inputs: {
In_Label: "Send a Gift",
In_UBT_IconsId: UBTConnectLibraryModel.staticEntities.uBT_Icons.gift
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
name: "MenuOption_SendGift",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))];
}, function () {
return [];
}), $if(model.variables.in_ContextMenuOptionsIn.hasMarkAsReadAttr, false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectCorePatterns/ContextMenu/Container onclick");
controller.event_MarkAsRead$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
visible: true,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(UBTConnectLibrary_ConnectPatterns_ContextMenu_Item_mvc_view, {
inputs: {
In_Label: "Mark as Read",
In_UBT_IconsId: UBTConnectLibraryModel.staticEntities.uBT_Icons.letter
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
name: "MenuOption_MarkAsRead",
alias: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))];
}, function () {
return [];
}), $if(model.variables.in_ContextMenuOptionsIn.hasMarkAsUnreadAttr, false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectCorePatterns/ContextMenu/Container onclick");
controller.event_MarkAsUnread$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
visible: true,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(UBTConnectLibrary_ConnectPatterns_ContextMenu_Item_mvc_view, {
inputs: {
In_Label: "Mark as Unread",
In_UBT_IconsId: UBTConnectLibraryModel.staticEntities.uBT_Icons.letter
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
name: "MenuOption_MarkAsUnread",
alias: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))];
}, function () {
return [];
}), $if(model.variables.in_ContextMenuOptionsIn.editAttr.hasEditAttr, false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectCorePatterns/ContextMenu/DIV_Edit onclick");
controller.event_Edit$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
visible: true,
_idProps: {
service: idService,
name: "DIV_Edit"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(UBTConnectLibrary_ConnectPatterns_ContextMenu_Item_mvc_view, {
inputs: {
In_Label: model.variables.in_ContextMenuOptionsIn.editAttr.labelAttr,
_in_LabelInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ContextMenuOptionsInDataFetchStatus),
In_UBT_IconsId: UBTConnectLibraryModel.staticEntities.uBT_Icons.edit
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
uuid: "11",
alias: "8"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))];
}, function () {
return [];
}), $if(model.variables.in_ContextMenuOptionsIn.hasShareAttr, false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectCorePatterns/ContextMenu/Container onclick");
controller.event_Share$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
visible: true,
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(UBTConnectLibrary_ConnectPatterns_ContextMenu_Item_mvc_view, {
inputs: {
In_UBT_IconsId: UBTConnectLibraryModel.staticEntities.uBT_Icons.share,
In_Label: "Share"
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
name: "MenuOption_Share",
alias: "9"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))];
}, function () {
return [];
}), $if(model.variables.in_ContextMenuOptionsIn.deleteAttr.hasDeleteAttr, false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectCorePatterns/ContextMenu/DIV_Delete onclick");
controller.event_Delete$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
style: "text-red-dark",
visible: true,
_idProps: {
service: idService,
name: "DIV_Delete"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(UBTConnectLibrary_ConnectPatterns_ContextMenu_Item_mvc_view, {
inputs: {
In_UBT_IconsId: UBTConnectLibraryModel.staticEntities.uBT_Icons.delete,
In_Label: model.variables.in_ContextMenuOptionsIn.deleteAttr.labelAttr,
_in_LabelInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ContextMenuOptionsInDataFetchStatus),
In_UBT_IconColorId: UBTConnectLibraryModel.staticEntities.uBT_Color.redDark
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
uuid: "15",
alias: "10"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))];
}, function () {
return [];
})];
})
},
_dependencies: [asPrimitiveValue(model.variables._in_ContextMenuOptionsInDataFetchStatus), asPrimitiveValue(model.variables.in_ContextMenuOptionsIn.deleteAttr.labelAttr), asPrimitiveValue(model.variables.in_ContextMenuOptionsIn.deleteAttr.hasDeleteAttr), asPrimitiveValue(model.variables.in_ContextMenuOptionsIn.hasShareAttr), asPrimitiveValue(model.variables.in_ContextMenuOptionsIn.editAttr.labelAttr), asPrimitiveValue(model.variables.in_ContextMenuOptionsIn.editAttr.hasEditAttr), asPrimitiveValue(model.variables.in_ContextMenuOptionsIn.hasMarkAsUnreadAttr), asPrimitiveValue(model.variables.in_ContextMenuOptionsIn.hasMarkAsReadAttr), asPrimitiveValue(model.variables.in_ContextMenuOptionsIn.hasSendGiftAttr)]
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.in_ContextMenuOptionsIn.deleteAttr.labelAttr), asPrimitiveValue(model.variables.in_ContextMenuOptionsIn.deleteAttr.hasDeleteAttr), asPrimitiveValue(model.variables.in_ContextMenuOptionsIn.hasShareAttr), asPrimitiveValue(model.variables.in_ContextMenuOptionsIn.editAttr.labelAttr), asPrimitiveValue(model.variables.in_ContextMenuOptionsIn.editAttr.hasEditAttr), asPrimitiveValue(model.variables.in_ContextMenuOptionsIn.hasMarkAsUnreadAttr), asPrimitiveValue(model.variables.in_ContextMenuOptionsIn.hasMarkAsReadAttr), asPrimitiveValue(model.variables.in_ContextMenuOptionsIn.hasSendGiftAttr), asPrimitiveValue(model.variables.mainContainerClassVar), asPrimitiveValue(model.variables.isEnabledIn), asPrimitiveValue(model.variables._in_ContextMenuOptionsInDataFetchStatus), asPrimitiveValue(model.variables._isEnabledInDataFetchStatus), asPrimitiveValue(model.variables._usePrimaryButonInDataFetchStatus), asPrimitiveValue(model.variables.usePrimaryButonIn)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("UBTConnectLibrary.ConnectCorePatterns.ContextMenu.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.languageResources", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.ConnectCorePatterns.ContextMenu.mvc$debugger", "UBTConnectLibrary.model$ContextMenuOptionsRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec"], function (OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryLanguageResources, UBTConnectLibraryClientVariables, UBTConnectLibrary_ConnectCorePatterns_ContextMenu_mvc_Debugger) {
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

Controller.prototype.event_Edit$Action = function () {
return Promise.resolve();
};
Controller.prototype.event_Delete$Action = function () {
return Promise.resolve();
};
Controller.prototype.event_MarkAsRead$Action = function () {
return Promise.resolve();
};
Controller.prototype.event_SendGift$Action = function () {
return Promise.resolve();
};
Controller.prototype.event_MarkAsUnread$Action = function () {
return Promise.resolve();
};
Controller.prototype.event_Share$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:7WP6eMpZLUWcKuZ3c_pmbg:/NRWebFlows.7WP6eMpZLUWcKuZ3c_pmbg:oyDD4nRcBfstlKKpUR3Bug", "UBTConnectLibrary", "ConnectCorePatterns", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:K1PXmPqkAEqEwQ3tR4psIg:/NRWebFlows.7WP6eMpZLUWcKuZ3c_pmbg/NodesShownInESpaceTree.K1PXmPqkAEqEwQ3tR4psIg:eBv1A1UjzOI2RQ3UsxnmyA", "UBTConnectLibrary", "ContextMenu", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:K1PXmPqkAEqEwQ3tR4psIg", callContext.id);
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:7WP6eMpZLUWcKuZ3c_pmbg", callContext.id);
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

define("UBTConnectLibrary.ConnectCorePatterns.ContextMenu.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"si3MzAtEDkaSqUKufSc9PQ": {
getter: function (varBag, idService) {
return varBag.model.variables.mainContainerClassVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"NuB8BUw8YkGliLI+iapRhw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_ContextMenuOptionsIn;
}
},
"qV8xgjWx50SlWCbhkS2BWg": {
getter: function (varBag, idService) {
return varBag.model.variables.positionIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"_HcGVq9l0ka9bUeOUo8siQ": {
getter: function (varBag, idService) {
return varBag.model.variables.isEnabledIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"umlp+l_sR0qSLjWPVaPWFA": {
getter: function (varBag, idService) {
return varBag.model.variables.usePrimaryButonIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"gqdbvgr1ek2jL1OY7BduvA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Anchor"));
})(varBag.model, idService);
}
},
"ufAaifCaukufvYwjDp9OiA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("usePrimaryButon2"));
})(varBag.model, idService);
}
},
"RGWkccMzBUWPWJlHQqof8A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("PopupMenu"));
})(varBag.model, idService);
}
},
"66hy+Pi1MEm45WrFxFDtYw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"qk5tVFR1zky6tCZFyzkRyA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ShowGift"));
})(varBag.model, idService);
}
},
"TWsKiMzvhkSgZ0coQcTo6w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("MenuOption_SendGift"));
})(varBag.model, idService);
}
},
"rcWPZCLdBk2fdEfv_7Yt8Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ShowRead"));
})(varBag.model, idService);
}
},
"jXWmLRD77Em8gNx3omgPOA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("MenuOption_MarkAsRead"));
})(varBag.model, idService);
}
},
"Z5Xa8TCyzEWASDrFEw3aVg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ShowUnRead"));
})(varBag.model, idService);
}
},
"3nSP01MsWUCneCP9sQRt_w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("MenuOption_MarkAsUnread"));
})(varBag.model, idService);
}
},
"xSoLtZpXl0WySFfbWV1ZoA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ShowEdit"));
})(varBag.model, idService);
}
},
"MpOu7Afl6kaACPupvPtjFw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("DIV_Edit"));
})(varBag.model, idService);
}
},
"bqtr5LI7G0mGwbdBO4RFtQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ShowShare"));
})(varBag.model, idService);
}
},
"PKb_Immcv0ObipDlnFloTw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("MenuOption_Share"));
})(varBag.model, idService);
}
},
"b2xtkncwIEu_gJibg6gVvA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ShowDelete"));
})(varBag.model, idService);
}
},
"Snr3L0vqVEqfQxOrmbHtbA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("DIV_Delete"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
