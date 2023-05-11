import { Story, Meta } from '@storybook/react';
import FireOnlyOnServerSide from '.';

export default {
  title: 'FireOnlyOnServerSide',
  component: FireOnlyOnServerSide
} as Meta;

export const Default: Story = () => <FireOnlyOnServerSide>YO</FireOnlyOnServerSide>;
