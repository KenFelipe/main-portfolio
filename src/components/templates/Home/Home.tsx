import clsx from 'clsx'
import {
  useTheme,
  makeStyles,
  createStyles,
  Theme,
} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { AnimationSlime } from '@/atoms/AnimationSlime/AnimationSlime'

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
  home: 'Move to Profile',
  profile: 'Move to Profile',
  works: 'Move to Works',
  contact: 'Move to Contact',
}

const data = {
  viewBox: '0 0 634.33 703.22',
  d: [
    'M105.74,79.59c131.91-116.91,374.05-91.53,415-6c40.28,84.12-131.75,189.49-93,321 c35.66,121.03,210.49,130.64,206,187c-5.8,72.81-308.74,198.14-495,57C-28.55,511.83-44.96,213.15,105.74,79.59z',
    'M105.68,79.58c114.47-95,319.89-86.34,376-2c49.62,74.59-49.09,160.89-5,309 c36.65,123.11,129.58,146.57,116,202c-21.61,88.24-291.23,168.26-454,50C-29.72,516.24-48.34,207.4,105.68,79.58z',
  ],
  fill: '#991183',
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
      position: 'relative',
    },
    profile: {
      gridArea: 'profile',
    },
    works: {
      gridArea: 'works',
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    contact: {
      gridArea: 'contact',
      position: 'relative',
    },
    debugRight: {
      position: 'absolute',
      top: 0,
      right: 0,
      zIndex: 100,
    },
    slime: {
      '&&': {
        width: '150%',
        height: '150%',
        position: 'absolute',
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

  return (
    <main className={classes.root}>
      <section className={clsx(classes.home)}>
        <h1>Home</h1>
        <Button
          color="secondary"
          className={clsx(classes.link, classes.profileLink)}
          onClick={() => goGridArea('Profile')}
        >
          {gridLinkLabel.profile}
        </Button>
        <Button
          color="secondary"
          className={clsx(classes.link, classes.worksLink)}
          onClick={() => goGridArea('Works')}
        >
          {gridLinkLabel.works}
        </Button>
        <Button
          color="secondary"
          className={clsx(classes.link, classes.contactLink)}
          onClick={() => goGridArea('Contact')}
        >
          {gridLinkLabel.contact}
        </Button>
      </section>

      <section className={clsx(classes.profile)}>
        <Button
          color="secondary"
          className={clsx(classes.link)}
          onClick={() => goGridArea('Home')}
        >
          {gridLinkLabel.home}
        </Button>
      </section>

      <section className={clsx(classes.works)}>
        <AnimationSlime className={classes.slime} {...data} />
        <Button
          color="secondary"
          className={clsx(classes.link, classes.debugRight)}
          onClick={() => goGridArea('Home')}
        >
          {gridLinkLabel.home}
        </Button>
      </section>

      <section className={clsx(classes.contact)}>
        <Button
          color="secondary"
          className={clsx(classes.link, classes.debugRight)}
          onClick={() => goGridArea('Home')}
        >
          {gridLinkLabel.home}
        </Button>
      </section>
    </main>
  )
}
