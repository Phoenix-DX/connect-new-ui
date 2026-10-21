# UBTConnect.Directory_Household_Blocks.HouseholdDetails_TimelinePhoto_List

- Kind: shared; build screens using it: HouseholdCarousel, HouseholdDetails, Locality_Details, Profile, SupperMeeting_Carousel
- Compiled source: `migration/blocks/sources/UBTConnect.Directory_Household_Blocks.HouseholdDetails_TimelinePhoto_List.mvc.js`
- Child blocks: UBTConnect.Directory_Household_Blocks.HouseholdDetails_TimelinePhoto (queue: UBTConnect.Directory_Household_Blocks.HouseholdDetails_TimelinePhoto)

## Inputs

(none found)

## Captured DOM variants (0 distinct, 0 instances)


## Compiled view (debugger lines removed)

```js
define("UBTConnect.Directory_Household_Blocks.HouseholdDetails_TimelinePhoto_List.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "Connect_Household_CS.model", "react", "OutSystems/ReactView/Main", "UBTConnect.Directory_Household_Blocks.HouseholdDetails_TimelinePhoto_List.mvc$model", "UBTConnect.Directory_Household_Blocks.HouseholdDetails_TimelinePhoto_List.mvc$controller", "UBTConnect.clientVariables", "OutSystems/ReactWidgets/Main", "UBTConnect.Directory_Household_Blocks.HouseholdDetails_TimelinePhoto.mvc$view", "Connect_Household_CS.model$UI_HouseholdTimelineImagesRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect_Household_CS", "UBTConnect.model$UI_HouseholdTimelineImagesList"], function (OutSystems, UBTConnectModel, UBTConnectController, Connect_Household_CSModel, React, OSView, UBTConnect_Directory_Household_Blocks_HouseholdDetails_TimelinePhoto_List_mvc_model, UBTConnect_Directory_Household_Blocks_HouseholdDetails_TimelinePhoto_List_mvc_controller, UBTConnectClientVariables, OSWidgets, UBTConnect_Directory_Household_Blocks_HouseholdDetails_TimelinePhoto_mvc_view) {
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
        View.displayName = "Directory_Household_Blocks.HouseholdDetails_TimelinePhoto_List";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnect_Directory_Household_Blocks_HouseholdDetails_TimelinePhoto_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnect_Directory_Household_Blocks_HouseholdDetails_TimelinePhoto_List_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_Directory_Household_Blocks_HouseholdDetails_TimelinePhoto_List_mvc_controller;
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
            return React.createElement("div", this.getRootNodeProperties(), React.createElement(OSWidgets.List, {
animateItems: true,
extendedProperties: {
"disable-virtualization": "True"
},
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.in_HouseholdTimelineImagesIn,
style: "Household_GalleryCard-list list list-group list-horizontal--gap-xs",
tag: "div",
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider,
source_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_HouseholdTimelineImagesInDataFetchStatus),
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(UBTConnect_Directory_Household_Blocks_HouseholdDetails_TimelinePhoto_mvc_view, {
inputs: {
Label: model.variables.in_HouseholdTimelineImagesIn.getCurrent(callContext.iterationContext).labelAttr,
_labelInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_HouseholdTimelineImagesInDataFetchStatus),
In_CardTypeId: UBTConnectModel.staticEntities.uBT_ImageCardType.gallery,
In_BackgroundURL: model.variables.in_HouseholdTimelineImagesIn.getCurrent(callContext.iterationContext).signedURLAttr,
_in_BackgroundURLInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_HouseholdTimelineImagesInDataFetchStatus),
IsSelected: model.variables.in_HouseholdTimelineImagesIn.getCurrent(callContext.iterationContext).isCurrentAttr,
_isSelectedInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_HouseholdTimelineImagesInDataFetchStatus),
Date: model.variables.in_HouseholdTimelineImagesIn.getCurrent(callContext.iterationContext).dateAttr,
_dateInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_HouseholdTimelineImagesInDataFetchStatus)
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
selected$Action: function (dateIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);
controller.event_DateSelected$Action(dateIn, controller.callContext(eventHandlerContext));
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
uuid: "1",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, callContext, idService, "1")
},
_dependencies: [asPrimitiveValue(model.variables._in_HouseholdTimelineImagesInDataFetchStatus)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
    return View;
});
```
