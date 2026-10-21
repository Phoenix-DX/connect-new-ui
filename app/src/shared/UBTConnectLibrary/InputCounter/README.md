# InputCounter

OutSystems: `UBTConnectLibrary.ConnectPatterns.InputCounter` · pack
`migration/blocks/UBTConnectLibrary.ConnectPatterns.InputCounter.md`

| Input            | Type    | Prop              | Default |
| ---------------- | ------- | ----------------- | ------- |
| In_InputId       | Text    | `inInputId`       | `''`    |
| In_InitialLength | Integer | `inInitialLength` | `0`     |

Events: none. Placeholders: none.

Markup (view :150-210 of the ContactByEmailMember copy): a CustomContainer (`text-align-right`, neutral-7, semi-bold, xxs)
that contains the expression `CurrentLength + "/" + MaxLength`.

Behaviour:

- OnInitialize sets CurrentLength = In_InitialLength.
- OnReady runs the LimitMaxLenth JS (:436-449) on the element `In_InputId`. Every `input` event cuts the value to its
  `maxlength` and sets CurrentLength.
- MaxLength = the `maxlength` attribute of the element. The captures drop that attribute. The masks `•••••` / `••••••`
  match `0/100` and `0/1000`, the maxLength of the ContactByEmailForm inputs.

## Captured variants (1 distinct in the pack; 2 tested)

| Capture | Source                       | What it shows                                |
| ------- | ---------------------------- | -------------------------------------------- |
| v1      | ContactByEmailMember/default | pack: wrapper only                           |
| v2      | ContactByEmailMember/default | whole: the CustomContainer, the masked count |

## Not settled

- OnReady runs once (the original JS node).
- In the React component, MaxLength stays 0 in two cases: the element is missing (the original JS throws), or `maxlength`
  is missing or not numeric. The OutSystems Integer conversion of NaN is unknown.
