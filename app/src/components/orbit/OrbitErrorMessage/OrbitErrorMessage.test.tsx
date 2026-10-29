import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { OrbitErrorMessage } from './OrbitErrorMessage';

describe('OrbitErrorMessage', () => {
  it('closed: renders no popup', () => {
    render(<OrbitErrorMessage id="b1-$b6" isShowMessage={false} displayMessage="x" onClickedOk={vi.fn()} />);
    expect(document.getElementById('b1-b6-UnknownErrorPopup')).toBeNull();
  });

  it('open: the portalled popup with the heading, the message and Ok', () => {
    const onClickedOk = vi.fn();
    render(
      <div className="backwards-compatibility">
        <OrbitErrorMessage
          id="b1-$b6"
          isShowMessage
          displayMessage="Unable to read QR code, please try again."
          onClickedOk={onClickedOk}
        />
      </div>,
    );
    const popup = document.getElementById('b1-b6-UnknownErrorPopup');
    expect(popup).toHaveClass('popup-dialog', 'onTop', 'padding-x-l', 'padding-y-l');
    expect(popup?.closest('.portal-class')).toHaveClass('backwards-compatibility');
    expect(screen.getByText('Oops! Something went wrong')).toBeInTheDocument();
    expect(screen.getByText('Unable to read QR code, please try again.')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Ok'));
    expect(onClickedOk).toHaveBeenCalledOnce();
  });
});
