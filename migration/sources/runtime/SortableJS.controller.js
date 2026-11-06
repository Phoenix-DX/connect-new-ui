define("SortableJS.controller$SetupList", ["exports", "OutSystems/ClientRuntime/Main", "SortableJS.model", "SortableJS.controller", "SortableJS.controller$SetupList.JavaScriptJS"], function (exports, OutSystems, SortableJSModel, SortableJSController, SortableJS_controller_SetupList_JavaScriptJS) {
var OS = OutSystems.Internal;
SortableJSController.default.setupList$Action = function (placeholdeIdIn, handlerIn, groupNameIn, denyListsIn, preventDomMoveIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("SortableJS.SetupList$vars"))());
vars.value.placeholdeIdInLocal = placeholdeIdIn;
vars.value.handlerInLocal = handlerIn;
vars.value.groupNameInLocal = groupNameIn;
vars.value.denyListsInLocal = denyListsIn.clone();
vars.value.preventDomMoveInLocal = preventDomMoveIn;
var jSONSerialize1Var = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.jSONSerialize1Var = jSONSerialize1Var;
try {OutSystemsDebugger.push("Osc9JulZXEaKSiD4trZbew:tFg60_p47EemQFEhIz2NpQ:/ClientActionFlows.tFg60_p47EemQFEhIz2NpQ:sr9iFgINGsKZuwRFaQkrOg", "SortableJS", "SetupList", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Osc9JulZXEaKSiD4trZbew:bioJA2F1hUuG4nBcEtu7uw", callContext.id);
OutSystemsDebugger.handleBreakpoint("Osc9JulZXEaKSiD4trZbew:xBmNSkGrkE6A2gHtzWqFBw", callContext.id);
// JSON Serialize: JSONSerialize1
jSONSerialize1Var.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.denyListsInLocal, false, false, OS.DataTypes.DataTypes.Text);
OutSystemsDebugger.handleBreakpoint("Osc9JulZXEaKSiD4trZbew:Tlfrmz4S0E+8DJTTvyvlvg", callContext.id);
controller.safeExecuteJSNode(SortableJS_controller_SetupList_JavaScriptJS, "JavaScript", "SetupList", {
PreventDomMove: OS.DataConversion.JSNodeParamConverter.to(vars.value.preventDomMoveInLocal, OS.DataTypes.DataTypes.Boolean),
Handler: OS.DataConversion.JSNodeParamConverter.to(vars.value.handlerInLocal, OS.DataTypes.DataTypes.Object),
DenyListJson: OS.DataConversion.JSNodeParamConverter.to(jSONSerialize1Var.value.jSONOut, OS.DataTypes.DataTypes.Text),
PlaceholderId: OS.DataConversion.JSNodeParamConverter.to(vars.value.placeholdeIdInLocal, OS.DataTypes.DataTypes.Text),
GroupName: OS.DataConversion.JSNodeParamConverter.to(vars.value.groupNameInLocal, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Osc9JulZXEaKSiD4trZbew:QgiiuQZqEk6bPMSa+5R6Lw", callContext.id);
return ;
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Osc9JulZXEaKSiD4trZbew:tFg60_p47EemQFEhIz2NpQ", callContext.id);
}

};
var controller = SortableJSController.default;
SortableJSController.default.constructor.registerVariableGroupType("SortableJS.SetupList$vars", [{
name: "PlaceholdeId",
attrName: "placeholdeIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Handler",
attrName: "handlerInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}, {
name: "GroupName",
attrName: "groupNameInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "DenyLists",
attrName: "denyListsInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new OS.DataTypes.TextList();
},
complexType: OS.DataTypes.TextList
}, {
name: "PreventDomMove",
attrName: "preventDomMoveInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
SortableJSController.default.clientActionProxies.setupList$Action = function (placeholdeIdIn, handlerIn, groupNameIn, denyListsIn, preventDomMoveIn) {
placeholdeIdIn = (placeholdeIdIn === undefined) ? "" : placeholdeIdIn;
handlerIn = (handlerIn === undefined) ? null : handlerIn;
groupNameIn = (groupNameIn === undefined) ? "" : groupNameIn;
denyListsIn = (denyListsIn === undefined) ? new OS.DataTypes.TextList() : denyListsIn;
preventDomMoveIn = (preventDomMoveIn === undefined) ? false : preventDomMoveIn;
return controller.executeActionInsideJSNode(SortableJSController.default.setupList$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(placeholdeIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(handlerIn, OS.DataTypes.DataTypes.Object), OS.DataConversion.JSNodeParamConverter.from(groupNameIn, OS.DataTypes.DataTypes.Text), denyListsIn, OS.DataConversion.JSNodeParamConverter.from(preventDomMoveIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("SortableJS.controller$SetupList.JavaScriptJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
const placeholder = document.getElementById($parameters.PlaceholderId);

if (!placeholder) {
  return;
}

const groupName = $parameters.GroupName || "default";
const denyList = parseDenyList($parameters.DenyListJson);
const preventDomMove = $parameters.PreventDomMove === true;
const lists = Array.from(placeholder.getElementsByClassName("list"));

function parseDenyList(value) {
  if (!value) {
    return [];
  }

  try {
    let parsed = JSON.parse(value);

    if (typeof parsed === "string") {
      parsed = JSON.parse(parsed);
    }

    if (Array.isArray(parsed)) {
      return parsed
        .map(function (id) {
          return String(id).trim();
        })
        .filter(Boolean);
    }

    console.warn("DenyListJson must be an array.", parsed);
  } catch (e) {
    console.error("Invalid DenyListJson:", value, e);
  }

  return [];
}

function normalizeIds(value) {
  if (!value) {
    return [];
  }

  return String(value)
    .split(",")
    .map(function (id) {
      return id.trim();
    })
    .filter(Boolean);
}

function applyDenyList() {
  lists.forEach(function (list, index) {
    if (!list.id) {
      list.id = $parameters.PlaceholderId + "-sortable-list-" + index;
    }

    list.setAttribute("data-deny-from", denyList.join(","));
  });
}

function isDeniedMove(evt) {
  if (!evt.from || !evt.to) {
    return false;
  }

  const deniedSourceIds = normalizeIds(evt.to.getAttribute("data-deny-from"));

  return deniedSourceIds.indexOf(evt.from.id) !== -1;
}

function getItemId(item) {
  if (!item) {
    return "";
  }

  const handle = item.querySelector(".drag-handle");

  if (!handle) {
    return "";
  }

  return handle.getAttribute("sortable-item-id") || "";
}

function removeDropMarker() {
  if (placeholder._dropMarker && placeholder._dropMarker.parentNode) {
    placeholder._dropMarker.parentNode.removeChild(placeholder._dropMarker);
  }

  placeholder._dropMarker = null;
}

function getDropMarker() {
  if (!placeholder._dropMarker) {
    const marker = document.createElement("div");
    marker.className = "sortable-insert-marker";
    marker.setAttribute("data-sortable-marker", "true");
    placeholder._dropMarker = marker;
  }

  return placeholder._dropMarker;
}

function getListChildrenForIndex(list, draggedItem) {
  return Array.from(list.children).filter(function (child) {
    if (child.getAttribute("data-sortable-marker") === "true") {
      return false;
    }

    if (draggedItem && child === draggedItem) {
      return false;
    }

    return true;
  });
}

function getTargetIndex(evt) {
  const to = evt.to;

  if (!to) {
    return -1;
  }

  const children = getListChildrenForIndex(to, evt.dragged);

  if (!evt.related || evt.related.getAttribute("data-sortable-marker") === "true") {
    return children.length;
  }

  const relatedIndex = children.indexOf(evt.related);

  if (relatedIndex < 0) {
    return children.length;
  }

  return evt.willInsertAfter ? relatedIndex + 1 : relatedIndex;
}

function showDropMarker(evt) {
  const to = evt.to;

  if (!to) {
    return;
  }

  const marker = getDropMarker();
  const targetIndex = getTargetIndex(evt);
  const children = getListChildrenForIndex(to, evt.dragged);

  removeDropMarker();

  if (targetIndex >= children.length) {
    to.appendChild(marker);
  } else {
    to.insertBefore(marker, children[targetIndex]);
  }

  placeholder._dropMarker = marker;
}

function clearFeedback(removeMarker) {
  lists.forEach(function (list) {
    list.classList.remove("sortable-drop-denied-target");
    list.classList.remove("sortable-drop-target");
  });

  Array.from(placeholder.getElementsByClassName("sortable-drop-denied")).forEach(function (item) {
    item.classList.remove("sortable-drop-denied");
  });

  if (removeMarker !== false) {
    removeDropMarker();
  }
}

function getDragVisualElement(evt) {
  const fallback = document.querySelector(".sortable-fallback");

  if (fallback) {
    return fallback;
  }

  const dragGhost = document.querySelector(".drag-ghost");

  if (dragGhost) {
    return dragGhost;
  }

  if (evt && evt.dragged) {
    return evt.dragged;
  }

  return null;
}

function getRectCenter(rect) {
  if (!rect) {
    return null;
  }

  return {
    x: rect.left + rect.width / 2,
    y: rect.top + rect.height / 2
  };
}

function isPointInsideRect(point, rect) {
  if (!point || !rect) {
    return false;
  }

  return (
    point.x >= rect.left &&
    point.x <= rect.right &&
    point.y >= rect.top &&
    point.y <= rect.bottom
  );
}

function isGhostBackAtOriginalPosition(evt) {
  const dragStart = placeholder._dragStart;

  if (!dragStart) {
    return false;
  }

  if (!evt.to || evt.to !== dragStart.fromElement) {
    return false;
  }

  const visualElement = getDragVisualElement(evt);

  if (!visualElement) {
    return false;
  }

  const visualRect = visualElement.getBoundingClientRect();
  const visualCenter = getRectCenter(visualRect);

  return isPointInsideRect(visualCenter, dragStart.originalRect);
}

applyDenyList();

lists.forEach(function (list) {
  const options = {
    group: groupName,
    animation: 150,
    handle: ".drag-handle",
    ghostClass: "drag-ghost",
    filter: ".sortable-insert-marker",

    onStart: function (evt) {
      placeholder._pendingMove = null;
      removeDropMarker();

      const rect = evt.item.getBoundingClientRect();

      placeholder._dragStart = {
        fromId: evt.from.id,
        fromElement: evt.from,
        oldIndex: evt.oldIndex,
        itemId: getItemId(evt.item),
        item: evt.item,
        originalRect: {
          left: rect.left,
          right: rect.right,
          top: rect.top,
          bottom: rect.bottom,
          width: rect.width,
          height: rect.height
        }
      };
    },

    onMove: function (evt) {
      const denied = isDeniedMove(evt);

      clearFeedback(false);

      if (evt.dragged) {
        evt.dragged.classList.toggle("sortable-drop-denied", denied);
      }

      if (denied && evt.to) {
        evt.to.classList.add("sortable-drop-denied-target");
        placeholder._pendingMove = null;
        removeDropMarker();
        return false;
      }

      if (preventDomMove) {
        if (isGhostBackAtOriginalPosition(evt)) {
          placeholder._pendingMove = null;
          removeDropMarker();

          if (evt.to) {
            evt.to.classList.remove("sortable-drop-target");
          }

          return false;
        }

        const targetIndex = getTargetIndex(evt);
        const dragStart = placeholder._dragStart || {};

        placeholder._pendingMove = {
          fromId: dragStart.fromId || evt.from.id,
          toId: evt.to.id,
          oldIndex: dragStart.oldIndex,
          newIndex: targetIndex,
          itemId: dragStart.itemId || getItemId(evt.dragged)
        };

        if (evt.to) {
          evt.to.classList.add("sortable-drop-target");
          showDropMarker(evt);
        }

        return false;
      }

      placeholder._pendingMove = null;
      return true;
    },

    onAdd: function () {
      // Intentionally empty.
      // With PreventDomMove = True, DOM movement is blocked in onMove.
    },

    onUpdate: function () {
      // Intentionally empty.
      // With PreventDomMove = True, DOM movement is blocked in onMove.
      // With PreventDomMove = False, Sortable handles normal reorder.
    },

    onEnd: function (evt) {
      const pendingMove = placeholder._pendingMove;

      clearFeedback(true);

      placeholder._pendingMove = null;
      placeholder._dragStart = null;

      if (pendingMove) {
        $parameters.Handler(
          pendingMove.fromId,
          pendingMove.toId,
          pendingMove.oldIndex,
          pendingMove.newIndex,
          pendingMove.itemId
        );

        return;
      }

      const hasMoved =
        evt.from !== evt.to ||
        evt.oldIndex !== evt.newIndex;

      if (!hasMoved) {
        return;
      }

      $parameters.Handler(
        evt.from.id,
        evt.to.id,
        evt.oldIndex,
        evt.newIndex,
        getItemId(evt.item)
      );
    }
  };

  if (list._sortableInstance) {
    list._sortableInstance.option("group", groupName);
    list._sortableInstance.option("animation", options.animation);
    list._sortableInstance.option("handle", options.handle);
    list._sortableInstance.option("ghostClass", options.ghostClass);
    list._sortableInstance.option("filter", options.filter);
    list._sortableInstance.option("onStart", options.onStart);
    list._sortableInstance.option("onMove", options.onMove);
    list._sortableInstance.option("onAdd", options.onAdd);
    list._sortableInstance.option("onUpdate", options.onUpdate);
    list._sortableInstance.option("onEnd", options.onEnd);
    return;
  }

  list._sortableInstance = new Sortable(list, options);
});
};
});

define("SortableJS.controller", ["exports", "OutSystems/ClientRuntime/Main", "SortableJS.model", "SortableJS.controller$debugger"], function (exports, OutSystems, SortableJSModel, SortableJS_Controller_debugger) {
var OS = OutSystems.Internal;
var SortableJSController = exports;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
}
Controller.prototype.clientActionProxies = {};
Controller.prototype.roles = {};
Controller.prototype.defaultTimeout = 10;
Controller.prototype.getDefaultTimeout = function () {
return SortableJSController.default.defaultTimeout;
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
SortableJSController.default = new Controller(null, "SortableJS");
});
define("SortableJS.controller$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"ifnBLOwDIEC8q0Ci4Gj8bg": {
getter: function (varBag, idService) {
return varBag.vars.value.placeholdeIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"ZFUESDiDcUqHyYioYY4ISA": {
getter: function (varBag, idService) {
return varBag.vars.value.handlerInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"1YxqtQ7FXEiE1nDxDGjqPw": {
getter: function (varBag, idService) {
return varBag.vars.value.groupNameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"DyP9lKJ2KUCi1V7vsOis8w": {
getter: function (varBag, idService) {
return varBag.vars.value.denyListsInLocal;
}
},
"T+TFdw6dPkKLRwPstoFAUw": {
getter: function (varBag, idService) {
return varBag.vars.value.preventDomMoveInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"xBmNSkGrkE6A2gHtzWqFBw": {
getter: function (varBag, idService) {
return varBag.jSONSerialize1Var.value;
}
},
"Tlfrmz4S0E+8DJTTvyvlvg": {
getter: function (varBag, idService) {
return varBag.javaScriptJSResult.value;
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
