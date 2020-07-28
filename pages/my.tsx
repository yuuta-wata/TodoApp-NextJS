import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps } from 'next'

import { initializeApollo } from '../lib/apollo'
import { MeDocument, useMeQuery } from '../graphql/generated/graphql'

// export const getServerSideProps = async () => {
//   const apolloClient = initializeApollo()

//   await apolloClient.query({
//     query: MeDocument
//   })
//   return {
//     props: {
//       initialApolloState: apolloClient.cache.extract()
//     }
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
  if (typeof data === 'undefined') {
    return (
      <div>
        <Link href='/'>
          <a>Topページへ戻る</a>
        </Link>
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
      <div>{data.me && data.me.nickname}</div>
      <style jsx>{`
        
      `}</style>
    </div>
  )
}