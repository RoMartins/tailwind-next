'use client'

import { useFileInputContext } from './Root'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { FileItem } from './FileItem'

export function FileList() {
  const { files } = useFileInputContext()
  const [parent] = useAutoAnimate()

  return (
    <div ref={parent} className="mt-4 space-y-3 ">
      {files.map((file) => {
        return (
          <FileItem
            file={file}
            name={file.name}
            size={file.size}
            key={file.name}
            state="progress"
          />
        )
      })}
    </div>
  )
}
