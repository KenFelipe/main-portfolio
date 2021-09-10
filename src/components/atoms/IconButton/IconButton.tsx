import Button from '@material-ui/core/Button'
import {
  makeStyles,
  createStyles,
  Theme,
} from '@material-ui/core/styles'

export type IconButtonProps = {
  color: 'primary' | 'secondary'
  children: string
  icon?: React.ReactNode
  href?: string
  full?: boolean
}

const useStyles = makeStyles<
  Theme,
  Pick<IconButtonProps, 'color'>
>((theme: Theme) =>
  createStyles({
    root: {
      color: ({ color }) => theme.palette[color].contrastText,
      textTransform: 'capitalize',
      borderRadius: 500,
      '&:hover': {
        backgroundColor: ({ color }) =>
          theme.palette[color].main,
      },
    },
  }),
)

export const IconButton = ({
  color = 'primary',
  children,
  icon = '',
  href = '',
  full = false,
}: IconButtonProps) => {
  const classes = useStyles({ color })

  return (
    <Button
      className={classes.root}
      variant="outlined"
      color={color}
      href={href}
      endIcon={icon}
      fullWidth={full}
    >
      {children}
    </Button>
  )
}
