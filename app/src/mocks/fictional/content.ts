/* Fictional people for the content mocks (messages, notifications, shares): plausible names and real place names, no
   real person and no contact data (mock-fixtures.md "Fictional text must be meaningful", user 2026-10-16). The
   directory cast (households, members, localities) is not here. */

/** Senders of the user-sent messages (MessageList / MessageDetail rows without a ProfileIconURL), by member id. */
const MESSAGE_SENDERS: Record<string, string> = {
  // The senders of the three newest MessageList rows of the TST capture of 2026-10-29 (drift wave); 900122 keeps the
  // captured name length of MessageDetail ("••••• ••••").
  '900120': 'Helen Ashworth',
  '900121': 'Daniel Morley',
  '900122': 'Clara Hunt',
  '900103': 'Eleanor Whitfield',
  '900107': 'Samuel Prescott',
  '900108': 'Margaret Holloway',
  '900109': 'Joseph Fletcher',
  '900110': 'Rebecca Lindsay',
  '900111': 'Andrew Thornton',
  '900112': 'Catherine Booth',
  '900113': 'Philip Hargreaves',
  '900114': 'Joanna Whitley',
};

/** The sender name of a user-sent message ('' when the member is not a known sender). */
export const messageSenderName = (memberId: string): string => MESSAGE_SENDERS[memberId] ?? '';

/** Members offered by the ShareSheet (name, "City, Country"); the first three are the recently shared ones. */
export const SHARE_MEMBERS: readonly (readonly [name: string, location: string])[] = [
  ['Thomas Hargreaves', 'Geelong, Australia'],
  ['Eleanor Whitfield', 'Christchurch, New Zealand'],
  ['Samuel Prescott', 'Reading, United Kingdom'],
  ['Grace Lindsay', 'Bendigo, Australia'],
  ['Daniel Fletcher', 'Kingston, Canada'],
  ['Rebecca Holloway', 'Toowoomba, Australia'],
];
