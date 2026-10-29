define("UBTConnect.App_Menu.Menu_List.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnectLibrary.model", "UBTConnect.model$UI_MenuSectionRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnect.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.model$InlineIconRec", "UBTConnect.model$UI_ListMenuOptionRec"], function (OutSystems, UBTConnectModel, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("In_MenuSection", "in_MenuSectionIn", "In_MenuSection", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.UI_MenuSectionRec());
}, false, UBTConnectModel.UI_MenuSectionRec), 
this.attr("_in_MenuSectionInDataFetchStatus", "_in_MenuSectionInDataFetchStatus", "_in_MenuSectionInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
return {
Switch1: OS.Model.ValidationWidgetRecord
};
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
return true;
}
});

Model.prototype.setInputs = function (inputs) {
if("In_MenuSection" in inputs) {
this.variables.in_MenuSectionIn = inputs.In_MenuSection;
if("_in_MenuSectionInDataFetchStatus" in inputs) {
this.variables._in_MenuSectionInDataFetchStatus = inputs._in_MenuSectionInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "App_Menu.Menu_List");
});
define("UBTConnect.App_Menu.Menu_List.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "react", "OutSystems/ReactView/Main", "UBTConnect.App_Menu.Menu_List.mvc$model", "UBTConnect.App_Menu.Menu_List.mvc$controller", "UBTConnect.clientVariables", "UBTConnect.App_Common_Blocks.SectionSeparator.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$view", "UBTConnectLibrary.BasePatterns.Columns_Three.mvc$view", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$view", "UBTConnectLibrary.BasePatterns.CustomText.mvc$view", "UBTConnectLibrary.ConnectPatterns.IconText.mvc$view", "UBTConnect.model$UI_MenuSectionRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnect.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.model$InlineIconRec", "UBTConnect.model$UI_ListMenuOptionRec"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, React, OSView, UBTConnect_App_Menu_Menu_List_mvc_model, UBTConnect_App_Menu_Menu_List_mvc_controller, UBTConnectClientVariables, UBTConnect_App_Common_Blocks_SectionSeparator_mvc_view, OSWidgets, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, UBTConnectLibrary_BasePatterns_Columns_Three_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnectLibrary_ConnectPatterns_IconText_mvc_view) {
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
        View.displayName = "App_Menu.Menu_List";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnect_App_Common_Blocks_SectionSeparator_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, UBTConnectLibrary_BasePatterns_Columns_Three_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnectLibrary_ConnectPatterns_IconText_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnect_App_Menu_Menu_List_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_App_Menu_Menu_List_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), $if(model.variables.in_MenuSectionIn.hasSeparatorAttr, false, this, function () {
return [React.createElement(UBTConnect_App_Common_Blocks_SectionSeparator_mvc_view, {
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
_dependencies: []
})];
}, function () {
return [];
}), React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("piav_wIPHE2o2MhOC2vzqg.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.backgroundAttr = function () {
var rec = new UBTConnectLibraryModel.BackgroundOptionsRec();
rec.backgroundColorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral0;
return rec;
}();
rec.paddingSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.horizontalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.base;
return rec;
}();
return rec;
}();
})
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
placeholders: {
content: new PlaceholderContent(function () {
return [$if(((model.variables.in_MenuSectionIn.sectionTitleAttr) !== ("")), false, this, function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("b_Gw4YyjA0mb7n8dgRMQuQ.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.paddingSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.verticalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
return rec;
}();
rec.textOptionsAttr = function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral8;
rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.extraSmall;
rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.semiBold;
return rec;
}();
return rec;
}();
})
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
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
value: model.variables.in_MenuSectionIn.sectionTitleAttr,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_MenuSectionInDataFetchStatus)
})];
})
},
_dependencies: [asPrimitiveValue(model.variables._in_MenuSectionInDataFetchStatus), asPrimitiveValue(model.variables.in_MenuSectionIn.sectionTitleAttr)]
})];
}, function () {
return [];
}), React.createElement(OSWidgets.List, {
animateItems: true,
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.in_MenuSectionIn.menuOptionsAttr,
style: "list list-group",
tag: "div",
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
source_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_MenuSectionInDataFetchStatus),
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, {
inputs: {
In_IsLoading: model.variables.in_MenuSectionIn.menuOptionsAttr.getCurrent(callContext.iterationContext).isLoadingAttr,
_in_IsLoadingInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_MenuSectionInDataFetchStatus)
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
placeholders: {
placeholder_LoadingSection: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("MttpggXiVkWeiBXwegskWA.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.paddingSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.generalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
return rec;
}();
rec.borderOptionsAttr = function () {
var rec = new UBTConnectLibraryModel.BorderOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral3;
rec.sizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.bottomSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
return rec;
}();
return rec;
}();
return rec;
}();
})
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
clicked$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "BasePatterns/CustomContainer Clicked");
controller.onClick_MenuOption$Action(model.variables.in_MenuSectionIn.menuOptionsAttr.getCurrent(callContext.iterationContext), controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
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
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_Columns_Three_mvc_view, {
inputs: {
ColumnOptions: model.getCachedValue(idService.getId("uu1HAB552ESY3dl+fmNIjw.ColumnOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ColumnOptionsRec();
rec.columnBehaviourAttr = UBTConnectModel.staticEntities.uBT_ColumnBehaviour.expandMiddle;
rec.spacingSizeAttr = UBTConnectModel.staticEntities.uBT_Size.small;
rec.verticalAlignAttr = UBTConnectModel.staticEntities.uBT_VerticalAlign.center;
return rec;
}();
})
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
uuid: "7",
alias: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
left: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
inputs: {
In_ColorId: UBTConnectModel.staticEntities.uBT_Color.neutral9,
In_SizeId: UBTConnectModel.staticEntities.uBT_IconsSize.base_24,
In_IconId: model.variables.in_MenuSectionIn.menuOptionsAttr.getCurrent(callContext.iterationContext).iconIdAttr,
_in_IconIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_MenuSectionInDataFetchStatus)
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
uuid: "8",
alias: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}),
middle: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
In_TextOptions: model.getCachedValue(idService.getId("uTMQE1v0OkSpOBSQwplbRw.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral9;
rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.extraSmall;
rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.regular;
return rec;
}();
}),
In_Text: model.variables.in_MenuSectionIn.menuOptionsAttr.getCurrent(callContext.iterationContext).labelAttr,
_in_TextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_MenuSectionInDataFetchStatus)
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
uuid: "9",
alias: "8"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), $if(((model.variables.in_MenuSectionIn.menuOptionsAttr.getCurrent(callContext.iterationContext).labelDescriptionAttr) !== ("")), false, this, function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
In_TextOptions: model.getCachedValue(idService.getId("gSJAzuHHX0uOlzqA+sJAng.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral6;
rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.extraSmall;
rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.regular;
return rec;
}();
}),
In_Text: model.variables.in_MenuSectionIn.menuOptionsAttr.getCurrent(callContext.iterationContext).labelDescriptionAttr,
_in_TextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_MenuSectionInDataFetchStatus)
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
uuid: "10",
alias: "9"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [];
})];
}),
right: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, {
inputs: {
In_IsLoading: model.variables.in_MenuSectionIn.menuOptionsAttr.getCurrent(callContext.iterationContext).iconRightLoadingAttr,
_in_IsLoadingInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_MenuSectionInDataFetchStatus)
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
alias: "10"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
placeholder_LoadingSection: new PlaceholderContent(function () {
return [$if(model.variables.in_MenuSectionIn.menuOptionsAttr.getCurrent(callContext.iterationContext).useSwitchAttr, false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "item-switch",
visible: true,
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Switch, {
_validationProps: {
validationService: validationService
},
enabled: true,
style: "switch",
variable: model.createVariable(OS.DataTypes.DataTypes.Boolean, model.variables.in_MenuSectionIn.menuOptionsAttr.getCurrent(callContext.iterationContext).switchValueAttr, function (value) {
model.variables.in_MenuSectionIn.menuOptionsAttr.getCurrent(callContext.iterationContext).switchValueAttr = value;
}),
_idProps: {
service: idService,
name: "Switch1"
},
_widgetRecordProvider: widgetsRecordProvider,
variable_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_MenuSectionInDataFetchStatus)
}))];
}, function () {
return [$if(((model.variables.in_MenuSectionIn.menuOptionsAttr.getCurrent(callContext.iterationContext).iconRightTextAttr) !== ("")), false, this, function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, {
inputs: {
TextOptions: model.getCachedValue(idService.getId("SCz9YKRrjkGX05va6XuwgA.TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral8;
rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.extraSmall;
rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.regular;
return rec;
}();
}),
IsIconOnRight: true,
Text: model.variables.in_MenuSectionIn.menuOptionsAttr.getCurrent(callContext.iterationContext).iconRightTextAttr,
_textInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_MenuSectionInDataFetchStatus),
SpacingSize: UBTConnectModel.staticEntities.uBT_Size.small
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
alias: "11"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
icon: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
inputs: {
In_SizeId: UBTConnectModel.staticEntities.uBT_IconsSize.base_24,
In_IconId: model.variables.in_MenuSectionIn.menuOptionsAttr.getCurrent(callContext.iterationContext).iconRightAttr,
_in_IconIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_MenuSectionInDataFetchStatus),
In_ColorId: UBTConnectModel.staticEntities.uBT_Color.neutral7
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
alias: "12"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables._in_MenuSectionInDataFetchStatus), asPrimitiveValue(model.variables.in_MenuSectionIn.menuOptionsAttr.getCurrent(callContext.iterationContext).iconRightAttr)]
})];
}, function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
inputs: {
In_IconId: model.variables.in_MenuSectionIn.menuOptionsAttr.getCurrent(callContext.iterationContext).iconRightAttr,
_in_IconIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_MenuSectionInDataFetchStatus),
In_SizeId: UBTConnectModel.staticEntities.uBT_IconsSize.base_24,
In_ColorId: UBTConnectModel.staticEntities.uBT_Color.neutral7
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
alias: "13"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})];
})];
})
},
_dependencies: [asPrimitiveValue(model.variables._in_MenuSectionInDataFetchStatus), asPrimitiveValue(model.variables.in_MenuSectionIn.menuOptionsAttr.getCurrent(callContext.iterationContext).iconRightAttr), asPrimitiveValue(model.variables.in_MenuSectionIn.menuOptionsAttr.getCurrent(callContext.iterationContext).iconRightTextAttr), asPrimitiveValue(model.variables.in_MenuSectionIn.menuOptionsAttr.getCurrent(callContext.iterationContext).switchValueAttr), asPrimitiveValue(model.variables.in_MenuSectionIn.menuOptionsAttr.getCurrent(callContext.iterationContext).useSwitchAttr)]
})];
})
},
_dependencies: [asPrimitiveValue(model.variables._in_MenuSectionInDataFetchStatus), asPrimitiveValue(model.variables.in_MenuSectionIn.menuOptionsAttr.getCurrent(callContext.iterationContext).iconRightAttr), asPrimitiveValue(model.variables.in_MenuSectionIn.menuOptionsAttr.getCurrent(callContext.iterationContext).iconRightTextAttr), asPrimitiveValue(model.variables.in_MenuSectionIn.menuOptionsAttr.getCurrent(callContext.iterationContext).switchValueAttr), asPrimitiveValue(model.variables.in_MenuSectionIn.menuOptionsAttr.getCurrent(callContext.iterationContext).useSwitchAttr), asPrimitiveValue(model.variables.in_MenuSectionIn.menuOptionsAttr.getCurrent(callContext.iterationContext).iconRightLoadingAttr), asPrimitiveValue(model.variables.in_MenuSectionIn.menuOptionsAttr.getCurrent(callContext.iterationContext).labelDescriptionAttr), asPrimitiveValue(model.variables.in_MenuSectionIn.menuOptionsAttr.getCurrent(callContext.iterationContext).labelAttr), asPrimitiveValue(model.variables.in_MenuSectionIn.menuOptionsAttr.getCurrent(callContext.iterationContext).iconIdAttr)]
})];
})
},
_dependencies: [asPrimitiveValue(model.variables._in_MenuSectionInDataFetchStatus), asPrimitiveValue(model.variables.in_MenuSectionIn.menuOptionsAttr.getCurrent(callContext.iterationContext).iconRightAttr), asPrimitiveValue(model.variables.in_MenuSectionIn.menuOptionsAttr.getCurrent(callContext.iterationContext).iconRightTextAttr), asPrimitiveValue(model.variables.in_MenuSectionIn.menuOptionsAttr.getCurrent(callContext.iterationContext).switchValueAttr), asPrimitiveValue(model.variables.in_MenuSectionIn.menuOptionsAttr.getCurrent(callContext.iterationContext).useSwitchAttr), asPrimitiveValue(model.variables.in_MenuSectionIn.menuOptionsAttr.getCurrent(callContext.iterationContext).iconRightLoadingAttr), asPrimitiveValue(model.variables.in_MenuSectionIn.menuOptionsAttr.getCurrent(callContext.iterationContext).labelDescriptionAttr), asPrimitiveValue(model.variables.in_MenuSectionIn.menuOptionsAttr.getCurrent(callContext.iterationContext).labelAttr), asPrimitiveValue(model.variables.in_MenuSectionIn.menuOptionsAttr.getCurrent(callContext.iterationContext).iconIdAttr)]
})];
})
},
_dependencies: [asPrimitiveValue(model.variables._in_MenuSectionInDataFetchStatus), asPrimitiveValue(model.variables.in_MenuSectionIn.menuOptionsAttr.getCurrent(callContext.iterationContext))]
})];
}, callContext, idService, "1")
},
_dependencies: [asPrimitiveValue(model.variables._in_MenuSectionInDataFetchStatus)]
})];
})
},
_dependencies: [asPrimitiveValue(model.variables._in_MenuSectionInDataFetchStatus), asPrimitiveValue(model.variables.in_MenuSectionIn.menuOptionsAttr), asPrimitiveValue(model.variables.in_MenuSectionIn.sectionTitleAttr)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("UBTConnect.App_Menu.Menu_List.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.App_Menu.Menu_List.mvc$debugger", "UBTConnect.model$UI_MenuSectionRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnect.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.model$InlineIconRec", "UBTConnect.model$UI_ListMenuOptionRec"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_App_Menu_Menu_List_mvc_Debugger) {
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

Controller.prototype.onClick_MenuOption$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:MYece3hSIUew7QsUSQXJdw:/NRWebFlows.MYece3hSIUew7QsUSQXJdw:rb6xGIB+BVZXljBZL+G3Tw", "UBTConnect", "App_Menu", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:gTroUB7I2USYTrnkpsslSA:/NRWebFlows.MYece3hSIUew7QsUSQXJdw/NodesShownInESpaceTree.gTroUB7I2USYTrnkpsslSA:q9K8Kf2rWLFuR79pnnORIw", "UBTConnect", "Menu_List", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:gTroUB7I2USYTrnkpsslSA", callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:MYece3hSIUew7QsUSQXJdw", callContext.id);
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
return UBTConnectController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, UBTConnectLanguageResources);
});

define("UBTConnect.App_Menu.Menu_List.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"qWjOuODMEE22ssCJzeDOeg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_MenuSectionIn;
}
},
"8gSBQlKOIUSEW7osYHmBew": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"COoYc9aYrUOUh3zfzpGY+Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"EbCz1A_OE0SubMf9LzhOAg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_LoadingSection"));
})(varBag.model, idService);
}
},
"5EZo8EHZJ0iDkqCYgMqYrg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"F3lLjkEwgkC4Q8SS3RG+PQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Left"));
})(varBag.model, idService);
}
},
"9MCOwyBez069bLIirOY3Mg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Middle"));
})(varBag.model, idService);
}
},
"UrioOZ3s70ukgm_a2cV2fQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Right"));
})(varBag.model, idService);
}
},
"m+vcOpsWS0+EOyqmtzArVw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_LoadingSection"));
})(varBag.model, idService);
}
},
"H9IF7DKs+kKwzAcib_2IAA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("useSwitch"));
})(varBag.model, idService);
}
},
"CsToNj2AUEC_s92w0Lykgw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Switch1"));
})(varBag.model, idService);
}
},
"WZGWYRlmNEij2NsgWC5OUA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HasRightText"));
})(varBag.model, idService);
}
},
"h5O9qLBzfkaeO5Nd+NGiSg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Icon"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
