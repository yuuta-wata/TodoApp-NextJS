import { StateProps } from '../../LoginForm/type'

export const propsSelector = (state: any): StateProps => {
  console.log('state:', state.login)
  return {
    isLoading: false,
    testObservable: state.login.test
  }
}
