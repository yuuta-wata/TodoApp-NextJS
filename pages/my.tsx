import Head from 'next/head'
import Link from 'next/link'

export default function My() {
  return (
    <div>
      <Head>
        <title>マイページ</title>
      </Head>
      <Link href='/home'>
        <a>ホームへ戻る</a>
      </Link>
      <style jsx>{`
        
      `}</style>
    </div>
  )
}