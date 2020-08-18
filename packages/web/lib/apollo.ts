import { useMemo } from 'react'
import { ApolloClient } from 'apollo-client'
import { NormalizedCacheObject, InMemoryCache } from 'apollo-cache-inmemory'
import { onError } from 'apollo-link-error'
import { createHttpLink } from 'apollo-link-http'

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined | any

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql',
  credentials: 'include'
})

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) => {
      console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
    })
  }

  if (networkError) console.log(`[Network error]: ${networkError}`)
})

const createApolloClient = () => {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    cache: new InMemoryCache(),
    link: errorLink.concat(httpLink)
  })
}

export const initializeApollo = (initialState?: NormalizedCacheObject) => {
  const _apolloClient = apolloClient ?? createApolloClient()

  if (initialState) {
    _apolloClient.cache.restore(initialState)
  }
  // SSG又はSSRの場合はapolloClientを初期化
  if (typeof window === 'undefined') return _apolloClient

  if (!apolloClient) apolloClient = _apolloClient

  return _apolloClient

}

export const useApollo = (initialState: NormalizedCacheObject) => {
  const store = useMemo(() => initializeApollo(initialState), [initialState])
  return store
}