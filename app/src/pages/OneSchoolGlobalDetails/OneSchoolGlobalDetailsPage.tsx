import { useMemo } from 'react';
import { useSearchParams } from 'react-router';
import { DetailLayout } from '@/components/layout';
import { BottomBar } from '@/components/layout/BottomBar';
import { CommonUiLayout } from '@/components/layout/CommonUiLayout';
import { CustomText } from '@/components/ui/CustomText';
import { OneSchoolGlobalDetailsContainer } from '@/containers/OneSchoolGlobalDetails/OneSchoolGlobalDetailsContainer';
import { useNavigateBack } from '@/platform/navigation';
import { readOneSchoolGlobalDetailsInputs } from './inputs';

/** @origin UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails
    The detail page of a school: the detail layout titled "OneSchool Global" with the school details as content. The
    school details (SubLayout_DirectoryDetailScreen with the card, the actions menu and the content, the data action
    and its variables) are the container OneSchoolGlobalDetails (OneSchoolGlobalDetails_Block, instance $b3), which
    OneSchoolGlobalCarousel renders too. TST moved them to the block on 2026-10-27; the re-capture of 2026-10-29 has the
    block wrapper and the block's aliases (OneSchoolGlobalCarousel Q1 (a), user 2026-10-29). The screen gives the block
    its view cache flag (IsRestoredFromCache), which the container reads itself. The bottom bar and
    CommonUI_InsideLayout are in the layout. */
export default function OneSchoolGlobalDetails() {
  const [params] = useSearchParams();
  const inputs = useMemo(() => readOneSchoolGlobalDetailsInputs(params), [params]);
  const navigateBack = useNavigateBack();

  return (
    <DetailLayout
      id="$b1"
      onBack={navigateBack}
      headerTitle={<CustomText id="$b2" inText="OneSchool Global" />}
      content={<OneSchoolGlobalDetailsContainer id="$b3" oneSchoolGlobalId={inputs.In_OneSchoolGlobalId} />}
      bottom={<BottomBar id="$b4" />}
      commonUI={<CommonUiLayout id="$b5" />}
    />
  );
}
