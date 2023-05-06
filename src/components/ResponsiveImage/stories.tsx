import { Story, Meta } from '@storybook/react';
import ResponsiveImage from '.';

export default {
  title: 'ResponsiveImage',
  component: ResponsiveImage
} as Meta;

export const Default: Story = () => <ResponsiveImage src="/Entry/21_Entry_text_02_shadow.png" width={480} height={105} alwaysResponsive alt="a" />;
