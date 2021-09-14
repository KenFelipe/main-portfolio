import Button from '@material-ui/core/Button'
import {
  makeStyles,
  createStyles,
  Theme,
} from '@material-ui/core/styles'

// export type HomeProps = {
// }

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '300vw',
      height: '200vh',
      display: 'grid',
      gridTemplateRows: 'repeat(4, 1fr)',
      gridTemplateColumns: '1fr calc(100vw - 40px * 2) 1fr',
      gridTemplateAreas: `
        ". . works"
        "profile home works"
        "profile home contact"
        ". . contact"
      `,
      position: 'fixed',
      transform: 'translate(-100vw, -50vh)',
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
  }),
)

export const Home = () => {
  const classes = useStyles()

  const debugButton = (x: number, y: number, label: string) => (
    <Button
      variant="outlined"
      color="primary"
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
      <div className={classes.home}>
        <h1>Home</h1>
        {debugButton(0, 50, 'Profile')}
        {debugButton(200, 0, 'Work')}
        {debugButton(200, 100, 'Contact')}
      </div>
      <br />
    </main>
  )
}
