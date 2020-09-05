import { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/react-hooks'
import { useApollo } from '../lib/apollo'
import 'antd/dist/antd.css'

export default function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState)

  fetch('http://localhost:4000/refresh_token/', {
    method: 'POST',
    credentials: 'include'
  })

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
