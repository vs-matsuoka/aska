import { Story, Meta } from '@storybook/react';
import LoopAnimationExample, { LoopAnimationExampleProps } from '.';

export default {
  title: 'LoopAnimationExample',
  component: LoopAnimationExample
} as Meta;

export const Default: Story<LoopAnimationExampleProps> = (args) => (
  <LoopAnimationExample {...args} />
);

Default.args = {
  text: 'Exmaple'
};
