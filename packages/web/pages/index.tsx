import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

export default function Top() {
  const [pageName, setPageName] = useState<string | undefined>(undefined)

  return (
    <div className='container'>
      <Head>
        <title>Todo App</title>
      </Head>
      <main>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '50%',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <p>TodoアプリNext.jsバージョンへようこそ！</p>
          <p>
            Next.jsバージョンでは皆んなのTodoがタイムラインで見ることが出来ます。
          </p>
          <Link href='/home'>
            <a style={{ marginBottom: 10 }}>見にいく！！！</a>
          </Link>
          <p>homeかmyを押すと動的ルートテストボタンが押せます。</p>
          <button onClick={() => setPageName('home')}>home</button>
          <button onClick={() => setPageName('my')}>my</button>
          <Link href='/[pid]' as={`${pageName}`}>
            <button disabled={!pageName ? true : false}>{`動的ルートテスト(${pageName})`}</button>
          </Link>
        </div>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
        }

        main {
          flex: 1;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

