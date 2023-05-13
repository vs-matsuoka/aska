import { Story, Meta } from '@storybook/react';
import SEO from '.';

export default {
  title: 'SEO',
  component: SEO
} as Meta;

export const Default: Story = () => <SEO />;
