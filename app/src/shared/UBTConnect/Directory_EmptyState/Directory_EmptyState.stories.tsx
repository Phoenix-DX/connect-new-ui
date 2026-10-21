import type { Meta, StoryObj } from '@storybook/react-vite';
import { Connect_Entity } from '../lib/staticEntities';
import { Directory_EmptyState } from './Directory_EmptyState';

const meta = {
  title: 'Shared/UBTConnect/Directory_EmptyState',
  component: Directory_EmptyState,
} satisfies Meta<typeof Directory_EmptyState>;
export default meta;
type Story = StoryObj<typeof meta>;

/** No capture (compiled view only): supper meetings of a locality. */
export const SupperMeetings: Story = { args: { entityTypeId: Connect_Entity.SupperMeetings_aka_Subdivisions } };
/** No capture: interchanges (lower-case plural). */
export const Interchanges: Story = { args: { entityTypeId: Connect_Entity.Interchange } };
