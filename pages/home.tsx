import Link from 'next/link'
import { InferGetServerSidePropsType } from 'next'

import TimeLineCell from '../components/TimeLineCell'

type userData = {
    id: string
    nickName: string
    todoList: {
      id: string
      item: string
    }[]
  }[]

export const getServerSideProps = async () => {
  const json = JSON.stringify(require('../json/data.json'))
  const fetchUserData: userData = JSON.parse(json)
  return {
    props: {
      data: fetchUserData
    }
  }
}

export default function Home({data}: InferGetServerSidePropsType<typeof getServerSideProps> ) {
  return (
    <div className='container'>
      <main>
        <div style={{display: 'flex', width: '50%'}}>
          <Link href='/'>
            <a className='return-toppage'>Topへ戻る</a>
          </Link>
          <Link　href='/my'>
            <a className='return-mypage'>マイページ</a>
          </Link>
        </div>
        <div className='time-line'>
          {data.map(user => (
            <TimeLineCell nickName={user.nickName} todoList={user.todoList} key={user.id} />
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
