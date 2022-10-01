import { Story, Meta, ComponentStoryObj } from '@storybook/react'
import { ParallaxProvider } from 'react-scroll-parallax'
import ParallaxExample from '.'

export default {
  title: 'ParallaxExample',
  component: ParallaxExample
} as Meta

export const Default: ComponentStoryObj<typeof ParallaxExample> = {
  decorators: [
    (Story) => (
      <ParallaxProvider>
        <Story />
      </ParallaxProvider>
    )
  ]
}

Default.args = {}
