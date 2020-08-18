import Head from 'next/head'
import Link from 'next/link'

export default function Top() {
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
          <p>TodoアプリNext版へようこそ！</p>
          <p>ログインしてご利用頂けます</p>
          <Link href='/login'>
            <a style={{ marginBottom: 10, color: 'blue' }}>ログインする</a>
          </Link>
          <p>
            アカウントをお持ちでない方は
            <Link href='/register'>
              <a style={{ marginBottom: 10, color: 'blue' }}>こちら</a>
            </Link>
          </p>
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
