# UBTConnect.Directory_CommonBlocks.Directory_EmptyState

- Kind: shared; build screens using it: HouseholdCarousel, Locality_Details, SupperMeeting_Carousel, SupperMeeting_Details
- Compiled source: `migration/blocks/sources/UBTConnect.Directory_CommonBlocks.Directory_EmptyState.mvc.js`
- Child blocks: UBTConnectLibrary.ConnectPatterns.EmptyList (queue: -)

## Inputs

(none found)

## Captured DOM variants (0 distinct, 0 instances)


## Compiled view (debugger lines removed)

```js
define("UBTConnect.Directory_CommonBlocks.Directory_EmptyState.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnect_Utils.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.Directory_CommonBlocks.Directory_EmptyState.mvc$model", "UBTConnect.Directory_CommonBlocks.Directory_EmptyState.mvc$controller", "UBTConnect.clientVariables", "UBTConnectLibrary.ConnectPatterns.EmptyList.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnect_Utils.controller$GetEntityType_Icon", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnect_Utils"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnect_UtilsController, React, OSView, UBTConnect_Directory_CommonBlocks_Directory_EmptyState_mvc_model, UBTConnect_Directory_CommonBlocks_Directory_EmptyState_mvc_controller, UBTConnectClientVariables, UBTConnectLibrary_ConnectPatterns_EmptyList_mvc_view, OSWidgets) {
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
        View.displayName = "Directory_CommonBlocks.Directory_EmptyState";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_ConnectPatterns_EmptyList_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnect_Directory_CommonBlocks_Directory_EmptyState_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_Directory_CommonBlocks_Directory_EmptyState_mvc_controller;
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
            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnectLibrary_ConnectPatterns_EmptyList_mvc_view, {
inputs: {
IconId: model.getCachedValue(idService.getId("ulm9i6TLikagFdG6bUgIWA.IconId"), function () {
return UBTConnect_UtilsController.default.getEntityType_Icon$Action(model.variables.entityTypeIdIn, callContext).iconIdOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
}, function () {
return model.variables.entityTypeIdIn;
}),
_iconIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._entityTypeIdInDataFetchStatus)
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
titlePlaceholder: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
value: model.getCachedValue(idService.getId("Iguwy7SjYkCgnPbZOlnHKw.Value"), function () {
return ((("No " + (((model.variables.entityTypeIdIn === UBTConnectModel.staticEntities.connect_Entity.interchange)) ? ((OS.BuiltinFunctions.toLower(model.variables.entityTypeIdIn) + "s")) : (model.variables.entityTypeIdIn))) + " ") + model.variables.locationIn);
}, function () {
return model.variables.entityTypeIdIn;
}, function () {
return model.variables.locationIn;
}),
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._entityTypeIdInDataFetchStatus, model.variables._locationInDataFetchStatus)
})];
}),
textPlaceholder: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
value: model.getCachedValue(idService.getId("1yaHdchNnEiMdrxyJgRCnw.Value"), function () {
return ((("There doesn\'t seem to be any " + OS.BuiltinFunctions.toLower(model.variables.entityTypeIdIn)) + (((model.variables.entityTypeIdIn === UBTConnectModel.staticEntities.connect_Entity.interchange)) ? ("s") : (""))) + " in");
}, function () {
return model.variables.entityTypeIdIn;
}),
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._entityTypeIdInDataFetchStatus)
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "this locality.",
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
})
},
_dependencies: [asPrimitiveValue(model.variables._locationInDataFetchStatus), asPrimitiveValue(model.variables._entityTypeIdInDataFetchStatus), asPrimitiveValue(model.variables.locationIn), asPrimitiveValue(model.variables.entityTypeIdIn)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
    return View;
});
```
