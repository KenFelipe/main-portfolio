import React, { useState } from 'react'
import { isMobile, MobileView } from 'react-device-detect'
import clsx from 'clsx'
import {
  useTheme,
  makeStyles,
  createStyles,
  Theme,
} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { AnimationSlime } from '@/atoms/AnimationSlime/AnimationSlime'
import { WorkPanel } from '@/organisms/WorkPanel/WorkPanel'
import { blob, highlightClass } from '@/utils/blobData'
import { worksMock } from './Home.mock'

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
    // prettier-ignore
    '@global': !isMobile ? {
      '*::-webkit-scrollbar': {
        display: 'none'
      },
    } : {},
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
      backgroundColor: '#E8E7E3',
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
    slime: {
      position: 'absolute',
      transition: 'all 700ms ease',
    },
    profileSlime: {
      ...blob.profile.style,
    },
    worksSlime: {
      ...blob.works.style,
    },
    contactSlime: {
      ...blob.contact.style,
    },
    content: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      zIndex: 20,
      overflowY: 'scroll',
    },
  }),
)

// eslint-disable-next-line react/display-name
const WorksPanels = React.memo(() => {
  const n = 14
  return (
    <Grid container justifyContent="flex-start" spacing={3}>
      {[...Array(n)].map((_, i) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
          <WorkPanel {...worksMock[i]} />
        </Grid>
      ))}
    </Grid>
  )
})

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
            [highlightClass]: highlight.profile,
          })}
          {...blob.profile.svg}
        />

        <div className={classes.content}>
          <Container>
            <WorksPanels />
          </Container>
        </div>

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
            [highlightClass]: highlight.works,
          })}
          {...blob.works.svg}
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
            [highlightClass]: highlight.contact,
          })}
          {...blob.contact.svg}
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
