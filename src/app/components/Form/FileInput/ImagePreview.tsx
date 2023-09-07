'use client'
import { User } from 'lucide-react'
import { useFileInputContext } from './Root'
import { useMemo } from 'react'

export function ImagePreview() {
  const { file } = useFileInputContext()

  const previewUrl = useMemo(() => {
    if (file.length === 0) {
      return null
    }

    return URL.createObjectURL(file[0])
  }, [file])

  if (previewUrl === null) {
    return (
      <div className="flex  items-center justify-center rounded-full bg-violet-50">
        <User className="h-8 w-8 text-violet-500" />
      </div>
    )
  } else {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={previewUrl}
        alt=""
        className="h-16 w-16 rounded-full object-cover"
      />
    )
  }
}
