define("FullCalendarReactive.model$DurationObjectRec", ["exports", "OutSystems/ClientRuntime/Main", "FullCalendarReactive.model"], function (exports, OutSystems, FullCalendarReactiveModel) {
var OS = OutSystems.Internal;
var DurationObjectRec = (function (_super) {
__extends(DurationObjectRec, _super);
function DurationObjectRec(defaults) {
_super.apply(this, arguments);
}
DurationObjectRec.attributesToDeclare = function () {
return [
this.attr("Unit", "unitAttr", "Unit", false, false, OS.DataTypes.DataTypes.Text, function () {
return "weeks";
}, true), 
this.attr("Duration", "durationAttr", "Duration", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
DurationObjectRec.init();
return DurationObjectRec;
})(OS.DataTypes.GenericRecord);
FullCalendarReactiveModel.DurationObjectRec = DurationObjectRec;

});
define("FullCalendarReactive.model$DurationObjectRecord", ["exports", "OutSystems/ClientRuntime/Main", "FullCalendarReactive.model", "FullCalendarReactive.model$DurationObjectRec"], function (exports, OutSystems, FullCalendarReactiveModel) {
var OS = OutSystems.Internal;
var DurationObjectRecord = (function (_super) {
__extends(DurationObjectRecord, _super);
function DurationObjectRecord(defaults) {
_super.apply(this, arguments);
}
DurationObjectRecord.attributesToDeclare = function () {
return [
this.attr("DurationObject", "durationObjectAttr", "DurationObject", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FullCalendarReactiveModel.DurationObjectRec());
}, true, FullCalendarReactiveModel.DurationObjectRec)
].concat(_super.attributesToDeclare.call(this));
};
DurationObjectRecord.fromStructure = function (str) {
return new DurationObjectRecord(new DurationObjectRecord.RecordClass({
durationObjectAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DurationObjectRecord._isAnonymousRecord = true;
DurationObjectRecord.UniqueId = "1027d800-24ba-ccdd-0cc3-b07718eb43e4";
DurationObjectRecord.init();
return DurationObjectRecord;
})(OS.DataTypes.GenericRecord);
FullCalendarReactiveModel.DurationObjectRecord = DurationObjectRecord;

});
define("FullCalendarReactive.model$DurationObjectRecordList", ["exports", "OutSystems/ClientRuntime/Main", "FullCalendarReactive.model", "FullCalendarReactive.model$DurationObjectRecord"], function (exports, OutSystems, FullCalendarReactiveModel) {
var OS = OutSystems.Internal;
var DurationObjectRecordList = (function (_super) {
__extends(DurationObjectRecordList, _super);
function DurationObjectRecordList(defaults) {
_super.apply(this, arguments);
}
DurationObjectRecordList.itemType = FullCalendarReactiveModel.DurationObjectRecord;
return DurationObjectRecordList;
})(OS.DataTypes.GenericRecordList);
FullCalendarReactiveModel.DurationObjectRecordList = DurationObjectRecordList;

});
define("FullCalendarReactive.model$ActionRec", ["exports", "OutSystems/ClientRuntime/Main", "FullCalendarReactive.model"], function (exports, OutSystems, FullCalendarReactiveModel) {
var OS = OutSystems.Internal;
var ActionRec = (function (_super) {
__extends(ActionRec, _super);
function ActionRec(defaults) {
_super.apply(this, arguments);
}
ActionRec.attributesToDeclare = function () {
return [
this.attr("Action", "actionAttr", "Action", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ActionRec.init();
return ActionRec;
})(OS.DataTypes.GenericRecord);
FullCalendarReactiveModel.ActionRec = ActionRec;

});
define("FullCalendarReactive.model$ActionRecord", ["exports", "OutSystems/ClientRuntime/Main", "FullCalendarReactive.model", "FullCalendarReactive.model$ActionRec"], function (exports, OutSystems, FullCalendarReactiveModel) {
var OS = OutSystems.Internal;
var ActionRecord = (function (_super) {
__extends(ActionRecord, _super);
function ActionRecord(defaults) {
_super.apply(this, arguments);
}
ActionRecord.attributesToDeclare = function () {
return [
this.attr("Action", "actionAttr", "Action", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FullCalendarReactiveModel.ActionRec());
}, true, FullCalendarReactiveModel.ActionRec)
].concat(_super.attributesToDeclare.call(this));
};
ActionRecord.fromStructure = function (str) {
return new ActionRecord(new ActionRecord.RecordClass({
actionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ActionRecord._isAnonymousRecord = true;
ActionRecord.UniqueId = "045d878e-c20c-3fae-d7cd-a3a94be17695";
ActionRecord.init();
return ActionRecord;
})(OS.DataTypes.GenericRecord);
FullCalendarReactiveModel.ActionRecord = ActionRecord;

});
define("FullCalendarReactive.model$ViewRec", ["exports", "OutSystems/ClientRuntime/Main", "FullCalendarReactive.model"], function (exports, OutSystems, FullCalendarReactiveModel) {
var OS = OutSystems.Internal;
var ViewRec = (function (_super) {
__extends(ViewRec, _super);
function ViewRec(defaults) {
_super.apply(this, arguments);
}
ViewRec.attributesToDeclare = function () {
return [
this.attr("type", "typeAttr", "type", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("title", "titleAttr", "title", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("activeStart", "activeStartAttr", "activeStart", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("activeEnd", "activeEndAttr", "activeEnd", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("currentStart", "currentStartAttr", "currentStart", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("currentEnd", "currentEndAttr", "currentEnd", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ViewRec.init();
return ViewRec;
})(OS.DataTypes.GenericRecord);
FullCalendarReactiveModel.ViewRec = ViewRec;

});
define("FullCalendarReactive.model$ViewRecord", ["exports", "OutSystems/ClientRuntime/Main", "FullCalendarReactive.model", "FullCalendarReactive.model$ViewRec"], function (exports, OutSystems, FullCalendarReactiveModel) {
var OS = OutSystems.Internal;
var ViewRecord = (function (_super) {
__extends(ViewRecord, _super);
function ViewRecord(defaults) {
_super.apply(this, arguments);
}
ViewRecord.attributesToDeclare = function () {
return [
this.attr("View", "viewAttr", "View", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FullCalendarReactiveModel.ViewRec());
}, true, FullCalendarReactiveModel.ViewRec)
].concat(_super.attributesToDeclare.call(this));
};
ViewRecord.fromStructure = function (str) {
return new ViewRecord(new ViewRecord.RecordClass({
viewAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ViewRecord._isAnonymousRecord = true;
ViewRecord.UniqueId = "0e2d638c-7b07-fe1c-ffdf-1c81e9a8f2ca";
ViewRecord.init();
return ViewRecord;
})(OS.DataTypes.GenericRecord);
FullCalendarReactiveModel.ViewRecord = ViewRecord;

});
define("FullCalendarReactive.model$ViewList", ["exports", "OutSystems/ClientRuntime/Main", "FullCalendarReactive.model", "FullCalendarReactive.model$ViewRec"], function (exports, OutSystems, FullCalendarReactiveModel) {
var OS = OutSystems.Internal;
var ViewList = (function (_super) {
__extends(ViewList, _super);
function ViewList(defaults) {
_super.apply(this, arguments);
}
ViewList.itemType = FullCalendarReactiveModel.ViewRec;
return ViewList;
})(OS.DataTypes.GenericRecordList);
FullCalendarReactiveModel.ViewList = ViewList;

});
define("FullCalendarReactive.model$RangeRec", ["exports", "OutSystems/ClientRuntime/Main", "FullCalendarReactive.model"], function (exports, OutSystems, FullCalendarReactiveModel) {
var OS = OutSystems.Internal;
var RangeRec = (function (_super) {
__extends(RangeRec, _super);
function RangeRec(defaults) {
_super.apply(this, arguments);
}
RangeRec.attributesToDeclare = function () {
return [
this.attr("start", "startAttr", "start", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("end", "endAttr", "end", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
RangeRec.init();
return RangeRec;
})(OS.DataTypes.GenericRecord);
FullCalendarReactiveModel.RangeRec = RangeRec;

});
define("FullCalendarReactive.model$RenderingRec", ["exports", "OutSystems/ClientRuntime/Main", "FullCalendarReactive.model"], function (exports, OutSystems, FullCalendarReactiveModel) {
var OS = OutSystems.Internal;
var RenderingRec = (function (_super) {
__extends(RenderingRec, _super);
function RenderingRec(defaults) {
_super.apply(this, arguments);
}
RenderingRec.attributesToDeclare = function () {
return [
this.attr("Rendering", "renderingAttr", "Rendering", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
RenderingRec.fromStructure = function (str) {
return new RenderingRec(new RenderingRec.RecordClass({
renderingAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
RenderingRec.init();
return RenderingRec;
})(OS.DataTypes.GenericRecord);
FullCalendarReactiveModel.RenderingRec = RenderingRec;

});
define("FullCalendarReactive.model$EventDescriptionRec", ["exports", "OutSystems/ClientRuntime/Main", "FullCalendarReactive.model"], function (exports, OutSystems, FullCalendarReactiveModel) {
var OS = OutSystems.Internal;
var EventDescriptionRec = (function (_super) {
__extends(EventDescriptionRec, _super);
function EventDescriptionRec(defaults) {
_super.apply(this, arguments);
}
EventDescriptionRec.attributesToDeclare = function () {
return [
this.attr("EventDescription", "eventDescriptionAttr", "EventDescription", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
EventDescriptionRec.fromStructure = function (str) {
return new EventDescriptionRec(new EventDescriptionRec.RecordClass({
eventDescriptionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
EventDescriptionRec.init();
return EventDescriptionRec;
})(OS.DataTypes.GenericRecord);
FullCalendarReactiveModel.EventDescriptionRec = EventDescriptionRec;

});
define("FullCalendarReactive.model$EventDescriptionRecord", ["exports", "OutSystems/ClientRuntime/Main", "FullCalendarReactive.model", "FullCalendarReactive.model$EventDescriptionRec"], function (exports, OutSystems, FullCalendarReactiveModel) {
var OS = OutSystems.Internal;
var EventDescriptionRecord = (function (_super) {
__extends(EventDescriptionRecord, _super);
function EventDescriptionRecord(defaults) {
_super.apply(this, arguments);
}
EventDescriptionRecord.attributesToDeclare = function () {
return [
this.attr("EventDescription", "eventDescriptionAttr", "EventDescription", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FullCalendarReactiveModel.EventDescriptionRec());
}, true, FullCalendarReactiveModel.EventDescriptionRec)
].concat(_super.attributesToDeclare.call(this));
};
EventDescriptionRecord.fromStructure = function (str) {
return new EventDescriptionRecord(new EventDescriptionRecord.RecordClass({
eventDescriptionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
EventDescriptionRecord._isAnonymousRecord = true;
EventDescriptionRecord.UniqueId = "234667c3-0054-b3c7-4132-7888daa9bd1a";
EventDescriptionRecord.init();
return EventDescriptionRecord;
})(OS.DataTypes.GenericRecord);
FullCalendarReactiveModel.EventDescriptionRecord = EventDescriptionRecord;

});
define("FullCalendarReactive.model$EventRec", ["exports", "OutSystems/ClientRuntime/Main", "FullCalendarReactive.model"], function (exports, OutSystems, FullCalendarReactiveModel) {
var OS = OutSystems.Internal;
var EventRec = (function (_super) {
__extends(EventRec, _super);
function EventRec(defaults) {
_super.apply(this, arguments);
}
EventRec.attributesToDeclare = function () {
return [
this.attr("id", "idAttr", "id", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("resourceId", "resourceIdAttr", "resourceId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("title", "titleAttr", "title", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("allDay", "allDayAttr", "allDay", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("start", "startAttr", "start", true, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("end", "endAttr", "end", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("url", "urlAttr", "url", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("className", "classNameAttr", "className", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("editable", "editableAttr", "editable", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("startEditable", "startEditableAttr", "startEditable", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("durationEditable", "durationEditableAttr", "durationEditable", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("rendering", "renderingAttr", "rendering", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("overlap", "overlapAttr", "overlap", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("constraint", "constraintAttr", "constraint", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("source", "sourceAttr", "source", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("color", "colorAttr", "color", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("backgroundColor", "backgroundColorAttr", "backgroundColor", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("borderColor", "borderColorAttr", "borderColor", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("textColor", "textColorAttr", "textColor", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("description", "descriptionAttr", "description", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("extra", "extraAttr", "extra", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("type", "typeAttr", "type", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
EventRec.init();
return EventRec;
})(OS.DataTypes.GenericRecord);
FullCalendarReactiveModel.EventRec = EventRec;

});
define("FullCalendarReactive.model$EventList", ["exports", "OutSystems/ClientRuntime/Main", "FullCalendarReactive.model", "FullCalendarReactive.model$EventRec"], function (exports, OutSystems, FullCalendarReactiveModel) {
var OS = OutSystems.Internal;
var EventList = (function (_super) {
__extends(EventList, _super);
function EventList(defaults) {
_super.apply(this, arguments);
}
EventList.itemType = FullCalendarReactiveModel.EventRec;
return EventList;
})(OS.DataTypes.GenericRecordList);
FullCalendarReactiveModel.EventList = EventList;

});
define("FullCalendarReactive.model$EventSourceRec", ["exports", "OutSystems/ClientRuntime/Main", "FullCalendarReactive.model", "FullCalendarReactive.model$EventList"], function (exports, OutSystems, FullCalendarReactiveModel) {
var OS = OutSystems.Internal;
var EventSourceRec = (function (_super) {
__extends(EventSourceRec, _super);
function EventSourceRec(defaults) {
_super.apply(this, arguments);
}
EventSourceRec.attributesToDeclare = function () {
return [
this.attr("id", "idAttr", "id", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("color", "colorAttr", "color", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("backgroundColor", "backgroundColorAttr", "backgroundColor", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("borderColor", "borderColorAttr", "borderColor", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("textColor", "textColorAttr", "textColor", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("className", "classNameAttr", "className", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("editable", "editableAttr", "editable", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("startEditable", "startEditableAttr", "startEditable", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("durationEditable", "durationEditableAttr", "durationEditable", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("resourceEditable", "resourceEditableAttr", "resourceEditable", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("rendering", "renderingAttr", "rendering", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("overlap", "overlapAttr", "overlap", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("constraint", "constraintAttr", "constraint", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("allDayDefault", "allDayDefaultAttr", "allDayDefault", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("url", "urlAttr", "url", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("googleCalendarId", "googleCalendarIdAttr", "googleCalendarId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Events", "eventsAttr", "events", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new FullCalendarReactiveModel.EventList());
}, true, FullCalendarReactiveModel.EventList)
].concat(_super.attributesToDeclare.call(this));
};
EventSourceRec.init();
return EventSourceRec;
})(OS.DataTypes.GenericRecord);
FullCalendarReactiveModel.EventSourceRec = EventSourceRec;

});
define("FullCalendarReactive.model$EventSourceList", ["exports", "OutSystems/ClientRuntime/Main", "FullCalendarReactive.model", "FullCalendarReactive.model$EventSourceRec"], function (exports, OutSystems, FullCalendarReactiveModel) {
var OS = OutSystems.Internal;
var EventSourceList = (function (_super) {
__extends(EventSourceList, _super);
function EventSourceList(defaults) {
_super.apply(this, arguments);
}
EventSourceList.itemType = FullCalendarReactiveModel.EventSourceRec;
return EventSourceList;
})(OS.DataTypes.GenericRecordList);
FullCalendarReactiveModel.EventSourceList = EventSourceList;

});
define("FullCalendarReactive.model$DraggedEventRec", ["exports", "OutSystems/ClientRuntime/Main", "FullCalendarReactive.model"], function (exports, OutSystems, FullCalendarReactiveModel) {
var OS = OutSystems.Internal;
var DraggedEventRec = (function (_super) {
__extends(DraggedEventRec, _super);
function DraggedEventRec(defaults) {
_super.apply(this, arguments);
}
DraggedEventRec.attributesToDeclare = function () {
return [
this.attr("id", "idAttr", "id", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("resourceId", "resourceIdAttr", "resourceId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("title", "titleAttr", "title", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("allDay", "allDayAttr", "allDay", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("start", "startAttr", "start", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("end", "endAttr", "end", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("url", "urlAttr", "url", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("className", "classNameAttr", "className", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("editable", "editableAttr", "editable", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("startEditable", "startEditableAttr", "startEditable", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("durationEditable", "durationEditableAttr", "durationEditable", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("rendering", "renderingAttr", "rendering", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("overlap", "overlapAttr", "overlap", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("constraint", "constraintAttr", "constraint", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("source", "sourceAttr", "source", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("color", "colorAttr", "color", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("backgroundColor", "backgroundColorAttr", "backgroundColor", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("borderColor", "borderColorAttr", "borderColor", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("textColor", "textColorAttr", "textColor", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("description", "descriptionAttr", "description", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Time", "timeAttr", "Time", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("duration", "durationAttr", "duration", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("stick", "stickAttr", "stick", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
DraggedEventRec.init();
return DraggedEventRec;
})(OS.DataTypes.GenericRecord);
FullCalendarReactiveModel.DraggedEventRec = DraggedEventRec;

});
define("FullCalendarReactive.model$DraggedEventRecord", ["exports", "OutSystems/ClientRuntime/Main", "FullCalendarReactive.model", "FullCalendarReactive.model$DraggedEventRec"], function (exports, OutSystems, FullCalendarReactiveModel) {
var OS = OutSystems.Internal;
var DraggedEventRecord = (function (_super) {
__extends(DraggedEventRecord, _super);
function DraggedEventRecord(defaults) {
_super.apply(this, arguments);
}
DraggedEventRecord.attributesToDeclare = function () {
return [
this.attr("DraggedEvent", "draggedEventAttr", "DraggedEvent", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FullCalendarReactiveModel.DraggedEventRec());
}, true, FullCalendarReactiveModel.DraggedEventRec)
].concat(_super.attributesToDeclare.call(this));
};
DraggedEventRecord.fromStructure = function (str) {
return new DraggedEventRecord(new DraggedEventRecord.RecordClass({
draggedEventAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DraggedEventRecord._isAnonymousRecord = true;
DraggedEventRecord.UniqueId = "ee7ad560-0aa4-887f-b3ba-0c36c9e92d98";
DraggedEventRecord.init();
return DraggedEventRecord;
})(OS.DataTypes.GenericRecord);
FullCalendarReactiveModel.DraggedEventRecord = DraggedEventRecord;

});
define("FullCalendarReactive.model$DraggedEventRecordList", ["exports", "OutSystems/ClientRuntime/Main", "FullCalendarReactive.model", "FullCalendarReactive.model$DraggedEventRecord"], function (exports, OutSystems, FullCalendarReactiveModel) {
var OS = OutSystems.Internal;
var DraggedEventRecordList = (function (_super) {
__extends(DraggedEventRecordList, _super);
function DraggedEventRecordList(defaults) {
_super.apply(this, arguments);
}
DraggedEventRecordList.itemType = FullCalendarReactiveModel.DraggedEventRecord;
return DraggedEventRecordList;
})(OS.DataTypes.GenericRecordList);
FullCalendarReactiveModel.DraggedEventRecordList = DraggedEventRecordList;

});
define("FullCalendarReactive.model$EventDescriptionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "FullCalendarReactive.model", "FullCalendarReactive.model$EventDescriptionRecord"], function (exports, OutSystems, FullCalendarReactiveModel) {
var OS = OutSystems.Internal;
var EventDescriptionRecordList = (function (_super) {
__extends(EventDescriptionRecordList, _super);
function EventDescriptionRecordList(defaults) {
_super.apply(this, arguments);
}
EventDescriptionRecordList.itemType = FullCalendarReactiveModel.EventDescriptionRecord;
return EventDescriptionRecordList;
})(OS.DataTypes.GenericRecordList);
FullCalendarReactiveModel.EventDescriptionRecordList = EventDescriptionRecordList;

});
define("FullCalendarReactive.model$EventSourceRecord", ["exports", "OutSystems/ClientRuntime/Main", "FullCalendarReactive.model", "FullCalendarReactive.model$EventSourceRec"], function (exports, OutSystems, FullCalendarReactiveModel) {
var OS = OutSystems.Internal;
var EventSourceRecord = (function (_super) {
__extends(EventSourceRecord, _super);
function EventSourceRecord(defaults) {
_super.apply(this, arguments);
}
EventSourceRecord.attributesToDeclare = function () {
return [
this.attr("EventSource", "eventSourceAttr", "EventSource", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FullCalendarReactiveModel.EventSourceRec());
}, true, FullCalendarReactiveModel.EventSourceRec)
].concat(_super.attributesToDeclare.call(this));
};
EventSourceRecord.fromStructure = function (str) {
return new EventSourceRecord(new EventSourceRecord.RecordClass({
eventSourceAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
EventSourceRecord._isAnonymousRecord = true;
EventSourceRecord.UniqueId = "9915d00f-8bb7-2a7c-8636-c92c5eed36cf";
EventSourceRecord.init();
return EventSourceRecord;
})(OS.DataTypes.GenericRecord);
FullCalendarReactiveModel.EventSourceRecord = EventSourceRecord;

});
define("FullCalendarReactive.model$EventSourceRecordList", ["exports", "OutSystems/ClientRuntime/Main", "FullCalendarReactive.model", "FullCalendarReactive.model$EventSourceRecord"], function (exports, OutSystems, FullCalendarReactiveModel) {
var OS = OutSystems.Internal;
var EventSourceRecordList = (function (_super) {
__extends(EventSourceRecordList, _super);
function EventSourceRecordList(defaults) {
_super.apply(this, arguments);
}
EventSourceRecordList.itemType = FullCalendarReactiveModel.EventSourceRecord;
return EventSourceRecordList;
})(OS.DataTypes.GenericRecordList);
FullCalendarReactiveModel.EventSourceRecordList = EventSourceRecordList;

});
define("FullCalendarReactive.model$DurationRec", ["exports", "OutSystems/ClientRuntime/Main", "FullCalendarReactive.model"], function (exports, OutSystems, FullCalendarReactiveModel) {
var OS = OutSystems.Internal;
var DurationRec = (function (_super) {
__extends(DurationRec, _super);
function DurationRec(defaults) {
_super.apply(this, arguments);
}
DurationRec.attributesToDeclare = function () {
return [
this.attr("Years", "yearsAttr", "years", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Months", "monthsAttr", "months", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Days", "daysAttr", "days", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Milliseconds", "millisecondsAttr", "milliseconds", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
DurationRec.init();
return DurationRec;
})(OS.DataTypes.GenericRecord);
FullCalendarReactiveModel.DurationRec = DurationRec;

});
define("FullCalendarReactive.model$", ["exports", "OutSystems/ClientRuntime/Main", "FullCalendarReactive.model"], function (exports, OutSystems, FullCalendarReactiveModel) {
var OS = OutSystems.Internal;
var TextList = (function (_super) {
__extends(TextList, _super);
function TextList(defaults) {
_super.apply(this, arguments);
}
TextList.itemType = OS.DataTypes.DataTypes.Text;
return TextList;
})(OS.DataTypes.GenericRecordList);
FullCalendarReactiveModel.TextList = TextList;

});
define("FullCalendarReactive.model$ResourceRec", ["exports", "OutSystems/ClientRuntime/Main", "FullCalendarReactive.model"], function (exports, OutSystems, FullCalendarReactiveModel) {
var OS = OutSystems.Internal;
var ResourceRec = (function (_super) {
__extends(ResourceRec, _super);
function ResourceRec(defaults) {
_super.apply(this, arguments);
}
ResourceRec.attributesToDeclare = function () {
return [
this.attr("id", "idAttr", "id", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("title", "titleAttr", "title", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("eventColor", "eventColorAttr", "eventColor", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("eventBackgroundCOlor", "eventBackgroundCOlorAttr", "eventBackgroundCOlor", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("eventBorderColor", "eventBorderColorAttr", "eventBorderColor", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("eventTextColor", "eventTextColorAttr", "eventTextColor", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("eventClassName", "eventClassNameAttr", "eventClassName", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
}, true, OS.DataTypes.TextList), 
this.attr("parentId", "parentIdAttr", "parentId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ResourceRec.init();
return ResourceRec;
})(OS.DataTypes.GenericRecord);
FullCalendarReactiveModel.ResourceRec = ResourceRec;

});
define("FullCalendarReactive.model$CallbackEventRec", ["exports", "OutSystems/ClientRuntime/Main", "FullCalendarReactive.model", "FullCalendarReactive.model$RangeRec", "FullCalendarReactive.model$DurationRec", "FullCalendarReactive.model$EventRec", "FullCalendarReactive.model$ResourceRec"], function (exports, OutSystems, FullCalendarReactiveModel) {
var OS = OutSystems.Internal;
var CallbackEventRec = (function (_super) {
__extends(CallbackEventRec, _super);
function CallbackEventRec(defaults) {
_super.apply(this, arguments);
}
CallbackEventRec.attributesToDeclare = function () {
return [
this.attr("range", "rangeAttr", "range", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FullCalendarReactiveModel.RangeRec());
}, true, FullCalendarReactiveModel.RangeRec), 
this.attr("delta", "deltaAttr", "delta", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FullCalendarReactiveModel.DurationRec());
}, true, FullCalendarReactiveModel.DurationRec), 
this.attr("event", "eventAttr", "event", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FullCalendarReactiveModel.EventRec());
}, true, FullCalendarReactiveModel.EventRec), 
this.attr("allDay", "allDayAttr", "allDay", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("resource", "resourceAttr", "resource", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FullCalendarReactiveModel.ResourceRec());
}, true, FullCalendarReactiveModel.ResourceRec), 
this.attr("currentStart", "currentStartAttr", "currentStart", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("currentEnd", "currentEndAttr", "currentEnd", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("activeStart", "activeStartAttr", "activeStart", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("activeEnd", "activeEndAttr", "activeEnd", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
CallbackEventRec.init();
return CallbackEventRec;
})(OS.DataTypes.GenericRecord);
FullCalendarReactiveModel.CallbackEventRec = CallbackEventRec;

});
define("FullCalendarReactive.model$CallbackEventList", ["exports", "OutSystems/ClientRuntime/Main", "FullCalendarReactive.model", "FullCalendarReactive.model$CallbackEventRec"], function (exports, OutSystems, FullCalendarReactiveModel) {
var OS = OutSystems.Internal;
var CallbackEventList = (function (_super) {
__extends(CallbackEventList, _super);
function CallbackEventList(defaults) {
_super.apply(this, arguments);
}
CallbackEventList.itemType = FullCalendarReactiveModel.CallbackEventRec;
return CallbackEventList;
})(OS.DataTypes.GenericRecordList);
FullCalendarReactiveModel.CallbackEventList = CallbackEventList;

});
define("FullCalendarReactive.model$RangeList", ["exports", "OutSystems/ClientRuntime/Main", "FullCalendarReactive.model", "FullCalendarReactive.model$RangeRec"], function (exports, OutSystems, FullCalendarReactiveModel) {
var OS = OutSystems.Internal;
var RangeList = (function (_super) {
__extends(RangeList, _super);
function RangeList(defaults) {
_super.apply(this, arguments);
}
RangeList.itemType = FullCalendarReactiveModel.RangeRec;
return RangeList;
})(OS.DataTypes.GenericRecordList);
FullCalendarReactiveModel.RangeList = RangeList;

});
define("FullCalendarReactive.model$ViewRecordList", ["exports", "OutSystems/ClientRuntime/Main", "FullCalendarReactive.model", "FullCalendarReactive.model$ViewRecord"], function (exports, OutSystems, FullCalendarReactiveModel) {
var OS = OutSystems.Internal;
var ViewRecordList = (function (_super) {
__extends(ViewRecordList, _super);
function ViewRecordList(defaults) {
_super.apply(this, arguments);
}
ViewRecordList.itemType = FullCalendarReactiveModel.ViewRecord;
return ViewRecordList;
})(OS.DataTypes.GenericRecordList);
FullCalendarReactiveModel.ViewRecordList = ViewRecordList;

});
define("FullCalendarReactive.model$ActionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "FullCalendarReactive.model", "FullCalendarReactive.model$ActionRecord"], function (exports, OutSystems, FullCalendarReactiveModel) {
var OS = OutSystems.Internal;
var ActionRecordList = (function (_super) {
__extends(ActionRecordList, _super);
function ActionRecordList(defaults) {
_super.apply(this, arguments);
}
ActionRecordList.itemType = FullCalendarReactiveModel.ActionRecord;
return ActionRecordList;
})(OS.DataTypes.GenericRecordList);
FullCalendarReactiveModel.ActionRecordList = ActionRecordList;

});
define("FullCalendarReactive.model$EventRecord", ["exports", "OutSystems/ClientRuntime/Main", "FullCalendarReactive.model", "FullCalendarReactive.model$EventRec"], function (exports, OutSystems, FullCalendarReactiveModel) {
var OS = OutSystems.Internal;
var EventRecord = (function (_super) {
__extends(EventRecord, _super);
function EventRecord(defaults) {
_super.apply(this, arguments);
}
EventRecord.attributesToDeclare = function () {
return [
this.attr("Event", "eventAttr", "Event", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FullCalendarReactiveModel.EventRec());
}, true, FullCalendarReactiveModel.EventRec)
].concat(_super.attributesToDeclare.call(this));
};
EventRecord.fromStructure = function (str) {
return new EventRecord(new EventRecord.RecordClass({
eventAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
EventRecord._isAnonymousRecord = true;
EventRecord.UniqueId = "40643c74-d700-6f27-beec-e247aa9fc5fc";
EventRecord.init();
return EventRecord;
})(OS.DataTypes.GenericRecord);
FullCalendarReactiveModel.EventRecord = EventRecord;

});
define("FullCalendarReactive.model$EventDescriptionList", ["exports", "OutSystems/ClientRuntime/Main", "FullCalendarReactive.model", "FullCalendarReactive.model$EventDescriptionRec"], function (exports, OutSystems, FullCalendarReactiveModel) {
var OS = OutSystems.Internal;
var EventDescriptionList = (function (_super) {
__extends(EventDescriptionList, _super);
function EventDescriptionList(defaults) {
_super.apply(this, arguments);
}
EventDescriptionList.itemType = FullCalendarReactiveModel.EventDescriptionRec;
return EventDescriptionList;
})(OS.DataTypes.GenericRecordList);
FullCalendarReactiveModel.EventDescriptionList = EventDescriptionList;

});
define("FullCalendarReactive.model$DraggedEventList", ["exports", "OutSystems/ClientRuntime/Main", "FullCalendarReactive.model", "FullCalendarReactive.model$DraggedEventRec"], function (exports, OutSystems, FullCalendarReactiveModel) {
var OS = OutSystems.Internal;
var DraggedEventList = (function (_super) {
__extends(DraggedEventList, _super);
function DraggedEventList(defaults) {
_super.apply(this, arguments);
}
DraggedEventList.itemType = FullCalendarReactiveModel.DraggedEventRec;
return DraggedEventList;
})(OS.DataTypes.GenericRecordList);
FullCalendarReactiveModel.DraggedEventList = DraggedEventList;

});
define("FullCalendarReactive.model$DurationRecord", ["exports", "OutSystems/ClientRuntime/Main", "FullCalendarReactive.model", "FullCalendarReactive.model$DurationRec"], function (exports, OutSystems, FullCalendarReactiveModel) {
var OS = OutSystems.Internal;
var DurationRecord = (function (_super) {
__extends(DurationRecord, _super);
function DurationRecord(defaults) {
_super.apply(this, arguments);
}
DurationRecord.attributesToDeclare = function () {
return [
this.attr("Duration", "durationAttr", "Duration", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FullCalendarReactiveModel.DurationRec());
}, true, FullCalendarReactiveModel.DurationRec)
].concat(_super.attributesToDeclare.call(this));
};
DurationRecord.fromStructure = function (str) {
return new DurationRecord(new DurationRecord.RecordClass({
durationAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DurationRecord._isAnonymousRecord = true;
DurationRecord.UniqueId = "cd2a7371-8736-29ca-16d7-c7dd0cd180d7";
DurationRecord.init();
return DurationRecord;
})(OS.DataTypes.GenericRecord);
FullCalendarReactiveModel.DurationRecord = DurationRecord;

});
define("FullCalendarReactive.model$DurationRecordList", ["exports", "OutSystems/ClientRuntime/Main", "FullCalendarReactive.model", "FullCalendarReactive.model$DurationRecord"], function (exports, OutSystems, FullCalendarReactiveModel) {
var OS = OutSystems.Internal;
var DurationRecordList = (function (_super) {
__extends(DurationRecordList, _super);
function DurationRecordList(defaults) {
_super.apply(this, arguments);
}
DurationRecordList.itemType = FullCalendarReactiveModel.DurationRecord;
return DurationRecordList;
})(OS.DataTypes.GenericRecordList);
FullCalendarReactiveModel.DurationRecordList = DurationRecordList;

});
define("FullCalendarReactive.model$ResourceList", ["exports", "OutSystems/ClientRuntime/Main", "FullCalendarReactive.model", "FullCalendarReactive.model$ResourceRec"], function (exports, OutSystems, FullCalendarReactiveModel) {
var OS = OutSystems.Internal;
var ResourceList = (function (_super) {
__extends(ResourceList, _super);
function ResourceList(defaults) {
_super.apply(this, arguments);
}
ResourceList.itemType = FullCalendarReactiveModel.ResourceRec;
return ResourceList;
})(OS.DataTypes.GenericRecordList);
FullCalendarReactiveModel.ResourceList = ResourceList;

});
define("FullCalendarReactive.model$ResourceSourceRec", ["exports", "OutSystems/ClientRuntime/Main", "FullCalendarReactive.model", "FullCalendarReactive.model$ResourceList"], function (exports, OutSystems, FullCalendarReactiveModel) {
var OS = OutSystems.Internal;
var ResourceSourceRec = (function (_super) {
__extends(ResourceSourceRec, _super);
function ResourceSourceRec(defaults) {
_super.apply(this, arguments);
}
ResourceSourceRec.attributesToDeclare = function () {
return [
this.attr("Resources", "resourcesAttr", "Resources", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new FullCalendarReactiveModel.ResourceList());
}, true, FullCalendarReactiveModel.ResourceList), 
this.attr("Url", "urlAttr", "Url", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ResourceSourceRec.init();
return ResourceSourceRec;
})(OS.DataTypes.GenericRecord);
FullCalendarReactiveModel.ResourceSourceRec = ResourceSourceRec;

});
define("FullCalendarReactive.model$ResourceSourceRecord", ["exports", "OutSystems/ClientRuntime/Main", "FullCalendarReactive.model", "FullCalendarReactive.model$ResourceSourceRec"], function (exports, OutSystems, FullCalendarReactiveModel) {
var OS = OutSystems.Internal;
var ResourceSourceRecord = (function (_super) {
__extends(ResourceSourceRecord, _super);
function ResourceSourceRecord(defaults) {
_super.apply(this, arguments);
}
ResourceSourceRecord.attributesToDeclare = function () {
return [
this.attr("ResourceSource", "resourceSourceAttr", "ResourceSource", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FullCalendarReactiveModel.ResourceSourceRec());
}, true, FullCalendarReactiveModel.ResourceSourceRec)
].concat(_super.attributesToDeclare.call(this));
};
ResourceSourceRecord.fromStructure = function (str) {
return new ResourceSourceRecord(new ResourceSourceRecord.RecordClass({
resourceSourceAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ResourceSourceRecord._isAnonymousRecord = true;
ResourceSourceRecord.UniqueId = "5bb69d1c-29b1-20b3-47ed-c0d48a5388df";
ResourceSourceRecord.init();
return ResourceSourceRecord;
})(OS.DataTypes.GenericRecord);
FullCalendarReactiveModel.ResourceSourceRecord = ResourceSourceRecord;

});
define("FullCalendarReactive.model$EventRecordList", ["exports", "OutSystems/ClientRuntime/Main", "FullCalendarReactive.model", "FullCalendarReactive.model$EventRecord"], function (exports, OutSystems, FullCalendarReactiveModel) {
var OS = OutSystems.Internal;
var EventRecordList = (function (_super) {
__extends(EventRecordList, _super);
function EventRecordList(defaults) {
_super.apply(this, arguments);
}
EventRecordList.itemType = FullCalendarReactiveModel.EventRecord;
return EventRecordList;
})(OS.DataTypes.GenericRecordList);
FullCalendarReactiveModel.EventRecordList = EventRecordList;

});
define("FullCalendarReactive.model$CallbacksRec", ["exports", "OutSystems/ClientRuntime/Main", "FullCalendarReactive.model"], function (exports, OutSystems, FullCalendarReactiveModel) {
var OS = OutSystems.Internal;
var CallbacksRec = (function (_super) {
__extends(CallbacksRec, _super);
function CallbacksRec(defaults) {
_super.apply(this, arguments);
}
CallbacksRec.attributesToDeclare = function () {
return [
this.attr("Select", "selectAttr", "Select", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true), 
this.attr("EventClick", "eventClickAttr", "EventClick", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true), 
this.attr("EventDrop", "eventDropAttr", "EventDrop", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true), 
this.attr("EventResize", "eventResizeAttr", "EventResize", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true), 
this.attr("DateClick", "dateClickAttr", "DateClick", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true), 
this.attr("EventMouseEnter", "eventMouseEnterAttr", "EventMouseEnter", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true), 
this.attr("EventMouseLeave", "eventMouseLeaveAttr", "EventMouseLeave", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true), 
this.attr("EventReceive", "eventReceiveAttr", "EventReceive", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true), 
this.attr("Loading", "loadingAttr", "Loading", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true), 
this.attr("datesRender", "datesRenderAttr", "datesRender", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
CallbacksRec.init();
return CallbacksRec;
})(OS.DataTypes.GenericRecord);
FullCalendarReactiveModel.CallbacksRec = CallbacksRec;

});
define("FullCalendarReactive.model$CallbacksRecord", ["exports", "OutSystems/ClientRuntime/Main", "FullCalendarReactive.model", "FullCalendarReactive.model$CallbacksRec"], function (exports, OutSystems, FullCalendarReactiveModel) {
var OS = OutSystems.Internal;
var CallbacksRecord = (function (_super) {
__extends(CallbacksRecord, _super);
function CallbacksRecord(defaults) {
_super.apply(this, arguments);
}
CallbacksRecord.attributesToDeclare = function () {
return [
this.attr("Callbacks", "callbacksAttr", "Callbacks", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FullCalendarReactiveModel.CallbacksRec());
}, true, FullCalendarReactiveModel.CallbacksRec)
].concat(_super.attributesToDeclare.call(this));
};
CallbacksRecord.fromStructure = function (str) {
return new CallbacksRecord(new CallbacksRecord.RecordClass({
callbacksAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CallbacksRecord._isAnonymousRecord = true;
CallbacksRecord.UniqueId = "770c33a2-9787-a079-ca18-f2c69a1986aa";
CallbacksRecord.init();
return CallbacksRecord;
})(OS.DataTypes.GenericRecord);
FullCalendarReactiveModel.CallbacksRecord = CallbacksRecord;

});
define("FullCalendarReactive.model$ResourceRecord", ["exports", "OutSystems/ClientRuntime/Main", "FullCalendarReactive.model", "FullCalendarReactive.model$ResourceRec"], function (exports, OutSystems, FullCalendarReactiveModel) {
var OS = OutSystems.Internal;
var ResourceRecord = (function (_super) {
__extends(ResourceRecord, _super);
function ResourceRecord(defaults) {
_super.apply(this, arguments);
}
ResourceRecord.attributesToDeclare = function () {
return [
this.attr("Resource", "resourceAttr", "Resource", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FullCalendarReactiveModel.ResourceRec());
}, true, FullCalendarReactiveModel.ResourceRec)
].concat(_super.attributesToDeclare.call(this));
};
ResourceRecord.fromStructure = function (str) {
return new ResourceRecord(new ResourceRecord.RecordClass({
resourceAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ResourceRecord._isAnonymousRecord = true;
ResourceRecord.UniqueId = "7810c21d-d757-4dc9-3bb0-9743aa9a452f";
ResourceRecord.init();
return ResourceRecord;
})(OS.DataTypes.GenericRecord);
FullCalendarReactiveModel.ResourceRecord = ResourceRecord;

});
define("FullCalendarReactive.model$CallbacksList", ["exports", "OutSystems/ClientRuntime/Main", "FullCalendarReactive.model", "FullCalendarReactive.model$CallbacksRec"], function (exports, OutSystems, FullCalendarReactiveModel) {
var OS = OutSystems.Internal;
var CallbacksList = (function (_super) {
__extends(CallbacksList, _super);
function CallbacksList(defaults) {
_super.apply(this, arguments);
}
CallbacksList.itemType = FullCalendarReactiveModel.CallbacksRec;
return CallbacksList;
})(OS.DataTypes.GenericRecordList);
FullCalendarReactiveModel.CallbacksList = CallbacksList;

});
define("FullCalendarReactive.model$RenderingRecord", ["exports", "OutSystems/ClientRuntime/Main", "FullCalendarReactive.model", "FullCalendarReactive.model$RenderingRec"], function (exports, OutSystems, FullCalendarReactiveModel) {
var OS = OutSystems.Internal;
var RenderingRecord = (function (_super) {
__extends(RenderingRecord, _super);
function RenderingRecord(defaults) {
_super.apply(this, arguments);
}
RenderingRecord.attributesToDeclare = function () {
return [
this.attr("Rendering", "renderingAttr", "Rendering", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FullCalendarReactiveModel.RenderingRec());
}, true, FullCalendarReactiveModel.RenderingRec)
].concat(_super.attributesToDeclare.call(this));
};
RenderingRecord.fromStructure = function (str) {
return new RenderingRecord(new RenderingRecord.RecordClass({
renderingAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
RenderingRecord._isAnonymousRecord = true;
RenderingRecord.UniqueId = "8b6356f5-7720-22ee-25cd-0757dfbcfc04";
RenderingRecord.init();
return RenderingRecord;
})(OS.DataTypes.GenericRecord);
FullCalendarReactiveModel.RenderingRecord = RenderingRecord;

});
define("FullCalendarReactive.model$RenderingRecordList", ["exports", "OutSystems/ClientRuntime/Main", "FullCalendarReactive.model", "FullCalendarReactive.model$RenderingRecord"], function (exports, OutSystems, FullCalendarReactiveModel) {
var OS = OutSystems.Internal;
var RenderingRecordList = (function (_super) {
__extends(RenderingRecordList, _super);
function RenderingRecordList(defaults) {
_super.apply(this, arguments);
}
RenderingRecordList.itemType = FullCalendarReactiveModel.RenderingRecord;
return RenderingRecordList;
})(OS.DataTypes.GenericRecordList);
FullCalendarReactiveModel.RenderingRecordList = RenderingRecordList;

});
define("FullCalendarReactive.model$RangeRecord", ["exports", "OutSystems/ClientRuntime/Main", "FullCalendarReactive.model", "FullCalendarReactive.model$RangeRec"], function (exports, OutSystems, FullCalendarReactiveModel) {
var OS = OutSystems.Internal;
var RangeRecord = (function (_super) {
__extends(RangeRecord, _super);
function RangeRecord(defaults) {
_super.apply(this, arguments);
}
RangeRecord.attributesToDeclare = function () {
return [
this.attr("Range", "rangeAttr", "Range", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FullCalendarReactiveModel.RangeRec());
}, true, FullCalendarReactiveModel.RangeRec)
].concat(_super.attributesToDeclare.call(this));
};
RangeRecord.fromStructure = function (str) {
return new RangeRecord(new RangeRecord.RecordClass({
rangeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
RangeRecord._isAnonymousRecord = true;
RangeRecord.UniqueId = "955c9088-bb27-57cb-e1ea-0efd52bf1f7b";
RangeRecord.init();
return RangeRecord;
})(OS.DataTypes.GenericRecord);
FullCalendarReactiveModel.RangeRecord = RangeRecord;

});
define("FullCalendarReactive.model$RangeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "FullCalendarReactive.model", "FullCalendarReactive.model$RangeRecord"], function (exports, OutSystems, FullCalendarReactiveModel) {
var OS = OutSystems.Internal;
var RangeRecordList = (function (_super) {
__extends(RangeRecordList, _super);
function RangeRecordList(defaults) {
_super.apply(this, arguments);
}
RangeRecordList.itemType = FullCalendarReactiveModel.RangeRecord;
return RangeRecordList;
})(OS.DataTypes.GenericRecordList);
FullCalendarReactiveModel.RangeRecordList = RangeRecordList;

});
define("FullCalendarReactive.model$ResourceSourceList", ["exports", "OutSystems/ClientRuntime/Main", "FullCalendarReactive.model", "FullCalendarReactive.model$ResourceSourceRec"], function (exports, OutSystems, FullCalendarReactiveModel) {
var OS = OutSystems.Internal;
var ResourceSourceList = (function (_super) {
__extends(ResourceSourceList, _super);
function ResourceSourceList(defaults) {
_super.apply(this, arguments);
}
ResourceSourceList.itemType = FullCalendarReactiveModel.ResourceSourceRec;
return ResourceSourceList;
})(OS.DataTypes.GenericRecordList);
FullCalendarReactiveModel.ResourceSourceList = ResourceSourceList;

});
define("FullCalendarReactive.model$ResourceSourceRecordList", ["exports", "OutSystems/ClientRuntime/Main", "FullCalendarReactive.model", "FullCalendarReactive.model$ResourceSourceRecord"], function (exports, OutSystems, FullCalendarReactiveModel) {
var OS = OutSystems.Internal;
var ResourceSourceRecordList = (function (_super) {
__extends(ResourceSourceRecordList, _super);
function ResourceSourceRecordList(defaults) {
_super.apply(this, arguments);
}
ResourceSourceRecordList.itemType = FullCalendarReactiveModel.ResourceSourceRecord;
return ResourceSourceRecordList;
})(OS.DataTypes.GenericRecordList);
FullCalendarReactiveModel.ResourceSourceRecordList = ResourceSourceRecordList;

});
define("FullCalendarReactive.model$RenderingList", ["exports", "OutSystems/ClientRuntime/Main", "FullCalendarReactive.model", "FullCalendarReactive.model$RenderingRec"], function (exports, OutSystems, FullCalendarReactiveModel) {
var OS = OutSystems.Internal;
var RenderingList = (function (_super) {
__extends(RenderingList, _super);
function RenderingList(defaults) {
_super.apply(this, arguments);
}
RenderingList.itemType = FullCalendarReactiveModel.RenderingRec;
return RenderingList;
})(OS.DataTypes.GenericRecordList);
FullCalendarReactiveModel.RenderingList = RenderingList;

});
define("FullCalendarReactive.model$ResourceRecordList", ["exports", "OutSystems/ClientRuntime/Main", "FullCalendarReactive.model", "FullCalendarReactive.model$ResourceRecord"], function (exports, OutSystems, FullCalendarReactiveModel) {
var OS = OutSystems.Internal;
var ResourceRecordList = (function (_super) {
__extends(ResourceRecordList, _super);
function ResourceRecordList(defaults) {
_super.apply(this, arguments);
}
ResourceRecordList.itemType = FullCalendarReactiveModel.ResourceRecord;
return ResourceRecordList;
})(OS.DataTypes.GenericRecordList);
FullCalendarReactiveModel.ResourceRecordList = ResourceRecordList;

});
define("FullCalendarReactive.model$DurationList", ["exports", "OutSystems/ClientRuntime/Main", "FullCalendarReactive.model", "FullCalendarReactive.model$DurationRec"], function (exports, OutSystems, FullCalendarReactiveModel) {
var OS = OutSystems.Internal;
var DurationList = (function (_super) {
__extends(DurationList, _super);
function DurationList(defaults) {
_super.apply(this, arguments);
}
DurationList.itemType = FullCalendarReactiveModel.DurationRec;
return DurationList;
})(OS.DataTypes.GenericRecordList);
FullCalendarReactiveModel.DurationList = DurationList;

});
define("FullCalendarReactive.model$CallbackEventRecord", ["exports", "OutSystems/ClientRuntime/Main", "FullCalendarReactive.model", "FullCalendarReactive.model$CallbackEventRec"], function (exports, OutSystems, FullCalendarReactiveModel) {
var OS = OutSystems.Internal;
var CallbackEventRecord = (function (_super) {
__extends(CallbackEventRecord, _super);
function CallbackEventRecord(defaults) {
_super.apply(this, arguments);
}
CallbackEventRecord.attributesToDeclare = function () {
return [
this.attr("CallbackEvent", "callbackEventAttr", "CallbackEvent", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FullCalendarReactiveModel.CallbackEventRec());
}, true, FullCalendarReactiveModel.CallbackEventRec)
].concat(_super.attributesToDeclare.call(this));
};
CallbackEventRecord.fromStructure = function (str) {
return new CallbackEventRecord(new CallbackEventRecord.RecordClass({
callbackEventAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CallbackEventRecord._isAnonymousRecord = true;
CallbackEventRecord.UniqueId = "befe19c7-ef9b-e630-4907-5647d5c91d06";
CallbackEventRecord.init();
return CallbackEventRecord;
})(OS.DataTypes.GenericRecord);
FullCalendarReactiveModel.CallbackEventRecord = CallbackEventRecord;

});
define("FullCalendarReactive.model$DurationObjectList", ["exports", "OutSystems/ClientRuntime/Main", "FullCalendarReactive.model", "FullCalendarReactive.model$DurationObjectRec"], function (exports, OutSystems, FullCalendarReactiveModel) {
var OS = OutSystems.Internal;
var DurationObjectList = (function (_super) {
__extends(DurationObjectList, _super);
function DurationObjectList(defaults) {
_super.apply(this, arguments);
}
DurationObjectList.itemType = FullCalendarReactiveModel.DurationObjectRec;
return DurationObjectList;
})(OS.DataTypes.GenericRecordList);
FullCalendarReactiveModel.DurationObjectList = DurationObjectList;

});
define("FullCalendarReactive.model$ActionList", ["exports", "OutSystems/ClientRuntime/Main", "FullCalendarReactive.model", "FullCalendarReactive.model$ActionRec"], function (exports, OutSystems, FullCalendarReactiveModel) {
var OS = OutSystems.Internal;
var ActionList = (function (_super) {
__extends(ActionList, _super);
function ActionList(defaults) {
_super.apply(this, arguments);
}
ActionList.itemType = FullCalendarReactiveModel.ActionRec;
return ActionList;
})(OS.DataTypes.GenericRecordList);
FullCalendarReactiveModel.ActionList = ActionList;

});
define("FullCalendarReactive.model$CallbacksRecordList", ["exports", "OutSystems/ClientRuntime/Main", "FullCalendarReactive.model", "FullCalendarReactive.model$CallbacksRecord"], function (exports, OutSystems, FullCalendarReactiveModel) {
var OS = OutSystems.Internal;
var CallbacksRecordList = (function (_super) {
__extends(CallbacksRecordList, _super);
function CallbacksRecordList(defaults) {
_super.apply(this, arguments);
}
CallbacksRecordList.itemType = FullCalendarReactiveModel.CallbacksRecord;
return CallbacksRecordList;
})(OS.DataTypes.GenericRecordList);
FullCalendarReactiveModel.CallbacksRecordList = CallbacksRecordList;

});
define("FullCalendarReactive.model$CallbackEventRecordList", ["exports", "OutSystems/ClientRuntime/Main", "FullCalendarReactive.model", "FullCalendarReactive.model$CallbackEventRecord"], function (exports, OutSystems, FullCalendarReactiveModel) {
var OS = OutSystems.Internal;
var CallbackEventRecordList = (function (_super) {
__extends(CallbackEventRecordList, _super);
function CallbackEventRecordList(defaults) {
_super.apply(this, arguments);
}
CallbackEventRecordList.itemType = FullCalendarReactiveModel.CallbackEventRecord;
return CallbackEventRecordList;
})(OS.DataTypes.GenericRecordList);
FullCalendarReactiveModel.CallbackEventRecordList = CallbackEventRecordList;

});
define("FullCalendarReactive.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var FullCalendarReactiveModel = exports;
Object.defineProperty(FullCalendarReactiveModel, "module", {
get: function () {
return OS.ApplicationInfo.getModules()["c8cc57fd-5df6-43cd-bbc2-3fd3d3eed17d"];
}
});

FullCalendarReactiveModel.staticEntities = {};
FullCalendarReactiveModel.staticEntities.rendering = {};
var getRenderingRecord = function (record) {
return FullCalendarReactiveModel.module.staticEntities["552fbdef-0472-46f9-aa34-32bdc02e21f5"][record];
};
Object.defineProperty(FullCalendarReactiveModel.staticEntities.rendering, "background", {
get: function () {
return getRenderingRecord("2af329f8-7e70-4599-899e-c8319884bcd7");
}
});

Object.defineProperty(FullCalendarReactiveModel.staticEntities.rendering, "inverseBackground", {
get: function () {
return getRenderingRecord("fc57f5d5-95a0-4cfe-a73c-08afab4872a7");
}
});

FullCalendarReactiveModel.staticEntities.action = {};
var getActionRecord = function (record) {
return FullCalendarReactiveModel.module.staticEntities["92405faf-93ff-4cb2-8cdb-ae757b6f5aa4"][record];
};
Object.defineProperty(FullCalendarReactiveModel.staticEntities.action, "eventReceive", {
get: function () {
return getActionRecord("0de59c74-d9e4-40b6-99ce-b20d84a583bf");
}
});

Object.defineProperty(FullCalendarReactiveModel.staticEntities.action, "eventResize", {
get: function () {
return getActionRecord("24f8e3db-5465-475a-b636-1d805ae94513");
}
});

Object.defineProperty(FullCalendarReactiveModel.staticEntities.action, "loading", {
get: function () {
return getActionRecord("2850e6bb-6910-4196-87c2-1fd063bebc06");
}
});

Object.defineProperty(FullCalendarReactiveModel.staticEntities.action, "eventMouseEnter", {
get: function () {
return getActionRecord("38d4b0b3-7074-4487-9015-cc89967cde0f");
}
});

Object.defineProperty(FullCalendarReactiveModel.staticEntities.action, "eventDrop", {
get: function () {
return getActionRecord("3b0ecd76-4245-44b7-965d-2224c0842aa6");
}
});

Object.defineProperty(FullCalendarReactiveModel.staticEntities.action, "eventMouseLeave", {
get: function () {
return getActionRecord("6ed3d418-69e7-425d-aa7d-bcd28609667b");
}
});

Object.defineProperty(FullCalendarReactiveModel.staticEntities.action, "eventClick", {
get: function () {
return getActionRecord("7da93388-11d7-46e5-99c5-3dbaa25cafe8");
}
});

Object.defineProperty(FullCalendarReactiveModel.staticEntities.action, "select", {
get: function () {
return getActionRecord("9edfa72d-e16e-4171-9073-73e4e76e665a");
}
});

Object.defineProperty(FullCalendarReactiveModel.staticEntities.action, "dateClick", {
get: function () {
return getActionRecord("ea643ef8-c980-4ff3-bdc5-0d83546c69bf");
}
});

FullCalendarReactiveModel.staticEntities.eventDescription = {};
var getEventDescriptionRecord = function (record) {
return FullCalendarReactiveModel.module.staticEntities["b1baebc2-a64b-4f3a-a318-838a8d4d74cd"][record];
};
Object.defineProperty(FullCalendarReactiveModel.staticEntities.eventDescription, "alwaysShow", {
get: function () {
return getEventDescriptionRecord("2775272f-473d-4ed7-af24-8d85fff9c9a5");
}
});

Object.defineProperty(FullCalendarReactiveModel.staticEntities.eventDescription, "neverShow", {
get: function () {
return getEventDescriptionRecord("7acd1fff-d8d0-415b-8754-c63cc1c3be3c");
}
});

Object.defineProperty(FullCalendarReactiveModel.staticEntities.eventDescription, "showWhenAvailable", {
get: function () {
return getEventDescriptionRecord("b06a74b1-6ebc-43d1-b1ae-0e9037d14468");
}
});

});
