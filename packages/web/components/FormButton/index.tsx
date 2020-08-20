import { type } from 'os'

export interface Props {
  type: 'button' | 'submit' | 'reset'
  title: string
  onPress: () => any
}

export const FormButton = ({ type, title, onPress }: Props) => (
  <button type={type} onClick={onPress}>
    {title}
  </button>
)
