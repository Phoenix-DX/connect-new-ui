# SectionSeparator

OutSystems: `UBTConnect.App_Common_Blocks.SectionSeparator` · pack
`migration/blocks/UBTConnect.App_Common_Blocks.SectionSeparator.md`

Inputs, events, placeholders: none. Markup: one CustomContainer, background neutral-4, padding top xs (UBTConnect's
copies of UBT_Color / UBT_Size: values from the captured `background-neutral-4 padding-top-xs`, see
`../lib/staticEntities.ts`). Same markup on every capture (ContactUsDetails, ContactUsMenu, Menu, Profile, Search,
Services).

## Captured variants (1 distinct in the pack; 2 tested)

| Capture | Source                   | What it shows              |
| ------- | ------------------------ | -------------------------- |
| v1      | ContactUsDetails/default | pack: wrapper only         |
| v2      | ContactUsDetails/default | whole, the CustomContainer |
