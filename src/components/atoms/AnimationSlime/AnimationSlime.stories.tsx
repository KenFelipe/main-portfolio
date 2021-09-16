import { Story, Meta } from '@storybook/react'
import {
  AnimationSlime,
  AnimationSlimeProps,
} from './AnimationSlime'

export default {
  title: 'Atoms/AnimationSlime',
  component: AnimationSlime,
  decorators: [
    (Story) => (
      <div
        style={{
          width: 350,
          height: 400,
          border: '1px solid #000',
        }}
      >
        <Story />
      </div>
    ),
  ],
} as Meta

const Template: Story<AnimationSlimeProps> = (args) => (
  <AnimationSlime {...args} />
)

export const Primary = Template.bind({})
Primary.storyName = 'Primary'
Primary.args = {
  viewBox: '0 0 634.33 703.22',
  d: [
    'M105.74,79.59c131.91-116.91,374.05-91.53,415-6c40.28,84.12-131.75,189.49-93,321 c35.66,121.03,210.49,130.64,206,187c-5.8,72.81-308.74,198.14-495,57C-28.55,511.83-44.96,213.15,105.74,79.59z',
    'M105.68,79.58c114.47-95,319.89-86.34,376-2c49.62,74.59-49.09,160.89-5,309 c36.65,123.11,129.58,146.57,116,202c-21.61,88.24-291.23,168.26-454,50C-29.72,516.24-48.34,207.4,105.68,79.58z',
  ],
  fill: '#991183',
}
