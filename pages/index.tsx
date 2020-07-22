import Head from 'next/head'
import { InferGetStaticPropsType } from 'next'
import Link from 'next/link'

type userData = {
  id: string;
  nickName: string;
  todoList: {
      id: string;
      item: string;
  }[];
}[]

export const getStaticProps = async () => {
  const json = JSON.stringify(require('../json/data.json'))
  const fetchUserData: userData = JSON.parse(json)
  return {
    props: {
      data: fetchUserData.slice(0, 5)
    }
  }
}

export default function Top({data}: InferGetStaticPropsType<typeof getStaticProps>) {
  

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
            <a>見にいく！！！</a>
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

