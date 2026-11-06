define("Connect2_Assemble_MUI.Assemble.AssembleSummaryCard.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_CS.model", "Connect2_Assemble_MUI.controller", "Connect2_LegacyShared.controller", "Connect2_AppLauncherPlugin.model", "Connect2_AppLauncherPlugin.controller", "Connect2_LegacyShared.NewConnect_Utilities.NC_Result_Item__Card.mvc$model", "Connect2_LegacyShared.NewConnect_Utilities.NC_Card_Item_Visual.mvc$model", "Connect2_Assemble_MUI.Assemble.AssembleSummaryCard__Header.mvc$model", "Connect2_Assemble_MUI.Assemble.AssembleSummary_Card_Row.mvc$model", "Connect2_LegacyShared.NewConnect_Utilities.NC_Result_Item__Image.mvc$model", "Connect2_Assemble_MUI.Assemble.AssembleCommon_VirtualMeetingURL.mvc$model", "Connect2_Assemble_CS.model$AssembleEventSummaryRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_Assemble_CS", "Connect2_Assemble_MUI.controller$GetAssembleEventSummaryHeaderLabel", "Connect2_Assemble_MUI.model$TextTextTextRecord", "Connect2_Assemble_MUI.controller$GetAssembleHostedAtComponents", "Connect2_Assemble_MUI.controller$GetAssembleEventSummaryDateTimeString", "Connect2_LegacyShared.controller$NavigateToMaps", "Connect2_Assemble_MUI.referencesHealth$Connect2_LegacyShared", "Connect2_AppLauncherPlugin.model$LauncherParametersRec", "Connect2_Assemble_MUI.referencesHealth$Connect2_AppLauncherPlugin", "Connect2_AppLauncherPlugin.model$LauncherReturnRec", "Connect2_AppLauncherPlugin.controller$LaunchWithData"], function (OutSystems, Connect2_Assemble_MUIModel, Connect2_Assemble_CSModel, Connect2_Assemble_MUIController, Connect2_LegacySharedController, Connect2_AppLauncherPluginModel, Connect2_AppLauncherPluginController, Connect2_LegacyShared_NewConnect_Utilities_NC_Result_Item__Card_mvcModel, Connect2_LegacyShared_NewConnect_Utilities_NC_Card_Item_Visual_mvcModel, Connect2_Assemble_MUI_Assemble_AssembleSummaryCard__Header_mvcModel, Connect2_Assemble_MUI_Assemble_AssembleSummary_Card_Row_mvcModel, Connect2_LegacyShared_NewConnect_Utilities_NC_Result_Item__Image_mvcModel, Connect2_Assemble_MUI_Assemble_AssembleCommon_VirtualMeetingURL_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("AssembleEventSummary", "assembleEventSummaryIn", "AssembleEventSummary", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_Assemble_CSModel.AssembleEventSummaryRec());
}, false, Connect2_Assemble_CSModel.AssembleEventSummaryRec), 
this.attr("_assembleEventSummaryInDataFetchStatus", "_assembleEventSummaryInDataFetchStatus", "_assembleEventSummaryInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("IsListItem", "isListItemIn", "IsListItem", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_isListItemInDataFetchStatus", "_isListItemInDataFetchStatus", "_isListItemInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = (((((Connect2_LegacyShared_NewConnect_Utilities_NC_Result_Item__Card_mvcModel.hasValidationWidgets || Connect2_LegacyShared_NewConnect_Utilities_NC_Card_Item_Visual_mvcModel.hasValidationWidgets) || Connect2_Assemble_MUI_Assemble_AssembleSummaryCard__Header_mvcModel.hasValidationWidgets) || Connect2_Assemble_MUI_Assemble_AssembleSummary_Card_Row_mvcModel.hasValidationWidgets) || Connect2_LegacyShared_NewConnect_Utilities_NC_Result_Item__Image_mvcModel.hasValidationWidgets) || Connect2_Assemble_MUI_Assemble_AssembleCommon_VirtualMeetingURL_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("AssembleEventSummary" in inputs) {
this.variables.assembleEventSummaryIn = inputs.AssembleEventSummary;
if("_assembleEventSummaryInDataFetchStatus" in inputs) {
this.variables._assembleEventSummaryInDataFetchStatus = inputs._assembleEventSummaryInDataFetchStatus;
}

}

if("IsListItem" in inputs) {
this.variables.isListItemIn = inputs.IsListItem;
if("_isListItemInDataFetchStatus" in inputs) {
this.variables._isListItemInDataFetchStatus = inputs._isListItemInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Assemble.AssembleSummaryCard");
});
define("Connect2_Assemble_MUI.Assemble.AssembleSummaryCard.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.controller", "Connect2_Assemble_CS.model", "Connect2_LegacyShared.controller", "Connect2_AppLauncherPlugin.model", "Connect2_AppLauncherPlugin.controller", "react", "OutSystems/ReactView/Main", "Connect2_Assemble_MUI.Assemble.AssembleSummaryCard.mvc$model", "Connect2_Assemble_MUI.Assemble.AssembleSummaryCard.mvc$controller", "OutSystems/ReactWidgets/Main", "Connect2_LegacyShared.NewConnect_Utilities.NC_Result_Item__Card.mvc$view", "Connect2_LegacyShared.NewConnect_Utilities.NC_Card_Item_Visual.mvc$view", "Connect2_Assemble_MUI.Assemble.AssembleSummaryCard__Header.mvc$view", "Connect2_Assemble_MUI.Assemble.AssembleSummary_Card_Row.mvc$view", "Connect2_LegacyShared.NewConnect_Utilities.NC_Result_Item__Image.mvc$view", "Connect2_Assemble_MUI.Assemble.AssembleCommon_VirtualMeetingURL.mvc$view", "Connect2_Assemble_CS.model$AssembleEventSummaryRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_Assemble_CS", "Connect2_Assemble_MUI.controller$GetAssembleEventSummaryHeaderLabel", "Connect2_Assemble_MUI.model$TextTextTextRecord", "Connect2_Assemble_MUI.controller$GetAssembleHostedAtComponents", "Connect2_Assemble_MUI.controller$GetAssembleEventSummaryDateTimeString", "Connect2_LegacyShared.controller$NavigateToMaps", "Connect2_Assemble_MUI.referencesHealth$Connect2_LegacyShared", "Connect2_AppLauncherPlugin.model$LauncherParametersRec", "Connect2_Assemble_MUI.referencesHealth$Connect2_AppLauncherPlugin", "Connect2_AppLauncherPlugin.model$LauncherReturnRec", "Connect2_AppLauncherPlugin.controller$LaunchWithData"], function (OutSystems, Connect2_Assemble_MUIModel, Connect2_Assemble_MUIController, Connect2_Assemble_CSModel, Connect2_LegacySharedController, Connect2_AppLauncherPluginModel, Connect2_AppLauncherPluginController, React, OSView, Connect2_Assemble_MUI_Assemble_AssembleSummaryCard_mvc_model, Connect2_Assemble_MUI_Assemble_AssembleSummaryCard_mvc_controller, OSWidgets, Connect2_LegacyShared_NewConnect_Utilities_NC_Result_Item__Card_mvc_view, Connect2_LegacyShared_NewConnect_Utilities_NC_Card_Item_Visual_mvc_view, Connect2_Assemble_MUI_Assemble_AssembleSummaryCard__Header_mvc_view, Connect2_Assemble_MUI_Assemble_AssembleSummary_Card_Row_mvc_view, Connect2_LegacyShared_NewConnect_Utilities_NC_Result_Item__Image_mvc_view, Connect2_Assemble_MUI_Assemble_AssembleCommon_VirtualMeetingURL_mvc_view) {
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
        View.displayName = "Assemble.AssembleSummaryCard";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [Connect2_LegacyShared_NewConnect_Utilities_NC_Result_Item__Card_mvc_view, Connect2_LegacyShared_NewConnect_Utilities_NC_Card_Item_Visual_mvc_view, Connect2_Assemble_MUI_Assemble_AssembleSummaryCard__Header_mvc_view, Connect2_Assemble_MUI_Assemble_AssembleSummary_Card_Row_mvc_view, Connect2_LegacyShared_NewConnect_Utilities_NC_Result_Item__Image_mvc_view, Connect2_Assemble_MUI_Assemble_AssembleCommon_VirtualMeetingURL_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return Connect2_Assemble_MUI_Assemble_AssembleSummaryCard_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Connect2_Assemble_MUI_Assemble_AssembleSummaryCard_mvc_controller;
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
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(Connect2_LegacyShared_NewConnect_Utilities_NC_Result_Item__Card_mvc_view, {
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
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
card_Visual: new PlaceholderContent(function () {
return [$if(model.variables.isListItemIn, false, this, function () {
return [];
}, function () {
return [React.createElement(Connect2_LegacyShared_NewConnect_Utilities_NC_Card_Item_Visual_mvc_view, {
inputs: {
In_ImageCoverPositionY: Connect2_Assemble_MUIModel.staticEntities.position.center,
In_SignedURL: model.getCachedValue(idService.getId("x3JgSzJKiky8FIGtpr8YXQ.In_SignedURL"), function () {
return ((model.variables.assembleEventSummaryIn.isPBCCAttr) ? (OS.Navigation.VersionedURL.getVersionedUrl("img/Connect2_LegacyShared.BGTAudioRecording.svg")) : (((model.variables.assembleEventSummaryIn.isVirtualAttr) ? (OS.Navigation.VersionedURL.getVersionedUrl("img/Connect2_LegacyShared.VirtualMeeting.svg")) : (model.variables.assembleEventSummaryIn.hostingSubdivisionHallPhotoSignedURLAttr))));
}, function () {
return model.variables.assembleEventSummaryIn.isPBCCAttr;
}, function () {
return model.variables.assembleEventSummaryIn.isVirtualAttr;
}, function () {
return model.variables.assembleEventSummaryIn.hostingSubdivisionHallPhotoSignedURLAttr;
}),
_in_SignedURLInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._assembleEventSummaryInDataFetchStatus),
In_ResultType: Connect2_Assemble_MUIModel.staticEntities.resultListType.subdivision
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
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
placeholder_FloatingPill: PlaceholderContent.Empty,
placeholder_OverlayText: PlaceholderContent.Empty,
placeholder_Image: PlaceholderContent.Empty
},
_dependencies: []
})];
})];
}),
placeholder_1: new PlaceholderContent(function () {
return [$if(model.variables.isListItemIn, false, this, function () {
return [];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "margin-bottom-s",
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(Connect2_Assemble_MUI_Assemble_AssembleSummaryCard__Header_mvc_view, {
inputs: {
HeaderLabel: model.getCachedValue(idService.getId("XIP8GI1F1Uq+1_BNH1YszA.HeaderLabel"), function () {
return OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_Assemble_MUIController.default.getAssembleEventSummaryHeaderLabel$Action(model.variables.assembleEventSummaryIn, callContext).labelOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
}, function () {
return model.variables.assembleEventSummaryIn;
}),
_headerLabelInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._assembleEventSummaryInDataFetchStatus)
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
uuid: "4",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))];
})];
}),
placeholder_2: new PlaceholderContent(function () {
return [$if(model.variables.isListItemIn, false, this, function () {
return [React.createElement(Connect2_Assemble_MUI_Assemble_AssembleSummaryCard__Header_mvc_view, {
inputs: {
HeaderLabel: model.getCachedValue(idService.getId("1alAO_xXnk2Ka_gYxrSD2A.HeaderLabel"), function () {
return OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_Assemble_MUIController.default.getAssembleEventSummaryHeaderLabel$Action(model.variables.assembleEventSummaryIn, callContext).labelOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
}, function () {
return model.variables.assembleEventSummaryIn;
}),
_headerLabelInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._assembleEventSummaryInDataFetchStatus)
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
uuid: "5",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [];
})];
}),
placeholder_3: new PlaceholderContent(function () {
return [React.createElement(Connect2_Assemble_MUI_Assemble_AssembleSummary_Card_Row_mvc_view, {
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
uuid: "6",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
placeholder_Icon_Left: PlaceholderContent.Empty,
placeholder_Content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "OSFillParent"
},
style: "font-semi-bold text-neutral-6",
value: model.getCachedValue(idService.getId("3sbCvV5yy0+Ngo2QdJodNw.Value"), function () {
return OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_Assemble_MUIController.default.getAssembleHostedAtComponents$Action(model.variables.assembleEventSummaryIn.isVirtualAttr, model.variables.assembleEventSummaryIn.hostingLocationAttr, model.variables.assembleEventSummaryIn.localityNameAttr, model.variables.assembleEventSummaryIn.countryNameAttr, model.variables.assembleEventSummaryIn.isUnavailableAttr, callContext).hostedAtComponentsOut;
}, OS.DataTypes.DataTypes.Record, callContext.id).singleLineAttr;
}, function () {
return model.variables.assembleEventSummaryIn.isVirtualAttr;
}, function () {
return model.variables.assembleEventSummaryIn.hostingLocationAttr;
}, function () {
return model.variables.assembleEventSummaryIn.localityNameAttr;
}, function () {
return model.variables.assembleEventSummaryIn.countryNameAttr;
}, function () {
return model.variables.assembleEventSummaryIn.isUnavailableAttr;
}),
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._assembleEventSummaryInDataFetchStatus)
})];
}),
placeholder_Icon_Right: PlaceholderContent.Empty
},
_dependencies: [asPrimitiveValue(model.variables._assembleEventSummaryInDataFetchStatus), asPrimitiveValue(model.variables.assembleEventSummaryIn.isUnavailableAttr), asPrimitiveValue(model.variables.assembleEventSummaryIn.countryNameAttr), asPrimitiveValue(model.variables.assembleEventSummaryIn.localityNameAttr), asPrimitiveValue(model.variables.assembleEventSummaryIn.hostingLocationAttr), asPrimitiveValue(model.variables.assembleEventSummaryIn.isVirtualAttr)]
})];
}),
placeholder_4: new PlaceholderContent(function () {
return [React.createElement(Connect2_Assemble_MUI_Assemble_AssembleSummary_Card_Row_mvc_view, {
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
uuid: "8",
alias: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
placeholder_Icon_Left: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Icon, {
icon: "flag",
iconSize: /*FontSize*/ 0,
style: "icon connect-icon-time-clock",
visible: true,
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
placeholder_Content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
value: model.getCachedValue(idService.getId("tbL0sQ55q0W4xawiqG66Fw.Value"), function () {
return OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_Assemble_MUIController.default.getAssembleEventSummaryDateTimeString$Action(model.variables.assembleEventSummaryIn.dateTimeAttr, model.variables.assembleEventSummaryIn.isAllDayAttr, callContext).dateTimeStringOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
}, function () {
return model.variables.assembleEventSummaryIn.dateTimeAttr;
}, function () {
return model.variables.assembleEventSummaryIn.isAllDayAttr;
}),
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._assembleEventSummaryInDataFetchStatus)
})];
}),
placeholder_Icon_Right: PlaceholderContent.Empty
},
_dependencies: [asPrimitiveValue(model.variables._assembleEventSummaryInDataFetchStatus), asPrimitiveValue(model.variables.assembleEventSummaryIn.isAllDayAttr), asPrimitiveValue(model.variables.assembleEventSummaryIn.dateTimeAttr)]
})];
}),
placeholder_5: PlaceholderContent.Empty,
placeholder_6: new PlaceholderContent(function () {
return [React.createElement(Connect2_Assemble_MUI_Assemble_AssembleSummary_Card_Row_mvc_view, {
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
uuid: "11",
alias: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
placeholder_Icon_Left: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Icon, {
icon: "flag",
iconSize: /*FontSize*/ 0,
style: "icon connect-icon-people",
visible: true,
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
placeholder_Content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
value: model.getCachedValue(idService.getId("tKFCue+E90ShN81umrFfVw.Value"), function () {
return ((model.variables.assembleEventSummaryIn.isUnavailableAttr) ? ("Invitee numbers unavailable at the moment") : ((((((OS.BuiltinFunctions.longIntegerToText(model.variables.assembleEventSummaryIn.brothersCountAttr.add(model.variables.assembleEventSummaryIn.sistersCountAttr)) + ((model.variables.assembleEventSummaryIn.brothersCountAttr.add(model.variables.assembleEventSummaryIn.sistersCountAttr).equals(OS.BuiltinFunctions.integerToLongInteger(1))) ? (" Attendee") : (" Attendees"))) + " • Brothers: ") + OS.BuiltinFunctions.longIntegerToText(model.variables.assembleEventSummaryIn.brothersCountAttr)) + " • Sisters: ") + OS.BuiltinFunctions.longIntegerToText(model.variables.assembleEventSummaryIn.sistersCountAttr))));
}, function () {
return model.variables.assembleEventSummaryIn.isUnavailableAttr;
}, function () {
return model.variables.assembleEventSummaryIn.brothersCountAttr;
}, function () {
return model.variables.assembleEventSummaryIn.sistersCountAttr;
}),
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._assembleEventSummaryInDataFetchStatus)
})];
}),
placeholder_Icon_Right: PlaceholderContent.Empty
},
_dependencies: [asPrimitiveValue(model.variables._assembleEventSummaryInDataFetchStatus), asPrimitiveValue(model.variables.assembleEventSummaryIn.sistersCountAttr), asPrimitiveValue(model.variables.assembleEventSummaryIn.brothersCountAttr), asPrimitiveValue(model.variables.assembleEventSummaryIn.isUnavailableAttr)]
})];
}),
placeholder_Right: new PlaceholderContent(function () {
return [$if(model.variables.isListItemIn, false, this, function () {
return [React.createElement(Connect2_LegacyShared_NewConnect_Utilities_NC_Result_Item__Image_mvc_view, {
inputs: {
In_ResultType: Connect2_Assemble_MUIModel.staticEntities.resultListType.subdivision,
ShowPlaceholderForImage: false,
CustomClass: "assemble-summary__card__header",
In_IsReverseImageAndContent: true,
In_ImageHeight: 73,
In_SignedURL: model.getCachedValue(idService.getId("HaDLvMFPT0ewd47rBGJ+7A.In_SignedURL"), function () {
return ((model.variables.assembleEventSummaryIn.isPBCCAttr) ? (OS.Navigation.VersionedURL.getVersionedUrl("img/Connect2_LegacyShared.BGTAudioRecordingSquare.png")) : (((model.variables.assembleEventSummaryIn.isVirtualAttr) ? (OS.Navigation.VersionedURL.getVersionedUrl("img/Connect2_LegacyShared.VirtualMeeting.svg")) : (model.variables.assembleEventSummaryIn.hostingSubdivisionHallPhotoSignedURLAttr))));
}, function () {
return model.variables.assembleEventSummaryIn.isPBCCAttr;
}, function () {
return model.variables.assembleEventSummaryIn.isVirtualAttr;
}, function () {
return model.variables.assembleEventSummaryIn.hostingSubdivisionHallPhotoSignedURLAttr;
}),
_in_SignedURLInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._assembleEventSummaryInDataFetchStatus),
In_IsRoundImage: true
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
uuid: "14",
alias: "8"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
label: PlaceholderContent.Empty,
imagePlaceholder: PlaceholderContent.Empty,
title_Placeholder: PlaceholderContent.Empty,
description_Placeholder: PlaceholderContent.Empty,
action_Placeholder: PlaceholderContent.Empty
},
_dependencies: []
})];
}, function () {
return [];
})];
}),
placeholder_Location: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "padding-y-s border-top-s text-neutral-2 margin-top-s",
visible: !(model.variables.assembleEventSummaryIn.isUnavailableAttr),
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._assembleEventSummaryInDataFetchStatus)
}, $if(model.variables.assembleEventSummaryIn.isVirtualAttr, false, this, function () {
return [React.createElement(Connect2_Assemble_MUI_Assemble_AssembleCommon_VirtualMeetingURL_mvc_view, {
inputs: {
VirtualMeetingURL: model.variables.assembleEventSummaryIn.virtualMeetingLinkAttr,
_virtualMeetingURLInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._assembleEventSummaryInDataFetchStatus),
VirtualMeetingId: model.variables.assembleEventSummaryIn.virtualMeetingIdAttr,
_virtualMeetingIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._assembleEventSummaryInDataFetchStatus),
VirtualMeetingPassword: model.variables.assembleEventSummaryIn.virtualMeetingPasswordAttr,
_virtualMeetingPasswordInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._assembleEventSummaryInDataFetchStatus),
VirtualMeetingPlatform: model.variables.assembleEventSummaryIn.virtualMeetingTypeLabelAttr,
_virtualMeetingPlatformInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._assembleEventSummaryInDataFetchStatus)
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
uuid: "16",
alias: "9"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [React.createElement(OSWidgets.Link, {
enabled: true,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Assemble/AssembleSummaryCard/Link_Address OnClick");
return controller.linkAddressOnClick$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
visible: true,
_idProps: {
service: idService,
name: "Link_Address"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(Connect2_Assemble_MUI_Assemble_AssembleSummary_Card_Row_mvc_view, {
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
uuid: "18",
alias: "10"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
placeholder_Icon_Left: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Icon, {
icon: "flag",
iconSize: /*FontSize*/ 0,
style: "text-primary icon connect-icon-place margin-right-xs font-size-base",
visible: true,
_idProps: {
service: idService,
uuid: "19"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
placeholder_Content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
style: "text-primary white-space-normal font-regular",
value: model.variables.assembleEventSummaryIn.hostingSubdivisionFormattedAddressAttr,
_idProps: {
service: idService,
uuid: "20"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._assembleEventSummaryInDataFetchStatus)
})];
}),
placeholder_Icon_Right: PlaceholderContent.Empty
},
_dependencies: [asPrimitiveValue(model.variables._assembleEventSummaryInDataFetchStatus), asPrimitiveValue(model.variables.assembleEventSummaryIn.hostingSubdivisionFormattedAddressAttr)]
}))];
}))];
})
},
_dependencies: [asPrimitiveValue(model.variables.assembleEventSummaryIn), asPrimitiveValue(model.variables._assembleEventSummaryInDataFetchStatus), asPrimitiveValue(model.variables._isListItemInDataFetchStatus), asPrimitiveValue(model.variables.isListItemIn)]
})));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("Connect2_Assemble_MUI.Assemble.AssembleSummaryCard.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.controller", "Connect2_Assemble_CS.model", "Connect2_LegacyShared.controller", "Connect2_AppLauncherPlugin.model", "Connect2_AppLauncherPlugin.controller", "Connect2_Assemble_MUI.languageResources", "Connect2_Assemble_MUI.Assemble.AssembleSummaryCard.mvc$debugger", "Connect2_Assemble_CS.model$AssembleEventSummaryRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_Assemble_CS", "Connect2_Assemble_MUI.controller$GetAssembleEventSummaryHeaderLabel", "Connect2_Assemble_MUI.model$TextTextTextRecord", "Connect2_Assemble_MUI.controller$GetAssembleHostedAtComponents", "Connect2_Assemble_MUI.controller$GetAssembleEventSummaryDateTimeString", "Connect2_LegacyShared.controller$NavigateToMaps", "Connect2_Assemble_MUI.referencesHealth$Connect2_LegacyShared", "Connect2_AppLauncherPlugin.model$LauncherParametersRec", "Connect2_Assemble_MUI.referencesHealth$Connect2_AppLauncherPlugin", "Connect2_AppLauncherPlugin.model$LauncherReturnRec", "Connect2_AppLauncherPlugin.controller$LaunchWithData"], function (OutSystems, Connect2_Assemble_MUIModel, Connect2_Assemble_MUIController, Connect2_Assemble_CSModel, Connect2_LegacySharedController, Connect2_AppLauncherPluginModel, Connect2_AppLauncherPluginController, Connect2_Assemble_MUILanguageResources, Connect2_Assemble_MUI_Assemble_AssembleSummaryCard_mvc_Debugger) {
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
Controller.prototype._linkAddressOnClick$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("LinkAddressOnClick");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_Assemble_MUI.Assemble.AssembleSummaryCard.LinkAddressOnClick$vars"))());
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var navigateToMapsVar = new OS.DataTypes.VariableHolder();
var launchWithDataVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.allExceptionsVar = allExceptionsVar;
varBag.navigateToMapsVar = navigateToMapsVar;
varBag.launchWithDataVar = launchWithDataVar;
OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:LYbSxb4Kt0+gweFsqNjsPQ:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.uBoDPuLTCUGjXAFjwDXcZA/ClientActions.LYbSxb4Kt0+gweFsqNjsPQ:7SGx2pEz2R+77PvZA14fkw", "Connect2_Assemble_MUI", "LinkAddressOnClick", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:X0iQaOV3kkWAq6LOKIBNpg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:WXLHdvy9DU212SoVn0fApA", callContext.id) && (model.variables.assembleEventSummaryIn.hostingSubdivisionFormattedAddressAttr === ""))) {
// Invalid
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:arXZXvuWtUaDrzxtvBuKcQ", callContext.id);
OS.FeedbackMessageService.showFeedbackMessage("Map is not available", /*Info*/ 0);
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:yySKrUQxqUy5zf65FXYYxw", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:OxiH9ZgsIUKGnIKwedBniw", callContext.id);
// MapsAddress = AssembleEventSummary.HostingSubdivisionFormattedAddress
vars.value.mapsAddressVar = model.variables.assembleEventSummaryIn.hostingSubdivisionFormattedAddressAttr;
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:V1DcWzEghUO3jkipwxfreg", callContext.id);
// Execute Action: NavigateToMaps
navigateToMapsVar.value = Connect2_LegacySharedController.default.navigateToMaps$Action(callContext);

// Choose Map Redirect
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:FdzNINDqVUaukXqaTjRHQg", callContext.id) && (navigateToMapsVar.value.mapNavigationRedirectIdOut === Connect2_Assemble_MUIModel.staticEntities.mapNavigationRedirect.androidBrowser))) {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:gXw+IVe8bESEF4w4G1H_YA", callContext.id);
// Destination: geo:0,0
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("geo:0,0", {
q: OS.DataConversion.ServerDataConverter.asString(vars.value.mapsAddressVar, OS.DataTypes.DataTypes.Text)
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
} else {
return OS.Flow.executeSequence(function () {
if((navigateToMapsVar.value.mapNavigationRedirectIdOut === Connect2_Assemble_MUIModel.staticEntities.mapNavigationRedirect.androidNative)) {
// Use coordinates?
if((OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:E3ANolyBdUGkiqzxAlHkKg", callContext.id) && model.variables.assembleEventSummaryIn.hostingSubdivisionUseCoordinatesAttr)) {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:hHIX3KEGTUyhyGRWSHmGow", callContext.id);
// MapsAddress = EncodeUrl + "," + EncodeUrl
vars.value.mapsAddressVar = ((OS.BuiltinFunctions.encodeUrl(OS.BuiltinFunctions.decimalToText(model.variables.assembleEventSummaryIn.hostingSubdivisionLatitudeAttr)) + ",") + OS.BuiltinFunctions.encodeUrl(OS.BuiltinFunctions.decimalToText(model.variables.assembleEventSummaryIn.hostingSubdivisionLongitudeAttr)));
} else {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:g6UWPJniSkmpo2qrwlVOYQ", callContext.id);
// MapsAddress = EncodeUrl
vars.value.mapsAddressVar = OS.BuiltinFunctions.encodeUrl(vars.value.mapsAddressVar);
}

OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:DufV6ZF8rEaLy6x7myI5Rg", callContext.id);
// Execute Action: LaunchWithData
model.flush();
return Connect2_AppLauncherPluginController.default.launchWithData$Action(function () {
var rec = new Connect2_AppLauncherPluginModel.LauncherParametersRec();
rec.packageNameAttr = "com.google.android.apps.maps";
rec.uriAttr = ("https://www.google.com/maps/search/?api=1&query=" + vars.value.mapsAddressVar);
rec.subActivityAttr = false;
return rec;
}(), callContext).then(function (value) {
launchWithDataVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:IXNcKKVQtEyRYT0MRRAwKg", callContext.id);
});
} else {
if((navigateToMapsVar.value.mapNavigationRedirectIdOut === Connect2_Assemble_MUIModel.staticEntities.mapNavigationRedirect.iPhoneBrowser)) {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:EtkAkucglUGRvgj+B9+t4Q", callContext.id);
// Destination: comgooglemapsurl://
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("comgooglemapsurl://", {
q: OS.DataConversion.ServerDataConverter.asString(vars.value.mapsAddressVar, OS.DataTypes.DataTypes.Text)
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
} else {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:LCs0LIAIukOFMBuDLdHOUA", callContext.id);
// Destination: https://www.google.com/maps/dir/?api=1
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("https://www.google.com/maps/dir/?api=1", {
api: OS.DataConversion.ServerDataConverter.asString(1, OS.DataTypes.DataTypes.Integer),
query: OS.DataConversion.ServerDataConverter.asString(vars.value.mapsAddressVar, OS.DataTypes.DataTypes.Text)
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
}

}

});
}

});
}

});
}).catch(function (ex) {
OS.Logger.trace("AssembleSummaryCard.LinkAddressOnClick", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:r0yuQNd3KkOZp+aY5+fxUQ", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:GceZUj2pk0mE7VSekTWiqg", callContext.id) && (OS.BuiltinFunctions.toLower(allExceptionsVar.value.exceptionMessageAttr) === "application not found for uri."))) {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:lvdY43HGtEG4v0J5s8n0aA", callContext.id);
// Raise Error: GoogleMapsNotInstalled
throw new OS.Exceptions.Exceptions.UserException("Connect2_Assemble_MUI.GoogleMapsNotInstalled", "Please install and enable Google Maps");
} else {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:EYkMdbAXkkmsgVcKn+cTWw", callContext.id);
// Raise Error: UnknownError
throw new OS.Exceptions.Exceptions.UserException("Connect2_Assemble_MUI.UnknownError", allExceptionsVar.value.exceptionMessageAttr);
}

});
}

throw ex;
}).then(function (res) {
OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:LYbSxb4Kt0+gweFsqNjsPQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:LYbSxb4Kt0+gweFsqNjsPQ", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("Connect2_Assemble_MUI.Assemble.AssembleSummaryCard.LinkAddressOnClick$vars", [{
name: "MapsAddress",
attrName: "mapsAddressVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);

Controller.prototype.linkAddressOnClick$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._linkAddressOnClick$Action, callContext);

};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:n+VQoM4mfUCcC1ucCtOSYA:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA:9jQU9CfZCZWwIcnaUbLRAg", "Connect2_Assemble_MUI", "Assemble", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:uBoDPuLTCUGjXAFjwDXcZA:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.uBoDPuLTCUGjXAFjwDXcZA:Ldb21gjgT3oXFUj4hd2SAA", "Connect2_Assemble_MUI", "AssembleSummaryCard", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:uBoDPuLTCUGjXAFjwDXcZA", callContext.id);
OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:n+VQoM4mfUCcC1ucCtOSYA", callContext.id);
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
return Connect2_Assemble_MUIController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, Connect2_Assemble_MUILanguageResources);
});

define("Connect2_Assemble_MUI.Assemble.AssembleSummaryCard.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"t5MLCZ_2IkKl7zQd0aVEow": {
getter: function (varBag, idService) {
return varBag.vars.value.mapsAddressVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"r0yuQNd3KkOZp+aY5+fxUQ": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"V1DcWzEghUO3jkipwxfreg": {
getter: function (varBag, idService) {
return varBag.navigateToMapsVar.value;
}
},
"DufV6ZF8rEaLy6x7myI5Rg": {
getter: function (varBag, idService) {
return varBag.launchWithDataVar.value;
}
},
"_Nl+wln9okSJokAJQI0nVQ": {
getter: function (varBag, idService) {
return varBag.model.variables.assembleEventSummaryIn;
}
},
"X+hHgyvqZUCXhyHfRGFoFQ": {
getter: function (varBag, idService) {
return varBag.model.variables.isListItemIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"hZm+kaswXkyoNO9_QIqrsA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Card_Visual"));
})(varBag.model, idService);
}
},
"s3Pn7cNYtE2Ig83g+4ncOw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_FloatingPill"));
})(varBag.model, idService);
}
},
"jYrDEHUFa0GPzzmeUM0Vig": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_OverlayText"));
})(varBag.model, idService);
}
},
"9JgyFHnVpUKzIo3HlY1fRg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Image"));
})(varBag.model, idService);
}
},
"UIK_R6C5PE2Q6JLD4Ub12g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_1"));
})(varBag.model, idService);
}
},
"imXN_LQgE0O6_C9mvv3sNg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("IsListItem3"));
})(varBag.model, idService);
}
},
"Y_dZ2R3HF0y+g2SKjVxrNg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_2"));
})(varBag.model, idService);
}
},
"0TKKcg+j4UOms5kho9WvGQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_3"));
})(varBag.model, idService);
}
},
"YMm1Ad4780SF5dG3fdoHBQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Icon_Left"));
})(varBag.model, idService);
}
},
"VvBhdGepSkW+n7FT5xnGWQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Content"));
})(varBag.model, idService);
}
},
"qfM7QGpSM0OuXsGZJhB+yA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Icon_Right"));
})(varBag.model, idService);
}
},
"aYKPNo6CiUmVuYkHeFgwBA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_4"));
})(varBag.model, idService);
}
},
"sazmcwydKU6xPkmGuAcfzg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Icon_Left"));
})(varBag.model, idService);
}
},
"zI8YHSbEIESjgWoJEuGF9Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Content"));
})(varBag.model, idService);
}
},
"dW_m3oQb0k+K7u1BzIoQlw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Icon_Right"));
})(varBag.model, idService);
}
},
"w2JV8JPxC0CS9ZXCvCS+Lg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_5"));
})(varBag.model, idService);
}
},
"vgnPQv4vtk6R4YgmmCAtng": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_6"));
})(varBag.model, idService);
}
},
"+VjJhv2bWkqBNk50BM5ffQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Icon_Left"));
})(varBag.model, idService);
}
},
"2Zp0dvcGc0y4zk9KA7f7vg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Content"));
})(varBag.model, idService);
}
},
"ATV_NgV0IUyRmxWSTIouJg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Icon_Right"));
})(varBag.model, idService);
}
},
"qF6nf0ndmEG_0+V3Iz6r1g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Right"));
})(varBag.model, idService);
}
},
"Dss9RJZ_mUq9x4MRKXAC+g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Label"));
})(varBag.model, idService);
}
},
"Ea_F8nsGf0yA++xmVPa82A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ImagePlaceholder"));
})(varBag.model, idService);
}
},
"JQHsomQockS3xE15eNmBSw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Title_Placeholder"));
})(varBag.model, idService);
}
},
"XZVfvg6rkUOCMegynu3btA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Description_Placeholder"));
})(varBag.model, idService);
}
},
"zkkjVF7dK0mH2sHkI7dylw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Action_Placeholder"));
})(varBag.model, idService);
}
},
"qgfJyYNiTUuzvNESy_m20A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Location"));
})(varBag.model, idService);
}
},
"WwZKRyui1kydu1RgPf2orA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("IsVirtual"));
})(varBag.model, idService);
}
},
"Jsaoadtkw0uJ3U2AS9Nt+Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Link_Address"));
})(varBag.model, idService);
}
},
"H2BScRXKikyYz2tlPTwpxw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Icon_Left"));
})(varBag.model, idService);
}
},
"KWNKD3VvCEuPqvNd4GAauA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Content"));
})(varBag.model, idService);
}
},
"uzSRaj6QIUmMOjOGCWckww": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Icon_Right"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
