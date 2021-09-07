import Head from 'next/head'
import Button from '@material-ui/core/Button'

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Main Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Next.js</h1>
        <Button variant="contained" color="primary">
          Primary
        </Button>
      </main>
    </div>
  )
}

export default HomePage
