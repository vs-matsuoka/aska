import { Story, Meta } from '@storybook/react';
import NewsList from '.';

export default {
  title: 'Timeline',
  component: NewsList
} as Meta;

export const Default: Story = () => <NewsList />;
