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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '300vw',
      height: '200vh',
      display: 'grid',
      gridTemplateRows: 'repeat(4, 1fr)',
      gridTemplateColumns: 'repeat(3, 1fr)',
      // gridTemplateColumns: '1fr calc(100vw - 40px * 2) 1fr',
      gridTemplateAreas: `
        ". . works"
        "profile home works"
        "profile home contact"
        ". . contact"
      `,
      position: 'fixed',
      // transform: 'translate(-100vw, -50vh)', // Home
      // transform: 'translate(-0vw, -50vh)', // Profile
      transform: 'translate(-200vw, -0vh)', // Works
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
  }),
)

const data = {
  viewBox: '0 0 634.33 703.22',
  d: [
    'M105.74,79.59c131.91-116.91,374.05-91.53,415-6c40.28,84.12-131.75,189.49-93,321 c35.66,121.03,210.49,130.64,206,187c-5.8,72.81-308.74,198.14-495,57C-28.55,511.83-44.96,213.15,105.74,79.59z',
    'M105.68,79.58c114.47-95,319.89-86.34,376-2c49.62,74.59-49.09,160.89-5,309 c36.65,123.11,129.58,146.57,116,202c-21.61,88.24-291.23,168.26-454,50C-29.72,516.24-48.34,207.4,105.68,79.58z',
  ],
  fill: '#991183',
}

export const Home = () => {
  const classes = useStyles()
  const theme = useTheme()

  const debugButton = (
    x: number,
    y: number,
    label: string,
    right = false,
  ) => (
    <Button
      className={clsx({ [classes.debugRight]: right })}
      variant="contained"
      color="secondary"
      /** move to given grid area */
      onClick={() =>
        document
          .getElementsByClassName(classes.root)[0]
          .setAttribute(
            'style',
            `transform: translate(-${x}vw, -${y}vh);`,
          )
      }
    >
      Move to {label}
    </Button>
  )

  return (
    <main className={classes.root}>
      <section className={clsx(classes.home)}>
        <h1>Home</h1>
        {debugButton(0, 50, 'Profile')}
        {debugButton(200, 0, 'Work')}
        {debugButton(200, 100, 'Contact')}
      </section>

      <section className={clsx(classes.profile)}>
        {debugButton(100, 50, 'Home')}
      </section>

      <section className={clsx(classes.works)}>
        <AnimationSlime className={classes.slime} {...data} />
        {debugButton(100, 50, 'Home', true)}
      </section>

      <section className={clsx(classes.contact)}>
        {debugButton(100, 50, 'Home', true)}
      </section>
    </main>
  )
}
