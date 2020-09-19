import { type } from 'os'

export interface StateProps {
  isLoading: boolean
  testObservable: string
}

export interface DispatchProps {
  changeEmail: (email: string) => any
  changePassword: (password: string) => any
  onFinish: () => any
  onPush: () => any
}

export type Props = StateProps & DispatchProps
