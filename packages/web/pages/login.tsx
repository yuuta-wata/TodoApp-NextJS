import { useState } from 'react'
import { View } from 'react-native'
import { useRouter } from 'next/router'

import { useLoginMutation } from '../graphql/generated/graphql'

export default function Login() {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [loginMutation] = useLoginMutation()
  const router = useRouter()
  return (
    <View>
      <form onSubmit={async event => {
        event.preventDefault()

        try {
          await loginMutation({
            variables: {
              email: email,
              password: password
            }
          })
          router.replace('/home')
        } catch { }
      }} >
        <input placeholder="Eメール" value={email} onChange={event => setEmail(event.target.value)} />
        <input placeholder="パスワード" value={password} onChange={event => setPassword(event.target.value)} />
        <button type="submit">ログイン</button>
      </form>
    </View>
  )
}