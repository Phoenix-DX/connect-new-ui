/* The fictional directory cast of the mock app (user rule 2026-10-16, migration/knowledge/mock-fixtures.md "Fictional
   text must be meaningful"): one consistent world shared by every directory mock (households, members, supper meetings,
   schools, bookmarks, search, the signed-in user). Invented people with plausible names for their country, real place
   names, no real contact data (emails @example.com, 555 numbers). A household id has the same name everywhere.

   The 23 households of locality 252 "Bahia Blanca, Argentina" are in the captured card order of Locality_Details
   (card 1 = 42438, cards 2-23 = 91002-91023). Their names keep the word lengths the TST captures masked
   (Locality_Details, HouseholdCarousel, SupperMeeting_Details / _Carousel, Photobook): the same households appear on all
   of them. Card 1 is household 42438 (decision A, 2026-10-16: the TST masked word lengths match bookmark row 4): the
   HouseholdDetails / HouseholdCarousel / Photobook route household = bookmark row 4 "Vitale, Julián & Fiorella". The
   signed-in mock user is Matías Vitale, its eldest son. */

export const LOCALITY = { id: '252', name: 'Bahia Blanca', country: 'Argentina', countryCode: 'AR' } as const;

export interface CastMember {
  first: string;
  /** "Born 14 Mar 1974"; '' = empty life-cycle line. */
  born: string;
  /** An italic life-cycle line instead of the birth date. */
  note?: string;
}

export interface CastHousehold {
  id: string;
  /** Householder and spouse, or the single householder. */
  householder: string;
  spouse?: string;
  surname: string;
  /** Children named on the card subtitle and the household's family names. */
  children: string[];
  /** Every member of the household, the householder first. */
  members: CastMember[];
  supperMeetingId: string;
  localityId: string;
  localityName: string;
  countryName: string;
  /** Postal address, one line per "\n". */
  address: string;
}

/** "Julián & Fiorella Vitale" / "Alicia Benítez". */
export const householdName = (h: CastHousehold): string =>
  h.spouse ? `${h.householder} & ${h.spouse} ${h.surname}` : `${h.householder} ${h.surname}`;

/** "Matías, Valeria & Ignacio" (card subtitles, family names). */
export const childrenText = (names: readonly string[]): string =>
  names.length < 2 ? (names[0] ?? '') : `${names.slice(0, -1).join(', ')} & ${names[names.length - 1] ?? ''}`;

/** "Vitale, Julián & Fiorella" (bookmark titles). */
export const bookmarkTitle = (h: CastHousehold): string =>
  h.spouse ? `${h.surname}, ${h.householder} & ${h.spouse}` : `${h.surname}, ${h.householder}`;

const BAHIA_BLANCA_LINE = 'Bahia Blanca Provincia de Buenos Aires';

type Spec = [
  householder: string,
  spouse: string,
  surname: string,
  children: string[],
  supperMeetingId: string,
  born: [string, string],
  childrenBorn?: string[],
];

/* Card order of Locality_Details/default; supper meeting 1210 "Zapiola (Main Meeting Room)", 9202 "Patagonia", 9203
   "Ingeniero White" (the households of each list, SupperMeeting_Details / SupperMeeting_Carousel captures). */
const SPECS: Spec[] = [
  [
    'Julián',
    'Fiorella',
    'Vitale',
    ['Matías', 'Valeria', 'Ignacio'],
    '1210',
    ['14 Mar 1974', '2 Sep 1977'],
    ['21 Jun 2001', '8 Nov 2004', '30 Jan 2008'],
  ],
  ['Jorge', 'Nora', 'Pérez', [], '9203', ['5 May 1962', '19 Oct 1965']],
  [
    'Leo',
    'Paula',
    'Rojas',
    ['Martín', 'Joaquín', 'Victoria', 'Isabel'],
    '9203',
    ['', '12 Feb 1980'],
    ['3 Apr 2005', '17 Jul 2009', '9 Dec 2011', '25 Aug 2015'],
  ],
  [
    'Juan',
    'Rosa',
    'Molina',
    ['Camila', 'Andrés', 'Ramiro', 'Clara'],
    '1210',
    ['28 Jan 1958', '11 Jun 1960'],
    ['4 Mar 1985', '22 Sep 1987', '15 May 1990', '7 Feb 1993'],
  ],
  ['Diego', 'Natalia', 'Acosta', [], '1210', ['9 Aug 1990', '27 Mar 1992']],
  ['Darío', 'Lorena', 'Medina', ['Bruno'], '1210', ['16 Dec 1984', '3 Jul 1986'], ['20 Oct 2014']],
  [
    'Néstor',
    'Ana',
    'Castillo',
    ['Noé', 'Eva', 'Facundo'],
    '9203',
    ['1 Apr 1979', '13 Nov 1981'],
    ['6 Jun 2008', '18 Feb 2011', '29 Sep 2016'],
  ],
  [
    'Gustavo',
    'Laura',
    'Torres',
    ['Lucas', 'Elena', 'Inés'],
    '9202',
    ['24 Oct 1976', '8 Jan 1979'],
    ['12 May 2006', '2 Mar 2009', '19 Aug 2013'],
  ],
  [
    'Fernando',
    'Patricia',
    'Flores',
    ['Emilia', 'Agustín', 'Tomás', 'Benjamín', 'Martina'],
    '9202',
    ['30 Jun 1975', '15 Apr 1978'],
    ['10 Feb 2003', '26 Jul 2005', '4 Nov 2007', '21 Jan 2010', '13 Jun 2014'],
  ],
  ['Mario', 'Silvia', 'Correa', [], '9203', ['7 Sep 1955', '22 Dec 1957']],
  ['Raúl', 'Teresa', 'Ortega', [], '9202', ['18 Mar 1950', '2 Aug 1953']],
  [
    'Oscar',
    'Mónica',
    'Blanco',
    ['Julia', 'Emilio', 'Sofía', 'Esteban'],
    '1210',
    ['11 Nov 1972', '5 Feb 1975'],
    ['14 Apr 2000', '29 Oct 2002', '8 Mar 2006', '17 Dec 2009'],
  ],
  ['Alicia', '', 'Benítez', ['Mariano'], '9202', ['23 May 1949', ''], ['14 Feb 1975']],
  ['Marta', '', 'Silva', [], '1210', ['9 Jan 1946', '']],
  ['Héctor', 'Norma', 'Muñoz', [], '1210', ['27 Jul 1952', '14 Oct 1954']],
  [
    'Rubén',
    'Olga',
    'Sánchez',
    ['Belén', 'Gisela'],
    '1210',
    ['3 Dec 1968', '19 Jun 1970'],
    ['8 Sep 1996', '24 Feb 1999'],
  ],
  [
    'Carlos',
    'Andrea',
    'Herrera',
    ['Iván', 'Lola'],
    '1210',
    ['12 Aug 1983', '30 Jan 1985'],
    ['17 May 2012', '5 Nov 2016'],
  ],
  [
    'Adrián',
    'Celia',
    'Suárez',
    ['Mateo', 'Antonia'],
    '1210',
    ['21 Feb 1987', '9 Sep 1988'],
    ['2 Jul 2015', '26 Mar 2019'],
  ],
  [
    'Federico',
    'Romina',
    'Juárez',
    ['Paz', 'Josefina'],
    '9202',
    ['6 Oct 1982', '18 Apr 1984'],
    ['11 Jan 2010', '29 Aug 2013'],
  ],
  [
    'Pedro',
    'Gabriela',
    'Gallardo',
    ['Santiago', 'Ema'],
    '9203',
    ['14 Jun 1977', '1 Dec 1979'],
    ['23 Oct 2004', '7 May 2011'],
  ],
  [
    'Ricardo',
    'Irene',
    'Villalba',
    ['Simón', 'Fabián', 'Eugenia'],
    '9202',
    ['25 Sep 1971', '10 Mar 1974'],
    ['16 Jul 1998', '3 Feb 2001', '20 Nov 2005'],
  ],
  [
    'Alberto',
    'Noelia',
    'Ferreyra',
    ['Luca', 'Micaela'],
    '9202',
    ['8 Apr 1989', '27 Nov 1990'],
    ['15 Jan 2017', '4 Aug 2020'],
  ],
  ['José', 'Rita', 'Figueroa', [], '1210', ['31 Jan 1948', '12 May 1951']],
];

/* Addresses with the captured word lengths and line breaks (HouseholdCarousel dom/default.html slides 1-4), so they
   wrap as on TST; the other households get a short one. */
const ADDRESSES: Record<number, string> = {
  0: `120 Las Margaritas\n${BAHIA_BLANCA_LINE}\n8000`,
  1: `312 Pasaje Darregueira\n${BAHIA_BLANCA_LINE}\nB8000`,
  2: '418 Rivadavia,\nBahia Blanca Buenos Aires Province',
  3: `860 Los Tamarindos\n${BAHIA_BLANCA_LINE}\nB8000`,
};

const born = (date: string) => (date ? `Born ${date}` : '');

/** Card 1, the Vitale household: the captured route household of HouseholdDetails / HouseholdCarousel / Photobook. */
const VITALE_ID = '42438';

export const LOCALITY_HOUSEHOLDS: CastHousehold[] = SPECS.map(
  ([householder, spouse, surname, children, supperMeetingId, parentsBorn, childrenBorn = []], i) => ({
    id: i === 0 ? VITALE_ID : String(91001 + i),
    householder,
    spouse: spouse || undefined,
    surname,
    children,
    members: [
      { first: householder, born: born(parentsBorn[0]) },
      ...(spouse ? [{ first: spouse, born: born(parentsBorn[1]) }] : []),
      ...children.map((first, c) => ({ first, born: born(childrenBorn[c] ?? '') })),
    ],
    supperMeetingId,
    localityId: LOCALITY.id,
    localityName: LOCALITY.name,
    countryName: LOCALITY.country,
    address: ADDRESSES[i] ?? `${String(100 + i * 37)} Calle Zapiola\n${BAHIA_BLANCA_LINE}`,
  }),
);

/* Card 2, the Pérez household: no children named (captured: no subtitle), three members (HouseholdCarousel slide 2):
   Nora's mother Elsa lives with them (italic life-cycle line of the captured word lengths 6 3 4 3 6). */
LOCALITY_HOUSEHOLDS[1]?.members.push({ first: 'Elsa', born: '', note: 'Living now with her family' });

/** The household of HouseholdDetails / HouseholdCarousel / Photobook (id 42438, Locality_Details card 1) and of the mock user. */
export const VITALE = LOCALITY_HOUSEHOLDS[0] as CastHousehold;

/** Outside the locality: Ana Pérez's married household (her non-member row on the Pérez household). */
export const ORTIZ: CastHousehold = {
  id: '93001',
  householder: 'Pablo',
  spouse: 'Ana',
  surname: 'Ortiz',
  children: ['Benicio'],
  members: [
    { first: 'Pablo', born: 'Born 9 Jul 1988' },
    { first: 'Ana', born: 'Born 21 Feb 1990' },
    { first: 'Benicio', born: 'Born 3 Oct 2021' },
  ],
  supperMeetingId: '0',
  localityId: '601',
  localityName: 'Rosario',
  countryName: 'Argentina',
  address: '1540 Calle Mendoza\nRosario Santa Fe\nS2000',
};

/** Julián Vitale's parents (Household_Relations), with his unmarried brother Daniel. */
export const VITALE_PARENTS: CastHousehold = {
  id: '93002',
  householder: 'Hugo',
  spouse: 'María',
  surname: 'Vitale',
  children: ['Daniel'],
  members: [
    { first: 'Hugo', born: 'Born 4 Nov 1946' },
    { first: 'María', born: 'Born 17 Jun 1949' },
    { first: 'Daniel', born: 'Born 26 Aug 1980' },
  ],
  supperMeetingId: '0',
  localityId: '602',
  localityName: 'Puerto Madryn',
  countryName: 'Argentina',
  address: '275 Avenida Roca\nPuerto Madryn Chubut\nU9120',
};

/** The household of the Profile capture (a householder's spouse in the United States; word lengths 11 1 6 4 / 4). */
export const WARD: CastHousehold = {
  id: '9002',
  householder: 'Christopher',
  spouse: 'Amanda',
  surname: 'Ward',
  children: ['Ella'],
  members: [
    { first: 'Christopher', born: 'Born 12 Apr 1983' },
    { first: 'Amanda', born: 'Born 30 Sep 1985' },
    { first: 'Ella', born: 'Born 18 Jan 2014' },
  ],
  supperMeetingId: '9301',
  localityId: '501',
  localityName: 'San Marcos',
  countryName: 'United States',
  address: '1208 Riverside Drive\nSan Marcos TX 78666',
};
/** Supper meeting of the Ward household (4 letters as captured). */
export const WARD_SUPPER_MEETING = 'Kyle';

export const ALL_HOUSEHOLDS: CastHousehold[] = [...LOCALITY_HOUSEHOLDS, ORTIZ, VITALE_PARENTS, WARD];

export const householdById = (id: string | undefined): CastHousehold | undefined =>
  ALL_HOUSEHOLDS.find((h) => h.id === id);

/** The supper meetings of the locality (Locality_Details tag "Supper Meetings"). 1210 has the recorded name of the
    GetSubdivision fixture (the captured lengths 7 5 7 5); the two others are real neighbourhoods of Bahía Blanca. */
export const SUPPER_MEETINGS = [
  { id: '1210', name: 'Zapiola (Main Meeting Room)' },
  { id: '9202', name: 'Patagonia' },
  { id: '9203', name: 'Ingeniero White' },
] as const;

export const supperMeetingName = (id: string): string => SUPPER_MEETINGS.find((s) => s.id === id)?.name ?? '';

/* Households of the Assemble halls outside Bahia Blanca (Monte Hermoso 9301 / locality 253, Alta Córdoba 9401 / 254,
   Neuquén Centro 9501 / 255; ids from the Connect2_LegacyShared mocks), so AssembleDetail lists them when a hall is
   expanded instead of an empty list after the skeleton rows. */
type HallSpec = [householder: string, spouse: string, surname: string, children: string[], street: string];
const otherHall = (
  hallId: string,
  localityId: string,
  localityName: string,
  line: string,
  firstId: number,
  specs: HallSpec[],
): CastHousehold[] =>
  specs.map(([householder, spouse, surname, children, street], i) => ({
    id: String(firstId + i),
    householder,
    spouse: spouse || undefined,
    surname,
    children,
    members: [
      { first: householder, born: '' },
      ...(spouse ? [{ first: spouse, born: '' }] : []),
      ...children.map((first) => ({ first, born: '' })),
    ],
    supperMeetingId: hallId,
    localityId,
    localityName,
    countryName: LOCALITY.country,
    address: `${street}\n${line}`,
  }));

export const OTHER_HALL_HOUSEHOLDS: CastHousehold[] = [
  ...otherHall('9301', '253', 'Monte Hermoso', 'Monte Hermoso Provincia de Buenos Aires', 93101, [
    ['Ramiro', 'Claudia', 'Peralta', ['Joaquín', 'Abril'], '215 Avenida Argentina'],
    ['Esteban', 'Mirta', 'Godoy', [], '48 Calle Faro Recalada'],
    ['Hernán', 'Paula', 'Quiroga', ['Tomás'], '730 Calle Dufaur'],
    ['Graciela', '', 'Aguirre', [], '12 Calle Ruta 78'],
  ]),
  ...otherHall('9401', '254', 'Córdoba', 'Córdoba Provincia de Córdoba', 94101, [
    ['Facundo', 'Lorena', 'Molina', ['Sofía', 'Benjamín', 'Lara'], '1180 Avenida Juan B. Justo'],
    ['Raúl', 'Adriana', 'Castro', [], '905 Calle Rodríguez Peña'],
    ['Gonzalo', 'Verónica', 'Sosa', ['Agustina'], '2214 Avenida Colón'],
    ['Silvia', '', 'Navarro', [], '377 Calle Fragueiro'],
  ]),
  ...otherHall('9501', '255', 'Neuquén', 'Neuquén Provincia del Neuquén', 95101, [
    ['Leandro', 'Carolina', 'Paz', ['Bautista', 'Emilia'], '640 Calle Belgrano'],
    ['Oscar', 'Liliana', 'Correa', [], '1520 Avenida Olascoaga'],
    ['Marcelo', 'Andrea', 'Ibáñez', ['Valentín'], '88 Calle Sarmiento'],
    ['Teresa', '', 'Villalba', [], '2301 Calle Mitre'],
  ]),
];

/** The households of a supper meeting (or Assemble hall), in card order. */
export const householdsOfSupperMeeting = (id: string): CastHousehold[] =>
  [...LOCALITY_HOUSEHOLDS, ...OTHER_HALL_HOUSEHOLDS].filter((h) => h.supperMeetingId === id);

/** The interchange locality of 252 (real town, about 105 km by road). */
export const INTERCHANGE = { id: '253', name: 'Monte Hermoso', country: 'Argentina', distance: '105 km' } as const;

/** OneSchool Global campuses of the locality (word lengths 9 4 and 9 5 6 as captured). */
export const SCHOOLS = [
  { id: '1430', name: 'OneSchool Alem' },
  { id: '1431', name: 'OneSchool Bahia Blanca' },
] as const;

/** The signed-in mock user: the eldest son of the Vitale household (not its householder). */
export const MOCK_USER = {
  firstName: 'Matías',
  lastName: 'Vitale',
  userName: 'matias.vitale',
  email: 'matias.vitale@example.com',
  accountNumber: 'AR-204517',
  homeNumber: '+54 291 555 0100',
  mobileNumber: '+54 291 555 0101',
  address: '120 Las Margaritas, Bahia Blanca, Argentina',
} as const;

/** The Profile capture's account (spouse scenario): Amanda Ward (word lengths 6 4). */
export const PROFILE_SPOUSE_NAME = 'Amanda Ward';

/** Households bookmarked by the mock user outside its locality (rows 1-3 and 5-7 of a capture of the retired legacy
    bookmark list), with the captured ScrollAnchor ids as household ids. Titles of rows 1-3 use narrow letters, as the
    captured ones. */
export const BOOKMARKED_ELSEWHERE = {
  riley: {
    id: '51207',
    title: 'Riley, Felix & Juliet',
    children: 'Ella, Matilda, Isabel, William, Lilly',
    place: ['Seattle', 'United States'],
  },
  ellis: { id: '35419', title: 'Ellis, Julian & Lilian', children: '', place: ['Auckland', 'New Zealand'] },
  fields: {
    id: '296',
    title: 'Fields, Elliot & Lillie',
    children: 'Ruby, Noah',
    place: ['San Marcos', 'United States'],
  },
  whitcombe: {
    id: '6299',
    title: 'Whitcombe, Peter & Helen',
    children: 'Thomas, Michael',
    place: ['Wicklow', 'Ireland'],
  },
  martinez: { id: '24824', title: 'Martínez, Elisa', children: '', place: ['Rosario', 'Argentina'] },
  ashcroft: {
    id: '15715',
    title: 'Ashcroft, Michael & Cordelia',
    children: 'Abigail',
    place: ['Bristol', 'United Kingdom'],
  },
} as const;

/** Bookmarked places: two supper meetings and two localities elsewhere in Argentina (real towns). */
export const BOOKMARKED_PLACES = {
  mainHall: 'Lules (Main Hall)',
  supperMeeting: 'Villa Elisa Oeste',
  locality1: 'Villa del Totoral',
  locality2: 'San Isidro de Lules',
} as const;

const ascii = (s: string) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

/** A fictional email of the reserved example.com domain. */
export const exampleEmail = (first: string, last: string): string => `${ascii(first)}.${ascii(last)}@example.com`;
