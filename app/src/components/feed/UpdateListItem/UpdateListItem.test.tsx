import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { testCapturedVariants } from '@/shared/test/capturedVariants';
import { Connect_UpdateTypeId, Gender } from '@/shared/UBTConnectLibrary/lib/staticEntities';
import { UpdateListItem } from './UpdateListItem';
import * as stories from './UpdateListItem.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('Update_ListItem', () => {
  testCapturedVariants(stories, captures);

  it('ShowImage (not captured): Columns_Three with a double avatar for twins, the image URL, or the initials', () => {
    const twins = render(
      <UpdateListItem
        inTypeUpdateFeedItem={Connect_UpdateTypeId.Birth}
        inInitialsList={[
          { Initials: 'A', Gender: Gender.MALE },
          { Initials: 'B', Gender: Gender.FEMALE },
        ]}
      />,
    );
    expect(twins.container.querySelector('[data-block="BasePatterns.Columns_Three"]')).not.toBeNull();
    expect(twins.container.querySelector('[data-block="ConnectPatterns.AvatarDouble"]')).not.toBeNull();
    const url = render(
      <UpdateListItem inAvatarImageURL="/img/a.png" inTypeUpdateFeedItem={Connect_UpdateTypeId.Marriage} />,
    );
    expect(url.container.querySelector('[data-block="ConnectPatterns.AvatarImage"]')).not.toBeNull();
    expect(url.container.querySelector('.background-yellow-lightest')).not.toBeNull();
  });

  it('a taken name is italic; the birth type replaces the tag text; disabled rows have no menu; click raises OnClick', () => {
    const onClick = vi.fn();
    const { container, getByText } = render(
      <UpdateListItem
        showImage={false}
        isEnabled={false}
        inTypeUpdateFeedItem={Connect_UpdateTypeId.Taken}
        inName="Someone"
        inDate="2025-10-12"
        onOnClick={onClick}
      />,
    );
    expect(getByText('Someone').parentElement).toHaveClass('italic');
    expect(getByText("Lord's Day, 12 Oct 2025")).toBeInTheDocument();
    expect(container.querySelector('[data-block="ConnectCorePatterns.ContextMenu"]')).toBeNull();
    expect(container.querySelector('.background-neutral-3')).not.toBeNull();
    fireEvent.click(getByText('Someone'));
    expect(onClick).toHaveBeenCalled();
    const twins = render(
      <UpdateListItem showImage={false} inTypeUpdateFeedItem={Connect_UpdateTypeId.Birth} inBirthType="Twins" />,
    );
    expect(twins.getByText('Twins')).toBeInTheDocument();
    expect(twins.container.querySelector('.background-pink-non-standard')).not.toBeNull();
  });
});
