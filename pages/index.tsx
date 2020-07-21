import Head from 'next/head'
import { GetStaticProps } from 'next'
import Link from 'next/link'

import { DemoDate } from '../demoDate'

interface Props {
  date: {
    id: string
    nickName: string
    todoList: {
      id: string
      item: string
    }[]
  }[]
}

export default function Top(props: Props) {
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
        <div style={{ flexDirection: 'column', width: '50%' }}>
          {props.date.map(user => (
            <div
              style={{
                flexDirection: 'row',
                display: 'flex',
                marginBottom: 10
              }}
            >
              <div style={{ display: 'flex', width: '20%' }}>
                {user.nickName}
              </div>
              <div
                style={{
                  flexDirection: 'column',
                  display: 'flex',
                  width: '50%'
                }}
                key={user.id}
              >
                {user.todoList.map(({ id, item }) => (
                  <div key={id}>{item}</div>
                ))}
              </div>
            </div>
          ))}
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

export const getStaticProps: GetStaticProps = async () => {
  const sliceDate = DemoDate.slice(0, 5)
  return {
    props: {
      date: sliceDate
    }
  }
}
