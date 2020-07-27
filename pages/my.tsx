import Head from 'next/head'
import Link from 'next/link'

import { initializeApollo } from '../lib/apollo'
import { MeDocument, useMeQuery } from '../graphql/generated/graphql'

// export const getStaticPaths = async () => {
//   const apolloClient = initializeApollo()
//   const res = await apolloClient.query({
//     query: MeDocument
//   })

//   return {
//     props: {
//       initialApolloState: apolloClient.cache.extract()
//     },
//     fallback: res ? false : true
//   }
// }

export default function My() {
  const { data, loading, error } = useMeQuery()

  if (error) {
    const errorMessage = error.graphQLErrors.map(x => x.message)
    return (
      <div>
        <Link href='/'>
          <a>Topページへ戻る</a>
        </Link>
        <div>{errorMessage[0]['message']}</div>
      </div>
    )
  }
  return (
    <div>
      <Head>
        <title>マイページ</title>
      </Head>
      <Link href='/home'>
        <a>ホームへ戻る</a>
      </Link>
      <p>This is MyPaeg !!!!</p>
      <style jsx>{`
        
      `}</style>
    </div>
  )
}