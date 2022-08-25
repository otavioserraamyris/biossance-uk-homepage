import { classes } from './styles'
import type { IButton } from './typingHelper'

export const Button = (
  { id, buttonType, text, type, disabled, className }: IButton
): JSX.Element => {

  return (
    <button
      id={id}
      type={type}
      onClick={() => { }}
      disabled={disabled}
      className={`${classes[buttonType as keyof typeof classes]?.button} ${className ?? ''}`}
    >
      {text}
    </button>
  )
}
