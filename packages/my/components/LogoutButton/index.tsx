interface Props {
  onPress: () => any
}

export const LogoutButton = ({ onPress }: Props) => (
  <button type='button' onClick={onPress}>
    ログアウト
  </button>
)
