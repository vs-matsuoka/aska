import { Story, Meta } from '@storybook/react';
import EntriesPage from '.';

export default {
  title: 'EntriesPage',
  component: EntriesPage
} as Meta;

export const Default: Story = () => <EntriesPage />;
