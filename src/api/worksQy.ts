import { gql } from '@apollo/client'

export const WORKS_QY = gql`
  query A {
    worksCollection {
      items {
        title
        slug
        github
        thumbnail {
          title
          description
          contentType
          fileName
          size
          url
          width
          height
        }
      }
    }
  }
`
