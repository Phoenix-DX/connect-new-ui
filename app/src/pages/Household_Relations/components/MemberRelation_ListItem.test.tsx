import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { MemberRelation_ListItem } from './MemberRelation_ListItem';

/* The relation row from props. Fictional relative. */
function renderItem(props: Parameters<typeof MemberRelation_ListItem>[0] = {}) {
  const onOnClickPerson = vi.fn();
  render(
    <MemberRelation_ListItem
      inTitle="Alicia Benítez"
      inRelation="Mother"
      inFormattedLocality="Salta, Argentina"
      inDeceasedCaption="Died 12 May 2020"
      placeholderLeft={<span>avatar</span>}
      actions={<span>chevron</span>}
      onOnClickPerson={onOnClickPerson}
      {...props}
    />,
  );
  return onOnClickPerson;
}

describe('MemberRelation_ListItem', () => {
  it('shows the title, the relation, the locality and the placeholders', () => {
    renderItem();
    expect(screen.getByText('Alicia Benítez')).toBeTruthy();
    expect(screen.getByText('Mother')).toBeTruthy();
    expect(screen.getByText('Salta, Argentina')).toBeTruthy();
    expect(screen.queryByText('Died 12 May 2020')).toBeNull();
    expect(screen.getByText('avatar')).toBeTruthy();
    expect(screen.getByText('chevron')).toBeTruthy();
  });

  it('shows the deceased caption instead of the locality for a deceased relative', () => {
    renderItem({ inIsDeceased: true });
    expect(screen.getByText('Died 12 May 2020')).toBeTruthy();
    expect(screen.queryByText('Salta, Argentina')).toBeNull();
  });

  it('shows no locality line when the locality is empty', () => {
    renderItem({ inFormattedLocality: '' });
    expect(document.querySelector('.connect-icon-home_pin')).toBeNull();
  });

  it('raises OnClickPerson from the avatar only when enabled, and always from the name', () => {
    const enabled = renderItem();
    fireEvent.click(screen.getByText('avatar'));
    expect(enabled).toHaveBeenCalledTimes(1);
    document.body.innerHTML = '';
    const disabled = renderItem({ isEnabled: false });
    fireEvent.click(screen.getByText('avatar'));
    expect(disabled).not.toHaveBeenCalled();
    fireEvent.click(screen.getByText('Alicia Benítez'));
    expect(disabled).toHaveBeenCalledTimes(1);
  });
});
