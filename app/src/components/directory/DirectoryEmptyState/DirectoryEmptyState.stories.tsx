import type { Meta, StoryObj } from '@storybook/react-vite';
import { Connect_Entity } from '@/lib/ubtConnect/staticEntities';
import { DirectoryEmptyState } from './DirectoryEmptyState';

const meta = {
  title: 'Shared/UBTConnect/Directory_EmptyState',
  component: DirectoryEmptyState,
} satisfies Meta<typeof DirectoryEmptyState>;
export default meta;
type Story = StoryObj<typeof meta>;

/** No capture (compiled view only): supper meetings of a locality. */
export const SupperMeetings: Story = { args: { entityTypeId: Connect_Entity.SupperMeetings_aka_Subdivisions } };
/** No capture: interchanges (lower-case plural). */
export const Interchanges: Story = { args: { entityTypeId: Connect_Entity.Interchange } };
