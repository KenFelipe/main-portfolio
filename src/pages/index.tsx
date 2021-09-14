import Head from 'next/head'
import { Home } from '@/templates/Home/Home'
// import Button from '@material-ui/core/Button'

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Main Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Home />
      {/* <main>
        <h1>Next.js</h1>
        <Button variant="contained" color="primary">
          Primary
        </Button>
      </main> */}
    </>
  )
}

export default HomePage
