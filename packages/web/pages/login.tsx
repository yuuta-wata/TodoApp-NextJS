import { useState } from 'react'

import { useLoginMutation } from '../graphql/generated/graphql'

export default function Login() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [login, { error, loading }] = useLoginMutation()

  return (
    <form
      onSubmit={async e => {
        e.preventDefault()
        try {
          await login({
            variables: {
              email,
              password
            }
          })
        } catch {}
      }}
    >
      <h2>ログインページ</h2>
      <input
        placeholder='Eメール'
        autoCapitalize='none'
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        placeholder='パスワード'
        autoCapitalize='none'
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button title='ログイン' type='submit'>
        ログイン
      </button>
      {error && <div>Error...</div>}
      {loading && <div>Loading...</div>}
    </form>
  )
}
