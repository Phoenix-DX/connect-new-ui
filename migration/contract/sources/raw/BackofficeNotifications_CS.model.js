define("BackofficeNotifications_CS.model$BackofficeNotificationSubTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "BackofficeNotifications_CS.model"], function (exports, OutSystems, BackofficeNotifications_CSModel) {
var OS = OutSystems.Internal;
var BackofficeNotificationSubTypeRec = (function (_super) {
__extends(BackofficeNotificationSubTypeRec, _super);
function BackofficeNotificationSubTypeRec(defaults) {
_super.apply(this, arguments);
}
BackofficeNotificationSubTypeRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("BackOffNotificationType2ID", "backOffNotificationType2IDAttr", "BackOffNotificationType2ID", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("IconCode", "iconCodeAttr", "IconCode", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IconColor", "iconColorAttr", "IconColor", false, false, OS.DataTypes.DataTypes.Text, function () {
return "#FFFFFF";
}, true), 
this.attr("IconBackground", "iconBackgroundAttr", "IconBackground", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DestinationOnCLick", "destinationOnCLickAttr", "DestinationOnCLick", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
BackofficeNotificationSubTypeRec.init();
return BackofficeNotificationSubTypeRec;
})(OS.DataTypes.GenericRecord);
BackofficeNotifications_CSModel.BackofficeNotificationSubTypeRec = BackofficeNotificationSubTypeRec;

});
define("BackofficeNotifications_CS.model$BONotificationNavigationInputParametersRec", ["exports", "OutSystems/ClientRuntime/Main", "BackofficeNotifications_CS.model"], function (exports, OutSystems, BackofficeNotifications_CSModel) {
var OS = OutSystems.Internal;
var BONotificationNavigationInputParametersRec = (function (_super) {
__extends(BONotificationNavigationInputParametersRec, _super);
function BONotificationNavigationInputParametersRec(defaults) {
_super.apply(this, arguments);
}
BONotificationNavigationInputParametersRec.attributesToDeclare = function () {
return [
this.attr("ChangeRequestId", "changeRequestIdAttr", "ChangeRequestId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MemberId", "memberIdAttr", "MemberId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CBUserId", "cBUserIdAttr", "CBUserId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SubscriptionId", "subscriptionIdAttr", "SubscriptionId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
BONotificationNavigationInputParametersRec.init();
return BONotificationNavigationInputParametersRec;
})(OS.DataTypes.GenericRecord);
BackofficeNotifications_CSModel.BONotificationNavigationInputParametersRec = BONotificationNavigationInputParametersRec;

});
define("BackofficeNotifications_CS.model$BackofficeNotificationRec", ["exports", "OutSystems/ClientRuntime/Main", "BackofficeNotifications_CS.model"], function (exports, OutSystems, BackofficeNotifications_CSModel) {
var OS = OutSystems.Internal;
var BackofficeNotificationRec = (function (_super) {
__extends(BackofficeNotificationRec, _super);
function BackofficeNotificationRec(defaults) {
_super.apply(this, arguments);
}
BackofficeNotificationRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Body", "bodyAttr", "Body", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsActive", "isActiveAttr", "IsActive", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("BackOffNotificationSubTypeId", "backOffNotificationSubTypeIdAttr", "BackOffNotificationSubTypeId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("NavigationData", "navigationDataAttr", "NavigationData", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CreatedOn", "createdOnAttr", "CreatedOn", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("CreatedBy", "createdByAttr", "CreatedBy", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("UpdatedOn", "updatedOnAttr", "UpdatedOn", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("UpdatedBy", "updatedByAttr", "UpdatedBy", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
BackofficeNotificationRec.init();
return BackofficeNotificationRec;
})(OS.DataTypes.GenericRecord);
BackofficeNotifications_CSModel.BackofficeNotificationRec = BackofficeNotificationRec;

});
define("BackofficeNotifications_CS.model$BackOfficeNotificationTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "BackofficeNotifications_CS.model"], function (exports, OutSystems, BackofficeNotifications_CSModel) {
var OS = OutSystems.Internal;
var BackOfficeNotificationTypeRec = (function (_super) {
__extends(BackOfficeNotificationTypeRec, _super);
function BackOfficeNotificationTypeRec(defaults) {
_super.apply(this, arguments);
}
BackOfficeNotificationTypeRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
BackOfficeNotificationTypeRec.init();
return BackOfficeNotificationTypeRec;
})(OS.DataTypes.GenericRecord);
BackofficeNotifications_CSModel.BackOfficeNotificationTypeRec = BackOfficeNotificationTypeRec;

});
define("BackofficeNotifications_CS.model$UserBackofficeNotificationRec", ["exports", "OutSystems/ClientRuntime/Main", "BackofficeNotifications_CS.model"], function (exports, OutSystems, BackofficeNotifications_CSModel) {
var OS = OutSystems.Internal;
var UserBackofficeNotificationRec = (function (_super) {
__extends(UserBackofficeNotificationRec, _super);
function UserBackofficeNotificationRec(defaults) {
_super.apply(this, arguments);
}
UserBackofficeNotificationRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("UserId", "userIdAttr", "UserId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("BackofficeNotificationId", "backofficeNotificationIdAttr", "BackofficeNotificationId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("IsRead", "isReadAttr", "IsRead", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("IsCleared", "isClearedAttr", "IsCleared", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("CreatedOn", "createdOnAttr", "CreatedOn", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("CreatedBy", "createdByAttr", "CreatedBy", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("UpdatedOn", "updatedOnAttr", "UpdatedOn", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("UpdatedBy", "updatedByAttr", "UpdatedBy", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UserBackofficeNotificationRec.init();
return UserBackofficeNotificationRec;
})(OS.DataTypes.GenericRecord);
BackofficeNotifications_CSModel.UserBackofficeNotificationRec = UserBackofficeNotificationRec;

});
define("BackofficeNotifications_CS.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var BackofficeNotifications_CSModel = exports;
});
