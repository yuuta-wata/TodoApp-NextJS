import { useState } from 'react'
import { useRouter } from 'next/router'

import { useLoginMutation } from '../graphql/generated/graphql'
import { LoginForm } from '../components/LoginForm'

export default function Login() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const [login, { error, loading }] = useLoginMutation()
  const router = useRouter()

  return (
    <>
      <h2>ログイン</h2>
      <LoginForm
        emailValue={email}
        emailEvent={e => setEmail(e.target.value)}
        passwordValue={password}
        passwordEvent={e => setPassword(e.target.value)}
        onClick={async () => {
          try {
            await login({ variables: { email, password } })
            window.location.replace('http://localhost:3001/my')
          } catch {}
        }}
        isLoading={loading}
      />
      {error && <div>Error...</div>}
      {loading && <div>Loading...</div>}
    </>
  )
}
