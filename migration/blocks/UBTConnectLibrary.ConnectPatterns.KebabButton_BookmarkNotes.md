# UBTConnectLibrary.ConnectPatterns.KebabButton_BookmarkNotes

- Kind: shared; build screens using it: HouseholdCarousel, HouseholdDetails, Household_Relations, Locality_Details, Notes, OneSchoolGlobalDetails, Profile, SupperMeeting_Carousel, SupperMeeting_Details
- Compiled source: `migration/blocks/sources/UBTConnectLibrary.ConnectPatterns.KebabButton_BookmarkNotes.mvc.js`
- Child blocks: UBTConnectLibrary.BasePatterns.CustomContainer, UBTConnectLibrary.ConnectCorePatterns.ContextMenu (queue: -)

## Inputs

(none found)

## Captured DOM variants (0 distinct, 0 instances)


## Compiled view (debugger lines removed)

```js
define("UBTConnectLibrary.ConnectPatterns.KebabButton_BookmarkNotes.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "react", "OutSystems/ReactView/Main", "UBTConnectLibrary.ConnectPatterns.KebabButton_BookmarkNotes.mvc$model", "UBTConnectLibrary.ConnectPatterns.KebabButton_BookmarkNotes.mvc$controller", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.ConnectCorePatterns.ContextMenu.mvc$view", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$ContextMenuOptionsRec", "UBTConnectLibrary.model$TextBooleanRecord", "UBTConnectLibrary.model$TextBoolean1Record"], function (OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, React, OSView, UBTConnectLibrary_ConnectPatterns_KebabButton_BookmarkNotes_mvc_model, UBTConnectLibrary_ConnectPatterns_KebabButton_BookmarkNotes_mvc_controller, UBTConnectLibraryClientVariables, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, OSWidgets, UBTConnectLibrary_ConnectCorePatterns_ContextMenu_mvc_view) {
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
        View.displayName = "ConnectPatterns.KebabButton_BookmarkNotes";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/UBTConnectLibrary.ConnectPatterns.KebabButton_BookmarkNotes.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_ConnectCorePatterns_ContextMenu_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnectLibrary_ConnectPatterns_KebabButton_BookmarkNotes_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnectLibrary_ConnectPatterns_KebabButton_BookmarkNotes_mvc_controller;
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
uuid: "0",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: model.getCachedValue(idService.getId("7HX6gOxjiUKzLwm265UWVw.Style"), function () {
return ((model.variables.isEnableIn) ? ("") : ("kebab-blocker"));
}, function () {
return model.variables.isEnableIn;
}),
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isEnableInDataFetchStatus)
}, React.createElement(UBTConnectLibrary_ConnectCorePatterns_ContextMenu_mvc_view, {
inputs: {
Position: UBTConnectLibraryModel.staticEntities.position.left,
usePrimaryButon: false,
isEnabled: model.variables.isEnableIn,
_isEnabledInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isEnableInDataFetchStatus),
In_ContextMenuOptions: model.getCachedValue(idService.getId("ExCaHpFGQE6DaMJ7MiF0Hw.In_ContextMenuOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContextMenuOptionsRec();
rec.hasSendGiftAttr = false;
rec.hasMarkAsReadAttr = false;
rec.hasShareAttr = false;
rec.editAttr = function () {
var rec = new UBTConnectLibraryModel.TextBooleanRecord();
rec.hasEditAttr = true;
rec.labelAttr = "Edit note";
return rec;
}();
rec.deleteAttr = function () {
var rec = new UBTConnectLibraryModel.TextBoolean1Record();
rec.hasDeleteAttr = true;
rec.labelAttr = "Delete note";
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
event_Edit$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);
return controller.handler_Edit$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
event_Delete$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);
return controller.handler_Delete$Action(controller.callContext(eventHandlerContext));
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
uuid: "2",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))];
})
},
_dependencies: [asPrimitiveValue(model.variables._isEnableInDataFetchStatus), asPrimitiveValue(model.variables.isEnableIn)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
    return View;
});
```
