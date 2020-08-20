import { useState } from 'react'
import { useRouter } from 'next/router'

import { useRegisterMutation } from '../graphql/generated/graphql'
import { RegisterForm } from '../components/RegisterForm'

export default function Register() {
  const [nickName, setNickName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const [register, { error, loading }] = useRegisterMutation()
  const router = useRouter()

  return (
    <>
      <h2>新規登録</h2>
      <RegisterForm
        nickNameValue={nickName}
        nickNameEvent={e => setNickName(e.target.value)}
        emailValue={email}
        emailEvent={e => setEmail(e.target.value)}
        passwordValue={password}
        passwordEvent={e => setPassword(e.target.value)}
        buttonPress={async () => {
          try {
            await register({
              variables: { nickname: nickName, email, password }
            })
            router.replace('/login')
          } catch {}
        }}
        isLoading={loading}
      />
      {error && <div>Error...</div>}
      {loading && <div>Loading...</div>}
    </>
  )
}
