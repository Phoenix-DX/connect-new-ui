import { expect, test } from 'vitest';
import { FLAG_OS_NAMES } from '@/legacy/os/flagNames';
import generated from './flags.generated.json';
import { FLAGS } from './registry';
import { FLAG_KEYS } from './resolve';

/* The registry was generated from flags.generated.json (the user's decisions, flags.py export) in step P4-5. These
   tests keep the two in step: a new decision that flags.py exports fails here until the registry has it. */
type GeneratedFlag = { source: string; default: string; routes: string[] };
const decided = (generated as { flags: Record<string, GeneratedFlag> }).flags;
const sorted = (list: readonly string[]) => [...list].sort();

test('every decided flag is in the registry, with its default and its routes', () => {
  for (const [key, flag] of Object.entries(decided)) {
    expect(Object.hasOwn(FLAGS, key), key).toBe(true);
    const entry = FLAGS[key as keyof typeof FLAGS];
    expect(entry.default, key).toBe(flag.default === 'on');
    expect(sorted(entry.routes), key).toEqual(sorted(flag.routes));
  }
});

test('the registry adds one flag only: mobileDirectoryLocalityContacts (Locality_Details Q2, default off)', () => {
  expect(FLAG_KEYS.filter((key) => !Object.hasOwn(decided, key))).toEqual(['mobileDirectoryLocalityContacts']);
  expect(FLAGS.mobileDirectoryLocalityContacts.default).toBe(false);
});

test('every flag is a server flag, except the constant GetHasWalletAccess; kind, owner and removeBy are not set yet', () => {
  expect(FLAG_KEYS.filter((key) => FLAGS[key].source === 'build')).toEqual(['WalletAccess']);
  for (const key of FLAG_KEYS) {
    expect(FLAGS[key].description, key).not.toBe('');
    expect([FLAGS[key].kind, FLAGS[key].owner, FLAGS[key].removeBy], key).toEqual([null, null, null]);
  }
});

test('legacy/os/flagNames.ts: the OutSystems name of every flag, as flags.generated.json gives it', () => {
  expect(sorted(Object.keys(FLAG_OS_NAMES))).toEqual(sorted(FLAG_KEYS));
  for (const [key, flag] of Object.entries(decided))
    expect(FLAG_OS_NAMES[key as keyof typeof FLAG_OS_NAMES], key).toBe(flag.source);
});
