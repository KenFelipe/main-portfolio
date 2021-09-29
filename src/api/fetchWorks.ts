import { gql } from '@apollo/client'
import { client } from '@/api/client'
import { WorkPanelProps } from '@/organisms/WorkPanel/WorkPanel'

export type Work = {
  title: string
  slug: string
  url: string
  thumbnail: {
    url: string
  }
  github: string
}

export const WORKS_QY = gql`
  query works {
    worksCollection {
      items {
        title
        slug
        url
        thumbnail {
          url
        }
        github
      }
    }
  }
`

export const fetchWorks = async () => {
  const res = await client.query({
    query: WORKS_QY,
  })

  const works: WorkPanelProps[] = res.data.worksCollection.items.map(
    (work: Work) => ({
      image: work.thumbnail.url,
      description: `thumbnail of ${work.title}`,
      webpage: work.url,
      github: work.github,
      details: `/work/${work.slug}`,
    }),
  )

  return works
}
