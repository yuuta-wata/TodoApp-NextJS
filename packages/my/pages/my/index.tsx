import { useMeQuery } from '../../graphql/generated/graphql'

export default function MyPage() {
  const { data, loading, error } = useMeQuery()

  if (error) return <div>再度ログインしてください</div>

  if (loading) return <div>Loading...</div>

  return (
    <div>
      <h2>マイページ</h2>
      {data && data.me ? (
        <div>ようこそ！{`${data.me.nickname}さん！`}</div>
      ) : (
        <div>データがありません</div>
      )}
    </div>
  )
}
