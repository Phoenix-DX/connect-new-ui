import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { testCapturedVariants } from '../../test/capturedVariants';
import { HostSurvey_PillItem } from './HostSurvey_PillItem';
import * as stories from './HostSurvey_PillItem.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('HostSurvey_PillItem', () => {
  testCapturedVariants(stories, captures);

  it('enabled: In_ExtendedClass appended, In_ExtendedStyle applied, base icon size by default', () => {
    const { container } = render(
      <HostSurvey_PillItem inIconClass="orbit-icon-home" inExtendedClass="my-pill" inExtendedStyle="color: red;" />,
    );
    const pill = container.querySelector('.orbit-host-survey-pill') as HTMLElement;
    expect(pill.className).toBe('orbit-host-survey-pill my-pill');
    expect(pill.style.color).toBe('red');
    expect(container.querySelector('i')?.className).toBe('icon orbit-icon-home font-size-base');
  });

  it('disabled: ignores In_ExtendedClass and In_ExtendedStyle', () => {
    const { container } = render(
      <HostSurvey_PillItem inIsDisabled inExtendedClass="my-pill" inExtendedStyle="color: red;" />,
    );
    const pill = container.querySelector('.orbit-host-survey-pill') as HTMLElement;
    expect(pill.className).toBe('orbit-host-survey-pill orbit-host-survey-pill-disabled');
    expect(pill.getAttribute('style') ?? '').toBe('');
  });
});
