import { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

export type ButtonProps = ComponentProps<'button'>

const button = tv({
  base: [
    'rounded-lg shadow-sm outline-none px-4 py-2 text-sm font-semibold',
    'focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-violet-500',
    'active: opaciti-80',
  ],
})

export function Button(props: ButtonProps) {
  return <button {...props} className={button()} />
}
