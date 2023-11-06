import { Story, Meta } from '@storybook/react';
import MoviesPage from '.';

export default {
  title: 'MoviesPage',
  component: MoviesPage
} as Meta;

export const Default: Story = () => <MoviesPage />;
