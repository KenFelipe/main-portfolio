import { useState } from 'react'
import clsx from 'clsx'
import {
  makeStyles,
  createStyles,
  useTheme,
  Theme,
} from '@material-ui/core/styles'
import Fade from '@material-ui/core/Fade'
import Typography from '@material-ui/core/Typography'
import GitHubIcon from '@material-ui/icons/GitHub'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import { IconButton } from '@/atoms/IconButton/IconButton'

export type WorkPanelProps = {
  image: string
  description: string
  github: string
  webpage: string
  details: string
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      overflow: 'hidden',
      position: 'relative',
      height: 0,
      paddingTop: '75%',
      borderRadius: 8,
      boxShadow: theme.shadows[4],
    },
    content: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    },
    figure: {
      margin: 0,
      padding: 0,
      transform: 'scale(1.0)',
      '&.over': {
        transform: 'scale(1.1)',
      },
    },
    image: {
      width: '100%',
      height: '100%',
    },
    flex: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    fade: {
      alignItems: 'center',
      background: theme.palette.primary.dark,
    },
    buttons: {
      alignItems: 'stretch',
      '& > *': {
        margin: theme.spacing(0.5, 0),
      },
    },
    transition: {
      transition: 'all 0.7s ease',
    },
  }),
)

export const WorkPanel = ({
  image,
  description,
  github,
  webpage,
  details,
}: WorkPanelProps) => {
  const classes = useStyles()
  const theme = useTheme<Theme>()

  const [over, setOver] = useState(false)

  const handleEnter = () => {
    setOver(true)
  }

  const handleLeave = () => {
    setOver(false)
  }

  return (
    <article
      className={classes.root}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <figure
        className={clsx(
          classes.content,
          classes.figure,
          classes.transition,
          { over },
        )}
      >
        <img
          className={classes.image}
          src={image}
          alt={description}
        />
      </figure>

      <Fade
        in={over}
        timeout={theme.transitions.duration.complex}
      >
        <div
          className={clsx(
            classes.content,
            classes.flex,
            classes.fade,
          )}
        >
          <Typography>Fade Screen</Typography>

          <div className={clsx(classes.flex, classes.buttons)}>
            <IconButton
              color="primary"
              icon={<GitHubIcon />}
              href={github}
            >
              Source Code
            </IconButton>
            <IconButton
              color="primary"
              icon={<ArrowForwardIosIcon />}
              href={webpage}
            >
              View Webpage
            </IconButton>
            <IconButton
              color="primary"
              icon={<ArrowForwardIosIcon />}
              href={details}
            >
              View Details
            </IconButton>
          </div>
        </div>
      </Fade>
    </article>
  )
}
