# UBTConnect.Directory_SupperMeetings.SupperMeeting_HouseholdList

- Kind: shared; build screens using it: HouseholdCarousel, SupperMeeting_Carousel, SupperMeeting_Details
- Compiled source: `migration/screens/SupperMeeting_Carousel/analysis/sources/pretty/UBTConnect.Directory_SupperMeetings.SupperMeeting_HouseholdList.mvc.js`
- Child blocks: UBTConnect.Directory_Household_Blocks.Household_GalleryCard_List (queue: UBTConnect.Directory_Household_Blocks.Household_GalleryCard_List)

## Inputs

| Input | Type |
|---|---|
| In_SubdivisionId | LongInteger |

## Captured DOM variants (1 distinct, 12 instances)

### Variant 1: SupperMeeting_Carousel/default (×12)

```html
<div class="OSBlockWidget" data-block="Directory_SupperMeetings.SupperMeeting_HouseholdList" id="b3-l1-1164_0-b2-b1-b1-Block_Household_List">
  <div class="OSBlockWidget" data-block="Directory_Household_Blocks.Household_GalleryCard_List" id="b3-l1-1164_0-b2-b1-b1-b9-$b1"><!-- nested block: 367 nodes --></div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("UBTConnect.Directory_SupperMeetings.SupperMeeting_HouseholdList.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "Connect_Household_CS.model", "react", "OutSystems/ReactView/Main", "UBTConnect.Directory_SupperMeetings.SupperMeeting_HouseholdList.mvc$model", "UBTConnect.Directory_SupperMeetings.SupperMeeting_HouseholdList.mvc$controller", "UBTConnect.clientVariables", "UBTConnect.Directory_Household_Blocks.Household_GalleryCard_List.mvc$view", "OutSystems/ReactWidgets/Main", "Connect_Household_CS.model$UI_SubdivisionHouseholdRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect_Household_CS", "UBTConnect.model$UI_SubdivisionHouseholdList", "UBTConnect.controller$GetSkeletonList_UI_SubdivisionHousehold"], function(OutSystems, UBTConnectModel, UBTConnectController, Connect_Household_CSModel, React, OSView, UBTConnect_Directory_SupperMeetings_SupperMeeting_HouseholdList_mvc_model, UBTConnect_Directory_SupperMeetings_SupperMeeting_HouseholdList_mvc_controller, UBTConnectClientVariables, UBTConnect_Directory_Household_Blocks_Household_GalleryCard_List_mvc_view, OSWidgets) {
    var OS = OutSystems.Internal;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;
    var View = (function(_super) {
        __extends(View, _super);
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
        View.displayName = "Directory_SupperMeetings.SupperMeeting_HouseholdList";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnect_Directory_Household_Blocks_Household_GalleryCard_List_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_Directory_SupperMeetings_SupperMeeting_HouseholdList_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_Directory_SupperMeetings_SupperMeeting_HouseholdList_mvc_controller;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "title", {
            get: function() {
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
            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnect_Directory_Household_Blocks_Household_GalleryCard_List_mvc_view, {
                inputs: {
                    In_IsLoading: !(model.variables.getSubdivisionHouseholdsDataAct.isDataFetchedAttr),
                    In_Household_GalleryCard_List: model.variables.getSubdivisionHouseholdsDataAct.household_GalleryCard_ListOut,
                    _in_Household_GalleryCard_ListInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getSubdivisionHouseholdsDataAct.dataFetchStatusAttr)
                },
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    },
                    event_OnClick_Household_GalleryCard$Action: function(event_HouseholdIdIn) {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);
                            controller.event_OnClick_Household$Action(event_HouseholdIdIn, OS.DataConversion.JSConversions.typeConvertRecordList(model.variables.getSubdivisionHouseholdsDataAct.household_GalleryCard_ListOut, new OS.DataTypes.LongIntegerList(), function(source, target) {
                                target = source.householdIdAttr;
                                return target;
                            }), controller.callContext(eventHandlerContext));
                        }, function() {
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
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                _dependencies: []
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
    return View;
});
```
