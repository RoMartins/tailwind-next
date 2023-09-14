'use client'

import * as SelectPrimitive from '@radix-ui/react-select'
import { ChevronDown, Clock, MapPin } from 'lucide-react'
import { ReactNode } from 'react'

export interface SelectProps extends SelectPrimitive.SelectProps {
  children: ReactNode
  placeholder: string
  iconType?: 'location' | 'clock'
}

export function Select({
  children,
  placeholder,
  iconType,
  ...props
}: SelectProps) {
  return (
    <SelectPrimitive.Root {...props}>
      <SelectPrimitive.Trigger className="flex h-11  w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm outline-none focus:border-violet-300 focus:ring-4 focus:ring-violet-100 data-[placeholder]:text-zinc-600">
        <div className="flex items-center gap-2">
          <SelectPrimitive.Icon>
            {iconType === 'location' ? (
              <MapPin className=" h-5 w-5 to-zinc-500" />
            ) : iconType === 'clock' ? (
              <Clock className=" h-5 w-5 to-zinc-500" />
            ) : (
              <div className="hidden" />
            )}
          </SelectPrimitive.Icon>

          <SelectPrimitive.Value
            placeholder={placeholder}
            className="text-black"
          />
        </div>
        <SelectPrimitive.Icon>
          <ChevronDown className="h-5 w-5 to-zinc-500" />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          side="bottom"
          position="popper"
          className="animate-slideDownAndFade z-10 w-[--radix-select-trigger-width] overflow-hidden rounded-lg border border-zinc-300 bg-white"
          sideOffset={8}
        >
          <SelectPrimitive.Viewport>{children}</SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  )
}
