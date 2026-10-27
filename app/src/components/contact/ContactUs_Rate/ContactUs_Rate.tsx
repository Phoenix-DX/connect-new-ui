/** @origin UBTConnect.App_Menu_ContactUs.ContactUs_Rate */
// @os-block UBTConnect.App_Menu_ContactUs.ContactUs_Rate
import { useState } from 'react';
import { ColumnsTwo } from '@/components/ui/ColumnsTwo';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { CustomText } from '@/components/ui/CustomText';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { RangeSlider } from '@/components/ui/RangeSlider';
import { UBT_Color, UBT_FontSize, UBT_FontWeight, UBT_Size } from '@/lib/ubtConnectLibrary/staticEntities';

interface ContactUs_RateProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** SelectedRate. The view does not read it (TST ContactUs_Rate.mvc.js: only the model and the debugger use it). */
  selectedRate?: number;
  /** isEnabled. Only the OnClick action of the emoji items reads it, and those items are in the False branch of the
      If UseEmoctions, which never renders. The slider does not read it. */
  isEnabled?: boolean;
  /** Event RateSelected(Rate). */
  onRateSelected?: (rate: number) => void;
}

const QUESTION_OPTIONS = {
  MarginSize: { BottomSizeId: UBT_Size.Small },
  TextOptions: { FontSize: UBT_FontSize.Small, FontWeight: UBT_FontWeight.SemiBold },
};
const LABELS_OPTIONS = { PaddingSize: { BottomSizeId: UBT_Size.Base } };
const LABEL_TEXT_OPTIONS = {
  Color: UBT_Color.Neutral10,
  FontSize: UBT_FontSize.ExtraSmall,
  FontWeight: UBT_FontWeight.Regular,
};
const RANGE_SLIDER_CONFIGS = { ShowTickMarks: true, TickMarksInterval: 1 };

/** The rating block of ContactUsDetails (TST `UBTConnect.App_Menu_ContactUs.ContactUs_Rate.mvc.js`, view :159-390,
    RangeSliderOnValueChange :425-470):
    - the question "How would you rate your current experience with Connect?" (CustomContainer, small, semi-bold);
    - the If UseEmoctions (False): the RangeSlider 1 to 10, start 0, tick marks every 1. Its ExtendedClass is
      "ubt-rating-slider--no-rate ubt-rating-slider" while CurrentRate = 0 (the handle is hidden), then
      "ubt-rating-slider";
    - the labels "Poor" and "Excellent" (Columns_Two, the right one in a Container with text-align right).
    RangeSliderOnValueChange: CurrentRate = Trunc(Value), then RateSelected(Trunc(Value)). */
export function ContactUs_Rate({ id, onRateSelected }: ContactUs_RateProps) {
  const [currentRate, setCurrentRate] = useState(0);

  const rangeSliderOnValueChange = (_rangeSliderId: string, value: number) => {
    const rate = Math.trunc(value);
    setCurrentRate(rate);
    onRateSelected?.(rate);
  };

  return (
    <OSBlock name="App_Menu_ContactUs.ContactUs_Rate" id={id}>
      <CustomContainer options={QUESTION_OPTIONS}>
        <span data-expression="">How would you rate your current experience with Connect?</span>
      </CustomContainer>
      <RangeSlider
        optionalConfigs={RANGE_SLIDER_CONFIGS}
        minValue={1}
        maxValue={10}
        startingValue={0}
        extendedClass={(currentRate === 0 ? 'ubt-rating-slider--no-rate ' : '') + 'ubt-rating-slider'}
        onValueChange={rangeSliderOnValueChange}
      />
      <CustomContainer options={LABELS_OPTIONS}>
        <ColumnsTwo
          left={<CustomText inTextOptions={LABEL_TEXT_OPTIONS} inText="Poor" />}
          right={
            <div data-container="" style={{ textAlign: 'right' }}>
              <CustomText inText="Excellent" inTextOptions={LABEL_TEXT_OPTIONS} />
            </div>
          }
        />
      </CustomContainer>
    </OSBlock>
  );
}
