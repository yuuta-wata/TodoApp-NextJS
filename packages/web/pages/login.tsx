import { useState } from 'react'
import { Layout, Space } from 'antd'

import { useLoginMutation } from '../graphql/generated/graphql'
import { LoginForm } from '../components/LoginForm'
import { LoginFormContainer } from '../components/LoginFormContainer'

export default function Login() {
  const { Header, Content } = Layout
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const [login, { error, loading }] = useLoginMutation()

  return (
    <Layout style={{ height: '100vh' }}>
      <Header>
        <h1 style={{ color: 'white' }}>ログイン</h1>
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
          {/* <LoginForm
            emailEvent={eventValue => setEmail(eventValue)}
            passwordEvent={eventValue => setPassword(eventValue)}
            onFinish={async () => {
              try {
                await login({ variables: { email, password } })
                window.location.replace('http://localhost:3001/my')
              } catch {}
            }}
            isLoading={loading}
          /> */}
          <LoginFormContainer />
          {error && <div>Error...</div>}
          {loading && <div>Loading...</div>}
        </Space>
      </Content>
    </Layout>
  )
}
