define("Connect2_LegacyShared.Widgets.NotificationDetailBlock.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "OutSystemsUI_2_23.Content.Card.mvc$model", "Connect2_LegacyShared.Widgets.AdaptiveCardViewer.mvc$model", "ReactiveHtmlSanitizer.HtmlSanitizer.SanitizedHtml.mvc$model", "Connect2_LegacyShared.model$HostConfigRec", "Connect2_LegacyShared.model$HostConfig_SpacingRec", "Connect2_LegacyShared.model$HostConfig_FontTypeRec", "Connect2_LegacyShared.model$HostConfig_FontRec", "Connect2_LegacyShared.model$HostConfig_FontSizeRec", "Connect2_LegacyShared.model$HostConfig_FontWeightsRec"], function (OutSystems, Connect2_LegacySharedModel, OutSystemsUI_2_23_Content_Card_mvcModel, Connect2_LegacyShared_Widgets_AdaptiveCardViewer_mvcModel, ReactiveHtmlSanitizer_HtmlSanitizer_SanitizedHtml_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("Title", "titleIn", "Title", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_titleInDataFetchStatus", "_titleInDataFetchStatus", "_titleInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("ProfileIconURL", "profileIconURLIn", "ProfileIconURL", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_profileIconURLInDataFetchStatus", "_profileIconURLInDataFetchStatus", "_profileIconURLInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("Summary", "summaryIn", "Summary", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_summaryInDataFetchStatus", "_summaryInDataFetchStatus", "_summaryInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("IsUrgent", "isUrgentIn", "IsUrgent", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_isUrgentInDataFetchStatus", "_isUrgentInDataFetchStatus", "_isUrgentInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("isAdaptiveCard", "isAdaptiveCardIn", "isAdaptiveCard", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_isAdaptiveCardInDataFetchStatus", "_isAdaptiveCardInDataFetchStatus", "_isAdaptiveCardInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("AdaptiveCardContent", "adaptiveCardContentIn", "AdaptiveCardContent", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_adaptiveCardContentInDataFetchStatus", "_adaptiveCardContentInDataFetchStatus", "_adaptiveCardContentInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("MessageContent", "messageContentIn", "MessageContent", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_messageContentInDataFetchStatus", "_messageContentInDataFetchStatus", "_messageContentInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("DateTimeCreated", "dateTimeCreatedIn", "DateTimeCreated", true, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, false), 
this.attr("_dateTimeCreatedInDataFetchStatus", "_dateTimeCreatedInDataFetchStatus", "_dateTimeCreatedInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("HostConfig", "hostConfigIn", "HostConfig", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.HostConfigRec());
}, false, Connect2_LegacySharedModel.HostConfigRec), 
this.attr("_hostConfigInDataFetchStatus", "_hostConfigInDataFetchStatus", "_hostConfigInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("ShowDetailsPlaceholder", "showDetailsPlaceholderIn", "ShowDetailsPlaceholder", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_showDetailsPlaceholderInDataFetchStatus", "_showDetailsPlaceholderInDataFetchStatus", "_showDetailsPlaceholderInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("ForceNoIconBorder", "forceNoIconBorderIn", "ForceNoIconBorder", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_forceNoIconBorderInDataFetchStatus", "_forceNoIconBorderInDataFetchStatus", "_forceNoIconBorderInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("HasActionButton", "hasActionButtonIn", "HasActionButton", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_hasActionButtonInDataFetchStatus", "_hasActionButtonInDataFetchStatus", "_hasActionButtonInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = ((OutSystemsUI_2_23_Content_Card_mvcModel.hasValidationWidgets || Connect2_LegacyShared_Widgets_AdaptiveCardViewer_mvcModel.hasValidationWidgets) || ReactiveHtmlSanitizer_HtmlSanitizer_SanitizedHtml_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("Title" in inputs) {
this.variables.titleIn = inputs.Title;
if("_titleInDataFetchStatus" in inputs) {
this.variables._titleInDataFetchStatus = inputs._titleInDataFetchStatus;
}

}

if("ProfileIconURL" in inputs) {
this.variables.profileIconURLIn = inputs.ProfileIconURL;
if("_profileIconURLInDataFetchStatus" in inputs) {
this.variables._profileIconURLInDataFetchStatus = inputs._profileIconURLInDataFetchStatus;
}

}

if("Summary" in inputs) {
this.variables.summaryIn = inputs.Summary;
if("_summaryInDataFetchStatus" in inputs) {
this.variables._summaryInDataFetchStatus = inputs._summaryInDataFetchStatus;
}

}

if("IsUrgent" in inputs) {
this.variables.isUrgentIn = inputs.IsUrgent;
if("_isUrgentInDataFetchStatus" in inputs) {
this.variables._isUrgentInDataFetchStatus = inputs._isUrgentInDataFetchStatus;
}

}

if("isAdaptiveCard" in inputs) {
this.variables.isAdaptiveCardIn = inputs.isAdaptiveCard;
if("_isAdaptiveCardInDataFetchStatus" in inputs) {
this.variables._isAdaptiveCardInDataFetchStatus = inputs._isAdaptiveCardInDataFetchStatus;
}

}

if("AdaptiveCardContent" in inputs) {
this.variables.adaptiveCardContentIn = inputs.AdaptiveCardContent;
if("_adaptiveCardContentInDataFetchStatus" in inputs) {
this.variables._adaptiveCardContentInDataFetchStatus = inputs._adaptiveCardContentInDataFetchStatus;
}

}

if("MessageContent" in inputs) {
this.variables.messageContentIn = inputs.MessageContent;
if("_messageContentInDataFetchStatus" in inputs) {
this.variables._messageContentInDataFetchStatus = inputs._messageContentInDataFetchStatus;
}

}

if("DateTimeCreated" in inputs) {
this.variables.dateTimeCreatedIn = inputs.DateTimeCreated;
if("_dateTimeCreatedInDataFetchStatus" in inputs) {
this.variables._dateTimeCreatedInDataFetchStatus = inputs._dateTimeCreatedInDataFetchStatus;
}

}

if("HostConfig" in inputs) {
this.variables.hostConfigIn = inputs.HostConfig;
if("_hostConfigInDataFetchStatus" in inputs) {
this.variables._hostConfigInDataFetchStatus = inputs._hostConfigInDataFetchStatus;
}

}

if("ShowDetailsPlaceholder" in inputs) {
this.variables.showDetailsPlaceholderIn = inputs.ShowDetailsPlaceholder;
if("_showDetailsPlaceholderInDataFetchStatus" in inputs) {
this.variables._showDetailsPlaceholderInDataFetchStatus = inputs._showDetailsPlaceholderInDataFetchStatus;
}

}

if("ForceNoIconBorder" in inputs) {
this.variables.forceNoIconBorderIn = inputs.ForceNoIconBorder;
if("_forceNoIconBorderInDataFetchStatus" in inputs) {
this.variables._forceNoIconBorderInDataFetchStatus = inputs._forceNoIconBorderInDataFetchStatus;
}

}

if("HasActionButton" in inputs) {
this.variables.hasActionButtonIn = inputs.HasActionButton;
if("_hasActionButtonInDataFetchStatus" in inputs) {
this.variables._hasActionButtonInDataFetchStatus = inputs._hasActionButtonInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Widgets.NotificationDetailBlock");
});
define("Connect2_LegacyShared.Widgets.NotificationDetailBlock.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "react", "OutSystems/ReactView/Main", "Connect2_LegacyShared.Widgets.NotificationDetailBlock.mvc$model", "Connect2_LegacyShared.Widgets.NotificationDetailBlock.mvc$controller", "Connect2_LegacyShared.clientVariables", "OutSystemsUI_2_23.Content.Card.mvc$view", "OutSystems/ReactWidgets/Main", "Connect2_LegacyShared.Widgets.AdaptiveCardViewer.mvc$view", "ReactiveHtmlSanitizer.HtmlSanitizer.SanitizedHtml.mvc$view", "Connect2_LegacyShared.model$HostConfigRec", "Connect2_LegacyShared.model$HostConfig_SpacingRec", "Connect2_LegacyShared.model$HostConfig_FontTypeRec", "Connect2_LegacyShared.model$HostConfig_FontRec", "Connect2_LegacyShared.model$HostConfig_FontSizeRec", "Connect2_LegacyShared.model$HostConfig_FontWeightsRec"], function (OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, React, OSView, Connect2_LegacyShared_Widgets_NotificationDetailBlock_mvc_model, Connect2_LegacyShared_Widgets_NotificationDetailBlock_mvc_controller, Connect2_LegacySharedClientVariables, OutSystemsUI_2_23_Content_Card_mvc_view, OSWidgets, Connect2_LegacyShared_Widgets_AdaptiveCardViewer_mvc_view, ReactiveHtmlSanitizer_HtmlSanitizer_SanitizedHtml_mvc_view) {
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
        View.displayName = "Widgets.NotificationDetailBlock";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [OutSystemsUI_2_23_Content_Card_mvc_view, Connect2_LegacyShared_Widgets_AdaptiveCardViewer_mvc_view, ReactiveHtmlSanitizer_HtmlSanitizer_SanitizedHtml_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return Connect2_LegacyShared_Widgets_NotificationDetailBlock_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Connect2_LegacyShared_Widgets_NotificationDetailBlock_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(OutSystemsUI_2_23_Content_Card_mvc_view, {
inputs: {
UsePadding: true
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
name: "NotificationDetail",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "display-flex align-items-center",
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: model.getCachedValue(idService.getId("81m8VPsDCEiQK4XkZx8fnA.Style"), function () {
return ("notification-detail-icon-badge " + ((model.variables.forceNoIconBorderIn) ? ("no-border") : ((((model.variables.profileIconURLIn === OS.BuiltinFunctions.nullTextIdentifier())) ? ("no-border") : ("")))));
}, function () {
return model.variables.forceNoIconBorderIn;
}, function () {
return model.variables.profileIconURLIn;
}),
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._forceNoIconBorderInDataFetchStatus, model.variables._profileIconURLInDataFetchStatus)
}, $if(((model.variables.profileIconURLIn) !== (OS.BuiltinFunctions.nullTextIdentifier())), false, this, function () {
return [React.createElement(OSWidgets.Image, {
type: /*External*/ 1,
url: model.variables.profileIconURLIn,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
url_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._profileIconURLInDataFetchStatus)
})];
}, function () {
return [React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/Connect2_LegacyShared.User_rectangle.png"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "margin-top: 10px; padding: 0px 0px 0px 5px;"
},
gridProperties: {
classes: "ThemeGrid_Width8"
},
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "font-size: 100%;"
},
style: "bold heading3",
visible: true,
_idProps: {
service: idService,
name: "TitleContainer"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
style: "font-size: 100%;"
},
value: model.variables.titleIn,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._titleInDataFetchStatus)
})), $if(((model.variables.summaryIn) !== ("")), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
name: "SummaryContainer"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
style: "color: #605f5f; font-size: 14px;"
},
gridProperties: {
classes: "OSFillParent"
},
value: model.variables.summaryIn,
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._summaryInDataFetchStatus)
}))];
}, function () {
return [];
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "margin-top: 10px; padding: 0px; text-align: center;"
},
gridProperties: {
classes: "ThemeGrid_Width2",
marginLeft: "5px"
},
visible: true,
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if(model.variables.isUrgentIn, false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "margin-bottom: 5px; text-align: center;"
},
visible: true,
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
extendedProperties: {
style: "background-color: #fff; border-radius: 50px; border-style: solid; border-width: 2px; color: #fc0000; font-size: 12px; height: 20px; padding: 3px 0px 0px 0px; width: 20px;"
},
icon: "exclamation",
iconSize: /*FontSize*/ 0,
style: "icon alert-text fa-33",
visible: true,
_idProps: {
service: idService,
name: "Message_List_Item_Icon"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
}, function () {
return [];
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "border-color: #c6c6c6; border-style: solid; border-width: 2px 0px 0px 0px; margin-right: 10px; margin-top: 10px; padding: 15px 0px 10px 0px;"
},
style: "margin-top-base",
visible: true,
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if(model.variables.showDetailsPlaceholderIn, false, this, function () {
return [React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.messageDetails,
_idProps: {
service: idService,
name: "MessageDetails"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [$if(model.variables.isAdaptiveCardIn, false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(Connect2_LegacyShared_Widgets_AdaptiveCardViewer_mvc_view, {
inputs: {
In_AdaptiveCardJson: model.variables.adaptiveCardContentIn,
_in_AdaptiveCardJsonInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._adaptiveCardContentInDataFetchStatus),
In_HostConfig: model.variables.hostConfigIn,
_in_HostConfigInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._hostConfigInDataFetchStatus)
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onExecuteAction$Action: function (cardPayloadIn, actionIdIn, formPayloadIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Widgets/AdaptiveCardViewer OnExecuteAction");
return controller.adaptiveCardViewerOnExecuteAction$Action(cardPayloadIn, actionIdIn, formPayloadIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "16",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "white-space: normal; word-break: break-word;"
},
style: "whitespace-normal notification-detail-content",
visible: true,
_idProps: {
service: idService,
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(ReactiveHtmlSanitizer_HtmlSanitizer_SanitizedHtml_mvc_view, {
inputs: {
Value: model.variables.messageContentIn,
_valueInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._messageContentInDataFetchStatus),
AllowedCssStyles: "text-decoration,font-style,margin-left,padding-left",
AllowedTags: "img,s,i,em,ul,li,ol,u,blockquote,sup,sub",
AllowedAttributes: "src,style",
ResetWhitelist: true
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
uuid: "18",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))];
})];
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "margin-top: 3px;"
},
style: "margin-top-base",
visible: true,
_idProps: {
service: idService,
uuid: "19"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "text-note",
value: model.getCachedValue(idService.getId("Message_List_Item_Info.Value"), function () {
return ((!(model.variables.dateTimeCreatedIn.equals(OS.BuiltinFunctions.nullDate()))) ? (((OS.BuiltinFunctions.formatDateTime(model.variables.dateTimeCreatedIn, "ddd dd/MM/yyyy") + " ") + OS.BuiltinFunctions.toLower(OS.BuiltinFunctions.formatDateTime(model.variables.dateTimeCreatedIn, "h:mm tt")))) : (""));
}, function () {
return model.variables.dateTimeCreatedIn;
}),
_idProps: {
service: idService,
name: "Message_List_Item_Info"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._dateTimeCreatedInDataFetchStatus)
})), $if(model.variables.hasActionButtonIn, false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "margin-top-base",
visible: true,
_idProps: {
service: idService,
uuid: "21"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.placeholder_ActionButton,
_idProps: {
service: idService,
name: "Placeholder_ActionButton"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
}, function () {
return [];
})];
})
}
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("Connect2_LegacyShared.Widgets.NotificationDetailBlock.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "Connect2_LegacyShared.languageResources", "Connect2_LegacyShared.clientVariables", "Connect2_LegacyShared.Widgets.NotificationDetailBlock.mvc$debugger", "Connect2_LegacyShared.Widgets.NotificationDetailBlock.mvc$controller.OnReady.OpenLinksInSystemBrowserJS", "Connect2_LegacyShared.model$HostConfigRec", "Connect2_LegacyShared.model$HostConfig_SpacingRec", "Connect2_LegacyShared.model$HostConfig_FontTypeRec", "Connect2_LegacyShared.model$HostConfig_FontRec", "Connect2_LegacyShared.model$HostConfig_FontSizeRec", "Connect2_LegacyShared.model$HostConfig_FontWeightsRec"], function (OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, Connect2_LegacySharedLanguageResources, Connect2_LegacySharedClientVariables, Connect2_LegacyShared_Widgets_NotificationDetailBlock_mvc_Debugger, Connect2_LegacyShared_Widgets_NotificationDetailBlock_mvc_controller_OnReady_OpenLinksInSystemBrowserJS) {
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
Controller.prototype._adaptiveCardViewerOnExecuteAction$Action = function (cardPayloadIn, actionIdIn, formPayloadIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("AdaptiveCardViewerOnExecuteAction");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.Widgets.NotificationDetailBlock.AdaptiveCardViewerOnExecuteAction$vars"))());
vars.value.cardPayloadInLocal = cardPayloadIn;
vars.value.actionIdInLocal = actionIdIn;
vars.value.formPayloadInLocal = formPayloadIn;
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.communicationExceptionVar = communicationExceptionVar;
OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:AaqwPSVyAE6zDWFRBkpAIg:/NRWebFlows.kPWBbd+opEC3rMN6byDyUQ/NodesShownInESpaceTree.nFpeCXyFM0aXA3P0mNfm4A/ClientActions.AaqwPSVyAE6zDWFRBkpAIg:IrJqxHnJdPjPc56nsdft5A", "Connect2_LegacyShared", "AdaptiveCardViewerOnExecuteAction", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:BzzbGSyesUyjgiRnMkpMqg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:gfpXmMw1OECqw5RdpoAYxA", callContext.id);
// Trigger Event: AdaptiveCardEventExecuted
return controller.adaptiveCardEventExecuted$Action(vars.value.cardPayloadInLocal, vars.value.actionIdInLocal, vars.value.formPayloadInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:XH4iXtmr7UuSXgZBztwVPA", callContext.id);
});
}).catch(function (ex) {
OS.Logger.trace("NotificationDetailBlock.AdaptiveCardViewerOnExecuteAction", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: CommunicationException
if(OS.Exceptions.isInstanceOf(ex, OS.Exceptions.Exceptions.CommunicationException)) {
OS.Logger.error(null, ex);
communicationExceptionVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(communicationExceptionVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:rV0m3hkRiUe7rDNwW7O_gw", callContext.id);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:LV6ZzfRuUE+vjETp8e7f2g", callContext.id);
OS.FeedbackMessageService.showFeedbackMessage("Please check your internet connection!", /*Info*/ 0);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:Yz0OJDmIIU2hlNCIGyFnOw", callContext.id);
return OS.Flow.returnAsync();

});
}

throw ex;
}).then(function (res) {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:AaqwPSVyAE6zDWFRBkpAIg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:AaqwPSVyAE6zDWFRBkpAIg", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("Connect2_LegacyShared.Widgets.NotificationDetailBlock.AdaptiveCardViewerOnExecuteAction$vars", [{
name: "CardPayload",
attrName: "cardPayloadInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "ActionId",
attrName: "actionIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "FormPayload",
attrName: "formPayloadInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
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
varBag.callContext = callContext;
try {OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:c3w8lEnd_kGzWKxrSqC2JA:/NRWebFlows.kPWBbd+opEC3rMN6byDyUQ/NodesShownInESpaceTree.nFpeCXyFM0aXA3P0mNfm4A/ClientActions.c3w8lEnd_kGzWKxrSqC2JA:wgloA1jZXCJ2PZR_is5tlA", "Connect2_LegacyShared", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:vkVGa1kWm0KYK6_8ojLTZg", callContext.id);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:meO+glRZXUCRTPZxgvLkkA", callContext.id);
controller.safeExecuteJSNode(Connect2_LegacyShared_Widgets_NotificationDetailBlock_mvc_controller_OnReady_OpenLinksInSystemBrowserJS, "OpenLinksInSystemBrowser", "OnReady", {
ContainerId: OS.DataConversion.JSNodeParamConverter.to(idService.getId("NotificationDetail"), OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:LFpgKzIIr0SjSl_s+FvvTg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:c3w8lEnd_kGzWKxrSqC2JA", callContext.id);
}

};

Controller.prototype.adaptiveCardViewerOnExecuteAction$Action = function (cardPayloadIn, actionIdIn, formPayloadIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._adaptiveCardViewerOnExecuteAction$Action, callContext, cardPayloadIn, actionIdIn, formPayloadIn);

};
Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.adaptiveCardEventExecuted$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:kPWBbd+opEC3rMN6byDyUQ:/NRWebFlows.kPWBbd+opEC3rMN6byDyUQ:hPUCrJAnBlRVqA2UZwyBjg", "Connect2_LegacyShared", "Widgets", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:nFpeCXyFM0aXA3P0mNfm4A:/NRWebFlows.kPWBbd+opEC3rMN6byDyUQ/NodesShownInESpaceTree.nFpeCXyFM0aXA3P0mNfm4A:yhrGF+IylAq5AmFcutrDKQ", "Connect2_LegacyShared", "NotificationDetailBlock", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:nFpeCXyFM0aXA3P0mNfm4A", callContext.id);
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:kPWBbd+opEC3rMN6byDyUQ", callContext.id);
};
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Widgets/NotificationDetailBlock On Ready");
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
return Connect2_LegacySharedController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, Connect2_LegacySharedLanguageResources);
});
define("Connect2_LegacyShared.Widgets.NotificationDetailBlock.mvc$controller.OnReady.OpenLinksInSystemBrowserJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var container = document.getElementById($parameters.ContainerId);

container.addEventListener("click", function(evt) {
    if (evt.target.tagName == "A" && evt.target.href) {
        evt.stopPropagation();
        evt.preventDefault();
        
        if (window.cordova && window.cordova.InAppBrowser) {
            window.cordova.InAppBrowser.open(evt.target.href, "_system")
        } else {
            window.open(evt.target.href, "_blank");
        }
    }
});
};
});

define("Connect2_LegacyShared.Widgets.NotificationDetailBlock.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"bzNfNOirBUSpQa6LhEjprQ": {
getter: function (varBag, idService) {
return varBag.vars.value.cardPayloadInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"lZLeQpoS4Um69d7sigcsFQ": {
getter: function (varBag, idService) {
return varBag.vars.value.actionIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"NdxjGO48VESKCbsybYILNw": {
getter: function (varBag, idService) {
return varBag.vars.value.formPayloadInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"rV0m3hkRiUe7rDNwW7O_gw": {
getter: function (varBag, idService) {
return varBag.communicationExceptionVar.value;
}
},
"meO+glRZXUCRTPZxgvLkkA": {
getter: function (varBag, idService) {
return varBag.openLinksInSystemBrowserJSResult.value;
}
},
"Hfej1hzeBEG6mfMG0Pp28A": {
getter: function (varBag, idService) {
return varBag.model.variables.titleIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"7+EMrGxvaEuTYWqvMt4qHw": {
getter: function (varBag, idService) {
return varBag.model.variables.profileIconURLIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"wFVOcbWtcEe0LW_UhX5djQ": {
getter: function (varBag, idService) {
return varBag.model.variables.summaryIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"g4YO6WYWS0iSAkD+QcqH2g": {
getter: function (varBag, idService) {
return varBag.model.variables.isUrgentIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"orvBW1Jd+Eu+WISFDXS5EQ": {
getter: function (varBag, idService) {
return varBag.model.variables.isAdaptiveCardIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"THM1y+vYEkCYJWYu1q2_cA": {
getter: function (varBag, idService) {
return varBag.model.variables.adaptiveCardContentIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"jeOrUNLRB0Sg5fV4DQYVuQ": {
getter: function (varBag, idService) {
return varBag.model.variables.messageContentIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"uqYh4Fq+J0qxATy0vNHAAQ": {
getter: function (varBag, idService) {
return varBag.model.variables.dateTimeCreatedIn;
},
dataType: OS.DataTypes.DataTypes.DateTime
},
"pJ3mlp6UaEqWAOCq8TH5Mg": {
getter: function (varBag, idService) {
return varBag.model.variables.hostConfigIn;
}
},
"Lt+wWNoBa0mnm5zIftCRJw": {
getter: function (varBag, idService) {
return varBag.model.variables.showDetailsPlaceholderIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"8P1mjosmCk6zE6RER2TgRw": {
getter: function (varBag, idService) {
return varBag.model.variables.forceNoIconBorderIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"0iHJm4PJOUG0K_SVmRvFfA": {
getter: function (varBag, idService) {
return varBag.model.variables.hasActionButtonIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"927W+taJ4UWhkiQVvvTkYg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("NotificationDetail"));
})(varBag.model, idService);
}
},
"EZeXhqFso0mMQvF6BVAW8A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"qOduwYyba0KAPpyoDsqbPQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_HasProfileIconURL"));
})(varBag.model, idService);
}
},
"JXuzZGPU5UuyNJnjGhx8aQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("TitleContainer"));
})(varBag.model, idService);
}
},
"9TGcNLMw0EqXD1s9oK5SXg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_HasSummary"));
})(varBag.model, idService);
}
},
"etxc7zQgkUWVjlCcsB3seg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("SummaryContainer"));
})(varBag.model, idService);
}
},
"Em8CcCMPSUqVi5lhvrHgGg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("IsUrgentMessage"));
})(varBag.model, idService);
}
},
"WojyeNaDOUWoBCGdB+dtIw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Message_List_Item_Icon"));
})(varBag.model, idService);
}
},
"007rTbFPWkCIbV4eVmH0_w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_ShowDetailsPlaceholder"));
})(varBag.model, idService);
}
},
"uiLMnljtKUCDHRvqgE1hSA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("MessageDetails"));
})(varBag.model, idService);
}
},
"qxCJlX1Y0UCfh9oip5ha_Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_isAdaptiveCardCheck"));
})(varBag.model, idService);
}
},
"xEhT0fIB2EyXsAYWZ3lawQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Message_List_Item_Info"));
})(varBag.model, idService);
}
},
"gLgvYwvA50SjewYEIsRjdQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_HasActionButton"));
})(varBag.model, idService);
}
},
"EVYqzo_EwUWa_nT5Ri+cHg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_ActionButton"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
