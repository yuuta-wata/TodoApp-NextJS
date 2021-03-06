import { useState } from 'react'
import { Layout, Space } from 'antd'
import { useRouter } from 'next/router'

import { useRegisterMutation } from '../graphql/generated/graphql'
import { RegisterForm } from '../components/RegisterForm'

export default function Register() {
  const { Header, Content } = Layout
  const [nickName, setNickName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const [register, { error, loading }] = useRegisterMutation()
  const router = useRouter()

  console.log('nickName:', nickName)

  return (
    <Layout style={{ height: '100vh' }}>
      <Header>
        <h1 style={{ color: 'white' }}>新規登録</h1>
      </Header>
      <Content
        style={{
          height: '100%',
          width: '100%',
          justifyContent: 'center',
          display: 'flex'
        }}
      >
        <Space direction='vertical' style={{ width: 500, marginTop: 100 }}>
          <RegisterForm
            nickNameEvent={eventValue => setNickName(eventValue)}
            emailEvent={eventValue => setEmail(eventValue)}
            passwordEvent={eventValue => setPassword(eventValue)}
            onFinish={async () => {
              try {
                await register({
                  variables: { nickname: nickName, email, password }
                })
                router.push('/login')
              } catch {}
            }}
            isLoading={loading}
          />
          {error && <div>Error...</div>}
          {loading && <div>Loading...</div>}
        </Space>
      </Content>
    </Layout>
  )
}
