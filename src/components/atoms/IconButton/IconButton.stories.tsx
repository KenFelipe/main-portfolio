import { Story, Meta } from '@storybook/react'
import { IconButton, IconButtonProps } from './IconButton'
import GitHubIcon from '@material-ui/icons/GitHub'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'

export default {
  title: 'Atoms/IconButton',
  component: IconButton,
  decorators: [
    (Story) => (
      <div style={{ background: 'purple', padding: '12px' }}>
        <Story />
      </div>
    ),
  ],
} as Meta

const Template: Story<IconButtonProps> = (args) => (
  <IconButton {...args} />
)

export const PrimaryColor = Template.bind({})
PrimaryColor.storyName = 'Primary'
PrimaryColor.args = {
  color: 'primary',
  children: 'View Website',
  icon: <ArrowForwardIosIcon />,
  href: 'https://www.google.com',
}

export const SecondaryColor = Template.bind({})
SecondaryColor.storyName = 'Secondary'
SecondaryColor.args = {
  color: 'secondary',
  children: 'View Website',
  icon: <ArrowForwardIosIcon />,
  href: 'https://www.google.com',
}

export const GithubIcon = Template.bind({})
GithubIcon.storyName = 'With Github Icon'
GithubIcon.args = {
  color: 'primary',
  children: 'Source Code',
  icon: <GitHubIcon />,
  href: 'https://www.google.com',
}
