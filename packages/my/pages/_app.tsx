import { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/react-hooks'
import 'antd/dist/antd.css'

import { useApollo } from '../lib/apollo'

export default function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState)

  fetch('http://localhost:4000/refresh_token/', {
    method: 'POST',
    credentials: 'include'
  }).then(response => {
    if (!response.ok) {
      window.location.replace('http://localhost:3000')
    }
  })

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
