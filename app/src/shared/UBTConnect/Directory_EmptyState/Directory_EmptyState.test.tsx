import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Connect_Entity } from '../lib/staticEntities';
import { Directory_EmptyState } from './Directory_EmptyState';

/* No capture: the compiled view (Directory_EmptyState.mvc.js:154-225) is the reference. */
describe('Directory_EmptyState', () => {
  it('EmptyList with the entity icon, "No <entity> found nearby" and the locality text', () => {
    const { container } = render(<Directory_EmptyState entityTypeId={Connect_Entity.Household} />);
    const root = container.firstElementChild;
    expect(root).toHaveAttribute('data-block', 'Directory_CommonBlocks.Directory_EmptyState');
    expect(root?.firstElementChild).toHaveAttribute('data-block', 'ConnectPatterns.EmptyList');
    expect(container.querySelector('.connect-icon-home')).not.toBeNull();
    expect(container).toHaveTextContent('No Household found nearby');
    expect(container).toHaveTextContent("There doesn't seem to be any household in");
    expect(container.querySelector('div[data-container] > span[data-expression]')).toHaveTextContent('this locality.');
  });
  it('Interchange is pluralized in lower case', () => {
    const { container } = render(<Directory_EmptyState entityTypeId={Connect_Entity.Interchange} location="here" />);
    expect(container).toHaveTextContent('No interchanges here');
    expect(container).toHaveTextContent("There doesn't seem to be any interchanges in");
  });
});
