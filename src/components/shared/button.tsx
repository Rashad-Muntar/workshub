interface Props {
  title: string
  handler?: () => void
  styles?: string
  leftIcon?: string
  rightIcon?: string
}
const Button = ({ title, handler, styles, leftIcon, rightIcon }: Props) => {
  return (
    <div className={`${styles} rounded-lg`}>
      <div className="mr-3 text-xl">{leftIcon}</div>
      <button type="submit" onClick={handler}>
        {title}
      </button>
      <div>{rightIcon}</div>
    </div>
  )
}

export default Button
