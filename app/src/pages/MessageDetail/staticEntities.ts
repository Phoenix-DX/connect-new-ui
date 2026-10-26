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

/** ParameterName: AssembleEventInstanceId "17", AssembleEventParentId "18". */
export const ParameterName = { AssembleEventInstanceId: 17, AssembleEventParentId: 18 } as const;
