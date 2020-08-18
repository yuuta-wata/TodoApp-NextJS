import Link from 'next/link'

import TimeLineCell from '../components/TimeLineCell'
import { initializeApollo } from '../lib/apollo'
import {
  AllTodoListDocument,
  useAllTodoListQuery
} from '../graphql/generated/graphql'

export const getServerSideProps = async () => {
  const apolloClient = initializeApollo()
  await apolloClient.query({
    query: AllTodoListDocument
  })
  return {
    props: {
      initialApolloState: apolloClient.cache.extract()
    }
  }
}

export default function Home() {
  const { data } = useAllTodoListQuery()
  return (
    <div className='container'>
      <main>
        <div style={{ display: 'flex', width: '50%' }}>
          <Link href='/'>
            <a className='return-toppage'>Topへ戻る</a>
          </Link>
          <Link href='/my'>
            <a className='return-mypage'>マイページ</a>
          </Link>
        </div>
        <div className='time-line'>
          {data.allTodoList &&
            data.allTodoList.map(todo => (
              <TimeLineCell
                nickName={todo.userId}
                todoTitle={todo.title}
                key={todo.id}
              />
            ))}
        </div>
      </main>
      <style jsx>{`
        .container {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        main {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .return-toppage {
          width: 50%;
          text-align: left;
        }

        .return-mypage {
          width: 50%;
          text-align: right;
        }

        .time-line {
          width: 30%;
        }
      `}</style>
    </div>
  )
}
