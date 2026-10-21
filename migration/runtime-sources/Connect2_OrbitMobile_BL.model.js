define("Connect2_OrbitMobile_BL.model$BedSizeRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_BL.model"], function (exports, OutSystems, Connect2_OrbitMobile_BLModel) {
var OS = OutSystems.Internal;
var BedSizeRec = (function (_super) {
__extends(BedSizeRec, _super);
function BedSizeRec(defaults) {
_super.apply(this, arguments);
}
BedSizeRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("JSON_Name", "jSON_NameAttr", "JSON_Name", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
BedSizeRec.init();
return BedSizeRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_BLModel.BedSizeRec = BedSizeRec;

});
define("Connect2_OrbitMobile_BL.model$HouseFloorRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_BL.model"], function (exports, OutSystems, Connect2_OrbitMobile_BLModel) {
var OS = OutSystems.Internal;
var HouseFloorRec = (function (_super) {
__extends(HouseFloorRec, _super);
function HouseFloorRec(defaults) {
_super.apply(this, arguments);
}
HouseFloorRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("JSON_Name", "jSON_NameAttr", "JSON_Name", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
HouseFloorRec.init();
return HouseFloorRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_BLModel.HouseFloorRec = HouseFloorRec;

});
define("Connect2_OrbitMobile_BL.model$OrbitMilestoneTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_BL.model"], function (exports, OutSystems, Connect2_OrbitMobile_BLModel) {
var OS = OutSystems.Internal;
var OrbitMilestoneTypeRec = (function (_super) {
__extends(OrbitMilestoneTypeRec, _super);
function OrbitMilestoneTypeRec(defaults) {
_super.apply(this, arguments);
}
OrbitMilestoneTypeRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Order", "orderAttr", "Order", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Type", "typeAttr", "Type", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Name", "nameAttr", "Name", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MainColorVar", "mainColorVarAttr", "MainColorVar", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MainIcon", "mainIconAttr", "MainIcon", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CanHost", "canHostAttr", "CanHost", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("IsTransportMilestone", "isTransportMilestoneAttr", "IsTransportMilestone", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("IconTransportDeparture", "iconTransportDepartureAttr", "IconTransportDeparture", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IconTransportArrival", "iconTransportArrivalAttr", "IconTransportArrival", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("TransportHeaderClass", "transportHeaderClassAttr", "TransportHeaderClass", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("TravelInfoHeader", "travelInfoHeaderAttr", "TravelInfoHeader", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("TravelInfoHeaderIcon", "travelInfoHeaderIconAttr", "TravelInfoHeaderIcon", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
OrbitMilestoneTypeRec.init();
return OrbitMilestoneTypeRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_BLModel.OrbitMilestoneTypeRec = OrbitMilestoneTypeRec;

});
define("Connect2_OrbitMobile_BL.model$MilestoneTransport_ScreenRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_IS.model$MilestoneTransportRec", "Connect2_OrbitMobile_BL.referencesHealth", "Connect2_OrbitMobile_BL.referencesHealth$Connect2_OrbitMobile_IS", "Connect2_OrbitMobile_BL.model$OrbitMilestoneTypeRec"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel, Connect2_OrbitMobile_BLModel) {
var OS = OutSystems.Internal;
var MilestoneTransport_ScreenRec = (function (_super) {
__extends(MilestoneTransport_ScreenRec, _super);
function MilestoneTransport_ScreenRec(defaults) {
_super.apply(this, arguments);
}
MilestoneTransport_ScreenRec.attributesToDeclare = function () {
return [
this.attr("MilestoneTransport", "milestoneTransportAttr", "MilestoneTransport", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.MilestoneTransportRec());
}, true, Connect2_OrbitMobile_ISModel.MilestoneTransportRec), 
this.attr("OrbitMilestoneType", "orbitMilestoneTypeAttr", "OrbitMilestoneType", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_BLModel.OrbitMilestoneTypeRec());
}, true, Connect2_OrbitMobile_BLModel.OrbitMilestoneTypeRec)
].concat(_super.attributesToDeclare.call(this));
};
MilestoneTransport_ScreenRec.init();
return MilestoneTransport_ScreenRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_BLModel.MilestoneTransport_ScreenRec = MilestoneTransport_ScreenRec;

});
define("Connect2_OrbitMobile_BL.model$GetAdminOrbitMilestone_ScreenRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_IS.model$AdminMilestoneRec", "Connect2_OrbitMobile_BL.referencesHealth", "Connect2_OrbitMobile_BL.referencesHealth$Connect2_OrbitMobile_IS", "Connect2_OrbitMobile_BL.model$OrbitMilestoneTypeRec"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel, Connect2_OrbitMobile_BLModel) {
var OS = OutSystems.Internal;
var GetAdminOrbitMilestone_ScreenRec = (function (_super) {
__extends(GetAdminOrbitMilestone_ScreenRec, _super);
function GetAdminOrbitMilestone_ScreenRec(defaults) {
_super.apply(this, arguments);
}
GetAdminOrbitMilestone_ScreenRec.attributesToDeclare = function () {
return [
this.attr("OrbitAdminMilestone", "orbitAdminMilestoneAttr", "OrbitAdminMilestone", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.AdminMilestoneRec());
}, true, Connect2_OrbitMobile_ISModel.AdminMilestoneRec), 
this.attr("OrbitMilestoneType", "orbitMilestoneTypeAttr", "OrbitMilestoneType", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_BLModel.OrbitMilestoneTypeRec());
}, true, Connect2_OrbitMobile_BLModel.OrbitMilestoneTypeRec)
].concat(_super.attributesToDeclare.call(this));
};
GetAdminOrbitMilestone_ScreenRec.init();
return GetAdminOrbitMilestone_ScreenRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_BLModel.GetAdminOrbitMilestone_ScreenRec = GetAdminOrbitMilestone_ScreenRec;

});
define("Connect2_OrbitMobile_BL.model$MemberInfoRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_BL.model"], function (exports, OutSystems, Connect2_OrbitMobile_BLModel) {
var OS = OutSystems.Internal;
var MemberInfoRec = (function (_super) {
__extends(MemberInfoRec, _super);
function MemberInfoRec(defaults) {
_super.apply(this, arguments);
}
MemberInfoRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("FirstName", "firstNameAttr", "FirstName", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LastName", "lastNameAttr", "LastName", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Locality", "localityAttr", "Locality", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Country", "countryAttr", "Country", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
MemberInfoRec.init();
return MemberInfoRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_BLModel.MemberInfoRec = MemberInfoRec;

});
define("Connect2_OrbitMobile_BL.model$MemberInformationList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_IS.model$MemberInformationRec", "Connect2_OrbitMobile_BL.referencesHealth", "Connect2_OrbitMobile_BL.referencesHealth$Connect2_OrbitMobile_IS"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel, Connect2_OrbitMobile_BLModel) {
var OS = OutSystems.Internal;
var MemberInformationList = (function (_super) {
__extends(MemberInformationList, _super);
function MemberInformationList(defaults) {
_super.apply(this, arguments);
}
MemberInformationList.itemType = Connect2_OrbitMobile_ISModel.MemberInformationRec;
return MemberInformationList;
})(OS.DataTypes.GenericRecordList);
Connect2_OrbitMobile_BLModel.MemberInformationList = MemberInformationList;

});
define("Connect2_OrbitMobile_BL.model$HelperItemList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_IS.model$HelperItemRec", "Connect2_OrbitMobile_BL.referencesHealth", "Connect2_OrbitMobile_BL.referencesHealth$Connect2_OrbitMobile_IS"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel, Connect2_OrbitMobile_BLModel) {
var OS = OutSystems.Internal;
var HelperItemList = (function (_super) {
__extends(HelperItemList, _super);
function HelperItemList(defaults) {
_super.apply(this, arguments);
}
HelperItemList.itemType = Connect2_OrbitMobile_ISModel.HelperItemRec;
return HelperItemList;
})(OS.DataTypes.GenericRecordList);
Connect2_OrbitMobile_BLModel.HelperItemList = HelperItemList;

});
define("Connect2_OrbitMobile_BL.model$SpecialNeedsList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_IS.model$SpecialNeedsRec", "Connect2_OrbitMobile_BL.referencesHealth", "Connect2_OrbitMobile_BL.referencesHealth$Connect2_OrbitMobile_IS"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel, Connect2_OrbitMobile_BLModel) {
var OS = OutSystems.Internal;
var SpecialNeedsList = (function (_super) {
__extends(SpecialNeedsList, _super);
function SpecialNeedsList(defaults) {
_super.apply(this, arguments);
}
SpecialNeedsList.itemType = Connect2_OrbitMobile_ISModel.SpecialNeedsRec;
return SpecialNeedsList;
})(OS.DataTypes.GenericRecordList);
Connect2_OrbitMobile_BLModel.SpecialNeedsList = SpecialNeedsList;

});
define("Connect2_OrbitMobile_BL.model$SpecialNeedsItemList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_IS.model$SpecialNeedsItemRec", "Connect2_OrbitMobile_BL.referencesHealth", "Connect2_OrbitMobile_BL.referencesHealth$Connect2_OrbitMobile_IS"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel, Connect2_OrbitMobile_BLModel) {
var OS = OutSystems.Internal;
var SpecialNeedsItemList = (function (_super) {
__extends(SpecialNeedsItemList, _super);
function SpecialNeedsItemList(defaults) {
_super.apply(this, arguments);
}
SpecialNeedsItemList.itemType = Connect2_OrbitMobile_ISModel.SpecialNeedsItemRec;
return SpecialNeedsItemList;
})(OS.DataTypes.GenericRecordList);
Connect2_OrbitMobile_BLModel.SpecialNeedsItemList = SpecialNeedsItemList;

});
define("Connect2_OrbitMobile_BL.model$GuestItemList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_IS.model$GuestItemRec", "Connect2_OrbitMobile_BL.referencesHealth", "Connect2_OrbitMobile_BL.referencesHealth$Connect2_OrbitMobile_IS"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel, Connect2_OrbitMobile_BLModel) {
var OS = OutSystems.Internal;
var GuestItemList = (function (_super) {
__extends(GuestItemList, _super);
function GuestItemList(defaults) {
_super.apply(this, arguments);
}
GuestItemList.itemType = Connect2_OrbitMobile_ISModel.GuestItemRec;
return GuestItemList;
})(OS.DataTypes.GenericRecordList);
Connect2_OrbitMobile_BLModel.GuestItemList = GuestItemList;

});
define("Connect2_OrbitMobile_BL.model$RoomItemList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_IS.model$RoomItemRec", "Connect2_OrbitMobile_BL.referencesHealth", "Connect2_OrbitMobile_BL.referencesHealth$Connect2_OrbitMobile_IS"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel, Connect2_OrbitMobile_BLModel) {
var OS = OutSystems.Internal;
var RoomItemList = (function (_super) {
__extends(RoomItemList, _super);
function RoomItemList(defaults) {
_super.apply(this, arguments);
}
RoomItemList.itemType = Connect2_OrbitMobile_ISModel.RoomItemRec;
return RoomItemList;
})(OS.DataTypes.GenericRecordList);
Connect2_OrbitMobile_BLModel.RoomItemList = RoomItemList;

});
define("Connect2_OrbitMobile_BL.model$GetAccommodationHelper_ScreenRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_BL.model$OrbitMilestoneTypeRec", "Connect2_OrbitMobile_IS.model$AccommodationHelperRec", "Connect2_OrbitMobile_BL.referencesHealth", "Connect2_OrbitMobile_BL.referencesHealth$Connect2_OrbitMobile_IS"], function (exports, OutSystems, Connect2_OrbitMobile_BLModel, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var GetAccommodationHelper_ScreenRec = (function (_super) {
__extends(GetAccommodationHelper_ScreenRec, _super);
function GetAccommodationHelper_ScreenRec(defaults) {
_super.apply(this, arguments);
}
GetAccommodationHelper_ScreenRec.attributesToDeclare = function () {
return [
this.attr("OrbitMilestoneType", "orbitMilestoneTypeAttr", "OrbitMilestoneType", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_BLModel.OrbitMilestoneTypeRec());
}, true, Connect2_OrbitMobile_BLModel.OrbitMilestoneTypeRec), 
this.attr("GetAccommodationHelperResponse", "getAccommodationHelperResponseAttr", "GetAccommodationHelperResponse", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.AccommodationHelperRec());
}, true, Connect2_OrbitMobile_ISModel.AccommodationHelperRec)
].concat(_super.attributesToDeclare.call(this));
};
GetAccommodationHelper_ScreenRec.init();
return GetAccommodationHelper_ScreenRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_BLModel.GetAccommodationHelper_ScreenRec = GetAccommodationHelper_ScreenRec;

});
define("Connect2_OrbitMobile_BL.model$QRCodeSeatItemList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_IS.model$QRCodeSeatItemRec", "Connect2_OrbitMobile_BL.referencesHealth", "Connect2_OrbitMobile_BL.referencesHealth$Connect2_OrbitMobile_IS"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel, Connect2_OrbitMobile_BLModel) {
var OS = OutSystems.Internal;
var QRCodeSeatItemList = (function (_super) {
__extends(QRCodeSeatItemList, _super);
function QRCodeSeatItemList(defaults) {
_super.apply(this, arguments);
}
QRCodeSeatItemList.itemType = Connect2_OrbitMobile_ISModel.QRCodeSeatItemRec;
return QRCodeSeatItemList;
})(OS.DataTypes.GenericRecordList);
Connect2_OrbitMobile_BLModel.QRCodeSeatItemList = QRCodeSeatItemList;

});
define("Connect2_OrbitMobile_BL.model$GetEventQRCode_ScreenRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_IS.model$GetEventQRCodeResponseRec", "Connect2_OrbitMobile_BL.referencesHealth", "Connect2_OrbitMobile_BL.referencesHealth$Connect2_OrbitMobile_IS"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel, Connect2_OrbitMobile_BLModel) {
var OS = OutSystems.Internal;
var GetEventQRCode_ScreenRec = (function (_super) {
__extends(GetEventQRCode_ScreenRec, _super);
function GetEventQRCode_ScreenRec(defaults) {
_super.apply(this, arguments);
}
GetEventQRCode_ScreenRec.attributesToDeclare = function () {
return [
this.attr("GetEventQRCodeResponse", "getEventQRCodeResponseAttr", "GetEventQRCodeResponse", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.GetEventQRCodeResponseRec());
}, true, Connect2_OrbitMobile_ISModel.GetEventQRCodeResponseRec), 
this.attr("QRCodeAsBinary", "qRCodeAsBinaryAttr", "QRCodeAsBinary", true, false, OS.DataTypes.DataTypes.BinaryData, function () {
return OS.DataTypes.BinaryData.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
GetEventQRCode_ScreenRec.init();
return GetEventQRCode_ScreenRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_BLModel.GetEventQRCode_ScreenRec = GetEventQRCode_ScreenRec;

});
define("Connect2_OrbitMobile_BL.model$ScannedUserInformationRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_IS.model$QRCodeSeatItemRec", "Connect2_OrbitMobile_BL.referencesHealth", "Connect2_OrbitMobile_BL.referencesHealth$Connect2_OrbitMobile_IS", "Connect2_OrbitMobile_BL.model$QRCodeSeatItemList"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel, Connect2_OrbitMobile_BLModel) {
var OS = OutSystems.Internal;
var ScannedUserInformationRec = (function (_super) {
__extends(ScannedUserInformationRec, _super);
function ScannedUserInformationRec(defaults) {
_super.apply(this, arguments);
}
ScannedUserInformationRec.attributesToDeclare = function () {
return [
this.attr("MemberId", "memberIdAttr", "MemberId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("MemberFirstName", "memberFirstNameAttr", "MemberFirstName", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MemberLastName", "memberLastNameAttr", "MemberLastName", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MemberLocality", "memberLocalityAttr", "MemberLocality", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MemberCountry", "memberCountryAttr", "MemberCountry", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MemberRole", "memberRoleAttr", "MemberRole", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MemberRowAllocations", "memberRowAllocationsAttr", "MemberRowAllocations", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_BLModel.QRCodeSeatItemList());
}, true, Connect2_OrbitMobile_BLModel.QRCodeSeatItemList), 
this.attr("MemberTag", "memberTagAttr", "MemberTag", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MemberGuestRole", "memberGuestRoleAttr", "MemberGuestRole", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MemberRowAllocation", "memberRowAllocationAttr", "MemberRowAllocation", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MemberSeatingPlan", "memberSeatingPlanAttr", "MemberSeatingPlan", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ScannedUserInformationRec.init();
return ScannedUserInformationRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_BLModel.ScannedUserInformationRec = ScannedUserInformationRec;

});
define("Connect2_OrbitMobile_BL.model$ScannerAdminInfoRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_BL.model"], function (exports, OutSystems, Connect2_OrbitMobile_BLModel) {
var OS = OutSystems.Internal;
var ScannerAdminInfoRec = (function (_super) {
__extends(ScannerAdminInfoRec, _super);
function ScannerAdminInfoRec(defaults) {
_super.apply(this, arguments);
}
ScannerAdminInfoRec.attributesToDeclare = function () {
return [
this.attr("AdminMemberId", "adminMemberIdAttr", "AdminMemberId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("AdminFirstName", "adminFirstNameAttr", "AdminFirstName", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AdminLastName", "adminLastNameAttr", "AdminLastName", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AdminLocality", "adminLocalityAttr", "AdminLocality", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AdminCountry", "adminCountryAttr", "AdminCountry", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ScannerAdminInfoRec.init();
return ScannerAdminInfoRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_BLModel.ScannerAdminInfoRec = ScannerAdminInfoRec;

});
define("Connect2_OrbitMobile_BL.model$ScannedQRCodeInfoRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_BL.model$ScannedUserInformationRec", "Connect2_OrbitMobile_BL.model$ScannerAdminInfoRec"], function (exports, OutSystems, Connect2_OrbitMobile_BLModel) {
var OS = OutSystems.Internal;
var ScannedQRCodeInfoRec = (function (_super) {
__extends(ScannedQRCodeInfoRec, _super);
function ScannedQRCodeInfoRec(defaults) {
_super.apply(this, arguments);
}
ScannedQRCodeInfoRec.attributesToDeclare = function () {
return [
this.attr("EventId", "eventIdAttr", "EventId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("MilestoneId", "milestoneIdAttr", "MilestoneId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MilestoneType", "milestoneTypeAttr", "MilestoneType", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ScanDate", "scanDateAttr", "ScanDate", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("ScannedUserInformation", "scannedUserInformationAttr", "ScannedUserInformation", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_BLModel.ScannedUserInformationRec());
}, true, Connect2_OrbitMobile_BLModel.ScannedUserInformationRec), 
this.attr("ScannerAdminInfo", "scannerAdminInfoAttr", "ScannerAdminInfo", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_BLModel.ScannerAdminInfoRec());
}, true, Connect2_OrbitMobile_BLModel.ScannerAdminInfoRec)
].concat(_super.attributesToDeclare.call(this));
};
ScannedQRCodeInfoRec.init();
return ScannedQRCodeInfoRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_BLModel.ScannedQRCodeInfoRec = ScannedQRCodeInfoRec;

});
define("Connect2_OrbitMobile_BL.model$GenderPreferenceRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_BL.model"], function (exports, OutSystems, Connect2_OrbitMobile_BLModel) {
var OS = OutSystems.Internal;
var GenderPreferenceRec = (function (_super) {
__extends(GenderPreferenceRec, _super);
function GenderPreferenceRec(defaults) {
_super.apply(this, arguments);
}
GenderPreferenceRec.attributesToDeclare = function () {
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
}, true), 
this.attr("JSON_Name", "jSON_NameAttr", "JSON_Name", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
GenderPreferenceRec.init();
return GenderPreferenceRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_BLModel.GenderPreferenceRec = GenderPreferenceRec;

});
define("Connect2_OrbitMobile_BL.model$OrbitEventTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_BL.model"], function (exports, OutSystems, Connect2_OrbitMobile_BLModel) {
var OS = OutSystems.Internal;
var OrbitEventTypeRec = (function (_super) {
__extends(OrbitEventTypeRec, _super);
function OrbitEventTypeRec(defaults) {
_super.apply(this, arguments);
}
OrbitEventTypeRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Type", "typeAttr", "Type", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Name", "nameAttr", "Name", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MainColorVar", "mainColorVarAttr", "MainColorVar", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MainIcon", "mainIconAttr", "MainIcon", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
OrbitEventTypeRec.init();
return OrbitEventTypeRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_BLModel.OrbitEventTypeRec = OrbitEventTypeRec;

});
define("Connect2_OrbitMobile_BL.model$Event_ScreenRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_BL.model$OrbitEventTypeRec", "Connect2_OrbitMobile_IS.model$EventInfoRec", "Connect2_OrbitMobile_BL.referencesHealth", "Connect2_OrbitMobile_BL.referencesHealth$Connect2_OrbitMobile_IS"], function (exports, OutSystems, Connect2_OrbitMobile_BLModel, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var Event_ScreenRec = (function (_super) {
__extends(Event_ScreenRec, _super);
function Event_ScreenRec(defaults) {
_super.apply(this, arguments);
}
Event_ScreenRec.attributesToDeclare = function () {
return [
this.attr("EventId", "eventIdAttr", "EventId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Type", "typeAttr", "Type", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Title", "titleAttr", "Title", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DateTime", "dateTimeAttr", "DateTime", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("OrbitEventType", "orbitEventTypeAttr", "OrbitEventType", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_BLModel.OrbitEventTypeRec());
}, true, Connect2_OrbitMobile_BLModel.OrbitEventTypeRec), 
this.attr("EventInfo", "eventInfoAttr", "EventInfo", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.EventInfoRec());
}, true, Connect2_OrbitMobile_ISModel.EventInfoRec)
].concat(_super.attributesToDeclare.call(this));
};
Event_ScreenRec.init();
return Event_ScreenRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_BLModel.Event_ScreenRec = Event_ScreenRec;

});
define("Connect2_OrbitMobile_BL.model$GetAccommodationHost_ScreenRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_BL.model$OrbitMilestoneTypeRec", "Connect2_OrbitMobile_IS.model$GetAccommodationHostResponseRec", "Connect2_OrbitMobile_BL.referencesHealth", "Connect2_OrbitMobile_BL.referencesHealth$Connect2_OrbitMobile_IS"], function (exports, OutSystems, Connect2_OrbitMobile_BLModel, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var GetAccommodationHost_ScreenRec = (function (_super) {
__extends(GetAccommodationHost_ScreenRec, _super);
function GetAccommodationHost_ScreenRec(defaults) {
_super.apply(this, arguments);
}
GetAccommodationHost_ScreenRec.attributesToDeclare = function () {
return [
this.attr("OrbitMilestoneType", "orbitMilestoneTypeAttr", "OrbitMilestoneType", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_BLModel.OrbitMilestoneTypeRec());
}, true, Connect2_OrbitMobile_BLModel.OrbitMilestoneTypeRec), 
this.attr("GetAccommodationHostResponse", "getAccommodationHostResponseAttr", "GetAccommodationHostResponse", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.GetAccommodationHostResponseRec());
}, true, Connect2_OrbitMobile_ISModel.GetAccommodationHostResponseRec)
].concat(_super.attributesToDeclare.call(this));
};
GetAccommodationHost_ScreenRec.init();
return GetAccommodationHost_ScreenRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_BLModel.GetAccommodationHost_ScreenRec = GetAccommodationHost_ScreenRec;

});
define("Connect2_OrbitMobile_BL.model$LDMApplicationEventRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_BL.model"], function (exports, OutSystems, Connect2_OrbitMobile_BLModel) {
var OS = OutSystems.Internal;
var LDMApplicationEventRec = (function (_super) {
__extends(LDMApplicationEventRec, _super);
function LDMApplicationEventRec(defaults) {
_super.apply(this, arguments);
}
LDMApplicationEventRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
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
LDMApplicationEventRec.init();
return LDMApplicationEventRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_BLModel.LDMApplicationEventRec = LDMApplicationEventRec;

});
define("Connect2_OrbitMobile_BL.model$GetMealHelper_ScreenRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_BL.model$OrbitMilestoneTypeRec", "Connect2_OrbitMobile_IS.model$GetMealHelperResponseRec", "Connect2_OrbitMobile_BL.referencesHealth", "Connect2_OrbitMobile_BL.referencesHealth$Connect2_OrbitMobile_IS"], function (exports, OutSystems, Connect2_OrbitMobile_BLModel, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var GetMealHelper_ScreenRec = (function (_super) {
__extends(GetMealHelper_ScreenRec, _super);
function GetMealHelper_ScreenRec(defaults) {
_super.apply(this, arguments);
}
GetMealHelper_ScreenRec.attributesToDeclare = function () {
return [
this.attr("OrbitMilestoneType", "orbitMilestoneTypeAttr", "OrbitMilestoneType", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_BLModel.OrbitMilestoneTypeRec());
}, true, Connect2_OrbitMobile_BLModel.OrbitMilestoneTypeRec), 
this.attr("GetMealMilestoneHelperResponse", "getMealMilestoneHelperResponseAttr", "GetMealMilestoneHelperResponse", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.GetMealHelperResponseRec());
}, true, Connect2_OrbitMobile_ISModel.GetMealHelperResponseRec)
].concat(_super.attributesToDeclare.call(this));
};
GetMealHelper_ScreenRec.init();
return GetMealHelper_ScreenRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_BLModel.GetMealHelper_ScreenRec = GetMealHelper_ScreenRec;

});
define("Connect2_OrbitMobile_BL.model$Milestone_ScreenRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_BL.model$OrbitMilestoneTypeRec", "Connect2_OrbitMobile_IS.model$MilestoneInfoRec", "Connect2_OrbitMobile_BL.referencesHealth", "Connect2_OrbitMobile_BL.referencesHealth$Connect2_OrbitMobile_IS"], function (exports, OutSystems, Connect2_OrbitMobile_BLModel, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var Milestone_ScreenRec = (function (_super) {
__extends(Milestone_ScreenRec, _super);
function Milestone_ScreenRec(defaults) {
_super.apply(this, arguments);
}
Milestone_ScreenRec.attributesToDeclare = function () {
return [
this.attr("MilestoneId", "milestoneIdAttr", "MilestoneId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Type", "typeAttr", "Type", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Title", "titleAttr", "Title", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MilestoneDateTime", "milestoneDateTimeAttr", "MilestoneDateTime", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("TimeType", "timeTypeAttr", "TimeType", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SequenceNo", "sequenceNoAttr", "SequenceNo", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("DateForFilter", "dateForFilterAttr", "DateForFilter", false, false, OS.DataTypes.DataTypes.Date, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("OrbitMilestoneType", "orbitMilestoneTypeAttr", "OrbitMilestoneType", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_BLModel.OrbitMilestoneTypeRec());
}, true, Connect2_OrbitMobile_BLModel.OrbitMilestoneTypeRec), 
this.attr("MilestoneInfo", "milestoneInfoAttr", "MilestoneInfo", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.MilestoneInfoRec());
}, true, Connect2_OrbitMobile_ISModel.MilestoneInfoRec)
].concat(_super.attributesToDeclare.call(this));
};
Milestone_ScreenRec.init();
return Milestone_ScreenRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_BLModel.Milestone_ScreenRec = Milestone_ScreenRec;

});
define("Connect2_OrbitMobile_BL.model$GetOrbitEventsSummary_ScreenRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_IS.model$OrbitSummaryItemRec", "Connect2_OrbitMobile_BL.referencesHealth", "Connect2_OrbitMobile_BL.referencesHealth$Connect2_OrbitMobile_IS", "Connect2_OrbitMobile_BL.model$OrbitEventTypeRec", "Connect2_OrbitMobile_BL.model$OrbitMilestoneTypeRec"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel, Connect2_OrbitMobile_BLModel) {
var OS = OutSystems.Internal;
var GetOrbitEventsSummary_ScreenRec = (function (_super) {
__extends(GetOrbitEventsSummary_ScreenRec, _super);
function GetOrbitEventsSummary_ScreenRec(defaults) {
_super.apply(this, arguments);
}
GetOrbitEventsSummary_ScreenRec.attributesToDeclare = function () {
return [
this.attr("OrbitSummaryItem", "orbitSummaryItemAttr", "OrbitSummaryItem", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.OrbitSummaryItemRec());
}, true, Connect2_OrbitMobile_ISModel.OrbitSummaryItemRec), 
this.attr("OrbitEventType", "orbitEventTypeAttr", "OrbitEventType", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_BLModel.OrbitEventTypeRec());
}, true, Connect2_OrbitMobile_BLModel.OrbitEventTypeRec), 
this.attr("OrbitMilestoneType", "orbitMilestoneTypeAttr", "OrbitMilestoneType", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_BLModel.OrbitMilestoneTypeRec());
}, true, Connect2_OrbitMobile_BLModel.OrbitMilestoneTypeRec)
].concat(_super.attributesToDeclare.call(this));
};
GetOrbitEventsSummary_ScreenRec.init();
return GetOrbitEventsSummary_ScreenRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_BLModel.GetOrbitEventsSummary_ScreenRec = GetOrbitEventsSummary_ScreenRec;

});
define("Connect2_OrbitMobile_BL.model$GetMealHost_ScreenRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_BL.model$OrbitMilestoneTypeRec", "Connect2_OrbitMobile_IS.model$GetMealHostResponseRec", "Connect2_OrbitMobile_BL.referencesHealth", "Connect2_OrbitMobile_BL.referencesHealth$Connect2_OrbitMobile_IS"], function (exports, OutSystems, Connect2_OrbitMobile_BLModel, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var GetMealHost_ScreenRec = (function (_super) {
__extends(GetMealHost_ScreenRec, _super);
function GetMealHost_ScreenRec(defaults) {
_super.apply(this, arguments);
}
GetMealHost_ScreenRec.attributesToDeclare = function () {
return [
this.attr("OrbitMilestoneType", "orbitMilestoneTypeAttr", "OrbitMilestoneType", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_BLModel.OrbitMilestoneTypeRec());
}, true, Connect2_OrbitMobile_BLModel.OrbitMilestoneTypeRec), 
this.attr("GetMealMilestoneHostResponse", "getMealMilestoneHostResponseAttr", "GetMealMilestoneHostResponse", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.GetMealHostResponseRec());
}, true, Connect2_OrbitMobile_ISModel.GetMealHostResponseRec)
].concat(_super.attributesToDeclare.call(this));
};
GetMealHost_ScreenRec.init();
return GetMealHost_ScreenRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_BLModel.GetMealHost_ScreenRec = GetMealHost_ScreenRec;

});
define("Connect2_OrbitMobile_BL.model$HelperRoleRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_BL.model"], function (exports, OutSystems, Connect2_OrbitMobile_BLModel) {
var OS = OutSystems.Internal;
var HelperRoleRec = (function (_super) {
__extends(HelperRoleRec, _super);
function HelperRoleRec(defaults) {
_super.apply(this, arguments);
}
HelperRoleRec.attributesToDeclare = function () {
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
}, true), 
this.attr("JSON_Name", "jSON_NameAttr", "JSON_Name", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("isReadOnly", "isReadOnlyAttr", "isReadOnly", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
HelperRoleRec.init();
return HelperRoleRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_BLModel.HelperRoleRec = HelperRoleRec;

});
define("Connect2_OrbitMobile_BL.model$MealDetailItemList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_IS.model$MealDetailItemRec", "Connect2_OrbitMobile_BL.referencesHealth", "Connect2_OrbitMobile_BL.referencesHealth$Connect2_OrbitMobile_IS"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel, Connect2_OrbitMobile_BLModel) {
var OS = OutSystems.Internal;
var MealDetailItemList = (function (_super) {
__extends(MealDetailItemList, _super);
function MealDetailItemList(defaults) {
_super.apply(this, arguments);
}
MealDetailItemList.itemType = Connect2_OrbitMobile_ISModel.MealDetailItemRec;
return MealDetailItemList;
})(OS.DataTypes.GenericRecordList);
Connect2_OrbitMobile_BLModel.MealDetailItemList = MealDetailItemList;

});
define("Connect2_OrbitMobile_BL.model$MilestoneTransport_ScreenList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_BL.model$MilestoneTransport_ScreenRec"], function (exports, OutSystems, Connect2_OrbitMobile_BLModel) {
var OS = OutSystems.Internal;
var MilestoneTransport_ScreenList = (function (_super) {
__extends(MilestoneTransport_ScreenList, _super);
function MilestoneTransport_ScreenList(defaults) {
_super.apply(this, arguments);
}
MilestoneTransport_ScreenList.itemType = Connect2_OrbitMobile_BLModel.MilestoneTransport_ScreenRec;
return MilestoneTransport_ScreenList;
})(OS.DataTypes.GenericRecordList);
Connect2_OrbitMobile_BLModel.MilestoneTransport_ScreenList = MilestoneTransport_ScreenList;

});
define("Connect2_OrbitMobile_BL.model$GetGuestArrangements_ScreenRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_IS.model$EventDetailsRec", "Connect2_OrbitMobile_BL.referencesHealth", "Connect2_OrbitMobile_BL.referencesHealth$Connect2_OrbitMobile_IS", "Connect2_OrbitMobile_IS.model$SpecialNeedsItemRec", "Connect2_OrbitMobile_BL.model$SpecialNeedsItemList", "Connect2_OrbitMobile_IS.model$MealDetailItemRec", "Connect2_OrbitMobile_BL.model$MealDetailItemList", "Connect2_OrbitMobile_BL.model$MilestoneTransport_ScreenList"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel, Connect2_OrbitMobile_BLModel) {
var OS = OutSystems.Internal;
var GetGuestArrangements_ScreenRec = (function (_super) {
__extends(GetGuestArrangements_ScreenRec, _super);
function GetGuestArrangements_ScreenRec(defaults) {
_super.apply(this, arguments);
}
GetGuestArrangements_ScreenRec.attributesToDeclare = function () {
return [
this.attr("MemberId", "memberIdAttr", "MemberId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("FirstName", "firstNameAttr", "FirstName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LastName", "lastNameAttr", "LastName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Title", "titleAttr", "Title", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("EventDetails", "eventDetailsAttr", "EventDetails", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.EventDetailsRec());
}, true, Connect2_OrbitMobile_ISModel.EventDetailsRec), 
this.attr("SpecialNeeds", "specialNeedsAttr", "SpecialNeeds", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_BLModel.SpecialNeedsItemList());
}, true, Connect2_OrbitMobile_BLModel.SpecialNeedsItemList), 
this.attr("MealDetails", "mealDetailsAttr", "MealDetails", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_BLModel.MealDetailItemList());
}, true, Connect2_OrbitMobile_BLModel.MealDetailItemList), 
this.attr("ArrivalDetails", "arrivalDetailsAttr", "ArrivalDetails", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_BLModel.MilestoneTransport_ScreenList());
}, true, Connect2_OrbitMobile_BLModel.MilestoneTransport_ScreenList), 
this.attr("DepartureDetails", "departureDetailsAttr", "DepartureDetails", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_BLModel.MilestoneTransport_ScreenList());
}, true, Connect2_OrbitMobile_BLModel.MilestoneTransport_ScreenList)
].concat(_super.attributesToDeclare.call(this));
};
GetGuestArrangements_ScreenRec.init();
return GetGuestArrangements_ScreenRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_BLModel.GetGuestArrangements_ScreenRec = GetGuestArrangements_ScreenRec;

});
define("Connect2_OrbitMobile_BL.model$OrbitApplicationEventRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_BL.model"], function (exports, OutSystems, Connect2_OrbitMobile_BLModel) {
var OS = OutSystems.Internal;
var OrbitApplicationEventRec = (function (_super) {
__extends(OrbitApplicationEventRec, _super);
function OrbitApplicationEventRec(defaults) {
_super.apply(this, arguments);
}
OrbitApplicationEventRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
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
OrbitApplicationEventRec.init();
return OrbitApplicationEventRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_BLModel.OrbitApplicationEventRec = OrbitApplicationEventRec;

});
define("Connect2_OrbitMobile_BL.model$ScanClientRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_BL.model"], function (exports, OutSystems, Connect2_OrbitMobile_BLModel) {
var OS = OutSystems.Internal;
var ScanClientRec = (function (_super) {
__extends(ScanClientRec, _super);
function ScanClientRec(defaults) {
_super.apply(this, arguments);
}
ScanClientRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
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
ScanClientRec.init();
return ScanClientRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_BLModel.ScanClientRec = ScanClientRec;

});
define("Connect2_OrbitMobile_BL.model$Milestone_ScreenList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_BL.model$Milestone_ScreenRec"], function (exports, OutSystems, Connect2_OrbitMobile_BLModel) {
var OS = OutSystems.Internal;
var Milestone_ScreenList = (function (_super) {
__extends(Milestone_ScreenList, _super);
function Milestone_ScreenList(defaults) {
_super.apply(this, arguments);
}
Milestone_ScreenList.itemType = Connect2_OrbitMobile_BLModel.Milestone_ScreenRec;
return Milestone_ScreenList;
})(OS.DataTypes.GenericRecordList);
Connect2_OrbitMobile_BLModel.Milestone_ScreenList = Milestone_ScreenList;

});
define("Connect2_OrbitMobile_BL.model$GetEventDetailScreenRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_IS.model$HostSurveyRec", "Connect2_OrbitMobile_BL.referencesHealth", "Connect2_OrbitMobile_BL.referencesHealth$Connect2_OrbitMobile_IS", "Connect2_OrbitMobile_BL.model$OrbitEventTypeRec", "Connect2_OrbitMobile_BL.model$Milestone_ScreenList"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel, Connect2_OrbitMobile_BLModel) {
var OS = OutSystems.Internal;
var GetEventDetailScreenRec = (function (_super) {
__extends(GetEventDetailScreenRec, _super);
function GetEventDetailScreenRec(defaults) {
_super.apply(this, arguments);
}
GetEventDetailScreenRec.attributesToDeclare = function () {
return [
this.attr("EventId", "eventIdAttr", "EventId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("MemberId", "memberIdAttr", "MemberId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("EventType", "eventTypeAttr", "EventType", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("EventName", "eventNameAttr", "EventName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("EventStartDate", "eventStartDateAttr", "EventStartDate", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("EventEndDate", "eventEndDateAttr", "EventEndDate", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Location", "locationAttr", "Location", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("TypeOfEvent", "typeOfEventAttr", "TypeOfEvent", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsBookletVisible", "isBookletVisibleAttr", "IsBookletVisible", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("SetUpMeals", "setUpMealsAttr", "SetUpMeals", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Meals", "mealsAttr", "Meals", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Accommodations", "accommodationsAttr", "Accommodations", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Helpers", "helpersAttr", "Helpers", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Transport", "transportAttr", "Transport", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("GuestTransport", "guestTransportAttr", "GuestTransport", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("HostSurvey", "hostSurveyAttr", "HostSurvey", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.HostSurveyRec());
}, true, Connect2_OrbitMobile_ISModel.HostSurveyRec), 
this.attr("OrbitEventType", "orbitEventTypeAttr", "OrbitEventType", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_BLModel.OrbitEventTypeRec());
}, true, Connect2_OrbitMobile_BLModel.OrbitEventTypeRec), 
this.attr("Milestones", "milestonesAttr", "Milestones", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_BLModel.Milestone_ScreenList());
}, true, Connect2_OrbitMobile_BLModel.Milestone_ScreenList)
].concat(_super.attributesToDeclare.call(this));
};
GetEventDetailScreenRec.init();
return GetEventDetailScreenRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_BLModel.GetEventDetailScreenRec = GetEventDetailScreenRec;

});
define("Connect2_OrbitMobile_BL.model$MealTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_BL.model"], function (exports, OutSystems, Connect2_OrbitMobile_BLModel) {
var OS = OutSystems.Internal;
var MealTypeRec = (function (_super) {
__extends(MealTypeRec, _super);
function MealTypeRec(defaults) {
_super.apply(this, arguments);
}
MealTypeRec.attributesToDeclare = function () {
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
}, true), 
this.attr("JSON_Name", "jSON_NameAttr", "JSON_Name", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
MealTypeRec.init();
return MealTypeRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_BLModel.MealTypeRec = MealTypeRec;

});
define("Connect2_OrbitMobile_BL.model$GetAdminEventDetailsScreenRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_BL.model$OrbitEventTypeRec"], function (exports, OutSystems, Connect2_OrbitMobile_BLModel) {
var OS = OutSystems.Internal;
var GetAdminEventDetailsScreenRec = (function (_super) {
__extends(GetAdminEventDetailsScreenRec, _super);
function GetAdminEventDetailsScreenRec(defaults) {
_super.apply(this, arguments);
}
GetAdminEventDetailsScreenRec.attributesToDeclare = function () {
return [
this.attr("EventId", "eventIdAttr", "EventId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("MemberId", "memberIdAttr", "MemberId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("EventType", "eventTypeAttr", "EventType", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("EventName", "eventNameAttr", "EventName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("EventStartDate", "eventStartDateAttr", "EventStartDate", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("EventEndDate", "eventEndDateAttr", "EventEndDate", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Location", "locationAttr", "Location", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("TypeOfEvent", "typeOfEventAttr", "TypeOfEvent", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("OrbitEventType", "orbitEventTypeAttr", "OrbitEventType", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_BLModel.OrbitEventTypeRec());
}, true, Connect2_OrbitMobile_BLModel.OrbitEventTypeRec)
].concat(_super.attributesToDeclare.call(this));
};
GetAdminEventDetailsScreenRec.init();
return GetAdminEventDetailsScreenRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_BLModel.GetAdminEventDetailsScreenRec = GetAdminEventDetailsScreenRec;

});
define("Connect2_OrbitMobile_BL.model$YearItemRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_BL.model"], function (exports, OutSystems, Connect2_OrbitMobile_BLModel) {
var OS = OutSystems.Internal;
var YearItemRec = (function (_super) {
__extends(YearItemRec, _super);
function YearItemRec(defaults) {
_super.apply(this, arguments);
}
YearItemRec.attributesToDeclare = function () {
return [
this.attr("Year", "yearAttr", "Year", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.nullIdentifier());
}, true), 
this.attr("IsSelected", "isSelectedAttr", "IsSelected", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Count", "countAttr", "Count", false, false, OS.DataTypes.DataTypes.Integer, function () {
return OS.BuiltinFunctions.nullIdentifier();
}, true)
].concat(_super.attributesToDeclare.call(this));
};
YearItemRec.init();
return YearItemRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_BLModel.YearItemRec = YearItemRec;

});
define("Connect2_OrbitMobile_BL.model$EventLocalitiesFilterRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_BL.model"], function (exports, OutSystems, Connect2_OrbitMobile_BLModel) {
var OS = OutSystems.Internal;
var EventLocalitiesFilterRec = (function (_super) {
__extends(EventLocalitiesFilterRec, _super);
function EventLocalitiesFilterRec(defaults) {
_super.apply(this, arguments);
}
EventLocalitiesFilterRec.attributesToDeclare = function () {
return [
this.attr("IdAsText", "idAsTextAttr", "IdAsText", true, false, OS.DataTypes.DataTypes.Text, function () {
return "AllLocalities";
}, true), 
this.attr("Name", "nameAttr", "Name", true, false, OS.DataTypes.DataTypes.Text, function () {
return "All Localities";
}, true), 
this.attr("IsSelected", "isSelectedAttr", "IsSelected", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
EventLocalitiesFilterRec.init();
return EventLocalitiesFilterRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_BLModel.EventLocalitiesFilterRec = EventLocalitiesFilterRec;

});
define("Connect2_OrbitMobile_BL.model$OrbitCardColorRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_BL.model"], function (exports, OutSystems, Connect2_OrbitMobile_BLModel) {
var OS = OutSystems.Internal;
var OrbitCardColorRec = (function (_super) {
__extends(OrbitCardColorRec, _super);
function OrbitCardColorRec(defaults) {
_super.apply(this, arguments);
}
OrbitCardColorRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
OrbitCardColorRec.fromStructure = function (str) {
return new OrbitCardColorRec(new OrbitCardColorRec.RecordClass({
idAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
OrbitCardColorRec.init();
return OrbitCardColorRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_BLModel.OrbitCardColorRec = OrbitCardColorRec;

});
define("Connect2_OrbitMobile_BL.model$GetHelperHost_ScreenRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_BL.model$OrbitMilestoneTypeRec", "Connect2_OrbitMobile_IS.model$GetHelperDetailsResponseRec", "Connect2_OrbitMobile_BL.referencesHealth", "Connect2_OrbitMobile_BL.referencesHealth$Connect2_OrbitMobile_IS"], function (exports, OutSystems, Connect2_OrbitMobile_BLModel, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var GetHelperHost_ScreenRec = (function (_super) {
__extends(GetHelperHost_ScreenRec, _super);
function GetHelperHost_ScreenRec(defaults) {
_super.apply(this, arguments);
}
GetHelperHost_ScreenRec.attributesToDeclare = function () {
return [
this.attr("OrbitMilestoneType", "orbitMilestoneTypeAttr", "OrbitMilestoneType", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_BLModel.OrbitMilestoneTypeRec());
}, true, Connect2_OrbitMobile_BLModel.OrbitMilestoneTypeRec), 
this.attr("GetHelperHost_Response", "getHelperHost_ResponseAttr", "GetHelperHost_Response", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.GetHelperDetailsResponseRec());
}, true, Connect2_OrbitMobile_ISModel.GetHelperDetailsResponseRec)
].concat(_super.attributesToDeclare.call(this));
};
GetHelperHost_ScreenRec.init();
return GetHelperHost_ScreenRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_BLModel.GetHelperHost_ScreenRec = GetHelperHost_ScreenRec;

});
define("Connect2_OrbitMobile_BL.model$SurveyStatusRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_BL.model"], function (exports, OutSystems, Connect2_OrbitMobile_BLModel) {
var OS = OutSystems.Internal;
var SurveyStatusRec = (function (_super) {
__extends(SurveyStatusRec, _super);
function SurveyStatusRec(defaults) {
_super.apply(this, arguments);
}
SurveyStatusRec.attributesToDeclare = function () {
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
}, true), 
this.attr("JSON_Name", "jSON_NameAttr", "JSON_Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SurveyStatusRec.init();
return SurveyStatusRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_BLModel.SurveyStatusRec = SurveyStatusRec;

});
define("Connect2_OrbitMobile_BL.model$CalendarGuestItem_V2List", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_IS.model$CalendarGuestItem_V2Rec", "Connect2_OrbitMobile_BL.referencesHealth", "Connect2_OrbitMobile_BL.referencesHealth$Connect2_OrbitMobile_IS"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel, Connect2_OrbitMobile_BLModel) {
var OS = OutSystems.Internal;
var CalendarGuestItem_V2List = (function (_super) {
__extends(CalendarGuestItem_V2List, _super);
function CalendarGuestItem_V2List(defaults) {
_super.apply(this, arguments);
}
CalendarGuestItem_V2List.itemType = Connect2_OrbitMobile_ISModel.CalendarGuestItem_V2Rec;
return CalendarGuestItem_V2List;
})(OS.DataTypes.GenericRecordList);
Connect2_OrbitMobile_BLModel.CalendarGuestItem_V2List = CalendarGuestItem_V2List;

});
define("Connect2_OrbitMobile_BL.model$EventCalendar_V2List", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_IS.model$EventCalendar_V2Rec", "Connect2_OrbitMobile_BL.referencesHealth", "Connect2_OrbitMobile_BL.referencesHealth$Connect2_OrbitMobile_IS"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel, Connect2_OrbitMobile_BLModel) {
var OS = OutSystems.Internal;
var EventCalendar_V2List = (function (_super) {
__extends(EventCalendar_V2List, _super);
function EventCalendar_V2List(defaults) {
_super.apply(this, arguments);
}
EventCalendar_V2List.itemType = Connect2_OrbitMobile_ISModel.EventCalendar_V2Rec;
return EventCalendar_V2List;
})(OS.DataTypes.GenericRecordList);
Connect2_OrbitMobile_BLModel.EventCalendar_V2List = EventCalendar_V2List;

});
define("Connect2_OrbitMobile_BL.model$TimelineEventGroup_V2Rec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_IS.model$EventCalendar_V2Rec", "Connect2_OrbitMobile_BL.referencesHealth", "Connect2_OrbitMobile_BL.referencesHealth$Connect2_OrbitMobile_IS", "Connect2_OrbitMobile_BL.model$EventCalendar_V2List"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel, Connect2_OrbitMobile_BLModel) {
var OS = OutSystems.Internal;
var TimelineEventGroup_V2Rec = (function (_super) {
__extends(TimelineEventGroup_V2Rec, _super);
function TimelineEventGroup_V2Rec(defaults) {
_super.apply(this, arguments);
}
TimelineEventGroup_V2Rec.attributesToDeclare = function () {
return [
this.attr("CurrentMonthDate", "currentMonthDateAttr", "CurrentMonthDate", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("EventsCalendar", "eventsCalendarAttr", "EventsCalendar", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_BLModel.EventCalendar_V2List());
}, true, Connect2_OrbitMobile_BLModel.EventCalendar_V2List)
].concat(_super.attributesToDeclare.call(this));
};
TimelineEventGroup_V2Rec.init();
return TimelineEventGroup_V2Rec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_BLModel.TimelineEventGroup_V2Rec = TimelineEventGroup_V2Rec;

});
define("Connect2_OrbitMobile_BL.model$DayFilterRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_BL.model"], function (exports, OutSystems, Connect2_OrbitMobile_BLModel) {
var OS = OutSystems.Internal;
var DayFilterRec = (function (_super) {
__extends(DayFilterRec, _super);
function DayFilterRec(defaults) {
_super.apply(this, arguments);
}
DayFilterRec.attributesToDeclare = function () {
return [
this.attr("DateGroup", "dateGroupAttr", "DateGroup", false, false, OS.DataTypes.DataTypes.Date, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("IsSelected", "isSelectedAttr", "IsSelected", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
DayFilterRec.init();
return DayFilterRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_BLModel.DayFilterRec = DayFilterRec;

});
define("Connect2_OrbitMobile_BL.model$DayFilterList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_BL.model$DayFilterRec"], function (exports, OutSystems, Connect2_OrbitMobile_BLModel) {
var OS = OutSystems.Internal;
var DayFilterList = (function (_super) {
__extends(DayFilterList, _super);
function DayFilterList(defaults) {
_super.apply(this, arguments);
}
DayFilterList.itemType = Connect2_OrbitMobile_BLModel.DayFilterRec;
return DayFilterList;
})(OS.DataTypes.GenericRecordList);
Connect2_OrbitMobile_BLModel.DayFilterList = DayFilterList;

});
define("Connect2_OrbitMobile_BL.model$DateFilterRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_BL.model$DayFilterList"], function (exports, OutSystems, Connect2_OrbitMobile_BLModel) {
var OS = OutSystems.Internal;
var DateFilterRec = (function (_super) {
__extends(DateFilterRec, _super);
function DateFilterRec(defaults) {
_super.apply(this, arguments);
}
DateFilterRec.attributesToDeclare = function () {
return [
this.attr("HasBefore", "hasBeforeAttr", "HasBefore", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("HasAfter", "hasAfterAttr", "HasAfter", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("DayFilterList", "dayFilterListAttr", "DayFilterList", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_BLModel.DayFilterList());
}, true, Connect2_OrbitMobile_BLModel.DayFilterList)
].concat(_super.attributesToDeclare.call(this));
};
DateFilterRec.init();
return DateFilterRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_BLModel.DateFilterRec = DateFilterRec;

});
define("Connect2_OrbitMobile_BL.model$GetMealGuest_ScreenRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_BL.model$OrbitMilestoneTypeRec", "Connect2_OrbitMobile_IS.model$GetMealGuestResponseRec", "Connect2_OrbitMobile_BL.referencesHealth", "Connect2_OrbitMobile_BL.referencesHealth$Connect2_OrbitMobile_IS"], function (exports, OutSystems, Connect2_OrbitMobile_BLModel, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var GetMealGuest_ScreenRec = (function (_super) {
__extends(GetMealGuest_ScreenRec, _super);
function GetMealGuest_ScreenRec(defaults) {
_super.apply(this, arguments);
}
GetMealGuest_ScreenRec.attributesToDeclare = function () {
return [
this.attr("OrbitMilestoneType", "orbitMilestoneTypeAttr", "OrbitMilestoneType", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_BLModel.OrbitMilestoneTypeRec());
}, true, Connect2_OrbitMobile_BLModel.OrbitMilestoneTypeRec), 
this.attr("GetMealMilestoneGuestResponse", "getMealMilestoneGuestResponseAttr", "GetMealMilestoneGuestResponse", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.GetMealGuestResponseRec());
}, true, Connect2_OrbitMobile_ISModel.GetMealGuestResponseRec)
].concat(_super.attributesToDeclare.call(this));
};
GetMealGuest_ScreenRec.init();
return GetMealGuest_ScreenRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_BLModel.GetMealGuest_ScreenRec = GetMealGuest_ScreenRec;

});
define("Connect2_OrbitMobile_BL.model$CalendarGuestItemList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_IS.model$CalendarGuestItemRec", "Connect2_OrbitMobile_BL.referencesHealth", "Connect2_OrbitMobile_BL.referencesHealth$Connect2_OrbitMobile_IS"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel, Connect2_OrbitMobile_BLModel) {
var OS = OutSystems.Internal;
var CalendarGuestItemList = (function (_super) {
__extends(CalendarGuestItemList, _super);
function CalendarGuestItemList(defaults) {
_super.apply(this, arguments);
}
CalendarGuestItemList.itemType = Connect2_OrbitMobile_ISModel.CalendarGuestItemRec;
return CalendarGuestItemList;
})(OS.DataTypes.GenericRecordList);
Connect2_OrbitMobile_BLModel.CalendarGuestItemList = CalendarGuestItemList;

});
define("Connect2_OrbitMobile_BL.model$EventCalendarList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_IS.model$EventCalendarRec", "Connect2_OrbitMobile_BL.referencesHealth", "Connect2_OrbitMobile_BL.referencesHealth$Connect2_OrbitMobile_IS"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel, Connect2_OrbitMobile_BLModel) {
var OS = OutSystems.Internal;
var EventCalendarList = (function (_super) {
__extends(EventCalendarList, _super);
function EventCalendarList(defaults) {
_super.apply(this, arguments);
}
EventCalendarList.itemType = Connect2_OrbitMobile_ISModel.EventCalendarRec;
return EventCalendarList;
})(OS.DataTypes.GenericRecordList);
Connect2_OrbitMobile_BLModel.EventCalendarList = EventCalendarList;

});
define("Connect2_OrbitMobile_BL.model$TimelineEventGroupRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_IS.model$EventCalendarRec", "Connect2_OrbitMobile_BL.referencesHealth", "Connect2_OrbitMobile_BL.referencesHealth$Connect2_OrbitMobile_IS", "Connect2_OrbitMobile_BL.model$EventCalendarList"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel, Connect2_OrbitMobile_BLModel) {
var OS = OutSystems.Internal;
var TimelineEventGroupRec = (function (_super) {
__extends(TimelineEventGroupRec, _super);
function TimelineEventGroupRec(defaults) {
_super.apply(this, arguments);
}
TimelineEventGroupRec.attributesToDeclare = function () {
return [
this.attr("CurrentMonthDate", "currentMonthDateAttr", "CurrentMonthDate", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("EventsCalendar", "eventsCalendarAttr", "EventsCalendar", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_BLModel.EventCalendarList());
}, true, Connect2_OrbitMobile_BLModel.EventCalendarList)
].concat(_super.attributesToDeclare.call(this));
};
TimelineEventGroupRec.init();
return TimelineEventGroupRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_BLModel.TimelineEventGroupRec = TimelineEventGroupRec;

});
define("Connect2_OrbitMobile_BL.model$EventLocalitiesFilterList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_BL.model$EventLocalitiesFilterRec"], function (exports, OutSystems, Connect2_OrbitMobile_BLModel) {
var OS = OutSystems.Internal;
var EventLocalitiesFilterList = (function (_super) {
__extends(EventLocalitiesFilterList, _super);
function EventLocalitiesFilterList(defaults) {
_super.apply(this, arguments);
}
EventLocalitiesFilterList.itemType = Connect2_OrbitMobile_BLModel.EventLocalitiesFilterRec;
return EventLocalitiesFilterList;
})(OS.DataTypes.GenericRecordList);
Connect2_OrbitMobile_BLModel.EventLocalitiesFilterList = EventLocalitiesFilterList;

});
define("Connect2_OrbitMobile_BL.model$EventCalendarFiltersAsTextRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_BL.model$EventLocalitiesFilterList"], function (exports, OutSystems, Connect2_OrbitMobile_BLModel) {
var OS = OutSystems.Internal;
var EventCalendarFiltersAsTextRec = (function (_super) {
__extends(EventCalendarFiltersAsTextRec, _super);
function EventCalendarFiltersAsTextRec(defaults) {
_super.apply(this, arguments);
}
EventCalendarFiltersAsTextRec.attributesToDeclare = function () {
return [
this.attr("Localities", "localitiesAttr", "localities", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_BLModel.EventLocalitiesFilterList());
}, true, Connect2_OrbitMobile_BLModel.EventLocalitiesFilterList), 
this.attr("FromDate", "fromDateAttr", "from", false, false, OS.DataTypes.DataTypes.Date, function () {
return OS.BuiltinFunctions.nullDate();
}, true), 
this.attr("ToDate", "toDateAttr", "to", false, false, OS.DataTypes.DataTypes.Date, function () {
return OS.BuiltinFunctions.nullDate();
}, true)
].concat(_super.attributesToDeclare.call(this));
};
EventCalendarFiltersAsTextRec.init();
return EventCalendarFiltersAsTextRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_BLModel.EventCalendarFiltersAsTextRec = EventCalendarFiltersAsTextRec;

});
define("Connect2_OrbitMobile_BL.model$HelperStatusRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_BL.model"], function (exports, OutSystems, Connect2_OrbitMobile_BLModel) {
var OS = OutSystems.Internal;
var HelperStatusRec = (function (_super) {
__extends(HelperStatusRec, _super);
function HelperStatusRec(defaults) {
_super.apply(this, arguments);
}
HelperStatusRec.attributesToDeclare = function () {
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
}, true), 
this.attr("JSON_Name", "jSON_NameAttr", "JSON_Name", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
HelperStatusRec.init();
return HelperStatusRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_BLModel.HelperStatusRec = HelperStatusRec;

});
define("Connect2_OrbitMobile_BL.model$HostDetailsRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_IS.model$GetCoordinatorDetailsResponseRec", "Connect2_OrbitMobile_BL.referencesHealth", "Connect2_OrbitMobile_BL.referencesHealth$Connect2_OrbitMobile_IS"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel, Connect2_OrbitMobile_BLModel) {
var OS = OutSystems.Internal;
var HostDetailsRec = (function (_super) {
__extends(HostDetailsRec, _super);
function HostDetailsRec(defaults) {
_super.apply(this, arguments);
}
HostDetailsRec.attributesToDeclare = function () {
return [
this.attr("GetCoordinatorDetailsResponse", "getCoordinatorDetailsResponseAttr", "GetCoordinatorDetailsResponse", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.GetCoordinatorDetailsResponseRec());
}, true, Connect2_OrbitMobile_ISModel.GetCoordinatorDetailsResponseRec)
].concat(_super.attributesToDeclare.call(this));
};
HostDetailsRec.fromStructure = function (str) {
return new HostDetailsRec(new HostDetailsRec.RecordClass({
getCoordinatorDetailsResponseAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
HostDetailsRec.init();
return HostDetailsRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_BLModel.HostDetailsRec = HostDetailsRec;

});
define("Connect2_OrbitMobile_BL.model$GetAccommodationGuest_ScreenRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_BL.model$OrbitMilestoneTypeRec", "Connect2_OrbitMobile_IS.model$AccommodationGuestRec", "Connect2_OrbitMobile_BL.referencesHealth", "Connect2_OrbitMobile_BL.referencesHealth$Connect2_OrbitMobile_IS"], function (exports, OutSystems, Connect2_OrbitMobile_BLModel, Connect2_OrbitMobile_ISModel) {
var OS = OutSystems.Internal;
var GetAccommodationGuest_ScreenRec = (function (_super) {
__extends(GetAccommodationGuest_ScreenRec, _super);
function GetAccommodationGuest_ScreenRec(defaults) {
_super.apply(this, arguments);
}
GetAccommodationGuest_ScreenRec.attributesToDeclare = function () {
return [
this.attr("OrbitMilestoneType", "orbitMilestoneTypeAttr", "OrbitMilestoneType", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_BLModel.OrbitMilestoneTypeRec());
}, true, Connect2_OrbitMobile_BLModel.OrbitMilestoneTypeRec), 
this.attr("GetAccommodationGuestResponse", "getAccommodationGuestResponseAttr", "GetAccommodationGuestResponse", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.AccommodationGuestRec());
}, true, Connect2_OrbitMobile_ISModel.AccommodationGuestRec)
].concat(_super.attributesToDeclare.call(this));
};
GetAccommodationGuest_ScreenRec.init();
return GetAccommodationGuest_ScreenRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_BLModel.GetAccommodationGuest_ScreenRec = GetAccommodationGuest_ScreenRec;

});
define("Connect2_OrbitMobile_BL.model$ScannedUserRec", ["exports", "OutSystems/ClientRuntime/Main", "APIDomain_Directory_IS.model", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_BL.model", "APIDomain_Directory_IS.model$Directory_MemberByIdRec", "Connect2_OrbitMobile_BL.referencesHealth", "Connect2_OrbitMobile_BL.referencesHealth$APIDomain_Directory_IS", "Connect2_OrbitMobile_IS.model$QRCodeSeatItemRec", "Connect2_OrbitMobile_BL.referencesHealth$Connect2_OrbitMobile_IS", "Connect2_OrbitMobile_BL.model$QRCodeSeatItemList"], function (exports, OutSystems, APIDomain_Directory_ISModel, Connect2_OrbitMobile_ISModel, Connect2_OrbitMobile_BLModel) {
var OS = OutSystems.Internal;
var ScannedUserRec = (function (_super) {
__extends(ScannedUserRec, _super);
function ScannedUserRec(defaults) {
_super.apply(this, arguments);
}
ScannedUserRec.attributesToDeclare = function () {
return [
this.attr("Member", "memberAttr", "Member", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.Directory_MemberByIdRec());
}, true, APIDomain_Directory_ISModel.Directory_MemberByIdRec), 
this.attr("SignedURL", "signedURLAttr", "SignedURL", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("UserRole", "userRoleAttr", "userRole", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Seats", "seatsAttr", "seats", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_BLModel.QRCodeSeatItemList());
}, true, Connect2_OrbitMobile_BLModel.QRCodeSeatItemList), 
this.attr("Tag", "tagAttr", "tag", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("GuestRole", "guestRoleAttr", "GuestRole", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("RowAllocation", "rowAllocationAttr", "RowAllocation", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SeatingPlan", "seatingPlanAttr", "SeatingPlan", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MilestoneDescription", "milestoneDescriptionAttr", "MilestoneDescription", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ScannedUserRec.init();
return ScannedUserRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_BLModel.ScannedUserRec = ScannedUserRec;

});
define("Connect2_OrbitMobile_BL.model$ResultRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_BL.model"], function (exports, OutSystems, Connect2_OrbitMobile_BLModel) {
var OS = OutSystems.Internal;
var ResultRec = (function (_super) {
__extends(ResultRec, _super);
function ResultRec(defaults) {
_super.apply(this, arguments);
}
ResultRec.attributesToDeclare = function () {
return [
this.attr("Success", "successAttr", "Success", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("ErrorMessage", "errorMessageAttr", "ErrorMessage", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ResultRec.init();
return ResultRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_BLModel.ResultRec = ResultRec;

});
define("Connect2_OrbitMobile_BL.model$MilestoneTimeTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_BL.model"], function (exports, OutSystems, Connect2_OrbitMobile_BLModel) {
var OS = OutSystems.Internal;
var MilestoneTimeTypeRec = (function (_super) {
__extends(MilestoneTimeTypeRec, _super);
function MilestoneTimeTypeRec(defaults) {
_super.apply(this, arguments);
}
MilestoneTimeTypeRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
MilestoneTimeTypeRec.fromStructure = function (str) {
return new MilestoneTimeTypeRec(new MilestoneTimeTypeRec.RecordClass({
idAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
MilestoneTimeTypeRec.init();
return MilestoneTimeTypeRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_BLModel.MilestoneTimeTypeRec = MilestoneTimeTypeRec;

});
define("Connect2_OrbitMobile_BL.model$QRCodeScanResultRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_BL.model"], function (exports, OutSystems, Connect2_OrbitMobile_BLModel) {
var OS = OutSystems.Internal;
var QRCodeScanResultRec = (function (_super) {
__extends(QRCodeScanResultRec, _super);
function QRCodeScanResultRec(defaults) {
_super.apply(this, arguments);
}
QRCodeScanResultRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Description", "descriptionAttr", "Description", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("UserMessage", "userMessageAttr", "UserMessage", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
QRCodeScanResultRec.init();
return QRCodeScanResultRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_BLModel.QRCodeScanResultRec = QRCodeScanResultRec;

});
define("Connect2_OrbitMobile_BL.model$VehicleOwnerRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_BL.model"], function (exports, OutSystems, Connect2_OrbitMobile_BLModel) {
var OS = OutSystems.Internal;
var VehicleOwnerRec = (function (_super) {
__extends(VehicleOwnerRec, _super);
function VehicleOwnerRec(defaults) {
_super.apply(this, arguments);
}
VehicleOwnerRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("JSON_Name", "jSON_NameAttr", "JSON_Name", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
VehicleOwnerRec.init();
return VehicleOwnerRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_BLModel.VehicleOwnerRec = VehicleOwnerRec;

});
define("Connect2_OrbitMobile_BL.model$RoomsAmenitiesRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_BL.model"], function (exports, OutSystems, Connect2_OrbitMobile_BLModel) {
var OS = OutSystems.Internal;
var RoomsAmenitiesRec = (function (_super) {
__extends(RoomsAmenitiesRec, _super);
function RoomsAmenitiesRec(defaults) {
_super.apply(this, arguments);
}
RoomsAmenitiesRec.attributesToDeclare = function () {
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
this.attr("IsSelected", "isSelectedAttr", "IsSelected", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
RoomsAmenitiesRec.init();
return RoomsAmenitiesRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_BLModel.RoomsAmenitiesRec = RoomsAmenitiesRec;

});
define("Connect2_OrbitMobile_BL.model$EventCategoryRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_BL.model"], function (exports, OutSystems, Connect2_OrbitMobile_BLModel) {
var OS = OutSystems.Internal;
var EventCategoryRec = (function (_super) {
__extends(EventCategoryRec, _super);
function EventCategoryRec(defaults) {
_super.apply(this, arguments);
}
EventCategoryRec.attributesToDeclare = function () {
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
EventCategoryRec.init();
return EventCategoryRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_BLModel.EventCategoryRec = EventCategoryRec;

});
define("Connect2_OrbitMobile_BL.model$StopItemList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_IS.model$StopItemRec", "Connect2_OrbitMobile_BL.referencesHealth", "Connect2_OrbitMobile_BL.referencesHealth$Connect2_OrbitMobile_IS"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel, Connect2_OrbitMobile_BLModel) {
var OS = OutSystems.Internal;
var StopItemList = (function (_super) {
__extends(StopItemList, _super);
function StopItemList(defaults) {
_super.apply(this, arguments);
}
StopItemList.itemType = Connect2_OrbitMobile_ISModel.StopItemRec;
return StopItemList;
})(OS.DataTypes.GenericRecordList);
Connect2_OrbitMobile_BLModel.StopItemList = StopItemList;

});
define("Connect2_OrbitMobile_BL.model$SeatItemList", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_IS.model$SeatItemRec", "Connect2_OrbitMobile_BL.referencesHealth", "Connect2_OrbitMobile_BL.referencesHealth$Connect2_OrbitMobile_IS"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel, Connect2_OrbitMobile_BLModel) {
var OS = OutSystems.Internal;
var SeatItemList = (function (_super) {
__extends(SeatItemList, _super);
function SeatItemList(defaults) {
_super.apply(this, arguments);
}
SeatItemList.itemType = Connect2_OrbitMobile_ISModel.SeatItemRec;
return SeatItemList;
})(OS.DataTypes.GenericRecordList);
Connect2_OrbitMobile_BLModel.SeatItemList = SeatItemList;

});
define("Connect2_OrbitMobile_BL.model$GetTransportDetails_ScreenRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_IS.model$GetTransportDetail_ResponseRec", "Connect2_OrbitMobile_BL.referencesHealth", "Connect2_OrbitMobile_BL.referencesHealth$Connect2_OrbitMobile_IS", "Connect2_OrbitMobile_BL.model$OrbitMilestoneTypeRec"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel, Connect2_OrbitMobile_BLModel) {
var OS = OutSystems.Internal;
var GetTransportDetails_ScreenRec = (function (_super) {
__extends(GetTransportDetails_ScreenRec, _super);
function GetTransportDetails_ScreenRec(defaults) {
_super.apply(this, arguments);
}
GetTransportDetails_ScreenRec.attributesToDeclare = function () {
return [
this.attr("TransportDetail", "transportDetailAttr", "TransportDetail", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.GetTransportDetail_ResponseRec());
}, true, Connect2_OrbitMobile_ISModel.GetTransportDetail_ResponseRec), 
this.attr("MilestoneType", "milestoneTypeAttr", "MilestoneType", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_BLModel.OrbitMilestoneTypeRec());
}, true, Connect2_OrbitMobile_BLModel.OrbitMilestoneTypeRec)
].concat(_super.attributesToDeclare.call(this));
};
GetTransportDetails_ScreenRec.init();
return GetTransportDetails_ScreenRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_BLModel.GetTransportDetails_ScreenRec = GetTransportDetails_ScreenRec;

});
define("Connect2_OrbitMobile_BL.model$GetAdminOrbitEvents_ScreenRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_IS.model$AdminOrbitSummaryItemRec", "Connect2_OrbitMobile_BL.referencesHealth", "Connect2_OrbitMobile_BL.referencesHealth$Connect2_OrbitMobile_IS", "Connect2_OrbitMobile_BL.model$OrbitEventTypeRec"], function (exports, OutSystems, Connect2_OrbitMobile_ISModel, Connect2_OrbitMobile_BLModel) {
var OS = OutSystems.Internal;
var GetAdminOrbitEvents_ScreenRec = (function (_super) {
__extends(GetAdminOrbitEvents_ScreenRec, _super);
function GetAdminOrbitEvents_ScreenRec(defaults) {
_super.apply(this, arguments);
}
GetAdminOrbitEvents_ScreenRec.attributesToDeclare = function () {
return [
this.attr("OrbitSummaryItem", "orbitSummaryItemAttr", "OrbitSummaryItem", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.AdminOrbitSummaryItemRec());
}, true, Connect2_OrbitMobile_ISModel.AdminOrbitSummaryItemRec), 
this.attr("OrbitEventType", "orbitEventTypeAttr", "OrbitEventType", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_BLModel.OrbitEventTypeRec());
}, true, Connect2_OrbitMobile_BLModel.OrbitEventTypeRec)
].concat(_super.attributesToDeclare.call(this));
};
GetAdminOrbitEvents_ScreenRec.init();
return GetAdminOrbitEvents_ScreenRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_BLModel.GetAdminOrbitEvents_ScreenRec = GetAdminOrbitEvents_ScreenRec;

});
define("Connect2_OrbitMobile_BL.model$ScannedQRCodesRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_BL.model"], function (exports, OutSystems, Connect2_OrbitMobile_BLModel) {
var OS = OutSystems.Internal;
var ScannedQRCodesRec = (function (_super) {
__extends(ScannedQRCodesRec, _super);
function ScannedQRCodesRec(defaults) {
_super.apply(this, arguments);
}
ScannedQRCodesRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("UserMemberId", "userMemberIdAttr", "UserMemberId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("AdminMemberId", "adminMemberIdAttr", "AdminMemberId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("EventId", "eventIdAttr", "EventId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("MilestoneId", "milestoneIdAttr", "MilestoneId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MilestoneType", "milestoneTypeAttr", "MilestoneType", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LastScanDate", "lastScanDateAttr", "LastScanDate", true, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("MemberRole", "memberRoleAttr", "MemberRole", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Seats", "seatsAttr", "Seats", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Tag", "tagAttr", "Tag", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("GuestRole", "guestRoleAttr", "GuestRole", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("RowAllocation", "rowAllocationAttr", "RowAllocation", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SeatingPlan", "seatingPlanAttr", "SeatingPlan", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ScannedQRCodesRec.init();
return ScannedQRCodesRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_BLModel.ScannedQRCodesRec = ScannedQRCodesRec;

});
define("Connect2_OrbitMobile_BL.model$VehicleTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_BL.model"], function (exports, OutSystems, Connect2_OrbitMobile_BLModel) {
var OS = OutSystems.Internal;
var VehicleTypeRec = (function (_super) {
__extends(VehicleTypeRec, _super);
function VehicleTypeRec(defaults) {
_super.apply(this, arguments);
}
VehicleTypeRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("JSON_Name", "jSON_NameAttr", "JSON_Name", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
VehicleTypeRec.init();
return VehicleTypeRec;
})(OS.DataTypes.GenericRecord);
Connect2_OrbitMobile_BLModel.VehicleTypeRec = VehicleTypeRec;

});
define("Connect2_OrbitMobile_BL.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var Connect2_OrbitMobile_BLModel = exports;
});
