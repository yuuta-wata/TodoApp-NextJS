import { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/react-hooks'
import { useApollo } from '../lib/apollo'
import { useEffect } from 'react'

export default function App({ Component, pageProps, router }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState)

  fetch('http://localhost:4000/refresh_token/', {
    method: 'POST',
    credentials: 'include'
  })

  // useEffect(() => {
  //   fetch('http://localhost:4000/graphql/', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Accept: 'application/json'
  //     },
  //     body: JSON.stringify({ query: '{me: {id: 1}}' })
  //   }).then(res => {
  //     if (!res.ok) {
  //       router.replace('/')
  //     }
  //   })
  // }, [router.query])

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
