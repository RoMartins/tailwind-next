import { formatBytes } from '@/app/utils/formatBytes'
import { Button } from '../../Button'
import { CheckCircle2, Trash2, UploadCloud } from 'lucide-react'
import { useFileInputContext } from './Root'
import { VariantProps, tv } from 'tailwind-variants'

const fileItem = tv({
  slots: {
    container: 'flex items-start gap-4 rounded-lg border border-zinc-200 p-4',
    icon: 'rounded-full border-4 border-violet-100 bg-violet-200 p-2 text-violet-600',
    deleteButton: '',
  },

  variants: {
    state: {
      progress: {
        container: '',
      },
      error: {
        container: ' bg-error-25 border-error-300',
        icon: 'border-error-50 bg-error-100 text-error-600',
        deleteButton: 'text-error-700 hover:text-error-700',
      },
      complete: {
        container: 'border-violet-500',
      },
    },
  },
})
interface FileItemProps extends VariantProps<typeof fileItem> {
  name: string
  size: number
  file: File
}

export function FileItem({ name, size, file, state }: FileItemProps) {
  const { removeFile } = useFileInputContext()
  const { container, icon, deleteButton } = fileItem({ state })

  return (
    <div key={name} className={container()}>
      <div className={icon()}>
        <UploadCloud className="h-4 w-4" />
      </div>
      {state === 'error' ? (
        <div className="flex flex-1 flex-col items-start gap-1">
          <div className="flex flex-col items-start">
            <span className="text-error-700 text-sm font-medium">
              Uplload failed, please try again.
            </span>
            <span className="text-error-600 text-sm">{name}</span>
          </div>
          <button
            type="button"
            className="text-sm font-semibold text-red-700 hover:text-red-900"
          >
            Try again
          </button>
        </div>
      ) : (
        <div className="flex flex-1 flex-col items-start gap-1">
          <div className="flex flex-col items-start">
            <span className="text-sm font-medium text-zinc-700">{name}</span>
            <span className="text-sm text-zinc-500">{formatBytes(size)}</span>
          </div>

          <div className="flex w-full items-center gap-3">
            <div className="h-2 flex-1 rounded-full bg-zinc-100">
              <div
                className="h-2  rounded-full bg-violet-600"
                style={{ width: state === 'complete' ? '100%' : '80%' }}
              />
            </div>
            <div className="text-sm">
              {state === 'complete' ? '100%' : '80%'}
            </div>
          </div>
        </div>
      )}

      {state === 'complete' ? (
        <CheckCircle2 className="h-5 w-5 fill-violet-600 text-white" />
      ) : (
        <Button
          variant="ghost"
          type="button"
          className={deleteButton()}
          onClick={() => removeFile(file)}
        >
          <Trash2 className="h-5 w-5" />
        </Button>
      )}
    </div>
  )
}
