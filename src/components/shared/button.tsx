import { Button } from '@chakra-ui/react'

interface Props {
  title?: string
  handler?: () => void
  styles?: string
  leftIcon?: string | undefined
  rightIcon?: string
  size?: string
  variant?: string
  margin?: string
  color?: string
}
const Customebutton = ({
  color,
  // margin,
  size,
  variant,
  title,
  handler,
  styles,
  leftIcon,
  rightIcon,
}: Props) => {
  console.log(typeof leftIcon)
  return (
    <div className={styles}>
      <Button
        color={color}
        variant={variant}
        size={size}
        onClick={handler}
        // w="100%"
      >
        {leftIcon && <div className="mr-1 text-[16px] text-xl">{leftIcon}</div>}
        {title}
        {rightIcon && <div>{rightIcon}</div>}
      </Button>
    </div>
  )
}

export default Customebutton
