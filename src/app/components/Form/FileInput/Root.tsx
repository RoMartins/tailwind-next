'use client'

import {
  ComponentProps,
  createContext,
  useContext,
  useId,
  useState,
} from 'react'

type FileInputContextProps = {
  id: string
  file: File[]
  onFilesSelected: (file: File[]) => void
}

const FileInputContext = createContext({} as FileInputContextProps)

export type RootProps = ComponentProps<'div'>

export function Root(props: RootProps) {
  const id = useId()
  const [file, setFiles] = useState<File[]>([])

  return (
    <FileInputContext.Provider value={{ id, file, onFilesSelected: setFiles }}>
      <div {...props} />
    </FileInputContext.Provider>
  )
}

export const useFileInputContext = () => useContext(FileInputContext)
