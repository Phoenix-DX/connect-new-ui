/* Connect2_LegacyShared static entities this route uses (migration/knowledge/static-entities-tst.json). */

/** MessageSenderTarget: Orbit "2", Directory "3", LordsDayMeal "6", OrbitHostSurvey "20", Assemble "21". */
export const MessageSenderTarget = {
  Orbit: 2,
  Directory: 3,
  LordsDayMeal: 6,
  OrbitHostSurvey: 20,
  Assemble: 21,
} as const;

/** MessageInfoType: GeneralInformation "1", WhatsNew "2", Sharing "3". */
export const MessageInfoType = { GeneralInformation: 1, WhatsNew: 2, Sharing: 3 } as const;

/** MessagePriority: Normal "1", Urgent "2". */
export const MessagePriority = { Normal: 1, Urgent: 2 } as const;

/** MessageType: Private "1", Public "2". */
export const MessageType = { Private: 1, Public: 2 } as const;

/** ParameterName: AssembleEventType "14", AssembleEventInstanceId "17", AssembleEventParentId "18". */
export const ParameterName = { AssembleEventType: 14, AssembleEventInstanceId: 17, AssembleEventParentId: 18 } as const;

/** UBTConnect ApplicationEvents_LDM: NotificationContactOrganiser, NotificationViewEvent. */
export const ApplicationEvents_LDM = {
  NotificationContactOrganiser: '96a44608-36b0-4e65-8b36-9eb00283f365',
  NotificationViewEvent: '99cb4444-a39e-4a02-93cd-8fbde98b3c73',
} as const;

/** Connect2_LegacyShared ApplicationEvents_Directory: ShareView. */
export const ApplicationEvents_Directory = { ShareView: 'd672f610-0b2a-42a0-85e5-cd20fbbece55' } as const;
