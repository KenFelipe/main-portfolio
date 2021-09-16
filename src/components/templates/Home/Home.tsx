import { useState } from 'react'
import clsx from 'clsx'
import {
  useTheme,
  makeStyles,
  createStyles,
  Theme,
} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { AnimationSlime } from '@/atoms/AnimationSlime/AnimationSlime'
import { blob } from '@/utils/blobData'

// export type HomeProps = {
// }

type Coor = {
  [key: string]: { x: number; y: number }
}

const coor = {
  home: { x: 100, y: 50 },
  profile: { x: 0, y: 50 },
  works: { x: 200, y: 0 },
  contact: { x: 200, y: 100 },
} as Coor

const gridLinkLabel = {
  home: 'Move to Home',
  profile: 'Move to Profile',
  works: 'Move to Works',
  contact: 'Move to Contact',
}

const goGridArea = (area: string) => {
  const x = coor[area.toLowerCase()].x
  const y = coor[area.toLowerCase()].y

  document
    .getElementsByTagName('main')[0]
    .setAttribute(
      'style',
      `transform: translate(-${x}vw, -${y}vh);`,
    )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '300vw',
      height: '200vh',
      display: 'grid',
      gridTemplateRows: 'repeat(4, 1fr)',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gridTemplateAreas: `
        ". . works"
        "profile home works"
        "profile home contact"
        ". . contact"
      `,
      position: 'fixed',
      transform: 'translate(-100vw, -50vh)', // Home
      // transform: 'translate(-0vw, -50vh)', // Profile
      // transform: 'translate(-200vw, -0vh)', // Works
      // transform: 'translate(-200vw, -100vh)', // Contact
      transition: 'transform 1s ease',
      willChange: 'transform',
    },
    home: {
      gridArea: 'home',
    },
    profile: {
      gridArea: 'profile',
    },
    works: {
      gridArea: 'works',
    },
    contact: {
      gridArea: 'contact',
    },
    gridSection: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    slime: {
      position: 'absolute',
      transition: 'all 700ms ease',
    },
    profileSlime: {
      width: '150%',
      height: '175%',
      '&.highlight': {
        fill: blob.profile.highlight,
        transform: 'translate(5%, 0)',
      },
    },
    worksSlime: {
      width: '165%',
      height: '135%',
      zIndex: 10,
      '&.highlight': {
        fill: blob.works.highlight,
        transform: 'translate(-5%, 0)',
      },
    },
    contactSlime: {
      width: '160%',
      height: '160%',
      transform: 'scaleX(-1)',
      '&.highlight': {
        fill: blob.contact.highlight,
        transform: 'scaleX(-1) translate(5%, 0)',
      },
    },
    link: {
      position: 'absolute',
      zIndex: 100,
      transition: 'all 300ms ease',
      background: 'transparent',
      color: '#000',
      '&:hover': {
        background: 'transparent',
        color: '#fff',
      },
    },
    profileLink: {
      top: '50%',
      left: 0,
      transformOrigin: 'bottom center',
      transform: 'translate(-50%, -150%) rotate(90deg)',
    },
    worksLink: {
      top: '25%',
      right: 0,
      transformOrigin: 'bottom center',
      transform: 'translate(50%, -150%) rotate(-90deg)',
    },
    contactLink: {
      top: '75%',
      right: 0,
      transformOrigin: 'bottom center',
      transform: 'translate(50%, -150%) rotate(-90deg)',
    },
  }),
)

export const Home = () => {
  const classes = useStyles()
  // const theme = useTheme()

  const [highlight, setHighlight] = useState({
    profile: false,
    works: false,
    contact: false,
  })

  const handleHover = (_slime: string) => {
    const slime = _slime.toLowerCase()
    return {
      onMouseEnter: () => {
        setHighlight((prev) => ({ ...prev, [slime]: true }))
      },
      onMouseLeave: () => {
        setHighlight((prev) => ({ ...prev, [slime]: false }))
      },
    }
  }

  return (
    <main className={classes.root}>
      <section
        className={clsx(classes.gridSection, classes.home)}
      >
        <h1>Home</h1>
        <Button
          color="secondary"
          className={clsx(classes.link, classes.profileLink)}
          onClick={() => goGridArea('Profile')}
          {...handleHover('Profile')}
        >
          {gridLinkLabel.profile}
        </Button>
        <Button
          color="secondary"
          className={clsx(classes.link, classes.worksLink)}
          onClick={() => goGridArea('Works')}
          {...handleHover('Works')}
        >
          {gridLinkLabel.works}
        </Button>
        <Button
          color="secondary"
          className={clsx(classes.link, classes.contactLink)}
          onClick={() => goGridArea('Contact')}
          {...handleHover('Contact')}
        >
          {gridLinkLabel.contact}
        </Button>
      </section>

      <section
        className={clsx(classes.gridSection, classes.profile)}
      >
        <AnimationSlime
          className={clsx(classes.slime, classes.profileSlime, {
            highlight: highlight.profile,
          })}
          {...blob.profile}
        />
        <Button
          color="secondary"
          className={clsx(classes.link)}
          onClick={() => goGridArea('Home')}
        >
          {gridLinkLabel.home}
        </Button>
      </section>

      <section
        className={clsx(classes.gridSection, classes.works)}
      >
        <AnimationSlime
          className={clsx(classes.slime, classes.worksSlime, {
            highlight: highlight.works,
          })}
          {...blob.works}
        />
        <Button
          color="secondary"
          className={clsx(classes.link)}
          onClick={() => goGridArea('Home')}
        >
          {gridLinkLabel.home}
        </Button>
      </section>

      <section
        className={clsx(classes.gridSection, classes.contact)}
      >
        <AnimationSlime
          className={clsx(classes.slime, classes.contactSlime, {
            highlight: highlight.contact,
          })}
          {...blob.contact}
        />
        <Button
          color="secondary"
          className={clsx(classes.link)}
          onClick={() => goGridArea('Home')}
        >
          {gridLinkLabel.home}
        </Button>
      </section>
    </main>
  )
}
