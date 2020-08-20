import { useState } from 'react'

import { useLoginMutation } from '../graphql/generated/graphql'
import { LoginForm } from '../components/LoginForm'

export default function Login() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [login, { error, loading }] = useLoginMutation()

  return (
    <>
      <LoginForm
        emailValue={email}
        emailEvent={e => setEmail(e.target.value)}
        passwordValue={password}
        passwordEvent={e => setPassword(e.target.value)}
        buttonPress={async () => {
          try {
            await login({ variables: { email, password } })
            setEmail('')
            setPassword('')
          } catch {}
        }}
        isLoading={loading}
      />
      {error && <div>Error...</div>}
      {loading && <div>Loading...</div>}
    </>
  )
}
