import Head from 'next/head'

import { Text } from '@/atoms/Text/Text'

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Next Plugin Boilerplate</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Next.js</h1>
        <Text>TextComponent</Text>
      </main>
    </div>
  )
}

export default HomePage
