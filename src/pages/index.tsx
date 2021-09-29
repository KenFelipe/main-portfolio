import Head from 'next/head'
import { GetStaticProps } from 'next'
import { Home } from '@/templates/Home/Home'
import { WorkPanelProps } from '@/organisms/WorkPanel/WorkPanel'
import { fetchWorks } from '@/api/fetchWorks'

export type IndexProps = {
  works: WorkPanelProps[]
}

const Index = ({ works }: IndexProps) => {
  return (
    <>
      <Head>
        <title>Main Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Home works={works} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const works = await fetchWorks()

  return {
    // will be passed to the page component as props
    props: {
      works,
    },
  }
}

export default Index
