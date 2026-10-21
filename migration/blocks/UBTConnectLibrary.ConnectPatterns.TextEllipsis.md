# UBTConnectLibrary.ConnectPatterns.TextEllipsis

- Kind: shared; build screens using it: CommunityBusinessDetails_CoomingSoon, CountryList, HomeFeed, HouseholdCarousel, HouseholdDetails, Household_Relations, Locality_Details, Notes, OneSchoolGlobalDetails, Profile, SupperMeeting_Carousel, SupperMeeting_Details
- Compiled source: `migration/screens/CommunityBusinessDetails_CoomingSoon/analysis/sources/pretty/UBTConnectLibrary.ConnectPatterns.TextEllipsis.mvc.js`
- Child blocks: - (queue: -)

## Inputs

| Input | Type |
|---|---|
| Text | Text |
| ExtendedClasses | Text |

## Captured DOM variants (1 distinct, 12 instances)

### Variant 1: CommunityBusinessDetails_CoomingSoon/default (×12)

```html
<div class="OSBlockWidget" data-block="ConnectPatterns.TextEllipsis" id="b2-$b2">
  <span class="ubt-text-ellipsis text-ellipsis" data-expression="">
    Search for households. entities, news
  </span>
</div>
```


## Compiled view (debugger lines removed)

```js
define("UBTConnectLibrary.ConnectPatterns.TextEllipsis.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "react", "OutSystems/ReactView/Main", "UBTConnectLibrary.ConnectPatterns.TextEllipsis.mvc$model", "UBTConnectLibrary.ConnectPatterns.TextEllipsis.mvc$controller", "UBTConnectLibrary.clientVariables", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.controller$FormatClasses"], function(OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, React, OSView, UBTConnectLibrary_ConnectPatterns_TextEllipsis_mvc_model, UBTConnectLibrary_ConnectPatterns_TextEllipsis_mvc_controller, UBTConnectLibraryClientVariables, OSWidgets) {
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
        View.displayName = "ConnectPatterns.TextEllipsis";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnectLibrary_ConnectPatterns_TextEllipsis_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnectLibrary_ConnectPatterns_TextEllipsis_mvc_controller;
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
            return React.createElement("div", this.getRootNodeProperties(), React.createElement(OSWidgets.Expression, {
                style: model.getCachedValue(idService.getId("gqQZ1chg9kqBsMKZ8hzniw.Style"), function() {
                            return UBTConnectLibraryController.default.formatClasses$Action(model.variables.mainContainerClassVar, "text-ellipsis", callContext).classesOutOut;
                        }, OS.DataTypes.DataTypes.Text, callContext.id), model.variables.extendedClassesIn, callContext).classesOutOut;
                    }, OS.DataTypes.DataTypes.Text, callContext.id);
                }, function() {
                    return model.variables.mainContainerClassVar;
                }, function() {
                    return model.variables.extendedClassesIn;
                }),
                value: model.variables.textIn,
                _idProps: {
                    service: idService,
                    uuid: "0"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._extendedClassesInDataFetchStatus),
                value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._textInDataFetchStatus)
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
    return View;
});
```
