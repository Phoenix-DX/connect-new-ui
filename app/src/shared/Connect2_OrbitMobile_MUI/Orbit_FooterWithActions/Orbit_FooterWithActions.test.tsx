import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Orbit_FooterWithActions } from './Orbit_FooterWithActions';

/* Never captured: the markup follows the compiled view (Orbit_FooterWithActions.mvc.js :206-326). */
describe('Orbit_FooterWithActions', () => {
  it('defaults: top shadow, buttons pushed right, only the primary button', () => {
    const { container } = render(<Orbit_FooterWithActions placeholderPrimary="Submit" />);
    const footer = container.querySelector('.orbit-footer-with-buttons') as HTMLElement;
    expect(footer.style.boxShadow).toBe('0px -2px 6px 0px rgba(0,0,0,10%)');
    expect(footer.style.justifyContent).toBe('flex-end');
    expect(footer.children).toHaveLength(1);
    expect(footer.firstElementChild?.className).toBe(
      'orbit-footer-with-buttons-btn orbit-footer-with-buttons-btn-right ',
    );
  });

  it('secondary button, small buttons, extended classes and style; raises the click events', () => {
    const onClickSecondaryButton = vi.fn();
    const onClickPrimaryButton = vi.fn();
    const { container } = render(
      <Orbit_FooterWithActions
        inHasSecondaryButton
        inHasTopShadow={false}
        inIsSmallButtons
        inExtendedClass="host-survey-footer"
        inExtendedClassPrimary="primary"
        inExtendedClassSecondary="secondary"
        inExtendedStyle="padding-top: 8px;"
        placeholderSecondary="Back"
        placeholderPrimary="Next"
        onClickSecondaryButton={onClickSecondaryButton}
        onClickPrimaryButton={onClickPrimaryButton}
      />,
    );
    const footer = container.querySelector('.orbit-footer-with-buttons') as HTMLElement;
    expect(footer.className).toBe('orbit-footer-with-buttons host-survey-footer');
    expect(footer.getAttribute('style')).toBe('padding-top: 8px;');
    const [left, right] = [...footer.children];
    expect(left?.className).toBe(
      'orbit-footer-with-buttons-btn orbit-footer-with-buttons-btn-left orbit-footer-with-buttons-btn-small secondary',
    );
    expect(right?.className).toBe(
      'orbit-footer-with-buttons-btn orbit-footer-with-buttons-btn-right orbit-footer-with-buttons-btn-small primary',
    );
    fireEvent.click(screen.getByText('Back'));
    fireEvent.click(screen.getByText('Next'));
    expect(onClickSecondaryButton).toHaveBeenCalledOnce();
    expect(onClickPrimaryButton).toHaveBeenCalledOnce();
  });
});
