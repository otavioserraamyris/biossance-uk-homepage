import { classes } from './styles'
import type { IText } from './typingHelper'

const Headline = (
  {
    id,
    textType,
    textTypeVariation,
    className,
    children
  }: IText
): JSX.Element => {
  const mainClass = classes[textType as keyof typeof classes]
  const secondaryClass = mainClass[textTypeVariation as keyof typeof mainClass]

  return (
    <h1
      id={id}
      className={`${mainClass.text} ${textTypeVariation ? secondaryClass : ''} ${className ?? ''}`}
    >
      {children}
    </h1>
  )
}

const SubHeadline = (
  {
    id,
    textType,
    textTypeVariation,
    className,
    children
  }: IText
): JSX.Element => {
  const mainClass = classes[textType as keyof typeof classes]
  const secondaryClass = mainClass[textTypeVariation as keyof typeof mainClass]

  return (
    <h2
      id={id}
      className={`${mainClass.text} ${textTypeVariation ? secondaryClass : ''} ${className ?? ''}`}
    >
      {children}
    </h2>
  )
}

const Paragraph = (
  {
    id,
    textType,
    textTypeVariation,
    className,
    children
  }: IText
): JSX.Element => {
  const mainClass = classes[textType as keyof typeof classes]
  const secondaryClass = mainClass[textTypeVariation as keyof typeof mainClass]

  return (
    <p
      id={id}
      className={`${mainClass.text} ${textTypeVariation ? secondaryClass : ''} ${className ?? ''}`}
    >
      {children}
    </p>
  )
}

export const Text = (
  {
    id,
    textType,
    textTypeVariation,
    className,
    children
  }: IText,
): JSX.Element => {

  return (
    <div
      className={classes[textType as keyof typeof classes].wrapper}
    >
      {textType === 'headline' &&
        <Headline
          id={id}
          textType={textType}
          textTypeVariation={textTypeVariation}
          className={className}
        >
          {children}
        </Headline>
      }
      {textType === 'subheadline' &&
        <SubHeadline
          id={id}
          textType={textType}
          textTypeVariation={textTypeVariation}
          className={className}
        >
          {children}
        </SubHeadline>
      }
      {textType === 'paragraph' &&
        <Paragraph
          id={id}
          textType={textType}
          textTypeVariation={textTypeVariation}
          className={className}
        >
          {children}
        </Paragraph>
      }
    </div>
  )
}
