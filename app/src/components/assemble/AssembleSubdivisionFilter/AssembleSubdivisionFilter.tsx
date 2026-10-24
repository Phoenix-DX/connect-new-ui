/** @origin Connect2_Assemble_MUI.Assemble.Assemble_FilterSubdivisionByLocality */
// @os-block Connect2_Assemble_MUI.Assemble.Assemble_FilterSubdivisionByLocality
import { useEffect, useId, useState } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { OSList } from '@/components/ui/os/OSList';
import { osList } from '@/legacy/os/os-wire';
import type { SubdivisionsItem } from '@/lib/legacyShared/structures';
import { RadioButtonListItem } from '@/components/ui/RadioButtonListItem';
import { Spinner } from '@/components/ui/Spinner';
import { InputWithIcon } from '@/components/ui/InputWithIcon';
import { Separator } from '@/components/ui/Separator';
import { getLocality, listFilterByName } from '@/lib/assemble/actions';

export interface AssembleSubdivisionFilterProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** LocalityId (Long Integer, default 0). */
  localityId?: string;
  /** SelectedSubdivisionId (Long Integer, default 0): the checked radio. */
  selectedSubdivisionId?: string;
  /** Event SelectedSubdivision(SubdivisionId). */
  onSelectedSubdivision?: (subdivisionId: string) => void;
}

/** Supper meetings of a locality with a search (p:migration/blocks/sources/Connect2_Assemble_MUI.Assemble
    .Assemble_FilterSubdivisionByLocality.mvc.js; model :1-94, view :162-392, controller :396-650). IsFetchingSubdivisions
    (default True) shows the Spinner; then DIV_SuperMeetings: InputWithIcon (icon search, Input_SearchTearn "Search Supper
    Meetings", max 50, style border-width 0 0 1px 0), Separator Space none, and the list (animated) of
    RadioButtonListItem (SelectedValue = SelectedSubdivisionId, RadioButtonValue = Id; title colour primary for the main
    hall, else neutral-10) or "No results found". OnReady (:540-590): WasCurrentViewRestoredFromCache is False in the
    clone (no view cache) → FetchSubdivisions = GetLocality → lists. OnChange_SearchTerm (:420-490): "" → GetLocality
    again, else ListFilter by name. A radio's Selected raises SelectedSubdivision(Id) (:325-340). */
export function AssembleSubdivisionFilter({
  id,
  localityId = '0',
  selectedSubdivisionId = '0',
  onSelectedSubdivision,
}: AssembleSubdivisionFilterProps) {
  const generatedId = useId();
  const scope = (id ?? generatedId).replace('$', '');
  const [fullSubdivisionsList, setFullSubdivisionsList] = useState<SubdivisionsItem[]>([]);
  const [filteredSubdivisionsList, setFilteredSubdivisionsList] = useState<SubdivisionsItem[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isFetchingSubdivisions, setIsFetchingSubdivisions] = useState(true);

  // OnReady → FetchSubdivisions (:500-535).
  useEffect(() => {
    let alive = true;
    void getLocality(localityId).then((localityInformation) => {
      if (!alive) return;
      const list = osList(localityInformation.LocalitySubdivisionsList);
      setFullSubdivisionsList(list);
      setFilteredSubdivisionsList(list);
      setIsFetchingSubdivisions(false);
    });
    return () => {
      alive = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- OnReady runs once (LocalityId is read then)
  }, []);

  const onChangeSearchTerm = async (value: string) => {
    setSearchTerm(value);
    if (value === '') {
      const list = osList((await getLocality(localityId)).LocalitySubdivisionsList);
      setFullSubdivisionsList(list);
      setFilteredSubdivisionsList(list);
    } else setFilteredSubdivisionsList(listFilterByName(fullSubdivisionsList, value));
  };

  return (
    <OSBlock name="Assemble.Assemble_FilterSubdivisionByLocality" id={id}>
      {isFetchingSubdivisions ? (
        <Spinner showLoader={isFetchingSubdivisions} />
      ) : (
        <div data-container="" id={`${scope}-DIV_SuperMeetings`}>
          <InputWithIcon
            icon={<i className="icon fa fa-search fa-1x" data-icon="" />}
            input={
              <input
                aria-required="false"
                autoComplete="off"
                className="form-control OSFillParent"
                data-input=""
                id={`${scope}-Input_SearchTearn`}
                maxLength={50}
                placeholder="Search Supper Meetings"
                style={{ borderWidth: '0px 0px 1px 0px' }}
                type="search"
                value={searchTerm}
                onChange={(event) => void onChangeSearchTerm(event.target.value)}
              />
            }
          />
          <Separator space="none" />
          {filteredSubdivisionsList.length > 0 ? (
            <OSList
              source={filteredSubdivisionsList}
              keyOf={(s) => s.Id}
              className="list list-group OSFillParent"
              animateItems
            >
              {(s) => (
                <div className="padding-y-s padding-x-base" data-container="">
                  <RadioButtonListItem
                    selectedValue={selectedSubdivisionId}
                    radioButtonValue={s.Id}
                    onSelected={() => onSelectedSubdivision?.(s.Id)}
                  >
                    <span
                      className="font-regular"
                      style={{ color: s.IsMainHall ? 'var(--color-primary)' : 'var(--color-neutral-10)' }}
                    >
                      {s.Name}
                    </span>
                  </RadioButtonListItem>
                </div>
              )}
            </OSList>
          ) : (
            <div className="margin-x-base margin-y-base" data-container="" id={`${scope}-DIV_NoResultsFound`}>
              No results found
            </div>
          )}
        </div>
      )}
    </OSBlock>
  );
}
