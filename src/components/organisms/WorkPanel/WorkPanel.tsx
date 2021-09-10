import { useState } from 'react'
import { isMobile, MobileView } from 'react-device-detect'
import clsx from 'clsx'
import {
  makeStyles,
  createStyles,
  useTheme,
  Theme,
} from '@material-ui/core/styles'
import Fade from '@material-ui/core/Fade'
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

const iconButtonLabel = {
  github: 'Source Code',
  webpage: 'View Webpage',
  details: 'View Details',
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
    if (isMobile) return
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

      {/** Only for Mobile */}
      <MobileView>
        <a className={clsx(classes.content)} href={details} />
      </MobileView>

      {/** Only for laptop and desktop pc */}
      <Fade
        in={!isMobile && over}
        timeout={theme.transitions.duration.complex}
      >
        <div
          className={clsx(
            classes.content,
            classes.flex,
            classes.fade,
          )}
        >
          <div className={clsx(classes.flex, classes.buttons)}>
            <IconButton
              color="primary"
              icon={<GitHubIcon />}
              href={github}
            >
              {iconButtonLabel.github}
            </IconButton>
            <IconButton
              color="primary"
              icon={<ArrowForwardIosIcon />}
              href={webpage}
            >
              {iconButtonLabel.webpage}
            </IconButton>
            <IconButton
              color="primary"
              icon={<ArrowForwardIosIcon />}
              href={details}
            >
              {iconButtonLabel.details}
            </IconButton>
          </div>
        </div>
      </Fade>
    </article>
  )
}
