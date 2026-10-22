import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { BreakColumns, GutterSize } from '@/shared/osui/lib/staticEntities';
import { Columns4 } from './Columns4';

/* Never captured: classes from the compiled view (OutSystemsUI_2_23.Adaptive.Columns4.mvc.js). */
describe('Columns4', () => {
  it('default classes and four columns in order', () => {
    const { container } = render(
      <Columns4 column1={<b>1</b>} column2={<b>2</b>} column3={<b>3</b>} column4={<b>4</b>} />,
    );
    const root = container.querySelector('.columns');
    expect(root?.className).toBe('columns columns4 gutter-base tablet-break-none phone-break-none ');
    expect([...container.querySelectorAll('.columns-item')].map((c) => c.textContent)).toEqual(['1', '2', '3', '4']);
  });

  it('gutter, behaviours and ExtendedClass', () => {
    const { container } = render(
      <Columns4 gutterSize={GutterSize.Small} tabletBehavior={BreakColumns.None} extendedClass="survey-meals" />,
    );
    expect(container.querySelector('.columns')).toHaveClass('gutter-s', 'survey-meals');
  });
});
