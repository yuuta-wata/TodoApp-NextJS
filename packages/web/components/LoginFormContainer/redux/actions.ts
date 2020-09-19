import {
  ChangeUserEmail,
  ChangeUserPassword,
  TestPushAction
} from '../../../redux/modules/login/actions'

export const changeEmail = (email: string) => ChangeUserEmail(email)

export const changePassword = (password: string) => ChangeUserPassword(password)

export const onFinish = () => {
  console.log('onFinish!!!')
}

export const onPush = () => TestPushAction()
