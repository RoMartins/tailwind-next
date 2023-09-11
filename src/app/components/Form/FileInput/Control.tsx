'use client'

import { ChangeEvent, ComponentProps } from 'react'
import { useFileInputContext } from './Root'

type ControlProps = ComponentProps<'input'>

export function Control({ multiple = false, ...props }: ControlProps) {
  const { id, onFilesSelected } = useFileInputContext()

  function handleFilesSelected(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files?.length) {
      return
    }

    const files = Array.from(event.target.files)

    onFilesSelected(files, multiple)
  }

  return (
    <input
      {...props}
      type="file"
      className="sr-only"
      id={id}
      multiple={multiple}
      onChange={handleFilesSelected}
    />
  )
}
