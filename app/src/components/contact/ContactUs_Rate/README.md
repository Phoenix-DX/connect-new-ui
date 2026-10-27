# ContactUs_Rate

OutSystems: `UBTConnect.App_Menu_ContactUs.ContactUs_Rate` · compiled source
`UBTConnect.App_Menu_ContactUs.ContactUs_Rate.mvc.js` (TST, `migration/clarify/tools/tst_source.py show`)

| Input        | Type    | Prop           | Default |
| ------------ | ------- | -------------- | ------- |
| SelectedRate | Integer | `selectedRate` | `0`     |
| isEnabled    | Boolean | `isEnabled`    | `false` |

Event `RateSelected(Rate)` → `onRateSelected`. Placeholders: none. Used by ContactUsDetails (instance `$b8`, while
Rate_ShowRate), with SelectedRate = Rate_SelectedRate and isEnabled = not isSubmiting.

Markup (view :159-390):

- CustomContainer (margin bottom small, small semi-bold text): "How would you rate your current experience with
  Connect?".
- If UseEmoctions is False, so only the False branch renders: the OutSystems UI RangeSlider (`components/ui/RangeSlider`)
  from 1 to 10, start 0, tick marks every 1. Its ExtendedClass is "ubt-rating-slider--no-rate ubt-rating-slider"
  while CurrentRate = 0, which hides the handle (`UBTConnect.App_Menu_ContactUs.ContactUs_Rate.css`), then
  "ubt-rating-slider".
- CustomContainer (padding bottom base) > Columns_Two: CustomText "Poor" on the left, and a Container
  (`text-align: right;`) with CustomText "Excellent" on the right. Both texts are neutral-10, extra small, regular.

Behaviour: RangeSliderOnValueChange (:425-470) sets CurrentRate = Trunc(Value), then raises RateSelected(Trunc(Value)).

Not rendered on TST, so not built: the emoji items (ContactUs_RateItem) of the True branch, their OnClick (:478, the
view.

## Captured variants

None: no TST capture opens the feedback subject while signed in. The story shows the state before a rate.
