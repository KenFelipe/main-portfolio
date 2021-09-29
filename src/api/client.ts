import {
  ApolloClient,
  InMemoryCache,
  // ApolloProvider,
  // useQuery,
  // gql,
} from '@apollo/client'

export const client = new ApolloClient({
  // uri: process.env.NEXT_PUBLIC_CONTENTFUL_API_URI,
  uri: process.env.CONTENTFUL_API_URI,
  cache: new InMemoryCache(),
})
