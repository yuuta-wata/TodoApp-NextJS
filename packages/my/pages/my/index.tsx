import { useState } from 'react'
import { Header } from '@todo/common'

import {
  useMeQuery,
  useCreateTodoMutation,
  useGetTodoListQuery,
  useLogOutMutation
} from '../../graphql/generated/graphql'

import { LogoutButton } from '../../components/LogoutButton'

export default function MyPage() {
  const [task, setTask] = useState<string>('')

  const {
    data: myData,
    loading: myDataLoading,
    error: myDataError
  } = useMeQuery()

  const [
    createTodo,
    { loading: todoLoading, error: todoError }
  ] = useCreateTodoMutation()

  const {
    data: todoList,
    loading: todoListLoading,
    error: todoListError
  } = useGetTodoListQuery({ pollInterval: 1000 })

  const [logout] = useLogOutMutation()

  if (myDataError) return <div>再度ログインしてください</div>

  if (myDataLoading) return <div>Loading...</div>

  return (
    <div>
      <Header
        children={
          <LogoutButton
            onPress={() => {
              logout()
            }}
          />
        }
      />
      <h2>マイページ</h2>
      {myData && myData.me ? (
        <div>ようこそ！{`${myData.me.nickname}さん！`}</div>
      ) : (
        <div>データがありません</div>
      )}
      <div>
        {todoError && (
          <p style={{ color: 'red' }}>タスクを追加出来ませんでした</p>
        )}
        <input
          placeholder='タスク'
          value={task}
          onChange={e => setTask(e.target.value)}
        />
        <button
          type='button'
          onClick={async () => {
            try {
              await createTodo({
                variables: {
                  title: task
                }
              })
              setTask('')
            } catch {}
          }}
          disabled={todoLoading}
        >
          {todoLoading ? 'Loading...' : 'TODO!!!'}
        </button>
      </div>
      <div>
        {todoListLoading && <p>Loading...</p>}
        {todoListError && <p>Error...</p>}
        {todoList && todoList.getTodoList
          ? todoList.getTodoList.map(list => {
              if (!list) return <p>Error...</p>
              return <p key={list.id}>{list.title}</p>
            })
          : null}
      </div>
    </div>
  )
}
