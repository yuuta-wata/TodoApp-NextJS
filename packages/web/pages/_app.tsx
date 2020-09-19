import { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { ApolloProvider } from '@apollo/react-hooks'

import { store } from '../redux/store'
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
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ApolloProvider>
  )
}
