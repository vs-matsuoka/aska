import { Story, Meta } from '@storybook/react'
import Background from '.'

export default {
  title: 'Background',
  component: Background
} as Meta

export const Default: Story = () => <Background src="/Entry/21_Entry_pic_BG.png" />
