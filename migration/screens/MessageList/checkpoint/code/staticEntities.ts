/* Connect2_LegacyShared static entities this route uses (migration/knowledge/static-entities-tst.json). */

/** MessagePriority: Normal "1", Urgent "2" (MessageListBlock: IsUrgent = MessageTemplatePriorityId = Urgent). */
export const MessagePriority = { Normal: 1, Urgent: 2 } as const;

/** MessageType: Private "1", Public "2" (OnAfterFetch_GetMessages TotalPrivate / TotalPublic). */
export const MessageType = { Private: 1, Public: 2 } as const;

/** Connect_Entity.Member and ImageSize.Small: the sender photo of MessageListItem (Cache_SignedImageURL_Get). */
export const Connect_Entity = { Member: 'Member' } as const;
export const ImageSize = { Small: 'Small' } as const;

/** RecentSearchType.MyNotifications: input RecentSearchTypeId of MessageSearchHistory in ScreenBlock_MessageList. */
export const RecentSearchType = { MyNotifications: 'MyNotifications' } as const;

/** The Animate around MessageList_Filter in ScreenBlock_MessageList: Speed.fast, AnimationType.rightToLeft. */
export const Speed = { Fast: 'fast' } as const;
export const AnimationType = { RightToLeft: 'right-to-left' } as const;

/** Space.small: the Separator of MessageFilterGroup. */
export const Space = { Small: 's' } as const;
