import { useState } from 'react'

import { useRegisterMutation } from '../graphql/generated/graphql'

export default function Register() {
  const [nickName, setNickName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [register, { error, loading }] = useRegisterMutation()

  return (
    <form
      onSubmit={async e => {
        e.preventDefault()
        try {
          await register({
            variables: {
              nickname: nickName,
              email,
              password
            }
          })
        } catch {}
      }}
    >
      <h2>新規登録ページ</h2>
      <input
        placeholder='ニックネーム'
        autoCapitalize='none'
        value={nickName}
        onChange={e => setNickName(e.target.value)}
      />
      <input
        type='email'
        placeholder='Eメール'
        autoCapitalize='none'
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type='password'
        placeholder='パスワード'
        autoCapitalize='none'
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button title='登録' type='submit'>
        登録
      </button>
      {error && <div>Error...</div>}
      {loading && <div>Loading...</div>}
    </form>
  )
}
