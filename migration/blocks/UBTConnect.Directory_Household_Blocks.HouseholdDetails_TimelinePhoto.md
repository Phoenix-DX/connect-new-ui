# UBTConnect.Directory_Household_Blocks.HouseholdDetails_TimelinePhoto

- Kind: shared; build screens using it: HouseholdCarousel, HouseholdDetails, Locality_Details, Profile, SupperMeeting_Carousel
- Compiled source: `migration/blocks/sources/UBTConnect.Directory_Household_Blocks.HouseholdDetails_TimelinePhoto.mvc.js`
- Child blocks: UBTConnectLibrary.BasePatterns.CustomContainer, UBTConnect_Utils.CW_Image.UBT_LazyImage (queue: -)

## Inputs

(none found)

## Captured DOM variants (0 distinct, 0 instances)


## Compiled view (debugger lines removed)

```js
define("UBTConnect.Directory_Household_Blocks.HouseholdDetails_TimelinePhoto.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.controller", "UBTConnectLibrary.model", "react", "OutSystems/ReactView/Main", "UBTConnect.Directory_Household_Blocks.HouseholdDetails_TimelinePhoto.mvc$model", "UBTConnect.Directory_Household_Blocks.HouseholdDetails_TimelinePhoto.mvc$controller", "UBTConnect.clientVariables", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnect_Utils.CW_Image.UBT_LazyImage.mvc$view", "UBTConnectLibrary.controller$GetClasses_BackgroundImageSize", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.controller$FormatClasses", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$LazyImageSizeRec"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryController, UBTConnectLibraryModel, React, OSView, UBTConnect_Directory_Household_Blocks_HouseholdDetails_TimelinePhoto_mvc_model, UBTConnect_Directory_Household_Blocks_HouseholdDetails_TimelinePhoto_mvc_controller, UBTConnectClientVariables, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, OSWidgets, UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view) {
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
        View.displayName = "Directory_Household_Blocks.HouseholdDetails_TimelinePhoto";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnect_Directory_Household_Blocks_HouseholdDetails_TimelinePhoto_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_Directory_Household_Blocks_HouseholdDetails_TimelinePhoto_mvc_controller;
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
            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("Block_Image.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.borderOptionsAttr = function () {
var rec = new UBTConnectLibraryModel.BorderOptionsRec();
rec.colorAttr = ((model.variables.isSelectedIn) ? (UBTConnectModel.staticEntities.uBT_Color.primary) : (UBTConnectModel.staticEntities.uBT_Color.neutral3));
rec.sizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.generalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
return rec;
}();
rec.radiusAttr = function () {
var rec = new UBTConnectLibraryModel.RadiusOptionsRec();
rec.generalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Shape.soft;
return rec;
}();
return rec;
}();
rec.displayOptionsAttr = function () {
var rec = new UBTConnectLibraryModel.DisplayOptionsRec();
rec.displayAttr = UBTConnectModel.staticEntities.uBT_Display.flex;
rec.alignItemsAttr = UBTConnectModel.staticEntities.uBT_AlignItems.flexStart;
rec.justifyContentAttr = UBTConnectModel.staticEntities.uBT_JustifyContent.center;
return rec;
}();
rec.isSkeletonElementAttr = false;
return rec;
}();
}, function () {
return model.variables.isSelectedIn;
}),
_optionsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isSelectedInDataFetchStatus),
ExtendedClasses: model.getCachedValue(idService.getId("Block_Image.ExtendedClasses"), function () {
return UBTConnectLibraryController.default.getClasses_BackgroundImageSize$Action(model.variables.in_CardTypeIdIn, 0, callContext).classesOut;
}, OS.DataTypes.DataTypes.Text, callContext.id), callContext).classesOutOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
}, function () {
return model.variables.mainContainerClassVar;
}, function () {
return model.variables.in_CardTypeIdIn;
}),
_extendedClassesInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_CardTypeIdInDataFetchStatus)
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
controller.selected$Action(model.variables.dateIn, controller.callContext(eventHandlerContext));
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
name: "Block_Image",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view, {
inputs: {
ImageURL: model.variables.in_BackgroundURLIn,
_imageURLInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_BackgroundURLInDataFetchStatus),
In_BorderRadius: UBTConnectModel.staticEntities.uBT_Shape.soft,
ImageSize: model.getCachedValue(idService.getId("9Koet_dRdUmNA8p44v2MZQ.ImageSize"), function () {
return function () {
var rec = new UBTConnectLibraryModel.LazyImageSizeRec();
rec.heightAttr = UBTConnectModel.staticEntities.uBT_ImageSize.large_65;
rec.widthAttr = UBTConnectModel.staticEntities.uBT_ImageSize.auto;
return rec;
}();
}),
EntityId: model.getCachedValue(idService.getId("9Koet_dRdUmNA8p44v2MZQ.EntityId"), function () {
return (OS.BuiltinFunctions.nullIdentifier()).toString();
}),
EntityType: UBTConnectModel.staticEntities.connect_Entity.household
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
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "householdImage_horizontalCard-label",
visible: ((model.variables.in_BackgroundURLIn) !== ("")),
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_BackgroundURLInDataFetchStatus)
}, React.createElement(OSWidgets.Expression, {
value: model.variables.labelIn,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._labelInDataFetchStatus)
}))];
})
},
_dependencies: [asPrimitiveValue(model.variables.labelIn), asPrimitiveValue(model.variables._labelInDataFetchStatus), asPrimitiveValue(model.variables._in_BackgroundURLInDataFetchStatus), asPrimitiveValue(model.variables.in_BackgroundURLIn)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
    return View;
});
```
