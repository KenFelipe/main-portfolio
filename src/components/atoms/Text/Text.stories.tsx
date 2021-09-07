import { Story, Meta } from '@storybook/react'
import { Text, TextProps } from './Text'

export default {
  title: 'Atoms/Text',
  component: Text,
} as Meta

const Template: Story<TextProps> = args => <Text {...args} />

export const Primary = Template.bind({})
Primary.storyName = 'Primary'

Primary.args = {
  children: 'TextComponent',
}
