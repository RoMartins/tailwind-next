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
  files: File[]
  onFilesSelected: (file: File[], multiple: boolean) => void
  removeFile: (file: File) => void
}

const FileInputContext = createContext({} as FileInputContextProps)

export type RootProps = ComponentProps<'div'>

export function Root(props: RootProps) {
  const id = useId()
  const [files, setFiles] = useState<File[]>([])

  function onFilesSelected(files: File[], multiple: boolean) {
    if (multiple) {
      setFiles((prevState) => [...prevState, ...files])
    } else {
      setFiles(files)
    }
  }

  function removeFile(file: File) {
    const newFiles = files.filter((item) => item.name !== file.name)
    setFiles(newFiles)
  }

  return (
    <FileInputContext.Provider
      value={{ id, files, onFilesSelected, removeFile }}
    >
      <div {...props} />
    </FileInputContext.Provider>
  )
}

export const useFileInputContext = () => useContext(FileInputContext)
