import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'

import * as Action from './redux/actions'
import { propsSelector } from './redux/selector'

import { LoginForm } from '../LoginForm'

const mapStateToProps = (state: any) => propsSelector(state)

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(Action, dispatch)

export const LoginFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm)
