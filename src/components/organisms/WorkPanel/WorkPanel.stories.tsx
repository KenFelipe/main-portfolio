import { Story, Meta } from '@storybook/react'
import { WorkPanel, WorkPanelProps } from './WorkPanel'

export default {
  title: 'Organisms/WorkPanel',
  component: WorkPanel,
  decorators: [
    Story => (
      <div style={{ maxWidth: '320px' }}>
        <Story />
      </div>
    ),
  ],
} as Meta

const Template: Story<WorkPanelProps> = args => (
  <WorkPanel {...args} />
)

export const Primary = Template.bind({})
Primary.storyName = 'Primary'

Primary.args = {
  image: 'https://source.unsplash.com/random/360/?programming',
  description: 'thumbnail of programming',
}
