'use client'

import * as Select from '@radix-ui/react-select'
import { Check } from 'lucide-react'
export type SelectItemProps = Select.SelectItemProps & {
  option: string
}

export function SelectItem({ option, ...props }: SelectItemProps) {
  return (
    <Select.Item
      {...props}
      className="flex items-center justify-between gap-2 px-3 py-2.5 outline-none data-[highlighted]:bg-zinc-50"
    >
      <Select.ItemText>{option}</Select.ItemText>
      <Select.ItemIndicator>
        <Check className="h-4 w-4 text-violet-500" />
      </Select.ItemIndicator>
    </Select.Item>
  )
}
