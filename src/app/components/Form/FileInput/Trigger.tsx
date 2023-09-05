import { UploadCloud } from 'lucide-react'

export function Trigger() {
  return (
    <label
      htmlFor="photo"
      className=" group flex flex-1 cursor-pointer flex-col items-center gap-3 rounded-lg border border-zinc-300  px-6 py-4 text-center text-zinc-500 shadow-sm hover:border-violet-200 hover:bg-violet-50"
    >
      <div className="rounded-full border-6 border-zinc-100 bg-zinc-50 p-2 group-hover:border-violet-50 group-hover:bg-violet-100">
        <UploadCloud className="h-5 w-5 text-zinc-600 group-hover:text-violet-600" />
      </div>

      <div className="flex flex-col gap-1">
        <span className="text-sm">
          <span className="font-semibold text-violet-700">Click to upload</span>{' '}
          or drag and drop
        </span>
        <span className="text-xs">SVG, PNG, JPG or GIF (max. 800x400px)</span>
      </div>
    </label>
  )
}
