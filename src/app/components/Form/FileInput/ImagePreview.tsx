'use client'
import { User } from 'lucide-react'
import { useFileInputContext } from './Root'
import { useMemo } from 'react'
import { useAutoAnimate } from '@formkit/auto-animate/react'

export function ImagePreview() {
  const { files } = useFileInputContext()
  const [parent] = useAutoAnimate()

  const previewUrl = useMemo(() => {
    if (files.length === 0) {
      return null
    }

    return URL.createObjectURL(files[0])
  }, [files])

  if (previewUrl === null) {
    return (
      <div className="flex h-16 w-16  items-center justify-center rounded-full bg-violet-50">
        <User className="h-8 w-8 text-violet-500" />
      </div>
    )
  } else {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        ref={parent}
        src={previewUrl}
        alt=""
        className="h-16 w-16 rounded-full object-cover"
      />
    )
  }
}
