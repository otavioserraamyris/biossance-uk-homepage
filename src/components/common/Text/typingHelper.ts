export interface IText {
  id?: string,
  textType: string | object,
  textTypeVariation?: string,
  className?: string,
  children: JSX.Element | string
}
