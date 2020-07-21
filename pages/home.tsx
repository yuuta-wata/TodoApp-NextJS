import Link from 'next/link'
import { GetServerSideProps } from 'next'

import { DemoDate } from '../demoDate'

import TimeLineCell from '../components/TimeLineCell'

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

export default function Home(props: Props) {
  return (
    <div>
      <Link href='/'>
        <a>Topへ戻る</a>
      </Link>
      <main>
        <div className='timeLine'>
          {props.date.map(user => (
            <TimeLineCell nickName={user.nickName} todoList={user.todoList} />
          ))}
        </div>
      </main>
      <style jsx>{``}</style>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = DemoDate
  return {
    props: {
      date: res
    }
  }
}
