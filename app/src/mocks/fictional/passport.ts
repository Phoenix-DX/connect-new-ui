/* Fictional passport of the PassportScan demo (user decision I10-2 (a), 2026-10-29). Since PassportScan Q2 (a)
   (user, 2026-10-29) every build takes the picture with the real web camera: this image is only the camera's test
   double (pages/PassportScan/PassportScan.test.tsx). The fake portal (public/mock-embeds/orbit-passport.html) shows the same person.
   Nothing here is real: the name, number, dates and machine-readable zone are made up. */

const FICTIONAL_PASSPORT = {
  surname: 'HARTLEY',
  givenNames: 'CLARA JUNE',
  nationality: 'AUSTRALIAN',
  passportNumber: 'PA4821937',
  dateOfBirth: '14 MAR 1986',
  sex: 'F',
  placeOfBirth: 'BALLARAT',
  dateOfIssue: '02 SEP 2019',
  dateOfExpiry: '02 SEP 2029',
  mrz: ['P<AUSHARTLEY<<CLARA<JUNE<<<<<<<<<<<<<<<<<<<<', 'PA48219371AUS8603145F2909027<<<<<<<<<<<<<<02'],
} as const;

function passportSvg(): string {
  const p = FICTIONAL_PASSPORT;
  const field = (x: number, y: number, label: string, value: string) =>
    `<text x="${String(x)}" y="${String(y)}" font-size="11" fill="#5a6470">${label}</text>` +
    `<text x="${String(x)}" y="${String(y + 16)}" font-size="15" fill="#1c2430">${value}</text>`;
  return (
    '<svg xmlns="http://www.w3.org/2000/svg" width="640" height="420" viewBox="0 0 640 420" font-family="Arial">' +
    '<rect width="640" height="420" rx="18" fill="#eef1f4"/>' +
    '<rect x="0" y="0" width="640" height="52" rx="18" fill="#203a5c"/>' +
    '<text x="24" y="34" font-size="20" fill="#ffffff">PASSPORT - SPECIMEN FOR DEMO</text>' +
    '<rect x="24" y="76" width="150" height="190" rx="8" fill="#c9d2dc"/>' +
    '<circle cx="99" cy="140" r="38" fill="#9aa8b6"/><rect x="49" y="188" width="100" height="62" rx="30" fill="#9aa8b6"/>' +
    field(200, 86, 'Surname', p.surname) +
    field(200, 128, 'Given names', p.givenNames) +
    field(200, 170, 'Nationality', p.nationality) +
    field(420, 170, 'Passport No.', p.passportNumber) +
    field(200, 212, 'Date of birth', p.dateOfBirth) +
    field(420, 212, 'Sex', p.sex) +
    field(200, 254, 'Place of birth', p.placeOfBirth) +
    field(200, 296, 'Date of issue', p.dateOfIssue) +
    field(420, 296, 'Date of expiry', p.dateOfExpiry) +
    '<rect x="0" y="336" width="640" height="84" fill="#ffffff"/>' +
    `<text x="24" y="368" font-family="Courier New" font-size="17" fill="#1c2430">${p.mrz[0]}</text>` +
    `<text x="24" y="398" font-family="Courier New" font-size="17" fill="#1c2430">${p.mrz[1]}</text>` +
    '</svg>'
  );
}

/** The mock camera picture: a data URL of the fictional passport data page (SVG, ASCII only). */
export function fictionalPassportPhoto(): string {
  return `data:image/svg+xml;base64,${btoa(passportSvg())}`;
}
