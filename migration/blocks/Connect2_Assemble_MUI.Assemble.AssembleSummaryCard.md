# Connect2_Assemble_MUI.Assemble.AssembleSummaryCard

- Kind: shared; build screens using it: AssembleDetail, AssembleEvents
- Compiled source: `migration/blocks/sources/Connect2_Assemble_MUI.Assemble.AssembleSummaryCard.mvc.js`
- Child blocks: Connect2_Assemble_MUI.Assemble.AssembleCommon_VirtualMeetingURL, Connect2_Assemble_MUI.Assemble.AssembleSummaryCard__Header, Connect2_Assemble_MUI.Assemble.AssembleSummary_Card_Row, Connect2_LegacyShared.NewConnect_Utilities.NC_Card_Item_Visual, Connect2_LegacyShared.NewConnect_Utilities.NC_Result_Item__Card, Connect2_LegacyShared.NewConnect_Utilities.NC_Result_Item__Image (queue: Connect2_Assemble_MUI.Assemble.AssembleCommon_VirtualMeetingURL, Connect2_Assemble_MUI.Assemble.AssembleSummaryCard__Header, Connect2_Assemble_MUI.Assemble.AssembleSummary_Card_Row, Connect2_LegacyShared.NewConnect_Utilities.NC_Card_Item_Visual, Connect2_LegacyShared.NewConnect_Utilities.NC_Result_Item__Card, Connect2_LegacyShared.NewConnect_Utilities.NC_Result_Item__Image)

## Inputs

(none found)

## Captured DOM variants (0 distinct, 0 instances)


## Compiled view (debugger lines removed)

```js
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
```
(… 274 more lines in `migration/blocks/sources/Connect2_Assemble_MUI.Assemble.AssembleSummaryCard.mvc.js`)
