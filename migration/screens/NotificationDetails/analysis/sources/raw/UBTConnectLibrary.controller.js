define("UBTConnectLibrary.controller$BlurInput", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.controller$BlurInput.BlurElementJS", "UBTConnectLibrary.clientVariables"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibrary_controller_BlurInput_BlurElementJS, UBTConnectLibraryClientVariables) {
var OS = OutSystems.Internal;
UBTConnectLibraryController.default.blurInput$Action = function (in_InputIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.BlurInput$vars"))());
vars.value.in_InputIdInLocal = in_InputIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:3tUCen+PQ0S56u3mIiioFw:/ClientActionFlows.3tUCen+PQ0S56u3mIiioFw:D_j+2RAGBa4nIkBtkt_Tuw", "UBTConnectLibrary", "BlurInput", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:jmRziJ+UZUmElMRxCn1JwA", callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:oWdLNGk9HUWF6ujoJ0LQcw", callContext.id);
controller.safeExecuteJSNode(UBTConnectLibrary_controller_BlurInput_BlurElementJS, "BlurElement", "BlurInput", {
In_InputId: OS.DataConversion.JSNodeParamConverter.to(vars.value.in_InputIdInLocal, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:yPRXSjoHEEakaDWu_kqsqg", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:3tUCen+PQ0S56u3mIiioFw", callContext.id);
}

};
var controller = UBTConnectLibraryController.default;
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.BlurInput$vars", [{
name: "In_InputId",
attrName: "in_InputIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnectLibraryController.default.clientActionProxies.blurInput$Action = function (in_InputIdIn) {
in_InputIdIn = (in_InputIdIn === undefined) ? "" : in_InputIdIn;
return controller.executeActionInsideJSNode(UBTConnectLibraryController.default.blurInput$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(in_InputIdIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("UBTConnectLibrary.controller$BlurInput.BlurElementJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
let inputSelected = document.getElementById($parameters.In_InputId);
if(inputSelected){
    inputSelected.blur();
}
};
});

define("UBTConnectLibrary.controller$BottomBarSlider_ForceRefresh", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.controller$BottomBarSlider_ForceRefresh.JavaScript1JS", "UBTConnectLibrary.clientVariables"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibrary_controller_BottomBarSlider_ForceRefresh_JavaScript1JS, UBTConnectLibraryClientVariables) {
var OS = OutSystems.Internal;
UBTConnectLibraryController.default.bottomBarSlider_ForceRefresh$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:pas4FvDNKE6sldnf_Lm0GQ:/ClientActionFlows.pas4FvDNKE6sldnf_Lm0GQ:19b_iOzk1kMCt2VyQqYkMg", "UBTConnectLibrary", "BottomBarSlider_ForceRefresh", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:pFxROEzf20W_G3M4Py+Oqg", callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:10i_B_0_PEyt9ee_nlXwuQ", callContext.id);
controller.safeExecuteJSNode(UBTConnectLibrary_controller_BottomBarSlider_ForceRefresh_JavaScript1JS, "JavaScript1", "BottomBarSlider_ForceRefresh", null, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:X_ydawwDdkWOQw0qPJgp7A", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:pas4FvDNKE6sldnf_Lm0GQ", callContext.id);
}

};
var controller = UBTConnectLibraryController.default;
UBTConnectLibraryController.default.clientActionProxies.bottomBarSlider_ForceRefresh$Action = function () {
return controller.executeActionInsideJSNode(UBTConnectLibraryController.default.bottomBarSlider_ForceRefresh$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("UBTConnectLibrary.controller$BottomBarSlider_ForceRefresh.JavaScript1JS", [], function () {
return function ($actions, $roles, $public) {
var screen = document.querySelector(".screen-container")
var detail = {}
detail.to = screen
detail.from = screen
window.dispatchEvent(new CustomEvent("dx-navigation-transition-start", { detail: detail }));
};
});

define("UBTConnectLibrary.controller$BottomSheet_AnchorsInitialize", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.controller$BottomSheet_AnchorsInitialize.JavaScript1JS", "UBTConnectLibrary.clientVariables"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibrary_controller_BottomSheet_AnchorsInitialize_JavaScript1JS, UBTConnectLibraryClientVariables) {
var OS = OutSystems.Internal;
UBTConnectLibraryController.default.bottomSheet_AnchorsInitialize$Action = function (idIn, addOffsetToAnchorsIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.BottomSheet_AnchorsInitialize$vars"))());
vars.value.idInLocal = idIn;
vars.value.addOffsetToAnchorsInLocal = addOffsetToAnchorsIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:_CN1PFdYgUuFqs6CgU3uwg:/ClientActionFlows._CN1PFdYgUuFqs6CgU3uwg:RT5GCkMGa7LqSGwm6HcONA", "UBTConnectLibrary", "BottomSheet_AnchorsInitialize", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:UT_9D6Do4kGRVAY0G_jmSg", callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:5QLjJJ6qP02O1cJhbEnHpA", callContext.id);
controller.safeExecuteJSNode(UBTConnectLibrary_controller_BottomSheet_AnchorsInitialize_JavaScript1JS, "JavaScript1", "BottomSheet_AnchorsInitialize", {
BottomSheetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.idInLocal, OS.DataTypes.DataTypes.Text),
AnchorOffset: OS.DataConversion.JSNodeParamConverter.to(OS.BuiltinFunctions.integerToDecimal(-1).times(vars.value.addOffsetToAnchorsInLocal), OS.DataTypes.DataTypes.Decimal)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:t+USS8MwMEG7HMy2ohlzaA", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:_CN1PFdYgUuFqs6CgU3uwg", callContext.id);
}

};
var controller = UBTConnectLibraryController.default;
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.BottomSheet_AnchorsInitialize$vars", [{
name: "Id",
attrName: "idInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "AddOffsetToAnchors",
attrName: "addOffsetToAnchorsInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Decimal,
defaultValue: function () {
return OS.BuiltinFunctions.integerToDecimal(0);
}
}]);
UBTConnectLibraryController.default.clientActionProxies.bottomSheet_AnchorsInitialize$Action = function (idIn, addOffsetToAnchorsIn) {
idIn = (idIn === undefined) ? "" : idIn;
addOffsetToAnchorsIn = (addOffsetToAnchorsIn === undefined) ? 0 : addOffsetToAnchorsIn;
return controller.executeActionInsideJSNode(UBTConnectLibraryController.default.bottomSheet_AnchorsInitialize$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(idIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(addOffsetToAnchorsIn, OS.DataTypes.DataTypes.Decimal)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("UBTConnectLibrary.controller$BottomSheet_AnchorsInitialize.JavaScript1JS", [], function () {
return function ($parameters, $actions, $roles, $public) {
function bottomSheetAnchors(sheetId) {
    function init() {
        const sheet = OutSystems.OSUI.Patterns.BottomSheetAPI.GetBottomSheetItemById(sheetId);
 
        // Keep original OSUI handlers
        const originalStart = sheet._onGestureStart.bind(sheet);
        const originalMove  = sheet._onGestureMove.bind(sheet);
        const originalEnd   = sheet._onGestureEnd.bind(sheet);
 
        const el = sheet.selfElement;
 
        let draggingUp = false;
        let startTranslate = 0;
        let initialPreviewOffset = 0;
        let anchors = [];
        let isTapGesture = true;
        let ignoreTap = false;
        let suppressNextClick = false;
        const TAP_THRESHOLD = 6; // px
 
        // Capture-phase click interceptor. Capture flows root -> el ->
        // descendants, so this runs BEFORE the click ever reaches whatever
        // element is under the finger (including its own capture and bubble
        // listeners — it never gets that far). This is what makes the fix
        // deterministic: it doesn't matter whether the sheet moved before or
        // after the click's hit-test, because we never let the click reach
        // anything once we've decided to swallow it. preventDefault() is
        // needed alongside stopPropagation() because stopping propagation
        // does NOT cancel native default actions (e.g. an <a> would still
        // navigate on click unless defaultPrevented is also set).
        el.addEventListener(
            "click",
            (evt) => {
                if (suppressNextClick) {
                    suppressNextClick = false;
                    evt.stopPropagation();
                    evt.preventDefault();
                }
            },
            true
        );
 
        // Read real computed translateY via matrix
        function getComputedTranslateY(element) {
            const transform = getComputedStyle(element).transform;
            if (!transform || transform === "none") return 0;
            return new DOMMatrix(transform).m42;
        }
 
        // Compute dynamic anchors
        function computeAnchors() {
            const sheetRect = el.getBoundingClientRect();
            anchors = [];
 
            const anchorEls = el.querySelectorAll(".ubt-bottom-sheet--anchor");
 
            const bottomBarHeight = document.getElementsByClassName("footer")[0].clientHeight;
            const handlerHeight = el.clientHeight - initialPreviewOffset - bottomBarHeight;
 
            anchorEls.forEach(anchor => {
                const r = anchor.getBoundingClientRect();
 
                // Height required to show this block fully
                const heightNeeded = r.bottom - sheetRect.top;
 
                // Convert to translate value
                let translate = initialPreviewOffset - heightNeeded + handlerHeight;
 
                // Apply optional offset (preview of next section)
                translate += $parameters.AnchorOffset;
 
                // Clamp to fully open
                translate = Math.max(translate, 0);
 
                anchors.push(translate);
            });
 
            // Always sorted smallest (open) -> largest (closest to preview)
            anchors.sort((a, b) => a - b);
 
            //avoid flicker near 0
            const SMALLEST_THRESHOLD = 40;
 
            if (anchors.length > 0 && anchors[0] < SMALLEST_THRESHOLD) {
                // Replace smallest anchor with 0
                anchors[0] = 0;
            } else {
                // Otherwise explicitly add fully open
                anchors.unshift(0);
            }
        }
 
        // Nearest snap point (for drag)
        function getClosestAnchor(current) {
            let closest = anchors[0];
            let bestDiff = Math.abs(current - closest);
 
            for (let i = 1; i < anchors.length; i++) {
                const diff = Math.abs(current - anchors[i]);
                if (diff < bestDiff) {
                    closest = anchors[i];
                    bestDiff = diff;
                }
            }
            return closest;
        }
 
        // Next anchor for a tap, based on current position and open state
        function getNextAnchorForTap(currentPos, isOpen) {
            if (!anchors.length) return 0;
 
            if (!isOpen) {
                // Sheet is closed (preview): go to next anchor towards open
                // That is: the largest anchor smaller than currentPos
                let candidate = anchors[0]; // usually 0
                for (let i = 0; i < anchors.length; i++) {
                    const a = anchors[i];
                    if (a < currentPos && a >= candidate) {
                        candidate = a;
                    }
                }
                return candidate;
            } else {
                // Sheet is open: go one step more open (towards 0)
                // Find closest anchor to currentPos and pick previous in the list
                let closestIdx = 0;
                let bestDiff = Math.abs(currentPos - anchors[0]);
 
                for (let i = 1; i < anchors.length; i++) {
                    const diff = Math.abs(currentPos - anchors[i]);
                    if (diff < bestDiff) {
                        bestDiff = diff;
                        closestIdx = i;
                    }
                }
 
                const targetIdx = Math.max(closestIdx - 1, 0);
                return anchors[targetIdx];
            }
        }
 
        // Snap animation (CSS handles easing)
        function snapToAnchor(value) {
            el.classList.add("bottom-sheet--snap");
 
            el.style.setProperty(
                "--ubt-bottomsheet-handler-preview--anchor-point",
                value + "px"
            );
 
            setTimeout(() => {
                el.classList.remove("bottom-sheet--snap");
            }, 250);
        }
 
        // Reset scroll content when sheet closes
        function resetContentScroll() {
            const contentEl = el.querySelector(".osui-bottom-sheet__content");
            if (contentEl) {
                contentEl.scrollTop = 0;
            }
        }
 
        // DRAG START
        sheet._onGestureStart = function (x, y) {
            if (initialPreviewOffset === 0) {
                // Set the first time
                initialPreviewOffset = getComputedTranslateY(el);
                computeAnchors();
            }
 
            draggingUp = false;
            isTapGesture = true; // assume tap until move says otherwise
            ignoreTap = false;
 
            // Detect actual clicked element to control close logic
            const targetEl = document.elementFromPoint(x, y);
 
            if (targetEl) {
                if (
                    targetEl.closest(".ubt-bottom-sheet--close-icon")
                ) {
                    ignoreTap = true;
                }
            }
 
            const style = getComputedStyle(el);
            const currentTranslate = parseFloat(style.getPropertyValue("--bottom-sheet-translate"));
 
            // Case 1: first drag (closed) -> use preview offset
            if (!sheet._isOpen && (!currentTranslate || isNaN(currentTranslate))) {
                startTranslate = initialPreviewOffset;
            }
            // Case 2: open -> continue from existing translate (if any)
            else {
                startTranslate = isNaN(currentTranslate) ? initialPreviewOffset : currentTranslate;
            }
 
            // Clean up classes
            el.classList.remove("bottom-sheet--dragging");
            el.classList.remove("bottom-sheet--snap");
 
            originalStart(x, y);
        };
 
        // DRAG MOVE
        sheet._onGestureMove = function (x, y, offsetX, offsetY, evt) {
            // Any meaningful movement cancels tap
            if (Math.abs(offsetX) > TAP_THRESHOLD || Math.abs(offsetY) > TAP_THRESHOLD) {
                isTapGesture = false;
            }
 
            // Still within tap threshold — don't touch position or hand off
            // to OSUI's own move handler in either direction. Without this
            // early return, ordinary finger jitter of a few px during a tap
            // would still fall into the branches below (either shifting the
            // sheet directly, or calling OSUI's own close-drag handler with
            // a direction it was never designed to receive).
            if (isTapGesture) {
                return;
            }
 
            // UPWARD drag — only once movement has cleared the tap threshold.
            if (offsetY < 0) {
                if (!draggingUp) {
                    draggingUp = true;
                    el.classList.add("bottom-sheet--dragging");
 
                    // If closed, open it first
                    if (!sheet._isOpen) {
                        sheet.open();
                    }
                }
 
                // NEW translate = initial translate + delta Y
                let newTranslate = startTranslate + offsetY;
 
                if (newTranslate < 0) newTranslate = 0;
 
                // Clamp downward to preview offset only if sheet was closed
                if (!sheet._isOpen && newTranslate > initialPreviewOffset) {
                    newTranslate = initialPreviewOffset;
                }
 
                el.style.setProperty("--bottom-sheet-translate", newTranslate + "px");
                return;
            }
 
            // DOWNWARD -> OSUI handles close
            if (sheet._isOpen) {
                originalMove(x, y, offsetX, offsetY, evt);
            }
        };
 
        // DRAG END / TAP END
        sheet._onGestureEnd = function (offsetX, offsetY, timeTaken) {
            const wasTap = isTapGesture && !draggingUp && !ignoreTap;
 
            // Any gesture we're about to act on ourselves (tap-to-anchor or
            // an upward-drag-to-anchor snap) can shift content under the
            // pointer before the browser's native click fires. Swallow that
            // click — except when ignoreTap is true (e.g. the close icon),
            // where we intentionally want the element's own click behavior
            // to run normally.
            if ((wasTap || draggingUp) && !ignoreTap) {
                suppressNextClick = true;
                // Safety net: if for some reason no click follows (e.g. a
                // non-touch input path that doesn't synthesize one), don't
                // leave later, unrelated clicks suppressed forever.
                setTimeout(() => {
                    suppressNextClick = false;
                }, 300);
            }
 
            // TAP: regardless of closed or open, go to next anchor
            if (wasTap) {
                if (initialPreviewOffset === 0) {
                    initialPreviewOffset = getComputedTranslateY(el);
                    computeAnchors();
                }
 
                const currentPos = getComputedTranslateY(el);
                const targetAnchor = getNextAnchorForTap(currentPos, sheet._isOpen);
                const wasOpen = sheet._isOpen;
 
                // Defer the actual repositioning past the next paint. No
                // longer load-bearing for the click bug (suppression above
                // handles that deterministically), but it still avoids an
                // instant, unanimated jump before the browser paints.
                requestAnimationFrame(() => {
                    if (!wasOpen) {
                        sheet.open();
                    }
                    snapToAnchor(targetAnchor);
                });
                return;
            }
 
            // UPWARD DRAG END -> snap to nearest anchor
            if (draggingUp) {
                draggingUp = false;
                el.classList.remove("bottom-sheet--dragging");
 
                const current = parseFloat(
                    getComputedStyle(el).getPropertyValue("--bottom-sheet-translate")
                );
 
                const anchor = getClosestAnchor(current);
 
                requestAnimationFrame(() => {
                    snapToAnchor(anchor);
                });
            }
            // DOWNWARD DRAG END -> OSUI close logic
            else if (sheet._isOpen) {
                originalEnd(offsetX, offsetY, timeTaken);
 
                // After closing -> restore preview anchor + reset scroll
                if (!sheet._isOpen) {
                    el.style.setProperty(
                        "--ubt-bottomsheet-handler-preview--anchor-point",
                        initialPreviewOffset + "px"
                    );
                    el.style.setProperty("--bottom-sheet-translate", initialPreviewOffset + "px");
 
                    resetContentScroll();
                }
            }
        };
 
        // Must remain last
        sheet.setEventListeners();
    }
 
    init();
}
 
// Init with sheet DOM name
const bottomSheetName = document
    .getElementById($parameters.BottomSheetId)
    .getElementsByClassName("osui-bottom-sheet")[0]
    .getAttribute("name");
 
bottomSheetAnchors(bottomSheetName);
};
});

define("UBTConnectLibrary.controller$BottomSheet_SetDragEnabled", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.controller$BottomSheet_SetDragEnabled.SetDragEnabledJS", "UBTConnectLibrary.clientVariables"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibrary_controller_BottomSheet_SetDragEnabled_SetDragEnabledJS, UBTConnectLibraryClientVariables) {
var OS = OutSystems.Internal;
UBTConnectLibraryController.default.bottomSheet_SetDragEnabled$Action = function (in_SheetIdIn, in_IsEnabledIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.BottomSheet_SetDragEnabled$vars"))());
vars.value.in_SheetIdInLocal = in_SheetIdIn;
vars.value.in_IsEnabledInLocal = in_IsEnabledIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:aRzApgFBB0GUUM3zWLfx7A:/ClientActionFlows.aRzApgFBB0GUUM3zWLfx7A:fqdhcrV5yjrlorX1QQSxQA", "UBTConnectLibrary", "BottomSheet_SetDragEnabled", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:_hVm+qN1nkicfukHj0rMCw", callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:sLGoUE367U+f3OkkBSbrpQ", callContext.id);
controller.safeExecuteJSNode(UBTConnectLibrary_controller_BottomSheet_SetDragEnabled_SetDragEnabledJS, "SetDragEnabled", "BottomSheet_SetDragEnabled", {
IsEnabled: OS.DataConversion.JSNodeParamConverter.to(vars.value.in_IsEnabledInLocal, OS.DataTypes.DataTypes.Boolean),
SheetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.in_SheetIdInLocal, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:Pj5GU49qFE2snyyXkWPZGQ", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:aRzApgFBB0GUUM3zWLfx7A", callContext.id);
}

};
var controller = UBTConnectLibraryController.default;
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.BottomSheet_SetDragEnabled$vars", [{
name: "In_SheetId",
attrName: "in_SheetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "In_IsEnabled",
attrName: "in_IsEnabledInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
UBTConnectLibraryController.default.clientActionProxies.bottomSheet_SetDragEnabled$Action = function (in_SheetIdIn, in_IsEnabledIn) {
in_SheetIdIn = (in_SheetIdIn === undefined) ? "" : in_SheetIdIn;
in_IsEnabledIn = (in_IsEnabledIn === undefined) ? false : in_IsEnabledIn;
return controller.executeActionInsideJSNode(UBTConnectLibraryController.default.bottomSheet_SetDragEnabled$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(in_SheetIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(in_IsEnabledIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("UBTConnectLibrary.controller$BottomSheet_SetDragEnabled.SetDragEnabledJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
(function () {
    var containerId = $parameters.SheetId;
    var isEnabled = $parameters.IsEnabled;

    var container = document.getElementById(containerId);
    if (!container) return;

    var sheet = container.querySelector('.osui-bottom-sheet');
    var handle = sheet && sheet.querySelector('.osui-bottom-sheet__header');
    if (!sheet || !handle) return;

    // One-time setup: capture-phase guard on the sheet (ancestor of the header),
    // which always runs before the native touchstart listener on the header itself
    if (!sheet._dragGuardBound) {
        sheet._dragGuardBound = true;
        sheet._dragEnabled = true; // native drag is on by default

        sheet.addEventListener('touchstart', function (evt) {
            if (!sheet._dragEnabled && handle.contains(evt.target)) {
                evt.stopPropagation(); // native gesture handler never sees this touch
            }
        }, { capture: true });
    }

    sheet._dragEnabled = isEnabled;
})();
};
});

define("UBTConnectLibrary.controller$CheckForEnterKeyPress", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.controller$CheckForEnterKeyPress.CheckForEnterKeyJS", "UBTConnectLibrary.clientVariables"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibrary_controller_CheckForEnterKeyPress_CheckForEnterKeyJS, UBTConnectLibraryClientVariables) {
var OS = OutSystems.Internal;
UBTConnectLibraryController.default.checkForEnterKeyPress$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var checkForEnterKeyJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.CheckForEnterKeyPress$outVars"))());
varBag.callContext = callContext;
varBag.checkForEnterKeyJSResult = checkForEnterKeyJSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:2kq3sYmTKkemLT90CD0bRw:/ClientActionFlows.2kq3sYmTKkemLT90CD0bRw:yb_h3fEM0vwhzmpZJFaCuQ", "UBTConnectLibrary", "CheckForEnterKeyPress", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:HB+bBfO3_E6dCCTj2Ah60Q", callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:FpihBrqYakCa15p9NxgGUQ", callContext.id);
checkForEnterKeyJSResult.value = controller.safeExecuteJSNode(UBTConnectLibrary_controller_CheckForEnterKeyPress_CheckForEnterKeyJS, "CheckForEnterKey", "CheckForEnterKeyPress", {
IsEnterKey: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBTConnectLibrary.CheckForEnterKeyPress$checkForEnterKeyJSResult"))();
jsNodeResult.isEnterKeyOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsEnterKey, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:c4FfrZ5bC0aGxDQIGn_zEQ", callContext.id);
// IsEnterKey = CheckForEnterKey.IsEnterKey
outVars.value.isEnterKeyOut = checkForEnterKeyJSResult.value.isEnterKeyOut;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:_Zj53sGoD0+qIfqxt6Wsug", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:2kq3sYmTKkemLT90CD0bRw", callContext.id);
}

};
var controller = UBTConnectLibraryController.default;
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.CheckForEnterKeyPress$checkForEnterKeyJSResult", [{
name: "IsEnterKey",
attrName: "isEnterKeyOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.CheckForEnterKeyPress$outVars", [{
name: "IsEnterKey",
attrName: "isEnterKeyOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
UBTConnectLibraryController.default.clientActionProxies.checkForEnterKeyPress$Action = function () {
return controller.executeActionInsideJSNode(UBTConnectLibraryController.default.checkForEnterKeyPress$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
IsEnterKey: OS.DataConversion.JSNodeParamConverter.to(actionResults.isEnterKeyOut, OS.DataTypes.DataTypes.Boolean)
};
});
};
});
define("UBTConnectLibrary.controller$CheckForEnterKeyPress.CheckForEnterKeyJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
if(event.keyCode == 13){
    $parameters.IsEnterKey = true;
}
};
});

define("UBTConnectLibrary.controller$ClearTimeout", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.controller$ClearTimeout.ClearTimeoutJS", "UBTConnectLibrary.clientVariables"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibrary_controller_ClearTimeout_ClearTimeoutJS, UBTConnectLibraryClientVariables) {
var OS = OutSystems.Internal;
UBTConnectLibraryController.default.clearTimeout$Action = function (in_TimeoutIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.ClearTimeout$vars"))());
vars.value.in_TimeoutInLocal = in_TimeoutIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:8adP_xyvDEea0tnwNMQHuQ:/ClientActionFlows.8adP_xyvDEea0tnwNMQHuQ:5SlgF+hqdCINk8F6drqKtg", "UBTConnectLibrary", "ClearTimeout", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:SRFSVO1oa0qau_WKThBgnQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:x+dflTsd902jF1i6476IFw", callContext.id);
controller.safeExecuteJSNode(UBTConnectLibrary_controller_ClearTimeout_ClearTimeoutJS, "ClearTimeout", "ClearTimeout", {
Timeout: OS.DataConversion.JSNodeParamConverter.to(vars.value.in_TimeoutInLocal, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:Q1wg0ip2NkGozF0C87EfNA", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:8adP_xyvDEea0tnwNMQHuQ", callContext.id);
}

};
var controller = UBTConnectLibraryController.default;
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.ClearTimeout$vars", [{
name: "In_Timeout",
attrName: "in_TimeoutInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
UBTConnectLibraryController.default.clientActionProxies.clearTimeout$Action = function (in_TimeoutIn) {
in_TimeoutIn = (in_TimeoutIn === undefined) ? null : in_TimeoutIn;
return controller.executeActionInsideJSNode(UBTConnectLibraryController.default.clearTimeout$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(in_TimeoutIn, OS.DataTypes.DataTypes.Object)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("UBTConnectLibrary.controller$ClearTimeout.ClearTimeoutJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
ScrollEvent.clearTimeout($parameters.Timeout);
};
});

define("UBTConnectLibrary.controller$ConvertUbtSizeToGutterSize", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.clientVariables"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryClientVariables) {
var OS = OutSystems.Internal;
UBTConnectLibraryController.default.convertUbtSizeToGutterSize$Action = function (uBTSizeIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.ConvertUbtSizeToGutterSize$vars"))());
vars.value.uBTSizeInLocal = uBTSizeIn;
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.ConvertUbtSizeToGutterSize$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:YilqAda5TkuEWazP7UqpYA:/ClientActionFlows.YilqAda5TkuEWazP7UqpYA:WuU8btexPQcDC576VP650w", "UBTConnectLibrary", "ConvertUbtSizeToGutterSize", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:E2pwpF3b+kOf_sW8KPBOTA", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:C81r36zvEEK75jvRZ4ljqA", callContext.id) && (vars.value.uBTSizeInLocal === UBTConnectLibraryModel.staticEntities.uBT_Size.none))) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:TV1+43KhK0e5aDMjTMFPfQ", callContext.id);
// GutterSizeId = None
outVars.value.gutterSizeIdOut = UBTConnectLibraryModel.staticEntities.gutterSize.none;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:1GTidg1JzUK0MHCLp5Vo8w", callContext.id);
} else {
if((vars.value.uBTSizeInLocal === UBTConnectLibraryModel.staticEntities.uBT_Size.extraSmall)) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:eO6wSo4in0O+6ZjGOINV5Q", callContext.id);
// GutterSizeId = ExtraSmall
outVars.value.gutterSizeIdOut = UBTConnectLibraryModel.staticEntities.gutterSize.extraSmall;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:1GTidg1JzUK0MHCLp5Vo8w", callContext.id);
} else {
if((vars.value.uBTSizeInLocal === UBTConnectLibraryModel.staticEntities.uBT_Size.small)) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:3AbbSny6oUykt1XU_8+gVQ", callContext.id);
// GutterSizeId = Small
outVars.value.gutterSizeIdOut = UBTConnectLibraryModel.staticEntities.gutterSize.small;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:1GTidg1JzUK0MHCLp5Vo8w", callContext.id);
} else {
if((vars.value.uBTSizeInLocal === UBTConnectLibraryModel.staticEntities.uBT_Size.base)) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:Abipou4RDUKz_OJcBeErtw", callContext.id);
// GutterSizeId = Base
outVars.value.gutterSizeIdOut = UBTConnectLibraryModel.staticEntities.gutterSize.base;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:1GTidg1JzUK0MHCLp5Vo8w", callContext.id);
} else {
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:5JlchPC9vkOr7YXm+nGR4g", callContext.id) && (vars.value.uBTSizeInLocal === UBTConnectLibraryModel.staticEntities.uBT_Size.medium))) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:zF_FTPenm0GeLooGQ7QNTQ", callContext.id);
// GutterSizeId = Medium
outVars.value.gutterSizeIdOut = UBTConnectLibraryModel.staticEntities.gutterSize.medium;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:0uUNE34HUEaeYk30P7zgZQ", callContext.id);
} else {
if((vars.value.uBTSizeInLocal === UBTConnectLibraryModel.staticEntities.uBT_Size.large)) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:mfiP5FajwkyPcNw5VtkGag", callContext.id);
// GutterSizeId = Large
outVars.value.gutterSizeIdOut = UBTConnectLibraryModel.staticEntities.gutterSize.large;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:0uUNE34HUEaeYk30P7zgZQ", callContext.id);
} else {
if((vars.value.uBTSizeInLocal === UBTConnectLibraryModel.staticEntities.uBT_Size.extraLarge)) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:1BhcRn5sSUicxIiPgqrL6w", callContext.id);
// GutterSizeId = ExtraLarge
outVars.value.gutterSizeIdOut = UBTConnectLibraryModel.staticEntities.gutterSize.extraLarge;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:0uUNE34HUEaeYk30P7zgZQ", callContext.id);
} else {
if((vars.value.uBTSizeInLocal === UBTConnectLibraryModel.staticEntities.uBT_Size.doubleExtraLarge)) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:snApeD_oW0CvL1vBopdn+Q", callContext.id);
// GutterSizeId = XXLarge
outVars.value.gutterSizeIdOut = UBTConnectLibraryModel.staticEntities.gutterSize.xXLarge;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:0uUNE34HUEaeYk30P7zgZQ", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:0o_G5ZUo3EK3pYq9FrV3Qw", callContext.id);
}

}

}

}

}

}

}

}

return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:YilqAda5TkuEWazP7UqpYA", callContext.id);
}

};
var controller = UBTConnectLibraryController.default;
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.ConvertUbtSizeToGutterSize$vars", [{
name: "UBTSize",
attrName: "uBTSizeInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.ConvertUbtSizeToGutterSize$outVars", [{
name: "GutterSizeId",
attrName: "gutterSizeIdOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnectLibraryController.default.clientActionProxies.convertUbtSizeToGutterSize$Action = function (uBTSizeIn) {
uBTSizeIn = (uBTSizeIn === undefined) ? "" : uBTSizeIn;
return controller.executeActionInsideJSNode(UBTConnectLibraryController.default.convertUbtSizeToGutterSize$Action.bind(controller, uBTSizeIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
GutterSizeId: actionResults.gutterSizeIdOut
};
});
};
});

define("UBTConnectLibrary.controller$ConvertVerticalAlignToFlexAlignItems", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.clientVariables"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryClientVariables) {
var OS = OutSystems.Internal;
UBTConnectLibraryController.default.convertVerticalAlignToFlexAlignItems$Action = function (verticalAligmentIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.ConvertVerticalAlignToFlexAlignItems$vars"))());
vars.value.verticalAligmentIdInLocal = verticalAligmentIdIn;
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.ConvertVerticalAlignToFlexAlignItems$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:U1vA_kxlVUureb9gS99q6w:/ClientActionFlows.U1vA_kxlVUureb9gS99q6w:kC9lmdWySnmwwCyRA3W3Rw", "UBTConnectLibrary", "ConvertVerticalAlignToFlexAlignItems", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:MDrXq+6FzEijyAr0SLyZLA", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:xYizrKOirkmDsNOSTl9wqg", callContext.id) && (vars.value.verticalAligmentIdInLocal === UBTConnectLibraryModel.staticEntities.uBT_VerticalAlign.top))) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:+N2ip856qUqO1iDy00C1sw", callContext.id);
// Class = "align-items-flex-start"
outVars.value.classOut = "align-items-flex-start";
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:W_u0jvloM0K7SYyrciiI1g", callContext.id);
} else {
if((vars.value.verticalAligmentIdInLocal === UBTConnectLibraryModel.staticEntities.uBT_VerticalAlign.center)) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:pQxSikU0+EqIyeO+Qoaw5w", callContext.id);
// Class = "align-items-center"
outVars.value.classOut = "align-items-center";
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:W_u0jvloM0K7SYyrciiI1g", callContext.id);
} else {
if((vars.value.verticalAligmentIdInLocal === UBTConnectLibraryModel.staticEntities.uBT_VerticalAlign.bottom)) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:booqd3ulSk2gf130obouAA", callContext.id);
// Class = "align-items-flex-end"
outVars.value.classOut = "align-items-flex-end";
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:W_u0jvloM0K7SYyrciiI1g", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:xJyplcfvq0aRGy9HWidy_w", callContext.id);
}

}

}

return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:U1vA_kxlVUureb9gS99q6w", callContext.id);
}

};
var controller = UBTConnectLibraryController.default;
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.ConvertVerticalAlignToFlexAlignItems$vars", [{
name: "VerticalAligmentId",
attrName: "verticalAligmentIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.ConvertVerticalAlignToFlexAlignItems$outVars", [{
name: "Class",
attrName: "classOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnectLibraryController.default.clientActionProxies.convertVerticalAlignToFlexAlignItems$Action = function (verticalAligmentIdIn) {
verticalAligmentIdIn = (verticalAligmentIdIn === undefined) ? "" : verticalAligmentIdIn;
return controller.executeActionInsideJSNode(UBTConnectLibraryController.default.convertVerticalAlignToFlexAlignItems$Action.bind(controller, verticalAligmentIdIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Class: OS.DataConversion.JSNodeParamConverter.to(actionResults.classOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("UBTConnectLibrary.controller$FocusOnInput", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.controller$FocusOnInput.FocusOnInputJS", "UBTConnectLibrary.clientVariables"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibrary_controller_FocusOnInput_FocusOnInputJS, UBTConnectLibraryClientVariables) {
var OS = OutSystems.Internal;
UBTConnectLibraryController.default.focusOnInput$Action = function (in_InputIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.FocusOnInput$vars"))());
vars.value.in_InputIdInLocal = in_InputIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:nlLHLy1mzUaJ4Rc62U5F+Q:/ClientActionFlows.nlLHLy1mzUaJ4Rc62U5F+Q:JfXXl0FwuI7OPqTsJQ3PJA", "UBTConnectLibrary", "FocusOnInput", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:O2DVUIykUkedtabsybrRDw", callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:shwcd1ph3ESM50RO0Utf8g", callContext.id);
controller.safeExecuteJSNode(UBTConnectLibrary_controller_FocusOnInput_FocusOnInputJS, "FocusOnInput", "FocusOnInput", {
InputId: OS.DataConversion.JSNodeParamConverter.to(vars.value.in_InputIdInLocal, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:RLG8Wia3J0OjRcy7wXFY+w", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:nlLHLy1mzUaJ4Rc62U5F+Q", callContext.id);
}

};
var controller = UBTConnectLibraryController.default;
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.FocusOnInput$vars", [{
name: "In_InputId",
attrName: "in_InputIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnectLibraryController.default.clientActionProxies.focusOnInput$Action = function (in_InputIdIn) {
in_InputIdIn = (in_InputIdIn === undefined) ? "" : in_InputIdIn;
return controller.executeActionInsideJSNode(UBTConnectLibraryController.default.focusOnInput$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(in_InputIdIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("UBTConnectLibrary.controller$FocusOnInput.FocusOnInputJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
window.setTimeout(()=> {
    let sInput = document.getElementById($parameters.InputId);
    if(sInput){
        sInput.focus();
    }
},100);
};
});

define("UBTConnectLibrary.controller$FormatClasses", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.clientVariables"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryClientVariables) {
var OS = OutSystems.Internal;
UBTConnectLibraryController.default.formatClasses$Action = function (originalClassesIn, newClassInIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.FormatClasses$vars"))());
vars.value.originalClassesInLocal = originalClassesIn;
vars.value.newClassInInLocal = newClassInIn;
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.FormatClasses$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:jE8Waq61oU2GVdsTalwQzA:/ClientActionFlows.jE8Waq61oU2GVdsTalwQzA:gV3J0IQNBkd8d_CaXF1XiQ", "UBTConnectLibrary", "FormatClasses", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:HrpZayxsVUaGlCNw0djfig", callContext.id);
// Has new class to add?
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:iiXr_LjfFEOB++KTGCgM1A", callContext.id) && ((vars.value.newClassInInLocal) !== ("")))) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:0_LxmZYhKku6vK3g94Bg+Q", callContext.id);
// ClassesOut = If
outVars.value.classesOutOut = ((((vars.value.originalClassesInLocal) !== (""))) ? (((vars.value.originalClassesInLocal + " ") + vars.value.newClassInInLocal)) : (vars.value.newClassInInLocal));
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:+bcmEpSGi0yjCZVE7mGIdA", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:ANLfC15AvkKUegvuaO9JNw", callContext.id);
// ClassesOut = OriginalClasses
outVars.value.classesOutOut = vars.value.originalClassesInLocal;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:+bcmEpSGi0yjCZVE7mGIdA", callContext.id);
}

return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:jE8Waq61oU2GVdsTalwQzA", callContext.id);
}

};
var controller = UBTConnectLibraryController.default;
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.FormatClasses$vars", [{
name: "OriginalClasses",
attrName: "originalClassesInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "NewClassIn",
attrName: "newClassInInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.FormatClasses$outVars", [{
name: "ClassesOut",
attrName: "classesOutOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnectLibraryController.default.clientActionProxies.formatClasses$Action = function (originalClassesIn, newClassInIn) {
originalClassesIn = (originalClassesIn === undefined) ? "" : originalClassesIn;
newClassInIn = (newClassInIn === undefined) ? "" : newClassInIn;
return controller.executeActionInsideJSNode(UBTConnectLibraryController.default.formatClasses$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(originalClassesIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(newClassInIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
ClassesOut: OS.DataConversion.JSNodeParamConverter.to(actionResults.classesOutOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("UBTConnectLibrary.controller$FormatConnectDate", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.model$WeekdayLabelTypeRec", "UBTConnectLibrary.controller$GetConnectWeekdayLabel_ByDate", "UBTConnectLibrary.controller$GetConnectDateFormat_DayMonth"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryClientVariables) {
var OS = OutSystems.Internal;
UBTConnectLibraryController.default.formatConnectDate$Action = function (in_DateIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.FormatConnectDate$vars"))());
vars.value.in_DateInLocal = in_DateIn;
var getConnectWeekdayLabel_ByDateVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.FormatConnectDate$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getConnectWeekdayLabel_ByDateVar = getConnectWeekdayLabel_ByDateVar;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:fdY0D1oZvEO69YZhVfuq1w:/ClientActionFlows.fdY0D1oZvEO69YZhVfuq1w:FuHrQsjhv3PycDNbhgD7AA", "UBTConnectLibrary", "FormatConnectDate", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:Hj96rjQa6UGY64lz0LoIkg", callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:8RQfCAwH+0W25fj1N1Z01A", callContext.id);
// Execute Action: GetConnectWeekdayLabel_ByDate
getConnectWeekdayLabel_ByDateVar.value = UBTConnectLibraryController.default.getConnectWeekdayLabel_ByDate$Action(vars.value.in_DateInLocal, callContext);

OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:YQLoVlxIKEWlXCg9S8qZDQ", callContext.id);
// Date = FormatDateTime
vars.value.dateVar = OS.BuiltinFunctions.formatDateTime(vars.value.in_DateInLocal, OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.getConnectDateFormat_DayMonth$Action(callContext).out_DayMonthFormatOut;
}, OS.DataTypes.DataTypes.Text, callContext.id));
// Out_FormattedDate
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:vv9PrNhm20S0wdkZmbRXTw", callContext.id);
// Out_FormattedDate.LongLabel = GetConnectWeekdayLabel_ByDate.Out_WeekdayLabel.LongLabel + ", " + Date
outVars.value.out_FormattedDateOut.longLabelAttr = ((getConnectWeekdayLabel_ByDateVar.value.out_WeekdayLabelOut.longLabelAttr + ", ") + vars.value.dateVar);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:vv9PrNhm20S0wdkZmbRXTw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Out_FormattedDate.ShortLabel = GetConnectWeekdayLabel_ByDate.Out_WeekdayLabel.ShortLabel + ", " + Date
outVars.value.out_FormattedDateOut.shortLabelAttr = ((getConnectWeekdayLabel_ByDateVar.value.out_WeekdayLabelOut.shortLabelAttr + ", ") + vars.value.dateVar);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:vv9PrNhm20S0wdkZmbRXTw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Out_FormattedDate.Initials = GetConnectWeekdayLabel_ByDate.Out_WeekdayLabel.Initials + ", " + Date
outVars.value.out_FormattedDateOut.initialsAttr = ((getConnectWeekdayLabel_ByDateVar.value.out_WeekdayLabelOut.initialsAttr + ", ") + vars.value.dateVar);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:vv9PrNhm20S0wdkZmbRXTw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// Out_FormattedDate.Number = GetConnectWeekdayLabel_ByDate.Out_WeekdayLabel.Number + ", " + Date
outVars.value.out_FormattedDateOut.numberAttr = ((getConnectWeekdayLabel_ByDateVar.value.out_WeekdayLabelOut.numberAttr + ", ") + vars.value.dateVar);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:Dpp1Lq9vk0m5IkSRPDp_VQ", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:fdY0D1oZvEO69YZhVfuq1w", callContext.id);
}

};
var controller = UBTConnectLibraryController.default;
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.FormatConnectDate$vars", [{
name: "In_Date",
attrName: "in_DateInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Date,
defaultValue: function () {
return OS.DataTypes.DateTime.defaultValue;
}
}, {
name: "Date",
attrName: "dateVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.FormatConnectDate$outVars", [{
name: "Out_FormattedDate",
attrName: "out_FormattedDateOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new UBTConnectLibraryModel.WeekdayLabelTypeRec();
},
complexType: UBTConnectLibraryModel.WeekdayLabelTypeRec
}]);
UBTConnectLibraryController.default.clientActionProxies.formatConnectDate$Action = function (in_DateIn) {
in_DateIn = (in_DateIn === undefined) ? OS.DataTypes.DateTime.defaultValue : in_DateIn;
return controller.executeActionInsideJSNode(UBTConnectLibraryController.default.formatConnectDate$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(in_DateIn, OS.DataTypes.DataTypes.Date)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Out_FormattedDate: actionResults.out_FormattedDateOut
};
});
};
});

define("UBTConnectLibrary.controller$FormatConnectDate_WithYear", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.model$DateComponentFormatRec", "UBTConnectLibrary.controller$GetConnectDateFormat_Components", "UBTConnectLibrary.model$WeekdayLabelTypeRec", "UBTConnectLibrary.controller$FormatConnectDate"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryClientVariables) {
var OS = OutSystems.Internal;
UBTConnectLibraryController.default.formatConnectDate_WithYear$Action = function (in_DateIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.FormatConnectDate_WithYear$vars"))());
vars.value.in_DateInLocal = in_DateIn;
var getConnectDateFormat_ComponentsVar = new OS.DataTypes.VariableHolder();
var formatConnectDateVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.FormatConnectDate_WithYear$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getConnectDateFormat_ComponentsVar = getConnectDateFormat_ComponentsVar;
varBag.formatConnectDateVar = formatConnectDateVar;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:LKWCzkfXTEqGPV5WOjWRjg:/ClientActionFlows.LKWCzkfXTEqGPV5WOjWRjg:yjj9Xe49NX7_ccTAAiycFA", "UBTConnectLibrary", "FormatConnectDate_WithYear", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:ejbRBV_W6Uyupzzk8AhPqQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:_5MuXmkXbUikVJ8bdXUdtg", callContext.id);
// Execute Action: FormatConnectDate
formatConnectDateVar.value = UBTConnectLibraryController.default.formatConnectDate$Action(vars.value.in_DateInLocal, callContext);

OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:f7uEEsLeYU+41w9rYP67tA", callContext.id);
// Execute Action: GetConnectDateFormat_Components
getConnectDateFormat_ComponentsVar.value = UBTConnectLibraryController.default.getConnectDateFormat_Components$Action(callContext);

OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:zorv5RktdEGq5zuhqo4Ucw", callContext.id);
// Year = FormatDateTime
vars.value.yearVar = OS.BuiltinFunctions.formatDateTime(vars.value.in_DateInLocal, (" " + getConnectDateFormat_ComponentsVar.value.out_ComponentFormatsOut.yearFormatAttr));
// Out_FormattedDate
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:tkaxHUOtkUm3R+MLuSObGg", callContext.id);
// Out_FormattedDate.LongLabel = FormatConnectDate.Out_FormattedDate.LongLabel + Year
outVars.value.out_FormattedDateOut.longLabelAttr = (formatConnectDateVar.value.out_FormattedDateOut.longLabelAttr + vars.value.yearVar);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:tkaxHUOtkUm3R+MLuSObGg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Out_FormattedDate.ShortLabel = FormatConnectDate.Out_FormattedDate.ShortLabel + Year
outVars.value.out_FormattedDateOut.shortLabelAttr = (formatConnectDateVar.value.out_FormattedDateOut.shortLabelAttr + vars.value.yearVar);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:tkaxHUOtkUm3R+MLuSObGg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Out_FormattedDate.Initials = FormatConnectDate.Out_FormattedDate.Initials + Year
outVars.value.out_FormattedDateOut.initialsAttr = (formatConnectDateVar.value.out_FormattedDateOut.initialsAttr + vars.value.yearVar);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:tkaxHUOtkUm3R+MLuSObGg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// Out_FormattedDate.Number = FormatConnectDate.Out_FormattedDate.Number + Year
outVars.value.out_FormattedDateOut.numberAttr = (formatConnectDateVar.value.out_FormattedDateOut.numberAttr + vars.value.yearVar);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:SxUyWA7KM02pGZNK8w1zGA", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:LKWCzkfXTEqGPV5WOjWRjg", callContext.id);
}

};
var controller = UBTConnectLibraryController.default;
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.FormatConnectDate_WithYear$vars", [{
name: "In_Date",
attrName: "in_DateInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Date,
defaultValue: function () {
return OS.DataTypes.DateTime.defaultValue;
}
}, {
name: "Year",
attrName: "yearVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.FormatConnectDate_WithYear$outVars", [{
name: "Out_FormattedDate",
attrName: "out_FormattedDateOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new UBTConnectLibraryModel.WeekdayLabelTypeRec();
},
complexType: UBTConnectLibraryModel.WeekdayLabelTypeRec
}]);
UBTConnectLibraryController.default.clientActionProxies.formatConnectDate_WithYear$Action = function (in_DateIn) {
in_DateIn = (in_DateIn === undefined) ? OS.DataTypes.DateTime.defaultValue : in_DateIn;
return controller.executeActionInsideJSNode(UBTConnectLibraryController.default.formatConnectDate_WithYear$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(in_DateIn, OS.DataTypes.DataTypes.Date)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Out_FormattedDate: actionResults.out_FormattedDateOut
};
});
};
});

define("UBTConnectLibrary.controller$FormatConnectDateTime", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.controller$FormatConnectTime", "UBTConnectLibrary.model$WeekdayLabelTypeRec", "UBTConnectLibrary.controller$FormatConnectDate"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryClientVariables) {
var OS = OutSystems.Internal;
UBTConnectLibraryController.default.formatConnectDateTime$Action = function (in_DateTimeIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.FormatConnectDateTime$vars"))());
vars.value.in_DateTimeInLocal = in_DateTimeIn;
var formatConnectTimeVar = new OS.DataTypes.VariableHolder();
var formatConnectDateVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.FormatConnectDateTime$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.formatConnectTimeVar = formatConnectTimeVar;
varBag.formatConnectDateVar = formatConnectDateVar;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:Z4ngoKni_0yOMOE_ltK73w:/ClientActionFlows.Z4ngoKni_0yOMOE_ltK73w:_wTNe3TTGGldtzHJ3mlhzg", "UBTConnectLibrary", "FormatConnectDateTime", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:wn+5LDJqrkWOHXMPlZA3rw", callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:vMEpD8LJS0Grt_nmmAyHFQ", callContext.id);
// Execute Action: FormatConnectDate
formatConnectDateVar.value = UBTConnectLibraryController.default.formatConnectDate$Action(OS.BuiltinFunctions.dateTimeToDate(vars.value.in_DateTimeInLocal), callContext);

OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:D7rVAna9y0SsiXhuTkJuSA", callContext.id);
// Execute Action: FormatConnectTime
formatConnectTimeVar.value = UBTConnectLibraryController.default.formatConnectTime$Action(OS.BuiltinFunctions.dateTimeToTime(vars.value.in_DateTimeInLocal), callContext);

OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:t4qYEVOcR0GIUAyPkj60bg", callContext.id);
// Time = " at " + FormatConnectTime.Out_FormattedTime
vars.value.timeVar = (" at " + formatConnectTimeVar.value.out_FormattedTimeOut);
// Out_FormattedDateTime
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:qtCe_3F9hUWm_5j06l0AtA", callContext.id);
// Out_FormattedDateTime.LongLabel = FormatConnectDate.Out_FormattedDate.LongLabel + Time
outVars.value.out_FormattedDateTimeOut.longLabelAttr = (formatConnectDateVar.value.out_FormattedDateOut.longLabelAttr + vars.value.timeVar);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:qtCe_3F9hUWm_5j06l0AtA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Out_FormattedDateTime.ShortLabel = FormatConnectDate.Out_FormattedDate.ShortLabel + Time
outVars.value.out_FormattedDateTimeOut.shortLabelAttr = (formatConnectDateVar.value.out_FormattedDateOut.shortLabelAttr + vars.value.timeVar);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:qtCe_3F9hUWm_5j06l0AtA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Out_FormattedDateTime.Initials = FormatConnectDate.Out_FormattedDate.Initials + Time
outVars.value.out_FormattedDateTimeOut.initialsAttr = (formatConnectDateVar.value.out_FormattedDateOut.initialsAttr + vars.value.timeVar);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:qtCe_3F9hUWm_5j06l0AtA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// Out_FormattedDateTime.Number = FormatConnectDate.Out_FormattedDate.Number + Time
outVars.value.out_FormattedDateTimeOut.numberAttr = (formatConnectDateVar.value.out_FormattedDateOut.numberAttr + vars.value.timeVar);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:xFq7ScSv4Uaz+o1pEPUrug", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:Z4ngoKni_0yOMOE_ltK73w", callContext.id);
}

};
var controller = UBTConnectLibraryController.default;
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.FormatConnectDateTime$vars", [{
name: "In_DateTime",
attrName: "in_DateTimeInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.DateTime,
defaultValue: function () {
return OS.DataTypes.DateTime.defaultValue;
}
}, {
name: "Time",
attrName: "timeVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.FormatConnectDateTime$outVars", [{
name: "Out_FormattedDateTime",
attrName: "out_FormattedDateTimeOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new UBTConnectLibraryModel.WeekdayLabelTypeRec();
},
complexType: UBTConnectLibraryModel.WeekdayLabelTypeRec
}]);
UBTConnectLibraryController.default.clientActionProxies.formatConnectDateTime$Action = function (in_DateTimeIn) {
in_DateTimeIn = (in_DateTimeIn === undefined) ? OS.DataTypes.DateTime.defaultValue : in_DateTimeIn;
return controller.executeActionInsideJSNode(UBTConnectLibraryController.default.formatConnectDateTime$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(in_DateTimeIn, OS.DataTypes.DataTypes.DateTime)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Out_FormattedDateTime: actionResults.out_FormattedDateTimeOut
};
});
};
});

define("UBTConnectLibrary.controller$FormatConnectTime", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.controller$GetConnectTimeFormat"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryClientVariables) {
var OS = OutSystems.Internal;
UBTConnectLibraryController.default.formatConnectTime$Action = function (in_TimeIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.FormatConnectTime$vars"))());
vars.value.in_TimeInLocal = in_TimeIn;
var getConnectTimeFormatVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.FormatConnectTime$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getConnectTimeFormatVar = getConnectTimeFormatVar;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:tco8HW03kUGvX0nq1wOm3g:/ClientActionFlows.tco8HW03kUGvX0nq1wOm3g:kSYG9uTE7Df3rpY7RTjzKA", "UBTConnectLibrary", "FormatConnectTime", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:cneNE8+PIU6MpuuR52Gp1Q", callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:2JGkejjdcUSj9aT46+Rh9w", callContext.id);
// Execute Action: GetConnectTimeFormat
getConnectTimeFormatVar.value = UBTConnectLibraryController.default.getConnectTimeFormat$Action(callContext);

OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:nMFv1wF4QUmicA+KsbYu2A", callContext.id);
// Out_FormattedTime = FormatDateTime
outVars.value.out_FormattedTimeOut = OS.BuiltinFunctions.formatDateTime(vars.value.in_TimeInLocal, getConnectTimeFormatVar.value.out_TimeFormatOut);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:g8u3_dRXu0mPbt6nn7yLSA", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:tco8HW03kUGvX0nq1wOm3g", callContext.id);
}

};
var controller = UBTConnectLibraryController.default;
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.FormatConnectTime$vars", [{
name: "In_Time",
attrName: "in_TimeInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Time,
defaultValue: function () {
return OS.DataTypes.DateTime.defaultValue;
}
}]);
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.FormatConnectTime$outVars", [{
name: "Out_FormattedTime",
attrName: "out_FormattedTimeOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnectLibraryController.default.clientActionProxies.formatConnectTime$Action = function (in_TimeIn) {
in_TimeIn = (in_TimeIn === undefined) ? OS.DataTypes.DateTime.defaultValue : in_TimeIn;
return controller.executeActionInsideJSNode(UBTConnectLibraryController.default.formatConnectTime$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(in_TimeIn, OS.DataTypes.DataTypes.Time)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Out_FormattedTime: OS.DataConversion.JSNodeParamConverter.to(actionResults.out_FormattedTimeOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("UBTConnectLibrary.controller$FormatStyles", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.clientVariables"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryClientVariables) {
var OS = OutSystems.Internal;
UBTConnectLibraryController.default.formatStyles$Action = function (originalStylesIn, newStylePropertyIn, newStyleValueIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.FormatStyles$vars"))());
vars.value.originalStylesInLocal = originalStylesIn;
vars.value.newStylePropertyInLocal = newStylePropertyIn;
vars.value.newStyleValueInLocal = newStyleValueIn;
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.FormatStyles$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:LhsLp2yF9EG_ra95wu_wAA:/ClientActionFlows.LhsLp2yF9EG_ra95wu_wAA:k6s+HEdVHgmaUt9WK7PcVQ", "UBTConnectLibrary", "FormatStyles", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:EMiOfU3uXUuyyCc6Mn_JQQ", callContext.id);
// Has new styles to add?
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:1GibhZ_3P0i_gYH1Lx13Kg", callContext.id) && (((vars.value.newStylePropertyInLocal) !== ("")) && ((vars.value.newStyleValueInLocal) !== (OS.BuiltinFunctions.nullTextIdentifier()))))) {
// Set New Style
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:LjsdbdfCh0GWdLax2qbYtg", callContext.id);
// NewStyle = NewStyleProperty + ": " + NewStyleValue + If
vars.value.newStyleVar = (((vars.value.newStylePropertyInLocal + ": ") + vars.value.newStyleValueInLocal) + (((OS.BuiltinFunctions.substr(vars.value.newStyleValueInLocal, (OS.BuiltinFunctions.length(vars.value.newStyleValueInLocal) - 1), OS.BuiltinFunctions.length(vars.value.newStyleValueInLocal)) === ";")) ? ("") : (";")));
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:FidoVesx4Eyg2GYb1UseGQ", callContext.id);
// StylesOut = If
outVars.value.stylesOutOut = ((((vars.value.originalStylesInLocal) !== (""))) ? (((vars.value.originalStylesInLocal + " ") + vars.value.newStyleVar)) : (vars.value.newStyleVar));
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:E4Lo6c7_QUeJymZk1l48aw", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:n447hq+lN0W7u4_esx2XzQ", callContext.id);
// StylesOut = OriginalStyles
outVars.value.stylesOutOut = vars.value.originalStylesInLocal;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:E4Lo6c7_QUeJymZk1l48aw", callContext.id);
}

return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:LhsLp2yF9EG_ra95wu_wAA", callContext.id);
}

};
var controller = UBTConnectLibraryController.default;
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.FormatStyles$vars", [{
name: "OriginalStyles",
attrName: "originalStylesInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "NewStyleProperty",
attrName: "newStylePropertyInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "NewStyleValue",
attrName: "newStyleValueInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "NewStyle",
attrName: "newStyleVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.FormatStyles$outVars", [{
name: "StylesOut",
attrName: "stylesOutOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnectLibraryController.default.clientActionProxies.formatStyles$Action = function (originalStylesIn, newStylePropertyIn, newStyleValueIn) {
originalStylesIn = (originalStylesIn === undefined) ? "" : originalStylesIn;
newStylePropertyIn = (newStylePropertyIn === undefined) ? "" : newStylePropertyIn;
newStyleValueIn = (newStyleValueIn === undefined) ? "" : newStyleValueIn;
return controller.executeActionInsideJSNode(UBTConnectLibraryController.default.formatStyles$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(originalStylesIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(newStylePropertyIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(newStyleValueIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
StylesOut: OS.DataConversion.JSNodeParamConverter.to(actionResults.stylesOutOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("UBTConnectLibrary.controller$Get_BackgroundColor_Avatar_UpdateItem", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.clientVariables"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryClientVariables) {
var OS = OutSystems.Internal;
UBTConnectLibraryController.default.get_BackgroundColor_Avatar_UpdateItem$Action = function (in_Type_UpdateFeedItemIdIn, in_Type_GenderIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.Get_BackgroundColor_Avatar_UpdateItem$vars"))());
vars.value.in_Type_UpdateFeedItemIdInLocal = in_Type_UpdateFeedItemIdIn;
vars.value.in_Type_GenderIdInLocal = in_Type_GenderIdIn;
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.Get_BackgroundColor_Avatar_UpdateItem$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:Suud6YoUP0Gch5rgA9f9wQ:/ClientActionFlows.Suud6YoUP0Gch5rgA9f9wQ:ryk577tuRxoBCmXfavAUeA", "UBTConnectLibrary", "Get_BackgroundColor_Avatar_UpdateItem", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:FEuBy3UYkkGohbPqfnL3lQ", callContext.id);
// Marriage?
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:DLGLwVvKXEuUeP51RyOfRw", callContext.id) && (vars.value.in_Type_UpdateFeedItemIdInLocal === UBTConnectLibraryModel.staticEntities.connect_UpdateTypeId.marriage))) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:d+b83OP6f0yL1XHL4_8upQ", callContext.id);
// Out_BackgroundColor = YellowLightest
outVars.value.out_BackgroundColorOut = UBTConnectLibraryModel.staticEntities.uBT_Color.yellowLightest;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:5FljK+59BEaMI4qrW1tEyw", callContext.id);
} else {
// Births?
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:j+l7klqyLE+2SwD0JXEcVA", callContext.id) && (vars.value.in_Type_UpdateFeedItemIdInLocal === UBTConnectLibraryModel.staticEntities.connect_UpdateTypeId.birth))) {
// Male?
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:KNdYskD8ZUOiF4C3411KRg", callContext.id) && (vars.value.in_Type_GenderIdInLocal === UBTConnectLibraryModel.staticEntities.gender.mALE))) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:p9xb21GdYUqzZ1sE+eq4oA", callContext.id);
// Out_BackgroundColor = BlueNonStandard
outVars.value.out_BackgroundColorOut = UBTConnectLibraryModel.staticEntities.uBT_Color.blueNonStandard;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:ZqmFpk4qqkGiLi_KO_TFjg", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:e+t5n50a60W91A6ahCd3uw", callContext.id);
// Out_BackgroundColor = PinkNonStandard
outVars.value.out_BackgroundColorOut = UBTConnectLibraryModel.staticEntities.uBT_Color.pinkNonStandard;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:ZqmFpk4qqkGiLi_KO_TFjg", callContext.id);
}

} else {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:rzjqLJ4kmkG8B8lJQAnp3A", callContext.id);
// Out_BackgroundColor = Neutral3
outVars.value.out_BackgroundColorOut = UBTConnectLibraryModel.staticEntities.uBT_Color.neutral3;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:Bk4rlN6VfEyDm2Ezb9jAMw", callContext.id);
}

}

return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:Suud6YoUP0Gch5rgA9f9wQ", callContext.id);
}

};
var controller = UBTConnectLibraryController.default;
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.Get_BackgroundColor_Avatar_UpdateItem$vars", [{
name: "In_Type_UpdateFeedItemId",
attrName: "in_Type_UpdateFeedItemIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "In_Type_GenderId",
attrName: "in_Type_GenderIdInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.Get_BackgroundColor_Avatar_UpdateItem$outVars", [{
name: "Out_BackgroundColor",
attrName: "out_BackgroundColorOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnectLibraryController.default.clientActionProxies.get_BackgroundColor_Avatar_UpdateItem$Action = function (in_Type_UpdateFeedItemIdIn, in_Type_GenderIdIn) {
in_Type_UpdateFeedItemIdIn = (in_Type_UpdateFeedItemIdIn === undefined) ? "" : in_Type_UpdateFeedItemIdIn;
in_Type_GenderIdIn = (in_Type_GenderIdIn === undefined) ? "" : in_Type_GenderIdIn;
return controller.executeActionInsideJSNode(UBTConnectLibraryController.default.get_BackgroundColor_Avatar_UpdateItem$Action.bind(controller, in_Type_UpdateFeedItemIdIn, in_Type_GenderIdIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Out_BackgroundColor: actionResults.out_BackgroundColorOut
};
});
};
});

define("UBTConnectLibrary.controller$Get_BackgroundColor_Tag_UpdateItem", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.controller$Get_BackgroundColor_Avatar_UpdateItem", "UBTConnectLibrary.model$TextGenderIdentifierRecordList"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryClientVariables) {
var OS = OutSystems.Internal;
UBTConnectLibraryController.default.get_BackgroundColor_Tag_UpdateItem$Action = function (in_Type_UpdateFeedItemIdIn, in_InitialsListIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.Get_BackgroundColor_Tag_UpdateItem$vars"))());
vars.value.in_Type_UpdateFeedItemIdInLocal = in_Type_UpdateFeedItemIdIn;
vars.value.in_InitialsListInLocal = in_InitialsListIn.clone();
var get_BackgroundColor_Avatar_UpdateItemVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.Get_BackgroundColor_Tag_UpdateItem$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.get_BackgroundColor_Avatar_UpdateItemVar = get_BackgroundColor_Avatar_UpdateItemVar;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:Jtpcb0Zt20+IdYwJpAZLig:/ClientActionFlows.Jtpcb0Zt20+IdYwJpAZLig:J2sNN2GTENZb13XX4Ut_Ew", "UBTConnectLibrary", "Get_BackgroundColor_Tag_UpdateItem", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:YSVZIW4ANEujBu0Mg11drg", callContext.id);
// Birth?
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:yrEFuj2IfUO6QE0+b88Fow", callContext.id) && (vars.value.in_Type_UpdateFeedItemIdInLocal === UBTConnectLibraryModel.staticEntities.connect_UpdateTypeId.birth))) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:2+3QMeEraEeurPlpd6GGEw", callContext.id);
// Type_GenderIdentifier = FEMALE
vars.value.type_GenderIdentifierVar = UBTConnectLibraryModel.staticEntities.gender.fEMALE;
// Foreach In_InitialsList
callContext.iterationContext.registerIterationStart(vars.value.in_InitialsListInLocal);
try {var in_InitialsListIterator = callContext.iterationContext.getIterator(vars.value.in_InitialsListInLocal);
var in_InitialsListIndex = 0;
while ((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:6Ev7AIuH6kOu70bct0U7iQ", callContext.id) && (in_InitialsListIndex < vars.value.in_InitialsListInLocal.length))) {
in_InitialsListIterator.currentRowNumber = in_InitialsListIndex;
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:TI6lKwA5JkalkG5fTGn2kQ", callContext.id) && (vars.value.in_InitialsListInLocal.getItem(in_InitialsListIndex.valueOf()).genderAttr === UBTConnectLibraryModel.staticEntities.gender.mALE))) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:NEAfgiesQUm0f7mND3juyg", callContext.id);
// Type_GenderIdentifier = MALE
vars.value.type_GenderIdentifierVar = UBTConnectLibraryModel.staticEntities.gender.mALE;
// <<
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:2bDIIHS6aUma+owGBunTCA", callContext.id);
}

in_InitialsListIndex++;
}

} finally {
callContext.iterationContext.registerIterationEnd(vars.value.in_InitialsListInLocal);
}

}

OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:bP88nCGxT0+_6KhRlxFEqw", callContext.id);
// Execute Action: Get_BackgroundColor_Avatar_UpdateItem
get_BackgroundColor_Avatar_UpdateItemVar.value = UBTConnectLibraryController.default.get_BackgroundColor_Avatar_UpdateItem$Action(vars.value.in_Type_UpdateFeedItemIdInLocal, vars.value.type_GenderIdentifierVar, callContext);

OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:rRA062vvJE2yJ5d63+JE+w", callContext.id);
// Out_BackgroundColor = Get_BackgroundColor_Avatar_UpdateItem.Out_BackgroundColor
outVars.value.out_BackgroundColorOut = get_BackgroundColor_Avatar_UpdateItemVar.value.out_BackgroundColorOut;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:OnDCsiM5xkWsDstmTzqp9g", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:Jtpcb0Zt20+IdYwJpAZLig", callContext.id);
}

};
var controller = UBTConnectLibraryController.default;
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.Get_BackgroundColor_Tag_UpdateItem$vars", [{
name: "In_Type_UpdateFeedItemId",
attrName: "in_Type_UpdateFeedItemIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "In_InitialsList",
attrName: "in_InitialsListInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new UBTConnectLibraryModel.TextGenderIdentifierRecordList();
},
complexType: UBTConnectLibraryModel.TextGenderIdentifierRecordList
}, {
name: "Type_GenderIdentifier",
attrName: "type_GenderIdentifierVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.Get_BackgroundColor_Tag_UpdateItem$outVars", [{
name: "Out_BackgroundColor",
attrName: "out_BackgroundColorOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnectLibraryController.default.clientActionProxies.get_BackgroundColor_Tag_UpdateItem$Action = function (in_Type_UpdateFeedItemIdIn, in_InitialsListIn) {
in_Type_UpdateFeedItemIdIn = (in_Type_UpdateFeedItemIdIn === undefined) ? "" : in_Type_UpdateFeedItemIdIn;
in_InitialsListIn = (in_InitialsListIn === undefined) ? new UBTConnectLibraryModel.TextGenderIdentifierRecordList() : in_InitialsListIn;
return controller.executeActionInsideJSNode(UBTConnectLibraryController.default.get_BackgroundColor_Tag_UpdateItem$Action.bind(controller, in_Type_UpdateFeedItemIdIn, in_InitialsListIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Out_BackgroundColor: actionResults.out_BackgroundColorOut
};
});
};
});

define("UBTConnectLibrary.controller$Get_Description_Notification", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.clientVariables"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryClientVariables) {
var OS = OutSystems.Internal;
UBTConnectLibraryController.default.get_Description_Notification$Action = function (in_Type_NotificationIn, in_DynamicTextIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.Get_Description_Notification$vars"))());
vars.value.in_Type_NotificationInLocal = in_Type_NotificationIn;
vars.value.in_DynamicTextInLocal = in_DynamicTextIn;
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.Get_Description_Notification$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:nErwnqZuPEa00B4s3kE0pw:/ClientActionFlows.nErwnqZuPEa00B4s3kE0pw:aODJLsAgTHzVGpqaZpPKnA", "UBTConnectLibrary", "Get_Description_Notification", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:L3vElHVuf0+LDyQcL30Kxg", callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:AvDLLBS+20KRedQXSBL80Q", callContext.id);
// Out_Description = In_DynamicText
outVars.value.out_DescriptionOut = vars.value.in_DynamicTextInLocal;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:UN4N14gtCkWsHQ7SIVAJig", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:nErwnqZuPEa00B4s3kE0pw", callContext.id);
}

};
var controller = UBTConnectLibraryController.default;
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.Get_Description_Notification$vars", [{
name: "In_Type_Notification",
attrName: "in_Type_NotificationInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "In_DynamicText",
attrName: "in_DynamicTextInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.Get_Description_Notification$outVars", [{
name: "Out_Description",
attrName: "out_DescriptionOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnectLibraryController.default.clientActionProxies.get_Description_Notification$Action = function (in_Type_NotificationIn, in_DynamicTextIn) {
in_Type_NotificationIn = (in_Type_NotificationIn === undefined) ? "" : in_Type_NotificationIn;
in_DynamicTextIn = (in_DynamicTextIn === undefined) ? "" : in_DynamicTextIn;
return controller.executeActionInsideJSNode(UBTConnectLibraryController.default.get_Description_Notification$Action.bind(controller, in_Type_NotificationIn, OS.DataConversion.JSNodeParamConverter.from(in_DynamicTextIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Out_Description: OS.DataConversion.JSNodeParamConverter.to(actionResults.out_DescriptionOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("UBTConnectLibrary.controller$Get_ElapsedTime_Notification", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.clientVariables"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryClientVariables) {
var OS = OutSystems.Internal;
UBTConnectLibraryController.default.get_ElapsedTime_Notification$Action = function (in_NotificationDateIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.Get_ElapsedTime_Notification$vars"))());
vars.value.in_NotificationDateInLocal = in_NotificationDateIn;
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.Get_ElapsedTime_Notification$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:M6XvxxbGOkOdjf3nuPCbgQ:/ClientActionFlows.M6XvxxbGOkOdjf3nuPCbgQ:DyWTN3v8K1n0iTyVhTv9Ww", "UBTConnectLibrary", "Get_ElapsedTime_Notification", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:6tammf1OeEepgU7Fdux66w", callContext.id);
// Elapsed seconds
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:9DjHorkhUkKHDwe9pd7AjA", callContext.id);
// ElapsedTime = DiffSeconds
vars.value.elapsedTimeVar = OS.BuiltinFunctions.diffSeconds(vars.value.in_NotificationDateInLocal, OS.BuiltinFunctions.currDateTime());
// Less than a minute?
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:jzfMa3XAzkqDUMMMY09BDw", callContext.id) && OS.BuiltinFunctions.round(OS.BuiltinFunctions.integerToDecimal(vars.value.elapsedTimeVar), 0).lte(OS.BuiltinFunctions.integerToDecimal(60)))) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:cgIviAucik+WFNPJY83n9g", callContext.id);
// Out_ElapsedTime = ElapsedTime + "s"
outVars.value.out_ElapsedTimeOut = ((vars.value.elapsedTimeVar).toString() + "s");
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:1wple1XJmEOvB5+CHu1CQg", callContext.id);
} else {
// Elapsed minutes
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:jJCyEtrM9k+_AWwSztFLcg", callContext.id);
// ElapsedTime = DiffMinutes
vars.value.elapsedTimeVar = OS.BuiltinFunctions.diffMinutes(vars.value.in_NotificationDateInLocal, OS.BuiltinFunctions.currDateTime());
// Less than an hour?
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:szWe6JDQ90e4iI4_OTCFxg", callContext.id) && OS.BuiltinFunctions.round(OS.BuiltinFunctions.integerToDecimal(vars.value.elapsedTimeVar), 0).lte(OS.BuiltinFunctions.integerToDecimal(60)))) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:cGv1TaVW+U6jyFOUZLWwwQ", callContext.id);
// Out_ElapsedTime = ElapsedTime + "m"
outVars.value.out_ElapsedTimeOut = ((vars.value.elapsedTimeVar).toString() + "m");
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:4qVyPJ3Mj0KRoLepiZzDQw", callContext.id);
} else {
// Elapsed hours
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:5XAFmRb9d0OVWxYGKEKs_w", callContext.id);
// ElapsedTime = DiffHours
vars.value.elapsedTimeVar = OS.BuiltinFunctions.diffHours(vars.value.in_NotificationDateInLocal, OS.BuiltinFunctions.currDateTime());
// Less than a day?
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:Q80NrcqkpE+ipuPaYYB1Pg", callContext.id) && OS.BuiltinFunctions.round(OS.BuiltinFunctions.integerToDecimal(vars.value.elapsedTimeVar), 0).lt(OS.BuiltinFunctions.integerToDecimal(24)))) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:PXp1CpAQZEuWoU2Ej6uygw", callContext.id);
// Out_ElapsedTime = ElapsedTime + "h"
outVars.value.out_ElapsedTimeOut = ((vars.value.elapsedTimeVar).toString() + "h");
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:WXEzgVXseUOixsTYm1duiA", callContext.id);
} else {
// Elapsed days
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:6IUsq4SyFk63FHVH3rU4Eg", callContext.id);
// ElapsedTime = DiffDays
vars.value.elapsedTimeVar = OS.BuiltinFunctions.diffDays(vars.value.in_NotificationDateInLocal, OS.BuiltinFunctions.currDateTime());
// Less than a week?
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:PKsEsuW8IUy44UIWkBlXmw", callContext.id) && OS.BuiltinFunctions.round(OS.BuiltinFunctions.integerToDecimal(vars.value.elapsedTimeVar), 0).lt(OS.BuiltinFunctions.integerToDecimal(7)))) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:P54bzvJYskCE6FVku3vM+g", callContext.id);
// Out_ElapsedTime = ElapsedTime + "d"
outVars.value.out_ElapsedTimeOut = ((vars.value.elapsedTimeVar).toString() + "d");
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:TJILDu7qT02qrbxFWsu00g", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:A4xTk5Ecr0eAaIY8S9z_ZQ", callContext.id);
// Out_ElapsedTime = Round + "w"
outVars.value.out_ElapsedTimeOut = (OS.BuiltinFunctions.decimalToText(OS.BuiltinFunctions.round(OS.BuiltinFunctions.integerToDecimal(vars.value.elapsedTimeVar).div(OS.BuiltinFunctions.integerToDecimal(7)), 0)) + "w");
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:+2VSFv7dz0u9d6OPX0Psuw", callContext.id);
}

}

}

}

return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:M6XvxxbGOkOdjf3nuPCbgQ", callContext.id);
}

};
var controller = UBTConnectLibraryController.default;
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.Get_ElapsedTime_Notification$vars", [{
name: "In_NotificationDate",
attrName: "in_NotificationDateInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.DateTime,
defaultValue: function () {
return OS.DataTypes.DateTime.defaultValue;
}
}, {
name: "ElapsedTime",
attrName: "elapsedTimeVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.Get_ElapsedTime_Notification$outVars", [{
name: "Out_ElapsedTime",
attrName: "out_ElapsedTimeOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnectLibraryController.default.clientActionProxies.get_ElapsedTime_Notification$Action = function (in_NotificationDateIn) {
in_NotificationDateIn = (in_NotificationDateIn === undefined) ? OS.DataTypes.DateTime.defaultValue : in_NotificationDateIn;
return controller.executeActionInsideJSNode(UBTConnectLibraryController.default.get_ElapsedTime_Notification$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(in_NotificationDateIn, OS.DataTypes.DataTypes.DateTime)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Out_ElapsedTime: OS.DataConversion.JSNodeParamConverter.to(actionResults.out_ElapsedTimeOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("UBTConnectLibrary.controller$Get_FallbackOptions_Notification", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.model$AvatarImageFallbackoptionsRec"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryClientVariables) {
var OS = OutSystems.Internal;
UBTConnectLibraryController.default.get_FallbackOptions_Notification$Action = function (in_Type_NotificationIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.Get_FallbackOptions_Notification$vars"))());
vars.value.in_Type_NotificationIdInLocal = in_Type_NotificationIdIn;
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.Get_FallbackOptions_Notification$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:z4ODVD2MRk2UyRfO9fQAqA:/ClientActionFlows.z4ODVD2MRk2UyRfO9fQAqA:P68VYWFQTwGzDTu2BIN5yw", "UBTConnectLibrary", "Get_FallbackOptions_Notification", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:Wjm9ycZEDk6LczzHk27eGw", callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:bVS8c+0TgUmlHDNUQYfGnA", callContext.id);
// Fallbackoptions.IconId = Home
outVars.value.fallbackoptionsOut.iconIdAttr = UBTConnectLibraryModel.staticEntities.uBT_Icons.home;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:bVS8c+0TgUmlHDNUQYfGnA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Fallbackoptions.BackgroundColor = YellowLightest
outVars.value.fallbackoptionsOut.backgroundColorAttr = UBTConnectLibraryModel.staticEntities.uBT_Color.yellowLightest;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:bVS8c+0TgUmlHDNUQYfGnA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Fallbackoptions.FontColor = YellowDark
outVars.value.fallbackoptionsOut.fontColorAttr = UBTConnectLibraryModel.staticEntities.uBT_Color.yellowDark;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:16b2bAgFu0iam2BtYkuPVQ", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:z4ODVD2MRk2UyRfO9fQAqA", callContext.id);
}

};
var controller = UBTConnectLibraryController.default;
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.Get_FallbackOptions_Notification$vars", [{
name: "In_Type_NotificationId",
attrName: "in_Type_NotificationIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.Get_FallbackOptions_Notification$outVars", [{
name: "Fallbackoptions",
attrName: "fallbackoptionsOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new UBTConnectLibraryModel.AvatarImageFallbackoptionsRec();
},
complexType: UBTConnectLibraryModel.AvatarImageFallbackoptionsRec
}]);
UBTConnectLibraryController.default.clientActionProxies.get_FallbackOptions_Notification$Action = function (in_Type_NotificationIdIn) {
in_Type_NotificationIdIn = (in_Type_NotificationIdIn === undefined) ? "" : in_Type_NotificationIdIn;
return controller.executeActionInsideJSNode(UBTConnectLibraryController.default.get_FallbackOptions_Notification$Action.bind(controller, in_Type_NotificationIdIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Fallbackoptions: actionResults.fallbackoptionsOut
};
});
};
});

define("UBTConnectLibrary.controller$Get_FontColor_Avatar_UpdateItem", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.clientVariables"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryClientVariables) {
var OS = OutSystems.Internal;
UBTConnectLibraryController.default.get_FontColor_Avatar_UpdateItem$Action = function (in_Type_UpdateFeedItemIdIn, in_Type_GenderIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.Get_FontColor_Avatar_UpdateItem$vars"))());
vars.value.in_Type_UpdateFeedItemIdInLocal = in_Type_UpdateFeedItemIdIn;
vars.value.in_Type_GenderIdInLocal = in_Type_GenderIdIn;
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.Get_FontColor_Avatar_UpdateItem$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:dU+ijSZBcUWhLmq_znFOyA:/ClientActionFlows.dU+ijSZBcUWhLmq_znFOyA:hX54OjL7xuo+7XiIf6p0Vw", "UBTConnectLibrary", "Get_FontColor_Avatar_UpdateItem", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:Ep0qepNTOkGxKdSUBhAzkw", callContext.id);
// Marriage?
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:WcNE6bB6HEWOev_sQwy0bg", callContext.id) && (vars.value.in_Type_UpdateFeedItemIdInLocal === UBTConnectLibraryModel.staticEntities.connect_UpdateTypeId.marriage))) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:QXG4E7NZy0i+mv+Qqjq2PQ", callContext.id);
// Out_FontColor = YellowDark
outVars.value.out_FontColorOut = UBTConnectLibraryModel.staticEntities.uBT_Color.yellowDark;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:87uDExwUoUaEu9tHJBdxgA", callContext.id);
} else {
// Births?
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:GkAtHkemZEawSoIOMrrtUA", callContext.id) && (vars.value.in_Type_UpdateFeedItemIdInLocal === UBTConnectLibraryModel.staticEntities.connect_UpdateTypeId.birth))) {
// Male?
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:YDd01TZjB06x0dtyJ904OQ", callContext.id) && (vars.value.in_Type_GenderIdInLocal === UBTConnectLibraryModel.staticEntities.gender.mALE))) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:GHmLOfEzFkW4KOQPHmg7vQ", callContext.id);
// Out_FontColor = Neutral0
outVars.value.out_FontColorOut = UBTConnectLibraryModel.staticEntities.uBT_Color.neutral0;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:PLqsxjJlek66KFjUq+1qwg", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:9Rnvtn+RkUKXZS4nfUK_8A", callContext.id);
// Out_FontColor = Neutral0
outVars.value.out_FontColorOut = UBTConnectLibraryModel.staticEntities.uBT_Color.neutral0;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:PLqsxjJlek66KFjUq+1qwg", callContext.id);
}

} else {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:hv_i95m3K0WLs5KSotqbyQ", callContext.id);
// Out_FontColor = Neutral7
outVars.value.out_FontColorOut = UBTConnectLibraryModel.staticEntities.uBT_Color.neutral7;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:AtOYPl4la0qLj4xlIk+59A", callContext.id);
}

}

return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:dU+ijSZBcUWhLmq_znFOyA", callContext.id);
}

};
var controller = UBTConnectLibraryController.default;
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.Get_FontColor_Avatar_UpdateItem$vars", [{
name: "In_Type_UpdateFeedItemId",
attrName: "in_Type_UpdateFeedItemIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "In_Type_GenderId",
attrName: "in_Type_GenderIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.Get_FontColor_Avatar_UpdateItem$outVars", [{
name: "Out_FontColor",
attrName: "out_FontColorOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnectLibraryController.default.clientActionProxies.get_FontColor_Avatar_UpdateItem$Action = function (in_Type_UpdateFeedItemIdIn, in_Type_GenderIdIn) {
in_Type_UpdateFeedItemIdIn = (in_Type_UpdateFeedItemIdIn === undefined) ? "" : in_Type_UpdateFeedItemIdIn;
in_Type_GenderIdIn = (in_Type_GenderIdIn === undefined) ? "" : in_Type_GenderIdIn;
return controller.executeActionInsideJSNode(UBTConnectLibraryController.default.get_FontColor_Avatar_UpdateItem$Action.bind(controller, in_Type_UpdateFeedItemIdIn, in_Type_GenderIdIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Out_FontColor: actionResults.out_FontColorOut
};
});
};
});

define("UBTConnectLibrary.controller$Get_FontColor_Tag_UpdateItem", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.controller$Get_FontColor_Avatar_UpdateItem", "UBTConnectLibrary.model$TextGenderIdentifierRecordList"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryClientVariables) {
var OS = OutSystems.Internal;
UBTConnectLibraryController.default.get_FontColor_Tag_UpdateItem$Action = function (type_UpdateFeedItemIdIn, initialsListIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.Get_FontColor_Tag_UpdateItem$vars"))());
vars.value.type_UpdateFeedItemIdInLocal = type_UpdateFeedItemIdIn;
vars.value.initialsListInLocal = initialsListIn.clone();
var get_FontColor_Avatar_UpdateItemVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.Get_FontColor_Tag_UpdateItem$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.get_FontColor_Avatar_UpdateItemVar = get_FontColor_Avatar_UpdateItemVar;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:AukxXR_Ws0y2LZthSOvlkQ:/ClientActionFlows.AukxXR_Ws0y2LZthSOvlkQ:4PTfeY6puE+DtmDNkpVyiw", "UBTConnectLibrary", "Get_FontColor_Tag_UpdateItem", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:IvMOy6HJlUSfIa2oyoDbXQ", callContext.id);
// Birth?
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:7EvyKpiV4k6R0Va+GP_HIQ", callContext.id) && (vars.value.type_UpdateFeedItemIdInLocal === UBTConnectLibraryModel.staticEntities.connect_UpdateTypeId.birth))) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:_qOU4Vn1tk2dS0_SMf2Afw", callContext.id);
// Type_GenderIdentifier = FEMALE
vars.value.type_GenderIdentifierVar = UBTConnectLibraryModel.staticEntities.gender.fEMALE;
// Foreach InitialsList
callContext.iterationContext.registerIterationStart(vars.value.initialsListInLocal);
try {var initialsListIterator = callContext.iterationContext.getIterator(vars.value.initialsListInLocal);
var initialsListIndex = 0;
while ((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:s0mM5sXgsUiosBwajVeb2w", callContext.id) && (initialsListIndex < vars.value.initialsListInLocal.length))) {
initialsListIterator.currentRowNumber = initialsListIndex;
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:7641tgdJL0eVH3nTeBhNyA", callContext.id) && (vars.value.initialsListInLocal.getItem(initialsListIndex.valueOf()).genderAttr === UBTConnectLibraryModel.staticEntities.gender.mALE))) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:oaIQmJz+s0CU6ghdYUlonA", callContext.id);
// Type_GenderIdentifier = MALE
vars.value.type_GenderIdentifierVar = UBTConnectLibraryModel.staticEntities.gender.mALE;
// <<
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:2xlpi9W500uDQ+Tc1YPuoA", callContext.id);
}

initialsListIndex++;
}

} finally {
callContext.iterationContext.registerIterationEnd(vars.value.initialsListInLocal);
}

}

OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:eExKABlW_0CcrS8u2b_dbg", callContext.id);
// Execute Action: Get_FontColor_Avatar_UpdateItem
get_FontColor_Avatar_UpdateItemVar.value = UBTConnectLibraryController.default.get_FontColor_Avatar_UpdateItem$Action(vars.value.type_UpdateFeedItemIdInLocal, vars.value.type_GenderIdentifierVar, callContext);

OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:7eOTHvvJq0Cfja0O1hOkJg", callContext.id);
// FontColor = Get_FontColor_Avatar_UpdateItem.Out_FontColor
outVars.value.fontColorOut = get_FontColor_Avatar_UpdateItemVar.value.out_FontColorOut;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:wB_T+VTxIk2cVpGhYl8iFg", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:AukxXR_Ws0y2LZthSOvlkQ", callContext.id);
}

};
var controller = UBTConnectLibraryController.default;
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.Get_FontColor_Tag_UpdateItem$vars", [{
name: "Type_UpdateFeedItemId",
attrName: "type_UpdateFeedItemIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "InitialsList",
attrName: "initialsListInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new UBTConnectLibraryModel.TextGenderIdentifierRecordList();
},
complexType: UBTConnectLibraryModel.TextGenderIdentifierRecordList
}, {
name: "Type_GenderIdentifier",
attrName: "type_GenderIdentifierVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.Get_FontColor_Tag_UpdateItem$outVars", [{
name: "FontColor",
attrName: "fontColorOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnectLibraryController.default.clientActionProxies.get_FontColor_Tag_UpdateItem$Action = function (type_UpdateFeedItemIdIn, initialsListIn) {
type_UpdateFeedItemIdIn = (type_UpdateFeedItemIdIn === undefined) ? "" : type_UpdateFeedItemIdIn;
initialsListIn = (initialsListIn === undefined) ? new UBTConnectLibraryModel.TextGenderIdentifierRecordList() : initialsListIn;
return controller.executeActionInsideJSNode(UBTConnectLibraryController.default.get_FontColor_Tag_UpdateItem$Action.bind(controller, type_UpdateFeedItemIdIn, initialsListIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
FontColor: actionResults.fontColorOut
};
});
};
});

define("UBTConnectLibrary.controller$Get_UBTColors", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.model$UBT_ColorList", "UBTConnectLibrary.model$UBT_ColorRec"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryClientVariables) {
var OS = OutSystems.Internal;
UBTConnectLibraryController.default.get_UBTColors$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.Get_UBTColors$outVars"))());
varBag.callContext = callContext;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:BgDBY02YI0eqvrntApVa2A:/ClientActionFlows.BgDBY02YI0eqvrntApVa2A:2g9ie6cWnGyd0Nm_Jz4nSA", "UBTConnectLibrary", "Get_UBTColors", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:N_nG0ughgEa4R0RPjYGszg", callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:WryiSaXymUee4X2DBPl8Ug", callContext.id);
// Execute Action: ListAppend_Primary
OS.SystemActions.listAppend(outVars.value.out_Colors_ListOut, function () {
var rec = new UBTConnectLibraryModel.UBT_ColorRec();
rec.colorAttr = UBTConnectLibraryModel.staticEntities.uBT_Color.primary;
rec.orderAttr = 1;
rec.isActiveAttr = true;
rec.isBrandAttr = true;
rec.isExtendedAttr = false;
rec.isNeutralAttr = false;
rec.isSemanticAttr = false;
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:WP13RcBD202ZpeoVb7k2MA", callContext.id);
// Execute Action: ListAppend_Secondary
OS.SystemActions.listAppend(outVars.value.out_Colors_ListOut, function () {
var rec = new UBTConnectLibraryModel.UBT_ColorRec();
rec.colorAttr = UBTConnectLibraryModel.staticEntities.uBT_Color.secondary;
rec.orderAttr = 2;
rec.isActiveAttr = true;
rec.isBrandAttr = true;
rec.isExtendedAttr = false;
rec.isNeutralAttr = false;
rec.isSemanticAttr = false;
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:E1Bptwm79kmHBhV2c3JW2g", callContext.id);
// Execute Action: ListAppend_Tertiary
OS.SystemActions.listAppend(outVars.value.out_Colors_ListOut, function () {
var rec = new UBTConnectLibraryModel.UBT_ColorRec();
rec.colorAttr = UBTConnectLibraryModel.staticEntities.uBT_Color.tertiary;
rec.orderAttr = 3;
rec.isActiveAttr = true;
rec.isBrandAttr = true;
rec.isExtendedAttr = false;
rec.isNeutralAttr = false;
rec.isSemanticAttr = false;
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:mYzrWlJCq0y2VbI6blJC_g", callContext.id);
// Execute Action: ListAppend_Cyan
OS.SystemActions.listAppend(outVars.value.out_Colors_ListOut, function () {
var rec = new UBTConnectLibraryModel.UBT_ColorRec();
rec.colorAttr = UBTConnectLibraryModel.staticEntities.uBT_Color.cyan;
rec.orderAttr = 4;
rec.isActiveAttr = true;
rec.isBrandAttr = false;
rec.isExtendedAttr = true;
rec.isNeutralAttr = false;
rec.isSemanticAttr = false;
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:bHAvU+xB1Eqegbm7Uu6teA", callContext.id);
// Execute Action: ListAppend_Purple
OS.SystemActions.listAppend(outVars.value.out_Colors_ListOut, function () {
var rec = new UBTConnectLibraryModel.UBT_ColorRec();
rec.colorAttr = UBTConnectLibraryModel.staticEntities.uBT_Color.purple;
rec.orderAttr = 5;
rec.isActiveAttr = true;
rec.isBrandAttr = false;
rec.isExtendedAttr = true;
rec.isNeutralAttr = false;
rec.isSemanticAttr = false;
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:s+dY2ixAyEWTgZTQZ6TPYA", callContext.id);
// Execute Action: ListAppend_Peach
OS.SystemActions.listAppend(outVars.value.out_Colors_ListOut, function () {
var rec = new UBTConnectLibraryModel.UBT_ColorRec();
rec.colorAttr = UBTConnectLibraryModel.staticEntities.uBT_Color.peach;
rec.orderAttr = 6;
rec.isActiveAttr = true;
rec.isBrandAttr = false;
rec.isExtendedAttr = true;
rec.isNeutralAttr = false;
rec.isSemanticAttr = false;
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:vaeR0k8KCkyCg5tNzJ1gSQ", callContext.id);
// Execute Action: ListAppend_Blue
OS.SystemActions.listAppend(outVars.value.out_Colors_ListOut, function () {
var rec = new UBTConnectLibraryModel.UBT_ColorRec();
rec.colorAttr = UBTConnectLibraryModel.staticEntities.uBT_Color.blue;
rec.orderAttr = 7;
rec.isActiveAttr = true;
rec.isBrandAttr = false;
rec.isExtendedAttr = true;
rec.isNeutralAttr = false;
rec.isSemanticAttr = false;
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:VOgZjsPFdEC4UP_z7pWqpA", callContext.id);
// Execute Action: ListAppend_Green
OS.SystemActions.listAppend(outVars.value.out_Colors_ListOut, function () {
var rec = new UBTConnectLibraryModel.UBT_ColorRec();
rec.colorAttr = UBTConnectLibraryModel.staticEntities.uBT_Color.green;
rec.orderAttr = 8;
rec.isActiveAttr = true;
rec.isBrandAttr = false;
rec.isExtendedAttr = true;
rec.isNeutralAttr = false;
rec.isSemanticAttr = false;
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:o6F8v9IGKUaOjEgl+cQj3Q", callContext.id);
// Execute Action: ListAppend_Yellow
OS.SystemActions.listAppend(outVars.value.out_Colors_ListOut, function () {
var rec = new UBTConnectLibraryModel.UBT_ColorRec();
rec.colorAttr = UBTConnectLibraryModel.staticEntities.uBT_Color.yellow;
rec.orderAttr = 9;
rec.isActiveAttr = true;
rec.isBrandAttr = false;
rec.isExtendedAttr = true;
rec.isNeutralAttr = false;
rec.isSemanticAttr = false;
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:qIOeZa+E+0inxWL7u0d3FQ", callContext.id);
// Execute Action: ListAppend_Red
OS.SystemActions.listAppend(outVars.value.out_Colors_ListOut, function () {
var rec = new UBTConnectLibraryModel.UBT_ColorRec();
rec.colorAttr = UBTConnectLibraryModel.staticEntities.uBT_Color.red;
rec.orderAttr = 10;
rec.isActiveAttr = true;
rec.isBrandAttr = false;
rec.isExtendedAttr = true;
rec.isNeutralAttr = false;
rec.isSemanticAttr = false;
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:GgJjRpJaoU2al_Ace1J91A", callContext.id);
// Execute Action: ListAppend_Transparent
OS.SystemActions.listAppend(outVars.value.out_Colors_ListOut, function () {
var rec = new UBTConnectLibraryModel.UBT_ColorRec();
rec.colorAttr = UBTConnectLibraryModel.staticEntities.uBT_Color.transparent;
rec.orderAttr = 11;
rec.isActiveAttr = true;
rec.isBrandAttr = false;
rec.isExtendedAttr = false;
rec.isNeutralAttr = true;
rec.isSemanticAttr = false;
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:rFwlJbeDsUiumMAgj1PrdA", callContext.id);
// Execute Action: ListAppend_Neutral0
OS.SystemActions.listAppend(outVars.value.out_Colors_ListOut, function () {
var rec = new UBTConnectLibraryModel.UBT_ColorRec();
rec.colorAttr = UBTConnectLibraryModel.staticEntities.uBT_Color.neutral0;
rec.orderAttr = 12;
rec.isActiveAttr = true;
rec.isBrandAttr = false;
rec.isExtendedAttr = false;
rec.isNeutralAttr = true;
rec.isSemanticAttr = false;
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:UBknd6oy5UyDk8e4pbJMnA", callContext.id);
// Execute Action: ListAppend_Neutral1
OS.SystemActions.listAppend(outVars.value.out_Colors_ListOut, function () {
var rec = new UBTConnectLibraryModel.UBT_ColorRec();
rec.colorAttr = UBTConnectLibraryModel.staticEntities.uBT_Color.neutral1;
rec.orderAttr = 13;
rec.isActiveAttr = true;
rec.isBrandAttr = false;
rec.isExtendedAttr = false;
rec.isNeutralAttr = true;
rec.isSemanticAttr = false;
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:3bw5BH0AzUi0lHMxre0B6Q", callContext.id);
// Execute Action: ListAppend_Neutral2
OS.SystemActions.listAppend(outVars.value.out_Colors_ListOut, function () {
var rec = new UBTConnectLibraryModel.UBT_ColorRec();
rec.colorAttr = UBTConnectLibraryModel.staticEntities.uBT_Color.neutral2;
rec.orderAttr = 14;
rec.isActiveAttr = true;
rec.isBrandAttr = false;
rec.isExtendedAttr = false;
rec.isNeutralAttr = true;
rec.isSemanticAttr = false;
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:VU8N9__Gs0Sux5T23HOPsw", callContext.id);
// Execute Action: ListAppend_Neutral3
OS.SystemActions.listAppend(outVars.value.out_Colors_ListOut, function () {
var rec = new UBTConnectLibraryModel.UBT_ColorRec();
rec.colorAttr = UBTConnectLibraryModel.staticEntities.uBT_Color.neutral3;
rec.orderAttr = 15;
rec.isActiveAttr = true;
rec.isBrandAttr = false;
rec.isExtendedAttr = false;
rec.isNeutralAttr = true;
rec.isSemanticAttr = false;
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:lf6Xg5c4ikeaxGQ8Co0VYw", callContext.id);
// Execute Action: ListAppend_Neutral4
OS.SystemActions.listAppend(outVars.value.out_Colors_ListOut, function () {
var rec = new UBTConnectLibraryModel.UBT_ColorRec();
rec.colorAttr = UBTConnectLibraryModel.staticEntities.uBT_Color.neutral4;
rec.orderAttr = 16;
rec.isActiveAttr = true;
rec.isBrandAttr = false;
rec.isExtendedAttr = false;
rec.isNeutralAttr = true;
rec.isSemanticAttr = false;
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:s15wPF7flUSlT1R7W8OX1w", callContext.id);
// Execute Action: ListAppend_Neutral5
OS.SystemActions.listAppend(outVars.value.out_Colors_ListOut, function () {
var rec = new UBTConnectLibraryModel.UBT_ColorRec();
rec.colorAttr = UBTConnectLibraryModel.staticEntities.uBT_Color.neutral5;
rec.orderAttr = 17;
rec.isActiveAttr = true;
rec.isBrandAttr = false;
rec.isExtendedAttr = false;
rec.isNeutralAttr = true;
rec.isSemanticAttr = false;
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:s75AY5yblUeCXUTaWVq8rA", callContext.id);
// Execute Action: ListAppend_Neutral6
OS.SystemActions.listAppend(outVars.value.out_Colors_ListOut, function () {
var rec = new UBTConnectLibraryModel.UBT_ColorRec();
rec.colorAttr = UBTConnectLibraryModel.staticEntities.uBT_Color.neutral6;
rec.orderAttr = 18;
rec.isActiveAttr = true;
rec.isBrandAttr = false;
rec.isExtendedAttr = false;
rec.isNeutralAttr = true;
rec.isSemanticAttr = false;
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:Oy8QhE0Trk2Oy5Qhpt7OxA", callContext.id);
// Execute Action: ListAppend_Neutral7
OS.SystemActions.listAppend(outVars.value.out_Colors_ListOut, function () {
var rec = new UBTConnectLibraryModel.UBT_ColorRec();
rec.colorAttr = UBTConnectLibraryModel.staticEntities.uBT_Color.neutral7;
rec.orderAttr = 19;
rec.isActiveAttr = true;
rec.isBrandAttr = false;
rec.isExtendedAttr = false;
rec.isNeutralAttr = true;
rec.isSemanticAttr = false;
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:X4N5vYQmqEiTP5jQuHhYSQ", callContext.id);
// Execute Action: ListAppend_Neutral8
OS.SystemActions.listAppend(outVars.value.out_Colors_ListOut, function () {
var rec = new UBTConnectLibraryModel.UBT_ColorRec();
rec.colorAttr = UBTConnectLibraryModel.staticEntities.uBT_Color.neutral8;
rec.orderAttr = 20;
rec.isActiveAttr = true;
rec.isBrandAttr = false;
rec.isExtendedAttr = false;
rec.isNeutralAttr = true;
rec.isSemanticAttr = false;
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:smq2zcT3E0e7hGH9fSG1aA", callContext.id);
// Execute Action: ListAppend_Neutral9
OS.SystemActions.listAppend(outVars.value.out_Colors_ListOut, function () {
var rec = new UBTConnectLibraryModel.UBT_ColorRec();
rec.colorAttr = UBTConnectLibraryModel.staticEntities.uBT_Color.neutral9;
rec.orderAttr = 21;
rec.isActiveAttr = true;
rec.isBrandAttr = false;
rec.isExtendedAttr = false;
rec.isNeutralAttr = true;
rec.isSemanticAttr = false;
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:rOr48_BuGEyG+dx0q2Mu2Q", callContext.id);
// Execute Action: ListAppend_Neutral10
OS.SystemActions.listAppend(outVars.value.out_Colors_ListOut, function () {
var rec = new UBTConnectLibraryModel.UBT_ColorRec();
rec.colorAttr = UBTConnectLibraryModel.staticEntities.uBT_Color.neutral10;
rec.orderAttr = 22;
rec.isActiveAttr = true;
rec.isBrandAttr = false;
rec.isExtendedAttr = false;
rec.isNeutralAttr = true;
rec.isSemanticAttr = false;
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:UoSp4eptakuLv0qHcsHFew", callContext.id);
// Execute Action: ListAppend_Info
OS.SystemActions.listAppend(outVars.value.out_Colors_ListOut, function () {
var rec = new UBTConnectLibraryModel.UBT_ColorRec();
rec.colorAttr = UBTConnectLibraryModel.staticEntities.uBT_Color.info;
rec.orderAttr = 19;
rec.isActiveAttr = true;
rec.isBrandAttr = false;
rec.isExtendedAttr = false;
rec.isNeutralAttr = false;
rec.isSemanticAttr = true;
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:8RAk7q1AVUSZTofwZQ2LPA", callContext.id);
// Execute Action: ListAppend_Warning
OS.SystemActions.listAppend(outVars.value.out_Colors_ListOut, function () {
var rec = new UBTConnectLibraryModel.UBT_ColorRec();
rec.colorAttr = UBTConnectLibraryModel.staticEntities.uBT_Color.warning;
rec.orderAttr = 20;
rec.isActiveAttr = true;
rec.isBrandAttr = false;
rec.isExtendedAttr = false;
rec.isNeutralAttr = false;
rec.isSemanticAttr = true;
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:ae4eYhd9Z0awMHyU7uGeKQ", callContext.id);
// Execute Action: ListAppend_Success
OS.SystemActions.listAppend(outVars.value.out_Colors_ListOut, function () {
var rec = new UBTConnectLibraryModel.UBT_ColorRec();
rec.colorAttr = UBTConnectLibraryModel.staticEntities.uBT_Color.success;
rec.orderAttr = 21;
rec.isActiveAttr = true;
rec.isBrandAttr = false;
rec.isExtendedAttr = false;
rec.isNeutralAttr = false;
rec.isSemanticAttr = true;
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:kzVPKuJfP0Kxm7vq32KWtw", callContext.id);
// Execute Action: ListAppend_Error
OS.SystemActions.listAppend(outVars.value.out_Colors_ListOut, function () {
var rec = new UBTConnectLibraryModel.UBT_ColorRec();
rec.colorAttr = UBTConnectLibraryModel.staticEntities.uBT_Color.error;
rec.orderAttr = 22;
rec.isActiveAttr = true;
rec.isBrandAttr = false;
rec.isExtendedAttr = false;
rec.isNeutralAttr = false;
rec.isSemanticAttr = true;
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:1kWQnZveY0KrGGUAB1VFvA", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:BgDBY02YI0eqvrntApVa2A", callContext.id);
}

};
var controller = UBTConnectLibraryController.default;
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.Get_UBTColors$outVars", [{
name: "Out_Colors_List",
attrName: "out_Colors_ListOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new UBTConnectLibraryModel.UBT_ColorList();
},
complexType: UBTConnectLibraryModel.UBT_ColorList
}]);
UBTConnectLibraryController.default.clientActionProxies.get_UBTColors$Action = function () {
return controller.executeActionInsideJSNode(UBTConnectLibraryController.default.get_UBTColors$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Out_Colors_List: actionResults.out_Colors_ListOut
};
});
};
});

define("UBTConnectLibrary.controller$Get_UBTColors_Unused", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.model$UBT_ColorRec", "UBTConnectLibrary.model$UBT_ColorList"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryClientVariables) {
var OS = OutSystems.Internal;
UBTConnectLibraryController.default.get_UBTColors_Unused$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.Get_UBTColors_Unused$outVars"))());
varBag.callContext = callContext;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:ZzDy1Ha2yUCw8g4OG_ZhIA:/ClientActionFlows.ZzDy1Ha2yUCw8g4OG_ZhIA:YL+VO39JMHyFjbDSl7WOsQ", "UBTConnectLibrary", "Get_UBTColors_Unused", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:d2VzPVE7Ak6Fvu_4KN9s7Q", callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:s3cg0kSNr0WiyBDlf77Kqg", callContext.id);
// Execute Action: ListAppend_Orange
OS.SystemActions.listAppend(outVars.value.out_Colors_ListOut, function () {
var rec = new UBTConnectLibraryModel.UBT_ColorRec();
rec.colorAttr = UBTConnectLibraryModel.staticEntities.uBT_Color.orange;
rec.orderAttr = 1;
rec.isActiveAttr = false;
rec.isBrandAttr = false;
rec.isExtendedAttr = false;
rec.isNeutralAttr = false;
rec.isSemanticAttr = false;
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:uRK5e35_Z0uyM8bKAGX6og", callContext.id);
// Execute Action: ListAppend_Lime
OS.SystemActions.listAppend(outVars.value.out_Colors_ListOut, function () {
var rec = new UBTConnectLibraryModel.UBT_ColorRec();
rec.colorAttr = UBTConnectLibraryModel.staticEntities.uBT_Color.lime;
rec.orderAttr = 2;
rec.isActiveAttr = false;
rec.isBrandAttr = false;
rec.isExtendedAttr = false;
rec.isNeutralAttr = false;
rec.isSemanticAttr = false;
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:ALDLaIjUn0iJIyAB1jgjtw", callContext.id);
// Execute Action: ListAppend_Teal
OS.SystemActions.listAppend(outVars.value.out_Colors_ListOut, function () {
var rec = new UBTConnectLibraryModel.UBT_ColorRec();
rec.colorAttr = UBTConnectLibraryModel.staticEntities.uBT_Color.teal;
rec.orderAttr = 3;
rec.isActiveAttr = false;
rec.isBrandAttr = false;
rec.isExtendedAttr = false;
rec.isNeutralAttr = false;
rec.isSemanticAttr = false;
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:Q2rl5A2hRE6DKGJX2KgYzQ", callContext.id);
// Execute Action: ListAppend_Indigo
OS.SystemActions.listAppend(outVars.value.out_Colors_ListOut, function () {
var rec = new UBTConnectLibraryModel.UBT_ColorRec();
rec.colorAttr = UBTConnectLibraryModel.staticEntities.uBT_Color.indigo;
rec.orderAttr = 4;
rec.isActiveAttr = false;
rec.isBrandAttr = false;
rec.isExtendedAttr = false;
rec.isNeutralAttr = false;
rec.isSemanticAttr = false;
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:3ntGszuFq0mxRkw4kdIEmQ", callContext.id);
// Execute Action: ListAppend_Violet
OS.SystemActions.listAppend(outVars.value.out_Colors_ListOut, function () {
var rec = new UBTConnectLibraryModel.UBT_ColorRec();
rec.colorAttr = UBTConnectLibraryModel.staticEntities.uBT_Color.violet;
rec.orderAttr = 5;
rec.isActiveAttr = false;
rec.isBrandAttr = false;
rec.isExtendedAttr = false;
rec.isNeutralAttr = false;
rec.isSemanticAttr = false;
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:dfZj3DAXfU6v08VMsSTvgA", callContext.id);
// Execute Action: ListAppend_Grape
OS.SystemActions.listAppend(outVars.value.out_Colors_ListOut, function () {
var rec = new UBTConnectLibraryModel.UBT_ColorRec();
rec.colorAttr = UBTConnectLibraryModel.staticEntities.uBT_Color.grape;
rec.orderAttr = 6;
rec.isActiveAttr = false;
rec.isBrandAttr = false;
rec.isExtendedAttr = false;
rec.isNeutralAttr = false;
rec.isSemanticAttr = false;
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:ookpoUHGLUeB6yIk9wp6PA", callContext.id);
// Execute Action: ListAppend_Pink
OS.SystemActions.listAppend(outVars.value.out_Colors_ListOut, function () {
var rec = new UBTConnectLibraryModel.UBT_ColorRec();
rec.colorAttr = UBTConnectLibraryModel.staticEntities.uBT_Color.pink;
rec.orderAttr = 7;
rec.isActiveAttr = false;
rec.isBrandAttr = false;
rec.isExtendedAttr = false;
rec.isNeutralAttr = false;
rec.isSemanticAttr = false;
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:Y3W0Z2MDDkWzf3TcaBY6jQ", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:ZzDy1Ha2yUCw8g4OG_ZhIA", callContext.id);
}

};
var controller = UBTConnectLibraryController.default;
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.Get_UBTColors_Unused$outVars", [{
name: "Out_Colors_List",
attrName: "out_Colors_ListOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new UBTConnectLibraryModel.UBT_ColorList();
},
complexType: UBTConnectLibraryModel.UBT_ColorList
}]);
UBTConnectLibraryController.default.clientActionProxies.get_UBTColors_Unused$Action = function () {
return controller.executeActionInsideJSNode(UBTConnectLibraryController.default.get_UBTColors_Unused$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Out_Colors_List: actionResults.out_Colors_ListOut
};
});
};
});

define("UBTConnectLibrary.controller$Get_UBTColorsByCategory", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.model$UBT_ColorList", "UBTConnectLibrary.controller$Get_UBTColors"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryClientVariables) {
var OS = OutSystems.Internal;
UBTConnectLibraryController.default.get_UBTColorsByCategory$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var listFilter_SemanticVar = new OS.DataTypes.VariableHolder();
var listFilter_BrandVar = new OS.DataTypes.VariableHolder();
var listFilter_NeutralVar = new OS.DataTypes.VariableHolder();
var get_UBTColorsVar = new OS.DataTypes.VariableHolder();
var listFilter_ExendedVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.Get_UBTColorsByCategory$outVars"))());
varBag.callContext = callContext;
varBag.listFilter_SemanticVar = listFilter_SemanticVar;
varBag.listFilter_BrandVar = listFilter_BrandVar;
varBag.listFilter_NeutralVar = listFilter_NeutralVar;
varBag.get_UBTColorsVar = get_UBTColorsVar;
varBag.listFilter_ExendedVar = listFilter_ExendedVar;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:Qt_jedCh5Umc2SM0sPo6zg:/ClientActionFlows.Qt_jedCh5Umc2SM0sPo6zg:MJPz4N_eXBlQuppBSBFDtw", "UBTConnectLibrary", "Get_UBTColorsByCategory", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:8C5RNt3RQ0SM7lFUF+Ew5w", callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:3M2xgAr5Xk6ciE9eZdXDJA", callContext.id);
// Execute Action: Get_UBTColors
get_UBTColorsVar.value = UBTConnectLibraryController.default.get_UBTColors$Action(callContext);

OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:st4nXv6xBEKVNuWms9Vwwg", callContext.id);
// Execute Action: ListFilter_Brand
listFilter_BrandVar.value = OS.SystemActions.listFilter(get_UBTColorsVar.value.out_Colors_ListOut, function (p) {
return p.isBrandAttr;
}, callContext);

OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:ZR7FjE1wM066qcJy_GOoCQ", callContext.id);
// Out_BrandColors_List = ListFilter_Brand.FilteredList
outVars.value.out_BrandColors_ListOut = listFilter_BrandVar.value.filteredListOut;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:Pxij1hZkD0mJ8FZ98UCT6A", callContext.id);
// Execute Action: ListFilter_Exended
listFilter_ExendedVar.value = OS.SystemActions.listFilter(get_UBTColorsVar.value.out_Colors_ListOut, function (p) {
return p.isExtendedAttr;
}, callContext);

OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:bWvcDBFBTUissp48TG5QlQ", callContext.id);
// Out_ExtendedColors_List = ListFilter_Exended.FilteredList
outVars.value.out_ExtendedColors_ListOut = listFilter_ExendedVar.value.filteredListOut;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:wvBydONK20yf9e5Q9aNdSA", callContext.id);
// Execute Action: ListFilter_Neutral
listFilter_NeutralVar.value = OS.SystemActions.listFilter(get_UBTColorsVar.value.out_Colors_ListOut, function (p) {
return p.isNeutralAttr;
}, callContext);

OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:bLffoDnz9kWhAfaFyogq0g", callContext.id);
// Out_NeutralColors_List = ListFilter_Neutral.FilteredList
outVars.value.out_NeutralColors_ListOut = listFilter_NeutralVar.value.filteredListOut;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:rTwmUw3BGUKFG3zN4tmDSA", callContext.id);
// Execute Action: ListFilter_Semantic
listFilter_SemanticVar.value = OS.SystemActions.listFilter(get_UBTColorsVar.value.out_Colors_ListOut, function (p) {
return p.isSemanticAttr;
}, callContext);

OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:HGR9mb1IFkK2vVmXqDZwtQ", callContext.id);
// Out_SemanticColors_List = ListFilter_Semantic.FilteredList
outVars.value.out_SemanticColors_ListOut = listFilter_SemanticVar.value.filteredListOut;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:bMd9PFLP_kWBHar3LlCMcg", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:Qt_jedCh5Umc2SM0sPo6zg", callContext.id);
}

};
var controller = UBTConnectLibraryController.default;
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.Get_UBTColorsByCategory$outVars", [{
name: "Out_BrandColors_List",
attrName: "out_BrandColors_ListOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new UBTConnectLibraryModel.UBT_ColorList();
},
complexType: UBTConnectLibraryModel.UBT_ColorList
}, {
name: "Out_ExtendedColors_List",
attrName: "out_ExtendedColors_ListOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new UBTConnectLibraryModel.UBT_ColorList();
},
complexType: UBTConnectLibraryModel.UBT_ColorList
}, {
name: "Out_NeutralColors_List",
attrName: "out_NeutralColors_ListOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new UBTConnectLibraryModel.UBT_ColorList();
},
complexType: UBTConnectLibraryModel.UBT_ColorList
}, {
name: "Out_SemanticColors_List",
attrName: "out_SemanticColors_ListOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new UBTConnectLibraryModel.UBT_ColorList();
},
complexType: UBTConnectLibraryModel.UBT_ColorList
}]);
UBTConnectLibraryController.default.clientActionProxies.get_UBTColorsByCategory$Action = function () {
return controller.executeActionInsideJSNode(UBTConnectLibraryController.default.get_UBTColorsByCategory$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Out_BrandColors_List: actionResults.out_BrandColors_ListOut,
Out_ExtendedColors_List: actionResults.out_ExtendedColors_ListOut,
Out_NeutralColors_List: actionResults.out_NeutralColors_ListOut,
Out_SemanticColors_List: actionResults.out_SemanticColors_ListOut
};
});
};
});

define("UBTConnectLibrary.controller$Get_UBTColumnsBehaviours", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.model$UBT_ColumnBehaviourList", "UBTConnectLibrary.model$UBT_ColumnBehaviourRec"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryClientVariables) {
var OS = OutSystems.Internal;
UBTConnectLibraryController.default.get_UBTColumnsBehaviours$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.Get_UBTColumnsBehaviours$outVars"))());
varBag.callContext = callContext;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:7qj7+xO7Tk2jdVUHR4kkAw:/ClientActionFlows.7qj7+xO7Tk2jdVUHR4kkAw:8wcZb46Nlr_Wfhx2Y+cCPg", "UBTConnectLibrary", "Get_UBTColumnsBehaviours", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:RAG4ppyx+UShzzNxzvaMEg", callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:RntLpfP47UC2JoD65R5OHg", callContext.id);
// Execute Action: ListAppend
OS.SystemActions.listAppend(outVars.value.listOut, function () {
var rec = new UBTConnectLibraryModel.UBT_ColumnBehaviourRec();
rec.idAttr = UBTConnectLibraryModel.staticEntities.uBT_ColumnBehaviour.reduceFirst;
rec.orderAttr = 0;
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:Jb1UDuUto0+60yobnP27MQ", callContext.id);
// Execute Action: ListAppend2
OS.SystemActions.listAppend(outVars.value.listOut, function () {
var rec = new UBTConnectLibraryModel.UBT_ColumnBehaviourRec();
rec.idAttr = UBTConnectLibraryModel.staticEntities.uBT_ColumnBehaviour.reduceMiddle;
rec.orderAttr = 0;
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:jMyOeA7w2kO8mT96914T5w", callContext.id);
// Execute Action: ListAppend3
OS.SystemActions.listAppend(outVars.value.listOut, function () {
var rec = new UBTConnectLibraryModel.UBT_ColumnBehaviourRec();
rec.idAttr = UBTConnectLibraryModel.staticEntities.uBT_ColumnBehaviour.reduceLast;
rec.orderAttr = 0;
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:BKEoVa8XJ0GlboJyWMZj8g", callContext.id);
// Execute Action: ListAppend4
OS.SystemActions.listAppend(outVars.value.listOut, function () {
var rec = new UBTConnectLibraryModel.UBT_ColumnBehaviourRec();
rec.idAttr = UBTConnectLibraryModel.staticEntities.uBT_ColumnBehaviour.expandMiddle;
rec.orderAttr = 0;
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:Mt0dFQDSkUKeaJs7N4PFKQ", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:7qj7+xO7Tk2jdVUHR4kkAw", callContext.id);
}

};
var controller = UBTConnectLibraryController.default;
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.Get_UBTColumnsBehaviours$outVars", [{
name: "List",
attrName: "listOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new UBTConnectLibraryModel.UBT_ColumnBehaviourList();
},
complexType: UBTConnectLibraryModel.UBT_ColumnBehaviourList
}]);
UBTConnectLibraryController.default.clientActionProxies.get_UBTColumnsBehaviours$Action = function () {
return controller.executeActionInsideJSNode(UBTConnectLibraryController.default.get_UBTColumnsBehaviours$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
List: actionResults.listOut
};
});
};
});

define("UBTConnectLibrary.controller$Get_UBTShadows", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.model$UBT_ShadowRec", "UBTConnectLibrary.model$UBT_ShadowList"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryClientVariables) {
var OS = OutSystems.Internal;
UBTConnectLibraryController.default.get_UBTShadows$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.Get_UBTShadows$outVars"))());
varBag.callContext = callContext;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:Nh2aJknmm0O+b83DVT_DoQ:/ClientActionFlows.Nh2aJknmm0O+b83DVT_DoQ:PukbGk9DjuEPDjksu9hDyA", "UBTConnectLibrary", "Get_UBTShadows", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:bpOa9onJKUOo8qgs7e1fgQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:0xooCSZE7k6cchDg83_rqQ", callContext.id);
// Execute Action: ListAppend
OS.SystemActions.listAppend(outVars.value.listOut, function () {
var rec = new UBTConnectLibraryModel.UBT_ShadowRec();
rec.idAttr = UBTConnectLibraryModel.staticEntities.uBT_Shadow.none;
rec.orderAttr = 0;
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:ZP5SDELcBUOvEx8Zc7vYOA", callContext.id);
// Execute Action: ListAppend2
OS.SystemActions.listAppend(outVars.value.listOut, function () {
var rec = new UBTConnectLibraryModel.UBT_ShadowRec();
rec.idAttr = UBTConnectLibraryModel.staticEntities.uBT_Shadow.extraSmall;
rec.orderAttr = 0;
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:dwNeEqSnJUSGZipQqOVjkA", callContext.id);
// Execute Action: ListAppend3
OS.SystemActions.listAppend(outVars.value.listOut, function () {
var rec = new UBTConnectLibraryModel.UBT_ShadowRec();
rec.idAttr = UBTConnectLibraryModel.staticEntities.uBT_Shadow.small;
rec.orderAttr = 0;
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:kY3Kc4ssU0STCQwtjC_3LA", callContext.id);
// Execute Action: ListAppend4
OS.SystemActions.listAppend(outVars.value.listOut, function () {
var rec = new UBTConnectLibraryModel.UBT_ShadowRec();
rec.idAttr = UBTConnectLibraryModel.staticEntities.uBT_Shadow.medium;
rec.orderAttr = 0;
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:kdVy7a1F20C5_qs7Hp35bA", callContext.id);
// Execute Action: ListAppend7
OS.SystemActions.listAppend(outVars.value.listOut, function () {
var rec = new UBTConnectLibraryModel.UBT_ShadowRec();
rec.idAttr = UBTConnectLibraryModel.staticEntities.uBT_Shadow.large;
rec.orderAttr = 0;
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:4J02kOsOnUWtYi2Fy7346A", callContext.id);
// Execute Action: ListAppend5
OS.SystemActions.listAppend(outVars.value.listOut, function () {
var rec = new UBTConnectLibraryModel.UBT_ShadowRec();
rec.idAttr = UBTConnectLibraryModel.staticEntities.uBT_Shadow.extraLarge;
rec.orderAttr = 0;
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:P_89MTynzUSyvj9ey32eUQ", callContext.id);
// Execute Action: ListAppend6
OS.SystemActions.listAppend(outVars.value.listOut, function () {
var rec = new UBTConnectLibraryModel.UBT_ShadowRec();
rec.idAttr = UBTConnectLibraryModel.staticEntities.uBT_Shadow.s2;
rec.orderAttr = 0;
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:Xtkij4JPNUiiXhqKC9DROQ", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:Nh2aJknmm0O+b83DVT_DoQ", callContext.id);
}

};
var controller = UBTConnectLibraryController.default;
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.Get_UBTShadows$outVars", [{
name: "List",
attrName: "listOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new UBTConnectLibraryModel.UBT_ShadowList();
},
complexType: UBTConnectLibraryModel.UBT_ShadowList
}]);
UBTConnectLibraryController.default.clientActionProxies.get_UBTShadows$Action = function () {
return controller.executeActionInsideJSNode(UBTConnectLibraryController.default.get_UBTShadows$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
List: actionResults.listOut
};
});
};
});

define("UBTConnectLibrary.controller$Get_UBTShapes", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.model$UBT_ShapeRec", "UBTConnectLibrary.model$UBT_ShapeList"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryClientVariables) {
var OS = OutSystems.Internal;
UBTConnectLibraryController.default.get_UBTShapes$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.Get_UBTShapes$outVars"))());
varBag.callContext = callContext;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:uj1qo+CvpkOP8SonyjpXHw:/ClientActionFlows.uj1qo+CvpkOP8SonyjpXHw:PcVwPEXSBywv9XC5d+zYUQ", "UBTConnectLibrary", "Get_UBTShapes", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:sg4nHk9SQUSQqoFuw5o2dg", callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:jfTbgUdftkG7Qk_3_sYQ_w", callContext.id);
// Execute Action: ListAppend
OS.SystemActions.listAppend(outVars.value.listOut, function () {
var rec = new UBTConnectLibraryModel.UBT_ShapeRec();
rec.idAttr = UBTConnectLibraryModel.staticEntities.uBT_Shape.none;
rec.orderAttr = 0;
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:XD9nz8Bnvk2ObSJBVwoRKg", callContext.id);
// Execute Action: ListAppend2
OS.SystemActions.listAppend(outVars.value.listOut, function () {
var rec = new UBTConnectLibraryModel.UBT_ShapeRec();
rec.idAttr = UBTConnectLibraryModel.staticEntities.uBT_Shape.soft;
rec.orderAttr = 0;
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:ctj2AG8IX0+ACahpuNHDKw", callContext.id);
// Execute Action: ListAppend3
OS.SystemActions.listAppend(outVars.value.listOut, function () {
var rec = new UBTConnectLibraryModel.UBT_ShapeRec();
rec.idAttr = UBTConnectLibraryModel.staticEntities.uBT_Shape.rounded;
rec.orderAttr = 0;
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:hsYn_DBBmkuj_NNl+zjEYQ", callContext.id);
// Execute Action: ListAppend4
OS.SystemActions.listAppend(outVars.value.listOut, function () {
var rec = new UBTConnectLibraryModel.UBT_ShapeRec();
rec.idAttr = UBTConnectLibraryModel.staticEntities.uBT_Shape.circle;
rec.orderAttr = 0;
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:MQXFSSdwX0Cwmc9wmNIF7g", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:uj1qo+CvpkOP8SonyjpXHw", callContext.id);
}

};
var controller = UBTConnectLibraryController.default;
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.Get_UBTShapes$outVars", [{
name: "List",
attrName: "listOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new UBTConnectLibraryModel.UBT_ShapeList();
},
complexType: UBTConnectLibraryModel.UBT_ShapeList
}]);
UBTConnectLibraryController.default.clientActionProxies.get_UBTShapes$Action = function () {
return controller.executeActionInsideJSNode(UBTConnectLibraryController.default.get_UBTShapes$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
List: actionResults.listOut
};
});
};
});

define("UBTConnectLibrary.controller$Get_UBTSizes", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.model$UBT_SizeRec", "UBTConnectLibrary.model$UBT_SizeList"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryClientVariables) {
var OS = OutSystems.Internal;
UBTConnectLibraryController.default.get_UBTSizes$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.Get_UBTSizes$outVars"))());
varBag.callContext = callContext;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:rkSkUlkrJkuyYL6q6CK0Uw:/ClientActionFlows.rkSkUlkrJkuyYL6q6CK0Uw:i1HKmZTnPihho_KWHowRUw", "UBTConnectLibrary", "Get_UBTSizes", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:b01jQqC0qkybb4P57OATOQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:8VV3CDmSyUent4qkYRgtdA", callContext.id);
// Execute Action: ListAppend
OS.SystemActions.listAppend(outVars.value.listOut, function () {
var rec = new UBTConnectLibraryModel.UBT_SizeRec();
rec.idAttr = UBTConnectLibraryModel.staticEntities.uBT_Size.none;
rec.orderAttr = 0;
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:EznSobWz2Uq5zbNbyCIl5A", callContext.id);
// Execute Action: ListAppend2
OS.SystemActions.listAppend(outVars.value.listOut, function () {
var rec = new UBTConnectLibraryModel.UBT_SizeRec();
rec.idAttr = UBTConnectLibraryModel.staticEntities.uBT_Size.extraSmall;
rec.orderAttr = 0;
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:4wYiqv3MzkCwN7sNg+q1mA", callContext.id);
// Execute Action: ListAppend3
OS.SystemActions.listAppend(outVars.value.listOut, function () {
var rec = new UBTConnectLibraryModel.UBT_SizeRec();
rec.idAttr = UBTConnectLibraryModel.staticEntities.uBT_Size.small;
rec.orderAttr = 0;
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:5C+HgSC030if+26aXkhxcw", callContext.id);
// Execute Action: ListAppend4
OS.SystemActions.listAppend(outVars.value.listOut, function () {
var rec = new UBTConnectLibraryModel.UBT_SizeRec();
rec.idAttr = UBTConnectLibraryModel.staticEntities.uBT_Size.base;
rec.orderAttr = 0;
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:bpJk1BD_PUa5ExAHsqs3ww", callContext.id);
// Execute Action: ListAppend6
OS.SystemActions.listAppend(outVars.value.listOut, function () {
var rec = new UBTConnectLibraryModel.UBT_SizeRec();
rec.idAttr = UBTConnectLibraryModel.staticEntities.uBT_Size.medium;
rec.orderAttr = 0;
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:x6NoGIsK_k6Csy7+YaNf3w", callContext.id);
// Execute Action: ListAppend7
OS.SystemActions.listAppend(outVars.value.listOut, function () {
var rec = new UBTConnectLibraryModel.UBT_SizeRec();
rec.idAttr = UBTConnectLibraryModel.staticEntities.uBT_Size.large;
rec.orderAttr = 0;
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:K0+htcHJA0aKBR07cy83Vw", callContext.id);
// Execute Action: ListAppend8
OS.SystemActions.listAppend(outVars.value.listOut, function () {
var rec = new UBTConnectLibraryModel.UBT_SizeRec();
rec.idAttr = UBTConnectLibraryModel.staticEntities.uBT_Size.extraLarge;
rec.orderAttr = 0;
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:UF4u20jZR0KFf8v8Cq7OHQ", callContext.id);
// Execute Action: ListAppend9
OS.SystemActions.listAppend(outVars.value.listOut, function () {
var rec = new UBTConnectLibraryModel.UBT_SizeRec();
rec.idAttr = UBTConnectLibraryModel.staticEntities.uBT_Size.doubleExtraLarge;
rec.orderAttr = 0;
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:u+ARfti4kUCeSoHZIRt7vA", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:rkSkUlkrJkuyYL6q6CK0Uw", callContext.id);
}

};
var controller = UBTConnectLibraryController.default;
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.Get_UBTSizes$outVars", [{
name: "List",
attrName: "listOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new UBTConnectLibraryModel.UBT_SizeList();
},
complexType: UBTConnectLibraryModel.UBT_SizeList
}]);
UBTConnectLibraryController.default.clientActionProxies.get_UBTSizes$Action = function () {
return controller.executeActionInsideJSNode(UBTConnectLibraryController.default.get_UBTSizes$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
List: actionResults.listOut
};
});
};
});

define("UBTConnectLibrary.controller$Get_UBTSizesBorder", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.model$UBT_SizeRec", "UBTConnectLibrary.model$UBT_SizeList"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryClientVariables) {
var OS = OutSystems.Internal;
UBTConnectLibraryController.default.get_UBTSizesBorder$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.Get_UBTSizesBorder$outVars"))());
varBag.callContext = callContext;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:67hFP2CoBUyBPjNfXha1tA:/ClientActionFlows.67hFP2CoBUyBPjNfXha1tA:LDx9Cmjeb9n0jM4UsElN_w", "UBTConnectLibrary", "Get_UBTSizesBorder", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:2wK0s39nPEa2gerYZHHftA", callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:KksvJffcwkCmeFyWUY88dw", callContext.id);
// Execute Action: ListAppend
OS.SystemActions.listAppend(outVars.value.listOut, function () {
var rec = new UBTConnectLibraryModel.UBT_SizeRec();
rec.idAttr = UBTConnectLibraryModel.staticEntities.uBT_Size.none;
rec.orderAttr = 0;
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:V2F06K8seUSNTdUv3NZcvg", callContext.id);
// Execute Action: ListAppend3
OS.SystemActions.listAppend(outVars.value.listOut, function () {
var rec = new UBTConnectLibraryModel.UBT_SizeRec();
rec.idAttr = UBTConnectLibraryModel.staticEntities.uBT_Size.small;
rec.orderAttr = 0;
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:HEeRWMSX9UGjDzE7zdKaFw", callContext.id);
// Execute Action: ListAppend6
OS.SystemActions.listAppend(outVars.value.listOut, function () {
var rec = new UBTConnectLibraryModel.UBT_SizeRec();
rec.idAttr = UBTConnectLibraryModel.staticEntities.uBT_Size.medium;
rec.orderAttr = 0;
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:csVvvUe0B0C9qsW2etqmHQ", callContext.id);
// Execute Action: ListAppend7
OS.SystemActions.listAppend(outVars.value.listOut, function () {
var rec = new UBTConnectLibraryModel.UBT_SizeRec();
rec.idAttr = UBTConnectLibraryModel.staticEntities.uBT_Size.large;
rec.orderAttr = 0;
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:a74ZQhvr7UCFaNa5Rvu8YA", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:67hFP2CoBUyBPjNfXha1tA", callContext.id);
}

};
var controller = UBTConnectLibraryController.default;
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.Get_UBTSizesBorder$outVars", [{
name: "List",
attrName: "listOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new UBTConnectLibraryModel.UBT_SizeList();
},
complexType: UBTConnectLibraryModel.UBT_SizeList
}]);
UBTConnectLibraryController.default.clientActionProxies.get_UBTSizesBorder$Action = function () {
return controller.executeActionInsideJSNode(UBTConnectLibraryController.default.get_UBTSizesBorder$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
List: actionResults.listOut
};
});
};
});

define("UBTConnectLibrary.controller$Get_UBTVericalAlignments", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.model$UBT_VerticalAlignList", "UBTConnectLibrary.model$UBT_VerticalAlignRec"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryClientVariables) {
var OS = OutSystems.Internal;
UBTConnectLibraryController.default.get_UBTVericalAlignments$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.Get_UBTVericalAlignments$outVars"))());
varBag.callContext = callContext;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:xkSiWs1R9kaBu4SKuGYvsg:/ClientActionFlows.xkSiWs1R9kaBu4SKuGYvsg:DGEbbYKJ62wMfvb5j3MARQ", "UBTConnectLibrary", "Get_UBTVericalAlignments", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:MrFW4eXqzUC6IkpXzNGfLw", callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:VdRQYOmSXkC2mMr+gRiExw", callContext.id);
// Execute Action: ListAppend
OS.SystemActions.listAppend(outVars.value.listOut, function () {
var rec = new UBTConnectLibraryModel.UBT_VerticalAlignRec();
rec.idAttr = UBTConnectLibraryModel.staticEntities.uBT_VerticalAlign.top;
rec.orderAttr = 0;
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:6ivlmjswck+m9bgvr6XhsQ", callContext.id);
// Execute Action: ListAppend2
OS.SystemActions.listAppend(outVars.value.listOut, function () {
var rec = new UBTConnectLibraryModel.UBT_VerticalAlignRec();
rec.idAttr = UBTConnectLibraryModel.staticEntities.uBT_VerticalAlign.center;
rec.orderAttr = 0;
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:tMm4KKgczkahB3Z8RXhHlw", callContext.id);
// Execute Action: ListAppend3
OS.SystemActions.listAppend(outVars.value.listOut, function () {
var rec = new UBTConnectLibraryModel.UBT_VerticalAlignRec();
rec.idAttr = UBTConnectLibraryModel.staticEntities.uBT_VerticalAlign.bottom;
rec.orderAttr = 0;
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:LNOAcHGx+0WtfFtng6lXmw", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:xkSiWs1R9kaBu4SKuGYvsg", callContext.id);
}

};
var controller = UBTConnectLibraryController.default;
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.Get_UBTVericalAlignments$outVars", [{
name: "List",
attrName: "listOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new UBTConnectLibraryModel.UBT_VerticalAlignList();
},
complexType: UBTConnectLibraryModel.UBT_VerticalAlignList
}]);
UBTConnectLibraryController.default.clientActionProxies.get_UBTVericalAlignments$Action = function () {
return controller.executeActionInsideJSNode(UBTConnectLibraryController.default.get_UBTVericalAlignments$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
List: actionResults.listOut
};
});
};
});

define("UBTConnectLibrary.controller$GetAgeLabel", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.clientVariables"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryClientVariables) {
var OS = OutSystems.Internal;
UBTConnectLibraryController.default.getAgeLabel$Action = function (dateOfBirthIn, referenceDateIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.GetAgeLabel$vars"))());
vars.value.dateOfBirthInLocal = dateOfBirthIn;
vars.value.referenceDateInLocal = referenceDateIn;
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.GetAgeLabel$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:xatXqZjewUGx328lAv7MlQ:/ClientActionFlows.xatXqZjewUGx328lAv7MlQ:tPjnCz2YEuUCqXISn31gTw", "UBTConnectLibrary", "GetAgeLabel", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:Vwk68AkW9UijgDceP0DXew", callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:F5nqDdYrLkW8SS_oWuIKCg", callContext.id);
// AgeYears = Year - Year + If
vars.value.ageYearsVar = ((OS.BuiltinFunctions.year(vars.value.referenceDateInLocal) - OS.BuiltinFunctions.year(vars.value.dateOfBirthInLocal)) + ((OS.BuiltinFunctions.newDate(2000, OS.BuiltinFunctions.month(vars.value.dateOfBirthInLocal), OS.BuiltinFunctions.day(vars.value.dateOfBirthInLocal)).gt(OS.BuiltinFunctions.newDate(2000, OS.BuiltinFunctions.month(vars.value.referenceDateInLocal), OS.BuiltinFunctions.day(vars.value.referenceDateInLocal)))) ? (-1) : (0)));
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:h3lsJv5e6061iwdhBkwCGg", callContext.id) && (vars.value.ageYearsVar < 1))) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:KIJQGrRJGEWhhm9GNlNbvQ", callContext.id);
// AgeMonths = Year - Year * 12 + Month - Month - If
vars.value.ageMonthsVar = ((((OS.BuiltinFunctions.year(vars.value.referenceDateInLocal) - OS.BuiltinFunctions.year(vars.value.dateOfBirthInLocal)) * 12) + (OS.BuiltinFunctions.month(vars.value.referenceDateInLocal) - OS.BuiltinFunctions.month(vars.value.dateOfBirthInLocal))) - (((OS.BuiltinFunctions.day(vars.value.referenceDateInLocal) < OS.BuiltinFunctions.day(vars.value.dateOfBirthInLocal))) ? (1) : (0)));
}

OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:hrXFOSkcCk2wb2HMWuto8g", callContext.id);
// Out_AgeLabel = If
outVars.value.out_AgeLabelOut = (((vars.value.ageYearsVar < 1)) ? (((OS.BuiltinFunctions.integerToText(vars.value.ageMonthsVar) + " ") + (((vars.value.ageMonthsVar === 1)) ? ("month") : ("months")))) : ((OS.BuiltinFunctions.integerToText(vars.value.ageYearsVar) + " years")));
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:2gOuyv5H0kukF4oY_UaWtQ", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:xatXqZjewUGx328lAv7MlQ", callContext.id);
}

};
var controller = UBTConnectLibraryController.default;
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.GetAgeLabel$vars", [{
name: "DateOfBirth",
attrName: "dateOfBirthInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Date,
defaultValue: function () {
return OS.DataTypes.DateTime.defaultValue;
}
}, {
name: "ReferenceDate",
attrName: "referenceDateInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Date,
defaultValue: function () {
return OS.DataTypes.DateTime.defaultValue;
}
}, {
name: "AgeYears",
attrName: "ageYearsVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "AgeMonths",
attrName: "ageMonthsVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.GetAgeLabel$outVars", [{
name: "Out_AgeLabel",
attrName: "out_AgeLabelOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnectLibraryController.default.clientActionProxies.getAgeLabel$Action = function (dateOfBirthIn, referenceDateIn) {
dateOfBirthIn = (dateOfBirthIn === undefined) ? OS.DataTypes.DateTime.defaultValue : dateOfBirthIn;
referenceDateIn = (referenceDateIn === undefined) ? OS.DataTypes.DateTime.defaultValue : referenceDateIn;
return controller.executeActionInsideJSNode(UBTConnectLibraryController.default.getAgeLabel$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(dateOfBirthIn, OS.DataTypes.DataTypes.Date), OS.DataConversion.JSNodeParamConverter.from(referenceDateIn, OS.DataTypes.DataTypes.Date)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Out_AgeLabel: OS.DataConversion.JSNodeParamConverter.to(actionResults.out_AgeLabelOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("UBTConnectLibrary.controller$GetBackgroundColor_IsRead", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.clientVariables"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryClientVariables) {
var OS = OutSystems.Internal;
UBTConnectLibraryController.default.getBackgroundColor_IsRead$Action = function (in_IsReadIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.GetBackgroundColor_IsRead$vars"))());
vars.value.in_IsReadInLocal = in_IsReadIn;
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.GetBackgroundColor_IsRead$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:jufXh+MEYUyd9TIgaeTt2A:/ClientActionFlows.jufXh+MEYUyd9TIgaeTt2A:7ThoNYduKSX5jjBlVm8PJw", "UBTConnectLibrary", "GetBackgroundColor_IsRead", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:H1GKkwu0SUSxlxyiOVwUeA", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:L_Eih_jLPE27JQ9abpMpSg", callContext.id) && vars.value.in_IsReadInLocal)) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:iZczHm9rPEK_hq9EZ+4L7g", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:MW0WKCdSXUu0wxzcR0vQtg", callContext.id);
// Out_BackgroundColor = CyanLightest
outVars.value.out_BackgroundColorOut = UBTConnectLibraryModel.staticEntities.uBT_Color.cyanLightest;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:iZczHm9rPEK_hq9EZ+4L7g", callContext.id);
}

return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:jufXh+MEYUyd9TIgaeTt2A", callContext.id);
}

};
var controller = UBTConnectLibraryController.default;
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.GetBackgroundColor_IsRead$vars", [{
name: "In_IsRead",
attrName: "in_IsReadInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.GetBackgroundColor_IsRead$outVars", [{
name: "Out_BackgroundColor",
attrName: "out_BackgroundColorOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnectLibraryController.default.clientActionProxies.getBackgroundColor_IsRead$Action = function (in_IsReadIn) {
in_IsReadIn = (in_IsReadIn === undefined) ? false : in_IsReadIn;
return controller.executeActionInsideJSNode(UBTConnectLibraryController.default.getBackgroundColor_IsRead$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(in_IsReadIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Out_BackgroundColor: actionResults.out_BackgroundColorOut
};
});
};
});

define("UBTConnectLibrary.controller$GetBorderOptions_ImageCard", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.model$BorderOptionsRec"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryClientVariables) {
var OS = OutSystems.Internal;
UBTConnectLibraryController.default.getBorderOptions_ImageCard$Action = function (in_CardTypeIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.GetBorderOptions_ImageCard$vars"))());
vars.value.in_CardTypeIdInLocal = in_CardTypeIdIn;
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.GetBorderOptions_ImageCard$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:XNCSvLBETkqpgK4jAvvVOg:/ClientActionFlows.XNCSvLBETkqpgK4jAvvVOg:zcVrWu8NP3MhVA9RwbjQUA", "UBTConnectLibrary", "GetBorderOptions_ImageCard", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:04Jl+nw_4UGLZmKap1ZuQQ", callContext.id);
// Is detail card?
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:UDPam69mW0682_fmvZcvJA", callContext.id) && (vars.value.in_CardTypeIdInLocal === UBTConnectLibraryModel.staticEntities.uBT_ImageCardType.detail))) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:JIoPVXJhxECjLbHw2uNFug", callContext.id);
} else {
// BorderOptions
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:v4jYdECcl0O6_NKUl6iLpA", callContext.id);
// BorderOptions.Color = Neutral3
outVars.value.borderOptionsOut.colorAttr = UBTConnectLibraryModel.staticEntities.uBT_Color.neutral3;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:v4jYdECcl0O6_NKUl6iLpA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// BorderOptions.Size.GeneralSizeId = Small
outVars.value.borderOptionsOut.sizeAttr.generalSizeIdAttr = UBTConnectLibraryModel.staticEntities.uBT_Size.small;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:v4jYdECcl0O6_NKUl6iLpA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// BorderOptions.Radius.GeneralSizeId = Large
outVars.value.borderOptionsOut.radiusAttr.generalSizeIdAttr = UBTConnectLibraryModel.staticEntities.uBT_Shape.large;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:bATJ1lEDbkO15Ut1xLzgIQ", callContext.id);
}

return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:XNCSvLBETkqpgK4jAvvVOg", callContext.id);
}

};
var controller = UBTConnectLibraryController.default;
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.GetBorderOptions_ImageCard$vars", [{
name: "In_CardTypeId",
attrName: "in_CardTypeIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.GetBorderOptions_ImageCard$outVars", [{
name: "BorderOptions",
attrName: "borderOptionsOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new UBTConnectLibraryModel.BorderOptionsRec();
},
complexType: UBTConnectLibraryModel.BorderOptionsRec
}]);
UBTConnectLibraryController.default.clientActionProxies.getBorderOptions_ImageCard$Action = function (in_CardTypeIdIn) {
in_CardTypeIdIn = (in_CardTypeIdIn === undefined) ? "" : in_CardTypeIdIn;
return controller.executeActionInsideJSNode(UBTConnectLibraryController.default.getBorderOptions_ImageCard$Action.bind(controller, in_CardTypeIdIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
BorderOptions: actionResults.borderOptionsOut
};
});
};
});

define("UBTConnectLibrary.controller$GetClass_BackgroundColor", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.clientVariables"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryClientVariables) {
var OS = OutSystems.Internal;
UBTConnectLibraryController.default.getClass_BackgroundColor$Action = function (in_ColorIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.GetClass_BackgroundColor$vars"))());
vars.value.in_ColorIdInLocal = in_ColorIdIn;
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.GetClass_BackgroundColor$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:cKPDRKWxDUq3Vzc+cpBCYQ:/ClientActionFlows.cKPDRKWxDUq3Vzc+cpBCYQ:wIabQudKaO3bhyOefeXvaQ", "UBTConnectLibrary", "GetClass_BackgroundColor", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:U0iCow5abUKxWpXyZt8WXA", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:foaMQSfn6kir+MM8Oz8ssQ", callContext.id) && ((vars.value.in_ColorIdInLocal) !== (OS.BuiltinFunctions.nullTextIdentifier())))) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:9auKlfqm10+jx9BFLdok2Q", callContext.id);
// Out_ColorClass = "background-" + In_ColorId
outVars.value.out_ColorClassOut = ("background-" + vars.value.in_ColorIdInLocal);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:hzknmRMWVk+aTgJNw6MZ4g", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:hzknmRMWVk+aTgJNw6MZ4g", callContext.id);
}

return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:cKPDRKWxDUq3Vzc+cpBCYQ", callContext.id);
}

};
var controller = UBTConnectLibraryController.default;
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.GetClass_BackgroundColor$vars", [{
name: "In_ColorId",
attrName: "in_ColorIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.GetClass_BackgroundColor$outVars", [{
name: "Out_ColorClass",
attrName: "out_ColorClassOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnectLibraryController.default.clientActionProxies.getClass_BackgroundColor$Action = function (in_ColorIdIn) {
in_ColorIdIn = (in_ColorIdIn === undefined) ? "" : in_ColorIdIn;
return controller.executeActionInsideJSNode(UBTConnectLibraryController.default.getClass_BackgroundColor$Action.bind(controller, in_ColorIdIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Out_ColorClass: OS.DataConversion.JSNodeParamConverter.to(actionResults.out_ColorClassOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("UBTConnectLibrary.controller$GetClass_Color", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.clientVariables"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryClientVariables) {
var OS = OutSystems.Internal;
UBTConnectLibraryController.default.getClass_Color$Action = function (in_ColorIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.GetClass_Color$vars"))());
vars.value.in_ColorIdInLocal = in_ColorIdIn;
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.GetClass_Color$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:MGsKfBMJ1EilEX4cDmG7jw:/ClientActionFlows.MGsKfBMJ1EilEX4cDmG7jw:eHdBsBtF6PTLAOwcSIgkYw", "UBTConnectLibrary", "GetClass_Color", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:U8s8WbTQKUWeagPP51R1gg", callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:f00gY0XLAk6Yv3ztzKEGBg", callContext.id);
// Out_ColorClass = "text-" + In_ColorId
outVars.value.out_ColorClassOut = ("text-" + vars.value.in_ColorIdInLocal);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:mmFynCp1T0qHV5mHEzFMmA", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:MGsKfBMJ1EilEX4cDmG7jw", callContext.id);
}

};
var controller = UBTConnectLibraryController.default;
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.GetClass_Color$vars", [{
name: "In_ColorId",
attrName: "in_ColorIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.GetClass_Color$outVars", [{
name: "Out_ColorClass",
attrName: "out_ColorClassOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnectLibraryController.default.clientActionProxies.getClass_Color$Action = function (in_ColorIdIn) {
in_ColorIdIn = (in_ColorIdIn === undefined) ? "" : in_ColorIdIn;
return controller.executeActionInsideJSNode(UBTConnectLibraryController.default.getClass_Color$Action.bind(controller, in_ColorIdIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Out_ColorClass: OS.DataConversion.JSNodeParamConverter.to(actionResults.out_ColorClassOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("UBTConnectLibrary.controller$GetClass_Space", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.clientVariables"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryClientVariables) {
var OS = OutSystems.Internal;
UBTConnectLibraryController.default.getClass_Space$Action = function (in_SpaceIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.GetClass_Space$vars"))());
vars.value.in_SpaceIdInLocal = in_SpaceIdIn;
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.GetClass_Space$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:jLeXdt918028NL9fwibeNQ:/ClientActionFlows.jLeXdt918028NL9fwibeNQ:oQEDvawMnsoYK_LtlRG3Wg", "UBTConnectLibrary", "GetClass_Space", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:+eXGa0kdKku0hs5numulhw", callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:yQw+tHqGbk+cCQXnSYsQvw", callContext.id);
// Out_ColorClass = "text-" + In_SpaceId
outVars.value.out_ColorClassOut = ("text-" + vars.value.in_SpaceIdInLocal);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:44eXn7VSdEmYV_MdqOc8vQ", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:jLeXdt918028NL9fwibeNQ", callContext.id);
}

};
var controller = UBTConnectLibraryController.default;
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.GetClass_Space$vars", [{
name: "In_SpaceId",
attrName: "in_SpaceIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.GetClass_Space$outVars", [{
name: "Out_ColorClass",
attrName: "out_ColorClassOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnectLibraryController.default.clientActionProxies.getClass_Space$Action = function (in_SpaceIdIn) {
in_SpaceIdIn = (in_SpaceIdIn === undefined) ? "" : in_SpaceIdIn;
return controller.executeActionInsideJSNode(UBTConnectLibraryController.default.getClass_Space$Action.bind(controller, in_SpaceIdIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Out_ColorClass: OS.DataConversion.JSNodeParamConverter.to(actionResults.out_ColorClassOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("UBTConnectLibrary.controller$GetClass_Visibility", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.clientVariables"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryClientVariables) {
var OS = OutSystems.Internal;
UBTConnectLibraryController.default.getClass_Visibility$Action = function (visibilityOptionIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.GetClass_Visibility$vars"))());
vars.value.visibilityOptionInLocal = visibilityOptionIn;
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.GetClass_Visibility$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:MY6mBPvmSkO9weGevG9qjg:/ClientActionFlows.MY6mBPvmSkO9weGevG9qjg:VoVRpcEcOXZAjhbLaTaTJw", "UBTConnectLibrary", "GetClass_Visibility", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:_HlQwXSsY0y4eRb6hPBS8A", callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:iR97qBDMyU6oE7EW94g7ng", callContext.id);
// Class = "visibility-" + VisibilityOption
outVars.value.classOut = ("visibility-" + vars.value.visibilityOptionInLocal);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:dnsW4TJvUUqs7_v2l1Cc2Q", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:MY6mBPvmSkO9weGevG9qjg", callContext.id);
}

};
var controller = UBTConnectLibraryController.default;
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.GetClass_Visibility$vars", [{
name: "VisibilityOption",
attrName: "visibilityOptionInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.GetClass_Visibility$outVars", [{
name: "Class",
attrName: "classOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnectLibraryController.default.clientActionProxies.getClass_Visibility$Action = function (visibilityOptionIn) {
visibilityOptionIn = (visibilityOptionIn === undefined) ? "" : visibilityOptionIn;
return controller.executeActionInsideJSNode(UBTConnectLibraryController.default.getClass_Visibility$Action.bind(controller, visibilityOptionIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Class: OS.DataConversion.JSNodeParamConverter.to(actionResults.classOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("UBTConnectLibrary.controller$GetClasses_AvatarSize", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.clientVariables"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryClientVariables) {
var OS = OutSystems.Internal;
UBTConnectLibraryController.default.getClasses_AvatarSize$Action = function (sizeIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.GetClasses_AvatarSize$vars"))());
vars.value.sizeIdInLocal = sizeIdIn;
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.GetClasses_AvatarSize$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:Z8jLf73DmU2WFAhQigvKLw:/ClientActionFlows.Z8jLf73DmU2WFAhQigvKLw:vBr8aytzqAjvvXHV7aFk3g", "UBTConnectLibrary", "GetClasses_AvatarSize", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:RL4Puv2MuU6gTfXyNxVP3w", callContext.id);
// Has Size Id?
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:f6IxCuH+s0udwSEzlC6pmg", callContext.id) && ((vars.value.sizeIdInLocal) !== (OS.BuiltinFunctions.nullTextIdentifier())))) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:aokV+iPwdk2zRZo_yhz5eA", callContext.id);
// ClassesOut = "ubt-avatar-image-" + SizeId
outVars.value.classesOutOut = ("ubt-avatar-image-" + vars.value.sizeIdInLocal);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:SkSWhOROI0mos+i9rcgrOw", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:Og6DVI9aTEGDRS4ADKQJFQ", callContext.id);
}

return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:Z8jLf73DmU2WFAhQigvKLw", callContext.id);
}

};
var controller = UBTConnectLibraryController.default;
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.GetClasses_AvatarSize$vars", [{
name: "SizeId",
attrName: "sizeIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.GetClasses_AvatarSize$outVars", [{
name: "ClassesOut",
attrName: "classesOutOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnectLibraryController.default.clientActionProxies.getClasses_AvatarSize$Action = function (sizeIdIn) {
sizeIdIn = (sizeIdIn === undefined) ? "" : sizeIdIn;
return controller.executeActionInsideJSNode(UBTConnectLibraryController.default.getClasses_AvatarSize$Action.bind(controller, sizeIdIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
ClassesOut: OS.DataConversion.JSNodeParamConverter.to(actionResults.classesOutOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("UBTConnectLibrary.controller$GetClasses_BackgroundImageSize", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.controller$FormatClasses", "UBTConnectLibrary.controller$GetGalleryBackgroundClass"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryClientVariables) {
var OS = OutSystems.Internal;
UBTConnectLibraryController.default.getClasses_BackgroundImageSize$Action = function (in_ImageCardTypeIn, itemsPerRowIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.GetClasses_BackgroundImageSize$vars"))());
vars.value.in_ImageCardTypeInLocal = in_ImageCardTypeIn;
vars.value.itemsPerRowInLocal = itemsPerRowIn;
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.GetClasses_BackgroundImageSize$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:IzzOe1U1AkmSldpov7AjJQ:/ClientActionFlows.IzzOe1U1AkmSldpov7AjJQ:RzGwcXhyYTM3j6afcyIU1w", "UBTConnectLibrary", "GetClasses_BackgroundImageSize", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:6bVVqTcvgUCnFwIdanbLZg", callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:PgDtuJhxcEShEiHgBw8ZJw", callContext.id);
// Classes = "ubt-background-image--" + IntrinsicHeight_2_To_3
outVars.value.classesOut = ("ubt-background-image--" + UBTConnectLibraryModel.staticEntities.uBT_BackgroundImageSize.intrinsicHeight_2_To_3);
// Is Gallery?
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:axpF7+7K2kOkXWmUb1cqhw", callContext.id) && (vars.value.in_ImageCardTypeInLocal === UBTConnectLibraryModel.staticEntities.uBT_ImageCardType.gallery))) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:n2cC13Zlm06Mo1dVLulYDg", callContext.id);
// Classes = FormatClasses(Classes, "ubt-lazy-image--width-" + GetGalleryBackgroundClass(ItemsPerRow))
outVars.value.classesOut = OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.formatClasses$Action(outVars.value.classesOut, ("ubt-lazy-image--width-" + OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.getGalleryBackgroundClass$Action(vars.value.itemsPerRowInLocal, callContext).imageSizeOut;
}, OS.DataTypes.DataTypes.Text, callContext.id)), callContext).classesOutOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:IfCerMRQrESyBdPbKg4R2w", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:_26FQ+ApTEKWKlyEw9_w1Q", callContext.id);
// Classes = FormatClasses(Classes, "ubt-lazy-image--width-" + MaxWidth_100vw)
outVars.value.classesOut = OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.formatClasses$Action(outVars.value.classesOut, ("ubt-lazy-image--width-" + UBTConnectLibraryModel.staticEntities.uBT_ImageSize.maxWidth_100vw), callContext).classesOutOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:IfCerMRQrESyBdPbKg4R2w", callContext.id);
}

return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:IzzOe1U1AkmSldpov7AjJQ", callContext.id);
}

};
var controller = UBTConnectLibraryController.default;
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.GetClasses_BackgroundImageSize$vars", [{
name: "In_ImageCardType",
attrName: "in_ImageCardTypeInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "ItemsPerRow",
attrName: "itemsPerRowInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.GetClasses_BackgroundImageSize$outVars", [{
name: "Classes",
attrName: "classesOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnectLibraryController.default.clientActionProxies.getClasses_BackgroundImageSize$Action = function (in_ImageCardTypeIn, itemsPerRowIn) {
in_ImageCardTypeIn = (in_ImageCardTypeIn === undefined) ? "" : in_ImageCardTypeIn;
itemsPerRowIn = (itemsPerRowIn === undefined) ? 0 : itemsPerRowIn;
return controller.executeActionInsideJSNode(UBTConnectLibraryController.default.getClasses_BackgroundImageSize$Action.bind(controller, in_ImageCardTypeIn, OS.DataConversion.JSNodeParamConverter.from(itemsPerRowIn, OS.DataTypes.DataTypes.Integer)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Classes: OS.DataConversion.JSNodeParamConverter.to(actionResults.classesOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("UBTConnectLibrary.controller$GetClasses_Border", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.controller$FormatClasses", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.controller$GetSpacingOptions", "UBTConnectLibrary.model$BorderOptionsRec"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryClientVariables) {
var OS = OutSystems.Internal;
UBTConnectLibraryController.default.getClasses_Border$Action = function (borderOptionsIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.GetClasses_Border$vars"))());
vars.value.borderOptionsInLocal = borderOptionsIn.clone();
var formatClasses_TopLeftVar = new OS.DataTypes.VariableHolder();
var formatClasses_BottomRightVar = new OS.DataTypes.VariableHolder();
var formatClasses_BorderVar = new OS.DataTypes.VariableHolder();
var formatClasses_TopRightVar = new OS.DataTypes.VariableHolder();
var formatClasses_GeneralRadiusVar = new OS.DataTypes.VariableHolder();
var formatClasses_ColorVar = new OS.DataTypes.VariableHolder();
var getSpacingOptionsVar = new OS.DataTypes.VariableHolder();
var formatClasses_BottomLeftVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.GetClasses_Border$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.formatClasses_TopLeftVar = formatClasses_TopLeftVar;
varBag.formatClasses_BottomRightVar = formatClasses_BottomRightVar;
varBag.formatClasses_BorderVar = formatClasses_BorderVar;
varBag.formatClasses_TopRightVar = formatClasses_TopRightVar;
varBag.formatClasses_GeneralRadiusVar = formatClasses_GeneralRadiusVar;
varBag.formatClasses_ColorVar = formatClasses_ColorVar;
varBag.getSpacingOptionsVar = getSpacingOptionsVar;
varBag.formatClasses_BottomLeftVar = formatClasses_BottomLeftVar;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:W+Puaa4RDkW_lm1VwNGmzw:/ClientActionFlows.W+Puaa4RDkW_lm1VwNGmzw:4Gh3Y4efxSdfsFW4BjQ8SA", "UBTConnectLibrary", "GetClasses_Border", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:flv6DNQgqUS1vfwrqOYqpg", callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:5qzC859BQU2M8EUdiqoxrQ", callContext.id);
// Execute Action: GetSpacingOptions
getSpacingOptionsVar.value = UBTConnectLibraryController.default.getSpacingOptions$Action("border", vars.value.borderOptionsInLocal.sizeAttr, callContext);

OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:PkPXZ2tVNES5C+CZCeJv2w", callContext.id);
// Execute Action: FormatClasses_Border
formatClasses_BorderVar.value = UBTConnectLibraryController.default.formatClasses$Action(outVars.value.classesOut, getSpacingOptionsVar.value.classesOut, callContext);

OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:Si6VHNIlr0iryproCISaJg", callContext.id);
// Classes = FormatClasses_Border.ClassesOut
outVars.value.classesOut = formatClasses_BorderVar.value.classesOutOut;
// Has Color Value?
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:kzRidgZ_tkqgW_1Ph+DbkA", callContext.id) && ((vars.value.borderOptionsInLocal.colorAttr) !== (OS.BuiltinFunctions.nullTextIdentifier())))) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:OetC4aZINku_vfSnKq+u_A", callContext.id);
// Execute Action: FormatClasses_Color
formatClasses_ColorVar.value = UBTConnectLibraryController.default.formatClasses$Action(outVars.value.classesOut, ("border-color-" + vars.value.borderOptionsInLocal.colorAttr), callContext);

OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:8LdvNI6BQ02sTAOdVFO0Qw", callContext.id);
// Classes = FormatClasses_Color.ClassesOut
outVars.value.classesOut = formatClasses_ColorVar.value.classesOutOut;
}

// Has General Radius?
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:4rCsuVSlbE6ITqw_ZiE5tw", callContext.id) && ((vars.value.borderOptionsInLocal.radiusAttr.generalSizeIdAttr) !== (OS.BuiltinFunctions.nullTextIdentifier())))) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:MU5UuKiLTEWxR7kbZsprZg", callContext.id);
// Execute Action: FormatClasses_GeneralRadius
formatClasses_GeneralRadiusVar.value = UBTConnectLibraryController.default.formatClasses$Action(outVars.value.classesOut, ("border-radius-" + vars.value.borderOptionsInLocal.radiusAttr.generalSizeIdAttr), callContext);

OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:qUkHykUhgkCDa8b4PjTPZA", callContext.id);
// Classes = FormatClasses_GeneralRadius.ClassesOut
outVars.value.classesOut = formatClasses_GeneralRadiusVar.value.classesOutOut;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:UqaSeWcbf0GNgZTedWwPHQ", callContext.id);
} else {
// Has Top Left?
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:K7D8KXkI6UamPZYGGegleQ", callContext.id) && ((vars.value.borderOptionsInLocal.radiusAttr.topLeftIdAttr) !== (OS.BuiltinFunctions.nullTextIdentifier())))) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:W19PQFWGtUuo+XoMFeDy1A", callContext.id);
// Execute Action: FormatClasses_TopLeft
formatClasses_TopLeftVar.value = UBTConnectLibraryController.default.formatClasses$Action(outVars.value.classesOut, ("border-radius-top-left-" + vars.value.borderOptionsInLocal.radiusAttr.topLeftIdAttr), callContext);

OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:L+K0sLI7_0W0SjUgnD5o6Q", callContext.id);
// Classes = FormatClasses_TopLeft.ClassesOut
outVars.value.classesOut = formatClasses_TopLeftVar.value.classesOutOut;
}

// Has Top Right?
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:Vw6wQVf0MUCcc8QVjf6Sew", callContext.id) && ((vars.value.borderOptionsInLocal.radiusAttr.topRightIdAttr) !== (OS.BuiltinFunctions.nullTextIdentifier())))) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:YmRIp6gVUUOb7oi9ygIeqg", callContext.id);
// Execute Action: FormatClasses_TopRight
formatClasses_TopRightVar.value = UBTConnectLibraryController.default.formatClasses$Action(outVars.value.classesOut, ("border-radius-top-right-" + vars.value.borderOptionsInLocal.radiusAttr.topRightIdAttr), callContext);

OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:q9rEy1DwEUWYxYA7QYq6_w", callContext.id);
// Classes = FormatClasses_TopRight.ClassesOut
outVars.value.classesOut = formatClasses_TopRightVar.value.classesOutOut;
}

// Has Bottom Right?
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:Vz0L_MqsJUSNSq_ukHSwAw", callContext.id) && ((vars.value.borderOptionsInLocal.radiusAttr.bottomRightIdAttr) !== (OS.BuiltinFunctions.nullTextIdentifier())))) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:QvmyYdEmMUKNTarmpNvpEQ", callContext.id);
// Execute Action: FormatClasses_BottomRight
formatClasses_BottomRightVar.value = UBTConnectLibraryController.default.formatClasses$Action(outVars.value.classesOut, ("border-radius-bottom-right-" + vars.value.borderOptionsInLocal.radiusAttr.bottomRightIdAttr), callContext);

OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:Ts9FHM39cEWgFS7imiCn2Q", callContext.id);
// Classes = FormatClasses_BottomRight.ClassesOut
outVars.value.classesOut = formatClasses_BottomRightVar.value.classesOutOut;
}

// Has Bottom Left?
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:8+FwYqF88kG0elthuNjC3A", callContext.id) && ((vars.value.borderOptionsInLocal.radiusAttr.bottomLeftIdAttr) !== (OS.BuiltinFunctions.nullTextIdentifier())))) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:AtgG+sVjgE6ixxlavRODmg", callContext.id);
// Execute Action: FormatClasses_BottomLeft
formatClasses_BottomLeftVar.value = UBTConnectLibraryController.default.formatClasses$Action(outVars.value.classesOut, ("border-radius-bottom-left-" + vars.value.borderOptionsInLocal.radiusAttr.bottomLeftIdAttr), callContext);

OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:kvLFhOpznkS+vR789an42A", callContext.id);
// Classes = FormatClasses_BottomLeft.ClassesOut
outVars.value.classesOut = formatClasses_BottomLeftVar.value.classesOutOut;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:m++9xxycRU6SAdJVg2UMDA", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:m++9xxycRU6SAdJVg2UMDA", callContext.id);
}

}

return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:W+Puaa4RDkW_lm1VwNGmzw", callContext.id);
}

};
var controller = UBTConnectLibraryController.default;
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.GetClasses_Border$vars", [{
name: "BorderOptions",
attrName: "borderOptionsInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new UBTConnectLibraryModel.BorderOptionsRec();
},
complexType: UBTConnectLibraryModel.BorderOptionsRec
}]);
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.GetClasses_Border$outVars", [{
name: "Classes",
attrName: "classesOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnectLibraryController.default.clientActionProxies.getClasses_Border$Action = function (borderOptionsIn) {
borderOptionsIn = (borderOptionsIn === undefined) ? new UBTConnectLibraryModel.BorderOptionsRec() : borderOptionsIn;
return controller.executeActionInsideJSNode(UBTConnectLibraryController.default.getClasses_Border$Action.bind(controller, borderOptionsIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Classes: OS.DataConversion.JSNodeParamConverter.to(actionResults.classesOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("UBTConnectLibrary.controller$GetClasses_Button", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.controller$FormatClasses"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryClientVariables) {
var OS = OutSystems.Internal;
UBTConnectLibraryController.default.getClasses_Button$Action = function (in_UBT_ButtonSizeIdIn, in_UBT_ButtonTypeIdIn, in_MainContainerClassIn, is_IsDisabledIn, in_UBT_FlexBehaviorIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.GetClasses_Button$vars"))());
vars.value.in_UBT_ButtonSizeIdInLocal = in_UBT_ButtonSizeIdIn;
vars.value.in_UBT_ButtonTypeIdInLocal = in_UBT_ButtonTypeIdIn;
vars.value.in_MainContainerClassInLocal = in_MainContainerClassIn;
vars.value.is_IsDisabledInLocal = is_IsDisabledIn;
vars.value.in_UBT_FlexBehaviorIdInLocal = in_UBT_FlexBehaviorIdIn;
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.GetClasses_Button$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:VuvTMIbe40Ogu8HPvA0PEw:/ClientActionFlows.VuvTMIbe40Ogu8HPvA0PEw:lnXdNwURY+D17heWw00Ysw", "UBTConnectLibrary", "GetClasses_Button", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:rVvOQ1sUMka0Z+qCgataXA", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:CRLNEfu5v06mtNMnRzTWbA", callContext.id) && ((vars.value.in_UBT_ButtonSizeIdInLocal) !== (OS.BuiltinFunctions.nullTextIdentifier())))) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:FCextqFOqkCi4jhFh8YuYQ", callContext.id);
// Out_Classes = In_MainContainerClass + "--" + In_UBT_ButtonSizeId
outVars.value.out_ClassesOut = ((vars.value.in_MainContainerClassInLocal + "--") + vars.value.in_UBT_ButtonSizeIdInLocal);
}

if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:Jz9U06t8w02KWpboDfUjrQ", callContext.id) && ((vars.value.in_UBT_ButtonTypeIdInLocal) !== (OS.BuiltinFunctions.nullTextIdentifier())))) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:_TlW_x_taU6oMD9aZNzwqw", callContext.id);
// Out_Classes = FormatClasses(Out_Classes, In_MainContainerClass + "--" + In_UBT_ButtonTypeId)
outVars.value.out_ClassesOut = OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.formatClasses$Action(outVars.value.out_ClassesOut, ((vars.value.in_MainContainerClassInLocal + "--") + vars.value.in_UBT_ButtonTypeIdInLocal), callContext).classesOutOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
}

if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:XHXKcJV_30aknAUmm5e2yg", callContext.id) && vars.value.is_IsDisabledInLocal)) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:1snKlXtvpUmV75AgEFfkdQ", callContext.id);
// Out_Classes = FormatClasses(Out_Classes, In_MainContainerClass + "--disabled")
outVars.value.out_ClassesOut = OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.formatClasses$Action(outVars.value.out_ClassesOut, (vars.value.in_MainContainerClassInLocal + "--disabled"), callContext).classesOutOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
}

if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:uynZ4Wk_IkCJZEkSzxbYjg", callContext.id) && ((vars.value.in_UBT_FlexBehaviorIdInLocal) !== (OS.BuiltinFunctions.nullTextIdentifier())))) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:9aAcGNp5OUKrBtQ64FBSWA", callContext.id);
// Out_Classes = FormatClasses(Out_Classes, In_UBT_FlexBehaviorId)
outVars.value.out_ClassesOut = OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.formatClasses$Action(outVars.value.out_ClassesOut, vars.value.in_UBT_FlexBehaviorIdInLocal, callContext).classesOutOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:ZyHYww__qUK6sJYno005AQ", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:ZyHYww__qUK6sJYno005AQ", callContext.id);
}

return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:VuvTMIbe40Ogu8HPvA0PEw", callContext.id);
}

};
var controller = UBTConnectLibraryController.default;
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.GetClasses_Button$vars", [{
name: "In_UBT_ButtonSizeId",
attrName: "in_UBT_ButtonSizeIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "In_UBT_ButtonTypeId",
attrName: "in_UBT_ButtonTypeIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "In_MainContainerClass",
attrName: "in_MainContainerClassInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Is_IsDisabled",
attrName: "is_IsDisabledInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "In_UBT_FlexBehaviorId",
attrName: "in_UBT_FlexBehaviorIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.GetClasses_Button$outVars", [{
name: "Out_Classes",
attrName: "out_ClassesOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnectLibraryController.default.clientActionProxies.getClasses_Button$Action = function (in_UBT_ButtonSizeIdIn, in_UBT_ButtonTypeIdIn, in_MainContainerClassIn, is_IsDisabledIn, in_UBT_FlexBehaviorIdIn) {
in_UBT_ButtonSizeIdIn = (in_UBT_ButtonSizeIdIn === undefined) ? "" : in_UBT_ButtonSizeIdIn;
in_UBT_ButtonTypeIdIn = (in_UBT_ButtonTypeIdIn === undefined) ? "" : in_UBT_ButtonTypeIdIn;
in_MainContainerClassIn = (in_MainContainerClassIn === undefined) ? "" : in_MainContainerClassIn;
is_IsDisabledIn = (is_IsDisabledIn === undefined) ? false : is_IsDisabledIn;
in_UBT_FlexBehaviorIdIn = (in_UBT_FlexBehaviorIdIn === undefined) ? "" : in_UBT_FlexBehaviorIdIn;
return controller.executeActionInsideJSNode(UBTConnectLibraryController.default.getClasses_Button$Action.bind(controller, in_UBT_ButtonSizeIdIn, in_UBT_ButtonTypeIdIn, OS.DataConversion.JSNodeParamConverter.from(in_MainContainerClassIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(is_IsDisabledIn, OS.DataTypes.DataTypes.Boolean), in_UBT_FlexBehaviorIdIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Out_Classes: OS.DataConversion.JSNodeParamConverter.to(actionResults.out_ClassesOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("UBTConnectLibrary.controller$GetClasses_Column", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.controller$FormatClasses", "UBTConnectLibrary.controller$ConvertVerticalAlignToFlexAlignItems", "UBTConnectLibrary.model$ColumnOptionsRec"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryClientVariables) {
var OS = OutSystems.Internal;
UBTConnectLibraryController.default.getClasses_Column$Action = function (columnOptionsIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.GetClasses_Column$vars"))());
vars.value.columnOptionsInLocal = columnOptionsIn.clone();
var formatClasses3Var = new OS.DataTypes.VariableHolder();
var formatClassesVar = new OS.DataTypes.VariableHolder();
var formatClasses2Var = new OS.DataTypes.VariableHolder();
var convertVerticalAlignToFlexAlignItemsVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.GetClasses_Column$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.formatClasses3Var = formatClasses3Var;
varBag.formatClassesVar = formatClassesVar;
varBag.formatClasses2Var = formatClasses2Var;
varBag.convertVerticalAlignToFlexAlignItemsVar = convertVerticalAlignToFlexAlignItemsVar;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:O2R_zgBMYkakTcNdIemrkg:/ClientActionFlows.O2R_zgBMYkakTcNdIemrkg:hlE65EjvdUG9S+dNul4Lsw", "UBTConnectLibrary", "GetClasses_Column", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:f+an88RlSkawfkyZvafzFA", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:1NRSr4oBP0SBVZDQITgOxQ", callContext.id) && ((vars.value.columnOptionsInLocal.columnBehaviourAttr) !== (OS.BuiltinFunctions.nullTextIdentifier())))) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:jMUxQEhpHk+4Tv6R247p8g", callContext.id);
// Execute Action: FormatClasses
formatClassesVar.value = UBTConnectLibraryController.default.formatClasses$Action(outVars.value.classesOut, ("ubt-columns-" + vars.value.columnOptionsInLocal.columnBehaviourAttr), callContext);

OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:3H7DqAi7LUKWmlqTY1cnsQ", callContext.id);
// Classes = FormatClasses.ClassesOut
outVars.value.classesOut = formatClassesVar.value.classesOutOut;
}

if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:uFLwgXmbA0qqAaLF2sZyVg", callContext.id) && ((vars.value.columnOptionsInLocal.verticalAlignAttr) !== (OS.BuiltinFunctions.nullTextIdentifier())))) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:nHrHwguwa0e4wZoEUFYiCQ", callContext.id);
// Execute Action: ConvertVerticalAlignToFlexAlignItems
convertVerticalAlignToFlexAlignItemsVar.value = UBTConnectLibraryController.default.convertVerticalAlignToFlexAlignItems$Action(vars.value.columnOptionsInLocal.verticalAlignAttr, callContext);

OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:VuXGc_Q9O066c6XkEwABBA", callContext.id);
// Execute Action: FormatClasses2
formatClasses2Var.value = UBTConnectLibraryController.default.formatClasses$Action(outVars.value.classesOut, convertVerticalAlignToFlexAlignItemsVar.value.classOut, callContext);

OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:p_nip5vuM0C+62csFgFDkQ", callContext.id);
// Classes = FormatClasses2.ClassesOut
outVars.value.classesOut = formatClasses2Var.value.classesOutOut;
}

if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:ARG1Y+ssiEyD6sszm0wutg", callContext.id) && ((vars.value.columnOptionsInLocal.flexDirectionAttr) !== (OS.BuiltinFunctions.nullTextIdentifier())))) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:v17TNAT9CEi4WmTF5moKFQ", callContext.id);
// Execute Action: FormatClasses3
formatClasses3Var.value = UBTConnectLibraryController.default.formatClasses$Action(outVars.value.classesOut, vars.value.columnOptionsInLocal.flexDirectionAttr, callContext);

OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:GRZY64KyOkyWIuj5Uto_eA", callContext.id);
// Classes = FormatClasses3.ClassesOut
outVars.value.classesOut = formatClasses3Var.value.classesOutOut;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:RBUPcJnR5USvp4DHhg08rg", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:RBUPcJnR5USvp4DHhg08rg", callContext.id);
}

return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:O2R_zgBMYkakTcNdIemrkg", callContext.id);
}

};
var controller = UBTConnectLibraryController.default;
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.GetClasses_Column$vars", [{
name: "ColumnOptions",
attrName: "columnOptionsInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new UBTConnectLibraryModel.ColumnOptionsRec();
},
complexType: UBTConnectLibraryModel.ColumnOptionsRec
}]);
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.GetClasses_Column$outVars", [{
name: "Classes",
attrName: "classesOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnectLibraryController.default.clientActionProxies.getClasses_Column$Action = function (columnOptionsIn) {
columnOptionsIn = (columnOptionsIn === undefined) ? new UBTConnectLibraryModel.ColumnOptionsRec() : columnOptionsIn;
return controller.executeActionInsideJSNode(UBTConnectLibraryController.default.getClasses_Column$Action.bind(controller, columnOptionsIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Classes: OS.DataConversion.JSNodeParamConverter.to(actionResults.classesOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("UBTConnectLibrary.controller$GetClasses_ColumnWidth", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.clientVariables"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryClientVariables) {
var OS = OutSystems.Internal;
UBTConnectLibraryController.default.getClasses_ColumnWidth$Action = function (in_ColumnWidthIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.GetClasses_ColumnWidth$vars"))());
vars.value.in_ColumnWidthInLocal = in_ColumnWidthIn;
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.GetClasses_ColumnWidth$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:aAPz8C0L0U6ZGPxRyXUQ3A:/ClientActionFlows.aAPz8C0L0U6ZGPxRyXUQ3A:BQRZovrW8VvLo2j+UtRldQ", "UBTConnectLibrary", "GetClasses_ColumnWidth", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:sXWJ8VVh2kiDwPrh8x9JMg", callContext.id);
// Is null?
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:iRgin2TmY0ydn+F0GIIDzw", callContext.id) && (vars.value.in_ColumnWidthInLocal === OS.BuiltinFunctions.nullTextIdentifier()))) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:SjOW++9E9UWp8myYdFqWqg", callContext.id);
} else {
// Fill
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:EK532OMdsEexBXcTYI6ccQ", callContext.id) && (vars.value.in_ColumnWidthInLocal === UBTConnectLibraryModel.staticEntities.uBT_ColumnWidth.fill))) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:ZBllAqJHRkmbzflyt7C5RQ", callContext.id);
// Classes = Fill
outVars.value.classesOut = UBTConnectLibraryModel.staticEntities.uBT_ColumnWidth.fill;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:YhmZ_H6N2UeKCMQonhzl6g", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:guZFufECPUC8oLmiB25WHw", callContext.id);
// Classes = "ThemeGrid_Width" + In_ColumnWidth
outVars.value.classesOut = ("ThemeGrid_Width" + vars.value.in_ColumnWidthInLocal);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:YhmZ_H6N2UeKCMQonhzl6g", callContext.id);
}

}

return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:aAPz8C0L0U6ZGPxRyXUQ3A", callContext.id);
}

};
var controller = UBTConnectLibraryController.default;
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.GetClasses_ColumnWidth$vars", [{
name: "In_ColumnWidth",
attrName: "in_ColumnWidthInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.GetClasses_ColumnWidth$outVars", [{
name: "Classes",
attrName: "classesOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnectLibraryController.default.clientActionProxies.getClasses_ColumnWidth$Action = function (in_ColumnWidthIn) {
in_ColumnWidthIn = (in_ColumnWidthIn === undefined) ? "" : in_ColumnWidthIn;
return controller.executeActionInsideJSNode(UBTConnectLibraryController.default.getClasses_ColumnWidth$Action.bind(controller, in_ColumnWidthIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Classes: OS.DataConversion.JSNodeParamConverter.to(actionResults.classesOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("UBTConnectLibrary.controller$GetClasses_Container", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.controller$FormatClasses", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.controller$GetClasses_Text", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.controller$GetSpacingOptions", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.controller$GetClasses_Border", "UBTConnectLibrary.controller$GetClasses_UBTSkeletonElement", "UBTConnectLibrary.controller$GetClass_BackgroundColor", "UBTConnectLibrary.controller$GetClass_Visibility", "UBTConnectLibrary.model$ContainerOptionsRec"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryClientVariables) {
var OS = OutSystems.Internal;
UBTConnectLibraryController.default.getClasses_Container$Action = function (containerOptionsIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.GetClasses_Container$vars"))());
vars.value.containerOptionsInLocal = containerOptionsIn.clone();
var formatClasses_SkeletonVar = new OS.DataTypes.VariableHolder();
var formatClasses_TextVar = new OS.DataTypes.VariableHolder();
var formatClasses_BorderVar = new OS.DataTypes.VariableHolder();
var formatClasses_PaddingVar = new OS.DataTypes.VariableHolder();
var formatClasses_AlignItemsVar = new OS.DataTypes.VariableHolder();
var formatClasses_InlineBlockVar = new OS.DataTypes.VariableHolder();
var formatClasses_DisplayVar = new OS.DataTypes.VariableHolder();
var formatClasses_MarginVar = new OS.DataTypes.VariableHolder();
var getClasses_TextVar = new OS.DataTypes.VariableHolder();
var formatClassesVar = new OS.DataTypes.VariableHolder();
var getMarginOptionsVar = new OS.DataTypes.VariableHolder();
var formatClasses_ShadowVar = new OS.DataTypes.VariableHolder();
var formatClasses_JustifyContentVar = new OS.DataTypes.VariableHolder();
var getPaddingOptionsVar = new OS.DataTypes.VariableHolder();
var formatClasses_FlexDirectionVar = new OS.DataTypes.VariableHolder();
var getClasses_BorderVar = new OS.DataTypes.VariableHolder();
var formatClasses_VisibilityVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.GetClasses_Container$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.formatClasses_SkeletonVar = formatClasses_SkeletonVar;
varBag.formatClasses_TextVar = formatClasses_TextVar;
varBag.formatClasses_BorderVar = formatClasses_BorderVar;
varBag.formatClasses_PaddingVar = formatClasses_PaddingVar;
varBag.formatClasses_AlignItemsVar = formatClasses_AlignItemsVar;
varBag.formatClasses_InlineBlockVar = formatClasses_InlineBlockVar;
varBag.formatClasses_DisplayVar = formatClasses_DisplayVar;
varBag.formatClasses_MarginVar = formatClasses_MarginVar;
varBag.getClasses_TextVar = getClasses_TextVar;
varBag.formatClassesVar = formatClassesVar;
varBag.getMarginOptionsVar = getMarginOptionsVar;
varBag.formatClasses_ShadowVar = formatClasses_ShadowVar;
varBag.formatClasses_JustifyContentVar = formatClasses_JustifyContentVar;
varBag.getPaddingOptionsVar = getPaddingOptionsVar;
varBag.formatClasses_FlexDirectionVar = formatClasses_FlexDirectionVar;
varBag.getClasses_BorderVar = getClasses_BorderVar;
varBag.formatClasses_VisibilityVar = formatClasses_VisibilityVar;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:Yqt4H18c7kqIn4VcUOvIcg:/ClientActionFlows.Yqt4H18c7kqIn4VcUOvIcg:xVxBj9arKRvY4VUXUUFzHg", "UBTConnectLibrary", "GetClasses_Container", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:eDrAz8QQUkaDPFHq1S3T2A", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:rjKn0knXW0WtddFMn1Gd+w", callContext.id) && vars.value.containerOptionsInLocal.isInlineBlockAttr)) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:L+d6PW9qeUawNFqiG1Co3g", callContext.id);
// Execute Action: FormatClasses_InlineBlock
formatClasses_InlineBlockVar.value = UBTConnectLibraryController.default.formatClasses$Action(outVars.value.classesOut, "inline-block", callContext);

OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:rZTDytAbuEmFnNgZ41klwg", callContext.id);
// Classes = FormatClasses_InlineBlock.ClassesOut
outVars.value.classesOut = formatClasses_InlineBlockVar.value.classesOutOut;
}

// Is Skeleton Element
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:+ezdbMvkS0mvayy8NRkBew", callContext.id) && vars.value.containerOptionsInLocal.isSkeletonElementAttr)) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:WphbBYi8AUqvcvgISD7G2A", callContext.id);
// Execute Action: FormatClasses_Skeleton
formatClasses_SkeletonVar.value = UBTConnectLibraryController.default.formatClasses$Action(outVars.value.classesOut, OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.getClasses_UBTSkeletonElement$Action(callContext).classesOut;
}, OS.DataTypes.DataTypes.Text, callContext.id), callContext);

OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:Jb6AYTb5K0+C49cGfCbWiQ", callContext.id);
// Classes = FormatClasses_Skeleton.ClassesOut
outVars.value.classesOut = formatClasses_SkeletonVar.value.classesOutOut;
}

// Has Display?
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:imo0M7jx4ESLMoG4wzoKUw", callContext.id) && ((vars.value.containerOptionsInLocal.displayOptionsAttr.displayAttr) !== (OS.BuiltinFunctions.nullTextIdentifier())))) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:2iRNVt3hG0yicWxG98cnqQ", callContext.id);
// Execute Action: FormatClasses_Display
formatClasses_DisplayVar.value = UBTConnectLibraryController.default.formatClasses$Action(outVars.value.classesOut, vars.value.containerOptionsInLocal.displayOptionsAttr.displayAttr, callContext);

OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:KWrKb3MuWkKwMMyCWZNg9Q", callContext.id);
// Classes = FormatClasses_Display.ClassesOut
outVars.value.classesOut = formatClasses_DisplayVar.value.classesOutOut;
}

// Is Display Flex?
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:txVw0cZkyEe02_F5v8SD5A", callContext.id) && ((vars.value.containerOptionsInLocal.displayOptionsAttr.displayAttr === UBTConnectLibraryModel.staticEntities.uBT_Display.flex) || (vars.value.containerOptionsInLocal.displayOptionsAttr.displayAttr === UBTConnectLibraryModel.staticEntities.uBT_Display.inlineFlex)))) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:z7ozOdh6UUuSzNBWqdrP5Q", callContext.id);
// Execute Action: FormatClasses_AlignItems
formatClasses_AlignItemsVar.value = UBTConnectLibraryController.default.formatClasses$Action(outVars.value.classesOut, vars.value.containerOptionsInLocal.displayOptionsAttr.alignItemsAttr, callContext);

OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:TwEtgeHhl0WEEX7DxO+Bdg", callContext.id);
// Classes = FormatClasses_AlignItems.ClassesOut
outVars.value.classesOut = formatClasses_AlignItemsVar.value.classesOutOut;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:+dSNqOeo3U+Y5i4H+TXiVw", callContext.id);
// Execute Action: FormatClasses_JustifyContent
formatClasses_JustifyContentVar.value = UBTConnectLibraryController.default.formatClasses$Action(outVars.value.classesOut, vars.value.containerOptionsInLocal.displayOptionsAttr.justifyContentAttr, callContext);

OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:Py8wKj9MdUiNXCJk5mTcEA", callContext.id);
// Classes = FormatClasses_JustifyContent.ClassesOut
outVars.value.classesOut = formatClasses_JustifyContentVar.value.classesOutOut;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:dScf4xc0B0e9AWVO_RdZAQ", callContext.id);
// Execute Action: FormatClasses_FlexDirection
formatClasses_FlexDirectionVar.value = UBTConnectLibraryController.default.formatClasses$Action(outVars.value.classesOut, vars.value.containerOptionsInLocal.displayOptionsAttr.flexDirectionAttr, callContext);

OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:NPpEg2d900meTcP9xCykRA", callContext.id);
// Classes = FormatClasses_FlexDirection.ClassesOut
outVars.value.classesOut = formatClasses_FlexDirectionVar.value.classesOutOut;
}

// Has Background Color?
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:w2fyA42OiU+IxNL_8cF4hA", callContext.id) && ((vars.value.containerOptionsInLocal.backgroundAttr.backgroundColorAttr) !== (OS.BuiltinFunctions.nullTextIdentifier())))) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:DVYDjaC6bEqRfdwMi3C25Q", callContext.id);
// Execute Action: FormatClasses
formatClassesVar.value = UBTConnectLibraryController.default.formatClasses$Action(outVars.value.classesOut, OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.getClass_BackgroundColor$Action(vars.value.containerOptionsInLocal.backgroundAttr.backgroundColorAttr, callContext).out_ColorClassOut;
}, OS.DataTypes.DataTypes.Text, callContext.id), callContext);

OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:oLLwK3842kadyWcwhFOnAw", callContext.id);
// Classes = FormatClasses.ClassesOut
outVars.value.classesOut = formatClassesVar.value.classesOutOut;
}

// Has shadow?
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:DOZEtboHKUKOmyC2JMiKuA", callContext.id) && ((vars.value.containerOptionsInLocal.shadowIdAttr) !== (OS.BuiltinFunctions.nullTextIdentifier())))) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:ZNJ6m+Nylk2TcOwGt6aYTw", callContext.id);
// Execute Action: FormatClasses_Shadow
formatClasses_ShadowVar.value = UBTConnectLibraryController.default.formatClasses$Action(outVars.value.classesOut, ("shadow-" + vars.value.containerOptionsInLocal.shadowIdAttr), callContext);

OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:+yCNe6QFZUiJNpX_cJ6BqA", callContext.id);
// Classes = FormatClasses_Shadow.ClassesOut
outVars.value.classesOut = formatClasses_ShadowVar.value.classesOutOut;
}

// Has Visibility Option?
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:_lqQyo_QC0q3+07PCZyScQ", callContext.id) && ((vars.value.containerOptionsInLocal.visibilityAttr) !== (OS.BuiltinFunctions.nullTextIdentifier())))) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:c0o497FFjES2uQSG05B4vw", callContext.id);
// Execute Action: FormatClasses_Visibility
formatClasses_VisibilityVar.value = UBTConnectLibraryController.default.formatClasses$Action(outVars.value.classesOut, OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.getClass_Visibility$Action(vars.value.containerOptionsInLocal.visibilityAttr, callContext).classOut;
}, OS.DataTypes.DataTypes.Text, callContext.id), callContext);

OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:jthN3HhPnkqdF6QZIwe5Vg", callContext.id);
// Classes = FormatClasses_Visibility.ClassesOut
outVars.value.classesOut = formatClasses_VisibilityVar.value.classesOutOut;
}

OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:Ekh65LP5f0KDJvB1w06gkw", callContext.id);
// Execute Action: GetClasses_Border
getClasses_BorderVar.value = UBTConnectLibraryController.default.getClasses_Border$Action(vars.value.containerOptionsInLocal.borderOptionsAttr, callContext);

OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:qfZeI39GpUahtu9KkEXjFw", callContext.id);
// Execute Action: FormatClasses_Border
formatClasses_BorderVar.value = UBTConnectLibraryController.default.formatClasses$Action(outVars.value.classesOut, getClasses_BorderVar.value.classesOut, callContext);

OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:NqjfkbjHHUmNYJLZuObinQ", callContext.id);
// Classes = FormatClasses_Border.ClassesOut
outVars.value.classesOut = formatClasses_BorderVar.value.classesOutOut;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:MsKKhDdzbE2NN_vFq6tiDQ", callContext.id);
// Execute Action: GetClasses_Text
getClasses_TextVar.value = UBTConnectLibraryController.default.getClasses_Text$Action(vars.value.containerOptionsInLocal.textOptionsAttr, callContext);

OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:H9FXF2lGqEi2WWZuK33Z4g", callContext.id);
// Execute Action: FormatClasses_Text
formatClasses_TextVar.value = UBTConnectLibraryController.default.formatClasses$Action(outVars.value.classesOut, getClasses_TextVar.value.classesOut, callContext);

OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:oMMrw1wk7E28mZIHEd0QYw", callContext.id);
// Classes = FormatClasses_Text.ClassesOut
outVars.value.classesOut = formatClasses_TextVar.value.classesOutOut;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:Ell8vRyltEKZASZhPQKI2w", callContext.id);
// Execute Action: GetPaddingOptions
getPaddingOptionsVar.value = UBTConnectLibraryController.default.getSpacingOptions$Action("padding", vars.value.containerOptionsInLocal.paddingSizeAttr, callContext);

OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:SUy2JSOxF0qq542RzvXr1w", callContext.id);
// Execute Action: FormatClasses_Padding
formatClasses_PaddingVar.value = UBTConnectLibraryController.default.formatClasses$Action(outVars.value.classesOut, getPaddingOptionsVar.value.classesOut, callContext);

OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:aCY6oVsHWUOV2zn+k51Szw", callContext.id);
// Classes = FormatClasses_Padding.ClassesOut
outVars.value.classesOut = formatClasses_PaddingVar.value.classesOutOut;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:sWk5jzMXMEWuCK5jzh2bRg", callContext.id);
// Execute Action: GetMarginOptions
getMarginOptionsVar.value = UBTConnectLibraryController.default.getSpacingOptions$Action("margin", vars.value.containerOptionsInLocal.marginSizeAttr, callContext);

OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:BrCCg2Nz90qdL6k19dWYAw", callContext.id);
// Execute Action: FormatClasses_Margin
formatClasses_MarginVar.value = UBTConnectLibraryController.default.formatClasses$Action(outVars.value.classesOut, getMarginOptionsVar.value.classesOut, callContext);

OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:Fxpm3phEQ0umsB4k4QwqeA", callContext.id);
// Classes = FormatClasses_Margin.ClassesOut
outVars.value.classesOut = formatClasses_MarginVar.value.classesOutOut;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:14trEbFUj0SfP4_wzNfzew", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:Yqt4H18c7kqIn4VcUOvIcg", callContext.id);
}

};
var controller = UBTConnectLibraryController.default;
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.GetClasses_Container$vars", [{
name: "ContainerOptions",
attrName: "containerOptionsInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new UBTConnectLibraryModel.ContainerOptionsRec();
},
complexType: UBTConnectLibraryModel.ContainerOptionsRec
}]);
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.GetClasses_Container$outVars", [{
name: "Classes",
attrName: "classesOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnectLibraryController.default.clientActionProxies.getClasses_Container$Action = function (containerOptionsIn) {
containerOptionsIn = (containerOptionsIn === undefined) ? new UBTConnectLibraryModel.ContainerOptionsRec() : containerOptionsIn;
return controller.executeActionInsideJSNode(UBTConnectLibraryController.default.getClasses_Container$Action.bind(controller, containerOptionsIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Classes: OS.DataConversion.JSNodeParamConverter.to(actionResults.classesOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("UBTConnectLibrary.controller$GetClasses_ImageCard", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.controller$GetClasses_AvatarSize", "UBTConnectLibrary.controller$FormatClasses"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryClientVariables) {
var OS = OutSystems.Internal;
UBTConnectLibraryController.default.getClasses_ImageCard$Action = function (in_MainContainerClassIn, in_ImageCardTypeIdIn, in_AvatarSizeIdIn, in_ShowAvatarListIn, in_ExtendedClassIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.GetClasses_ImageCard$vars"))());
vars.value.in_MainContainerClassInLocal = in_MainContainerClassIn;
vars.value.in_ImageCardTypeIdInLocal = in_ImageCardTypeIdIn;
vars.value.in_AvatarSizeIdInLocal = in_AvatarSizeIdIn;
vars.value.in_ShowAvatarListInLocal = in_ShowAvatarListIn;
vars.value.in_ExtendedClassInLocal = in_ExtendedClassIn;
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.GetClasses_ImageCard$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:b0kw7vrA0UW53opxnmXnXA:/ClientActionFlows.b0kw7vrA0UW53opxnmXnXA:nMiWK4GVEAdZaCWa59GC6w", "UBTConnectLibrary", "GetClasses_ImageCard", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:WSZELpVzxkiAfZG3IjAKeg", callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:CSNsUOUqr0mENDNjGA9FCw", callContext.id);
// ClassesOut = FormatClasses(In_MainContainerClass, In_MainContainerClass + "--" + In_ImageCardTypeId)
outVars.value.classesOutOut = OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.formatClasses$Action(vars.value.in_MainContainerClassInLocal, ((vars.value.in_MainContainerClassInLocal + "--") + vars.value.in_ImageCardTypeIdInLocal), callContext).classesOutOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:Tr4m1O7Wq0m8fsQe8OkmXA", callContext.id) && vars.value.in_ShowAvatarListInLocal)) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:yxnPO+Mo+0aDSCp0bT+CmA", callContext.id);
// ClassesOut = FormatClasses(ClassesOut, GetClasses_AvatarSize(In_AvatarSizeId))
outVars.value.classesOutOut = OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.formatClasses$Action(outVars.value.classesOutOut, OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.getClasses_AvatarSize$Action(vars.value.in_AvatarSizeIdInLocal, callContext).classesOutOut;
}, OS.DataTypes.DataTypes.Text, callContext.id), callContext).classesOutOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
}

OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:6_7UPAGGeUeAFjr+LyeNaQ", callContext.id);
// ClassesOut = FormatClasses(ClassesOut, In_ExtendedClass)
outVars.value.classesOutOut = OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.formatClasses$Action(outVars.value.classesOutOut, vars.value.in_ExtendedClassInLocal, callContext).classesOutOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:DJp1SPhs30ahXOy7BLNsgg", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:b0kw7vrA0UW53opxnmXnXA", callContext.id);
}

};
var controller = UBTConnectLibraryController.default;
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.GetClasses_ImageCard$vars", [{
name: "In_MainContainerClass",
attrName: "in_MainContainerClassInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "In_ImageCardTypeId",
attrName: "in_ImageCardTypeIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "In_AvatarSizeId",
attrName: "in_AvatarSizeIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "In_ShowAvatarList",
attrName: "in_ShowAvatarListInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "In_ExtendedClass",
attrName: "in_ExtendedClassInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.GetClasses_ImageCard$outVars", [{
name: "ClassesOut",
attrName: "classesOutOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnectLibraryController.default.clientActionProxies.getClasses_ImageCard$Action = function (in_MainContainerClassIn, in_ImageCardTypeIdIn, in_AvatarSizeIdIn, in_ShowAvatarListIn, in_ExtendedClassIn) {
in_MainContainerClassIn = (in_MainContainerClassIn === undefined) ? "" : in_MainContainerClassIn;
in_ImageCardTypeIdIn = (in_ImageCardTypeIdIn === undefined) ? "" : in_ImageCardTypeIdIn;
in_AvatarSizeIdIn = (in_AvatarSizeIdIn === undefined) ? "" : in_AvatarSizeIdIn;
in_ShowAvatarListIn = (in_ShowAvatarListIn === undefined) ? false : in_ShowAvatarListIn;
in_ExtendedClassIn = (in_ExtendedClassIn === undefined) ? "" : in_ExtendedClassIn;
return controller.executeActionInsideJSNode(UBTConnectLibraryController.default.getClasses_ImageCard$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(in_MainContainerClassIn, OS.DataTypes.DataTypes.Text), in_ImageCardTypeIdIn, in_AvatarSizeIdIn, OS.DataConversion.JSNodeParamConverter.from(in_ShowAvatarListIn, OS.DataTypes.DataTypes.Boolean), OS.DataConversion.JSNodeParamConverter.from(in_ExtendedClassIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
ClassesOut: OS.DataConversion.JSNodeParamConverter.to(actionResults.classesOutOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("UBTConnectLibrary.controller$GetClasses_LazyImageSize", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.controller$FormatClasses"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryClientVariables) {
var OS = OutSystems.Internal;
UBTConnectLibraryController.default.getClasses_LazyImageSize$Action = function (sizeHeightIdIn, sizeHeightBackgroundIdIn, sizeWidthIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.GetClasses_LazyImageSize$vars"))());
vars.value.sizeHeightIdInLocal = sizeHeightIdIn;
vars.value.sizeHeightBackgroundIdInLocal = sizeHeightBackgroundIdIn;
vars.value.sizeWidthIdInLocal = sizeWidthIdIn;
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.GetClasses_LazyImageSize$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:+cT4vD4VqEqNi7bKEfiawA:/ClientActionFlows.+cT4vD4VqEqNi7bKEfiawA:4Q+sp4hqEck3kn6VwOEDAg", "UBTConnectLibrary", "GetClasses_LazyImageSize", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:Qq_VnTBkTUKmeGWENPv9uA", callContext.id);
// Has Size Height Id?
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:xw3LLs3dXEqnJLoht_d6Rw", callContext.id) && ((vars.value.sizeHeightIdInLocal) !== (OS.BuiltinFunctions.nullTextIdentifier())))) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:BF3yOP9qX0OqCj63_q683w", callContext.id);
// ClassesOut = "ubt-lazy-image-" + SizeHeightId
outVars.value.classesOutOut = ("ubt-lazy-image-" + vars.value.sizeHeightIdInLocal);
} else {
// Has Size Height Background Id?
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:HyjwsTSZOkKmzXESJ8mrag", callContext.id) && ((vars.value.sizeHeightBackgroundIdInLocal) !== (OS.BuiltinFunctions.nullTextIdentifier())))) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:7unplrPoUUqNrHHWutrrdw", callContext.id);
// ClassesOut = "ubt-lazy-image-background-" + SizeHeightBackgroundId
outVars.value.classesOutOut = ("ubt-lazy-image-background-" + vars.value.sizeHeightBackgroundIdInLocal);
}

}

// Has Size Width Id?
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:eJ_DrKq28k+049lezc1YfQ", callContext.id) && ((vars.value.sizeWidthIdInLocal) !== (OS.BuiltinFunctions.nullTextIdentifier())))) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:mxiImocS7EK4WRMvBpunKg", callContext.id);
// ClassesOut = FormatClasses(ClassesOut, "ubt-lazy-image--width-" + SizeWidthId)
outVars.value.classesOutOut = OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.formatClasses$Action(outVars.value.classesOutOut, ("ubt-lazy-image--width-" + vars.value.sizeWidthIdInLocal), callContext).classesOutOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:mejNTI5HaUefI0+m33c00g", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:twDaY_qvvE2wUnyc8o1U+w", callContext.id);
}

return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:+cT4vD4VqEqNi7bKEfiawA", callContext.id);
}

};
var controller = UBTConnectLibraryController.default;
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.GetClasses_LazyImageSize$vars", [{
name: "SizeHeightId",
attrName: "sizeHeightIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "SizeHeightBackgroundId",
attrName: "sizeHeightBackgroundIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "SizeWidthId",
attrName: "sizeWidthIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.GetClasses_LazyImageSize$outVars", [{
name: "ClassesOut",
attrName: "classesOutOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnectLibraryController.default.clientActionProxies.getClasses_LazyImageSize$Action = function (sizeHeightIdIn, sizeHeightBackgroundIdIn, sizeWidthIdIn) {
sizeHeightIdIn = (sizeHeightIdIn === undefined) ? "" : sizeHeightIdIn;
sizeHeightBackgroundIdIn = (sizeHeightBackgroundIdIn === undefined) ? "" : sizeHeightBackgroundIdIn;
sizeWidthIdIn = (sizeWidthIdIn === undefined) ? "" : sizeWidthIdIn;
return controller.executeActionInsideJSNode(UBTConnectLibraryController.default.getClasses_LazyImageSize$Action.bind(controller, sizeHeightIdIn, sizeHeightBackgroundIdIn, sizeWidthIdIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
ClassesOut: OS.DataConversion.JSNodeParamConverter.to(actionResults.classesOutOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("UBTConnectLibrary.controller$GetClasses_LazyImageSize_Dev", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.controller$FormatClasses"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryClientVariables) {
var OS = OutSystems.Internal;
UBTConnectLibraryController.default.getClasses_LazyImageSize_Dev$Action = function (heightSizeIdIn, widthSizeIdIn, isNoImageIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.GetClasses_LazyImageSize_Dev$vars"))());
vars.value.heightSizeIdInLocal = heightSizeIdIn;
vars.value.widthSizeIdInLocal = widthSizeIdIn;
vars.value.isNoImageInLocal = isNoImageIn;
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.GetClasses_LazyImageSize_Dev$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:NjikeEpU+UibvbTfYmfdfg:/ClientActionFlows.NjikeEpU+UibvbTfYmfdfg:946PvlauLGTJ9v5nIHu6EA", "UBTConnectLibrary", "GetClasses_LazyImageSize_Dev", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:qlvGz044kk2nFUC+HUeq7Q", callContext.id);
// Is Square?
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:8TgULtFe1Eu_zvNcC9Uk2A", callContext.id) && (((vars.value.widthSizeIdInLocal === UBTConnectLibraryModel.staticEntities.uBT_ImageSize.square) && ((((((vars.value.heightSizeIdInLocal) !== (OS.BuiltinFunctions.nullTextIdentifier())) && ((vars.value.heightSizeIdInLocal) !== (UBTConnectLibraryModel.staticEntities.uBT_ImageSize.square))) && ((vars.value.heightSizeIdInLocal) !== (UBTConnectLibraryModel.staticEntities.uBT_ImageSize.fullHeight_100_Percent))) && ((vars.value.heightSizeIdInLocal) !== (UBTConnectLibraryModel.staticEntities.uBT_ImageSize.fullWidth_100_Percent))) && ((vars.value.heightSizeIdInLocal) !== (UBTConnectLibraryModel.staticEntities.uBT_ImageSize.auto)))) || ((vars.value.heightSizeIdInLocal === UBTConnectLibraryModel.staticEntities.uBT_ImageSize.square) && ((((((vars.value.widthSizeIdInLocal) !== (OS.BuiltinFunctions.nullTextIdentifier())) && ((vars.value.widthSizeIdInLocal) !== (UBTConnectLibraryModel.staticEntities.uBT_ImageSize.square))) && ((vars.value.widthSizeIdInLocal) !== (UBTConnectLibraryModel.staticEntities.uBT_ImageSize.fullWidth_100_Percent))) && ((vars.value.widthSizeIdInLocal) !== (UBTConnectLibraryModel.staticEntities.uBT_ImageSize.fullHeight_100_Percent))) && ((vars.value.widthSizeIdInLocal) !== (UBTConnectLibraryModel.staticEntities.uBT_ImageSize.auto))))))) {
// Set Square scenario
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:EJZDQAFiqkm2uzax1tvBXg", callContext.id);
// ClassesOut = "ubt-lazy-image-" + If
outVars.value.classesOutOut = ("ubt-lazy-image-" + (((vars.value.heightSizeIdInLocal === UBTConnectLibraryModel.staticEntities.uBT_ImageSize.square)) ? ((((vars.value.widthSizeIdInLocal + " ") + "ubt-lazy-image--width-") + UBTConnectLibraryModel.staticEntities.uBT_ImageSize.square)) : ((((vars.value.widthSizeIdInLocal === UBTConnectLibraryModel.staticEntities.uBT_ImageSize.square)) ? ((((vars.value.heightSizeIdInLocal + " ") + "ubt-lazy-image--width-") + UBTConnectLibraryModel.staticEntities.uBT_ImageSize.square)) : ((((UBTConnectLibraryModel.staticEntities.uBT_ImageSize.auto + " ") + "ubt-lazy-image--width-") + UBTConnectLibraryModel.staticEntities.uBT_ImageSize.fullWidth_100_Percent))))));
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:Pe1WD6LszkCkGtCsds1OVg", callContext.id);
} else {
// Has Size Height Id?
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:+ZFK9jolmE+4etQIeyIG5Q", callContext.id) && ((vars.value.heightSizeIdInLocal) !== (OS.BuiltinFunctions.nullTextIdentifier())))) {
// Is Square or Auto?
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:EEpQKJhqwEKn59_Ajdxlcg", callContext.id) && !(((vars.value.heightSizeIdInLocal === UBTConnectLibraryModel.staticEntities.uBT_ImageSize.square) || (vars.value.heightSizeIdInLocal === UBTConnectLibraryModel.staticEntities.uBT_ImageSize.auto))))) {
// Set Height Class & Auto
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:MdygEzL_wE6tJMi6wDQO7w", callContext.id);
// ClassesOut = "ubt-lazy-image-" + HeightSizeId
outVars.value.classesOutOut = ("ubt-lazy-image-" + vars.value.heightSizeIdInLocal);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:MdygEzL_wE6tJMi6wDQO7w", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ClassesOut = If
outVars.value.classesOutOut = ((vars.value.isNoImageInLocal) ? (OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.formatClasses$Action(outVars.value.classesOutOut, ("ubt-background-image--" + UBTConnectLibraryModel.staticEntities.uBT_BackgroundImageSize.intrinsicWidth_3_To_2), callContext).classesOutOut;
}, OS.DataTypes.DataTypes.Text, callContext.id)) : (OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.formatClasses$Action(outVars.value.classesOutOut, ("ubt-lazy-image--width-" + UBTConnectLibraryModel.staticEntities.uBT_ImageSize.auto), callContext).classesOutOut;
}, OS.DataTypes.DataTypes.Text, callContext.id)));
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:J0IhAEOOIEKYgEHBthXwNw", callContext.id);
return outVars.value;

}

}

// Has Size Width Id?
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:WcGUPJWAVEK+VWFiiYXhsg", callContext.id) && ((vars.value.widthSizeIdInLocal) !== (OS.BuiltinFunctions.nullTextIdentifier())))) {
// Is Auto or Square?
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:dlqvcdlTTUaBejpMlWU2kw", callContext.id) && !(((vars.value.widthSizeIdInLocal === UBTConnectLibraryModel.staticEntities.uBT_ImageSize.square) || (vars.value.widthSizeIdInLocal === UBTConnectLibraryModel.staticEntities.uBT_ImageSize.auto))))) {
// Set Width Class & Auto
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:5n0BtnvdVkONAYj64lVE6A", callContext.id);
// ClassesOut = "ubt-lazy-image--width-" + WidthSizeId
outVars.value.classesOutOut = ("ubt-lazy-image--width-" + vars.value.widthSizeIdInLocal);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:5n0BtnvdVkONAYj64lVE6A", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ClassesOut = If
outVars.value.classesOutOut = ((vars.value.isNoImageInLocal) ? (OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.formatClasses$Action(outVars.value.classesOutOut, ("ubt-background-image--" + UBTConnectLibraryModel.staticEntities.uBT_BackgroundImageSize.intrinsicHeight_2_To_3), callContext).classesOutOut;
}, OS.DataTypes.DataTypes.Text, callContext.id)) : (OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.formatClasses$Action(outVars.value.classesOutOut, ("ubt-lazy-image-" + UBTConnectLibraryModel.staticEntities.uBT_ImageSize.auto), callContext).classesOutOut;
}, OS.DataTypes.DataTypes.Text, callContext.id)));
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:V3VhLkrX+EGszUqyxxXr6w", callContext.id);
return outVars.value;

}

}

OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:wUrSArcPIECnKdb8mUgvsA", callContext.id);
// ClassesOut = "ubt-lazy-image-" + Auto + " " + "ubt-lazy-image--width-" + FullWidth_100_Percent
outVars.value.classesOutOut = (((("ubt-lazy-image-" + UBTConnectLibraryModel.staticEntities.uBT_ImageSize.auto) + " ") + "ubt-lazy-image--width-") + UBTConnectLibraryModel.staticEntities.uBT_ImageSize.fullWidth_100_Percent);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:KqiK+vqDJE+sqmUA7g9mVA", callContext.id);
}

return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:NjikeEpU+UibvbTfYmfdfg", callContext.id);
}

};
var controller = UBTConnectLibraryController.default;
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.GetClasses_LazyImageSize_Dev$vars", [{
name: "HeightSizeId",
attrName: "heightSizeIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "WidthSizeId",
attrName: "widthSizeIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "IsNoImage",
attrName: "isNoImageInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.GetClasses_LazyImageSize_Dev$outVars", [{
name: "ClassesOut",
attrName: "classesOutOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnectLibraryController.default.clientActionProxies.getClasses_LazyImageSize_Dev$Action = function (heightSizeIdIn, widthSizeIdIn, isNoImageIn) {
heightSizeIdIn = (heightSizeIdIn === undefined) ? "" : heightSizeIdIn;
widthSizeIdIn = (widthSizeIdIn === undefined) ? "" : widthSizeIdIn;
isNoImageIn = (isNoImageIn === undefined) ? false : isNoImageIn;
return controller.executeActionInsideJSNode(UBTConnectLibraryController.default.getClasses_LazyImageSize_Dev$Action.bind(controller, heightSizeIdIn, widthSizeIdIn, OS.DataConversion.JSNodeParamConverter.from(isNoImageIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
ClassesOut: OS.DataConversion.JSNodeParamConverter.to(actionResults.classesOutOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("UBTConnectLibrary.controller$GetClasses_Text", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.controller$FormatClasses", "UBTConnectLibrary.controller$GetClass_Color", "UBTConnectLibrary.model$TextOptionsRec"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryClientVariables) {
var OS = OutSystems.Internal;
UBTConnectLibraryController.default.getClasses_Text$Action = function (textOptionsIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.GetClasses_Text$vars"))());
vars.value.textOptionsInLocal = textOptionsIn.clone();
var formatClasses5Var = new OS.DataTypes.VariableHolder();
var formatClasses6Var = new OS.DataTypes.VariableHolder();
var formatClasses2Var = new OS.DataTypes.VariableHolder();
var formatClassesVar = new OS.DataTypes.VariableHolder();
var formatClasses3Var = new OS.DataTypes.VariableHolder();
var formatClasses4Var = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.GetClasses_Text$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.formatClasses5Var = formatClasses5Var;
varBag.formatClasses6Var = formatClasses6Var;
varBag.formatClasses2Var = formatClasses2Var;
varBag.formatClassesVar = formatClassesVar;
varBag.formatClasses3Var = formatClasses3Var;
varBag.formatClasses4Var = formatClasses4Var;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:pjiDGeXdyE2vUUE9wT43tA:/ClientActionFlows.pjiDGeXdyE2vUUE9wT43tA:lcHNghPThsLoMItL35Nrrw", "UBTConnectLibrary", "GetClasses_Text", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:EjWa8POzNUul94uFOFWxnw", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:6kVYcgPKuka0VTKJg6MXXQ", callContext.id) && ((vars.value.textOptionsInLocal.colorAttr) !== (OS.BuiltinFunctions.nullTextIdentifier())))) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:COFUkiqmakGZ9dtqj1h0Ww", callContext.id);
// Execute Action: FormatClasses
formatClassesVar.value = UBTConnectLibraryController.default.formatClasses$Action(outVars.value.classesOut, OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.getClass_Color$Action(vars.value.textOptionsInLocal.colorAttr, callContext).out_ColorClassOut;
}, OS.DataTypes.DataTypes.Text, callContext.id), callContext);

OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:tzuV7a+0bka57uKTRQfPXA", callContext.id);
// Classes = FormatClasses.ClassesOut
outVars.value.classesOut = formatClassesVar.value.classesOutOut;
}

if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:W8N6eBEFVU2j2UR7UVsuoQ", callContext.id) && ((vars.value.textOptionsInLocal.fontWeightAttr) !== (OS.BuiltinFunctions.nullTextIdentifier())))) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:MRiBURCgGUOIaloAKXY6vg", callContext.id);
// Execute Action: FormatClasses2
formatClasses2Var.value = UBTConnectLibraryController.default.formatClasses$Action(outVars.value.classesOut, ("font-" + vars.value.textOptionsInLocal.fontWeightAttr), callContext);

OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:DEfkjcQDuk6JnRJ3dad3IQ", callContext.id);
// Classes = FormatClasses2.ClassesOut
outVars.value.classesOut = formatClasses2Var.value.classesOutOut;
}

if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:5zU8_wPc2EyO4kxHvjQaHg", callContext.id) && ((vars.value.textOptionsInLocal.fontSizeAttr) !== (OS.BuiltinFunctions.nullTextIdentifier())))) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:R_sK5202ik2HqOYwHG1zLQ", callContext.id);
// Execute Action: FormatClasses3
formatClasses3Var.value = UBTConnectLibraryController.default.formatClasses$Action(outVars.value.classesOut, ("font-size-" + vars.value.textOptionsInLocal.fontSizeAttr), callContext);

OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:tIvpDJoj+0myKq6FK+W8CQ", callContext.id);
// Classes = FormatClasses3.ClassesOut
outVars.value.classesOut = formatClasses3Var.value.classesOutOut;
}

if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:S_RZxqmaaUiGp8xuqcHkbw", callContext.id) && vars.value.textOptionsInLocal.isItalicAttr)) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:95Oo8OCksE6Ky1ZHc_Qrsw", callContext.id);
// Execute Action: FormatClasses4
formatClasses4Var.value = UBTConnectLibraryController.default.formatClasses$Action(outVars.value.classesOut, "italic", callContext);

OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:Fd+JsCTmY0qnHYcehxH6Jw", callContext.id);
// Classes = FormatClasses4.ClassesOut
outVars.value.classesOut = formatClasses4Var.value.classesOutOut;
}

if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:vYUmDHCfrECzeQ7a8Ig8Zg", callContext.id) && vars.value.textOptionsInLocal.isUnderlinedAttr)) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:u0_KBqpqLkGPscMWSFk5XA", callContext.id);
// Execute Action: FormatClasses5
formatClasses5Var.value = UBTConnectLibraryController.default.formatClasses$Action(outVars.value.classesOut, "text-underline", callContext);

OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:FKWuiFZp30mOrnnjwbTLBg", callContext.id);
// Classes = FormatClasses5.ClassesOut
outVars.value.classesOut = formatClasses5Var.value.classesOutOut;
}

if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:yHxAsxo6e0CFM88uUaporg", callContext.id) && vars.value.textOptionsInLocal.isOverflowEllipsisAttr)) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:olJMRwAA5Ey9cjnqOT097g", callContext.id);
// Execute Action: FormatClasses6
formatClasses6Var.value = UBTConnectLibraryController.default.formatClasses$Action(outVars.value.classesOut, "ubt-custom-text-ellipsis", callContext);

OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:aN6tFVCmU0GC1UpVLC15Dg", callContext.id);
// Classes = FormatClasses6.ClassesOut
outVars.value.classesOut = formatClasses6Var.value.classesOutOut;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:EQWZGd_6X02XreSKna_P1g", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:EQWZGd_6X02XreSKna_P1g", callContext.id);
}

return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:pjiDGeXdyE2vUUE9wT43tA", callContext.id);
}

};
var controller = UBTConnectLibraryController.default;
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.GetClasses_Text$vars", [{
name: "TextOptions",
attrName: "textOptionsInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new UBTConnectLibraryModel.TextOptionsRec();
},
complexType: UBTConnectLibraryModel.TextOptionsRec
}]);
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.GetClasses_Text$outVars", [{
name: "Classes",
attrName: "classesOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnectLibraryController.default.clientActionProxies.getClasses_Text$Action = function (textOptionsIn) {
textOptionsIn = (textOptionsIn === undefined) ? new UBTConnectLibraryModel.TextOptionsRec() : textOptionsIn;
return controller.executeActionInsideJSNode(UBTConnectLibraryController.default.getClasses_Text$Action.bind(controller, textOptionsIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Classes: OS.DataConversion.JSNodeParamConverter.to(actionResults.classesOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("UBTConnectLibrary.controller$GetClasses_UBTSkeletonElement", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.clientVariables"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryClientVariables) {
var OS = OutSystems.Internal;
UBTConnectLibraryController.default.getClasses_UBTSkeletonElement$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.GetClasses_UBTSkeletonElement$outVars"))());
varBag.callContext = callContext;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:y0voSwq6p0ejeU4mbRORbQ:/ClientActionFlows.y0voSwq6p0ejeU4mbRORbQ:Xqy47Gk_0TEKlPhN+Xb+gg", "UBTConnectLibrary", "GetClasses_UBTSkeletonElement", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:tI_Tq9txXU+WOq4Lwuecvw", callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:hM8vZ45SV0K8y6Kr0xAABA", callContext.id);
// Classes = "ubt-skeleton-section__element"
outVars.value.classesOut = "ubt-skeleton-section__element";
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:yV4e9jUNTku5x5xj74X6xw", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:y0voSwq6p0ejeU4mbRORbQ", callContext.id);
}

};
var controller = UBTConnectLibraryController.default;
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.GetClasses_UBTSkeletonElement$outVars", [{
name: "Classes",
attrName: "classesOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnectLibraryController.default.clientActionProxies.getClasses_UBTSkeletonElement$Action = function () {
return controller.executeActionInsideJSNode(UBTConnectLibraryController.default.getClasses_UBTSkeletonElement$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Classes: OS.DataConversion.JSNodeParamConverter.to(actionResults.classesOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("UBTConnectLibrary.controller$GetClasses_UBTSkeletonSection", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.clientVariables"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryClientVariables) {
var OS = OutSystems.Internal;
UBTConnectLibraryController.default.getClasses_UBTSkeletonSection$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.GetClasses_UBTSkeletonSection$outVars"))());
varBag.callContext = callContext;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:IqUOMUo77ky5K9BxQ6HP0g:/ClientActionFlows.IqUOMUo77ky5K9BxQ6HP0g:rfGpq1eXyindkOD1h6+bYw", "UBTConnectLibrary", "GetClasses_UBTSkeletonSection", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:fI51xVoIdUCcLv1hTOuN_w", callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:Iv9NKJj9sEWX_zr+RtBB4Q", callContext.id);
// Classes = "ubt-skeleton-section"
outVars.value.classesOut = "ubt-skeleton-section";
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:N4R_KGJG2EW3o8UJdePKxg", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:IqUOMUo77ky5K9BxQ6HP0g", callContext.id);
}

};
var controller = UBTConnectLibraryController.default;
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.GetClasses_UBTSkeletonSection$outVars", [{
name: "Classes",
attrName: "classesOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnectLibraryController.default.clientActionProxies.getClasses_UBTSkeletonSection$Action = function () {
return controller.executeActionInsideJSNode(UBTConnectLibraryController.default.getClasses_UBTSkeletonSection$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Classes: OS.DataConversion.JSNodeParamConverter.to(actionResults.classesOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("UBTConnectLibrary.controller$GetColumnOptions_Button", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.model$ColumnOptionsRec"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryClientVariables) {
var OS = OutSystems.Internal;
UBTConnectLibraryController.default.getColumnOptions_Button$Action = function (in_ButtonSizeIdIn, in_TextIn, in_IconMiddleIn, in_IconLeftIn, in_IconRightIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.GetColumnOptions_Button$vars"))());
vars.value.in_ButtonSizeIdInLocal = in_ButtonSizeIdIn;
vars.value.in_TextInLocal = in_TextIn;
vars.value.in_IconMiddleInLocal = in_IconMiddleIn;
vars.value.in_IconLeftInLocal = in_IconLeftIn;
vars.value.in_IconRightInLocal = in_IconRightIn;
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.GetColumnOptions_Button$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:7nlzFjSeD0uBAwCXB91+wA:/ClientActionFlows.7nlzFjSeD0uBAwCXB91+wA:Wlu+4lYpMoKBF6h5hZINew", "UBTConnectLibrary", "GetColumnOptions_Button", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:P06pTUAVm0CCNxVIZ21RBQ", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:ch2D7gCqVkas9_OWqbYk3Q", callContext.id) && ((vars.value.in_ButtonSizeIdInLocal) !== (UBTConnectLibraryModel.staticEntities.uBT_ButtonSize.extraSmall)))) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:g0aSoHHMR0yjzDotCtE4gA", callContext.id);
// Out_ColumnOptions.SpacingSize = ExtraSmall
outVars.value.out_ColumnOptionsOut.spacingSizeAttr = UBTConnectLibraryModel.staticEntities.uBT_Size.extraSmall;
} else {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:smtUHWBA4kmrdAGX1lO4MQ", callContext.id);
// Out_ColumnOptions.SpacingSize = Base
outVars.value.out_ColumnOptionsOut.spacingSizeAttr = UBTConnectLibraryModel.staticEntities.uBT_Size.base;
}

if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:kI4+Suejr0Oa2B7A05ZCjQ", callContext.id) && (((((vars.value.in_TextInLocal) !== ("")) || ((vars.value.in_IconMiddleInLocal) !== (OS.BuiltinFunctions.nullTextIdentifier()))) && ((vars.value.in_IconLeftInLocal) !== (OS.BuiltinFunctions.nullTextIdentifier()))) && ((vars.value.in_IconRightInLocal) !== (OS.BuiltinFunctions.nullTextIdentifier()))))) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:DE17JtkIy0+jLvNwxX9Hbg", callContext.id);
} else {
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:HY8t9Kq45U66WK9KU1mlMA", callContext.id) && ((((vars.value.in_TextInLocal) !== ("")) || ((vars.value.in_IconMiddleInLocal) !== (OS.BuiltinFunctions.nullTextIdentifier()))) && ((vars.value.in_IconLeftInLocal) !== (OS.BuiltinFunctions.nullTextIdentifier()))))) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:dCAwKkXkLE+92OrtsBn2xg", callContext.id);
// Out_ColumnOptions.ColumnBehaviour = ReduceLast
outVars.value.out_ColumnOptionsOut.columnBehaviourAttr = UBTConnectLibraryModel.staticEntities.uBT_ColumnBehaviour.reduceLast;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:qChesD9ztE2FiH8V7ONzmw", callContext.id);
} else {
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:RRXWOFPx7E+fLf8Xy0CMmg", callContext.id) && ((((vars.value.in_TextInLocal) !== ("")) || ((vars.value.in_IconMiddleInLocal) !== (OS.BuiltinFunctions.nullTextIdentifier()))) && ((vars.value.in_IconRightInLocal) !== (OS.BuiltinFunctions.nullTextIdentifier()))))) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:9YxbzdQuUEuTkyDFdHjWnw", callContext.id);
// Out_ColumnOptions.ColumnBehaviour = ReduceFirst
outVars.value.out_ColumnOptionsOut.columnBehaviourAttr = UBTConnectLibraryModel.staticEntities.uBT_ColumnBehaviour.reduceFirst;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:pIHNooeRgkG4hbOu852jxw", callContext.id);
} else {
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:o8kPwsomF0WSt7hl484Ezw", callContext.id) && (((vars.value.in_TextInLocal) !== ("")) || ((vars.value.in_IconMiddleInLocal) !== (OS.BuiltinFunctions.nullTextIdentifier()))))) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:f52fbqTy2EO8tESBOdeRig", callContext.id);
// Out_ColumnOptions.ColumnBehaviour = ExpandMiddle
outVars.value.out_ColumnOptionsOut.columnBehaviourAttr = UBTConnectLibraryModel.staticEntities.uBT_ColumnBehaviour.expandMiddle;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:vpsDoLh+oEuAOgQqlin4uw", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:JLBMBKPKL06NOuy4_6RrcA", callContext.id);
}

}

}

}

return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:7nlzFjSeD0uBAwCXB91+wA", callContext.id);
}

};
var controller = UBTConnectLibraryController.default;
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.GetColumnOptions_Button$vars", [{
name: "In_ButtonSizeId",
attrName: "in_ButtonSizeIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "In_Text",
attrName: "in_TextInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "In_IconMiddle",
attrName: "in_IconMiddleInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "In_IconLeft",
attrName: "in_IconLeftInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "In_IconRight",
attrName: "in_IconRightInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.GetColumnOptions_Button$outVars", [{
name: "Out_ColumnOptions",
attrName: "out_ColumnOptionsOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new UBTConnectLibraryModel.ColumnOptionsRec();
},
complexType: UBTConnectLibraryModel.ColumnOptionsRec
}]);
UBTConnectLibraryController.default.clientActionProxies.getColumnOptions_Button$Action = function (in_ButtonSizeIdIn, in_TextIn, in_IconMiddleIn, in_IconLeftIn, in_IconRightIn) {
in_ButtonSizeIdIn = (in_ButtonSizeIdIn === undefined) ? "" : in_ButtonSizeIdIn;
in_TextIn = (in_TextIn === undefined) ? "" : in_TextIn;
in_IconMiddleIn = (in_IconMiddleIn === undefined) ? "" : in_IconMiddleIn;
in_IconLeftIn = (in_IconLeftIn === undefined) ? "" : in_IconLeftIn;
in_IconRightIn = (in_IconRightIn === undefined) ? "" : in_IconRightIn;
return controller.executeActionInsideJSNode(UBTConnectLibraryController.default.getColumnOptions_Button$Action.bind(controller, in_ButtonSizeIdIn, OS.DataConversion.JSNodeParamConverter.from(in_TextIn, OS.DataTypes.DataTypes.Text), in_IconMiddleIn, in_IconLeftIn, in_IconRightIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Out_ColumnOptions: actionResults.out_ColumnOptionsOut
};
});
};
});

define("UBTConnectLibrary.controller$GetConnectDateFormat", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.model$DateComponentFormatRec", "UBTConnectLibrary.controller$GetConnectDateFormat_Components", "UBTConnectLibrary.controller$GetConnectDateFormat_DayMonth"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryClientVariables) {
var OS = OutSystems.Internal;
UBTConnectLibraryController.default.getConnectDateFormat$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var getConnectDateFormat_ComponentsVar = new OS.DataTypes.VariableHolder();
var getConnectDateFormat_DayMonthVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.GetConnectDateFormat$outVars"))());
varBag.callContext = callContext;
varBag.getConnectDateFormat_ComponentsVar = getConnectDateFormat_ComponentsVar;
varBag.getConnectDateFormat_DayMonthVar = getConnectDateFormat_DayMonthVar;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:iKdjt6BE0EeNH6gourUarg:/ClientActionFlows.iKdjt6BE0EeNH6gourUarg:pBMkplAoJpp+_I8UEpREkA", "UBTConnectLibrary", "GetConnectDateFormat", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:CCg3ki6EEEapu+MoArzQfg", callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:n_Nz+FBQw0Or3wKAWQyrkg", callContext.id);
// Execute Action: GetConnectDateFormat_DayMonth
getConnectDateFormat_DayMonthVar.value = UBTConnectLibraryController.default.getConnectDateFormat_DayMonth$Action(callContext);

OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:kZ+sbFfaBkWdWv4e7USU0Q", callContext.id);
// Execute Action: GetConnectDateFormat_Components
getConnectDateFormat_ComponentsVar.value = UBTConnectLibraryController.default.getConnectDateFormat_Components$Action(callContext);

OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:cFBVvEPKTkS6bddnhOEOhA", callContext.id);
// Out_DateFormat = GetConnectDateFormat_Components.Out_ComponentFormats.WeekDayFormat + ", " + GetConnectDateFormat_DayMonth.Out_DayMonthFormat
outVars.value.out_DateFormatOut = ((getConnectDateFormat_ComponentsVar.value.out_ComponentFormatsOut.weekDayFormatAttr + ", ") + getConnectDateFormat_DayMonthVar.value.out_DayMonthFormatOut);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:OE7SAtG_002zotpO2j1eOQ", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:iKdjt6BE0EeNH6gourUarg", callContext.id);
}

};
var controller = UBTConnectLibraryController.default;
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.GetConnectDateFormat$outVars", [{
name: "Out_DateFormat",
attrName: "out_DateFormatOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnectLibraryController.default.clientActionProxies.getConnectDateFormat$Action = function () {
return controller.executeActionInsideJSNode(UBTConnectLibraryController.default.getConnectDateFormat$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Out_DateFormat: OS.DataConversion.JSNodeParamConverter.to(actionResults.out_DateFormatOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("UBTConnectLibrary.controller$GetConnectDateFormat_Components", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.model$DateComponentFormatRec"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryClientVariables) {
var OS = OutSystems.Internal;
UBTConnectLibraryController.default.getConnectDateFormat_Components$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.GetConnectDateFormat_Components$outVars"))());
varBag.callContext = callContext;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:rPtbyau8JECvsh5GcaaQCA:/ClientActionFlows.rPtbyau8JECvsh5GcaaQCA:AkIH+On8_SChwFL2ZId1MA", "UBTConnectLibrary", "GetConnectDateFormat_Components", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:MV3EiM4hZES3FD_OErJ7rQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:cRmLR7fzhEuzr_rbsoLbeA", callContext.id);
// Out_ComponentFormats = Out_ComponentFormats
outVars.value.out_ComponentFormatsOut = outVars.value.out_ComponentFormatsOut;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:V3JIpYwu00uJMMnx2Xubyg", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:rPtbyau8JECvsh5GcaaQCA", callContext.id);
}

};
var controller = UBTConnectLibraryController.default;
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.GetConnectDateFormat_Components$outVars", [{
name: "Out_ComponentFormats",
attrName: "out_ComponentFormatsOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new UBTConnectLibraryModel.DateComponentFormatRec();
},
complexType: UBTConnectLibraryModel.DateComponentFormatRec
}]);
UBTConnectLibraryController.default.clientActionProxies.getConnectDateFormat_Components$Action = function () {
return controller.executeActionInsideJSNode(UBTConnectLibraryController.default.getConnectDateFormat_Components$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Out_ComponentFormats: actionResults.out_ComponentFormatsOut
};
});
};
});

define("UBTConnectLibrary.controller$GetConnectDateFormat_DayMonth", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.model$DateComponentFormatRec", "UBTConnectLibrary.controller$GetConnectDateFormat_Components"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryClientVariables) {
var OS = OutSystems.Internal;
UBTConnectLibraryController.default.getConnectDateFormat_DayMonth$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var getConnectDateFormat_ComponentsVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.GetConnectDateFormat_DayMonth$outVars"))());
varBag.callContext = callContext;
varBag.getConnectDateFormat_ComponentsVar = getConnectDateFormat_ComponentsVar;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:p_wdNSGZo0SbNnoG8vjlYg:/ClientActionFlows.p_wdNSGZo0SbNnoG8vjlYg:U2T1tRfqmUrrR6n67JT0HA", "UBTConnectLibrary", "GetConnectDateFormat_DayMonth", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:ErXBBg9caUOgDzCUQKc1RQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:Vuk60BbZ1U+DBvQNA6KSIA", callContext.id);
// Execute Action: GetConnectDateFormat_Components
getConnectDateFormat_ComponentsVar.value = UBTConnectLibraryController.default.getConnectDateFormat_Components$Action(callContext);

OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:5KhwtrPeu0W2HH7YhyAqJg", callContext.id);
// Out_DayMonthFormat = GetConnectDateFormat_Components.Out_ComponentFormats.DayFormat + " " + GetConnectDateFormat_Components.Out_ComponentFormats.MonthFormat
outVars.value.out_DayMonthFormatOut = ((getConnectDateFormat_ComponentsVar.value.out_ComponentFormatsOut.dayFormatAttr + " ") + getConnectDateFormat_ComponentsVar.value.out_ComponentFormatsOut.monthFormatAttr);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:tPkwDeRrl0mt8N_HkZpeiA", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:p_wdNSGZo0SbNnoG8vjlYg", callContext.id);
}

};
var controller = UBTConnectLibraryController.default;
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.GetConnectDateFormat_DayMonth$outVars", [{
name: "Out_DayMonthFormat",
attrName: "out_DayMonthFormatOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnectLibraryController.default.clientActionProxies.getConnectDateFormat_DayMonth$Action = function () {
return controller.executeActionInsideJSNode(UBTConnectLibraryController.default.getConnectDateFormat_DayMonth$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Out_DayMonthFormat: OS.DataConversion.JSNodeParamConverter.to(actionResults.out_DayMonthFormatOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("UBTConnectLibrary.controller$GetConnectTimeFormat", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.clientVariables"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryClientVariables) {
var OS = OutSystems.Internal;
UBTConnectLibraryController.default.getConnectTimeFormat$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.GetConnectTimeFormat$outVars"))());
varBag.callContext = callContext;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:8JmjG3lRqkSDQvGGmKO95w:/ClientActionFlows.8JmjG3lRqkSDQvGGmKO95w:ZHj4Im2VkZlCsPk83_WBQg", "UBTConnectLibrary", "GetConnectTimeFormat", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:2GEeRz_AnkCdIOBkAnRlCA", callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:3XU9cjC3gUqUmwiu0ytfDA", callContext.id);
// Out_TimeFormat = "hh:mm tt"
outVars.value.out_TimeFormatOut = "hh:mm tt";
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:TeM7gldUmUq752y1dY_unQ", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:8JmjG3lRqkSDQvGGmKO95w", callContext.id);
}

};
var controller = UBTConnectLibraryController.default;
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.GetConnectTimeFormat$outVars", [{
name: "Out_TimeFormat",
attrName: "out_TimeFormatOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnectLibraryController.default.clientActionProxies.getConnectTimeFormat$Action = function () {
return controller.executeActionInsideJSNode(UBTConnectLibraryController.default.getConnectTimeFormat$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Out_TimeFormat: OS.DataConversion.JSNodeParamConverter.to(actionResults.out_TimeFormatOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("UBTConnectLibrary.controller$GetConnectWeekdayLabel_ByDate", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.model$WeekdayLabelTypeRec", "UBTConnectLibrary.controller$GetConnectWeekdayLabel_ByDayOfWeek"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryClientVariables) {
var OS = OutSystems.Internal;
UBTConnectLibraryController.default.getConnectWeekdayLabel_ByDate$Action = function (in_DateIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.GetConnectWeekdayLabel_ByDate$vars"))());
vars.value.in_DateInLocal = in_DateIn;
var getConnectWeekdayLabel_ByDayOfWeekVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.GetConnectWeekdayLabel_ByDate$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getConnectWeekdayLabel_ByDayOfWeekVar = getConnectWeekdayLabel_ByDayOfWeekVar;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:cZKDy5eB1EicqqBIORD2bA:/ClientActionFlows.cZKDy5eB1EicqqBIORD2bA:0E1sjbsUOyUm8PuG0MwfCw", "UBTConnectLibrary", "GetConnectWeekdayLabel_ByDate", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:1vQlPQJiV0+Q1e0hG4U56A", callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:a9wC5uEMGE+oHvNicXlwww", callContext.id);
// Execute Action: GetConnectWeekdayLabel_ByDayOfWeek
getConnectWeekdayLabel_ByDayOfWeekVar.value = UBTConnectLibraryController.default.getConnectWeekdayLabel_ByDayOfWeek$Action(OS.BuiltinFunctions.dayOfWeek(vars.value.in_DateInLocal), callContext);

OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:Kmw15jRxPkC6NDGbubyYoA", callContext.id);
// Out_WeekdayLabel = GetConnectWeekdayLabel_ByDayOfWeek.Out_WeekdayLabel
outVars.value.out_WeekdayLabelOut = getConnectWeekdayLabel_ByDayOfWeekVar.value.out_WeekdayLabelOut;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:gjG5q8Xci0OOJPWwFAqBMA", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:cZKDy5eB1EicqqBIORD2bA", callContext.id);
}

};
var controller = UBTConnectLibraryController.default;
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.GetConnectWeekdayLabel_ByDate$vars", [{
name: "In_Date",
attrName: "in_DateInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Date,
defaultValue: function () {
return OS.DataTypes.DateTime.defaultValue;
}
}]);
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.GetConnectWeekdayLabel_ByDate$outVars", [{
name: "Out_WeekdayLabel",
attrName: "out_WeekdayLabelOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new UBTConnectLibraryModel.WeekdayLabelTypeRec();
},
complexType: UBTConnectLibraryModel.WeekdayLabelTypeRec
}]);
UBTConnectLibraryController.default.clientActionProxies.getConnectWeekdayLabel_ByDate$Action = function (in_DateIn) {
in_DateIn = (in_DateIn === undefined) ? OS.DataTypes.DateTime.defaultValue : in_DateIn;
return controller.executeActionInsideJSNode(UBTConnectLibraryController.default.getConnectWeekdayLabel_ByDate$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(in_DateIn, OS.DataTypes.DataTypes.Date)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Out_WeekdayLabel: actionResults.out_WeekdayLabelOut
};
});
};
});

define("UBTConnectLibrary.controller$GetConnectWeekdayLabel_ByDayOfWeek", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.model$WeekdayLabelTypeRec"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryClientVariables) {
var OS = OutSystems.Internal;
UBTConnectLibraryController.default.getConnectWeekdayLabel_ByDayOfWeek$Action = function (in_DayOfWeekIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.GetConnectWeekdayLabel_ByDayOfWeek$vars"))());
vars.value.in_DayOfWeekInLocal = in_DayOfWeekIn;
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.GetConnectWeekdayLabel_ByDayOfWeek$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:jFkoXsvCCUmyvjmxWSHXTg:/ClientActionFlows.jFkoXsvCCUmyvjmxWSHXTg:8XyC5gTfuqH3dydKXPNtCw", "UBTConnectLibrary", "GetConnectWeekdayLabel_ByDayOfWeek", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:_1mZjkH22U+a_P4H9m9DwQ", callContext.id);
// Sunday?
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:rGFpmQEqBUmzBEDOvCiDVQ", callContext.id) && (vars.value.in_DayOfWeekInLocal === 0))) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:5n+XaeAwSEGjj81ItcbtlQ", callContext.id);
// Out_WeekdayLabel.LongLabel = "Lord's Day"
outVars.value.out_WeekdayLabelOut.longLabelAttr = "Lord\'s Day";
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:5n+XaeAwSEGjj81ItcbtlQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Out_WeekdayLabel.ShortLabel = "LD"
outVars.value.out_WeekdayLabelOut.shortLabelAttr = "LD";
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:5n+XaeAwSEGjj81ItcbtlQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Out_WeekdayLabel.Initials = "LD"
outVars.value.out_WeekdayLabelOut.initialsAttr = "LD";
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:5n+XaeAwSEGjj81ItcbtlQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// Out_WeekdayLabel.Number = 0
outVars.value.out_WeekdayLabelOut.numberAttr = "0";
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:DZ_5_Ga4nU2fLMHNgEdUkA", callContext.id);
} else {
// Monday?
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:PBbKMn4p8EeSyUIGu_YhKg", callContext.id) && (vars.value.in_DayOfWeekInLocal === 1))) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:PLr0NPrcN0G12qhhUrV3Vg", callContext.id);
// Out_WeekdayLabel.LongLabel = "Monday"
outVars.value.out_WeekdayLabelOut.longLabelAttr = "Monday";
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:PLr0NPrcN0G12qhhUrV3Vg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Out_WeekdayLabel.ShortLabel = "Mon"
outVars.value.out_WeekdayLabelOut.shortLabelAttr = "Mon";
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:PLr0NPrcN0G12qhhUrV3Vg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Out_WeekdayLabel.Initials = "M"
outVars.value.out_WeekdayLabelOut.initialsAttr = "M";
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:PLr0NPrcN0G12qhhUrV3Vg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// Out_WeekdayLabel.Number = 1
outVars.value.out_WeekdayLabelOut.numberAttr = "1";
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:OZ8wNvKwpUiqPKZeNno7pQ", callContext.id);
} else {
// Tuesday?
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:Eq9gUDZHaUiV1k3JBJ4M2A", callContext.id) && (vars.value.in_DayOfWeekInLocal === 2))) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:Ht6srt_Ny0eN1qjLUkHHRQ", callContext.id);
// Out_WeekdayLabel.LongLabel = "Tuesday"
outVars.value.out_WeekdayLabelOut.longLabelAttr = "Tuesday";
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:Ht6srt_Ny0eN1qjLUkHHRQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Out_WeekdayLabel.ShortLabel = "Tue"
outVars.value.out_WeekdayLabelOut.shortLabelAttr = "Tue";
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:Ht6srt_Ny0eN1qjLUkHHRQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Out_WeekdayLabel.Initials = "T"
outVars.value.out_WeekdayLabelOut.initialsAttr = "T";
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:Ht6srt_Ny0eN1qjLUkHHRQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// Out_WeekdayLabel.Number = 2
outVars.value.out_WeekdayLabelOut.numberAttr = "2";
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:FQFGjjYSLkeEyzxf5XV2tw", callContext.id);
} else {
// Wednesday?
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:VE3An_OXS0iks2HmE0Q8BQ", callContext.id) && (vars.value.in_DayOfWeekInLocal === 3))) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:402mCl+E6Uew_Q45G8axnw", callContext.id);
// Out_WeekdayLabel.LongLabel = "Wednesday"
outVars.value.out_WeekdayLabelOut.longLabelAttr = "Wednesday";
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:402mCl+E6Uew_Q45G8axnw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Out_WeekdayLabel.ShortLabel = "Wed"
outVars.value.out_WeekdayLabelOut.shortLabelAttr = "Wed";
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:402mCl+E6Uew_Q45G8axnw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Out_WeekdayLabel.Initials = "W"
outVars.value.out_WeekdayLabelOut.initialsAttr = "W";
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:402mCl+E6Uew_Q45G8axnw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// Out_WeekdayLabel.Number = 3
outVars.value.out_WeekdayLabelOut.numberAttr = "3";
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:J3z2jgYQaEuVFEa+44Zf1w", callContext.id);
} else {
// Thursday?
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:RoInOA1KzEGMySf8YZnFXg", callContext.id) && (vars.value.in_DayOfWeekInLocal === 4))) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:abZ8YTXVrkakQA0Mn7CPOA", callContext.id);
// Out_WeekdayLabel.LongLabel = "Thursday"
outVars.value.out_WeekdayLabelOut.longLabelAttr = "Thursday";
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:abZ8YTXVrkakQA0Mn7CPOA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Out_WeekdayLabel.ShortLabel = "Thu"
outVars.value.out_WeekdayLabelOut.shortLabelAttr = "Thu";
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:abZ8YTXVrkakQA0Mn7CPOA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Out_WeekdayLabel.Initials = "T"
outVars.value.out_WeekdayLabelOut.initialsAttr = "T";
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:abZ8YTXVrkakQA0Mn7CPOA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// Out_WeekdayLabel.Number = 4
outVars.value.out_WeekdayLabelOut.numberAttr = "4";
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:TdCirmPnJUKHnc2RWMZXdA", callContext.id);
} else {
// Friday?
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:gGWOzXF3pkihXLXIxR4YMQ", callContext.id) && (vars.value.in_DayOfWeekInLocal === 5))) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:oSi1BepFK0qNZ5xdPfXg_A", callContext.id);
// Out_WeekdayLabel.LongLabel = "Friday"
outVars.value.out_WeekdayLabelOut.longLabelAttr = "Friday";
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:oSi1BepFK0qNZ5xdPfXg_A", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Out_WeekdayLabel.ShortLabel = "Fri"
outVars.value.out_WeekdayLabelOut.shortLabelAttr = "Fri";
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:oSi1BepFK0qNZ5xdPfXg_A", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Out_WeekdayLabel.Initials = "F"
outVars.value.out_WeekdayLabelOut.initialsAttr = "F";
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:oSi1BepFK0qNZ5xdPfXg_A", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// Out_WeekdayLabel.Number = 5
outVars.value.out_WeekdayLabelOut.numberAttr = "5";
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:Gg0_5zDBrE6m_4K2GsYV0A", callContext.id);
} else {
// Saturday?
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:ebhFRpiqRkaJ0lcv6pdK+w", callContext.id) && (vars.value.in_DayOfWeekInLocal === 6))) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:N6O1TwAj6EOdWTGpg5wchg", callContext.id);
// Out_WeekdayLabel.LongLabel = "Saturday"
outVars.value.out_WeekdayLabelOut.longLabelAttr = "Saturday";
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:N6O1TwAj6EOdWTGpg5wchg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Out_WeekdayLabel.ShortLabel = "Sat"
outVars.value.out_WeekdayLabelOut.shortLabelAttr = "Sat";
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:N6O1TwAj6EOdWTGpg5wchg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Out_WeekdayLabel.Initials = "S"
outVars.value.out_WeekdayLabelOut.initialsAttr = "S";
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:N6O1TwAj6EOdWTGpg5wchg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// Out_WeekdayLabel.Number = 6
outVars.value.out_WeekdayLabelOut.numberAttr = "6";
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:zwsrcrh_H0SrfPxiyol1Mw", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:reUtGuQ4kUyBFZB_qsvt5Q", callContext.id);
}

}

}

}

}

}

}

return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:jFkoXsvCCUmyvjmxWSHXTg", callContext.id);
}

};
var controller = UBTConnectLibraryController.default;
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.GetConnectWeekdayLabel_ByDayOfWeek$vars", [{
name: "In_DayOfWeek",
attrName: "in_DayOfWeekInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.GetConnectWeekdayLabel_ByDayOfWeek$outVars", [{
name: "Out_WeekdayLabel",
attrName: "out_WeekdayLabelOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new UBTConnectLibraryModel.WeekdayLabelTypeRec();
},
complexType: UBTConnectLibraryModel.WeekdayLabelTypeRec
}]);
UBTConnectLibraryController.default.clientActionProxies.getConnectWeekdayLabel_ByDayOfWeek$Action = function (in_DayOfWeekIn) {
in_DayOfWeekIn = (in_DayOfWeekIn === undefined) ? 0 : in_DayOfWeekIn;
return controller.executeActionInsideJSNode(UBTConnectLibraryController.default.getConnectWeekdayLabel_ByDayOfWeek$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(in_DayOfWeekIn, OS.DataTypes.DataTypes.Integer)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Out_WeekdayLabel: actionResults.out_WeekdayLabelOut
};
});
};
});

define("UBTConnectLibrary.controller$GetFlagURLByCountryCode", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.clientVariables"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryClientVariables) {
var OS = OutSystems.Internal;
UBTConnectLibraryController.default.getFlagURLByCountryCode$Action = function (in_CountryCodeIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.GetFlagURLByCountryCode$vars"))());
vars.value.in_CountryCodeInLocal = in_CountryCodeIn;
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.GetFlagURLByCountryCode$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:KeZC9etdQECgLzu3+zI4vA:/ClientActionFlows.KeZC9etdQECgLzu3+zI4vA:J8CyOV6THqCZhPm8oMO3wQ", "UBTConnectLibrary", "GetFlagURLByCountryCode", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:TJt3MiX26EKLLUQi2ev47Q", callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:y3m0U_Up+EWpAVRa80Pxcw", callContext.id);
// CountryCode = ToLower
vars.value.countryCodeVar = OS.BuiltinFunctions.toLower(vars.value.in_CountryCodeInLocal);
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:GfvpKj+tgUmpNujd1WX+kQ", callContext.id) && (vars.value.countryCodeVar === "ar"))) {
// ar
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:Cex5sOcgQUaEPkj1MSw1iA", callContext.id);
// Out_CountryFlagURL = Images.ar.URL
outVars.value.out_CountryFlagURLOut = OS.Navigation.VersionedURL.getVersionedUrl("img/UBTConnectLibrary.ar.png");
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:Lm3wN5VZFEmPzImjuLFLKw", callContext.id);
} else {
if((vars.value.countryCodeVar === "au")) {
// au
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:nblKOtKbZkW0eUxm371mow", callContext.id);
// Out_CountryFlagURL = Images.au2.URL
outVars.value.out_CountryFlagURLOut = OS.Navigation.VersionedURL.getVersionedUrl("img/UBT_CW.au.png");
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:Lm3wN5VZFEmPzImjuLFLKw", callContext.id);
} else {
if((vars.value.countryCodeVar === "bb")) {
// bb
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:5kwL_iY4jUSgxzsD5EzYgQ", callContext.id);
// Out_CountryFlagURL = Images.bb2.URL
outVars.value.out_CountryFlagURLOut = OS.Navigation.VersionedURL.getVersionedUrl("img/UBT_CW.bb.png");
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:Lm3wN5VZFEmPzImjuLFLKw", callContext.id);
} else {
if((vars.value.countryCodeVar === "ca")) {
// ca
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:WfKGM2MLbk+YdM7tOff+Gg", callContext.id);
// Out_CountryFlagURL = Images.ca2.URL
outVars.value.out_CountryFlagURLOut = OS.Navigation.VersionedURL.getVersionedUrl("img/UBT_CW.ca.png");
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:_3AwmsPH7EmUrKnjABrCDg", callContext.id);
} else {
if((vars.value.countryCodeVar === "dk")) {
// dk
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:Cy8mw7_a00Sr_DybeDa1xA", callContext.id);
// Out_CountryFlagURL = Images.dk2.URL
outVars.value.out_CountryFlagURLOut = OS.Navigation.VersionedURL.getVersionedUrl("img/UBT_CW.dk.png");
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:_3AwmsPH7EmUrKnjABrCDg", callContext.id);
} else {
if((vars.value.countryCodeVar === "fr")) {
// fr
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:5LPX8YxUjESZ5ikFlEPvEA", callContext.id);
// Out_CountryFlagURL = Images.fr2.URL
outVars.value.out_CountryFlagURLOut = OS.Navigation.VersionedURL.getVersionedUrl("img/UBT_CW.fr.png");
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:_3AwmsPH7EmUrKnjABrCDg", callContext.id);
} else {
if((vars.value.countryCodeVar === "de")) {
// de
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:u5eenpsMr0+CNL3VmDNFxw", callContext.id);
// Out_CountryFlagURL = Images.de2.URL
outVars.value.out_CountryFlagURLOut = OS.Navigation.VersionedURL.getVersionedUrl("img/UBT_CW.de.png");
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:_3AwmsPH7EmUrKnjABrCDg", callContext.id);
} else {
if((vars.value.countryCodeVar === "ie")) {
// ie
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:xxts5aXHnk2g1RrzXk8NIg", callContext.id);
// Out_CountryFlagURL = Images.ie2.URL
outVars.value.out_CountryFlagURLOut = OS.Navigation.VersionedURL.getVersionedUrl("img/UBT_CW.ie.png");
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:_3AwmsPH7EmUrKnjABrCDg", callContext.id);
} else {
if((vars.value.countryCodeVar === "it")) {
// it
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:GQ_7xPCbb0OMfzmP53S5OA", callContext.id);
// Out_CountryFlagURL = Images.it2.URL
outVars.value.out_CountryFlagURLOut = OS.Navigation.VersionedURL.getVersionedUrl("img/UBT_CW.it.png");
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:_3AwmsPH7EmUrKnjABrCDg", callContext.id);
} else {
if((vars.value.countryCodeVar === "jm")) {
// jm
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:18+HFjSwnUWzNCR2W3tjpw", callContext.id);
// Out_CountryFlagURL = Images.jm2.URL
outVars.value.out_CountryFlagURLOut = OS.Navigation.VersionedURL.getVersionedUrl("img/UBT_CW.jm.png");
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:cDorYHcXnEOKJW0D6lUj9w", callContext.id);
} else {
if((vars.value.countryCodeVar === "nl")) {
// nl
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:7z+5n89QF0ixu9a1RWABWw", callContext.id);
// Out_CountryFlagURL = Images.nl2.URL
outVars.value.out_CountryFlagURLOut = OS.Navigation.VersionedURL.getVersionedUrl("img/UBT_CW.nl.png");
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:cDorYHcXnEOKJW0D6lUj9w", callContext.id);
} else {
if((vars.value.countryCodeVar === "nz")) {
// nz
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:kONGecR2d0uD94bJT29Otg", callContext.id);
// Out_CountryFlagURL = Images.nz2.URL
outVars.value.out_CountryFlagURLOut = OS.Navigation.VersionedURL.getVersionedUrl("img/UBT_CW.nz.png");
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:cDorYHcXnEOKJW0D6lUj9w", callContext.id);
} else {
if((vars.value.countryCodeVar === "vc")) {
// vc
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:1MLeStCyLk+rPlBq2tXodQ", callContext.id);
// Out_CountryFlagURL = Images.vc2.URL
outVars.value.out_CountryFlagURLOut = OS.Navigation.VersionedURL.getVersionedUrl("img/UBT_CW.vc.png");
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:cDorYHcXnEOKJW0D6lUj9w", callContext.id);
} else {
if((vars.value.countryCodeVar === "se")) {
// se
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:vBTe9Ju_eEOvGmDAaXS0kg", callContext.id);
// Out_CountryFlagURL = Images.se2.URL
outVars.value.out_CountryFlagURLOut = OS.Navigation.VersionedURL.getVersionedUrl("img/UBT_CW.se.png");
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:cDorYHcXnEOKJW0D6lUj9w", callContext.id);
} else {
if((vars.value.countryCodeVar === "ch")) {
// ch
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:lEVet13w7EWh3R8qG7ZRfQ", callContext.id);
// Out_CountryFlagURL = Images.ch2.URL
outVars.value.out_CountryFlagURLOut = OS.Navigation.VersionedURL.getVersionedUrl("img/UBT_CW.ch.png");
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:cDorYHcXnEOKJW0D6lUj9w", callContext.id);
} else {
if((vars.value.countryCodeVar === "tt")) {
// tt
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:6rK+4fgXpEWq_hHf8jvemg", callContext.id);
// Out_CountryFlagURL = Images.tt2.URL
outVars.value.out_CountryFlagURLOut = OS.Navigation.VersionedURL.getVersionedUrl("img/UBT_CW.tt.png");
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:AovCIbJ0JUi2e9UkmDYCKw", callContext.id);
} else {
if((vars.value.countryCodeVar === "uk")) {
// uk
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:ZDfrWJRkmEuPE8axftRCPQ", callContext.id);
// Out_CountryFlagURL = Images.UK2.URL
outVars.value.out_CountryFlagURLOut = OS.Navigation.VersionedURL.getVersionedUrl("img/UBT_CW.UK.png");
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:AovCIbJ0JUi2e9UkmDYCKw", callContext.id);
} else {
if((vars.value.countryCodeVar === "us")) {
// us
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:C6yHgAPdrEyUZnGzW1KRUg", callContext.id);
// Out_CountryFlagURL = Images.us2.URL
outVars.value.out_CountryFlagURLOut = OS.Navigation.VersionedURL.getVersionedUrl("img/UBT_CW.us.png");
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:AovCIbJ0JUi2e9UkmDYCKw", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:wmBi5axOu0SZub8lySNeIw", callContext.id);
}

}

}

}

}

}

}

}

}

}

}

}

}

}

}

}

}

}

return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:KeZC9etdQECgLzu3+zI4vA", callContext.id);
}

};
var controller = UBTConnectLibraryController.default;
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.GetFlagURLByCountryCode$vars", [{
name: "In_CountryCode",
attrName: "in_CountryCodeInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "CountryCode",
attrName: "countryCodeVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.GetFlagURLByCountryCode$outVars", [{
name: "Out_CountryFlagURL",
attrName: "out_CountryFlagURLOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnectLibraryController.default.clientActionProxies.getFlagURLByCountryCode$Action = function (in_CountryCodeIn) {
in_CountryCodeIn = (in_CountryCodeIn === undefined) ? "" : in_CountryCodeIn;
return controller.executeActionInsideJSNode(UBTConnectLibraryController.default.getFlagURLByCountryCode$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(in_CountryCodeIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Out_CountryFlagURL: OS.DataConversion.JSNodeParamConverter.to(actionResults.out_CountryFlagURLOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("UBTConnectLibrary.controller$GetGalleryBackgroundClass", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.clientVariables"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryClientVariables) {
var OS = OutSystems.Internal;
UBTConnectLibraryController.default.getGalleryBackgroundClass$Action = function (itemsPerRowIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.GetGalleryBackgroundClass$vars"))());
vars.value.itemsPerRowInLocal = itemsPerRowIn;
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.GetGalleryBackgroundClass$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:5SbFwiR8H0228DlamFT_2g:/ClientActionFlows.5SbFwiR8H0228DlamFT_2g:MzPzBv3ndFzsAWSrJq+F8Q", "UBTConnectLibrary", "GetGalleryBackgroundClass", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:4dJ0zfJ3m0y0WHwvDPcdjA", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:9MjQUa2r9ky+ANR74JLXrg", callContext.id) && (vars.value.itemsPerRowInLocal === 2))) {
// 50 vw
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:vFGGoe+CL0uXmpNSsSzFnw", callContext.id);
// ImageSize = HalfWidth_50vw
outVars.value.imageSizeOut = UBTConnectLibraryModel.staticEntities.uBT_ImageSize.halfWidth_50vw;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:9n33k12L60mEp_7TYWpG6A", callContext.id);
} else {
if((vars.value.itemsPerRowInLocal === 3)) {
// 33 vw
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:PHZKTD417UKqLPEyJItJsQ", callContext.id);
// ImageSize = ThirdWidth_33vw
outVars.value.imageSizeOut = UBTConnectLibraryModel.staticEntities.uBT_ImageSize.thirdWidth_33vw;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:9n33k12L60mEp_7TYWpG6A", callContext.id);
} else {
if((vars.value.itemsPerRowInLocal === 4)) {
// 25 vw
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:jlZ7zObxbEWljXZj2+oZ4Q", callContext.id);
// ImageSize = QuarterWidth_25vw
outVars.value.imageSizeOut = UBTConnectLibraryModel.staticEntities.uBT_ImageSize.quarterWidth_25vw;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:9n33k12L60mEp_7TYWpG6A", callContext.id);
} else {
// Default to 100vw
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:ZcAR0Vhlb0qAhDHPwPwPZg", callContext.id);
// ImageSize = MaxWidth_100vw
outVars.value.imageSizeOut = UBTConnectLibraryModel.staticEntities.uBT_ImageSize.maxWidth_100vw;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:8GqocpWegE+q0s5pUUOEcg", callContext.id);
}

}

}

return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:5SbFwiR8H0228DlamFT_2g", callContext.id);
}

};
var controller = UBTConnectLibraryController.default;
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.GetGalleryBackgroundClass$vars", [{
name: "ItemsPerRow",
attrName: "itemsPerRowInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.GetGalleryBackgroundClass$outVars", [{
name: "ImageSize",
attrName: "imageSizeOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnectLibraryController.default.clientActionProxies.getGalleryBackgroundClass$Action = function (itemsPerRowIn) {
itemsPerRowIn = (itemsPerRowIn === undefined) ? 0 : itemsPerRowIn;
return controller.executeActionInsideJSNode(UBTConnectLibraryController.default.getGalleryBackgroundClass$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(itemsPerRowIn, OS.DataTypes.DataTypes.Integer)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
ImageSize: actionResults.imageSizeOut
};
});
};
});

define("UBTConnectLibrary.controller$GetLocalVariable_ColumnSize", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.clientVariables"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryClientVariables) {
var OS = OutSystems.Internal;
UBTConnectLibraryController.default.getLocalVariable_ColumnSize$Action = function (in_SizeIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.GetLocalVariable_ColumnSize$vars"))());
vars.value.in_SizeInLocal = in_SizeIn;
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.GetLocalVariable_ColumnSize$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:T2wEUlXSHU2+FnCne8Ielg:/ClientActionFlows.T2wEUlXSHU2+FnCne8Ielg:ihgfXlR8vhje5NYGHP2E0w", "UBTConnectLibrary", "GetLocalVariable_ColumnSize", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:U2BuLxuxi02pUFC4MsZrAA", callContext.id);
// Has size?
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:O6FObVXraUihVbzaKYAHsA", callContext.id) && (vars.value.in_SizeInLocal > 0))) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:7sz1e476xEiDMbD3tMN1MA", callContext.id);
// LocalVariable = "--_ubt-column-width:  " + In_Size + "px;"
outVars.value.localVariableOut = (("--_ubt-column-width:  " + (vars.value.in_SizeInLocal).toString()) + "px;");
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:TsMcHL3wz0G5b7frjUktng", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:TsMcHL3wz0G5b7frjUktng", callContext.id);
}

return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:T2wEUlXSHU2+FnCne8Ielg", callContext.id);
}

};
var controller = UBTConnectLibraryController.default;
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.GetLocalVariable_ColumnSize$vars", [{
name: "In_Size",
attrName: "in_SizeInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.GetLocalVariable_ColumnSize$outVars", [{
name: "LocalVariable",
attrName: "localVariableOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnectLibraryController.default.clientActionProxies.getLocalVariable_ColumnSize$Action = function (in_SizeIn) {
in_SizeIn = (in_SizeIn === undefined) ? 0 : in_SizeIn;
return controller.executeActionInsideJSNode(UBTConnectLibraryController.default.getLocalVariable_ColumnSize$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(in_SizeIn, OS.DataTypes.DataTypes.Integer)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
LocalVariable: OS.DataConversion.JSNodeParamConverter.to(actionResults.localVariableOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("UBTConnectLibrary.controller$GetLookupActions", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.model$LookupActionsRec"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryClientVariables) {
var OS = OutSystems.Internal;
UBTConnectLibraryController.default.getLookupActions$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.GetLookupActions$outVars"))());
varBag.callContext = callContext;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:FvJ+kqh5IUe+ADFghKAv3A:/ClientActionFlows.FvJ+kqh5IUe+ADFghKAv3A:gpy+xmpTQ_SBaG33lMYg4g", "UBTConnectLibrary", "GetLookupActions", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:f13aG8Q3xEGe8cVsHKgWNg", callContext.id);
// Bookmark
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:b4dZub4kC0Kaso6Mw39eTA", callContext.id);
// LookupActions.Bookmark.Singular = "Bookmark"
outVars.value.lookupActionsOut.bookmarkAttr.singularAttr = "Bookmark";
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:b4dZub4kC0Kaso6Mw39eTA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// LookupActions.Bookmark.Icon = Bookmark
outVars.value.lookupActionsOut.bookmarkAttr.iconAttr = UBTConnectLibraryModel.staticEntities.uBT_Icons.bookmark;
// Unbookmark
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:pte_FZy_sEu10aAhiRZtBg", callContext.id);
// LookupActions.Unbookmark.Singular = "Unmark"
outVars.value.lookupActionsOut.unbookmarkAttr.singularAttr = "Unmark";
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:pte_FZy_sEu10aAhiRZtBg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// LookupActions.Unbookmark.Icon = Check
outVars.value.lookupActionsOut.unbookmarkAttr.iconAttr = UBTConnectLibraryModel.staticEntities.uBT_Icons.check;
// Notes
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:3bIDsq3bN0KS+5KtEFpQZg", callContext.id);
// LookupActions.Notes.Singular = "Notes"
outVars.value.lookupActionsOut.notesAttr.singularAttr = "Notes";
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:3bIDsq3bN0KS+5KtEFpQZg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// LookupActions.Notes.Icon = Tooltip
outVars.value.lookupActionsOut.notesAttr.iconAttr = UBTConnectLibraryModel.staticEntities.uBT_Icons.tooltip;
// Gift
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:5XfFr8WauUmoyOW2XUE_+g", callContext.id);
// LookupActions.Gift.Singular = "Gift"
outVars.value.lookupActionsOut.giftAttr.singularAttr = "Gift";
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:5XfFr8WauUmoyOW2XUE_+g", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// LookupActions.Gift.Icon = Gifting
outVars.value.lookupActionsOut.giftAttr.iconAttr = UBTConnectLibraryModel.staticEntities.uBT_Icons.gifting;
// Share
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:SYN4z3ULPEGws0CoVdkY1A", callContext.id);
// LookupActions.Share.Singular = "Share"
outVars.value.lookupActionsOut.shareAttr.singularAttr = "Share";
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:SYN4z3ULPEGws0CoVdkY1A", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// LookupActions.Share.Icon = Share
outVars.value.lookupActionsOut.shareAttr.iconAttr = UBTConnectLibraryModel.staticEntities.uBT_Icons.share;
// Call
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:Mmb9GaAl60CZ7AqVqzx42A", callContext.id);
// LookupActions.Call.Singular = "Call"
outVars.value.lookupActionsOut.callAttr.singularAttr = "Call";
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:Mmb9GaAl60CZ7AqVqzx42A", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// LookupActions.Call.Icon = Call
outVars.value.lookupActionsOut.callAttr.iconAttr = UBTConnectLibraryModel.staticEntities.uBT_Icons.call;
// Email
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:y3HxSfn150+IUTi_GqQvBg", callContext.id);
// LookupActions.Email.Singular = "Email"
outVars.value.lookupActionsOut.emailAttr.singularAttr = "Email";
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:y3HxSfn150+IUTi_GqQvBg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// LookupActions.Email.Icon = Letter
outVars.value.lookupActionsOut.emailAttr.iconAttr = UBTConnectLibraryModel.staticEntities.uBT_Icons.letter;
// Details
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:2ccJNlLPHkur5qDz1wYFKg", callContext.id);
// LookupActions.ViewDetails.Singular = "View details"
outVars.value.lookupActionsOut.viewDetailsAttr.singularAttr = "View details";
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:2ccJNlLPHkur5qDz1wYFKg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// LookupActions.ViewDetails.Icon = ArrowOutward
outVars.value.lookupActionsOut.viewDetailsAttr.iconAttr = UBTConnectLibraryModel.staticEntities.uBT_Icons.arrowOutward;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:FX5NObb+mEyo0bJnM4+FCg", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:FvJ+kqh5IUe+ADFghKAv3A", callContext.id);
}

};
var controller = UBTConnectLibraryController.default;
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.GetLookupActions$outVars", [{
name: "LookupActions",
attrName: "lookupActionsOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new UBTConnectLibraryModel.LookupActionsRec();
},
complexType: UBTConnectLibraryModel.LookupActionsRec
}]);
UBTConnectLibraryController.default.clientActionProxies.getLookupActions$Action = function () {
return controller.executeActionInsideJSNode(UBTConnectLibraryController.default.getLookupActions$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
LookupActions: actionResults.lookupActionsOut
};
});
};
});

define("UBTConnectLibrary.controller$GetLookupConcepts", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.controller$SetLookupLabel_MaybeLowercase", "UBTConnectLibrary.model$LookupConceptsRec"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryClientVariables) {
var OS = OutSystems.Internal;
UBTConnectLibraryController.default.getLookupConcepts$Action = function (in_IsLowercaseIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.GetLookupConcepts$vars"))());
vars.value.in_IsLowercaseInLocal = in_IsLowercaseIn;
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.GetLookupConcepts$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:GsESCaa44kKT7IaACtx3Hg:/ClientActionFlows.GsESCaa44kKT7IaACtx3Hg:lIVqLdcTOwxYWIey4c6h1Q", "UBTConnectLibrary", "GetLookupConcepts", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:8+12blBhYU+CSZFQnEB_8A", callContext.id);
// Bretheren
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:zhnhSV2DlkucFmRv9AIVuw", callContext.id);
// Out_Lookup.Brethren.Singular = SetLookupLabel_MaybeLowercase("Brethren", In_IsLowercase)
outVars.value.out_LookupOut.brethrenAttr.singularAttr = OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.setLookupLabel_MaybeLowercase$Action("Brethren", vars.value.in_IsLowercaseInLocal, callContext).out_LabelOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:zhnhSV2DlkucFmRv9AIVuw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Out_Lookup.Brethren.Plural = SetLookupLabel_MaybeLowercase("Brethren", In_IsLowercase)
outVars.value.out_LookupOut.brethrenAttr.pluralAttr = OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.setLookupLabel_MaybeLowercase$Action("Brethren", vars.value.in_IsLowercaseInLocal, callContext).out_LabelOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:zhnhSV2DlkucFmRv9AIVuw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Out_Lookup.Brethren.Icon = PersonFill
outVars.value.out_LookupOut.brethrenAttr.iconAttr = UBTConnectLibraryModel.staticEntities.uBT_Icons.personFill;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:zhnhSV2DlkucFmRv9AIVuw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// Out_Lookup.Brethren.Icon_Color = Purple
outVars.value.out_LookupOut.brethrenAttr.icon_ColorAttr = UBTConnectLibraryModel.staticEntities.uBT_Color.purple;
// Household
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:ceQQ7y8XdEGkuEm6Il8Vmg", callContext.id);
// Out_Lookup.Household.Singular = SetLookupLabel_MaybeLowercase("Household", In_IsLowercase)
outVars.value.out_LookupOut.householdAttr.singularAttr = OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.setLookupLabel_MaybeLowercase$Action("Household", vars.value.in_IsLowercaseInLocal, callContext).out_LabelOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:ceQQ7y8XdEGkuEm6Il8Vmg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Out_Lookup.Household.Plural = SetLookupLabel_MaybeLowercase("Households", In_IsLowercase)
outVars.value.out_LookupOut.householdAttr.pluralAttr = OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.setLookupLabel_MaybeLowercase$Action("Households", vars.value.in_IsLowercaseInLocal, callContext).out_LabelOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:ceQQ7y8XdEGkuEm6Il8Vmg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Out_Lookup.Household.Icon = Household
outVars.value.out_LookupOut.householdAttr.iconAttr = UBTConnectLibraryModel.staticEntities.uBT_Icons.household;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:ceQQ7y8XdEGkuEm6Il8Vmg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// Out_Lookup.Household.Icon_Color = Primary
outVars.value.out_LookupOut.householdAttr.icon_ColorAttr = UBTConnectLibraryModel.staticEntities.uBT_Color.primary;
// Sister
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:G4wbNUBEqEmltK7FFtVcig", callContext.id);
// Out_Lookup.Sister.Singular = SetLookupLabel_MaybeLowercase("Sister", In_IsLowercase)
outVars.value.out_LookupOut.sisterAttr.singularAttr = OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.setLookupLabel_MaybeLowercase$Action("Sister", vars.value.in_IsLowercaseInLocal, callContext).out_LabelOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:G4wbNUBEqEmltK7FFtVcig", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Out_Lookup.Sister.Plural = SetLookupLabel_MaybeLowercase("Sisters", In_IsLowercase)
outVars.value.out_LookupOut.sisterAttr.pluralAttr = OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.setLookupLabel_MaybeLowercase$Action("Sisters", vars.value.in_IsLowercaseInLocal, callContext).out_LabelOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:G4wbNUBEqEmltK7FFtVcig", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Out_Lookup.Sister.Icon = Girl
outVars.value.out_LookupOut.sisterAttr.iconAttr = UBTConnectLibraryModel.staticEntities.uBT_Icons.girl;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:G4wbNUBEqEmltK7FFtVcig", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// Out_Lookup.Sister.Icon_Color = PinkNonStandardDarker
outVars.value.out_LookupOut.sisterAttr.icon_ColorAttr = UBTConnectLibraryModel.staticEntities.uBT_Color.pinkNonStandardDarker;
// Brother
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:UOLzU0TjHk+nDr1Xyt2UnQ", callContext.id);
// Out_Lookup.Brother.Singular = SetLookupLabel_MaybeLowercase("Brother", In_IsLowercase)
outVars.value.out_LookupOut.brotherAttr.singularAttr = OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.setLookupLabel_MaybeLowercase$Action("Brother", vars.value.in_IsLowercaseInLocal, callContext).out_LabelOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:UOLzU0TjHk+nDr1Xyt2UnQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Out_Lookup.Brother.Plural = SetLookupLabel_MaybeLowercase("Brothers", In_IsLowercase)
outVars.value.out_LookupOut.brotherAttr.pluralAttr = OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.setLookupLabel_MaybeLowercase$Action("Brothers", vars.value.in_IsLowercaseInLocal, callContext).out_LabelOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:UOLzU0TjHk+nDr1Xyt2UnQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Out_Lookup.Brother.Icon = Boy
outVars.value.out_LookupOut.brotherAttr.iconAttr = UBTConnectLibraryModel.staticEntities.uBT_Icons.boy;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:UOLzU0TjHk+nDr1Xyt2UnQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// Out_Lookup.Brother.Icon_Color = BlueNonStandarDarker
outVars.value.out_LookupOut.brotherAttr.icon_ColorAttr = UBTConnectLibraryModel.staticEntities.uBT_Color.blueNonStandarDarker;
// Locality
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:lbc2FllWbkm8eGW1WnyVLg", callContext.id);
// Out_Lookup.Locality.Singular = SetLookupLabel_MaybeLowercase("Locality", In_IsLowercase)
outVars.value.out_LookupOut.localityAttr.singularAttr = OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.setLookupLabel_MaybeLowercase$Action("Locality", vars.value.in_IsLowercaseInLocal, callContext).out_LabelOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:lbc2FllWbkm8eGW1WnyVLg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Out_Lookup.Locality.Plural = SetLookupLabel_MaybeLowercase("Localities", In_IsLowercase)
outVars.value.out_LookupOut.localityAttr.pluralAttr = OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.setLookupLabel_MaybeLowercase$Action("Localities", vars.value.in_IsLowercaseInLocal, callContext).out_LabelOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:lbc2FllWbkm8eGW1WnyVLg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Out_Lookup.Locality.Icon = LocationOnFill
outVars.value.out_LookupOut.localityAttr.iconAttr = UBTConnectLibraryModel.staticEntities.uBT_Icons.locationOnFill;
// Country
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:eCugWBBK1E+2oK9Cgcoe7g", callContext.id);
// Out_Lookup.Country.Singular = SetLookupLabel_MaybeLowercase("Country", In_IsLowercase)
outVars.value.out_LookupOut.countryAttr.singularAttr = OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.setLookupLabel_MaybeLowercase$Action("Country", vars.value.in_IsLowercaseInLocal, callContext).out_LabelOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:eCugWBBK1E+2oK9Cgcoe7g", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Out_Lookup.Country.Plural = SetLookupLabel_MaybeLowercase("Countries", In_IsLowercase)
outVars.value.out_LookupOut.countryAttr.pluralAttr = OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.setLookupLabel_MaybeLowercase$Action("Countries", vars.value.in_IsLowercaseInLocal, callContext).out_LabelOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
// Distance
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:XNuUO3zJeEOmU_pEFg2NTg", callContext.id);
// Out_Lookup.Distance.Singular = SetLookupLabel_MaybeLowercase("Distance", In_IsLowercase)
outVars.value.out_LookupOut.distanceAttr.singularAttr = OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.setLookupLabel_MaybeLowercase$Action("Distance", vars.value.in_IsLowercaseInLocal, callContext).out_LabelOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:XNuUO3zJeEOmU_pEFg2NTg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Out_Lookup.Distance.Plural = SetLookupLabel_MaybeLowercase("Distaces", In_IsLowercase)
outVars.value.out_LookupOut.distanceAttr.pluralAttr = OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.setLookupLabel_MaybeLowercase$Action("Distaces", vars.value.in_IsLowercaseInLocal, callContext).out_LabelOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:XNuUO3zJeEOmU_pEFg2NTg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Out_Lookup.Distance.Icon = Explore
outVars.value.out_LookupOut.distanceAttr.iconAttr = UBTConnectLibraryModel.staticEntities.uBT_Icons.explore;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:XNuUO3zJeEOmU_pEFg2NTg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// Out_Lookup.Distance.Icon_Color = YellowDark
outVars.value.out_LookupOut.distanceAttr.icon_ColorAttr = UBTConnectLibraryModel.staticEntities.uBT_Color.yellowDark;
// Super Meeting
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:vQihBmg3jEGafkP0Lp18iQ", callContext.id);
// Out_Lookup.SupperMeeting.Singular = SetLookupLabel_MaybeLowercase("Supper Meeting", In_IsLowercase)
outVars.value.out_LookupOut.supperMeetingAttr.singularAttr = OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.setLookupLabel_MaybeLowercase$Action("Supper Meeting", vars.value.in_IsLowercaseInLocal, callContext).out_LabelOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:vQihBmg3jEGafkP0Lp18iQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Out_Lookup.SupperMeeting.Plural = SetLookupLabel_MaybeLowercase("Supper Meetings", In_IsLowercase)
outVars.value.out_LookupOut.supperMeetingAttr.pluralAttr = OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.setLookupLabel_MaybeLowercase$Action("Supper Meetings", vars.value.in_IsLowercaseInLocal, callContext).out_LabelOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:vQihBmg3jEGafkP0Lp18iQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Out_Lookup.SupperMeeting.Icon = HouseFill
outVars.value.out_LookupOut.supperMeetingAttr.iconAttr = UBTConnectLibraryModel.staticEntities.uBT_Icons.houseFill;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:vQihBmg3jEGafkP0Lp18iQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// Out_Lookup.SupperMeeting.Icon_Color = Orange
outVars.value.out_LookupOut.supperMeetingAttr.icon_ColorAttr = UBTConnectLibraryModel.staticEntities.uBT_Color.orange;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:EpypHG5OVU+Vig6Sw0rM7Q", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:GsESCaa44kKT7IaACtx3Hg", callContext.id);
}

};
var controller = UBTConnectLibraryController.default;
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.GetLookupConcepts$vars", [{
name: "In_IsLowercase",
attrName: "in_IsLowercaseInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.GetLookupConcepts$outVars", [{
name: "Out_Lookup",
attrName: "out_LookupOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new UBTConnectLibraryModel.LookupConceptsRec();
},
complexType: UBTConnectLibraryModel.LookupConceptsRec
}]);
UBTConnectLibraryController.default.clientActionProxies.getLookupConcepts$Action = function (in_IsLowercaseIn) {
in_IsLowercaseIn = (in_IsLowercaseIn === undefined) ? false : in_IsLowercaseIn;
return controller.executeActionInsideJSNode(UBTConnectLibraryController.default.getLookupConcepts$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(in_IsLowercaseIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Out_Lookup: actionResults.out_LookupOut
};
});
};
});

define("UBTConnectLibrary.controller$GetRelativeTimeTag", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.controller$GetRelativeTimeTag.JavaScript1JS", "UBTConnectLibrary.clientVariables"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibrary_controller_GetRelativeTimeTag_JavaScript1JS, UBTConnectLibraryClientVariables) {
var OS = OutSystems.Internal;
UBTConnectLibraryController.default.getRelativeTimeTag$Action = function (createdDateTimeUtcIn, editedDateTimeUtcIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.GetRelativeTimeTag$vars"))());
vars.value.createdDateTimeUtcInLocal = createdDateTimeUtcIn;
vars.value.editedDateTimeUtcInLocal = editedDateTimeUtcIn;
var javaScript1JSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.GetRelativeTimeTag$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.javaScript1JSResult = javaScript1JSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:8Q6zk6GyUEKreDk3Qonzyw:/ClientActionFlows.8Q6zk6GyUEKreDk3Qonzyw:OyZGR4bw4b5ovc7JtlZfOA", "UBTConnectLibrary", "GetRelativeTimeTag", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:qF++TpbN+kiWF65bLXkeqw", callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:uuzb3b+hE0e5JQg25FSomA", callContext.id);
// IsEdited = EditedDateTimeUtc <> NullDate and DiffSeconds > 1
vars.value.isEditedVar = (!(vars.value.editedDateTimeUtcInLocal.equals(OS.BuiltinFunctions.nullDate())) && (OS.BuiltinFunctions.diffSeconds(vars.value.createdDateTimeUtcInLocal, vars.value.editedDateTimeUtcInLocal) > 1));
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:sN4HFIbsTU6TjNDYBA6MNQ", callContext.id);
javaScript1JSResult.value = controller.safeExecuteJSNode(UBTConnectLibrary_controller_GetRelativeTimeTag_JavaScript1JS, "JavaScript1", "GetRelativeTimeTag", {
DateTimeUtc: OS.DataConversion.JSNodeParamConverter.to(((vars.value.isEditedVar) ? (vars.value.editedDateTimeUtcInLocal) : (vars.value.createdDateTimeUtcInLocal)), OS.DataTypes.DataTypes.DateTime),
FormattedText: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBTConnectLibrary.GetRelativeTimeTag$javaScript1JSResult"))();
jsNodeResult.formattedTextOut = OS.DataConversion.JSNodeParamConverter.from($parameters.FormattedText, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:IdztnrLi80OOf3KfDqm07Q", callContext.id);
// RelativeTime = JavaScript1.FormattedText + If
outVars.value.relativeTimeOut = (javaScript1JSResult.value.formattedTextOut + ((vars.value.isEditedVar) ? (" · Edited") : ("")));
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:Fx7hs8ZZtEKCgDSXxHb+JA", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:8Q6zk6GyUEKreDk3Qonzyw", callContext.id);
}

};
var controller = UBTConnectLibraryController.default;
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.GetRelativeTimeTag$vars", [{
name: "CreatedDateTimeUtc",
attrName: "createdDateTimeUtcInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.DateTime,
defaultValue: function () {
return OS.DataTypes.DateTime.defaultValue;
}
}, {
name: "EditedDateTimeUtc",
attrName: "editedDateTimeUtcInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.DateTime,
defaultValue: function () {
return OS.DataTypes.DateTime.defaultValue;
}
}, {
name: "IsEdited",
attrName: "isEditedVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.GetRelativeTimeTag$javaScript1JSResult", [{
name: "FormattedText",
attrName: "formattedTextOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.GetRelativeTimeTag$outVars", [{
name: "RelativeTime",
attrName: "relativeTimeOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnectLibraryController.default.clientActionProxies.getRelativeTimeTag$Action = function (createdDateTimeUtcIn, editedDateTimeUtcIn) {
createdDateTimeUtcIn = (createdDateTimeUtcIn === undefined) ? OS.DataTypes.DateTime.defaultValue : createdDateTimeUtcIn;
editedDateTimeUtcIn = (editedDateTimeUtcIn === undefined) ? OS.DataTypes.DateTime.defaultValue : editedDateTimeUtcIn;
return controller.executeActionInsideJSNode(UBTConnectLibraryController.default.getRelativeTimeTag$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(createdDateTimeUtcIn, OS.DataTypes.DataTypes.DateTime), OS.DataConversion.JSNodeParamConverter.from(editedDateTimeUtcIn, OS.DataTypes.DataTypes.DateTime)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
RelativeTime: OS.DataConversion.JSNodeParamConverter.to(actionResults.relativeTimeOut, OS.DataTypes.DataTypes.Text)
};
});
};
});
define("UBTConnectLibrary.controller$GetRelativeTimeTag.JavaScript1JS", [], function () {
return function ($parameters, $actions, $roles, $public) {
function formatRelativeTime(dtInput) {
    if (!dtInput) return "";

    // Convert OutSystems DateTime parameter directly to a valid JS Date
    const targetDate = (dtInput instanceof Date) ? dtInput : new Date(dtInput);
    if (isNaN(targetDate.getTime())) return "";

    // Calculate current browser UTC difference
    const now = new Date();
    const diffInSeconds = Math.max(0, Math.floor((now.getTime() - targetDate.getTime()) / 1000));

    const MINUTE = 60;
    const HOUR = MINUTE * 60;
    const DAY = HOUR * 24;
    const WEEK = DAY * 7;
    const YEAR = DAY * 365;

    if (diffInSeconds < MINUTE) return `${diffInSeconds} s`;
    if (diffInSeconds < HOUR) return `${Math.floor(diffInSeconds / MINUTE)} m`;
    if (diffInSeconds < DAY) return `${Math.floor(diffInSeconds / HOUR)} h`;
    if (diffInSeconds < WEEK) return `${Math.floor(diffInSeconds / DAY)} d`;
    if (diffInSeconds < YEAR) return `${Math.floor(diffInSeconds / WEEK)} w`;
    return `${Math.floor(diffInSeconds / YEAR)} y`;
}

$parameters.FormattedText = formatRelativeTime($parameters.DateTimeUtc);
};
});

define("UBTConnectLibrary.controller$GetSpacingOptions", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.controller$FormatClasses", "UBTConnectLibrary.model$SpacingOptionsRec"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryClientVariables) {
var OS = OutSystems.Internal;
UBTConnectLibraryController.default.getSpacingOptions$Action = function (prefixIn, spacingOptionsIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.GetSpacingOptions$vars"))());
vars.value.prefixInLocal = prefixIn;
vars.value.spacingOptionsInLocal = spacingOptionsIn.clone();
var formatClasses2Var = new OS.DataTypes.VariableHolder();
var formatClasses5Var = new OS.DataTypes.VariableHolder();
var formatClasses4Var = new OS.DataTypes.VariableHolder();
var formatClasses6Var = new OS.DataTypes.VariableHolder();
var formatClassesVar = new OS.DataTypes.VariableHolder();
var formatClasses3Var = new OS.DataTypes.VariableHolder();
var formatClasses7Var = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.GetSpacingOptions$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.formatClasses2Var = formatClasses2Var;
varBag.formatClasses5Var = formatClasses5Var;
varBag.formatClasses4Var = formatClasses4Var;
varBag.formatClasses6Var = formatClasses6Var;
varBag.formatClassesVar = formatClassesVar;
varBag.formatClasses3Var = formatClasses3Var;
varBag.formatClasses7Var = formatClasses7Var;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:+5fLaL4zCEu2pCG1YtaDMw:/ClientActionFlows.+5fLaL4zCEu2pCG1YtaDMw:bD9VyQ3V1A8gUDezGzt1MQ", "UBTConnectLibrary", "GetSpacingOptions", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:n92PLdksskOznqbRHuDQCg", callContext.id);
// General
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:+dIczawYk0+yHsy1297DCQ", callContext.id) && ((vars.value.spacingOptionsInLocal.generalSizeIdAttr) !== (OS.BuiltinFunctions.nullTextIdentifier())))) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:hJjskWlMYUOChqWUAc5dug", callContext.id);
// Execute Action: FormatClasses
formatClassesVar.value = UBTConnectLibraryController.default.formatClasses$Action(outVars.value.classesOut, ((vars.value.prefixInLocal + "-") + vars.value.spacingOptionsInLocal.generalSizeIdAttr), callContext);

OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:TAWcyTFUnUWueIXVRg_tqw", callContext.id);
// Classes = FormatClasses.ClassesOut
outVars.value.classesOut = formatClassesVar.value.classesOutOut;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:RuSVpuZ0JUKRNRH11q60UA", callContext.id);
} else {
// Horizontal
do {
// Horizontal
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:md_niNgNXk6stDgDZbUBNQ", callContext.id) && ((vars.value.spacingOptionsInLocal.horizontalSizeIdAttr) !== (OS.BuiltinFunctions.nullTextIdentifier())))) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:m0WvFTPCnUS99zZJCFIbqQ", callContext.id);
// Execute Action: FormatClasses2
formatClasses2Var.value = UBTConnectLibraryController.default.formatClasses$Action(outVars.value.classesOut, ((vars.value.prefixInLocal + "-x-") + vars.value.spacingOptionsInLocal.horizontalSizeIdAttr), callContext);

OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:aarBi0f+qUeO9DTAHtm3Fg", callContext.id);
// Classes = FormatClasses2.ClassesOut
outVars.value.classesOut = formatClasses2Var.value.classesOutOut;
} else {
// Left
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:VRP6kHYsvkGi74dAHl8EqQ", callContext.id) && ((vars.value.spacingOptionsInLocal.leftSizeIdAttr) !== (OS.BuiltinFunctions.nullTextIdentifier())))) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:JxJnlRvmAkyu_h+DRTefSw", callContext.id);
// Execute Action: FormatClasses3
formatClasses3Var.value = UBTConnectLibraryController.default.formatClasses$Action(outVars.value.classesOut, ((vars.value.prefixInLocal + "-left-") + vars.value.spacingOptionsInLocal.leftSizeIdAttr), callContext);

OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:BlD0qie250iohKEBKswX8w", callContext.id);
// Classes = FormatClasses3.ClassesOut
outVars.value.classesOut = formatClasses3Var.value.classesOutOut;
}

// Right
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:Mn6p_6UNbEiLis10ee8Kuw", callContext.id) && ((vars.value.spacingOptionsInLocal.rightSizeIdAttr) !== (OS.BuiltinFunctions.nullTextIdentifier())))) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:t0P0dJJUzUO_yBm6RNrVFQ", callContext.id);
// Execute Action: FormatClasses4
formatClasses4Var.value = UBTConnectLibraryController.default.formatClasses$Action(outVars.value.classesOut, ((vars.value.prefixInLocal + "-right-") + vars.value.spacingOptionsInLocal.rightSizeIdAttr), callContext);

OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:oBkPgZNdUUaKCBIMAVK0Sg", callContext.id);
// Classes = FormatClasses4.ClassesOut
outVars.value.classesOut = formatClasses4Var.value.classesOutOut;
} else {
break;
}

}

// Dummy
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:pJqYHX0bOkalLisaWCpNvw", callContext.id);
} while(false)
;
// Vertical
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:ZO3NlayJNE+LiP5vcSaiRQ", callContext.id) && ((vars.value.spacingOptionsInLocal.verticalSizeIdAttr) !== (OS.BuiltinFunctions.nullTextIdentifier())))) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:kcoheVPz70W2TQTLrDtRXg", callContext.id);
// Execute Action: FormatClasses6
formatClasses6Var.value = UBTConnectLibraryController.default.formatClasses$Action(outVars.value.classesOut, ((vars.value.prefixInLocal + "-y-") + vars.value.spacingOptionsInLocal.verticalSizeIdAttr), callContext);

OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:T3AFafvKkUS6EIJ8nkBYJg", callContext.id);
// Classes = FormatClasses6.ClassesOut
outVars.value.classesOut = formatClasses6Var.value.classesOutOut;
} else {
// Top
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:OlAeGzpKA0m5rUhADbKagw", callContext.id) && ((vars.value.spacingOptionsInLocal.topSizeIdAttr) !== (OS.BuiltinFunctions.nullTextIdentifier())))) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:xO15SXURLEW4Honic0Lm2Q", callContext.id);
// Execute Action: FormatClasses5
formatClasses5Var.value = UBTConnectLibraryController.default.formatClasses$Action(outVars.value.classesOut, ((vars.value.prefixInLocal + "-top-") + vars.value.spacingOptionsInLocal.topSizeIdAttr), callContext);

OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:X9zbMzPWikqlOAKXwQSyBA", callContext.id);
// Classes = FormatClasses5.ClassesOut
outVars.value.classesOut = formatClasses5Var.value.classesOutOut;
}

// Bottom
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:WHx7n+YMYE2J0rowMq1viw", callContext.id) && ((vars.value.spacingOptionsInLocal.bottomSizeIdAttr) !== (OS.BuiltinFunctions.nullTextIdentifier())))) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:xd0W9V7NHkax_Ots7p2TZQ", callContext.id);
// Execute Action: FormatClasses7
formatClasses7Var.value = UBTConnectLibraryController.default.formatClasses$Action(outVars.value.classesOut, ((vars.value.prefixInLocal + "-bottom-") + vars.value.spacingOptionsInLocal.bottomSizeIdAttr), callContext);

OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:Ns657uJXT06YgLVFYfXldw", callContext.id);
// Classes = FormatClasses7.ClassesOut
outVars.value.classesOut = formatClasses7Var.value.classesOutOut;
} else {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:nYJfnND5Y0m8I8zl7+m9mw", callContext.id);
return outVars.value;

}

}

// Dummy
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:0FngS9rZ3U2f9_5NRLeyVg", callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:nYJfnND5Y0m8I8zl7+m9mw", callContext.id);
}

return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:+5fLaL4zCEu2pCG1YtaDMw", callContext.id);
}

};
var controller = UBTConnectLibraryController.default;
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.GetSpacingOptions$vars", [{
name: "Prefix",
attrName: "prefixInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "SpacingOptions",
attrName: "spacingOptionsInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new UBTConnectLibraryModel.SpacingOptionsRec();
},
complexType: UBTConnectLibraryModel.SpacingOptionsRec
}]);
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.GetSpacingOptions$outVars", [{
name: "Classes",
attrName: "classesOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnectLibraryController.default.clientActionProxies.getSpacingOptions$Action = function (prefixIn, spacingOptionsIn) {
prefixIn = (prefixIn === undefined) ? "" : prefixIn;
spacingOptionsIn = (spacingOptionsIn === undefined) ? new UBTConnectLibraryModel.SpacingOptionsRec() : spacingOptionsIn;
return controller.executeActionInsideJSNode(UBTConnectLibraryController.default.getSpacingOptions$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(prefixIn, OS.DataTypes.DataTypes.Text), spacingOptionsIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Classes: OS.DataConversion.JSNodeParamConverter.to(actionResults.classesOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("UBTConnectLibrary.controller$GetSpacingOptions_ImageCardContent", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.model$SpacingOptionsRec"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryClientVariables) {
var OS = OutSystems.Internal;
UBTConnectLibraryController.default.getSpacingOptions_ImageCardContent$Action = function (in_CardTypeIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.GetSpacingOptions_ImageCardContent$vars"))());
vars.value.in_CardTypeIdInLocal = in_CardTypeIdIn;
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.GetSpacingOptions_ImageCardContent$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:f3kkpA_CsEaKKStVTKDWGA:/ClientActionFlows.f3kkpA_CsEaKKStVTKDWGA:zvwCuzdnQ40Z0eY9BPu+bA", "UBTConnectLibrary", "GetSpacingOptions_ImageCardContent", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:bxbSYT2gZ0i051HzryW9xA", callContext.id);
// Is Detail?
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:J_pkE5E0QEqMg06Y467eNw", callContext.id) && (vars.value.in_CardTypeIdInLocal === UBTConnectLibraryModel.staticEntities.uBT_ImageCardType.detail))) {
// SpacingOptions
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:9n1qsSx+Jk+ngpm_Sa1CLw", callContext.id);
// SpacingOptions.HorizontalSizeId = Base
outVars.value.spacingOptionsOut.horizontalSizeIdAttr = UBTConnectLibraryModel.staticEntities.uBT_Size.base;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:9n1qsSx+Jk+ngpm_Sa1CLw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// SpacingOptions.BottomSizeId = Base
outVars.value.spacingOptionsOut.bottomSizeIdAttr = UBTConnectLibraryModel.staticEntities.uBT_Size.base;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:9n1qsSx+Jk+ngpm_Sa1CLw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// SpacingOptions.TopSizeId = Small
outVars.value.spacingOptionsOut.topSizeIdAttr = UBTConnectLibraryModel.staticEntities.uBT_Size.small;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:R8sjyKdQ8Eau+cvv394Fmg", callContext.id);
} else {
// Is Gallery?
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:YMuWEIehhUGlBlgz4b6lkg", callContext.id) && (vars.value.in_CardTypeIdInLocal === UBTConnectLibraryModel.staticEntities.uBT_ImageCardType.gallery))) {
// SpacingOptions
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:4r4Xc5sl2kuYiBeGF4ktDQ", callContext.id);
// SpacingOptions.GeneralSizeId = Small
outVars.value.spacingOptionsOut.generalSizeIdAttr = UBTConnectLibraryModel.staticEntities.uBT_Size.small;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:eZY4b8J3XU+Fnr+vSMTQ8A", callContext.id);
} else {
// Is List?
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:hdt4VcnwuUebReL_C8E5pw", callContext.id) && (vars.value.in_CardTypeIdInLocal === UBTConnectLibraryModel.staticEntities.uBT_ImageCardType.list))) {
// SpacingOptions
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:svfXamLBu0SSHqosHbQV1Q", callContext.id);
// SpacingOptions.VerticalSizeId = Small
outVars.value.spacingOptionsOut.verticalSizeIdAttr = UBTConnectLibraryModel.staticEntities.uBT_Size.small;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:svfXamLBu0SSHqosHbQV1Q", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// SpacingOptions.HorizontalSizeId = Base
outVars.value.spacingOptionsOut.horizontalSizeIdAttr = UBTConnectLibraryModel.staticEntities.uBT_Size.base;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:iOoAky0sXUu0sNLTpsoRbA", callContext.id);
} else {
// Is Sublist?
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:+t9etmfj9EiIviyzpXgCtQ", callContext.id) && (vars.value.in_CardTypeIdInLocal === UBTConnectLibraryModel.staticEntities.uBT_ImageCardType.sublist))) {
// SpacingOptions
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:cdCfuOlNLEepNCQ6vloRLw", callContext.id);
// SpacingOptions.VerticalSizeId = Small
outVars.value.spacingOptionsOut.verticalSizeIdAttr = UBTConnectLibraryModel.staticEntities.uBT_Size.small;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:cdCfuOlNLEepNCQ6vloRLw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// SpacingOptions.HorizontalSizeId = Base
outVars.value.spacingOptionsOut.horizontalSizeIdAttr = UBTConnectLibraryModel.staticEntities.uBT_Size.base;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:7MqfJf0Vj0SaXDUCr8ZKXw", callContext.id);
} else {
// Is List With Images?
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:Cg4xLGvptUOb6RVa53lC_A", callContext.id) && (vars.value.in_CardTypeIdInLocal === UBTConnectLibraryModel.staticEntities.uBT_ImageCardType.listWithImages))) {
// SpacingOptions
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:J_jVfxabMECLwgGJUnmkWA", callContext.id);
// SpacingOptions.HorizontalSizeId = Base
outVars.value.spacingOptionsOut.horizontalSizeIdAttr = UBTConnectLibraryModel.staticEntities.uBT_Size.base;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:J_jVfxabMECLwgGJUnmkWA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// SpacingOptions.TopSizeId = Medium
outVars.value.spacingOptionsOut.topSizeIdAttr = UBTConnectLibraryModel.staticEntities.uBT_Size.medium;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:J_jVfxabMECLwgGJUnmkWA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// SpacingOptions.BottomSizeId = Base
outVars.value.spacingOptionsOut.bottomSizeIdAttr = UBTConnectLibraryModel.staticEntities.uBT_Size.base;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:kkyxiibOT0+jKZ7mERHIZw", callContext.id);
} else {
// SpacingOptions
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:wKsebaaRfEClu7GTSQRQkw", callContext.id);
// SpacingOptions.VerticalSizeId = Small
outVars.value.spacingOptionsOut.verticalSizeIdAttr = UBTConnectLibraryModel.staticEntities.uBT_Size.small;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:wKsebaaRfEClu7GTSQRQkw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// SpacingOptions.HorizontalSizeId = Base
outVars.value.spacingOptionsOut.horizontalSizeIdAttr = UBTConnectLibraryModel.staticEntities.uBT_Size.base;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:7R2FBwwM70eHmiCyNycY8g", callContext.id);
}

}

}

}

}

return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:f3kkpA_CsEaKKStVTKDWGA", callContext.id);
}

};
var controller = UBTConnectLibraryController.default;
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.GetSpacingOptions_ImageCardContent$vars", [{
name: "In_CardTypeId",
attrName: "in_CardTypeIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.GetSpacingOptions_ImageCardContent$outVars", [{
name: "SpacingOptions",
attrName: "spacingOptionsOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new UBTConnectLibraryModel.SpacingOptionsRec();
},
complexType: UBTConnectLibraryModel.SpacingOptionsRec
}]);
UBTConnectLibraryController.default.clientActionProxies.getSpacingOptions_ImageCardContent$Action = function (in_CardTypeIdIn) {
in_CardTypeIdIn = (in_CardTypeIdIn === undefined) ? "" : in_CardTypeIdIn;
return controller.executeActionInsideJSNode(UBTConnectLibraryController.default.getSpacingOptions_ImageCardContent$Action.bind(controller, in_CardTypeIdIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
SpacingOptions: actionResults.spacingOptionsOut
};
});
};
});

define("UBTConnectLibrary.controller$GetStyle_BackgroundImage", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.controller$FormatStyles", "UBTConnectLibrary.model$BackgroundImageRec"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryClientVariables) {
var OS = OutSystems.Internal;
UBTConnectLibraryController.default.getStyle_BackgroundImage$Action = function (backgroundImageIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.GetStyle_BackgroundImage$vars"))());
vars.value.backgroundImageInLocal = backgroundImageIn.clone();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.GetStyle_BackgroundImage$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:B9yQGCPXNUG+Zh73MgPK8g:/ClientActionFlows.B9yQGCPXNUG+Zh73MgPK8g:CW2DWDH7NGXrm74S0RCqzA", "UBTConnectLibrary", "GetStyle_BackgroundImage", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:WjxvYf1fxkmLsGcQZmOmRw", callContext.id);
// Has Image?
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:cyQX8LDlX0iFQiMA+lREqw", callContext.id) && ((vars.value.backgroundImageInLocal.imageAttr) !== (OS.BuiltinFunctions.nullTextIdentifier())))) {
// Set Background Image
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:CZEes4TcQUW3ghgFBgsJVw", callContext.id);
// Style = FormatStyles(Style, "background-image", BackgroundImage.Image)
outVars.value.styleOut = OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.formatStyles$Action(outVars.value.styleOut, "background-image", vars.value.backgroundImageInLocal.imageAttr, callContext).stylesOutOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
}

// Has Size?
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:b57XEkCqM0SohJL7+hwOBg", callContext.id) && ((vars.value.backgroundImageInLocal.sizeAttr) !== (OS.BuiltinFunctions.nullTextIdentifier())))) {
// Set Background Size
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:PjZBGmDbREmZwXoMegn8Pw", callContext.id);
// Style = FormatStyles(Style, "background-size", BackgroundImage.Size)
outVars.value.styleOut = OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.formatStyles$Action(outVars.value.styleOut, "background-size", vars.value.backgroundImageInLocal.sizeAttr, callContext).stylesOutOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
}

// Has Position?
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:d44XuPI2NEWUt84tkOrgfQ", callContext.id) && ((vars.value.backgroundImageInLocal.positionAttr) !== (OS.BuiltinFunctions.nullTextIdentifier())))) {
// Set Background Position
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:ee6+_kNZZE6eUDJyblBLmw", callContext.id);
// Style = FormatStyles(Style, "background-position", BackgroundImage.Position)
outVars.value.styleOut = OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.formatStyles$Action(outVars.value.styleOut, "background-position", vars.value.backgroundImageInLocal.positionAttr, callContext).stylesOutOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
}

// Has Repeat?
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:Yc8NFcaxQUO5_yF5ii_79Q", callContext.id) && ((vars.value.backgroundImageInLocal.repeatAttr) !== (OS.BuiltinFunctions.nullTextIdentifier())))) {
// Set Background Repeat
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:A6GWlREPZk2Pq87Id4VVgw", callContext.id);
// Style = FormatStyles(Style, "background-repeat", BackgroundImage.Repeat)
outVars.value.styleOut = OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.formatStyles$Action(outVars.value.styleOut, "background-repeat", vars.value.backgroundImageInLocal.repeatAttr, callContext).stylesOutOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
}

// Has Origin?
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:FkCT18VKz0W5E8G8xYs5mw", callContext.id) && ((vars.value.backgroundImageInLocal.originAttr) !== (OS.BuiltinFunctions.nullTextIdentifier())))) {
// Set Background Origin
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:08DWLgJlSk6ZYRo40NDxRA", callContext.id);
// Style = FormatStyles(Style, "background-origin", BackgroundImage.Origin)
outVars.value.styleOut = OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.formatStyles$Action(outVars.value.styleOut, "background-origin", vars.value.backgroundImageInLocal.originAttr, callContext).stylesOutOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
}

// Has Attachment?
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:BxDgMVTIu02f0Lg+FIPWkg", callContext.id) && ((vars.value.backgroundImageInLocal.attachmentAttr) !== (OS.BuiltinFunctions.nullTextIdentifier())))) {
// Set Background Attachment
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:aCsKCnd5D0O+uDhG8BiQBQ", callContext.id);
// Style = FormatStyles(Style, "background-attachment", BackgroundImage.Attachment)
outVars.value.styleOut = OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.formatStyles$Action(outVars.value.styleOut, "background-attachment", vars.value.backgroundImageInLocal.attachmentAttr, callContext).stylesOutOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
}

// Has blend-mode?
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:lHycrv1HFEqxcZbGHA2c7w", callContext.id) && ((vars.value.backgroundImageInLocal.blendModeAttr) !== (OS.BuiltinFunctions.nullTextIdentifier())))) {
// Set Background Blend Mode
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:lwTgmfhcRUWrPP3OwEapzw", callContext.id);
// Style = FormatStyles(Style, "background-blend-mode", BackgroundImage.BlendMode)
outVars.value.styleOut = OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.formatStyles$Action(outVars.value.styleOut, "background-blend-mode", vars.value.backgroundImageInLocal.blendModeAttr, callContext).stylesOutOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:L4WcObyt1EuFw9Q88k4q0Q", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:L4WcObyt1EuFw9Q88k4q0Q", callContext.id);
}

return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:B9yQGCPXNUG+Zh73MgPK8g", callContext.id);
}

};
var controller = UBTConnectLibraryController.default;
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.GetStyle_BackgroundImage$vars", [{
name: "BackgroundImage",
attrName: "backgroundImageInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new UBTConnectLibraryModel.BackgroundImageRec();
},
complexType: UBTConnectLibraryModel.BackgroundImageRec
}]);
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.GetStyle_BackgroundImage$outVars", [{
name: "Style",
attrName: "styleOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnectLibraryController.default.clientActionProxies.getStyle_BackgroundImage$Action = function (backgroundImageIn) {
backgroundImageIn = (backgroundImageIn === undefined) ? new UBTConnectLibraryModel.BackgroundImageRec() : backgroundImageIn;
return controller.executeActionInsideJSNode(UBTConnectLibraryController.default.getStyle_BackgroundImage$Action.bind(controller, backgroundImageIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Style: OS.DataConversion.JSNodeParamConverter.to(actionResults.styleOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("UBTConnectLibrary.controller$GetStyle_BackgroundImageUrl", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.clientVariables"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryClientVariables) {
var OS = OutSystems.Internal;
UBTConnectLibraryController.default.getStyle_BackgroundImageUrl$Action = function (backgroundImageUrlIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.GetStyle_BackgroundImageUrl$vars"))());
vars.value.backgroundImageUrlInLocal = backgroundImageUrlIn;
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.GetStyle_BackgroundImageUrl$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:SId_3zWbtk+vC_s7gjDArQ:/ClientActionFlows.SId_3zWbtk+vC_s7gjDArQ:1EvaK2_ILNo9gOY3IZ_Blw", "UBTConnectLibrary", "GetStyle_BackgroundImageUrl", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:pF5qbVdfxki3Z9oYzl5x+A", callContext.id);
// Valid property?
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:FZ21FBTlX0+OrO4eTfcHJg", callContext.id) && ((vars.value.backgroundImageUrlInLocal) !== (OS.BuiltinFunctions.nullTextIdentifier())))) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:NyGpa2O5AE22qzmj7nySrw", callContext.id);
// Style = "background-image: url('" + BackgroundImageUrl + "');"
outVars.value.styleOut = (("background-image: url(\'" + vars.value.backgroundImageUrlInLocal) + "\');");
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:zOfscZuZkUKSsMofEsuEkQ", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:EiMi_AlR90S8UH_8RgZr6w", callContext.id);
}

return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:SId_3zWbtk+vC_s7gjDArQ", callContext.id);
}

};
var controller = UBTConnectLibraryController.default;
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.GetStyle_BackgroundImageUrl$vars", [{
name: "BackgroundImageUrl",
attrName: "backgroundImageUrlInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.GetStyle_BackgroundImageUrl$outVars", [{
name: "Style",
attrName: "styleOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnectLibraryController.default.clientActionProxies.getStyle_BackgroundImageUrl$Action = function (backgroundImageUrlIn) {
backgroundImageUrlIn = (backgroundImageUrlIn === undefined) ? "" : backgroundImageUrlIn;
return controller.executeActionInsideJSNode(UBTConnectLibraryController.default.getStyle_BackgroundImageUrl$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(backgroundImageUrlIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Style: OS.DataConversion.JSNodeParamConverter.to(actionResults.styleOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("UBTConnectLibrary.controller$GetStyle_Opacity", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.clientVariables"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryClientVariables) {
var OS = OutSystems.Internal;
UBTConnectLibraryController.default.getStyle_Opacity$Action = function (propertyIn, opacityIn, colorIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.GetStyle_Opacity$vars"))());
vars.value.propertyInLocal = propertyIn;
vars.value.opacityInLocal = opacityIn;
vars.value.colorInLocal = colorIn;
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.GetStyle_Opacity$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:gfSlwFKEoEuVhvQq1eq_hA:/ClientActionFlows.gfSlwFKEoEuVhvQq1eq_hA:RiZqJNghHkgIC3MQapdYhg", "UBTConnectLibrary", "GetStyle_Opacity", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:AwcUWR_boEK3Firsrh4dew", callContext.id);
// Valid opacity?
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:Phf+QSd4vEOaDgZJftX2xA", callContext.id) && (vars.value.opacityInLocal.gt(OS.BuiltinFunctions.integerToDecimal(0)) && vars.value.opacityInLocal.lt(OS.BuiltinFunctions.integerToDecimal(1))))) {
// Has Color?
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:tcs75vgHCUSEH1W18FCG1g", callContext.id) && !(((vars.value.colorInLocal) !== (OS.BuiltinFunctions.nullTextIdentifier()))))) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:akQQq2A0+0CS82sPvyrdBg", callContext.id);
// Color = Neutral0
vars.value.colorInLocal = UBTConnectLibraryModel.staticEntities.uBT_Color.neutral0;
}

OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:msgsaiFtvUGaAHa+_pKJRw", callContext.id);
// Style = Property + ": rgba(var(--color-rgb-" + Color + ")," + Opacity + ");"
outVars.value.styleOut = (((((vars.value.propertyInLocal + ": rgba(var(--color-rgb-") + vars.value.colorInLocal) + "),") + OS.BuiltinFunctions.decimalToText(vars.value.opacityInLocal)) + ");");
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:lRZ_1ckFGESyds4G9TCycA", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:7M1Ks5_6tEG+rXLlsW4elw", callContext.id);
}

return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:gfSlwFKEoEuVhvQq1eq_hA", callContext.id);
}

};
var controller = UBTConnectLibraryController.default;
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.GetStyle_Opacity$vars", [{
name: "Property",
attrName: "propertyInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "background-color";
}
}, {
name: "Opacity",
attrName: "opacityInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Decimal,
defaultValue: function () {
return OS.DataTypes.Decimal.defaultValue;
}
}, {
name: "Color",
attrName: "colorInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.GetStyle_Opacity$outVars", [{
name: "Style",
attrName: "styleOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnectLibraryController.default.clientActionProxies.getStyle_Opacity$Action = function (propertyIn, opacityIn, colorIn) {
propertyIn = (propertyIn === undefined) ? "background-color" : propertyIn;
opacityIn = (opacityIn === undefined) ? OS.DataTypes.Decimal.defaultValue : opacityIn;
colorIn = (colorIn === undefined) ? "" : colorIn;
return controller.executeActionInsideJSNode(UBTConnectLibraryController.default.getStyle_Opacity$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(propertyIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(opacityIn, OS.DataTypes.DataTypes.Decimal), OS.DataConversion.JSNodeParamConverter.from(colorIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Style: OS.DataConversion.JSNodeParamConverter.to(actionResults.styleOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("UBTConnectLibrary.controller$GetStyle_SizeOptions", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.controller$FormatStyles", "UBTConnectLibrary.model$SizeOptionsRec"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryClientVariables) {
var OS = OutSystems.Internal;
UBTConnectLibraryController.default.getStyle_SizeOptions$Action = function (propertyIn, sizeOptionsIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.GetStyle_SizeOptions$vars"))());
vars.value.propertyInLocal = propertyIn;
vars.value.sizeOptionsInLocal = sizeOptionsIn.clone();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.GetStyle_SizeOptions$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:ZZc00qnoW0S1SwXhrBfuZQ:/ClientActionFlows.ZZc00qnoW0S1SwXhrBfuZQ:ZSF2YRsM4VZoWgbKI6RLWQ", "UBTConnectLibrary", "GetStyle_SizeOptions", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:EcVIBuNcKUqjp0idjIWI0Q", callContext.id);
// Has Min?
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:G_uP7gJRrU6fEiglOryIqw", callContext.id) && ((vars.value.sizeOptionsInLocal.minAttr) !== (OS.BuiltinFunctions.nullTextIdentifier())))) {
// Set Min
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:hQ0YBJQ7+UGn6Qo9M0ursw", callContext.id);
// Style = FormatStyles(Style, "min-" + Property, SizeOptions.Min)
outVars.value.styleOut = OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.formatStyles$Action(outVars.value.styleOut, ("min-" + vars.value.propertyInLocal), vars.value.sizeOptionsInLocal.minAttr, callContext).stylesOutOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
}

// Has Main?
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:2rQCQH9af0GK+eubm7zEHg", callContext.id) && ((vars.value.sizeOptionsInLocal.mainAttr) !== (OS.BuiltinFunctions.nullTextIdentifier())))) {
// Set Main
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:JcqJ2eWUf0itcyZHl3AYLQ", callContext.id);
// Style = FormatStyles(Style, Property, SizeOptions.Main)
outVars.value.styleOut = OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.formatStyles$Action(outVars.value.styleOut, vars.value.propertyInLocal, vars.value.sizeOptionsInLocal.mainAttr, callContext).stylesOutOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
}

// Has Max?
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:YP0_6lVuN0CLWRdbaCZWXg", callContext.id) && ((vars.value.sizeOptionsInLocal.maxAttr) !== (OS.BuiltinFunctions.nullTextIdentifier())))) {
// Set Max
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:AYUjahhA30WLFphMv_MXSg", callContext.id);
// Style = FormatStyles(Style, "max-" + Property, SizeOptions.Max)
outVars.value.styleOut = OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.formatStyles$Action(outVars.value.styleOut, ("max-" + vars.value.propertyInLocal), vars.value.sizeOptionsInLocal.maxAttr, callContext).stylesOutOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:SWQoNND0B0Cae4T0mFqtNw", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:SWQoNND0B0Cae4T0mFqtNw", callContext.id);
}

return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:ZZc00qnoW0S1SwXhrBfuZQ", callContext.id);
}

};
var controller = UBTConnectLibraryController.default;
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.GetStyle_SizeOptions$vars", [{
name: "Property",
attrName: "propertyInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "SizeOptions",
attrName: "sizeOptionsInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new UBTConnectLibraryModel.SizeOptionsRec();
},
complexType: UBTConnectLibraryModel.SizeOptionsRec
}]);
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.GetStyle_SizeOptions$outVars", [{
name: "Style",
attrName: "styleOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnectLibraryController.default.clientActionProxies.getStyle_SizeOptions$Action = function (propertyIn, sizeOptionsIn) {
propertyIn = (propertyIn === undefined) ? "" : propertyIn;
sizeOptionsIn = (sizeOptionsIn === undefined) ? new UBTConnectLibraryModel.SizeOptionsRec() : sizeOptionsIn;
return controller.executeActionInsideJSNode(UBTConnectLibraryController.default.getStyle_SizeOptions$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(propertyIn, OS.DataTypes.DataTypes.Text), sizeOptionsIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Style: OS.DataConversion.JSNodeParamConverter.to(actionResults.styleOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("UBTConnectLibrary.controller$GetTargetTimeLabel", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.controller$GetTargetTimeLabel.CalculateTargetDateTimeJS", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.model$WeekdayLabelTypeRec", "UBTConnectLibrary.controller$GetConnectWeekdayLabel_ByDate", "UBTConnectLibrary.controller$FormatConnectTime"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibrary_controller_GetTargetTimeLabel_CalculateTargetDateTimeJS, UBTConnectLibraryClientVariables) {
var OS = OutSystems.Internal;
UBTConnectLibraryController.default.getTargetTimeLabel$Action = function (in_TimezoneNameIn, in_TimezoneOffsetIn, in_LocalityIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.GetTargetTimeLabel$vars"))());
vars.value.in_TimezoneNameInLocal = in_TimezoneNameIn;
vars.value.in_TimezoneOffsetInLocal = in_TimezoneOffsetIn;
vars.value.in_LocalityInLocal = in_LocalityIn;
var calculateTargetDateTimeJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.GetTargetTimeLabel$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.calculateTargetDateTimeJSResult = calculateTargetDateTimeJSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:4VjrhDDWSEm7QcvT+X1MnQ:/ClientActionFlows.4VjrhDDWSEm7QcvT+X1MnQ:ccfn3qm3tD3WIkf+q1MBvw", "UBTConnectLibrary", "GetTargetTimeLabel", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:_+pgT_kJjkKfJrngoqPcng", callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:NCIJ0xLKrECDxlasx_FYJg", callContext.id);
calculateTargetDateTimeJSResult.value = controller.safeExecuteJSNode(UBTConnectLibrary_controller_GetTargetTimeLabel_CalculateTargetDateTimeJS, "CalculateTargetDateTime", "GetTargetTimeLabel", {
TimezoneOffset: OS.DataConversion.JSNodeParamConverter.to(vars.value.in_TimezoneOffsetInLocal, OS.DataTypes.DataTypes.Integer),
OriginalDateTime: OS.DataConversion.JSNodeParamConverter.to(OS.BuiltinFunctions.currDateTime(), OS.DataTypes.DataTypes.DateTime),
MappedDateTime: OS.DataConversion.JSNodeParamConverter.to(OS.DataTypes.DateTime.defaultValue, OS.DataTypes.DataTypes.DateTime)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBTConnectLibrary.GetTargetTimeLabel$calculateTargetDateTimeJSResult"))();
jsNodeResult.mappedDateTimeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.MappedDateTime, OS.DataTypes.DataTypes.DateTime);
return jsNodeResult;
}, {}, {});
// Set Outputs
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:UMbBTkxnhU2uNnnPAdlVJQ", callContext.id);
// TargetTimeLabel = GetConnectWeekdayLabel_ByDate(CalculateTargetDateTime.MappedDateTime).ShortLabel + " " + FormatConnectTime(CalculateTargetDateTime.MappedDateTime) + " (" + In_TimezoneName + ", " + In_Locality + ")"
outVars.value.targetTimeLabelOut = (((((((OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.getConnectWeekdayLabel_ByDate$Action(OS.BuiltinFunctions.dateTimeToDate(calculateTargetDateTimeJSResult.value.mappedDateTimeOut), callContext).out_WeekdayLabelOut;
}, OS.DataTypes.DataTypes.Record, callContext.id).shortLabelAttr + " ") + OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.formatConnectTime$Action(OS.BuiltinFunctions.dateTimeToTime(calculateTargetDateTimeJSResult.value.mappedDateTimeOut), callContext).out_FormattedTimeOut;
}, OS.DataTypes.DataTypes.Text, callContext.id)) + " (") + vars.value.in_TimezoneNameInLocal) + ", ") + vars.value.in_LocalityInLocal) + ")");
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:sxnKt1j5WEuZ8nerbFiFQQ", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:4VjrhDDWSEm7QcvT+X1MnQ", callContext.id);
}

};
var controller = UBTConnectLibraryController.default;
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.GetTargetTimeLabel$vars", [{
name: "In_TimezoneName",
attrName: "in_TimezoneNameInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "In_TimezoneOffset",
attrName: "in_TimezoneOffsetInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "In_Locality",
attrName: "in_LocalityInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.GetTargetTimeLabel$calculateTargetDateTimeJSResult", [{
name: "MappedDateTime",
attrName: "mappedDateTimeOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.DateTime,
defaultValue: function () {
return OS.DataTypes.DateTime.defaultValue;
}
}]);
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.GetTargetTimeLabel$outVars", [{
name: "TargetTimeLabel",
attrName: "targetTimeLabelOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnectLibraryController.default.clientActionProxies.getTargetTimeLabel$Action = function (in_TimezoneNameIn, in_TimezoneOffsetIn, in_LocalityIn) {
in_TimezoneNameIn = (in_TimezoneNameIn === undefined) ? "" : in_TimezoneNameIn;
in_TimezoneOffsetIn = (in_TimezoneOffsetIn === undefined) ? 0 : in_TimezoneOffsetIn;
in_LocalityIn = (in_LocalityIn === undefined) ? "" : in_LocalityIn;
return controller.executeActionInsideJSNode(UBTConnectLibraryController.default.getTargetTimeLabel$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(in_TimezoneNameIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(in_TimezoneOffsetIn, OS.DataTypes.DataTypes.Integer), OS.DataConversion.JSNodeParamConverter.from(in_LocalityIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
TargetTimeLabel: OS.DataConversion.JSNodeParamConverter.to(actionResults.targetTimeLabelOut, OS.DataTypes.DataTypes.Text)
};
});
};
});
define("UBTConnectLibrary.controller$GetTargetTimeLabel.CalculateTargetDateTimeJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
const originalDateTimeUTCOffset = $parameters.OriginalDateTime.getTimezoneOffset() * 60 * 1000;
const targetTimezoneUTCOffset = $parameters.TimezoneOffset * 1000;
$parameters.MappedDateTime = new Date($parameters.OriginalDateTime.getTime() + originalDateTimeUTCOffset + targetTimezoneUTCOffset);
};
});

define("UBTConnectLibrary.controller$GetTextOptions_ImageCard", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.model$TextOptionsRec"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryClientVariables) {
var OS = OutSystems.Internal;
UBTConnectLibraryController.default.getTextOptions_ImageCard$Action = function (in_CardTypeIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.GetTextOptions_ImageCard$vars"))());
vars.value.in_CardTypeIdInLocal = in_CardTypeIdIn;
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.GetTextOptions_ImageCard$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:m7+v52GP8kCNGOlPYDLBpg:/ClientActionFlows.m7+v52GP8kCNGOlPYDLBpg:rYHj5adxUN6lM1BDFHJ83Q", "UBTConnectLibrary", "GetTextOptions_ImageCard", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:jjZWrpfrxU27bmRbnEqmTw", callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:X28UoOeOxkaxwAiDxEGG4g", callContext.id);
// TextOptions.FontSize = Base
outVars.value.textOptionsOut.fontSizeAttr = UBTConnectLibraryModel.staticEntities.uBT_FontSize.base;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:X28UoOeOxkaxwAiDxEGG4g", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// TextOptions.FontWeight = SemiBold
outVars.value.textOptionsOut.fontWeightAttr = UBTConnectLibraryModel.staticEntities.uBT_FontWeight.semiBold;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:X28UoOeOxkaxwAiDxEGG4g", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// TextOptions.Color = Neutral10
outVars.value.textOptionsOut.colorAttr = UBTConnectLibraryModel.staticEntities.uBT_Color.neutral10;
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:T_czznGKnE+mYSyIImCJzw", callContext.id) && (vars.value.in_CardTypeIdInLocal === UBTConnectLibraryModel.staticEntities.uBT_ImageCardType.gallery))) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:GuUMdjXSgU+YF3ytvdKX0g", callContext.id);
// TextOptions.FontSize = DoubleExtraSmall
outVars.value.textOptionsOut.fontSizeAttr = UBTConnectLibraryModel.staticEntities.uBT_FontSize.doubleExtraSmall;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:W20o7XFh+kCpSdo9_5gHkQ", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:W20o7XFh+kCpSdo9_5gHkQ", callContext.id);
}

return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:m7+v52GP8kCNGOlPYDLBpg", callContext.id);
}

};
var controller = UBTConnectLibraryController.default;
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.GetTextOptions_ImageCard$vars", [{
name: "In_CardTypeId",
attrName: "in_CardTypeIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.GetTextOptions_ImageCard$outVars", [{
name: "TextOptions",
attrName: "textOptionsOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new UBTConnectLibraryModel.TextOptionsRec();
},
complexType: UBTConnectLibraryModel.TextOptionsRec
}]);
UBTConnectLibraryController.default.clientActionProxies.getTextOptions_ImageCard$Action = function (in_CardTypeIdIn) {
in_CardTypeIdIn = (in_CardTypeIdIn === undefined) ? "" : in_CardTypeIdIn;
return controller.executeActionInsideJSNode(UBTConnectLibraryController.default.getTextOptions_ImageCard$Action.bind(controller, in_CardTypeIdIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
TextOptions: actionResults.textOptionsOut
};
});
};
});

define("UBTConnectLibrary.controller$Initialize_SvgScroll", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.controller$Initialize_SvgScroll.JavaScript1JS", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.controller$SVGHeader_GetPath"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibrary_controller_Initialize_SvgScroll_JavaScript1JS, UBTConnectLibraryClientVariables) {
var OS = OutSystems.Internal;
UBTConnectLibraryController.default.initialize_SvgScroll$Action = function (searchInputIdIn, onSearchStateChangeIn, onSvgStateChangeIn, svgObjectIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.Initialize_SvgScroll$vars"))());
vars.value.searchInputIdInLocal = searchInputIdIn;
vars.value.onSearchStateChangeInLocal = onSearchStateChangeIn;
vars.value.onSvgStateChangeInLocal = onSvgStateChangeIn;
vars.value.svgObjectIdInLocal = svgObjectIdIn;
var javaScript1JSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.Initialize_SvgScroll$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.javaScript1JSResult = javaScript1JSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:6ici6ECtmk2pEjXc971Oww:/ClientActionFlows.6ici6ECtmk2pEjXc971Oww:Nvv0ebBK3UxiLJYKO2bfOA", "UBTConnectLibrary", "Initialize_SvgScroll", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:P+Y_twTU9U6KSfQtr0pVPw", callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:HBYRiy5cpEKMJoMEZ7klIA", callContext.id);
javaScript1JSResult.value = controller.safeExecuteJSNode(UBTConnectLibrary_controller_Initialize_SvgScroll_JavaScript1JS, "JavaScript1", "Initialize_SvgScroll", {
OnSearchStateChange: OS.DataConversion.JSNodeParamConverter.to(vars.value.onSearchStateChangeInLocal, OS.DataTypes.DataTypes.Object),
SearchInputId: OS.DataConversion.JSNodeParamConverter.to(vars.value.searchInputIdInLocal, OS.DataTypes.DataTypes.Text),
OnSvgStateChange: OS.DataConversion.JSNodeParamConverter.to(vars.value.onSvgStateChangeInLocal, OS.DataTypes.DataTypes.Object),
SvgObjectId: OS.DataConversion.JSNodeParamConverter.to(vars.value.svgObjectIdInLocal, OS.DataTypes.DataTypes.Text),
OnDestroy: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBTConnectLibrary.Initialize_SvgScroll$javaScript1JSResult"))();
jsNodeResult.onDestroyOut = OS.DataConversion.JSNodeParamConverter.from($parameters.OnDestroy, OS.DataTypes.DataTypes.Object);
return jsNodeResult;
}, {
SVGHeader_GetPath: UBTConnectLibraryController.default.getClientActionProxies(controller).sVGHeader_GetPath$Action
}, {});
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:enAZsMYK4k6efdUrt9DA6w", callContext.id);
// Destroy = JavaScript1.OnDestroy
outVars.value.destroyOut = javaScript1JSResult.value.onDestroyOut;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:ZDLWoRN08U+d4YEfEgaygA", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:6ici6ECtmk2pEjXc971Oww", callContext.id);
}

};
var controller = UBTConnectLibraryController.default;
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.Initialize_SvgScroll$vars", [{
name: "SearchInputId",
attrName: "searchInputIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "OnSearchStateChange",
attrName: "onSearchStateChangeInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}, {
name: "OnSvgStateChange",
attrName: "onSvgStateChangeInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}, {
name: "SvgObjectId",
attrName: "svgObjectIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.Initialize_SvgScroll$javaScript1JSResult", [{
name: "OnDestroy",
attrName: "onDestroyOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.Initialize_SvgScroll$outVars", [{
name: "Destroy",
attrName: "destroyOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
UBTConnectLibraryController.default.clientActionProxies.initialize_SvgScroll$Action = function (searchInputIdIn, onSearchStateChangeIn, onSvgStateChangeIn, svgObjectIdIn) {
searchInputIdIn = (searchInputIdIn === undefined) ? "" : searchInputIdIn;
onSearchStateChangeIn = (onSearchStateChangeIn === undefined) ? null : onSearchStateChangeIn;
onSvgStateChangeIn = (onSvgStateChangeIn === undefined) ? null : onSvgStateChangeIn;
svgObjectIdIn = (svgObjectIdIn === undefined) ? "" : svgObjectIdIn;
return controller.executeActionInsideJSNode(UBTConnectLibraryController.default.initialize_SvgScroll$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(searchInputIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(onSearchStateChangeIn, OS.DataTypes.DataTypes.Object), OS.DataConversion.JSNodeParamConverter.from(onSvgStateChangeIn, OS.DataTypes.DataTypes.Object), OS.DataConversion.JSNodeParamConverter.from(svgObjectIdIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Destroy: OS.DataConversion.JSNodeParamConverter.to(actionResults.destroyOut, OS.DataTypes.DataTypes.Object)
};
});
};
});
define("UBTConnectLibrary.controller$Initialize_SvgScroll.JavaScript1JS", [], function () {
return function ($parameters, $actions, $roles, $public) {
  // ---- Resolve scroll container ----
  const container = document.getElementsByClassName("active-screen")?.[0];
  if (!container) return;

  // ---- Resolve elements ----
  const searchInput = document.getElementById($parameters.SearchInputId);
  const svgObject = document.getElementById($parameters.SvgObjectId);

  const svgWrapper = svgObject
    ? svgObject.getElementsByClassName('svg-wrapper')?.[0]
    : null;

  const svgPath = svgObject
    ? svgObject.getElementsByTagName("path")?.[0]
    : null;

  const header = document.getElementsByClassName("header")?.[0];

  if (!header) return;

  // ---- Pre-calc static values ----
  // Read CSS variables directly from the DOM
  const headerSize =
    parseInt(getComputedStyle(header).getPropertyValue('--header-size'), 10) || 0;

  const statusBarSize =
    parseInt(
      getComputedStyle(document.body).getPropertyValue('--status-bar-height'),
      10
    ) || 0;

const svgSize =
    parseInt(
      getComputedStyle(svgWrapper).getPropertyValue('height'),
      10
    ) || 0;


  // ---- Thresholds ----
  const searchThreshold = searchInput?.offsetHeight ?? null;

  const svgThreshold =
    svgWrapper
      ? svgWrapper.offsetHeight
      : null;

  // ---- Independent states ----
  let lastSearchState = false;
  let lastSvgState = false;

  // rAF gate
  let ticking = false;

  // ---- Scroll logic ----
  function onScroll() {
    const scrollTop = container.scrollTop;

    // ---------- Search behavior ----------
    if (searchThreshold !== null) {
      const currentSearchState = scrollTop >= searchThreshold;

      if (currentSearchState !== lastSearchState) {
        lastSearchState = currentSearchState;
        $parameters.OnSearchStateChange(currentSearchState);
      }
    }

    // ---------- SVG threshold behavior ----------
    if (svgThreshold !== null) {
      const currentSvgState = scrollTop >= svgThreshold;

      if (currentSvgState !== lastSvgState) {
        lastSvgState = currentSvgState;
        $parameters.OnSvgStateChange(currentSvgState);
      }
    }

    // ---------- SVG morph behavior ----------
    if (svgPath && svgThreshold !== null && scrollTop <= svgThreshold) {
      const progress = Math.min(scrollTop / svgThreshold, 1);

      let path = $actions.SVGHeader_GetPath(100, 100 - (progress*100), svgSize ).Out_Path;


      svgPath.setAttribute(
        'd',
        path
      );
    }

    // ---------- Shadow behavior ----------
    const atTop = scrollTop === 0;

    const atBottom =
      Math.abs(
        container.scrollHeight -
        (scrollTop + container.clientHeight)
      ) < 1;

    container.style.setProperty(
      '--header-shadow-scroll',
      !atTop && lastSvgState ? 'visible' : 'hidden'
    );

    container.style.setProperty(
      '--footer-shadow-scroll',
      atBottom ? 'hidden' : 'visible'
    );

    ticking = false;
  }

  // ---- Scroll event handler (wrapper) ----
  function onScrollEvent() {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(onScroll);
    }
  }

  // ---- Attach listener ----
  container.addEventListener('scroll', onScrollEvent, { passive: true });

  // ---- Initial evaluation (important) ----
  requestAnimationFrame(onScroll);

  // ---- Destroy callback ----
  // Expose a cleanup function to OutSystems
  $parameters.OnDestroy = function () {
    container.removeEventListener('scroll', onScrollEvent);
  };
};
});

define("UBTConnectLibrary.controller$Input_ClearString", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTJavaScriptUtils.controller", "UBTConnectLibrary.clientVariables", "UBTJavaScriptUtils.controller$JSUtils_RunFunc", "UBTConnectLibrary.referencesHealth", "UBTConnectLibrary.referencesHealth$UBTJavaScriptUtils", "UBTJavaScriptUtils.controller$JSUtils_Element_GetProperty_Obj", "UBTJavaScriptUtils.controller$JSUtils_Element_Operations_GetElementById"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTJavaScriptUtilsController, UBTConnectLibraryClientVariables) {
var OS = OutSystems.Internal;
UBTConnectLibraryController.default.input_ClearString$Action = function (inputIdIn, focusOnInputIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.Input_ClearString$vars"))());
vars.value.inputIdInLocal = inputIdIn;
vars.value.focusOnInputInLocal = focusOnInputIn;
var jSUtils_Element_GetProperty_ObjVar = new OS.DataTypes.VariableHolder();
var jSUtils_Element_Operations_GetElementByIdVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.jSUtils_Element_GetProperty_ObjVar = jSUtils_Element_GetProperty_ObjVar;
varBag.jSUtils_Element_Operations_GetElementByIdVar = jSUtils_Element_Operations_GetElementByIdVar;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:zgdwizFygUyy5x_d46s5nA:/ClientActionFlows.zgdwizFygUyy5x_d46s5nA:cLx9W0TRZ3bsOE_iyH4C9A", "UBTConnectLibrary", "Input_ClearString", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:wLNJtkBpTEC901qnogVxlQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:iG4pzx45H0mPTX2TDaPQrQ", callContext.id);
// Execute Action: JSUtils_Element_Operations_GetElementById
jSUtils_Element_Operations_GetElementByIdVar.value = UBTJavaScriptUtilsController.default.jSUtils_Element_Operations_GetElementById$Action(vars.value.inputIdInLocal, callContext);

OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:jRNklNUTWUG_Et4vUj2fAg", callContext.id);
// Execute Action: JSUtils_Element_GetProperty_Obj
jSUtils_Element_GetProperty_ObjVar.value = UBTJavaScriptUtilsController.default.jSUtils_Element_GetProperty_Obj$Action(jSUtils_Element_Operations_GetElementByIdVar.value.elementOut, "clearStringAction", callContext);

OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:P+zNAniM_0qWxCtHBcPTlw", callContext.id);
// Execute Action: JSUtils_RunFunc
UBTJavaScriptUtilsController.default.jSUtils_RunFunc$Action(jSUtils_Element_GetProperty_ObjVar.value.valueOut, OS.BuiltinFunctions.toObject(vars.value.focusOnInputInLocal), callContext);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:Q3E1mQzvakqkzFrrFUe0NA", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:zgdwizFygUyy5x_d46s5nA", callContext.id);
}

};
var controller = UBTConnectLibraryController.default;
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.Input_ClearString$vars", [{
name: "InputId",
attrName: "inputIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "FocusOnInput",
attrName: "focusOnInputInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
UBTConnectLibraryController.default.clientActionProxies.input_ClearString$Action = function (inputIdIn, focusOnInputIn) {
inputIdIn = (inputIdIn === undefined) ? "" : inputIdIn;
focusOnInputIn = (focusOnInputIn === undefined) ? false : focusOnInputIn;
return controller.executeActionInsideJSNode(UBTConnectLibraryController.default.input_ClearString$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(inputIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(focusOnInputIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("UBTConnectLibrary.controller$IsEmailValid", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.controller$IsEmailValid.ValidateEmailJS", "UBTConnectLibrary.clientVariables"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibrary_controller_IsEmailValid_ValidateEmailJS, UBTConnectLibraryClientVariables) {
var OS = OutSystems.Internal;
UBTConnectLibraryController.default.isEmailValid$Action = function (in_TextIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.IsEmailValid$vars"))());
vars.value.in_TextInLocal = in_TextIn;
var validateEmailJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.IsEmailValid$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.validateEmailJSResult = validateEmailJSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:vzj7TY4ZokSbK5IoWzG4WA:/ClientActionFlows.vzj7TY4ZokSbK5IoWzG4WA:2teO3m4s4crJAq7EDjjssQ", "UBTConnectLibrary", "IsEmailValid", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:TnjoEXhxcU2yNRZguct1Vw", callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:2Sht5dUWyUWOz0i1ud4xaA", callContext.id);
validateEmailJSResult.value = controller.safeExecuteJSNode(UBTConnectLibrary_controller_IsEmailValid_ValidateEmailJS, "ValidateEmail", "IsEmailValid", {
Text: OS.DataConversion.JSNodeParamConverter.to(OS.BuiltinFunctions.trim(vars.value.in_TextInLocal), OS.DataTypes.DataTypes.Text),
Result: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBTConnectLibrary.IsEmailValid$validateEmailJSResult"))();
jsNodeResult.resultOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Result, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:q4YMeYFzMUqIejhsDLgaQA", callContext.id);
// Out_Valid = ValidateEmail.Result
outVars.value.out_ValidOut = validateEmailJSResult.value.resultOut;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:AM6KhP_20UmYUhP6DPMBVw", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:vzj7TY4ZokSbK5IoWzG4WA", callContext.id);
}

};
var controller = UBTConnectLibraryController.default;
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.IsEmailValid$vars", [{
name: "In_Text",
attrName: "in_TextInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.IsEmailValid$validateEmailJSResult", [{
name: "Result",
attrName: "resultOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.IsEmailValid$outVars", [{
name: "Out_Valid",
attrName: "out_ValidOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
UBTConnectLibraryController.default.clientActionProxies.isEmailValid$Action = function (in_TextIn) {
in_TextIn = (in_TextIn === undefined) ? "" : in_TextIn;
return controller.executeActionInsideJSNode(UBTConnectLibraryController.default.isEmailValid$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(in_TextIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Out_Valid: OS.DataConversion.JSNodeParamConverter.to(actionResults.out_ValidOut, OS.DataTypes.DataTypes.Boolean)
};
});
};
});
define("UBTConnectLibrary.controller$IsEmailValid.ValidateEmailJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var text = $parameters.Text;
$parameters.Result = /^[a-z0-9][a-z0-9_\&\-\.\+]{0,31}@[a-z0-9\-]{1,}(\.[a-z0-9]{2,20}){1,}$/i.test(text.toLowerCase());
};
});

define("UBTConnectLibrary.controller$IsPhoneNumberValid", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.controller$IsPhoneNumberValid.CheckFormatPhoneNumberJS", "UBTConnectLibrary.clientVariables"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibrary_controller_IsPhoneNumberValid_CheckFormatPhoneNumberJS, UBTConnectLibraryClientVariables) {
var OS = OutSystems.Internal;
UBTConnectLibraryController.default.isPhoneNumberValid$Action = function (in_TextIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.IsPhoneNumberValid$vars"))());
vars.value.in_TextInLocal = in_TextIn;
var checkFormatPhoneNumberJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.IsPhoneNumberValid$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.checkFormatPhoneNumberJSResult = checkFormatPhoneNumberJSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:LxW+4jnk+k2tacuPW4zc7Q:/ClientActionFlows.LxW+4jnk+k2tacuPW4zc7Q:__jTfWlA1f8ygzYcRi7yfw", "UBTConnectLibrary", "IsPhoneNumberValid", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:PbTRjBAGF0mQZ3zpQ_nXPQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:Rvq5JysQ5kKWnPtsxLZhtw", callContext.id);
// Check phone number 
checkFormatPhoneNumberJSResult.value = controller.safeExecuteJSNode(UBTConnectLibrary_controller_IsPhoneNumberValid_CheckFormatPhoneNumberJS, "CheckFormatPhoneNumber", "IsPhoneNumberValid", {
phoneText: OS.DataConversion.JSNodeParamConverter.to(OS.BuiltinFunctions.trim(vars.value.in_TextInLocal), OS.DataTypes.DataTypes.Text),
IsValid: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBTConnectLibrary.IsPhoneNumberValid$checkFormatPhoneNumberJSResult"))();
jsNodeResult.isValidOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsValid, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:uDsIOTQQAkqSL4bBVJbZXw", callContext.id);
// Out_Valid = CheckFormatPhoneNumber.IsValid
outVars.value.out_ValidOut = checkFormatPhoneNumberJSResult.value.isValidOut;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:yo6poVuE9kmN_PAwtLWjQg", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:LxW+4jnk+k2tacuPW4zc7Q", callContext.id);
}

};
var controller = UBTConnectLibraryController.default;
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.IsPhoneNumberValid$vars", [{
name: "In_Text",
attrName: "in_TextInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.IsPhoneNumberValid$checkFormatPhoneNumberJSResult", [{
name: "IsValid",
attrName: "isValidOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.IsPhoneNumberValid$outVars", [{
name: "Out_Valid",
attrName: "out_ValidOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
UBTConnectLibraryController.default.clientActionProxies.isPhoneNumberValid$Action = function (in_TextIn) {
in_TextIn = (in_TextIn === undefined) ? "" : in_TextIn;
return controller.executeActionInsideJSNode(UBTConnectLibraryController.default.isPhoneNumberValid$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(in_TextIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Out_Valid: OS.DataConversion.JSNodeParamConverter.to(actionResults.out_ValidOut, OS.DataTypes.DataTypes.Boolean)
};
});
};
});
define("UBTConnectLibrary.controller$IsPhoneNumberValid.CheckFormatPhoneNumberJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
function isPhoneNumber(phone)
{
    if(phone === null){
        return false;
    } 
    else {
        var phoneno = /^\+?(\d+( |\-)?)*\d$/;
        if(phone.match(phoneno))
        {
            return true;
        }
          else
        {
            return false;
        }
    }
}


$parameters.IsValid = isPhoneNumber($parameters.phoneText);
};
});

define("UBTConnectLibrary.controller$Merge_StyleOptions", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryClientVariables) {
var OS = OutSystems.Internal;
UBTConnectLibraryController.default.merge_StyleOptions$Action = function (main_StyleOptionsIn, new_StyleOptionsIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.Merge_StyleOptions$vars"))());
vars.value.main_StyleOptionsInLocal = main_StyleOptionsIn.clone();
vars.value.new_StyleOptionsInLocal = new_StyleOptionsIn.clone();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.Merge_StyleOptions$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:cC7ddsu51EanqP+ihjjTHw:/ClientActionFlows.cC7ddsu51EanqP+ihjjTHw:IlEFwCqTQxIMJcPQBgV82A", "UBTConnectLibrary", "Merge_StyleOptions", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:P_nqQIS20EG3YAmYXJgCUA", callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:9MHmN3VMRE28I1UKdXIyIg", callContext.id);
// Result_StyleOptions = Main_StyleOptions
outVars.value.result_StyleOptionsOut = vars.value.main_StyleOptionsInLocal;
// Background
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:kgvVkM2fTk+NJAff90hdLw", callContext.id) && !(vars.value.new_StyleOptionsInLocal.backgroundAttr.equals(vars.value.emptyStyleOptionsVar.backgroundAttr)))) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:p0YdhBpJX0+Fbv07Xvgryw", callContext.id);
// Result_StyleOptions.Background = New_StyleOptions.Background
outVars.value.result_StyleOptionsOut.backgroundAttr = vars.value.new_StyleOptionsInLocal.backgroundAttr;
}

// PaddingSize
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:jZDp79ba+EqE0XKIbgJOog", callContext.id) && !(vars.value.new_StyleOptionsInLocal.paddingSizeAttr.equals(vars.value.emptyStyleOptionsVar.paddingSizeAttr)))) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:6DfLPe0i+UiU+BKOKQUSlA", callContext.id);
// Result_StyleOptions.PaddingSize = New_StyleOptions.PaddingSize
outVars.value.result_StyleOptionsOut.paddingSizeAttr = vars.value.new_StyleOptionsInLocal.paddingSizeAttr;
}

// MarginSize
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:EH2abxboQ0mCG7cuAhZnMQ", callContext.id) && !(vars.value.new_StyleOptionsInLocal.marginSizeAttr.equals(vars.value.emptyStyleOptionsVar.marginSizeAttr)))) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:AN7X8SXyg0SW6rjVon+PGA", callContext.id);
// Result_StyleOptions.MarginSize = New_StyleOptions.MarginSize
outVars.value.result_StyleOptionsOut.marginSizeAttr = vars.value.new_StyleOptionsInLocal.marginSizeAttr;
}

// BorderOptions
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:CYeYaJ6H5UCwIxVCqzsNHA", callContext.id) && !(vars.value.new_StyleOptionsInLocal.borderOptionsAttr.equals(vars.value.emptyStyleOptionsVar.borderOptionsAttr)))) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:qrXvMzIfF0GbyDNE_NZuow", callContext.id);
// Result_StyleOptions.BorderOptions = New_StyleOptions.BorderOptions
outVars.value.result_StyleOptionsOut.borderOptionsAttr = vars.value.new_StyleOptionsInLocal.borderOptionsAttr;
}

// TextOptions
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:EYV3e_lb+U2y_DRkRx6MXA", callContext.id) && !(vars.value.new_StyleOptionsInLocal.textOptionsAttr.equals(vars.value.emptyStyleOptionsVar.textOptionsAttr)))) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:_F_IM+_GDU6lNGMeh3L0Qg", callContext.id);
// Result_StyleOptions.TextOptions = New_StyleOptions.TextOptions
outVars.value.result_StyleOptionsOut.textOptionsAttr = vars.value.new_StyleOptionsInLocal.textOptionsAttr;
}

// DisplayOptions
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:8m0MnrLwZk6me6KN4JSO9Q", callContext.id) && !(vars.value.new_StyleOptionsInLocal.displayOptionsAttr.equals(vars.value.emptyStyleOptionsVar.displayOptionsAttr)))) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:PbkQI8uVCkqg9IyPwotWOg", callContext.id);
// Result_StyleOptions.DisplayOptions = New_StyleOptions.DisplayOptions
outVars.value.result_StyleOptionsOut.displayOptionsAttr = vars.value.new_StyleOptionsInLocal.displayOptionsAttr;
}

// BorderOptions
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:fJuQuZB+j02GVBF81Cz58w", callContext.id) && !(vars.value.new_StyleOptionsInLocal.heightOptionsAttr.equals(vars.value.emptyStyleOptionsVar.heightOptionsAttr)))) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:6i2_bQ54VESU67_LyP4bbQ", callContext.id);
// Result_StyleOptions.HeightOptions = New_StyleOptions.HeightOptions
outVars.value.result_StyleOptionsOut.heightOptionsAttr = vars.value.new_StyleOptionsInLocal.heightOptionsAttr;
}

// WidthOptions
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:S+hUO6C4SUW5pbpBjWuIDw", callContext.id) && !(vars.value.new_StyleOptionsInLocal.widthOptionsAttr.equals(vars.value.emptyStyleOptionsVar.widthOptionsAttr)))) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:p4QYytbU8kGDHpyCcPughA", callContext.id);
// Result_StyleOptions.WidthOptions = New_StyleOptions.WidthOptions
outVars.value.result_StyleOptionsOut.widthOptionsAttr = vars.value.new_StyleOptionsInLocal.widthOptionsAttr;
}

// ShadowId
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:u9_n3C0NAEuDCyQNa2cr+A", callContext.id) && !((vars.value.new_StyleOptionsInLocal.shadowIdAttr === vars.value.emptyStyleOptionsVar.shadowIdAttr)))) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:erszV_G8P0ei7X0nQsExTw", callContext.id);
// Result_StyleOptions.ShadowId = New_StyleOptions.ShadowId
outVars.value.result_StyleOptionsOut.shadowIdAttr = vars.value.new_StyleOptionsInLocal.shadowIdAttr;
}

// IsSkeletonElement
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:_WfLj354SUCTG65_2_gcHQ", callContext.id) && (vars.value.new_StyleOptionsInLocal.isSkeletonElementAttr === vars.value.emptyStyleOptionsVar.isSkeletonElementAttr))) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:nef9evIQ4EGjwCbEq6xm7w", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:LZMBgzlv1EK1_84ItXDs6w", callContext.id);
// Result_StyleOptions.IsSkeletonElement = New_StyleOptions.IsSkeletonElement
outVars.value.result_StyleOptionsOut.isSkeletonElementAttr = vars.value.new_StyleOptionsInLocal.isSkeletonElementAttr;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:nef9evIQ4EGjwCbEq6xm7w", callContext.id);
}

return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:cC7ddsu51EanqP+ihjjTHw", callContext.id);
}

};
var controller = UBTConnectLibraryController.default;
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.Merge_StyleOptions$vars", [{
name: "Main_StyleOptions",
attrName: "main_StyleOptionsInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new UBTConnectLibraryModel.ContainerOptionsRec();
},
complexType: UBTConnectLibraryModel.ContainerOptionsRec
}, {
name: "New_StyleOptions",
attrName: "new_StyleOptionsInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new UBTConnectLibraryModel.ContainerOptionsRec();
},
complexType: UBTConnectLibraryModel.ContainerOptionsRec
}, {
name: "EmptyStyleOptions",
attrName: "emptyStyleOptionsVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new UBTConnectLibraryModel.ContainerOptionsRec();
},
complexType: UBTConnectLibraryModel.ContainerOptionsRec
}]);
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.Merge_StyleOptions$outVars", [{
name: "Result_StyleOptions",
attrName: "result_StyleOptionsOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new UBTConnectLibraryModel.ContainerOptionsRec();
},
complexType: UBTConnectLibraryModel.ContainerOptionsRec
}]);
UBTConnectLibraryController.default.clientActionProxies.merge_StyleOptions$Action = function (main_StyleOptionsIn, new_StyleOptionsIn) {
main_StyleOptionsIn = (main_StyleOptionsIn === undefined) ? new UBTConnectLibraryModel.ContainerOptionsRec() : main_StyleOptionsIn;
new_StyleOptionsIn = (new_StyleOptionsIn === undefined) ? new UBTConnectLibraryModel.ContainerOptionsRec() : new_StyleOptionsIn;
return controller.executeActionInsideJSNode(UBTConnectLibraryController.default.merge_StyleOptions$Action.bind(controller, main_StyleOptionsIn, new_StyleOptionsIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Result_StyleOptions: actionResults.result_StyleOptionsOut
};
});
};
});

define("UBTConnectLibrary.controller$OnApplicationReady_BottomBarSlider", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.controller$OnApplicationReady_BottomBarSlider.InitializeJS", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.controller$BottomBarSlider_ForceRefresh"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibrary_controller_OnApplicationReady_BottomBarSlider_InitializeJS, UBTConnectLibraryClientVariables) {
var OS = OutSystems.Internal;
UBTConnectLibraryController.default.onApplicationReady_BottomBarSlider$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:3p8AxLL5eUCpO53f7IzYGA:/ClientActionFlows.3p8AxLL5eUCpO53f7IzYGA:sYR37LFL+v0FrZE32UEAZg", "UBTConnectLibrary", "OnApplicationReady_BottomBarSlider", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:GSA0uXaiJ0+zoHu6H14BxA", callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:9jNEANwjukS2zffxOTjHNw", callContext.id);
controller.safeExecuteJSNode(UBTConnectLibrary_controller_OnApplicationReady_BottomBarSlider_InitializeJS, "Initialize", "OnApplicationReady_BottomBarSlider", null, function ($parameters) {
}, {
BottomBarSlider_ForceRefresh: UBTConnectLibraryController.default.getClientActionProxies(controller).bottomBarSlider_ForceRefresh$Action
}, {});
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:8JteUZ8igUGFzsWjvFGh_g", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:3p8AxLL5eUCpO53f7IzYGA", callContext.id);
}

};
var controller = UBTConnectLibraryController.default;
UBTConnectLibraryController.default.clientActionProxies.onApplicationReady_BottomBarSlider$Action = function () {
return controller.executeActionInsideJSNode(UBTConnectLibraryController.default.onApplicationReady_BottomBarSlider$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("UBTConnectLibrary.controller$OnApplicationReady_BottomBarSlider.InitializeJS", [], function () {
return function ($actions, $roles, $public) {
var slider = document.createElement("div");
slider.classList.add("dx-bottom-bar-slider");
slider.appendChild(document.createElement("div"));

window.addEventListener("dx-navigation-transition-start", function(evt) {
    var bottomBar = evt.detail.to.querySelector(".bottom-bar");
    var hasActiveItem = false;
    var direction = 1;

    if (bottomBar) {
        var items = bottomBar.querySelectorAll('.list  > a');
        var activeItemIndex = -1;
        
        for (var i = 0; i < items.length; i++) {
            if (items[i].matches(".active")) {
                activeItemIndex = i;
                break;
            }
        }

        slider.style.setProperty("--dx-bottom-bar-items", items.length);
        if (activeItemIndex != -1) {
            if (slider.parentNode) {
                // Detect direction of motion in the bottom bar
                var previousActiveItemIndex = Number(slider.style.getPropertyValue("--dx-bottom-bar-active-item"));
                direction = activeItemIndex >= previousActiveItemIndex? 1 : -1;
            }

            slider.style.setProperty("--dx-bottom-bar-active-item", activeItemIndex)
            hasActiveItem = true;
        }
    }

    slider.style.setProperty("--dx-bottom-bar-transition-duration", evt.detail.duration + "ms");
    document.getElementById("transitionContainer").classList.toggle("dx-bottom-bar-slider-reverse-direction", direction < 0);

    if (hasActiveItem) {
        
        if (!slider.parentNode) {
            slider.classList.add("dx-bottom-bar-slider-appear");
            slider.addEventListener("animationend", function() {
                slider.classList.remove("dx-bottom-bar-slider-appear");
            }, { once: true });

            document.getElementById("transitionContainer").appendChild(slider);
        }

    } else {

        if (slider.parentNode) {
            slider.classList.add("dx-bottom-bar-slider-disappear");
            slider.addEventListener("animationend", function() {
                slider.classList.remove("dx-bottom-bar-slider-disappear");
                slider.parentNode.removeChild(slider);
            }, { once: true });
        }

    }

});

$actions.BottomBarSlider_ForceRefresh();
};
});

define("UBTConnectLibrary.controller$OnApplicationReady_MobileKeyboardVisible", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.controller$OnApplicationReady_MobileKeyboardVisible.HandleMobileKeyboardVisibilityJS", "UBTConnectLibrary.clientVariables"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibrary_controller_OnApplicationReady_MobileKeyboardVisible_HandleMobileKeyboardVisibilityJS, UBTConnectLibraryClientVariables) {
var OS = OutSystems.Internal;
UBTConnectLibraryController.default.onApplicationReady_MobileKeyboardVisible$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:lFh1kWl9tk6j7RuleQazJg:/ClientActionFlows.lFh1kWl9tk6j7RuleQazJg:8YGut+Q4J9NdkwdzUEnFnA", "UBTConnectLibrary", "OnApplicationReady_MobileKeyboardVisible", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:BEwlYHhIRE6plC9a2qVSWA", callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:HRmKYXhST0yLxvgyfV66Hw", callContext.id);
controller.safeExecuteJSNode(UBTConnectLibrary_controller_OnApplicationReady_MobileKeyboardVisible_HandleMobileKeyboardVisibilityJS, "HandleMobileKeyboardVisibility", "OnApplicationReady_MobileKeyboardVisible", null, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:+7UwsyVcI0ywOoaKW2+YNg", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:lFh1kWl9tk6j7RuleQazJg", callContext.id);
}

};
var controller = UBTConnectLibraryController.default;
UBTConnectLibraryController.default.clientActionProxies.onApplicationReady_MobileKeyboardVisible$Action = function () {
return controller.executeActionInsideJSNode(UBTConnectLibraryController.default.onApplicationReady_MobileKeyboardVisible$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("UBTConnectLibrary.controller$OnApplicationReady_MobileKeyboardVisible.HandleMobileKeyboardVisibilityJS", [], function () {
return function ($actions, $roles, $public) {
if (window.cordova) {
    // This requires the KeyboardPlugin
    window.addEventListener("keyboardDidShow", function() {
        document.body.classList.add("dx-mobile-keyboard-visible");
    });

    window.addEventListener("keyboardDidHide", function() {
        document.body.classList.remove("dx-mobile-keyboard-visible");
    });
}
};
});

define("UBTConnectLibrary.controller$PreetyFormatDate", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.controller$PreetyFormatDate.JavaScript1JS", "UBTConnectLibrary.clientVariables"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibrary_controller_PreetyFormatDate_JavaScript1JS, UBTConnectLibraryClientVariables) {
var OS = OutSystems.Internal;
UBTConnectLibraryController.default.preetyFormatDate$Action = function (in_DateIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.PreetyFormatDate$vars"))());
vars.value.in_DateInLocal = in_DateIn;
var javaScript1JSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.PreetyFormatDate$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.javaScript1JSResult = javaScript1JSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:SeXuQdnW1U2eqiXzTVAMeQ:/ClientActionFlows.SeXuQdnW1U2eqiXzTVAMeQ:GFj3tQHUuisS7IFV6R7KwQ", "UBTConnectLibrary", "PreetyFormatDate", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:UG1Mx7D230Oh1WodYdQKDw", callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:7EzCkhnIi0WCO9uxixq6cQ", callContext.id);
javaScript1JSResult.value = controller.safeExecuteJSNode(UBTConnectLibrary_controller_PreetyFormatDate_JavaScript1JS, "JavaScript1", "PreetyFormatDate", {
In_DateTime: OS.DataConversion.JSNodeParamConverter.to(vars.value.in_DateInLocal, OS.DataTypes.DataTypes.DateTime),
Out1: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBTConnectLibrary.PreetyFormatDate$javaScript1JSResult"))();
jsNodeResult.out1Out = OS.DataConversion.JSNodeParamConverter.from($parameters.Out1, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:Q1yB_iVww0moD44tFQMK5w", callContext.id);
// PrettyDate = JavaScript1.Out1
outVars.value.prettyDateOut = javaScript1JSResult.value.out1Out;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:yaynckm0LkqROO6i1+8s0w", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:SeXuQdnW1U2eqiXzTVAMeQ", callContext.id);
}

};
var controller = UBTConnectLibraryController.default;
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.PreetyFormatDate$vars", [{
name: "In_Date",
attrName: "in_DateInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.DateTime,
defaultValue: function () {
return OS.DataTypes.DateTime.defaultValue;
}
}]);
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.PreetyFormatDate$javaScript1JSResult", [{
name: "Out1",
attrName: "out1Out",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.PreetyFormatDate$outVars", [{
name: "PrettyDate",
attrName: "prettyDateOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnectLibraryController.default.clientActionProxies.preetyFormatDate$Action = function (in_DateIn) {
in_DateIn = (in_DateIn === undefined) ? OS.DataTypes.DateTime.defaultValue : in_DateIn;
return controller.executeActionInsideJSNode(UBTConnectLibraryController.default.preetyFormatDate$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(in_DateIn, OS.DataTypes.DataTypes.DateTime)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
PrettyDate: OS.DataConversion.JSNodeParamConverter.to(actionResults.prettyDateOut, OS.DataTypes.DataTypes.Text)
};
});
};
});
define("UBTConnectLibrary.controller$PreetyFormatDate.JavaScript1JS", [], function () {
return function ($parameters, $actions, $roles, $public) {
function timeAgo(input) {
  let date;
  if (input instanceof Date) {
    date = input;
  } else if (typeof input === "number") {
    // Treat numbers below this threshold as seconds (epoch seconds), otherwise ms.
    date = new Date(input < 1e12 ? input * 1000 : input);
  } else {
    date = new Date(input);
  }

  if (isNaN(date.getTime())) {
    throw new Error("Invalid date input");
  }

  const seconds = Math.floor((Date.now() - date.getTime()) / 1000);

  if (seconds < 0) {
    return "just now";
  }

  const units = [
    { label: "year", seconds: 31536000 },
    { label: "month", seconds: 2592000 },
    { label: "week", seconds: 604800 },
    { label: "day", seconds: 86400 },
    { label: "hour", seconds: 3600 },
    { label: "minute", seconds: 60 },
    { label: "second", seconds: 1 },
  ];

  for (const unit of units) {
    const value = Math.floor(seconds / unit.seconds);
    if (value >= 1) {
      return `${value} ${unit.label}${value > 1 ? "s" : ""} ago`;
    }
  }

  return "just now";
}


$parameters.Out1 = timeAgo($parameters.In_DateTime)
};
});

define("UBTConnectLibrary.controller$RemoveRegexSpecialCharacters", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.controller$RemoveRegexSpecialCharacters.RemoveRegexSpecialCharactersJS", "UBTConnectLibrary.clientVariables"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibrary_controller_RemoveRegexSpecialCharacters_RemoveRegexSpecialCharactersJS, UBTConnectLibraryClientVariables) {
var OS = OutSystems.Internal;
UBTConnectLibraryController.default.removeRegexSpecialCharacters$Action = function (textIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.RemoveRegexSpecialCharacters$vars"))());
vars.value.textInLocal = textIn;
var removeRegexSpecialCharactersJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.RemoveRegexSpecialCharacters$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.removeRegexSpecialCharactersJSResult = removeRegexSpecialCharactersJSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:Oe5YqO3hAkWEjm1yKOQ4ig:/ClientActionFlows.Oe5YqO3hAkWEjm1yKOQ4ig:6glRBjjNB64_IEaHXjWQCQ", "UBTConnectLibrary", "RemoveRegexSpecialCharacters", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:zK6d5k3ZjEO5qVKEFgH7qw", callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:6WtSKd3FXkC1yqEylHLpZQ", callContext.id);
removeRegexSpecialCharactersJSResult.value = controller.safeExecuteJSNode(UBTConnectLibrary_controller_RemoveRegexSpecialCharacters_RemoveRegexSpecialCharactersJS, "RemoveRegexSpecialCharacters", "RemoveRegexSpecialCharacters", {
Text: OS.DataConversion.JSNodeParamConverter.to(vars.value.textInLocal, OS.DataTypes.DataTypes.Text),
Result: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBTConnectLibrary.RemoveRegexSpecialCharacters$removeRegexSpecialCharactersJSResult"))();
jsNodeResult.resultOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Result, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
// TextRegexSafe
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:kv1z8jgb4ki30etMGxM4zw", callContext.id);
// TextRegexSafe = RemoveRegexSpecialCharacters.Result
outVars.value.textRegexSafeOut = removeRegexSpecialCharactersJSResult.value.resultOut;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:qhNJZlDt4EaJxYYsZO4HXA", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:Oe5YqO3hAkWEjm1yKOQ4ig", callContext.id);
}

};
var controller = UBTConnectLibraryController.default;
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.RemoveRegexSpecialCharacters$vars", [{
name: "Text",
attrName: "textInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.RemoveRegexSpecialCharacters$removeRegexSpecialCharactersJSResult", [{
name: "Result",
attrName: "resultOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.RemoveRegexSpecialCharacters$outVars", [{
name: "TextRegexSafe",
attrName: "textRegexSafeOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnectLibraryController.default.clientActionProxies.removeRegexSpecialCharacters$Action = function (textIn) {
textIn = (textIn === undefined) ? "" : textIn;
return controller.executeActionInsideJSNode(UBTConnectLibraryController.default.removeRegexSpecialCharacters$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(textIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
TextRegexSafe: OS.DataConversion.JSNodeParamConverter.to(actionResults.textRegexSafeOut, OS.DataTypes.DataTypes.Text)
};
});
};
});
define("UBTConnectLibrary.controller$RemoveRegexSpecialCharacters.RemoveRegexSpecialCharactersJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
if ($parameters.Text)
    $parameters.Result = $parameters.Text.replace(/[.,#*+?^$&{}()%@|[\-\]\\]/g, ' ')
};
});

define("UBTConnectLibrary.controller$RemoveScrollEvents", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.controller$RemoveScrollEvents.RemoveScrollEventsJS", "UBTConnectLibrary.clientVariables"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibrary_controller_RemoveScrollEvents_RemoveScrollEventsJS, UBTConnectLibraryClientVariables) {
var OS = OutSystems.Internal;
UBTConnectLibraryController.default.removeScrollEvents$Action = function (in_DestroyElementIn, in_MainScrollEventIn, in_ScrollEventIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.RemoveScrollEvents$vars"))());
vars.value.in_DestroyElementInLocal = in_DestroyElementIn;
vars.value.in_MainScrollEventInLocal = in_MainScrollEventIn;
vars.value.in_ScrollEventInLocal = in_ScrollEventIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:cthVkEkNb0q6riQM+XsAaQ:/ClientActionFlows.cthVkEkNb0q6riQM+XsAaQ:gHOygeCTuP0LKd2b3QSGWw", "UBTConnectLibrary", "RemoveScrollEvents", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:kYgSgnrCDESZrfvd6OA+Cw", callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:kypNacnRcEaklsYLRPgiIw", callContext.id);
controller.safeExecuteJSNode(UBTConnectLibrary_controller_RemoveScrollEvents_RemoveScrollEventsJS, "RemoveScrollEvents", "RemoveScrollEvents", {
In_MainScrollEvent: OS.DataConversion.JSNodeParamConverter.to(vars.value.in_MainScrollEventInLocal, OS.DataTypes.DataTypes.Object),
In_ScrollEvent: OS.DataConversion.JSNodeParamConverter.to(vars.value.in_ScrollEventInLocal, OS.DataTypes.DataTypes.Object),
In_DestroyElement: OS.DataConversion.JSNodeParamConverter.to(vars.value.in_DestroyElementInLocal, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:RwZEK9UcyUC5mndhc3J_jg", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:cthVkEkNb0q6riQM+XsAaQ", callContext.id);
}

};
var controller = UBTConnectLibraryController.default;
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.RemoveScrollEvents$vars", [{
name: "In_DestroyElement",
attrName: "in_DestroyElementInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}, {
name: "In_MainScrollEvent",
attrName: "in_MainScrollEventInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}, {
name: "In_ScrollEvent",
attrName: "in_ScrollEventInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
UBTConnectLibraryController.default.clientActionProxies.removeScrollEvents$Action = function (in_DestroyElementIn, in_MainScrollEventIn, in_ScrollEventIn) {
in_DestroyElementIn = (in_DestroyElementIn === undefined) ? null : in_DestroyElementIn;
in_MainScrollEventIn = (in_MainScrollEventIn === undefined) ? null : in_MainScrollEventIn;
in_ScrollEventIn = (in_ScrollEventIn === undefined) ? null : in_ScrollEventIn;
return controller.executeActionInsideJSNode(UBTConnectLibraryController.default.removeScrollEvents$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(in_DestroyElementIn, OS.DataTypes.DataTypes.Object), OS.DataConversion.JSNodeParamConverter.from(in_MainScrollEventIn, OS.DataTypes.DataTypes.Object), OS.DataConversion.JSNodeParamConverter.from(in_ScrollEventIn, OS.DataTypes.DataTypes.Object)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("UBTConnectLibrary.controller$RemoveScrollEvents.RemoveScrollEventsJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
ScrollEvent.removeEvents($parameters.In_DestroyElement,$parameters.In_MainScrollEvent,$parameters.In_ScrollEvent);
};
});

define("UBTConnectLibrary.controller$ResetSvgFlags", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.controller$ResetSvgFlags.ResetSvgVariablesJS", "UBTConnectLibrary.clientVariables"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibrary_controller_ResetSvgFlags_ResetSvgVariablesJS, UBTConnectLibraryClientVariables) {
var OS = OutSystems.Internal;
UBTConnectLibraryController.default.resetSvgFlags$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:kmPPvaOaxEm1unjjIGbWyQ:/ClientActionFlows.kmPPvaOaxEm1unjjIGbWyQ:slIFc210yT5yg9_c0ZTL8A", "UBTConnectLibrary", "ResetSvgFlags", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:TkgYys06aEGMjf5rFo0mdg", callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:p1zQFWU5gU2qf1QTwM8pFg", callContext.id);
controller.safeExecuteJSNode(UBTConnectLibrary_controller_ResetSvgFlags_ResetSvgVariablesJS, "ResetSvgVariables", "ResetSvgFlags", null, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:lVoz_GwPfkuMHmA7qHKXvw", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:kmPPvaOaxEm1unjjIGbWyQ", callContext.id);
}

};
var controller = UBTConnectLibraryController.default;
UBTConnectLibraryController.default.clientActionProxies.resetSvgFlags$Action = function () {
return controller.executeActionInsideJSNode(UBTConnectLibraryController.default.resetSvgFlags$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("UBTConnectLibrary.controller$ResetSvgFlags.ResetSvgVariablesJS", [], function () {
return function ($actions, $roles, $public) {
ScrollEvent.resetSvgVars();
};
});

define("UBTConnectLibrary.controller$SetHomeScroll", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.controller$SetHomeScroll.SetHomeScrollEventsJS", "UBTConnectLibrary.clientVariables"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibrary_controller_SetHomeScroll_SetHomeScrollEventsJS, UBTConnectLibraryClientVariables) {
var OS = OutSystems.Internal;
UBTConnectLibraryController.default.setHomeScroll$Action = function (in_SearchCallbackFunctionIn, in_SvgCallbackFunctionIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.SetHomeScroll$vars"))());
vars.value.in_SearchCallbackFunctionInLocal = in_SearchCallbackFunctionIn;
vars.value.in_SvgCallbackFunctionInLocal = in_SvgCallbackFunctionIn;
var setHomeScrollEventsJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.SetHomeScroll$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.setHomeScrollEventsJSResult = setHomeScrollEventsJSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:fpJmVrITr0OWEpGfJT5rZg:/ClientActionFlows.fpJmVrITr0OWEpGfJT5rZg:j5ByW+__hXR8xZVL_kKBKg", "UBTConnectLibrary", "SetHomeScroll", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:HEypum8md06WJyDQNNSemg", callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:BDQz7vZ6HUGdzDiUI8X96A", callContext.id);
setHomeScrollEventsJSResult.value = controller.safeExecuteJSNode(UBTConnectLibrary_controller_SetHomeScroll_SetHomeScrollEventsJS, "SetHomeScrollEvents", "SetHomeScroll", {
In_SearchScrolledCallback: OS.DataConversion.JSNodeParamConverter.to(vars.value.in_SearchCallbackFunctionInLocal, OS.DataTypes.DataTypes.Object),
In_SvgScrolledCallback: OS.DataConversion.JSNodeParamConverter.to(vars.value.in_SvgCallbackFunctionInLocal, OS.DataTypes.DataTypes.Object),
Out_DestroyElement: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object),
Out_DestroyScrollEvent: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBTConnectLibrary.SetHomeScroll$setHomeScrollEventsJSResult"))();
jsNodeResult.out_DestroyElementOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Out_DestroyElement, OS.DataTypes.DataTypes.Object);
jsNodeResult.out_DestroyScrollEventOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Out_DestroyScrollEvent, OS.DataTypes.DataTypes.Object);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:65fPVoJK3Ei2m+tbHGqlYA", callContext.id);
// Out_Element = SetHomeScrollEvents.Out_DestroyElement
outVars.value.out_ElementOut = setHomeScrollEventsJSResult.value.out_DestroyElementOut;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:65fPVoJK3Ei2m+tbHGqlYA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Out_ScrollEvent = SetHomeScrollEvents.Out_DestroyScrollEvent
outVars.value.out_ScrollEventOut = setHomeScrollEventsJSResult.value.out_DestroyScrollEventOut;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:bU5btq9oDkijFCLxTltLgg", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:fpJmVrITr0OWEpGfJT5rZg", callContext.id);
}

};
var controller = UBTConnectLibraryController.default;
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.SetHomeScroll$vars", [{
name: "In_SearchCallbackFunction",
attrName: "in_SearchCallbackFunctionInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}, {
name: "In_SvgCallbackFunction",
attrName: "in_SvgCallbackFunctionInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.SetHomeScroll$setHomeScrollEventsJSResult", [{
name: "Out_DestroyElement",
attrName: "out_DestroyElementOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}, {
name: "Out_DestroyScrollEvent",
attrName: "out_DestroyScrollEventOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.SetHomeScroll$outVars", [{
name: "Out_Element",
attrName: "out_ElementOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}, {
name: "Out_ScrollEvent",
attrName: "out_ScrollEventOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
UBTConnectLibraryController.default.clientActionProxies.setHomeScroll$Action = function (in_SearchCallbackFunctionIn, in_SvgCallbackFunctionIn) {
in_SearchCallbackFunctionIn = (in_SearchCallbackFunctionIn === undefined) ? null : in_SearchCallbackFunctionIn;
in_SvgCallbackFunctionIn = (in_SvgCallbackFunctionIn === undefined) ? null : in_SvgCallbackFunctionIn;
return controller.executeActionInsideJSNode(UBTConnectLibraryController.default.setHomeScroll$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(in_SearchCallbackFunctionIn, OS.DataTypes.DataTypes.Object), OS.DataConversion.JSNodeParamConverter.from(in_SvgCallbackFunctionIn, OS.DataTypes.DataTypes.Object)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Out_Element: OS.DataConversion.JSNodeParamConverter.to(actionResults.out_ElementOut, OS.DataTypes.DataTypes.Object),
Out_ScrollEvent: OS.DataConversion.JSNodeParamConverter.to(actionResults.out_ScrollEventOut, OS.DataTypes.DataTypes.Object)
};
});
};
});
define("UBTConnectLibrary.controller$SetHomeScroll.SetHomeScrollEventsJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
const homeResponse = ScrollEvent.homeScroll($parameters.In_SearchScrolledCallback,$parameters.In_SvgScrolledCallback);

$parameters.Out_DestroyElement = homeResponse.element;
$parameters.Out_DestroyScrollEvent = homeResponse.scrollEvent;
};
});

define("UBTConnectLibrary.controller$SetLocalVariable_ColumnSize", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.controller$SetLocalVariable_ColumnSize.SetStyleJS", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.controller$GetLocalVariable_ColumnSize"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibrary_controller_SetLocalVariable_ColumnSize_SetStyleJS, UBTConnectLibraryClientVariables) {
var OS = OutSystems.Internal;
UBTConnectLibraryController.default.setLocalVariable_ColumnSize$Action = function (widgetIdIn, in_SizeIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.SetLocalVariable_ColumnSize$vars"))());
vars.value.widgetIdInLocal = widgetIdIn;
vars.value.in_SizeInLocal = in_SizeIn;
var getLocalVariable_ColumnSizeVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getLocalVariable_ColumnSizeVar = getLocalVariable_ColumnSizeVar;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:yi67II2fMkKEhBnDU5zQVw:/ClientActionFlows.yi67II2fMkKEhBnDU5zQVw:_4O_OJ3LggFyjDdEH392_g", "UBTConnectLibrary", "SetLocalVariable_ColumnSize", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:Zp_tQdu2Xk+ZCvomZ_4VSA", callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:SpPK7ot_AUmDfryP93Esmg", callContext.id);
// Execute Action: GetLocalVariable_ColumnSize
getLocalVariable_ColumnSizeVar.value = UBTConnectLibraryController.default.getLocalVariable_ColumnSize$Action(vars.value.in_SizeInLocal, callContext);

OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:ETwQTxt0kEqf0D4YUrLCNg", callContext.id);
controller.safeExecuteJSNode(UBTConnectLibrary_controller_SetLocalVariable_ColumnSize_SetStyleJS, "SetStyle", "SetLocalVariable_ColumnSize", {
WidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.widgetIdInLocal, OS.DataTypes.DataTypes.Text),
Style: OS.DataConversion.JSNodeParamConverter.to(getLocalVariable_ColumnSizeVar.value.localVariableOut, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:fPj0t24OHEy5z9MnDqLm8g", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:yi67II2fMkKEhBnDU5zQVw", callContext.id);
}

};
var controller = UBTConnectLibraryController.default;
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.SetLocalVariable_ColumnSize$vars", [{
name: "WidgetId",
attrName: "widgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "In_Size",
attrName: "in_SizeInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
UBTConnectLibraryController.default.clientActionProxies.setLocalVariable_ColumnSize$Action = function (widgetIdIn, in_SizeIn) {
widgetIdIn = (widgetIdIn === undefined) ? "" : widgetIdIn;
in_SizeIn = (in_SizeIn === undefined) ? 0 : in_SizeIn;
return controller.executeActionInsideJSNode(UBTConnectLibraryController.default.setLocalVariable_ColumnSize$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(widgetIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(in_SizeIn, OS.DataTypes.DataTypes.Integer)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("UBTConnectLibrary.controller$SetLocalVariable_ColumnSize.SetStyleJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
let placeholderContent = document.getElementById($parameters.WidgetId);
if(placeholderContent){
    placeholderContent.style = placeholderContent.style + (placeholderContent.style ? "; " : "") + $parameters.Style;
}
};
});

define("UBTConnectLibrary.controller$SetLookupLabel_MaybeLowercase", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.clientVariables"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryClientVariables) {
var OS = OutSystems.Internal;
UBTConnectLibraryController.default.setLookupLabel_MaybeLowercase$Action = function (in_CapitalizedLabelIn, in_IsLowercaseIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.SetLookupLabel_MaybeLowercase$vars"))());
vars.value.in_CapitalizedLabelInLocal = in_CapitalizedLabelIn;
vars.value.in_IsLowercaseInLocal = in_IsLowercaseIn;
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.SetLookupLabel_MaybeLowercase$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:dwRsCQchIUmXbVkfixhxLQ:/ClientActionFlows.dwRsCQchIUmXbVkfixhxLQ:dCBPADdjQQzBXaKSos8SWQ", "UBTConnectLibrary", "SetLookupLabel_MaybeLowercase", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:mV1+1vHsz0KTH0NHC5IUOg", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:NDqDjJjudkKAouDlZ11pTg", callContext.id) && vars.value.in_IsLowercaseInLocal)) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:r9zXdKy_lkG2_QaptwktJg", callContext.id);
// Out_Label = ToLower
outVars.value.out_LabelOut = OS.BuiltinFunctions.toLower(vars.value.in_CapitalizedLabelInLocal);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:CB6UNMq_ZES3CWRnGDkV8w", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:CSKPdSo+rE2Bua7mbv7eiA", callContext.id);
// Out_Label = In_CapitalizedLabel
outVars.value.out_LabelOut = vars.value.in_CapitalizedLabelInLocal;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:CB6UNMq_ZES3CWRnGDkV8w", callContext.id);
}

return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:dwRsCQchIUmXbVkfixhxLQ", callContext.id);
}

};
var controller = UBTConnectLibraryController.default;
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.SetLookupLabel_MaybeLowercase$vars", [{
name: "In_CapitalizedLabel",
attrName: "in_CapitalizedLabelInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "In_IsLowercase",
attrName: "in_IsLowercaseInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.SetLookupLabel_MaybeLowercase$outVars", [{
name: "Out_Label",
attrName: "out_LabelOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnectLibraryController.default.clientActionProxies.setLookupLabel_MaybeLowercase$Action = function (in_CapitalizedLabelIn, in_IsLowercaseIn) {
in_CapitalizedLabelIn = (in_CapitalizedLabelIn === undefined) ? "" : in_CapitalizedLabelIn;
in_IsLowercaseIn = (in_IsLowercaseIn === undefined) ? false : in_IsLowercaseIn;
return controller.executeActionInsideJSNode(UBTConnectLibraryController.default.setLookupLabel_MaybeLowercase$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(in_CapitalizedLabelIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(in_IsLowercaseIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Out_Label: OS.DataConversion.JSNodeParamConverter.to(actionResults.out_LabelOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("UBTConnectLibrary.controller$SetMainFixedScroll", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.controller$SetMainFixedScroll.SetMainFixedScrollEventsJS", "UBTConnectLibrary.clientVariables"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibrary_controller_SetMainFixedScroll_SetMainFixedScrollEventsJS, UBTConnectLibraryClientVariables) {
var OS = OutSystems.Internal;
UBTConnectLibraryController.default.setMainFixedScroll$Action = function (in_CallbackFunctionIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.SetMainFixedScroll$vars"))());
vars.value.in_CallbackFunctionInLocal = in_CallbackFunctionIn;
var setMainFixedScrollEventsJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.SetMainFixedScroll$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.setMainFixedScrollEventsJSResult = setMainFixedScrollEventsJSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:EDbpxF1Jfki7kT_KIwU1og:/ClientActionFlows.EDbpxF1Jfki7kT_KIwU1og:QTRbtbXYkatxhG8EZJPpEg", "UBTConnectLibrary", "SetMainFixedScroll", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:8QKWeiYBOUWXSUlDTIavow", callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:mYET9mXy0UGvb28ygkJi1A", callContext.id);
setMainFixedScrollEventsJSResult.value = controller.safeExecuteJSNode(UBTConnectLibrary_controller_SetMainFixedScroll_SetMainFixedScrollEventsJS, "SetMainFixedScrollEvents", "SetMainFixedScroll", {
In_CallbackFunction: OS.DataConversion.JSNodeParamConverter.to(vars.value.in_CallbackFunctionInLocal, OS.DataTypes.DataTypes.Object),
Out_DestroyElement: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object),
Out_DestroyScrollEvent: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBTConnectLibrary.SetMainFixedScroll$setMainFixedScrollEventsJSResult"))();
jsNodeResult.out_DestroyElementOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Out_DestroyElement, OS.DataTypes.DataTypes.Object);
jsNodeResult.out_DestroyScrollEventOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Out_DestroyScrollEvent, OS.DataTypes.DataTypes.Object);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:Kk8bdeCx70OoBMmJJ4RAgA", callContext.id);
// Out_Element = SetMainFixedScrollEvents.Out_DestroyElement
outVars.value.out_ElementOut = setMainFixedScrollEventsJSResult.value.out_DestroyElementOut;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:Kk8bdeCx70OoBMmJJ4RAgA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Out_ScrollEvent = SetMainFixedScrollEvents.Out_DestroyScrollEvent
outVars.value.out_ScrollEventOut = setMainFixedScrollEventsJSResult.value.out_DestroyScrollEventOut;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:2yx2sgVSOESrx8EP8v5AsA", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:EDbpxF1Jfki7kT_KIwU1og", callContext.id);
}

};
var controller = UBTConnectLibraryController.default;
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.SetMainFixedScroll$vars", [{
name: "In_CallbackFunction",
attrName: "in_CallbackFunctionInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.SetMainFixedScroll$setMainFixedScrollEventsJSResult", [{
name: "Out_DestroyElement",
attrName: "out_DestroyElementOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}, {
name: "Out_DestroyScrollEvent",
attrName: "out_DestroyScrollEventOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.SetMainFixedScroll$outVars", [{
name: "Out_Element",
attrName: "out_ElementOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}, {
name: "Out_ScrollEvent",
attrName: "out_ScrollEventOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
UBTConnectLibraryController.default.clientActionProxies.setMainFixedScroll$Action = function (in_CallbackFunctionIn) {
in_CallbackFunctionIn = (in_CallbackFunctionIn === undefined) ? null : in_CallbackFunctionIn;
return controller.executeActionInsideJSNode(UBTConnectLibraryController.default.setMainFixedScroll$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(in_CallbackFunctionIn, OS.DataTypes.DataTypes.Object)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Out_Element: OS.DataConversion.JSNodeParamConverter.to(actionResults.out_ElementOut, OS.DataTypes.DataTypes.Object),
Out_ScrollEvent: OS.DataConversion.JSNodeParamConverter.to(actionResults.out_ScrollEventOut, OS.DataTypes.DataTypes.Object)
};
});
};
});
define("UBTConnectLibrary.controller$SetMainFixedScroll.SetMainFixedScrollEventsJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
const mainResponse = ScrollEvent.mainFixedScroll($parameters.In_CallbackFunction);

$parameters.Out_DestroyElement = mainResponse.element;
$parameters.Out_DestroyScrollEvent = mainResponse.scrollEvent;
};
});

define("UBTConnectLibrary.controller$SetMainScroll", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.controller$SetMainScroll.SetMainScrollEventsJS", "UBTConnectLibrary.clientVariables"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibrary_controller_SetMainScroll_SetMainScrollEventsJS, UBTConnectLibraryClientVariables) {
var OS = OutSystems.Internal;
UBTConnectLibraryController.default.setMainScroll$Action = function (in_CallbackFunctionIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.SetMainScroll$vars"))());
vars.value.in_CallbackFunctionInLocal = in_CallbackFunctionIn;
var setMainScrollEventsJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.SetMainScroll$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.setMainScrollEventsJSResult = setMainScrollEventsJSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:HhTdcTVY4UaIVcU8vw6rWg:/ClientActionFlows.HhTdcTVY4UaIVcU8vw6rWg:vvWVC_p3NNS6frcUDMrYTg", "UBTConnectLibrary", "SetMainScroll", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:phbKPLPb8Ua4Pk4NIf9jlw", callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:_RVxcydJtkeU5L6bKL+29A", callContext.id);
setMainScrollEventsJSResult.value = controller.safeExecuteJSNode(UBTConnectLibrary_controller_SetMainScroll_SetMainScrollEventsJS, "SetMainScrollEvents", "SetMainScroll", {
In_CallbackFunction: OS.DataConversion.JSNodeParamConverter.to(vars.value.in_CallbackFunctionInLocal, OS.DataTypes.DataTypes.Object),
Out_DestroyElement: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object),
Out_DestroyScrollEvent: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBTConnectLibrary.SetMainScroll$setMainScrollEventsJSResult"))();
jsNodeResult.out_DestroyElementOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Out_DestroyElement, OS.DataTypes.DataTypes.Object);
jsNodeResult.out_DestroyScrollEventOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Out_DestroyScrollEvent, OS.DataTypes.DataTypes.Object);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:f3L0fAKejku+_LCRo2Nsrg", callContext.id);
// Out_Element = SetMainScrollEvents.Out_DestroyElement
outVars.value.out_ElementOut = setMainScrollEventsJSResult.value.out_DestroyElementOut;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:f3L0fAKejku+_LCRo2Nsrg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Out_ScrollEvent = SetMainScrollEvents.Out_DestroyScrollEvent
outVars.value.out_ScrollEventOut = setMainScrollEventsJSResult.value.out_DestroyScrollEventOut;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:bWQc7V9Ic02AWvv8x4uoKw", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:HhTdcTVY4UaIVcU8vw6rWg", callContext.id);
}

};
var controller = UBTConnectLibraryController.default;
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.SetMainScroll$vars", [{
name: "In_CallbackFunction",
attrName: "in_CallbackFunctionInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.SetMainScroll$setMainScrollEventsJSResult", [{
name: "Out_DestroyElement",
attrName: "out_DestroyElementOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}, {
name: "Out_DestroyScrollEvent",
attrName: "out_DestroyScrollEventOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.SetMainScroll$outVars", [{
name: "Out_Element",
attrName: "out_ElementOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}, {
name: "Out_ScrollEvent",
attrName: "out_ScrollEventOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
UBTConnectLibraryController.default.clientActionProxies.setMainScroll$Action = function (in_CallbackFunctionIn) {
in_CallbackFunctionIn = (in_CallbackFunctionIn === undefined) ? null : in_CallbackFunctionIn;
return controller.executeActionInsideJSNode(UBTConnectLibraryController.default.setMainScroll$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(in_CallbackFunctionIn, OS.DataTypes.DataTypes.Object)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Out_Element: OS.DataConversion.JSNodeParamConverter.to(actionResults.out_ElementOut, OS.DataTypes.DataTypes.Object),
Out_ScrollEvent: OS.DataConversion.JSNodeParamConverter.to(actionResults.out_ScrollEventOut, OS.DataTypes.DataTypes.Object)
};
});
};
});
define("UBTConnectLibrary.controller$SetMainScroll.SetMainScrollEventsJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
const mainResponse = ScrollEvent.mainScroll($parameters.In_CallbackFunction);

$parameters.Out_DestroyElement = mainResponse.element;
$parameters.Out_DestroyScrollEvent = mainResponse.scrollEvent;
};
});

define("UBTConnectLibrary.controller$SetScrollShadow", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.controller$SetScrollShadow.SetShadowScrollEventsJS", "UBTConnectLibrary.clientVariables"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibrary_controller_SetScrollShadow_SetShadowScrollEventsJS, UBTConnectLibraryClientVariables) {
var OS = OutSystems.Internal;
UBTConnectLibraryController.default.setScrollShadow$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var setShadowScrollEventsJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.SetScrollShadow$outVars"))());
varBag.callContext = callContext;
varBag.setShadowScrollEventsJSResult = setShadowScrollEventsJSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:WdS3kHjEH0azFIripDomPA:/ClientActionFlows.WdS3kHjEH0azFIripDomPA:yaxaOqa0FZoGDGSqgbfqww", "UBTConnectLibrary", "SetScrollShadow", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:Qa6eKooJukC49ol5nDhGFA", callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:vi+7QYMzYkO_rl84r+zPYg", callContext.id);
setShadowScrollEventsJSResult.value = controller.safeExecuteJSNode(UBTConnectLibrary_controller_SetScrollShadow_SetShadowScrollEventsJS, "SetShadowScrollEvents", "SetScrollShadow", {
Out_DestroyElement: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object),
Out_DestroyScrollEvent: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object),
Out_ClearTimeout: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBTConnectLibrary.SetScrollShadow$setShadowScrollEventsJSResult"))();
jsNodeResult.out_DestroyElementOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Out_DestroyElement, OS.DataTypes.DataTypes.Object);
jsNodeResult.out_DestroyScrollEventOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Out_DestroyScrollEvent, OS.DataTypes.DataTypes.Object);
jsNodeResult.out_ClearTimeoutOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Out_ClearTimeout, OS.DataTypes.DataTypes.Object);
return jsNodeResult;
}, {}, {});
// Set Outputs
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:367wrdA5pEejsHIVLnu5Og", callContext.id);
// Out_Element = SetShadowScrollEvents.Out_DestroyElement
outVars.value.out_ElementOut = setShadowScrollEventsJSResult.value.out_DestroyElementOut;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:367wrdA5pEejsHIVLnu5Og", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Out_ScrollEvent = SetShadowScrollEvents.Out_DestroyScrollEvent
outVars.value.out_ScrollEventOut = setShadowScrollEventsJSResult.value.out_DestroyScrollEventOut;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:367wrdA5pEejsHIVLnu5Og", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Out_Timeout = SetShadowScrollEvents.Out_ClearTimeout
outVars.value.out_TimeoutOut = setShadowScrollEventsJSResult.value.out_ClearTimeoutOut;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:yXloDH5z1EW9NBqrB8KQ6Q", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:WdS3kHjEH0azFIripDomPA", callContext.id);
}

};
var controller = UBTConnectLibraryController.default;
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.SetScrollShadow$setShadowScrollEventsJSResult", [{
name: "Out_DestroyElement",
attrName: "out_DestroyElementOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}, {
name: "Out_DestroyScrollEvent",
attrName: "out_DestroyScrollEventOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}, {
name: "Out_ClearTimeout",
attrName: "out_ClearTimeoutOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.SetScrollShadow$outVars", [{
name: "Out_Element",
attrName: "out_ElementOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}, {
name: "Out_ScrollEvent",
attrName: "out_ScrollEventOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}, {
name: "Out_Timeout",
attrName: "out_TimeoutOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
UBTConnectLibraryController.default.clientActionProxies.setScrollShadow$Action = function () {
return controller.executeActionInsideJSNode(UBTConnectLibraryController.default.setScrollShadow$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Out_Element: OS.DataConversion.JSNodeParamConverter.to(actionResults.out_ElementOut, OS.DataTypes.DataTypes.Object),
Out_ScrollEvent: OS.DataConversion.JSNodeParamConverter.to(actionResults.out_ScrollEventOut, OS.DataTypes.DataTypes.Object),
Out_Timeout: OS.DataConversion.JSNodeParamConverter.to(actionResults.out_TimeoutOut, OS.DataTypes.DataTypes.Object)
};
});
};
});
define("UBTConnectLibrary.controller$SetScrollShadow.SetShadowScrollEventsJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
const shadowScrollResponse = ScrollEvent.shadowScroll();

$parameters.Out_DestroyElement = shadowScrollResponse.element;
$parameters.Out_DestroyScrollEvent = shadowScrollResponse.scrollEvent;
$parameters.Out_ClearTimeout = shadowScrollResponse.timeout;
};
});

define("UBTConnectLibrary.controller$SetStyle", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.controller$SetStyle.SetStyleJS", "UBTConnectLibrary.clientVariables"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibrary_controller_SetStyle_SetStyleJS, UBTConnectLibraryClientVariables) {
var OS = OutSystems.Internal;
UBTConnectLibraryController.default.setStyle$Action = function (containerIdIn, styleIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.SetStyle$vars"))());
vars.value.containerIdInLocal = containerIdIn;
vars.value.styleInLocal = styleIn;
var setStyleJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.SetStyle$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.setStyleJSResult = setStyleJSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:_hVIa+JPA0uot3Q7He6c8w:/ClientActionFlows._hVIa+JPA0uot3Q7He6c8w:6CzRw4OBnMi8j31vqmW+Rg", "UBTConnectLibrary", "SetStyle", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:FThhyArYIku_WGmYp7F38Q", callContext.id);
// Has values?
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:T+gnKwnHU0q6jUszWQVHZg", callContext.id) && (((vars.value.containerIdInLocal) !== (OS.BuiltinFunctions.nullTextIdentifier())) && ((vars.value.styleInLocal) !== (OS.BuiltinFunctions.nullTextIdentifier()))))) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:BrGXNxcqY0aIsrxNdeXF5Q", callContext.id);
setStyleJSResult.value = controller.safeExecuteJSNode(UBTConnectLibrary_controller_SetStyle_SetStyleJS, "SetStyle", "SetStyle", {
Style: OS.DataConversion.JSNodeParamConverter.to(vars.value.styleInLocal, OS.DataTypes.DataTypes.Text),
Id: OS.DataConversion.JSNodeParamConverter.to(vars.value.containerIdInLocal, OS.DataTypes.DataTypes.Text),
AppliedStyle: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBTConnectLibrary.SetStyle$setStyleJSResult"))();
jsNodeResult.appliedStyleOut = OS.DataConversion.JSNodeParamConverter.from($parameters.AppliedStyle, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:2ByMth2Qzk6AkxQcLMkE0A", callContext.id);
// AppliedStyle = SetStyle.AppliedStyle
outVars.value.appliedStyleOut = setStyleJSResult.value.appliedStyleOut;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:m_OtS6yzm02HZvOXMmcvVQ", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:yAn50o643Um7_u6FsIOpQQ", callContext.id);
}

return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:_hVIa+JPA0uot3Q7He6c8w", callContext.id);
}

};
var controller = UBTConnectLibraryController.default;
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.SetStyle$vars", [{
name: "ContainerId",
attrName: "containerIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Style",
attrName: "styleInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.SetStyle$setStyleJSResult", [{
name: "AppliedStyle",
attrName: "appliedStyleOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.SetStyle$outVars", [{
name: "AppliedStyle",
attrName: "appliedStyleOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnectLibraryController.default.clientActionProxies.setStyle$Action = function (containerIdIn, styleIn) {
containerIdIn = (containerIdIn === undefined) ? "" : containerIdIn;
styleIn = (styleIn === undefined) ? "" : styleIn;
return controller.executeActionInsideJSNode(UBTConnectLibraryController.default.setStyle$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(containerIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(styleIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
AppliedStyle: OS.DataConversion.JSNodeParamConverter.to(actionResults.appliedStyleOut, OS.DataTypes.DataTypes.Text)
};
});
};
});
define("UBTConnectLibrary.controller$SetStyle.SetStyleJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
let placeholderContent = document.getElementById($parameters.Id);
if(placeholderContent){
    placeholderContent.style.cssText = placeholderContent.style.cssText + (placeholderContent.style.cssText ? "; " : "") + $parameters.Style;
    $parameters.AppliedStyle = placeholderContent.style.cssText;
}
};
});

define("UBTConnectLibrary.controller$SetSvgScroll", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.controller$SetSvgScroll.SetScrollEventsJS", "UBTConnectLibrary.clientVariables"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibrary_controller_SetSvgScroll_SetScrollEventsJS, UBTConnectLibraryClientVariables) {
var OS = OutSystems.Internal;
UBTConnectLibraryController.default.setSvgScroll$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var setScrollEventsJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.SetSvgScroll$outVars"))());
varBag.callContext = callContext;
varBag.setScrollEventsJSResult = setScrollEventsJSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:H8H7U2tk_EaLCVjvn5wjNw:/ClientActionFlows.H8H7U2tk_EaLCVjvn5wjNw:xuMaAuBjCgYT1_PGHbggqw", "UBTConnectLibrary", "SetSvgScroll", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:oci9OaL8j0yJECd9uvotfw", callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:99Lku5ihZU2WdYc1sfkfFg", callContext.id);
setScrollEventsJSResult.value = controller.safeExecuteJSNode(UBTConnectLibrary_controller_SetSvgScroll_SetScrollEventsJS, "SetScrollEvents", "SetSvgScroll", {
Out_DestroyElement: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object),
Out_DestroyScrollEvent: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBTConnectLibrary.SetSvgScroll$setScrollEventsJSResult"))();
jsNodeResult.out_DestroyElementOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Out_DestroyElement, OS.DataTypes.DataTypes.Object);
jsNodeResult.out_DestroyScrollEventOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Out_DestroyScrollEvent, OS.DataTypes.DataTypes.Object);
return jsNodeResult;
}, {}, {});
// Set Destroy Objects
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:oI0A9uy0_k2R2Y6p8zic6w", callContext.id);
// Out_Element = SetScrollEvents.Out_DestroyElement
outVars.value.out_ElementOut = setScrollEventsJSResult.value.out_DestroyElementOut;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:oI0A9uy0_k2R2Y6p8zic6w", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Out_ScrollEvent = SetScrollEvents.Out_DestroyScrollEvent
outVars.value.out_ScrollEventOut = setScrollEventsJSResult.value.out_DestroyScrollEventOut;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:w5qmW08XKEGLiHbre65uXw", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:H8H7U2tk_EaLCVjvn5wjNw", callContext.id);
}

};
var controller = UBTConnectLibraryController.default;
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.SetSvgScroll$setScrollEventsJSResult", [{
name: "Out_DestroyElement",
attrName: "out_DestroyElementOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}, {
name: "Out_DestroyScrollEvent",
attrName: "out_DestroyScrollEventOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.SetSvgScroll$outVars", [{
name: "Out_Element",
attrName: "out_ElementOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}, {
name: "Out_ScrollEvent",
attrName: "out_ScrollEventOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
UBTConnectLibraryController.default.clientActionProxies.setSvgScroll$Action = function () {
return controller.executeActionInsideJSNode(UBTConnectLibraryController.default.setSvgScroll$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Out_Element: OS.DataConversion.JSNodeParamConverter.to(actionResults.out_ElementOut, OS.DataTypes.DataTypes.Object),
Out_ScrollEvent: OS.DataConversion.JSNodeParamConverter.to(actionResults.out_ScrollEventOut, OS.DataTypes.DataTypes.Object)
};
});
};
});
define("UBTConnectLibrary.controller$SetSvgScroll.SetScrollEventsJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
const svgScrollResponse = ScrollEvent.svgScroll();

$parameters.Out_DestroyElement = svgScrollResponse.element;
$parameters.Out_DestroyScrollEvent = svgScrollResponse.scrollEvent;
};
});

define("UBTConnectLibrary.controller$StopPropagationHelper_Check", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.controller$StopPropagationHelper_Check.JavaScript1JS", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.controller$StopPropagationHelper_GetClass"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibrary_controller_StopPropagationHelper_Check_JavaScript1JS, UBTConnectLibraryClientVariables) {
var OS = OutSystems.Internal;
UBTConnectLibraryController.default.stopPropagationHelper_Check$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var stopPropagationHelper_GetClassVar = new OS.DataTypes.VariableHolder();
var javaScript1JSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.StopPropagationHelper_Check$outVars"))());
varBag.callContext = callContext;
varBag.stopPropagationHelper_GetClassVar = stopPropagationHelper_GetClassVar;
varBag.javaScript1JSResult = javaScript1JSResult;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:C70tFvu4BkOOdl+kwbYufQ:/ClientActionFlows.C70tFvu4BkOOdl+kwbYufQ:nhUh5ShrBtESS1j0qGWVyQ", "UBTConnectLibrary", "StopPropagationHelper_Check", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:q78ZH1bVcUGLUKIWvdJiDg", callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:3yHsTnzj2EWwLUysEv5ooQ", callContext.id);
// Execute Action: StopPropagationHelper_GetClass
stopPropagationHelper_GetClassVar.value = UBTConnectLibraryController.default.stopPropagationHelper_GetClass$Action(callContext);

OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:f7N7aq668E2GfVdWljrvXQ", callContext.id);
javaScript1JSResult.value = controller.safeExecuteJSNode(UBTConnectLibrary_controller_StopPropagationHelper_Check_JavaScript1JS, "JavaScript1", "StopPropagationHelper_Check", {
Class: OS.DataConversion.JSNodeParamConverter.to(stopPropagationHelper_GetClassVar.value.classOut, OS.DataTypes.DataTypes.Text),
isToStop: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBTConnectLibrary.StopPropagationHelper_Check$javaScript1JSResult"))();
jsNodeResult.isToStopOut = OS.DataConversion.JSNodeParamConverter.from($parameters.isToStop, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:xCU_DnLdq02zxOsuY15mHw", callContext.id);
// isToStop = JavaScript1.isToStop
outVars.value.isToStopOut = javaScript1JSResult.value.isToStopOut;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:18fgJerO2kqHJdXWQ1t+vw", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:C70tFvu4BkOOdl+kwbYufQ", callContext.id);
}

};
var controller = UBTConnectLibraryController.default;
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.StopPropagationHelper_Check$javaScript1JSResult", [{
name: "isToStop",
attrName: "isToStopOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.StopPropagationHelper_Check$outVars", [{
name: "isToStop",
attrName: "isToStopOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
UBTConnectLibraryController.default.clientActionProxies.stopPropagationHelper_Check$Action = function () {
return controller.executeActionInsideJSNode(UBTConnectLibraryController.default.stopPropagationHelper_Check$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
isToStop: OS.DataConversion.JSNodeParamConverter.to(actionResults.isToStopOut, OS.DataTypes.DataTypes.Boolean)
};
});
};
});
define("UBTConnectLibrary.controller$StopPropagationHelper_Check.JavaScript1JS", [], function () {
return function ($parameters, $actions, $roles, $public) {
if(event && event.target) {
    $parameters.isToStop = event.target.closest("."+$parameters.Class) !== null;
}
};
});

define("UBTConnectLibrary.controller$StopPropagationHelper_GetClass", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.clientVariables"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryClientVariables) {
var OS = OutSystems.Internal;
UBTConnectLibraryController.default.stopPropagationHelper_GetClass$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.StopPropagationHelper_GetClass$outVars"))());
varBag.callContext = callContext;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:fep3o+ZKSkWEyEPnqxJ3Aw:/ClientActionFlows.fep3o+ZKSkWEyEPnqxJ3Aw:Swc3HM0TfhlZGN5gnwICiA", "UBTConnectLibrary", "StopPropagationHelper_GetClass", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:75uT5srOVUqz+OofhHUDuQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:EPihwMMDkkiLe9q20duGfQ", callContext.id);
// Class = "helper-stop-propagation"
outVars.value.classOut = "helper-stop-propagation";
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:Q76ItYvwJUyxJhwyzjAajQ", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:fep3o+ZKSkWEyEPnqxJ3Aw", callContext.id);
}

};
var controller = UBTConnectLibraryController.default;
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.StopPropagationHelper_GetClass$outVars", [{
name: "Class",
attrName: "classOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnectLibraryController.default.clientActionProxies.stopPropagationHelper_GetClass$Action = function () {
return controller.executeActionInsideJSNode(UBTConnectLibraryController.default.stopPropagationHelper_GetClass$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Class: OS.DataConversion.JSNodeParamConverter.to(actionResults.classOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("UBTConnectLibrary.controller$SVGHeader_GetPath", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.controller$SVGHeader_SpecificHeight_GetPath"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryClientVariables) {
var OS = OutSystems.Internal;
UBTConnectLibraryController.default.sVGHeader_GetPath$Action = function (in_HeightPercentageIn, in_CurvaturePercentageIn, in_ExpectedHeightInPIxelIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.SVGHeader_GetPath$vars"))());
vars.value.in_HeightPercentageInLocal = in_HeightPercentageIn;
vars.value.in_CurvaturePercentageInLocal = in_CurvaturePercentageIn;
vars.value.in_ExpectedHeightInPIxelInLocal = in_ExpectedHeightInPIxelIn;
var sVGHeader_SpecificHeight_GetPathVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.SVGHeader_GetPath$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.sVGHeader_SpecificHeight_GetPathVar = sVGHeader_SpecificHeight_GetPathVar;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:61EpqOEnnkeCgZbpN+es8Q:/ClientActionFlows.61EpqOEnnkeCgZbpN+es8Q:tJ92wnBx85Z0xdkr+iRIWg", "UBTConnectLibrary", "SVGHeader_GetPath", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:OkxEUYD6j0G0j_lDjZ+IfA", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:p9JYaohzMkGFdqraHj8sMw", callContext.id) && ((vars.value.in_ExpectedHeightInPIxelInLocal) !== (0)))) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:t43jmZ0n7EOQ3Ifdxhtw6A", callContext.id);
// Execute Action: SVGHeader_SpecificHeight_GetPath
sVGHeader_SpecificHeight_GetPathVar.value = UBTConnectLibraryController.default.sVGHeader_SpecificHeight_GetPath$Action(vars.value.in_CurvaturePercentageInLocal, vars.value.in_ExpectedHeightInPIxelInLocal, callContext);

OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:_3OhEPMS9kKfBNt_s9XOvg", callContext.id);
// Out_Path = SVGHeader_SpecificHeight_GetPath.Out_Path
outVars.value.out_PathOut = sVGHeader_SpecificHeight_GetPathVar.value.out_PathOut;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:iM3WzY5DCkCdkvII_WCgEw", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:4NUOlFR4S02FNdmucm7ePQ", callContext.id);
// Height = In_HeightPercentage / 100 * 200
vars.value.heightVar = vars.value.in_HeightPercentageInLocal.div(OS.BuiltinFunctions.integerToDecimal(100)).times(OS.BuiltinFunctions.integerToDecimal(200));
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:4NUOlFR4S02FNdmucm7ePQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Out_Path = "M0,0 H100 V" + Height - CurveOffset + " Q50," + Height - CurveOffset + In_CurvaturePercentage / 100 * CurveOffset + " 0," + Height - CurveOffset + " Z"
outVars.value.out_PathOut = (((((("M0,0 H100 V" + OS.BuiltinFunctions.decimalToText(vars.value.heightVar.minus(vars.value.curveOffsetVar))) + " Q50,") + OS.BuiltinFunctions.decimalToText(vars.value.heightVar.minus(vars.value.curveOffsetVar).plus(vars.value.in_CurvaturePercentageInLocal.div(OS.BuiltinFunctions.integerToDecimal(100)).times(vars.value.curveOffsetVar)))) + " 0,") + OS.BuiltinFunctions.decimalToText(vars.value.heightVar.minus(vars.value.curveOffsetVar))) + " Z");
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:MfOPjFmx_EOeZnLARgNpjQ", callContext.id);
}

return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:61EpqOEnnkeCgZbpN+es8Q", callContext.id);
}

};
var controller = UBTConnectLibraryController.default;
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.SVGHeader_GetPath$vars", [{
name: "In_HeightPercentage",
attrName: "in_HeightPercentageInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Decimal,
defaultValue: function () {
return OS.DataTypes.Decimal.defaultValue;
}
}, {
name: "In_CurvaturePercentage",
attrName: "in_CurvaturePercentageInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Decimal,
defaultValue: function () {
return OS.DataTypes.Decimal.defaultValue;
}
}, {
name: "In_ExpectedHeightInPIxel",
attrName: "in_ExpectedHeightInPIxelInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "Height",
attrName: "heightVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Decimal,
defaultValue: function () {
return OS.DataTypes.Decimal.defaultValue;
}
}, {
name: "CurveOffset",
attrName: "curveOffsetVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Decimal,
defaultValue: function () {
return OS.BuiltinFunctions.integerToDecimal(20);
}
}]);
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.SVGHeader_GetPath$outVars", [{
name: "Out_Path",
attrName: "out_PathOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnectLibraryController.default.clientActionProxies.sVGHeader_GetPath$Action = function (in_HeightPercentageIn, in_CurvaturePercentageIn, in_ExpectedHeightInPIxelIn) {
in_HeightPercentageIn = (in_HeightPercentageIn === undefined) ? OS.DataTypes.Decimal.defaultValue : in_HeightPercentageIn;
in_CurvaturePercentageIn = (in_CurvaturePercentageIn === undefined) ? OS.DataTypes.Decimal.defaultValue : in_CurvaturePercentageIn;
in_ExpectedHeightInPIxelIn = (in_ExpectedHeightInPIxelIn === undefined) ? 0 : in_ExpectedHeightInPIxelIn;
return controller.executeActionInsideJSNode(UBTConnectLibraryController.default.sVGHeader_GetPath$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(in_HeightPercentageIn, OS.DataTypes.DataTypes.Decimal), OS.DataConversion.JSNodeParamConverter.from(in_CurvaturePercentageIn, OS.DataTypes.DataTypes.Decimal), OS.DataConversion.JSNodeParamConverter.from(in_ExpectedHeightInPIxelIn, OS.DataTypes.DataTypes.Integer)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Out_Path: OS.DataConversion.JSNodeParamConverter.to(actionResults.out_PathOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("UBTConnectLibrary.controller$SVGHeader_SpecificHeight_GetPath", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.clientVariables"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryClientVariables) {
var OS = OutSystems.Internal;
UBTConnectLibraryController.default.sVGHeader_SpecificHeight_GetPath$Action = function (in_CurvaturePercentageIn, in_ExpectedHeightInPIxelIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.SVGHeader_SpecificHeight_GetPath$vars"))());
vars.value.in_CurvaturePercentageInLocal = in_CurvaturePercentageIn;
vars.value.in_ExpectedHeightInPIxelInLocal = in_ExpectedHeightInPIxelIn;
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.SVGHeader_SpecificHeight_GetPath$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.outVars = outVars;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:xHNX4h51Qk2bedyBnxwavA:/ClientActionFlows.xHNX4h51Qk2bedyBnxwavA:ce+ImU7Zau0+cxliR9zYcQ", "UBTConnectLibrary", "SVGHeader_SpecificHeight_GetPath", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:wcr23xWFh0S+bTbslgV6Ng", callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:6NahVg4GuUyzId_4+l8XqQ", callContext.id);
// SPx = SPx * In_CurvaturePercentage / 100
vars.value.sPxVar = OS.BuiltinFunctions.decimalToInteger(OS.BuiltinFunctions.trunc(OS.BuiltinFunctions.integerToDecimal(vars.value.sPxVar).times(vars.value.in_CurvaturePercentageInLocal.div(OS.BuiltinFunctions.integerToDecimal(100)))));
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:6NahVg4GuUyzId_4+l8XqQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Y = ViewBoxHeight - SPx * ViewBoxHeight / In_ExpectedHeightInPIxel
vars.value.yVar = OS.BuiltinFunctions.decimalToText(OS.BuiltinFunctions.integerToDecimal(vars.value.viewBoxHeightVar).minus(OS.BuiltinFunctions.integerToDecimal((vars.value.sPxVar * vars.value.viewBoxHeightVar)).div(OS.BuiltinFunctions.integerToDecimal(vars.value.in_ExpectedHeightInPIxelInLocal))));
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:6NahVg4GuUyzId_4+l8XqQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// QY = ViewBoxHeight + SPx * ViewBoxHeight / In_ExpectedHeightInPIxel
vars.value.qYVar = OS.BuiltinFunctions.decimalToText(OS.BuiltinFunctions.integerToDecimal(vars.value.viewBoxHeightVar).plus(OS.BuiltinFunctions.integerToDecimal((vars.value.sPxVar * vars.value.viewBoxHeightVar)).div(OS.BuiltinFunctions.integerToDecimal(vars.value.in_ExpectedHeightInPIxelInLocal))));
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:6NahVg4GuUyzId_4+l8XqQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// Out_Path = "M0,0 H100 V" + Y + " Q50," + QY + " 0," + Y + " Z"
outVars.value.out_PathOut = (((((("M0,0 H100 V" + vars.value.yVar) + " Q50,") + vars.value.qYVar) + " 0,") + vars.value.yVar) + " Z");
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:F08Y_8KUNUm4NEhX58rO4Q", callContext.id);
return outVars.value;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:xHNX4h51Qk2bedyBnxwavA", callContext.id);
}

};
var controller = UBTConnectLibraryController.default;
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.SVGHeader_SpecificHeight_GetPath$vars", [{
name: "In_CurvaturePercentage",
attrName: "in_CurvaturePercentageInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Decimal,
defaultValue: function () {
return OS.DataTypes.Decimal.defaultValue;
}
}, {
name: "In_ExpectedHeightInPIxel",
attrName: "in_ExpectedHeightInPIxelInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "Y",
attrName: "yVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "QY",
attrName: "qYVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "SPx",
attrName: "sPxVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 30;
}
}, {
name: "ViewBoxHeight",
attrName: "viewBoxHeightVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 200;
}
}]);
UBTConnectLibraryController.default.constructor.registerVariableGroupType("UBTConnectLibrary.SVGHeader_SpecificHeight_GetPath$outVars", [{
name: "Out_Path",
attrName: "out_PathOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
UBTConnectLibraryController.default.clientActionProxies.sVGHeader_SpecificHeight_GetPath$Action = function (in_CurvaturePercentageIn, in_ExpectedHeightInPIxelIn) {
in_CurvaturePercentageIn = (in_CurvaturePercentageIn === undefined) ? OS.DataTypes.Decimal.defaultValue : in_CurvaturePercentageIn;
in_ExpectedHeightInPIxelIn = (in_ExpectedHeightInPIxelIn === undefined) ? 0 : in_ExpectedHeightInPIxelIn;
return controller.executeActionInsideJSNode(UBTConnectLibraryController.default.sVGHeader_SpecificHeight_GetPath$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(in_CurvaturePercentageIn, OS.DataTypes.DataTypes.Decimal), OS.DataConversion.JSNodeParamConverter.from(in_ExpectedHeightInPIxelIn, OS.DataTypes.DataTypes.Integer)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Out_Path: OS.DataConversion.JSNodeParamConverter.to(actionResults.out_PathOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("UBTConnectLibrary.controller", ["exports", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller$debugger"], function (exports, OutSystems, UBTConnectLibraryModel, UBTConnectLibrary_Controller_debugger) {
var OS = OutSystems.Internal;
var UBTConnectLibraryController = exports;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
}
Controller.prototype.clientActionProxies = {};
Controller.prototype.roles = {};
Controller.prototype.defaultTimeout = 10;
Controller.prototype.getDefaultTimeout = function () {
return UBTConnectLibraryController.default.defaultTimeout;
};
Controller.prototype.getClientActionProxies = function (controller) {
var _this = this;
var thisController = controller;
return Object.keys(this.clientActionProxies).reduce(function (acc, actionName) {
acc[actionName] = function () {
if(thisController.isActive()) {
return _this.clientActionProxies[actionName].apply(thisController, arguments);
}

return Promise.resolve();
};
return acc;
}, {});
};
return Controller;
})(OS.Controller.BaseModuleController);
UBTConnectLibraryController.default = new Controller(null, "UBTConnectLibrary");
});
define("UBTConnectLibrary.controller$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main", "UBTConnectLibrary.clientVariables"], function (exports, Debugger, OutSystems, UBTConnectLibraryClientVariables) {
var OS = OutSystems.Internal;
var metaInfo = {
"SMHx0sUl+0m49krcIvlsIg": {
getter: function (varBag, idService) {
return varBag.vars.value.uBTSizeInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"JpyDOMrugkCQAgDMkRlTuQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.gutterSizeIdOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"nNCMuOuVrE+pV62g8Gnuog": {
getter: function (varBag, idService) {
return varBag.vars.value.visibilityOptionInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"npXPC472hE2JW_Xh2FOcOw": {
getter: function (varBag, idService) {
return varBag.outVars.value.classOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"uRE+mRsbv0GHp2lL6uot+g": {
getter: function (varBag, idService) {
return varBag.vars.value.in_IsLowercaseInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"M9UNpx+X7Eic0o7kMNUiQA": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_LookupOut;
}
},
"btdaZv0_WkizMhxcaebUiA": {
getter: function (varBag, idService) {
return varBag.vars.value.in_CapitalizedLabelInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"YLu+qIJANkSFk6RhIom6DQ": {
getter: function (varBag, idService) {
return varBag.vars.value.in_IsLowercaseInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"XtXbgafyVEOOuZfNaeRdbw": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_LabelOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"yunSWZ6d6km3jrBQRkCuMw": {
getter: function (varBag, idService) {
return varBag.vars.value.dateVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"pe4+bYMI4k2ePJAu78xCUA": {
getter: function (varBag, idService) {
return varBag.vars.value.in_DateInLocal;
},
dataType: OS.DataTypes.DataTypes.Date
},
"52btDCgGy0CHUKEDyZaJUw": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_FormattedDateOut;
}
},
"8RQfCAwH+0W25fj1N1Z01A": {
getter: function (varBag, idService) {
return varBag.getConnectWeekdayLabel_ByDateVar.value;
}
},
"jY_kuRLq70e7BggUi9DamA": {
getter: function (varBag, idService) {
return varBag.outVars.value.isToStopOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"3yHsTnzj2EWwLUysEv5ooQ": {
getter: function (varBag, idService) {
return varBag.stopPropagationHelper_GetClassVar.value;
}
},
"f7N7aq668E2GfVdWljrvXQ": {
getter: function (varBag, idService) {
return varBag.javaScript1JSResult.value;
}
},
"10i_B_0_PEyt9ee_nlXwuQ": {
getter: function (varBag, idService) {
return varBag.javaScript1JSResult.value;
}
},
"cl4gI0HiFEqzx5TGU38kBg": {
getter: function (varBag, idService) {
return varBag.vars.value.in_ButtonSizeIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"3I5e9Fph0kKkRehVPSaJ4w": {
getter: function (varBag, idService) {
return varBag.vars.value.in_TextInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"hdHWEjf+5k6XSsH4XoAbwA": {
getter: function (varBag, idService) {
return varBag.vars.value.in_IconMiddleInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"xrtBRNz5ykCLxIxgqlmYCQ": {
getter: function (varBag, idService) {
return varBag.vars.value.in_IconLeftInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"9QmXnFBXXEmpFyYQi4d_wQ": {
getter: function (varBag, idService) {
return varBag.vars.value.in_IconRightInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"2NsK1amh20KwUhY2eq9R4A": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_ColumnOptionsOut;
}
},
"lLQB+CtCEEqV77Y4FfT8yA": {
getter: function (varBag, idService) {
return varBag.vars.value.backgroundImageInLocal;
}
},
"XFuHyhVIt0yq8FUlordRwQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.styleOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"N+ZzJlLuPEOdn5flNt7cEw": {
getter: function (varBag, idService) {
return varBag.vars.value.textOptionsInLocal;
}
},
"kccULcs6MEK93Z_guzg0tg": {
getter: function (varBag, idService) {
return varBag.outVars.value.classesOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"u0_KBqpqLkGPscMWSFk5XA": {
getter: function (varBag, idService) {
return varBag.formatClasses5Var.value;
}
},
"olJMRwAA5Ey9cjnqOT097g": {
getter: function (varBag, idService) {
return varBag.formatClasses6Var.value;
}
},
"MRiBURCgGUOIaloAKXY6vg": {
getter: function (varBag, idService) {
return varBag.formatClasses2Var.value;
}
},
"COFUkiqmakGZ9dtqj1h0Ww": {
getter: function (varBag, idService) {
return varBag.formatClassesVar.value;
}
},
"R_sK5202ik2HqOYwHG1zLQ": {
getter: function (varBag, idService) {
return varBag.formatClasses3Var.value;
}
},
"95Oo8OCksE6Ky1ZHc_Qrsw": {
getter: function (varBag, idService) {
return varBag.formatClasses4Var.value;
}
},
"UCfrwFYPVkCpZDhR9I+Vfw": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_TimeFormatOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"NUUyOCSO4k6J6gSSRK5t7g": {
getter: function (varBag, idService) {
return varBag.vars.value.in_TimeInLocal;
},
dataType: OS.DataTypes.DataTypes.Time
},
"wFhCYL4wOkONqQ1s_l+HKQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_FormattedTimeOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"2JGkejjdcUSj9aT46+Rh9w": {
getter: function (varBag, idService) {
return varBag.getConnectTimeFormatVar.value;
}
},
"Xx4V1Nze1UGGgBwwFFH95w": {
getter: function (varBag, idService) {
return varBag.vars.value.containerOptionsInLocal;
}
},
"9uYY_drTyESersxXUMxNMg": {
getter: function (varBag, idService) {
return varBag.outVars.value.classesOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"WphbBYi8AUqvcvgISD7G2A": {
getter: function (varBag, idService) {
return varBag.formatClasses_SkeletonVar.value;
}
},
"H9FXF2lGqEi2WWZuK33Z4g": {
getter: function (varBag, idService) {
return varBag.formatClasses_TextVar.value;
}
},
"qfZeI39GpUahtu9KkEXjFw": {
getter: function (varBag, idService) {
return varBag.formatClasses_BorderVar.value;
}
},
"SUy2JSOxF0qq542RzvXr1w": {
getter: function (varBag, idService) {
return varBag.formatClasses_PaddingVar.value;
}
},
"z7ozOdh6UUuSzNBWqdrP5Q": {
getter: function (varBag, idService) {
return varBag.formatClasses_AlignItemsVar.value;
}
},
"L+d6PW9qeUawNFqiG1Co3g": {
getter: function (varBag, idService) {
return varBag.formatClasses_InlineBlockVar.value;
}
},
"2iRNVt3hG0yicWxG98cnqQ": {
getter: function (varBag, idService) {
return varBag.formatClasses_DisplayVar.value;
}
},
"BrCCg2Nz90qdL6k19dWYAw": {
getter: function (varBag, idService) {
return varBag.formatClasses_MarginVar.value;
}
},
"MsKKhDdzbE2NN_vFq6tiDQ": {
getter: function (varBag, idService) {
return varBag.getClasses_TextVar.value;
}
},
"DVYDjaC6bEqRfdwMi3C25Q": {
getter: function (varBag, idService) {
return varBag.formatClassesVar.value;
}
},
"sWk5jzMXMEWuCK5jzh2bRg": {
getter: function (varBag, idService) {
return varBag.getMarginOptionsVar.value;
}
},
"ZNJ6m+Nylk2TcOwGt6aYTw": {
getter: function (varBag, idService) {
return varBag.formatClasses_ShadowVar.value;
}
},
"+dSNqOeo3U+Y5i4H+TXiVw": {
getter: function (varBag, idService) {
return varBag.formatClasses_JustifyContentVar.value;
}
},
"Ell8vRyltEKZASZhPQKI2w": {
getter: function (varBag, idService) {
return varBag.getPaddingOptionsVar.value;
}
},
"dScf4xc0B0e9AWVO_RdZAQ": {
getter: function (varBag, idService) {
return varBag.formatClasses_FlexDirectionVar.value;
}
},
"Ekh65LP5f0KDJvB1w06gkw": {
getter: function (varBag, idService) {
return varBag.getClasses_BorderVar.value;
}
},
"c0o497FFjES2uQSG05B4vw": {
getter: function (varBag, idService) {
return varBag.formatClasses_VisibilityVar.value;
}
},
"P61Fje+jTEKk_MNenZ3hIw": {
getter: function (varBag, idService) {
return varBag.vars.value.widgetIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"nSsDcqCZtEeVUT9Ul+jBqA": {
getter: function (varBag, idService) {
return varBag.vars.value.in_SizeInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"SpPK7ot_AUmDfryP93Esmg": {
getter: function (varBag, idService) {
return varBag.getLocalVariable_ColumnSizeVar.value;
}
},
"ETwQTxt0kEqf0D4YUrLCNg": {
getter: function (varBag, idService) {
return varBag.setStyleJSResult.value;
}
},
"VrdmKZzp9kO_v_2nhSdNwg": {
getter: function (varBag, idService) {
return varBag.outVars.value.listOut;
}
},
"gRTczBkTnUeDmYaY+rpOsQ": {
getter: function (varBag, idService) {
return varBag.vars.value.in_InputIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"shwcd1ph3ESM50RO0Utf8g": {
getter: function (varBag, idService) {
return varBag.focusOnInputJSResult.value;
}
},
"ft7UZGaXn0SY6UP8dfRt2A": {
getter: function (varBag, idService) {
return varBag.vars.value.in_UBT_ButtonSizeIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Cnp0A3k2_kqDaRTRNTQ4JQ": {
getter: function (varBag, idService) {
return varBag.vars.value.in_UBT_ButtonTypeIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"cG3nRvo_FUe2L2tevOS4SA": {
getter: function (varBag, idService) {
return varBag.vars.value.in_MainContainerClassInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"oTiuxTxfNEySpyFTAt244A": {
getter: function (varBag, idService) {
return varBag.vars.value.is_IsDisabledInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"Xft7ztm3MU6wyU_R5e6ZPQ": {
getter: function (varBag, idService) {
return varBag.vars.value.in_UBT_FlexBehaviorIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"50fTgloKbUSO13ZNb86u9w": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_ClassesOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"5oiyDTzs+Uu9vKBTo0qWcQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.classesOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"+kinGzPRmkab3LRirA6gGg": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_DayMonthFormatOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Vuk60BbZ1U+DBvQNA6KSIA": {
getter: function (varBag, idService) {
return varBag.getConnectDateFormat_ComponentsVar.value;
}
},
"YFDf8CGKY0WvxpR6GPI3Ww": {
getter: function (varBag, idService) {
return varBag.vars.value.idInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"tY9hc_WsF02RT8lXzdt6gA": {
getter: function (varBag, idService) {
return varBag.vars.value.addOffsetToAnchorsInLocal;
},
dataType: OS.DataTypes.DataTypes.Decimal
},
"5QLjJJ6qP02O1cJhbEnHpA": {
getter: function (varBag, idService) {
return varBag.javaScript1JSResult.value;
}
},
"BUexh4hEQEOBqo1jUE2XFQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.listOut;
}
},
"4elxQzHUak2w7oBqJmBXxQ": {
getter: function (varBag, idService) {
return varBag.vars.value.in_DateInLocal;
},
dataType: OS.DataTypes.DataTypes.DateTime
},
"QJW6dX7IAUaE9WRXums6bg": {
getter: function (varBag, idService) {
return varBag.outVars.value.prettyDateOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"7EzCkhnIi0WCO9uxixq6cQ": {
getter: function (varBag, idService) {
return varBag.javaScript1JSResult.value;
}
},
"g3OvzEfaOk+Wccvd6P2sQQ": {
getter: function (varBag, idService) {
return varBag.vars.value.in_ColorIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"7U_REfuJkE+XusC5ps+TeA": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_ColorClassOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"vkfFZ16jwEqbXStcwn4M0A": {
getter: function (varBag, idService) {
return varBag.outVars.value.classesOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"lM9156jZIEO7VYx_l5sp5Q": {
getter: function (varBag, idService) {
return varBag.vars.value.in_TextInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"5EPSOp3sAEa++eNVkyoc8w": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_ValidOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"2Sht5dUWyUWOz0i1ud4xaA": {
getter: function (varBag, idService) {
return varBag.validateEmailJSResult.value;
}
},
"vs5Tq0gEMkyIdVXtcxloWA": {
getter: function (varBag, idService) {
return varBag.vars.value.in_SizeInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"BMGR7zkUCEKb1Lg6U6ZNyg": {
getter: function (varBag, idService) {
return varBag.outVars.value.localVariableOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"nEFxSqvJk0aHpmptXl9VOw": {
getter: function (varBag, idService) {
return varBag.outVars.value.listOut;
}
},
"XVpn8LB_Fki0ZOp2ov1h4A": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_ElementOut;
},
dataType: OS.DataTypes.DataTypes.Object
},
"hW3kIR5oDkef8jTM6ouu_A": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_ScrollEventOut;
},
dataType: OS.DataTypes.DataTypes.Object
},
"99Lku5ihZU2WdYc1sfkfFg": {
getter: function (varBag, idService) {
return varBag.setScrollEventsJSResult.value;
}
},
"h8Pe9Nnip06rWCfpRWVT5g": {
getter: function (varBag, idService) {
return varBag.vars.value.in_Type_NotificationIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"o8xOpffcL0ejzeD7OpPqmQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.fallbackoptionsOut;
}
},
"mZXYdlDjlE6K9zKn_8uhkg": {
getter: function (varBag, idService) {
return varBag.vars.value.in_SearchCallbackFunctionInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"xtm1dVge9kOqJssP8BvWOw": {
getter: function (varBag, idService) {
return varBag.vars.value.in_SvgCallbackFunctionInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"0Us_n3_f70qlGcP4cK+p+w": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_ElementOut;
},
dataType: OS.DataTypes.DataTypes.Object
},
"Mo5RWsQ+fEGjNZfiM7u5hw": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_ScrollEventOut;
},
dataType: OS.DataTypes.DataTypes.Object
},
"BDQz7vZ6HUGdzDiUI8X96A": {
getter: function (varBag, idService) {
return varBag.setHomeScrollEventsJSResult.value;
}
},
"7cGo1ct_8EeHRZbLdNL50A": {
getter: function (varBag, idService) {
return varBag.outVars.value.listOut;
}
},
"giSoDHOLtkCAC07Vggs+cQ": {
getter: function (varBag, idService) {
return varBag.vars.value.type_GenderIdentifierVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Pnf9cLCi+UmSnaqQaBpPXQ": {
getter: function (varBag, idService) {
return varBag.vars.value.type_UpdateFeedItemIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"88qKaOcStkm79SxhFfo1KQ": {
getter: function (varBag, idService) {
return varBag.vars.value.initialsListInLocal;
}
},
"cMjRZTCGtEmLnsLGka6IPg": {
getter: function (varBag, idService) {
return varBag.outVars.value.fontColorOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"eExKABlW_0CcrS8u2b_dbg": {
getter: function (varBag, idService) {
return varBag.get_FontColor_Avatar_UpdateItemVar.value;
}
},
"uHJ_SFkcHkeeMoZHeG9Muw": {
getter: function (varBag, idService) {
return varBag.vars.value.in_DayOfWeekInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"VXYaaXk630S3w4qIoU7TSQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_WeekdayLabelOut;
}
},
"NIpFg6O3nE6AgOWm8P8olw": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_Colors_ListOut;
}
},
"ngccxBn6zk+jlT7qAGh0uA": {
getter: function (varBag, idService) {
return varBag.vars.value.prefixInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"IseWRtr+okmFhexkn7UQTw": {
getter: function (varBag, idService) {
return varBag.vars.value.spacingOptionsInLocal;
}
},
"AU7_Y_bUTE6m8zBWqym1dg": {
getter: function (varBag, idService) {
return varBag.outVars.value.classesOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"m0WvFTPCnUS99zZJCFIbqQ": {
getter: function (varBag, idService) {
return varBag.formatClasses2Var.value;
}
},
"xO15SXURLEW4Honic0Lm2Q": {
getter: function (varBag, idService) {
return varBag.formatClasses5Var.value;
}
},
"t0P0dJJUzUO_yBm6RNrVFQ": {
getter: function (varBag, idService) {
return varBag.formatClasses4Var.value;
}
},
"kcoheVPz70W2TQTLrDtRXg": {
getter: function (varBag, idService) {
return varBag.formatClasses6Var.value;
}
},
"hJjskWlMYUOChqWUAc5dug": {
getter: function (varBag, idService) {
return varBag.formatClassesVar.value;
}
},
"JxJnlRvmAkyu_h+DRTefSw": {
getter: function (varBag, idService) {
return varBag.formatClasses3Var.value;
}
},
"xd0W9V7NHkax_Ots7p2TZQ": {
getter: function (varBag, idService) {
return varBag.formatClasses7Var.value;
}
},
"tTdk55oc7EiK17gCv1tyTQ": {
getter: function (varBag, idService) {
return varBag.vars.value.borderOptionsInLocal;
}
},
"A1eg4ps6lU2eG7Azy2W_iw": {
getter: function (varBag, idService) {
return varBag.outVars.value.classesOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"W19PQFWGtUuo+XoMFeDy1A": {
getter: function (varBag, idService) {
return varBag.formatClasses_TopLeftVar.value;
}
},
"QvmyYdEmMUKNTarmpNvpEQ": {
getter: function (varBag, idService) {
return varBag.formatClasses_BottomRightVar.value;
}
},
"PkPXZ2tVNES5C+CZCeJv2w": {
getter: function (varBag, idService) {
return varBag.formatClasses_BorderVar.value;
}
},
"YmRIp6gVUUOb7oi9ygIeqg": {
getter: function (varBag, idService) {
return varBag.formatClasses_TopRightVar.value;
}
},
"MU5UuKiLTEWxR7kbZsprZg": {
getter: function (varBag, idService) {
return varBag.formatClasses_GeneralRadiusVar.value;
}
},
"OetC4aZINku_vfSnKq+u_A": {
getter: function (varBag, idService) {
return varBag.formatClasses_ColorVar.value;
}
},
"5qzC859BQU2M8EUdiqoxrQ": {
getter: function (varBag, idService) {
return varBag.getSpacingOptionsVar.value;
}
},
"AtgG+sVjgE6ixxlavRODmg": {
getter: function (varBag, idService) {
return varBag.formatClasses_BottomLeftVar.value;
}
},
"vKwYwFfjekK_ELvYNyizkg": {
getter: function (varBag, idService) {
return varBag.vars.value.originalClassesInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Epnft+wPjEaY8waFChdxWg": {
getter: function (varBag, idService) {
return varBag.vars.value.newClassInInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"I1wmXk+1_0+aJPLhbncZVA": {
getter: function (varBag, idService) {
return varBag.outVars.value.classesOutOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"PTmBb4j_bEqd_iqBdNyVrQ": {
getter: function (varBag, idService) {
return varBag.vars.value.containerIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"SpeOMWTL6kGPfXho1CRNCw": {
getter: function (varBag, idService) {
return varBag.vars.value.styleInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"HLMMQ5+FSEqzuQ97lDcOLw": {
getter: function (varBag, idService) {
return varBag.outVars.value.appliedStyleOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"BrGXNxcqY0aIsrxNdeXF5Q": {
getter: function (varBag, idService) {
return varBag.setStyleJSResult.value;
}
},
"FFSosYQCnUGWRn6MldMT0Q": {
getter: function (varBag, idService) {
return varBag.vars.value.type_GenderIdentifierVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"+Fz5XXloRUq4g9ZKEpC+rQ": {
getter: function (varBag, idService) {
return varBag.vars.value.in_Type_UpdateFeedItemIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"O5rOmbzEr0yYyGL1TA6Zbg": {
getter: function (varBag, idService) {
return varBag.vars.value.in_InitialsListInLocal;
}
},
"YhqYjUWZnEid0CdquF96Dw": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_BackgroundColorOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"bP88nCGxT0+_6KhRlxFEqw": {
getter: function (varBag, idService) {
return varBag.get_BackgroundColor_Avatar_UpdateItemVar.value;
}
},
"fLHiRLDoYECLjvYLfN24Yw": {
getter: function (varBag, idService) {
return varBag.vars.value.in_CallbackFunctionInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"cPmepiDPE06rH9dC44NU2A": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_ElementOut;
},
dataType: OS.DataTypes.DataTypes.Object
},
"Xyx30eEdr0yrEslbW5Gp7A": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_ScrollEventOut;
},
dataType: OS.DataTypes.DataTypes.Object
},
"_RVxcydJtkeU5L6bKL+29A": {
getter: function (varBag, idService) {
return varBag.setMainScrollEventsJSResult.value;
}
},
"HwYma00IFUSZRJ_M9YtdCg": {
getter: function (varBag, idService) {
return varBag.vars.value.in_SpaceIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"WAXmdJxgtU2UjsH+hsSS4w": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_ColorClassOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"KvmfSAmh70W7F3T52nS89g": {
getter: function (varBag, idService) {
return varBag.vars.value.emptyStyleOptionsVar;
}
},
"4a6ohpZj+kKgkGdYlSFtPg": {
getter: function (varBag, idService) {
return varBag.vars.value.main_StyleOptionsInLocal;
}
},
"PLvZxiwGMEmpurylnxBfXg": {
getter: function (varBag, idService) {
return varBag.vars.value.new_StyleOptionsInLocal;
}
},
"oBp0XAnoq0e4OXk3KCk_xA": {
getter: function (varBag, idService) {
return varBag.outVars.value.result_StyleOptionsOut;
}
},
"KH2qj5kspkyBfcVD8i2_3Q": {
getter: function (varBag, idService) {
return varBag.vars.value.heightSizeIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"t2+HHlAOb0Ckq+s+7plzIg": {
getter: function (varBag, idService) {
return varBag.vars.value.widthSizeIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"9L4MfCO6zU2vd2lsOUKm3g": {
getter: function (varBag, idService) {
return varBag.vars.value.isNoImageInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"FfdyvDfkBESj_KsqX12lBA": {
getter: function (varBag, idService) {
return varBag.outVars.value.classesOutOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"4ljY4xes7kSBnBwAEEsbBg": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_BrandColors_ListOut;
}
},
"ZWICnh02AU22dGT4hTxLVA": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_ExtendedColors_ListOut;
}
},
"6_Cvsf8BLkOJZqw6ItMnVw": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_NeutralColors_ListOut;
}
},
"OEVaGpzPTEuTNVH+NzWyqA": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_SemanticColors_ListOut;
}
},
"rTwmUw3BGUKFG3zN4tmDSA": {
getter: function (varBag, idService) {
return varBag.listFilter_SemanticVar.value;
}
},
"st4nXv6xBEKVNuWms9Vwwg": {
getter: function (varBag, idService) {
return varBag.listFilter_BrandVar.value;
}
},
"wvBydONK20yf9e5Q9aNdSA": {
getter: function (varBag, idService) {
return varBag.listFilter_NeutralVar.value;
}
},
"3M2xgAr5Xk6ciE9eZdXDJA": {
getter: function (varBag, idService) {
return varBag.get_UBTColorsVar.value;
}
},
"Pxij1hZkD0mJ8FZ98UCT6A": {
getter: function (varBag, idService) {
return varBag.listFilter_ExendedVar.value;
}
},
"y3tTztvBlkqlQWvIeXhVrw": {
getter: function (varBag, idService) {
return varBag.vars.value.in_InputIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"oWdLNGk9HUWF6ujoJ0LQcw": {
getter: function (varBag, idService) {
return varBag.blurElementJSResult.value;
}
},
"e4fHNsX9sEObF+Mm+d_pEA": {
getter: function (varBag, idService) {
return varBag.vars.value.in_ImageCardTypeInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"GpuOaGasr0WaApQVvzvyow": {
getter: function (varBag, idService) {
return varBag.vars.value.itemsPerRowInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"uSSr6+PV20q4feJYugCOSg": {
getter: function (varBag, idService) {
return varBag.outVars.value.classesOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"FhwHfzbg+UaCEUNm7z0rBg": {
getter: function (varBag, idService) {
return varBag.vars.value.in_ColorIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"ga5jkr1YWkKjLH4L0r2TAg": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_ColorClassOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"dRF+0rHEy0aJrKN_CEp1tQ": {
getter: function (varBag, idService) {
return varBag.vars.value.sizeIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"faO7tj8o_kGJhKZ+JBy0qg": {
getter: function (varBag, idService) {
return varBag.outVars.value.classesOutOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"MaAxm4uz+kW_5+IHYaLjtQ": {
getter: function (varBag, idService) {
return varBag.vars.value.in_TimezoneNameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"tq2HFTQxsk+uIrDAy6_FNQ": {
getter: function (varBag, idService) {
return varBag.vars.value.in_TimezoneOffsetInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"KrqKhJ5IyUCc3T_fwpfEgA": {
getter: function (varBag, idService) {
return varBag.vars.value.in_LocalityInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"g8RGUVrRUUGUICXuoIagTQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.targetTimeLabelOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"NCIJ0xLKrECDxlasx_FYJg": {
getter: function (varBag, idService) {
return varBag.calculateTargetDateTimeJSResult.value;
}
},
"DasaiKayjESj2ZM3QVnFKw": {
getter: function (varBag, idService) {
return varBag.vars.value.in_IsReadInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"rhfnIlvx40KauugfhXQ2PQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_BackgroundColorOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"j9JXXQ+Vkkq8lbHuLpYvMA": {
getter: function (varBag, idService) {
return varBag.vars.value.inputIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"1B+WawFYmkaBJpO6Oba0bQ": {
getter: function (varBag, idService) {
return varBag.vars.value.focusOnInputInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"jRNklNUTWUG_Et4vUj2fAg": {
getter: function (varBag, idService) {
return varBag.jSUtils_Element_GetProperty_ObjVar.value;
}
},
"iG4pzx45H0mPTX2TDaPQrQ": {
getter: function (varBag, idService) {
return varBag.jSUtils_Element_Operations_GetElementByIdVar.value;
}
},
"BSdaCgCR+UerNU+bG8CxHw": {
getter: function (varBag, idService) {
return varBag.vars.value.in_Type_UpdateFeedItemIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"LstKflL1ekCXNKFEZofu9Q": {
getter: function (varBag, idService) {
return varBag.vars.value.in_Type_GenderIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"kd73ELv0g0y3bPm48VHKZg": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_FontColorOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"71GRpE+J8E+DdlqV5UqzsQ": {
getter: function (varBag, idService) {
return varBag.vars.value.in_DestroyElementInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"Ca5YVXS35EeWiM8EXsD7IQ": {
getter: function (varBag, idService) {
return varBag.vars.value.in_MainScrollEventInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"Bqw8NFf4VEiv7Kkkf6eC9g": {
getter: function (varBag, idService) {
return varBag.vars.value.in_ScrollEventInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"kypNacnRcEaklsYLRPgiIw": {
getter: function (varBag, idService) {
return varBag.removeScrollEventsJSResult.value;
}
},
"6fjGobVF6ke4mK1SdGvt0g": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_ElementOut;
},
dataType: OS.DataTypes.DataTypes.Object
},
"xfx9_qQr6UKkPoIoSVdquA": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_ScrollEventOut;
},
dataType: OS.DataTypes.DataTypes.Object
},
"JKH6lbAYLUOeUbX1KYfajg": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_TimeoutOut;
},
dataType: OS.DataTypes.DataTypes.Object
},
"vi+7QYMzYkO_rl84r+zPYg": {
getter: function (varBag, idService) {
return varBag.setShadowScrollEventsJSResult.value;
}
},
"HRmKYXhST0yLxvgyfV66Hw": {
getter: function (varBag, idService) {
return varBag.handleMobileKeyboardVisibilityJSResult.value;
}
},
"Rf9PYHk1CkCA37umIKpsAA": {
getter: function (varBag, idService) {
return varBag.outVars.value.lookupActionsOut;
}
},
"ZRybMc8fSkeoHtW6c3jtvQ": {
getter: function (varBag, idService) {
return varBag.vars.value.isEditedVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"SD4kx+8o+0aZEkzdiA3zUw": {
getter: function (varBag, idService) {
return varBag.vars.value.createdDateTimeUtcInLocal;
},
dataType: OS.DataTypes.DataTypes.DateTime
},
"jSoahv10w0iyhodpVKhn9g": {
getter: function (varBag, idService) {
return varBag.vars.value.editedDateTimeUtcInLocal;
},
dataType: OS.DataTypes.DataTypes.DateTime
},
"KjOwX7Fa3Umf3DWSCX2n4g": {
getter: function (varBag, idService) {
return varBag.outVars.value.relativeTimeOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"sN4HFIbsTU6TjNDYBA6MNQ": {
getter: function (varBag, idService) {
return varBag.javaScript1JSResult.value;
}
},
"zwCGxOD4wE6xmAzHz19evA": {
getter: function (varBag, idService) {
return varBag.vars.value.in_Type_NotificationInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"glhUv++TH0qFCO9sJQHWiQ": {
getter: function (varBag, idService) {
return varBag.vars.value.in_DynamicTextInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"IVvcbsW8zEa2wnPDMzqkVQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_DescriptionOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"T3aTuqLYxUiuCYyOqRBWVg": {
getter: function (varBag, idService) {
return varBag.vars.value.timeVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"mJhfsA+pxEG8lBY5nJ6pKw": {
getter: function (varBag, idService) {
return varBag.vars.value.in_DateTimeInLocal;
},
dataType: OS.DataTypes.DataTypes.DateTime
},
"Rawgd2VPAUWJzl_iUoKcWg": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_FormattedDateTimeOut;
}
},
"D7rVAna9y0SsiXhuTkJuSA": {
getter: function (varBag, idService) {
return varBag.formatConnectTimeVar.value;
}
},
"vMEpD8LJS0Grt_nmmAyHFQ": {
getter: function (varBag, idService) {
return varBag.formatConnectDateVar.value;
}
},
"cy1iC1UJNkKm7Bcy0xrWeg": {
getter: function (varBag, idService) {
return varBag.outVars.value.listOut;
}
},
"dviilh30AUmDhwphRMNFbA": {
getter: function (varBag, idService) {
return varBag.outVars.value.classOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"JOILlrN3W0G4q3O68u6mfQ": {
getter: function (varBag, idService) {
return varBag.vars.value.in_CardTypeIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"ULXdDyScAE2NVdxvayZ8vA": {
getter: function (varBag, idService) {
return varBag.outVars.value.spacingOptionsOut;
}
},
"fZM6WRC6NEaTxjzsOmQoBg": {
getter: function (varBag, idService) {
return varBag.vars.value.in_SheetIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"asSif0dYxEK879Ca6eNryg": {
getter: function (varBag, idService) {
return varBag.vars.value.in_IsEnabledInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"sLGoUE367U+f3OkkBSbrpQ": {
getter: function (varBag, idService) {
return varBag.setDragEnabledJSResult.value;
}
},
"qnNUO5aDfUK34ioxMLHL8A": {
getter: function (varBag, idService) {
return varBag.vars.value.newStyleVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"2B4qAoCWzE+jx6kHSZtrrg": {
getter: function (varBag, idService) {
return varBag.vars.value.originalStylesInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"td8o6OXUlkiR36Cw8h225A": {
getter: function (varBag, idService) {
return varBag.vars.value.newStylePropertyInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"ByffMje5VUa9Pokt8lI_5g": {
getter: function (varBag, idService) {
return varBag.vars.value.newStyleValueInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"xoTe3paU4EupcmUMZQYOEw": {
getter: function (varBag, idService) {
return varBag.outVars.value.stylesOutOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"eIj6tx5QbEi+KOdTW8EqXw": {
getter: function (varBag, idService) {
return varBag.vars.value.heightVar;
},
dataType: OS.DataTypes.DataTypes.Decimal
},
"IQVY8QkfJ0W6Dahx_8g8pQ": {
getter: function (varBag, idService) {
return varBag.vars.value.curveOffsetVar;
},
dataType: OS.DataTypes.DataTypes.Decimal
},
"oyGywMEztEyop58bARTm6w": {
getter: function (varBag, idService) {
return varBag.vars.value.in_HeightPercentageInLocal;
},
dataType: OS.DataTypes.DataTypes.Decimal
},
"xo98GApB50iq+o_3WtvLDA": {
getter: function (varBag, idService) {
return varBag.vars.value.in_CurvaturePercentageInLocal;
},
dataType: OS.DataTypes.DataTypes.Decimal
},
"HncXma08UUm+njSrDhf3BQ": {
getter: function (varBag, idService) {
return varBag.vars.value.in_ExpectedHeightInPIxelInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"EdmZLJTNOEOZabemIGzMLQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_PathOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"t43jmZ0n7EOQ3Ifdxhtw6A": {
getter: function (varBag, idService) {
return varBag.sVGHeader_SpecificHeight_GetPathVar.value;
}
},
"kALlOluhBEKaxDu2k0jcyg": {
getter: function (varBag, idService) {
return varBag.vars.value.textInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"9ZL_QnUn8EeyHcEUWCyL1w": {
getter: function (varBag, idService) {
return varBag.outVars.value.textRegexSafeOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"6WtSKd3FXkC1yqEylHLpZQ": {
getter: function (varBag, idService) {
return varBag.removeRegexSpecialCharactersJSResult.value;
}
},
"xvB26_SLBk+7SpeUbFJG9w": {
getter: function (varBag, idService) {
return varBag.vars.value.ageYearsVar;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"lQiv_oUwUUWXz6a5t7r7tg": {
getter: function (varBag, idService) {
return varBag.vars.value.ageMonthsVar;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"YHrqb72AzkGFoJTSLh5J1g": {
getter: function (varBag, idService) {
return varBag.vars.value.dateOfBirthInLocal;
},
dataType: OS.DataTypes.DataTypes.Date
},
"HUbuidktoU+At4eVJvJiXA": {
getter: function (varBag, idService) {
return varBag.vars.value.referenceDateInLocal;
},
dataType: OS.DataTypes.DataTypes.Date
},
"nxrxo3FU5UmdJNXRcIaX8Q": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_AgeLabelOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Y1bhL0xHpUKNGQ5X2PDgVg": {
getter: function (varBag, idService) {
return varBag.outVars.value.isEnterKeyOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"FpihBrqYakCa15p9NxgGUQ": {
getter: function (varBag, idService) {
return varBag.checkForEnterKeyJSResult.value;
}
},
"nvpHDtYR9E+8lbMoNnwoPQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_DateFormatOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"kZ+sbFfaBkWdWv4e7USU0Q": {
getter: function (varBag, idService) {
return varBag.getConnectDateFormat_ComponentsVar.value;
}
},
"n_Nz+FBQw0Or3wKAWQyrkg": {
getter: function (varBag, idService) {
return varBag.getConnectDateFormat_DayMonthVar.value;
}
},
"0zrEYz9fnEKg3DZclGzfQA": {
getter: function (varBag, idService) {
return varBag.vars.value.in_CardTypeIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"B4DYKV9fzky2lv6_ix6cfQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.borderOptionsOut;
}
},
"6AXWLZf9UUGpyhnwrfTmIg": {
getter: function (varBag, idService) {
return varBag.vars.value.sizeHeightIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"0TSSpEHMTky3QtCAy5SuBw": {
getter: function (varBag, idService) {
return varBag.vars.value.sizeHeightBackgroundIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"1Ip9qpbI0UaH2ILyW1NR8A": {
getter: function (varBag, idService) {
return varBag.vars.value.sizeWidthIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"pi9dxfsqh0a9Ri+oq7_Eew": {
getter: function (varBag, idService) {
return varBag.outVars.value.classesOutOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"p1zQFWU5gU2qf1QTwM8pFg": {
getter: function (varBag, idService) {
return varBag.resetSvgVariablesJSResult.value;
}
},
"rfV39AyNSEKM7zvsLCPNwQ": {
getter: function (varBag, idService) {
return varBag.vars.value.propertyInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"8PQOBkTBAUyWMAZsBXs+VQ": {
getter: function (varBag, idService) {
return varBag.vars.value.opacityInLocal;
},
dataType: OS.DataTypes.DataTypes.Decimal
},
"AaLGgcSibEKkN4RZuVRLig": {
getter: function (varBag, idService) {
return varBag.vars.value.colorInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Torgej8m90iFKP+AlPz26Q": {
getter: function (varBag, idService) {
return varBag.outVars.value.styleOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"3luHNGRVC0a2+T9+55XSww": {
getter: function (varBag, idService) {
return varBag.vars.value.itemsPerRowInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"EQh6MIf8pkSdbPQjLmLbIQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.imageSizeOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"9jNEANwjukS2zffxOTjHNw": {
getter: function (varBag, idService) {
return varBag.initializeJSResult.value;
}
},
"701rHEUHm0+rIsmZP3VLGw": {
getter: function (varBag, idService) {
return varBag.vars.value.in_CallbackFunctionInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"OkgPWuTQmUGK+F5s2BRsYA": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_ElementOut;
},
dataType: OS.DataTypes.DataTypes.Object
},
"m+CQmMy29068QBQhUFf+tQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_ScrollEventOut;
},
dataType: OS.DataTypes.DataTypes.Object
},
"mYET9mXy0UGvb28ygkJi1A": {
getter: function (varBag, idService) {
return varBag.setMainFixedScrollEventsJSResult.value;
}
},
"dFAyicy5qkG1Z7gYEl1N4g": {
getter: function (varBag, idService) {
return varBag.vars.value.elapsedTimeVar;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"hWg_0YG3K0K7F0HH2HkjZQ": {
getter: function (varBag, idService) {
return varBag.vars.value.in_NotificationDateInLocal;
},
dataType: OS.DataTypes.DataTypes.DateTime
},
"Etn7NC3MvUmvmflyoTXN0g": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_ElapsedTimeOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"SaDOaFeuaEeN88rJRzxi_w": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_ComponentFormatsOut;
}
},
"WW+ibFrzZ0urd0VI2Ks9VA": {
getter: function (varBag, idService) {
return varBag.vars.value.in_DateInLocal;
},
dataType: OS.DataTypes.DataTypes.Date
},
"TX6n95IvyEeRZkGkk5Z1Lw": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_WeekdayLabelOut;
}
},
"a9wC5uEMGE+oHvNicXlwww": {
getter: function (varBag, idService) {
return varBag.getConnectWeekdayLabel_ByDayOfWeekVar.value;
}
},
"N_B8_R2Y7ECCjVejjo8g7A": {
getter: function (varBag, idService) {
return varBag.vars.value.columnOptionsInLocal;
}
},
"j1xQw_iRTE2pGMqJP9essg": {
getter: function (varBag, idService) {
return varBag.outVars.value.classesOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"v17TNAT9CEi4WmTF5moKFQ": {
getter: function (varBag, idService) {
return varBag.formatClasses3Var.value;
}
},
"jMUxQEhpHk+4Tv6R247p8g": {
getter: function (varBag, idService) {
return varBag.formatClassesVar.value;
}
},
"VuXGc_Q9O066c6XkEwABBA": {
getter: function (varBag, idService) {
return varBag.formatClasses2Var.value;
}
},
"nHrHwguwa0e4wZoEUFYiCQ": {
getter: function (varBag, idService) {
return varBag.convertVerticalAlignToFlexAlignItemsVar.value;
}
},
"bWgcBUXmd06WSnIKF56KDg": {
getter: function (varBag, idService) {
return varBag.vars.value.yearVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"1vUFsZY6yEuX2HZzYRExUQ": {
getter: function (varBag, idService) {
return varBag.vars.value.in_DateInLocal;
},
dataType: OS.DataTypes.DataTypes.Date
},
"fMD9_egNXE2M7WSLyC3Kzg": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_FormattedDateOut;
}
},
"f7uEEsLeYU+41w9rYP67tA": {
getter: function (varBag, idService) {
return varBag.getConnectDateFormat_ComponentsVar.value;
}
},
"_5MuXmkXbUikVJ8bdXUdtg": {
getter: function (varBag, idService) {
return varBag.formatConnectDateVar.value;
}
},
"5aWJmM7zt02VorzoAMJnGg": {
getter: function (varBag, idService) {
return varBag.vars.value.propertyInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"zJcojTAprEW9RBEfjquHFg": {
getter: function (varBag, idService) {
return varBag.vars.value.sizeOptionsInLocal;
}
},
"6Gw0FRNcyEmh_ig4Rzm1eA": {
getter: function (varBag, idService) {
return varBag.outVars.value.styleOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"QiYQWvqtykCk6WXDQ7GVIg": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_Colors_ListOut;
}
},
"cH7zY72e7kSgypzHthaU8w": {
getter: function (varBag, idService) {
return varBag.vars.value.backgroundImageUrlInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"KEuziLblYU+aaePzRoF_NA": {
getter: function (varBag, idService) {
return varBag.outVars.value.styleOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"A1vNPJ+D0UC+H6I6_MZZVg": {
getter: function (varBag, idService) {
return varBag.vars.value.yVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"oj7ikq_eY0mCx41T+fQfjw": {
getter: function (varBag, idService) {
return varBag.vars.value.qYVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"ZvaE6KDtPEazQbIDjgsxSQ": {
getter: function (varBag, idService) {
return varBag.vars.value.sPxVar;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"8UWL5oqdG0Gh0n_iGdt8lw": {
getter: function (varBag, idService) {
return varBag.vars.value.viewBoxHeightVar;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"MrMKz7C_FkyYLUVA0peH2A": {
getter: function (varBag, idService) {
return varBag.vars.value.in_CurvaturePercentageInLocal;
},
dataType: OS.DataTypes.DataTypes.Decimal
},
"6QUxTecjbEKdMlCmQ7wiCQ": {
getter: function (varBag, idService) {
return varBag.vars.value.in_ExpectedHeightInPIxelInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"uQasZfF9VkShiIXcsUdTIg": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_PathOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"QmHp5a4FJk+GvaFIqp1Zlw": {
getter: function (varBag, idService) {
return varBag.vars.value.in_TextInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"I_xej5Dk3UilF3dWioQq2w": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_ValidOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"Rvq5JysQ5kKWnPtsxLZhtw": {
getter: function (varBag, idService) {
return varBag.checkFormatPhoneNumberJSResult.value;
}
},
"S2bD3lK+IkiJAN_NXVT05w": {
getter: function (varBag, idService) {
return varBag.vars.value.in_CardTypeIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"5lkugrnqykSU5vVKLLHqYw": {
getter: function (varBag, idService) {
return varBag.outVars.value.textOptionsOut;
}
},
"xaouOdXwgEywlj5daCY2iQ": {
getter: function (varBag, idService) {
return varBag.vars.value.searchInputIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Ex_znNmR6k2W4RG2euEGCg": {
getter: function (varBag, idService) {
return varBag.vars.value.onSearchStateChangeInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"EWSX34b4u02oHwml0PI9mQ": {
getter: function (varBag, idService) {
return varBag.vars.value.onSvgStateChangeInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"wBJib804YUGNCdUBFL9S6Q": {
getter: function (varBag, idService) {
return varBag.vars.value.svgObjectIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"ezcxj3UY1U+md+GMgZChDA": {
getter: function (varBag, idService) {
return varBag.outVars.value.destroyOut;
},
dataType: OS.DataTypes.DataTypes.Object
},
"HBYRiy5cpEKMJoMEZ7klIA": {
getter: function (varBag, idService) {
return varBag.javaScript1JSResult.value;
}
},
"q3D_RUyD_k67JtiULBHHug": {
getter: function (varBag, idService) {
return varBag.vars.value.in_Type_UpdateFeedItemIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"byr3X7JA7kOKFWZ6QBrl3g": {
getter: function (varBag, idService) {
return varBag.vars.value.in_Type_GenderIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"yJnRrYI5mkWEOhLALn6uNA": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_BackgroundColorOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"OGY3AuxkNkeYllpWifsIvg": {
getter: function (varBag, idService) {
return varBag.vars.value.in_MainContainerClassInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"BpHT1_3rGEK8B7SBnD9psA": {
getter: function (varBag, idService) {
return varBag.vars.value.in_ImageCardTypeIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"oYHaC3D0t0G4outT4kBx3Q": {
getter: function (varBag, idService) {
return varBag.vars.value.in_AvatarSizeIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"2nAKWdnoM0aNE7NZawEZMQ": {
getter: function (varBag, idService) {
return varBag.vars.value.in_ShowAvatarListInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"b1VYOTdBH0eWUBKWfjD36Q": {
getter: function (varBag, idService) {
return varBag.vars.value.in_ExtendedClassInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"b0rsoaCAP06L3atTbk05JQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.classesOutOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"gZC6KHIOFECOgc3IlMsUfA": {
getter: function (varBag, idService) {
return varBag.vars.value.in_ColumnWidthInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"l7iKa4QwrUWXe2D_rhPhgg": {
getter: function (varBag, idService) {
return varBag.outVars.value.classesOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"gkHYIdQurkmv4A8W8rzPzQ": {
getter: function (varBag, idService) {
return varBag.vars.value.countryCodeVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"FhCFrH0mgUi2mBZ_VraAHw": {
getter: function (varBag, idService) {
return varBag.vars.value.in_CountryCodeInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"XbJNJYWI2kWIdiv0Pl5AuQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.out_CountryFlagURLOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"w+Nbzpep5UuXB11cJA0Czw": {
getter: function (varBag, idService) {
return varBag.outVars.value.listOut;
}
},
"zuTCTlkGXU+K+v3w9cQhKQ": {
getter: function (varBag, idService) {
return varBag.vars.value.verticalAligmentIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"tfP4nzYUMUOqCIqh7qkWxQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.classOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"SHCGPVpHmk+qlKugclCzJQ": {
getter: function (varBag, idService) {
return varBag.vars.value.in_TimeoutInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"x+dflTsd902jF1i6476IFw": {
getter: function (varBag, idService) {
return varBag.clearTimeoutJSResult.value;
}
},
"7BCBLqpnqEu3bby2pfnb4w": {
getter: function (varBag, idService) {
return UBTConnectLibraryClientVariables.getSVG_DefaultHeight();
},
dataType: OS.DataTypes.DataTypes.Integer
},
"9svVRvZRn0i40Nd3kVX2Nw": {
getter: function (varBag, idService) {
return UBTConnectLibraryClientVariables.getSVG_DefaultWidth();
},
dataType: OS.DataTypes.DataTypes.Integer
},
"NrbRvEEkGkGRNkK_JgoRVQ": {
getter: function (varBag, idService) {
return UBTConnectLibraryClientVariables.getSVG_DefaultCurvePoint();
},
dataType: OS.DataTypes.DataTypes.Integer
},
"ds0Py47erkCB5C8A1am+sA": {
getter: function (varBag, idService) {
return UBTConnectLibraryClientVariables.getSVG_DefaultBreakPoint();
},
dataType: OS.DataTypes.DataTypes.Integer
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
