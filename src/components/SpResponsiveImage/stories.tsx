import { Story, Meta } from '@storybook/react';
import SpResponsiveImage from '.';

export default {
  title: 'SpResponsiveImage',
  component: SpResponsiveImage
} as Meta;

export const Default: Story = () => <SpResponsiveImage src="/Entry/21_Entry_text_02_shadow.png" width={480} height={105} alt="a" />;
